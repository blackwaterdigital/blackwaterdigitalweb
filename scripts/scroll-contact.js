// main heights
const contactHeroHeight =
  document.querySelector(".contact-hero").clientHeight;
const contactFormHeight = document.querySelector(
  ".contact-form"
).clientHeight;
const contactStepsHeight = document.querySelector(
  ".contact-steps"
).clientHeight;
const contactBannerHeight = document.querySelector(
  ".contact-banner"
).clientHeight;

window.addEventListener("load", () => {
  // switching nav color based on background
  window.addEventListener("scroll", () => {
    if (window.scrollY < contactHeroHeight / 4) {
      // transparent
      header.classList.remove("dark");
      header.classList.remove("light");
    } else if (window.scrollY >= contactHeroHeight / 4 &&
      window.scrollY <
      contactHeroHeight - 100
    ) {
      // dark
      header.classList.add("dark");
      header.classList.remove("light");
    } else if (
        window.scrollY >= contactHeroHeight - 100 &&
        window.scrollY < contactHeroHeight + contactFormHeight - 100
    ) {
      // light
      header.classList.add("light");
      header.classList.remove("dark");
    } else {
        // dark
        header.classList.add("dark");
        header.classList.remove("light");
    }
  });
});
