const resetGallery = () => {
  const gallerySection = document.querySelector(".gallery-section");
  const gallery = gallerySection.querySelector(".gallery");
  gallery.innerHTML = ``;
};

export default resetGallery;
