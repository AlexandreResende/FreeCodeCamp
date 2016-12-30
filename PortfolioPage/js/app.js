$(document).ready(function(){
  
  $('a').hover(function(){
    $(this).addClass('negrito active');
  }, function(){
    $(this).removeClass('negrito active');
  });

});