// Activate the gliding line when a section is in view
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach(function(section) {
    var topOffset = section.offsetTop;
    var bottomOffset = topOffset + section.offsetHeight;

    if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});