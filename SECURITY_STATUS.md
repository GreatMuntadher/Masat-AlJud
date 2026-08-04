# حالة الأمان

طبقة الإدارة لا تحتوي على كلمة مرور أو hash أو salt أو session secret في JavaScript. تسجيل الدخول والـtoken والتحقق من الجلسة والكتابة يتمون في Apps Script بعد نشر Phase B يدوياً. يحتفظ المتصفح بالتوكن المؤقت فقط في `sessionStorage`، ويحتفظ بطابور العمليات محلياً دون توكن.

Phase B يقيّد الكيانات والحقول، يمنع اختيار sheet من العميل، يقيّد الروابط، يعالج Formula Injection، يستخدم lock وidempotency وconflict detection، ولا يسجل أسراراً في auditLog.
