/* Nature & Folies — Script principal */
(function () {
  'use strict';

  /* ---- Navigation scroll + hamburger ---- */
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const menu = document.querySelector('.nav__menu');

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      const ouvert = hamburger.classList.toggle('ouvert');
      menu.classList.toggle('ouvert', ouvert);
      hamburger.setAttribute('aria-expanded', ouvert);
    });

    // Fermer le menu au clic sur un lien
    menu.querySelectorAll('a').forEach(lien => {
      lien.addEventListener('click', () => {
        hamburger.classList.remove('ouvert');
        menu.classList.remove('ouvert');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Marquer le lien actif ---- */
  const pageCourante = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__lien').forEach(lien => {
    const href = lien.getAttribute('href');
    if (href === pageCourante || (pageCourante === '' && href === 'index.html')) {
      lien.classList.add('actif');
    }
  });

  /* ---- Formulaire de réservation ---- */
  const formulaire = document.getElementById('form-reservation');
  if (formulaire) {
    // Définir la date minimale à aujourd'hui
    const champDate = formulaire.querySelector('#date');
    if (champDate) {
      const auj = new Date();
      const yyyy = auj.getFullYear();
      const mm = String(auj.getMonth() + 1).padStart(2, '0');
      const dd = String(auj.getDate()).padStart(2, '0');
      champDate.min = `${yyyy}-${mm}-${dd}`;
    }

    formulaire.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!formulaire.checkValidity()) {
        formulaire.reportValidity();
        return;
      }

      const btn = formulaire.querySelector('button[type="submit"]');
      const succes = document.getElementById('form-succes');

      btn.disabled = true;
      btn.textContent = 'Envoi en cours…';

      // Simulation d'envoi (à remplacer par fetch vers votre backend)
      setTimeout(() => {
        formulaire.reset();
        btn.disabled = false;
        btn.textContent = 'Envoyer ma demande';
        if (succes) {
          succes.style.display = 'block';
          succes.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => { succes.style.display = 'none'; }, 6000);
        }
      }, 1200);
    });
  }

  /* ---- Lazy loading polyfill pour navigateurs anciens ---- */
  if ('loading' in HTMLImageElement.prototype === false) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          observer.unobserve(img);
        }
      });
    });
    images.forEach(img => observer.observe(img));
  }

  /* ---- Animation d'apparition au scroll ---- */
  const observerApparition = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerApparition.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll(
    '.atout, .plat-card, .service-card, .avis-card--page, .menu-item'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observerApparition.observe(el);
  });

  // Classe visible → afficher l'élément
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
  document.head.appendChild(style);

  /* ---- Téléphone : tracking clic ---- */
  document.querySelectorAll('a[href^="tel:"]').forEach(lien => {
    lien.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'click', { event_category: 'contact', event_label: 'telephone' });
      }
    });
  });

})();
