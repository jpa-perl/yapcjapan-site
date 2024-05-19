import lottie from "lottie-web";
import dataUrl from "url:./logo-animation-data.json";
import bgImage from "url:../images/photo_main.jpg";

/*
 * 背景アニメーション
 */

const heroBg = document.getElementById("hero_bg");
const heroBgImg = new Image();
heroBgImg.src = bgImage;

if (heroBg) {
  heroBgImg.onload = () => {
    heroBg.classList.add("hero_bg_anim");
    heroBg.setAttribute("src", bgImage);
    document.body.classList.add("bg_loaded");
    setTimeout(() => {
      lottie.play();
    }, 500);
  };
}

const element = document.getElementById("logo");

if (element) {
  lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: dataUrl,
  });
}
