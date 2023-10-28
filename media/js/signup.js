const emailField = document.getElementById("inputEmail");
const firstNameField = document.getElementById("inputFirstName");
const lastNameField = document.getElementById("inputLastname");
const passwordField = document.getElementById("inputPassword");
const continueBtn = document.getElementById("continue");
const modal = new bootstrap.Modal(document.getElementById('Modal'));
const progress = document.getElementById("progress");

const emailRegex = /^[a-zA-Z0-9.]+@northeastern\.edu$/;
const nameRegex = /^[a-zA-Z]+$/;
const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

firstNameField.addEventListener("input", function(e){
    if(e.target.value.trim().match(nameRegex) && firstNameField.value.length > 3) {
        lastNameField.parentElement.classList = "d-block h-50";
        progress.style.width = "25%";
    }
    else{
        lastNameField.parentElement.classList = "d-none";
        progress.style.width = "0%";
    }
});

lastNameField.addEventListener("input", function(e){
    if(e.target.value.trim().match(nameRegex) && firstNameField.value.length > 2) {
        emailField.parentElement.classList = "d-block h-50";
        progress.style.width = "50%";
    }
    else{
        emailField.parentElement.classList = "d-none";
        progress.style.width = "25%";
    }
});

emailField.addEventListener("input",function(e) {
    if(!e.target.value.trim().match(emailRegex)) {
        passwordField.parentElement.classList = "d-none";
        progress.style.width = "50%";
    }
    else{
        passwordField.parentElement.classList = "d-block h-50";
        progress.style.width = "75%";
    }
});

passwordField.addEventListener("input", function(e){
    if(!e.target.value.trim().match(passRegex)) {
        continueBtn.disabled = true;
        progress.style.width = "75%";
    }
    else{
        continueBtn.disabled = false;
        progress.style.width = "95%";
    }
})

continueBtn.addEventListener("click",function(){
    modal.show();
    progress.style.width = "100%";
})

function onCancelClick() {
    progress.style.width = "95%";
}

document.getElementById("okBtn").addEventListener("click", function(){
    window.location.href = "index.html";
})