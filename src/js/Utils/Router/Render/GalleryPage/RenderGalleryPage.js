import gallerySection from "./Components/GallerySection.js";
import addHandleClickGalleryPage from "./Services/addHandleClickGalleryPage.js";
import heroSection from "../HeroSection.js";
import Push from "../Push.js";

const RenderGalleryPage = () => {
  const mainPage = document.getElementById("main-page");

  mainPage.appendChild(heroSection);
  mainPage.appendChild(gallerySection);
  mainPage.appendChild(Push);

  addHandleClickGalleryPage();
};

export default RenderGalleryPage;
