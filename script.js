// default language is slovak
// dont forget to change lang attribute in html tag
// get all content, change language, set content

// use local storage to save language variable
// if there is no variable, set default language to slovak
// if there is variable, set language to that variable

// GENERAL

/*-------------------- DEFINITIONS ----------------------*/
const html = document.querySelector("html");
const body = document.querySelector("body");

const header = document.querySelector("header");
const nav = document.querySelector("nav");

const mobileNavBtn = document.querySelector(".mobile-nav-btn");
const closeMobileNavBtn = document.querySelector(".close-mobile-nav-btn"); 

const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

let popup, popupCloseBtn;
// popup
try {
  popup = document.querySelector(".popup-overlay");
  popupCloseBtn = document.querySelector(".popup-close-btn");
} catch (error) {
  console.log(`Element ${key} not found on this page!`);
}

// definitions of nav elements
const navLogos = document.querySelectorAll(".nav-logo");

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownBtn = document.querySelector(".lang");

const mobileLangSymbol = document.querySelector(".mobile-nav-lang")

const langSkBtn = document.querySelector("#lang-svk");
const langEnBtn = document.querySelector("#lang-eng");
let firstLoad = true;

/*-------------------- Mobile Nav ----------------------*/
  
mobileNavBtn.addEventListener("click", () => {
  nav.classList.add("show");
  html.classList.add("html-lock");
  body.classList.add("fix-body");
});
  
closeMobileNavBtn.addEventListener("click", () => {
  nav.classList.remove("show");
  html.classList.remove("html-lock");
  body.classList.remove("fix-body");
});

const hideMobileNav = () => {
  nav.classList.remove("show");
  html.classList.remove("html-lock");
  body.classList.remove("fix-body");
};

/*-------------------- Popup ----------------------*/
// if(popup != null) {
// popupCloseBtn.addEventListener("click", () => {
//   console.log("clicked");
//   popup.classList.add("hidden-popup");
// })}

/*-------------------- Scroll To Top ----------------------*/

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove("hidden-scroll-to-top-btn");
    } else {
        scrollToTopBtn.classList.add("hidden-scroll-to-top-btn");
    }
});

// array of languages
const languages = [langSk, langEn];

// changing language function
const changeLang = (lang) => {
  hideMobileNav();
  if (lang == 0) {
    langSkBtn.classList.add("active");
    langEnBtn.classList.remove("active");
    mobileLangSymbol.classList.add("lang-sk-active");
    mobileLangSymbol.classList.remove("lang-en-active");
  } else if (lang == 1) {
    langEnBtn.classList.add("active");
    langSkBtn.classList.remove("active");
    mobileLangSymbol.classList.add("lang-en-active");
    mobileLangSymbol.classList.remove("lang-sk-active");
  }
  if (!firstLoad) {
    dropdown.classList.toggle("hidden-dropdown");
    dropdownBtn.classList.toggle("active");
  }
  firstLoad = false;
  // change html lang attribute and meta description
  if (lang == 0) {
    document.querySelector("html").setAttribute("lang", "sk");
    document
      .querySelector("#meta-name")
      .setAttribute(
        "content",
        "Špecializujeme sa na inovatívnu digitalizáciu na mieru pre Vaše podnikanie."
      );
  } else if (lang == 1) {
    document.querySelector("html").setAttribute("lang", "en");
    document
      .querySelector("#meta-name")
      .setAttribute(
        "content",
        "Blackwater Digital offers tailored digitalization services for local and growing businesses."
      );
  }
  const langItems = Object.keys(languages[lang]);
  langItems.forEach((key) => {
    try {
      document.querySelector(key).innerHTML = languages[lang][key];
    } catch (error) {
      console.log(`Element ${key} not found on this page!`);
    }
  });
  localStorage.setItem("lang", lang);
};

// lang 0 - slovak
// lang 1 - english
let selectedLang = localStorage.getItem("lang");
if (selectedLang == null) {
  localStorage.setItem("lang", 0);
  selectedLang = 0;
}
changeLang(selectedLang);

navLogos.forEach((logo) => {
  logo.addEventListener("click", () => {
    window.location.href = "/";
  });
});

/*-------------------- Languages Menu ----------------------*/

// switching hidden and shown lang menu
dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden-dropdown");
  dropdownBtn.classList.toggle("active");
  // add if active and click anywhere else, remove active
});

mobileLangSymbol.addEventListener("click", () => {
    if(selectedLang == 0) selectedLang = 1;
    else if(selectedLang == 1) selectedLang = 0;
    changeLang(selectedLang);
});

// default language is slovak
langSkBtn.addEventListener("click", () => {
  selectedLang = 0;
  changeLang(selectedLang);
});

langEnBtn.addEventListener("click", () => {
  selectedLang = 1;
  changeLang(selectedLang);
});
