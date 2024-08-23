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

// Afficher les médias dans le DOM
function displayMedias(medias, photographer) {
    const prenom = photographer.name.split(" ")[0];
    const mediaContainer = document.querySelector(".photograph-gallery");
    mediaContainer.innerHTML = "";
    medias.forEach(media => {
        const mediaCard = new MediaCard(media, prenom);
        mediaContainer.appendChild(mediaCard.createMediaCard());
    });
    mediaContainer.appendChild(displayTotalLikesPrice(medias, photographer));
}

// Trier et afficher les médias
async function sortAndDisplayMedias(criteria) {
    const { photographer, medias } = await getPhotographerData(photographerId);
    const sortedMedias = sortMedias(medias, criteria);
    displayMedias(sortedMedias, photographer);
}

async function init() {
    const { photographer, medias } = await getPhotographerData(photographerId);
    displayPhotographerInfo(photographer);
    displayPhotographerName(photographer);
    const sortedMedias = sortMedias(medias, 'popularite');
    displayMedias(sortedMedias, photographer);
    // Récupérer la valeur du select et appliquer le tri
    const select = document.getElementById("tri");
    select.addEventListener("change", function() {
    const criteria = select.value;
    sortAndDisplayMedias(criteria);
});
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
