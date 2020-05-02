function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-check-check-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check/check.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check/check.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCheckCheckPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo='Checkbox'></app-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n    <!-- Si pones el ion-checkbox dentro del ion-item se marca cuando haces click en la etiqueta -->\n    <ion-item *ngFor='let check of data' (click)='onClick(check)'>\n      <ion-label>{{check.name}}</ion-label>\n      <ion-checkbox [(ngModel)]='check.selected' [color]='check.name'></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/check/check-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/check/check-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CheckPageRoutingModule */

  /***/
  function srcAppPagesCheckCheckRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckPageRoutingModule", function () {
      return CheckPageRoutingModule;
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


    var _check_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./check.page */
    "./src/app/pages/check/check.page.ts");

    var routes = [{
      path: '',
      component: _check_page__WEBPACK_IMPORTED_MODULE_3__["CheckPage"]
    }];

    var CheckPageRoutingModule = function CheckPageRoutingModule() {
      _classCallCheck(this, CheckPageRoutingModule);
    };

    CheckPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CheckPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/check/check.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/check/check.module.ts ***!
    \*********************************************/

  /*! exports provided: CheckPageModule */

  /***/
  function srcAppPagesCheckCheckModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckPageModule", function () {
      return CheckPageModule;
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


    var _check_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./check-routing.module */
    "./src/app/pages/check/check-routing.module.ts");
    /* harmony import */


    var _check_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./check.page */
    "./src/app/pages/check/check.page.ts");

    var CheckPageModule = function CheckPageModule() {
      _classCallCheck(this, CheckPageModule);
    };

    CheckPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _check_routing_module__WEBPACK_IMPORTED_MODULE_6__["CheckPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_check_page__WEBPACK_IMPORTED_MODULE_7__["CheckPage"]]
    })], CheckPageModule);
    /***/
  },

  /***/
  "./src/app/pages/check/check.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/check/check.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCheckCheckPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrL2NoZWNrLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/check/check.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/check/check.page.ts ***!
    \*******************************************/

  /*! exports provided: CheckPage */

  /***/
  function srcAppPagesCheckCheckPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckPage", function () {
      return CheckPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CheckPage = /*#__PURE__*/function () {
      function CheckPage() {
        _classCallCheck(this, CheckPage);

        this.data = [{
          name: 'primary',
          selected: false
        }, {
          name: 'secondary',
          selected: true
        }, {
          name: 'tertiary',
          selected: false
        }, {
          name: 'success',
          selected: true
        }];
      }

      _createClass(CheckPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick(check) {
          console.log(check);
        }
      }]);

      return CheckPage;
    }();

    CheckPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-check',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./check.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check/check.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./check.page.scss */
      "./src/app/pages/check/check.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CheckPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-check-check-module-es5.js.map