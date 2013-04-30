var page = require('webpage').create(),
    mode, outfileIndex;

if(phantom.args.length === 2) {
    mode = 'fullscreen';
    outfileIndex = 1;
} else if(phantom.args.length === 4) {
    mode = 'partial';
    page.viewportSize = {width: phantom.args[1],height: phantom.args[2]};
    outfileIndex = 3;
} else if(phantom.args.length === 6) {
    mode = 'partial';
    outfileIndex = 5;
} else {
    console.log('Usage: ghostknife url [top left width height] [pagewidth pageheight] outputfile.png');
    phantom.exit();
}

address = phantom.args[0];

page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {
        window.setTimeout(function () {
            if(mode === 'partial') {
                page.clipRect = {
                    top: phantom.args[1],
                    left: phantom.args[2],
                    width: phantom.args[3],
                    height: phantom.args[4]
                };
            }

            page.render(phantom.args[outfileIndex]);
            phantom.exit();
        }, 200);

    }
});