	//简单封装数据请求
	function myajax(requestUrl,cb){
		$.ajax({
			url: requestUrl,
			type: 'GET',
			dataType: 'json',
		})
			.done(function(data) {//数据请求成功之后0.1,
				cb(data);
			})	
		}
		//
		var HOST="data/";

		//创建的时候去绑定事件 

		//屏幕右上角




		// 阿里APP
		myajax(HOST+"ali-app.txt",function(json){
			var address=json.result["1164532"].result[0];
			var $span=$("<span></span>");
			$span.addClass('top_center_app_span1');
			$span.html(address.name);
			
			var $a=$("<a href=''>更多▶</a>")
			$a.addClass('top_center_app_span2');
			$a.attr("href",address.more);

			$("#top_center_app").prepend($a);
			$("#top_center_app").prepend($span);

			var address2=json.result["1164533"].result;
			$.each(address2,function(index,value){
				var $li=$("<li></li>");
				var $img=$("<img/>");
				$img.addClass('top_center_app_img');
				$img.attr("src",value.img);
				$li.append($img);
				$("#top_center_app_ul").append($li);
			})
		})	



		
		//有好货 
		myajax(HOST+"hasgoods.txt",function(json){
			
			var arry=json.result["1164535"].result;
			// console.log(arry);
			$.each(arry,function(index, value) {
				var $li=$("<li></li>");
				$li.addClass('center-goods-li');
				var imgUrl="http:"+value.pic;
				$img=$("<img src="+imgUrl+" alt=''/>")
				$img.addClass('center-goods-li-img');
				// var $title=value.title;
				var $span=$("<span></span>");
				$span.html(value.title);
				$span.addClass('center-goods-li-span');
				// var $content=value.content;
				
				$p=$("<p></p>");
				$p.html(value.content);
				$p.addClass('center-goods-li-p');
				$i=$("<i></i>");
				var $zanTotal=$("<i class='center-goods-li-i'>"+value.zanTotal+"人说好+" +"</i>");
				$li.append($img);
				$li.append($span);
				$li.append($p);
				$li.append($zanTotal);
				$(".center-goods-ul").append($li);

			});
		})

		// 每日好店
		myajax(HOST+"everyday-shop.txt",function(json){
			var result=json.result[1164537].result;
			// console.log(result);
			$.each(result, function(index, value) {
				$li=$("<li></li>");
				$li.addClass('center-r-content');
				$span=$("<span></span>");
				$span.addClass('center-r-content-text-span');
				$span.append(value.categoryName);
				// console.log(value.categoryName);
				$i=$("<i></i>");
				$i.addClass('center-r-content-text-i');
				$i.html("暂无店铺评价");
				$div1=$("<div1></div1>");
				$div1.addClass('center-r-img-left fl');
				var imgUrl1="http:"+value.pic1;
				$img1=$("<img src="+imgUrl1+" alt=''/>")
				$img1.addClass('center-r-content-img-89');
				var imgUrl2="http:"+value.pic2;
				$img2=$("<img src="+imgUrl2+" alt=''/>")
				$img2.addClass('center-r-content-img-89');
				$div1.append($img1).append($img2);

				$div2=$("<div2></div2>");
				$div2.addClass('center-r-img-rihgt fl');
				var imgUrl3="http:"+value.picThumb;
				$img3=$("<img src="+imgUrl3+" alt=''/>")
				$img3.addClass('center-r-content-img-180');
				$div2.append($img3);
				$li.append($span).append($i).append($div1).append($div2)
				$(".center-right-box-ul").append($li);
				
			});		
})

		// // 品质生活

		myajax(HOST+"quality-life.txt",function(json){
			$.each($(".center-quality-content1"),function(index,element) {
				var data1 = json[$(element).data("dataid")];//22752

	
		
				$(".center-content1-top-img").eq(index).attr("src",data1.value.head[0].img);
				$(".center-quality-content1-2-a img").eq(index).attr("src",data1.value.blockitem[0].img);
				$(".center-quality-content1-2-a span").eq(index).html(data1.value.blockitem[0].sub);
				$(".center-quality-content1-2-a i").eq(index).html(data1.value.blockitem[0].name);

				$(".center-quality-content1-2-a2 img").eq(index).attr("src",data1.value.blockitem[1].img);
				$(".center-quality-content1-2-a2 span").eq(index).html(data1.value.blockitem[1].sub);
				$(".center-quality-content1-2-a2 i").eq(index).html(data1.value.blockitem[1].name);


				$(".center-img-100-100").eq(index).attr("src",data1.value.blockitem[1].img);
				$(".center-img-100-100").eq(index).attr("src",data1.value.blockitem[0].img);
				$(".center-quality-content1-4 span").eq(index).eq(index).html(data1.value.blockitem[1].text);


				
			});

		})




		//猜你喜欢
		myajax(HOST+"guess-favourite.txt",function(json){
			var result=json.result;
			$.each(result,function(index, value) {
				// console.log(result);
				$li=$("<li></li>");
				$li.addClass('bottom-cainismallbox');
				var imgUrl1="http:"+value.pic;
				$img1=$("<img src="+imgUrl1+" alt=''/>")
				$p=$("<p></p>");
				// console.log(value.itemName);
				$p.html(value.itemName) ;
				$span=$("<span></span>");
				$span.html("$"+value.promotionPrice);
				$div=$("<div>找相似</div>");
				$div.addClass('bottom-cainismallbox-found');

				$li.append($img1).append($p).append($span).append($div);
				$(".bottom-cainibox").append($li);

				// $li.hover(function() {
				// 	$(this).css(
				// 		"borderColor", "#f40");
				// 	$(".bottom-cainismallbox-found").eq(index).show();
				// }, function() {
				// 	$(this).css(
				// 		"borderColor", "#fff");
				// 	$(".bottom-cainismallbox-found").eq(index).hide();

				// });	
			$li.hover(function() {
				$(this).css("border","1px solid #f40");
				$(".bottom-cainismallbox-found").eq(index).show();
			}, function() {	
				$(this).css("border","1px solid #fff");
				$(".bottom-cainismallbox-found").eq(index).hide();
			});

		});
})

			// 必买清单
			myajax(HOST+"must-buy.txt",function(json){
				var result=json.result["1164539"].result;
				$.each(result,function(index, value) {
					$div=$("<div></div>");
					$div.addClass('bottom-bimaibox');

					$h3=$("<h3></h3>");
					$h3.html(value.title);

					$p1=$("<p></p>");
					$p1.html(value.description);

				 // console.log(value.itemList);
				 $ul=$("<ul></ul>");
				 $ul.addClass('bottom-bimaibigbox ');

				 $.each(value.itemList,function(index1, value1) {
					 // console.log(result.itemList);
					 $li1=$("<li></li>");
					// console.log(value.pic);
					var imgUrl1="http:"+value1.pic;
					$img1=$("<img src="+imgUrl1+" alt=''/>");
					$li1.append($img1);	
					$ul.append($li1);		
				});

				 $p2=$("<p></p>");
				 $p2.html(value.itemCount);
				 $div.append($h3);
				 $div.append($p1);
				 $div.append($ul);
				 $div.append($p2);
				 $("#bottom_bimai").append($div);
				});

			})

			// 淘宝直播

			myajax(HOST+"taobao-live.txt",function(json){
				var arry=json.result['1164538'].result;		
				// $.each(arry,function(index, value) {
					$a=$("<a href=''></a>");
					$li=$("<li></li>");
					$img=$("<img src='' alt='' />");
					$img.addClass('bottom-bigimgcode');
					$img.attr("src",arry[0].data.coverImg);
					$span=$("<span></span>");
			// console.log(arry[0].data.viewCount);
			$span.html(arry[0].data.accountDO.accountNick);
			$li.append($img).append($span);
			$li2=$("<li></li>");
			$img2=$("<img src='' alt='' />");
			$img2.addClass('bottom-bigimg');
			$img2.attr("src",arry[0].data.accountDO.headImg);
			$li2.append($img2);
			$a.append($li).append($li2);
			// console.log(arry[0].data.accountDO.headImg);

			$li3=$("<li></li>");
			$li3.addClass('bottom-live');
			$span2=$("<span>直播</span>");
			$span2.addClass('bottom-icon');
			$span3=$("<span></span>");
			$span3.addClass('bottom-view');
			$span3.html(arry[0].data.viewCount+"观看");
			$li3.append($span2).append($span3);
			$(".bottom_zhiboleft").append($a).append($li3);
			$(".bottom_zhiboleft").hover(function() {
				$(this).css("opacity",0.5);
			}, function() {
				$(this).css("opacity",1);
			});

			$.each(arry,function(index, value) {
				if(index>0){
					$ul=$("<ul></ul>");
					$ul.addClass('bottom-zhiboright');

					$a=$("<a href=''></a>");
					$li1=$("<li></li>");
					$img1=$("<img src='' alt='' />");
					$img1.addClass('bottom-smallimgcode');
					// console.log(value.data.coverImg);
					$img1.attr("src",value.data.coverImg);
					$span1=$("<span></span>");
					$span1.html(value.data.accountDO.accountNick);
					$li1.append($img1).append($span1);

					$li2=$("<li></li>");
					$img2=$("<img src='' alt='' />");
					$img2.addClass('bottom-smallimg');
					$img2.attr("src",value.data.accountDO.headImg);
					$li2.append($img2);
					$a.append($li1).append($li2);

					$li3=$("<li></li>");
					$li3.addClass('bottom-live');
					$span2=$("<span>直播</span>");
					$span2.addClass('bottom-icon');
					
					$span3=$("<span></span>");
					$span3.addClass('bottom-view');
					$span3.html(value.data.viewCount+"观看");
					$li3.append($span2).append($span3);
					$ul.append($a).append($li3);
					$(".bottom-right-8video").append($ul);


					$ul.hover(function() {
						$(this).css("opacity",0.5);
					}, function() {
						$(this).css("opacity",1);
					});
				}
				
			});


})

		//热卖单品
		//PROMOTEPRICE  价格
		//SELL 销量
		//STATICSCORE  评价
		//GRADE   收藏
		//DESC  描述
		//TBGOODSLINK  图片


		myajax(HOST+"hot-sell.txt",function(json){
			var arry=json.data[0].adList;
			// console.log(arry);
			$.each(arry,function(index, value) {

				if(index%3==0){
					$ul=$("<ul></ul>");
					$ul.addClass('bottom-bigbox');
				// console.log($ul);
				$li=$("<li></li>");
				$li.addClass('bottom-left');
				$img=$("<img src='' alt='' />");
				$img.attr("src",value.TBGOODSLINK);
				
				$div1=$("<div></div>");
				$div1.addClass('bottom-leftpri');
				$a1=$("<a href=''></a>");
				$a1.html("￥"+value.PROMOTEPRICE);
				$div1.append($a1);

				$div2=$("<div></div>");
				$div2.addClass('bottom-leftpostage');
				$a2=$("<a href=''>包邮</a>");
				$div2.append($a2);
				$a3=$("<a href=''></a>");
				$a3.html("月销售"+value.SELL+"笔");

				$p=$("<p></p>");
				$p.html(value.title);

				$span1=$("<span></span>");
				$span1.html("评价"+value.STATICSCORE);
				$span2=$("<span></span>");
				$span2.html("收藏"+value.GRADE);
				$div3=$("<div></div>");
				$div3.addClass('hot-sale-cover-200');

				$li.append($img).append($div1).append($div2).append($a3).append($p).append($span1).append($span2).append($div3);
				$ul.append($li);
				$(".bottom-box-3ul").append($ul);

				$li.hover(function() {
					$(this).css("borderColor","#f40");
					$("li").eq(1).show();

				}, function() {
					$(this).css("borderColor"," #e8e8e8");
					$("li").eq(1).hide();
				});

				// console.log($ul);

			}else{

				//第二个li和第三个
				$li2=$("<li></li>");
				$li2.addClass('bottom-rtop');
				$img2=$("<img src='' alt='' />");
				$img2.attr("src",value.TBGOODSLINK);
				$div21=$("<div></div>");
				$div21.addClass('bottom-rpri');
				$a21=$("<a href=''></a>");
				$a21.html("￥"+value.PROMOTEPRICE);
				$a22=$("<a href=''></a>");
				$a22.html("月销售"+value.SELL+"笔");
				$div22=$("<div></div>");
				$div22.addClass('hot-sale-cover-140')

				$div21.append($a21);
				$li2.append($img2);
				$li2.append($div21);
				$li2.append($a22);
				$li2.append($div22);
				$ul.append($li2);

				
				$li2.hover(function() {
					$(this).css("borderColor","#f40");
					$(".hot-sale-cover-140").eq(index-1).show();
				}, function() {
					$(this).css("borderColor"," #e8e8e8");
					$(".hot-sale-cover-140").eq(index-1).hide();
				});

			}

		});

})

	$(function(){
	//搜索悬停
		//获取右侧按钮悬浮到顶部的距离
		var offsetTop=$("#menu").offset().top;	
		var offsetTop2=$("#top1_center_select_bottom").offset().top;	
		
		$(window).on("scroll",function(){
			if($(window).scrollTop()>offsetTop2){
				// 比较滚动的高度与固定搜索框的高度
				$("#hide-title").show();
			}else{
				$("#hide-title").hide();
			}
			//右侧按钮切换成固定定位的滚动距离
			var scrollofset=offsetTop-$("#hide-title").outerHeight();
			if($(window).scrollTop()>scrollofset){
				$("#menu").css({
					position: 'fixed',
					top: $("#hide-title").outerHeight()+"px",
					right:'0'
				});

			}else{
				$("#menu").css({
					position: 'absolute',
					right: '0',
					top: offsetTop+"px"
				});
			}


			// 需要放在窗口滚动事件了
				//实现窗口滚动.对应按钮的背景颜色变化
				var scrolls=$(".left-scroll");
				var scrollIndex=-1;
			// console.log(scrolls);
			for(var i=0;i<scrolls.length;i++){

				if($(window).scrollTop()<scrolls.eq(i).offset().top+scrolls.eq(i).outerHeight()-$("#hide-title").outerHeight()){
					scrollIndex=i;
					
					// $("#menu>div").eq(scrollIndex).css("background-color","#f40").siblings().css("background-color","#fff");
					// console.log(i);

					break;
				};
			}
			if(scrollIndex!=-1){
				$("#menu>div").eq(scrollIndex).css("background-color","#f40").siblings().css("background-color","#fff");
				// console.log(scrollIndex);
			}

		})





		//点击右侧按钮实现滚动的对应的位置
		$("#menu>div").on("click",function(){
			var index=$(this).index();
			if(index<6){
				var scrollOffset=$(".left-scroll").eq(index).offset().top-$("#hide-title").outerHeight();
				$("body").animate({scrollTop:scrollOffset},"slow");
				$(this).css("background-color","#f40").siblings().css("background-color","#fff");

			}
			if(index==6){
				$("body").animate({scrollTop:0},"slow");

			}
		})

	})


		// 实惠专业户
		// productName : "淘抢购"
		// startTimeDesc : "抢购进行中"
		// startTimeDesc : "抢购进行中"
		// soldCount : 1874
		// picUrl : "//img.
		// itemName : "夏季一片式性感聚拢无钢圈文胸"
		// 	actPrice : 39.9

		myajax(HOST+"cheap-households.txt",function(json){
			var arry=json.result;
			// console.log(arry);
			$.each(arry, function(index, value) {
				if(index%4==0){
					$bigdiv=$("<div></div>");
					$bigdiv.addClass('center-cheap-block fl');
					$h3=$("<h3></h3>");

					$a=$("<a href=''></a>");
					$img1=$("<img src='' alt'' />");
					$img1.addClass('center-content1-top-img');
					$img1.attr("src","images/TB1EcL_LVXXXXatXVXXXXXXXXXX-126-36.png_110x110.jpg");
				$a.append($img1);	// $img2=$("<img src='' alt='' />");

				$i=$("<i></i>");
				$i.addClass('center-tb-icon')

				$span1=$("<span></span>");
				$span1.addClass('center-a-all');
				$img2=$("<img src='' alt='' />");
				$img2.attr("src","images/TB15gJ2LXXXXXXpXpXXXXXXXXXX-101-101.png_.webp");
				$i2=$("<i>手机淘宝扫码</i>");
				$i2.addClass('fl');
				$span1.append($img2).append($i2);

				$divtitle=$("<div>抢购进行中</div>");
				$divtitle.addClass('center-qging fr');

				$h3.append($a).append($i).append($span1).append($divtitle);
			//盒子的内容
			$divcontent=$("<div></div>");
			$divcontent.addClass('center-cheap-content');
			$divtext=$("<div></div>");
			$divtext.addClass('center-cheap-content-text');
			$h4=$("<h4></h4>");
			$h4.addClass('center-cheap-content-text-h4');
			$h4.html('夏季一片式性感聚拢无钢圈文胸');
			$spanprice=$("<span></span>");
			$spanprice.addClass('center-cheap-content-text-span-price');
			$spanprice.html("￥39.9");
			$i_num=$("<i></i>");
			$i_num.addClass('center-cheap-content-text-i');
			$i_num.html("已抢购10件");
			$imgpic=$("<img src='' alt='' />");
			$imgpic.addClass('center-cheap-content-90-90');
			$imgpic.attr("src","//img.alicdn.com/i2/3079786898/TB2rTKyXvHjFuJjSZFxXXX1_FXa_!!0-juitemmedia.jpg");

			$divtext.append($h4).append($spanprice).append($i_num).append($imgpic);
			$divcontent.append($divtext);
			$bigdiv.append($h3).append($divcontent);
			$(".center-cheap-people").append($bigdiv);
		}	

		else{
			$divsmall=$("<div></div>");
			$divsmall.addClass('center-cheap-block2 fl');
			$a1=$("<a href=''></a>");
			$img1=$("<img src='' alt'' />");
			$img1.addClass('center-content1-top-img');
			$img1.attr("src","images/TB1zGAfOFXXXXb6XVXXXXXXXXXX-158-36.png_110x110.jpg")
			$a1.append($img1);
			$i=$("<i></i>");
			$i.addClass('center-tb-icon')

			$span1=$("<span></span>");
			$span1.addClass('center-a-all');
			$img2=$("<img src='' alt='' />");
			$img2.attr("src","images/TB15gJ2LXXXXXXpXpXXXXXXXXXX-101-101.png_.webp");
			$i2=$("<i>手机淘宝扫码</i>");
			$i2.addClass('fl');
			$span1.append($img2).append($i2);

			$span2=$("<span></span>");
			$span2.addClass('center-cheap-content-text-span');
			$span2.html("优质好货");

			$em=$("<em></em>");
			$em.addClass('center-cheap-content-text-em');
			$em.html("特价专区");
			$a2=$("<a href=''>全场包邮</a>");
			$a2.addClass('center-cheap-content-text-a');
			$img3=$("<img src='' alt='' />");
			$img3.addClass('center-cheap-content-90-90');
			$img3.attr("src","images/TB1yNt.SFXXXXXmapXXXXXXXXXX_!!0-tejia.jpg_120x120.jpg");

			$divsmall.append($a1).append($i).append($span1).append($span2).append($em).append($a2).append($img3);	
			$(".center-cheap-people").append($divsmall);

		}


	});
})



		//经常逛的
		// imgUrl : "//gtms04.alicdn.com/tps/i4/TB1JaLCLVXXXXcPaXXX07tlTXXX-200-200.png"
		//hotwords:热门top下的词语
		// news[0].imgUrl 最大的一张图
		// item[0].imgUrl 
		// activitya上面的两个图
		myajax(HOST+"visited.txt",function(json){
			var arry=json.result[1164438].result;
			// console.log(arry);
			$.each(arry,function(index, value) {
				// console.log(value.news[0].imgUrl);
				// console.log(value.item[0].imgUrl);

				if(index<2){

					$(".Often-visit-content-left1-100-200").eq(index).attr("src",value.activity[0].imgUrl);

					$(".Often-visit-content-left2-100-200").eq(index).attr("src",value.activity[1].imgUrl);

					$(".Often-visit-content-left>img").eq(index).attr("src",value.totalinfo[0].imgUrl);
					$(".Often-visit-content-left-180-140-img").eq(index).attr("src",value.news[0].imgUrl);
					$(".Often-visit-content-left1-136-81-img").eq(index).attr("src",value.news[1].imgUrl);
					$(".Often-visit-content-left2-136-81-img").eq(index).attr("src",value.news[2].imgUrl);


					$(".Often-visit-content-left-138-101-a1>img ").eq(index).attr("src",value.item[0].imgUrl);
					$(".Often-visit-content-left-138-101-a1>span ").eq(index).html(value.item[0].text1);
					$(".Often-visit-content-left-138-101-a1>i ").eq(index).html(value.item[0].text2);

					$(".Often-visit-content-left-138-101-a2>img").eq(index).attr("src",value.item[1].imgUrl);
					$(".Often-visit-content-left-138-101-a2>span").eq(index).html(value.item[1].text1);
					$(".Often-visit-content-left-138-101-a2>i").eq(index).html(value.item[1].text2);
					$.each(value.hotwords,function(key, value1) {
						// if(key<10){
							$a=$('<a href=""></a> ');
							$a.html(value1.text);
							$a.addClass('Often-visit-content-left-a');

							$(".Often-visit-content-left-text").eq(index).append($a);
						// }
						

					});

				}else{
					$(".Often-visit-content-left>img").eq(index).attr("src",value.totalinfo[0].imgUrl);
					$(".Often-visit-content-left2-100-200").eq(index).attr("src",value.activity[0].imgUrl);
					$(".Often-visit-content-left-138-202-img3").eq(index-2).attr("src",value.activity[1].imgUrl);
					$(".Often-visit-content-left-180-140-img").eq(index).attr("src",value.news[0].imgUrl);
					$(".Often-visit-content-left1-100-200-img").eq(index-2).attr("src",value.item[0].imgUrl);
					$(".Often-visit-content-left-100-200-100-a1").eq(index-2).html(value.item[0].text1);

					$(".Often-visit-content-left2-100-200-img").eq(index-2).attr("src",value.item[1].imgUrl);
					$(".Often-visit-content-left-100-200-100-a2").eq(index-2).html(value.item[1].text1);

					$(".Often-visit-content-left1-136-81-img").eq(index).attr("src",value.item[2].imgUrl);
					$(".Often-visit-content-left1-136-81-img").eq(index).html(value.item[2].text2);
					$(".Often-visit-content-left1-136-81-img").eq(index).html(value.item[2].text2);

					$(".Often-visit-content-left2-136-81-img").eq(index).attr("src",value.item[3].imgUrl);
					$(".Often-visit-content-left2-136-81-img").eq(index).html(value.item[3].text2);
					$(".Often-visit-content-left2-136-81-img").eq(index).html(value.item[3].text2);		
					$.each(value.hotwords,function(key, value1) {
							$a=$('<a href=""></a> ');
							$a.html(value1.text);
							$a.addClass('Often-visit-content-left-a');
							$(".Often-visit-content-left-text").eq(index).append($a);

					});
				}


			});

})
	

	//时尚爆料王
	myajax(HOST+"fashion.txt",function(json){

		$.each(json,function(index,value) {
		
			if(index%2==0){
			// if(index<2){
				$div1=$("<div></div>");
				$div1.addClass('center-fashion-content1 fl');

				$divtop=$("<div></div>");
				$divtop.addClass('center-fashion-content1-top fl');
				$a1=$("<a href=''></a> ");
				$img1=$("<img src='' alt='' />");
				$img1.addClass('center-content1-top-img');
				$img1.attr("src",value.value.head[0].img);
				$a1.append($img1);

				$i=$("<i></i>");
				$i.addClass('center-tb-icon');

				$span=$("<span></span>");
				$span.addClass('center-a-all');
				$img2=$("<img src='' alt='' />");
				$img2.addClass('center-a-all-img');
				$img2.attr("src",value.value.head[0].qr);
				$i2=$("<i>手机淘宝扫码</i>");
				$i2.addClass('fl center-a-all-i');
				$span.append($img2).append($i2);

				$divtop.append($a1).append($i).append($span);

				$divcontl=$("<div></div>");
				$divcontl.addClass('center-fashion-content1-left fl');
				$img3=$("<img src='' alt='' />");
				$img3.addClass('center-img-100-217');
				$img3.attr("src",value.value.banner[0].img);
				$span2=$("<span></span>");
				$span2.html(value.value.banner[0].text);
				$divcontl.append($img3).append($span2);



				var arry=value.value.blockitem;
				$divconr=$("<div></div>");
				$divconr.addClass('center-fashion-content1-right fr');
				$img4=$("<img src='' alt='' />");
				$img4.addClass('center-img-100-100');
				$img4.attr("src",arry[0].img);
				$span3=$("<span></span>");
				$span3.addClass('center-img-100-100-span');
				$span3.html(arry[0].text);
				$divconr.append($img4).append($span3);

				$divconr2=$("<div></div>");
				$divconr2.addClass('center-fashion-content1-right fr');
				$img5=$("<img src='' alt='' />");
				$img5.addClass('center-img-100-100');
				$img5.attr("src",arry[1].img);
				$span4=$("<span></span>");
				$span4.addClass('center-img-100-100-span');
				$span4.html(arry[1].text);
				$divconr2.append($img5).append($span4);


				$div1.append($divtop).append($divcontl).append($divconr).append($divconr2);
				$(".center-fashion").append($div1);
			}

			else{
				$div1=$("<div></div>");
				$div1.addClass('center-fashion-content1 fl');

				$divtop=$("<div></div>");
				$divtop.addClass('center-fashion-content1-top fl');
				$a1=$("<a href=''></a> ");
				$img1=$("<img src='' alt='' />");
				$img1.addClass('center-content1-top-img');
				$img1.attr("src",value.value.head[0].img);
				$a1.append($img1);

				$i=$("<i></i>");
				$i.addClass('center-tb-icon');

				$span=$("<span></span>");
				$span.addClass('center-a-all');
				$img2=$("<img src='' alt='' />");
				$img2.addClass('center-a-all-img');
				$img2.attr("src",value.value.head[0].qr);
				$i2=$("<i>手机淘宝扫码</i>");
				$i2.addClass('fl center-a-all-i');
				$span.append($img2).append($i2);

				$divtop.append($a1).append($i).append($span);
				$div1.append($divtop);
				var arry=value.value.blockitem;
				$.each(arry,function(index, value2) {
					$divconr=$("<div></div>");
					$divconr.addClass('center-fashion-content1-right fr');
					$img4=$("<img src='' alt='' />");
					$img4.addClass('center-img-100-100');
					$img4.attr("src",value2.img);
					$span3=$("<span></span>");
					$span3.addClass('center-img-100-100-span');
					$span3.html(value2.text);
					$divconr.append($img4).append($span3);
					$div1.append($divconr);
				});


				$(".center-fashion").append($div1);
			}	


		});

})
	$(function(){
				$(".Often-visit-animate1").on("mouseover",function(){
		var overTop=$(".Often-visit-content").outerHeight()-$(this).outerHeight();
		$(this).stop().animate({top: overTop+"px"},"fast");
		console.log("输出");
	})

	$(".Often-visit-animate1").on("mouseout",function(){
				//父元素的高度-自身中标题的高度
				var outTop = $(".Often-visit-content").outerHeight()-$(".Often-visit-animate1 span").outerHeight();
				$(this).stop().animate({top: outTop+"px"},"fast");
			})


				$(".Often-visit-animate2").on("mouseover",function(){
		var overTop=$(".Often-visit-content").outerHeight()-$(this).outerHeight();
		$(this).stop().animate({top: overTop+"px"},"fast");
		// console.log("输出");
	})

	$(".Often-visit-animate2").on("mouseout",function(){
				//父元素的高度-自身中标题的高度
				var outTop = $(".Often-visit-content").outerHeight()-$(".Often-visit-animate1 span").outerHeight();
				$(this).stop().animate({top: outTop+"px"},"fast");
			})




	})




  // 品质生活家





// 特色玩味控
		// $(function(){
		// 	myajax(HOST+"feature-play.txt",function(json){
		// 		$.each($(".center-feature-content1"),function(index, element) {
		// 			var data = json[$(element).data("aid")];
		// 			// console.log(data.value.head[0].img);
		// 			$("element .center-quality-content1-top a img").attr("src",data.value.head[0].img);
		// 			$(element).children("center-quality-content1-top a img").attr("src",data.value.head[0].img);
		// 		});

		// })
		// })


	$(function(){
		myajax(HOST+"feature-play.txt",function(json){

			$.each(json,function(key, value) {
				if(key!='222851'||key!='222853'){
					$div1=$("<div></div>");
					$div1.addClass('center-feature-content1 fl');
					$divcontop=$("<div></div>");
					$divcontop.addClass('center-quality-content1-top fl');
					$a1=$("<a href='' </a>");
					$img1=$("<img src='' alt='' />");
					$img1.addClass('center-content1-top-img');
					$img1.attr("src",value.value.head[0].img);
					$a1.append($img1);

					$i1=$("<i></i>");					
					$i1.addClass('center-tb-icon');

					$span=$("<span></span>");
					$span.addClass('center-a-all');
					$img2=$("<img src='' alt='' />");
					$img2.attr("src",value.value.head[0].qr);
					$i2=$("<i>手机淘宝扫码</i>");
					$i2.addClass('fl');
					$span.append($img2).append($i2);

					$divcontop.append($a1).append($i1).append($span);
					$div1.append($divcontop);

					var arry=value.value.blockitem;
					$.each(arry,function(index, value2) {
						$divcont4=$("<div></div>");
						$divcont4.addClass('center-quality-content1-4 fl');
						$img1=$("<img src='' alt='' />");
						$img1.addClass('center-img-100-100');
						$img1.attr("src",value2.img);
						$span1=$("<span></span>");
						$span1.addClass('center-img-100-100-span');
						$span1.html(value2.text);
						$divcont4.append($img1).append($span1);
						$div1.append($divcont4);
					});
					$(".center-feature-play").append($div1);
				}else{
					$div1=$("<div></div>");
					$div1.addClass('center-feature-content1 fl');
					$divcontop=$("<div></div>");
					$divcontop.addClass('center-quality-content1-top fl');
					$a1=$("<a href='' </a>");
					$img1=$("<img src='' alt=''/>");
					$img1.addClass('center-content1-top-img');
					$img1.attr("src",value.value.head[0].img);
					$a1.append($img1);

					$i1=$("<i></i>");
					$i1.addClass('center-tb-icon');

					$span=$("<span></span>");
					$span.addClass('center-a-all');
					$img2=$("<img src='' alt='' />");
					$img2.attr("src",value.value.head[0].qr);
					$i2=$("<i>手机淘宝扫码</i>");
					$i2.addClass('fl');
					$span.append($img2).append($i2);

					$divcontop.append($a1).append($i1).append($span);
					$div1.append($divcontop);

					$.each(value.value.blockitem,function(index,value2) {
						$divcont2=$("<div></div>");
						$divcont2.addClass('center-quality-content1-2 fl');
						$a1=$("<a href='' </a>");
						$a1.addClass('center-quality-content1-2-a');
						$img1=$("<img src='' alt='' />");
						$img1.addClass('center-quality-content1-2-img');
						$img1.attr("src",value2.img);
						
						$span=$("<span></span>");
						$span.addClass('center-quality-content1-2-span');
						$span.html(value2.name);

						$i=("<i></i>");
						$i.addClass('center-quality-content1-2-i');
						$span.html(value2.sub);
						$a1.append($img1).append($span).append($i);
						$divcont2.append($a1);
					});
					console.log(value.value.blocklinks);
					$.each(value.value.blocklinks,function(index,value3) {
						$divcont3=$("<div></div>");
						$divcont3.addClass('center-quality-content1-3');
						$a1=$("<a href='' </a>");
						$a1.addClass('center-8a-text');
						$a1.html(value3.text);
						console.log(value3.text);
						$divcont3.append($a1);
					});
					$div1.append($divcont2).append($divcont3);
					$(".center-feature-play").append($div1);
				}



			});

})
})


//主题市场
$(function(){


		myajax(HOST+"theme-market.txt",function(json){
		$("#top_center_select li").hover(function() {
				
				var data1 = json[$(".top_center_select_li span a").eq(0+$(this).index()*3).data("dataid")];
				var data2 = json[$(".top_center_select_li span a").eq(1+$(this).index()*3).data("dataid")];
				var data3 = json[$(".top_center_select_li span a").eq(2+$(this).index()*3).data("dataid")];

				$(".top_center_box1_left_span_div img").eq(0).attr("src",data1.value.head[0].logo);
				$(".top_center_box1_left_span_div img").eq(1).attr("src",data2.value.head[0].logo);
				$(".top_center_box1_left_span_div img").eq(2).attr("src",data3.value.head[0].logo);

				$(".top_center_box1_left_span_div span").eq(0).html(data1.value.head[0].name);
				$(".top_center_box1_left_span_div span").eq(1).html(data2.value.head[0].name);
				$(".top_center_box1_left_span_div span").eq(2).html(data3.value.head[0].name);

				$(".top_center_box1_left_span_div2").eq(0).html("更多").attr("href",data1.value.head[0].more);
				$(".top_center_box1_left_span_div2").eq(1).html("更多").attr("href",data2.value.head[0].more);
				$(".top_center_box1_left_span_div2").eq(2).html("更多").attr("href",data3.value.head[0].more);

				$(".top_center_box1_left_ul").empty();
				$.each(data1.value.list,function(index1, value1) {
					$li=$("<li></li>");
					$li.addClass('top_center_box1_left_ul_li');
					// $a=$("<a href='' </a>");
					$li.html(value1.name);
					// $li.append($a);
					$(".top_center_box1_left_ul").eq(0).append($li);
					
				});
				$.each(data2.value.list,function(index2, value2) {
					$li=$("<li></li>");
					$li.addClass('top_center_box1_left_ul_li');
					// $a=$("<a href='' </a>");
					$li.html(value2.name);
					// $li.append($a);
					$(".top_center_box1_left_ul").eq(1).append($li);
				});	
				$.each(data3.value.list,function(index3, value3) {
					$li=$("<li></li>");
					$li.addClass('top_center_box1_left_ul_li');
					// $a=$("<a href='' </a>");
					$li.html(value3.name);
						// $li.append($a);
					$(".top_center_box1_left_ul").eq(2).append($li);
				});

				// console.log($a1);

				// $(".top_center_box1_left_ul_li").eq(0).append($h4).appned($a1);
				// $(".top_center_box1_left_ul_li").eq(1).append($h5).appned($a2);
				// $(".top_center_box1_left_ul_li").eq(2).append($h6).appned($a3);
			

				// $(".top_center_box1_left_ul_li").eq(0).html(data1.value.head[0].name);
				// $(".top_center_box1_left_ul_li").eq(1).html(data2.value.head[0].name);
				// $(".top_center_box1_left_ul_li").eq(2).html(data3.value.head[0].name);
				
				$("#top_center_box1").show();
			})
				$("#top_center_box1").on("mouseleave",function(){
				$("#top_center_box1").hide();
			})
	// function() {
	// 		$("#top_center_box1").hide();
	// 	});
				})
			})
				
  
  // banner

  $(function(){
  		var index=0;
  		$("#top_center_promo_btn2").on("click",function(){
  			// console.log("按了");
  			ringht_btn();

  		})

  		function ringht_btn(){
  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").eq(index).stop().animate({
  				left: -520},"slow");
  			index++;
  			index%=$("#top_center_promo_ul1 .top_center_promo_ul1_li").length;
  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").css("left","520px");
  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").eq(index).stop().animate({
  				left: 0},"slow");

  			$(".top_center_promo_ul2_li").eq(index).addClass('choose').siblings().removeClass('choose');
  		}

  			$("#top_center_promo_btn1").on("click",function(){
  			// console.log("按了");
  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").eq(index).stop().animate({
  				left: 520},"slow");
  			index--;
  			if(index<0){
  				index=$("#top_center_promo_ul1 .top_center_promo_ul1_li").length-1;
  			}
  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").css("left","-520px");
  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").eq(index).stop().animate({
  				left: 0},"slow");
  			$(".top_center_promo_ul2_li").eq(index).addClass('choose').siblings().removeClass('choose');

  		})
  			//设置自动播放
  			var timer = setInterval(ringht_btn,3000);
  			$("#top_center_promo").on("mouseover",function(){
  				clearInterval(timer);
  			})
  			$("#top_center_promo").on("mouseout",function(){
  				timer = setInterval(ringht_btn,3000);
  			})

  			// 小圆圈的指向
  			var clickindex=0;
  			$(".top_center_promo_ul2_li").on("click",function(){
  				clickindex=$(this).index();
  				$(this).addClass('choose').siblings().removeClass('choose');
  				if(clickindex!=index){
  					if(clickindex>index){
  						$("#top_center_promo_ul1 .top_center_promo_ul1_li").eq(index).stop().animate({
  						left: -520},"slow");
			  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").css("left","520px");
			  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").eq(clickindex).stop().animate({
			  				left: 0},"slow");
			  			index=clickindex;
  					}else{
  						$("#top_center_promo_ul1 .top_center_promo_ul1_li").eq(index).stop().animate({
  						left: 520},"slow"); 				
			  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").css("left","-520px");
			  			$("#top_center_promo_ul1 .top_center_promo_ul1_li").eq(clickindex).stop().animate({
			  			left: 0},"slow");
			  			
  					}
  					index=clickindex;
  				}

  			})


  })




	// banner2
	//轮播图2
myajax(HOST+"banner-top.txt",function(json){
	$.each(json,function(key,value){
		var index=value.data;

		if(index!=null){
			var $li=$("<li></li>");
			if(index.length==1){
				$li.addClass('one');
			}
			else if(index.length==2){
				$li.addClass('two');
			}
			else if(index.length==4){
				$li.addClass('four')
			}
			else if(index.length==5){
				$li.addClass('five');
			}
			else if(index.length==8){
				$li.addClass('eight');
			}
			else if(index.length==12){
				$li.addClass('twelve');
			}

			$.each(index,function(su,value2){
				var $img =$('<img src="" alt="" />');

				if(index.length==5){
					if(su==0){
						$img.addClass('big');
					}else{
						$img.addClass('small');
					}
				}
				if(index.length==8){
					$img.attr("src",value2.imgUrl);
				}else if(index.length==12){
					$img.attr("src",value2.img);
				}else{
					$img.attr("src",value2.content);
				}
				$li.append($img)
			})
			$(".top_center_promo2_div2").append($li);
		}
	})
	$(".top_center_promo2_div2 li:first").css("left","0");
	banner();
})


	function banner(){
			var index=0;
			// 下一张
  		$("#top_center_promo2_btn2").on("click",function(){
  			// console.log("按了");
  			ringht_btn();
  			// console.log("你好");

  		})

  		function ringht_btn(){
  			$(".top_center_promo2_div2 li").eq(index).stop().animate({
  				left: -520},"slow");
  			index++;
  			index%=$(".top_center_promo2_div2 li").length;
  			$(".top_center_promo2_div2 li").css("left","520px");
  			$(".top_center_promo2_div2 li").eq(index).stop().animate({
  				left: 0},"slow");

  			$("#top_center_promo2_ul li").eq(index).addClass('choose2').siblings().removeClass('choose2');
  		}

  			$("#top_center_promo2_btn1").on("click",function(){
  			// console.log("按了");
  			$(".top_center_promo2_div2 li").eq(index).stop().animate({
  				left: 520},"slow");
  			index--;
  			if(index<0){
  				index=$(".top_center_promo2_div2 li").length-1;
  			}
  			$(".top_center_promo2_div2 li").css("left","-520px");
  			$(".top_center_promo2_div2 li").eq(index).stop().animate({
  				left: 0},"slow");
  			$("#top_center_promo2_ul li").eq(index).addClass('choose2').siblings().removeClass('choose2');

  		})
  			//设置自动播放
  			var timer = setInterval(ringht_btn,3000);
  			$(".top_center_promo2_div2").on("mouseover",function(){
  				clearInterval(timer);
  			})
  			$(".top_center_promo2_div2").on("mouseout",function(){
  				timer = setInterval(ringht_btn,3000);
  			})

  			// 小圆圈的指向
  			var clickindex=0;
  			$(".top_center_promo2_ul_li").on("click",function(){
  				clickindex=$(this).index();
  				$(this).addClass('choose').siblings().removeClass('choose');
  				if(clickindex!=index){
  					if(clickindex>index){
  						$(".top_center_promo2_div2 li").eq(index).stop().animate({
  						left: -520},"slow");
			  			$(".top_center_promo2_div2 li").css("left","520px");
			  			$(".top_center_promo2_div2 li").eq(clickindex).stop().animate({
			  				left: 0},"slow");
			  			index=clickindex;
  					}else{
  						$(".top_center_promo2_div2 li").eq(index).stop().animate({
  						left: 520},"slow"); 				
			  			$(".top_center_promo2_div2 li").css("left","-520px");
			  			$(".top_center_promo2_div2 li").eq(clickindex).stop().animate({
			  			left: 0},"slow");
			  			index=clickindex;
  					}

  				}

  			})
	}




   // 推荐商品
   myajax(HOST+"recommend.txt",function(json){
   		var arry=json.result[0].itemList;
   		// console.log(arry);
   		$.each(arry,function(index, value) {
   			
   			$(".top_center_transition_a_img").eq(index).attr("src",value.picUrl);
   			$(".top_center_transition_a_p1").eq(index).html(value.title);
   			$(".top_center_transition_a_p2").eq(index).html(value.subtitle);
   			$(".top_center_transition_a_p3").eq(index).html(value.pop);
   		});
   })
   