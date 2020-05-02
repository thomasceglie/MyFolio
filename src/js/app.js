const elementsAppear = document.querySelectorAll('.element--appear');
//const headerItems = document.querySelectorAll('.item');
const skillsUp = document.querySelector('.skills__up');
const skillsDown = document.querySelector('.skills__down');
const softSkills = document.querySelector('.soft-skills');
const hardSkills = document.querySelector('.hard-skills');

function revealElement() {
  elementsAppear.forEach(function(element) {
    let scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition > element.offsetTop + 150) {
      element.classList.add('is-on-screen');
    }
  });
}


window.addEventListener('scroll', function(){
  revealElement();
  })

window.onunload = function () {
  window.scrollTo(0, 0);
}

skillsDown.addEventListener('mouseenter', function () {
  softSkills.classList.add('skill-is-inactive');
  hardSkills.classList.add('skill-is-active');
});

skillsUp.addEventListener('mouseenter', function () {
  softSkills.classList.remove('skill-is-inactive');
  hardSkills.classList.remove('skill-is-active');
});

/* headerItems.forEach(function(e) {
  e.addEventListener('click', function() {
    e.classList.add('is-active');
  });
}) */
