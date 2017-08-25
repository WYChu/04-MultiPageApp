var App = (function () {
    function checkAuthentication() {
        var pageToShow = "";
        var authCode = SystemSettings.getAuthCode();
        if (authCode === "OK") {
            pageToShow = "#MAIN_MENU";
        } else {
            pageToShow = "#INSTALL";
        }
        Utils.showPage(pageToShow);
    }

    function onPageBeforeShow(event, ui) {
    }

    function onPageBeforeHide(event, ui) {
    }

    function onPageInit(event) {
    }

    function onDeviceReady() {
        checkAuthentication();
    }

    function onHardwareBackButtonClicked() {
        navigator.notification.confirm("確定要結束嗎?", function (buttonIndex) {
            if (buttonIndex === 1) {
            }
        }, "MultiPageApp", ["確定", "取消"]);
    }

    function onResume() {
    }

    function bindEvents() {
        document.addEventListener("backbutton", onHardwareBackButtonClicked, false);
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("resume", onResume, false);
        $(document).bind("pageinit", onPageInit);
        $(document).bind("pagebeforehide", onPageBeforeHide);
        $(document).bind("pagebeforeshow", onPageBeforeShow);
    }

    function initialize() {
        bindEvents();
    }

    return {
        initialize: initialize
    };
}());

App.initialize();