const emailField = document.getElementById("inputEmail");
const passwordField = document.getElementById("inputPassword");
const continueBtn = document.getElementById("continue");

const emailRegex = /^[a-zA-Z0-9.]+@northeastern\.edu$/;

emailField.addEventListener("input",function(e) {
    if(!e.target.value.trim().match(emailRegex)) {
        continueBtn.disabled = true;
        passwordField.parentElement.classList = "d-none";
    }
    else{
        continueBtn.disabled = false;
        passwordField.parentElement.classList = "d-block";
    }
});

continueBtn.addEventListener("click",function(){
    document.getElementById("Form").submit();
});
