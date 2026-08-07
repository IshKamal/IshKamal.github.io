/*
 * Ishmam Kamal | Analytics Portfolio
 * Minimal, dependency-free progressive enhancement.
 * All essential navigation and content works with this file absent.
 */
(function () {
  "use strict";

  var docEl = document.documentElement;
  docEl.classList.add("js");

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && window.matchMedia("(max-width: 760px)").matches) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Lightbox: tap-to-open full-size view for project figures. */
  var figureLinks = document.querySelectorAll("[data-lightbox]");
  if (figureLinks.length) {
    var overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Enlarged figure");
    overlay.hidden = true;
    overlay.innerHTML =
      '<button type="button" class="lightbox__close" aria-label="Close enlarged image">✕</button>' +
      '<img class="lightbox__img" alt="" />';
    document.body.appendChild(overlay);

    var lightboxImg = overlay.querySelector(".lightbox__img");
    var closeBtn = overlay.querySelector(".lightbox__close");
    var lastFocused = null;

    function openLightbox(src, alt) {
      lastFocused = document.activeElement;
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      overlay.hidden = false;
      closeBtn.focus();
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      overlay.hidden = true;
      lightboxImg.src = "";
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    figureLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var img = link.querySelector("img");
        if (!img) return;
        event.preventDefault();
        openLightbox(link.getAttribute("href") || img.src, img.alt);
      });
    });

    closeBtn.addEventListener("click", closeLightbox);
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !overlay.hidden) closeLightbox();
    });
  }

  /* Footer year */
  var yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
