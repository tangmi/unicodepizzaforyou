//unicode pizza for you

window.onresize = function() {
	resize();
};

window.onload = function() {
	// release the element from the .no-js class styling
	document.getElementById('thepizza').className = '';

	window.onresize();
}

function resize() {
	var thepizza = document.getElementById('thepizza');
	var viewheight = document.documentElement.clientHeight;

	var pizzaheight = viewheight / 2;
	thepizza.style.fontSize = pizzaheight + 'px';

	var paddingTop = ((viewheight - pizzaheight) / 2);
	thepizza.style.paddingTop = paddingTop + 'px';
	thepizza.style.height = (viewheight - paddingTop) + 'px';
}