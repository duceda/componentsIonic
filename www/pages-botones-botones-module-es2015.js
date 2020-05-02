(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-botones-botones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botones/botones.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botones/botones.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n\n    <ion-buttons slot='start'>\n      <ion-back-button text='Back' defaultHref='/'></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>botones</ion-title>\n\n    <ion-buttons slot='end'>\n      <ion-button color='primary'>\n        <ion-icon name='heart'></ion-icon>\n      </ion-button>\n\n      <ion-button color='primary'>\n        <ion-icon name='star'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Botones normales -->\n  <ion-button expand='full' size='small' color='primary'> Small </ion-button>\n  <ion-button expand='full' size='default' color='primary'> Default </ion-button>\n  <ion-button expand='full' size='large' color='primary'> Large </ion-button>\n\n  <!-- Anchor -->\n  <ion-button class='top-20' expand='full' routerLink='/alert' color='tertiary'> Anchor </ion-button>\n\n  <!-- ion-row + ion-col -->\n  <ion-row class='top-20'>\n    <ion-col>\n      <ion-button routerLink='/avatar'> Avatar</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button routerLink='/action-sheet'>Action Sheet</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <!-- Fill - Son los tipos de bordes y llenados de botones -->\n  <ion-button class='top-20' fill='clear'> Clear </ion-button>\n  <ion-button class='top-20' fill='outline'> Outline </ion-button>\n  <ion-button class='top-20' fill='solid'> Solid </ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/botones/botones-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/botones/botones-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BotonesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPageRoutingModule", function() { return BotonesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _botones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./botones.page */ "./src/app/pages/botones/botones.page.ts");




const routes = [
    {
        path: '',
        component: _botones_page__WEBPACK_IMPORTED_MODULE_3__["BotonesPage"]
    }
];
let BotonesPageRoutingModule = class BotonesPageRoutingModule {
};
BotonesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BotonesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/botones/botones.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.module.ts ***!
  \*************************************************/
/*! exports provided: BotonesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPageModule", function() { return BotonesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _botones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./botones-routing.module */ "./src/app/pages/botones/botones-routing.module.ts");
/* harmony import */ var _botones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./botones.page */ "./src/app/pages/botones/botones.page.ts");







let BotonesPageModule = class BotonesPageModule {
};
BotonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _botones_routing_module__WEBPACK_IMPORTED_MODULE_5__["BotonesPageRoutingModule"]
        ],
        declarations: [_botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]]
    })
], BotonesPageModule);



/***/ }),

/***/ "./src/app/pages/botones/botones.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-20 {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmkvUHJveWVjdG9zL2N1cnNvLWlvbmljL3Byb3llY3Rvcy8wMy1jb21wb25lbnRlcy9zcmMvYXBwL3BhZ2VzL2JvdG9uZXMvYm90b25lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JvdG9uZXMvYm90b25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm90b25lcy9ib3RvbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtMjB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iLCIudG9wLTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/botones/botones.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/botones/botones.page.ts ***!
  \***********************************************/
/*! exports provided: BotonesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPage", function() { return BotonesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BotonesPage = class BotonesPage {
    constructor() { }
    ngOnInit() {
    }
};
BotonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-botones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./botones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botones/botones.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./botones.page.scss */ "./src/app/pages/botones/botones.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BotonesPage);



/***/ })

}]);
//# sourceMappingURL=pages-botones-botones-module-es2015.js.map