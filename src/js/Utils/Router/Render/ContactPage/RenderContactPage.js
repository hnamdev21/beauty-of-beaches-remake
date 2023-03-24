import contactSection from "./Components/ContactSection.js";
import Push from "../Push.js";
import heroSection from "../HeroSection.js";

const RenderContactPage = () => {
  const mainPage = document.getElementById("main-page");

  mainPage.appendChild(heroSection);
  mainPage.appendChild(contactSection);
  mainPage.appendChild(Push);
};

export default RenderContactPage;
