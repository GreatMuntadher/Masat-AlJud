import { firebaseAuth } from "./firebase-client.js";
import { browserSessionPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
export const ADMIN_UID = "6stDNIpNXGeROiN6tjCz4yBwIAe2";
const messages = { "auth/invalid-credential":"البريد الإلكتروني أو كلمة المرور غير صحيحة.", "auth/invalid-email":"صيغة البريد الإلكتروني غير صحيحة.", "auth/too-many-requests":"تم إيقاف المحاولات مؤقتاً بسبب كثرة المحاولات. حاول لاحقاً.", "auth/network-request-failed":"تعذر الاتصال بخدمة تسجيل الدخول. تحقق من الإنترنت." };
async function login(email, password) { await setPersistence(firebaseAuth, browserSessionPersistence); const credential = await signInWithEmailAndPassword(firebaseAuth, email, password); if (!credential.user || credential.user.uid !== ADMIN_UID) { await signOut(firebaseAuth); throw Object.assign(new Error("UNAUTHORIZED_ADMIN"), { userMessage:"هذا الحساب غير مخوّل للدخول إلى لوحة الإدارة." }); } return credential.user; }
function waitForAuthorizedAdmin() { return new Promise(resolve => onAuthStateChanged(firebaseAuth, async user => { if (!user) return resolve(null); if (user.uid !== ADMIN_UID) { await signOut(firebaseAuth); return resolve(null); } resolve(user); })); }
window.MHR_ADMIN_AUTH = { login, logout: () => signOut(firebaseAuth), waitForAuthorizedAdmin, messageFor: err => messages[err && err.code] || "تعذر تسجيل الدخول. حاول مرة أخرى.", ADMIN_UID };
if (location.pathname.endsWith("admin.html")) {
  document.documentElement.classList.add("auth-pending");
  waitForAuthorizedAdmin().then(user => {
    if (!user) { location.replace("index.html?adminLogin=1"); return; }
    document.documentElement.classList.remove("auth-pending");
    document.dispatchEvent(new CustomEvent("mhr-admin-auth-ready"));
  });
}
