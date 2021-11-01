$(document).ready(function() {
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

            var index = arrItem.images.findIndex(function(item) {
                return item.id === id;
            })
            console.log(index);

            if (Number.isInteger(index)) {
                console.log(`modal`, modal);
                try {
                    DataMuseum.renderItemHTMLModal(modal, index, arrItem.images);
                    $('#myModal').modal('show');
                } catch (error) {
                    console.log('loi', error);
                }
            }
        }
    }
    createModalItemParams();

})