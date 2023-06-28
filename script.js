// Activate the gliding line when a section is in view
// window.addEventListener('scroll', function() {
//   var sections = document.querySelectorAll('section');
//   var scrollPosition = window.onscroll || document.documentElement.scrollTop;

//   sections.forEach(function(section) {
//     var topOffset = section.offsetTop;
//     var bottomOffset = topOffset + section.offsetHeight;

//     if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
//       section.classList.add('active');
//     } else {
//       section.classList.remove('active');
//     }
//   });
// });

window.addEventListener('scroll', function() {
  var progressBar = document.querySelector('.progress');
  var windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progressPercentage = (windowScroll / windowHeight) * 100;

  progressBar.style.width = progressPercentage + '%';
});