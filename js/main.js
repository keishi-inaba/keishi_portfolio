//openbtn

$('#openbtn').click(function() {
  $(this).toggleClass('active');
  $('#g-navi').toggleClass('panel');
});

$('#g-navi a').click(function() {
 $('#openbtn').removeClass('active');
 $('#g-navi').removeClass('panel');
});

// page-top

function PageTop() {
  var scroll = $(window).scrollTop();
  if(scroll >= 100) {
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  } else {
    if($('#page-top').hasClass('UpMove')) {
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove')
    }
  }
}

$('#page-top').click(function() {
  $('body, html').animate({
    scrollTop: 0
  }, 500);
  return false;
})

//ページをロード、スクロールした時
 
$(window).scroll(function() {
  PageTop();
});

$(window).on('load', function() {
  PageTop();
});