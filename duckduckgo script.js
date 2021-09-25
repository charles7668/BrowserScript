// ==UserScript==
// @name         duckduckgo script
// @namespace    http://duckduckgo.com/
// @version      1.0
// @description  make duckduckgo convenient
// @author       charles
// @match        https://duckduckgo.com/?q=*
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
`);
(function () {
  "use strict";

  // Your code here...
})();
