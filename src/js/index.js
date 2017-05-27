$(function() {
    $('#tab').on('click', function(event) {
        $('#tab-div').show();
        $('#close').click(function(event) {
            $('#tab-div').hide()
        });
    })
    $.get('../data/city2.json', function(data) {
        // console.log(data.hot)
        $(data.hot).each(function(index, el) {
            // console.log(index)
            // console.log(data.hot[index])
            var span = $('<span class="spans">' + data.hot[index] + '</span>')
            $('.type').after($(span))
            $(".spans").css('padding-right', "9px").css('cursor', 'pointer')
            $('.spans').each(function(index, el) {
                $(".spans").eq(index).click(function(event) {
                    $('.city-type').html($(this).clone())
                });
            });
        })
        $(data.letter).each(function(index, el) {
            // console.log(data.letter[index])
            var spell = $('<span class="spell">' + data.letter[index].zimu + '</span>')
            $('.type1').append($(spell))
                // console.log($('.spell').eq(index))
                // console.log(data.letter[index].city)
            $('.spell').eq(index).click(function(event) {
                var city = $('<span class="city">' + data.letter[index].city + '</span>')
                $('.find').html("");
                // console.log($('.find'));
                $('.find').append($(city));
                // console.log($('.city'))


            });
        });

    })

    //轮播图
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000,
        speed: 2000,
        loop: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next',
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        pagination: '.swiper-pagination',
    })



    $('#lis1').mouseover(function(event) {
        $('.hide').show()
        $('#lis1').mouseout(function(event) {
            $('.hide').hide()
        });
    });
    $('#lis2').mouseover(function(event) {
        $('.hide1').show()
        $('#lis2').mouseout(function(event) {
            $('.hide1').hide()
        });
    });
    $('#lis3').mouseover(function(event) {
        $('.hide2').show()
        $('#lis3').mouseout(function(event) {
            $('.hide2').hide()
        });
    });
    $('#lis4').mouseover(function(event) {
        $('.hide3').show()
        $('#lis4').mouseout(function(event) {
            $('.hide3').hide()
        });
    });




    $('.so1').on('click', function(event) {
        $('.tab-div').show();
        $('.close').click(function(event) {
            $('.tab-div').hide()
        });
    })
    $('.so2').on('click', function(event) {
        $('.tab-divs').show();
        $('.closes').click(function(event) {
            $('.tab-divs').hide()
        });
    })


    $.get('../data/city2.json', function(data) {
        $(data.hot).each(function(index, el) {

            var span = $('<span class="spans">' + data.hot[index] + '</span>')
            $('.type2').after($(span))
            $(".spans").css('padding-right', "9px").css('cursor', 'pointer')
            $('.spans').each(function(index, el) {
                $(".spans").eq(index).click(function(event) {
                    $('.so1').html($(this).clone())
                        // $('.so1').on('change',function(){
                        // $.get('../data/city.json', function(data) {
                    $.get('../data/city.json', function(data) {
                        // $.each(data, function(inx, el) {    
                        console.log(data)
                        var spana = $('<span class="spansa">' + data.index + '</span>')
                        $('.type2s').after($(spana))
                            // });
                            // })
                    })

                });
            });
        })
        $(data.letter).each(function(index, el) {
            var spells = $('<span class="spells">' + data.letter[index].zimu + '</span>')
            $('.type3').append($(spells))

            $('.spells').eq(index).click(function(event) {
                var city0 = $('<span class="city0">' + data.letter[index].city + '</span>')
                $('.finds').html("");

                $('.finds').append($(city0));


            });
        });

    })





    // 左侧数据栏头部
    $(".btn3 li").click(function() {
        $(this).attr("class", "teshu").siblings("li").attr("class", "");
    })


    //下面的数据
    $('.btn3 li').each(function(index, el) {
        $(this).click(function(event) {
            if (index == 0) {
                $('.shuJu').html('')
                ajax1(0, 3)
            } else if (index == 1) {
                $('.shuJu').html('')
                ajax1(4, 6)
            } else {
                $('.shuJu').html('')
                ajax1(7, 9)
            }
        });
    });

    function ajax1(a, b) {
        $('.tiao button').css('display', 'none')
        $.get('../data/1.json', function(res) {
            for (var i = a; i <= b; i++) {
                var im = res.shop_data[i].shop_ico;
                var datas1 = res.shop_data[i].shop_name;
                var datas2 = res.shop_data[i].main;
                var datas3 = res.shop_data[i].addr;
                var datas4 = res.shop_data[i].shop_visit;
                var divss = $('<div class="tiao"><p><img src=' + im + '></p><ul class="ul1"><li><a href="#">' + datas1 + '</a>店铺等级：</li><li>主营：' + datas2 + '</li><li>地址:' + datas3 + '</li></ul><ul class="ul2"><li>先行认证</li><li>同城帮认证</li><li>人气：' + datas4 + '次浏览</li></ul><button>进入店铺</button></div>')
                $('.shuJu').append(divss);

                //鼠标滑过
                $('.tiao').each(function(index, el) {
                    $('.tiao').eq(index).mouseover(function() {
                        $('.tiao button').eq(index).show()
                        $(this).css('background', '#eee')
                    })
                    $('.tiao').eq(index).mouseout(function() {
                        $('.tiao button').eq(index).hide()
                        $(this).css('background', '')

                    })
                });

            }
        });
    }
    ajax1(0, 4)

    $('.btn4 li').each(function(index, el) {
        $(this).click(function(event) {
            // console.log($(this))
            // var ax = index
            $('.btn4 li').css('background', '')
            $(this).css('background', '#fc6621')
            if (index == 0) {
                $('.shuJu').html('')
                ajax1(0, 3)
            } else if (index == 1) {
                $('.shuJu').html('')
                ajax1(4, 6)
            } else if (index == 2) {
                $('.shuJu').html('')
                ajax1(7, 9)
            } else if (index > 2) {
                $('.shuJu').html('暂无数据')
            }
        });
    });


    //右面的数据调用

    $.get('../data/1.json', function(response) {
    	// console.log(response)
    	for(var j =0; j < 5 ; j++){
    		var res1 = response.shop_data[j].shop_id;
    		console.log(res1);
                var im1 = response.shop_data[j].shop_ico;
                console.log(im1)
                var res3 = response.shop_data[j].shop_name;

    		var chan = $('<div class="tiao2"><div class="xx1">'+j+'</div><div class="xx2"><img src='+im1+'></div><div class="xx3"><a href="#">'+res3+'</a><p>'+res1+'</p></div></div>')
    		$('.you').append(chan)
    	}
    });

// 回到顶部
function db(){
    document.onscroll = function(){
        var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
        if(scrollTop>200){
            $(".hddb").show();
        }else{
            $(".hddb").hide();
        }
    }
    $(".hddb").on("click",function(){
        document.body.scrollTop = 0;
    })
}
db();


$('.de').click(function(event) {
    $('#deng').show();
    $('.close1').click(function(event) {
        $('#deng').hide();
    });


})


})
