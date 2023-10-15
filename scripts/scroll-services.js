// main heights
const servicesHeroHeight =
  document.querySelector(".services-hero").clientHeight;
const digitalizationPackageHeight = document.querySelector(
  ".digitalization-package"
).clientHeight;
const automatizationPackageHeight = document.querySelector(
  ".automatization-package"
).clientHeight;

window.addEventListener("load", () => {
  // switching nav color based on background
  window.addEventListener("scroll", () => {
    if (
      window.scrollY <
      servicesHeroHeight - 100
    ) {
      // dark
      header.classList.add("dark");
      header.classList.remove("light");
    } else {
      // light
      header.classList.add("light");
      header.classList.remove("dark");
    }
  });
});
