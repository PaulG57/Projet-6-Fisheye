// Récupérer l'ID depuis l'URL
const photographerId = new URL(window.location.href).searchParams.get("id");

// Afficher les informations du photographe dans le DOM
async function displayPhotographerInfo(photographer) {
    const photographHeader = document.querySelector(".photograph-header");
    const photographerModel = photographerTemplate(photographer);
    const infoPhotographer = photographerModel.getProfilePhotographerInfoDOM();
    const imagePhotographer = photographerModel.getProfilePhotographerImageDOM();
    photographHeader.prepend(infoPhotographer);
    photographHeader.appendChild(imagePhotographer);
}

// Afficher le nom du photographe dans le titre de la modal
async function displayPhotographerName(photographer) {
    const modalTitle = document.getElementById("contact_modal_title");
    modalTitle.insertAdjacentText("beforeend", photographer.name);
}

// Trier les médias
function sortMedias(medias, criteria) {
    switch (criteria) {
        case 'date':
            return [...medias].sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'popularite':
            return [...medias].sort((a, b) => b.likes - a.likes);
        case 'titre':
            return [...medias].sort((a, b) => a.title.localeCompare(b.title));
        default:
            return medias;
    }
}


// Trier et afficher les médias
async function sortAndDisplayMedias(criteria) {
    const { photographer, medias } = await getPhotographerData(photographerId);
    const sortedMedias = sortMedias(medias, criteria);
    displayMedias(photographer, sortedMedias);
}

// Récupérer la valeur du select et appliquer le tri
const select = document.getElementById("tri");
select.addEventListener("change", function() {
    const criteria = select.value;
    sortAndDisplayMedias(criteria);
})

async function init() {
    const { photographer, medias } = await getPhotographerData(photographerId);
    displayPhotographerInfo(photographer);
    displayPhotographerName(photographer);
    displayMedias(photographer, medias);
}

init();

// Gestion des touches de retour en arrière
document.addEventListener('keydown', function(event) {
    if ((event.key === 'Backspace' || (event.altKey && event.key === 'ArrowLeft'))) {
        const contactModal = document.getElementById('contact_modal');
        const modalStyle = window.getComputedStyle(contactModal);
        const isModalOpen = modalStyle.display !== 'none';

        if (!isModalOpen) {
            event.preventDefault();
            window.history.back();
        }
    }
});
