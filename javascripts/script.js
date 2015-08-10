$(document).ready(function() {
   $('album img').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('album img').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
});