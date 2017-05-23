"use strict";
var DATA = (function () {
    function DATA() {
    }
    Object.defineProperty(DATA, "TYPES", {
        get: function () {
            return {
                'LISTINGS': 'listings',
                'TOTAL_RESULTS': 'total_results',
                'TOTAL_PAGES': 'total_pages',
                'PAGE': 'page',
                'RESPONSE_CODE': 'application_response_code'
            };
        },
        enumerable: true,
        configurable: true
    });
    return DATA;
}());
exports.DATA = DATA;
//# sourceMappingURL=DATA_CONST.js.map