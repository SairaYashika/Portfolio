(function () {
  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Local time in the footer (About page)
  var clock = document.getElementById("local-time");
  if (clock) {
    var tick = function () {
      try {
        var t = new Intl.DateTimeFormat("en-US", {
          hour: "numeric", minute: "2-digit", timeZone: clock.dataset.tz
        }).format(new Date());
        clock.textContent = t + ", " + clock.dataset.city;
      } catch (e) {}
    };
    tick();
    setInterval(tick, 30000);
  }

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();
