//
// Loads widget on page

var widget = {
	init:function(){

		fetch('https://cdn.lib.ncsu.edu/readability-widget/widget.html').then(function (response) {
			// successful API call
			return response.text();
		}).then(function (html) {
			// HTML from response as text string
			console.log(html);
			// append to the end of the body element
			var b = document.body;
			b.innerHTML += html;
		}).catch(function (err) {
			// something went wrong
			console.warn("Failed to load widget.html", err);
		});

	},
}

// once DOM is fully loaded, initialize widget
window.addEventListener('DOMContentLoaded', function(e) {
    widget.init();
});
