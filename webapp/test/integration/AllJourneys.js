/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 openAdjustmentSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/pages/App",
	"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/pages/Browser",
	"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/pages/Master",
	"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/pages/Detail",
	"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "mmal.spm.fi.ZSPM_IDOC_APPR_WB.view."
	});

	sap.ui.require([
		"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/MasterJourney",
		"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/NavigationJourney",
		"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/NotFoundJourney",
		"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/BusyJourney",
		"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});