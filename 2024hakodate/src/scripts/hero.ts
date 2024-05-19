import lottie, { AnimationItem } from "lottie-web";
import dataUrl from "url:./logo-animation-data.json";
import bgImage from "url:../images/photo_main.jpg";
import ShuffleText from "shuffle-text";

export function setUpHero() {
  const heroBg = document.getElementById("heroBg");
  const heroBgImg = new Image();
  heroBgImg.src = bgImage;

  let anim: AnimationItem;

  if (heroBg) {
    heroBgImg.onload = () => {
      heroBg.setAttribute("src", bgImage);
      document.body.classList.add("bg_loaded");
      setTimeout(() => {
        anim.play();
      }, 500);

      setTimeout(() => {
        showBanner();
      }, 1700);

      setTimeout(() => {
        heroBg.classList.add("hero_bg_anim");
      }, 2000);
    };
  }

  const element = document.getElementById("heroLogo");

  if (element) {
    anim = lottie.loadAnimation({
      container: element,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: dataUrl,
    });
  }
}

function showBanner() {
  const heroBanner = document.getElementById("heroBanner");
  console.log(heroBanner);
  heroBanner?.classList.add("anim");
  document.querySelectorAll<HTMLElement>(".shuffleTextHero").forEach((elm) => {
    const shuffleText = new ShuffleText(elm);
    shuffleText.start();
  });
}
