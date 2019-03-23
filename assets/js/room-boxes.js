$(document).ready(function() {
    $('.work-block').each(function(i) {
        $(this).on('click', function(e) {
            var clickedType = $(this).data("type");

            var mapFrame = document.getElementById("mapframe");

            mapFrame.contentWindow.postMessage(clickedType, "*");
        })
    })
})