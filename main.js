$(document).ready(function () {


        $('#menuIcon').click(function () {
            $('#navBarSectionLinks').height("5vh");
            $('#navBarSectionLinks').width("100vw");
        })
        $('body').hover(function () {
            $('#navBarSectionLinks').animate({
                height: "0vh"

            }, 0.20)
        })




});