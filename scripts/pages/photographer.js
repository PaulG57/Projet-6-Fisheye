//Mettre le code JavaScript lié à la page photographer.html

// Récupérer les éléments du DOM
const nomPhotographe = document.getElementById("nom-photographe");
const locationPhotographe = document.getElementById("location");
const taglinePhotographe = document.getElementById("tagline");
const pricePhotographe = document.getElementById("price");
const photographPicture = document.getElementById("photograph-picture");

// Récupérer l'ID depuis l'URL
const idUrl = new URL(window.location.href).searchParams.get("id");
const id = Number(idUrl);

// Récupérer les informations du photographe depuis le fichier JSON
async function getPhotographers() {
    const response = await fetch("data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

// Afficher les informations du photographe dans le DOM
async function displayPhotographer(id) {
    const photographers = await getPhotographers();
    const selectedPhotographer = photographers.find(photographer => photographer.id === id);

    nomPhotographe.textContent = selectedPhotographer.name;
    locationPhotographe.textContent = `${selectedPhotographer.city}, ${selectedPhotographer.country}`;
    taglinePhotographe.textContent = selectedPhotographer.tagline;
    pricePhotographe.textContent = `${selectedPhotographer.price}€/jour`;
    photographPicture.setAttribute("src", `assets/photographers/${selectedPhotographer.portrait}`);
    photographPicture.setAttribute("alt", selectedPhotographer.name);
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