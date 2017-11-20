$(function(){
	
	$("#top_center_bill_ul_li span").each(function(index,ele){
				var y = -index*44;
				$(ele).css("background-position","0 "+y+"px");
			})



	$("#top_center_bill_ul li:lt(4)").on("mouseenter",function(){
		$(this).css("borderColor","#f40");
		$(this).css("borderBottomColor","white");
		// $(this).css("backgroundColor","#f00"); 
		$(this).css("zIndex",10).siblings().css({
			zIndex: 1,
			borderColor: '#eaeaea'
		});;
		$("#top_center_bill_ul2").show();

	})


	$("#top_center_bill").on("mouseleave",function(){
				$("#top_center_bill_ul li:lt(4)").css("borderColor","#EAEAEA");
				$("#top_center_bill_ul li:lt(4)").css("zIndex",1);
				$("#top_center_bill_ul2").hide();

			})

	var index=0;
	var clickindex=0;
  			$(".top-huafei-ul-li").on("mouseover",function(){
  				clickindex=$(this).index();
  				if(clickindex!=index){
  					if(clickindex>index){
  						$(".huafei-animate .huafei-animate-li").eq(index).animate({
  						left: -280},"slow");
			  			$(".huafei-animate .huafei-animate-li").css("left","280px");
			  			$(".huafei-animate .huafei-animate-li").eq(clickindex).animate({
			  				left: 0},"slow");
			  			index=clickindex;
  					}else{
  						$(".huafei-animate .huafei-animate-li").eq(index).animate({
  						left: 280},"slow"); 				
			  			$(".huafei-animate .huafei-animate-li").css("left","-280px");
			  			$(".huafei-animate .huafei-animate-li").eq(clickindex).animate({
			  			left: 0},"slow");
			  			
  					}
  						index=clickindex;
  				}

  			})

})