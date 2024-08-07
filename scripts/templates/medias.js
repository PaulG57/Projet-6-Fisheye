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
        mediaLikes.innerHTML = `${this.media.likes} <span class="heart">❤</span>`;
        mediaTitle.appendChild(mediaLikes);

        // Ajouter les éléments à la card
        mediaCard.append(mediaElement, mediaTitle);
        mediaCard.tabIndex = 0;

        return mediaCard;
    }
}