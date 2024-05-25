export function setUpInView() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  const elements = document.querySelectorAll("[data-watch-inView], .fadeIn");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.classList.add("inView");
        observer.unobserve(target);
      }
    });
  }, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
}
