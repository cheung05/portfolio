"use strict";function loadData(t,a,i,n,o){loading_show(),$.ajax({type:"GET",url:"/includes/services.php",data:"type="+a+"&id="+n+"&year="+o+"&page="+i,success:function a(i){loading_hide(),$(t).html(i)}})}function CaseDetail(t,a,i,n,o,c){loadData(a,i,n,o,c),jQuery("html,body").scrollTop($(".section-title").offset().top)}function CaseList(t,a,i,n){loadData(a,"activity",1,"",i)}$(document).ready(function(){$("#tab-4").on("click",function(){$(this).attr("data")||(loadData("#Activity_Content","activity",1,"",""),$(this).attr("data","Y"))}),$("#Activity_Content").on("change","#select",function(){loadData("#Activity_Content","activity",1,"",$(this).val())})});
//# sourceMappingURL=./csr.js.map