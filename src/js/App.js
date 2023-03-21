import Router from "./Utils/Router/Router.js";
import toggleClassNameHeader from "./DOM/toggleClassNameHeader.js";

const APP_URL = new URL(window.location);
const APP_PATH = APP_URL.pathname.slice(1);

class App {
  constructor(APP_URL, APP_PATH) {
    this.url = APP_URL;
    this.path = APP_PATH;
  }

  setPath() {
    const APP_URL = new URL(window.location);
    const APP_PATH = APP_URL.hash.slice(1);

    Router(APP_PATH);
  }
}

const APP = new App(APP_URL, APP_PATH);

window.addEventListener("load", APP.setPath);
window.addEventListener("load", toggleClassNameHeader);
window.addEventListener("hashchange", APP.setPath);
