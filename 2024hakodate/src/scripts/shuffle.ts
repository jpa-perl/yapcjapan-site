import ShuffleText from "shuffle-text";

export function setUpShuffleText() {
  const shuffleTexts = document.querySelectorAll(".shuffleText");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        const shuffleText = new ShuffleText(target);
        shuffleText.start();
        observer.unobserve(target);
      }
    });
  }, options);

  shuffleTexts.forEach((element) => {
    observer.observe(element);
  });
}
