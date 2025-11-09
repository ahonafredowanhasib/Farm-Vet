function showTab(name) {
    document.querySelectorAll(".tab-menu div").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    document.getElementById(name + "Tab").classList.add("active");
    document.getElementById(name + "Content").classList.add("active");
}

function togglePassword(id, icon) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
    icon.textContent = input.type === "text" ? "🙈" : "👁️";
}

function redirectToDashboard() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;

    const demoEmail = "demo@gmail.com";
    const demoPass = "1234567";

    if (email === demoEmail && pass === demoPass) {
        window.location.href = "./dashboard/dashboard.html"; 
    } else {
        alert("❌ ইমেইল বা পাসওয়ার্ড ভুল!");
    }
}

document.getElementById("loginTab").onclick = () => showTab("login");
document.getElementById("registerTab").onclick = () => showTab("register");
document.getElementById("resetTab").onclick = () => showTab("reset");
