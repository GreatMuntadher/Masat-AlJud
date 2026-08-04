const CONFIG = {
  applyFormUrl: "",
  // روابط Google Forms العامة المعتمدة؛ تبقى الروابط المؤقتة أدناه مانع إطلاق حتى استبدالها.
  leaveFormUrl: "https://forms.gle/fswMxBEyPF1RLxrk9",
  employeeDataFormUrl: "https://forms.gle/qs2M6pEWGbXZS7h97",
  taskRequestFormUrl: "https://forms.gle/hNnP2819eiBD1ne88",
  overtimeFormUrl: "https://forms.gle/E9KKLAbfaYvVbwzCA",
  employeeArchiveFormUrl: "",
  custodyRequestFormUrl: "https://forms.gle/sM9hSDeuEuTEkBju7"
};

// fallback محلي مؤقت فقط إلى حين نشر Phase B؛ لا يُعد بديلاً عن المصادقة الخادمية.

const FALLBACK_ANNOUNCEMENTS = [
  {
    title: "مرحباً بكم في بوابة الموارد البشرية | شركة ماسة الجود",
    body: "سيتم عرض إعلانات قسم الموارد البشرية في شركة ماسة الجود هنا عند توفرها.",
    date: "",
    tag: "تنبيه",
    isActive: false,
    priority: 9999,
    linkUrl: "#",
    linkText: ""
  }
];

const SITE_CONTACT = window.MHR_SITE_CONTACT || {};
const FALLBACK_QUICK_CARDS = [
  { quickKey: "announcements", icon: "📢", title: "الإعلانات الداخلية", description: "آخر تحديثات وتنبيهات ماسة الجود", href: "#announcements", isActive: true, sortOrder: 1, badge: "", size: "" },
  { quickKey: "forms", icon: "🗂️", title: "نماذج الموارد البشرية", description: "نماذج الموارد البشرية في مكان واحد", href: "#forms", isActive: true, sortOrder: 2, badge: "", size: "" },
  { quickKey: "leave", icon: "🗓️", title: "الإجازات والزمنيات", description: "طلب إجازة أو تسجيل دوام", href: "#forms", isActive: true, sortOrder: 3, badge: "", size: "" },
  { quickKey: "employeeData", icon: "🪪", title: "بيانات الموظفين", description: "تحديث البيانات والمستمسكات", href: "#forms", isActive: true, sortOrder: 4, badge: "", size: "" },
  { quickKey: "info", icon: "💬", title: "التواصل مع الموارد البشرية", description: SITE_CONTACT.email || "", href: "#info", isActive: true, sortOrder: 5, badge: "", size: "" },
  { quickKey: "policies", icon: "📚", title: "السياسات الداخلية", description: "الاطلاع على سياسات ولوائح العمل المعتمدة.", href: "#policies", isActive: true, sortOrder: 6, badge: "", size: "" }
];

const FALLBACK_FORMS = [
  { formKey: "leave", icon: "🗓️", badge: "نموذج", title: "الإجازات والزمنيات", subtitle: "تقديم طلب إجازة أو تسجيل زمنية دوام.", description: "نموذج موحد لطلبات الإجازة والزمنيات يُرسل مباشرة لقسم الموارد البشرية للمراجعة والاعتماد.", linkText: "فتح النموذج", linkUrl: CONFIG.leaveFormUrl, isActive: true, sortOrder: 1, size: "" },
  { formKey: "taskRequest", icon: "🧭", badge: "نموذج", title: "طلب مهمة العمل", subtitle: "تكليف رسمي أو مهمة عمل خارجية.", description: "نموذج لتسجيل طلبات المهام والتكليفات الرسمية الخاصة بالموظف ليتم اعتمادها من الإدارة المباشرة.", linkText: "فتح النموذج", linkUrl: CONFIG.taskRequestFormUrl, isActive: true, sortOrder: 2, size: "" },
  { formKey: "overtime", icon: "⏱️", badge: "نموذج", title: "الوقت الإضافي (أوفر تايم)", subtitle: "تقديم طلب عمل إضافي خارج ساعات الدوام.", description: "تقديم وتوثيق طلبات العمل الإضافي خارج ساعات الدوام الرسمية وفق الموافقات المعتمدة.", linkText: "فتح النموذج", linkUrl: CONFIG.overtimeFormUrl, isActive: true, sortOrder: 3, size: "" },
  { formKey: "employeeData", icon: "🪪", badge: "نموذج", title: "بيانات الموظفين", subtitle: "تحديث وتوثيق بيانات الموظفين.", description: "نموذج موحد لتحديث بيانات الموظفين ورفع المستمسكات المطلوبة لدى قسم الموارد البشرية.", linkText: "فتح النموذج", linkUrl: CONFIG.employeeDataFormUrl, isActive: true, sortOrder: 4, size: "" },
  { formKey: "custodyRequest", icon: "📦", badge: "نموذج", title: "تسليم واستلام عهدة الموظفين", subtitle: "توثيق تسليم عهدة الموظف أو استلامها.", description: "نموذج لتوثيق عمليات تسليم واستلام عهدة الموظفين بين الموظف والجهة المسؤولة.", linkText: "فتح النموذج", linkUrl: CONFIG.custodyRequestFormUrl, isActive: true, sortOrder: 5, size: "" },
  { formKey: "apply", icon: "🧾", badge: "نموذج", title: "التقديم للوظائف", subtitle: "الترشيحات والفرص المتاحة.", description: "نموذج استلام السير الذاتية والترشيحات لدى شركة ماسة الجود.", linkText: "فتح النموذج", linkUrl: CONFIG.applyFormUrl, isActive: true, sortOrder: 6, size: "" },
  { formKey: "employeeArchive", icon: "🗄️", badge: "نموذج", title: "أرشفة وتحديث بيانات الموظف", subtitle: "أرشفة المستمسكات وتحديث بيانات ملف الموظف.", description: "سجل محفوظ وغير نشط لتجنب تكرار نموذج بيانات الموظفين في الواجهة العامة.", linkText: "فتح النموذج", linkUrl: CONFIG.employeeArchiveFormUrl, isActive: false, sortOrder: 7, size: "" }
];

const FALLBACK_POLICIES = [
  { policyKey: "attendance", title: "سياسة الدوام", description: "توضيح أوقات الدوام الرسمية وضوابط الالتزام بساعات العمل المعتمدة.", fileUrl: "", icon: "🕘", version: "", updatedDate: "", order: 1, active: false, buttonText: "عرض السياسة" },
  { policyKey: "attendance-and-departure", title: "سياسة الحضور والانصراف", description: "تنظيم إجراءات تسجيل الحضور والانصراف ومعالجة الحالات والاستثناءات المعتمدة.", fileUrl: "", icon: "🪪", version: "", updatedDate: "", order: 2, active: false, buttonText: "عرض السياسة" },
  { policyKey: "disciplinary-penalties", title: "لائحة الجزاءات والانضباط", description: "بيان قواعد الانضباط والمخالفات والجزاءات الإدارية وفق اللوائح المعتمدة.", fileUrl: "", icon: "⚖️", version: "", updatedDate: "", order: 3, active: false, buttonText: "عرض السياسة" },
  { policyKey: "leaves", title: "سياسة الإجازات والزمنيات", description: "توضيح أنواع الإجازات والزمنيات وإجراءات تقديمها واعتمادها.", fileUrl: "", icon: "🗓️", version: "", updatedDate: "", order: 4, active: false, buttonText: "عرض السياسة" },
  { policyKey: "training-development", title: "سياسة التدريب والتطوير", description: "تنظيم فرص التدريب والتطوير المهني وآليات الترشيح والموافقة.", fileUrl: "", icon: "🎓", version: "", updatedDate: "", order: 5, active: false, buttonText: "عرض السياسة" },
  { policyKey: "internal-rules", title: "لائحة القواعد الداخلية", description: "عرض القواعد الداخلية المنظمة لبيئة العمل وحقوق وواجبات الموظفين.", fileUrl: "", icon: "📘", version: "", updatedDate: "", order: 6, active: false, buttonText: "عرض السياسة" }
];

const CACHE_KEY = "mhr_cache_v2";
const LEGACY_CACHE_KEYS = ["mhr_cache_v1", "masatContentCacheV2"];
const CACHE_TTL_MS = 4 * 60 * 60 * 1000;
const CMS_SCHEMA_VERSION = "2.0";
const SAFE_SECTION_ANCHORS = new Set(["#home", "#announcements", "#forms", "#services", "#policies", "#info"]);
const ICON_MAP = Object.freeze({ announcement: "📢", document: "📄", policy: "📚", leave: "🗓️", employee: "🪪", phone: "📞", email: "✉️", whatsapp: "💬", service: "🧭", calendar: "📅", clock: "🕘", admin: "🛡️", forms: "🗂️", tasks: "🧭", overtime: "⏱️", recruitment: "🧾", handover: "📦" });
const ANNOUNCEMENT_CLASS_MAP = Object.freeze({ normal: "announcement-normal", info: "announcement-info", warning: "announcement-warning", important: "announcement-important", urgent: "announcement-urgent", success: "announcement-success" });
let CMS_MESSAGES = Object.freeze({ loading: "جارٍ تحميل المحتوى…", noData: "لا توجد بيانات متاحة حالياً.", offline: "تعذر تحديث المحتوى حالياً.", invalidLink: "الرابط غير متاح أو غير معتمد.", notAvailable: "غير متاح حالياً." });
let cmsFetchInProgress = null;

let QUICK_CARDS = [];
let FORMS = [];
let SERVICES = [];
let ANNOUNCEMENTS = [];
let FIRESTORE_ANNOUNCEMENTS_READY = false;
document.addEventListener("mhr-firestore-announcements-data", event => { FIRESTORE_ANNOUNCEMENTS_READY = true; ANNOUNCEMENTS = event.detail || []; renderAnnouncements(); });
let POLICIES = [];
// CMS collections are populated exclusively by Firestore.
document.addEventListener("mhr-firestore-cms-data", event => {
  const { section, rows } = event.detail || {};
  const map = { quickCards: "quickKey", forms: "formKey", services: "serviceKey", policies: "policyKey" };
  if (!map[section]) return;
  const items = (rows || []).map(row => ({ ...row, [map[section]]: row[map[section]] || row.id }));
  if (section === "quickCards") { QUICK_CARDS = items; }
  if (section === "forms") { FORMS = items; renderForms(); }
  if (section === "services") { SERVICES = items; renderServices(); }
  if (section === "policies") { POLICIES = items; renderPolicies(); }
});

/* =========================
   Helpers
========================= */

function esc(str) {
  return (str || "").toString().replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[m]));
}

function toBool(v) {
  if (typeof v === "boolean") return v;

  const s = String(v ?? "").trim().toLowerCase();

  return (
    s === "true" ||
    s === "1" ||
    s === "yes" ||
    s === "y" ||
    s === "نعم"
  );
}

function toNum(v, fallback = 9999) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function formatDisplayDate(dateValue) {
  if (!dateValue) return "-";

  const raw = String(dateValue).trim();

  if (!raw) return "-";

  if (raw.includes("T")) {
    const d = new Date(raw);

    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("ar-IQ", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  }

  const parts = raw.split("-");

  if (parts.length === 3) {
    const year = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const day = Number(parts[2]);

    const d = new Date(year, month, day);

    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("ar-IQ", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  }

  return raw;
}

function buildUrlWithParam(url, key, value) {
  const separator = url.includes("?") ? "&" : "?";
  return url + separator + encodeURIComponent(key) + "=" + encodeURIComponent(value);
}

/* =========================
   Local Cache (localStorage)
========================= */

function readCmsCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY) || localStorage.getItem("masatContentCacheV2");
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;

    return isUsableContentCache(parsed) ? parsed : null;
  } catch (err) {
    console.warn("تعذرت قراءة الكاش المحلي:", err);
    return null;
  }
}

function writeCmsCache(data, source = "apps-script") {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      schemaVersion: CMS_SCHEMA_VERSION,
      fetchedAt: new Date().toISOString(),
      source,
      data: normalizePublicContent(data)
    }));
  } catch (err) {
    console.warn("تعذر حفظ الكاش المحلي:", err);
  }
}

function isCmsCacheFresh(cache) {
  if (!isUsableContentCache(cache)) return false;
  const time = typeof cache.fetchedAt === "number" ? cache.fetchedAt : Date.parse(cache.fetchedAt);
  return Number.isFinite(time) && Date.now() - time <= CACHE_TTL_MS;
}

function migrateLegacyCache() {
  for (const legacyKey of LEGACY_CACHE_KEYS) {
    try {
      const legacy = JSON.parse(localStorage.getItem(legacyKey) || "null");
      const data = legacy && (legacy.data || legacy);
      if (!isPlainObject(data)) continue;
      const migrated = normalizePublicContent(data);
      if (!migrated.forms.length && !migrated.quickCards.length && !migrated.announcements.length) continue;
      const cache = { schemaVersion: CMS_SCHEMA_VERSION, fetchedAt: new Date().toISOString(), source: "legacy-cache", data: migrated };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      return cache;
    } catch (_err) { /* legacy data is optional */ }
  }
  return null;
}

// Compatibility aliases retained for the existing admin-independent startup path.
function readCache() { return readCmsCache(); }
function writeCache(data) { return writeCmsCache(data); }
function isCacheStale(cache) { return !isCmsCacheFresh(cache); }

/* =========================
   Data Normalization
========================= */

function slugifyKey(text, index) {
  const base = String(text || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9؀-ۿ]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);

  return (base || "item") + "-" + index;
}

function ensureUniqueKeys(items, keyField, titleField) {
  const seen = new Set();

  items.forEach((item, index) => {
    let key = String(item[keyField] || "").trim();

    if (!key || seen.has(key)) {
      key = slugifyKey(item[titleField], index);
    }

    seen.add(key);
    item[keyField] = key;
  });

  return items;
}

function normalizeQuickCards(arr) {
  const items = (Array.isArray(arr) ? arr : []).map(x => ({
    quickKey: x.quickKey ?? x.QuickKey ?? "",
    icon: x.icon ?? x.Icon ?? "",
    title: x.title ?? x.Title ?? "",
    description: x.description ?? x.Description ?? "",
    href: x.href ?? x.Href ?? "#",
    isActive: x.isActive ?? x.active ?? x.IsActive ?? true,
    sortOrder: x.sortOrder ?? x.SortOrder ?? 9999,
    badge: x.badge ?? x.Badge ?? "",
    size: x.size ?? x.Size ?? ""
  }));

  return ensureUniqueKeys(items, "quickKey", "title");
}

function normalizeForms(arr) {
  const items = (Array.isArray(arr) ? arr : []).map(x => ({
    formKey: x.formKey ?? x.FormKey ?? "",
    icon: x.icon ?? x.Icon ?? "",
    badge: x.badge ?? x.Badge ?? "",
    title: x.title ?? x.Title ?? "",
    subtitle: x.subtitle ?? x.Subtitle ?? "",
    description: x.description ?? x.Description ?? "",
    linkText: x.linkText ?? x.LinkText ?? "فتح النموذج",
    linkUrl: x.linkUrl ?? x.LinkUrl ?? "#",
    isActive: x.isActive ?? x.active ?? x.IsActive ?? true,
    sortOrder: x.sortOrder ?? x.SortOrder ?? 9999,
    size: x.size ?? x.Size ?? ""
  }));

  return ensureUniqueKeys(items, "formKey", "title");
}

function normalizeAnnouncementsData(arr) {
  const items = (Array.isArray(arr) ? arr : []).map(x => ({
    id: x.id ?? x.ID ?? "",
    title: x.title ?? x.Title ?? "",
    body: x.body ?? x.Body ?? "",
    tag: x.tag ?? x.Tag ?? "",
    date: x.date ?? x.Date ?? "",
    endDate: x.endDate ?? x.EndDate ?? "",
    linkText: x.linkText ?? x.link_text ?? x.LinkText ?? "",
    linkUrl: x.linkUrl ?? x.link_url ?? x.LinkUrl ?? "#",
    isActive: x.isActive ?? x.active ?? x.IsActive ?? true,
    priority: x.priority ?? x.Priority ?? 9999
  }));

  return ensureUniqueKeys(items, "id", "title");
}

function normalizePolicies(arr) {
  const items = (Array.isArray(arr) ? arr : []).map(x => ({
    policyKey: x.policyKey ?? x.PolicyKey ?? "",
    title: x.title ?? x.Title ?? "",
    description: x.description ?? x.Description ?? "",
    fileUrl: x.fileUrl ?? x.FileUrl ?? "",
    icon: x.icon ?? x.Icon ?? "📄",
    version: x.version ?? x.Version ?? "",
    updatedDate: x.updatedDate ?? x.UpdatedDate ?? "",
    order: x.order ?? x.Order ?? 9999,
    active: x.active ?? x.Active ?? true,
    buttonText: x.buttonText ?? x.ButtonText ?? "عرض السياسة"
  }));

  return ensureUniqueKeys(items, "policyKey", "title");
}

function isSafePolicyFileUrl(value) {
  const raw = String(value || "").trim();
  if (!raw || /^(?:javascript|data):/i.test(raw)) return false;

  try {
    const parsed = new URL(raw, window.location.href);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch (err) {
    return false;
  }
}

/* =========================
   Unified public content API
========================= */

const PUBLIC_CONTENT_KEYS = Object.freeze([
  "settings", "theme", "navigation", "socialLinks", "contentSections", "announcements",
  "quickCards", "forms", "services", "policies", "adminCards", "systemMessages"
]);

function publicContentDefaults() {
  return {
    settings: {}, theme: {}, navigation: [], socialLinks: [], contentSections: [],
    announcements: [], quickCards: [], forms: [], services: [], policies: [], adminCards: [], systemMessages: {}
  };
}

function safeText(value) {
  if (value == null || typeof value === "object") return "";
  return String(value).replace(/[\u0000-\u001F\u007F]/g, " ").replace(/<[^>]*>/g, "").trim();
}

function isPlainObject(value) {
  return Boolean(value) && Object.prototype.toString.call(value) === "[object Object]";
}

function safePublicUrl(value) {
  const raw = safeText(value);
  if (!raw || /^(?:javascript|data|vbscript|file|blob|about):/i.test(raw)) return "";
  try {
    const parsed = new URL(raw, window.location.href);
    return ["https:", "mailto:", "tel:"].includes(parsed.protocol) ? raw : "";
  } catch (err) {
    return SAFE_SECTION_ANCHORS.has(raw) || raw === "index.html" ? raw : "";
  }
}

function safeCmsHttps(value) {
  const url = safePublicUrl(value);
  return /^https:\/\//i.test(url) ? url : "";
}

function cmsIcon(value, fallbackType = "document") { return ICON_MAP[safeText(value).toLowerCase()] || ICON_MAP[fallbackType] || ICON_MAP.document; }

function getSystemMessage(key, fallback) {
  const value = safeText(CMS_MESSAGES[key]);
  return value && value.length <= 500 ? value : fallback;
}

function normalizePublicItem(item) {
  if (!isPlainObject(item) || !toBool(item.active ?? item.isActive ?? true)) return null;
  const id = safeText(item.id || item.quickKey || item.formKey || item.policyKey);
  const title = safeText(item.title);
  if (!id || !title) return null;
  return {
    id, title, description: safeText(item.description || item.body), subtitle: safeText(item.subtitle),
    buttonText: safeText(item.buttonText || item.linkText), url: safePublicUrl(item.url || item.linkUrl || item.href || item.fileUrl),
    icon: safeText(item.icon), category: safeText(item.category), active: true,
    openInNewTab: toBool(item.openInNewTab), sortOrder: toNum(item.sortOrder ?? item.order, 9999),
    priority: toNum(item.priority, 0), type: ["normal", "info", "warning", "important", "urgent", "success"].includes(safeText(item.type)) ? safeText(item.type) : "normal", startDate: safeText(item.startDate || item.date), endDate: safeText(item.endDate),
    createdAt: safeText(item.createdAt), version: safeText(item.version), publishDate: safeText(item.publishDate || item.updatedDate)
  };
}

function normalizePublicContent(payload) {
  const defaults = publicContentDefaults();
  if (!isPlainObject(payload)) return defaults;
  PUBLIC_CONTENT_KEYS.forEach(key => {
    if (Array.isArray(defaults[key])) {
      defaults[key] = (Array.isArray(payload[key]) ? payload[key] : []).map(item => {
        if (key === "contentSections" && isPlainObject(item) && toBool(item.enabled ?? item.active ?? true)) {
          const id = safeText(item.id), sectionKey = safeText(item.sectionKey);
          return id && sectionKey ? { id, sectionKey, title: safeText(item.title), description: safeText(item.description), active: true, sortOrder: toNum(item.sortOrder, 9999) } : null;
        }
        if ((key === "navigation" || key === "socialLinks") && isPlainObject(item) && toBool(item.active ?? true)) {
          const id = safeText(item.id), label = safeText(item.label), url = safePublicUrl(item.target || item.url);
          return id && label && url ? { id, title: label, label, url, target: url, targetType: safeText(item.targetType), icon: safeText(item.icon), active: true, sortOrder: toNum(item.sortOrder, 9999) } : null;
        }
        return normalizePublicItem(item);
      }).filter(Boolean)
        .sort((a, b) => a.sortOrder - b.sortOrder || a.id.localeCompare(b.id));
    } else if (isPlainObject(payload[key])) {
      Object.keys(payload[key]).forEach(name => { defaults[key][safeText(name)] = safeText(payload[key][name]); });
    }
  });
  defaults.announcements = defaults.announcements.sort((a, b) => b.priority - a.priority || a.sortOrder - b.sortOrder || String(b.createdAt).localeCompare(String(a.createdAt)));
  const fallback = fallbackPublicContentLists();
  ["announcements", "quickCards", "forms", "services", "policies"].forEach(key => {
    if (!defaults[key].length && fallback[key].length) defaults[key] = fallback[key];
  });
  defaults.contentSections = defaults.contentSections.filter(item => ["announcements", "quickCards", "forms", "services", "policies", "contact"].includes(item.sectionKey));
  return defaults;
}

function normalizeCmsPayload(payload) {
  if (!isPlainObject(payload) || payload.ok !== true || payload.schemaVersion !== CMS_SCHEMA_VERSION) {
    console.warn("تم تجاهل استجابة CMS غير صالحة أو بإصدار غير مدعوم.");
    return null;
  }
  return normalizePublicContent(payload);
}

function fallbackPublicContent() {
  return normalizePublicContent({
    quickCards: FALLBACK_QUICK_CARDS, forms: FALLBACK_FORMS, announcements: FALLBACK_ANNOUNCEMENTS,
    policies: FALLBACK_POLICIES, services: []
  });
}

function fallbackPublicContentLists() {
  return { quickCards: normalizeQuickCards(FALLBACK_QUICK_CARDS), forms: normalizeForms(FALLBACK_FORMS), announcements: normalizeAnnouncementsData(FALLBACK_ANNOUNCEMENTS), policies: normalizePolicies(FALLBACK_POLICIES), services: [] };
}

function isUsableContentCache(cache) {
  return isPlainObject(cache) && cache.schemaVersion === CMS_SCHEMA_VERSION && isPlainObject(cache.data) &&
    (Number.isFinite(Number(cache.fetchedAt)) || Number.isFinite(Date.parse(String(cache.fetchedAt))));
}

function contentToLegacyData(content) {
  const cards = list => list.map(item => ({ quickKey: item.id, formKey: item.id, policyKey: item.id, icon: item.icon, title: item.title, description: item.description, subtitle: item.subtitle, href: item.url, linkUrl: item.url, fileUrl: item.url, linkText: item.buttonText, buttonText: item.buttonText, isActive: item.active, active: item.active, sortOrder: item.sortOrder, order: item.sortOrder, priority: item.priority, date: item.startDate, endDate: item.endDate, version: item.version, updatedDate: item.publishDate }));
  return { quickCards: cards(content.quickCards), forms: cards(content.forms), services: cards(content.services), announcements: cards(content.announcements), policies: cards(content.policies) };
}

function applyThemeAndSettings(content) {
  const vars = { primaryColor: "--primary-color", secondaryColor: "--secondary-color", accentColor: "--accent-color", backgroundColor: "--background-color", surfaceColor: "--surface-color", textColor: "--text-color", mutedTextColor: "--muted-text-color", borderRadius: "--card-radius" };
  Object.keys(vars).forEach(key => {
    const value = content.theme[key];
    if (value !== undefined) document.documentElement.style.setProperty(vars[key], key === "borderRadius" ? value + "px" : value);
  });
  const settings = content.settings;
  if (settings["site.pageTitle"]) document.title = settings["site.pageTitle"];
  const hero = document.querySelector(".hero-copy");
  if (hero) {
    const eyebrow = hero.querySelector(".eyebrow"), title = hero.querySelector("h1"), description = hero.querySelector("p");
    if (eyebrow && settings["header.welcomeSubtitle"]) eyebrow.lastChild.textContent = " " + settings["header.welcomeSubtitle"];
    if (title && settings["header.welcomeTitle"]) title.textContent = settings["header.welcomeTitle"];
    if (description && settings["header.description"]) description.textContent = settings["header.description"];
  }
  window.MHR_APPLY_SITE_CONTACT?.();
  const navLinks = document.querySelectorAll(".nav-link");
  content.navigation.slice(0, navLinks.length).forEach((item, index) => {
    navLinks[index].textContent = item.label;
    navLinks[index].href = item.target;
  });
  const sectionNodes = { announcements: document.getElementById("announcements"), forms: document.getElementById("forms"), services: document.getElementById("services"), policies: document.getElementById("policies"), contact: document.getElementById("info") };
  const configuredSectionKeys = new Set(content.contentSections.map(section => section.sectionKey));
  if (configuredSectionKeys.size) Object.keys(sectionNodes).forEach(key => { if (sectionNodes[key]) sectionNodes[key].hidden = !configuredSectionKeys.has(key); });
  content.contentSections.forEach(section => {
    const node = sectionNodes[section.sectionKey];
    if (!node) return;
    node.hidden = false;
    const title = node.querySelector("h2"), description = node.querySelector(".section-title p, .contact-panel > div > p");
    if (title && section.title) title.textContent = section.title;
    if (description && section.description) description.textContent = section.description;
  });
  const contactItems = document.querySelector(".contact-items");
  if (contactItems) {
    contactItems.querySelectorAll(".cms-social-link").forEach(link => link.remove());
    content.socialLinks.forEach(item => {
      const link = document.createElement("a"); link.className = "contact-item cms-social-link"; link.textContent = item.label; link.href = item.url;
      if (item.targetType === "url") { link.target = "_blank"; link.rel = "noopener noreferrer"; }
      contactItems.appendChild(link);
    });
  }
}

function applyPublicContent(content, saveToCache = true) {
  const normalized = normalizePublicContent(content);
  applyThemeAndSettings(normalized);
  applySiteData(contentToLegacyData(normalized));
  if (saveToCache) writeCache(normalized);
  return normalized;
}

/* =========================
   Header Scroll
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
   Inject Config
========================= */

function injectConfig() {
  window.MHR_APPLY_SITE_CONTACT?.();

  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const applyBtn = document.getElementById("applyFormBtn");

  if (applyBtn) {
    applyBtn.href = CONFIG.applyFormUrl || "#";
  }

  const applyQuickBtn = document.getElementById("applyFormQuick");

  if (applyQuickBtn) {
    applyQuickBtn.href = CONFIG.applyFormUrl || "#";
  }

  const applyBtn2 = document.getElementById("applyFormBtn2");

  if (applyBtn2) {
    applyBtn2.href = CONFIG.applyFormUrl || "#";
  }

  const formLinks = {
    leaveFormBtn: CONFIG.leaveFormUrl,
    employeeDataFormBtn: CONFIG.employeeDataFormUrl,
    taskRequestFormBtn: CONFIG.taskRequestFormUrl,
    employeeArchiveFormBtn: CONFIG.employeeArchiveFormUrl,
    custodyRequestFormBtn: CONFIG.custodyRequestFormUrl
  };

  Object.keys(formLinks).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = formLinks[id] || "#";
  });
}

/* =========================
   Reveal Observer (shared)
========================= */

let revealObserver = null;

function observeReveals() {
  if (!revealObserver) return;

  document.querySelectorAll(".reveal:not(.revealed)").forEach(item => {
    revealObserver.observe(item);
  });
}

/* =========================
   Forms Grid
========================= */

function sizeClass(size) {
  const s = String(size || "").trim().toLowerCase();
  return s === "wide" ? " card-size-wide" : (s === "large" ? " card-size-large" : (s === "small" ? " card-size-small" : ""));
}

const formsGrid = document.querySelector("#forms .forms-grid");

function renderForms() {
  if (!formsGrid) return;

  const active = (FORMS || [])
    .filter(f => toBool(f.isActive ?? true))
    .sort((a, b) => toNum(a.sortOrder, 9999) - toNum(b.sortOrder, 9999));

  formsGrid.innerHTML = active.map(f => `
    <div class="card form-card reveal${sizeClass(f.size)}">
      <div class="card-head">
        <div>
          <h3>${esc(f.title || "")}</h3>
          <p>${esc(f.subtitle || "")}</p>
        </div>
        <span class="badge blue">${esc(f.badge || "نموذج")}</span>
      </div>
      <div class="card-body">
        <div class="icon-box">${esc(f.icon || "")}</div>
        <p class="apply-text">${esc(f.description || "")}</p>
        <a class="btn btn-primary btn-sm" href="${esc(f.linkUrl || "#")}" target="_blank" rel="noopener">${esc(f.linkText || "فتح النموذج")}</a>
      </div>
    </div>
  `).join("");

  observeReveals();
}

/* =========================
   Policies Grid
========================= */

const policiesGrid = document.getElementById("policiesGrid");

function renderPolicies() {
  if (!policiesGrid) return;

  const active = (POLICIES || [])
    .filter(policy => toBool(policy.active ?? true) && isSafePolicyFileUrl(policy.fileUrl))
    .sort((a, b) => toNum(a.order, 9999) - toNum(b.order, 9999));

  if (active.length === 0) {
    policiesGrid.innerHTML = `
      <div class="empty-state policies-empty">
        <h3>لا توجد سياسات منشورة حالياً</h3>
        <p>سيتم نشر السياسات واللوائح الداخلية المعتمدة في هذا القسم عند توفرها.</p>
      </div>
    `;
    return;
  }

  policiesGrid.innerHTML = active.map(policy => {
    const version = String(policy.version || "").trim();
    const updatedDate = String(policy.updatedDate || "").trim();
    const metadata = [
      version ? `<span>الإصدار: ${esc(version)}</span>` : "",
      updatedDate ? `<span>آخر تحديث: ${esc(formatDisplayDate(updatedDate))}</span>` : ""
    ].filter(Boolean).join("");

    return `
      <article class="card policy-card reveal">
        <div class="policy-card-top">
          <div class="policy-icon" aria-hidden="true">${esc(policy.icon || "📄")}</div>
          <span class="policy-type">وثيقة داخلية</span>
        </div>
        <div class="policy-card-content">
          <h3>${esc(policy.title || "سياسة داخلية")}</h3>
          <p>${esc(policy.description || "")}</p>
          ${metadata ? `<div class="policy-meta">${metadata}</div>` : ""}
        </div>
        <a class="btn policy-btn btn-sm" href="${esc(policy.fileUrl)}" target="_blank" rel="noopener noreferrer">
          ${esc(policy.buttonText || "عرض السياسة")}
        </a>
      </article>
    `;
  }).join("");

  observeReveals();
}

/* =========================
   Announcements
========================= */

const annList = document.getElementById("annList");

function renderAnnouncements() {
  if (!annList) return;

  annList.innerHTML = "";

  const active = (ANNOUNCEMENTS || []).filter(a => toBool(a.isActive ?? true));

  const sorted = [...active].sort((a, b) => {
    const pa = toNum(a.priority, 9999);
    const pb = toNum(b.priority, 9999);

    if (pa !== pb) return pa - pb;

    return String(b.date || "").localeCompare(String(a.date || ""));
  });

  if (sorted.length === 0) {
    annList.innerHTML = `
      <div class="empty-state">
        <h3>لا توجد إعلانات حالياً</h3>
        <p>يرجى متابعة هذه الصفحة للاطلاع على تحديثات قسم الموارد البشرية عند نشرها.</p>
      </div>
    `;
    return;
  }

  sorted.forEach(a => {
    const hasLink = a.linkUrl && a.linkUrl !== "#";
    const displayDate = formatDisplayDate(a.date);

    const wrap = document.createElement("article");
    wrap.className = "card ann-item";

    wrap.innerHTML = `
      <div class="card-body announcement-card-body">

        <div class="announcement-top">
          <span class="announcement-tag">
            🏷️ ${esc(a.tag || "إعلان")}
          </span>

          <span class="announcement-date">
            📅 ${esc(displayDate)}
          </span>
        </div>

        <h3 class="ann-title">
          ${esc(a.title || "بدون عنوان")}
        </h3>

        <p class="ann-text">
          ${esc(a.body || "")}
        </p>

        ${hasLink ? `
          <div class="ann-actions">
            <a class="btn btn-primary btn-sm" href="${esc(a.linkUrl)}" target="_blank" rel="noopener">
              ${esc(a.linkText || "عرض التفاصيل")}
            </a>
          </div>
        ` : ``}

      </div>
    `;

    annList.appendChild(wrap);
  });
}

function applySiteData(data, opts) {
  const shouldRenderAll = !opts || opts.renderAll !== false;

  let nextQuickCards = normalizeQuickCards(data.quickCards);
  if (!nextQuickCards.some(card => card.quickKey === "policies")) {
    nextQuickCards.push({ ...FALLBACK_QUICK_CARDS.find(card => card.quickKey === "policies") });
  }
  let nextForms = normalizeForms(data.forms);
  const nextServices = Array.isArray(data.services) ? data.services : [];
  let nextAnnouncements = normalizeAnnouncementsData(
    Array.isArray(data) ? data : (data.announcements || [])
  );
  const hasPoliciesData = Array.isArray(data && data.policies) || Array.isArray(data && data.Policies);
  let nextPolicies = normalizePolicies(
    hasPoliciesData ? (data.policies || data.Policies) : FALLBACK_POLICIES
  );

  const changed = JSON.stringify({ q: nextQuickCards, f: nextForms, s: nextServices, a: nextAnnouncements, p: nextPolicies }) !==
    JSON.stringify({ q: QUICK_CARDS, f: FORMS, s: SERVICES, a: ANNOUNCEMENTS, p: POLICIES });

  QUICK_CARDS = nextQuickCards;
  FORMS = nextForms;
  SERVICES = nextServices;
  if (!FIRESTORE_ANNOUNCEMENTS_READY) ANNOUNCEMENTS = nextAnnouncements;
  POLICIES = nextPolicies;

  if (shouldRenderAll && changed) {
    renderForms();
    renderAnnouncements();
    renderPolicies();
  }

}

const servicesSection = document.getElementById("services");
const servicesGrid = document.getElementById("servicesGrid");

function renderServices() {
  if (!servicesSection || !servicesGrid) return;
  const active = (SERVICES || []).filter(service => toBool(service.isActive ?? service.active ?? true));
  servicesSection.hidden = active.length === 0;
  servicesGrid.replaceChildren();
  active.sort((a, b) => toNum(a.sortOrder, 9999) - toNum(b.sortOrder, 9999)).forEach(service => {
    const card = document.createElement("article");
    card.className = "card form-card reveal";
    const title = document.createElement("h3"); title.textContent = service.title || "خدمة";
    const description = document.createElement("p"); description.className = "apply-text"; description.textContent = service.description || "";
    const icon = document.createElement("div"); icon.className = "icon-box"; icon.textContent = service.icon || "🔗";
    const link = document.createElement("a"); link.className = "btn btn-primary btn-sm"; link.textContent = service.linkText || service.buttonText || "فتح الخدمة";
    link.href = safePublicUrl(service.linkUrl || service.url) || "#";
    if (toBool(service.openInNewTab)) { link.target = "_blank"; link.rel = "noopener noreferrer"; }
    const body = document.createElement("div"); body.className = "card-body"; body.append(icon, description, link);
    card.append(title, body); servicesGrid.appendChild(card);
  });
  observeReveals();
}

/* =========================
   CMS public rendering
========================= */

function cmsElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function cmsAction(text, url, openInNewTab, httpsOnly = false) {
  const safeUrl = httpsOnly ? safeCmsHttps(url) : safePublicUrl(url);
  if (!safeUrl) return cmsElement("span", "btn btn-primary btn-sm link-unavailable", getSystemMessage("notAvailable", "غير متاح حالياً."));
  const link = cmsElement("a", "btn btn-primary btn-sm", text || "فتح الرابط");
  link.href = safeUrl;
  if (openInNewTab) { link.target = "_blank"; link.rel = "noopener noreferrer"; }
  return link;
}

function renderCardCollection(grid, items, defaultButton) {
  if (!grid) return;
  grid.replaceChildren();
  items.filter(item => toBool(item.isActive ?? item.active ?? true)).forEach(item => {
    const card = cmsElement("article", "card form-card reveal");
    const head = cmsElement("div", "card-head");
    const heading = cmsElement("div"); heading.appendChild(cmsElement("h3", "", item.title));
    if (item.subtitle || item.category) heading.appendChild(cmsElement("p", "", item.subtitle || item.category));
    head.appendChild(heading); card.appendChild(head);
    const body = cmsElement("div", "card-body");
    body.appendChild(cmsElement("div", "icon-box", cmsIcon(item.icon)));
    if (item.description) body.appendChild(cmsElement("p", "apply-text", item.description));
    body.appendChild(cmsAction(item.linkText || item.buttonText || defaultButton, item.linkUrl || item.url, toBool(item.openInNewTab)));
    card.appendChild(body); grid.appendChild(card);
  });
  observeReveals();
}

function renderForms() {
  if (!formsGrid) return;
  formsGrid.replaceChildren();
  FORMS.filter(item => toBool(item.isActive ?? item.active ?? true)).forEach(item => {
    const card = cmsElement("article", "card form-card reveal");
    const head = cmsElement("div", "card-head");
    const heading = cmsElement("div");
    heading.appendChild(cmsElement("h3", "", item.title));
    if (item.subtitle || item.category) heading.appendChild(cmsElement("p", "", item.subtitle || item.category));
    head.appendChild(heading);
    const body = cmsElement("div", "card-body");
    if (item.description) body.appendChild(cmsElement("p", "apply-text", item.description));
    body.appendChild(cmsAction(item.linkText || item.buttonText || "فتح النموذج", item.linkUrl || item.url, toBool(item.openInNewTab)));
    card.append(head, body);
    formsGrid.appendChild(card);
  });
  observeReveals();
}

function renderServices() {
  if (!servicesSection || !servicesGrid) return;
  const active = SERVICES.filter(item => toBool(item.isActive ?? item.active ?? true));
  servicesSection.hidden = active.length === 0;
  renderCardCollection(servicesGrid, active, "فتح الخدمة");
}

function renderPolicies() {
  if (!policiesGrid) return;
  policiesGrid.replaceChildren();
  const active = POLICIES.filter(item => toBool(item.active ?? item.isActive ?? true));
  if (!active.length) { policiesGrid.appendChild(cmsElement("p", "empty-state", getSystemMessage("noData", "لا توجد سياسات منشورة حالياً."))); return; }
  active.forEach(item => {
    const card = cmsElement("article", "card policy-card reveal");
    const top = cmsElement("div", "policy-card-top"); top.appendChild(cmsElement("div", "policy-icon", cmsIcon(item.icon))); top.appendChild(cmsElement("span", "policy-type", item.category || "وثيقة داخلية"));
    const content = cmsElement("div", "policy-card-content"); content.appendChild(cmsElement("h3", "", item.title));
    if (item.description) content.appendChild(cmsElement("p", "", item.description));
    const metadata = [item.version ? "الإصدار: " + item.version : "", item.updatedDate || item.publishDate ? "آخر تحديث: " + formatDisplayDate(item.updatedDate || item.publishDate) : ""].filter(Boolean);
    if (metadata.length) content.appendChild(cmsElement("div", "policy-meta", metadata.join(" — ")));
    card.append(top, content, cmsAction(item.buttonText || "عرض السياسة", item.fileUrl || item.url, toBool(item.openInNewTab), true)); policiesGrid.appendChild(card);
  });
  observeReveals();
}

function renderAnnouncements() {
  if (!annList) return;
  annList.replaceChildren();
  const active = ANNOUNCEMENTS.filter(item => toBool(item.isActive ?? item.active ?? true));
  if (!active.length) { annList.appendChild(cmsElement("p", "empty-state", getSystemMessage("noData", "لا توجد إعلانات حالياً."))); return; }
  active.forEach(item => {
    const card = cmsElement("article", "card ann-item " + (ANNOUNCEMENT_CLASS_MAP[item.type] || ANNOUNCEMENT_CLASS_MAP.normal));
    const body = cmsElement("div", "card-body announcement-card-body");
    const top = cmsElement("div", "announcement-top"); top.appendChild(cmsElement("span", "announcement-tag", cmsIcon(item.icon) + " " + (item.type || "إعلان")));
    if (item.date || item.startDate) top.appendChild(cmsElement("span", "announcement-date", "📅 " + formatDisplayDate(item.date || item.startDate)));
    body.append(top, cmsElement("h3", "ann-title", item.title)); if (item.body || item.description) body.appendChild(cmsElement("p", "ann-text", item.body || item.description));
    const action = cmsAction(item.linkText || item.buttonText || "عرض التفاصيل", item.linkUrl || item.url, toBool(item.openInNewTab));
    if (action.tagName === "A") { const actions = cmsElement("div", "ann-actions"); actions.appendChild(action); body.appendChild(actions); }
    card.appendChild(body); annList.appendChild(card);
  });
}

function applyCmsSettings(content) {
  CMS_MESSAGES = Object.freeze({ ...CMS_MESSAGES, ...content.systemMessages });
  const vars = { primaryColor: "--primary-color", secondaryColor: "--secondary-color", accentColor: "--accent-color", backgroundColor: "--background-color", surfaceColor: "--surface-color", textColor: "--text-color", mutedTextColor: "--muted-text-color" };
  Object.keys(vars).forEach(key => { const value = content.theme[key]; if (/^#[0-9a-f]{6}$/i.test(value || "")) document.documentElement.style.setProperty(vars[key], value); });
  const radius = Number(content.theme.borderRadius);
  if (Number.isFinite(radius) && radius >= 8 && radius <= 24) document.documentElement.style.setProperty("--card-radius", radius + "px");
  const settings = content.settings;
  if (settings["site.pageTitle"]) document.title = settings["site.pageTitle"];
  if (["ar", "en"].includes(settings["site.language"])) document.documentElement.lang = settings["site.language"];
  if (["rtl", "ltr"].includes(settings["site.direction"])) document.documentElement.dir = settings["site.direction"];
  const targets = { "header.welcomeTitle": "cmsWelcomeTitle", "header.welcomeSubtitle": "cmsWelcomeSubtitle", "header.description": "cmsWelcomeDescription", "header.adminButtonText": "adminLoginSubmit", "contact.title": "cmsContactTitle", "contact.description": "cmsContactDescription", "contact.workingHours": "cmsWorkingHours", "footer.copyrightText": "cmsFooterText" };
  Object.keys(targets).forEach(key => { const node = document.getElementById(targets[key]); if (node && settings[key]) node.textContent = settings[key].replace("{year}", String(new Date().getFullYear())); });
  window.MHR_APPLY_SITE_CONTACT?.();
}

function applyCmsSections(content) {
  const map = { announcements: document.getElementById("announcements"), forms: document.getElementById("forms"), services: document.getElementById("services"), policies: document.getElementById("policies"), contact: document.getElementById("info") };
  const known = new Set(content.contentSections.map(item => item.sectionKey));
  if (known.size) Object.keys(map).forEach(key => { if (map[key]) map[key].hidden = !known.has(key); });
  content.contentSections.forEach(item => { const node = map[item.sectionKey]; if (!node) return; node.hidden = false; const title = node.querySelector("h2"), description = node.querySelector(".section-title p, .contact-panel p"); if (title && item.title) title.textContent = item.title; if (description && item.description) description.textContent = item.description; });
  const main = document.querySelector("main"); if (main) content.contentSections.forEach(item => { if (map[item.sectionKey]) main.appendChild(map[item.sectionKey]); });
}

function applyCmsNavigation(content) {
  const nav = document.querySelector(".nav-actions"); if (!nav || !content.navigation.length) return;
  const staticAdmin = nav.querySelector("button"); nav.querySelectorAll(".nav-link").forEach(node => node.remove());
  content.navigation.forEach(item => { const url = safePublicUrl(item.target || item.url); if (!url) return; const link = cmsElement("a", "nav-link", item.label); link.href = url; if (item.targetType === "url") { link.target = "_blank"; link.rel = "noopener noreferrer"; } nav.insertBefore(link, staticAdmin); });
}

function applyCmsSocialLinks(content) {
  const holder = document.getElementById("socialLinks"); if (!holder) return; holder.replaceChildren();
  const allowed = new Set(["facebook", "instagram", "linkedin", "youtube", "whatsapp", "telegram", "x", "website"]);
  content.socialLinks.forEach(item => { if (!allowed.has(safeText(item.platform))) return; const url = safePublicUrl(item.url); if (!url) return; const link = cmsElement("a", "contact-item cms-social-link", item.label); link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer"; holder.appendChild(link); });
}

function renderCmsPortal(content, saveToCache = true) {
  const normalized = normalizePublicContent(content);
  applyCmsSettings(normalized); CMS_MESSAGES = Object.freeze({ ...CMS_MESSAGES, ...normalized.systemMessages });
  const legacy = contentToLegacyData(normalized); QUICK_CARDS = legacy.quickCards; FORMS = legacy.forms; SERVICES = legacy.services; if (!FIRESTORE_ANNOUNCEMENTS_READY) ANNOUNCEMENTS = legacy.announcements; POLICIES = legacy.policies;
  renderAnnouncements(); renderForms(); renderServices(); renderPolicies(); applyCmsNavigation(normalized); applyCmsSocialLinks(normalized); applyCmsSections(normalized);
  if (saveToCache) writeCmsCache(normalized); return normalized;
}

/* =========================
   Admin Login Modal
========================= */

const adminLoginModal = document.getElementById("adminLoginModal");
const adminPasswordInput = document.getElementById("adminPassword");
const adminLoginError = document.getElementById("adminLoginError");
const adminEmailInput = document.getElementById("adminEmail");

function openAdminLogin() {
  if (adminLoginModal) {
    adminLoginModal.classList.add("show");
    adminLoginModal.setAttribute("aria-hidden", "false");
  }

  if (adminPasswordInput) {
    adminPasswordInput.value = "";
    setTimeout(() => (adminEmailInput || adminPasswordInput).focus(), 100);
  }

  if (adminLoginError) {
    adminLoginError.textContent = sessionStorage.getItem("mhr_admin_login_notice") || "";
    sessionStorage.removeItem("mhr_admin_login_notice");
  }
}

function closeAdminLogin() {
  if (adminLoginModal) {
    adminLoginModal.classList.remove("show");
    adminLoginModal.setAttribute("aria-hidden", "true");
  }

  if (adminPasswordInput) {
    adminPasswordInput.value = "";
  }

  if (adminLoginError) {
    adminLoginError.textContent = "";
  }
}

async function submitAdminLogin() {
  const entered = (adminPasswordInput?.value || "").trim();
  const email = (adminEmailInput?.value || "").trim();
  const submitBtn = document.getElementById("adminLoginSubmit");

  if (!email || !entered) {
    if (adminLoginError) adminLoginError.textContent = "أدخل كلمة المرور.";
    return;
  }

  if (submitBtn) submitBtn.disabled = true;
  if (adminLoginError) adminLoginError.textContent = "جاري التحقق...";

  try {
    if (!window.MHR_ADMIN_AUTH) throw new Error("AUTH_NOT_READY");
    await window.MHR_ADMIN_AUTH.login(email, entered);

    window.location.href = "admin.html";
  } catch (err) {
    console.error("تعذر إنشاء جلسة الأدمن المحلية:", err);
    if (adminLoginError) adminLoginError.textContent = "تعذر إكمال تسجيل الدخول محلياً.";
  } finally {
    if (adminPasswordInput) adminPasswordInput.value = "";
    if (submitBtn) submitBtn.disabled = false;
  }
}

if (adminPasswordInput) {
  adminPasswordInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      submitAdminLogin();
    }
  });
}

if (adminLoginModal) {
  adminLoginModal.addEventListener("click", e => {
    if (e.target === adminLoginModal) {
      closeAdminLogin();
    }
  });
}

/* =========================
   Reveal Animation
========================= */

function initRevealAnimation() {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  observeReveals();
}

/* =========================
   Keyboard Shortcuts
========================= */

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeAdminLogin();
  }
});

/* =========================
   Init
========================= */

function loadFromCacheOrFallback() {
  // Firestore modules restore their own per-collection cache and then subscribe.
  renderForms(); renderServices(); renderPolicies(); renderAnnouncements();
  return null;
}

async function syncSiteDataInBackground() {
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  loadFromCacheOrFallback();

  initRevealAnimation();

});

/* ===== Accessible micro-interactions (presentation only) ===== */
(() => {
  const collections = [
    ["#annList", 2], ["#forms .forms-grid", 3],
    ["#servicesGrid", 3], ["#policiesGrid", 3]
  ];
  const showSkeletons = () => collections.forEach(([selector, count]) => {
    const node = document.querySelector(selector);
    if (!node || node.children.length) return;
    node.setAttribute("aria-busy", "true");
    node.innerHTML = Array.from({ length: count }, () => '<div class="skeleton-card" aria-hidden="true"></div>').join("");
  });
  const markReady = () => collections.forEach(([selector]) => document.querySelector(selector)?.setAttribute("aria-busy", "false"));
  const toast = (message, type = "info") => {
    const region = document.getElementById("publicToastRegion");
    if (!region || !message) return;
    const item = document.createElement("div"); item.className = `toast ${type}`; item.textContent = message;
    region.appendChild(item); window.setTimeout(() => item.remove(), 4200);
  };
  window.MHR_TOAST = toast;
  document.addEventListener("DOMContentLoaded", () => {
    showSkeletons();
    const header = document.getElementById("header"), backToTop = document.getElementById("backToTop");
    const onScroll = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 14);
      backToTop?.classList.toggle("is-visible", window.scrollY > 520);
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    const navLinks = [...document.querySelectorAll(".nav-link[href^='#']")];
    if ("IntersectionObserver" in window) new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
    }), { rootMargin: "-35% 0px -58% 0px" }).observe(document.getElementById("home"));
    ["announcements", "forms"].forEach(id => document.getElementById(id) && new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
    }), { rootMargin: "-35% 0px -58% 0px" }).observe(document.getElementById(id)));
  });
  ["mhr-firestore-announcements-data", "mhr-firestore-cms-data"].forEach(eventName => document.addEventListener(eventName, markReady));
})();

/* ===== Lightweight hero hub parallax ===== */
document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector(".hr-hub-scene");
  if (!scene || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || !window.matchMedia?.("(pointer: fine)").matches) return;
  let frame = 0;
  scene.addEventListener("pointermove", event => {
    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => { scene.style.setProperty("--tilt-x", `${-y * 3}deg`); scene.style.setProperty("--tilt-y", `${x * 4}deg`); });
  });
  scene.addEventListener("pointerleave", () => { scene.style.setProperty("--tilt-x", "0deg"); scene.style.setProperty("--tilt-y", "0deg"); });
});
