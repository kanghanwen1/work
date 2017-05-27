//轮播图
$(function() {

    //第一个轮播图

    var mySwiper = new Swiper('.banner', {
        autoplay: 1000,
        speed: 2000,
        loop: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next',
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        pagination: '.dian',
    })

    //第二个轮播图

    var swiper = new Swiper('.banner1', {
        // pagination: '.swiper-pagination',
        prevButton: '.left1',
        nextButton: '.right1',
        slidesPerView: 4,
        centeredSlides: false,
        paginationClickable: true,
        spaceBetween: 30,
        // grabCursor: true  //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
    });


    //第三个轮播图
    var mySwiper = new Swiper('.banner22', {
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: false,
        //  prevButton: '.left2',
        // nextButton: '.right2',
        coverflow: {
            rotate: 5,
            stretch: 0,
            depth: 0,
            modifier: 2,
            slideShadows: true
        }

    })



    //内容效果
    //数据调用
    $.get('../data/6.json', function(data) {
        // console.log(data.result.flash_list[2].price)
        var Length = data.result.flash_list
        $(Length).each(function(index) {
            // console.log(index)
            // console.log(el)
            var prices = Length[index].price;
            var imgss = Length[index].old;
            var title = Length[index].title;
            var subhead = Length[index].subhead;
            var discount = Length[index].discount;
            var com_price = Length[index].com_price;
            var product_name = Length[index].product_name;
            // console.log(imgss)
            var mians = $("<div class='dange'><img src=" + imgss + "><h4>" + title + "</h4><p class='p2'>" + subhead + "</p><p class='p3'><span class='spans'>" + prices + "</span><span class='pp'><span class='spans1'>" + discount + "</span><span class='spans2'>" + com_price + "</span></span></p><p class='p4'>" + product_name + "</p></div>")

            $(".main").append(mians)

        });
    });

    $.get('../data/7.json', function(data) {
        // console.log(data.result.product_list[1].thum_img)
        var result = data.result.product_list
        $(result).each(function(index, el) {
            console.log(index)
            var img1 = result[index].mid;
            var wen = result[index].title;
            var xin = result[index].explain
            var pricesa = result[index].price;
            var point = result[index].selling_point
            console.log(img1)
            var lis = $('<li><img src=' + img1 + '><h4>' + wen + '</h4><p class="re-p">' + xin + '</p><p class="re-p1">' + pricesa + '</p><p class="re-p2">' + point + '</p></li>')
            $('.re ul').append(lis)
        });
    });

       //竖向滚动
    // ////jQ动画写法
    function move() {
        $(".imgs-11").delay(1000) //延时
        $(".imgs-11").animate({

            top: "-100px",
        }, 2000, function() {
            $(".div-bao").first().appendTo($(".imgs-11"))
            $(".imgs-11").css("top", 0);


            move()
        })
    }
    move()


    //点取数据
    $.get('../data/8.json', function(data) {
        console.log(data.result)
        $(data.result).each(function(index, el) {
            var da = data.result;
            var da1 = da[index].comment_content;
            var da1mobile = da[index].comment_mobile;
            var da1img = da[index].head_img
            // console.log(da1)
            var mains11 = $('<div class="div-bao"><img src='+da1img+'><div class="ppp"><p>'+da1mobile+'</p><p>'+da1+'</p></div></div>')
            $('.imgs-11').append(mains11)
        });
    });


})
