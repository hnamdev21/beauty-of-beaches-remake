import festivalsSection from "./Components/FestivalsSection.js";
import Push from "../Push.js";
import heroSection from "../HeroSection.js";

const RenderFestivalsPage = () => {
  const mainPage = document.getElementById("main-page");

  mainPage.appendChild(heroSection);
  mainPage.appendChild(festivalsSection);
  mainPage.appendChild(Push);
};

export default RenderFestivalsPage;
