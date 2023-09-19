 // JavaScript para aplicar el efecto de zoom al cargar la página
 document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".tarjeta");

    // Aplicar el efecto de zoom inicial
    card.classList.add("zoomed");

    // Eliminar el efecto de zoom después de un tiempo (puedes ajustar el tiempo según tus preferencias)
    setTimeout(function () {
        card.classList.remove("zoomed");
    }, 1200);
    
});

window.addEventListener("scroll", function () {
    const card = document.querySelector(".tarjeta");
    const scrollY = window.scrollY;
    const cardOffsetTop = card.offsetTop;

    // Define un punto de referencia para aplicar el fade-out
    const breakpoint = cardOffsetTop + card.clientHeight / 4;

    if (scrollY >= breakpoint) {
        card.classList.add("fade-out");
    } else {
        card.classList.remove("fade-out");
    }
});