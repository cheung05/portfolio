"use strict";function loadData(a,t,e,n,o){loading_show(),$.ajax({type:"GET",url:"/includes/services.php",data:"type="+t+"&id="+n+"&year="+o+"&page="+e,success:function t(e){loading_hide(),$(a).html(e)}})}function CaseDetail(a,t,e,n,o,s){loadData(t,e,n,o,s),jQuery("html,body").scrollTop($(".section-title").offset().top)}function CaseList(a,t,e,n){switch(t){case"#container1":loadData("#container1","release",n,"",e);break;case"#container3":loadData(t,"events",1,"",e)}}$(document).ready(function(){loadData("#container1","release",1,"",""),$("#tab-1").attr("data","Y"),$(".tab").on("click",function(){$("#container1").css("display","none"),$("#container2").css("display","none"),$("#container3").css("display","none"),$("#container4").css("display","none");var a="#"+$(this).attr("id"),t="",e="";switch(a){case"#tab-1":t="#container1",e="release";break;case"#tab-2":t="#container2",e="news";break;case"#tab-3":t="#container3",e="events";break;case"#tab-4":t="#container4",e="awards"}$(this).attr("data")||(loadData(t,e,1,"",""),$(a).attr("data","Y")),$(t).css("display","block")}),$(".tab__content").on("change","#select",function(){var a=$(this).val(),t="#"+$(this).parent().parent().attr("id");switch(t){case"#container1":loadData(t,"release",1,"",a);break;case"#container2":loadData(t,"news",1,"",a);break;case"#container3":loadData(t,"events",1,"",a);break;case"#container4":loadData(t,"awards",1,"",a)}}),$(".tab__content").on("click",".pagination li.active",function(){var a=$(this).attr("p"),t=$(this).attr("y"),e="#"+$(this).parent().parent().parent().attr("id");switch(e){case"#container1":loadData(e,"release",a,"",t);break;case"#container2":loadData(e,"news",a,"",t)}jQuery("html,body").scrollTop($(".section-title").offset().top)}),$(".tab__content").on("click","#go_btn",function(){var a="#"+$(this).parent().parent().attr("id"),t=parseInt($(a+" .goto").val()),e=$(this).attr("y"),n=parseInt($(a+" .total").attr("a"));if(!(0!=t&&t<=n))return alert("Enter a PAGE between 1 and "+n),$(a+" .goto").val("").focus(),!1;switch(a){case"#container1":loadData(a,"release",t,"",e);break;case"#container2":loadData(a,"news",t,"",e)}jQuery("html,body").scrollTop($(".section-title").offset().top)})});
//# sourceMappingURL=./news.js.map