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
    color: aqua !important;
}
.result__title > .result__a:visited, .result__title > .result__a:visited:hover {
    color: blue !important;
}
.result__body > .result__snippet > b {
    color: red !important;
}
`);
(function () {
  "use strict";

  // Your code here...
})();
