const loginFormSection = document.getElementById('login');
const registerFormSection = document.getElementById('register');
const toggleToRegisterBtn = document.getElementById('toggle-button');
const toggleToLoginBtn = document.getElementById('toggle-button2');


loginFormSection.classList.add('active');

toggleToRegisterBtn.addEventListener('click', () => {
    loginFormSection.classList.remove('active');
    registerFormSection.classList.add('active');
});

toggleToLoginBtn.addEventListener('click', () => {
    registerFormSection.classList.remove('active');
    loginFormSection.classList.add('active');
});
