//OSCAR ARNFLO <oscar@arnflo.se> 2012
//CARAMELLA GIRLS 2012
function hover_girl(title,up) {
	if(up == 1) {
		$("[id$=_"+title+"]").animate({top: '-=10'},'slow');
	}else if(up==0) {
		$("[id$=_"+title+"]").animate({top: '+=10'},'slow');
	}
}

function change_girls(to) {
	
	girls = to.replace('to_','.');
	$(".switch").fadeOut(1500);
	$(".girls").fadeOut(1500);
	$(girls).fadeIn(1500);

	if(to == "to_youngsters") {
		$("#to_kawaii").fadeIn(1500);
	}else{
		$("#to_youngsters").fadeIn(1500);
	}

}

$(document).ready(function() {
	$("[class$=hitbox]").hover(
		function() { hover_girl($(this).attr('name'),1); },
		function() { hover_girl($(this).attr('name'),0); }
	);

	$("[class$=switch]").hover(
		function() {
			var id = $(this).attr('id');
			$(this).attr('src','buttons/switch_'+id+'_hover.png');
		},function() {
			var id = $(this).attr('id');
			$(this).attr('src','buttons/switch_'+id+'.png');
		}
	);

	$("[class$=switch]").click(function() {
		change_girls($(this).attr('id'));
	});

	$("#fb_like").click(function() { window.open("http://www.facebook.com/CaramellaGirls.Fanpage"); });
});