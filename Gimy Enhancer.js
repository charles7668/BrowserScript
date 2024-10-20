// ==UserScript==
// @name         Gimy Enhancer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  gimy enhancement scripts
// @author       Charles
// @match        https://gimy.ai/*.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gimy.ai
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const speedCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("speed="));
  if (speedCookie) {
    const speed = parseFloat(speedCookie.split("=")[1]);
    const speedItems = Array.from(
      document.querySelectorAll(".dplayer-setting-speed-item")
    );
    const speedItem = speedItems.find(
      (element) => parseFloat(element.getAttribute("data-speed")) === speed
    );
    if (speedItem) {
      speedItem.click();
    }
  }
  const speedItems = document.querySelectorAll(".dplayer-setting-speed-item");
  speedItems.forEach((element) => {
    element.addEventListener("click", function () {
      const speed = parseFloat(element.getAttribute("data-speed"));
      document.cookie = `speed=${speed};`;
    });
  });
})();
