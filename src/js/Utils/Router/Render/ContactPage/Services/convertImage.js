const covertImage = (contactSection, element) => {
  element.addEventListener("change", () => {
    const maskFileInput = contactSection.querySelector(".mask-file-input");
    const wrapperImageUploaded = contactSection.querySelector(
      ".wrapper-image-user"
    );
    const span = wrapperImageUploaded.querySelector(".preview");
    const previewImageElement =
      wrapperImageUploaded.querySelector(".image-uploaded");

    const reader = new FileReader();
    const imageUploaded = element.files[0];

    reader.readAsDataURL(imageUploaded);
    reader.addEventListener("load", () => {
      localStorage.setItem("recent-img", reader.result);
    });

    const imgUrlCoverted = localStorage.getItem("recent-img");

    span.remove();
    previewImageElement.setAttribute("src", "");
    previewImageElement.setAttribute("src", imgUrlCoverted);
    maskFileInput.innerHTML = `<i class="fa-solid fa-check"></i>`;
  });
};

export default covertImage;
