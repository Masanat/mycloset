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

$(function() {
    
    //$('.items ul li').click(function() {
      //var imgSrc = $(this).children().attr('src');
     // $('.items-wide ul li').children().attr('src', imgSrc);
     // $('#modal-img').fadeIn();
      
      //$('body,html').css('overflow-y', 'hidden');
      //return false

 
    $('.close-modal').click(function() {
      $('#modal-img').fadeOut();
    });
    
  });

// responsive;menubar（クリック）

  $(function() {
    
    $('#menubar_hdr').click(function() {
      $('#menubar-s').fadeIn();
      //$('#menubar_hdr.open').fadeOut();
      //$('#menubar_hdr.close').fadeIn();
    });    
//    $('#menubar_hdr.close').click(function() {
//      $('#menubar-s').fadeOut();
//      $('#menubar_hdr.open').fadeIn();
//      $('#menubar_hdr.close').fadeOut();
    //});
    
  });
  
});