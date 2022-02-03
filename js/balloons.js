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

    //Randomize attention seeker
    const animations = ["animate__bounce",
        "animate__flash",
        "animate__pulse",
        "animate__rubberBand",
        "animate__shakeX",
        "animate__shakeY",
        "animate__headShake",
        "animate__swing",
        "animate__tada",
        "animate__wobble",
        "animate__jello",
        "animate__heartBeat"
    ];
    var animation = animations[Math.floor((Math.random() * animations.length))];
    const element = document.querySelector('h1#happyBirthday');
    element.classList.add('animate__animated', animation);

    //Add toast if no boxes are checked
    $('#submit').on('click', function () {
        var checked = 0;
        $('.form-check-input').each(function () {
            if (this.checked) {
                checked++;
            }
        });
        if (checked == 0) {
            $('#toast').toast('show');
        }
        
    });

    //Select all boxes box
    $('#selectAllBalloons').change(function () {
        if (this.checked) {
            $('.form-check-input').each(function () {
                $(this).prop('checked', true);
                $('#' + this.id + 'Img').css('visibility', 'visible')
                // animate balloon in/out based on checkbox
                $(this).is(':checked') ?
                    $('#' + this.id + 'Img').removeClass().removeClass().addClass('animate__animated').addClass('animate__bounceInDown') :
                    $('#' + this.id + 'Img').addClass('animate__animated').addClass('animate__bounceOutUp');
            
            });
        } else {
            $('.form-check-input').each(function () {
                $(this).prop('checked', false);
                $('#' + this.id + 'Img').css('visibility', 'visible')
                // animate balloon in/out based on checkbox
                $(this).is(':checked') ?
                    $('#' + this.id + 'Img').removeClass().removeClass().addClass('animate__animated').addClass('animate__bounceInDown') :
                    $('#' + this.id + 'Img').addClass('animate__animated').addClass('animate__bounceOutUp');
            
            });
        }
    });

    //Change Happy birthday text based on label hover
    $('.form-check-label').hover(function () {
        $('h1#happyBirthday').css("color", $(this).data('color'));
    }, function () {
        $('h1#happyBirthday').css("color", "slategray");
    });
    
});
