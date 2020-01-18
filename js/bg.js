


chrome.runtime.onConnect.addListener(function (port) {

    if (port.name == "checkorder_bbqing") {
        $.get('https://973f97a7b1c491353f35b0fb260f587c:ca94ab6b17c889b64b56ea782badbf5b@bbqing-com.myshopify.com/admin/api/2020-01/orders.json?limit=250&fields=id,name',
        function (response) {
            port.postMessage({ data: response });
        });
    }
})