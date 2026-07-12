// Footer year
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Nav: sliding pill highlight ----------
var nav = document.querySelector(".site-nav");
if (nav) {
  var pill = document.createElement("span");
  pill.className = "nav-pill";
  pill.setAttribute("aria-hidden", "true");
  nav.prepend(pill);

  var links = Array.prototype.slice.call(nav.querySelectorAll("a"));

  function moveTo(link) {
    if (!link) { pill.classList.remove("visible"); return; }
    pill.style.width = link.offsetWidth + "px";
    pill.style.transform = "translateX(" + link.offsetLeft + "px)";
    pill.classList.add("visible");
  }
  function activeLink() { return nav.querySelector("a.active"); }

  links.forEach(function (link) {
    link.addEventListener("mouseenter", function () { moveTo(link); });
    link.addEventListener("focus", function () { moveTo(link); });
  });
  nav.addEventListener("mouseleave", function () { moveTo(activeLink()); });

  // ---------- Scroll spy (homepage sections only) ----------
  var spied = links.filter(function (l) {
    return l.getAttribute("href") && l.getAttribute("href").charAt(0) === "#";
  });
  var sections = spied
    .map(function (l) { return document.getElementById(l.getAttribute("href").slice(1)); })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove("active"); });
        var current = nav.querySelector('a[href="#' + entry.target.id + '"]');
        if (current) {
          current.classList.add("active");
          moveTo(current);
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  } else {
    // Blog pages: rest the pill on the statically marked active link.
    moveTo(activeLink());
  }
}

// ---------- Scroll progress bar ----------
var header = document.querySelector(".site-header");
if (header) {
  var bar = document.createElement("span");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  header.appendChild(bar);
  var onScroll = function () {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
