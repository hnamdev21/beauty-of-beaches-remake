import RenderHomePage from "./HomePage/RenderHomePage.js";
import RenderGalleryPage from "./GalleryPage/RenderGalleryPage.js";
import RenderFestivalsPage from "./FestivalsPage/RenderFestivalsPage.js";
import RenderAboutPage from "./AboutPage/RenderAboutPage.js";
import RenderContactPage from "./ContactPage/RenderContactPage.js";

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
