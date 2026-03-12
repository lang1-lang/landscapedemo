/**
 * Populates the page from CLIENT config and handles nav/scroll/menu/reveal.
 * Requires client-config.js to be loaded first.
 */
(function () {
  var C = typeof CLIENT !== "undefined" ? CLIENT : {};

  function formatBrandName(name) {
    if (!name) return "";
    return name.replace(/ & /g, ' <span class="nav__wordmark-amp">&amp;</span> ');
  }

  function setText(id, text, supportHtml) {
    var el = document.getElementById(id);
    if (!el) return;
    if (supportHtml && (text || "").indexOf("<br>") !== -1) {
      el.innerHTML = (text || "").replace(/<br>/g, "<br>");
    } else if (supportHtml) {
      el.innerHTML = text || "";
    } else {
      el.textContent = text || "";
    }
  }

  function setHtml(id, html) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = html || "";
  }

  function setAttr(id, attr, val) {
    var el = document.getElementById(id);
    if (!el) return;
    el.setAttribute(attr, val || "");
  }

  function buildNavLinks() {
    var navRight = document.getElementById("navLinks");
    var mobileMenuLinks = document.getElementById("mobileMenuLinks");
    if (!navRight || !mobileMenuLinks) return;

    var links = C.navLinks || [];
    var phone = C.contact ? C.contact.phone : "";
    var phoneFormatted = (C.contact && C.contact.phoneFormatted) || phone;

    var navHtml = "";
    links.forEach(function (item) {
      if (item.isButton) {
        navHtml += '<li class="nav__link-item"><a href="' + (item.href || "#") + '" class="ghost-btn">' + (item.label || "") + "</a></li>";
      } else {
        navHtml += '<li class="nav__link-item"><a href="' + (item.href || "#") + '" class="nav__link">' + (item.label || "") + "</a></li>";
      }
    });
    if (phone) {
      navHtml += '<li class="nav__link-item"><a href="tel:' + phone + '" class="nav__phone">' + phoneFormatted + "</a></li>";
    }
    navHtml += '<li><button class="nav__hamburger" id="menuToggle" aria-label="Open menu"><span></span><span></span><span></span></button></li>';
    if (navRight) navRight.innerHTML = navHtml;

    var mobileHtml = "";
    links.forEach(function (item) {
      mobileHtml += '<a href="' + (item.href || "#") + '" class="mobile-menu__link">' + (item.label || "") + "</a>";
    });
    if (phone) {
      mobileHtml += '<a href="tel:' + phone + '" class="mobile-menu__phone">' + phoneFormatted + "</a>";
    }
    if (mobileMenuLinks) mobileMenuLinks.innerHTML = mobileHtml;
  }

  function buildStats() {
    var container = document.getElementById("statsInner");
    if (!container) return;
    var stats = C.stats || [];
    var html = "";
    stats.forEach(function (s, i) {
      html +=
        '<div class="stat reveal" style="--d:' +
        i +
        '"><span class="stat__number">' +
        (s.number || "") +
        "</span><span class=" +
        '"stat__label">' +
        (s.label || "") +
        "</span></div>";
    });
    container.innerHTML = html;
  }

  function buildServices() {
    var eyebrow = document.getElementById("servicesEyebrow");
    var heading = document.getElementById("servicesHeading");
    var grid = document.getElementById("servicesGrid");
    if (!grid) return;
    if (eyebrow) eyebrow.textContent = (C.services && C.services.eyebrow) || "";
    if (heading) heading.innerHTML = (C.services && C.services.heading) || "";
    var items = (C.services && C.services.items) || [];
    var col1 = [];
    var col2 = [];
    items.forEach(function (item, i) {
      var html =
        '<div class="service-item reveal" style="--d:' +
        (i < 3 ? i : i - 2) +
        '"><span class="service-item__number">' +
        String(i + 1).padStart(2, "0") +
        '</span><div><h3 class="service-item__title">' +
        (item.title || "") +
        "</h3><p class=" +
        '"service-item__desc">' +
        (item.desc || "") +
        "</p></div></div>";
      if (i < 3) col1.push(html);
      else col2.push(html);
    });
    grid.innerHTML =
      '<div class="services__col">' +
      col1.join("") +
      '</div><div class="services__col">' +
      col2.join("") +
      "</div>";
  }

  function buildPortfolio() {
    var eyebrow = document.getElementById("portfolioEyebrow");
    var heading = document.getElementById("portfolioHeading");
    var viewAll = document.getElementById("portfolioViewAll");
    var grid = document.getElementById("portfolioGrid");
    if (!grid) return;
    if (eyebrow) eyebrow.textContent = (C.portfolio && C.portfolio.eyebrow) || "";
    if (heading) heading.innerHTML = (C.portfolio && C.portfolio.heading) || "";
    if (viewAll) {
      viewAll.textContent = (C.portfolio && C.portfolio.viewAllLabel) || "View All";
      viewAll.href = (C.portfolio && C.portfolio.viewAllHref) || "#";
    }
    var projects = (C.portfolio && C.portfolio.projects) || [];
    var html = "";
    projects.forEach(function (p, i) {
      html +=
        '<div class="portfolio-item reveal" style="--d:' +
        i +
        '"><img class="portfolio-item__img" src="' +
        (p.imageUrl || "") +
        '" alt="' +
        (p.imageAlt || p.name || "") +
        '" loading="lazy"><div class="portfolio-item__overlay"><span class="portfolio-item__number">' +
        String(i + 1).padStart(2, "0") +
        '</span><h3 class="portfolio-item__name">' +
        (p.name || "") +
        '</h3><span class="portfolio-item__category">' +
        (p.category || "") +
        "</span></div></div>";
    });
    grid.innerHTML = html;
  }

  function buildFooter() {
    var f = C.footer || {};
    var brandNameEl = document.getElementById("footerBrandName");
    var brandDescEl = document.getElementById("footerBrandDesc");
    var sitemapEl = document.getElementById("footerSitemap");
    var servicesEl = document.getElementById("footerServices");
    var contactEl = document.getElementById("footerContact");
    var copyrightEl = document.getElementById("footerCopyright");
    var legalEl = document.getElementById("footerLegal");

    if (brandNameEl) brandNameEl.innerHTML = formatBrandName(f.brandName || C.brand?.name || "");
    if (brandDescEl) brandDescEl.textContent = f.brandDesc || "";
    if (copyrightEl) copyrightEl.textContent = f.copyright || "";

    if (sitemapEl) {
      var sitemap = f.sitemap || [];
      sitemapEl.innerHTML = sitemap
        .map(function (l) {
          return '<li><a href="' + (l.href || "#") + '">' + (l.label || "") + "</a></li>";
        })
        .join("");
    }
    if (servicesEl) {
      var services = f.services || [];
      servicesEl.innerHTML = services
        .map(function (l) {
          return '<li><a href="' + (l.href || "#") + '">' + (l.label || "") + "</a></li>";
        })
        .join("");
    }
    if (contactEl) {
      var phone = C.contact?.phone;
      var email = C.contact?.email;
      var loc = C.contact?.location;
      contactEl.innerHTML =
        (phone ? '<li><a href="tel:' + phone + '">' + (C.contact.phoneFormatted || phone) + "</a></li>" : "") +
        (email ? '<li><a href="mailto:' + email + '">' + email + "</a></li>" : "") +
        (loc ? '<li class="footer__contact-item">' + loc + "</li>" : "");
    }
    if (legalEl) {
      var legal = f.legal || [];
      legalEl.innerHTML = legal
        .map(function (l) {
          return '<a href="' + (l.href || "#") + '">' + (l.label || "") + "</a>";
        })
        .join("");
    }
  }

  function populate() {
    document.title = (C.page && C.page.title) || "";

    var navWordmark = document.getElementById("navWordmark");
    if (navWordmark) navWordmark.innerHTML = formatBrandName(C.brand?.name || "");
    var navDescriptor = document.getElementById("navDescriptor");
    if (navDescriptor) navDescriptor.textContent = C.brand?.tagline || "";

    buildNavLinks();

    var heroImg = document.getElementById("heroImg");
    if (heroImg) {
      heroImg.src = (C.hero && C.hero.imageUrl) || "";
      heroImg.alt = (C.hero && C.hero.imageAlt) || "";
    }
    setText("heroEyebrow", C.hero?.eyebrow);
    setHtml("heroTitle", C.hero?.title);
    setText("heroDescription", C.hero?.description);
    var heroInput = document.getElementById("heroEstimatorInput");
    if (heroInput) heroInput.placeholder = C.hero?.estimatorPlaceholder || "";
    setText("heroEstimatorBtn", C.hero?.estimatorButton);
    setText("heroEstimatorLabel", C.hero?.estimatorLabel);

    buildStats();

    buildServices();

    buildPortfolio();

    var t = C.testimonial || {};
    setText("quoteText", t.quote);
    setText("quoteAuthor", t.author);
    setText("quoteLocation", t.location);

    var c = C.cta || {};
    setHtml("ctaHeading", c.heading);
    setText("ctaDesc", c.desc);
    var ctaInput = document.getElementById("ctaEstimatorInput");
    if (ctaInput) ctaInput.placeholder = c.placeholder || "";
    setText("ctaEstimatorBtn", c.buttonText);
    var ctaPhone = document.getElementById("ctaPhone");
    if (ctaPhone) {
      var tel = C.contact?.phone;
      var fmt = C.contact?.phoneFormatted || tel;
      ctaPhone.innerHTML = (c.phoneLabel || "Or call us") + " — <a href=\"tel:" + tel + "\">" + fmt + "</a>";
    }

    buildFooter();
  }

  function initApp() {
    populate();

    var nav = document.getElementById("mainNav");
    var toggle = document.getElementById("menuToggle");
    var mobileMenu = document.getElementById("mobileMenu");
    var menuClose = document.getElementById("menuClose");
    var ticking = false;

    if (nav) {
      window.addEventListener("scroll", function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            nav.classList.toggle("nav--solid", window.scrollY > 50);
            ticking = false;
          });
          ticking = true;
        }
      });
    }

    if (toggle && mobileMenu) {
      toggle.addEventListener("click", function () {
        mobileMenu.classList.add("mobile-menu--open");
      });
    }
    if (menuClose && mobileMenu) {
      menuClose.addEventListener("click", function () {
        mobileMenu.classList.remove("mobile-menu--open");
      });
    }
    if (mobileMenu) {
      mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          mobileMenu.classList.remove("mobile-menu--open");
        });
      });
    }

    var reveals = document.querySelectorAll(".reveal");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
