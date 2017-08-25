var MainMenu = (function () {
    function onSignoutButtonClicked() {
        SystemSettings.setAuthCode("");
        Utils.showPage("#INSTALL");
    }

    function beforeShow() {
    }

    $("#MAIN_MENU").on("pagebeforeshow", beforeShow);
    $("#MAIN_MENU_SIGNOUT_BUTTON").on("click", onSignoutButtonClicked);
    return {};
}());