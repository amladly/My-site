// رقم الواتساب الخاص بالعيادة
const CLINIC_WHATSAPP = "201108075117";

// 1. إرسال بيانات نموذج الحجز الكامل إلى الواتساب
function sendToWhatsapp(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    // جلب البيانات من الخانات
    const name = document.getElementById('patientName').value;
    const phone = document.getElementById('patientPhone').value;
    const service = document.getElementById('patientService').value;
    
    // صياغة الرسالة المنسقة
    const message = "مرحباً عيادة Bless Dental Clinic، أود حجز موعد كشف:" + "%0a" +
                    "📌 *الاسم:* " + encodeURIComponent(name) + "%0a" +
                    "📱 *رقم الهاتف:* " + encodeURIComponent(phone) + "%0a" +
                    "🦷 *الخدمة المطلوبة:* " + encodeURIComponent(service);
    
    // فتح رابط الواتساب
    const whatsappUrl = "https://wa.me/" + CLINIC_WHATSAPP + "?text=" + message;
    window.open(whatsappUrl, '_blank');
}

// 2. إرسال طلب خدمة معينة مباشرة من كروت الخدمات
function bookSpecificService(serviceName) {
    // صياغة الرسالة الجاهزة للخدمة
    const message = "مرحباً عيادة Bless Dental Clinic، أود الاستفسار وحجز موعد لخدمة:" + "%0a" +
                    "🦷 *الخدمة المطلوبة:* " + encodeURIComponent(serviceName);
    
    // فتح رابط الواتساب
    const whatsappUrl = "https://wa.me/" + CLINIC_WHATSAPP + "?text=" + message;
    window.open(whatsappUrl, '_blank');
}
