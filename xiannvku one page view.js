// ==UserScript==
// @name         仙女庫一頁檢視
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  xiannvku view picture in one page
// @author       Charles
// @match        http://www.xiannvku.com/pic/*.html
// @match        http://xiannvku.com/pic/*.html
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    // Your code here...
    //get number of pages
    let page_bar = document.getElementById("pages").getElementsByTagName('a');
    let first_page_html_split = window.location.href.split('-');
    let last_page_html_split = page_bar[page_bar.length - 2].href.split('-');
    let last_page = parseInt(last_page_html_split[last_page_html_split.length - 1].replace(".html", ""));
    //get pic show element
    let pic_list_div = document.getElementsByClassName("content")[0].getElementsByTagName('center')[0];
    //receive all pic and show
    for (let i = 2; i <= last_page; i++) {
        let html_string = "";
        for (let x = 0; x < first_page_html_split.length - 1; x++) {
            html_string += first_page_html_split[x] + "-";
        }
        html_string += i + ".html";
        let parse_html = document.createElement('html');
        let xhr = new XMLHttpRequest();
        xhr.open('GET', html_string, false);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return; // or whatever error handling you want
            parse_html.innerHTML = this.responseText;
        };
        xhr.send();
        let img_content = parse_html.getElementsByClassName("content")[0].getElementsByTagName('center')[0].getElementsByTagName('img');
        if(img_content.length <= 0) console.log(i);
        for (let img_count = 0; img_count < img_content.length; img_count++) {
            pic_list_div.appendChild(img_content[img_count]);
        }
    }
})();