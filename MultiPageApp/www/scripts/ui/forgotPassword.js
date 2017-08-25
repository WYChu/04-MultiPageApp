var ForgetPassword = (function () {
    function onOkButtonClicked() {
        navigator.notification.alert("密碼已變更!", function () {
            Utils.showPage("#SIGNIN");
        }, "忘記密碼", "確定");
    }

    function beforeShow() {
        $("#FORGOT_PASSWORD_EMAIL").val("");
    }

    $("#FORGOT_PASSWORD_OK_BUTTON").on("click", onOkButtonClicked);
    $("#FORGOT_PASSWORD").on("pagebeforeshow", beforeShow);

    return {};
}());