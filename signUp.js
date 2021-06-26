const submitButton = document.querySelector('.nextbutton');
const userPassword = document.querySelector('#pass');
const userConfirmPassword = document.querySelector('#confirmpass');
const nameOfuser = document.querySelector('.userName');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const reDirect = document.querySelector('.loginPage');
let epd = true;
let ufl = true;
submitButton.addEventListener('click', (e) => {

    validatingForm(`${nameOfuser.value}`, `${firstName.value}`, `${lastName.value}`);
    personalData(`${userPassword.value}`, `${userConfirmPassword.value}`);

    if (!epd) {
        submitButton.type = 'submit';
    }
    else {
        alert('Please fillout the red border box')
        epd = true;
        ufl = true;
    }

})
personalData = function (passwordvalue, repasswordvalue) {
    if ((passwordvalue === repasswordvalue) && !(repasswordvalue === "") && !(passwordvalue === "")) {
        reDirect.action = 'home.html';
        if (ufl) {
            epd = false;
        }
    }
    else {
        if (!(passwordvalue === repasswordvalue)) {
            userConfirmPassword.style.border = '2px solid red';
        }
        if (passwordvalue === "") {
            userPassword.style.border = '2px solid red';
        }
        if (repasswordvalue === "") {
            userConfirmPassword.style.border = '2px solid red';
        }
    }
}
validatingForm = function (userIDValue, FirstName, LastName) {
    if (FirstName == "") {
        firstName.style.border = '2px solid red';
        ufl = false;
    }
    if (LastName == "") {
        lastName.style.border = '2px solid red';
        ufl = false;
    }
    if (userIDValue == "") {
        nameOfuser.style.border = '2px solid red';
        ufl = false;
    }
}