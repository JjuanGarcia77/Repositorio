/* ================= TYPING ================= */
const text = "Este es mi portafolio";
const typing = document.getElementById("typing");

let i = 0;

function escribir() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(escribir, 70);
    }
}

escribir();



/* ================= ASIDE + SCROLL INTELIGENTE ================= */

const aside = document.getElementById("sidebar");
const catBtn = document.getElementById("toggleAside");
const trabajosBtn = document.getElementById("trabajosBtn");

let lastScroll = 0;


/* click manual */
catBtn.addEventListener("click", () => {
    aside.classList.toggle("active");
});

trabajosBtn.addEventListener("click", () => {
    aside.classList.add("active");
});


/* scroll automático */
window.addEventListener("scroll", () => {

    const current = window.scrollY;

    if (current > lastScroll) {
        /* BAJANDO → mostrar gato, ocultar aside */
        catBtn.classList.add("show");
        aside.classList.remove("active");

    } else {
        /* SUBIENDO → ocultar gato, mostrar aside */
        catBtn.classList.remove("show");
        aside.classList.add("active");
    }

    lastScroll = current;

});

/* ================= ACORDEÓN ASIDE ================= */

const toggles = document.querySelectorAll(".aside-toggle");

toggles.forEach(btn => {

    btn.addEventListener("click", () => {

        const item = btn.parentElement;

        item.classList.toggle("active");

    });

});
