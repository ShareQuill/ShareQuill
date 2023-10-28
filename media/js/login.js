const emailField = document.getElementById("inputEmail");
const passwordField = document.getElementById("inputPassword");
const continueBtn = document.getElementById("continue");
const progress = document.getElementById("progress");
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


const emailRegex = /^[a-zA-Z0-9.]+@northeastern\.edu$/;
const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

emailField.addEventListener("input",function(e) {
    if(!e.target.value.trim().match(emailRegex)) {
        passwordField.parentElement.classList = "d-none";
        progress.style.width = "0%";
    }
    else{
        passwordField.parentElement.classList = "d-block mb-3";
        progress.style.width = "50%";
    }
});

passwordField.addEventListener("input", function(e){
    if(!e.target.value.trim().match(passRegex)) {
        continueBtn.disabled = true;
        progress.style.width = "50%";
    }
    else{
        continueBtn.disabled = false;
        progress.style.width = "95%";
    }
})

continueBtn.addEventListener("click",function(){
    progress.style.width = "100%";
    appendAlert('Logged in successfully', 'success');
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000);
});
