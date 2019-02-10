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

    $('.parallax-window').parallax({imageSrc: 'https://lh3.googleusercontent.com/G0fOdDFFfjWHqO5O8sJSx1X_oPdY1gjM2vx9taTDdrDjW_cDAsxMa_fKq8zcuYNRi-SFTt15fS2eFN7ZBmrt2rZ0w6ImTqDaKxjmPy1ywuRJ1LN4xSokkzNauCcxEW8VcIH8Wdy2JAveL_E7FAjOhHVQ3_jZxiEUFA-pnOU2bd2nc24Y378f-NQDV0hGfqiZyUhw9u5bzVLXQRETJ0MUkH_ERhd4qPGGGNq8okSO2A9RUYdUOmBYsbQVQ8XdaQn1ybO1BkpwqytTTzpTnbS1tgNnncdYvC4_KVtkjWF9q-2LLdSmnTukNVYVdHO8mX9wQE13tOFQkUH9cyDswTN-kjSeSeoutgoDWWC65Ucgu18BWzWwAtgWJPLLVX7bMcV_sZShmPtt9io_UbcpuAhIwKGr6KaScV1tIRS0yvdqalNwS593RWcx-GzeHKj2GvUeshAcaoXlwZ5SLAw3793IPwy3TpSf8u9wbk_6E7YfdPyAoOC5GEJITq-XrRuI9d9h5q_cBC46IWApZWqdX2kQ_Sotm1-_Sm_zPtUZJapYt-Jp4cEntTiGcsXjkkP00GNGDkqH3PtFOG5Jar4O0kByHuMi9P8kxqpyOZBHowUpajABG-h2m4dGSEaP2q8i6kyj-Izmiq24p4_YJuEQ_774WfC5R1ggOeE=w547-h288-no'});


});