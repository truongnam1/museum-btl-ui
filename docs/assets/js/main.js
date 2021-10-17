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

    /// fetch data
    let fetch_data = document.getElementById('data_fetch');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            let a = "";
            data.map((value) => {
                let b = `
                <div class="col-sm-12 col-md-6 col-lg-3">
                <div class="card card-pin shadow-lg card-lg">
                    <div class="card-img">
                        <img class="card-img" src="assets/image/image-item-test/item-17.jpg" alt="Card image">
                        <div class="img-overlay">
                            <div class="d-flex card-item-top">
                                <div class="card-item-top__category-item">
                                    <span class="category-item__category-name">Cổ vật</span>
                                    <i class="ti-angle-double-down category-item__category-icon"></i>
                                </div>
                                <div class="card-item-top__save-card">
                                    <button class="btn-musesum btn-musesum--primary-save"><span>Lưu</span></button>
                                </div>
                            </div>
                            <div class="d-flex card-item-bottom">
                                <div class="card-item-bottom_link">
                                    <a href="#">abc.com</a>
                                </div>
                                <div class="card-item-bottom_action">
                                    <span class="card-item-bottom_action-item rounded-circle">
                                        <i class="fas fa-share-alt-square"></i>
                                    </span>
                                    <span class="card-item-bottom_action-item rounded-circle">
                                        <i class="far fa-flag"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <div class="card-footer card-museum-footer">
                        <h5 class="card-title title title-card-museum-footer">Đây là tên của hiện vật nó rất là dài nên cho hiện thị 2 dòng thôi</h5>
                        <div class="card-footer__bottom d-flex justify-content-between">
                            <div class="pr-2 user-card d-flex align-items-center">
                                <!-- <img src="assets/image/Bot-avt.png" class="user-card__avata-user rounded-circle" alt=""> -->
                                <div class="user-card__avata-user rounded-circle"></div>
                                <span class="pl-1 user-card__name-user">Nhóm 8 có thể tên cũng dài nên cho 1 dòng thôi</span>
                            </div>
                            <div class="user-like d-flex align-items-center">
                                <i class="fas fa-heart pr-1 user-like_icon user-like__liked show"></i>
                                <span class="user-like__amount-like">100</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-pin shadow-lg card-lg">
                    <div class="card-img">
                        <img class="card-img" src="assets/image/image-item-test/item-18.jpg" alt="Card image">
                        <div class="img-overlay">
                            <div class="d-flex card-item-top">
                                <div class="card-item-top__category-item">
                                    <span class="category-item__category-name">Cổ vật</span>
                                    <i class="ti-angle-double-down category-item__category-icon"></i>
                                </div>
                                <div class="card-item-top__save-card">
                                    <button class="btn-musesum btn-musesum--primary-save"><span>Lưu</span></button>
                                </div>
                            </div>
                            <div class="d-flex card-item-bottom">
                                <div class="card-item-bottom_link">
                                    <a href="#">abc.com</a>
                                </div>
                                <div class="card-item-bottom_action">
                                    <span class="card-item-bottom_action-item rounded-circle">
                                        <i class="fas fa-share-alt-square"></i>
                                    </span>
                                    <span class="card-item-bottom_action-item rounded-circle">
                                        <i class="far fa-flag"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <div class="card-footer card-museum-footer">
                        <h5 class="card-title title title-card-museum-footer">${value.title}</h5>
                        <div class="card-footer__bottom d-flex justify-content-between">
                            <div class="pr-2 user-card d-flex align-items-center">
                                <!-- <img src="assets/image/Bot-avt.png" class="user-card__avata-user rounded-circle" alt=""> -->
                                <div class="user-card__avata-user rounded-circle"></div>
                                <span class="pl-1 user-card__name-user">Nhóm 8 có thể tên cũng dài nên cho 1 dòng thôi</span>
                            </div>
                            <div class="user-like d-flex align-items-center">
                                <i class="fas fa-heart pr-1 user-like_icon user-like__liked show"></i>
                                <span class="user-like__amount-like">${value.userId}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            `
            a+=b;
            })
            
            fetch_data.innerHTML = a;
        });

});