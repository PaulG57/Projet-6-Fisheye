//Mettre le code JavaScript lié à la page photographer.html

function getId() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    console.log(id)
    return id;
}
