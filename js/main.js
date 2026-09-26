$(function () {
  // Manejo de pestañas nav-tabs
  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  // --- Lógica de cambio de tema Claro / Oscuro ---
  var $body = $('body');
  var $themeBtn = $('#btn-theme-light');

  // Leer tema guardado (si no existe preferencia, la primera visita es 'light')
  var savedTheme = localStorage.getItem('theme');

  if (!savedTheme) {
    savedTheme = 'light';
    localStorage.setItem('theme', 'light');
  }

  // Aplicar tema según la preferencia guardada o el valor por defecto
  if (savedTheme === 'light') {
    $body.addClass('light-theme');
  } else {
    $body.removeClass('light-theme');
  }

  // Evento al pulsar el botón de tema
  if ($themeBtn.length) {
    $themeBtn.on('click', function (e) {
      e.preventDefault();
      $body.toggleClass('light-theme');

      // Guardar preferencia actualizada
      if ($body.hasClass('light-theme')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
  }
});