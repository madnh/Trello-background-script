// ==UserScript==
// @name         Trello Style
// @namespace    https://github.com/madnh/Trello-background-script
// @version      0.1
// @description  Change the Trello background image
// @author       MaDnh
// @match        https://trello.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var backgrounds = [
        'http://i.imgur.com/CjAFFqk.jpg',
        'http://i.imgur.com/KbknKJ4.jpg',
        'http://i.imgur.com/ONCq8uI.jpg',
        'http://i.imgur.com/zV8dF0y.jpg',
        'http://i.imgur.com/L0O9kkX.jpg',
        'http://i.imgur.com/kTPUlx8.jpg',
        'http://i.imgur.com/PnbU6O6.jpg',
        'http://i.imgur.com/ibdL6mx.jpg',
        'http://i.imgur.com/WeXhWyY.jpg',
        'http://i.imgur.com/d05sgQN.jpg',
        'http://i.imgur.com/jCJBTS9.jpg',
        'http://i.imgur.com/iNMYcAF.jpg',
        'http://i.imgur.com/0U6XayX.jpg',
        'http://i.imgur.com/JelLbWg.jpg',
        'http://i.imgur.com/OGk3sJS.jpg',
        'http://i.imgur.com/c8CGuM8.jpg',
        'http://i.imgur.com/Rc46JS2.jpg',
        'http://i.imgur.com/YEfLLOY.jpg',
        'http://i.imgur.com/c7Z4adP.jpg',
        'http://i.imgur.com/FifUrok.jpg'
    ],
        time_interval;

    function do_change(url) {
        document.body.style.background = "url(" + url + ") no-repeat center center fixed";
        document.body.style.backgroundSize = 'cover';
    }

    function randomBackground() {
        return backgrounds[Math.floor(Math.random() * backgrounds.length)];
    }

    function action() {
        do_change(randomBackground());
    }

    function loop(every) {
        if(time_interval){
            clearInterval(time_interval);
        }

        time_interval = setInterval(action, every || (15 * 3600 * 1000));
    }

    window.changeBg = function (every) {
        action();
        loop(every);
    };
    window.addBg = function (url) {
        backgrounds.push(url);
    };

    action();
})(window);
