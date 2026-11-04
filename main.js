/* Iza Nogueira | Estética & Saúde — interações leves (sem dependências) */
(function () {
  'use strict';

  var doc = document;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Header ganha fundo depois do scroll */
  var header = doc.querySelector('.header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* 2. Reveal on scroll + desenho dos ornamentos */
  var revealEls = doc.querySelectorAll('.reveal, .draw');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* 3. Botão flutuante: some enquanto o CTA do hero ou o CTA final estão visíveis */
  var fab = doc.querySelector('.fab');
  var heroCta = doc.querySelector('[data-fab-hide]');
  var finalCta = doc.querySelector('[data-fab-hide-final]');
  if (fab && heroCta) {
    /* O flutuante só aparece depois que a pessoa passou pelo botão principal do hero
       e some de novo quando o botão do CTA final está na tela. Checagem direta de posição
       (um elemento, barata), sincronizada com o scroll via requestAnimationFrame. */
    var fabTicking = false;
    function updateFab() {
      fabTicking = false;
      var vh = window.innerHeight || doc.documentElement.clientHeight;
      var passedHero = heroCta.getBoundingClientRect().bottom < 0;
      var finalOnScreen = false;
      if (finalCta) {
        var fr = finalCta.getBoundingClientRect();
        finalOnScreen = fr.top < vh && fr.bottom > 0;
      }
      fab.classList.toggle('is-visible', passedHero && !finalOnScreen);
    }
    function requestFab() {
      if (!fabTicking) { fabTicking = true; window.requestAnimationFrame(updateFab); }
    }
    window.addEventListener('scroll', requestFab, { passive: true });
    window.addEventListener('resize', requestFab);
    updateFab();
  } else if (fab) {
    fab.classList.add('is-visible');
  }

  /* 4. Rastreio de cliques no WhatsApp (GA4 / Meta Pixel, se instalados) */
  doc.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
    a.addEventListener('click', function () {
      var origem = a.getAttribute('data-origem') || 'link';
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'whatsapp_click', { origem: origem });
      }
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact', { content_name: origem });
      }
    });
  });

  /* 5. FAQ: fecha os outros ao abrir um (comportamento de acordeão suave) */
  var faqs = doc.querySelectorAll('.faq details');
  faqs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      faqs.forEach(function (o) { if (o !== d && o.open) o.open = false; });
    });
  });

  /* 6. Mapa: só carrega o iframe do Google quando a pessoa toca na fachada */
  var mapBox = doc.querySelector('.location__map');
  var mapBtn = doc.querySelector('.map-facade');
  if (mapBox && mapBtn) {
    mapBtn.addEventListener('click', function () {
      if (mapBox.classList.contains('is-loaded')) return;
      var f = doc.createElement('iframe');
      f.title = 'Mapa de João Pessoa';
      f.src = mapBox.getAttribute('data-map-src');
      f.setAttribute('loading', 'lazy');
      f.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      f.setAttribute('allowfullscreen', '');
      mapBox.appendChild(f);
      mapBox.classList.add('is-loaded');
    });
  }

  /* 7. Ano no rodapé */
  var year = doc.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
