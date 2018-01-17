$('#searchBox').keydown(function (){
    var searchText = $("#searchBox").val().toLowerCase();

    $(".caption").each(function () {

        var caption = $(this).attr("data-title").toLowerCase();
        console.log(caption);

        if (caption.indexOf(searchText) >= 0) {
            $(this).show()
        }
        else {
            $(this).hide()
        }
        });
    });