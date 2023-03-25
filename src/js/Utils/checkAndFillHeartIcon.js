const checkAndFillHearticon = (wrapperElement) => {
  const favoriteBeaches = [...document.querySelectorAll(".favorite-item")];
  const cards = [...wrapperElement.querySelectorAll(".card")];

  favoriteBeaches.forEach((favoriteBeach) => {
    const nameFavoriteBeach =
      favoriteBeach.querySelector(".favorite__name").innerText;

    cards.forEach((card) => {
      const nameCard = card.querySelector(".beach__name").innerText;
      const heartIcon = card.querySelector(".fa-heart");

      if (nameCard === nameFavoriteBeach) {
        heartIcon.className = "fa-solid fa-heart";
      } else {
        heartIcon.className = "fa-regular fa-heart";
      }
    });
  });
};

export default checkAndFillHearticon;
