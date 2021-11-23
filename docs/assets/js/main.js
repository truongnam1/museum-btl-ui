$(document).ready(function() {
    // bật, tắt guide
    $(window).scroll(function() {
        $('video').each(function() {
            if ($(this).is(":in-viewport")) {
                this.play();
            } else {
                this.pause();
            }
        })

        $('iframe').each(function() {

            if ($(this).is(":in-viewport")) {

                $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            } else {

                $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            }
        })
    })

    $("body video").each(function() {
        this.muted = true;
    })

    // xoá data modal để tắt tiếng
    document.onclick = function(e) {
        if ($("#myModal").hasClass("modal") && !$("#myModal").hasClass("show")) {
            console.log("modal mo");
            document.querySelector("#main-myModal").innerHTML = "";
        }
        if ($("#myModal").hasClass("modal") && $("#myModal").hasClass("show")) {
            $('#btn-share-modal').click(function() {
                console.log('click btn share');
                document.querySelector('#modal-share .overlay').style.display = "block";

            });
        }
        // console.log("hhhhhhhhhhhhhhhhhhh");
    }

    // $('.container-test-color input[name=color-body]').on('input', testColorBody);
    // $('.container-test-color input[name=color-card]').on('input', testColorCard);
    // $('.container-test-color input[name=color-text-title-card]').on('input', testColorTextTitleCard);
    // $('.container-test-color input[name=color-text-title-list-card]').on('input', testColorTextTitleListCard);


});


function testColorBody(e) {
    var bgColorBody = $('.container-test-color input[name=color-body]').val();
    // console.log(bgColorBody);
    $("body").css("background-color", bgColorBody);
}

function testColorCard() {
    var bgColorCard = $('.container-test-color input[name=color-card]').val();
    // console.log(bgColorBody);
    $(".card-pin").css("background-color", bgColorCard);
}

function testColorTextTitleCard() {
    var color = $('.container-test-color input[name=color-text-title-card]').val();
    // console.log(bgColorBody);
    $(".title-card-museum-footer").css("color", color);
}

function testColorTextTitleListCard() {
    var color = $('.container-test-color input[name=color-text-title-list-card]').val();
    // console.log(bgColorBody);
    $(".title-list-card").css("color", color);
}