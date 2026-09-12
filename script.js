// رقم الواتساب الخاص بالعيادة (بالصيغة الدولية)
const CLINIC_WHATSAPP = "201108075117";

// 1. إرسال بيانات نموذج الحجز الكامل إلى الواتساب
function sendToWhatsapp(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    // جلب البيانات من الخانات
    const name = document.getElementById('patientName').value.trim();
    const phone = document.getElementById('patientPhone').value.trim();
    const service = document.getElementById('patientService').value;
    
    // صياغة نص الرسالة
    const textMessage = `مرحباً عيادة Bless Dental Clinic، أود حجز موعد كشف:\n📌 *الاسم:* ${name}\n📱 *رقم الهاتف:* ${phone}\n🦷 *الخدمة المطلوبة:* ${service}`;
    
    // تحويل النص لرمز يفهمه الرابط (URL Encoding)
    const encodedText = encodeURIComponent(textMessage);
    
    // استخدام رابط API المباشر المناسب لجميع الهواتف والآيفون
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CLINIC_WHATSAPP}&text=${encodedText}`;
    
    // فتح الرابط
    window.location.href = whatsappUrl;
}

// 2. إرسال طلب خدمة معينة مباشرة من كروت الخدمات
function bookSpecificService(serviceName) {
    // صياغة نص الرسالة
    const textMessage = `مرحباً عيادة Bless Dental Clinic، أود الاستفسار وحجز موعد لخدمة:\n🦷 *الخدمة المطلوبة:* ${serviceName}`;
    
    // تحويل النص
    const encodedText = encodeURIComponent(textMessage);
    
    // رابط API المباشر
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CLINIC_WHATSAPP}&text=${encodedText}`;
    
    // فتح الرابط
    window.location.href = whatsappUrl;
}
