$(function(){
	//tab
	var hash = window.location.hash;
	hash && $('#pieline_content_tab a[href="' + hash + '"]').tab('show');

	var first_tab = $('#pieline_content_tab li').first().children('a').attr('href');
	if(typeof(first_tab) != 'undefined' && hash.length == 0){
		$('#pieline_content_tab a[href="' + first_tab + '"]').tab('show');
	}
	
	$('#pieline_content_tab a').click(function() {
		if(history.replaceState) {
		    history.replaceState(null, null, this.hash);
		}
		else {
		    window.location.hash = this.hash;
		}
	});
});
