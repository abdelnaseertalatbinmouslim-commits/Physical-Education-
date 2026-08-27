/* 
  ======================================================
  Project: Admin Management System
  Developer: Eng. Abdel Nasser
  Status: Protected & Encrypted (Hex Obfuscated JS)
  ======================================================
*/

(function(_0x42f8a1, _0x3b879c) {
    var _0x5e1b20 = _0x1a8b, _0x2c6f1a = _0x42f8a1();
    while (true) {
        try {
            var _0x4d7c81 = parseInt(_0x5e1b20(0x1a2)) / 0x1 + -parseInt(_0x5e1b20(0x1a5)) / 0x2 + parseInt(_0x5e1b20(0x1a8)) / 0x3 * (parseInt(_0x5e1b20(0x1a9)) / 0x4) + -parseInt(_0x5e1b20(0x1ab)) / 0x5 + parseInt(_0x5e1b20(0x1ac)) / 0x6 + parseInt(_0x5e1b20(0x1ad)) / 0x7 + -parseInt(_0x5e1b20(0x1ae)) / 0x8;
            if (_0x4d7c81 === _0x3b879c) break; else _0x2c6f1a['push'](_0x2c6f1a['shift']());
        } catch (_0x3e71d2) {
            _0x2c6f1a['push'](_0x2c6f1a['shift']());
        }
    }
}(_0x3d4f, 0x7e39a));

function _0x1a8b(_0x59a11f, _0x16f2c3) {
    var _0x3d4f82 = _0x3d4f();
    return _0x1a8b = function(_0x1a8b41, _0x2a9a7c) {
        _0x1a8b41 = _0x1a8b41 - 0x1a0;
        var _0x50f6bf = _0x3d4f82[_0x1a8b41];
        return _0x50f6bf;
    }, _0x1a8b(_0x59a11f, _0x16f2c3);
}

function _0x3d4f() {
    var _0x11e48f = ['\x62\x37\x61\x32\x64\x34\x38\x30\x37\x34\x64\x32\x38\x66\x65\x37\x38\x30\x39\x36\x31\x62\x65\x33\x37\x35\x33\x35\x34\x65\x65\x65\x61\x30\x63\x38\x62\x64\x66\x63\x37\x36\x62\x39\x30\x66\x34\x63\x33\x39\x62\x37\x61\x34\x32\x65\x63\x33\x34\x34\x64\x62\x36\x66', '\x38\x35\x32\x62\x37\x35\x37\x33\x66\x62\x63\x32\x33\x65\x33\x32\x34\x30\x65\x34\x66\x34\x38\x61\x39\x37\x32\x66\x32\x30\x61\x32\x65\x35\x36\x34\x37\x35\x38\x61\x61\x31\x66\x61\x33\x34\x63\x32\x36\x61\x30\x62\x39\x34\x33\x64\x36\x63\x64\x64\x31\x37\x37\x35', '\x31\x61\x31\x64\x39\x31\x30\x34\x63\x39\x37\x33\x30\x31\x62\x34\x35\x61\x32\x35\x38\x66\x36\x30\x34\x30\x38\x31\x32\x63\x37\x38\x30\x35\x32\x65\x39\x32\x39\x32\x61\x37\x62\x33\x63\x30\x38\x64\x63\x30\x65\x39\x33\x32\x39\x30\x39\x30\x35\x34\x34\x31\x34\x63', '\x30\x31\x30\x39\x38\x32\x32\x37\x31\x35\x30', '1356784uJKlOP', 'SHA-256', 'login-form', '2165248xXzYtA', 'submit', 'admin-user', '1183203NdBvXW', '1241164WbQjLn', 'customPassHash', '1342625RzLmWp', '3606612tVkWqX', '16156152KzLxXy', 'hidden', 'login-section', 'dashboard-section', 'error-message', 'forgot-pass-btn', 'reset-modal', 'close-modal-btn', 'send-otp-btn', 'national-id-input', 'reset-error', 'reset-step-1', 'reset-step-2', 'confirm-reset-btn', 'otp-input', 'new-password-input'];
    return _0x11e48f;
}

const _0x110a = "b7a2d48074d28fe780961be375354eeea0c8bdfc76b90f4c39b7a42ec344db6f";
const _0x220b = "852b7573fbc23e3240e4f48a972620a2e564758aa1fa34c26a0b943d6cdd1775";
const _0x330c = "1a1d9104c97301b45a258f6040812c78052e9292a7b3c08dc0e932909054414c";
let _0x440d = null;

async function _0x550e(_0x1b2c) {
    const _0x5a11 = new TextEncoder();
    const _0x3c22 = _0x5a11.encode(_0x1b2c);
    const _0x1f34 = await crypto.subtle.digest('SHA-256', _0x3c22);
    return Array.from(new Uint8Array(_0x1f34)).map(_0x4b12 => _0x4b12.toString(16).padStart(2, '0')).join('');
}

document.getElementById('login-form').addEventListener('submit', async (_0x2e11) => {
    _0x2e11.preventDefault();
    const _0x1d22 = document.getElementById('admin-user').value.trim();
    const _0x4f33 = document.getElementById('admin-password').value.trim();

    const _0x5e44 = await _0x550e(_0x1d22);
    const _0x2a55 = await _0x550e(_0x4f33);
    const _0x3b66 = localStorage.getItem('customPassHash') || _0x220b;

    if (_0x5e44 === _0x110a && _0x2a55 === _0x3b66) {
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('dashboard-section').classList.remove('hidden');
    } else {
        const _0x1c77 = document.getElementById('error-message');
        _0x1c77.textContent = "اسم المستخدم أو كلمة السر غير صحيحة";
        _0x1c77.classList.remove('hidden');
    }
});

document.getElementById('forgot-pass-btn').addEventListener('click', () => {
    document.getElementById('reset-modal').classList.remove('hidden');
});

document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('reset-modal').classList.add('hidden');
});

document.getElementById('send-otp-btn').addEventListener('click', async () => {
    const _0x4d88 = document.getElementById('national-id-input').value.trim();
    const _0x2e99 = document.getElementById('reset-error');

    if (_0x4d88.length !== 14 || isNaN(_0x4d88)) {
        _0x2e99.textContent = "برجاء إدخال رقم قومي صحيح مكون من 14 رقم";
        _0x2e99.classList.remove('hidden');
        return;
    }

    const _0x1faa = await _0x550e(_0x4d88);

    if (_0x1faa !== _0x330c) {
        _0x2e99.textContent = "الرقم القومي غير مطابق للبيانات المسجلة";
        _0x2e99.classList.remove('hidden');
        return;
    }

    _0x440d = Math.floor(100000 + Math.random() * 900000).toString();
    _0x2e99.classList.add('hidden');

    alert(`[SMS - 01098227150]\nرمز التحقق الخارجي لإعادة التعيين هو: ${_0x440d}`);

    document.getElementById('reset-step-1').classList.add('hidden');
    document.getElementById('reset-step-2').classList.remove('hidden');
});

document.getElementById('confirm-reset-btn').addEventListener('click', async () => {
    const _0x3bbb = document.getElementById('otp-input').value.trim();
    const _0x5ccc = document.getElementById('new-password-input').value.trim();
    const _0x1ddd = document.getElementById('reset-error');

    if (_0x3bbb !== _0x440d) {
        _0x1ddd.textContent = "رمز التحقق (OTP) غير صحيح";
        _0x1ddd.classList.remove('hidden');
        return;
    }

    if (_0x5ccc.length < 6) {
        _0x1ddd.textContent = "كلمة السر الجديدة يجب أن تكون 6 خانات على الأقل";
        _0x1ddd.classList.remove('hidden');
        return;
    }

    const _0x4eee = await _0x550e(_0x5ccc);
    localStorage.setItem('customPassHash', _0x4eee);

    alert("تم تغيير كلمة السر بنجاح! يمكنك الآن تسجيل الدخول بها.");
    document.getElementById('reset-modal').classList.add('hidden');
});

document.getElementById('logout-btn')?.addEventListener('click', () => {
    location.reload();
});
