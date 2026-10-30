(function () {
  const nav = document.querySelector(".nav");
  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menuBtn");
  const main = document.getElementById("main");
  const year = document.querySelector("[data-year]");

  if (year) year.textContent = String(new Date().getFullYear());

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menu.inert = !open;
    document.body.classList.toggle("lock", open);
    if (main) main.inert = open;
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        menuBtn.focus();
      }
    });
  }

  const links = Array.from(document.querySelectorAll(".nav-links a"));
  const sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  const rail = Array.from(document.querySelectorAll(".rail a"));
  const chapters = rail
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
    const mark = window.scrollY + 140;
    let active = sections[0];
    sections.forEach(function (section) {
      if (section.offsetTop <= mark) active = section;
    });
    links.forEach(function (link) {
      link.classList.toggle("is-on", active && link.getAttribute("href") === "#" + active.id);
    });

    let current = chapters[0];
    chapters.forEach(function (chapter) {
      if (chapter.getBoundingClientRect().top <= 160) current = chapter;
    });
    rail.forEach(function (link) {
      link.classList.toggle("is-on", current && link.getAttribute("href") === "#" + current.id);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
