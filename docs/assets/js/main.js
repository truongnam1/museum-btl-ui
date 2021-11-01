$(document).ready(function() {
    // bật, tắt guide
    $toastShow = $('#toast-show-guide');
    $("#guide_image-bg-1").click(
        function() {
            console.log($toastShow.attr("data-autohide"));
            if ($toastShow.attr("data-autohide") == 'false' &&
                !$toastShow.hasClass('hide') && !$toastShow.hasClass('show')) {
                $('#toast-show-guide').toast("show");
                console.log("show 1");
            } else if ($toastShow.hasClass('hide')) {
                $('#toast-show-guide').toast("show");
                console.log("show 2");

            } else {
                $('#toast-show-guide').toast("hide");
                console.log("show 3");

            }
        }
    )

    // thả tim cho card
    // $(".user-like i").click(function(index) {
    //     console.log("tim")
    //     $iconElement = $(index.target);
    //     $iconElement.toggleClass(["fas", "far", "user-like__liked", "user-like__unlike"]);
    // });
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
            // console.log("zooom");
            $('#save-modal').click(function() {
                html2canvas(document.querySelector("#main-myModal")).then(canvas => {
                    // document.body.appendChild(canvas)

                    var dataURL = canvas.toDataURL("image/png");
                    // console.log(dataURL);
                    var elementA = document.createElement("a");
                    elementA.download = '';
                    elementA.href = dataURL;
                    elementA.click()
                    console.log(elementA);
                });
                console.log('caven');
            });

            $('#btn-share-modal').click(function() {
                console.log('click btn share');
                document.querySelector('#modal-share .overlay').style.display = "block";

            });

        }
        // console.log("hhhhhhhhhhhhhhhhhhh");
    }


});