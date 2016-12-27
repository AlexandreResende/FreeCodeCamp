
$(document).ready(function(){
  $('img').on('click', function(){
    var imgSrc = $(this).attr('src');
    console.log('testando');
    $('#imgSetter').attr('src', imgSrc);
  });
});