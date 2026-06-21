document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('mobileMenuToggle');
  var mobileNav = document.getElementById('mobileNav');
  var emailLinks = document.querySelectorAll(".scrambled-email");
  
  if (!menuToggle || !mobileNav) {
    return;
  }

  function setMenuState(open) {
    menuToggle.setAttribute('aria-expanded', open);
    menuToggle.setAttribute('aria-label', open ? menuToggle.dataset.closeText : menuToggle.dataset.openText);
    mobileNav.classList.toggle('open', open);
  }

  menuToggle.addEventListener('click', function () {
    setMenuState(mobileNav.classList.toggle('open'));
  });

  document.addEventListener('click', function (event) {
    if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) {
      setMenuState(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setMenuState(false);
    }
  });

  if (!emailLinks.length) {
    return;
  }

  emailLinks.forEach(function (link) {
    var encoded = link.getAttribute("data-email");
    if (encoded) {
      var email = atob(encoded);
      var text = link.getAttribute("data-text");

      link.href = "mailto:" + email;
      // If the display text matches the email, update it visually too
      if (text === link.textContent.trim() || !text) {
        link.textContent = email;
      } else {
        link.textContent = text;
      }
    }
  });
});
