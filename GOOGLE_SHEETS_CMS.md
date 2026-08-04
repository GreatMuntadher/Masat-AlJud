# Google Sheets CMS — بوابة موارد ماسة الجود

## النطاق والحالة

هذه وثائق الدفعتين الأولى والثانية. أُنشئت ملفات إعداد وقراءة محلية ولم يُعدَّل ملف Google Sheets الحقيقي ولم يُنشر Apps Script أو Web App. يستخدم الإعداد المعرّف `195hnqd8CGvq4hi3zvElthu4OicFM-8IPrUMrTCuJzR4`، أما رابط النشر `pubhtml` فليس API للموقع.

## خريطة المحتوى الحالية

| النص أو المحتوى | الملف الحالي | الموقع | ينقل إلى الشيت؟ | المفتاح المقترح |
|---|---|---|---|---|
| اسم الشركة والبوابة والعنوان | `index.html`, `script.js`, `manifest.json` | head/header/fallback | نعم للواجهة؛ manifest يبقى ثابتاً | `site.companyName`, `site.portalName`, `site.pageTitle` |
| الترحيب ووصف البوابة وزر الأدمن | `index.html` | Hero/header | نعم، عدا منطق الدخول | `header.*` |
| عناوين وأوصاف الأقسام | `index.html` | announcements/forms/policies/contact | نعم | `contentSections` |
| الإعلانات | `script.js` fallback | `annList` | نعم | `announcements` |
| الوصول السريع والنماذج والخدمات والسياسات | `script.js` fallback | grids | نعم | `quickCards`, `forms`, `services`, `policies` |
| بطاقات الإدارة | `admin.js` | لوحة الإدارة | نعم لاحقاً | `adminCards` |
| هاتف، بريد، ساعات عمل وFooter | `index.html`, `script.js` | contact/footer | نعم | `contact.*`, `footer.*` |
| رسائل عدم البيانات/دون اتصال | `offline.html`, JS | fallback/UI | نعم مع fallback برمجي ثابت | `systemMessages` |
| ترتيب/تفعيل/تواريخ الإعلان | fallback وواجهة الأدمن | قوائم الصفحة | نعم | `sortOrder`, `active`, dates |
| ألوان محدودة | `styles.css`, HTML theme color | الهوية | نعم لاحقاً ضمن حدود صارمة | `theme` |
| نصوص المصادقة، session/cache keys، endpoint، مدة الجلسة | `script.js`, `admin.js`, `PhaseB.gs` | النظام | لا | تبقى داخل الكود |
| أسرار، كلمات مرور، token، properties، عمليات الخادم | Apps Script | الأمن | لا قطعاً | غير قابل للتحكم |

النصوص التي تبقى داخل الكود: رسائل الأخطاء الأمنية التفصيلية، أسماء عمليات الخادم والكيانات الموثوقة، مفاتيح التخزين، URL الخاص بالـWeb App، التحقق من الروابط، HTML/CSS/DOM، Service Worker، وfallback صغير آمن.

## الأوراق وطريقة الإعداد

الأوراق الـ14 المطلوبة ووصف الأعمدة موجودة في [SHEET_SCHEMA.md](SHEET_SCHEMA.md). من محرر Apps Script المرتبط بالملف، أضف `apps-script/SetupContentSheets.gs` ثم شغّل يدوياً:

```javascript
setupMasatAlJudContentSheets()
```

تنشئ الدالة الأوراق المفقودة، رؤوس الأعمدة، تجميد الصف الأول، تنسيقاً بسيطاً، وقيم تحقق للقوائم. إذا وجدت ورقة باسم مطلوب لكن رؤوسها غير مطابقة، تنسخها إلى `*_backup_YYYYMMDD_HHMMSS` **ولا تمسح أو تستبدل الأصل**؛ راجعها ثم عالج التعارض وأعد التشغيل. الدالة قابلة للتكرار ولا تستبدل أي صف موجود.

بعد نجاح الإعداد، شغّل:

```javascript
seedCurrentWebsiteContent()
```

تضيف هذه الدالة قيم الموقع الحالية الآمنة فقط، بمفاتيح ثابتة، ولا تستبدل تعديلاً يدوياً. روابط `example.com` المؤقتة لا تُزرع كعناصر نشطة؛ ترحيل جميع عناصر الواجهة سيكتمل في الدفعة الثانية بعد توحيد قارئ البيانات والتحقق الخادمي.

## التحرير الآمن

- لتعطيل عنصر: اجعل `active` أو `enabled` بقيمة `false`.
- للترتيب: استخدم `sortOrder` أصغر أولاً؛ لا تعتمد على ترتيب الصفوف.
- الإعلان لا يظهر قبل `startDate` أو بعد `endDate` في قارئ الدفعة القادمة.
- أضف نموذجاً/خدمة/سياسة بــ`id` ثابت وفريد، نص عادي فقط، وأيقونة من القائمة المسموحة.
- الألوان في `theme` بصيغة `#RRGGBB` فقط؛ `borderRadius` رقم ضمن المدى الذي سيطبقه الكود (0–32).
- لا تضع أي Password أو Token أو Secret أو HTML أو JavaScript أو CSS أو SVG في أي خلية، ولا تستخدم روابط البروتوكولات المحظورة.

## القراءة والنشر والرجوع

أضيف في الدفعة الثانية `apps-script/ContentReadApi.gs`: قارئ JSON موحد يعيد الأوراق العامة فقط، ولا يعيد `auditLog` أو `schema`. يقرأ `CMS_SPREADSHEET_ID` من Script Properties، مع fallback تطويري فقط. يطبع القارئ النصوص العادية، الروابط الآمنة والحقول المطبعّة ويهمل الصفوف غير الفعالة أو غير الصالحة. لا تستخدم `pubhtml` كواجهة API. النشر يدوي فقط: راجع الكود، عيّن Property، ثم Deploy → Manage deployments → Web app، واختبر `/exec` قبل وضع رابطه في الموقع. لم يُنفّذ أي من ذلك ولا رُبطت الواجهة في هذه الدفعة. راجع [READ_API_DEPLOYMENT.md](apps-script/READ_API_DEPLOYMENT.md) للخطوات.

للرجوع: عطّل السجلات الجديدة أو استعد نسخة الورقة الاحتياطية التي أنشأها الإعداد. لا تحذف أوراقاً أو بيانات من دون نسخة/مراجعة. الكود المحلي الحالي يبقى fallback حتى ينجح قارئ CMS واختباراته.

## الواجهة العامة والكاش

يوثق [PUBLIC_CMS_INTEGRATION.md](PUBLIC_CMS_INTEGRATION.md) ربط الواجهة: تستخدم الصفحة fallback ثم `mhr_cache_v2` ثم Web App `/exec`، وبصلاحية كاش ثابتة أربع ساعات. لا يُستخدم `pubhtml` كـAPI، ولم يُنشر Apps Script أو يُعدّل الملف الحقيقي ضمن هذا العمل.
