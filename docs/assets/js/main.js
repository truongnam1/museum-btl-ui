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
                const url = $(this).attr('src');
                const index = url.indexOf("autoplay=0");
                if(index != -1) {
                    const newUrl = url.replace('autoplay=0', 'autoplay=1')
                    $(this).attr('src',newUrl);
                }
               
            } else {
                const url = $(this).attr('src');
                const index = url.indexOf("autoplay=1");
                if(index != -1) {
                    const newUrl = url.replace('autoplay=1', 'autoplay=0')
                    $(this).attr('src',newUrl);
                }
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
    }






});