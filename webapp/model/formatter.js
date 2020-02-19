sap.ui.define(["sap/ui/core/format/DateFormat"], function (oDateFormatter) {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		numberState: function (sValue) {
			if (sValue > 0) {
				return "Success";
			} else {
				return "Error";
			}
		},
		statusCriticality: function (sValue) {
			switch (sValue) {
			case "A":
				return "Success";
			case "R":
				return "Error";
			default:
				return "Warning";
			}
		},
		formatDate: function (sValue) {
			if (sValue) {
				return oDateFormatter.getDateTimeInstance({
					relativeStyle: "wide"
				}).format(sValue, true);
				//pattern:"dd MMM yy",
			}
			return "";
		}

	};

});