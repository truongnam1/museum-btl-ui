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
                                    <div class="img-overlay text-center">
                                        <!--<div class="d-flex card-item-top">
                                            <div class="card-item-top__category-item">
                                                <span class="category-item__category-name">Cổ vật</span>
                                                <i class="ti-angle-double-down category-item__category-icon"></i>
                                            </div>
                                            <div class="card-item-top__save-card">
                                                <button class="btn-musesum btn-musesum--primary-save"><span>Lưu</span></button>
                                            </div>
                                        </div> -->

                                        <div class="text-white w-100 h-100" ><span>Xem thêm >></span></div>
                                        
                                    </div>

                                </div>
                                <div class="card-footer card-museum-footer">
                                    <h5 class="card-title title title-card-museum-footer">${data[indexItem]["title"]}</h5>
                                    <div class="card-footer__bottom d-flex">
                                        <div class="pr-2 user-card d-flex align-items-center">
                                            <!-- <img src="assets/image/Bot-avt.png" class="user-card__avata-user rounded-circle" alt=""> -->
                                            <div class="user-card__avata-user rounded-circle"></div>
                                            <span class="pl-1 user-card__name-user">Nhóm 8</span>
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
                    <img src="${url}" class="modal-topic_img-image"/>
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
                        <video  controls >
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
                    <iframe id="cardYTB-${idYTB}" class="mw-100" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/${idYTB}?mute=1&autoplay=1&controls=0&showinfo=0&modestbranding=1&loop=1&fs=0&cc_load_policy=0&iv_load_policy=3&autohide=0&enablejsapi=1&widgetid=1&playlist=${idYTB}"></iframe>
                    `;
                    break;
                case 'modal':
                    html = `
                    <iframe id="modalYTB-${idYTB}" class="modal-topic_img-image" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="560" height="316" src="https://www.youtube.com/embed/${idYTB}?mute=0&autoplay=0&controls=1&showinfo=1&modestbranding=1&loop=1&fs=0&cc_load_policy=0&iv_load_policy=3&autohide=0&enablejsapi=1&widgetid=1"></iframe>
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
        } else if (ext == "TXT") {
            let arrPath = url.split('/');
            let name3d = arrPath[arrPath.length - 1].split(".");
            // console.log("nameYTB: ");
            // console.log(nameYTB);
            let id3d = name3d[0];

            switch (code) {
                case 'card':
                    html = `<iframe  class="w-100" height=90% title="Trống Ngọc Lũ" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
            src="https://sketchfab.com/models/${id3d}/embed"> </iframe>`;
                    break;
                case 'modal':
                    html = `<iframe style="border-radius: 12px;height: 66vh;" class="w-100" title="Trống Ngọc Lũ" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
            src="https://sketchfab.com/models/${id3d}/embed"> </iframe>`;
                    break;
                default:
                    break;
            }


        }
        return html;
    }


    this.renderItemHTMLModal = async function(modal, idItem, data) {
        var item = data[idItem];
        var urlShare = createLinkShare(item);
        console.log("this is modal123");
        let choiceURLFull = extUrl(item["url_full"], "modal");
        let html = `

        <div class="modal-dialog modal-lg modal-dialog-centered" id="main-myModal" index-data="${idItem}" style="
        overflow-y: initial !important;">
        <div class="modal-content modal-content-custom">
        <!-- bắt đầu sửa modal từ trong này....................... -->
        <div class="d-flex justify-content-end align-items-center action-top">
        <button type="button" class="close btn-close" data-dismiss="modal">×</button>
            <div class="card-item-top__save-card">
                <button class="btn-musesum btn-musesum--primary-save" id="btn-share-modal" data-toggle="modal" href="#modal-share">Chia sẻ</button>
            </div>
            <div class="card-item-top__save-card ml-1">
                <button class="btn-musesum btn-musesum--primary-save" id="save-modal">Lưu</button>
            </div>
                        
        </div>

        <div class="row">
            <div class="col-lg-6 modal-content-custom-media">
                ${choiceURLFull}
            </div>
            <div class="col-lg-6 modal-content-custom-text">
                <div class="modal-header-custom">
                    <!--<div class="d-flex justify-content-end align-items-center">
                    

                        <div class="d-flex align-items-center">
                            <div class="card-item-top__save-card">
                                <button class="btn-musesum btn-musesum--primary-save" id="btn-share-modal" data-toggle="modal" href="#modal-share">Chia sẻ</button>
                            </div>
                            <div class="card-item-top__save-card">
                                <button class="btn-musesum btn-musesum--primary-save" id="save-modal">Lưu</button>
                            </div>
                        </div>
                    </div>  -->
                    <div class="">
  
                        <h3 class="title-text">${item["title"]}</h3>
                        <div class="d-flex align-items-center">
                            <div class="pr-2 user-card d-flex align-items-center">
                                <!-- <img src="assets/image/Bot-avt.png" class="user-card__avata-user rounded-circle" alt=""> -->
                                <div class="user-card__avata-user rounded-circle"></div>
                                <span class="pl-1 user-card__name-user">Nhóm 8</span>
                            </div>
                            
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


    <div class="modal fade modal-second" id="modal-share">
                <div class="overlay" onclick="overlayModal()"></div>
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div id="share-modal">
                    
                    <div class="content-share-modal">
                    <button type="button" class="close btn-close" onclick="handleCloseShareModal()">×</button>
                        <label for="">Nhận đường liên kết để chia sẻ</label>
                        <div class="row">
                            <div class="col-md-8">
                                <input id="input-link-share" type="text" value="${urlShare}">
                            </div>
                            <div class="col-md-4 d-flex justify-content-end">
                                <button class="btn" id="btn-copy-link" onclick="copyLinkShare()">Sao chép đường liên kết</button>
                            </div>
    
                        </div>
                   
                </div>
                    </div>
                </div>
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

    function createLinkShare(item) {
        const myUrlWithParams = new URL(window.location.href);
        myUrlWithParams.searchParams.set("item", item.id);
        console.log(myUrlWithParams.href);
        return myUrlWithParams.href;
    }

    return {
        test: test,
        renderItemHTMLCard: renderItemHTMLCard,
        renderItemHTMLModal: renderItemHTMLModal,
        controlSlideItem: controlSlideItem
    }
}());