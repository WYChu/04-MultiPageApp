var SystemSettings = (function () {
    var keyAuthCode = "authCode";

    function loadStorageString(key) {
        var result = localStorage.getItem(key);
        if ((result === null) || (result === undefined)) {
            result = "";
        }
        return result;
    }

    function getAuthCode() {
        return loadStorageString(keyAuthCode);
    }

    function setAuthCode(value) {
        localStorage[keyAuthCode] = value;
    }

    return {
        getAuthCode: getAuthCode,
        setAuthCode: setAuthCode
    };
}()); 