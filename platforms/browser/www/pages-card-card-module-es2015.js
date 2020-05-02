(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-card-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card/card.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card/card.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo='Card'></app-header>\n\n<ion-content padding>\n\n  <!-- Mode es para md o ios y es para determinar los estilos de la plataforma a usar -->\n  <!-- Es para simular en android los estilos de ios o a de material design -->\n  <ion-card mode='ios'>\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n\n\n  <!-- color='light' esto lo coge del fichero variables scss -->\n  <ion-card>\n    <ion-item color='primary'>\n      <ion-icon color='light' slot='start' name='pin'></ion-icon>\n      <ion-label>Marcador</ion-label>\n    </ion-item>\n\n    <ion-card-content>\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat incidunt quo tempora nemo libero perspiciatis\n      ad hic molestias consectetur nesciunt, aliquam adipisci quis voluptatem rerum, voluptate nostrum ipsa harum eum.\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-img src='/assets/shapes.svg'> </ion-img>\n    <ion-card-content>\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quibusdam sed aperiam voluptatem aut ea recusandae minus distinctio debitis error obcaecati molestias, voluptas perferendis corrupti autem alias? Expedita, porro omnis.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/card/card-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/card/card-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageRoutingModule", function() { return CardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.page */ "./src/app/pages/card/card.page.ts");




const routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_3__["CardPage"]
    }
];
let CardPageRoutingModule = class CardPageRoutingModule {
};
CardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/card/card.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.module.ts ***!
  \*******************************************/
/*! exports provided: CardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _card_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-routing.module */ "./src/app/pages/card/card-routing.module.ts");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card.page */ "./src/app/pages/card/card.page.ts");








let CardPageModule = class CardPageModule {
};
CardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _card_routing_module__WEBPACK_IMPORTED_MODULE_6__["CardPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
        declarations: [_card_page__WEBPACK_IMPORTED_MODULE_7__["CardPage"]]
    })
], CardPageModule);



/***/ }),

/***/ "./src/app/pages/card/card.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/card/card.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQvY2FyZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/card/card.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/card/card.page.ts ***!
  \*****************************************/
/*! exports provided: CardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPage", function() { return CardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardPage = class CardPage {
    constructor() { }
    ngOnInit() {
    }
};
CardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card/card.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.page.scss */ "./src/app/pages/card/card.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CardPage);



/***/ })

}]);
//# sourceMappingURL=pages-card-card-module-es2015.js.map