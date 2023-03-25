import RenderHomePage from "./Render/HomePage/RenderHomePage.js";
import RenderGalleryPage from "./Render/GalleryPage/RenderGalleryPage.js";
import RenderFestivalsPage from "./Render/FestivalsPage/RenderFestivalsPage.js";
import RenderAboutPage from "./Render/AboutPage/RenderAboutPage.js";
import RenderContactPage from "./Render/ContactPage/RenderContactPage.js";
import RenderBeachDetailPage from "./Render/BeachDetailPage/RenderBeachDetailPage.js";
import RenderFestivalDetailPage from "./Render/FestivalDetailPage/RenderFestivalDetailPage.js";

const resetMainPage = () => {
  const mainPage = document.getElementById("main-page");

  mainPage.innerHTML = ``;
};

const Router = (APP_URL) => {
  const APP_PATH = APP_URL.hash.slice(1).split("/");
  const APP_MAINPATH = APP_PATH[0];

  let websiteTitle = "";
  resetMainPage();

  switch (APP_MAINPATH) {
    case "home":
      RenderHomePage();
      websiteTitle = `Beachour | Home`;

      break;

    case "":
      RenderHomePage();
      websiteTitle = `Beachour | Home`;

      break;

    case "gallery":
      websiteTitle = `Beachour | Gallery`;

      if (APP_PATH.length > 1) {
        const APP_QUERYDETAIL = APP_PATH[2];

        resetMainPage();
        RenderBeachDetailPage(APP_QUERYDETAIL);
      } else {
        RenderGalleryPage();
      }
      break;

    case "festivals":
      websiteTitle = `Beachour | Festivals`;

      if (APP_PATH.length > 1) {
        const APP_QUERYDETAIL = APP_PATH[1];

        resetMainPage();
        RenderFestivalDetailPage(APP_QUERYDETAIL);
      } else {
        RenderFestivalsPage();
      }
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
