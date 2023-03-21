import { getBeaches } from "../../../../../Modules/GetData.js";

const beachesPerPage = 9;
let startIndex = 0;
let endIndex = beachesPerPage;
let currentPage = 1;

const gallerySection = document.createElement("section");
gallerySection.className = "gallery-section";
gallerySection.innerHTML = `<h1 class="title--md">Find your peace</h1>
                            <div class="inner flex flex-space-between">
                                <div class="side-bar"></div>
                                <div class="wrapper-gallery">
                                    <form action="" id="search-form" class="search-box relavtive">
                                        <input type="search" name="q" class="search-input" placeholder="Type to search..."/>
                                    </form>
                                    <div class="gallery flex"></div>
                                    <nav class="pagination flex"></nav>
                                </div>
                            </div>`;

const renderBeaches = (data, startIndex, endIndex) => {
  const gallery = gallerySection.querySelector(".gallery");

  for (let i = startIndex; i < endIndex; i++) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `<div class="top-card relative">
                        <div class="card-image">
                            <img
                            src="${data[i].image1}"
                            alt="${data[i].name}"
                            class="beach__image"
                            />
                        </div>
                        <div class="card-sub-element">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                      </div>
                      <div class="bot-card relative">
                        <h4 class="beach__name">${data[i].name}</h4>
                        <ul class="beach__info">
                            <li class="info__loaction">Location: ${data[i].location}</li>
                            <li class="info__views">Views: ${data[i].views}</li>
                            <li class="info__famous">Famous: ${data[i].famous}</li>
                        </ul>
                        <a href="/beach/id?${data[i].id}" class="beach__link">Learn more</a>
                      </div>`;

    gallery.appendChild(card);
  }
};

const updateStartEndIndex = (currentPage) => {
  startIndex = (currentPage - 1) * beachesPerPage;
  endIndex = currentPage * beachesPerPage;
};

const resetGallery = () => {
  const gallery = gallerySection.querySelector(".gallery");
  gallery.innerHTML = ``;
};

const renderPagination = (totalPages) => {
  const pagination = gallerySection.querySelector(".pagination");

  for (let i = 1; i <= totalPages; i++) {
    const paginationLi = document.createElement("li");
    paginationLi.innerHTML = `<a href="#">${i}</a>`;

    const aElement = paginationLi.querySelector("a");
    aElement.addEventListener("click", (e) => {
      e.preventDefault();

      currentPage = i;

      updateStartEndIndex(currentPage);
      resetGallery();
      getBeaches().then((data) => renderBeaches(data, startIndex, endIndex));
    });

    pagination.appendChild(paginationLi);
  }
};

getBeaches().then((data) => {
  const totalBeaches = data.length;
  const totalPages = Math.ceil(totalBeaches / beachesPerPage);

  renderBeaches(data, startIndex, endIndex);
  renderPagination(totalPages);
});

export default gallerySection;
