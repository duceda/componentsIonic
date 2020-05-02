(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popover-popover-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='primary'>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/'></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Popover</ion-title>\n\n    <!-- slot=\"icon-only\" es para que se vea el icono más grande -->\n    <ion-buttons slot=\"end\">\n      <ion-button (click)='mostrarPop($event)'>\n        <ion-icon name=\"add\" slot='icon-only'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button (click)='mostrarPop($event)' expand='full'>\n    <ion-icon name=\"add\" slot='start'></ion-icon>\n    <ion-label>Popover</ion-label>\n  </ion-button>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color='primary'>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"mostrarPop($event)\">\n        <ion-icon name=\"add\" slot='icon-only'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Footer</ion-title>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/popover/popover-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/popover/popover-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PopoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageRoutingModule", function() { return PopoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.page */ "./src/app/pages/popover/popover.page.ts");




const routes = [
    {
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"]
    }
];
let PopoverPageRoutingModule = class PopoverPageRoutingModule {
};
PopoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PopoverPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/popover/popover.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.module.ts ***!
  \*************************************************/
/*! exports provided: PopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover-routing.module */ "./src/app/pages/popover/popover-routing.module.ts");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover.page */ "./src/app/pages/popover/popover.page.ts");
/* harmony import */ var src_app_components_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/popover-info/popover-info.component */ "./src/app/components/popover-info/popover-info.component.ts");









// entryComponents son los elementos que se crearán de forma dinámica
let PopoverPageModule = class PopoverPageModule {
};
PopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        entryComponents: [
            src_app_components_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_8__["PopoverInfoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _popover_routing_module__WEBPACK_IMPORTED_MODULE_6__["PopoverPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
        declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_7__["PopoverPage"]]
    })
], PopoverPageModule);



/***/ }),

/***/ "./src/app/pages/popover/popover.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/popover/popover.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/popover/popover.page.ts ***!
  \***********************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/popover-info/popover-info.component */ "./src/app/components/popover-info/popover-info.component.ts");




let PopoverPage = class PopoverPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    // event: evento -> Necesita el evento para que el popover se coloque en el sitio desde
    // donde se ha lanzado ese evento
    // backdropDismiss: false -> se usa para que no se cierre aunque pinches fuera
    mostrarPop(evento) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_popover_info_popover_info_component__WEBPACK_IMPORTED_MODULE_3__["PopoverInfoComponent"],
                event: evento,
                mode: 'ios',
                backdropDismiss: false
            });
            yield popover.present();
            // onDidDismiss se utiliza para decirle que cuando se haya cerrado el popover haga algo
            // Es más lento
            // const { data } = await popover.onDidDismiss();
            // onWillDismiss Cuando esté a punto de cerrarse que lance una acción
            // Aparece nada más cerrarse
            const { data } = yield popover.onWillDismiss();
            console.log('Padre, ' + data);
        });
    }
};
PopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popover.page.scss */ "./src/app/pages/popover/popover.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], PopoverPage);



/***/ })

}]);
//# sourceMappingURL=pages-popover-popover-module-es2015.js.map