var Signin = (function () {
    function onOkButtonClicked() {
        SystemSettings.setAuthCode("OK");
        Utils.showPage("#MAIN_MENU");
    }

    function beforeShow() {
    }

    $("#SIGNIN_OK_BUTTON").on("click", onOkButtonClicked);
    $("#SIGNIN").on("pagebeforeshow", beforeShow);
    return {};
}());