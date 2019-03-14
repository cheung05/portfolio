$(function(){

	initial();

	// 視窗尺寸變動,進行事件判定
	$(window).resize(function(){            
		initial();
	});

	$('#menu_list').on('show.bs.collapse', function () {
		$('body').addClass('noscroll');	
	});

	$('#menu_list').on('hide.bs.collapse', function () {
	  	$('body').removeClass('noscroll');
	});

	$('.menu_lv1_drop').on('click',function(e){
		e.preventDefault();
	});


	$('.menu_list_toggle').click(function() {
		if( $(this).hasClass('open') ){
			$(this).removeClass('open');
		}
		else{
			$(this).addClass('open');
		}
	});

	$(document).click(function(event) {
		var _menu_list = $('.menu_list_toggle');
		if(!_menu_list.is(event.target) && _menu_list.has(event.target).length===0){
			$('.menu_list_toggle').removeClass('open');
		}
	});

	var menu_title = $('#lv3_menu_ul .active').children('a').text();
	$('#menu_title').text(menu_title);

});


function initial(){
	var x=window.innerWidth;

	if(x>=1025)
	{ 
		//Jason 桌機關閉手機選單
		$('.navbar-collapse').removeClass('in').attr('aria-expanded',false);
		// 取消手機版高度設定
		$('#menu-container').css('height','auto');

		$('.menu_lv2').removeAttr("style");
		$('.menu_lv1_drop').off('click.mobilemenu');

	}
	else
	{
		// 手機版
		// 取消手機版menu事件綁定
		$('.menu_lv1_drop').off('click.mobilemenu').removeClass('open');;
		$('.menu_lv2').hide();

		// 設定手機版綁定事件(手機版Lv2事件)
		$('.menu_lv1_drop').on('click.mobilemenu',function(e){
			var open = $(this).hasClass('open');
			var this_btn = $(this);

			if(open){
				this_btn.next('.menu_lv2').slideUp(400,function(){
					this_btn.removeClass('open');
				});
			}else{
				this_btn.parent('li').siblings('li').children('.menu_lv1_drop').removeClass('open').next('.menu_lv2').slideUp();
				this_btn.addClass('open').next('.menu_lv2').slideDown();
			}
		});

		var win_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		// 手機版下拉選單高度限制
		$('#menu-container').css({'max-height':win_height - 60,'height':win_height - 60});

	}
}