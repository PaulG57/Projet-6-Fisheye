const modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modal.tabIndex = 0;
    document.getElementById("prenom").focus();
}

function closeModal() {
    modal.style.display = "none";
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }})

document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
      
// Récupère les données du formulaire
const prenom = document.getElementById('prenom').value;
const nom = document.getElementById('nom').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
      
// Crée un objet contenant les données du formulaire
const formData = {
prenom: prenom,
nom: nom,
email: email,
message: message
};
      
// Affiche les données du formulaire dans la console
console.log("Formulaire envoyé :", formData);
closeModal();
});
