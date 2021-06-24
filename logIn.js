const goToHome = document.querySelector('#logging');
const userId = document.querySelector('#userName');
const userPassword = document.querySelector('#userPassword');
const accId = 'akhshy';
const accPass = 'pass';
const check = goToHome.addEventListener('click', (e) => {
    return new Promise((resolve, reject) => {
        if ((userId.value === accId) && (userPassword.value === accPass)) {
            resolve(document.querySelector('#goTo').action = 'home.html')
        } else {
            userPassword.style.border = '2px solid red';
            reject(e.preventDefault())
        }
    })
})