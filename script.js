(function () {
  var hamburger = document.querySelector('.hamburger');
  var overlay = document.querySelector('.sidebar-overlay');

  function openSidebar() { document.body.classList.add('sidebar-open'); }
  function closeSidebar() { document.body.classList.remove('sidebar-open'); }
  function toggleSidebar() { document.body.classList.toggle('sidebar-open'); }

  if (hamburger) hamburger.addEventListener('click', toggleSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  document.querySelectorAll('.left-nav a').forEach(function (link) {
    link.addEventListener('click', closeSidebar);
  });
})();
