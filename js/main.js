const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        // burger animation
        burger.classList.toggle('nav-open');
    });
}

navSlide();


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navbar-transparent").addClass("navbar-scrolled");
        $(".alink").addClass("nav-scroll");
    } else {
        $(".navbar-transparent").removeClass("navbar-scrolled");
        $(".alink").removeClass("nav-scroll");
    }

});

        // $(function() {
        //     var header = $(".navbar-transparent");
        //     $(window).scroll(function() {
        //         var scroll = $(window).scrollTop();

        //         if (scroll >= 500) {
        //             header.removeClass('navbar-transparent').addClass("navbar-scrolled");
        //         } else {
        //             header.removeClass('navbar-scrolled').addClass('navbar-transparent');
        //         }

        //     });
        // });
    