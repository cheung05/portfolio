"use strict";$(document).ready(function(){function a(a,t,c,n){$.ajax({type:"GET",url:"/includes/applicationservice.php",data:"appid="+t+"&moduleid="+c+"&tag="+n,success:function t(c){$(a).html(c),e()}})}function e(){function a(){$(".module-set .item").removeClass("blur open")}$(".module-set").each(function(){var a=$(".item",this);a.click(function(e){e.stopPropagation(),a.not(this).removeClass("open"),$(this).toggleClass("open").removeClass("blur"),a.filter(".open").length||a.removeClass("blur")})}),$(".tab-set label").click(function(){a()}),$("body").click(function(){a()})}function t(){switch(location.pathname){case"/application/reading-writing.html":$("#container-ereader").css("display","none"),$("#container-enote").css("display","none");break;case"/application/mobile-wearables.html":$("#container-wearable").css("display","none"),$("#container-phone-accessory").css("display","none");break;case"/application/electronic-shelf-label.html":$("#container-electronic-shelf-label").css("display","none");break;case"/application/industrial.html":$("#container-logistic-tag").css("display","none"),$("#container-advanced-packaging").css("display","none");break;case"/application/life-style.html":$("#container-luggage-tag").css("display","none"),$("#container-smart-card").css("display","none");break;case"/application/signage.html":$("#container-signage").css("display","none");break;case"/application/architecture.html":$("#container-architecture").css("display","none")}}function c(){switch(location.pathname){case"/application/reading-writing.html":a("#container-ereader",1,1,"ereader"),$("#tab-ereader").attr("data","Y");break;case"/application/mobile-wearables.html":a("#container-wearable",2,4,"wearable"),$("#tab-wearable").attr("data","Y");break;case"/application/electronic-shelf-label.html":a("#container-electronic-shelf-label",3,5,"electronic-shelf-label"),$("#tab-electronic-shelf-label").attr("data","Y");break;case"/application/industrial.html":a("#container-logistic-tag",4,6,"logistic-tag"),$("#tab-logistic-tag").attr("data","Y");break;case"/application/life-style.html":a("#container-luggage-tag",5,7,"luggage-tag"),$("#tab-luggage-tag").attr("data","Y");break;case"/application/signage.html":a("#container-signage",6,9,"signage"),$("#tab-signage").attr("data","Y");break;case"/application/architecture.html":a("#container-architecture",7,10,"architecture"),$("#tab-architecture").attr("data","Y")}}c(),$(".tab").on("click",function(){t();var e="#"+$(this).attr("id"),c="",n=0,i=0,r="";switch(e){case"#tab-ereader":c="#container-ereader",n=1,i=1,r="ereader";break;case"#tab-enote":c="#container-enote",n=1,i=2,r="enote";break;case"#tab-wearable":c="#container-wearable",n=2,i=4,r="wearable";break;case"#tab-phone-accessory":c="#container-phone-accessory",n=2,i=3,r="phone-accessory";break;case"#tab-electronic-shelf-label":c="#container-electronic-shelf-label",n=3,i=5,r="electronic-shelf-label";break;case"#tab-logistic-tag":c="#container-logistic-tag",n=4,i=6,r="logistic-tag";break;case"#tab-luggage-tag":c="#container-luggage-tag",n=5,i=7,r="luggage-tag";break;case"#tab-smart-card":c="#container-smart-card",n=5,i=8,r="smart-card";break;case"#tab-signage":c="#container-signage",n=6,i=9,r="signage";break;case"#tab-architecture":c="#container-architecture",n=7,i=10,r="architecture";break;case"#tab-advanced-packaging":c="#container-advanced-packaging",n=4,i=11,r="advanced-packaging"}$(this).attr("data")||(a(c,n,i,r),$(e).attr("data","Y")),$(c).css("display","block")})});
//# sourceMappingURL=./applicationinfo.js.map