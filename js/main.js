$(function () {
  // Manejo de pestañas nav-tabs
  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  // --- Lógica de cambio de tema Claro / Oscuro ---
  var $body = $('body');
  var $themeBtn = $('#btn-theme-light');

  // Restaurar el tema guardado previamente en el navegador
  if (localStorage.getItem('theme') === 'light') {
    $body.addClass('light-theme');
  }

  // Evento al pulsar el botón de tema
  if ($themeBtn.length) {
    $themeBtn.on('click', function (e) {
      e.preventDefault();
      $body.toggleClass('light-theme');

      // Guardar preferencia
      if ($body.hasClass('light-theme')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
  }
});