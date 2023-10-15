// main heights
const aboutUsHeroHeight =
  document.querySelector(".about-us-hero").clientHeight;
const missionContainerHeight =
  document.querySelector(".mission-statement-container").clientHeight;
const visionHeight = document.querySelector(".vision").clientHeight;
const motivationHeight = document.querySelector(".motivation-showcase").clientHeight;
const ourTeamHeight = document.querySelector(".team-showcase").clientHeight;

window.addEventListener("load", () => {
  // switching nav color based on background
  window.addEventListener("scroll", () => {
    if (window.scrollY < aboutUsHeroHeight / 2.5) {
      // transparent
      header.classList.remove("dark");
      header.classList.remove("light");
    } else if (
      window.scrollY >= aboutUsHeroHeight / 2.5 &&
      window.scrollY < aboutUsHeroHeight + missionContainerHeight + visionHeight - 100
    ) {
      // dark
      header.classList.remove("light");
      header.classList.add("dark");
    } else if (
      window.scrollY >= aboutUsHeroHeight + missionContainerHeight + visionHeight - 100 &&
      window.scrollY < aboutUsHeroHeight + missionContainerHeight + visionHeight + motivationHeight - 100
    ) {
      // light
      header.classList.add("light");
      header.classList.remove("dark");
    } else if (
      window.scrollY >= aboutUsHeroHeight + missionContainerHeight + visionHeight + motivationHeight - 100

    ) {
      // dark
      header.classList.remove("light");
      header.classList.add("dark");
    }
  });
});
