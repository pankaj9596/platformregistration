sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },

            fnFlexiable: function () {
                var oFlexable = new JSONModel({
                    width:"auto"
                });
                return oFlexable;
            },

            fnRegistrationPayload: function () {
                var oPayload = new JSONModel({
                    "retailerReg": [{
                        // ACTION_CODE: "",
                        REQ_TYPE: "RETAILER",
                        // PFSEQID:"",
                        // RETSEQID: "",
                        TITLESEQID: "",
                        FIRST_NAME: "",
                        MIDDLE_NAME: "",
                        LAST_NAME: "",
                        COMPANY_NAME: "",
                        EMAIL_ID: "",
                        ALT_EMAIL_ID: "",
                        // REGISTRATION_DATE: new Date(),
                        REGISTRATION_DATE: "2022-11-18",
                        STORE_COUNT: 0,
                        EMP_COUNT: "",
                        PH_COUNTRY_CODE: "",
                        PHONE_NUMBER: "",
                        ALT_PH_COUNTRY_CODE: "",
                        ALT_PHN_NUMBER: "",
                        WEBSITE: "",
                        OWNERSHIP_TYPE: "",
                        REMARKS: "",
                        ADDITIONAL_INFO: "",
                        BUSINESS_CODE: "",
                        BUSINESS_DESC: "",
                        CONCESSIONAIRE_SUPPORT: false,
                        STORE_FORMAT: "",
                        // LOGO: "",
                        // HEADER_1: "",
                        // SUBHEADER_1: "",
                        // SUBHEADER_2: "",
                        // BACKGROUND_IMAGE: "",
                        FAX_NUMBER: "",
                        TELE_FAX_NUMBER: "",
                        PRIMARY_CONTACT_NAME:"",
                        ADDSEQID:"",
                        ADDRESS: []
                    }],

                    "title": [
                        {
                            "TITLESEQID": "TIT_00001",
                            "RETSEQID": "2022_RET_00001",
                            "TITLE_CODE": "MR",
                            "LABEL_CODE": "Mr.",
                            "CODE_DESC": "Mister"
                        },
                        {
                            "TITLESEQID": "TIT_00002",
                            "RETSEQID": "2022_RET_00001",
                            "TITLE_CODE": "MRS",
                            "LABEL_CODE": "Mrs.",
                            "CODE_DESC": "Mistress"
                        }
                    ],

                    "businessCode": [
                        {
                            "BUSSEQID": "BUS_00001",
                            "RETSEQID": "2022_RET_00001",
                            "BUS_CODE": "10",
                            "LABEL_CODE": "DISTRBTR",
                            "CODE_DESC": "Distributor"
                        },
                        {
                            "BUSSEQID": "BUS_00002",
                            "RETSEQID": "2022_RET_00001",
                            "BUS_CODE": "20",
                            "LABEL_CODE": "MANFCTR",
                            "CODE_DESC": "Manufacturer"
                        },
                        {
                            "BUSSEQID": "BUS_00003",
                            "RETSEQID": "2022_RET_00001",
                            "BUS_CODE": "30",
                            "LABEL_CODE": "LICNSE",
                            "CODE_DESC": "Licensee"
                        },
                        {
                            "BUSSEQID": "BUS_00004",
                            "RETSEQID": "2022_RET_00001",
                            "BUS_CODE": "40",
                            "LABEL_CODE": "WHOLSL",
                            "CODE_DESC": "Wholesaler"
                        },
                        {
                            "BUSSEQID": "BUS_00005",
                            "RETSEQID": "2022_RET_00001",
                            "BUS_CODE": "50",
                            "LABEL_CODE": "IMPORTR",
                            "CODE_DESC": "Importer"
                        },
                        {
                            "BUSSEQID": "BUS_00006",
                            "RETSEQID": "2022_RET_00001",
                            "BUS_CODE": "60",
                            "LABEL_CODE": "BROKR",
                            "CODE_DESC": "Broker"
                        },
                        {
                            "BUSSEQID": "BUS_00007",
                            "RETSEQID": "2022_RET_00001",
                            "BUS_CODE": "70",
                            "LABEL_CODE": "SERVPRDR",
                            "CODE_DESC": "Service Provider"
                        }
                    ],
                    "ownerShip": [
                        {
                            "RETSEQID": "2022_RET_00001",
                            "OBJECT_ID": "2022_OBM_00001",
                            "OBJECT_TYPE": "OWNSHIP",
                            "OBJECT_CODE": "10",
                            "label_code": "Coporation",
                            "CODE_DESC": "Ownership Type for Corporation",
                            "VALID_FROM": "2022-11-12T16:06:54.000Z",
                            "VALID_TO": "2037-12-31T15:52:00.000Z"
                        },
                        {
                            "RETSEQID": "2022_RET_00001",
                            "OBJECT_ID": "2022_OBM_00002",
                            "OBJECT_TYPE": "OWNSHIP",
                            "OBJECT_CODE": "20",
                            "label_code": "Joint Venture",
                            "CODE_DESC": "Ownership Type for Joint Venture",
                            "VALID_FROM": "2022-11-12T16:06:58.000Z",
                            "VALID_TO": "2037-12-31T15:52:00.000Z"
                        },
                        {
                            "RETSEQID": "2022_RET_00001",
                            "OBJECT_ID": "2022_OBM_00003",
                            "OBJECT_TYPE": "OWNSHIP",
                            "OBJECT_CODE": "30",
                            "label_code": "Limited Liability Corporation",
                            "CODE_DESC": "Ownership Type for Limited Liability Corporation",
                            "VALID_FROM": "2022-11-12T16:09:15.000Z",
                            "VALID_TO": "2037-12-31T15:52:00.000Z"
                        },
                        {
                            "RETSEQID": "2022_RET_00001",
                            "OBJECT_ID": "2022_OBM_00004",
                            "OBJECT_TYPE": "OWNSHIP",
                            "OBJECT_CODE": "40",
                            "label_code": "Limited Liability Partnership",
                            "CODE_DESC": "Ownership Type for Limited Liability Partnership",
                            "VALID_FROM": "2022-11-12T16:09:19.000Z",
                            "VALID_TO": "2037-12-31T15:52:00.000Z"
                        },
                        {
                            "RETSEQID": "2022_RET_00001",
                            "OBJECT_ID": "2022_OBM_00005",
                            "OBJECT_TYPE": "OWNSHIP",
                            "OBJECT_CODE": "50",
                            "label_code": "Partnership",
                            "CODE_DESC": "Ownership Type for Partnership",
                            "VALID_FROM": "2022-11-12T16:09:23.000Z",
                            "VALID_TO": "2037-12-31T15:52:00.000Z"
                        },
                        {
                            "RETSEQID": "2022_RET_00001",
                            "OBJECT_ID": "2022_OBM_00006",
                            "OBJECT_TYPE": "OWNSHIP",
                            "OBJECT_CODE": "60",
                            "label_code": "Sole Proprietorship",
                            "CODE_DESC": "Ownership Type for Sole Proprietorship",
                            "VALID_FROM": "2022-11-12T16:09:28.000Z",
                            "VALID_TO": "2037-12-31T15:52:00.000Z"
                        }
                    ],
                    "storeFormat": [
                        {
                            "RETSEQID": "2022_RET_00001",
                            "OBJECT_ID": "2022_OBM_00007",
                            "OBJECT_TYPE": "STOREFMT",
                            "OBJECT_CODE": "10",
                            "LABEL_CODE": "Outlet Store",
                            "CODE_DESC": "Store Format",
                            "VALID_FROM": "2022-11-14T16:37:23.000Z",
                            "VALID_TO": "2037-12-31T15:52:00.000Z"
                        },
                        {
                            "RETSEQID": "2022_RET_00001",
                            "OBJECT_ID": "2022_OBM_00008",
                            "OBJECT_TYPE": "STOREFMT",
                            "OBJECT_CODE": "20",
                            "LABEL_CODE": "Convention",
                            "CODE_DESC": "Store Format",
                            "VALID_FROM": "2022-11-14T16:37:30.000Z",
                            "VALID_TO": "2037-12-31T15:52:00.000Z"
                        },
                        {
                            "RETSEQID": "2022_RET_00001",
                            "OBJECT_ID": "2022_OBM_00009",
                            "OBJECT_TYPE": "STOREFMT",
                            "OBJECT_CODE": "30",
                            "LABEL_CODE": "Warehouse",
                            "CODE_DESC": "Store Format",
                            "VALID_FROM": "2022-11-14T16:37:33.000Z",
                            "VALID_TO": "2037-12-31T15:52:00.000Z"
                        }
                    ],
                    "countryCode": [
                        {
                            "COUNTRY_CODE": "+1",
                            "COUNTRY_NAME": "USA"
                        },
                        {
                            "COUNTRY_CODE": "+60",
                            "COUNTRY_NAME": "Malaysia"
                        },
                        {
                            "COUNTRY_CODE": "+62",
                            "COUNTRY_NAME": "Indonesia"
                        },
                        {
                            "COUNTRY_CODE": "+63",
                            "COUNTRY_NAME": "Philipines"
                        },
                        {
                            "COUNTRY_CODE": "+65",
                            "COUNTRY_NAME": "Singapore"
                        },
                        {
                            "COUNTRY_CODE": "+66",
                            "COUNTRY_NAME": "Thailand"
                        },
                        {
                            "COUNTRY_CODE": "+84",
                            "COUNTRY_NAME": "Vietnam"
                        },
                        {
                            "COUNTRY_CODE": "+91",
                            "COUNTRY_NAME": "India"
                        }
                    ]



                });
                return oPayload;
            }
        };
    });