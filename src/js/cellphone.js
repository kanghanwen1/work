$(function() {
    $('.c-tab div').each(function(index, el) {
        $('.c-tab div').eq(index).click(function(event) {
            $('.c-tab div').css('background', "")
            $(this).css('background', "blue")
        });
    });
})
