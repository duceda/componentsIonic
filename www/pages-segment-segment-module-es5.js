function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-segment-segment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/segment/segment.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/segment/segment.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSegmentSegmentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo='Segment'></app-header>\n\n<ion-toolbar>\n\n  <ion-segment (ionChange)=\"segmentChanged($event)\" color='tertiary'>\n    <ion-segment-button value=\"Todos\">\n      <ion-label>Todos</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"DC Comics\">\n      <ion-label>DC Comics</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Marvel Comics\">\n      <ion-label>Marvel Comics</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n</ion-toolbar>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor='let heroe of (superheroes | async) | filtro: valorSegmento: \"publisher\"'\n      class='animated fadeIn fast'>\n      <ion-label>\n        <h3>{{heroe.superhero}} <small>{{heroe.alter_ego}}</small></h3>\n        <p>{{heroe.first_appearance}}</p>\n      </ion-label>\n      <ion-label slot='end' text-right>{{heroe.publisher}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list *ngIf=\"(superheroes | async) === null\">\n    <ion-item class='animated flash slow infinite' *ngFor=\"let item of [1,1,1,1,1,1,1,1,1,1,1,1,1]\">\n      <ion-label>\n        <!-- width -> es para decirle el ancho del skeleton text -->\n        <h3>\n          <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n      <ion-label>\n        <ion-label slot='end' text-right>\n          <ion-skeleton-text animated style=\"width: 40px\"></ion-skeleton-text>\n        </ion-label>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/segment/segment-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/segment/segment-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SegmentPageRoutingModule */

  /***/
  function srcAppPagesSegmentSegmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegmentPageRoutingModule", function () {
      return SegmentPageRoutingModule;
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


    var _segment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./segment.page */
    "./src/app/pages/segment/segment.page.ts");

    var routes = [{
      path: '',
      component: _segment_page__WEBPACK_IMPORTED_MODULE_3__["SegmentPage"]
    }];

    var SegmentPageRoutingModule = function SegmentPageRoutingModule() {
      _classCallCheck(this, SegmentPageRoutingModule);
    };

    SegmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SegmentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/segment/segment.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/segment/segment.module.ts ***!
    \*************************************************/

  /*! exports provided: SegmentPageModule */

  /***/
  function srcAppPagesSegmentSegmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegmentPageModule", function () {
      return SegmentPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
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


    var _segment_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./segment-routing.module */
    "./src/app/pages/segment/segment-routing.module.ts");
    /* harmony import */


    var _segment_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./segment.page */
    "./src/app/pages/segment/segment.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var SegmentPageModule = function SegmentPageModule() {
      _classCallCheck(this, SegmentPageModule);
    };

    SegmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _segment_routing_module__WEBPACK_IMPORTED_MODULE_6__["SegmentPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]],
      declarations: [_segment_page__WEBPACK_IMPORTED_MODULE_7__["SegmentPage"]]
    })], SegmentPageModule);
    /***/
  },

  /***/
  "./src/app/pages/segment/segment.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/segment/segment.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSegmentSegmentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlZ21lbnQvc2VnbWVudC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/segment/segment.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/segment/segment.page.ts ***!
    \***********************************************/

  /*! exports provided: SegmentPage */

  /***/
  function srcAppPagesSegmentSegmentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegmentPage", function () {
      return SegmentPage;
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
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/data.service */
    "./src/app/services/data.service.ts");

    var SegmentPage = /*#__PURE__*/function () {
      function SegmentPage(dataService) {
        _classCallCheck(this, SegmentPage);

        this.dataService = dataService;
      }

      _createClass(SegmentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.segmento.value = 'Todos';
          this.superheroes = this.dataService.getSuperHeroes();
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(evento) {
          // Para que la pipe devuelva todos en lugar de filtrar por 'todos'
          if (evento.detail.value === 'todos') {
            this.valorSegmento = '';
          } else {
            this.valorSegmento = evento.detail.value;
          }

          console.log(this.valorSegmento);
        }
      }]);

      return SegmentPage;
    }();

    SegmentPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"])], SegmentPage.prototype, "segmento", void 0);
    SegmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-segment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./segment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/segment/segment.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./segment.page.scss */
      "./src/app/pages/segment/segment.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], SegmentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-segment-segment-module-es5.js.map