

			//////////淡入淡出，透明度///////
            var swiper = new Swiper('.repair', {
		        effect: 'fade',//缓慢拖动显示下一张图片
		        autoplay: 2500,    
            });
		  /////////////划过显示隐藏//////////////
          $('.show').find('li').hide();          
          $('.huaguo li').on('mouseover',function(){
          	  var i = $(this).index();
          	  console.log(i)
              $('.show').find('li').hide();
          	  $('.show').find('li').eq(i).show();
          });
          ///////////////////轮播二////////////////////
          var mySwiper = new Swiper('.r-click-lunbo',{
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
			})
          /////////////////////电脑修复////////////////////
          $('.c-tools ul li div').each(function(index) {
			$(this).on('mouseover', function () {//划入
				$('.c-tools ul li div').css("background-position-y","0");//初始样式
				$('.c-tools ul li div').next().css('color','#000');//初始样式
				$(this).css("background-position-y","-100px");
				$(this).next().css('color','#009FEE');				
			});
		});
          ///////////////////////边框改变////////////////////
          $('.r-prob ul li').on('mouseover', function () {
          	 $('.r-prob ul li').css('border',"1px solid #ccc");
          	$(this).css('border',"1px solid #009FEE");
          })
		
	
