function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-action-sheet-action-sheet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-sheet/action-sheet.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-sheet/action-sheet.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesActionSheetActionSheetPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo='action sheet'></app-header>\n\n<ion-content padding>\n  <ion-button expand='full' (click)='presentActionSheet()' color='primary'>\n    Mostrar Action Sheet\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/action-sheet/action-sheet-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/action-sheet/action-sheet-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ActionSheetPageRoutingModule */

  /***/
  function srcAppPagesActionSheetActionSheetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionSheetPageRoutingModule", function () {
      return ActionSheetPageRoutingModule;
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


    var _action_sheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./action-sheet.page */
    "./src/app/pages/action-sheet/action-sheet.page.ts");

    var routes = [{
      path: '',
      component: _action_sheet_page__WEBPACK_IMPORTED_MODULE_3__["ActionSheetPage"]
    }];

    var ActionSheetPageRoutingModule = function ActionSheetPageRoutingModule() {
      _classCallCheck(this, ActionSheetPageRoutingModule);
    };

    ActionSheetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActionSheetPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/action-sheet/action-sheet.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/action-sheet/action-sheet.module.ts ***!
    \***********************************************************/

  /*! exports provided: ActionSheetPageModule */

  /***/
  function srcAppPagesActionSheetActionSheetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionSheetPageModule", function () {
      return ActionSheetPageModule;
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


    var _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./action-sheet-routing.module */
    "./src/app/pages/action-sheet/action-sheet-routing.module.ts");
    /* harmony import */


    var _action_sheet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./action-sheet.page */
    "./src/app/pages/action-sheet/action-sheet.page.ts");

    var ActionSheetPageModule = function ActionSheetPageModule() {
      _classCallCheck(this, ActionSheetPageModule);
    };

    ActionSheetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_6__["ActionSheetPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_action_sheet_page__WEBPACK_IMPORTED_MODULE_7__["ActionSheetPage"]]
    })], ActionSheetPageModule);
    /***/
  },

  /***/
  "./src/app/pages/action-sheet/action-sheet.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/action-sheet/action-sheet.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesActionSheetActionSheetPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGlvbi1zaGVldC9hY3Rpb24tc2hlZXQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/action-sheet/action-sheet.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/action-sheet/action-sheet.page.ts ***!
    \*********************************************************/

  /*! exports provided: ActionSheetPage */

  /***/
  function srcAppPagesActionSheetActionSheetPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionSheetPage", function () {
      return ActionSheetPage;
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

    var ActionSheetPage = /*#__PURE__*/function () {
      function ActionSheetPage(actionSheetCtrl) {
        _classCallCheck(this, ActionSheetPage);

        this.actionSheetCtrl = actionSheetCtrl;
      }

      _createClass(ActionSheetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // CAMBIOS ES7
        // El async devuelve una promesa
        // El await es para que no bloquee la página, espera a que se cree el actionSheet
        // role: 'destructive', es para que en ios diga que el borrado esté en rojo
        // role: 'cancel', hace que al clickar fuera del menú se cierre
        // backdropDismiss: false, es para cancelar el evento de que cuando toques fuera se salga
        // cssClass: 'rojo', para poner clases personalizadas

      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Albums',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        cssClass: 'rojo',
                        handler: function handler() {
                          console.log('Delete clicked');
                        }
                      }, {
                        text: 'Share',
                        icon: 'share',
                        handler: function handler() {
                          console.log('Share clicked');
                        }
                      }, {
                        text: 'Play (open modal)',
                        icon: 'arrow-dropright-circle',
                        handler: function handler() {
                          console.log('Play clicked');
                        }
                      }, {
                        text: 'Favorite',
                        icon: 'heart',
                        handler: function handler() {
                          console.log('Favorite clicked');
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ActionSheetPage;
    }();

    ActionSheetPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }];
    };

    ActionSheetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-action-sheet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./action-sheet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-sheet/action-sheet.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./action-sheet.page.scss */
      "./src/app/pages/action-sheet/action-sheet.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])], ActionSheetPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-action-sheet-action-sheet-module-es5.js.map