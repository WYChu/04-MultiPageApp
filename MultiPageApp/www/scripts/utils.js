var Utils = (function () {
    function showPage(page) {
        $.mobile.pageContainer.pagecontainer("change", page, {
            reverse: false,
            changeHash: false
        });
    }
    return {
        showPage: showPage
    };
}()); 