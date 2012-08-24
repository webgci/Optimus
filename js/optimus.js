/********************************************************************

Project: Optimus
Last Updated: 
Version: 0.2
Author: Paulo Henrique Pires -> about.me/paulohp
			 
******************************************************************* */

function equalHeight(group) {
	var tallest = 0;
	group.each(function() { 
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}
jQuery(document).ready(function() {
	equalHeight(jQuery(".optimus-equal"));
});
jQuery(window).resize(function() {
	equalHeight(jQuery(".optimus-equal"));
});

