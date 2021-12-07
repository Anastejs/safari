$(function(){
    // всплывающее видео с ютуба
    $('.popup__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // меню-бургер
    // при нажатии на .menu__btn  ->  к .menu__list добавляется класс menu__list--active
    $('.menu__btn').on('click', function (){
        $('.menu__list').toggleClass('menu__list--active');
    })

    // слайдер - галерея
    $('.gallery__item-inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    // слайдер - стрелки
    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/arrow-right.svg" alt=""></button>',
    });


});