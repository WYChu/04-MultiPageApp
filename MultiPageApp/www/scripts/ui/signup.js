var Signup = (function () {
    function onOkButtonClicked() {
        SystemSettings.setAuthCode("OK");
        Utils.showPage("#MAIN_MENU");
    }

    function beforeShow() {
    }

    $("#SIGNUP_OK_BUTTON").on("click", onOkButtonClicked);
    $("#SIGNUP").on("pagebeforeshow", beforeShow);

    return {};
}());