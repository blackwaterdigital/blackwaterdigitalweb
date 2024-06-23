// main heights
const servicesHeroHeight =
  document.querySelector(".services-hero").clientHeight;
const servicesPage = document.querySelector(
  ".services-page"
).clientHeight;
const separatorHeight = document.querySelector(".separator").clientHeight;

window.addEventListener("load", () => {
  // switching nav color based on background
  window.addEventListener("scroll", () => {
    if (window.scrollY < servicesHeroHeight / 4) {
      // transparent
      header.classList.remove("dark");
      header.classList.remove("light");
    } else if (
      window.scrollY >= servicesHeroHeight / 4 && window.scrollY < servicesHeroHeight + separatorHeight - 100
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
