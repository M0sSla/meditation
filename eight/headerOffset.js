"use strict"

window.onscroll = function () {
    myFunc();
}

let header = document.querySelector("header")

let sticky = header.offsetTop;

function myFunc() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("_sticky");
    }
    else {
        header.classList.remove("_sticky");
    }
}