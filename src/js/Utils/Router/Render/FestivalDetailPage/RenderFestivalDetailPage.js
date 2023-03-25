import heroSection from "../HeroSection.js";
import Push from "../Push.js";
import setFestivalDetail from "./Components/FestivalDetailSection.js";

const RenderFestivalDetailPage = (queryName) => {
  const mainPage = document.getElementById("main-page");
  const festivalDetailSection = setFestivalDetail(queryName);

  mainPage.appendChild(heroSection);
  mainPage.appendChild(festivalDetailSection);
  mainPage.appendChild(Push);
};

export default RenderFestivalDetailPage;
