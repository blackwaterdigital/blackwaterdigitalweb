// main heights
const landingPageHeroHeight =
  document.querySelector(".landing-page-hero").clientHeight;
const quoteContainerHeight =
  document.querySelector(".quote-container").clientHeight;
const ourWorkHeight = document.querySelector(".our-work").clientHeight;
const separatorHeight = document.querySelector(".separator").clientHeight;
const servicesShowcaseHeight =
  document.querySelector(".services-showcase").clientHeight;
const reviewsShowcaseHeight = 400
  // document.querySelector(".reviews-showcase").clientHeight;
const contactHeight = document.querySelector(".contact").clientHeight;

// services onclick
const servicesPackages = document.querySelectorAll(".product-package");

servicesPackages.forEach((servicePackage) => {
  servicePackage.addEventListener("click", () => {
    location.href = "/services/";
  });
});

// clients onclick
const clients = document.querySelectorAll(".work-showcase-item");

clients.forEach((client) => {
  const clientUrl = client.querySelector('a').href;
  client.addEventListener("click", () => {
    window.open(clientUrl, '_blank');
  });
});

// switching color of nav based on background
window.addEventListener("load", () => {
  // switching nav color based on background
  window.addEventListener("scroll", () => {
    if (window.scrollY < landingPageHeroHeight / 4) {
      // transparent
      header.classList.remove("dark");
      header.classList.remove("light");
    } else if (
      window.scrollY >= landingPageHeroHeight / 4 &&
      window.scrollY < landingPageHeroHeight + quoteContainerHeight - 100
    ) {
      // dark
      header.classList.remove("light");
      header.classList.add("dark");
    } else if (
      window.scrollY >= landingPageHeroHeight + quoteContainerHeight - 100 &&
      window.scrollY <
        landingPageHeroHeight +
          quoteContainerHeight +
          ourWorkHeight +
          separatorHeight
    ) {
      // light
      header.classList.remove("dark");
      header.classList.add("light");
    } else if (
      window.scrollY >=
        landingPageHeroHeight +
          quoteContainerHeight +
          ourWorkHeight +
          separatorHeight &&
      window.scrollY <
        landingPageHeroHeight +
          quoteContainerHeight +
          ourWorkHeight +
          separatorHeight +
          servicesShowcaseHeight / 5
    ) {
      // transparent
      header.classList.remove("light");
      header.classList.remove("dark");
    } else if (
      window.scrollY >=
        landingPageHeroHeight +
          quoteContainerHeight +
          ourWorkHeight +
          separatorHeight +
          servicesShowcaseHeight / 5 &&
      window.scrollY <
        landingPageHeroHeight +
          quoteContainerHeight +
          ourWorkHeight +
          separatorHeight +
          servicesShowcaseHeight - 100
    ) {
      // dark
      header.classList.remove("light");
      header.classList.add("dark");
    } else if (
      window.scrollY >=
        landingPageHeroHeight +
          quoteContainerHeight +
          ourWorkHeight +
          separatorHeight +
          servicesShowcaseHeight - 100 && 
      window.scrollY < landingPageHeroHeight +
      quoteContainerHeight +
      ourWorkHeight +
      separatorHeight +
      servicesShowcaseHeight +
      reviewsShowcaseHeight - 100
      
    ){
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
