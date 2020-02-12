window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  let nav = document.querySelector(".nav");

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    nav.style.position = "sticky";
    nav.style.position = "-webkit-sticky";
    nav.style.position = "-moz-sticky";
    nav.style.position = "-ms-sticky";
    nav.style.position = "-o-sticky";
    nav.style.top = "0";
    nav.style.backgroundColor = "#fff";
    nav.style.transition = "all 0.2s";
  } else {
    nav.style.position = "relative";
    nav.style.backgroundColor = "transparent";
  }
};

const lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list__item");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  body.classList.toggle("nav-open");

  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
