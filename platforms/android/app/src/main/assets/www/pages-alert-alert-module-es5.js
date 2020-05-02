function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-alert-alert-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alert/alert.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alert/alert.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAlertAlertPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [titulo]='titulo || \"Alert Page\"'></app-header>\n\n<ion-content padding>\n\n  <ion-button color='primary' (click)='presentAlert()' expand='full'>Mostrar alerta</ion-button>\n\n  <ion-button color='secondary' (click)='presentInput()' expand='full'>Mostrar Input</ion-button>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/alert/alert-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/alert/alert-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AlertPageRoutingModule */

  /***/
  function srcAppPagesAlertAlertRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertPageRoutingModule", function () {
      return AlertPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _alert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert.page */
    "./src/app/pages/alert/alert.page.ts");

    var routes = [{
      path: '',
      component: _alert_page__WEBPACK_IMPORTED_MODULE_3__["AlertPage"]
    }];

    var AlertPageRoutingModule = function AlertPageRoutingModule() {
      _classCallCheck(this, AlertPageRoutingModule);
    };

    AlertPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlertPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/alert/alert.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/alert/alert.module.ts ***!
    \*********************************************/

  /*! exports provided: AlertPageModule */

  /***/
  function srcAppPagesAlertAlertModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertPageModule", function () {
      return AlertPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _alert_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alert-routing.module */
    "./src/app/pages/alert/alert-routing.module.ts");
    /* harmony import */


    var _alert_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./alert.page */
    "./src/app/pages/alert/alert.page.ts");

    var AlertPageModule = function AlertPageModule() {
      _classCallCheck(this, AlertPageModule);
    };

    AlertPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _alert_routing_module__WEBPACK_IMPORTED_MODULE_6__["AlertPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_alert_page__WEBPACK_IMPORTED_MODULE_7__["AlertPage"]]
    })], AlertPageModule);
    /***/
  },

  /***/
  "./src/app/pages/alert/alert.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/alert/alert.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAlertAlertPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsZXJ0L2FsZXJ0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/alert/alert.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/alert/alert.page.ts ***!
    \*******************************************/

  /*! exports provided: AlertPage */

  /***/
  function srcAppPagesAlertAlertPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertPage", function () {
      return AlertPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var AlertPage = /*#__PURE__*/function () {
      function AlertPage(alertController) {
        _classCallCheck(this, AlertPage);

        this.alertController = alertController;
      }

      _createClass(AlertPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Subtitle',
                      message: 'This is an alert message.',
                      // buttons: ['OK']
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Botón Cancelar');
                        }
                      }, {
                        text: 'OK',
                        handler: function handler(blah) {
                          console.log('Botón OK');
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentInput",
        value: function presentInput() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var input;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Present Input',
                      subHeader: 'Escribe tu nombre',
                      inputs: [{
                        name: 'txtName',
                        type: 'text',
                        placeholder: 'Name',
                        handler: function handler(blah) {}
                      }, {
                        name: 'surname',
                        type: 'text',
                        id: 'name2-id',
                        value: 'hello',
                        placeholder: 'Surname'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'OK',
                        handler: function handler(data) {
                          _this.titulo = data.txtName;
                        }
                      }]
                    });

                  case 2:
                    input = _context2.sent;
                    _context2.next = 5;
                    return input.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlertMultipleButtons",
        value: function presentAlertMultipleButtons() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'Subtitle',
                      message: 'This is an alert message.',
                      buttons: ['Cancel', 'Open Modal', 'Delete']
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Confirm!',
                      message: 'Message <strong>text</strong>!!!',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentAlertPrompt",
        value: function presentAlertPrompt() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'Prompt!',
                      inputs: [{
                        name: 'name1',
                        type: 'text',
                        placeholder: 'Placeholder 1'
                      }, {
                        name: 'name2',
                        type: 'text',
                        id: 'name2-id',
                        value: 'hello',
                        placeholder: 'Placeholder 2'
                      }, // multiline input.
                      {
                        name: 'paragraph',
                        id: 'paragraph',
                        type: 'textarea',
                        placeholder: 'Placeholder 3'
                      }, {
                        name: 'name3',
                        value: 'http://ionicframework.com',
                        type: 'url',
                        placeholder: 'Favorite site ever'
                      }, // input date with min & max
                      {
                        name: 'name4',
                        type: 'date',
                        min: '2017-03-01',
                        max: '2018-01-12'
                      }, // input date without min nor max
                      {
                        name: 'name5',
                        type: 'date'
                      }, {
                        name: 'name6',
                        type: 'number',
                        min: -5,
                        max: 10
                      }, {
                        name: 'name7',
                        type: 'number'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler() {
                          console.log('Confirm Ok');
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentAlertRadio",
        value: function presentAlertRadio() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: 'Radio',
                      inputs: [{
                        name: 'radio1',
                        type: 'radio',
                        label: 'Radio 1',
                        value: 'value1',
                        checked: true
                      }, {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Radio 2',
                        value: 'value2'
                      }, {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Radio 3',
                        value: 'value3'
                      }, {
                        name: 'radio4',
                        type: 'radio',
                        label: 'Radio 4',
                        value: 'value4'
                      }, {
                        name: 'radio5',
                        type: 'radio',
                        label: 'Radio 5',
                        value: 'value5'
                      }, {
                        name: 'radio6',
                        type: 'radio',
                        label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
                        value: 'value6'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler() {
                          console.log('Confirm Ok');
                        }
                      }]
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "presentAlertCheckbox",
        value: function presentAlertCheckbox() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertController.create({
                      header: 'Checkbox',
                      inputs: [{
                        name: 'checkbox1',
                        type: 'checkbox',
                        label: 'Checkbox 1',
                        value: 'value1',
                        checked: true
                      }, {
                        name: 'checkbox2',
                        type: 'checkbox',
                        label: 'Checkbox 2',
                        value: 'value2'
                      }, {
                        name: 'checkbox3',
                        type: 'checkbox',
                        label: 'Checkbox 3',
                        value: 'value3'
                      }, {
                        name: 'checkbox4',
                        type: 'checkbox',
                        label: 'Checkbox 4',
                        value: 'value4'
                      }, {
                        name: 'checkbox5',
                        type: 'checkbox',
                        label: 'Checkbox 5',
                        value: 'value5'
                      }, {
                        name: 'checkbox6',
                        type: 'checkbox',
                        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
                        value: 'value6'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler() {
                          console.log('Confirm Ok');
                        }
                      }]
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return AlertPage;
    }();

    AlertPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    AlertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alert/alert.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alert.page.scss */
      "./src/app/pages/alert/alert.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], AlertPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-alert-alert-module-es5.js.map