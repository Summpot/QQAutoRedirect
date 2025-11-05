// ==UserScript==
// @name         QQ auto redirect
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  当QQ点击链接跳转到外部浏览器，却被腾讯拦截时，脚本会自动跳转到目标网页
// @author       Poker
// @match        http*://c.pc.qq.com/*
// @license      MIT
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";

    function getParam(name) {
        const url = new URL(window.location.href);
        return url.searchParams.get(name);
    }

    let target = getParam("pfurl") || getParam("url");

    if (target) {
        try {
            target = decodeURIComponent(target);
        } catch (e) {}

        window.location.replace(target);
    }
})();
