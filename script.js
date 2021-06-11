$(function() {
      
    // スライド

    function toggleChangeBtn() {
      var slideIndex = $('.slide').index($('.active'));
      $('.change-btn').show();
      if (slideIndex == 0) {
        $('.prev-btn').hide();
      } else if (slideIndex == $(".slide").length - 1) {
        $('.next-btn').hide();
      }
    }

    $('.change-btn').click(function() {
      var $displaySlide = $('.active');
      $displaySlide.removeClass('active');
      if ($(this).hasClass('next-btn')) {
        $displaySlide.next().addClass('active');
      } else {
        $displaySlide.prev().addClass('active');
      }
      toggleChangeBtn();
    });
  
    // 一覧（クリック）
  
  $(function() {
    
    $('#trend-list').click(function() {
      $('#modal-trend').fadeIn();
      $('body,html').css('overflow-y', 'hidden');
    });    
    $('.close-modal').click(function() {
      $('#modal-trend').fadeOut();
      $('body,html').css('overflow-y', 'visible');
    });
    
  });

  $(function() {
    
    $('#accent-list').click(function() {
      $('#modal-accent').fadeIn();
      $('body,html').css('overflow-y', 'hidden');
    });    
    $('.close-modal').click(function() {
      $('#modal-accent').fadeOut();
      $('body,html').css('overflow-y', 'visible');
    });
    
  });

  $(function() {
    
    $('#seasonal-list').click(function() {
      $('#modal-seasonal').fadeIn();
      $('body,html').css('overflow-y', 'hidden');
    });    
    $('.close-modal').click(function() {
      $('#modal-seasonal').fadeOut();
      $('body,html').css('overflow-y', 'visible');
    });
    
  });

    // 一覧（クリック）;レスポンシブ対応
  
  
  $(function() {
    
    $('#trend-list-res').click(function() {
      $('#modal-trend').fadeIn();
      $('body,html').css('overflow-y', 'hidden');
    });    
    $('.close-modal').click(function() {
      $('#modal-trend').fadeOut();
      $('body,html').css('overflow-y', 'visible');
    });
    
  });

  $(function() {
    
    $('#acce-list-res').click(function() {
      $('#modal-accent').fadeIn();
      $('body,html').css('overflow-y', 'hidden');
    });    
    $('.close-modal').click(function() {
      $('#modal-accent').fadeOut();
      $('body,html').css('overflow-y', 'visible');
    });
    
  });

  $(function() {
    
    $('#seasonal-list-res').click(function() {
      $('#modal-seasonal').fadeIn();
      $('body,html').css('overflow-y', 'hidden');
    });    
    $('.close-modal').click(function() {
      $('#modal-seasonal').fadeOut();
      $('body,html').css('overflow-y', 'visible');
    });
    
  });

    // 概要（クリック）

  $(function() {
    
    $('#management').click(function() {
      $('#modal-what').fadeIn();
      $('body,html').css('overflow-y', 'hidden');
    });    
    $('.close-modal').click(function() {
      $('#modal-what').fadeOut();
      $('body,html').css('overflow-y', 'visible');
    });
    
  });



// 画像拡大（クリック）
// 画像拡大（クリック） Tops

$(function() {
  
  $('#wideimg-1').click(function() {
    $('#modal-img-1').fadeIn();
    $('.slides-wide').slick('setPosition');
  });       
  $('.close-modal').click(function() {
    $('#modal-img-1').fadeOut();
  });
  
  $('#wideimg-2').click(function() {
    $('#modal-img-2').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-2').fadeOut();
  });
  
  $('#wideimg-3').click(function() {
    $('#modal-img-3').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-3').fadeOut();
  });
  
  $('#wideimg-4').click(function() {
    $('#modal-img-4').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-4').fadeOut();
  });
  
  $('#wideimg-5').click(function() {
    $('#modal-img-5').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-5').fadeOut();
  });
  
  $('#wideimg-6').click(function() {
    $('#modal-img-6').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-6').fadeOut();
  });
  
  $('#wideimg-7').click(function() {
    $('#modal-img-7').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-7').fadeOut();
  });
  
  $('#wideimg-8').click(function() {
    $('#modal-img-8').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-8').fadeOut();
  });
  
// 画像拡大（クリック） Bttoms

$(function() {
  
  $('#wideimg-1b').click(function() {
    $('#modal-img-1b').fadeIn();
    $('.slides-wide').slick('setPosition');
  });       
  $('.close-modal').click(function() {
    $('#modal-img-1b').fadeOut();
  });
  
  $('#wideimg-2b').click(function() {
    $('#modal-img-2b').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-2b').fadeOut();
  });
  
  $('#wideimg-3b').click(function() {
    $('#modal-img-3b').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-3b').fadeOut();
  });
  
  $('#wideimg-4b').click(function() {
    $('#modal-img-4b').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-4b').fadeOut();
  });
  
  $('#wideimg-5b').click(function() {
    $('#modal-img-5b').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-5b').fadeOut();
  });
  
  $('#wideimg-6b').click(function() {
    $('#modal-img-6b').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-6b').fadeOut();
  });
  
  $('#wideimg-7b').click(function() {
    $('#modal-img-7b').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-7b').fadeOut();
  });
  
  $('#wideimg-8b').click(function() {
    $('#modal-img-8b').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-8b').fadeOut();
  });
});
  
  
// 画像拡大（クリック） Bttoms

$(function() {
  
  $('#wideimg-1s').click(function() {
    $('#modal-img-1s').fadeIn();
    $('.slides-wide').slick('setPosition');
  });       
  $('.close-modal').click(function() {
    $('#modal-img-1s').fadeOut();
  });
  
  $('#wideimg-2s').click(function() {
    $('#modal-img-2s').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-2s').fadeOut();
  });
  
  $('#wideimg-3s').click(function() {
    $('#modal-img-3s').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-3s').fadeOut();
  });
  
  $('#wideimg-4s').click(function() {
    $('#modal-img-4s').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-4s').fadeOut();
  });
  
  $('#wideimg-5s').click(function() {
    $('#modal-img-5s').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-5s').fadeOut();
  });
  
  $('#wideimg-6s').click(function() {
    $('#modal-img-6s').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-6s').fadeOut();
  });
  
  $('#wideimg-7s').click(function() {
    $('#modal-img-7s').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-7s').fadeOut();
  });
  
  $('#wideimg-8s').click(function() {
    $('#modal-img-8s').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-8s').fadeOut();
  });
  
  // 画像拡大（クリック） Outer

  $('#wideimg-1o').click(function() {
    $('#modal-img-1o').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-1o').fadeOut();
  });
  

  $('#wideimg-2o').click(function() {
    $('#modal-img-2o').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-2o').fadeOut();
  });
  

  $('#wideimg-3o').click(function() {
    $('#modal-img-3o').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-3o').fadeOut();
  });
  
  $('#wideimg-4o').click(function() {
    $('#modal-img-4o').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-4o').fadeOut();
  });
  
  $('#wideimg-5o').click(function() {
    $('#modal-img-5o').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-5o').fadeOut();
  });
  
  $('#wideimg-6o').click(function() {
    $('#modal-img-6o').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-6o').fadeOut();
  });
  
  $('#wideimg-7o').click(function() {
    $('#modal-img-7o').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-7o').fadeOut();
  });
  
  $('#wideimg-8o').click(function() {
    $('#modal-img-8o').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-8o').fadeOut();
  });

    
// 画像拡大（クリック） Add

$(function() {
  
  $('#wideimg-1a').click(function() {
    $('#modal-img-1a').fadeIn();
    $('.slides-wide').slick('setPosition');
  });       
  $('.close-modal').click(function() {
    $('#modal-img-1a').fadeOut();
  });
  
  $('#wideimg-2a').click(function() {
    $('#modal-img-2a').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-2a').fadeOut();
  });
  
  $('#wideimg-3a').click(function() {
    $('#modal-img-3a').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-3a').fadeOut();
  });
  
  $('#wideimg-4a').click(function() {
    $('#modal-img-4a').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-4a').fadeOut();
  });
  
  $('#wideimg-5a').click(function() {
    $('#modal-img-5a').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-5a').fadeOut();
  });
  
  $('#wideimg-6a').click(function() {
    $('#modal-img-6a').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-6a').fadeOut();
  });
  
  $('#wideimg-7a').click(function() {
    $('#modal-img-7a').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-7a').fadeOut();
  });
  
  $('#wideimg-8a').click(function() {
    $('#modal-img-8a').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-8a').fadeOut();
  });
});  
    
// 画像拡大（クリック）want

$(function() {
  
  $('#wideimg-1w').click(function() {
    $('#modal-img-1w').fadeIn();
    $('.slides-wide').slick('setPosition');
  });       
  $('.close-modal').click(function() {
    $('#modal-img-1w').fadeOut();
  });
  
  $('#wideimg-2w').click(function() {
    $('#modal-img-2w').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-2w').fadeOut();
  });
  
  $('#wideimg-3w').click(function() {
    $('#modal-img-3w').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-3w').fadeOut();
  });
  
  $('#wideimg-4w').click(function() {
    $('#modal-img-4w').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-4w').fadeOut();
  });
  
  $('#wideimg-5w').click(function() {
    $('#modal-img-5w').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-5w').fadeOut();
  });
  
  $('#wideimg-6w').click(function() {
    $('#modal-img-6w').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-6w').fadeOut();
  });
  
  $('#wideimg-7w').click(function() {
    $('#modal-img-7w').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-7w').fadeOut();
  });
  
  $('#wideimg-8w').click(function() {
    $('#modal-img-8w').fadeIn();
    $('.slides-wide').slick('setPosition');
  });        
  $('.close-modal').click(function() {
    $('#modal-img-8w').fadeOut();
  });
});  
  

});  
  // slick
  $('.slides-wide').slick({
    //autoplay:true,
    //autoplaySpeed:5000,
    dots:true,
  });
  
});


// responsive;menubar（クリック）

  $(function() {
      
  $('#menubar_hdr').click(function(){
    if( $('.menubar-s').hasClass('active') ){
      $('#menubar-s').fadeIn();
      $('.menubar-s').removeClass('active');
      $(this).addClass('open').removeClass('close');
    }else {
      $('#menubar-s').fadeOut();
      $('.menubar-s').addClass('active');
      $(this).addClass('close').removeClass('open'); 
    }
  })      


  });
});

