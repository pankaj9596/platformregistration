/*global QUnit*/

sap.ui.define([
	"usermanagement/platformregistration/controller/RetailerRegistration.controller"
], function (Controller) {
	"use strict";

	QUnit.module("RetailerRegistration Controller");

	QUnit.test("I should test the RetailerRegistration controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
