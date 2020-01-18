function start_bbqing() {
    setTimeout(function() {
        var port = chrome.runtime.connect({
            name: 'checkorder_bbqing'
        });

        port.onMessage.addListener(function(message, sender) {

            var orders = message.data["orders"];

            jQuery("span:contains('BBQING#')").contents().each(function() {
                if ($(this)[0]["wholeText"]) {
                    if ($(this)[0]["wholeText"].indexOf("BBQING#") >= 0) {
                        for (var counter = 0; counter < orders.length; counter++) {
                            if (orders[counter]["name"] == $(this)[0]["wholeText"].trim()) {
                                $(this).parent().html($(this).parent().html().replace($(this)[0]["wholeText"], '<a href="https://bbqing-com.myshopify.com/admin/orders/' + orders[counter]["id"] + '" target="blank">' + $(this)[0]["wholeText"] + '</a>'))
                            }
                        }

                    }
                }


            });

        })

    }, 1000);


}

function start_bg_us() {

}

function start_bg_ca() {

}


$(document).ready(function() {


    // if(window.location.href.indexOf("hubspot.com")>=0){
    waitForKeyElements("span:contains('BBQING#'):eq(0)", start_bbqing);
    waitForKeyElements("span:contains('BG-US#')", start_bg_us);
    waitForKeyElements("span:contains('BG-CA#')", start_bg_ca);
    // }
})