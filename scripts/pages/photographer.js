// Récupérer l'ID depuis l'URL
const photographerId = new URL(window.location.href).searchParams.get("id");

// Récupérer les informations du photographe depuis le fichier JSON
async function getPhotographerData() {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    const photographer = data.photographers.find(p => p.id === Number(photographerId));
    const medias = data.media.filter(m => m.photographerId === Number(photographerId));
    return { photographer, medias };
}

// Afficher les informations du photographe dans le DOM
async function displayPhotographerInfo(photographer) {
    const photographHeader = document.querySelector(".photograph-header");
    const photographerModel = photographerTemplate(photographer);
    const { infoPhotographer, imagePhotographer } = photographerModel.getProfilePageDOM();
    photographHeader.prepend(infoPhotographer);
    photographHeader.appendChild(imagePhotographer);
}

async function init() {
    const { photographer, medias } = await getPhotographerData();
    displayPhotographerInfo(photographer);
    displayMedias(photographer, medias);
}

init();

// Gestion des touches de retour en arrière
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace' || (event.altKey && event.key === 'ArrowLeft')) {
        event.preventDefault();
        window.history.back();
    }
});
