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

			// enable event listeners on toggles
			widget.add_listeners_to_toggles();
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

			if(e.target.classList.contains("open")) {
				e.target.classList.remove("open");
				e.target.classList.add("closed");
			} else {
				e.target.classList.remove("closed");
				e.target.classList.add("open");
			}
		});
	},

	add_listeners_to_toggles : function(){
		// toggle background to a warm color and back to original color
		document.getElementById("warm-background-toggle").addEventListener('click', function(e){
			if(e.target.checked){
				// document.body.style.backgroundColor = "#EDDD6E"; //orange
				document.body.style.backgroundColor = "#EDD1B0"; //peach
			}else{
				document.body.style.backgroundColor = "";
			}
		})

		document.getElementById("hide-images-toggle").addEventListener('click', function(e){
			// get all images
			all_images = document.querySelectorAll("img");
			if(e.target.checked){
				for(i=0;i<all_images.length;i++){
					all_images[i].style.display = 'none';
				}
			}else{
				for(i=0;i<all_images.length;i++){
					all_images[i].style.display = '';
				}
			}
		})

		document.getElementById("open-dyslexic-font-toggle").addEventListener('click', function(e){
			console.log("open-dyslexic-font-toggle");
		})

		document.getElementById("highlight-links-toggle").addEventListener('click', function(e){
			console.log("highlight-links-toggle");
		})
	}
}

// once DOM is fully loaded, initialize widget
window.addEventListener('DOMContentLoaded', function(e) {
    widget.init();
});
