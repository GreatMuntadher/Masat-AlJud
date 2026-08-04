// Manual, idempotent Firestore content restoration. It never runs on page load.
import { firestoreDb, firebaseAuth } from "./firebase-client.js";
import { collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const ADMIN_UID = "6stDNIpNXGeROiN6tjCz4yBwIAe2";
const now = () => ({ updatedAt: serverTimestamp(), updatedBy: ADMIN_UID });
const contact = () => window.MHR_SITE_CONTACT;
const quickCards = [
  ["announcements", "📢", "الإعلانات الداخلية", "آخر تحديثات وتنبيهات ماسة الجود", "#announcements", 1],
  ["forms", "🗂️", "نماذج الموارد البشرية", "نماذج الموارد البشرية في مكان واحد", "#forms", 2],
  ["leave", "🗓️", "الإجازات والزمنيات", "طلب إجازة أو تسجيل دوام", "#forms", 3],
  ["employeeData", "🪪", "بيانات الموظفين", "تحديث البيانات والمستمسكات", "#forms", 4],
  ["info", "💬", "التواصل مع الموارد البشرية", "", "#info", 5],
  ["policies", "📚", "السياسات الداخلية", "الاطلاع على سياسات ولوائح العمل المعتمدة.", "#policies", 6]
].map(([id, icon, title, description, href, sortOrder]) => ({ id, quickKey: id, icon, title, description, href, sortOrder, isActive: true, active: true, badge: "", size: "" }));
const forms = [
  ["leave", "🗓️", "الإجازات والزمنيات", "تقديم طلب إجازة أو تسجيل زمنية دوام.", "نموذج موحد لطلبات الإجازة والزمنيات يُرسل مباشرة لقسم الموارد البشرية للمراجعة والاعتماد.", "https://forms.gle/fswMxBEyPF1RLxrk9", true],
  ["taskRequest", "🧭", "طلب مهمة العمل", "تكليف رسمي أو مهمة عمل خارجية.", "نموذج لتسجيل طلبات المهام والتكليفات الرسمية الخاصة بالموظف ليتم اعتمادها من الإدارة المباشرة.", "https://forms.gle/hNnP2819eiBD1ne88", true],
  ["overtime", "⏱️", "الوقت الإضافي (أوفر تايم)", "تقديم طلب عمل إضافي خارج ساعات الدوام.", "تقديم وتوثيق طلبات العمل الإضافي خارج ساعات الدوام الرسمية وفق الموافقات المعتمدة.", "https://forms.gle/E9KKLAbfaYvVbwzCA", true],
  ["employeeData", "🪪", "بيانات الموظفين", "تحديث وتوثيق بيانات الموظفين.", "نموذج موحد لتحديث بيانات الموظفين ورفع المستمسكات المطلوبة لدى قسم الموارد البشرية.", "https://forms.gle/qs2M6pEWGbXZS7h97", true],
  ["custodyRequest", "📦", "تسليم واستلام عهدة الموظفين", "توثيق تسليم عهدة الموظف أو استلامها.", "نموذج لتوثيق عمليات تسليم واستلام عهدة الموظفين بين الموظف والجهة المسؤولة.", "https://forms.gle/sM9hSDeuEuTEkBju7", true],
  ["apply", "🧾", "التقديم للوظائف", "الترشيحات والفرص المتاحة.", "نموذج استلام السير الذاتية والترشيحات لدى شركة ماسة الجود.", "", false],
  ["employeeArchive", "🗄️", "أرشفة وتحديث بيانات الموظف", "أرشفة المستمسكات وتحديث بيانات ملف الموظف.", "سجل محفوظ وغير نشط لتجنب تكرار نموذج بيانات الموظفين في الواجهة العامة.", "", false]
].map(([id, icon, title, subtitle, description, linkUrl, isActive], index) => ({ id, formKey: id, icon, badge: "نموذج", title, subtitle, description, linkText: "فتح النموذج", linkUrl, sortOrder: index + 1, isActive, active: isActive, size: "" }));
const policies = [
  ["attendance", "سياسة الدوام", "توضيح أوقات الدوام الرسمية وضوابط الالتزام بساعات العمل المعتمدة."],
  ["attendance-and-departure", "سياسة الحضور والانصراف", "تنظيم إجراءات تسجيل الحضور والانصراف ومعالجة الحالات والاستثناءات المعتمدة."],
  ["disciplinary-penalties", "لائحة الجزاءات والانضباط", "بيان قواعد الانضباط والمخالفات والجزاءات الإدارية وفق اللوائح المعتمدة."],
  ["leaves", "سياسة الإجازات والزمنيات", "توضيح أنواع الإجازات والزمنيات وإجراءات تقديمها واعتمادها."],
  ["training-development", "سياسة التدريب والتطوير", "تنظيم فرص التدريب والتطوير المهني وآليات الترشيح والموافقة."],
  ["internal-rules", "لائحة القواعد الداخلية", "عرض القواعد الداخلية المنظمة لبيئة العمل وحقوق وواجبات الموظفين."]
].map(([id, title, description], index) => ({ id, policyKey: id, title, description, icon: "📚", fileUrl: "", buttonText: "غير متاح حالياً", order: index + 1, sortOrder: index + 1, isActive: false, active: false }));

const banned = /tax|taxcalculator|taxsocialsecurity|الضريبة|الضمان/i;
const sectionData = { quickCards, forms, policies };
const keyFor = { quickCards: "quickKey", forms: "formKey", policies: "policyKey" };

function requireAdmin() {
  if (firebaseAuth.currentUser?.uid !== ADMIN_UID) throw new Error("UNAUTHORIZED_ADMIN");
}
async function restoreSection(name, rows) {
  const snapshot = await getDocs(collection(firestoreDb, name));
  const existing = new Map(snapshot.docs.map(item => [item.id, item.data()]));
  const wanted = new Set(rows.map(row => row.id));
  for (const item of snapshot.docs) {
    const value = item.data();
    const identity = String(value[keyFor[name]] || value.id || item.id);
    if (banned.test(JSON.stringify(value)) || (wanted.has(identity) && item.id !== identity)) await deleteDoc(item.ref);
  }
  for (const item of rows) {
    const row = item.id === "info" ? { ...item, description: contact().email } : item;
    const exists = existing.has(row.id);
    await setDoc(doc(firestoreDb, name, row.id), { ...row, ...now(), ...(exists ? {} : { createdAt: serverTimestamp(), createdBy: ADMIN_UID }) }, { merge: true });
  }
}

const legacyPhone = /(?:\+?964|0)78\d{8,10}/;
function normalizeContactFields(value, key = "") {
  if (Array.isArray(value)) return value.map(item => normalizeContactFields(item));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([name, item]) => [name, normalizeContactFields(item, name)]));
  if (/email/i.test(key) || (typeof value === "string" && /@masataljud\.com/i.test(value))) return contact().email;
  if (/phone|tel|support/i.test(key) || (typeof value === "string" && legacyPhone.test(value))) return contact().phone;
  return value;
}
async function updateMatchingContactDocuments() {
  for (const name of ["quickCards", "forms", "services", "policies", "adminCards", "announcements"]) {
    const snapshot = await getDocs(collection(firestoreDb, name));
    for (const item of snapshot.docs) {
      const serialized = JSON.stringify(item.data());
      if (!/@masataljud\.com/i.test(serialized) && !legacyPhone.test(serialized)) continue;
      await setDoc(item.ref, { ...normalizeContactFields(item.data()), ...now() }, { merge: true });
    }
  }
}

export async function MHR_UPDATE_CONTACT_INFO() {
  requireAdmin();
  const existing = await getDocs(collection(firestoreDb, "settings"));
  const hasContact = existing.docs.some(item => item.id === "contact");
  await setDoc(doc(firestoreDb, "settings", "contact"), { ...contact(), ...now(), ...(hasContact ? {} : { createdAt: serverTimestamp(), createdBy: ADMIN_UID }) }, { merge: true });
  await updateMatchingContactDocuments();
  await setDoc(doc(firestoreDb, "quickCards", "info"), { description: contact().email, ...now() }, { merge: true });
  return { ...contact() };
}

export async function seedFirestoreContent() {
  requireAdmin();
  await MHR_UPDATE_CONTACT_INFO();
  for (const [section, rows] of Object.entries(sectionData)) await restoreSection(section, rows);
  return { quickCards: quickCards.length, forms: forms.length, policies: policies.length };
}

window.MHR_SEED_FIRESTORE_CONTENT = seedFirestoreContent;
// Exposed only because this module is loaded by admin.html after Firebase Auth.
window.MHR_UPDATE_CONTACT_INFO = MHR_UPDATE_CONTACT_INFO;
