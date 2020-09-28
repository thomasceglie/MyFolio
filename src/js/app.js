const elementsAppear = document.querySelectorAll(".element--appear");
//const headerItems = document.querySelectorAll('.item');
const skillsUp = document.querySelector(".skills__up");
const skillsDown = document.querySelector(".skills__down");
const softSkills = document.querySelector(".soft-skills");
const hardSkills = document.querySelector(".hard-skills");
const skillTop = document.querySelector(".me__hover-top");
const skillBottom = document.querySelector(".me__hover-bottom");
const softImg = document.querySelector(".softskills__img");
const hardImg = document.querySelector(".hardskills__img");
const header = document.querySelector(".menu");

function revealElement() {
  elementsAppear.forEach(function (element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 150) {
      element.classList.add("is-on-screen");
    }
  });
}

/* function revealHeader() {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > window.innerHeight) {
      header.classList.add('header-is-on-screen');
    }
} */

window.addEventListener("scroll", function () {
  revealElement();
});

window.onunload = function () {
  window.scrollTo(0, 0);
};

skillsUp.addEventListener("mouseenter", function () {
  softSkills.classList.remove("skill-is-inactive");
  hardSkills.classList.remove("skill-is-active");
  skillTop.classList.remove("skill-active");
  skillBottom.classList.add("skill-active");
  skillBottom.classList.remove("skill-inactive");
  hardImg.classList.add("skill-is-inactive");
  hardImg.classList.remove("skill-is-active");
  softImg.classList.add("skill-is-active");
  softImg.classList.remove("skill-is-inactive");
});

skillsDown.addEventListener("mouseenter", function () {
  softSkills.classList.add("skill-is-inactive");
  hardSkills.classList.add("skill-is-active");
  skillTop.classList.add("skill-active");
  skillTop.classList.remove("skill-inactive");
  skillBottom.classList.add("skill-inactive");
  softImg.classList.add("skill-is-inactive");
  hardImg.classList.add("skill-is-active");
  hardImg.classList.remove("skill-is-inactive");
});

/* headerItems.forEach(function(e) {
  e.addEventListener('click', function() {
    e.classList.add('is-active');
  });
}) */
