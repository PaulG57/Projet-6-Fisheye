class Photo {
    constructor(data, prenom) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.prenom = prenom;
    }

    createElement() {
        const mediaElement = document.createElement("img");
        mediaElement.setAttribute("src", `assets/images/${this.prenom}/${this.image}`);
        mediaElement.setAttribute("alt", this.title);
        mediaElement.className = "media-image";
        return mediaElement;
    }
}

class Video {
    constructor(data, prenom) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.video = data.video;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.prenom = prenom;
    }

    createElement() {
        const mediaElement = document.createElement("video");
        const sourceElement = document.createElement("source");
        sourceElement.setAttribute("src", `assets/images/${this.prenom}/${this.video}`);
        sourceElement.setAttribute("type", "video/mp4");
        mediaElement.appendChild(sourceElement);
        mediaElement.setAttribute("controls", "controls");
        mediaElement.className = "media-video";
        return mediaElement;
    }
}

class MediaFactory {
    static createMedia(data, prenom) {
        if (data.image) {
            return new Photo(data, prenom);
        } else if (data.video) {
            return new Video(data, prenom);
        } else {
            throw new Error('Type de média inconnu');
        }
    }
}

