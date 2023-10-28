var productsData = false;
document.addEventListener("DOMContentLoaded", function () {
    if (productsData === false) {
    
        setTimeout(function() {
            var spinnerContainer = document.querySelectorAll(".spinner-container");
            spinnerContainer.forEach(function(spinner) {
                spinner.classList.add("d-none");
            });
    
            var cardImages = document.querySelectorAll(".card-img-top");
            cardImages.forEach(function(image) {
                image.classList.remove("d-none");
            });
    
            var cardBodies = document.querySelectorAll(".card-body");
            cardBodies.forEach(function(body) {
                body.classList.remove("d-none");
            });
    
            var shimmer = document.getElementById("cardGroup");
            shimmer.style.background = "linear-gradient(90deg, transparent, transparent, transparent)";
        }, 2000);
    }
});
