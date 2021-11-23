$(document).ready(function() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "1500",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    $('img.modal-topic_img-image').okzoom({
        width: 200,
        height: 200,
        scaleWidth: 800,
        round: true,
        background: "#fff",
        backgroundRepeat: "no-repeat",
        shadow: "0 0 3px #000",
        border: "1px solid black"
    });

    function createModalItemParams() {
        const urlParams = new URLSearchParams(window.location.search);
        var id = parseInt(urlParams.get('item'));
        if (Number.isInteger(id)) {
            var indexTopic = null;
            var indexItem = null;


            for (const key in arrItem.topics) {
                console.log('key', key);
                indexItem = arrItem.topics[key].items.findIndex(function(item) {
                    return item.id === id;
                })
                console.log('indexItem', indexItem);

                if (Number.isInteger(indexItem) && indexItem >= 0) {
                    indexTopic = parseInt(key);
                    break;
                }
            }

        }


        if (Number.isInteger(indexItem) && indexItem >= 0) {
            console.log('indexItem', indexItem);
            console.log('indexTopic', indexTopic);
            console.log(`modal`, modal);
            try {
                DataMuseum.renderItemHTMLModal(modal, indexItem, arrItem.topics[indexTopic], indexTopic);
                $('#myModal').modal('show');
            } catch (error) {
                console.log('loi', error);
            }
        }
    }
    createModalItemParams();
})

function clickSaveModal() {
    var modal = document.querySelector("#main-myModal .modal-content");
    var modalContent = modal.querySelector('.modal-content-custom-text');
    console.log(modal);
    let modalClone = modal.cloneNode(true);
    modalClone.querySelector('.modal-content-custom-text').style.cssText += 'max-height: fit-content;';
    modalContent.style.cssText += 'max-height: fit-content;';
    createImageModal(modal);
    modalContent.style.cssText = modalContent.style.cssText.replace('max-height: fit-content;', '');
    console.log('cavan');
    toastr.info('Đang tạo ảnh')

}

function createImageModal(modal) {
    html2canvas(modal).then(canvas => {
        var dataURL = canvas.toDataURL("image/png");
        // console.log(dataURL);
        var elementA = document.createElement("a");
        elementA.download = '';
        elementA.href = dataURL;
        elementA.click();
        // console.log(elementA);
        toastr.success('Tạo ảnh thành công');
    });
}

// copy link share
function copyLinkShare() {
    /* Get the text field */
    var copyText = document.getElementById("input-link-share");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    console.log("Copied the text: " + copyText.value);

    var html = `Sao chép thành công`;
    const newSpan = document.createElement("span");
    newSpan.innerHTML = html;
    newSpan.setAttribute('style', 'color: #fff;background-color: #000;opacity: 0.8;padding: 0.5rem;border-radius: 0.25rem;font-size: 0.9rem;position: absolute;z-index: 2000;left: 45%; margin-top: 2px');
    document.querySelector('#share-modal .content-share-modal').appendChild(newSpan);
    setTimeout(function() {
        newSpan.remove();
    }, 1500)

}

function overlayModal() {
    var overlay = document.querySelector('#modal-share .overlay').style.display = "none";
    $('#modal-share').modal('toggle');
}


function clickCard(indexItem, indexTopic) {
    console.log('click card ' + indexItem);
    // console.log('topic', arrItem.topics[indexTopic]);
    // $('#cardYTB-DwyzrcRw0EI')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    DataMuseum.renderItemHTMLModal(modal, indexItem, arrItem.topics[indexTopic], indexTopic);
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
    var indexTopic = parseInt($("#main-myModal").attr("index-topic"));
    // console.log(`indexTopic`, indexTopic);
    // console.log(arrItem.topics[indexTopic].items);

    if (arrItem && arrItem.topics[indexTopic].items.length > 1) {
        console.log("click control\n" + "index : " + index);
        console.log("control:" + control);
        DataMuseum.controlSlideItem(modal, index, arrItem.topics[indexTopic], control);
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

    const turnOffShareModal = $(".modal-backdrop.fade");
    if (turnOffShareModal.hasClass('show')) turnOffShareModal.remove()


}

const handleCloseShareModal = () => {
    $('#modal-share').removeClass('show')
    $(".modal-backdrop.fade").remove();
    this.overlayModal();

}

var isNumber = function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

document.onkeyup = function(e) {
    if ($("#myModal").hasClass("modal") && $("#myModal").hasClass("show")) {
        if (e.key == "ArrowRight") {
            clickControlSlide("next");
            console.log("phải");
        } else if (e.key == "ArrowLeft") {
            clickControlSlide("pre");
            console.log("trái");
        }
    }
    console.log(e);
}