import heroSection from "../HeroSection.js";
import introSection from "./Components/IntroSection.js";
import breadcrumbSection from "../BreadcrumbSection.js";
import topFamousSection from "./Components/TopFamousSection.js";
import feedbackSection from "./Components/FeedbackSection.js";
import festivalsSection from "./Components/FestivalsSection.js";
import subcribeSection from "./Components/SubcribeSection.js";
import topViewsSection from "./Components/TopViewsSection.js";
import addEventScrollList from "../../../../DOM/addEventScrollList.js";
import addHandleClickHomePage from "./Services/addHandleClickHomePage.js";
import Push from "../Push.js";
import checkAndFillHearticon from "../../../checkAndFillHeartIcon.js";
import updateNewData from "./Services/updateNewData.js";

const RenderHomePage = () => {
  const mainPage = document.getElementById("main-page");

  mainPage.appendChild(heroSection);
  mainPage.appendChild(introSection);
  mainPage.appendChild(breadcrumbSection);
  mainPage.appendChild(topFamousSection);
  mainPage.appendChild(feedbackSection);
  mainPage.appendChild(festivalsSection);
  mainPage.appendChild(subcribeSection);
  mainPage.appendChild(topViewsSection);
  mainPage.appendChild(Push);

  addEventScrollList();
  addHandleClickHomePage();
  checkAndFillHearticon(topFamousSection);
  checkAndFillHearticon(topViewsSection);
  updateNewData(feedbackSection.querySelector(".wrapper-cards"));
};

export default RenderHomePage;
