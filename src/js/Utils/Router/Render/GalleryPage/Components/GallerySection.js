import { getBeaches } from "../../../../../Modules/GetData.js";
import resetGallery from "../Services/resetGallery.js";
import renderCards from "../Services/renderCards.js";
import checkSearchInput from "../Services/checkSearchInput.js";
import checkCheckboxInput from "../Services/checkCheckboxInput.js";
import addHandleClickGalleryPage from "../Services/addHandleClickGalleryPage.js";
import checkAndFillHeartIcon from "../../../../checkAndFillHeartIcon.js";
import addActivePagination from "../Services/addActivePagination.js";

const beachesPerPage = 12;
let startIndex = 0;
let endIndex = beachesPerPage;
let currentPage = 1;

const gallerySection = document.createElement("section");
gallerySection.className = "gallery-section";
gallerySection.innerHTML = `<h1 class="title--md">Find your peace</h1>
                            <div class="inner flex flex-space-between">
                                <div class="side-bar">
                                  <div class="wrapper-check-continents">
                                    <h4>Continent:</h4>
                                    <div class="flex">
                                      <div class="wrapper-check">
                                        <label for="oceaniaCheckBox">Oceania</label>
                                        <input type="checkbox" name="continents" id="Oceania">
                                      </div>

                                      <div class="wrapper-check">
                                        <label for="americaCheckBox">America</label>
                                        <input type="checkbox" name="continents" id="America">
                                      </div>

                                      <div class="wrapper-check">
                                        <label for="africaCheckBox">Africa</label>
                                        <input type="checkbox" name="continents" id="Africa">
                                      </div>

                                      <div class="wrapper-check">
                                        <label for="asiaCheckBox">Asia</label>
                                        <input type="checkbox" name="continents" id="Asia">
                                      </div>

                                      <div class="wrapper-check">
                                        <label for="europeCheckBox">Europe</label>
                                        <input type="checkbox" name="continents" id="Europe">
                                    </div>
                                  </div>

                                  <div class="wrapper-check-zones">
                                    <h4>Zone-wise:</h4>
                                    <div class="flex">
                                        <div class="wrapper-check">
                                            <label for="northCheckBox">North</label>
                                            <input type="checkbox" name="zone" id="North">
                                        </div>

                                        <div class="wrapper-check">
                                            <label for="westernCheckBox">Western</label>
                                            <input type="checkbox" name="zone" id="Western">
                                        </div>

                                        <div class="wrapper-check">
                                            <label for="southeastCheckBox">Southeast</label>
                                            <input type="checkbox" name="zone" id="Southeast">
                                        </div>

                                        <div class="wrapper-check">
                                            <label for="eastCheckBox">East</label>
                                            <input type="checkbox" name="zone" id="East">
                                        </div>

                                        <div class="wrapper-check">
                                            <label for="southCheckBox">South</label>
                                            <input type="checkbox" name="zone" id="South">
                                        </div>

                                        <div class="wrapper-check">
                                            <label for="sernwernCheckBox">Southern-Western</label>
                                            <input type="checkbox" name="zone" id="Sernwern">
                                        </div>

                                        <div class="wrapper-check">
                                            <label for="caribbeanCheckBox">Caribbean</label>
                                            <input type="checkbox" name="zone" id="Caribbean">
                                        </div>

                                        <div class="wrapper-check">
                                            <label for="swernCheckBox">Southwestern</label>
                                            <input type="checkbox" name="zone" id="Southwestern">
                                        </div>

                                        <div class="wrapper-check">
                                            <label for="nwCheckBox">North-West</label>
                                            <input type="checkbox" name="zone" id="North-West">
                                        </div>
                                    </div>
                                </div>
                                </div>
                              </div>
                              <div class="wrapper-gallery">
                                  <form action="" id="search-form" class="search-box relavtive">
                                      <input type="text" id="search-input" placeholder="Type to search..."/>
                                  </form>
                                  <div class="gallery flex"></div>
                                  <nav class="pagination flex"></nav>
                              </div>
                            </div>`;
const gallery = gallerySection.querySelector(".gallery");
const searchInput = gallerySection.querySelector("#search-input");
const slideBar = gallerySection.querySelector(".side-bar");
const checkboxInput = [...slideBar.querySelectorAll(`input[type="checkbox"]`)];

const renderFiltered = (wrapperElement, filteredBeaches) => {
  resetGallery();
  startIndex = 0;
  endIndex = beachesPerPage;
  renderCards(wrapperElement, filteredBeaches, startIndex, endIndex);
};

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.trim().toLowerCase();
  const filteredBeaches = checkSearchInput(searchValue);

  if (filteredBeaches.length === 0) {
    resetGallery();
    getBeaches().then((data) => renderBeaches(data, startIndex, endIndex));
  } else {
    renderFiltered(gallery, filteredBeaches);
  }

  addHandleClickGalleryPage(gallery);
});

checkboxInput.forEach((aElement) =>
  aElement.addEventListener("click", (e) => {
    const idCheckbox = e.target.id;
    const nameCheckbox = e.target.name;

    if (e.target.checked) {
      const filteredBeaches = checkCheckboxInput(idCheckbox, nameCheckbox);
      renderFiltered(gallery, filteredBeaches);
    } else {
      resetGallery();
      getBeaches().then((data) => renderBeaches(data, startIndex, endIndex));
    }
  })
);

const renderBeaches = (data, startIndex, endIndex) => {
  renderCards(gallery, data, startIndex, endIndex);
  addHandleClickGalleryPage(gallery);
  checkAndFillHeartIcon(gallerySection);
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

      addActivePagination(aElement, pagination);
      updateStartEndIndex(currentPage);
      resetGallery();
      getBeaches().then((data) => renderBeaches(data, startIndex, endIndex));
    });

    pagination.appendChild(paginationLi);
  }

  const aElements = [...pagination.querySelectorAll("a")];
  aElements[0].parentElement.classList.add("active");
};

getBeaches().then((data) => {
  const totalBeaches = data.length;
  const totalPages = Math.ceil(totalBeaches / beachesPerPage);

  renderBeaches(data, startIndex, endIndex);
  renderPagination(totalPages);
});

export default gallerySection;
