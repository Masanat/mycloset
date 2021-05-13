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
    });    
    $('.close-modal').click(function() {
      $('#modal-trend').fadeOut();
    });
    
  });

  $(function() {
    
    $('#accent-list').click(function() {
      $('#modal-accent').fadeIn();
    });    
    $('.close-modal').click(function() {
      $('#modal-accent').fadeOut();
    });
    
  });

  $(function() {
    
    $('#seasonal-list').click(function() {
      $('#modal-seasonal').fadeIn();
    });    
    $('.close-modal').click(function() {
      $('#modal-seasonal').fadeOut();
    });
    
  });

    // 概要（クリック）

  $(function() {
    
    $('#management').click(function() {
      $('#modal-what').fadeIn();
    });    
    $('.close-modal').click(function() {
      $('#modal-what').fadeOut();
    });
    
  });



    // 画像拡大（クリック）

$(function() {
    
    $('.moveimg').click(function() {
      var imgname = $(this).attr('src');
//      $('#widepic').attr('src', 'imgname');
      $('#modal-img').fadeIn();
    });    
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