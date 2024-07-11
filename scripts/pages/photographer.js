// Récupérer l'ID depuis l'URL
const idPhotographer = new URL(window.location.href).searchParams.get("id");
const id = Number(idPhotographer);

// Récupérer les informations du photographe depuis le fichier JSON
async function getPhotographer(photographerId) {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    const photographer = data.photographers.find(photographer => photographer.id === photographerId);
    const media = data.media.filter(media => media.photographerId === photographerId);
    return { photographer, media };
}

// Afficher les informations du photographe dans le DOM
async function displayPhotographer() {
    const data = await getPhotographer(id);
    const { photographer, media } = data;

    console.log(photographer);
    console.log(media);

    const infoPhotographer = document.createElement("div");
    infoPhotographer.classList.add("info-photographer");

    const namePhotographer = document.createElement("h1");
    namePhotographer.id = "name-photographer";
    namePhotographer.textContent = photographer.name;

    const locationPhotographer = document.createElement("p");
    locationPhotographer.id = "location";
    locationPhotographer.textContent = `${photographer.city}, ${photographer.country}`;

    const taglinePhotographer = document.createElement("p");
    taglinePhotographer.id = "tagline";
    taglinePhotographer.textContent = photographer.tagline;
    infoPhotographer.append(namePhotographer, locationPhotographer, taglinePhotographer);

    const photographerHeader = document.querySelector(".photograph-header");
    photographerHeader.prepend(infoPhotographer);

    const photographPicture = document.createElement("img");
    photographPicture.setAttribute("src", `assets/photographers/${photographer.portrait}`);
    photographPicture.setAttribute("alt", photographer.name);
    photographPicture.className = "photograph-picture";
    photographerHeader.appendChild(photographPicture);

    const price = document.createElement("p");
    price.id = "price";
    price.textContent = `${photographer.price}€/jour`;
    document.querySelector(".photograph-gallery").appendChild(price);

    // Afficher les medias du photographe dans le DOM
    displayMedia(photographer, media);
}

// Lancer l'affichage du photographe et des médias
displayPhotographer();

// Ajouter un gestionnaire pour les touches de retour en arrière
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        event.preventDefault();
        window.history.back();
    } else if (event.altKey && event.key === 'ArrowLeft') {
        window.history.back();
    }
});
