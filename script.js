(function () {
  /* Real viewport height — 100vh is wrong on Chrome/Safari mobile/tablet */
  function setVh() {
    var h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    document.documentElement.style.setProperty('--vh', (h * 0.01) + 'px');
  }
  setVh();
  window.addEventListener('resize', setVh);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') setVh();
  });
  if (window.visualViewport) window.visualViewport.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', function () { setTimeout(setVh, 150); });

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
