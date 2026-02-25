let currentTab = 'actividades'; 
const BASE_URL = "https://tu-app-production.up.railway.app";

// Iconos actualizados
const langImages = {
    "html-css": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    "python": "https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png",
    "javascript": "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"
};

async function showTab(tab) {
    currentTab = tab;
    document.getElementById('tab-title').innerText = `Proyectos ${tab.toUpperCase()}`;
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    // Si haces clic en el botón, le ponemos la clase active
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    renderProjects();
}

async function renderProjects() {
    const list = document.getElementById('project-list');
    list.innerHTML = '<p style="color:gray;">Cargando...</p>';
    try {
        const response = await fetch(`${BASE_URL}/${currentTab}`);
        const proyectos = await response.json();
        list.innerHTML = '';
        proyectos.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <img src="${proj.img}" style="width: 45px; margin-top:10px;">
                <h4>${proj.nombre}</h4>
                <p style="font-size:12px; color:var(--orange)">${proj.lenguaje.toUpperCase()}</p>
                <button onclick="deleteProject('${proj.id}')" style="color:red; background:none; border:none; cursor:pointer; font-weight:bold;">[ELIMINAR]</button>
            `;
            list.appendChild(card);
        });
    } catch (e) { list.innerHTML = '<p>⚠️ Inicia el JSON Server</p>'; }
}

async function addNewProject() {
    const nameInput = document.getElementById('proj-name');
    const langSelect = document.getElementById('proj-lang');
    const urlInput = document.getElementById('proj-url');

    if (!nameInput.value.trim() || !urlInput.value.trim()) return alert("Completa los datos");

    const newProj = {
        nombre: nameInput.value,
        lenguaje: langSelect.value, // Esto será "html-css", "python" o "javascript"
        url: urlInput.value,
        img: langImages[langSelect.value] // Saca la URL del mapa de arriba
    };

    try {
        await fetch(`${BASE_URL}/${currentTab}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProj)
        });

        nameInput.value = ''; 
        urlInput.value = '';
        renderProjects();
    } catch (e) {
        alert("Error al guardar. ¿Está encendido el servidor?");
    }
}

async function deleteProject(id) {
    if(confirm("¿Seguro que quieres eliminarlo?")) {
        await fetch(`${BASE_URL}/${currentTab}/${id}`, { method: 'DELETE' });
        renderProjects();
    }
}

renderProjects();