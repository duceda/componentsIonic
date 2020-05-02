function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-infinite-scroll-infinite-scroll-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/infinite-scroll/infinite-scroll.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/infinite-scroll/infinite-scroll.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInfiniteScrollInfiniteScrollPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo='Infinite-Scroll'></app-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor='let item of data; let i = index'>\n      <ion-label>\n        Item: {{i+1}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <!-- threshold es lo cerca del fin de la página cuando se hará la petición para traer los siguientes elementos -->\n  <!-- cargarSiguiente se lanzará cuando el usuario llegue a 100px del final -->\n  <!-- spinner se utilizará para  -->\n  <ion-infinite-scroll threshold=\"150px\" (ionInfinite)=\"cargarSiguientes($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"crescent\"\n      loadingText=\"Cargando...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/infinite-scroll/infinite-scroll-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/infinite-scroll/infinite-scroll-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: InfiniteScrollPageRoutingModule */

  /***/
  function srcAppPagesInfiniteScrollInfiniteScrollRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteScrollPageRoutingModule", function () {
      return InfiniteScrollPageRoutingModule;
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


    var _infinite_scroll_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./infinite-scroll.page */
    "./src/app/pages/infinite-scroll/infinite-scroll.page.ts");

    var routes = [{
      path: '',
      component: _infinite_scroll_page__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollPage"]
    }];

    var InfiniteScrollPageRoutingModule = function InfiniteScrollPageRoutingModule() {
      _classCallCheck(this, InfiniteScrollPageRoutingModule);
    };

    InfiniteScrollPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InfiniteScrollPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/infinite-scroll/infinite-scroll.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/infinite-scroll/infinite-scroll.module.ts ***!
    \*****************************************************************/

  /*! exports provided: InfiniteScrollPageModule */

  /***/
  function srcAppPagesInfiniteScrollInfiniteScrollModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteScrollPageModule", function () {
      return InfiniteScrollPageModule;
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


    var _infinite_scroll_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./infinite-scroll-routing.module */
    "./src/app/pages/infinite-scroll/infinite-scroll-routing.module.ts");
    /* harmony import */


    var _infinite_scroll_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./infinite-scroll.page */
    "./src/app/pages/infinite-scroll/infinite-scroll.page.ts");

    var InfiniteScrollPageModule = function InfiniteScrollPageModule() {
      _classCallCheck(this, InfiniteScrollPageModule);
    };

    InfiniteScrollPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _infinite_scroll_routing_module__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_infinite_scroll_page__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollPage"]]
    })], InfiniteScrollPageModule);
    /***/
  },

  /***/
  "./src/app/pages/infinite-scroll/infinite-scroll.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/infinite-scroll/infinite-scroll.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInfiniteScrollInfiniteScrollPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZmluaXRlLXNjcm9sbC9pbmZpbml0ZS1zY3JvbGwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/infinite-scroll/infinite-scroll.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/infinite-scroll/infinite-scroll.page.ts ***!
    \***************************************************************/

  /*! exports provided: InfiniteScrollPage */

  /***/
  function srcAppPagesInfiniteScrollInfiniteScrollPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteScrollPage", function () {
      return InfiniteScrollPage;
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

    var InfiniteScrollPage = /*#__PURE__*/function () {
      function InfiniteScrollPage() {
        _classCallCheck(this, InfiniteScrollPage);

        this.data = new Array(20);
      }

      _createClass(InfiniteScrollPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "cargarSiguientes",
        value: function cargarSiguientes(evento) {
          var _this = this;

          console.log(evento);
          setTimeout(function () {
            var _this$data;

            if (_this.data.length > 50) {
              evento.target.complete();
              _this.infiniteScroll.disabled = true;
              return;
            }

            var nuevoArr = new Array(20);

            (_this$data = _this.data).push.apply(_this$data, nuevoArr); // Para cancelar el evento de cargar siguientes


            evento.target.complete();
          }, 1000);
        }
      }]);

      return InfiniteScrollPage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], InfiniteScrollPage.prototype, "infiniteScroll", void 0);
    InfiniteScrollPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-infinite-scroll',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./infinite-scroll.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/infinite-scroll/infinite-scroll.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./infinite-scroll.page.scss */
      "./src/app/pages/infinite-scroll/infinite-scroll.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], InfiniteScrollPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-infinite-scroll-infinite-scroll-module-es5.js.map