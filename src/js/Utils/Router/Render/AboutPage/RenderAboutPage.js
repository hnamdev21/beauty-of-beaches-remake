import aboutSection from "./Components/AboutSection.js";
import Push from "../Push.js";
import heroSection from "../HeroSection.js";

const RenderAboutPage = () => {
  const mainPage = document.getElementById("main-page");

  mainPage.appendChild(heroSection);
  mainPage.appendChild(aboutSection);
  mainPage.appendChild(Push);
};

export default RenderAboutPage;
