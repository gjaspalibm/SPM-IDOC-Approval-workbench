/*global QUnit*/

sap.ui.define([
	"mmal/spm/fi/ZSPM_IDOC_APPR_WB/model/GroupSortState",
	"sap/ui/model/json/JSONModel"
], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("amount").length, 1, "The sorting by amount returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("idocNumber").length, 1, "The sorting by idocNumber returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("amount").length, 1, "The group by amount returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to amount if the user groupes by amount", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("amount");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "amount", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by idocNumber and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "amount");

		this.oGroupSortState.sort("idocNumber");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});