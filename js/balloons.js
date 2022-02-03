$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().removeClass().addClass('animate__animated').addClass('animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated').addClass('animate__bounceOutUp');
    });

    const element = document.querySelector('h1#happyBirthday');
    element.classList.add('animate__animated', 'animate__bounceOutLeft');
});