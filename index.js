const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");
const openIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const creations = document.querySelectorAll(".creation");

openIcon.addEventListener("click", () => {
  nav.style.display = "flex";
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  header.classList.add("header-black");
});

closeIcon.addEventListener("click", () => {
  nav.style.display = "none";
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
  header.classList.remove("header-black");
});

function myFunction(x) {
  if (!x.matches) {
    nav.style.display = "flex";
    closeIcon.style.display = "none";
    openIcon.style.display = "none";
  } else {
    nav.style.display = "none";
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  }
}

let x = window.matchMedia("(max-width: 1230px)");

myFunction(x);

x.addEventListener("change", function () {
  myFunction(x);
});

creations.forEach((creation) => {
  creation.addEventListener("mouseover", () => {
    creation.classList.add("creation-hover");
  });
  creation.addEventListener("mouseout", () => {
    creation.classList.remove("creation-hover");
  });
});
