// Récupérer les données du fichier JSON
async function getPhotographers() {
    const reponse = await fetch("data/photographers.json");
    const photographers = await reponse.json();
    // et bien retourner le tableau photographers seulement une fois récupéré
    return photographers;
}

// Récupérer les informations du photographe par ID
async function getPhotographerData(id) {
    const data = await getPhotographers();
    const photographer = data.photographers.find(p => p.id === Number(id));
    const medias = data.media.filter(m => m.photographerId === Number(id));
    return { photographer, medias };
}