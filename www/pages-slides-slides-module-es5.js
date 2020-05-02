function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-slides-slides-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slides/slides.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slides/slides.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSlidesSlidesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- Cuando se cierra la pantalla, en ios se queda el icono de avatar visible,\n  por ello tenemos que poner un ngClass -->\n<ion-header no-border [ngClass]='ocultar'>\n  <ion-toolbar>\n    <img src='/assets/slides/user-6.svg' class='avatar animated fadeIn'>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-slides pager=\"true\" class=\"slide-full\">\n\n    <ion-slide *ngFor='let slide of slides'>\n      <ion-card mode='ios'>\n        <img [src]='slide.img' class='slide-image'>\n        <ion-card-header>\n          <ion-card-title>{{slide.titulo}}</ion-card-title>\n          <ion-card-content>\n            {{slide.desc}}\n          </ion-card-content>\n        </ion-card-header>\n      </ion-card>\n    </ion-slide>\n\n<ion-slide>\n  <ion-button (click)=\"comenzar()\" expand=\"full\" color=\"primary\" fill='clear'>\n    Comenzar!\n  </ion-button>\n</ion-slide>\n\n  </ion-slides>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/slides/slides-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/slides/slides-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SlidesPageRoutingModule */

  /***/
  function srcAppPagesSlidesSlidesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesPageRoutingModule", function () {
      return SlidesPageRoutingModule;
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


    var _slides_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./slides.page */
    "./src/app/pages/slides/slides.page.ts");

    var routes = [{
      path: '',
      component: _slides_page__WEBPACK_IMPORTED_MODULE_3__["SlidesPage"]
    }];

    var SlidesPageRoutingModule = function SlidesPageRoutingModule() {
      _classCallCheck(this, SlidesPageRoutingModule);
    };

    SlidesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SlidesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/slides/slides.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/slides/slides.module.ts ***!
    \***********************************************/

  /*! exports provided: SlidesPageModule */

  /***/
  function srcAppPagesSlidesSlidesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function () {
      return SlidesPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slides-routing.module */
    "./src/app/pages/slides/slides-routing.module.ts");
    /* harmony import */


    var _slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slides.page */
    "./src/app/pages/slides/slides.page.ts");

    var SlidesPageModule = function SlidesPageModule() {
      _classCallCheck(this, SlidesPageModule);
    };

    SlidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _slides_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlidesPageRoutingModule"]],
      declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]]
    })], SlidesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/slides/slides.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/slides/slides.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSlidesSlidesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".slide-full {\n  height: 100% !important;\n}\n\nion-card {\n  overflow: unset !important;\n}\n\nion-card {\n  height: 200px;\n  width: 300px;\n}\n\n.slide-image {\n  width: 100px;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: -50px;\n}\n\nion-card-header {\n  position: relative;\n  top: -50px;\n}\n\nion-card-content {\n  position: relative;\n  top: -50px;\n}\n\n.avatar {\n  width: 50px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvUHJveWVjdG9zL2N1cnNvLWlvbmljL3Byb3llY3Rvcy8wMy1jb21wb25lbnRlcy9zcmMvYXBwL3BhZ2VzL3NsaWRlcy9zbGlkZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zbGlkZXMvc2xpZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0FDQUo7O0FER0E7RUFDSSwwQkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zbGlkZXMvc2xpZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNsaWRlLWZ1bGwge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gICAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTUwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTUwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01MHB4O1xufVxuXG4uYXZhdGFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59IiwiLnNsaWRlLWZ1bGwge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/slides/slides.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/slides/slides.page.ts ***!
    \*********************************************/

  /*! exports provided: SlidesPage */

  /***/
  function srcAppPagesSlidesSlidesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesPage", function () {
      return SlidesPage;
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

    var SlidesPage = /*#__PURE__*/function () {
      // navController también se utiliza para navegación, como el routerLink
      function SlidesPage(navController) {
        _classCallCheck(this, SlidesPage);

        this.navController = navController;
        this.slides = [{
          img: '/assets/slides/photos.svg',
          titulo: 'Comparte Fotos',
          desc: 'Mira y comparte increíbles fotos de todo el mundo'
        }, {
          img: '/assets/slides/music-player-2.svg',
          titulo: 'Escucha Música',
          desc: 'Toda tu música favorita está aquí'
        }, {
          img: '/assets/slides/calendar.svg',
          titulo: 'Nunca olvides nada',
          desc: 'El mejor calendario del mundo a tu disposición'
        }, {
          img: '/assets/slides/placeholder-1.svg',
          titulo: 'Tu ubicación',
          desc: 'Siempre sabremos donde estás!'
        }];
        this.ocultar = '';
      }

      _createClass(SlidesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "comenzar",
        value: function comenzar() {
          this.ocultar = 'animated fadeOut fast';
          this.navController.navigateBack('/');
        }
      }]);

      return SlidesPage;
    }();

    SlidesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    SlidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slides',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slides.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/slides/slides.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slides.page.scss */
      "./src/app/pages/slides/slides.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], SlidesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-slides-slides-module-es5.js.map