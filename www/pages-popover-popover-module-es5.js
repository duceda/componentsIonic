function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popover-popover-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPopoverPopoverPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='primary'>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/'></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Popover</ion-title>\n\n    <!-- slot=\"icon-only\" es para que se vea el icono más grande -->\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='mostrarPop($event)'>\n        <ion-icon name=\"add\" slot='icon-only'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button (click)='mostrarPop($event)' expand='full'>\n    <ion-icon name=\"add\" slot='start'></ion-icon>\n    <ion-label>Popover</ion-label>\n  </ion-button>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color='primary'>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"mostrarPop($event)\">\n        <ion-icon name=\"add\" slot='icon-only'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Footer</ion-title>\n\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/popover/popover-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/popover/popover-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PopoverPageRoutingModule */

  /***/
  function srcAppPagesPopoverPopoverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPageRoutingModule", function () {
      return PopoverPageRoutingModule;
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


    var _popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./popover.page */
    "./src/app/pages/popover/popover.page.ts");

    var routes = [{
      path: '',
      component: _popover_page__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"]
    }];

    var PopoverPageRoutingModule = function PopoverPageRoutingModule() {
      _classCallCheck(this, PopoverPageRoutingModule);
    };

    PopoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PopoverPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/popover/popover.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/popover/popover.module.ts ***!
    \*************************************************/

  /*! exports provided: PopoverPageModule */

  /***/
  function srcAppPagesPopoverPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function () {
      return PopoverPageModule;
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


    var _popover_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./popover-routing.module */
    "./src/app/pages/popover/popover-routing.module.ts");
    /* harmony import */


    var _popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./popover.page */
    "./src/app/pages/popover/popover.page.ts");
    /* harmony import */


    var src_app_components_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/popover-info/popover-info.component */
    "./src/app/components/popover-info/popover-info.component.ts"); // entryComponents son los elementos que se crearán de forma dinámica


    var PopoverPageModule = function PopoverPageModule() {
      _classCallCheck(this, PopoverPageModule);
    };

    PopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      entryComponents: [src_app_components_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_8__["PopoverInfoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _popover_routing_module__WEBPACK_IMPORTED_MODULE_6__["PopoverPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_7__["PopoverPage"]]
    })], PopoverPageModule);
    /***/
  },

  /***/
  "./src/app/pages/popover/popover.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/popover/popover.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPopoverPopoverPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/popover/popover.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/popover/popover.page.ts ***!
    \***********************************************/

  /*! exports provided: PopoverPage */

  /***/
  function srcAppPagesPopoverPopoverPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
      return PopoverPage;
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


    var src_app_components_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/popover-info/popover-info.component */
    "./src/app/components/popover-info/popover-info.component.ts");

    var PopoverPage = /*#__PURE__*/function () {
      function PopoverPage(popoverController) {
        _classCallCheck(this, PopoverPage);

        this.popoverController = popoverController;
      }

      _createClass(PopoverPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // event: evento -> Necesita el evento para que el popover se coloque en el sitio desde
        // donde se ha lanzado ese evento
        // backdropDismiss: false -> se usa para que no se cierre aunque pinches fuera

      }, {
        key: "mostrarPop",
        value: function mostrarPop(evento) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover, _yield$popover$onWill, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_3__["PopoverInfoComponent"],
                      event: evento,
                      mode: 'ios',
                      backdropDismiss: false
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    _context.next = 7;
                    return popover.onWillDismiss();

                  case 7:
                    _yield$popover$onWill = _context.sent;
                    data = _yield$popover$onWill.data;
                    console.log('Padre, ' + data);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PopoverPage;
    }();

    PopoverPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popover.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popover.page.scss */
      "./src/app/pages/popover/popover.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-popover-popover-module-es5.js.map