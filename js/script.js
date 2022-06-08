$(document).ready(function () {
    $('.mobile-button').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $('.nav').toggleClass('active')
    })


    $('.qr-link').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $('.tooltip').toggleClass('active')
    })

    setTimeout(function () {
        $('.shadow').addClass('hidden')
    }, 200)




    var swiper = new Swiper(".change", {
        direction: "vertical",
        loop: true,
        slidesPerView: 8,
        speed: 1000,
        autoplay: {
            delay: 1000,
            reverseDirection: true,
            disableOnInteraction: false,
        },
    });
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".qr-link, .tooltip"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('active'); // скрываем его
    }
});