/* ================= TYPING ================= */
const textArray = "Este es mi portafolio";
const typing = document.getElementById("typing");
let charIndex = 0;
function escribir() {
    if (charIndex < textArray.length) {
        typing.textContent += textArray.charAt(charIndex);
        charIndex++;
        setTimeout(escribir, 70);
    }
}
escribir();

/* ================= ASIDE + SCROLL ================= */
const aside = document.getElementById("sidebar");
const catBtn = document.getElementById("toggleAside");
const trabajosBtn = document.getElementById("trabajosBtn");
const detalleSeccion = document.getElementById("detalle-proyecto");
const tituloProyecto = document.getElementById("proyecto-titulo");
const descProyecto = document.getElementById("proyecto-descripcion");
let lastScroll = 0;

window.addEventListener("DOMContentLoaded", () => catBtn.classList.add("show"));
catBtn.addEventListener("click", () => aside.classList.toggle("active"));
trabajosBtn.addEventListener("click", () => aside.classList.add("active"));

window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current < 100) { catBtn.classList.add("show"); } 
    else if (current > lastScroll) { catBtn.classList.add("show"); aside.classList.remove("active"); } 
    else { aside.classList.add("active"); }
    lastScroll = current;
});

/* ================= ACORDEÓN Y CONTENIDO DINÁMICO ================= */
const BASE_URL = "repositorio-production-790f.up.railway.app";
/*const BASE_URL = "http://localhost:3000";*/
const toggles = document.querySelectorAll(".aside-toggle");

toggles.forEach(btn => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("active"));
});

const techLinks = document.querySelectorAll(".tech-link");
techLinks.forEach(link => {
    link.addEventListener("click", async (e) => {
        let techRaw = e.target.innerText.trim();
        
        // NORMALIZACIÓN: Mapeamos el texto del HTML a los valores del Dashboard/JSON
        let tecnologia = "";
        if (techRaw.toLowerCase() === "html y css") {
            tecnologia = "html-css";
        } else if (techRaw.toLowerCase() === "python") {
            tecnologia = "python";
        } else {
            tecnologia = "javascript";
        }
        
        const botonPadre = e.target.closest(".aside-item").querySelector(".aside-toggle").innerText;
        const categoria = botonPadre.toLowerCase().includes("moodle") ? "moodle" : "actividades";

        try {
            const response = await fetch(`${BASE_URL}/${categoria}`);
            const proyectos = await response.json();
            
            // Filtramos comparando con la tecnología normalizada
            const filtrados = proyectos.filter(p => p.lenguaje === tecnologia);

            detalleSeccion.style.display = "block";
            tituloProyecto.innerText = `${categoria.toUpperCase()}: ${techRaw.toUpperCase()}`;
            
            let htmlContenido = "";
            if (filtrados.length === 0) {
                htmlContenido = `<p>No hay proyectos aquí todavía. Agrégalos desde el Dashboard.</p>`;
            } else {
                filtrados.forEach(p => {
                    htmlContenido += `
                    <div style="background: rgba(255, 122, 0, 0.1); padding: 15px; border-radius: 12px; border: 1px solid #ff7a00; display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <img src="${p.img}" width="35" alt="icon">
                            <h4 style="margin:0;">${p.nombre}</h4>
                        </div>
                        <a href="${p.url}" target="_blank" style="background: #ff7a00; color: white; padding: 8px 15px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 12px;">IR</a>
                    </div>`;
                });
            }
            descProyecto.innerHTML = htmlContenido;
            detalleSeccion.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } catch (error) { 
            console.log("Error al cargar:", error);
            descProyecto.innerHTML = "<p style='color:red;'>Error al conectar con el servidor.</p>";
        }
    });
});

document.getElementById("close-detail").addEventListener("click", () => {
    detalleSeccion.style.display = "none";
});