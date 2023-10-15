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

/*-------------------- Languages ----------------------*/
// sk lang json
const langSk = {
  // landing page

  "#home-title": "Domov | Blackwater Digital",
  
  "#about-title": "O nás | Blackwater Digital",
  
  "#work-title": "Naša práca | Blackwater Digital",
  
  "#service-title": "Služby | Blackwater Digital",
  
  "#contact-title": "Kontakt | Blackwater Digital",
  
  "#home-nav-link": "Domov",
  
  "#about-nav-link": "O nás",
  
  "#work-nav-link": "Naša práca",
  
  "#service-nav-link": "Služby",
  
  "#contact-nav-link": "Kontaktujte nás",
  
  ".lang > a": "Jazyk",
  
  ".contact-us-btn": "Kontaktujte nás",
  
  "#lp-hero-title": '<h1>Buďte súčasťou budúcnosti.</h1><h1>Digitalizujte<span class="bold"> Vaše </span>ponikanie s nami.</h1>',
  
  "#lp-hero-text": `<p>V Blackwater Digital ponúkame digitalizačné služby optimalizované pre miestne alebo rastúce
                   podniky. Veríme že v digitalizácií je budúcnosť a chceme byť jej aktívnou súčasťou. V našej ponuke nájdete
                   služby od tvorby webu a marketing a správu sociálnych sietí až po individuálny vývoj alebo systémový dizajn.</p>
                   <a class="more-about-btn" href="#services-showcase"><p>Naša ponuka</p><p>↓</p></a>`,
  
  "#lp-quote": "Najlepším spôsobom, ako predpovedať budúcnosť, je vytvoriť ju.",
  
  ".our-work > h1": "Úspešné projekty",
  
  "#caselink-client > .text-container > p": "Platforma pre biznis súťaže",
  
  "#caselink-client > .text-container > ul": "<li>Dizajn</li><li>Vývoj</li><li>Systémový management</li>",
  
  "#lalizu-client > .text-container > p": "Ateliér zdravia a krásy",
  
  "#lalizu-client > .text-container > ul": "<li>Dizajn</li><li>Vývoj</li><li>Management eshop-u</li>",
  
  "#andyluzia-client > .text-container > p": "Eventová agentúra",
  
  "#andyluzia-client > .text-container > ul": "<li>Dizajn</li><li>Vývoj</li><li>Marketingový management</li>",
  
  "#lp-pckg-dig": '<h3>Digitalizácia</h3><p>Posuňte svoj biznis na nový level.</p><ul><li>Web dizajn</li><li>Vývoj webu</li><li>Management sociálnych sietí</li></ul>',
  
  "#lp-pckg-aut": '<h3>Automatizácia</h3><p>Uľahčite si každodenné operácie.</p><ul><li>Individuálny vývoj</li><li>Vývoj interných nástrojov</li><li>Systémový dizajn</li></ul>',
  
  "#services-showcase > h1": "Balíčky služieb",
  
  "#services-showcase > p": "Ponúkame balíčky s individuálnymi službami. Stačí si len vybrať balíček, ktorý sa Vám najviac hodí.",
  
  ".reviews-showcase > h1": "Čo hovoria naši klienti",

  // add items of reviews here when text is there
  
  ".contact > h1": "Máte záujem s nami spolupracovať?",

  "#lp-big-contact-text": `<h4>Ozvite sa nám hneď</h4><p>Stačí sa ozvať s hocijakým projektom alebo nápadom aký máte. V Blackwater Digital nám ide hlavne o naplnenie požiadavok klienta.</p>
                          <h4>Povedzte nám o svojom nápade</h4><p>Nápady sú najlepším začiatkom pre spoluprácu. Radi by sme boli pri Vás a poradili Vám aby sa Váš nápad stal realitou.</p>`,
  
  "#lp-small-contact-text": "<h4>Sledujte Blackwater Digital</h4><p>Sledujte nás na všetkých sociálnych sieťach. V pravidelných intervaloch pridávame obsah, ktorý je pre našich klientov relevantný.</p>",

  "#lp-contact-btn": "<p>Kontaktujte nás</p><p>→</p>",

  '.footer-menu': 
  `<div class="footer-row">
  <h6>Digitalizačné služby</h6>
  <ul><li><a href="/services/">Web Dizajn</a></li>
  <li><a href="/services/">Vývoj webu</a></li>
  <li><a href="/services/">Sociálne siete</a></li>
  <li><a href="/services/">Dizajn značky</a></li>
  <li><a href="/services/">Fotografia pre značku</a></li></ul></div>
  <div class="footer-row">
  <h6>Automatizačné služby</h6>
  <ul><li><a href="/services/">Individuálny vývoj</a></li>
  <li><a href="/services/">Vývoj interných nástrojov</a></li>
  <li><a href="/services/">Systémový dizajn</a></li></ul></div>
  <div class="footer-row"><h6>O nás</h6>
  <ul><li><a href="/about/">Programové prehlásenie</a></li>
  <li><a href="/about/">Vízia</a></li>
  <li><a href="/about/">Motivácia</a></li>
  <li><a href="/about/">Spoznajte náš tím</a></li></ul></div>
  <div class="footer-row">
  <h6>Právne</h6>
  <ul><li><a href="/documents/imprint_23.pdf">Impressum</a></li>
  <li><a href="/documents/privacypolicy_23.pdf">Zásady ochrany osobných údajov</a></li></ul></div>`,

  ".footer-bottom-links > p": "© 2023 Blackwater Holdings Limited s. r. o. Všetky práva vyhradené.",
  // add when Copyright © 2023 Blackwater Digital s. r. o. real company exists

  // about page

  "#about-hero-title": '<h1>Sme tu pre<span class="bold"> Vás</span>.</h1>',

  "#about-hero-text": '<p>V Blackwater Digital zaisťujeme aby sa Váš nápad stal realitou.</p>',

  ".mission-statement-container": '<div class="author-container"><h3>Programové prehlásenie</h3></div><h1>Naša misia je posunúť Váš biznis na vyšší level — digitálny level.</h1>',

  ".vision > h1": "Naša vízia",

  ".vision > .vision-container": `<p>V Blackwater Digital sa snažíme byť pre klientov strategická opora v digitálnom priestore, ktorá mnohým bohužiaľ chýba. Chceme, aby vaše podnikanie rástlo s využitím digitálneho priestoru a aby ste naplno využívali všetky príležitosti, ktoré tento priestor poskytuje. Veríme, že sa nenájde podnik, ktorý by nemal prospech z prítomnosti v digitálnom priestore.</p>
                                 <p>Veríme, že služby digitalizácie a automatizácie je možné ponúkať za rozumnú cenu a prispôsobiť ich zákazníkovi tak, aby z toho mal čo najväčší prínos. Toto je dôvod, prečo sa v Blackwater Digital snažíme každý deň tento cieľ postupne napĺňať. Koniec koncov, to je dôvod prečo podnikáme. Aby sme tu boli, keď to zákazník skutočne potrebuje.</p>`,
                        
  ".motivation-title > h3": "Naša motivácia",

  ".motivation-text": `<p>Našou motiváciou je splniť našu víziu. To znamená ponúkať spoľahlivú spoluprácu ohľadom digitalizácie a automatizácie procesov, tak aby zákazník mal z toho čo najviac a mohol využiť všetky príležitosti. To nás motivuje byť zodpovednými a vždy navyšovať latku toho, čo je možné, aby sme si odviedli čo najlepšiu prácu.</p>
                      <p>Táto motivácia a toto presvedčenie je to, čo nás ženie vpred odo dňa, keď sme začali podnikať. Reakcia našich klientov, hlavne potom čo vidia čo sme pre nich pripravili a keď sú spokojní s výsledkom, je tou najlepšou možnou odmenou, akú si môže firma želať. A to je to, čo nás motivuje byť tou najlepšou možnou verziou Blackwater Digital. Aby týchto reakcií bolo čo najviac.</p>`,

  ".team-showcase > h1": "Náš tím",

  "#team-boris-k > .title > .position": "Vedúci marketingu a predaja",

  "#team-boris-k > p": '„Ako spoločník aj ako obchodník som hrdý na to, že napĺňam potreby zákazníkov, až dokým nie sú úplne spokojní. O tom by podľa mňa malo byť podnikanie. Byť tu, keď vás zákazník  naozaj potrebuje.“',

  "#team-matus-k > .title > .position": "Vedúci web tvorby",

  "#team-matus-k > p": '„Zrealizovať predstavu zákazníka je pre mňa vždy privítaná výzva. Prináša mi radosť keď môžem premeniť Vašu víziu na realitu a práve preto som tu.”',

  "#team-stef-m > .title > .position": "Web dizajn",

  "#team-stef-m > p": '„Vždy sa snažím prekonať očakávania zákazníkov lebo si uvedomujem, že úspech podnikania závisí od zákazníkov. Spolu s kolegami sa snažíme o minimalistickú a hlavne funkčnú prácu pri každom produkte.“',

  // our work page

  "#our-work-hero-title": '<h1>Pozrite si naše ukončené projekty.</h1><h1>Predstavte si čo<span class="bold"> dokážeme </span>spolu.</h1>',

  "#our-work-hero-text": '<p>Ponúkame Vám naše portfólio, ktoré Vám má naznačiť všetko čo vieme spolu vytvoriť.</p>',

  ".selected-projects-showcase > h1": "Vybrané projekty",

  ".all-projects-showcase > h1": "Všetky projekty",

  ".all-projects-showcase > .work-showcase-container > #caselink-client > .text-container > p": "Platforma pre biznis súťaže",
  
  ".all-projects-showcase > .work-showcase-container > #caselink-client > .text-container > ul": "<li>Dizajn</li><li>Vývoj</li><li>Systémový management</li>",
  
  ".all-projects-showcase > .work-showcase-container > #lalizu-client > .text-container > p": "Ateliér zdravia a krásy",
  
  ".all-projects-showcase > .work-showcase-container > #lalizu-client > .text-container > ul": "<li>Dizajn</li><li>Vývoj</li><li>Management eshop-u</li>",
  
  ".all-projects-showcase > .work-showcase-container > #andyluzia-client > .text-container > p": "Eventová Agentúra",
  
  ".all-projects-showcase > .work-showcase-container > #andyluzia-client > .text-container > ul": "<li>Dizajn</li><li>Vývoj</li><li>Marketingový management</li>",

  ".all-projects-showcase > .work-showcase-container > #vasevolby-client > .text-container > p": "Občianske združenie pre voľby",

  ".all-projects-showcase > .work-showcase-container > #vasevolby-client > .text-container > ul": "<li>Dizajn</li><li>Vývoj</li><li>Management sociálnych sietí</li>",

  // services page

  "#services-hero-title > h1": "Služby",

  ".digitalization-package": 
  `<h1>Digitalizačný balík</h1>
  <div class="package-content">
      <h2>Vyberte si <strong>Základný balík</strong></h2>
      <div class="package-content-section">
          <div class="title">
              <h4>Reprezentatívna webstránka</h4>
              <p>Pripravíme pre Vás webstránku ktorá Vás bude reprezentovať na základe dizajnu, ktorý pre Vás pripravíme alebo nám ho dodáte.</p>
          </div>
          <div class="items">
              <ul>
                  <li>- Až 3 podstránky (Domov, Kontakt, Služby)</li>
                  <li class="tab">+ Dizajn webstránky</li>
              </ul>
              <ul>
                  <li>- Komplexná webstránka – od 4och podstránok</li>
                  <li class="tab">+ Dizajn webstránky</li>
              </ul>
              <ul>
                  <li>- Správa</li>
              </ul>
          </div> 
      </div>
      <div class="package-content-section">
          <div class="title">
              <h4>Sociálne siete</h4>
              <p>Dizajnujeme, tvoríme a spravujeme Vaše profily na sociálnych sieťach.</p>
          </div>
          <div class="items">
              <ul>
                  <li class="dash">- Identita a imidž na sociálnych sieťach</li>
              </ul>
              <ul>
                  <li class="dash">- Tvorba sociálnych sietí na základe podkladov</li>
              </ul>
              <ul>
                  <li class="dash">- Správa sociálnych sietí</li>
                  <li class="dash tab">- 3 príspevky, 3 stories týždenne</li>
                  <li class="dash tab">- 5 príspevkov, 7 stories týždenne</li>
                  <li class="dash tab">- 7 príspevkov, 14 stories týždenne</li>
                  <li class="dash tab">- Správa na mieru</li>
              </ul>
          </div> 
      </div>
  </div>
  <div class="package-content">
      <h2>Pridajte si <strong>Doplnkové služby</strong></h2>
      <div class="package-content-section">
          <div class="title">
              <h4>Dizajn pre firmu</h4>
              <p>Elegantný dizajn pre Vašu firmu.</p>
          </div>
          <div class="items">
              <ul>
                  <li class="dash">- Dizajn Manuál (logo, paleta farieb, návrh webstránky a návrhy pre sociálne siete)</li>
                  <li class="dash tab">- 1 revízia</li>
                  <li class="plus double-tab">+ 1 extra revízia</li>
                  <li class="dash">- Návrh loga</li>
                  <li class="dash tab">- 3 revízie</li>
                  <li class="plus double-tab">+ 1 extra revízia</li>
                  <li class="dash">- Dizajnérske práce na mieru</li>
              </ul>
          </div> 
      </div>
      <div class="package-content-section">
          <div class="title">
              <h4>Firemné fotografie</h4>
              <p>Prídeme priamo k Vám a nafotíme pre Vás reprezentatívne fotky pre Vašu firmu.</p>
          </div>
          <div class="items">
              <ul>
                  <li class="dash">- Fotenie (3hod)</li>
                  <li class="plus tab">+ Adresa mimo Bratislavy</li>
              </ul>
          </div>
      </div>
      <div class="package-content-section">
          <div class="title">
              <h4>Digitalizácia</h4>
              <p>Reprezentácia pre Vašu firmu v digitálnom svete 21. storočia.</p>
          </div>
          <div class="items">
              <ul>
                  <li class="dash">- Tvorba digitálnych vizitiek</li>
                  <li class="plus tab">+ 1 variácia</li>
              </ul>
          </div>
      </div>
  </div>`,

  ".automatization-package": 
  `<h1>Automatizačný balík</h1>
  <div class="package-content">
      <h2>Vyberte si z našich <strong>Základných služieb</strong></h2>
      <div class="package-content-section">
          <div class="title">
              <h4>Konzultácie a plánovanie</h4>
              <p>Povedzte nám svoj nápad a Vám ho pomôžeme zrealizovať ho.</p>
          </div>
          <div class="items">
              <ul>
                  <li>- Konzultácie a návrhy riešení</li>
              </ul>
              <ul>
                  <li>- Dizajn funkcionality systému</li>
              </ul>
              <ul>
                  <li>- Dizajn samotného produktu</li>
              </ul>
          </div> 
      </div>
      <div class="package-content-section">
          <div class="title">
              <h4>Programovanie a údržba</h4>
              <p>Posuňte svoj nápad o úroveň vyššie.</p>
          </div>
          <div class="items">
              <ul>
                  <li>- Naprogramovanie Vášho produktu</li>
              </ul>
              <ul>
                  <li>- Údržba Vášho produktu</li>
              </ul>
              <ul>
                  <li>- Oprava technický chýb už v existujúcom produkte</li>
              </ul>
          </div> 
      </div>
  </div>
  <div class="package-content">
      <h2>Vyberte si z našich <strong>Dodatočných služieb</strong></h2>
      <div class="package-content-section">
          <div class="items">
              <ul>
                  <li>- Marketing a predaj</li>
              </ul>
              <ul>
                  <li>- Prispôsobenie na mobil alebo web</li>
              </ul>
              <ul>
                  <li>- Manažment zákazníckej komunikácie</li>
              </ul>
          </div>
      </div>
  </div>`,

  // contact page

  "#contact-hero-title > h1": "Kontakt",

  ".contact-form > h1": "Pošlite nám správu",

  "#contact-page-contact-form":  
  `<input type="hidden" name="accessKey" value="10144dec-a3b0-447b-9462-ca308c366e46">
  <input type="text" name="subject" id="subject" placeholder="Predmet *">
  <div class="fullname">
      <input type="text" name="name" id="name" placeholder="Meno *">
      <input type="text" name="name" id="surname" placeholder="Priezvisko">
  </div>
  <input type="text" name="email" id="email" placeholder="E-mail adresa *">
  <textarea name="message" placeholder="Správa *"></textarea>
  <input type="hidden" name="replyTo" value="@">
  <input type="hidden" name="redirectTo" value="https://blackwaterdigital.sk">
  <input type="submit" value="POSLAŤ" id="submit-btn" />`,

  "#contact-form-text": 
  `<a href="https://forms.gle/A8Sts5RVeGDBmxJK6" class="questionnaire-btn" target="_blank">
  <p>Dotazník</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
          d="M19.6875 8.74133L17.5096 10.9192L16.9439 4.92296L2.17951 19.6873L0.312744 17.8206L15.0771 3.0562L9.08087 2.49051L11.2588 0.312622L18.443 0.934876L19.0652 1.55713L19.6875 8.74133Z"
          fill="#0D1410" />
  </svg>
</a>
<p>
Pre všeobecný záujem o naše služby prosím využite <a
      href="https://forms.gle/A8Sts5RVeGDBmxJK6" target="_blank">dotazník</a>.<br><br>
    V prípade záujmu o konkrétnu tému prosím využite formulár.
    </p>
<p>Dodatočné otázky Vám veľmi radi zodpovieme na email adrese: <a href="mailto:info@blackwaterdigital.sk">info@blackwaterdigital.sk</a></p>`,

  "#contact-steps-title": "<h1>Ďaľšie kroky</h1>",

  "#contact-step-item-1": `<h3>Plánovanie</h3>
  <p>Naplánujeme priebeh celého projektu spolu, začínajúc od začiatku a postupne, detail po detaile zaručíme spokojnosť zákazníka.</p>`,

  "#contact-step-item-2": `<h3>Dizajn</h3>
  <p>Pripravíme manuál aj plán dizajnu aby sa Váše podnikanie vedelo odlíšiť od ostatných a dostalo svoj vlastný image, na základe Vašich potrieb.</p>`,

  "#contact-step-item-3": `<h3>Realizácia</h3>
  <p>Na základe predošlých krokov, pripravíme pre Vás hotový produkt a ho aj spojazníme na základe Vašich presných očakávaní.</p>`,

  ".contact-banner": "<h2>Tešíme sa na spoluprácu s Vami!</h2>",
};

// en lang json
const langEn = {
  // home page

  "#home-title": "Home | Blackwater Digital",
  
  "#about-title": "About Us | Blackwater Digital",
  
  "#work-title": "Our Work | Blackwater Digital",
  
  "#service-title": "Services | Blackwater Digital",
  
  "#contact-title": "Contact | Blackwater Digital",
  
  "#home-nav-link": "Home",
  
  "#about-nav-link": "About Us",
  
  "#work-nav-link": "Our Work",
  
  "#service-nav-link": "Services",
  
  "#contact-nav-link": "Contact Us",
  
  ".lang > a": "Choose Language",
  
  ".contact-us-btn": "Contact Us",
  
  "#lp-hero-title": '<h1>Take part in the future.</h1><h1>Digitalize<span class="bold"> your </span>business with us.</h1>',
  
  "#lp-hero-text": `<p>At Blackwater Digital we offer tailored digitalization services for local or growing businesses. 
                   We believe that digitalization is the future and want to be an active part of this global shift.
                   Our services range from web creation and social media management and marketing to individual
                   development and system design.</p>
                   <a class="more-about-btn" href="#services-showcase"><p>What We Offer</p><p>↓</p></a>`,
  
  "#lp-quote": "The best way to predict the future is to create it.",
  
  ".our-work > h1": "Successful Projects",
  
  "#caselink-client > .text-container > p": "Case Competition Platfrom",
  
  "#caselink-client > .text-container > ul": "<li>Design</li><li>Development</li><li>System Management</li>",
  
  "#lalizu-client > .text-container > p": "Wellness and Health Centre",
  
  "#lalizu-client > .text-container > ul": "<li>Design</li><li>Development</li><li>Eshop Management</li>",
  
  "#andyluzia-client > .text-container > p": "Event Organizer Agency",
  
  "#andyluzia-client > .text-container > ul": "<li>Design</li><li>Development</li><li>Marketing Management</li>",
  
  "#lp-pckg-dig": '<h3>Digitalization</h3><p>Take your business to the next level.</p><ul><li>Web Design</li><li>Web Development</li><li>Social Media Management</li></ul>',
  
  "#lp-pckg-aut": '<h3>Automatization</h3><p>Simplify your day to day operations.</p><ul><li>Individual Development</li><li>Internal Tools Development</li><li>System Design</li></ul>',
  
  "#services-showcase > h1": "Service Packages",
  
  "#services-showcase > p": "We offer packages with individual products. Select the right package based on your needs.",
  
  ".reviews-showcase > h1": "What Our Clients Think",
  
  // add items of reviews here when text is there
  
  ".contact > h1": "Interested in Working With Us?",
  
  "#lp-big-contact-text": `<h4>Contact Us Right Away</h4><p>Don’t hesitate to contact us with any idea or project that you have in mind. At Blackwater Digital we take pride in satisfying the needs of our clients.</p>
                          <h4>Tell Us About Your Idea</h4><p>Ideas are a good start to a mutual cooperation. We would love to support you and help you realize your vision, so it becomes a reality.</p>`,
  
  "#lp-small-contact-text": "<h4>Follow Blackwater Digital</h4><p>Keep up with us and our activities on our social media accounts. We post on a regular basis.</p>",

  "#lp-contact-btn": "<p>Contact Us</p><p>→</p>",

  '.footer-menu': 
  `<div class="footer-row">
  <h6>Digitalization Services</h6>
  <ul><li><a href="/services/">Web Design</a></li>
  <li><a href="/services/">Web Development</a></li>
  <li><a href="/services/">Social Media</a></li>
  <li><a href="/services/">Brand Design</a></li>
  <li><a href="/services/">Branding Photography</a></li></ul></div>
  <div class="footer-row">
  <h6>Automatization Services</h6>
  <ul><li><a href="/services/">Individual Development</a></li>
  <li><a href="/services/">Internal Tools Development</a></li>
  <li><a href="/services/">System Design</a></li></ul></div>
  <div class="footer-row"><h6>About</h6>
  <ul><li><a href="/about/">Mission Statement</a></li>
  <li><a href="/about/">Vision</a></li>
  <li><a href="/about/">Our Motivation</a></li>
  <li><a href="/about/">Meet the Team</a></li></ul></div>
  <div class="footer-row"><h6>Legal</h6>
  <ul><li><a href="/documents/imprint_23.pdf">Imprint</a></li>
  <li><a href="/documents/privacypolicy_23.pdf">Privacy Policy</a></li></ul></div>`,

  ".footer-bottom-links > p": "Copyright © 2023 Blackwater Holdings Limited s. r. o. All rights reserved.",
  // add when Copyright © 2023 Blackwater Digital s. r. o. real company exists

  // about page

  "#about-hero-title": '<h1>We are here just for<span class="bold"> you</span>.</h1>',

  "#about-hero-text": '<p>Blackwater Digital makes sure your idea gets transformed into reality.</p>',

  ".mission-statement-container": '<div class="author-container"><h3>Mission Statement</h3></div><h1>Our mission is to take your business to the next level — the digital level.</h1>',

  ".vision > h1": "Our Vision",

  ".vision > .vision-container": `<p>Here at Blackwater Digital we strive to be there for our clients and help them set up a strategic foothold in the digital space. We want to see your business grow in the digital space and fully utilize all the opportunities that the digital space provides. We believe there is no business that wouldn‘t benefit from an online presence.</p>
                                 <p>We believe that digitalization and automatization services can be offered at a reasonable price and customized for the customer, such that they derive the greatest value out of it. That’s why at Blackwater Digital, we strive everyday to make sure this goal is fullfilled. At the end of the day, that is why we are running this business, to be there for the customer when they truly need it.</p>`,
                        
  ".motivation-title > h3": "Our Motivation",

  ".motivation-text": `<p>Our motivation is to fullfil our vision of being able to offer reliable and good services for digitalization services and automatization processes, so our customer benefits from it and can take hold of opportunities that the digital space holds. This motivates us to hold ourselves accountable and always raise the bar of what is possible in order to produce the best work possible.</p>
                      <p>This motivation and this belief is what keeps us going since the day we began the business. The reaction of our clients, mainly after they see what we have prepared for them, and are satisfied with the result, is the best possible reward a business could hope for. And that is what motivates us to be the best version of Blackwater Digital possible.</p>`,
                               
  ".team-showcase > h1": "Our Team",

  "#team-boris-k > .title > .position": "Lead Marketing and Sales",

  "#team-boris-k > p": '“As a company and as a businessman I take pride in fulfilling the needs of customers until they are fully satisfied. That’s what I believe a business is supposed to be all about. Being there when your customer needs you.”',

  "#team-matus-k > .title > .position": "Lead Web Creation",

  "#team-matus-k > p": `“Realizing the customer's vision is always a welcome challenge for me. It brings me joy when I can turn your vision into reality, and that's exactly why I'm here.”`,

  "#team-stef-m > .title > .position": "Web Design",

  "#team-stef-m > p": `"As a dedicated professional, I aim to exceed customer expectations, recognizing that a company's success hinges on its customers. Joining like-minded individuals, I strive for minimalistic, functional excellence in every product."`,

  // our work page

  "#our-work-hero-title": '<h1>Browse our past projects.</h1><h1>See what we can<span class="bold"> achieve </span>together.</h1>',

  "#our-work-hero-text": '<p>Our portfolio of projects to better illustrate what we can create together for your business.</p>',

  ".selected-projects-showcase > h1": "Selected Projects",

  ".all-projects-showcase > h1": "All Past Projects",

  ".all-projects-showcase > .work-showcase-container > #caselink-client > .text-container > p": "Case Competition Platfrom",
  
  ".all-projects-showcase > .work-showcase-container > #caselink-client > .text-container > ul": "<li>Design</li><li>Development</li><li>System Management</li>",
  
  ".all-projects-showcase > .work-showcase-container >#lalizu-client > .text-container > p": "Wellness and Health Centre",
  
  ".all-projects-showcase > .work-showcase-container > #lalizu-client > .text-container > ul": "<li>Design</li><li>Development</li><li>Eshop Management</li>",
  
  ".all-projects-showcase > .work-showcase-container > #andyluzia-client > .text-container > p": "Event Organizer Agency",
  
  ".all-projects-showcase > .work-showcase-container > #andyluzia-client > .text-container > ul": "<li>Design</li><li>Development</li><li>Marketing Management</li>",
  
  ".all-projects-showcase > .work-showcase-container > #vasevolby-client > .text-container > p": "NGO Covering Elections in Slovakia",

  ".all-projects-showcase > .work-showcase-container > #vasevolby-client > .text-container > ul": "<li>Design</li><li>Development</li><li>Social Media Management</li>",

  // services page

  "#services-hero-title > h1": "Services",

  ".digitalization-package": 
  `<h1>Digitalization Package</h1>
  <div class="package-content">
      <h2>Choose Your <strong>Base Package</strong></h2>
      <div class="package-content-section">
          <div class="title">
              <h4>Presentation Website</h4>
              <p>We develop a presentation website for your company based off a design we make for you or you provide us with.</p>
          </div>
          <div class="items">
              <ul>
                  <li>- Up to 3 subpages (Home, Contact, Services)</li>
                  <li class="tab">+ Full Design</li>
              </ul>
              <ul>
                  <li>- Complex Website – starting at 4 subpages</li>
                  <li class="tab">+ Full Design</li>
              </ul>
              <ul>
                  <li>- Maintenance</li>
              </ul>
          </div> 
      </div>
      <div class="package-content-section">
          <div class="title">
              <h4>Social Media</h4>
              <p>We design, create, and manage your social media presence.</p>
          </div>
          <div class="items">
              <ul>
                  <li class="dash">- Social Media Identity and Brand Image</li>
              </ul>
              <ul>
                  <li class="dash">- Account Creation Using Provided Materials</li>
              </ul>
              <ul>
                  <li class="dash">- Account Management</li>
                  <li class="dash tab">- 3 posts, 3 stories weekly</li>
                  <li class="dash tab">- 5 posts, 7 stories weekly</li>
                  <li class="dash tab">- 7 posts, 14 stories weekly</li>
                  <li class="dash tab">- Custom</li>
              </ul>
          </div> 
      </div>
  </div>
  <div class="package-content">
      <h2>Include <strong>Additional Services</strong></h2>
      <div class="package-content-section">
          <div class="title">
              <h4>Brand Design</h4>
              <p>The elegant and united identity of your company.</p>
          </div>
          <div class="items">
              <ul>
                  <li class="dash">- Design Manual (Logo, Color Theme, Website and 
                      Social Media Mockups)</li>
                  <li class="dash tab">- 1 Revision</li>
                  <li class="plus double-tab">+ 1 Extra Revision</li>
                  <li class="dash">- Logo Design</li>
                  <li class="dash tab">- 3 Revisions</li>
                  <li class="plus double-tab">+ 1 Extra Revision</li>
                  <li class="dash">- Tailored Design Projects</li>
              </ul>
          </div> 
      </div>
      <div class="package-content-section">
          <div class="title">
              <h4>Branding Photography</h4>
              <p>We will come to your location to create photographs that capture the essence of your brand.</p>
          </div>
          <div class="items">
              <ul>
                  <li class="dash">- Photoshoot (3hrs)</li>
                  <li class="plus tab">+ Transportation to Location outside SK</li>
              </ul>
          </div>
      </div>
      <div class="package-content-section">
          <div class="title">
              <h4>Digitalization</h4>
              <p>The representation of your company in the digital space of the 21st century.</p>
          </div>
          <div class="items">
              <ul>
                  <li class="dash">- Digital Business Card Design</li>
                  <li class="plus tab">+ 1 variation</li>
              </ul>
          </div>
      </div>
  </div>`,

  ".automatization-package": 
  `<h1>Automatization Package</h1>
  <div class="package-content">
      <h2>Choose From Our <strong>Standard Services</strong></h2>
      <div class="package-content-section">
          <div class="title">
              <h4>Consultations and Planning</h4>
              <p>Tell us your vision and we will help to realize it.</p>
          </div>
          <div class="items">
              <ul>
                  <li>- Consultations and Solution Suggestions</li>
              </ul>
              <ul>
                  <li>- System Functionality Design</li>
              </ul>
              <ul>
                  <li>- Product Design</li>
              </ul>
          </div> 
      </div>
      <div class="package-content-section">
          <div class="title">
              <h4>Coding and Maintanance</h4>
              <p>Let us take your vision further.</p>
          </div>
          <div class="items">
              <ul>
                  <li>- Coding of Your Product</li>
              </ul>
              <ul>
                  <li>- Maintanence of Your Product </li>
              </ul>
              <ul>
                  <li>- Bug Fixes to an Already Existing Product</li>
              </ul>
          </div> 
      </div>
  </div>
  <div class="package-content">
      <h2>Choose From Our <strong>Additional Services</strong></h2>
      <div class="package-content-section">
          <div class="items">
              <ul>
                  <li>- Marketing and Sales</li>
              </ul>
              <ul>
                  <li>- Mobile or Web Optimalization</li>
              </ul>
              <ul>
                  <li>- Customer Communications Management</li>
              </ul>
          </div>
      </div>
  </div>`,

  // contact page

  "#contact-hero-title > h1": "Contact",

  ".contact-form > h1": "Send Us a Message",

  "#contact-page-contact-form": 
  `<input type="hidden" name="accessKey" value="10144dec-a3b0-447b-9462-ca308c366e46">
  <input type="text" name="subject" id="subject" placeholder="Subject *">
  <div class="fullname">
      <input type="text" name="name" id="name" placeholder="Name *">
      <input type="text" name="name" id="surname" placeholder="Surname">
  </div>
  <input type="text" name="email" id="email" placeholder="E-mail Address *">
  <textarea name="message" placeholder="Message *"></textarea>
  <input type="hidden" name="replyTo" value="@">
  <input type="hidden" name="redirectTo" value="https://blackwaterdigital.sk">
  <input type="submit" value="SEND" id="submit-btn" />`,

  "#contact-form-text": 
  `<a href="https://forms.gle/v9L3AuX1mK477dPf8" class="questionnaire-btn" target="_blank">
  <p>Questionnaire</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
          d="M19.6875 8.74133L17.5096 10.9192L16.9439 4.92296L2.17951 19.6873L0.312744 17.8206L15.0771 3.0562L9.08087 2.49051L11.2588 0.312622L18.443 0.934876L19.0652 1.55713L19.6875 8.74133Z"
          fill="#0D1410" />
  </svg>
</a>
<p>
For general inquiries please use the <a
      href="https://forms.gle/v9L3AuX1mK477dPf8" target="_blank">questionnaire</a>.<br><br>
      Inquiries about a specific subject are best sent using the contact form.
    </p>
<p>Any additional inquiries will be gladly answered at the email address: <a href="mailto:info@blackwaterdigital.sk">info@blackwaterdigital.sk</a></p>`,


  "#contact-steps-title": "<h1>Next Steps</h1>",

  "#contact-step-item-1": `<h3>Planning</h3>
  <p>We plan the whole project together, starting at the base and going through every tiny detail to ensure our customers’ happiness.</p>`,

  "#contact-step-item-2": `<h3>Design</h3>
  <p>We provide a design plan and a manual to represent and differentiate your project from the rest, based on your specific needs.</p>`,

  "#contact-step-item-3": `<h3>Execution</h3>
  <p>Based on the two previous steps, we will work to complete the project and launch it based on your exact specifications.</p>`,

  ".contact-banner": "<h2>We are looking forward to cooperating with you!</h2>",
};

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
