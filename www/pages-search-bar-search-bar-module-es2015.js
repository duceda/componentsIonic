(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-bar-search-bar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-bar/search-bar.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-bar/search-bar.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n\n    <ion-buttons slot='start'>\n      <ion-back-button defaultHref='/'></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>searchBar</ion-title>\n  </ion-toolbar>\n\n  <!-- [debounce]=\"250\"  se utiliza para que no llame al evento cada vez que cambie, \n  es decir, cada 250 milisegundos se llama, hayas pulsado una tecla o si escribes deprisa -->\n  <ion-searchbar animated placeholder=\"Filter Pizza\"\n  inputmode=\"decimal\" type=\"decimal\"\n  (ionChange)=\"buscar($event)\"\n  showCancelButton=\"250\"></ion-searchbar>\n\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n  <ion-item *ngFor='let album of albumes | filtro: textoBuscar: \"title\"'>\n    {{album.title}}\n  </ion-item>\n</ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/search-bar/search-bar-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/search-bar/search-bar-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarPageRoutingModule", function() { return SearchBarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_bar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-bar.page */ "./src/app/pages/search-bar/search-bar.page.ts");




const routes = [
    {
        path: '',
        component: _search_bar_page__WEBPACK_IMPORTED_MODULE_3__["SearchBarPage"]
    }
];
let SearchBarPageRoutingModule = class SearchBarPageRoutingModule {
};
SearchBarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchBarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search-bar/search-bar.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search-bar/search-bar.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarPageModule", function() { return SearchBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_bar_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-bar-routing.module */ "./src/app/pages/search-bar/search-bar-routing.module.ts");
/* harmony import */ var _search_bar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-bar.page */ "./src/app/pages/search-bar/search-bar.page.ts");








let SearchBarPageModule = class SearchBarPageModule {
};
SearchBarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _search_bar_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchBarPageRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]
        ],
        declarations: [_search_bar_page__WEBPACK_IMPORTED_MODULE_7__["SearchBarPage"]]
    })
], SearchBarPageModule);



/***/ }),

/***/ "./src/app/pages/search-bar/search-bar.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/search-bar/search-bar.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/search-bar/search-bar.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/search-bar/search-bar.page.ts ***!
  \*****************************************************/
/*! exports provided: SearchBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarPage", function() { return SearchBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SearchBarPage = class SearchBarPage {
    constructor(dataService) {
        this.dataService = dataService;
        this.albumes = [];
    }
    ngOnInit() {
        this.dataService.getAlbums().subscribe((albums) => {
            console.log(albums);
            this.albumes = albums;
        });
    }
    buscar(evento) {
        this.textoBuscar = evento.detail.value;
        this.dataService.getAlbums();
    }
};
SearchBarPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
];
SearchBarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-bar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-bar/search-bar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-bar.page.scss */ "./src/app/pages/search-bar/search-bar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
], SearchBarPage);



/***/ })

}]);
//# sourceMappingURL=pages-search-bar-search-bar-module-es2015.js.map