sap.ui.define([
    "sap/ui/core/ValueState"
], function (ValueState) {
    "use strict";

    return {

        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */

         _getDescription: function (key, aList) {
            if (aList) {
                for (var i in aList) {
                    if (aList[i].OBJECT_ID === key) {
                        return aList[i].LABEL_CODE;
                    }
                }
                return "";
            }
        },
        _getCountryDescription: function (key, aList) {
            if (aList) {
                for (var i in aList) {
                    if (aList[i].COUNTRY_CODE === key) {
                        return aList[i].COUNTRY_NAME;
                    }
                }
                return "";
            }
        },
    };

});