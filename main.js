$(document).ready(function () {

    $('.slideshow').cycle({
        fx: 'fade'
    });


    $('#phoneIcon').mouseenter(function () {
        $('#popUpImg').height('20vh');
        $('#popUpImg').width('30vh');
    });

    $('#phoneIcon').mouseleave(function () {
        $('#popUpImg').animate({
            height: "0vh",
        }, 100)
        $('#menuIcon').click(function () {
            $('#navBarSectionLinks').height("5vh");
            $('#navBarSectionLinks').width("100vw");
        })
        $('body').hover(function () {
            $('#navBarSectionLinks').animate({
                height: "0vh"

            }, 0.20)
        })

    })

});