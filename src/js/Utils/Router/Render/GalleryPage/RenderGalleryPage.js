import gallerySection from "./Components/GallerySection.js";

const RenderGalleryPage = () => {
  const mainPageElement = document.getElementById("main-page");

  mainPageElement.appendChild(gallerySection);
};

export default RenderGalleryPage;
