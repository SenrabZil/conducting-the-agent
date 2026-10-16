/* Course navigation, built from lessons.json (via lessons-data.js).
   Fills the lesson's one bottom row (← previous · Course map · next →) and points
   the lesson's own "next" buttons along the same course order, across series.
   Include after lessons-data.js with data-page="<module>/<slug>". */
(function () {
  "use strict";
  var me = document.currentScript;
  var course = window.PBS_COURSE;
  if (!me || !course) return;

  var root = me.src.replace(/assets\/js\/nav\.js(\?.*)?$/, "");
  var here = me.getAttribute("data-page") + "/index.html";

  var list = [];
  course.modules.forEach(function (m) {
    m.lessons.forEach(function (l) { list.push({ l: l, m: m }); });
  });
  if (course.closing) list.push({ l: course.closing, m: null });

  var i = -1;
  for (var k = 0; k < list.length; k++) if (list[k].l.path === here) i = k;
  if (i < 0) return;

  var cur = list[i], prev = list[i - 1], next = list[i + 1];
  var mapHref = root + "index.html";

  function href(x) { return root + x.l.path; }
  function moduleOf(x) { return x.m ? x.m.id : x.l.module; }
  // Name the series when a link crosses into a different one.
  function label(x) {
    if (!x.m) return x.l.title;
    return moduleOf(x) === moduleOf(cur) ? x.l.title : x.m.title + ": " + x.l.title;
  }
  // Turn a placeholder <span> into a link, or a link into an empty placeholder.
  function setLink(el, target, text) {
    if (!target) {
      if (el.tagName === "A") {
        var s = document.createElement("span");
        s.className = el.className; s.setAttribute("data-pbs", el.getAttribute("data-pbs"));
        el.parentNode.replaceChild(s, el);
      }
      return;
    }
    if (el.tagName !== "A") {
      var a = document.createElement("a");
      a.className = el.className; a.setAttribute("data-pbs", el.getAttribute("data-pbs"));
      el.parentNode.replaceChild(a, el); el = a;
    }
    el.href = href(target); el.textContent = text;
  }

  // 1. The bottom row
  document.querySelectorAll('[data-pbs="prev"]').forEach(function (el) {
    setLink(el, prev, prev ? "← " + label(prev) : "");
  });
  document.querySelectorAll('[data-pbs="next"]').forEach(function (el) {
    setLink(el, next, next ? label(next) + " →" : "");
  });

  // 2. The template's own completion buttons
  document.querySelectorAll('[data-pbs="next-btn"]').forEach(function (a) {
    if (next) {
      a.href = href(next);
      if (/^Back to/.test(a.textContent.trim())) a.textContent = "Continue";
    } else { a.href = mapHref; a.textContent = "Back to the course map"; }
  });
  document.querySelectorAll('[data-pbs="next-label"]').forEach(function (a) {
    if (next) { a.href = href(next); a.textContent = "Next: " + label(next); }
    else { a.href = mapHref; a.textContent = "Back to the course map"; }
  });
})();
