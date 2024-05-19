import ShuffleText from "shuffle-text";

export function setUpSectionHeader() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const elements = document.querySelectorAll(".sectionHeader");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        const text = target.querySelector<HTMLElement>("h2 > span");
        if (text) {
          const shuffleText = new ShuffleText(text);
          shuffleText.start();
        }
        target.classList.add("inView");
        observer.unobserve(target);
      }
    });
  }, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
}
