/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/NavigationJourneyPhone",
		"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/NotFoundJourneyPhone",
		"mmal/spm/fi/ZSPM_IDOC_APPR_WB/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});