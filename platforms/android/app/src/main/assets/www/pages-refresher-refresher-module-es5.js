function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-refresher-refresher-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refresher/refresher.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refresher/refresher.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRefresherRefresherPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo='Refresher'></app-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <h1 *ngIf='items.length === 0'\n  class='animated fadeIn fast'>Pull to Refresh</h1>\n\n\n  <ion-list *ngIf='items.length > 0' class='animated fadeIn fast'>\n    <ion-item *ngFor='let item of items; let i = index'>\n      <ion-label>Item: {{i+1}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/refresher/refresher-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/refresher/refresher-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: RefresherPageRoutingModule */

  /***/
  function srcAppPagesRefresherRefresherRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefresherPageRoutingModule", function () {
      return RefresherPageRoutingModule;
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


    var _refresher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./refresher.page */
    "./src/app/pages/refresher/refresher.page.ts");

    var routes = [{
      path: '',
      component: _refresher_page__WEBPACK_IMPORTED_MODULE_3__["RefresherPage"]
    }];

    var RefresherPageRoutingModule = function RefresherPageRoutingModule() {
      _classCallCheck(this, RefresherPageRoutingModule);
    };

    RefresherPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RefresherPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/refresher/refresher.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/refresher/refresher.module.ts ***!
    \*****************************************************/

  /*! exports provided: RefresherPageModule */

  /***/
  function srcAppPagesRefresherRefresherModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefresherPageModule", function () {
      return RefresherPageModule;
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


    var _refresher_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./refresher-routing.module */
    "./src/app/pages/refresher/refresher-routing.module.ts");
    /* harmony import */


    var _refresher_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./refresher.page */
    "./src/app/pages/refresher/refresher.page.ts");

    var RefresherPageModule = function RefresherPageModule() {
      _classCallCheck(this, RefresherPageModule);
    };

    RefresherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _refresher_routing_module__WEBPACK_IMPORTED_MODULE_6__["RefresherPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_refresher_page__WEBPACK_IMPORTED_MODULE_7__["RefresherPage"]]
    })], RefresherPageModule);
    /***/
  },

  /***/
  "./src/app/pages/refresher/refresher.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/refresher/refresher.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRefresherRefresherPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZnJlc2hlci9yZWZyZXNoZXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/refresher/refresher.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/refresher/refresher.page.ts ***!
    \***************************************************/

  /*! exports provided: RefresherPage */

  /***/
  function srcAppPagesRefresherRefresherPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefresherPage", function () {
      return RefresherPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RefresherPage = /*#__PURE__*/function () {
      function RefresherPage() {
        _classCallCheck(this, RefresherPage);

        this.items = new Array();
      }

      _createClass(RefresherPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "doRefresh",
        value: function doRefresh(evento) {
          var _this = this;

          setTimeout(function () {
            _this.items = new Array(40);
            evento.target.complete();
          }, 1500);
        }
      }]);

      return RefresherPage;
    }();

    RefresherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-refresher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./refresher.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refresher/refresher.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./refresher.page.scss */
      "./src/app/pages/refresher/refresher.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RefresherPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-refresher-refresher-module-es5.js.map