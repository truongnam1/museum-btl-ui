jQuery(document).ready(function($) {

    $('#checkbox').change(function() {
        setInterval(function() {
            moveRight();
        }, 3000);
    });

    var slideCount = $('#navbar-category ul li').length;
    var slideWidth = $('#navbar-category ul li').width();
    var slideHeight = $('#navbar-category ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    // $('#navbar-category').css({
    //     width: slideWidth,
    //     height: slideHeight
    // });

    // $('#navbar-category ul').css({
    //     width: sliderUlWidth,
    //     marginLeft: -slideWidth
    // });

    $('#navbar-category ul li:last-child').prependTo('#navbar-category ul');

    function moveLeft() {
        $('#navbar-category ul').animate({
            left: +slideWidth
        }, 200, function() {
            $('#navbar-category ul li:last-child').prependTo('#navbar-category ul');
            $('#navbar-category ul').css('left', '');
        });
    };

    function moveRight() {
        $('#navbar-category ul').animate({
            left: -slideWidth
        }, 200, function() {
            $('#navbar-category ul li:first-child').appendTo('#navbar-category ul');
            $('#navbar-category ul').css('left', '');
        });
    };

    $('a.nav-control__prev').click(function() {
        moveLeft();
    });

    $('a.nav-control__next').click(function() {
        moveRight();
    });

});