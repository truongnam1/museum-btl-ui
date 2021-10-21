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
        // console.log(arrCols);
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
                                <div class="modal-body modal-body-t">
                                <div class="modal-topic">
                                <div class="row modal-topic_body">
                                        <div class="col-xl-6 modal-topic_img">
                                            <img src="${item["url_full"]}" class="modal-topic_img-image"/>
                                            <!--<model-viewer alt="" src="assets/image/scene.gltf" seamless-poster shadow-intensity="1" camera-controls class="model_viewer"></model-viewer> -->
                                        </div>
                                        
                                        <div class="col-xl-6 modal-topic_content" >
                                            <div class="row">
                                                <div class="col-xl-12 modal-topic_content-header">
                                                    <div class="modal-topic_content-icon">
                                                        <i class="fas fa-share-alt"></i>
                                                        <i class="far fa-flag"></i>
                                                    </div>
                                                    <div class="modal-topic_content-button_save">
                                                        <span>Hồ Chí Minh</span>
                                                        <i class="fas fa-chevron-down"></i>
                                                        <button class="modal-btn_save">Lưu</button>
                                                    </div>
                                                </div>
                
                                                <div class="col-xl-12 modal-topic_content-header1">
                                                    <h1>Chủ Tịch Hồ Chí Minh</h1>
                                                    <div class="modal-topic_content-header1-group">
                                                        <div class="modal-img_group">
                                                            <img src="assets/image/Bot-avt.png" alt="">
                                                            <span>Nhóm 8</span>
                                                        </div>
                                                        <button class="modal-btn_follow">Theo dõi</button>
                                                    </div>
                                                    <i class="far fa-heart">  <span> 142</span> </i>
                                                </div>
                
                                                <div class="col-xl-12 modal-topic_content-word">
                                                    <h3 style="font-weigth: 600">Tuổi trẻ</h3>
                                                    <p class="col-xl-12">Hồ Chí Minh (Chữ Nho: 胡志明; 19 tháng 5 năm 1890 – 2 tháng 9 năm 1969), tên khai sinh là Nguyễn Sinh Cung (Chữ Nho: 阮生恭), là một nhà cách mạng và chính khách người Việt Nam. Ông là người sáng lập ra Đảng Cộng sản Việt Nam, từng là Thủ tướng Việt Nam Dân chủ Cộng hòa trong những năm 1945–1955 và là Chủ tịch nước Việt Nam Dân chủ Cộng hòa từ năm 1951 đến khi qua đời. Ở Việt Nam, ông thường được gọi là Bác Hồ.</p>
                                                    <p class="col-xl-12">Trong quãng thời gian sinh sống và hoạt động trước khi lên nắm quyền, Hồ Chí Minh đã đi qua nhiều quốc gia và châu lục, ông được cho là đã sử dụng 50[2] đến 200 bí danh khác nhau.[3] Về mặt tư tưởng chính trị, Hồ Chí Minh là một người theo chủ nghĩa Marx – Lenin.</p>
                                                    <p class="col-xl-12">
                                                        Ông là lãnh đạo phong trào độc lập Việt Minh, tiến hành Cách mạng Tháng Tám năm 1945 và thành lập nước Việt Nam Dân chủ Cộng hòa sau cuộc tổng tuyển cử năm 1946. Sau chiến thắng Điện Biên Phủ năm 1954, chiến tranh Đông Dương chấm dứt. Trong giai đoạn diễn ra chiến tranh Việt Nam, Hồ Chí Minh là nhân vật chủ chốt trong hàng ngũ lãnh đạo của Việt Nam Dân chủ Cộng hòa ở miền Bắc Việt Nam và Mặt trận Dân tộc Giải phóng miền Nam Việt Nam
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                        </div>
                                </div>

                                <!-- Modal footer -->
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
        `;
        // let html = `
       
        // `
        modal.innerHTML = html;
    }

    return {
        test: test,
        renderItemHTMLCard: renderItemHTMLCard,
        renderItemHTMLModal: renderItemHTMLModal
    }
}());