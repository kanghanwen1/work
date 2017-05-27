$(function() {

        $.get('../data/9.json', function(data) {
    $('.btn').click(function(event) {
        $(this).css('color', "orange").css('border', '1px solid orange')
        $('.qita').show();

         });
            // console.log(data.result);
            var a = data.result.products[0].strategy_price
            var b = data.result.treaty_days

            for (var key1 in b) {
                // console.log(b[key1])
                var main = $('<li class="lis">' + b[key1] + ' <span>' + key1 + '(天)</span></li>')
                $('.qita ul').append(main);
            }
             

            $('.lis').each(function(index, el) {
                $('.lis').eq(index).click(function(event) {
                    $('.lis').css('color', '');
                    $(this).css('color', "orange");
                    $('.btn').html($(this).html());
                        for (var key in a) {
                        console.log(a);
                        console.log(a[key]);
					//问题 有不懂的地方	                      
                    }
                    $('.qita').hide();
            });

        });
    });
})
