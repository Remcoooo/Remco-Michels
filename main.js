const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// Toggle dark mode on click
var darkMode = document.getElementById("darkMode");

darkMode.onclick = function(){
    document.body.classList.toggle("dark-toggle");
}

// Toggle icon on click

const darkToggle = document.getElementById('darkMode');

let toggle = true;
darkToggle.addEventListener('click', function(){

    toggle = !toggle;
    if(toggle){
        darkToggle.src = "content/images/moon.png";
    }
    else {
        darkToggle.src = "content/images/sun.png";
    }
})

// Toggle About me modal

const modal = document.querySelector("#modal");
const openModal = document.querySelectorAll(".open-button");
const closeModal = document.querySelector(".close-button");

openModal[0].addEventListener("click", () => {
  modal.showModal();
});

openModal[1].addEventListener("click", () => {
  modal.showModal();
});

openModal[2].addEventListener("click", () => {
  modal.showModal();
});

openModal[3].addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// Toggle modal projects

const modalBloemenschuur = document.querySelector("#modalBloemenschuur");
const openBloemenschuur = document.querySelectorAll(".open-bloemenschuur");
const closeBloemenschuur = document.querySelector(".close-bloemenschuur");

const modalGPBulls = document.querySelector("#modalGPBulls");
const openGPBulls = document.querySelectorAll(".open-gpbulls");
const closeGPBulls = document.querySelector(".close-gpbulls");

const modalGreenHill = document.querySelector("#modalGreenHill");
const openGreenHill = document.querySelectorAll(".open-greenhill");
const closeGreenHill = document.querySelector(".close-greenhill");

const modalAgrobots = document.querySelector("#modalAgrobots");
const openAgrobots = document.querySelectorAll(".open-agrobots");
const closeAgrobots = document.querySelector(".close-agrobots");

const modalWedentify = document.querySelector("#modalWedentify");
const openWedentify = document.querySelectorAll(".open-wedentify");
const closeWedentify = document.querySelector(".close-wedentify");

const modalNodalco = document.querySelector("#modalNodalco");
const openNodalco = document.querySelectorAll(".open-nodalco");
const closeNodalco = document.querySelector(".close-nodalco");

const modalRCA = document.querySelector("#modalRCA");
const openRCA = document.querySelectorAll(".open-rca");
const closeRCA = document.querySelector(".close-rca");

const modalBabb = document.querySelector("#modalBabb");
const openBabb = document.querySelectorAll(".open-babb");
const closeBabb = document.querySelector(".close-babb");

const modalLuukjanssen = document.querySelector("#modalLuukjanssen");
const openLuukjanssen = document.querySelectorAll(".open-luukjanssen");
const closeLuukjanssen = document.querySelector(".close-luukjanssen");

const modalDatabase = document.querySelector("#modalDatabase");
const openDatabase = document.querySelectorAll(".open-database");
const closeDatabase = document.querySelector(".close-database");

const modalBootstrap = document.querySelector("#modalBootstrap");
const openBootstrap = document.querySelectorAll(".open-bootstrap");
const closeBootstrap = document.querySelector(".close-bootstrap");

const modalVijfluik = document.querySelector("#modalVijfluik");
const openVijfluik = document.querySelectorAll(".open-vijfluik");
const closeVijfluik = document.querySelector(".close-vijfluik");

const modalPortfolio = document.querySelector("#modalPortfolio");
const openPortfolio = document.querySelectorAll(".open-portfolio");
const closePortfolio = document.querySelector(".close-portfolio");

const modalPong = document.querySelector("#modalPong");
const openPong = document.querySelectorAll(".open-pong");
const closePong = document.querySelector(".close-pong");

openBloemenschuur[0].addEventListener("click", () => {
  modalBloemenschuur.showModal();
});

closeBloemenschuur.addEventListener("click", () => {
  modalBloemenschuur.close();
});

openGPBulls[0].addEventListener("click", () => {
  modalGPBulls.showModal();
});

closeGPBulls.addEventListener("click", () => {
  modalGPBulls.close();
});

openGreenHill[0].addEventListener("click", () => {
  modalGreenHill.showModal();
});

closeGreenHill.addEventListener("click", () => {
  modalGreenHill.close();
});

openAgrobots[0].addEventListener("click", () => {
  modalAgrobots.showModal();
});

closeAgrobots.addEventListener("click", () => {
  modalAgrobots.close();
});

openWedentify[0].addEventListener("click", () => {
  modalWedentify.showModal();
});

closeWedentify.addEventListener("click", () => {
  modalWedentify.close();
});

openNodalco[0].addEventListener("click", () => {
  modalNodalco.showModal();
});

closeNodalco.addEventListener("click", () => {
  modalNodalco.close();
});

openRCA[0].addEventListener("click", () => {
  modalRCA.showModal();
});

closeRCA.addEventListener("click", () => {
  modalRCA.close();
});

openBabb[0].addEventListener("click", () => {
  modalBabb.showModal();
});

closeBabb.addEventListener("click", () => {
  modalBabb.close();
});

openLuukjanssen[0].addEventListener("click", () => {
  modalLuukjanssen.showModal();
});

closeLuukjanssen.addEventListener("click", () => {
  modalLuukjanssen.close();
});

openDatabase[0].addEventListener("click", () => {
  modalDatabase.showModal();
});

closeDatabase.addEventListener("click", () => {
  modalDatabase.close();
});

openBootstrap[0].addEventListener("click", () => {
  modalBootstrap.showModal();
});

closeBootstrap.addEventListener("click", () => {
  modalBootstrap.close();
});

openVijfluik[0].addEventListener("click", () => {
  modalVijfluik.showModal();
});

closeVijfluik.addEventListener("click", () => {
  modalVijfluik.close();
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function languageDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.languages')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// When the user clicks on the button for collapsible
var coll = document.getElementsByClassName("collapsible-toggle");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Toggle up/down arrow
// const arrowToggle = document.getElementById('icon-arrow');

// let toggleArrow = true;
// arrowToggle.addEventListener('click', function(){

//     toggleArrow = !toggleArrow;
//     if(toggleArrow){
//       arrowToggle.src = "content/images/arrow-down.svg";
//     }
//     else {
//       arrowToggle.src = "content/images/arrow-up.svg";
//     }
// })

const link = document.querySelectorAll('.languageSelector');
const navA = document.querySelector('.nav1');
const navB = document.querySelector('.nav2');
const navC = document.querySelector('.nav3');
const navD = document.querySelector('.nav4');
const dropdownA = document.querySelector('.dropdown1');
const dropdownB = document.querySelector('.dropdown2');
const aboutmeA = document.querySelector('.aboutme1');
const aboutmeB = document.querySelector('.aboutme2');
const aboutmeC = document.querySelector('.aboutme3');
const aboutmeD = document.querySelector('.aboutme4');
const aboutmeE = document.querySelector('.aboutme5');
const aboutmeF = document.querySelector('.aboutme6');
const contactA = document.querySelector('.contact1');
const formA = document.querySelector(".form1");
const formB = document.querySelector(".form2");
const formC = document.querySelector(".form3");
const projectsA = document.querySelector(".projects1");
const modalprojectsA = document.querySelector(".modalprojects1");
const projectsB = document.querySelector(".projects2");
const projectsC = document.querySelector(".projects3");
const modalprojectsB = document.querySelector(".modalprojects2");
const modalprojectsC = document.querySelector(".modalprojects3");
const projectsD = document.querySelector(".projects4");
const projectsE = document.querySelector(".projects5");
const modalprojectsD = document.querySelector(".modalprojects4");
const modalprojectsE = document.querySelector(".modalprojects5");
const projectsF = document.querySelector(".projects6");
const modalprojectsF = document.querySelector(".modalprojects6");
const projectsG = document.querySelector(".projects7");
const footerA = document.querySelector(".footer1");
const footerB = document.querySelector(".footer2");
const footerC = document.querySelector(".footer3");

link.forEach(el => {
  el.addEventListener('click', () => {

    const attr = el.getAttribute('language');

    navA.textContent = data[attr].nav1;
    navB.textContent = data[attr].nav2;
    navC.textContent = data[attr].nav3;
    navD.textContent = data[attr].nav4;
    dropdownA.textContent = data[attr].dropdown1;
    dropdownB.textContent = data[attr].dropdown2;
    aboutmeA.textContent = data[attr].aboutme1;
    aboutmeB.textContent = data[attr].aboutme2;
    aboutmeC.textContent = data[attr].aboutme3;
    aboutmeD.textContent = data[attr].aboutme4;
    aboutmeE.textContent = data[attr].aboutme5;
    aboutmeF.textContent = data[attr].aboutme6;
    contactA.textContent = data[attr].contact1;
    formA.textContent = data[attr].form1;
    formB.textContent = data[attr].form2;
    formC.textContent = data[attr].form3;
    projectsA.textContent = data[attr].projects1;
    modalprojectsA.textContent = data[attr].modalprojects1;
    projectsB.textContent = data[attr].projects2;
    projectsC.textContent = data[attr].projects3;
    modalprojectsB.textContent = data[attr].modalprojects2;
    modalprojectsC.textContent = data[attr].modalprojects3;
    projectsD.textContent = data[attr].projects4;
    projectsE.textContent = data[attr].projects5;
    modalprojectsD.textContent = data[attr].modalprojects4;
    modalprojectsE.textContent = data[attr].modalprojects5;
    projectsF.textContent = data[attr].projects6;
    modalprojectsF.textContent = data[attr].modalprojects6;
    projectsG.textContent = data[attr].projects7;
    footerA.textContent = data[attr].footer1;
    footerB.textContent = data[attr].footer2;
    footerC.textContent = data[attr].footer3;
  });
});

let data = {
  "english": 
  {
    "nav1": "Home",
    "nav2": "About me",
    "nav3": "Portfolio",
    "nav4": "Languages",
    "dropdown1" : "Dutch",
    "dropdown2" : "English",
    "aboutme1" : "Hi, my name is Remco Michels.",
    "aboutme2" : "I'm 22 years old and i am studying software development in Sint Lucas, currently i am in my second year. And i want to become a front-end developer.",
    "aboutme3" : "About me",
    "aboutme4" : "About",
    "aboutme5" : "About me",
    "aboutme6" : "My name is Remco Michels and i'm a student software developer. I'm 22 years old an in my second year of Software Development at Sint Lucas. My hobbies are going to the gym, learning about crypto and investing and making/learning about websites.",
    "contact1" : "Contact me",
    "form1" : "Name",
    "form2" : "Email",
    "form3" : "Message",
    "projects1" : "My projects",
    "modalprojects1" : "For this project, I contributed to the design and built the entire website independently. We focused on optimizing various elements using Lighthouse to ensure the site performed well. An important aspect of this project was ensuring all components were interconnected, such as matching the correct colors to the right teams. The menu, which included different teams, also needed to display the correct colors for each team, creating a cohesive and functional user experience.",
    "projects2" : "Designed, developed, optimized website, ensured correct team colors and connections.",
    "projects3" : "We had to re-create a brand page. I chose to re-create the full Ethereum page.",
    "modalprojects2" : "A re-creation of a brand page, i chose the ethereum landing page. For this project we had to use as much bootstrap as possible, here i learned how responsive works and how to build a better layout for your website. At first it was quite the challange to fit everything where it is supposed to go, but in the end everything work out fine.",
    "modalprojects3" : "My vijfluik was my end project for personality, for this project i only used HTML/CSS. I was really happy with the end result of the website, this website had to have 5 element in them that where in connection with your own personality. So i decided to make 5 different pages with each of them explaining the personality and my part in it. This was my most favourite project i've made that year.",
    "projects4" : "Five personalities and five projects.",
    "projects5" : "My first attempt at my own portfolio webpage.",
    "modalprojects4" : "My portfolio website, this was my first attempt at making a portfolio website. This website was made as an end project for my 3th period in my first year. I learned allot about making the website look good and adding different elements. For this website i only used HTML and CSS, i didn't know much about Javascript.",
    "modalprojects5" : "You probally have heard of pong, this was my first project in coding i've ever done. This was a whole new experience because i could type some code and made something work. This project was made in Unity with C#. It was allot of fun creating Pong as my first project, wich is also one of the first games ever made.",
    "projects6" : "First game i've made in my Software Development education.",
    "modalprojects6" : "This is my first ever website, created in my first year of SintLucas. I didn't have much understanding of making a website but quickly learned the basics. We had to make 3 pages wich needed to be accessible from the main page. We learned how to add elements to your website using html/css, we learned how to position things and the usage of pictures. A little bit of css was involved to, to make the website look a little bit nicer.",
    "projects7" : "Learning about the usages of, HTML and CSS.",
    "footer1" : "Home",
    "footer2" : "Portfolio",
    "footer3" : "About me"
  },
  "dutch": 
  {
    "nav1": "Home",
    "nav2": "Over mij",
    "nav3": "Portfolio",
    "nav4": "Taal",
    "dropdown1" : "Nederlands",
    "dropdown2" : "Engels",
    "aboutme1" : "Hallo, mijn naam is Remco Michels.",
    "aboutme2" : "Ik ben 22 jaar oud en en ik studeer software development op het Sint Lucas college, ik zit nu in mijn 2e leerjaar. En ik wil een front-end developer worden.",
    "aboutme3" : "Over mij",
    "aboutme4" : "Over mij",
    "aboutme5" : "Over mij",
    "aboutme6" : "Mijn naam is Remco Michels en ik ben een student software development. Ik ben 22 jaar oud en ik zit in mijn 2e jaar software development op het sint lucas college. Mijn hobby's zijn naar de sportschool gaan, leren over crypto, investeren en het leren/maken van websites",
    "contact1" : "Contact mij",
    "form1" : "Naam",
    "form2" : "Email",
    "form3" : "Bericht",
    "projects1" : "Mijn projecten",
    "modalprojects1" : "Voor dit project heb ik bijgedragen aan het ontwerp en de gehele website zelfstandig gebouwd. We richtten ons op het optimaliseren van verschillende elementen met behulp van Lighthouse om ervoor te zorgen dat de site goed presteerde. Een belangrijk aspect van dit project was ervoor te zorgen dat alle componenten goed op elkaar aansloten, zoals het koppelen van de juiste kleuren aan de juiste teams. Het menu, dat verschillende teams bevatte, moest ook de correcte kleuren voor elk team weergeven, wat zorgde voor een samenhangende en functionele gebruikerservaring.",
    "projects2" : "Ontworpen, ontwikkeld en geoptimaliseerd website, en gezorgd voor correcte teamkleuren en verbindingen.",
    "projects3" : "We moesten een merk pagina na maken. Ik koos ervoor om de hele ethereum pagina na te maken.",
    "modalprojects2" : "Een re-creatie van een merkpagina, ik koos de ethereum website. Voor dit project moesten we zoveel mogelijk bootstrap gebruiken, hier heb ik geleerd hoe responsive werkt en hoe je een betere lay-out voor je website kunt bouwen. In het begin was het een hele uitdaging om alles te passen waar het hoort, maar uiteindelijk kwam alles goed.",
    "modalprojects3" : "Mijn vijfluik was mijn eindproject voor personality, voor dit project gebruikte ik alleen HTML/CSS. Ik was erg blij met het eindresultaat van de website, deze website moest 5 elementen bevatten die in verband stonden met je eigen persoonlijkheid. Dus besloot ik om 5 verschillende pagina's te maken met elk van hen die de persoonlijkheid en mijn rol daarin uitleggen. Dit was mijn meest favoriete project dat ik dat jaar heb gemaakt.",
    "projects4" : "Vijf persoonlijkheden en vijf projecten.",
    "projects5" : "Mijn eerste poging in het maken van een portfolio pagina",
    "modalprojects4" : "Mijn portfolio website, dit was mijn eerste portfolio website. Deze website is gemaakt als eind project voor mijn 3e periode in mijn eerste jaar. Ik heb veel geleerd over het maken van websites en het toevoegen van verschillende elementen. Voor deze website heb ik alleen HTML en CSS gebruikt, ik wist hier nog niet hoe Javascript werkte.",
    "modalprojects5" : "Je hebt vast wel eens van de game Pong gehoord, dit was mijn eerste project in coding ooit. Het was een hele nieuwe ervaring omdat ik wat code kon schrijven en daardoor iets laten werken. Dit project is gemaakt in Unity met C#. Het was een leuke ervaring om Pong te maken als mijn eerste project, en het is ook nog een van de eerste games ooit gemaakt.",
    "projects6" : "Eerste game die ik heb gemaakt als student Software Development",
    "modalprojects6" : "Dit was mijn eerste website die ik gemaakt heb in het eerste jaar op SintLucas. Ik snapte niet veel van het maken van een website maar we leerde al snel de basics. We moesten 3 pagina's maken die je kon bereiken vanaf de home page. We leerde hoe we elementen toe moesten voegen met html/css, we leerde hoe we elementen moesten positioneren en hoe we plaatjes toe moesten voegen. Een klein beetje css is er gebruikt om de website een beetje mooier te maken.",
    "projects7" : "Leren over het gebruik van HTML/CSS.",
    "footer1" : "Home",
    "footer2" : "Portfolio",
    "footer3" : "Over mij"
  }
}