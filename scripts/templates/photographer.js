function photographerTemplate(data, titleLevel = 'h2') {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.setAttribute('role', 'article');
        article.setAttribute('aria-labelledby', `photographer card`);

        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.className = "photograph-picture";

        const title = document.createElement(titleLevel);
        title.id = `photographer-${id}-name`;
        title.textContent = name;

        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;

        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;

        const pPrice = document.createElement('p');
        pPrice.textContent = `${price}€/jour`;

        article.append(img, title, location, pTagline, pPrice);

        // Rendre la carte focusable et gérer les événements clavier pour accessibilité
        article.tabIndex = 0;
        article.addEventListener('click', () => {
            window.location.href = `photographer.html?id=${id}`;
        });
        article.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                window.location.href = `photographer.html?id=${id}`;
            }
        });

        return article;
    }

    return { getUserCardDOM };
}
