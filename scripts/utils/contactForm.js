const modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }})
