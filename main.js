$(document).ready(function() {
$('#phoneIcon').mouseenter(function(){
    $('#popUpImg').height('15vh');
    $('#popUpImg').width('30vh');
});
$('#phoneIcon').mouseleave(function(){
    $('#popUpImg').animate({
        height: "0vh",
    });

   

})
});
 //) $('#phoneNumberPopUp').height('0vh');
    // $('#phoneNumberPopUp').width('0vw');