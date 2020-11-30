$(function() {
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0,
         
        }
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow:'<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/right.png"></button>'
      });
      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows:false
      });
})