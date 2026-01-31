window.lifecycleHelpers = (function () {
    let enabled = false;

    function beforeUnloadHandler(e) {
        if (!enabled) return;
        e.preventDefault();
        e.returnValue = "Closing this page will stop HytaleManager and shut down the server.";
        return e.returnValue;
    }

    return {
        enableCloseWarning: function () {
            if (enabled) return;
            enabled = true;
            window.addEventListener("beforeunload", beforeUnloadHandler);
        },
        disableCloseWarning: function () {
            if (!enabled) return;
            enabled = false;
            window.removeEventListener("beforeunload", beforeUnloadHandler);
        }
    };
})();

