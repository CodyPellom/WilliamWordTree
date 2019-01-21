$(document).ready(function() {
$('#phoneIcon').mouseenter(function(){
    $('#popUpImg').height('15vh');
    $('#popUpImg').width('30vh');
});
$('#phoneIcon').mouseleave(function(){
    $('#popUpImg').animate({
        height: "0vh",
    });

$('#menuIcon').click(function(){
    $('#navBarSectionLinks').height("5vh");
    $('#navBarSectionLinks').width("100vw");
});
$('body').hover(function(){
    $('#navBarSectionLinks').height("0vh");
    $('#navBarSectionLinks').width("0vw");
})

})
});
 //) $('#phoneNumberPopUp').height('0vh');
    // $('#phoneNumberPopUp').width('0vw');