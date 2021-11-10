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
});