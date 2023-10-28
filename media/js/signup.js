const emailField = document.getElementById("inputEmail");
const firstNameField = document.getElementById("inputFirstName");
const lastNameField = document.getElementById("inputLastname");
const passwordField = document.getElementById("inputPassword");
const continueBtn = document.getElementById("continue");
const modal = new bootstrap.Modal(document.getElementById('Modal'));

const emailRegex = /^[a-zA-Z0-9.]+@northeastern\.edu$/;
const nameRegex = /^[a-zA-Z]+$/;

firstNameField.addEventListener("input", function(e){
    if(e.target.value.trim().match(nameRegex) && firstNameField.value.length > 3) {
        lastNameField.parentElement.classList = "d-block h-50";
    }
    else{
        lastNameField.parentElement.classList = "d-none";
    }
});

lastNameField.addEventListener("input", function(e){
    if(e.target.value.trim().match(nameRegex) && firstNameField.value.length > 2) {
        emailField.parentElement.classList = "d-block h-50";
    }
    else{
        emailField.parentElement.classList = "d-none";
    }
});

emailField.addEventListener("input",function(e) {
    if(!e.target.value.trim().match(emailRegex)) {
        continueBtn.disabled = true;
        passwordField.parentElement.classList = "d-none";
    }
    else{
        continueBtn.disabled = false;
        passwordField.parentElement.classList = "d-block h-50";
    }
});

continueBtn.addEventListener("click",function(){
    modal.show();
})

document.getElementById("okBtn").addEventListener("click", function(){
    window.location.href = "index.html";
})