// main heights
const ourWorkHeroHeight =
  document.querySelector(".our-work-hero").clientHeight;
const separatorHeight = document.querySelector(".separator").clientHeight;
const selectedProjectsHeight =
  document.querySelector(".selected-projects-showcase").clientHeight;
const allProjectsHeight = document.querySelector(".all-projects-showcase").clientHeight;

// clients onclick
const clients = document.querySelectorAll(".work-showcase-item");

clients.forEach((client) => {
  const clientUrl = client.querySelector('a').href;
  client.addEventListener("click", () => {
    window.open(clientUrl, '_blank');
  });
});

console.log(selectedProjectsHeight + ourWorkHeroHeight)
window.addEventListener("load", () => {
  // switching nav color based on background
  window.addEventListener("scroll", () => {
    if (window.scrollY < ourWorkHeroHeight / 4) {
      // transparent
      header.classList.remove("dark");
      header.classList.remove("light");
    } else if (
      window.scrollY >= ourWorkHeroHeight / 4 && window.scrollY <   ourWorkHeroHeight + separatorHeight + selectedProjectsHeight - 100) {
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
