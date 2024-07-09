// Récupérer l'ID depuis l'URL
const idPhotographer = new URL(window.location.href).searchParams.get("id");
const id = Number(idPhotographer);

// Récupérer les informations du photographe depuis le fichier JSON
async function getPhotographers() {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    console.log(data);
    return data;
}

// Afficher les informations du photographe dans le DOM
async function displayPhotographer(id) {
    const data = await getPhotographers();
    const selectedPhotographer = data.photographers.find(photographer => photographer.id === id);
    const media = data.media.filter(media => media.photographerId === id);

    console.log(selectedPhotographer);
    console.log(media);

    const infoPhotographer = document.createElement("div");
    infoPhotographer.classList.add("info-photographer");

    const namePhotographer = document.createElement("h1");
    namePhotographer.id = "name-photographer";
    namePhotographer.textContent = selectedPhotographer.name;

    const locationPhotographer = document.createElement("p");
    locationPhotographer.id = "location";
    locationPhotographer.textContent = `${selectedPhotographer.city}, ${selectedPhotographer.country}`;

    const taglinePhotographer = document.createElement("p");
    taglinePhotographer.id = "tagline";
    taglinePhotographer.textContent = selectedPhotographer.tagline;
    infoPhotographer.append(namePhotographer, locationPhotographer, taglinePhotographer);
    
    const photographerHeader = document.querySelector(".photograph-header");
    photographerHeader.prepend(infoPhotographer);

    const photographPicture = document.createElement("img");
    photographPicture.setAttribute("src", `assets/photographers/${selectedPhotographer.portrait}`);
    photographPicture.setAttribute("alt", selectedPhotographer.name);
    photographPicture.className = "photograph-picture";
    photographerHeader.appendChild(photographPicture);

    const price = document.createElement("p");
    price.id = "price";
    price.textContent = `${selectedPhotographer.price}€/jour`;
    document.querySelector(".photograph-gallery").appendChild(price);

    // Afficher les medias du photographe dans le DOM
    media.forEach((media) => {
        const mediaCard = document.createElement("figure");
        mediaCard.className = "media-card";
    
    let mediaElement;
    const prenom = selectedPhotographer.name.split(" ")[0];

    if (media.image) {
        mediaElement = document.createElement("img");
        mediaElement.setAttribute("src", `assets/images/${prenom}/${media.image}`);
        mediaElement.setAttribute("alt", media.title);
        mediaElement.className = "media-image";
    } else if (media.video) {
        mediaElement = document.createElement("video");
        const sourceElement = document.createElement("source");
        sourceElement.setAttribute("src", `assets/images/${prenom}/${media.video}`);
        sourceElement.setAttribute("type", "video/mp4");
        mediaElement.appendChild(sourceElement);
        mediaElement.setAttribute("controls", "controls");
        mediaElement.className = "media-video";
    }
    
        const mediaTitle = document.createElement("figcaption");
        mediaTitle.className = "media-title";
        mediaTitle.textContent = media.title;
    
        mediaCard.appendChild(mediaElement);
        mediaCard.appendChild(mediaTitle);
        document.querySelector(".photograph-gallery").appendChild(mediaCard);
    });
    
}

displayPhotographer(id);

document.addEventListener('keydown', function(event) {
    // Vérifie si la touche "Backspace" ou "Alt + Flèche gauche" est pressée
    if (event.key === 'Backspace') {
        event.preventDefault(); // Empêche l'action par défaut du Backspace
        window.history.back();  // Revient en arrière dans l'historique
    } else if (event.altKey && event.key === 'ArrowLeft') {
        window.history.back();  // Revient en arrière dans l'historique
    }
});