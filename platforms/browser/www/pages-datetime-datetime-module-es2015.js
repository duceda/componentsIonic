(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-datetime-datetime-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datetime/datetime.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datetime/datetime.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo='datetime'></app-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>\n      <ion-label>Fecha de nacimiento</ion-label>\n    </ion-list-header>\n\n    <!-- Se le podría poner esto en el value inicial value='{{fechaNacim | date: \"yyyy-MM-dd\"}}' -->\n    <ion-item>\n      <ion-label>Fecha de nacimiento</ion-label>\n      <ion-datetime placeholder=\"Nacimiento\" display-format='YYYY MMMM DD' cancel-text='Cancelar!!'\n        [ngModel]='fechaNacim.toISOString()' (ionChange)='cambioFecha($event)'></ion-datetime>\n    </ion-item>\n\n\n\n    <ion-list-header>\n      <ion-label>Restricciones</ion-label>\n    </ion-list-header>\n\n    <!-- DateTime no tiene una validaciónn automática para min y max, es decir, te deja seleccionar lo que quieras -->\n    <ion-item>\n      <ion-label>Min y max</ion-label>\n      <ion-datetime placeholder=\"yyyy-mm-dd\" display-format='YYYY MMMM DD' min='2016-01-01' max='2016-02-02'>\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Años</ion-label>\n      <ion-datetime placeholder=\"yyyy\" display-format='YYYY' min='2019' max='2025' value='2020'></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Custom Date</ion-label>\n      <ion-datetime [pickerOptions]='customPickerOptions' [(ngModel)]='customDate'></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/datetime/datetime-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/datetime/datetime-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DatetimePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePageRoutingModule", function() { return DatetimePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _datetime_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datetime.page */ "./src/app/pages/datetime/datetime.page.ts");




const routes = [
    {
        path: '',
        component: _datetime_page__WEBPACK_IMPORTED_MODULE_3__["DatetimePage"]
    }
];
let DatetimePageRoutingModule = class DatetimePageRoutingModule {
};
DatetimePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DatetimePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/datetime/datetime.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/datetime/datetime.module.ts ***!
  \***************************************************/
/*! exports provided: DatetimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePageModule", function() { return DatetimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _datetime_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datetime-routing.module */ "./src/app/pages/datetime/datetime-routing.module.ts");
/* harmony import */ var _datetime_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datetime.page */ "./src/app/pages/datetime/datetime.page.ts");








let DatetimePageModule = class DatetimePageModule {
};
DatetimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _datetime_routing_module__WEBPACK_IMPORTED_MODULE_6__["DatetimePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
        declarations: [_datetime_page__WEBPACK_IMPORTED_MODULE_7__["DatetimePage"]]
    })
], DatetimePageModule);



/***/ }),

/***/ "./src/app/pages/datetime/datetime.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/datetime/datetime.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGV0aW1lL2RhdGV0aW1lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/datetime/datetime.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/datetime/datetime.page.ts ***!
  \*************************************************/
/*! exports provided: DatetimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePage", function() { return DatetimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DatetimePage = class DatetimePage {
    constructor() {
        this.fechaNacim = new Date();
    }
    ngOnInit() {
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: (evento) => {
                        console.log(evento);
                        console.log('Clicked Save!');
                    }
                }, {
                    text: 'Log',
                    handler: () => {
                        console.log('Clicked Log. Do not Dismiss.');
                        // Return false para que no se cierre cuando se haga click fuera
                        return false;
                    }
                }]
        };
    }
    cambioFecha(event) {
        console.log('Date', new Date(event.detail.value));
    }
};
DatetimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datetime',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datetime.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datetime/datetime.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datetime.page.scss */ "./src/app/pages/datetime/datetime.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DatetimePage);



/***/ })

}]);
//# sourceMappingURL=pages-datetime-datetime-module-es2015.js.map