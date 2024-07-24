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
        const titleText = document.createElement("p");
        titleText.textContent = media.title;
        titleText.className = "media-title-text";
        mediaTitle.appendChild(titleText);
        mediaTitle.className = "media-title";

    // Afficher les likes
    const mediaLikes = document.createElement("p");
    mediaLikes.className = "media-likes";
    mediaLikes.ariaLabel = "likes";
    mediaLikes.innerHTML = `${media.likes} <span class="heart">❤</span>`;
    mediaTitle.append(mediaLikes);

    mediaLikes.addEventListener("click", (event) => {
        event.stopPropagation();
    const currentLikes = parseInt(mediaLikes.childNodes[0].nodeValue.trim(), 10);
    const heartSpan = mediaLikes.querySelector(".heart");

    if (heartSpan.classList.contains("liked")) {
        heartSpan.classList.remove("liked");
    mediaLikes.childNodes[0].nodeValue = `${currentLikes - 1} `;
    } else {
        heartSpan.classList.add("liked");
        mediaLikes.childNodes[0].nodeValue = `${currentLikes + 1} `;
        }
    });

    
    mediaCard.append(mediaElement, mediaTitle);
    document.querySelector(".photograph-gallery").appendChild(mediaCard);

    console.log(mediaCard);
     
    // Rendre la carte focusable et gérer les événements clavier
        mediaCard.tabIndex = 0;
    });
    
}