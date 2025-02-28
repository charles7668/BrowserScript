// ==UserScript==
// @name         Image site bypass
// @namespace    http://tampermonkey.net/
// @version      2025-02-28
// @description  bypass image site
// @author       Charles
// @match        https://imgqqwebrf.sbs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=imgqqwebrf.sbs
// @run-at       document-idle
// @grant        none
// ==/UserScript==
var inter;
(function() {
    'use strict';
    // Your code here...
    $(".save-btn").removeAttr("disabled");
    $(".timer-link").parent().addClass("d-none");
    $(".url-link").parent().removeClass("d-none");
    clearInterval(inter);
    setTimeout(function(){
        $(".url-link").click();
    },500);
})();