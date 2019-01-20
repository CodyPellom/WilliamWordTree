$(document).ready(function() {
$('#phoneIcon').mouseenter(function(){
    $('#phoneNumberPopUp').height('20vh');
    $('#phoneNumberPopUp').width('15vh');
});
$('#phoneIcon').mouseleave(function(){
    $('#phoneNumberPopUp').animate({
        height: "0vh",
  
    });

   

})
});
 //) $('#phoneNumberPopUp').height('0vh');
    // $('#phoneNumberPopUp').width('0vw');