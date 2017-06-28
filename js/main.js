
  var prevEl = $('.previousEl').outerHeight();
  var el = $('.fixedElement');
    // $('.wrap').bind('DOMMouseScroll', function(e){
    //      if(e.originalEvent.detail > 0) {
    //         el.removeClass('fixedOn');
    //         el.addClass('fixedOff');
    //      }else {
    //          el.removeClass('fixedOff');
    //          el.addClass('fixedOn');
    //      }
    //  });

     //IE, Opera, Safari
     $('.wrap').bind('mousewheel', function(e){
         if(e.originalEvent.wheelDelta < 0) {
            $(window).scroll(function(e){
                $(window).scrollTop() < prevEl
                    ? el.addClass('fixedOff').removeClass('fixedOn')
                    : el.addClass('fixedOff').removeClass('fixedOn')
            });
            
         }else {
            $(window).scroll(function(e){
                $(window).scrollTop() < prevEl
                    ? el.addClass('fixedOff').removeClass('fixedOn')
                    : el.addClass('fixedOn').removeClass('fixedOff')
            });
         }
         //prevent page fom scrolling
         // return false;
     });

