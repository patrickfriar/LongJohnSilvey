webpackJsonp([14],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bigcommerce_stencil_utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_faceted_search__ = __webpack_require__(402);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Category=function(_CatalogPage){_inherits(Category,_CatalogPage);function Category(){_classCallCheck(this,Category);return _possibleConstructorReturn(this,_CatalogPage.apply(this,arguments))}Category.prototype.loaded=function loaded(){if(__WEBPACK_IMPORTED_MODULE_2_jquery___default()('#facetedSearch').length>0){this.initFacetedSearch()}else{this.onSortBySubmit=this.onSortBySubmit.bind(this);__WEBPACK_IMPORTED_MODULE_0__bigcommerce_stencil_utils__["c" /* hooks */].on('sortBy-submitted',this.onSortBySubmit)}};Category.prototype.initFacetedSearch=function initFacetedSearch(){var $productListingContainer=__WEBPACK_IMPORTED_MODULE_2_jquery___default()('#product-listing-container');var $facetedSearchContainer=__WEBPACK_IMPORTED_MODULE_2_jquery___default()('#faceted-search-container');var productsPerPage=this.context.categoryProductsPerPage;var requestOptions={config:{category:{shop_by_price:true,products:{limit:productsPerPage}}},template:{productListing:'category/product-listing',sidebar:'category/sidebar'},showMore:'category/show-more'};this.facetedSearch=new __WEBPACK_IMPORTED_MODULE_3__common_faceted_search__["a" /* default */](requestOptions,function(content){$productListingContainer.html(content.productListing);$facetedSearchContainer.html(content.sidebar);__WEBPACK_IMPORTED_MODULE_2_jquery___default()('html, body').animate({scrollTop:0},100)})};return Category}(__WEBPACK_IMPORTED_MODULE_1__catalog__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.14.js.map