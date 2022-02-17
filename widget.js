//
// Loads widget on page

var widget = {
	// load widget to page
	init:function(){

		fetch('widget.html').then(function (response) {
			// successful API call
			return response.text();
		}).then(function (html) {
			// HTML from response as text string
			// append to the end of the body element
			var b = document.body;
			b.innerHTML += html;

			// once widget has loaded init event listener
			widget.toggle_widget();
		}).catch(function (err) {
			// something went wrong
			console.warn("Failed to load widget.html", err);
		});

	},

	toggle_widget : function(e){
		// add event listener to widget button
		document.querySelector("#widget-toggle-button").addEventListener("click", function(e){
			widget_content = document.getElementById("widget-content");
			if(widget_content.classList.contains("visible")){
				widget_content.classList.remove("visible");
			}else{
				widget_content.classList.add("visible");
			}
		});
	}
}

// once DOM is fully loaded, initialize widget
window.addEventListener('DOMContentLoaded', function(e) {
    widget.init();
});
