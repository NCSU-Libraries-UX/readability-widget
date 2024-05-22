# Readability Widget

This is a readability widget that you can install on your website. It helps balance competing accessibility needs by offering an extra set of optional accommodations. It's a way to provide readability improvements that some users, but not every user, will find useful. For instance, some users find black text on a white background (a common combination) to be the most readable, whereas others would prefer text against a warm-colored background (a feature in the widget). This widget may particularly benefit those with reading disabilities, but it may also be useful to a wide range of users.

Here’s more about [why we developed this readability widget](https://www.lib.ncsu.edu/accessibility-services/readability-widget) at NC State University Libraries.

**Note**: This widget alone will not make your website accessible; it is intended to be additive. We recommend that you ensure your site is WCAG-compliant before adding this widget.


## Features

- **Warm background**: peachy color overlay
- **OpenDyslexic font**: affects all text 
- **Highlight links**: in yellow 
- **Hide images**: blanks them out

## Screenshots

![A red Readability tag appears in the lower right corner of a phone screen](https://www.lib.ncsu.edu/sites/default/files/2022-09/android%20-%20chrome.png) ![Readability widget menu opened with features, warm background turned on, giving the page a light orange cast](https://www.lib.ncsu.edu/sites/default/files/2022-09/android_-_chrome_-_warm_bg.png)

## How to install
1. Clone this repository
1. Link to the widget.js script just before the closing <body> tag of your application: ``<script src="path/to/your/widget.js"></script>``
1. Optional: edit the colors in widget.scss to match those of your organization. (The widget tab color and link color are both red, #cc000.)

The widget will appear at the bottom right of your site. To expand the widget, the user clicks on the "Readability" button. 

### Requirements: none

- No additional JavaScript libraries are required. It’s vanilla!
- Not required: the OpenDyslexic font file is included in this package.
- The _paq variable in widget.js is used to load Matomo Analytics. If you use Matomo, you may want to adjust the custom event tracking in widget.js. If you don’t use Matomo, this variable is extraneous and can be removed or kept - it shouldn’t impact the widget’s functionality.

## Credits

This widget was created by Erik Olson, Meredith Wynn, and Robin Davis of the User Experience department at NC State University Libraries. We began this work in 2021.

