window.authHelpers = {
    openUrl: function (url) {
        if (!url) return;
        window.open(url, "_blank", "noopener,noreferrer");
    },
    copyText: async function (text) {
        if (!text) return false;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                return true;
            }
        } catch {
        }

        try {
            window.prompt("Copy to clipboard:", text);
            return true;
        } catch {
            return false;
        }
    }
};

