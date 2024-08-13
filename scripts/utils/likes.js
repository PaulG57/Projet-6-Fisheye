function displayTotalLikesPrice(medias, photographer) {
  let totalLikes = 0;
  const totalLikesPrice = document.createElement("div");
  totalLikesPrice.className = "totalLikesPrice";

  medias.forEach((media) => {
    totalLikes += media.likes;
  });

  const likes = document.createElement("p");
  likes.className = "total-likes";
  likes.textContent = `${totalLikes} ❤`;

  const price = document.createElement("p");
  price.textContent = `${photographer.price}€ / jour`;

  totalLikesPrice.append(likes, price);

  return totalLikesPrice;
}

document.querySelector(".photograph-gallery").addEventListener("click", (event) => {
  const heartIcon = event.target.closest(".heart");

  if (heartIcon) {
    const mediaLikes = heartIcon.closest(".media-likes");
    const likesCount = mediaLikes.querySelector(".likes-count");
    const totalLikesElement = document.querySelector(".total-likes");

    let currentLikes = parseInt(likesCount.textContent.trim(), 10);
    let totalLikes = parseInt(totalLikesElement.textContent.trim(), 10);

    if (heartIcon.classList.contains("liked")) {
      heartIcon.classList.remove("liked");
      likesCount.textContent = `${currentLikes - 1}`;
      totalLikesElement.textContent = `${totalLikes - 1} ❤`;
    } else {
      heartIcon.classList.add("liked");
      likesCount.textContent = `${currentLikes + 1}`;
      totalLikesElement.textContent = `${totalLikes + 1} ❤`;
    }
  }
});
