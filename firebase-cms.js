import { firestoreDb, firebaseAuth } from "./firebase-client.js";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const ADMIN_UID = "6stDNIpNXGeROiN6tjCz4yBwIAe2";
export const CMS_COLLECTIONS = Object.freeze(["quickCards", "forms", "services", "policies", "adminCards"]);
const clean = value => String(value ?? "").replace(/[\u0000-\u001F\u007F]/g, " ").replace(/<[^>]*>/g, "").trim();
const validId = value => { const id = clean(value); if (!/^[A-Za-z0-9_-]{1,80}$/.test(id)) throw new Error("VALIDATION_ERROR"); return id; };
const requireAdmin = () => { const current = firebaseAuth.currentUser; if (!current || current.uid !== ADMIN_UID) throw new Error("UNAUTHORIZED_ADMIN"); return current; };
const ensureCollection = name => { if (!CMS_COLLECTIONS.includes(name)) throw new Error("UNKNOWN_COLLECTION"); return name; };

function serializableRow(row, create) {
  const id = validId(row.id || row.quickKey || row.formKey || row.serviceKey || row.policyKey || row.adminKey);
  const user = requireAdmin();
  const result = {};
  Object.entries(row).forEach(([key, value]) => {
    if (!["createdAt", "updatedAt", "createdBy", "updatedBy", "__proto__", "constructor", "prototype"].includes(key) && value !== undefined) result[key] = value;
  });
  result.id = id;
  result.updatedAt = serverTimestamp();
  result.updatedBy = user.uid;
  if (create) { result.createdAt = serverTimestamp(); result.createdBy = user.uid; }
  return result;
}

export function subscribeCollection(name, callback, onError) {
  ensureCollection(name);
  return onSnapshot(query(collection(firestoreDb, name), orderBy("sortOrder", "asc")), snapshot => callback(snapshot.docs.map(item => ({ id: item.id, ...item.data() }))), onError);
}
export async function saveCollectionItem(name, row, create) {
  ensureCollection(name);
  const id = validId(row.id || row.quickKey || row.formKey || row.serviceKey || row.policyKey || row.adminKey);
  await setDoc(doc(firestoreDb, name, id), serializableRow(row, Boolean(create)), { merge: !create });
}
export async function removeCollectionItem(name, id) { ensureCollection(name); requireAdmin(); await deleteDoc(doc(firestoreDb, name, validId(id))); }
export async function toggleCollectionItem(name, id, active) { ensureCollection(name); const user = requireAdmin(); await updateDoc(doc(firestoreDb, name, validId(id)), { isActive: Boolean(active), active: Boolean(active), updatedAt: serverTimestamp(), updatedBy: user.uid }); }
export function subscribeToContact(callback, onError) {
  return onSnapshot(doc(firestoreDb, "settings", "contact"), snapshot => callback(snapshot.exists() ? snapshot.data() : null), onError);
}

window.MHR_FIRESTORE_CMS = { CMS_COLLECTIONS, subscribeCollection, saveCollectionItem, removeCollectionItem, toggleCollectionItem, subscribeToContact };
document.dispatchEvent(new CustomEvent("mhr-firestore-cms-ready"));

subscribeToContact(contact => {
  window.MHR_APPLY_SITE_CONTACT?.(contact);
  document.dispatchEvent(new CustomEvent("mhr-firestore-contact-data", { detail: contact }));
}, () => window.MHR_APPLY_SITE_CONTACT?.());

if (location.pathname.endsWith("index.html") || location.pathname.endsWith("/")) {
  const cacheKey = "mhr_firestore_cms_v1";
  let cached = {};
  try { cached = JSON.parse(localStorage.getItem(cacheKey) || "{}") || {}; } catch (_) { cached = {}; }
  const emit = (section, rows) => document.dispatchEvent(new CustomEvent("mhr-firestore-cms-data", { detail: { section, rows } }));
  CMS_COLLECTIONS.forEach(section => {
    if (Array.isArray(cached[section])) emit(section, cached[section]);
    subscribeCollection(section, rows => {
      cached[section] = rows;
      localStorage.setItem(cacheKey, JSON.stringify(cached));
      emit(section, rows);
    }, () => { if (!Array.isArray(cached[section])) emit(section, []); });
  });
}
