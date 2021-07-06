let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".btn");
localStorage.setItem("user", "Akhshy");
localStorage.setItem("password", "Akhshy");

let user = localStorage.getItem("user");
let pass = localStorage.getItem("password");
let message = document.querySelector(".message");

submit.addEventListener('click', () => {
    if (user == txtuser.value && pass == txtpass.value) {
        message.innerHTML = "User Present";
    }
    else {
        message.innerHTML = "User not Present";
    }
})


