class MediaCard {
    constructor(media, prenom) {
        this.media = new MediaFactory(media, prenom);
    }

    createMediaCard() {
        // Créer la card du media
        const mediaCard = document.createElement("figure");
        mediaCard.className = "media-card";

        // Utiliser la méthode createElement pour obtenir l'élément média
        const mediaElement = this.media.createElement();
        mediaElement.classList.add("media-click");
        mediaElement.tabIndex = 0;

        // Insérer le titre
        const mediaTitle = document.createElement("figcaption");
        const titleText = document.createElement("p");
        titleText.textContent = this.media.title;
        titleText.className = "media-title-text";
        mediaTitle.appendChild(titleText);
        mediaTitle.className = "media-title";

        // Insérer le nombre de likes
        const mediaLikes = document.createElement("p");
        mediaLikes.className = "media-likes";
        mediaLikes.ariaLabel = "likes";
        const likesCount = document.createElement("span");
        likesCount.className = "likes-count";
        likesCount.textContent = this.media.likes;
        const heartIcon = document.createElement("span");
        heartIcon.className = "heart";
        heartIcon.textContent = "❤";
        mediaLikes.appendChild(likesCount);
        mediaLikes.appendChild(heartIcon);
        mediaTitle.appendChild(mediaLikes);

        // Ajouter les éléments à la card
        mediaCard.append(mediaElement, mediaTitle);

        return mediaCard;
    }
}