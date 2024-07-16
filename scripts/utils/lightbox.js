const lightboxModal = document.getElementById("lightbox_modal");
const mediaCards = document.getElementsByClassName("media-card");
const lightboxContent = document.querySelector(".lightbox-content");
const lightboxNext = document.querySelector(".lightbox-next");
const lightboxPrev = document.querySelector(".lightbox-prev");
let currentIndex = 0;

for (let i = 0; i < mediaCards.length; i++) {
    mediaCards[i].addEventListener("click", () => {
        currentIndex = i;
    });
}

function openLightboxModal() {
    lightboxModal.style.display = "block";
}

function closeLightboxModal() {
    lightboxModal.style.display = "none";
}

function updateLightboxContent(index) {
    lightboxContent.innerHTML = mediaCards[index].innerHTML;
    lightboxPrev.style.display = index === 0 ? "none" : "block";
    lightboxNext.style.display = index === mediaCards.length - 1 ? "none" : "block";
}

function nextMedia() {
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
