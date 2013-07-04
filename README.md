GhostKnife
===

Very simple little PhantomJS script to render and crop screenshots of webpages. 

Usage
---

    ghostknife url [left top width height] [pagewidth pageheight] outputfile.png

Examples
---

Render an entire page to a png

    ghostknife http://thingsinjars.com thingsinjars.png

Render an entire page in a specific viewport

    ghostknife http://thingsinjars.com 640 480 thingsinjars-small.png

Render only a portion of the page

    ghostknife http://thingsinjars.com 200 300 100 50 thingsinjars-partial.png