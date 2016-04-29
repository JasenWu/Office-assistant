// JavaScript Document

//阻止事件冒泡的通用函数
function stopBubble(e) {
    // 如果传入了事件对象，那么就是非ie浏览器
    if (e && e.stopPropagation) {
        //因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    } else {
        //否则我们使用ie的方法来取消事件冒泡
        window.event.cancelBubble = true;
    }
}

$(function(){
		//首页焦点图插件
		$(window).load(function() {
		  $('.flexslider').flexslider({
			animation: "slide"
		  });
		});
		
		//个人资料的展开与收起
		$(".user_admin_button").click(function(e){
		    $(".JS_user_info_detail").toggle();
		    stopBubble(e);
			});
		//应用导航的展开与收起
		$(".JS_show_button").click(function(e){
			$(".JS_head_bottom").toggle();		
			stopBubble(e);
			});	
        
        //编缉联系人分组弹出与收起
		$(".all_phone_person").click(function (e) {
		    $(".eidt_group_phone").toggle();
		    stopBubble(e);


		});
    
        //点击空白区域隐藏弹出层

		$("body").click(function () {
		    $(".JS_head_bottom").hide();
		    $(".JS_user_info_detail").hide();
		    $(".eidt_group_phone").hide();
		})

		//var obj = $("#page");
		//alert(obj.html());
		});