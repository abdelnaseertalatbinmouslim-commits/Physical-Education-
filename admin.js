// البيانات الأساسية للدخول
const ADMIN_USER = "Abdelnaseertalat111";
const ADMIN_PASS = "Abdelnaseertalat#111";

// مفتاح الحفظ في ذاكرة المتصفح
const STORAGE_KEY = "captain_lectures_db";

// 1. التحقق من تسجيل الدخول
function handleLogin(event) {
    event.preventDefault();
    const userInputs = document.querySelectorAll('#loginForm input');
    const username = userInputs[0].value.trim();
    const password = userInputs[1].value.trim();
    const errorMsg = document.getElementById('loginError');

    if (username === ADMIN_USER && password === ADMIN_PASS) {
        localStorage.setItem('captain_admin_logged', 'true');
        showAdminPanel();
    } else {
        if(errorMsg) errorMsg.innerText = "اسم المستخدم أو كلمة السر غير صحيحة!";
    }
}

// 2. إظهار لوحة التحكم بعد الدخول
function showAdminPanel() {
    const loginSec = document.getElementById('loginSection');
    const panelSec = document.getElementById('panelSection');
    if (loginSec) loginSec.classList.add('hidden');
    if (panelSec) panelSec.classList.remove('hidden');
    renderLecturesList();
}

// 3. إضافة محاضرة/ملف جديد
function addLecture(event) {
    event.preventDefault();
    
    const title = document.getElementById('lecTitle').value.trim();
    const year = document.getElementById('lecYear').value; // 'first' أو 'second'
    const term = document.getElementById('lecTerm').value; // 'term1' أو 'term2'
    const subject = document.getElementById('lecSubject').value.trim();
    const link = document.getElementById('lecLink').value.trim();

    if (!title || !subject || !link) {
        alert("يرجى ملء جميع الحقول المطلوب!");
        return;
    }

    const newLecture = {
        id: Date.now(),
        title,
        year,
        term,
        subject,
        link,
        date: new Date().toLocaleDateString('ar-EG')
    };

    // جلب البيانات القديمة وإضافة الجديدة
    const currentLectures = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    currentLectures.unshift(newLecture);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentLectures));

    alert("تمت إضافة المحاضرة بنجاح!");
    document.getElementById('addForm').reset();
    renderLecturesList();
}

// 4. عرض المحاضرات المضافة داخل لوحة التحكم مع خيار الحذف
function renderLecturesList() {
    const listContainer = document.getElementById('adminLecturesList');
    if (!listContainer) return;

    const lectures = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    if (lectures.length === 0) {
        listContainer.innerHTML = `<p class="text-gray-400 text-center py-4">لا توجد محاضرات مضافة حالياً.</p>`;
        return;
    }

    listContainer.innerHTML = lectures.map(lec => `
        <div class="glass-card p-4 rounded-xl mb-3 flex justify-between items-center border border-white/10">
            <div>
                <h5 class="font-bold text-white text-sm">${lec.title}</h5>
                <p class="text-xs text-gray-400">${lec.subject} | ${lec.year === 'first' ? 'الفرقة الأولى' : 'الفرقة الثانية'} (${lec.term === 'term1' ? 'ترم أول' : 'ترم ثاني'})</p>
            </div>
            <button onclick="deleteLecture(${lec.id})" class="bg-red-500/20 text-red-400 hover:bg-red-500/40 p-2 rounded-lg text-xs transition">
                <i class="fa-solid fa-trash"></i> حذف
            </button>
        </div>
    `).join('');
}

// 5. حذف محاضرة
function deleteLecture(id) {
    if (confirm("هل أنت تأكد من حذف هذه المحاضرة؟")) {
        let lectures = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        lectures = lectures.filter(lec => lec.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lectures));
        renderLecturesList();
    }
}

// 6. تسجيل الخروج
function logout() {
    localStorage.removeItem('captain_admin_logged');
    location.reload();
}

// التحقق التلقائي عند فتح الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('captain_admin_logged') === 'true') {
        showAdminPanel();
    }
});
