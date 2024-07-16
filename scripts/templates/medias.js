// Afficher les medias du photographe dans le DOM
function displayMedia(selectedPhotographer, media) {

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
    
        mediaCard.append(mediaElement, mediaTitle);
        document.querySelector(".photograph-gallery").appendChild(mediaCard);

        console.log(mediaCard);

        mediaCard.addEventListener("click", () => {
            openLightboxModal();
            updateLightboxContent(Array.from(document.getElementsByClassName("media-card")).indexOf(mediaCard));
        });
     
        // Rendre la carte focusable et gérer les événements clavier
        mediaCard.tabIndex = 0;
    });
    
}