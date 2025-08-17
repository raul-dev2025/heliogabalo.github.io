$(function() {
  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  // Fix for custom dropdown in "Nuestros Servicios" for mobile
  $('.btn-group .dropdown-toggle').on('click', function(e) {
    //e.preventDefault();
    $(this).next('.dropdown-menu').toggle();
  });

  // Optional: Close dropdown when clicking outside
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.btn-group').length) {
      $('.btn-group .dropdown-menu').hide();
    }
  });
});
