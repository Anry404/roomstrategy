/*!
 * Start Bootstrap - Small Business v5.0.4 (https://startbootstrap.com/template/small-business)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', () => {

  let toTopBtn = document.querySelector('.to-up');

  window.onscroll = function() {
    if (window.pageYOffset > 580) {
      toTopBtn.style.display = 'block'
    } else {
      toTopBtn.style.display = 'none'
    }
  }

  // плавный скролл наверх
  toTopBtn.addEventListener('click', function() {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  });
});
