import "./scss/base.scss";
import "./scss/header.scss";
import "./scss/main.scss";
import "./scss/inputs-section.scss";
import "./scss/output-section.scss";

import "./js/app";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
