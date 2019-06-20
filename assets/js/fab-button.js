document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.fixed-action-btn');
	var instances = M.FloatingActionButton.init();
});

// Or with jQuery

$(document).ready(function(){
	$('.fixed-action-btn').floatingActionButton();
});
// var instance = M.FloatingActionButton.getInstance($(".fixed-action-btn"));

//  jQuery Method Calls
// 	You can still use the old jQuery plugin method calls.
// 	But you won't be able to access instance properties.

// $('.fixed-action-btn').floatingActionButton('instance.open();');
// $('.fixed-action-btn').floatingActionButton('instance.close();');
