// assets/js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    setupAuthForms();
    checkLoginStatusAndRedirect(); 
    setupLogout();
});

function setupAuthForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginMessage = document.getElementById('loginMessage');
    const registerMessage = document.getElementById('registerMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            loginMessage.textContent = ''; 

            try {
                const result = await loginUserMock(email, password); 
                if (result.success) {
                    loginMessage.textContent = 'Đăng nhập thành công! Đang chuyển hướng...';
                    loginMessage.classList.add('success');
                    setTimeout(() => {
                        window.location.href = 'profile.html'; 
                    }, 1000);
                } else {
                    loginMessage.textContent = 'Đăng nhập thất bại: ' + result.message;
                    loginMessage.classList.add('error');
                }
            } catch (error) {
                loginMessage.textContent = 'Đăng nhập thất bại: ' + error.message;
                loginMessage.classList.add('error');
                console.error('Login error:', error);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            registerMessage.textContent = '';

            if (password !== confirmPassword) {
                registerMessage.textContent = 'Mật khẩu xác nhận không khớp.';
                registerMessage.classList.add('error');
                return;
            }

            try {
                const result = await registerUserMock(name, email, password); // from api.js
                if (result.success) {
                    registerMessage.textContent = 'Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.';
                    registerMessage.classList.add('success');
                    registerForm.reset();
                    document.getElementById('loginEmail').value = email;
                } else {
                    registerMessage.textContent = 'Đăng ký thất bại: ' + result.message;
                    registerMessage.classList.add('error');
                }
            } catch (error) {
                registerMessage.textContent = 'Đăng ký thất bại: ' + error.message;
                registerMessage.classList.add('error');
                console.error('Register error:', error);
            }
        });
    }
}

async function checkLoginStatusAndRedirect() {
    const currentUser = await getCurrentUserMock(); // from api.js
    const currentPage = window.location.pathname.split('/').pop();

    const loginRegisterButton = document.querySelector('nav ul li a.btn.btn-primary[href="login.html"]');
    const profileButton = document.querySelector('nav ul li a.btn.btn-primary[href="profile.html"]');
    const logoutButton = document.getElementById('logoutBtn');

    if (currentUser) {
        // User is logged in
        if (loginRegisterButton) loginRegisterButton.style.display = 'none';
        if (!profileButton) { 
            const navUl = document.querySelector('nav ul');
            if (navUl && currentPage !== 'profile.html') {
                const profileLi = document.createElement('li');
                profileLi.innerHTML = `<a href="profile.html" class="btn btn-primary">Hồ sơ của tôi</a>`;
                navUl.insertBefore(profileLi, navUl.lastElementChild); 
            }
        } else {
             profileButton.style.display = 'inline-block';
        }
        if (logoutButton) logoutButton.style.display = 'inline-block';

        if (currentPage === 'login.html') {
            window.location.href = 'profile.html';
        }
    } else {
        if (loginRegisterButton) loginRegisterButton.style.display = 'inline-block';
        if (profileButton) profileButton.style.display = 'none';
        if (logoutButton) logoutButton.style.display = 'none';

        if (currentPage === 'profile.html') {
            alert('Bạn cần đăng nhập để truy cập trang hồ sơ.');
            window.location.href = 'login.html';
        }
    }
}

function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logoutUserMock(); // from api.js
            alert('Bạn đã đăng xuất.');
            window.location.href = 'index.html'; 
        });
    }
}