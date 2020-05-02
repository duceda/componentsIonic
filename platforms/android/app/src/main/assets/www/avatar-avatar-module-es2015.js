(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["avatar-avatar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot='start'>\n      <ion-back-button defaultHref='/'></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Avatar</ion-title>\n\n    <ion-buttons slot='end'>\n      <ion-avatar> <img src='/assets/lee.jpg'> </ion-avatar>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-chip *ngFor='let i of [1,1,1,1,1,1,1,1,1]' color='primary'>\n    <ion-avatar>\n      <img src='/assets/lee.jpg'>\n    </ion-avatar>\n    <ion-label>\n      Stan Lee\n    </ion-label>\n  </ion-chip>\n\n  <ion-list>\n    <ion-item *ngFor='let i of [1,1,1,1,1,1,1,1,1]'>\n      <ion-avatar slot='start'>\n        <img src='/assets/lee.jpg'>\n      </ion-avatar>\n      <ion-label>\n        Stan Lee\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/avatar/avatar-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/avatar/avatar-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AvatarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPageRoutingModule", function() { return AvatarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _avatar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatar.page */ "./src/app/pages/avatar/avatar.page.ts");




const routes = [
    {
        path: '',
        component: _avatar_page__WEBPACK_IMPORTED_MODULE_3__["AvatarPage"]
    }
];
let AvatarPageRoutingModule = class AvatarPageRoutingModule {
};
AvatarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AvatarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/avatar/avatar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/avatar/avatar.module.ts ***!
  \***********************************************/
/*! exports provided: AvatarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPageModule", function() { return AvatarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatar-routing.module */ "./src/app/pages/avatar/avatar-routing.module.ts");
/* harmony import */ var _avatar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar.page */ "./src/app/pages/avatar/avatar.page.ts");







let AvatarPageModule = class AvatarPageModule {
};
AvatarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AvatarPageRoutingModule"]
        ],
        declarations: [_avatar_page__WEBPACK_IMPORTED_MODULE_6__["AvatarPage"]]
    })
], AvatarPageModule);



/***/ }),

/***/ "./src/app/pages/avatar/avatar.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/avatar/avatar.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F2YXRhci9hdmF0YXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/avatar/avatar.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/avatar/avatar.page.ts ***!
  \*********************************************/
/*! exports provided: AvatarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPage", function() { return AvatarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AvatarPage = class AvatarPage {
    constructor() { }
    ngOnInit() {
    }
};
AvatarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-avatar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./avatar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./avatar.page.scss */ "./src/app/pages/avatar/avatar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AvatarPage);



/***/ })

}]);
//# sourceMappingURL=avatar-avatar-module-es2015.js.map