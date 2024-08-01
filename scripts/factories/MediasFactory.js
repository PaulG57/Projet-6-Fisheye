class Photo {
    constructor(data) {
        this._title = data.title;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
    }
}

class Video {
    constructor(data) {
        this._title = data.title;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
    }
}

class MediaFactory {
    constructor(data, type) {
        if (type === "video") {
            return new Video(data);
        } else if (type === "image") {
            return new Photo(data);
        } else {
            throw new Error("Type de media inconnu");
        }
    }
}
