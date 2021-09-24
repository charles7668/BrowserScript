// ==UserScript==
// @name         duckduckgo script
// @namespace    http://duckduckgo.com/
// @version      0.1
// @description  make duckduckgo convenient
// @author       charles
// @match        https://duckduckgo.com/?q=*
// @icon         https://www.google.com/s2/favicons?domain=duckduckgo.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      //set keyword color to red
      var keyword = document.getElementsByClassName("result__snippet");
      console.log(keyword.length);
      for (var i = 0; i < keyword.length; i++) {
        var bold = keyword[i].getElementsByTagName("b");
        for (var j = 0; j < bold.length; j++) {
          bold[j].setAttribute("style", "color : red !important;");
        }
      }
    }
  };
})();
