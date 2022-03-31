// Loads widget on page
// initiates widget functionality (toggle button, on|off switches)

var ra_widget = {
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

			// once widget has loaded enable event listener on button
			ra_widget.toggle_widget();

			// enable event listeners on toggles
			ra_widget.add_listeners_to_toggles();

			// close when clicking outside widget area
			ra_widget.close_on_click_outside_of_widget();

			// close when esc key pressed
			ra_widget.close_on_escape();

			// hide widget when hide button pressed
			ra_widget.hide_when_hidden();
		}).catch(function (err) {
			// something went wrong
			console.warn("Failed to load widget.html", err);
		});

	},

	toggle_widget : function(e){
		// add event listener to widget button (toggle on|off)
		document.querySelector("#widget-toggle-button").addEventListener("click", function(e){
			widget_element = document.getElementById('readability-widget');
			if(widget_element.classList.contains('closed')){
				ra_widget.show_widget();
			}else{
				ra_widget.close_widget();
			}
		});
	},
	// reveal widget to user
	show_widget : function(){
		widget_element = document.getElementById('readability-widget');
		widget_element.classList.remove('closed');
		widget_element.classList.remove('hidden');
		widget_element.classList.add('open');
	},
	
	// hide widget (still revealing widget toggle button)
	close_widget : function(){
		widget_element = document.getElementById('readability-widget');
		widget_element.classList.remove('open');
		widget_element.classList.add('closed');
	},

	// if click happens outside popover, close it
	close_on_click_outside_of_widget : function() {
		widget_element = document.getElementById('readability-widget');
		const outside_click_listener = event => {
			if (!widget_element.contains(event.target) && !widget_element.classList.contains('closed')) {
				ra_widget.close_widget();
			}
		}
		// add event listener to body
		document.addEventListener('click', outside_click_listener);
	},

	close_on_escape : function() {
		const escape_key_listener = event => {
			//console.log(event);
			if(event.keyCode == 27) {
				ra_widget.close_widget();
			}
		}
		document.addEventListener("keydown", escape_key_listener);
	},

	hide_when_hidden : function() {
		document.getElementById("hide-widget-button").addEventListener('click', function(e){
			ra_widget.close_widget();
			// and hide it too
			widget_element = document.getElementById('readability-widget');
			widget_element.classList.add("hidden");
		})
	},

	add_listeners_to_toggles : function(){
		// toggle background to a warm color and back to original color
		document.getElementById("warm-background-toggle").addEventListener('click', function(e){
			if(e.target.checked){
				document.body.style.backgroundColor = "#F5E4D1"; //peach
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
			if(e.target.checked) {
				// make body font OpenDyslexic
				document.body.classList.add("open-dyslexic");

			} else {
				// make font regular again
				document.body.classList.remove("open-dyslexic");
			}
			console.log("open-dyslexic-font-toggle");
		})

		document.getElementById("highlight-links-toggle").addEventListener('click', function(e){
			// get all <a> tags
			all_links = document.querySelectorAll("a");
			if(e.target.checked){
				for(i=0;i<all_links.length;i++){
					all_links[i].classList.add("readability-highlighted-link");
				}
			}else{
				for(i=0;i<all_links.length;i++){
					all_links[i].classList.remove("readability-highlighted-link");
				}
			}		
			console.log("highlight-links-toggle");
		})
	}
}

// once DOM is fully loaded, initialize widget
window.addEventListener('DOMContentLoaded', function(e) {
    ra_widget.init();
});
