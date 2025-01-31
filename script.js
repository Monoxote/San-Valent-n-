document.addEventListener("DOMContentLoaded", function() {
    let noButton = document.getElementById("no");
    let siButton = document.getElementById("si");
    let mensajeFinal = document.getElementById("mensaje-final");

    let size = 20; // Tamaño inicial en píxeles

    noButton.addEventListener("click", function() {
        size -= 2; // Reduce el tamaño
        if (size <= 5) {
            noButton.style.display = "none"; // Oculta el botón cuando es muy pequeño
        } else {
            noButton.style.fontSize = size + "px";
            noButton.style.padding = size / 2 + "px";
        }
    });

    siButton.addEventListener("click", function() {
        document.querySelector(".buttons").style.display = "none";
        mensajeFinal.classList.remove("oculto");
    });
});