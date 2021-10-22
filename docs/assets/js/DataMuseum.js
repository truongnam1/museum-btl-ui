window.DataMuseum = (function() {
    this.test = function(data) {
        console.log(data);
        data.innerHTML = "<h1>day la nam</h1>";
    }

    this.renderItemHTMLCard = function(cols, data) {
        var arrCols = [];
        arrCols[0] = "";
        arrCols[1] = "";
        arrCols[2] = "";
        arrCols[3] = "";

        for (const indexItem in data) {
            // console.log(data[indexItem]);
            let choiceURLFull = extUrl(data[indexItem]["url_full"], "card");

            var html = `
            <div class="card card-pin shadow-lg card-lg" index-data="${indexItem}"  onclick="clickCard(${indexItem})" data-toggle="modal" data-target="#myModal">
                                <div class="card-img">
                                    ${choiceURLFull}
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
                                    <h5 class="card-title title title-card-museum-footer">${data[indexItem]["title"]}</h5>
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
            `;

            arrCols[indexItem % 4] += html;
        }
        // console.log(arrCols);
        // console.log(cols);
        cols.col1.innerHTML = arrCols[0];
        cols.col2.innerHTML = arrCols[1];
        cols.col3.innerHTML = arrCols[2];
        cols.col4.innerHTML = arrCols[3];

    }

    function extUrl(url, code = "card") {
        let sUrl = url.split('.');
        let ext = sUrl[sUrl.length - 1].toUpperCase();
        var html = "";

        if (ext == 'GIF' || ext == 'JPEG' || ext == 'JPG' || ext == 'PNG' || ext == 'TIF' || ext == 'TIFF') {

            switch (code) {
                case 'card':
                    html = `<img src="${url}" class="card-img" alt="Card image"/>`;
                    break;
                case 'modal':
                    html = `
                    <img src="${url}" class="modal-topic_img-image" data-action="zoom" />
                            `;
                    break;
                default:
                    break;
            }
        } else if (ext == "MP4") {
            switch (code) {
                case 'card':
                    html = `
                    <video autoplay loop class="card-img">
                        <source src="${url}" type="video/mp4">
                    </video>
                    `;
                    break;
                case 'modal':
                    html = `
                        <video controls >
                        <source src="${url}" type="video/mp4">
                    </video>
                            `;
                    break;
                default:
                    break;
            }
        } else if (ext == "YTB") {
            let arrPath = url.split('/');
            let nameYTB = arrPath[arrPath.length - 1].split(".");
            // console.log("nameYTB: ");
            // console.log(nameYTB);
            let idYTB = nameYTB[0];
            switch (code) {
                case 'card':
                    html = `
                    <iframe id="cardYTB-${idYTB}" class="mw-100" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/${idYTB}?mute=1&autoplay=1&controls=0&showinfo=0&modestbranding=1&loop=1&fs=0&cc_load_policy=0&iv_load_policy=3&autohide=0&enablejsapi=1&widgetid=1"></iframe>
                    `;
                    break;
                case 'modal':
                    html = `
                    <iframe id="modalYTB-${idYTB}" class="modal-topic_img-image" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="560" height="316" src="https://www.youtube.com/embed/${idYTB}?autoplay=0&controls=1&showinfo=1&modestbranding=1&loop=1&fs=0&cc_load_policy=0&iv_load_policy=3&autohide=0&enablejsapi=1&widgetid=1"></iframe>
                    `;
                    break;
                default:
                    break;
            }
        } else if (ext == "GLTF") {
            switch (code) {
                case 'card':
                    html = `
                    <model-viewer alt="" src="${url}" seamless-poster shadow-intensity="1" camera-controls  class="card-img"></model-viewer>
                    `;
                    break;
                case 'modal':
                    html = `
                    <model-viewer alt="" src="${url}" seamless-poster shadow-intensity="1" camera-controls class="model_viewer modal-topic_img-image"></model-viewer>
                            `;
                    break;
                default:
                    break;
            }
        }
        return html;
    }


    this.renderItemHTMLModal = function(modal, idItem, data) {
        var item = data[idItem];
        console.log("this is modal123");
        let choiceURLFull = extUrl(item["url_full"], "modal");

        let html = `

        <div class="modal-dialog modal-lg modal-dialog-centered" id="main-myModal" index-data="${idItem}">
        <div class="modal-content modal-content-custom">
        <!-- bắt đầu sửa modal từ trong này....................... -->

        <div class="row">
            <div class="col-lg-6 modal-content-custom-media">
                ${choiceURLFull}
            </div>
            <div class="col-lg-6 modal-content-custom-text">
                <div class="modal-header-custom">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="item-action">
                            <span class="item-action__item rounded-circle">
                                <i class="ti-share-alt"></i>
                            </span>
                            <span class="item-action__item rounded-circle">
                                <i class="ti-flag-alt"></i>
                            </span>
                        </div>

                        <div class="d-flex align-items-center">
                            <div class="category-item pr-1">
                                <span class="category-item__category-name">Hồ Chí Minh</span>
                                <i class="ti-angle-double-down category-item__category-icon"></i>
                            </div>
                            <div class="card-item-top__save-card">
                                <button class="btn-musesum btn-musesum--primary-save"><span>Lưu</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <div class="">
                                <a href="#">abc.com</a>
                            </div>
                            <div class="user-like d-flex align-items-center">
                                <i class="fas fa-heart pr-1 user-like_icon user-like__liked show"></i>
                                <span class="user-like__amount-like">100</span>
                            </div>
                        </div>
                        <h3 class="title-text">${item["title"]}</h3>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="pr-2 user-card d-flex align-items-center">
                                <!-- <img src="assets/image/Bot-avt.png" class="user-card__avata-user rounded-circle" alt=""> -->
                                <div class="user-card__avata-user rounded-circle"></div>
                                <span class="pl-1 user-card__name-user">Nhóm 8</span>
                            </div>
                            <button class="btn-musesum btn-musesum--primary">Theo dõi</button>
                        </div>
                    </div>
                </div>
                <div class="modal-body-custom">
                    <p class="text-content">
                    ${item["desc"]}
                    </p>

                </div>
            </div>
        </div>

    </div>
    <div class="control-slide control-slide--previous" onclick="clickControlSlide('pre')"><i class="fas fa-chevron-left"></i></div>
    <div class="control-slide control-slide--next" onclick="clickControlSlide('next')"><i class="fas fa-chevron-right"></i></div>
                        </div>
        `;
        // let html = `

        // `
        modal.innerHTML = html;
    }

    this.controlSlideItem = function(modal, indexCurrent, data, control) {
        var lengthArr = data.length;
        console.log("control slide");
        // console.log(data);
        console.log("indexCurrent: " + indexCurrent);
        // console.log("control: " + control);

        if (control == "next" && data) {
            var indexNext;
            if (indexCurrent != 0) {
                indexNext = (indexCurrent + 1) % lengthArr;
            } else {
                indexNext = 1;
            }

            this.renderItemHTMLModal(modal, indexNext, data);
        } else if (control == "pre" && data) {
            var indexPre;

            if (indexCurrent != 0) {
                indexPre = (indexCurrent - 1) % lengthArr;
            } else {
                indexPre = lengthArr - 1;
            }

            this.renderItemHTMLModal(modal, indexPre, data);

        }
    }

    // function checkType(url) {
    //     let arrPathUrl = url.split('.')[2];
    //     if (arrPathUrl[]) {

    //     }
    // }

    return {
        test: test,
        renderItemHTMLCard: renderItemHTMLCard,
        renderItemHTMLModal: renderItemHTMLModal,
        controlSlideItem: controlSlideItem
    }
}());