var mySwiper = new Swiper('.banner111',{
effect : 'fade',
autoplay : 2000,
})



// tab切换
$(".middle dl").on("mouseenter",function(){
	console.log($(this).index());
	$(".jiantou").show();
	var n = $(this).index();
	$(".jiantou div img").css("left",(n*135+43)+"px");
	$(".yinc").show();
	$(".yinc2 div").eq(n).css("display","block").siblings().css("display","none");
})

// 底部切换图片
// 左侧按钮
$(".kuai .left").on("click",function(){
	$(".div1 h3").html("邮寄维修很安全");
	$(".bao").animate({
		marginLeft:0+"px"
	},500,"linear");
})
// 右侧按钮
$(".kuai .right").on("click",function(){
	$(".div1 h3").html("上门维修很快捷");
	$(".bao").animate({
		marginLeft:-950+"px"
	},500,"linear");
})
