// ==UserScript==
// @name         getchu information copy
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  copy getchu item information
// @author       charles
// @match        http://www.getchu.com/soft.phtml?id=*
// @icon         https://www.google.com/s2/favicons?domain=getchu.com
// @grant        GM_addStyle
// @grant        GM_setClipboard
// ==/UserScript==

GM_addStyle(
  `
#copy_info_button , #copy_info_setting{
    margin-left : 20px;
}
#copy_info_input_setting{
    position:absolute;
    width : 500px;
    height:500px;
    margin-left:auto;
    margin-right:auto;
    margin-top:auto;
    margin-bottom:auto;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:10;
    background-color: blue;
}
#copy_info_setting_textarea{
    width = 100%;
}
    `
);
const keywords = {
  title_keyword: "%title",
  brand_keyword: "%brand",
  price_keyword: "%price",
  release_date_keyword: "%release_date",
  media_keyword: "%media",
  genre_keyword: "%genre",
  JAN_Code_keyword: "%JAN_Code",
  original_keyword: "%original",
  scenario_keyword: "%scenario",
  category_keyword: "%category",
  product_number_keyword: "%product_number",
  special_keyword: "%special",
};
var search_cookie = function (cookie_name) {
  var cookies = document.cookie;
  console.log(cookies);
  var split_cookies = cookies.split(";");
  for (var i = 0; i < split_cookies.length; i++) {
    let split = split_cookies[i].split("=");
    if (split[0].trim() === cookie_name.trim()) {
      var result = "";
      for (var j = 1; j < split.length; j++) {
        result += split[j];
      }
      return result;
    }
  }
  return "";
};
var parse_list = () => {
  var table = document
    .querySelector("#soft_table")
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr")[1]
    .getElementsByTagName("th")[0]
    .getElementsByTagName("table")[0]
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");
  var result = [];
  for (var i = 0; i < table.length; i++) {
    var td = table[i].getElementsByTagName("td");
    if (td.length < 2) {
      break;
    }
    var a_tag = td[1].getElementsByTagName("a");
    let value = td[1].innerText;
    if (a_tag.length >= 1) {
      value = a_tag[0].innerText;
    }
    var keyword = "%unknown";
    var td0_string = td[0].innerText.trim();
    if (td0_string === "ブランド：") {
      keyword = keywords.brand_keyword;
    } else if (td0_string === "定価：") {
      keyword = keywords.price_keyword;
    } else if (td0_string === "発売日：") {
      keyword = keywords.release_date_keyword;
    } else if (td0_string === "メディア：") {
      keyword = keywords.media_keyword;
    } else if (td0_string === "ジャンル：") {
      keyword = keywords.genre_keyword;
    } else if (td0_string === "JANコード：") {
      keyword = keywords.JAN_Code_keyword;
    } else if (td0_string === "品番：") {
      keyword = keywords.product_number_keyword;
    } else if (td0_string === "原画：") {
      keyword = keyword.soriginal_keyword;
    } else if (td0_string === "シナリオ：") {
      keyword = keyword.scenario_keyword;
    } else if (td0_string === "商品同梱特典：") {
      keyword = keyword.special_keyword;
    } else if (td0_string === "カテゴリ：") {
      keyword = keyword.category_keyword;
    }
    result.push({ keyword, value });
  }
  return result;
};
var copy_information = () => {
  let information_pattern = search_cookie("copy_info_setting");
  var title_name = document
    .querySelector("#soft-title")
    .firstChild.nodeValue.trim();

  var list = parse_list();
  list.push({ keyword: keywords.title_keyword, value: title_name });
  for (var i = 0; i < list.length; i++) {
    information_pattern = information_pattern.replaceAll(
      list[i].keyword,
      list[i].value
    );
  }
  information_pattern = information_pattern.replaceAll("\\n", "\n");
  console.log(information_pattern);
  GM_setClipboard(information_pattern, "text");
  alert("copied");
};

var get_copy_setting_default_string = () => {
  return (
    "title:%title\\nbrand:%brand\\nprice:%price\\nrelease_date:%release_date\\n" +
    "media:%media\\ngenre:%genre\\nJAN_Code:%JAN_Code\\noriginal:%original\\nscenario:%scenario\\n" +
    "category:%category;"
  );
};

(function () {
  "use strict";

  // Your code here...
  let title = document.querySelector("#soft-title");
  console.log(title);
  var button_copy = document.createElement("button");
  button_copy.setAttribute("id", "copy_info_button");
  button_copy.innerText = "copy";
  button_copy.addEventListener("click", (e) => {
    copy_information();
  });
  title.appendChild(button_copy);
  var button_setting = document.createElement("button");
  button_setting.setAttribute("id", "copy_info_setting");
  button_setting.innerText = "copy setting";
  button_setting.addEventListener("click", (e) => {
    if (document.querySelector("#copy_info_input_setting") !== null) {
      return;
    }
    let copy_setting_div = document.createElement("div");
    copy_setting_div.setAttribute("id", "copy_info_input_setting");
    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let li8 = document.createElement("li");
    let li9 = document.createElement("li");
    let li10 = document.createElement("li");
    let li11 = document.createElement("li");
    let li12 = document.createElement("li");

    li1.innerText = "%title = title name";
    li2.innerText = "%brand = ブランド";
    li3.innerText = "%price = 定価";
    li4.innerText = "%release_date = 発売日";
    li5.innerText = "%media = メディア";
    li6.innerText = "%genre = ジャンル";
    li7.innerText = "%JAN_Code = JANコード";
    li8.innerText = "%original = 原画";
    li9.innerText = "%scenario = シナリオ";
    li10.innerText = "%category = カテゴリ";
    li11.innerText = "%product_number = 品番";
    li12.innerText = "%special = 商品同梱特典";
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);
    ul.appendChild(li8);
    ul.appendChild(li9);
    ul.appendChild(li10);
    let text_area = document.createElement("textarea");
    text_area.setAttribute("id", "copy_info_setting_textarea");
    text_area.setAttribute("cols", "50");
    text_area.setAttribute("rows", "5");
    let cookie_result = search_cookie("copy_info_setting");
    text_area.innerHTML = cookie_result.replaceAll("\\n", "\n");
    copy_setting_div.appendChild(ul);
    copy_setting_div.appendChild(text_area);
    let button_bar = document.createElement("div");
    button_bar.style.width = "100%";
    let button_set = document.createElement("button");
    button_set.innerText = "Set";
    button_set.addEventListener("click", (e) => {
      document.cookie =
        "copy_info_setting=" + text_area.value.replaceAll("\n", "\\n");
      document.body.removeChild(copy_setting_div);
      console.log(text_area.value.replaceAll("\n", "\\n"));
      //   copy_information();
    });
    let button_cancel = document.createElement("button");
    button_cancel.innerText = "Cancel";
    button_cancel.addEventListener("click", (e) => {
      document.body.removeChild(copy_setting_div);
    });
    let button_default = document.createElement("button");
    button_default.innerText = "default value";
    button_default.addEventListener("click", (e) => {
      text_area.value = "";
      text_area.innerHTML = get_copy_setting_default_string().replaceAll(
        "\\n",
        "\n"
      );
    });
    button_bar.appendChild(button_set);
    button_bar.appendChild(button_cancel);
    button_bar.appendChild(button_default);
    copy_setting_div.appendChild(button_bar);
    document.body.appendChild(copy_setting_div);
  });
  title.appendChild(button_setting);
  let cookie_result = search_cookie("copy_info_setting");
  if (cookie_result === "") {
    document.cookie = "copy_info_setting=" + get_copy_setting_default_string();
  }
  console.log(document.cookie);
})();
