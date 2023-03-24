import contactSection from "./Components/ContactSection.js";

const RenderContactPage = () => {
  const mainPage = document.getElementById("main-page");

  mainPage.appendChild(contactSection);
};

export default RenderContactPage;
