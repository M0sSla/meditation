"use strict";

window.onload = () => {
  const parallax = document.querySelector(".parallax");

  if (parallax) {
    const clouds = document.querySelector(".images-parallax__clouds");
    const mountains = document.querySelector(".images-parallax__mountains");
    const human = document.querySelector(".images-parallax__human");

    const forClouds = 40;
    const forMountains = 20;
    const forHuman = 10;

    const speed = 0.05;

    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    let thresholdSets = [];
    for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }

    const callback = (entries, observer) => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      setParallaxItemsStyle(scroll);
    };

    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });

    observer.observe(document.querySelector(".content"));

    function setParallaxItemsStyle(scroll) {
      mountains.style.cssText = `transform: translate(0%, -${scroll / 9}%);`;
      human.style.cssText = `transform: translate(0%, -${scroll / 6}%);`;
    }
  }
};
