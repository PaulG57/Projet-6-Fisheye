//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerById(id) {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    
    const photographer = data.photographers.find((photographer) => photographer.id === id);
   console.log("photographer", photographer);
    return photographer;
}

async function init() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    const photographerId = Number(id);
    const photographerData = await getPhotographerById(photographerId);

    console.log(photographerData);
}

document.addEventListener('keydown', function(event) {
    // Vérifie si la touche "Backspace" ou "Alt + Flèche gauche" est pressée
    if (event.key === 'Backspace') {
        event.preventDefault(); // Empêche l'action par défaut du Backspace
        window.history.back();  // Revient en arrière dans l'historique
    } else if (event.altKey && event.key === 'ArrowLeft') {
        window.history.back();  // Revient en arrière dans l'historique
    }
});

init();