window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  let nav = document.querySelector(".nav");

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    nav.style.position = "sticky";
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

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
