function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const location = document.createElement( 'p' );
        const pTagline = document.createElement( 'p' );
        const pPrice = document.createElement( 'p' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        location.textContent = `${city}, ${country}`;
        pTagline.textContent = tagline;
        pPrice.textContent = `${price}€/jour`;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location)
        article.appendChild(pTagline)
        article.appendChild(pPrice)
        console.log(id);
        article.addEventListener('click', () => {
            window.location.href = `photographer.html?id=${id}`
        })
        return (article);
    }
    return { name, picture, getUserCardDOM }
}