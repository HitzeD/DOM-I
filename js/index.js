const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Self additions -----------------------------------------------

// variables

const aTags = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");
const a = document.createElement("a");
const a2 = document.createElement("a")

let headImg = document.querySelector("#cta-img");
const titl = document.querySelector("h1");
const btn = document.querySelector("button");

const topCont = document.querySelectorAll(".top-content div");
const midImg = document.querySelector("#middle-img");
const botitl = document.querySelectorAll(".bottom-content .text-content h4");
const bopara = document.querySelectorAll(".bottom-content .text-content p");
const contact = document.querySelector(".contact h4");
const contactPara = document.querySelectorAll(".contact p");
const foot = document.querySelector("footer p");

// NAV BAR ----------------------------------------

aTags[0].innerHTML = siteContent["nav"]['nav-item-1'];
aTags[1].innerHTML = siteContent["nav"]['nav-item-2'];
aTags[2].innerHTML = siteContent["nav"]['nav-item-3'];
aTags[3].innerHTML = siteContent["nav"]['nav-item-4'];
aTags[4].innerHTML = siteContent["nav"]['nav-item-5'];
aTags[5].innerHTML = siteContent["nav"]['nav-item-6'];

// aTags.forEach(function(element,siteContent){
//   element.innerHTML = siteContent["nav"];
// });

nav.prepend(a2);
a2.setAttribute('href', '#');
a2.innerHTML = 'Do You..';
a2.style.color = 'green';

nav.appendChild(a);
a.setAttribute('href', '#');
a.innerHTML = 'More?';
a.style.color = 'green';

aTags.forEach(function(element){
  element.style.color = 'green';
});


console.log(nav);

// header IMG

headImg.setAttribute('src' , siteContent["cta"]["img-src"]);

// CTA -----------------------------------------------------

titl.innerHTML = siteContent["cta"]["h1"];
btn.innerHTML = siteContent["cta"]["button"];

// MID SECTION  --------------------------------

topCont[0].querySelector("h4").innerHTML = siteContent["main-content"]["features-h4"];
topCont[0].querySelector("p").innerHTML = siteContent["main-content"]["features-content"];

topCont[1].querySelector("h4").innerHTML = siteContent["main-content"]["about-h4"];
topCont[1].querySelector("p").innerHTML = siteContent["main-content"]["about-content"];

// Mid Image

midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom content

botitl[0].innerHTML = siteContent["main-content"]["services-h4"];
botitl[1].innerHTML = siteContent["main-content"]["product-h4"];
botitl[2].innerHTML = siteContent["main-content"]["vision-h4"];

bopara[0].innerHTML = siteContent["main-content"]["services-content"];
bopara[1].innerHTML = siteContent["main-content"]["product-content"];
bopara[2].innerHTML = siteContent["main-content"]["vision-content"];

// Contact Section ------------------------------------------------

contact.innerHTML = siteContent["contact"]["contact-h4"];
contactPara[0].innerHTML = siteContent["contact"]["address"];
contactPara[1].innerHTML = siteContent["contact"]["phone"];
contactPara[2].innerHTML = siteContent["contact"]["email"];


// FOOTER -------------------------------------------

foot.innerHTML = siteContent["footer"]["copyright"];