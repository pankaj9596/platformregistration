sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/ajaxutil",
    "../model/models",
    "sap/m/MessageBox",
    "../model/formatter",
    "../utils/filterOpEnum",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, ajaxutil, models, MessageBox, formatter, filterOpEnum) {
        "use strict";

        return Controller.extend("usermanagement.platformregistration.controller.RetailerRegistration", {
            formatter: formatter,
            onInit: function () {
                var oModel = new JSONModel({
                    "sStep1": true,
                    "sStep2": false,
                    "sStep3": false,
                    "sStep4": false,
                    "sStep5": false,
                    "sStep6": false,
                    "minDate": new Date(),
                    "address": [{
                        "ADDRESS_CODE" :"",
                        "ADDRESS_TYPE": "",
                        "ADDRESS_LINE_1": "",
                        "ADDRESS_LINE_2": "",
                        "ADDRESS_LINE_3": "",
                        "COUNTRY_CODE": "",
                        "STATE": "",
                        "CITY": "",
                        "POSTAL_CODE": "",
                        "LANGUAGE":"EN"

                    }]
                }),
                    aPayload = [
                        "TITLE",
                        "BUSINESS-CODE",
                        "OWNERSHIP",
                        "STORE-FORMAT",
                        "COUNTRY-CODE",
                        "STATE",
                        "ADDRESSTYPE"

                    ],
                    oParameters = {},
                    aSubmitPayLoad = models.fnRegistrationPayload().oData;
                oParameters.error = function (oEvent) {
                   
                };
                if (sap.ui.Device.system.phone) {
                    for (var key in this.getView().byId("idMP").getContent()) {
                        this.getView().byId("idMP").getContent()[key].removeStyleClass("suplierCss");
                        this.getView().byId("idMP").getContent()[key].addStyleClass("suplierCssMobile");
                    }
                }
                if (sap.ui.Device.system.tablet) {
                    for (var key in this.getView().byId("idMP").getContent()) {
                        this.getView().byId("idMP").getContent()[key].removeStyleClass("suplierCss");
                        this.getView().byId("idMP").getContent()[key].addStyleClass("suplierCssTablet");
                    }
                }
                oParameters.success = function (oData) {
                    this.getView().setModel(new JSONModel({}), "registrationViewModel");
                    this.getView().getModel("registrationViewModel").setProperty("/", oData);
                    this.getView().getModel("registrationViewModel").setProperty("/retailerReg", aSubmitPayLoad.retailerReg);
                }.bind(this);

                this.getView().setModel(oModel, "viewModel");
                this.getView().setModel(new JSONModel({}), "registrationViewModel");
                ajaxutil.fnCreate("master/batch", oParameters, aPayload, false, this);
            },

            onNavToBasicInfo: function () {
                var oModel = this.getView().getModel("viewModel");
                oModel.setProperty("/sStep1", true);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);


            },
            onNavToRetailInfo: function () {
                var oModel = this.getView().getModel("viewModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", true);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                this.getView().byId("idMP").getContent()[2].addStyleClass("classPurpledot");
                this.getView().byId("idMP").getContent()[1].addStyleClass("classPurpledot2");

            },
            onNavToContactInfo: function () {
                var oModel = this.getView().getModel("viewModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", true);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[2].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[3].addStyleClass("classPurpledot");


            },
            onNavToAddressInfo: function () {
                var oModel = this.getView().getModel("viewModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep4", true);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[3].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[4].addStyleClass("classPurpledot");


            },
            onNavToOthersInfo: function () {
                var oModel = this.getView().getModel("viewModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", true);
                oModel.setProperty("/sStep6", false);
                // this.onPressAddContact();
                this.getView().byId("idMP").getContent()[4].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[5].addStyleClass("classPurpledot");


            },
            onNavToReview: function () {
                var oModel = this.getView().getModel("viewModel");
                oModel.setProperty("/sStep1", false);
                oModel.setProperty("/sStep3", false);
                oModel.setProperty("/sStep2", false);
                oModel.setProperty("/sStep4", false);
                oModel.setProperty("/sStep5", false);
                oModel.setProperty("/sStep6", true);
                this.getView().byId("idMP").getContent()[5].addStyleClass("classPurpledot2");
                this.getView().byId("idMP").getContent()[6].addStyleClass("classPurpledot");


            },
            onAddAddress: function (oEvent) {
                var oAddress = Object.assign({}, this.getView().getModel("viewModel").getProperty("/address/0")),
                    aAddressTable = this.getView().getModel("registrationViewModel").getProperty("/retailerReg/0/ADDRESS"),
                    oViewModel = this.getView().getModel("viewModel"),
                    sAddressTypeExist = aAddressTable.findIndex(function (types) {
                        return types.ADDRESS_TYPE === oAddress.ADDRESS_TYPE;
                    });
                if (sAddressTypeExist === -1) {// checking if already address type added
                    aAddressTable.push(oAddress);
                    this.getView().getModel("registrationViewModel").setProperty("/retailerReg/0/ADDRESS", aAddressTable);

                    // clearing the address form once added to table
                    oViewModel.setProperty("/address/0/ADDRESS_TYPE", "");
                    oViewModel.setProperty("/address/0/ADDRESS_LINE_1", "");
                    oViewModel.setProperty("/address/0/ADDRESS_LINE_2", "");
                    oViewModel.setProperty("/address/0/ADDRESS_LINE_3", "");
                    oViewModel.setProperty("/address/0/COUNTRY_CODE", "");
                    oViewModel.setProperty("/address/0/STATE", "");
                    oViewModel.setProperty("/address/0/CITY", "");
                    oViewModel.setProperty("/address/0/POSTAL_CODE", "");
                    this.getView().byId("cbState").setEnabled(false);
                } else {
                    MessageBox.error("Address type already added,please select other address type");
                }

            },

            onDeleteAddressType: function (oEvent) {
                try {
                    var sPath = oEvent.getSource().getBindingContext("registrationViewModel").getPath().split("/")[2];
                    var oTable = this.getView().getModel("registrationViewModel").getProperty("/retailerReg/0/ADDRESS");
                    oTable.splice(sPath, 1);
                    this.getView().getModel("registrationViewModel").refresh(true);

                } catch (e) {
                    Log.error("Exception in Delete function");
                }
            },

            onSubmit: function (oEvent, action) {
                var aPayload = Object.assign({}, this.getView().getModel("registrationViewModel").getProperty("/retailerReg/0")),
                    oParameters = {},
                    that =this;
                    aPayload.REGISTRATION_DATE =(aPayload.REGISTRATION_DATE.getFullYear()).toString()+"-"+(aPayload.REGISTRATION_DATE.getMonth()+1).toString()+"-"+(aPayload.REGISTRATION_DATE.getDate()).toString();
                oParameters.error = function (oEvent) {
                   
                };
                oParameters.success = function (oData) {
                
                   that.getView().getModel("registrationViewModel").setProperty("/retailerReg/0",oData);
                   if(action === 'platformrequest?action=save'){
                    MessageBox.success("Draft saved successfully.");
                   }else{
                    MessageBox.success("Submitted successfully.");
                   }
                }.bind(this);
                ajaxutil.fnCreate(action, oParameters, aPayload, false, this);
            },
            onEmailValidation: function (oEvent) {
                var oSource = oEvent.getSource();
                var sEmail = oEvent.getSource().getValue(),
                    oParameters = {},
                    that =this;
                    oParameters.filter = "emailID" + filterOpEnum.EQ + sEmail;
                oParameters.error = function (err) {
                    MessageBox.error(err.responseJSON.message);
                    that.getView().getModel("registrationViewModel").setProperty("/retailerReg/0/EMAIL_ID","");
                };
                oParameters.success = function (oData) {

                }.bind(that);
                ajaxutil.fnRead("platformrequest/validate", oParameters);
            },

            onCountryChange:function (oEvent) {

                var sCountryKey = oEvent.getSource().getSelectedItem().getKey();
                var aFilters = [];
                this.getView().getModel("viewModel").setProperty("/address/0/STATE", "");
                aFilters.push(new sap.ui.model.Filter("COUNTRY_CODE", sap.ui.model.FilterOperator.EQ, sCountryKey));
                var oBinding = this.getView().byId("cbState").getBinding("items");
                oBinding.filter(aFilters);
                if (!this.getView().byId("cbState").getEnabled()) {
                    this.getView().byId("cbState").setEnabled(true);
                }
            }
   
        });
    });
