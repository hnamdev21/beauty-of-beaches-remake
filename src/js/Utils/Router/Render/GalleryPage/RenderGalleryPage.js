import gallerySection from "./Components/GallerySection.js";
import addHandleClickGalleryPage from "./Services/addHandleClickGalleryPage.js";

const RenderGalleryPage = () => {
  const mainPageElement = document.getElementById("main-page");

  mainPageElement.appendChild(gallerySection);

  addHandleClickGalleryPage();
};

export default RenderGalleryPage;
