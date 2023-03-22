import { getBeaches } from "../../../../../Modules/GetData.js";
import resetGallery from "../Services/resetGallery.js";
import renderCards from "../Services/renderCards.js";
import checkSearchInput from "../Services/checkSearchInput.js";

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
                                        <input type="text" id="search-input" placeholder="Type to search..."/>
                                    </form>
                                    <div class="gallery flex"></div>
                                    <nav class="pagination flex"></nav>
                                </div>
                            </div>`;
const searchInput = gallerySection.querySelector("#search-input");
const gallery = gallerySection.querySelector(".gallery");

const renderFilteredByText = (filteredBeaches) => {
  resetGallery();
  startIndex = 0;
  endIndex = beachesPerPage;
  renderCards(gallery, filteredBeaches, startIndex, endIndex);
};

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredBeaches = checkSearchInput(searchValue);

  if (filteredBeaches.length === 0) {
    resetGallery();
    getBeaches().then((data) => renderBeaches(data, startIndex, endIndex));
  } else {
    renderFilteredByText(filteredBeaches);
  }
});

const renderBeaches = (data, startIndex, endIndex) => {
  renderCards(gallery, data, startIndex, endIndex);
};

const updateStartEndIndex = (currentPage) => {
  startIndex = (currentPage - 1) * beachesPerPage;
  endIndex = currentPage * beachesPerPage;
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
