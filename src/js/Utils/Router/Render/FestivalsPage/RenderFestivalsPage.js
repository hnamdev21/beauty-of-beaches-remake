import festivalsSection from "./Components/FestivalsSection.js";

const RenderFestivalsPage = () => {
  const mainPageElement = document.getElementById("main-page");

  mainPageElement.appendChild(festivalsSection);
};

export default RenderFestivalsPage;
