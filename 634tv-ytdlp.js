// ==UserScript==
// @name         634tv copy ytdlp command
// @namespace    http://tampermonkey.net/
// @version      2025-02-27
// @description  copy video download command
// @author       Charles
// @match        https://634.tv/index.php/vod/play/id/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=634.tv
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    let base_download_path = "";
    let new_btn = document.createElement("button");
    new_btn.textContent = "Copy ytdlp download command";
    new_btn.addEventListener("click", function () {
      const video_url = document.querySelector("#playleft > iframe").src;
      const url = new URL(video_url);
      const params = new URLSearchParams(url.search);
      const m3u8_link = params.get('url');
      let video_title = document.querySelector(".title > a").textContent;
      // time  / at end
      base_download_path = base_download_path.replace(/\/+$/, '');
      let command = `yt-dlp -o "${base_download_path}/${video_title}.mp4" "${m3u8_link}"`;
      navigator.clipboard.writeText(command);
      alert("copied");
    });
  
    let insert_node = document.querySelector(".stui-player.col-pd");
    insert_node.insertBefore(new_btn, insert_node.firstChild);
  })();
  