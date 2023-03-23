const favoriteItemsElement = document.querySelector(".wrapper-favorite-items");

const changeIcon = (e) => {
  const favoriteButton = e.target;
  const wrapperButton = favoriteButton.parentElement;
  const topCard = wrapperButton.parentElement;
  const card = topCard.parentElement;

  if (favoriteButton.className === "fa-regular fa-heart") {
    favoriteButton.className = `fa-solid fa-heart`;
    if (!checkItemInList(card)) addFavoriteItem(card);
    updateCountItems();
  } else {
    favoriteButton.className = `fa-regular fa-heart`;
    removeFavoriteItemOnCard(card);
    updateCountItems();
  }
};

const removeFavoriteItemOnCard = (card) => {
  const beachName = card.querySelector(".beach__name").innerText;
  const itemsInList = [
    ...favoriteItemsElement.querySelectorAll(".favorite-item"),
  ];

  itemsInList.forEach((item) => {
    const favoriteName = item.querySelector(".favorite__name").innerText;

    if (favoriteName === beachName) item.remove();
  });
};

const updateCountItems = () => {
  let count = 0;

  const items = [...favoriteItemsElement.querySelectorAll(".favorite-item")];
  items.forEach((item) => count++);

  // Update DOM
  const wrapperFovariteIcon = favoriteItemsElement.parentElement;
  const countElement = wrapperFovariteIcon.querySelector(".count-items");

  countElement.innerText = count;
};

const checkItemInList = (card) => {
  let have = false;
  const beachName = card.querySelector(".beach__name").innerText;
  const itemsInList = [...document.querySelectorAll(".favorite-item")];

  if (itemsInList.length === 0) {
    have = false;

    return have;
  }

  itemsInList.forEach((item) => {
    if (have) return have;
    const favoriteName = item.querySelector(".favorite__name").innerText;

    beachName === favoriteName ? (have = true) : (have = false);
  });

  return have;
};

const addFavoriteItem = (card) => {
  const beachName = card.querySelector(".beach__name").innerText;
  const beachImage = card.querySelector(".beach__image");
  const urlImage = beachImage.getAttribute("src");
  const favoriteItem = document.createElement("li");
  favoriteItem.className = `favorite-item flex flex-align-center flex-space-between`;
  favoriteItem.innerHTML = `
              <div class="favorite__image">
                <a href="#">
                  <img src="${urlImage}" alt="">
                </a>
              </div>
              <div class="favorite__name">${beachName}</div>
              <div class="favorite__remove-btn">REMOVE</div>`;
  favoriteItemsElement.appendChild(favoriteItem);
  const removeButton = favoriteItem.querySelector(".favorite__remove-btn");
  removeButton.addEventListener("click", removeFavoriteItem);

  function removeFavoriteItem(e) {
    const favoriteItem = e.target.parentElement;

    favoriteItem.remove();
    checkItemInSection(beachName);
    updateCountItems();
  }
};

const checkItemInSection = (favoriteName) => {
  const gallery = document.querySelector(".gallery");
  const cards = [...gallery.querySelectorAll(".card")];
  cards.forEach((card) => {
    const beachName = card.querySelector(".beach__name").innerText;
    const favoriteIcon = card.querySelector(".fa-heart");

    if (beachName === favoriteName)
      favoriteIcon.className = `fa-regular fa-heart`;
  });
};

const addHandleClickGalleryPage = () => {
  const gallery = document.querySelector(".gallery");
  const cards = [...gallery.querySelectorAll(".card")];

  cards.forEach((card) => {
    const favoriteButton = card.querySelector(".card-sub-element");
    favoriteButton.addEventListener("click", changeIcon);
  });
};

export default addHandleClickGalleryPage;
