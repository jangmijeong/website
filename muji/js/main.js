$(document).on('ready', function() {
          $(".notice_slider").slick({
            dots: false,
            vertical: true,
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:'<i class="fas fa-sort-up prevBtn"></i>',
            nextArrow:'<i class="fas fa-caret-down nextBtn"></i>',
            autoplay:true
          });
            $(".banner_slider").slick({
            dots:true,
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true,
            autoplay:true,
            arrows: false,
            autoplaySpeed:2000,
          });
            $(".subitem_slider").slick({
            dots: false,
            infinite: true,
            centerMode: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<i class="fas fa-angle-left prevBtn"></i>',
            nextArrow: '<i class="fas fa-angle-right nextBtn"></i>',
            autoplay: true,
            autoplaySpeed:2000,
          });
        });