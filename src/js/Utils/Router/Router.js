import RenderHomePage from "./Render/HomePage/RenderHomePage.js";
import RenderGalleryPage from "./Render/GalleryPage/RenderGalleryPage.js";
import RenderFestivalsPage from "./Render/FestivalsPage/RenderFestivalsPage.js";
import RenderAboutPage from "./Render/AboutPage/RenderAboutPage.js";
import RenderContactPage from "./Render/ContactPage/RenderContactPage.js";

const resetMainPage = () => {
  const mainPage = document.getElementById("main-page");

  mainPage.innerHTML = ``;
};

const Router = (path) => {
  let websiteTitle = "";
  resetMainPage();

  switch (path) {
    case "home":
      RenderHomePage();
      websiteTitle = `Beachour | Home`;

      break;

    case "":
      RenderHomePage();
      websiteTitle = `Beachour | Home`;

      break;

    case "gallery":
      RenderGalleryPage();
      websiteTitle = `Beachour | Gallery`;

      break;

    case "festivals":
      RenderFestivalsPage();
      websiteTitle = `Beachour | Festivals`;

      break;

    case "contact":
      RenderContactPage();
      websiteTitle = `Beachour | Contact`;

      break;

    case "about":
      RenderAboutPage();
      websiteTitle = `Beachour | About`;

      break;

    default:
      websiteTitle = `Beachour | Error 404`;

      break;
  }

  document.title = websiteTitle;
};

export default Router;
