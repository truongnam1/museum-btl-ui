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
            let choiceURLFull = "";
            let urlFoot = data[indexItem]["url_full"].split('.')[2];
            if (urlFoot == "png" || urlFoot == "jpeg" || urlFoot == "jpg") choiceURLFull = `<img src="${data[indexItem]["url_full"]}" class="card-img" alt="Card image"/>`
            else if (urlFoot == "gltf") {
                choiceURLFull = `<model-viewer alt="" src="${data[indexItem]["url_full"]}" seamless-poster shadow-intensity="1" camera-controls  class="card-img"></model-viewer>`
            } else {
                choiceURLFull = `
                <video preload="none" autoplay loop class="card-img">
                    <source src="${data[indexItem]["url_full"]}" type="video/mp4">
                </video>`
            }
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

    this.renderItemHTMLModal = function(modal, idItem, data) {
        var item = data[idItem];

        let choiceURLFull = "";
        let urlFoot = item["url_full"].split('.')[2];
        if (urlFoot == "png" || urlFoot == "jpeg" || urlFoot == "jpg") choiceURLFull = `<img src="${item["url_full"]}" class="modal-topic_img-image"/>`
        else if (urlFoot == "gltf") {
            choiceURLFull = `<model-viewer alt="" src="${item["url_full"]}" seamless-poster shadow-intensity="1" camera-controls class="model_viewer"></model-viewer>`
        } else {
            choiceURLFull = `
        <video preload="none" autoplay loop class="modal-topic_img-image">
            <source src="${item["url_full"]}" type="video/mp4">
        </video>
        `
        }
        let html = `

        <div class="modal-dialog modal-lg" id="main-myModal" index-data="${idItem}">
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
                        <h3 class="title-text">Chủ Tịch Hồ Chí Minh</h3>
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
                        Hồ Chí Minh (Chữ Nho: 胡志明; 19 tháng 5 năm 1890 – 2 tháng 9 năm 1969)
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

    return {
        test: test,
        renderItemHTMLCard: renderItemHTMLCard,
        renderItemHTMLModal: renderItemHTMLModal,
        controlSlideItem: controlSlideItem
    }
}());