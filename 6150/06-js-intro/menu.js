"use strict";

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
});

menuButton.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('open');
    }
});
