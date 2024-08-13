class Photo {
    constructor(data, prenom) {
        this.src = `assets/images/${prenom}/${data.image}`;
        this.title = data.title;
        this.likes = data.likes;
    }

    createElement() {
        const img = document.createElement("img");
        img.src = this.src;
        img.alt = this.title;
        img.className = "media-image";
        return img;
    }
}

class Video {
    constructor(data, prenom) {
        this.src = `assets/images/${prenom}/${data.video}`;
        this.title = data.title;
        this.likes = data.likes;
    }

    createElement() {
        const video = document.createElement("video");
        const sourceElement = document.createElement("source");
        sourceElement.setAttribute("src", this.src);
        sourceElement.setAttribute("type", "video/mp4");
        video.appendChild(sourceElement);
        video.controls = true;
        video.className = "media-video";
        return video;
    }
}

class MediaFactory {
    constructor(data, prenom) {
        if (data.image) {
            return new Photo(data, prenom);
        } else if (data.video) {
            return new Video(data, prenom);
        } else {
            throw new Error('Type de média inconnu');
        }
    }
}