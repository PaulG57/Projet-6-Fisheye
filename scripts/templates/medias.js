function displayMedias(selectedPhotographer, mediasData) {
    const prenom = selectedPhotographer.name.split(" ")[0];

    mediasData.forEach((mediaData) => {
        const media = MediaFactory.createMedia(mediaData, prenom);

        const mediaCard = document.createElement("figure");
        mediaCard.className = "media-card";

        const mediaElement = media.createElement();

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

        // Rendre la carte focusable et gérer les événements clavier
        mediaCard.tabIndex = 0;
    });
}
