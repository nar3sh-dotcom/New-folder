function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  function handleScroll() {
    var fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(function (fade) {
      if (isElementInViewport(fade)) {
        fade.classList.add('fade-in-show');
      } else {
        fade.classList.remove('fade-in-show');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);

  
 