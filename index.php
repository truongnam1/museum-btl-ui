<!doctype html>
<html lang="en">
<?php
// echo "chua include";
require_once('../lib/functions.php');


$d = initializeApp('streamline');
$ni = sizeof($d['items']);
$arrIdItem = array($ni);
$arrItem = [];

for ($i = 0; $i < $ni; $i++) {
    $itemid = $d['items'][$i];
    $idata     = fetchItemData($itemid);
    array_push($arrItem, $idata);
}

 //echo "<pre>";
 //print_r($d);
 //echo "</pre>";
// $arrJsonItem = [];

$strArrItem = "";
foreach ($arrItem as $item) {
    $item = '{' .
        '"path" : ' . '"' . $item["path"] . '",' . "\n" .
        '"title" : ' . '`' . $item["title"] . '`,' . "\n" .
        '"desc" : ' . '`' . $item["desc"] . '`,' . "\n" .
        '"date" : ' . '"' . $item["date"] . '",' . "\n" .
        '"url_full" : ' . '"' . $item["url_full"] . '",' . "\n" .
        '"url_thumb" : ' . '"' . $item["url_thumb"] . '",' . "\n" .
        '},';
    array_push($arrJsonItem, $item);
    $strArrItem .= $item;
}
// echo "da include";

// die();
?>
<head>
    <title><?php echo $d["title"]; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"> -->

    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam:ital,wght@0,100;0,300;0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"> />

    <!-- themefy icon -->
    <link rel="stylesheet" href="assets/css/themify/themify-icons.css">
    <link rel="stylesheet" href="assets/css/themify/ie7/ie7.css">


    <!-- customs -->
    <link rel="stylesheet" href="assets/css/base.css">
    <link rel="stylesheet" href="assets/css/app.css">

    <link rel="stylesheet" href="assets/css/compoment/card.css">
    <link rel="stylesheet" href="assets/css/compoment/navbar-category.css">

    <!-- modal -->
    <!-- <link rel="stylesheet" href="assets//css//compoment//modal.css"> -->
    <link rel="stylesheet" href="./assets/css/modal2.css">

    <!-- zoom2 -->
    <link rel="stylesheet" href="./assets/css/compoment/zoom.css">
	<script>
        let arrItem = {
            "images": [
                <?php
                echo $strArrItem;
                ?>
            ]
        }
    </script>


</head>

<body>
    <!-- <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
            <a class="navbar-brand font-weight-bolder mr-3" href="index.html"><img src="assets/image/logo.png"></a>
            <button class="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsDefault">
                <ul class="navbar-nav mr-auto align-items-center">
                    <form class="bd-search hidden-sm-down" id="header-search-form">
                        <input type="text" class="form-control border-0 font-weight-bold" id="search-input" placeholder="Tìm kiếm..." autocomplete="off">
                        <div class="dropdown-menu bd-search-results" id="search-results">
                        </div>
                    </form>
                </ul>
            </div>
        </nav>
    </header> -->

    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
            <a class="navbar-brand font-weight-bolder mr-3" href="index.html"><img src="assets/image/logoo.png" style="
                max-height: 60px;"></a>
            <!-- <button class="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> -->

            <div class="collapse navbar-collapse" id="navbarsDefault">
                <ul class="navbar-nav mr-auto align-items-center">
                    <!-- <form class="bd-search hidden-sm-down" id="header-search-form">
                        <input type="text" class="form-control border-0 font-weight-bold" id="search-input" placeholder="Tìm kiếm..." autocomplete="off">
                        <div class="dropdown-menu bd-search-results" id="search-results">
                        </div>
                    </form> -->

                    <li>
                        <h4><?php  echo $d["title"]; ?></h4>
                        <p><strong>Tác giả:</strong> <i style="
                            font-size: 0.9rem;
                        "><?php  echo $d["author"] ?></i></p>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <div class="container">

        <div class="main">
            <!-- navbar category -->
            

            <!-- item -->
            <section>
                <div class="card-columns d-flex">
                    <div class="row" id="data_fetch">
                        <div class="col-sm-12 col-md-6 col-lg-3" id="column1">
                        </div>

                        <div class="col-sm-12 col-md-6 col-lg-3" id="column2">
                        </div>

                        <div class="col-sm-12 col-md-6 col-lg-3" id="column3">
                        </div>

                        <div class="col-sm-12 col-md-6 col-lg-3" id="column4">
                        </div>
                    </div>

                </div>

            </section>

            <section>
                <div class="guide fixed-bottom rounded-circle shadow-lg ml-auto mr-2 mb-3">
                    <div class="guide_image-bg" id="guide_image-bg-1">
                        <i class="fas fa-question guide_image-bg-icon"></i>
                    </div>

                    <div class="toast guide__show" data-autohide="false" id="toast-show-guide">
                        <div class="toast-header" id="header-guide-show">
                            <strong class="mr-auto guide__show-title">Đến trung tâm trợ giúp</strong>

                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" id="btn-close-guide">&times;</button>
                        </div>
                        <div class="toast-body guide__show-content">
                            <ul class="guide__show-list-content">
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông tin</a></li>
                                <li class="guide__show-content-item"><a href="">Thông aaaaaaaaaaaaaaaaaaatin</a></li>





                            </ul>
                        </div>
                    </div>

                </div>
            </section>

        </div>

        <!-- modal -->
        <section>
            <div class="container">
                <!-- The Modal -->
                <div class="modal" id="myModal">
                    <div class="modal-dialog" id="main-myModal" index-data="1">

                    </div>
                </div>

            </div>
        </section>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	    <script src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>


    <script src="./assets/js/main.js"></script>
    <script src="./assets/js/navbar-category.js"></script>
    <script src="./assets/js/DataMuseum.js"></script>
    <script src="https://cdnout.com/is-in-viewport"></script>

    <!-- modal -->
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    <script src="./assets/js/okzoom-1.0.min.js"></script>
    <script src="./assets/js/modal.js"></script>

    <!-- zoom2 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/2.0.2/js/bootstrap-transition.js"></script>
    <script src="./assets/js/zoom2.js"></script>

    <!-- đoạn script này sẽ do php render từ data trealet ra -->

    <script>
        let column1 = document.getElementById('column1');
        let column2 = document.getElementById('column2');
        let column3 = document.getElementById('column3');
        let column4 = document.getElementById('column4');

        let modal = document.getElementById('myModal');

        let cols = {
            col1: column1,
            col2: column2,
            col3: column3,
            col4: column4,
        }

        DataMuseum.renderItemHTMLCard(cols, arrItem.images);



        function clickCard(idItem) {
            console.log('click card ' + idItem);
            // $('#cardYTB-DwyzrcRw0EI')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            DataMuseum.renderItemHTMLModal(modal, idItem, arrItem.images);
            $(document).ready(function() {
                $('img.modal-topic_img-image').okzoom({
                    width: 200,
                    height: 200,
                    scaleWidth: 800,
                    round: true,
                    background: "#fff",
                    // backgroundRepeat: "repeat",
                    shadow: "0 0 5px #000",
                    border: "1px solid black"
                });

                $('#data_fetch video').each(function() {

                    $(this)[0].pause();

                })

                $('iframe').each(function() {
                    if ($(this).is(":in-viewport")) {
                        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                    }
                })


                $('#myModal').on('hidden.bs.modal', function() {
                    $('video').each(function() {
                        if ($(this).is(":in-viewport")) {
                            $(this)[0].play();
                        } else {
                            $(this)[0].pause();
                        }

                        $('#myModal video').each(function() {
                            $(this)[0].pause();
                        })


                    })

                    $('iframe').each(function() {
                        if ($(this).is(":in-viewport")) {
                            $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                        }
                    })
                })
            })


        }

        function clickControlSlide(control) {
            // $('#ok-lorgnette').css()
            $("#ok-lorgnette").css("display", "none");
            var index = parseInt($("#main-myModal").attr("index-data"));
            if (arrItem && arrItem.images.length > 1 && isNumber(index)) {
                console.log("click control\n" + "index : " + index);
                console.log("control:" + control);
                DataMuseum.controlSlideItem(modal, index, arrItem.images, control);
            } else {
                console.log("loi j do ve control");
            }

            $('img.modal-topic_img-image').okzoom({
                width: 200,
                height: 200,
                scaleWidth: 800,
                round: true,
                background: "#fff",
                // backgroundRepeat: "repeat",
                shadow: "0 0 5px #000",
                border: "1px solid black"
            });



        }

        var isNumber = function isNumber(value) {
            return typeof value === 'number' && isFinite(value);
        }

        document.onkeyup = function(e) {
            if ($("#myModal").hasClass("modal") && $("#myModal").hasClass("show")) {
                if (event.key == "ArrowRight") {
                    clickControlSlide("next");
                    console.log("phải");
                } else if (event.key == "ArrowLeft") {
                    clickControlSlide("pre");
                    console.log("trái");

                }
            }
            console.log(e);
        }
    </script>

    <script async src="https://www.youtube.com/iframe_api"></script>
    <script>
        // function onYouTubeIframeAPIReady() {
        //     var player;
        //     player = new YT.Player('muteYouTubeVideoPlayer', {
        //         videoId: 'Ex1RWBVZWpk', // YouTube Video ID
        //         // width: 500, // Player width (in px)
        //         // height: 316, // Player height (in px)
        //         playerVars: {
        //             autoplay: 1, // Auto-play the video on load
        //             controls: 1, // Show pause/play buttons in player
        //             showinfo: 1, // Hide the video title
        //             modestbranding: 1, // Hide the Youtube Logo
        //             loop: 1, // Run the video in a loop
        //             fs: 0, // Hide the full screen button
        //             cc_load_policy: 0, // Hide closed captions
        //             iv_load_policy: 3, // Hide the Video Annotations
        //             autohide: 0 // Hide video controls when playing
        //         },
        //         events: {
        //             onReady: function(e) {
        //                 // e.target.mute();
        //             }
        //         }
        //     });
        // }

        // Written by @labnol
    </script>

</body>

</html>