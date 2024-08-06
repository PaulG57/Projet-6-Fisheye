function displayMedias(selectedPhotographer, mediasData) {
    const prenom = selectedPhotographer.name.split(" ")[0];
    const photographGallery = document.querySelector(".photograph-gallery");
    photographGallery.innerHTML = ''; // Clear existing media

    // Calculer le total des likes
    let totalLikes = 0;
    mediasData.forEach((media) => {
        totalLikes += media.likes;
    });

    // Afficher le total de likes et le prix
    const totalLikesNprice = document.createElement("div");
    totalLikesNprice.id = "totalLikesNprice";
    totalLikesNprice.textContent = `${selectedPhotographer.price}€ / jour`;

    const likes = document.createElement("p");
    likes.id = "likes";
    likes.innerHTML = `${totalLikes} <span>❤</span>`;
    totalLikesNprice.prepend(likes);

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
                likes.childNodes[0].nodeValue = `${parseInt(likes.childNodes[0].nodeValue, 10) - 1} `;
            } else {
                heartSpan.classList.add("liked");
                mediaLikes.childNodes[0].nodeValue = `${currentLikes + 1} `;
                likes.childNodes[0].nodeValue = `${parseInt(likes.childNodes[0].nodeValue, 10) + 1} `;
            }
        });

        mediaCard.append(mediaElement, mediaTitle);
        photographGallery.append(mediaCard, totalLikesNprice);

        // Rendre la carte focusable et gérer les événements clavier
        mediaCard.tabIndex = 0;
    });
}
