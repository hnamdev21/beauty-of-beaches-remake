import RenderHomePage from "./Render/HomePage/RenderHomePage.js";
import RenderGalleryPage from "./Render/GalleryPage/RenderGalleryPage.js";
import RenderFestivalsPage from "./Render/FestivalsPage/RenderFestivalsPage.js";
import RenderAboutPage from "./Render/AboutPage/RenderAboutPage.js";
import RenderContactPage from "./Render/ContactPage/RenderContactPage.js";

const Router = (path) => {
  switch (path) {
    case "home":
      RenderHomePage();
      break;

    case "index.html":
      RenderHomePage();
      break;

    case "":
      RenderHomePage();
      break;

    case "gallery":
      RenderGalleryPage();
      break;

    case "festivals":
      RenderFestivalsPage();
      break;

    case "contact":
      RenderContactPage();
      break;

    case "about":
      RenderAboutPage();
      break;

    default:
      console.log("Something went wrong");
      break;
  }
};

export default Router;
