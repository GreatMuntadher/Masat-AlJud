import { firestoreDb, firebaseAuth } from "./firebase-client.js";
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
const ADMIN_UID = "6stDNIpNXGeROiN6tjCz4yBwIAe2";
const ref = collection(firestoreDb, "announcements");
const safeText = (value, max) => { const text = String(value ?? "").replace(/[\u0000-\u001F\u007F]/g, " ").replace(/<script[\s\S]*?<\/script>/ig, "").trim(); if (text.length > max) throw new Error("VALIDATION_ERROR"); return text; };
const safeDate = value => { const text = safeText(value, 10); if (text && !/^\d{4}-\d{2}-\d{2}$/.test(text)) throw new Error("VALIDATION_ERROR"); return text; };
const safeUrl = value => { const text = safeText(value, 2048); if (!text) return ""; if (/^(https:|mailto:|#(?:announcements|quickAccess|forms|services|policies|info)$)/i.test(text)) return text; throw new Error("INVALID_LINK"); };
function user() { const current = firebaseAuth.currentUser; if (!current || current.uid !== ADMIN_UID) throw new Error("UNAUTHORIZED_ADMIN"); return current; }
function data(input, isCreate) { const id = safeText(input.id, 80); if (!/^[A-Za-z0-9_-]{1,80}$/.test(id)) throw new Error("VALIDATION_ERROR"); const result = { id, title:safeText(input.title,200), body:safeText(input.body ?? input.description,5000), tag:safeText(input.tag,100), date:safeDate(input.date ?? input.startDate), endDate:safeDate(input.endDate), linkText:safeText(input.linkText ?? input.buttonText,100), linkUrl:safeUrl(input.linkUrl ?? input.url), priority:Number(input.priority ?? 9999), isActive:Boolean(input.isActive ?? input.active), updatedAt:serverTimestamp(), updatedBy:user().uid }; if (!result.title || !Number.isFinite(result.priority) || Object.keys(input).some(k => ["createdAt","updatedAt","createdBy","updatedBy","__proto__","constructor","prototype"].includes(k))) throw new Error("VALIDATION_ERROR"); if (isCreate) { result.createdAt=serverTimestamp(); result.createdBy=user().uid; } return result; }
export async function listAnnouncements(){ const snapshot=await getDocs(query(ref,orderBy("priority","asc"))); return snapshot.docs.map(d=>({id:d.id,...d.data()})); }
export function subscribeToAnnouncements(callback,onError){ return onSnapshot(query(ref,orderBy("priority","asc")),s=>callback(s.docs.map(d=>({id:d.id,...d.data()}))),onError); }
export async function createAnnouncement(input){ const row=data(input,true); await setDoc(doc(firestoreDb,"announcements",row.id),row); }
export async function updateAnnouncement(id,input){ const row=data({...input,id},false); await updateDoc(doc(firestoreDb,"announcements",row.id),row); }
export async function deleteAnnouncement(id){ user(); await deleteDoc(doc(firestoreDb,"announcements",safeText(id,80))); }
export async function toggleAnnouncement(id,active){ const current=user(); await updateDoc(doc(firestoreDb,"announcements",safeText(id,80)),{isActive:Boolean(active),updatedAt:serverTimestamp(),updatedBy:current.uid}); }
window.MHR_FIRESTORE_ANNOUNCEMENTS={subscribeToAnnouncements,createAnnouncement,updateAnnouncement,deleteAnnouncement,toggleAnnouncement};
document.dispatchEvent(new CustomEvent("mhr-firestore-announcements-ready"));
if (location.pathname.endsWith("index.html") || location.pathname.endsWith("/")) {
  const cached = JSON.parse(localStorage.getItem("mhr_firestore_announcements_v1") || "null");
  const render = rows => { document.dispatchEvent(new CustomEvent("mhr-firestore-announcements-data", { detail: rows })); };
  if (Array.isArray(cached)) render(cached);
  subscribeToAnnouncements(rows => { localStorage.setItem("mhr_firestore_announcements_v1", JSON.stringify(rows)); render(rows); }, () => { if (!Array.isArray(cached)) render([]); });
}
