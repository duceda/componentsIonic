function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesListListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo='Listas - Slidding'></app-header>\n\n<ion-content>\n\n  <ion-list #lista>\n      <ion-item-sliding  *ngFor='let user of usuarios | async'>\n\n        <ion-item>\n\n          <ion-label>\n            <h3>{{user.name}}</h3>\n            <p>{{user.email}}</p>\n          </ion-label>\n\n          <ion-label slot='end' text-right>{{user.phone}}</ion-label>\n\n        </ion-item>\n\n        <ion-item-options side=\"start\">\n          <!-- <ion-item-option (click)=\"favorite(item)\">Favorite</ion-item-option>\n          <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option> -->\n\n          <ion-item-option (click)=\"favorite(user)\">\n            <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\n          </ion-item-option>\n         \n          <ion-item-option color=\"secondary\" (click)=\"share(user)\">\n            <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n          </ion-item-option>\n\n        </ion-item-options>\n        \n\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"borrar(user)\">\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n      </ion-item-sliding>\n    </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/list/list-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/list/list-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ListPageRoutingModule */

  /***/
  function srcAppPagesListListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function () {
      return ListPageRoutingModule;
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


    var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/pages/list/list.page.ts");

    var routes = [{
      path: '',
      component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }];

    var ListPageRoutingModule = function ListPageRoutingModule() {
      _classCallCheck(this, ListPageRoutingModule);
    };

    ListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/list/list.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/list/list.module.ts ***!
    \*******************************************/

  /*! exports provided: ListPageModule */

  /***/
  function srcAppPagesListListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageModule", function () {
      return ListPageModule;
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


    var _list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-routing.module */
    "./src/app/pages/list/list-routing.module.ts");
    /* harmony import */


    var _list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/pages/list/list.page.ts");

    var ListPageModule = function ListPageModule() {
      _classCallCheck(this, ListPageModule);
    };

    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_6__["ListPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
      declarations: [_list_page__WEBPACK_IMPORTED_MODULE_7__["ListPage"]]
    })], ListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/list/list.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/list/list.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesListListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/list/list.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/list/list.page.ts ***!
    \*****************************************/

  /*! exports provided: ListPage */

  /***/
  function srcAppPagesListListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPage", function () {
      return ListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ListPage = /*#__PURE__*/function () {
      function ListPage(dataService) {
        _classCallCheck(this, ListPage);

        this.dataService = dataService;
      }

      _createClass(ListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuarios = this.dataService.getUsers();
        } // closeSlidingItems es para cerrar automáticamente un sliding cuando se toca alguna opción

      }, {
        key: "favorite",
        value: function favorite(user) {
          console.log(user);
          this.lista.closeSlidingItems();
        }
      }, {
        key: "share",
        value: function share(user) {
          console.log(user);
          this.lista.closeSlidingItems();
        }
      }, {
        key: "borrar",
        value: function borrar(user) {
          console.log(user);
          this.lista.closeSlidingItems();
        }
      }]);

      return ListPage;
    }();

    ListPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('lista', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])], ListPage.prototype, "lista", void 0);
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.page.scss */
      "./src/app/pages/list/list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], ListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-list-list-module-es5.js.map