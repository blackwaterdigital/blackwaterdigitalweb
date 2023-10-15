// main heights
const ourWorkHeroHeight =
  document.querySelector(".our-work-hero").clientHeight;
const separatorHeight = document.querySelector(".separator").clientHeight;
const selectedProjectsHeight =
  document.querySelector(".selected-projects-showcase").clientHeight;
const allProjectsHeight = document.querySelector(".all-projects-showcase").clientHeight;


console.log(selectedProjectsHeight + ourWorkHeroHeight)
window.addEventListener("load", () => {
  // switching nav color based on background
  window.addEventListener("scroll", () => {
    if (window.scrollY < ourWorkHeroHeight + separatorHeight + selectedProjectsHeight - 100) {
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
