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
    $(".user-like i").click(function(index) {

        $iconElement = $(index.target);
        $iconElement.toggleClass(["fas", "far", "user-like__liked", "user-like__unlike"]);
    });


});