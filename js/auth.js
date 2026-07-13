const SESSION_DURATION = 45 * 60 * 1000;
let sessionTimer = null;

function initUsers() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.length === 0) {
    users = [
      {
        email: "admin@cinemabooking.vn",
        password: "123456",
        fullName: "Quản trị viên",
        role: "admin",
        walletBalance: 0,
        transactions: []
      },
      {
        email: "user@gmail.com",
        password: "123456",
        fullName: "Người dùng mẫu",
        role: "user",
        walletBalance: 500000,
        transactions: []
      }
    ];

    localStorage.setItem("users", JSON.stringify(users));
  }

  const hasDefaultAdmin = users.some(user => user.email === "admin@cinemabooking.vn");
  if (!hasDefaultAdmin) {
    users.push({
      email: "admin@cinemabooking.vn",
      password: "123456",
      fullName: "Admin",
      role: "admin",
      walletBalance: 0,
      transactions: []
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
}

initUsers();

function openLoginModal() {
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.style.display = "flex";
  } else {
    window.location.href = "../auth/login.html";
  }
}

function openRegisterModal() {
  const modal = document.getElementById("registerModal");
  if (modal) {
    modal.style.display = "flex";
  } else {
    window.location.href = "../auth/register.html";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

function switchToRegister() {
  closeModal("loginModal");
  openRegisterModal();
}

function switchToLogin() {
  closeModal("registerModal");
  openLoginModal();
}

function register() {
  const fullName = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  if (!fullName || !email || !password) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(user => user.email === email)) {
    alert("Email đã tồn tại!");
    return;
  }

  users.push({ email, password, fullName, role: "user", walletBalance: 0, transactions: [] });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công! Vui lòng đăng nhập.");
  closeModal("registerModal");

  if (document.getElementById("loginModal")) {
    openLoginModal();
  } else {
    window.location.href = "login.html";
  }
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Vui lòng nhập email và mật khẩu!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(item => item.email === email && item.password === password);

  if (!user) {
    alert("Sai email hoặc mật khẩu!");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify({
    email: user.email,
    fullName: user.fullName,
    role: user.role,
    expiresAt: Date.now() + SESSION_DURATION
  }));
  startSessionTimer();

  if (user.role === "admin") {
    window.location.href = "../admin/dashboard.html";
  } else {
    alert("Đăng nhập thành công!");

    if (document.getElementById("loginModal")) {
      closeModal("loginModal");
      updateAuthArea();
      if (typeof renderHomePage === "function") renderHomePage();
    } else {
      window.location.href = "../user/index.html";
    }
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  clearSessionTimer();
  window.location.href = "../user/index.html";
}

function getCurrentUser() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) return null;

  if (!currentUser.expiresAt || Date.now() > currentUser.expiresAt) {
    localStorage.removeItem("currentUser");
    clearSessionTimer();
    return null;
  }

  return currentUser;
}

function clearSessionTimer() {
  if (sessionTimer) {
    clearTimeout(sessionTimer);
    sessionTimer = null;
  }
}

function startSessionTimer() {
  clearSessionTimer();

  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const timeLeft = currentUser.expiresAt - Date.now();
  sessionTimer = setTimeout(function () {
    localStorage.removeItem("currentUser");
    updateAuthArea();
    alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
    window.location.href = "../user/index.html";
  }, timeLeft);
}

function updateAuthArea() {
  const authArea = document.getElementById("authArea");
  if (!authArea) return;

  const currentUser = getCurrentUser();

  if (!currentUser) {
    authArea.innerHTML = `
      <button onclick="openLoginModal()">Đăng nhập</button>
      <button onclick="openRegisterModal()">Đăng ký</button>
    `;
  } else {
    authArea.innerHTML = `
      <span>Xin chào, ${currentUser.fullName}</span>
      <button onclick="logout()">Đăng xuất</button>
    `;
  }
}

function requireLogin(action, movieId = null) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    openLoginModal();
    return;
  }

  if (currentUser.role === "admin") {
    window.location.href = "../admin/dashboard.html";
    return;
  }

  if (action === "booking") {
    if (typeof openScheduleModal === "function") {
      openScheduleModal(movieId);
    } else {
      window.location.href = `booking.html?movieId=${movieId}`;
    }
  }
  if (action === "tickets") window.location.href = "tickets.html";
  if (action === "profile") window.location.href = "profile.html";
  if (action === "events") window.location.href = "events.html";
}

window.onload = function () {
  startSessionTimer();
  updateAuthArea();
};
