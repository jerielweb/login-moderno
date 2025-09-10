const loginFormSection = document.getElementById('login');
const registerFormSection = document.getElementById('register');
const toggleToRegisterBtn = document.getElementById('toggle-button');
const toggleToLoginBtn = document.getElementById('toggle-button2');

toggleToRegisterBtn.addEventListener('click', () => {
    loginFormSection.classList.remove('is-active');
    loginFormSection.classList.add('is-hidden');
    registerFormSection.classList.remove('is-hidden');
    requestAnimationFrame(() => {
        registerFormSection.classList.add('is-active');
    });
});

toggleToLoginBtn.addEventListener('click', () => {
    registerFormSection.classList.remove('is-active');
    registerFormSection.classList.add('is-hidden');
    loginFormSection.classList.remove('is-hidden');
    requestAnimationFrame(() => {
        loginFormSection.classList.add('is-active');
    });
});