(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-input-input-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input/input.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input/input.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo='Input - Forms'></app-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>\n      <ion-label>Nombre: {{nombre || 'No hay nombre'}}</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label position='floating'>Nombre</ion-label>\n      <ion-input [(ngModel)]=\"nombre\" type='text'></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <form #formulariooo='ngForm' (ngSubmit)=\"onSubmitTemplate()\">\n\n    <ion-list>\n\n      <ion-list-header>\n        <ion-label>Formulario template válido: {{formulariooo.valid}}</ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label position=\"floating\">E-Mail <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input required name=\"email\" type=\"email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" [(ngModel)]=\"usuario.email\"]></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input required name=\"password\" type=\"password\" [(ngModel)]=\"usuario.password\"]></ion-input>\n      </ion-item>\n\n      <ion-button expand='full' type=\"submit\" [disabled]=\"formulariooo.invalid\">\n        submitForm\n      </ion-button>\n\n    </ion-list>\n  </form>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/input/input-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/input/input-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: InputPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageRoutingModule", function() { return InputPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.page */ "./src/app/pages/input/input.page.ts");




const routes = [
    {
        path: '',
        component: _input_page__WEBPACK_IMPORTED_MODULE_3__["InputPage"]
    }
];
let InputPageRoutingModule = class InputPageRoutingModule {
};
InputPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InputPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/input/input.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.module.ts ***!
  \*********************************************/
/*! exports provided: InputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageModule", function() { return InputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _input_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-routing.module */ "./src/app/pages/input/input-routing.module.ts");
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input.page */ "./src/app/pages/input/input.page.ts");








let InputPageModule = class InputPageModule {
};
InputPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _input_routing_module__WEBPACK_IMPORTED_MODULE_6__["InputPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
        declarations: [_input_page__WEBPACK_IMPORTED_MODULE_7__["InputPage"]]
    })
], InputPageModule);



/***/ }),

/***/ "./src/app/pages/input/input.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lucHV0L2lucHV0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/input/input.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/input/input.page.ts ***!
  \*******************************************/
/*! exports provided: InputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPage", function() { return InputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputPage = class InputPage {
    constructor() { }
    ngOnInit() {
    }
    onSubmitTemplate() {
        console.log('form submit');
        console.log(this.usuario);
    }
};
InputPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input/input.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input.page.scss */ "./src/app/pages/input/input.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InputPage);



/***/ })

}]);
//# sourceMappingURL=pages-input-input-module-es2015.js.map