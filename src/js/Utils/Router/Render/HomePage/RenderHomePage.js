import heroSection from "./Components/HeroSection.js";
import introSection from "./Components/IntroSection.js";
import breadcrumbSection from "../../BreadcrumbSection.js";
import topFamousSection from "./Components/TopFamousSection.js";
import feedbackSection from "./Components/FeedbackSection.js";
import festivalsSection from "./Components/FestivalsSection.js";
import subcribeSection from "./Components/SubcribeSection.js";
import topListViewsSection from "./Components/TopViewsSection.js";
import addEventScrollList from "../../../../DOM/addEventScrollList.js";
import addHandleClickHomePage from "./Services/addHandleClickHomePage.js";

const RenderHomePage = () => {
  const mainPageElement = document.getElementById("main-page");

  mainPageElement.appendChild(heroSection);
  mainPageElement.appendChild(introSection);
  mainPageElement.appendChild(breadcrumbSection);
  mainPageElement.appendChild(topFamousSection);
  mainPageElement.appendChild(feedbackSection);
  mainPageElement.appendChild(festivalsSection);
  mainPageElement.appendChild(subcribeSection);
  mainPageElement.appendChild(topListViewsSection);

  addEventScrollList();
  addHandleClickHomePage();
};

export default RenderHomePage;
