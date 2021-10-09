// ==UserScript==
// @name         duckduckgo script
// @namespace    http://duckduckgo.com/
// @version      1.3
// @description  make duckduckgo convenient
// @author       charles
// @match        https://duckduckgo.com/?q=*
// @match        https://duckduckgo.com/?t=*
// @icon         https://www.google.com/s2/favicons?domain=duckduckgo.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
.result__title > .result__a,.result__title > .result__a:hover, .result__title > .result__a:active {
    color: rgb(105, 151, 244) !important;
}
.result__title > .result__a:visited, .result__title > .result__a:visited:hover {
    color: rgb(202, 97, 255) !important;
}
.result__body > .result__snippet > b {
    color: red !important;
}
.highlight{
  cursor: inherit !important;
}
`);

(function () {
  "use strict";

  // Your code here...
  var pre_result_length = 0;
  var counter = 0;
  var change_result_node = function () {
    var result = document.getElementsByClassName("results_links_deep");
    var links = document.getElementById("links");
    if (result.length <= pre_result_length && counter < 100) {
      setTimeout(() => {
        counter = counter + 1;
        change_result_node();
      }, 50);
    } else {
      counter = 0;
      pre_result_length = result.length;
      for (var i = 0; i < result.length; i++) {
        var clone_result = result[i].cloneNode(true);
        var img_parent = result[i].getElementsByClassName(
          "result__extras__url"
        )[0];
        var img = img_parent.getElementsByClassName("result__icon")[0];
        clone_result
          .getElementsByClassName("result__extras__url")[0]
          .replaceChild(
            img,
            clone_result.getElementsByClassName("result__icon")[0]
          );
        links.replaceChild(clone_result, result[i]);
      }
      add_listener_to_more_result(0);
    }
  };
  var add_listener_to_more_result = function (time) {
    var more_result_node = document.getElementsByClassName("result--more__btn");
    //console.log(more_result_node.length);
    if (more_result_node[0] === undefined && time < 100) {
      setTimeout(() => {
        add_listener_to_more_result(time + 1);
      }, 50);
    } else if (more_result_node[0] !== undefined) {
      more_result_node[0].addEventListener("click", () => {
        change_result_node();
      });
    }
  };
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      change_result_node();
    }
  };
})();
