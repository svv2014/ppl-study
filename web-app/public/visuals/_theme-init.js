(function () {
  var p = new URLSearchParams(location.search).get('scheme');
  var s = p === 'light' || p === 'dark' ? p
        : (localStorage.getItem('ppl.theme-mode') === 'light' ? 'light' : 'dark');
  document.documentElement.setAttribute('data-scheme', s);
})();
