//unicode pizza for you

window.onresize = function() {
	resize();
};

contentLoaded(window, function() {
	// release the element from the .no-js class styling
	document.getElementById('thepizza').className = '';
	window.onresize();
});

function resize() {
	var thepizza = document.getElementById('thepizza');
	var viewheight = document.documentElement.clientHeight;

	var pizzaheight = viewheight / 2;
	thepizza.style.fontSize = pizzaheight + 'px';

	var paddingTop = ((viewheight - pizzaheight) / 2);
	thepizza.style.paddingTop = paddingTop + 'px';
	thepizza.style.height = (viewheight - paddingTop) + 'px';
}

function contentLoaded(win, fn) {
	// https://github.com/dperini/ContentLoaded/blob/master/src/contentloaded.js
	// Updated: 20101020
	var done = false,
		top = true,
		doc = win.document,
		root = doc.documentElement,
		add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
		rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
		pre = doc.addEventListener ? '' : 'on',
		init = function(e) {
			if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
			(e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
			if (!done && (done = true)) fn.call(win, e.type || e);
		},
		poll = function() {
			try {
				root.doScroll('left');
			} catch (e) {
				setTimeout(poll, 50);
				return;
			}
			init('poll');
		};
	if (doc.readyState == 'complete') fn.call(win, 'lazy');
	else {
		if (doc.createEventObject && root.doScroll) {
			try {
				top = !win.frameElement;
			} catch (e) {}
			if (top) poll();
		}
		doc[add](pre + 'DOMContentLoaded', init, false);
		doc[add](pre + 'readystatechange', init, false);
		win[add](pre + 'load', init, false);
	}
}