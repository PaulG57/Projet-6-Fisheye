const lightboxModal = document.getElementById("lightbox_modal");
const lightboxContent = document.querySelector(".lightbox-content");
const lightboxNext = document.querySelector(".lightbox-next");
const lightboxPrev = document.querySelector(".lightbox-prev");
let currentIndex = 0;

function openLightboxModal() {
    lightboxModal.style.display = "flex";
}

function closeLightboxModal() {
    lightboxModal.style.display = "none";
}

function updateLightboxContent(index) {
    const mediaCards = document.getElementsByClassName("media-card");
    lightboxContent.innerHTML = mediaCards[index].innerHTML;
    lightboxPrev.style.display = index === 0 ? "none" : "block";
    lightboxNext.style.display = index === mediaCards.length - 1 ? "none" : "block";
}

function nextMedia() {
    const mediaCards = document.getElementsByClassName("media-card");
    if (currentIndex < mediaCards.length - 1) {
        currentIndex++;
        updateLightboxContent(currentIndex);
    }
}

function prevMedia() {
    if (currentIndex > 0) {
        currentIndex--;
        updateLightboxContent(currentIndex);
    }
}

// Écouter les clics sur les médias dans la galerie
document.querySelector(".photograph-gallery").addEventListener("click", (event) => {
    const mediaCard = event.target.closest(".media-card");
    if (mediaCard) {
        const mediaCards = Array.from(document.getElementsByClassName("media-card"));
        currentIndex = mediaCards.indexOf(mediaCard);
        openLightboxModal();
        updateLightboxContent(currentIndex);
    }
});

document.querySelector(".photograph-gallery").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const mediaCard = event.target.closest(".media-card");
        if (mediaCard) {
            const mediaCards = Array.from(document.getElementsByClassName("media-card"));
            currentIndex = mediaCards.indexOf(mediaCard);
            openLightboxModal();
            updateLightboxContent(currentIndex);
        }
    }
});

// Gérer les événements clavier
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightboxModal();
    } else if (event.key === "ArrowRight") {
        nextMedia();
    } else if (event.key === "ArrowLeft") {
        prevMedia();
    }
});