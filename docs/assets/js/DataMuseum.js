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
            var html = `
            <div class="card card-pin shadow-lg card-lg" index-data="${indexItem}"  onclick="clickCard(${indexItem})" data-toggle="modal" data-target="#myModal">
                                <div class="card-img">
                                    <img class="card-img" src="${data[indexItem]["url_full"]}" alt="Card image">
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
        console.log(arrCols);
        // console.log(cols);
        cols.col1.innerHTML = arrCols[0];
        cols.col2.innerHTML = arrCols[1];
        cols.col3.innerHTML = arrCols[2];
        cols.col4.innerHTML = arrCols[3];

    }

    this.renderItemHTMLModal = function(modal, idItem, data) {
        var item = data[idItem];
        let html = `
        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <!-- Modal Header -->
                                <div class="modal-header">
                                    <h4 class="modal-title">${item["title"]}</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>

                                <!-- Modal body -->
                                <div class="modal-body">
                                <div class="image"><img class="card-img" style="object-fit: none;" src="${item["url_full"]}" alt="Card image"> </div>
                                ${item["desc"]}
                                </div>

                                <!-- Modal footer -->
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
        `;
        modal.innerHTML = html;
    }

    return {
        test: test,
        renderItemHTMLCard: renderItemHTMLCard,
        renderItemHTMLModal: renderItemHTMLModal
    }
}());