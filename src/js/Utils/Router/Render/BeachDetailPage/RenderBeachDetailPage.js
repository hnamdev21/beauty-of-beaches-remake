import setBeachDetail from "./Components/BeachDetailSection.js";
import heroSection from "../HeroSection.js";
import Push from "../Push.js";

const RenderBeachDetailPage = (queryId) => {
  const mainPage = document.getElementById("main-page");
  const beachDetailSection = setBeachDetail(queryId);

  mainPage.appendChild(heroSection);
  mainPage.appendChild(beachDetailSection);
  mainPage.appendChild(Push);
};

export default RenderBeachDetailPage;
