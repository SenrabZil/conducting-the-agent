// Opens the "Get the project files" popup on lessons whose template has none of its own.
// build-site.py (add_files) adds the header button (#filesBtn) and the popup (#fback);
// the Roadmap, Tiles and Scaffolding lessons carry their own script instead.
(function () {
  var btn = document.getElementById("filesBtn");
  var back = document.getElementById("fback");
  var close = document.getElementById("fsX");
  if (!btn || !back || !close) return;
  var from = null;

  function open(e) {
    if (e) e.stopPropagation();
    from = document.activeElement;
    back.classList.add("show");
    close.focus();
  }
  function shut() {
    back.classList.remove("show");
    if (from && from.focus) from.focus();
  }

  btn.addEventListener("click", open);
  close.addEventListener("click", shut);
  back.addEventListener("click", function (e) { if (e.target === back) shut(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && back.classList.contains("show")) shut();
  });
})();
