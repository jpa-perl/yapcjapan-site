import lottie, { AnimationItem } from "lottie-web";
import dataUrl from "url:./logo-animation-data.json";
import bgImage from "url:../images/photo_main.jpg";
import ShuffleText from "shuffle-text";

export function setUpHero() {
  const bgLoader = new Image();
  bgLoader.src = bgImage;
  let logoAnimator: AnimationItem;

  bgLoader.onload = async () => {
    const heroBg = document.getElementById("heroBg");
    if (!heroBg) return;
    heroBg.setAttribute("src", bgImage);
    document.body.classList.add("bg_loaded");

    await sleep(100);
    logoAnimator.play();
    await sleep(1000);
    showBanner();
    await sleep(350);
    heroBg.classList.add("hero_bg_anim");
  };

  const logo = document.getElementById("heroLogo");

  if (logo) {
    logoAnimator = lottie.loadAnimation({
      container: logo,
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

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
