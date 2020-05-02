function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loading-loading-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loading/loading.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loading/loading.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoadingLoadingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo='Loading'></app-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/loading/loading-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/loading/loading-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: LoadingPageRoutingModule */

  /***/
  function srcAppPagesLoadingLoadingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingPageRoutingModule", function () {
      return LoadingPageRoutingModule;
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


    var _loading_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loading.page */
    "./src/app/pages/loading/loading.page.ts");

    var routes = [{
      path: '',
      component: _loading_page__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"]
    }];

    var LoadingPageRoutingModule = function LoadingPageRoutingModule() {
      _classCallCheck(this, LoadingPageRoutingModule);
    };

    LoadingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoadingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/loading/loading.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/loading/loading.module.ts ***!
    \*************************************************/

  /*! exports provided: LoadingPageModule */

  /***/
  function srcAppPagesLoadingLoadingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function () {
      return LoadingPageModule;
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


    var _loading_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loading-routing.module */
    "./src/app/pages/loading/loading-routing.module.ts");
    /* harmony import */


    var _loading_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./loading.page */
    "./src/app/pages/loading/loading.page.ts");

    var LoadingPageModule = function LoadingPageModule() {
      _classCallCheck(this, LoadingPageModule);
    };

    LoadingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _loading_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoadingPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_7__["LoadingPage"]]
    })], LoadingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/loading/loading.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/loading/loading.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoadingLoadingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYWRpbmcvbG9hZGluZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/loading/loading.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/loading/loading.page.ts ***!
    \***********************************************/

  /*! exports provided: LoadingPage */

  /***/
  function srcAppPagesLoadingLoadingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingPage", function () {
      return LoadingPage;
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

    var LoadingPage = /*#__PURE__*/function () {
      function LoadingPage(loadingController) {
        _classCallCheck(this, LoadingPage);

        this.loadingController = loadingController;
      }

      _createClass(LoadingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.presentLoading('Espere por favor');
          setTimeout(function () {
            _this.loading.dismiss();
          }, 1500);
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(mensaje) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: mensaje
                    });

                  case 2:
                    this.loading = _context.sent;
                    return _context.abrupt("return", this.loading.present());

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return LoadingPage;
    }();

    LoadingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    LoadingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loading.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loading/loading.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loading.page.scss */
      "./src/app/pages/loading/loading.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], LoadingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-loading-loading-module-es5.js.map