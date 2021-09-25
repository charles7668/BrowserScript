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
  var set_keyword_color = () => {
    //set keyword color to red
    var keyword = document.getElementsByClassName("result__snippet");
    console.log(keyword.length);
    for (var i = 0; i < keyword.length; i++) {
      var bold = keyword[i].getElementsByTagName("b");
      for (var j = 0; j < bold.length; j++) {
        bold[j].setAttribute("style", "color : red !important;");
      }
    }
    add_event_to_more_result(0);
  };
  var add_event_to_more_result = (i) => {
    var result_more_btn =
      document.getElementsByClassName("result--more__btn")[0];
    if (result_more_btn === undefined && i < 20) {
      setTimeout(() => {
        add_event_to_more_result(i + 1);
      }, 10);
    } else if (i < 20) {
      console.log(result_more_btn);
      result_more_btn.addEventListener("click", () => {
        setTimeout(() => {
          set_keyword_color();
        }, 20);
      });
    }
  };
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      set_keyword_color();
    }
  };
})();
