import heroSection from "../HeroSection.js";
import introSection from "./Components/IntroSection.js";
import breadcrumbSection from "../BreadcrumbSection.js";
import topFamousSection from "./Components/TopFamousSection.js";
import feedbackSection from "./Components/FeedbackSection.js";
import festivalsSection from "./Components/FestivalsSection.js";
import subcribeSection from "./Components/SubcribeSection.js";
import topListViewsSection from "./Components/TopViewsSection.js";
import addEventScrollList from "../../../../DOM/addEventScrollList.js";
import addHandleClickHomePage from "./Services/addHandleClickHomePage.js";
import Push from "../Push.js";

const RenderHomePage = () => {
  const mainPage = document.getElementById("main-page");

  mainPage.appendChild(heroSection);
  mainPage.appendChild(introSection);
  mainPage.appendChild(breadcrumbSection);
  mainPage.appendChild(topFamousSection);
  mainPage.appendChild(feedbackSection);
  mainPage.appendChild(festivalsSection);
  mainPage.appendChild(subcribeSection);
  mainPage.appendChild(topListViewsSection);
  mainPage.appendChild(Push);

  addEventScrollList();
  addHandleClickHomePage();
};

export default RenderHomePage;
