import Router from "./Utils/Router/Router.js";
import toggleClassNameHeader from "./DOM/toggleClassNameHeader.js";

const APP_URL = new URL(window.location);

class App {
  constructor(APP_URL, APP_PATH) {
    this.url = APP_URL;
  }

  route() {
    const APP_URL = new URL(window.location);

    Router(APP_URL);
  }
}

const APP = new App(APP_URL);

window.addEventListener("load", APP.route);
window.addEventListener("load", toggleClassNameHeader);
window.addEventListener("hashchange", APP.route);
