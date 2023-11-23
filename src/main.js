import { createApp } from "vue";
import "./assets/scss/style.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import * as bootstrap from "bootstrap";
import App from "./App.vue";
import { router } from "./router.js";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faMartiniGlassCitrus,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faMartiniGlassCitrus,
  faLocationDot,
  faWhatsapp,
  faEnvelope,
  faInstagram,
  faFacebook,
  faPinterest,
  faXTwitter
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
