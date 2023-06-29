
window.addEventListener('DOMContentLoaded', function() {
  var progressBar = document.querySelector('.progress');
  var progressBar2 = document.querySelector('.progress2');
  var progressBar3 = document.querySelector('.progress3');
  var progressBar4 = document.querySelector('.progress4');
  var progressBar5 = document.querySelector('.progress5');
  var progressBar6 = document.querySelector('.progress6');
  var progressBar7 = document.querySelector('.progress7');
  var progressBar8 = document.querySelector('.progress8');
  var progressBar9 = document.querySelector('.progress9');
  var progressBar10 = document.querySelector('.progress10');
  var progressBar11 = document.querySelector('.progress11');
  var section = document.querySelector('.ps-grid-container');
  var sectionTop = section.offsetTop;
  var sectionBottom = sectionTop + section.offsetHeight;
  var windowHeight = window.innerHeight;
  var loaded = false; // Flag to track if the progress bars have been loaded

  function updateProgressBars() {
    var windowScroll = window.pageYOffset;
    var windowBottom = windowScroll + windowHeight;

    if (windowBottom >= sectionTop && !loaded) {
      progressBar.style.width = '90%';
      progressBar2.style.width = '90%';
      progressBar3.style.width = '100%';
      progressBar4.style.width = '90%';
      progressBar5.style.width = '100%';
      progressBar6.style.width = '90%';
      progressBar7.style.width = '100%';
      progressBar8.style.width = '100%';
      progressBar9.style.width = '90%';
      progressBar10.style.width = '90%';
      progressBar11.style.width = '90%';

      loaded = true; // Set the flag to true once the progress bars are loaded
    }
  }

  window.addEventListener('scroll', updateProgressBars);
});

// Technologies Skill
window.addEventListener('DOMContentLoaded', function() {
  var progressTechBar1 = document.querySelector('.progress-Tech1');
  var progressTechBar2 = document.querySelector('.progress-Tech2');  
  var progressTechBar3 = document.querySelector('.progress-Tech3');
  var progressTechBar4 = document.querySelector('.progress-Tech4');
  var progressTechBar5 = document.querySelector('.progress-Tech5')
  var progressTechBar6 = document.querySelector('.progress-Tech6');
  var progressTechBar7 = document.querySelector('.progress-Tech7');
  var progressTechBar8 = document.querySelector('.progress-Tech8');
  var progressTechBar9 = document.querySelector('.progress-Tech9');
  var progressTechBar10 = document.querySelector('.progress-Tech10');
  var section = document.querySelector('.tech-grid-container');
  var sectionTop = section.offsetTop;
  var sectionBottom = sectionTop + section.offsetHeight;
  var windowHeight = window.innerHeight;
  var loaded = false; // Flag to track if the progress bars have been loaded

  function updateProgressBars() {
    var windowScroll = window.pageYOffset;
    var windowBottom = windowScroll + windowHeight;

    if (windowBottom >= sectionTop && !loaded) {
      progressTechBar1.style.width = '90%';
      progressTechBar2.style.width = '50%';
      progressTechBar3.style.width = '40%';
      progressTechBar4.style.width = '50%';
      progressTechBar5.style.width = '90%';
      progressTechBar6.style.width = '80%';
      progressTechBar7.style.width = '80%';
      progressTechBar8.style.width = '70%';
      progressTechBar9.style.width = '90%';
      progressTechBar10.style.width = '80%';

      loaded = true; // Set the flag to true once the progress bars are loaded
    }
  }

  window.addEventListener('scroll', updateProgressBars);
});

// Langauge Skills
window.addEventListener('scroll', function() {
  var progressLangBar1 = document.querySelector('.progress-Lang1');
  var windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progressPercentage = (windowScroll / windowHeight) * 90;

  progressLangBar1.style.width = progressPercentage + '%';
});
window.addEventListener('scroll', function() {
  var progressLangBar2 = document.querySelector('.progress-Lang2');
  var windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progressPercentage = (windowScroll / windowHeight) * 90;

  progressLangBar2.style.width = progressPercentage + '%';
});