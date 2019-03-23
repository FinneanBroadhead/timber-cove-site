$(document).ready(function() {
    $('.work-block').each(function(i) {
        $(this).on('click', function(e) {
            var clickedType = $(this).data("type");

            var mapFrame = document.getElementById("mapframe");

            console.log("clicked " + clickedType);

            mapFrame.contentWindow.postMessage(clickedType, "*");
        })
    })
})