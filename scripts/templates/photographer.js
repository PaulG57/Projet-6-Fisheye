function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.setAttribute('role', 'article');
        article.setAttribute('aria-labelledby', `photographer card`);

        const link = document.createElement('a');
        link.href = `photographer.html?id=${id}`;
        link.tabIndex = 0; // Rendre le lien focusable
        link.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                link.click(); // Simuler le clic lorsqu'on appuie sur "Entrée"
            }
        });

        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.className = "photograph-picture";

        const h2 = document.createElement('h2');
        h2.id = `photographer-name`;
        h2.textContent = name;

        link.append(img, h2);

        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;

        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;

        const pPrice = document.createElement('p');
        pPrice.textContent = `${price}€/jour`;

        article.append(link, location, pTagline, pPrice);

        return article;
    }

    return { name, portrait, city, country, tagline, price, id, getUserCardDOM };
}