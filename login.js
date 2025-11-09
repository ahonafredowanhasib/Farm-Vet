
function showTab(tabName) {
    document.querySelectorAll('.tab-menu div').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(tabName + 'Tab').classList.add('active');
    document.getElementById(tabName + 'Content').classList.add('active');
}

function togglePasswordVisibility(inputId, iconElement) {
    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        iconElement.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        iconElement.textContent = '👁️';
    }
}

document.getElementById('loginTab').addEventListener('click', () => showTab('login'));
document.getElementById('registerTab').addEventListener('click', () => showTab('register'));
document.getElementById('resetTab').addEventListener('click', () => showTab('reset'));

