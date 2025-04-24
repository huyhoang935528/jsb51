// chuyển trangtrang
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1"); // Form đăng nhập
const secondForm = document.getElementById("form2"); // Form đăng ký
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

// 1. ktra form trc khi nhan du liẹu
function validateFormSignin(email, password) {
    // ktra kh trống các trường nhập
    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ các trường theo yêu cầu!");
        return false;
    }
    return true;
}

function validateFormSignup(username, email, password) {
    // ktra kh rỗng các trường nhập
    if (!username || !email || !password) {
        alert("Vui lòng nhập đầy đủ các trường theo yêu cầu!");
        return false;
    }

    // ktra cú pháp của username
    if (username.length < 6) {
        alert("Username phải có ít nhất 6 ký tự!");
        return false;
    }
    const hasLetter = /[a-zA-Z]/.test(username);
    const hasNumber = /\d/.test(username);
    if ((hasLetter && hasNumber)) { // Sửa lỗi: Yêu cầu username phải có cả chữ và số
        alert("Username phải chứa cả chữ và số!");
        return false;
    }

    // ktra cú pháp email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng!");
        return false;
    }

    // password > 6 ký tự
    if (password.length < 6) {
        alert("Password phải có ít nhất 6 ký tự!");
        return false;
    }
    return true;
}

// 2. tao user mới => lưu user local storage
function signup() {
    // lấy dữ liệu từ form HTML (form đăng ký - form2)
    const signupEmail = document.querySelector("#signup_email").value.trim();
    const signupUsername = document.getElementById("signup_username").value.trim(); // Giả sử id là signup_username
    const signupPassword = document.querySelector("#signup_password").value.trim();

    // ktra dữ liệu (format)
    if (validateFormSignup(signupUsername, signupEmail, signupPassword)) {
        // ktra trùng lặp user // email
        const duplicateEmail = localStorage.getItem(signupEmail);
        if (!duplicateEmail) {
            // luu vao local storage => email: {username, password}
            localStorage.setItem(signupEmail, JSON.stringify({ username: signupUsername, password: signupPassword }));
            // luu y: JSON.stringify doi tu kieu javascript (obj, arr,...) => JSON

            // chuyển trang
            alert("Đăng ký thành công!");
            window.location.href = "./html/home.html"; // Sử dụng window.location.href để chuyển trang
            return; // ket thuc ham
        } else {
            alert(
                "Email đã được sử dụng, vui lòng nhập email khác hoặc chuyển sang trang đăng nhập!"
            );
        }
    }
}

// 3. lấy dữ liệu user = so sánh => chuyển đến trang home
function signin() {
    // lay du lieu tu form html (form đăng nhập - form1)
    const signinEmail = document.querySelector("#signin_email").value.trim(); // Giả sử id là signin_email
    const signinPassword = document.querySelector("#signin_password").value.trim(); // Giả sử id là signin_password

    // ktra du lieu (format)
    if (validateFormSignin(signinEmail, signinPassword)) {
        // tim kiem du lieu phu hop => chuyen trang home
        const userInfoJSON = localStorage.getItem(signinEmail); // lay du lieu user thong qua email
        const userInfo = JSON.parse(userInfoJSON); // chuyen du lieu tu kieu JSON => javascript

        // kh co du lieu trong database
        if (!userInfo) {
            alert(
                "Thông tin đăng nhập không tồn tại trong hệ thống, vui lòng kiểm tra lại hoặc chuyển đến trang đăng ký!"
            );
            return;
        }

        // co du lieu trung khop => ktra password
        if (userInfo.password !== signinPassword) {
            alert("Mật khẩu không chính xác!");
            return; // neu sai du lieu => kh lam gi them
        }

        // dung het => chuyen trang
        alert("Đăng nhập thành công!");
        window.location.href = "./html/home.html"; // Sử dụng window.location.href để chuyển trang
    }
    // tim kiem du lieu phu hop => chuyen trang home
}

// bat su kien cho button signin
document.getElementById("signin_btn").addEventListener("click", function(event) {
    event.preventDefault(); // chan luong hoat mac dinh tu html
    signin();
});

// bat su kien cho button signup
document.getElementById("signup_btn").addEventListener("click", function(event) {
    event.preventDefault(); // chan luong hoat mac dinh tu html
    signup();
});