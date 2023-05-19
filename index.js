function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    var fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(function (fade) {
      if (isElementInViewport(fade)) {
        fade.classList.add('fade-in-show');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  