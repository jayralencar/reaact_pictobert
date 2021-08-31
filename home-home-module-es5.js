function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js ***!
    \*************************************************************************/

  /*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */

  /***/
  function node_modulesNgxPagination__ivy_ngcc__DistNgxPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DEFAULT_STYLES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DEFAULT_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function () {
      return NgxPaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationService", function () {
      return PaginationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function () {
      return PaginationControlsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function () {
      return PaginationControlsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return PaginatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PaginationControlsComponent_ul_2_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.previous();
        })("click", function PaginationControlsComponent_ul_2_li_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.previous();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.previousLabel + " " + ctx_r5.screenReaderPageLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.previousLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.previousLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_a_1_Template, 4, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_1_span_2_Template, 4, 2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isFirstPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 < _r0.getCurrent());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isFirstPage());
      }
    }

    function PaginationControlsComponent_ul_2_li_4_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setCurrent(page_r10.value);
        })("click", function PaginationControlsComponent_ul_2_li_4_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.setCurrent(page_r10.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.screenReaderPageLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
      }
    }

    function PaginationControlsComponent_ul_2_li_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.screenReaderCurrentLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r10.label === "..." ? page_r10.label : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, page_r10.label, ""));
      }
    }

    function PaginationControlsComponent_ul_2_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_4_a_1_Template, 6, 5, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_4_ng_container_2_Template, 6, 5, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current", _r0.getCurrent() === page_r10.value)("ellipsis", page_r10.label === "...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() !== page_r10.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.getCurrent() === page_r10.value);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.next();
        })("click", function PaginationControlsComponent_ul_2_li_5_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r0.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r20.nextLabel + " " + ctx_r20.screenReaderPageLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.nextLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.nextLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.screenReaderPageLabel);
      }
    }

    function PaginationControlsComponent_ul_2_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_5_a_1_Template, 4, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_li_5_span_2_Template, 4, 2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isLastPage());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.isLastPage());
      }
    }

    function PaginationControlsComponent_ul_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationControlsComponent_ul_2_li_1_Template, 3, 4, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationControlsComponent_ul_2_li_4_Template, 3, 6, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationControlsComponent_ul_2_li_5_Template, 3, 4, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("responsive", ctx_r1.responsive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.screenReaderPaginationLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _r0.getCurrent(), " / ", _r0.getLastPage(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.pages);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.directionLinks);
      }
    }

    var PaginationService =
    /** @class */
    function () {
      function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
      }

      PaginationService.prototype.defaultId = function () {
        return this.DEFAULT_ID;
      };
      /**
       * Register a PaginationInstance with this service. Returns a
       * boolean value signifying whether the instance is new or
       * updated (true = new or updated, false = unchanged).
       */


      PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
          instance.id = this.DEFAULT_ID;
        }

        if (!this.instances[instance.id]) {
          this.instances[instance.id] = instance;
          return true;
        } else {
          return this.updateInstance(instance);
        }
      };
      /**
       * Check each property of the instance and update any that have changed. Return
       * true if any changes were made, else return false.
       */


      PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;

        for (var prop in this.instances[instance.id]) {
          if (instance[prop] !== this.instances[instance.id][prop]) {
            this.instances[instance.id][prop] = instance[prop];
            changed = true;
          }
        }

        return changed;
      };
      /**
       * Returns the current page number.
       */


      PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
          return this.instances[id].currentPage;
        }
      };
      /**
       * Sets the current page number.
       */


      PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
          var instance = this.instances[id];
          var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);

          if (page <= maxPage && 1 <= page) {
            this.instances[id].currentPage = page;
            this.change.emit(id);
          }
        }
      };
      /**
       * Sets the value of instance.totalItems
       */


      PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
          this.instances[id].totalItems = totalItems;
          this.change.emit(id);
        }
      };
      /**
       * Sets the value of instance.itemsPerPage.
       */


      PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
          this.instances[id].itemsPerPage = itemsPerPage;
          this.change.emit(id);
        }
      };
      /**
       * Returns a clone of the pagination instance object matching the id. If no
       * id specified, returns the instance corresponding to the default id.
       */


      PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) {
          id = this.DEFAULT_ID;
        }

        if (this.instances[id]) {
          return this.clone(this.instances[id]);
        }

        return {};
      };
      /**
       * Perform a shallow clone of an object.
       */


      PaginationService.prototype.clone = function (obj) {
        var target = {};

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
          }
        }

        return target;
      };

      PaginationService.ɵfac = function PaginationService_Factory(t) {
        return new (t || PaginationService)();
      };

      PaginationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PaginationService,
        factory: function factory(t) {
          return PaginationService.ɵfac(t);
        }
      });
      return PaginationService;
    }();

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

    var PaginatePipe =
    /** @class */
    function () {
      function PaginatePipe(service) {
        this.service = service; // store the values from the last time the pipe was invoked

        this.state = {};
      }

      PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
          var _id = args.id || this.service.defaultId();

          if (this.state[_id]) {
            return this.state[_id].slice;
          } else {
            return collection;
          }
        }

        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        var emitChange = this.service.register(instance);

        if (!serverSideMode && collection instanceof Array) {
          perPage = +perPage || LARGE_NUMBER;
          start = (instance.currentPage - 1) * perPage;
          end = start + perPage;
          var isIdentical = this.stateIsIdentical(id, collection, start, end);

          if (isIdentical) {
            return this.state[id].slice;
          } else {
            var slice = collection.slice(start, end);
            this.saveState(id, collection, slice, start, end);
            this.service.change.emit(id);
            return slice;
          }
        } else {
          if (emitChange) {
            this.service.change.emit(id);
          } // save the state for server-side collection to avoid null
          // flash as new data loads.


          this.saveState(id, collection, collection, start, end);
          return collection;
        }
      };
      /**
       * Create an PaginationInstance object, using defaults for any optional properties not supplied.
       */


      PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
          id: config.id != null ? config.id : this.service.defaultId(),
          itemsPerPage: +config.itemsPerPage || 0,
          currentPage: +config.currentPage || 1,
          totalItems: +config.totalItems || collection.length
        };
      };
      /**
       * Ensure the argument passed to the filter contains the required properties.
       */


      PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) {
          return !(prop in config);
        });

        if (0 < missing.length) {
          throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
      };
      /**
       * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
       * array for a given id. This means that the next time the pipe is run on this collection & id, we just
       * need to check that the collection, start and end points are all identical, and if so, return the
       * last sliced array.
       */


      PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
          collection: collection,
          size: collection.length,
          slice: slice,
          start: start,
          end: end
        };
      };
      /**
       * For a given id, returns true if the collection, size, start and end values are identical.
       */


      PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];

        if (!state) {
          return false;
        }

        var isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;

        if (!isMetaDataIdentical) {
          return false;
        }

        return state.slice.every(function (element, index) {
          return element === collection[start + index];
        });
      };

      PaginatePipe = __decorate$1([__metadata("design:paramtypes", [PaginationService])], PaginatePipe);

      PaginatePipe.ɵfac = function PaginatePipe_Factory(t) {
        return new (t || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService));
      };

      PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "paginate",
        type: PaginatePipe,
        pure: false
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'paginate',
            pure: false
          }]
        }], function () {
          return [{
            type: PaginationService
          }];
        }, null);
      })();

      return PaginatePipe;
    }();
    /**
     * The default template and styles for the pagination links are borrowed directly
     * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
     */


    var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\"\n                         (pageBoundsCorrection)=\"pageBoundsCorrection.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
    var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    function coerceToBoolean(input) {
      return !!input && input !== 'false';
    }
    /**
     * The default pagination controls component. Actually just a default implementation of a custom template.
     */


    var PaginationControlsComponent =
    /** @class */
    function () {
      function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
      }

      Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function get() {
          return this._directionLinks;
        },
        set: function set(value) {
          this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function get() {
          return this._autoHide;
        },
        set: function set(value) {
          this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function get() {
          return this._responsive;
        },
        set: function set(value) {
          this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "id", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Number)], PaginationControlsComponent.prototype, "maxSize", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "directionLinks", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "autoHide", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "responsive", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "previousLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "nextLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageChange", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(t) {
        return new (t || PaginationControlsComponent)();
      };

      PaginationControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationControlsComponent,
        selectors: [["pagination-controls"]],
        inputs: {
          maxSize: "maxSize",
          previousLabel: "previousLabel",
          nextLabel: "nextLabel",
          screenReaderPaginationLabel: "screenReaderPaginationLabel",
          screenReaderPageLabel: "screenReaderPageLabel",
          screenReaderCurrentLabel: "screenReaderCurrentLabel",
          directionLinks: "directionLinks",
          autoHide: "autoHide",
          responsive: "responsive",
          id: "id"
        },
        outputs: {
          pageChange: "pageChange",
          pageBoundsCorrection: "pageBoundsCorrection"
        },
        decls: 3,
        vars: 3,
        consts: [[3, "id", "maxSize", "pageChange", "pageBoundsCorrection"], ["p", "paginationApi"], ["class", "ngx-pagination", "role", "navigation", 3, "responsive", 4, "ngIf"], ["role", "navigation", 1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], [4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], [1, "pagination-next"]],
        template: function PaginationControlsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-template", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
              return ctx.pageChange.emit($event);
            })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
              return ctx.pageBoundsCorrection.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationControlsComponent_ul_2_Template, 6, 8, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.autoHide && _r0.pages.length <= 1));
          }
        },
        directives: function directives() {
          return [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]];
        },
        styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pagination-controls',
            template: DEFAULT_TEMPLATE,
            styles: [DEFAULT_STYLES],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, {
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          previousLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nextLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderPaginationLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderPageLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          screenReaderCurrentLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autoHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return PaginationControlsComponent;
    }();

    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    /**
     * This directive is what powers all pagination controls components, including the default one.
     * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
     * with the pagination controls.
     */


    var PaginationControlsDirective =
    /** @class */
    function () {
      function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;

        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change.subscribe(function (id) {
          if (_this.id === id) {
            _this.updatePageLinks();

            _this.changeDetectorRef.markForCheck();

            _this.changeDetectorRef.detectChanges();
          }
        });
      }

      PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
          this.id = this.service.defaultId();
        }

        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
      };
      /**
       * Go to the previous page
       */


      PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
      };
      /**
       * Go to the next page
       */


      PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
      };
      /**
       * Returns true if current page is first page
       */


      PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
      };
      /**
       * Returns true if current page is last page
       */


      PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
      };
      /**
       * Set the current page number.
       */


      PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
      };
      /**
       * Get the current page number.
       */


      PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
      };
      /**
       * Returns the last page number
       */


      PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);

        if (inst.totalItems < 1) {
          // when there are 0 or fewer (an error case) items, there are no "pages" as such,
          // but it makes sense to consider a single, empty page as the last page.
          return 1;
        }

        return Math.ceil(inst.totalItems / inst.itemsPerPage);
      };

      PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
      };

      PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
          console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
      };
      /**
       * Updates the page links and checks that the current page is valid. Should run whenever the
       * PaginationService.change stream emits a value matching the current ID, or when any of the
       * input values changes.
       */


      PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;

        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);

        if (correctedCurrentPage !== inst.currentPage) {
          setTimeout(function () {
            _this.pageBoundsCorrection.emit(correctedCurrentPage);

            _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
          });
        } else {
          this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
      };
      /**
       * Checks that the instance.currentPage property is within bounds for the current page range.
       * If not, return a correct value for currentPage, or the current value if OK.
       */


      PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);

        if (totalPages < instance.currentPage && 0 < totalPages) {
          return totalPages;
        } else if (instance.currentPage < 1) {
          return 1;
        }

        return instance.currentPage;
      };
      /**
       * Returns an array of Page objects to use in the pagination controls.
       */


      PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;

        while (i <= totalPages && i <= paginationRange) {
          var label = void 0;
          var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
          var openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
          var closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);

          if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
            label = '...';
          } else {
            label = pageNumber;
          }

          pages.push({
            label: label,
            value: pageNumber
          });
          i++;
        }

        return pages;
      };
      /**
       * Given the position in the sequence of pagination links [i],
       * figure out what page number corresponds to that position.
       */


      PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);

        if (i === paginationRange) {
          return totalPages;
        } else if (i === 1) {
          return i;
        } else if (paginationRange < totalPages) {
          if (totalPages - halfWay < currentPage) {
            return totalPages - paginationRange + i;
          } else if (halfWay < currentPage) {
            return currentPage - halfWay + i;
          } else {
            return i;
          }
        } else {
          return i;
        }
      };

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], PaginationControlsDirective.prototype, "id", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Number)], PaginationControlsDirective.prototype, "maxSize", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageChange", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageBoundsCorrection", void 0);

      PaginationControlsDirective = __decorate$3([__metadata$2("design:paramtypes", [PaginationService, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], PaginationControlsDirective);

      PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(t) {
        return new (t || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      PaginationControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PaginationControlsDirective,
        selectors: [["pagination-template"], ["", "pagination-template", ""]],
        inputs: {
          maxSize: "maxSize",
          id: "id"
        },
        outputs: {
          pageChange: "pageChange",
          pageBoundsCorrection: "pageBoundsCorrection"
        },
        exportAs: ["paginationApi"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationControlsDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'pagination-template,[pagination-template]',
            exportAs: 'paginationApi'
          }]
        }], function () {
          return [{
            type: PaginationService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pageBoundsCorrection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      return PaginationControlsDirective;
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var NgxPaginationModule =
    /** @class */
    function () {
      function NgxPaginationModule() {}

      NgxPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgxPaginationModule
      });
      NgxPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgxPaginationModule_Factory(t) {
          return new (t || NgxPaginationModule)();
        },
        providers: [PaginationService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPaginationModule, {
          declarations: function declarations() {
            return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaginationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
            providers: [PaginationService],
            exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
          }]
        }], function () {
          return [];
        }, null);
      })();

      return NgxPaginationModule;
    }();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhZ2luYXRpb24uanMiLCJzb3VyY2VzIjpbIm5neC1wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FLTztBQUNQOzs7Ozs7Ozs7MkVBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFTb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFLTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQVk0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdNb2R1bGUsIE91dHB1dCwgUGlwZSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbnZhciBQYWdpbmF0aW9uU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25TZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0ge307XHJcbiAgICAgICAgdGhpcy5ERUZBVUxUX0lEID0gJ0RFRkFVTFRfUEFHSU5BVElPTl9JRCc7XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZGVmYXVsdElkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5ERUZBVUxUX0lEOyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIFBhZ2luYXRpb25JbnN0YW5jZSB3aXRoIHRoaXMgc2VydmljZS4gUmV0dXJucyBhXHJcbiAgICAgKiBib29sZWFuIHZhbHVlIHNpZ25pZnlpbmcgd2hldGhlciB0aGUgaW5zdGFuY2UgaXMgbmV3IG9yXHJcbiAgICAgKiB1cGRhdGVkICh0cnVlID0gbmV3IG9yIHVwZGF0ZWQsIGZhbHNlID0gdW5jaGFuZ2VkKS5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuaWQgPSB0aGlzLkRFRkFVTFRfSUQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXNbaW5zdGFuY2UuaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXSA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUluc3RhbmNlKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBlYWNoIHByb3BlcnR5IG9mIHRoZSBpbnN0YW5jZSBhbmQgdXBkYXRlIGFueSB0aGF0IGhhdmUgY2hhbmdlZC4gUmV0dXJuXHJcbiAgICAgKiB0cnVlIGlmIGFueSBjaGFuZ2VzIHdlcmUgbWFkZSwgZWxzZSByZXR1cm4gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25TZXJ2aWNlLnByb3RvdHlwZS51cGRhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF0pIHtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlW3Byb3BdICE9PSB0aGlzLmluc3RhbmNlc1tpbnN0YW5jZS5pZF1bcHJvcF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2luc3RhbmNlLmlkXVtwcm9wXSA9IGluc3RhbmNlW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1tpZF0uY3VycmVudFBhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBwYWdlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvblNlcnZpY2UucHJvdG90eXBlLnNldEN1cnJlbnRQYWdlID0gZnVuY3Rpb24gKGlkLCBwYWdlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2VzW2lkXSkge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1tpZF07XHJcbiAgICAgICAgICAgIHZhciBtYXhQYWdlID0gTWF0aC5jZWlsKGluc3RhbmNlLnRvdGFsSXRlbXMgLyBpbnN0YW5jZS5pdGVtc1BlclBhZ2UpO1xyXG4gICAgICAgICAgICBpZiAocGFnZSA8PSBtYXhQYWdlICYmIDEgPD0gcGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNbaWRdLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgaW5zdGFuY2UudG90YWxJdGVtc1xyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuc2V0VG90YWxJdGVtcyA9IGZ1bmN0aW9uIChpZCwgdG90YWxJdGVtcykge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0gJiYgMCA8PSB0b3RhbEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2lkXS50b3RhbEl0ZW1zID0gdG90YWxJdGVtcztcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgaW5zdGFuY2UuaXRlbXNQZXJQYWdlLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuc2V0SXRlbXNQZXJQYWdlID0gZnVuY3Rpb24gKGlkLCBpdGVtc1BlclBhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzW2lkXS5pdGVtc1BlclBhZ2UgPSBpdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGUgcGFnaW5hdGlvbiBpbnN0YW5jZSBvYmplY3QgbWF0Y2hpbmcgdGhlIGlkLiBJZiBub1xyXG4gICAgICogaWQgc3BlY2lmaWVkLCByZXR1cm5zIHRoZSBpbnN0YW5jZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBkZWZhdWx0IGlkLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZiAoaWQgPT09IHZvaWQgMCkgeyBpZCA9IHRoaXMuREVGQVVMVF9JRDsgfVxyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlc1tpZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUodGhpcy5pbnN0YW5jZXNbaWRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHNoYWxsb3cgY2xvbmUgb2YgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uU2VydmljZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG9ialtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uU2VydmljZTtcclxufSgpKTtcblxudmFyIF9fZGVjb3JhdGUkMSA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fbWV0YWRhdGEgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xyXG59O1xyXG52YXIgTEFSR0VfTlVNQkVSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbnZhciBQYWdpbmF0ZVBpcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0ZVBpcGUoc2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHZhbHVlcyBmcm9tIHRoZSBsYXN0IHRpbWUgdGhlIHBpcGUgd2FzIGludm9rZWRcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBhcmdzKSB7XHJcbiAgICAgICAgLy8gV2hlbiBhbiBvYnNlcnZhYmxlIGlzIHBhc3NlZCB0aHJvdWdoIHRoZSBBc3luY1BpcGUsIGl0IHdpbGwgb3V0cHV0XHJcbiAgICAgICAgLy8gYG51bGxgIHVudGlsIHRoZSBzdWJzY3JpcHRpb24gcmVzb2x2ZXMuIEluIHRoaXMgY2FzZSwgd2Ugd2FudCB0b1xyXG4gICAgICAgIC8vIHVzZSB0aGUgY2FjaGVkIGRhdGEgZnJvbSB0aGUgYHN0YXRlYCBvYmplY3QgdG8gcHJldmVudCB0aGUgTmdGb3JcclxuICAgICAgICAvLyBmcm9tIGZsYXNoaW5nIGVtcHR5IHVudGlsIHRoZSByZWFsIHZhbHVlcyBhcnJpdmUuXHJcbiAgICAgICAgaWYgKCEoY29sbGVjdGlvbiBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICB2YXIgX2lkID0gYXJncy5pZCB8fCB0aGlzLnNlcnZpY2UuZGVmYXVsdElkKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW19pZF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlW19pZF0uc2xpY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VydmVyU2lkZU1vZGUgPSBhcmdzLnRvdGFsSXRlbXMgJiYgYXJncy50b3RhbEl0ZW1zICE9PSBjb2xsZWN0aW9uLmxlbmd0aDtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKGNvbGxlY3Rpb24sIGFyZ3MpO1xyXG4gICAgICAgIHZhciBpZCA9IGluc3RhbmNlLmlkO1xyXG4gICAgICAgIHZhciBzdGFydCwgZW5kO1xyXG4gICAgICAgIHZhciBwZXJQYWdlID0gaW5zdGFuY2UuaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHZhciBlbWl0Q2hhbmdlID0gdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyKGluc3RhbmNlKTtcclxuICAgICAgICBpZiAoIXNlcnZlclNpZGVNb2RlICYmIGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBwZXJQYWdlID0gK3BlclBhZ2UgfHwgTEFSR0VfTlVNQkVSO1xyXG4gICAgICAgICAgICBzdGFydCA9IChpbnN0YW5jZS5jdXJyZW50UGFnZSAtIDEpICogcGVyUGFnZTtcclxuICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBwZXJQYWdlO1xyXG4gICAgICAgICAgICB2YXIgaXNJZGVudGljYWwgPSB0aGlzLnN0YXRlSXNJZGVudGljYWwoaWQsIGNvbGxlY3Rpb24sIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICBpZiAoaXNJZGVudGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2lkXS5zbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBzbGljZSA9IGNvbGxlY3Rpb24uc2xpY2Uoc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZShpZCwgY29sbGVjdGlvbiwgc2xpY2UsIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZS5lbWl0KGlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbGljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGVtaXRDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5jaGFuZ2UuZW1pdChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc2F2ZSB0aGUgc3RhdGUgZm9yIHNlcnZlci1zaWRlIGNvbGxlY3Rpb24gdG8gYXZvaWQgbnVsbFxyXG4gICAgICAgICAgICAvLyBmbGFzaCBhcyBuZXcgZGF0YSBsb2Fkcy5cclxuICAgICAgICAgICAgdGhpcy5zYXZlU3RhdGUoaWQsIGNvbGxlY3Rpb24sIGNvbGxlY3Rpb24sIHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gUGFnaW5hdGlvbkluc3RhbmNlIG9iamVjdCwgdXNpbmcgZGVmYXVsdHMgZm9yIGFueSBvcHRpb25hbCBwcm9wZXJ0aWVzIG5vdCBzdXBwbGllZC5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGVQaXBlLnByb3RvdHlwZS5jcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIChjb2xsZWN0aW9uLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmNoZWNrQ29uZmlnKGNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGNvbmZpZy5pZCAhPSBudWxsID8gY29uZmlnLmlkIDogdGhpcy5zZXJ2aWNlLmRlZmF1bHRJZCgpLFxyXG4gICAgICAgICAgICBpdGVtc1BlclBhZ2U6ICtjb25maWcuaXRlbXNQZXJQYWdlIHx8IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiArY29uZmlnLmN1cnJlbnRQYWdlIHx8IDEsXHJcbiAgICAgICAgICAgIHRvdGFsSXRlbXM6ICtjb25maWcudG90YWxJdGVtcyB8fCBjb2xsZWN0aW9uLmxlbmd0aFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgZmlsdGVyIGNvbnRhaW5zIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0ZVBpcGUucHJvdG90eXBlLmNoZWNrQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHZhciByZXF1aXJlZCA9IFsnaXRlbXNQZXJQYWdlJywgJ2N1cnJlbnRQYWdlJ107XHJcbiAgICAgICAgdmFyIG1pc3NpbmcgPSByZXF1aXJlZC5maWx0ZXIoZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuICEocHJvcCBpbiBjb25maWcpOyB9KTtcclxuICAgICAgICBpZiAoMCA8IG1pc3NpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhZ2luYXRlUGlwZTogQXJndW1lbnQgaXMgbWlzc2luZyB0aGUgZm9sbG93aW5nIHJlcXVpcmVkIHByb3BlcnRpZXM6IFwiICsgbWlzc2luZy5qb2luKCcsICcpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUbyBhdm9pZCByZXR1cm5pbmcgYSBicmFuZCBuZXcgYXJyYXkgZWFjaCB0aW1lIHRoZSBwaXBlIGlzIHJ1biwgd2Ugc3RvcmUgdGhlIHN0YXRlIG9mIHRoZSBzbGljZWRcclxuICAgICAqIGFycmF5IGZvciBhIGdpdmVuIGlkLiBUaGlzIG1lYW5zIHRoYXQgdGhlIG5leHQgdGltZSB0aGUgcGlwZSBpcyBydW4gb24gdGhpcyBjb2xsZWN0aW9uICYgaWQsIHdlIGp1c3RcclxuICAgICAqIG5lZWQgdG8gY2hlY2sgdGhhdCB0aGUgY29sbGVjdGlvbiwgc3RhcnQgYW5kIGVuZCBwb2ludHMgYXJlIGFsbCBpZGVudGljYWwsIGFuZCBpZiBzbywgcmV0dXJuIHRoZVxyXG4gICAgICogbGFzdCBzbGljZWQgYXJyYXkuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuc2F2ZVN0YXRlID0gZnVuY3Rpb24gKGlkLCBjb2xsZWN0aW9uLCBzbGljZSwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGVbaWRdID0ge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxyXG4gICAgICAgICAgICBzaXplOiBjb2xsZWN0aW9uLmxlbmd0aCxcclxuICAgICAgICAgICAgc2xpY2U6IHNsaWNlLFxyXG4gICAgICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZvciBhIGdpdmVuIGlkLCByZXR1cm5zIHRydWUgaWYgdGhlIGNvbGxlY3Rpb24sIHNpemUsIHN0YXJ0IGFuZCBlbmQgdmFsdWVzIGFyZSBpZGVudGljYWwuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRlUGlwZS5wcm90b3R5cGUuc3RhdGVJc0lkZW50aWNhbCA9IGZ1bmN0aW9uIChpZCwgY29sbGVjdGlvbiwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGVbaWRdO1xyXG4gICAgICAgIGlmICghc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNNZXRhRGF0YUlkZW50aWNhbCA9IHN0YXRlLnNpemUgPT09IGNvbGxlY3Rpb24ubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIHN0YXRlLnN0YXJ0ID09PSBzdGFydCAmJlxyXG4gICAgICAgICAgICBzdGF0ZS5lbmQgPT09IGVuZDtcclxuICAgICAgICBpZiAoIWlzTWV0YURhdGFJZGVudGljYWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGUuc2xpY2UuZXZlcnkoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7IHJldHVybiBlbGVtZW50ID09PSBjb2xsZWN0aW9uW3N0YXJ0ICsgaW5kZXhdOyB9KTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0ZVBpcGUgPSBfX2RlY29yYXRlJDEoW1xyXG4gICAgICAgIFBpcGUoe1xyXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGUnLFxyXG4gICAgICAgICAgICBwdXJlOiBmYWxzZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbUGFnaW5hdGlvblNlcnZpY2VdKVxyXG4gICAgXSwgUGFnaW5hdGVQaXBlKTtcclxuICAgIHJldHVybiBQYWdpbmF0ZVBpcGU7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCB0ZW1wbGF0ZSBhbmQgc3R5bGVzIGZvciB0aGUgcGFnaW5hdGlvbiBsaW5rcyBhcmUgYm9ycm93ZWQgZGlyZWN0bHlcclxuICogZnJvbSBadXJiIEZvdW5kYXRpb24gNjogaHR0cDovL2ZvdW5kYXRpb24uenVyYi5jb20vc2l0ZXMvZG9jcy9wYWdpbmF0aW9uLmh0bWxcclxuICovXHJcbnZhciBERUZBVUxUX1RFTVBMQVRFID0gXCJcXG4gICAgPHBhZ2luYXRpb24tdGVtcGxhdGUgICNwPVxcXCJwYWdpbmF0aW9uQXBpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVxcXCJpZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgW21heFNpemVdPVxcXCJtYXhTaXplXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZUNoYW5nZSk9XFxcInBhZ2VDaGFuZ2UuZW1pdCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZUJvdW5kc0NvcnJlY3Rpb24pPVxcXCJwYWdlQm91bmRzQ29ycmVjdGlvbi5lbWl0KCRldmVudClcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5neC1wYWdpbmF0aW9uXFxcIiBcXG4gICAgICAgIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiIFxcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XFxcInNjcmVlblJlYWRlclBhZ2luYXRpb25MYWJlbFxcXCIgXFxuICAgICAgICBbY2xhc3MucmVzcG9uc2l2ZV09XFxcInJlc3BvbnNpdmVcXFwiXFxuICAgICAgICAqbmdJZj1cXFwiIShhdXRvSGlkZSAmJiBwLnBhZ2VzLmxlbmd0aCA8PSAxKVxcXCI+XFxuXFxuICAgICAgICA8bGkgY2xhc3M9XFxcInBhZ2luYXRpb24tcHJldmlvdXNcXFwiIFtjbGFzcy5kaXNhYmxlZF09XFxcInAuaXNGaXJzdFBhZ2UoKVxcXCIgKm5nSWY9XFxcImRpcmVjdGlvbkxpbmtzXFxcIj4gXFxuICAgICAgICAgICAgPGEgdGFiaW5kZXg9XFxcIjBcXFwiICpuZ0lmPVxcXCIxIDwgcC5nZXRDdXJyZW50KClcXFwiIChrZXl1cC5lbnRlcik9XFxcInAucHJldmlvdXMoKVxcXCIgKGNsaWNrKT1cXFwicC5wcmV2aW91cygpXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwicHJldmlvdXNMYWJlbCArICcgJyArIHNjcmVlblJlYWRlclBhZ2VMYWJlbFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IHByZXZpb3VzTGFiZWwgfX0gPHNwYW4gY2xhc3M9XFxcInNob3ctZm9yLXNyXFxcIj57eyBzY3JlZW5SZWFkZXJQYWdlTGFiZWwgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwLmlzRmlyc3RQYWdlKClcXFwiPlxcbiAgICAgICAgICAgICAgICB7eyBwcmV2aW91c0xhYmVsIH19IDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyUGFnZUxhYmVsIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvbGk+IFxcblxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJzbWFsbC1zY3JlZW5cXFwiPlxcbiAgICAgICAgICAgIHt7IHAuZ2V0Q3VycmVudCgpIH19IC8ge3sgcC5nZXRMYXN0UGFnZSgpIH19XFxuICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgPGxpIFtjbGFzcy5jdXJyZW50XT1cXFwicC5nZXRDdXJyZW50KCkgPT09IHBhZ2UudmFsdWVcXFwiIFxcbiAgICAgICAgICAgIFtjbGFzcy5lbGxpcHNpc109XFxcInBhZ2UubGFiZWwgPT09ICcuLi4nXFxcIlxcbiAgICAgICAgICAgICpuZ0Zvcj1cXFwibGV0IHBhZ2Ugb2YgcC5wYWdlc1xcXCI+XFxuICAgICAgICAgICAgPGEgdGFiaW5kZXg9XFxcIjBcXFwiIChrZXl1cC5lbnRlcik9XFxcInAuc2V0Q3VycmVudChwYWdlLnZhbHVlKVxcXCIgKGNsaWNrKT1cXFwicC5zZXRDdXJyZW50KHBhZ2UudmFsdWUpXFxcIiAqbmdJZj1cXFwicC5nZXRDdXJyZW50KCkgIT09IHBhZ2UudmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fSA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IChwYWdlLmxhYmVsID09PSAnLi4uJykgPyBwYWdlLmxhYmVsIDogKHBhZ2UubGFiZWwgfCBudW1iZXI6JycpIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVxcXCJwLmdldEN1cnJlbnQoKSA9PT0gcGFnZS52YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzaG93LWZvci1zclxcXCI+e3sgc2NyZWVuUmVhZGVyQ3VycmVudExhYmVsIH19IDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgKHBhZ2UubGFiZWwgPT09ICcuLi4nKSA/IHBhZ2UubGFiZWwgOiAocGFnZS5sYWJlbCB8IG51bWJlcjonJykgfX08L3NwYW4+IFxcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxcbiAgICAgICAgPC9saT5cXG5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwicGFnaW5hdGlvbi1uZXh0XFxcIiBbY2xhc3MuZGlzYWJsZWRdPVxcXCJwLmlzTGFzdFBhZ2UoKVxcXCIgKm5nSWY9XFxcImRpcmVjdGlvbkxpbmtzXFxcIj5cXG4gICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiMFxcXCIgKm5nSWY9XFxcIiFwLmlzTGFzdFBhZ2UoKVxcXCIgKGtleXVwLmVudGVyKT1cXFwicC5uZXh0KClcXFwiIChjbGljayk9XFxcInAubmV4dCgpXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwibmV4dExhYmVsICsgJyAnICsgc2NyZWVuUmVhZGVyUGFnZUxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInAuaXNMYXN0UGFnZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgIHt7IG5leHRMYWJlbCB9fSA8c3BhbiBjbGFzcz1cXFwic2hvdy1mb3Itc3JcXFwiPnt7IHNjcmVlblJlYWRlclBhZ2VMYWJlbCB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2xpPlxcblxcbiAgICA8L3VsPlxcbiAgICA8L3BhZ2luYXRpb24tdGVtcGxhdGU+XFxuICAgIFwiO1xyXG52YXIgREVGQVVMVF9TVFlMRVMgPSBcIlxcbi5uZ3gtcGFnaW5hdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbjo6YmVmb3JlLCAubmd4LXBhZ2luYXRpb246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgfVxcbiAgLm5neC1wYWdpbmF0aW9uOjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMC4wNjI1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAubmd4LXBhZ2luYXRpb24gbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5uZ3gtcGFnaW5hdGlvbiBhLFxcbiAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjMGEwYTBhOyBcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAubmd4LXBhZ2luYXRpb24gYTpob3ZlcixcXG4gICAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjE5OWU4O1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkIHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBjb2xvcjogI2NhY2FjYTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9IFxcbiAgICAubmd4LXBhZ2luYXRpb24gLmRpc2FibGVkOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgLm5neC1wYWdpbmF0aW9uIGEsIC5uZ3gtcGFnaW5hdGlvbiBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLFxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDo6YmVmb3JlIHsgXFxuICBjb250ZW50OiAnXFx1MDBBQic7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgfVxcblxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0IGE6OmFmdGVyLFxcbi5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XFxuICBjb250ZW50OiAnXFx1MDBCQic7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtOyB9XFxuXFxuLm5neC1wYWdpbmF0aW9uIC5zaG93LWZvci1zciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApOyB9XFxuLm5neC1wYWdpbmF0aW9uIC5zbWFsbC1zY3JlZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMXB4KSB7XFxuICAubmd4LXBhZ2luYXRpb24ucmVzcG9uc2l2ZSAuc21hbGwtc2NyZWVuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IFxcbiAgLm5neC1wYWdpbmF0aW9uLnJlc3BvbnNpdmUgbGk6bm90KC5zbWFsbC1zY3JlZW4pOm5vdCgucGFnaW5hdGlvbi1wcmV2aW91cyk6bm90KC5wYWdpbmF0aW9uLW5leHQpIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbn1cXG4gIFwiO1xuXG52YXIgX19kZWNvcmF0ZSQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSQxID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuZnVuY3Rpb24gY29lcmNlVG9Cb29sZWFuKGlucHV0KSB7XHJcbiAgICByZXR1cm4gISFpbnB1dCAmJiBpbnB1dCAhPT0gJ2ZhbHNlJztcclxufVxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgcGFnaW5hdGlvbiBjb250cm9scyBjb21wb25lbnQuIEFjdHVhbGx5IGp1c3QgYSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIGEgY3VzdG9tIHRlbXBsYXRlLlxyXG4gKi9cclxudmFyIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCgpIHtcclxuICAgICAgICB0aGlzLm1heFNpemUgPSA3O1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNMYWJlbCA9ICdQcmV2aW91cyc7XHJcbiAgICAgICAgdGhpcy5uZXh0TGFiZWwgPSAnTmV4dCc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWwgPSAnUGFnaW5hdGlvbic7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJQYWdlTGFiZWwgPSAncGFnZSc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5SZWFkZXJDdXJyZW50TGFiZWwgPSBcIllvdSdyZSBvbiBwYWdlXCI7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZUJvdW5kc0NvcnJlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uTGlua3MgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2F1dG9IaWRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVzcG9uc2l2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiZGlyZWN0aW9uTGlua3NcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uTGlua3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXJlY3Rpb25MaW5rcyA9IGNvZXJjZVRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJhdXRvSGlkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hdXRvSGlkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dG9IaWRlID0gY29lcmNlVG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInJlc3BvbnNpdmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2l2ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc3BvbnNpdmUgPSBjb2VyY2VUb0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiaWRcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBOdW1iZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcIm1heFNpemVcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbQm9vbGVhbl0pXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcImRpcmVjdGlvbkxpbmtzXCIsIG51bGwpO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwiYXV0b0hpZGVcIiwgbnVsbCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgQm9vbGVhbiksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW0Jvb2xlYW5dKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJyZXNwb25zaXZlXCIsIG51bGwpO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicHJldmlvdXNMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwibmV4dExhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQxKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50LnByb3RvdHlwZSwgXCJzY3JlZW5SZWFkZXJQYWdpbmF0aW9uTGFiZWxcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMihbXHJcbiAgICAgICAgSW5wdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInNjcmVlblJlYWRlclBhZ2VMYWJlbFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwic2NyZWVuUmVhZGVyQ3VycmVudExhYmVsXCIsIHZvaWQgMCk7XHJcbiAgICBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIE91dHB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMShcImRlc2lnbjp0eXBlXCIsIEV2ZW50RW1pdHRlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudC5wcm90b3R5cGUsIFwicGFnZUNoYW5nZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQyKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDEoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQucHJvdG90eXBlLCBcInBhZ2VCb3VuZHNDb3JyZWN0aW9uXCIsIHZvaWQgMCk7XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQgPSBfX2RlY29yYXRlJDIoW1xyXG4gICAgICAgIENvbXBvbmVudCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFnaW5hdGlvbi1jb250cm9scycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBERUZBVUxUX1RFTVBMQVRFLFxyXG4gICAgICAgICAgICBzdHlsZXM6IFtERUZBVUxUX1NUWUxFU10sXHJcbiAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgICAgICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbiAgICAgICAgfSlcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gUGFnaW5hdGlvbkNvbnRyb2xzQ29tcG9uZW50O1xyXG59KCkpO1xuXG52YXIgX19kZWNvcmF0ZSQzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSQyID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuLyoqXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIHdoYXQgcG93ZXJzIGFsbCBwYWdpbmF0aW9uIGNvbnRyb2xzIGNvbXBvbmVudHMsIGluY2x1ZGluZyB0aGUgZGVmYXVsdCBvbmUuXHJcbiAqIEl0IGV4cG9zZXMgYW4gQVBJIHdoaWNoIGlzIGhvb2tlZCB1cCB0byB0aGUgUGFnaW5hdGlvblNlcnZpY2UgdG8ga2VlcCB0aGUgUGFnaW5hdGVQaXBlIGluIHN5bmNcclxuICogd2l0aCB0aGUgcGFnaW5hdGlvbiBjb250cm9scy5cclxuICovXHJcbnZhciBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUoc2VydmljZSwgY2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZiA9IGNoYW5nZURldGVjdG9yUmVmO1xyXG4gICAgICAgIHRoaXMubWF4U2l6ZSA9IDc7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZUJvdW5kc0NvcnJlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3ViID0gdGhpcy5zZXJ2aWNlLmNoYW5nZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuc2VydmljZS5kZWZhdWx0SWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlTGlua3MoKTtcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VMaW5rcygpO1xyXG4gICAgfTtcclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUucHJldmlvdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkSWQoKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5nZXRDdXJyZW50KCkgLSAxKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBuZXh0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tWYWxpZElkKCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZ2V0Q3VycmVudCgpICsgMSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGZpcnN0IHBhZ2VcclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5pc0ZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50KCkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY3VycmVudCBwYWdlIGlzIGxhc3QgcGFnZVxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmlzTGFzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFzdFBhZ2UoKSA9PT0gdGhpcy5nZXRDdXJyZW50KCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuc2V0Q3VycmVudCA9IGZ1bmN0aW9uIChwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQocGFnZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldEN1cnJlbnRQYWdlKHRoaXMuaWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBwYWdlIG51bWJlclxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmdldExhc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpO1xyXG4gICAgICAgIGlmIChpbnN0LnRvdGFsSXRlbXMgPCAxKSB7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gdGhlcmUgYXJlIDAgb3IgZmV3ZXIgKGFuIGVycm9yIGNhc2UpIGl0ZW1zLCB0aGVyZSBhcmUgbm8gXCJwYWdlc1wiIGFzIHN1Y2gsXHJcbiAgICAgICAgICAgIC8vIGJ1dCBpdCBtYWtlcyBzZW5zZSB0byBjb25zaWRlciBhIHNpbmdsZSwgZW1wdHkgcGFnZSBhcyB0aGUgbGFzdCBwYWdlLlxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChpbnN0LnRvdGFsSXRlbXMgLyBpbnN0Lml0ZW1zUGVyUGFnZSk7XHJcbiAgICB9O1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRUb3RhbEl0ZW1zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCkudG90YWxJdGVtcztcclxuICAgIH07XHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNoZWNrVmFsaWRJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmdldEluc3RhbmNlKHRoaXMuaWQpLmlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlOiB0aGUgc3BlY2lmaWVkIGlkIFxcXCJcIiArIHRoaXMuaWQgKyBcIlxcXCIgZG9lcyBub3QgbWF0Y2ggYW55IHJlZ2lzdGVyZWQgUGFnaW5hdGlvbkluc3RhbmNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIHBhZ2UgbGlua3MgYW5kIGNoZWNrcyB0aGF0IHRoZSBjdXJyZW50IHBhZ2UgaXMgdmFsaWQuIFNob3VsZCBydW4gd2hlbmV2ZXIgdGhlXHJcbiAgICAgKiBQYWdpbmF0aW9uU2VydmljZS5jaGFuZ2Ugc3RyZWFtIGVtaXRzIGEgdmFsdWUgbWF0Y2hpbmcgdGhlIGN1cnJlbnQgSUQsIG9yIHdoZW4gYW55IG9mIHRoZVxyXG4gICAgICogaW5wdXQgdmFsdWVzIGNoYW5nZXMuXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlUGFnZUxpbmtzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLnNlcnZpY2UuZ2V0SW5zdGFuY2UodGhpcy5pZCk7XHJcbiAgICAgICAgdmFyIGNvcnJlY3RlZEN1cnJlbnRQYWdlID0gdGhpcy5vdXRPZkJvdW5kQ29ycmVjdGlvbihpbnN0KTtcclxuICAgICAgICBpZiAoY29ycmVjdGVkQ3VycmVudFBhZ2UgIT09IGluc3QuY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlQm91bmRzQ29ycmVjdGlvbi5lbWl0KGNvcnJlY3RlZEN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VzID0gX3RoaXMuY3JlYXRlUGFnZUFycmF5KGluc3QuY3VycmVudFBhZ2UsIGluc3QuaXRlbXNQZXJQYWdlLCBpbnN0LnRvdGFsSXRlbXMsIF90aGlzLm1heFNpemUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMgPSB0aGlzLmNyZWF0ZVBhZ2VBcnJheShpbnN0LmN1cnJlbnRQYWdlLCBpbnN0Lml0ZW1zUGVyUGFnZSwgaW5zdC50b3RhbEl0ZW1zLCB0aGlzLm1heFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB0aGF0IHRoZSBpbnN0YW5jZS5jdXJyZW50UGFnZSBwcm9wZXJ0eSBpcyB3aXRoaW4gYm91bmRzIGZvciB0aGUgY3VycmVudCBwYWdlIHJhbmdlLlxyXG4gICAgICogSWYgbm90LCByZXR1cm4gYSBjb3JyZWN0IHZhbHVlIGZvciBjdXJyZW50UGFnZSwgb3IgdGhlIGN1cnJlbnQgdmFsdWUgaWYgT0suXHJcbiAgICAgKi9cclxuICAgIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUub3V0T2ZCb3VuZENvcnJlY3Rpb24gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbChpbnN0YW5jZS50b3RhbEl0ZW1zIC8gaW5zdGFuY2UuaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICBpZiAodG90YWxQYWdlcyA8IGluc3RhbmNlLmN1cnJlbnRQYWdlICYmIDAgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpbnN0YW5jZS5jdXJyZW50UGFnZSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jdXJyZW50UGFnZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgUGFnZSBvYmplY3RzIHRvIHVzZSBpbiB0aGUgcGFnaW5hdGlvbiBjb250cm9scy5cclxuICAgICAqL1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZS5jcmVhdGVQYWdlQXJyYXkgPSBmdW5jdGlvbiAoY3VycmVudFBhZ2UsIGl0ZW1zUGVyUGFnZSwgdG90YWxJdGVtcywgcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgLy8gcGFnaW5hdGlvblJhbmdlIGNvdWxkIGJlIGEgc3RyaW5nIGlmIHBhc3NlZCBmcm9tIGF0dHJpYnV0ZSwgc28gY2FzdCB0byBudW1iZXIuXHJcbiAgICAgICAgcGFnaW5hdGlvblJhbmdlID0gK3BhZ2luYXRpb25SYW5nZTtcclxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcclxuICAgICAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKTtcclxuICAgICAgICB2YXIgaGFsZldheSA9IE1hdGguY2VpbChwYWdpbmF0aW9uUmFuZ2UgLyAyKTtcclxuICAgICAgICB2YXIgaXNTdGFydCA9IGN1cnJlbnRQYWdlIDw9IGhhbGZXYXk7XHJcbiAgICAgICAgdmFyIGlzRW5kID0gdG90YWxQYWdlcyAtIGhhbGZXYXkgPCBjdXJyZW50UGFnZTtcclxuICAgICAgICB2YXIgaXNNaWRkbGUgPSAhaXNTdGFydCAmJiAhaXNFbmQ7XHJcbiAgICAgICAgdmFyIGVsbGlwc2VzTmVlZGVkID0gcGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcztcclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgd2hpbGUgKGkgPD0gdG90YWxQYWdlcyAmJiBpIDw9IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHZhciBwYWdlTnVtYmVyID0gdGhpcy5jYWxjdWxhdGVQYWdlTnVtYmVyKGksIGN1cnJlbnRQYWdlLCBwYWdpbmF0aW9uUmFuZ2UsIHRvdGFsUGFnZXMpO1xyXG4gICAgICAgICAgICB2YXIgb3BlbmluZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IDIgJiYgKGlzTWlkZGxlIHx8IGlzRW5kKSk7XHJcbiAgICAgICAgICAgIHZhciBjbG9zaW5nRWxsaXBzZXNOZWVkZWQgPSAoaSA9PT0gcGFnaW5hdGlvblJhbmdlIC0gMSAmJiAoaXNNaWRkbGUgfHwgaXNTdGFydCkpO1xyXG4gICAgICAgICAgICBpZiAoZWxsaXBzZXNOZWVkZWQgJiYgKG9wZW5pbmdFbGxpcHNlc05lZWRlZCB8fCBjbG9zaW5nRWxsaXBzZXNOZWVkZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICcuLi4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBwYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhZ2VOdW1iZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhZ2VzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gdGhlIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZSBvZiBwYWdpbmF0aW9uIGxpbmtzIFtpXSxcclxuICAgICAqIGZpZ3VyZSBvdXQgd2hhdCBwYWdlIG51bWJlciBjb3JyZXNwb25kcyB0byB0aGF0IHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLmNhbGN1bGF0ZVBhZ2VOdW1iZXIgPSBmdW5jdGlvbiAoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG4gICAgICAgIGlmIChpID09PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBhZ2luYXRpb25SYW5nZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgLSBoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzIC0gcGFnaW5hdGlvblJhbmdlICsgaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGFnZSAtIGhhbGZXYXkgKyBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBfX2RlY29yYXRlJDMoW1xyXG4gICAgICAgIElucHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJpZFwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBJbnB1dCgpLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjp0eXBlXCIsIE51bWJlcilcclxuICAgIF0sIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZS5wcm90b3R5cGUsIFwibWF4U2l6ZVwiLCB2b2lkIDApO1xyXG4gICAgX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBPdXRwdXQoKSxcclxuICAgICAgICBfX21ldGFkYXRhJDIoXCJkZXNpZ246dHlwZVwiLCBFdmVudEVtaXR0ZXIpXHJcbiAgICBdLCBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhZ2VDaGFuZ2VcIiwgdm9pZCAwKTtcclxuICAgIF9fZGVjb3JhdGUkMyhbXHJcbiAgICAgICAgT3V0cHV0KCksXHJcbiAgICAgICAgX19tZXRhZGF0YSQyKFwiZGVzaWduOnR5cGVcIiwgRXZlbnRFbWl0dGVyKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYWdlQm91bmRzQ29ycmVjdGlvblwiLCB2b2lkIDApO1xyXG4gICAgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlID0gX19kZWNvcmF0ZSQzKFtcclxuICAgICAgICBEaXJlY3RpdmUoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3BhZ2luYXRpb24tdGVtcGxhdGUsW3BhZ2luYXRpb24tdGVtcGxhdGVdJyxcclxuICAgICAgICAgICAgZXhwb3J0QXM6ICdwYWdpbmF0aW9uQXBpJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIF9fbWV0YWRhdGEkMihcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtQYWdpbmF0aW9uU2VydmljZSxcclxuICAgICAgICAgICAgQ2hhbmdlRGV0ZWN0b3JSZWZdKVxyXG4gICAgXSwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlKTtcclxuICAgIHJldHVybiBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmU7XHJcbn0oKSk7XG5cbnZhciBfX2RlY29yYXRlID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgTmd4UGFnaW5hdGlvbk1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5neFBhZ2luYXRpb25Nb2R1bGUoKSB7XHJcbiAgICB9XHJcbiAgICBOZ3hQYWdpbmF0aW9uTW9kdWxlID0gX19kZWNvcmF0ZShbXHJcbiAgICAgICAgTmdNb2R1bGUoe1xyXG4gICAgICAgICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0ZVBpcGUsXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBQYWdpbmF0aW9uQ29udHJvbHNEaXJlY3RpdmVcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbUGFnaW5hdGlvblNlcnZpY2VdLFxyXG4gICAgICAgICAgICBleHBvcnRzOiBbUGFnaW5hdGVQaXBlLCBQYWdpbmF0aW9uQ29udHJvbHNDb21wb25lbnQsIFBhZ2luYXRpb25Db250cm9sc0RpcmVjdGl2ZV1cclxuICAgICAgICB9KVxyXG4gICAgXSwgTmd4UGFnaW5hdGlvbk1vZHVsZSk7XHJcbiAgICByZXR1cm4gTmd4UGFnaW5hdGlvbk1vZHVsZTtcclxufSgpKTtcblxuLyoqXHJcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxyXG4gKi9cblxuZXhwb3J0IHsgREVGQVVMVF9TVFlMRVMgYXMgybViLCBERUZBVUxUX1RFTVBMQVRFIGFzIMm1YSwgTmd4UGFnaW5hdGlvbk1vZHVsZSwgUGFnaW5hdGlvblNlcnZpY2UsIFBhZ2luYXRpb25Db250cm9sc0NvbXBvbmVudCwgUGFnaW5hdGlvbkNvbnRyb2xzRGlyZWN0aXZlLCBQYWdpbmF0ZVBpcGUgfTtcbiJdfQ==

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-menu contentId=\"content\" side=\"start\">\n    <ion-header>\n        <ion-toolbar color=\"primary\" style=\"padding: 5px;\">\n            <h6>Colourful reaact</h6>\n            <!-- <h6>{{ currentUser.email }}</h6> -->\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-menu-toggle>\n            <ion-list>\n                <!-- <ion-item button (click)=\"refreshDb()\">\n          <ion-icon style=\"margin: 2px 16px 2px 0px;\" slot=\"start\" name=\"sync\"></ion-icon>\n          <ion-label class=\"item--menu\">Refresh database</ion-label>\n        </ion-item> -->\n            </ion-list>\n        </ion-menu-toggle>\n    </ion-content>\n</ion-menu>\n\n<ion-content id=\"content\">\n    <div class=\"full_s\">\n        <div class=\"box_prancha ion-no-padding {{b_class}}\" #corpo>\n            <div class=\"full\">\n                <div class=\"lateral ion-no-padding\">\n                    <div class=\"full ion-no-padding\">\n                        <div class=\"ic_menu ion-no-padding {{b_class}}\" style=\"display: grid; align-items: center;\">\n                            <!-- <ion-button shape=\"round\" fill=\"clear\" *ngIf=\"allowBack\" (click)=\"back()\" class=\"ion-no-padding\">\n                <ion-icon name=\"arrow-back-outline\" style=\"color: #666;margin: 0 5px;\"></ion-icon>\n              </ion-button> -->\n                            <!-- <ion-menu-button autoHide=\"false\" style=\"color: #888;\"></ion-menu-button> -->\n                        </div>\n                        <div class=\"ic_seta\">\n                            <img id=\"prev\" *ngIf=\"p.getCurrent() !== 1\" src=\"../../../assets/svg/round-arrow_left-24px.svg\" (click)=\"p.previous()\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"centro ion-no-padding\">\n                    <div class=\"full\" style=\"box-sizing: border-box;\">\n                        <div class=\"margin\"></div>\n                        <div class=\"vin\" #frase>\n                            <div class=\"vin_border {{b_class}}\">\n                                <div class=\"ind_frase\" *ngFor=\"let name of sentece; let i = index\" [style.background-color]=\"name.color\">\n                                    <div class=\"centro_frase\" (click)=\"speaker(name.name, 1)\" style=\"padding: 5%;\" (press)=\"pressEvent(i)\">\n                                        <h6 class=\"tit_picto_frase {{b_class}}\" style=\"\n                      margin: 0px;\n                      padding: 0px;\n                      text-transform: uppercase;\n                      color: black;\n                    \">\n                                            {{name.label}}\n                                        </h6>\n                                        <div class=\"img_picto_frase {{b_class}}\">\n                                            <div class=\"img-container\">\n\n                                                <img [attr.src]=\"name.image_path\" onerror=\"this.style.display='none'\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"margin\"></div>\n                        <div class=\"oit {{b_class}}\" #palavras>\n                            <ion-row class=\"altura\" style=\"height: 100%;\">\n                                <div class=\"wordH-{{tam_h}} wordV-{{tam_v}}\" (swipe)=\"logDrag($event)\" *ngFor=\"let list of currentCards | paginate: config_slide; let i = index;\">\n                                    <div class=\"centro_prancha_ type_3 {{b_class}}\" [style.background-color]=\"list.color\" [ngClass]=\"{'disabled': (!hasVerb && list.block) || list.disabled || list.hide}\" style=\"padding: 5%;\" (click)=\"setCard(list, i)\">\n                                        <h6 class=\"tit_picto_{{tit_picto}} {{b_class}}\" style=\"padding: 0px; padding-top: 3px; margin: 0px; text-transform: uppercase; background: transparent;color:black\">\n                                            {{list.label}}\n                                        </h6>\n                                        <div class=\"img_picto_{{tit_picto}} {{b_class}}\" style=\"background: transparent;padding: 0px  ;\">\n                                            <div class=\"img-container\">\n\n                                                <!-- <img *ngIf=\"list.image_file && list.image_file != '...'\" [attr.src]=\"url+list.image_file\" onerror=\"this.style.display='none'\"> -->\n                                                <img [attr.src]=\"list.image_path\" onerror=\"this.style.display='none'\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ion-row>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"lateral\">\n                    <div class=\"full ion-no-padding\">\n                        <div class=\"ic_menu ion-no-padding {{b_class}}\">\n                        </div>\n                        <div class=\"ic_seta\">\n                            <img id=\"next\" *ngIf=\"p.getCurrent() !== total_pages\" (click)=\"p.next()\" src=\"../../../assets/svg/round-arrow_right-24px.svg\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div #opcoes class=\"box_opc ion-no-padding {{b_class}}\">\n            <!-- <div class=\"full_a\"> -->\n            <div (click)=\"speaker(1, 2)\" class=\"opc_tam {{b_class}}\" [ngClass]=\"{'disabled': sentece.length == 0}\">\n                <div class=\"sub_opc_tam\">\n                    <h6>SPEAK</h6>\n                    <!-- <img width=\"50%\" height=\"auto\" oncontextmenu=\"return false\"\n            src=\"../../../assets/svg/round-volume_up-24px.svg\"> -->\n                    <ion-icon name=\"volume-high\"></ion-icon>\n                </div>\n            </div>\n            <!-- <div class=\"opc_tam {{b_class}}\">\n        <div class=\"sub_opc_tam\">\n          <h6>SOCIAL</h6>\n          <ion-icon name=\"star\"></ion-icon>\n        </div>\n      </div> -->\n            <div (click)=\"clean()\" class=\"opc_tam {{b_class}}\">\n                <div class=\"sub_opc_tam\">\n                    <h6>CLEAN</h6>\n                    <!-- <img width=\"70%\" height=\"auto\" oncontextmenu=\"return false\"\n              src=\"../../../assets/svg/round-delete-24px.svg\"> -->\n                    <ion-icon name=\"trash\"></ion-icon>\n                </div>\n            </div>\n            <!-- <div class=\"opc_tam {{b_class}}\"><h6>FRASES</h6><img width=\"30\" oncontextmenu=\"return false\" src=\"../../../assets/svg/round-chat-24px.svg\"></div> -->\n            <div class=\"opc_tam {{b_class}}\" [ngClass]=\"{'disabled': !allowBack}\">\n                <div class=\"sub_opc_tam\" (click)=\"back()\">\n                    <h6>BACK</h6>\n                    <ion-icon name=\"return-up-back\"></ion-icon>\n                </div>\n            </div>\n            <div (click)=\"home()\" class=\"opc_tam {{b_class}}\" [ngClass]=\"{'disabled': !allowBack}\">\n                <div class=\"sub_opc_tam\">\n                    <h6>HOME</h6>\n                    <!-- <img width=\"70%\" height=\"auto\" oncontextmenu=\"return false\"\n            src=\"../../../assets/svg/round-home-24px.svg\"> -->\n                    <ion-icon name=\"home\"></ion-icon>\n                </div>\n            </div>\n        </div>\n        <div class=\"slide\" #palavras>\n            <pagination-template style=\"width: auto; padding: 0px; margin: 0px;\" #p=\"paginationApi\" [id]=\"config_slide.id\" (pageChange)=\"config_slide.currentPage = $event\">\n                <div class=\"custom-pagination {{b_class}}\" *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\n                    <div *ngIf=\"p.getCurrent() === page.value\" style=\"font-size: 2vh; color: #888; padding: 0px; margin: 0px;\">\n                        {{page.value}}/{{total_pages}}\n                    </div>\n                </div>\n            </pagination-template>\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/speak-tts/lib/speak-tts.js":
  /*!*************************************************!*\
    !*** ./node_modules/speak-tts/lib/speak-tts.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSpeakTtsLibSpeakTtsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _utils = __webpack_require__(
    /*! ./utils */
    "./node_modules/speak-tts/lib/utils.js");

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    var SpeakTTS = /*#__PURE__*/function () {
      function SpeakTTS() {
        _classCallCheck(this, SpeakTTS);

        this.browserSupport = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
        this.synthesisVoice = null;
      }

      _createClass(SpeakTTS, [{
        key: "init",
        value: function init() {
          var _this = this;

          var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new Promise(function (resolve, reject) {
            if (!_this.browserSupport) {
              reject('Your browser does not support Speech Synthesis');
            }

            var listeners = (0, _utils.isNil)(conf.listeners) ? {} : conf.listeners;
            var splitSentences = (0, _utils.isNil)(conf.splitSentences) ? true : conf.splitSentences;
            var lang = (0, _utils.isNil)(conf.lang) ? undefined : conf.lang;
            var volume = (0, _utils.isNil)(conf.volume) ? 1 : conf.volume;
            var rate = (0, _utils.isNil)(conf.rate) ? 1 : conf.rate;
            var pitch = (0, _utils.isNil)(conf.pitch) ? 1 : conf.pitch;
            var voice = (0, _utils.isNil)(conf.voice) ? undefined : conf.voice; // Attach event listeners

            Object.keys(listeners).forEach(function (listener) {
              var fn = listeners[listener];

              var newListener = function newListener(data) {
                fn && fn(data);
              };

              if (listener !== 'onvoiceschanged') {
                speechSynthesis[listener] = newListener;
              }
            });

            _this._loadVoices().then(function (voices) {
              // Handle callback onvoiceschanged by hand
              listeners['onvoiceschanged'] && listeners['onvoiceschanged'](voices); // Initialize values if necessary

              !(0, _utils.isNil)(lang) && _this.setLanguage(lang);
              !(0, _utils.isNil)(voice) && _this.setVoice(voice);
              !(0, _utils.isNil)(volume) && _this.setVolume(volume);
              !(0, _utils.isNil)(rate) && _this.setRate(rate);
              !(0, _utils.isNil)(pitch) && _this.setPitch(pitch);
              !(0, _utils.isNil)(splitSentences) && _this.setSplitSentences(splitSentences);
              resolve({
                voices: voices,
                lang: _this.lang,
                voice: _this.voice,
                volume: _this.volume,
                rate: _this.rate,
                pitch: _this.pitch,
                splitSentences: _this.splitSentences,
                browserSupport: _this.browserSupport
              });
            })["catch"](function (e) {
              reject(e);
            });
          });
        }
      }, {
        key: "_fetchVoices",
        value: function _fetchVoices() {
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              var voices = speechSynthesis.getVoices();

              if ((0, _utils.size)(voices) > 0) {
                return resolve(voices);
              } else {
                return reject("Could not fetch voices");
              }
            }, 100);
          });
        }
      }, {
        key: "_loadVoices",
        value: function _loadVoices() {
          var _this2 = this;

          var remainingAttempts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
          return this._fetchVoices()["catch"](function (error) {
            if (remainingAttempts === 0) throw error;
            return _this2._loadVoices(remainingAttempts - 1);
          });
        }
      }, {
        key: "hasBrowserSupport",
        value: function hasBrowserSupport() {
          return this.browserSupport;
        }
      }, {
        key: "setVoice",
        value: function setVoice(voice) {
          var synthesisVoice;
          var voices = speechSynthesis.getVoices(); // set voice by name

          if ((0, _utils.isString)(voice)) {
            synthesisVoice = voices.find(function (v) {
              return v.name === voice;
            });
          } // Set the voice in conf if found


          if ((0, _utils.isObject)(voice)) {
            synthesisVoice = voice;
          }

          if (synthesisVoice) {
            this.synthesisVoice = synthesisVoice;
          } else {
            throw 'Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.';
          }
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(lang) {
          lang = lang.replace('_', '-'); // some Android versions seem to ignore BCP 47 and use an underscore character in language tag

          if ((0, _utils.validateLocale)(lang)) {
            this.lang = lang;
          } else {
            throw 'Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)';
          }
        }
      }, {
        key: "setVolume",
        value: function setVolume(volume) {
          volume = parseFloat(volume);

          if (!(0, _utils.isNan)(volume) && volume >= 0 && volume <= 1) {
            this.volume = volume;
          } else {
            throw 'Error setting volume. Please verify your volume value is a number between 0 and 1.';
          }
        }
      }, {
        key: "setRate",
        value: function setRate(rate) {
          rate = parseFloat(rate);

          if (!(0, _utils.isNan)(rate) && rate >= 0 && rate <= 10) {
            this.rate = rate;
          } else {
            throw 'Error setting rate. Please verify your volume value is a number between 0 and 10.';
          }
        }
      }, {
        key: "setPitch",
        value: function setPitch(pitch) {
          pitch = parseFloat(pitch);

          if (!(0, _utils.isNan)(pitch) && pitch >= 0 && pitch <= 2) {
            this.pitch = pitch;
          } else {
            throw 'Error setting pitch. Please verify your pitch value is a number between 0 and 2.';
          }
        }
      }, {
        key: "setSplitSentences",
        value: function setSplitSentences(splitSentences) {
          this.splitSentences = splitSentences;
        }
      }, {
        key: "speak",
        value: function speak(data) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            var text = data.text,
                _data$listeners = data.listeners,
                listeners = _data$listeners === void 0 ? {} : _data$listeners,
                _data$queue = data.queue,
                queue = _data$queue === void 0 ? true : _data$queue;
            var msg = (0, _utils.trim)(text);
            if ((0, _utils.isNil)(msg)) resolve(); // Stop current speech

            !queue && _this3.cancel(); // Split into sentences (for better result and bug with some versions of chrome)

            var utterances = [];
            var sentences = _this3.splitSentences ? (0, _utils.splitSentences)(msg) : [msg];
            sentences.forEach(function (sentence, index) {
              var isLast = index === (0, _utils.size)(sentences) - 1;
              var utterance = new SpeechSynthesisUtterance();
              if (_this3.synthesisVoice) utterance.voice = _this3.synthesisVoice;
              if (_this3.lang) utterance.lang = _this3.lang;
              if (_this3.volume) utterance.volume = _this3.volume; // 0 to 1

              if (_this3.rate) utterance.rate = _this3.rate; // 0.1 to 10

              if (_this3.pitch) utterance.pitch = _this3.pitch; //0 to 2

              utterance.text = sentence; // Attach event listeners

              Object.keys(listeners).forEach(function (listener) {
                var fn = listeners[listener];

                var newListener = function newListener(data) {
                  fn && fn(data);

                  if (listener === 'onerror') {
                    reject({
                      utterances: utterances,
                      lastUtterance: utterance,
                      error: data
                    });
                  }

                  if (listener === 'onend') {
                    if (isLast) resolve({
                      utterances: utterances,
                      lastUtterance: utterance
                    });
                  }
                };

                utterance[listener] = newListener;
              });
              utterances.push(utterance);
              speechSynthesis.speak(utterance);
            });
          });
        }
      }, {
        key: "pending",
        value: function pending() {
          return speechSynthesis.pending;
        }
      }, {
        key: "paused",
        value: function paused() {
          return speechSynthesis.paused;
        }
      }, {
        key: "speaking",
        value: function speaking() {
          return speechSynthesis.speaking;
        }
      }, {
        key: "pause",
        value: function pause() {
          speechSynthesis.pause();
        }
      }, {
        key: "resume",
        value: function resume() {
          speechSynthesis.resume();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          speechSynthesis.cancel();
        }
      }]);

      return SpeakTTS;
    }();

    var _default = SpeakTTS;
    exports["default"] = _default;
    /***/
  },

  /***/
  "./node_modules/speak-tts/lib/utils.js":
  /*!*********************************************!*\
    !*** ./node_modules/speak-tts/lib/utils.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesSpeakTtsLibUtilsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.trim = exports.isObject = exports.isNil = exports.isNan = exports.size = exports.isString = exports.validateLocale = exports.splitSentences = void 0;

    var splitSentences = function splitSentences() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return text.replace(/\.+/g, '.|').replace(/\?/g, '?|').replace(/\!/g, '!|').split("|").map(function (sentence) {
        return trim(sentence);
      }).filter(Boolean);
    };

    exports.splitSentences = splitSentences;
    var bcp47LocalePattern = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i; // eslint-disable-line max-len

    /**
     * Validate a locale string to test if it is bcp47 compliant
     * @param {String} locale The tag locale to parse
     * @return {Boolean} True if tag is bcp47 compliant false otherwise
     */

    var validateLocale = function validateLocale(locale) {
      return typeof locale !== 'string' ? false : bcp47LocalePattern.test(locale);
    };

    exports.validateLocale = validateLocale;

    var isString = function isString(value) {
      return typeof value === 'string' || value instanceof String;
    };

    exports.isString = isString;

    var size = function size(value) {
      return value && Array.isArray(value) && value.length ? value.length : 0;
    };

    exports.size = size;

    var isNan = function isNan(value) {
      return typeof value === "number" && isNaN(value);
    };

    exports.isNan = isNan;

    var isNil = function isNil(value) {
      return value === null || value === undefined;
    };

    exports.isNil = isNil;

    var isObject = function isObject(value) {
      return Object.prototype.toString.call(value) === '[object Object]';
    };

    exports.isObject = isObject;

    var trim = function trim(value) {
      return isString(value) ? value.trim() : '';
    };

    exports.trim = trim;
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck2(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck2(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wordH-12, .wordH-11, .wordH-10, .wordH-9, .wordH-8, .wordH-7, .wordH-6, .wordH-5, .wordH-4, .wordH-3, .wordH-2, .wordH-1, .wordV-6, .wordV-5, .wordV-4, .wordV-3, .wordV-2, .wordV-1 {\n  box-sizing: border-box;\n  border-bottom: 0px;\n  border-left: 0px;\n}\n\n.wordV-1 {\n  height: calc(100% / 1 - 4px);\n}\n\n.wordV-2 {\n  height: calc(100% / 2 - 4px);\n}\n\n.wordV-3 {\n  height: calc(100% / 3 - 4px);\n}\n\n.wordV-4 {\n  height: calc(100% / 4 - 4px);\n}\n\n.wordV-5 {\n  height: calc(100% / 5 - 4px);\n}\n\n.wordV-6 {\n  height: calc(100% / 6 - 4px);\n}\n\n.wordH-1 {\n  width: calc(100% / 1 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-1 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-1 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-1 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-1 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-1 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-1 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-1 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-1 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-1 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-1 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-1 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-1 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-1 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-1 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-1 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-1 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-1 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-1 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-1 .centro_prancha_ELEMENT,\n.wordH-1 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-1 .centro_prancha_ELEMENT .neg,\n.wordH-1 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-1 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-1 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-1 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-1 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-1 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-1 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-1 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-1 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-1 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-1 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-1 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-1 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-1 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-1 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-1 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-1 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-1 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-1 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-1 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-1 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-1 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-1 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-1 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-1 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-1 .centro_prancha_ELEMENT .img-container,\n.wordH-1 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-1 .centro_prancha_ELEMENT img,\n.wordH-1 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-1:nth-child(1n) {\n  border-right: 0px;\n}\n\n.wordH-1:nth-child(-n+1) {\n  border-top: 0px;\n}\n\n.wordH-1:nth-child(1n+1):nth-last-child(-n+1) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-1:nth-child(1n+1):nth-last-child(-n+1) .centro_prancha_ELEMENT,\n.wordH-1:nth-child(1n+1):nth-last-child(-n+1) .centro_prancha_,\n.wordH-1:nth-child(1n+1):nth-last-child(-n+1) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-1:nth-child(1n):nth-child(-n+1) .centro_prancha_ELEMENT,\n.wordH-1:nth-child(1n):nth-child(-n+1) .centro_prancha_,\n.wordH-1:nth-child(1n):nth-child(-n+1) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-1:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-1:first-child .centro_prancha_ELEMENT,\n.wordH-1:first-child .centro_prancha_,\n.wordH-1:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-1:last-child .centro_prancha_ELEMENT,\n.wordH-1:last-child .centro_prancha_,\n.wordH-1:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-2 {\n  width: calc(100% / 2 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-2 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-2 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-2 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-2 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-2 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-2 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-2 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-2 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-2 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-2 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-2 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-2 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-2 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-2 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-2 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-2 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-2 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-2 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-2 .centro_prancha_ELEMENT,\n.wordH-2 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-2 .centro_prancha_ELEMENT .neg,\n.wordH-2 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-2 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-2 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-2 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-2 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-2 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-2 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-2 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-2 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-2 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-2 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-2 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-2 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-2 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-2 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-2 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-2 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-2 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-2 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-2 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-2 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-2 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-2 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-2 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-2 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-2 .centro_prancha_ELEMENT .img-container,\n.wordH-2 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-2 .centro_prancha_ELEMENT img,\n.wordH-2 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-2:nth-child(2n) {\n  border-right: 0px;\n}\n\n.wordH-2:nth-child(-n+2) {\n  border-top: 0px;\n}\n\n.wordH-2:nth-child(2n+1):nth-last-child(-n+2) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-2:nth-child(2n+1):nth-last-child(-n+2) .centro_prancha_ELEMENT,\n.wordH-2:nth-child(2n+1):nth-last-child(-n+2) .centro_prancha_,\n.wordH-2:nth-child(2n+1):nth-last-child(-n+2) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-2:nth-child(2n):nth-child(-n+2) .centro_prancha_ELEMENT,\n.wordH-2:nth-child(2n):nth-child(-n+2) .centro_prancha_,\n.wordH-2:nth-child(2n):nth-child(-n+2) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-2:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-2:first-child .centro_prancha_ELEMENT,\n.wordH-2:first-child .centro_prancha_,\n.wordH-2:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-2:last-child .centro_prancha_ELEMENT,\n.wordH-2:last-child .centro_prancha_,\n.wordH-2:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-3 {\n  width: calc(100% / 3 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-3 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-3 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-3 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-3 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-3 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-3 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-3 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-3 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-3 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-3 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-3 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-3 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-3 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-3 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-3 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-3 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-3 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-3 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-3 .centro_prancha_ELEMENT,\n.wordH-3 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-3 .centro_prancha_ELEMENT .neg,\n.wordH-3 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-3 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-3 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-3 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-3 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-3 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-3 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-3 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-3 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-3 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-3 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-3 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-3 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-3 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-3 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-3 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-3 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-3 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-3 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-3 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-3 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-3 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-3 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-3 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-3 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-3 .centro_prancha_ELEMENT .img-container,\n.wordH-3 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-3 .centro_prancha_ELEMENT img,\n.wordH-3 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-3:nth-child(3n) {\n  border-right: 0px;\n}\n\n.wordH-3:nth-child(-n+3) {\n  border-top: 0px;\n}\n\n.wordH-3:nth-child(3n+1):nth-last-child(-n+3) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-3:nth-child(3n+1):nth-last-child(-n+3) .centro_prancha_ELEMENT,\n.wordH-3:nth-child(3n+1):nth-last-child(-n+3) .centro_prancha_,\n.wordH-3:nth-child(3n+1):nth-last-child(-n+3) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-3:nth-child(3n):nth-child(-n+3) .centro_prancha_ELEMENT,\n.wordH-3:nth-child(3n):nth-child(-n+3) .centro_prancha_,\n.wordH-3:nth-child(3n):nth-child(-n+3) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-3:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-3:first-child .centro_prancha_ELEMENT,\n.wordH-3:first-child .centro_prancha_,\n.wordH-3:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-3:last-child .centro_prancha_ELEMENT,\n.wordH-3:last-child .centro_prancha_,\n.wordH-3:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-4 {\n  width: calc(100% / 4 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-4 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-4 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-4 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-4 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-4 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-4 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-4 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-4 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-4 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-4 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-4 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-4 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-4 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-4 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-4 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-4 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-4 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-4 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-4 .centro_prancha_ELEMENT,\n.wordH-4 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-4 .centro_prancha_ELEMENT .neg,\n.wordH-4 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-4 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-4 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-4 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-4 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-4 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-4 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-4 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-4 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-4 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-4 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-4 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-4 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-4 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-4 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-4 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-4 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-4 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-4 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-4 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-4 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-4 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-4 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-4 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-4 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-4 .centro_prancha_ELEMENT .img-container,\n.wordH-4 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-4 .centro_prancha_ELEMENT img,\n.wordH-4 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-4:nth-child(4n) {\n  border-right: 0px;\n}\n\n.wordH-4:nth-child(-n+4) {\n  border-top: 0px;\n}\n\n.wordH-4:nth-child(4n+1):nth-last-child(-n+4) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-4:nth-child(4n+1):nth-last-child(-n+4) .centro_prancha_ELEMENT,\n.wordH-4:nth-child(4n+1):nth-last-child(-n+4) .centro_prancha_,\n.wordH-4:nth-child(4n+1):nth-last-child(-n+4) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-4:nth-child(4n):nth-child(-n+4) .centro_prancha_ELEMENT,\n.wordH-4:nth-child(4n):nth-child(-n+4) .centro_prancha_,\n.wordH-4:nth-child(4n):nth-child(-n+4) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-4:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-4:first-child .centro_prancha_ELEMENT,\n.wordH-4:first-child .centro_prancha_,\n.wordH-4:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-4:last-child .centro_prancha_ELEMENT,\n.wordH-4:last-child .centro_prancha_,\n.wordH-4:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-5 {\n  width: calc(100% / 5 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-5 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-5 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-5 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-5 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-5 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-5 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-5 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-5 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-5 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-5 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-5 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-5 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-5 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-5 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-5 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-5 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-5 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-5 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-5 .centro_prancha_ELEMENT,\n.wordH-5 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-5 .centro_prancha_ELEMENT .neg,\n.wordH-5 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-5 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-5 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-5 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-5 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-5 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-5 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-5 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-5 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-5 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-5 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-5 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-5 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-5 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-5 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-5 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-5 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-5 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-5 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-5 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-5 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-5 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-5 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-5 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-5 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-5 .centro_prancha_ELEMENT .img-container,\n.wordH-5 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-5 .centro_prancha_ELEMENT img,\n.wordH-5 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-5:nth-child(5n) {\n  border-right: 0px;\n}\n\n.wordH-5:nth-child(-n+5) {\n  border-top: 0px;\n}\n\n.wordH-5:nth-child(5n+1):nth-last-child(-n+5) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-5:nth-child(5n+1):nth-last-child(-n+5) .centro_prancha_ELEMENT,\n.wordH-5:nth-child(5n+1):nth-last-child(-n+5) .centro_prancha_,\n.wordH-5:nth-child(5n+1):nth-last-child(-n+5) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-5:nth-child(5n):nth-child(-n+5) .centro_prancha_ELEMENT,\n.wordH-5:nth-child(5n):nth-child(-n+5) .centro_prancha_,\n.wordH-5:nth-child(5n):nth-child(-n+5) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-5:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-5:first-child .centro_prancha_ELEMENT,\n.wordH-5:first-child .centro_prancha_,\n.wordH-5:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-5:last-child .centro_prancha_ELEMENT,\n.wordH-5:last-child .centro_prancha_,\n.wordH-5:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-6 {\n  width: calc(100% / 6 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-6 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-6 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-6 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-6 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-6 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-6 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-6 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-6 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-6 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-6 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-6 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-6 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-6 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-6 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-6 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-6 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-6 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-6 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-6 .centro_prancha_ELEMENT,\n.wordH-6 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-6 .centro_prancha_ELEMENT .neg,\n.wordH-6 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-6 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-6 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-6 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-6 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-6 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-6 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-6 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-6 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-6 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-6 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-6 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-6 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-6 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-6 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-6 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-6 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-6 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-6 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-6 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-6 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-6 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-6 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-6 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-6 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-6 .centro_prancha_ELEMENT .img-container,\n.wordH-6 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-6 .centro_prancha_ELEMENT img,\n.wordH-6 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-6:nth-child(6n) {\n  border-right: 0px;\n}\n\n.wordH-6:nth-child(-n+6) {\n  border-top: 0px;\n}\n\n.wordH-6:nth-child(6n+1):nth-last-child(-n+6) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-6:nth-child(6n+1):nth-last-child(-n+6) .centro_prancha_ELEMENT,\n.wordH-6:nth-child(6n+1):nth-last-child(-n+6) .centro_prancha_,\n.wordH-6:nth-child(6n+1):nth-last-child(-n+6) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-6:nth-child(6n):nth-child(-n+6) .centro_prancha_ELEMENT,\n.wordH-6:nth-child(6n):nth-child(-n+6) .centro_prancha_,\n.wordH-6:nth-child(6n):nth-child(-n+6) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-6:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-6:first-child .centro_prancha_ELEMENT,\n.wordH-6:first-child .centro_prancha_,\n.wordH-6:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-6:last-child .centro_prancha_ELEMENT,\n.wordH-6:last-child .centro_prancha_,\n.wordH-6:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-7 {\n  width: calc(100% / 7 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-7 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-7 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-7 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-7 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-7 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-7 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-7 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-7 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-7 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-7 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-7 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-7 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-7 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-7 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-7 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-7 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-7 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-7 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-7 .centro_prancha_ELEMENT,\n.wordH-7 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-7 .centro_prancha_ELEMENT .neg,\n.wordH-7 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-7 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-7 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-7 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-7 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-7 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-7 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-7 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-7 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-7 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-7 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-7 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-7 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-7 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-7 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-7 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-7 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-7 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-7 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-7 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-7 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-7 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-7 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-7 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-7 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-7 .centro_prancha_ELEMENT .img-container,\n.wordH-7 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-7 .centro_prancha_ELEMENT img,\n.wordH-7 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-7:nth-child(7n) {\n  border-right: 0px;\n}\n\n.wordH-7:nth-child(-n+7) {\n  border-top: 0px;\n}\n\n.wordH-7:nth-child(7n+1):nth-last-child(-n+7) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-7:nth-child(7n+1):nth-last-child(-n+7) .centro_prancha_ELEMENT,\n.wordH-7:nth-child(7n+1):nth-last-child(-n+7) .centro_prancha_,\n.wordH-7:nth-child(7n+1):nth-last-child(-n+7) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-7:nth-child(7n):nth-child(-n+7) .centro_prancha_ELEMENT,\n.wordH-7:nth-child(7n):nth-child(-n+7) .centro_prancha_,\n.wordH-7:nth-child(7n):nth-child(-n+7) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-7:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-7:first-child .centro_prancha_ELEMENT,\n.wordH-7:first-child .centro_prancha_,\n.wordH-7:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-7:last-child .centro_prancha_ELEMENT,\n.wordH-7:last-child .centro_prancha_,\n.wordH-7:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-8 {\n  width: calc(100% / 8 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-8 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-8 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-8 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-8 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-8 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-8 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-8 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-8 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-8 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-8 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-8 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-8 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-8 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-8 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-8 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-8 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-8 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-8 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-8 .centro_prancha_ELEMENT,\n.wordH-8 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-8 .centro_prancha_ELEMENT .neg,\n.wordH-8 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-8 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-8 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-8 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-8 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-8 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-8 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-8 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-8 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-8 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-8 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-8 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-8 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-8 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-8 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-8 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-8 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-8 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-8 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-8 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-8 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-8 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-8 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-8 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-8 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-8 .centro_prancha_ELEMENT .img-container,\n.wordH-8 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-8 .centro_prancha_ELEMENT img,\n.wordH-8 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-8:nth-child(8n) {\n  border-right: 0px;\n}\n\n.wordH-8:nth-child(-n+8) {\n  border-top: 0px;\n}\n\n.wordH-8:nth-child(8n+1):nth-last-child(-n+8) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-8:nth-child(8n+1):nth-last-child(-n+8) .centro_prancha_ELEMENT,\n.wordH-8:nth-child(8n+1):nth-last-child(-n+8) .centro_prancha_,\n.wordH-8:nth-child(8n+1):nth-last-child(-n+8) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-8:nth-child(8n):nth-child(-n+8) .centro_prancha_ELEMENT,\n.wordH-8:nth-child(8n):nth-child(-n+8) .centro_prancha_,\n.wordH-8:nth-child(8n):nth-child(-n+8) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-8:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-8:first-child .centro_prancha_ELEMENT,\n.wordH-8:first-child .centro_prancha_,\n.wordH-8:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-8:last-child .centro_prancha_ELEMENT,\n.wordH-8:last-child .centro_prancha_,\n.wordH-8:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-9 {\n  width: calc(100% / 9 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-9 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-9 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-9 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-9 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-9 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-9 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-9 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-9 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-9 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-9 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-9 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-9 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-9 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-9 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-9 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-9 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-9 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-9 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-9 .centro_prancha_ELEMENT,\n.wordH-9 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-9 .centro_prancha_ELEMENT .neg,\n.wordH-9 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-9 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-9 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-9 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-9 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-9 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-9 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-9 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-9 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-9 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-9 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-9 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-9 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-9 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-9 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-9 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-9 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-9 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-9 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-9 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-9 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-9 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-9 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-9 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-9 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-9 .centro_prancha_ELEMENT .img-container,\n.wordH-9 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-9 .centro_prancha_ELEMENT img,\n.wordH-9 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-9:nth-child(9n) {\n  border-right: 0px;\n}\n\n.wordH-9:nth-child(-n+9) {\n  border-top: 0px;\n}\n\n.wordH-9:nth-child(9n+1):nth-last-child(-n+9) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-9:nth-child(9n+1):nth-last-child(-n+9) .centro_prancha_ELEMENT,\n.wordH-9:nth-child(9n+1):nth-last-child(-n+9) .centro_prancha_,\n.wordH-9:nth-child(9n+1):nth-last-child(-n+9) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-9:nth-child(9n):nth-child(-n+9) .centro_prancha_ELEMENT,\n.wordH-9:nth-child(9n):nth-child(-n+9) .centro_prancha_,\n.wordH-9:nth-child(9n):nth-child(-n+9) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-9:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-9:first-child .centro_prancha_ELEMENT,\n.wordH-9:first-child .centro_prancha_,\n.wordH-9:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-9:last-child .centro_prancha_ELEMENT,\n.wordH-9:last-child .centro_prancha_,\n.wordH-9:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-10 {\n  width: calc(100% / 10 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-10 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-10 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-10 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-10 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-10 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-10 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-10 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-10 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-10 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-10 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-10 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-10 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-10 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-10 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-10 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-10 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-10 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-10 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-10 .centro_prancha_ELEMENT,\n.wordH-10 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-10 .centro_prancha_ELEMENT .neg,\n.wordH-10 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-10 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-10 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-10 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-10 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-10 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-10 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-10 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-10 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-10 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-10 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-10 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-10 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-10 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-10 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-10 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-10 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-10 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-10 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-10 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-10 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-10 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-10 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-10 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-10 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-10 .centro_prancha_ELEMENT .img-container,\n.wordH-10 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-10 .centro_prancha_ELEMENT img,\n.wordH-10 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-10:nth-child(10n) {\n  border-right: 0px;\n}\n\n.wordH-10:nth-child(-n+10) {\n  border-top: 0px;\n}\n\n.wordH-10:nth-child(10n+1):nth-last-child(-n+10) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-10:nth-child(10n+1):nth-last-child(-n+10) .centro_prancha_ELEMENT,\n.wordH-10:nth-child(10n+1):nth-last-child(-n+10) .centro_prancha_,\n.wordH-10:nth-child(10n+1):nth-last-child(-n+10) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-10:nth-child(10n):nth-child(-n+10) .centro_prancha_ELEMENT,\n.wordH-10:nth-child(10n):nth-child(-n+10) .centro_prancha_,\n.wordH-10:nth-child(10n):nth-child(-n+10) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-10:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-10:first-child .centro_prancha_ELEMENT,\n.wordH-10:first-child .centro_prancha_,\n.wordH-10:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-10:last-child .centro_prancha_ELEMENT,\n.wordH-10:last-child .centro_prancha_,\n.wordH-10:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-11 {\n  width: calc(100% / 11 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-11 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-11 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-11 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-11 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-11 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-11 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-11 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-11 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-11 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-11 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-11 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-11 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-11 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-11 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-11 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-11 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-11 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-11 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-11 .centro_prancha_ELEMENT,\n.wordH-11 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-11 .centro_prancha_ELEMENT .neg,\n.wordH-11 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-11 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-11 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-11 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-11 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-11 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-11 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-11 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-11 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-11 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-11 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-11 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-11 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-11 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-11 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-11 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-11 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-11 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-11 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-11 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-11 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-11 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-11 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-11 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-11 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-11 .centro_prancha_ELEMENT .img-container,\n.wordH-11 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-11 .centro_prancha_ELEMENT img,\n.wordH-11 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-11:nth-child(11n) {\n  border-right: 0px;\n}\n\n.wordH-11:nth-child(-n+11) {\n  border-top: 0px;\n}\n\n.wordH-11:nth-child(11n+1):nth-last-child(-n+11) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-11:nth-child(11n+1):nth-last-child(-n+11) .centro_prancha_ELEMENT,\n.wordH-11:nth-child(11n+1):nth-last-child(-n+11) .centro_prancha_,\n.wordH-11:nth-child(11n+1):nth-last-child(-n+11) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-11:nth-child(11n):nth-child(-n+11) .centro_prancha_ELEMENT,\n.wordH-11:nth-child(11n):nth-child(-n+11) .centro_prancha_,\n.wordH-11:nth-child(11n):nth-child(-n+11) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-11:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-11:first-child .centro_prancha_ELEMENT,\n.wordH-11:first-child .centro_prancha_,\n.wordH-11:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-11:last-child .centro_prancha_ELEMENT,\n.wordH-11:last-child .centro_prancha_,\n.wordH-11:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\n.wordH-12 {\n  width: calc(100% / 12 - 4px);\n  box-sizing: border-box;\n  border-radius: 10px;\n  text-align: center;\n  float: left;\n  margin: 2px;\n}\n\n.wordH-12 .centro_prancha_CATEGORY {\n  padding-top: 3px;\n  border: 2px dashed #000;\n  width: 100%;\n  float: left;\n  height: 100%;\n  color: #fff;\n}\n\n.wordH-12 .centro_prancha_CATEGORY .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-12 .centro_prancha_CATEGORY .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-12 .centro_prancha_CATEGORY .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-12 .centro_prancha_CATEGORY .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-12 .centro_prancha_CATEGORY .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-12 .centro_prancha_CATEGORY .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-12 .centro_prancha_CATEGORY .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-12 .centro_prancha_CATEGORY .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-12 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-12 .centro_prancha_CATEGORY .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-12 .centro_prancha_CATEGORY .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-12 .centro_prancha_CATEGORY .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-12 .centro_prancha_CATEGORY .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-12 .centro_prancha_CATEGORY .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-12 .centro_prancha_CATEGORY .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-12 .centro_prancha_CATEGORY img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-12 .centro_prancha_CATEGORY.neg {\n  border: 1px dashed #fff;\n}\n\n.wordH-12 .centro_prancha_ELEMENT,\n.wordH-12 .centro_prancha_ {\n  border-radius: 10px;\n  cursor: pointer;\n  color: #fff;\n  width: 100%;\n  float: left;\n  height: 100%;\n}\n\n.wordH-12 .centro_prancha_ELEMENT .neg,\n.wordH-12 .centro_prancha_ .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.wordH-12 .centro_prancha_ELEMENT .tit_picto_normal,\n.wordH-12 .centro_prancha_ .tit_picto_normal {\n  font-size: 2.2vh;\n  line-height: 2.2vh;\n  height: 4.5vh;\n}\n\n.wordH-12 .centro_prancha_ELEMENT .tit_picto_medio,\n.wordH-12 .centro_prancha_ .tit_picto_medio {\n  font-size: 1.5vh;\n  line-height: 1.5vh;\n  height: 2.9vh;\n}\n\n.wordH-12 .centro_prancha_ELEMENT .tit_picto_medio_2,\n.wordH-12 .centro_prancha_ .tit_picto_medio_2 {\n  font-size: 1.3vh;\n  line-height: 1.3vh;\n  height: 2.9vh;\n}\n\n.wordH-12 .centro_prancha_ELEMENT .tit_picto_p,\n.wordH-12 .centro_prancha_ .tit_picto_p {\n  font-size: 1.65vh;\n  line-height: 1.65vh;\n  height: 3.5vh;\n}\n\n.wordH-12 .centro_prancha_ELEMENT .tit_picto_grande,\n.wordH-12 .centro_prancha_ .tit_picto_grande {\n  font-size: 1.25vh;\n  line-height: 1.25vh;\n  height: 3.7vh;\n}\n\n.wordH-12 .centro_prancha_ELEMENT .tit_picto_g_grande,\n.wordH-12 .centro_prancha_ .tit_picto_g_grande {\n  font-size: 1.2vh;\n  line-height: 1.2vh;\n  height: 3vh;\n}\n\n.wordH-12 .centro_prancha_ELEMENT .img_picto_p,\n.wordH-12 .centro_prancha_ .img_picto_p {\n  height: calc(100% - 3.5vh);\n}\n\n.wordH-12 .centro_prancha_ELEMENT .img_picto_normal,\n.wordH-12 .centro_prancha_ .img_picto_normal {\n  height: calc(100% - 4.5vh);\n}\n\n.wordH-12 .centro_prancha_ELEMENT .img_picto_medio,\n.wordH-12 .centro_prancha_ .img_picto_medio {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-12 .centro_prancha_ELEMENT .img_picto_medio_2,\n.wordH-12 .centro_prancha_ .img_picto_medio_2 {\n  height: calc(100% - 2.9vh);\n}\n\n.wordH-12 .centro_prancha_ELEMENT .img_picto_grande,\n.wordH-12 .centro_prancha_ .img_picto_grande {\n  height: calc(100% - 3.7vh);\n}\n\n.wordH-12 .centro_prancha_ELEMENT .img_picto_g_grande,\n.wordH-12 .centro_prancha_ .img_picto_g_grande {\n  height: calc(100% - 3vh);\n}\n\n.wordH-12 .centro_prancha_ELEMENT .img-container,\n.wordH-12 .centro_prancha_ .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.wordH-12 .centro_prancha_ELEMENT img,\n.wordH-12 .centro_prancha_ img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.wordH-12:nth-child(12n) {\n  border-right: 0px;\n}\n\n.wordH-12:nth-child(-n+12) {\n  border-top: 0px;\n}\n\n.wordH-12:nth-child(12n+1):nth-last-child(-n+12) {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-12:nth-child(12n+1):nth-last-child(-n+12) .centro_prancha_ELEMENT,\n.wordH-12:nth-child(12n+1):nth-last-child(-n+12) .centro_prancha_,\n.wordH-12:nth-child(12n+1):nth-last-child(-n+12) .centro_prancha_CATEGORY {\n  border-bottom-left-radius: 10px;\n}\n\n.wordH-12:nth-child(12n):nth-child(-n+12) .centro_prancha_ELEMENT,\n.wordH-12:nth-child(12n):nth-child(-n+12) .centro_prancha_,\n.wordH-12:nth-child(12n):nth-child(-n+12) .centro_prancha_CATEGORY {\n  border-top-right-radius: 10px;\n}\n\n.wordH-12:first-child {\n  border-top-left-radius: 10px;\n}\n\n.wordH-12:first-child .centro_prancha_ELEMENT,\n.wordH-12:first-child .centro_prancha_,\n.wordH-12:first-child .centro_prancha_CATEGORY {\n  border-top-left-radius: 10px;\n}\n\n.wordH-12:last-child .centro_prancha_ELEMENT,\n.wordH-12:last-child .centro_prancha_,\n.wordH-12:last-child .centro_prancha_CATEGORY {\n  border-bottom-right-radius: 10px;\n}\n\nbody {\n  background: #dde6e8;\n}\n\n.type_2 {\n  border: 2px dashed #000;\n}\n\n.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.close_menu {\n  height: calc(100vh - 100px - calc(4 * 50px));\n}\n\n.item--menu {\n  margin: 2px 0px;\n  white-space: normal;\n}\n\n.item--submenu {\n  font-size: 12px;\n}\n\n.menu_font ion-item ion-label {\n  font-size: 13px !important;\n  padding-left: 2vw;\n  margin: 5px 0px;\n}\n\n.box_prancha.neg {\n  background: #fff;\n}\n\n.full {\n  height: 100%;\n  width: 100%;\n}\n\n.full_s {\n  height: 100%;\n  background: #dde6e8 !important;\n  width: 100%;\n}\n\n.full_h {\n  height: 100%;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.box_prancha {\n  background: none;\n  width: calc(100% - 10%);\n  margin: 0px 0px;\n  height: 97.5%;\n  float: left;\n}\n\n.box_prancha .lateral {\n  width: 40px;\n  margin: 0px 0px;\n  height: 100%;\n  float: left;\n}\n\n.box_prancha .lateral .ic_menu {\n  height: 18%;\n  width: 100%;\n  position: relative;\n  top: 0;\n  left: 0;\n  background: none;\n}\n\n.box_prancha .lateral .ic_menu.neg {\n  background: #fff;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\n.box_prancha .lateral .ic_seta {\n  height: calc(98% - 18%);\n  width: 100%;\n  padding-top: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.box_opc {\n  width: 10%;\n  margin: 0px 0px;\n  padding-top: 5px;\n  padding-right: 4px;\n  height: 97.5%;\n  float: left;\n  background: none;\n}\n\n.box_opc .opacity {\n  opacity: 0.5;\n}\n\n.box_opc .opc_tam {\n  height: calc(25% - calc(2vh/ 5) * 4);\n  text-align: center;\n  width: 100%;\n  margin-bottom: 2vh;\n  background: #84bac7;\n  border-radius: 10px;\n  box-shadow: 1px 2px 15px 0px #666;\n  text-align: center;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n}\n\n.box_opc .opc_tam .sub_opc_tam {\n  background: none;\n  color: #fff;\n  display: block;\n  font-size: 8vh;\n}\n\n.box_opc .opc_tam:nth-child(5n) {\n  margin-bottom: 0px;\n}\n\n.box_opc .opc_tam.neg {\n  background: #fff;\n  color: #000;\n}\n\n.box_opc .opc_tam.neg h6 {\n  background: #fff;\n  color: #000;\n}\n\n.box_opc .opc_tam.neg ion-icon {\n  background: #fff;\n  color: #000;\n}\n\n.box_opc .opc_tam h6 {\n  color: #fff;\n  font-size: 1.2vw;\n  align-items: center;\n  justify-content: center;\n  margin: 0px !important;\n}\n\n.box_opc.neg {\n  background: #fff;\n}\n\n.centro {\n  width: calc(100% - 2 *40px);\n  float: left;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.centro .margin {\n  height: 1%;\n}\n\n.centro .vin {\n  box-sizing: border-box;\n  height: 18%;\n}\n\n.centro .vin .btn_ocultar {\n  background: #84bac7;\n  font-size: 2vw;\n  padding: 0.4rem;\n  margin: 0.2rem;\n  color: #fff;\n  border-radius: 5px;\n}\n\n.centro .vin .vin_border {\n  height: 100%;\n  background: #fff;\n  width: 100%;\n  border-radius: 10px;\n  border: 1.5px solid #777;\n}\n\n.centro .vin .neg {\n  color: #fff;\n  background: #000 !important;\n}\n\n.centro .vin .centro_frase {\n  height: 100%;\n  float: left;\n  width: 100%;\n}\n\n.centro .vin .lateral_frase_l {\n  height: 100%;\n  float: left;\n  width: 6px;\n}\n\n.centro .vin .lateral_frase_r {\n  height: 100%;\n  float: left;\n  width: 6px;\n}\n\n.centro .vin .ind_frase {\n  height: calc(100% - 4px);\n  width: calc(10% - 2px);\n  float: left;\n  margin: 2px 1px;\n  border-radius: 10px;\n  color: #fff;\n  text-align: center;\n  padding: 1px;\n}\n\n.centro .vin .ind_frase .tit_picto_frase {\n  font-size: 1.2vh;\n  height: 4.3vh;\n}\n\n.centro .vin .ind_frase .img_picto_frase {\n  height: calc(100% - 4.3vh);\n}\n\n.centro .vin .ind_frase .img_picto_frase .img-container {\n  text-align: center;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n}\n\n.centro .vin .ind_frase .img_picto_frase img {\n  margin: auto;\n  height: auto;\n  width: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.centro .vin .texto_ocultar {\n  height: 100%;\n  text-align: center;\n  position: relative;\n}\n\n.centro .vin .texto_ocultar h1 {\n  font-size: 2vw;\n  color: #666;\n}\n\n.centro .vin .vin_border.neg {\n  background: #000;\n}\n\n.centro .vin .ind_frase.neg {\n  border-right: 1px solid #fff;\n  color: #fff;\n}\n\n.centro .vin .ind_frase:first-child {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.centro .vin .ind_frase:nth-child(10n) {\n  border-right: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.centro .vin .ind_frase:nth-child(10n) .lateral_frase_r {\n  border-top-right-radius: 5px;\n  border-top: 1px solid #777;\n  border-bottom: 1px solid #777;\n  border-bottom-right-radius: 5px;\n}\n\n.centro .oit {\n  height: calc(98% - 18%);\n  width: 100%;\n  border-radius: 10px;\n  background: #fff;\n  border: 1.5px solid #777;\n}\n\n.centro .ocultado {\n  font-weight: bold;\n  top: 50%;\n  height: 100%;\n}\n\n.centro .oit.neg {\n  background: #000 !important;\n  color: #fff;\n}\n\n.slide {\n  height: auto;\n  float: left;\n  width: calc(100% - 10%);\n}\n\n.slide .custom-pagination {\n  text-align: center;\n  color: #444;\n}\n\n.slide .custom-pagination .page-number.neg {\n  background: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pheXIvZGV2L2NvbG91cmZ1bC1yZWFhY3Qvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEQTtFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2xERjs7QUQwREU7RUFFRSw0QkFBQTtBQ3hESjs7QURzREU7RUFFRSw0QkFBQTtBQ3BESjs7QURrREU7RUFFRSw0QkFBQTtBQ2hESjs7QUQ4Q0U7RUFFRSw0QkFBQTtBQzVDSjs7QUQwQ0U7RUFFRSw0QkFBQTtBQ3hDSjs7QURzQ0U7RUFFRSw0QkFBQTtBQ3BDSjs7QUQ0Q0U7RUFHRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FDNUNKOztBRDhDSTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDNUNOOztBRDZDTTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBQzNDUjs7QUQ2Q007RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQzNDUjs7QUQ4Q007RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQzVDUjs7QUQrQ007RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQzdDUjs7QURnRE07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQzlDUjs7QURpRE07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQy9DUjs7QURrRE07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2hEUjs7QURtRE07RUFDRSwwQkFBQTtBQ2pEUjs7QURvRE07RUFDRSwwQkFBQTtBQ2xEUjs7QURxRE07RUFDRSwwQkFBQTtBQ25EUjs7QURzRE07RUFDRSwwQkFBQTtBQ3BEUjs7QUR1RE07RUFDRSwwQkFBQTtB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QUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQzB2RUo7O0FEdnZFRTtFQUNFLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUN5dkVKOztBRHR2RUU7RUFDRSwyQkFBQTtFQUNBLFdBQUE7QUN3dkVKOztBRHB2RUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDdXZFRjs7QURydkVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDdXZFSjs7QURwdkVFO0VBQ0UsZ0JBQUE7QUNzdkVKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdmFyaWF2ZWlzXG4kYm94X2xhdGVyYWw6IDQwcHg7XG4kYm94X2xhdGVyYWxfcHJhbmNoYTogMDtcbiRoX2Z1bGw6IDEwMCU7XG4kaHZfZnVsbDogMTAwdmg7XG4kbWFyZ2luX3ZpbjogNXB4O1xuJGhlaWdodF92aW46IDE4JTtcbiRtYXJnaW5fdmluOiA1cHg7XG5cbiRoZWlnaHRfc2xpZGU6IDIlO1xuJGhlaWdodF9vaXQ6IGNhbGMoOTglIC0gI3skaGVpZ2h0X3Zpbn0pO1xuXG4kaW5kX29wY190YW06IDEwMCUvNDtcblxuJG1hcmdpbl9vcGNfdGFtOiAydmg7XG4kd2lkdGhfYm94X29wYzogMTAlO1xuXG4vL291dHJhcyBncmFkZXNcbiR0aXRfcGljdG9fcHJhbmNoYTogMi4ydmg7XG4kaF90aXRfcGljdG9fcHJhbmNoYTogNC41dmg7XG5cbi8vM3g1XG4kdGl0X3BpY3RvX3ByYW5jaGFfcDogMS42NXZoOyAvL2lzc28gw6kgcHEgcGFyYSBvcyBkaWZlcmVudGVzIHRpcG9zIGRlIGdyYWRlIGEgZm9udGUgZGEgbGVnZW5kYSBzZXLDoSBkaWZlcmVudGVcbiRoX3RpdF9waWN0b19wcmFuY2hhX3A6IDMuNXZoO1xuXG4vLzV4NVxuJHRpdF9waWN0b19wcmFuY2hhX206IDEuNXZoOyAvL2lzc28gw6kgcHEgcGFyYSBvcyBkaWZlcmVudGVzIHRpcG9zIGRlIGdyYWRlIGEgZm9udGUgZGEgbGVnZW5kYSBzZXLDoSBkaWZlcmVudGVcbiRoX3RpdF9waWN0b19wcmFuY2hhX206IDIuOXZoO1xuXG4vLzR4N1xuJHRpdF9waWN0b19wcmFuY2hhX20yOiAxLjN2aDsgLy9pc3NvIMOpIHBxIHBhcmEgb3MgZGlmZXJlbnRlcyB0aXBvcyBkZSBncmFkZSBhIGZvbnRlIGRhIGxlZ2VuZGEgc2Vyw6EgZGlmZXJlbnRlXG4kaF90aXRfcGljdG9fcHJhbmNoYV9tMjogMi45dmg7XG5cbi8vNXg5XG4kdGl0X3BpY3RvX3ByYW5jaGFfczogMS4yNXZoOyAvL2lzc28gw6kgcHEgcGFyYSBvcyBkaWZlcmVudGVzIHRpcG9zIGRlIGdyYWRlIGEgZm9udGUgZGEgbGVnZW5kYSBzZXLDoSBkaWZlcmVudGVcbiRoX3RpdF9waWN0b19wcmFuY2hhX3M6IDMuN3ZoO1xuXG4vLzZ4MTFcbiR0aXRfcGljdG9fcHJhbmNoYV9nczogMS4ydmg7IC8vaXNzbyDDqSBwcSBwYXJhIG9zIGRpZmVyZW50ZXMgdGlwb3MgZGUgZ3JhZGUgYSBmb250ZSBkYSBsZWdlbmRhIHNlcsOhIGRpZmVyZW50ZVxuJGhfdGl0X3BpY3RvX3ByYW5jaGFfZ3M6IDN2aDtcblxuJHRpdF9waWN0b19mcmFzZTogMS4ydmg7XG5cbiRjb3JfZnVuZG86ICNkZGU2ZTg7XG4kY29yX2JvdG9lczogIzg0YmFjNztcbiRjb3JfZm9udGVfYm90b2VzOiAjZmZmO1xuXG4kY29sdW1uc01BWDogMTI7XG4kbGluZXNNQVg6IDY7XG5cbiV3b3JkIHtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzc3NztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItbGVmdDogMHB4O1xufVxuXG4kdjogMTtcblxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbGluZXNNQVgge1xuICAkdjogJGk7XG5cbiAgLndvcmRWLSN7JGl9IHtcbiAgICBAZXh0ZW5kICV3b3JkO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC8gI3skaX0gLSA0cHgpO1xuICB9XG59XG5cbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnNNQVgge1xuICAkaDogJGk7XG4gICR0OiBjYWxjKCN7JHZ9KiN7JGh9KTtcblxuICAud29yZEgtI3skaX0ge1xuICAgIC8vIHBhZGRpbmc6IDVweDtcbiAgICBAZXh0ZW5kICV3b3JkO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAjeyRpfSAtIDRweCk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nOiAycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAycHg7XG5cbiAgICAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjMDAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGhlaWdodDogI3skaF9mdWxsfTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgLm5lZ3tcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgICAgICAgZm9udC1zaXplOiAjeyR0aXRfcGljdG9fcHJhbmNoYX07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYX07XG4gICAgICAgIGhlaWdodDogI3skaF90aXRfcGljdG9fcHJhbmNoYX07XG4gICAgICB9XG5cbiAgICAgIC50aXRfcGljdG9fbWVkaW8ge1xuICAgICAgICBmb250LXNpemU6ICN7JHRpdF9waWN0b19wcmFuY2hhX219O1xuICAgICAgICBsaW5lLWhlaWdodDogI3skdGl0X3BpY3RvX3ByYW5jaGFfbX07XG4gICAgICAgIGhlaWdodDogI3skaF90aXRfcGljdG9fcHJhbmNoYV9tfTtcbiAgICAgIH1cblxuICAgICAgLnRpdF9waWN0b19tZWRpb18yIHtcbiAgICAgICAgZm9udC1zaXplOiAjeyR0aXRfcGljdG9fcHJhbmNoYV9tMn07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYV9tMn07XG4gICAgICAgIGhlaWdodDogI3skaF90aXRfcGljdG9fcHJhbmNoYV9tMn07XG4gICAgICB9XG5cbiAgICAgIC50aXRfcGljdG9fcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogI3skdGl0X3BpY3RvX3ByYW5jaGFfcH07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYV9wfTtcbiAgICAgICAgaGVpZ2h0OiAjeyRoX3RpdF9waWN0b19wcmFuY2hhX3B9O1xuICAgICAgfVxuXG4gICAgICAudGl0X3BpY3RvX2dyYW5kZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogI3skdGl0X3BpY3RvX3ByYW5jaGFfc307XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYV9zfTtcbiAgICAgICAgaGVpZ2h0OiAjeyRoX3RpdF9waWN0b19wcmFuY2hhX3N9O1xuICAgICAgfVxuXG4gICAgICAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgICAgICAgZm9udC1zaXplOiAjeyR0aXRfcGljdG9fcHJhbmNoYV9nc307XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYV9nc307XG4gICAgICAgIGhlaWdodDogI3skaF90aXRfcGljdG9fcHJhbmNoYV9nc307XG4gICAgICB9XG5cbiAgICAgIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoX3RpdF9waWN0b19wcmFuY2hhfSk7XG4gICAgICB9XG5cbiAgICAgIC5pbWdfcGljdG9fcCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skaF90aXRfcGljdG9fcHJhbmNoYV9wfSk7XG4gICAgICB9XG5cbiAgICAgIC5pbWdfcGljdG9fbWVkaW8ge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhfdGl0X3BpY3RvX3ByYW5jaGFfbX0pO1xuICAgICAgfVxuXG4gICAgICAuaW1nX3BpY3RvX21lZGlvXzIge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhfdGl0X3BpY3RvX3ByYW5jaGFfbTJ9KTtcbiAgICAgIH1cblxuICAgICAgLmltZ19waWN0b19wIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoX3RpdF9waWN0b19wcmFuY2hhX3B9KTtcbiAgICAgIH1cblxuICAgICAgLmltZ19waWN0b19ncmFuZGUge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhfdGl0X3BpY3RvX3ByYW5jaGFfc30pO1xuICAgICAgfVxuXG4gICAgICAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoX3RpdF9waWN0b19wcmFuY2hhX2dzfSk7XG4gICAgICB9XG5cbiAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWS5uZWcge1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNmZmY7XG4gICAgfVxuXG4gICAgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4gICAgLmNlbnRyb19wcmFuY2hhXyB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAubmVne1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvLyBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBoZWlnaHQ6ICN7JGhfZnVsbH07XG5cbiAgICAgIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgICAgICAgZm9udC1zaXplOiAjeyR0aXRfcGljdG9fcHJhbmNoYX07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYX07XG4gICAgICAgIGhlaWdodDogI3skaF90aXRfcGljdG9fcHJhbmNoYX07XG4gICAgICB9XG5cbiAgICAgIC50aXRfcGljdG9fbWVkaW8ge1xuICAgICAgICBmb250LXNpemU6ICN7JHRpdF9waWN0b19wcmFuY2hhX219O1xuICAgICAgICBsaW5lLWhlaWdodDogI3skdGl0X3BpY3RvX3ByYW5jaGFfbX07XG4gICAgICAgIGhlaWdodDogI3skaF90aXRfcGljdG9fcHJhbmNoYV9tfTtcbiAgICAgIH1cblxuICAgICAgLnRpdF9waWN0b19tZWRpb18yIHtcbiAgICAgICAgZm9udC1zaXplOiAjeyR0aXRfcGljdG9fcHJhbmNoYV9tMn07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYV9tMn07XG4gICAgICAgIGhlaWdodDogI3skaF90aXRfcGljdG9fcHJhbmNoYV9tMn07XG4gICAgICB9XG5cbiAgICAgIC50aXRfcGljdG9fcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogI3skdGl0X3BpY3RvX3ByYW5jaGFfcH07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYV9wfTtcbiAgICAgICAgaGVpZ2h0OiAjeyRoX3RpdF9waWN0b19wcmFuY2hhX3B9O1xuICAgICAgfVxuXG4gICAgICAudGl0X3BpY3RvX2dyYW5kZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogI3skdGl0X3BpY3RvX3ByYW5jaGFfc307XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYV9zfTtcbiAgICAgICAgaGVpZ2h0OiAjeyRoX3RpdF9waWN0b19wcmFuY2hhX3N9O1xuICAgICAgfVxuXG4gICAgICAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgICAgICAgZm9udC1zaXplOiAjeyR0aXRfcGljdG9fcHJhbmNoYV9nc307XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAjeyR0aXRfcGljdG9fcHJhbmNoYV9nc307XG4gICAgICAgIGhlaWdodDogI3skaF90aXRfcGljdG9fcHJhbmNoYV9nc307XG4gICAgICB9XG5cbiAgICAgIC5pbWdfcGljdG9fcCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skaF90aXRfcGljdG9fcHJhbmNoYV9wfSk7XG4gICAgICB9XG5cbiAgICAgIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoX3RpdF9waWN0b19wcmFuY2hhfSk7XG4gICAgICB9XG5cbiAgICAgIC5pbWdfcGljdG9fbWVkaW8ge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhfdGl0X3BpY3RvX3ByYW5jaGFfbX0pO1xuICAgICAgfVxuXG4gICAgICAuaW1nX3BpY3RvX21lZGlvXzIge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhfdGl0X3BpY3RvX3ByYW5jaGFfbTJ9KTtcbiAgICAgIH1cblxuICAgICAgLmltZ19waWN0b19ncmFuZGUge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhfdGl0X3BpY3RvX3ByYW5jaGFfc30pO1xuICAgICAgfVxuXG4gICAgICAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoX3RpdF9waWN0b19wcmFuY2hhX2dzfSk7XG4gICAgICB9XG5cbiAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG5cbiAgICAgIGltZyB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC53b3JkSC0jeyRpfTpudGgtY2hpbGQoI3skaX1uKSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gIH1cblxuICAud29yZEgtI3skaX06bnRoLWNoaWxkKC1uICsgI3skaX0pIHtcbiAgICBib3JkZXItdG9wOiAwcHg7XG4gIH1cblxuICAud29yZEgtI3skaX06bnRoLWNoaWxkKCN7JGl9biArIDEpOm50aC1sYXN0LWNoaWxkKC1uICsgI3skaX0pIHtcbiAgICAvL2VsZW1lbnRvIGRvIGNhbnRvIGluZmVyaW9yIGVzcXVlcmRvXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbiAgICAuY2VudHJvX3ByYW5jaGFfLFxuICAgIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICB9XG4gIC53b3JkSC0jeyRpfTpudGgtY2hpbGQoI3skaX1uKTpudGgtY2hpbGQoLW4gKyAjeyRpfSkge1xuICAgIC8vZWxlbWVudG8gZG8gY2FudG8gc3VwZXJpb3IgZGlyZWlyb1xuICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuICAgIC5jZW50cm9fcHJhbmNoYV8sXG4gICAgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICB9XG4gIC53b3JkSC0jeyRpfTpmaXJzdC1jaGlsZCB7XG4gICAgLy9pc3NvIMOpIHBhcmEgZmF6ZXIgdW1hIGJvcmRhIHJlZG9uZGEgbm8gcHJpbWVpcm8gZWxlbWVudG9cbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuICAgIC5jZW50cm9fcHJhbmNoYV8sXG4gICAgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcblxuICAgIH1cbiAgfVxuICAud29yZEgtI3skaX06bGFzdC1jaGlsZCB7XG4gICAgLy9pc3NvIMOpIHBhcmEgZmF6ZXIgdW1hIGJvcmRhIHJlZG9uZGEgbm8gdWx0aW1vIGVsZW1lbnRvXG4gICAgLy8gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4gICAgLmNlbnRyb19wcmFuY2hhXyxcbiAgICAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcblxuICAgIH1cbiAgfVxufVxuXG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjeyRjb3JfZnVuZG99O1xufVxuXG4udHlwZV8ye1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMDtcbn1cblxuLmRpc2FibGVke1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2xvc2VfbWVudSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4IC0gY2FsYyg0ICogNTBweCkpO1xufVxuXG4uaXRlbS0tbWVudSB7XG4gIG1hcmdpbjogMnB4IDBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLml0ZW0tLXN1Ym1lbnUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tZW51X2ZvbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMnZ3O1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5ib3hfcHJhbmNoYS5uZWcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZnVsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsX3Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICN7JGNvcl9mdW5kb30gIWltcG9ydGFudDsgLy9DT1IgRE8gRk5ET1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGxfaCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ib3hfcHJhbmNoYSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAjeyR3aWR0aF9ib3hfb3BjfSk7XG4gIG1hcmdpbjogMHB4IDBweDtcbiAgaGVpZ2h0OiA5Ny41JTtcbiAgZmxvYXQ6IGxlZnQ7XG5cbiAgLmxhdGVyYWwge1xuICAgIHdpZHRoOiAjeyRib3hfbGF0ZXJhbH07XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICAgIGhlaWdodDogI3skaF9mdWxsfTtcbiAgICAvLyBwYWRkaW5nLXRvcDogMjB2aDtcbiAgICBmbG9hdDogbGVmdDtcblxuICAgIC5pY19tZW51IHtcbiAgICAgIGhlaWdodDogI3skaGVpZ2h0X3Zpbn07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cblxuICAgIC5pY19tZW51Lm5lZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAuaWNfc2V0YSB7XG4gICAgICBoZWlnaHQ6ICN7JGhlaWdodF9vaXR9O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLmJveF9vcGMge1xuICB3aWR0aDogI3skd2lkdGhfYm94X29wY307XG4gIG1hcmdpbjogMHB4IDBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgLy8gcGFkZGluZy1ib3R0b206ICBjYWxjKCN7JGhlaWdodF9zbGlkZX0gKTtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBoZWlnaHQ6IDk3LjUlO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcblxuICAub3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgLm9wY190YW0ge1xuICAgIGhlaWdodDogY2FsYygjeyRpbmRfb3BjX3RhbX0gLSBjYWxjKCN7JG1hcmdpbl9vcGNfdGFtfS8gNSkgKiA0KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogI3skbWFyZ2luX29wY190YW19O1xuICAgIGJhY2tncm91bmQ6ICN7JGNvcl9ib3RvZXN9O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IDBweCAjNjY2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gb3BhY2l0eTogMC44O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5zdWJfb3BjX3RhbSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgY29sb3I6ICN7JGNvcl9mb250ZV9ib3RvZXN9O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDh2aDtcbiAgICB9XG4gIH1cblxuICAub3BjX3RhbTpudGgtY2hpbGQoNW4pIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAub3BjX3RhbS5uZWcge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAub3BjX3RhbS5uZWcgaDYge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAub3BjX3RhbS5uZWcgaW9uLWljb24ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAub3BjX3RhbSBoNiB7XG4gICAgY29sb3I6ICN7JGNvcl9mb250ZV9ib3RvZXN9O1xuICAgIGZvbnQtc2l6ZTogMS4ydnc7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDBweCA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYm94X29wYy5uZWcge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY2VudHJvIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiN7JGJveF9sYXRlcmFsfSk7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6ICN7JGhfZnVsbH07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLm1hcmdpbiB7XG4gICAgaGVpZ2h0OiAxJTtcbiAgfVxuXG4gIC52aW4ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAjeyRoZWlnaHRfdmlufTtcblxuICAgIC5idG5fb2N1bHRhciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjeyRjb3JfYm90b2VzfTtcbiAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgcGFkZGluZzogMC40cmVtO1xuICAgICAgbWFyZ2luOiAwLjJyZW07XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAudmluX2JvcmRlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNzc3O1xuICAgIH1cbiAgICBcbiAgICAubmVne1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNlbnRyb19mcmFzZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5sYXRlcmFsX2ZyYXNlX2wge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogNnB4O1xuICAgIH1cblxuICAgIC5sYXRlcmFsX2ZyYXNlX3Ige1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogNnB4O1xuICAgIH1cblxuICAgIC5pbmRfZnJhc2Uge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xuICAgICAgd2lkdGg6IGNhbGMoMTAlIC0gMnB4KTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luOiAycHggMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjNzc3O1xuICAgICAgcGFkZGluZzogMXB4O1xuXG4gICAgICAudGl0X3BpY3RvX2ZyYXNlIHtcbiAgICAgICAgZm9udC1zaXplOiAjeyR0aXRfcGljdG9fZnJhc2V9O1xuICAgICAgICBoZWlnaHQ6IDQuM3ZoO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuaW1nX3BpY3RvX2ZyYXNlIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0LjN2aCk7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0b19vY3VsdGFyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAudGV4dG9fb2N1bHRhciBoMSB7XG4gICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cblxuICAgIC52aW5fYm9yZGVyLm5lZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIH1cblxuICAgIC5pbmRfZnJhc2UubmVnIHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuaW5kX2ZyYXNlOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIC5pbmRfZnJhc2U6bnRoLWNoaWxkKDEwbikge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuXG4gICAgICAubGF0ZXJhbF9mcmFzZV9yIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3Nzc7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzc3O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5vaXQge1xuICAgIGhlaWdodDogI3skaGVpZ2h0X29pdH07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgIzc3NztcbiAgfVxuXG4gIC5vY3VsdGFkbyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdG9wOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLm9pdC5uZWcge1xuICAgIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4uc2xpZGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gI3skd2lkdGhfYm94X29wY30pO1xuXG4gIC5jdXN0b20tcGFnaW5hdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNDQ0O1xuICB9XG5cbiAgLmN1c3RvbS1wYWdpbmF0aW9uIC5wYWdlLW51bWJlci5uZWcge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gIH1cbn1cbiIsIi53b3JkSC0xMiwgLndvcmRILTExLCAud29yZEgtMTAsIC53b3JkSC05LCAud29yZEgtOCwgLndvcmRILTcsIC53b3JkSC02LCAud29yZEgtNSwgLndvcmRILTQsIC53b3JkSC0zLCAud29yZEgtMiwgLndvcmRILTEsIC53b3JkVi02LCAud29yZFYtNSwgLndvcmRWLTQsIC53b3JkVi0zLCAud29yZFYtMiwgLndvcmRWLTEge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAwcHg7XG4gIGJvcmRlci1sZWZ0OiAwcHg7XG59XG5cbi53b3JkVi0xIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAxIC0gNHB4KTtcbn1cblxuLndvcmRWLTIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDIgLSA0cHgpO1xufVxuXG4ud29yZFYtMyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gMyAtIDRweCk7XG59XG5cbi53b3JkVi00IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLyA0IC0gNHB4KTtcbn1cblxuLndvcmRWLTUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDUgLSA0cHgpO1xufVxuXG4ud29yZFYtNiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gNiAtIDRweCk7XG59XG5cbi53b3JkSC0xIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDEgLSA0cHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDJweDtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLm5lZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19ub3JtYWwge1xuICBmb250LXNpemU6IDIuMnZoO1xuICBsaW5lLWhlaWdodDogMi4ydmg7XG4gIGhlaWdodDogNC41dmg7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19tZWRpbyB7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjV2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX21lZGlvXzIge1xuICBmb250LXNpemU6IDEuM3ZoO1xuICBsaW5lLWhlaWdodDogMS4zdmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19wIHtcbiAgZm9udC1zaXplOiAxLjY1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1dmg7XG4gIGhlaWdodDogMy41dmg7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMjV2aDtcbiAgaGVpZ2h0OiAzLjd2aDtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICBoZWlnaHQ6IDN2aDtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX25vcm1hbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNC41dmgpO1xufVxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbWVkaW8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX21lZGlvXzIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy43dmgpO1xufVxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fZ19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDN2aCk7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWS5uZWcge1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2ZmZjtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhXyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLm5lZyxcbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV8gLm5lZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX25vcm1hbCxcbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19ub3JtYWwge1xuICBmb250LXNpemU6IDIuMnZoO1xuICBsaW5lLWhlaWdodDogMi4ydmg7XG4gIGhlaWdodDogNC41dmg7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX21lZGlvLFxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX21lZGlvIHtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNXZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19tZWRpb18yLFxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX21lZGlvXzIge1xuICBmb250LXNpemU6IDEuM3ZoO1xuICBsaW5lLWhlaWdodDogMS4zdmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX3AsXG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fcCB7XG4gIGZvbnQtc2l6ZTogMS42NXZoO1xuICBsaW5lLWhlaWdodDogMS42NXZoO1xuICBoZWlnaHQ6IDMuNXZoO1xufVxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19ncmFuZGUsXG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjI1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1dmg7XG4gIGhlaWdodDogMy43dmg7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX2dfZ3JhbmRlLFxuLndvcmRILTEgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICBoZWlnaHQ6IDN2aDtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fcCxcbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX25vcm1hbCxcbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19ub3JtYWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQuNXZoKTtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbWVkaW8sXG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbWVkaW8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbWVkaW9fMixcbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19tZWRpb18yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX2dyYW5kZSxcbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuN3ZoKTtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fZ19ncmFuZGUsXG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fZ19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDN2aCk7XG59XG4ud29yZEgtMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nLWNvbnRhaW5lcixcbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV8gLmltZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIGltZyxcbi53b3JkSC0xIC5jZW50cm9fcHJhbmNoYV8gaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi53b3JkSC0xOm50aC1jaGlsZCgxbikge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cblxuLndvcmRILTE6bnRoLWNoaWxkKC1uKzEpIHtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG4ud29yZEgtMTpudGgtY2hpbGQoMW4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rMSkge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLndvcmRILTE6bnRoLWNoaWxkKDFuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzEpIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTE6bnRoLWNoaWxkKDFuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzEpIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtMTpudGgtY2hpbGQoMW4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rMSkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTE6bnRoLWNoaWxkKDFuKTpudGgtY2hpbGQoLW4rMSkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMTpudGgtY2hpbGQoMW4pOm50aC1jaGlsZCgtbisxKSAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTE6bnRoLWNoaWxkKDFuKTpudGgtY2hpbGQoLW4rMSkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC0xOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi53b3JkSC0xOmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTE6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC0xOmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC0xOmxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMTpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtMTpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtMiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gNHB4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAycHg7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5uZWcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDIuMnZoO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbWVkaW8ge1xuICBmb250LXNpemU6IDEuNXZoO1xuICBsaW5lLWhlaWdodDogMS41dmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19tZWRpb18yIHtcbiAgZm9udC1zaXplOiAxLjN2aDtcbiAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fcCB7XG4gIGZvbnQtc2l6ZTogMS42NXZoO1xuICBsaW5lLWhlaWdodDogMS42NXZoO1xuICBoZWlnaHQ6IDMuNXZoO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjI1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1dmg7XG4gIGhlaWdodDogMy43dmg7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19nX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgaGVpZ2h0OiAzdmg7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19ub3JtYWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQuNXZoKTtcbn1cbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX21lZGlvIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19tZWRpb18yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuN3ZoKTtcbn1cbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzdmgpO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkubmVnIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNmZmY7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV8ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5uZWcsXG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfIC5uZWcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19ub3JtYWwsXG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDIuMnZoO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19tZWRpbyxcbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19tZWRpbyB7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjV2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbWVkaW9fMixcbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19tZWRpb18yIHtcbiAgZm9udC1zaXplOiAxLjN2aDtcbiAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19wLFxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX3Age1xuICBmb250LXNpemU6IDEuNjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNjV2aDtcbiAgaGVpZ2h0OiAzLjV2aDtcbn1cbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fZ3JhbmRlLFxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXZoO1xuICBsaW5lLWhlaWdodDogMS4yNXZoO1xuICBoZWlnaHQ6IDMuN3ZoO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19nX2dyYW5kZSxcbi53b3JkSC0yIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19nX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgaGVpZ2h0OiAzdmg7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX3AsXG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19ub3JtYWwsXG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0LjV2aCk7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX21lZGlvLFxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX21lZGlvIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX21lZGlvXzIsXG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbWVkaW9fMiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19ncmFuZGUsXG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjd2aCk7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX2dfZ3JhbmRlLFxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzdmgpO1xufVxuLndvcmRILTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZy1jb250YWluZXIsXG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfIC5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCBpbWcsXG4ud29yZEgtMiAuY2VudHJvX3ByYW5jaGFfIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ud29yZEgtMjpudGgtY2hpbGQoMm4pIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5cbi53b3JkSC0yOm50aC1jaGlsZCgtbisyKSB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cblxuLndvcmRILTI6bnRoLWNoaWxkKDJuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzIpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi53b3JkSC0yOm50aC1jaGlsZCgybisxKTpudGgtbGFzdC1jaGlsZCgtbisyKSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0yOm50aC1jaGlsZCgybisxKTpudGgtbGFzdC1jaGlsZCgtbisyKSAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTI6bnRoLWNoaWxkKDJuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzIpIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC0yOm50aC1jaGlsZCgybik6bnRoLWNoaWxkKC1uKzIpIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTI6bnRoLWNoaWxkKDJuKTpudGgtY2hpbGQoLW4rMikgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC0yOm50aC1jaGlsZCgybik6bnRoLWNoaWxkKC1uKzIpIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtMjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4ud29yZEgtMjpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0yOmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtMjpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtMjpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTI6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTI6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTMge1xuICB3aWR0aDogY2FsYygxMDAlIC8gMyAtIDRweCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMnB4O1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAubmVnIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX25vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMi4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAyLjJ2aDtcbiAgaGVpZ2h0OiA0LjV2aDtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX21lZGlvIHtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNXZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbWVkaW9fMiB7XG4gIGZvbnQtc2l6ZTogMS4zdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjN2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX3Age1xuICBmb250LXNpemU6IDEuNjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNjV2aDtcbiAgaGVpZ2h0OiAzLjV2aDtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXZoO1xuICBsaW5lLWhlaWdodDogMS4yNXZoO1xuICBoZWlnaHQ6IDMuN3ZoO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fZ19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMnZoO1xuICBsaW5lLWhlaWdodDogMS4ydmg7XG4gIGhlaWdodDogM3ZoO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0LjV2aCk7XG59XG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19tZWRpbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbWVkaW9fMiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjd2aCk7XG59XG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19nX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM3ZoKTtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZLm5lZyB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZmZmO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAubmVnLFxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhXyAubmVnIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbm9ybWFsLFxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX25vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMi4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAyLjJ2aDtcbiAgaGVpZ2h0OiA0LjV2aDtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbWVkaW8sXG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbWVkaW8ge1xuICBmb250LXNpemU6IDEuNXZoO1xuICBsaW5lLWhlaWdodDogMS41dmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX21lZGlvXzIsXG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbWVkaW9fMiB7XG4gIGZvbnQtc2l6ZTogMS4zdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjN2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fcCxcbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19wIHtcbiAgZm9udC1zaXplOiAxLjY1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1dmg7XG4gIGhlaWdodDogMy41dmg7XG59XG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX2dyYW5kZSxcbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMjV2aDtcbiAgaGVpZ2h0OiAzLjd2aDtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fZ19ncmFuZGUsXG4ud29yZEgtMyAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fZ19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMnZoO1xuICBsaW5lLWhlaWdodDogMS4ydmg7XG4gIGhlaWdodDogM3ZoO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19wLFxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbm9ybWFsLFxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX25vcm1hbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNC41dmgpO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19tZWRpbyxcbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19tZWRpbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19tZWRpb18yLFxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX21lZGlvXzIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fZ3JhbmRlLFxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy43dmgpO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19nX2dyYW5kZSxcbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19nX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM3ZoKTtcbn1cbi53b3JkSC0zIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWctY29udGFpbmVyLFxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhXyAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgaW1nLFxuLndvcmRILTMgLmNlbnRyb19wcmFuY2hhXyBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLndvcmRILTM6bnRoLWNoaWxkKDNuKSB7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuXG4ud29yZEgtMzpudGgtY2hpbGQoLW4rMykge1xuICBib3JkZXItdG9wOiAwcHg7XG59XG5cbi53b3JkSC0zOm50aC1jaGlsZCgzbisxKTpudGgtbGFzdC1jaGlsZCgtbiszKSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4ud29yZEgtMzpudGgtY2hpbGQoM24rMSk6bnRoLWxhc3QtY2hpbGQoLW4rMykgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMzpudGgtY2hpbGQoM24rMSk6bnRoLWxhc3QtY2hpbGQoLW4rMykgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC0zOm50aC1jaGlsZCgzbisxKTpudGgtbGFzdC1jaGlsZCgtbiszKSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtMzpudGgtY2hpbGQoM24pOm50aC1jaGlsZCgtbiszKSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0zOm50aC1jaGlsZCgzbik6bnRoLWNoaWxkKC1uKzMpIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtMzpudGgtY2hpbGQoM24pOm50aC1jaGlsZCgtbiszKSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTM6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLndvcmRILTM6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMzpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTM6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTM6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0zOmxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC0zOmxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC00IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDQgLSA0cHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDJweDtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLm5lZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19ub3JtYWwge1xuICBmb250LXNpemU6IDIuMnZoO1xuICBsaW5lLWhlaWdodDogMi4ydmg7XG4gIGhlaWdodDogNC41dmg7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19tZWRpbyB7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjV2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX21lZGlvXzIge1xuICBmb250LXNpemU6IDEuM3ZoO1xuICBsaW5lLWhlaWdodDogMS4zdmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19wIHtcbiAgZm9udC1zaXplOiAxLjY1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1dmg7XG4gIGhlaWdodDogMy41dmg7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMjV2aDtcbiAgaGVpZ2h0OiAzLjd2aDtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICBoZWlnaHQ6IDN2aDtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX25vcm1hbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNC41dmgpO1xufVxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbWVkaW8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX21lZGlvXzIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy43dmgpO1xufVxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fZ19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDN2aCk7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWS5uZWcge1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2ZmZjtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhXyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLm5lZyxcbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV8gLm5lZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX25vcm1hbCxcbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19ub3JtYWwge1xuICBmb250LXNpemU6IDIuMnZoO1xuICBsaW5lLWhlaWdodDogMi4ydmg7XG4gIGhlaWdodDogNC41dmg7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX21lZGlvLFxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX21lZGlvIHtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNXZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19tZWRpb18yLFxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX21lZGlvXzIge1xuICBmb250LXNpemU6IDEuM3ZoO1xuICBsaW5lLWhlaWdodDogMS4zdmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX3AsXG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fcCB7XG4gIGZvbnQtc2l6ZTogMS42NXZoO1xuICBsaW5lLWhlaWdodDogMS42NXZoO1xuICBoZWlnaHQ6IDMuNXZoO1xufVxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19ncmFuZGUsXG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjI1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1dmg7XG4gIGhlaWdodDogMy43dmg7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX2dfZ3JhbmRlLFxuLndvcmRILTQgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICBoZWlnaHQ6IDN2aDtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fcCxcbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX25vcm1hbCxcbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19ub3JtYWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQuNXZoKTtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbWVkaW8sXG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbWVkaW8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbWVkaW9fMixcbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19tZWRpb18yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX2dyYW5kZSxcbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuN3ZoKTtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fZ19ncmFuZGUsXG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fZ19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDN2aCk7XG59XG4ud29yZEgtNCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nLWNvbnRhaW5lcixcbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV8gLmltZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIGltZyxcbi53b3JkSC00IC5jZW50cm9fcHJhbmNoYV8gaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi53b3JkSC00Om50aC1jaGlsZCg0bikge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cblxuLndvcmRILTQ6bnRoLWNoaWxkKC1uKzQpIHtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG4ud29yZEgtNDpudGgtY2hpbGQoNG4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rNCkge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLndvcmRILTQ6bnRoLWNoaWxkKDRuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzQpIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTQ6bnRoLWNoaWxkKDRuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzQpIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtNDpudGgtY2hpbGQoNG4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rNCkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTQ6bnRoLWNoaWxkKDRuKTpudGgtY2hpbGQoLW4rNCkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtNDpudGgtY2hpbGQoNG4pOm50aC1jaGlsZCgtbis0KSAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTQ6bnRoLWNoaWxkKDRuKTpudGgtY2hpbGQoLW4rNCkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC00OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi53b3JkSC00OmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTQ6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC00OmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC00Omxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtNDpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtNDpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtNSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA1IC0gNHB4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAycHg7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5uZWcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDIuMnZoO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbWVkaW8ge1xuICBmb250LXNpemU6IDEuNXZoO1xuICBsaW5lLWhlaWdodDogMS41dmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19tZWRpb18yIHtcbiAgZm9udC1zaXplOiAxLjN2aDtcbiAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fcCB7XG4gIGZvbnQtc2l6ZTogMS42NXZoO1xuICBsaW5lLWhlaWdodDogMS42NXZoO1xuICBoZWlnaHQ6IDMuNXZoO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjI1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1dmg7XG4gIGhlaWdodDogMy43dmg7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19nX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgaGVpZ2h0OiAzdmg7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19ub3JtYWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQuNXZoKTtcbn1cbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX21lZGlvIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19tZWRpb18yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuN3ZoKTtcbn1cbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzdmgpO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkubmVnIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNmZmY7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV8ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5uZWcsXG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfIC5uZWcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19ub3JtYWwsXG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDIuMnZoO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19tZWRpbyxcbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19tZWRpbyB7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjV2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbWVkaW9fMixcbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19tZWRpb18yIHtcbiAgZm9udC1zaXplOiAxLjN2aDtcbiAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19wLFxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX3Age1xuICBmb250LXNpemU6IDEuNjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNjV2aDtcbiAgaGVpZ2h0OiAzLjV2aDtcbn1cbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fZ3JhbmRlLFxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXZoO1xuICBsaW5lLWhlaWdodDogMS4yNXZoO1xuICBoZWlnaHQ6IDMuN3ZoO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19nX2dyYW5kZSxcbi53b3JkSC01IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19nX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgaGVpZ2h0OiAzdmg7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX3AsXG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19ub3JtYWwsXG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0LjV2aCk7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX21lZGlvLFxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX21lZGlvIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX21lZGlvXzIsXG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbWVkaW9fMiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19ncmFuZGUsXG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjd2aCk7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX2dfZ3JhbmRlLFxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzdmgpO1xufVxuLndvcmRILTUgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZy1jb250YWluZXIsXG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfIC5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCBpbWcsXG4ud29yZEgtNSAuY2VudHJvX3ByYW5jaGFfIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ud29yZEgtNTpudGgtY2hpbGQoNW4pIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5cbi53b3JkSC01Om50aC1jaGlsZCgtbis1KSB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cblxuLndvcmRILTU6bnRoLWNoaWxkKDVuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzUpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi53b3JkSC01Om50aC1jaGlsZCg1bisxKTpudGgtbGFzdC1jaGlsZCgtbis1KSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC01Om50aC1jaGlsZCg1bisxKTpudGgtbGFzdC1jaGlsZCgtbis1KSAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTU6bnRoLWNoaWxkKDVuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzUpIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC01Om50aC1jaGlsZCg1bik6bnRoLWNoaWxkKC1uKzUpIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTU6bnRoLWNoaWxkKDVuKTpudGgtY2hpbGQoLW4rNSkgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC01Om50aC1jaGlsZCg1bik6bnRoLWNoaWxkKC1uKzUpIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtNTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4ud29yZEgtNTpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC01OmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtNTpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtNTpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTU6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTU6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTYge1xuICB3aWR0aDogY2FsYygxMDAlIC8gNiAtIDRweCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMnB4O1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAubmVnIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX25vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMi4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAyLjJ2aDtcbiAgaGVpZ2h0OiA0LjV2aDtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX21lZGlvIHtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNXZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbWVkaW9fMiB7XG4gIGZvbnQtc2l6ZTogMS4zdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjN2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX3Age1xuICBmb250LXNpemU6IDEuNjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNjV2aDtcbiAgaGVpZ2h0OiAzLjV2aDtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXZoO1xuICBsaW5lLWhlaWdodDogMS4yNXZoO1xuICBoZWlnaHQ6IDMuN3ZoO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fZ19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMnZoO1xuICBsaW5lLWhlaWdodDogMS4ydmg7XG4gIGhlaWdodDogM3ZoO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0LjV2aCk7XG59XG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19tZWRpbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbWVkaW9fMiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjd2aCk7XG59XG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19nX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM3ZoKTtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZLm5lZyB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZmZmO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAubmVnLFxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhXyAubmVnIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbm9ybWFsLFxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX25vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMi4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAyLjJ2aDtcbiAgaGVpZ2h0OiA0LjV2aDtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbWVkaW8sXG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbWVkaW8ge1xuICBmb250LXNpemU6IDEuNXZoO1xuICBsaW5lLWhlaWdodDogMS41dmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX21lZGlvXzIsXG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbWVkaW9fMiB7XG4gIGZvbnQtc2l6ZTogMS4zdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjN2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fcCxcbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19wIHtcbiAgZm9udC1zaXplOiAxLjY1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1dmg7XG4gIGhlaWdodDogMy41dmg7XG59XG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX2dyYW5kZSxcbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMjV2aDtcbiAgaGVpZ2h0OiAzLjd2aDtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fZ19ncmFuZGUsXG4ud29yZEgtNiAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fZ19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMnZoO1xuICBsaW5lLWhlaWdodDogMS4ydmg7XG4gIGhlaWdodDogM3ZoO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19wLFxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbm9ybWFsLFxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX25vcm1hbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNC41dmgpO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19tZWRpbyxcbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19tZWRpbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19tZWRpb18yLFxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX21lZGlvXzIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fZ3JhbmRlLFxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy43dmgpO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19nX2dyYW5kZSxcbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19nX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM3ZoKTtcbn1cbi53b3JkSC02IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWctY29udGFpbmVyLFxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhXyAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgaW1nLFxuLndvcmRILTYgLmNlbnRyb19wcmFuY2hhXyBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLndvcmRILTY6bnRoLWNoaWxkKDZuKSB7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuXG4ud29yZEgtNjpudGgtY2hpbGQoLW4rNikge1xuICBib3JkZXItdG9wOiAwcHg7XG59XG5cbi53b3JkSC02Om50aC1jaGlsZCg2bisxKTpudGgtbGFzdC1jaGlsZCgtbis2KSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4ud29yZEgtNjpudGgtY2hpbGQoNm4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rNikgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtNjpudGgtY2hpbGQoNm4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rNikgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC02Om50aC1jaGlsZCg2bisxKTpudGgtbGFzdC1jaGlsZCgtbis2KSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtNjpudGgtY2hpbGQoNm4pOm50aC1jaGlsZCgtbis2KSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC02Om50aC1jaGlsZCg2bik6bnRoLWNoaWxkKC1uKzYpIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtNjpudGgtY2hpbGQoNm4pOm50aC1jaGlsZCgtbis2KSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTY6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLndvcmRILTY6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtNjpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTY6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTY6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC02Omxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC02Omxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC03IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDcgLSA0cHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDJweDtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLm5lZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19ub3JtYWwge1xuICBmb250LXNpemU6IDIuMnZoO1xuICBsaW5lLWhlaWdodDogMi4ydmg7XG4gIGhlaWdodDogNC41dmg7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19tZWRpbyB7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjV2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX21lZGlvXzIge1xuICBmb250LXNpemU6IDEuM3ZoO1xuICBsaW5lLWhlaWdodDogMS4zdmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19wIHtcbiAgZm9udC1zaXplOiAxLjY1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1dmg7XG4gIGhlaWdodDogMy41dmg7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMjV2aDtcbiAgaGVpZ2h0OiAzLjd2aDtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICBoZWlnaHQ6IDN2aDtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX25vcm1hbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNC41dmgpO1xufVxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbWVkaW8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX21lZGlvXzIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy43dmgpO1xufVxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fZ19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDN2aCk7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWS5uZWcge1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2ZmZjtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhXyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLm5lZyxcbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV8gLm5lZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX25vcm1hbCxcbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19ub3JtYWwge1xuICBmb250LXNpemU6IDIuMnZoO1xuICBsaW5lLWhlaWdodDogMi4ydmg7XG4gIGhlaWdodDogNC41dmg7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX21lZGlvLFxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX21lZGlvIHtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNXZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19tZWRpb18yLFxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX21lZGlvXzIge1xuICBmb250LXNpemU6IDEuM3ZoO1xuICBsaW5lLWhlaWdodDogMS4zdmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX3AsXG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fcCB7XG4gIGZvbnQtc2l6ZTogMS42NXZoO1xuICBsaW5lLWhlaWdodDogMS42NXZoO1xuICBoZWlnaHQ6IDMuNXZoO1xufVxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19ncmFuZGUsXG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjI1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1dmg7XG4gIGhlaWdodDogMy43dmg7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX2dfZ3JhbmRlLFxuLndvcmRILTcgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICBoZWlnaHQ6IDN2aDtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fcCxcbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX25vcm1hbCxcbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19ub3JtYWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQuNXZoKTtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbWVkaW8sXG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbWVkaW8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbWVkaW9fMixcbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19tZWRpb18yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX2dyYW5kZSxcbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuN3ZoKTtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fZ19ncmFuZGUsXG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fZ19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDN2aCk7XG59XG4ud29yZEgtNyAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nLWNvbnRhaW5lcixcbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV8gLmltZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIGltZyxcbi53b3JkSC03IC5jZW50cm9fcHJhbmNoYV8gaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi53b3JkSC03Om50aC1jaGlsZCg3bikge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cblxuLndvcmRILTc6bnRoLWNoaWxkKC1uKzcpIHtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG4ud29yZEgtNzpudGgtY2hpbGQoN24rMSk6bnRoLWxhc3QtY2hpbGQoLW4rNykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLndvcmRILTc6bnRoLWNoaWxkKDduKzEpOm50aC1sYXN0LWNoaWxkKC1uKzcpIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTc6bnRoLWNoaWxkKDduKzEpOm50aC1sYXN0LWNoaWxkKC1uKzcpIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtNzpudGgtY2hpbGQoN24rMSk6bnRoLWxhc3QtY2hpbGQoLW4rNykgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTc6bnRoLWNoaWxkKDduKTpudGgtY2hpbGQoLW4rNykgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtNzpudGgtY2hpbGQoN24pOm50aC1jaGlsZCgtbis3KSAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTc6bnRoLWNoaWxkKDduKTpudGgtY2hpbGQoLW4rNykgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC03OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi53b3JkSC03OmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTc6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC03OmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC03Omxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtNzpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtNzpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtOCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA4IC0gNHB4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAycHg7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5uZWcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDIuMnZoO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbWVkaW8ge1xuICBmb250LXNpemU6IDEuNXZoO1xuICBsaW5lLWhlaWdodDogMS41dmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19tZWRpb18yIHtcbiAgZm9udC1zaXplOiAxLjN2aDtcbiAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fcCB7XG4gIGZvbnQtc2l6ZTogMS42NXZoO1xuICBsaW5lLWhlaWdodDogMS42NXZoO1xuICBoZWlnaHQ6IDMuNXZoO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjI1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1dmg7XG4gIGhlaWdodDogMy43dmg7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19nX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgaGVpZ2h0OiAzdmg7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19ub3JtYWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQuNXZoKTtcbn1cbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX21lZGlvIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19tZWRpb18yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuN3ZoKTtcbn1cbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzdmgpO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkubmVnIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNmZmY7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV8ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5uZWcsXG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfIC5uZWcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19ub3JtYWwsXG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDIuMnZoO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19tZWRpbyxcbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19tZWRpbyB7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjV2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbWVkaW9fMixcbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19tZWRpb18yIHtcbiAgZm9udC1zaXplOiAxLjN2aDtcbiAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19wLFxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX3Age1xuICBmb250LXNpemU6IDEuNjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNjV2aDtcbiAgaGVpZ2h0OiAzLjV2aDtcbn1cbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fZ3JhbmRlLFxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXZoO1xuICBsaW5lLWhlaWdodDogMS4yNXZoO1xuICBoZWlnaHQ6IDMuN3ZoO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19nX2dyYW5kZSxcbi53b3JkSC04IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19nX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgaGVpZ2h0OiAzdmg7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX3AsXG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19ub3JtYWwsXG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0LjV2aCk7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX21lZGlvLFxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX21lZGlvIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX21lZGlvXzIsXG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbWVkaW9fMiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19ncmFuZGUsXG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjd2aCk7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX2dfZ3JhbmRlLFxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzdmgpO1xufVxuLndvcmRILTggLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZy1jb250YWluZXIsXG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfIC5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCBpbWcsXG4ud29yZEgtOCAuY2VudHJvX3ByYW5jaGFfIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ud29yZEgtODpudGgtY2hpbGQoOG4pIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5cbi53b3JkSC04Om50aC1jaGlsZCgtbis4KSB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cblxuLndvcmRILTg6bnRoLWNoaWxkKDhuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzgpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi53b3JkSC04Om50aC1jaGlsZCg4bisxKTpudGgtbGFzdC1jaGlsZCgtbis4KSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC04Om50aC1jaGlsZCg4bisxKTpudGgtbGFzdC1jaGlsZCgtbis4KSAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTg6bnRoLWNoaWxkKDhuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzgpIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC04Om50aC1jaGlsZCg4bik6bnRoLWNoaWxkKC1uKzgpIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTg6bnRoLWNoaWxkKDhuKTpudGgtY2hpbGQoLW4rOCkgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC04Om50aC1jaGlsZCg4bik6bnRoLWNoaWxkKC1uKzgpIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtODpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4ud29yZEgtODpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC04OmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtODpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtODpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTg6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTg6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTkge1xuICB3aWR0aDogY2FsYygxMDAlIC8gOSAtIDRweCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMnB4O1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAubmVnIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX25vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMi4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAyLjJ2aDtcbiAgaGVpZ2h0OiA0LjV2aDtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX21lZGlvIHtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNXZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbWVkaW9fMiB7XG4gIGZvbnQtc2l6ZTogMS4zdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjN2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX3Age1xuICBmb250LXNpemU6IDEuNjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNjV2aDtcbiAgaGVpZ2h0OiAzLjV2aDtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXZoO1xuICBsaW5lLWhlaWdodDogMS4yNXZoO1xuICBoZWlnaHQ6IDMuN3ZoO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fZ19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMnZoO1xuICBsaW5lLWhlaWdodDogMS4ydmg7XG4gIGhlaWdodDogM3ZoO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0LjV2aCk7XG59XG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19tZWRpbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbWVkaW9fMiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjd2aCk7XG59XG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19nX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM3ZoKTtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZLm5lZyB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZmZmO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAubmVnLFxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhXyAubmVnIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbm9ybWFsLFxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX25vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMi4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAyLjJ2aDtcbiAgaGVpZ2h0OiA0LjV2aDtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbWVkaW8sXG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbWVkaW8ge1xuICBmb250LXNpemU6IDEuNXZoO1xuICBsaW5lLWhlaWdodDogMS41dmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX21lZGlvXzIsXG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbWVkaW9fMiB7XG4gIGZvbnQtc2l6ZTogMS4zdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjN2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fcCxcbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19wIHtcbiAgZm9udC1zaXplOiAxLjY1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1dmg7XG4gIGhlaWdodDogMy41dmg7XG59XG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX2dyYW5kZSxcbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMjV2aDtcbiAgaGVpZ2h0OiAzLjd2aDtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fZ19ncmFuZGUsXG4ud29yZEgtOSAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fZ19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMnZoO1xuICBsaW5lLWhlaWdodDogMS4ydmg7XG4gIGhlaWdodDogM3ZoO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19wLFxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbm9ybWFsLFxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX25vcm1hbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNC41dmgpO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19tZWRpbyxcbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19tZWRpbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19tZWRpb18yLFxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX21lZGlvXzIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fZ3JhbmRlLFxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy43dmgpO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19nX2dyYW5kZSxcbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19nX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM3ZoKTtcbn1cbi53b3JkSC05IC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWctY29udGFpbmVyLFxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhXyAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgaW1nLFxuLndvcmRILTkgLmNlbnRyb19wcmFuY2hhXyBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLndvcmRILTk6bnRoLWNoaWxkKDluKSB7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuXG4ud29yZEgtOTpudGgtY2hpbGQoLW4rOSkge1xuICBib3JkZXItdG9wOiAwcHg7XG59XG5cbi53b3JkSC05Om50aC1jaGlsZCg5bisxKTpudGgtbGFzdC1jaGlsZCgtbis5KSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4ud29yZEgtOTpudGgtY2hpbGQoOW4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rOSkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtOTpudGgtY2hpbGQoOW4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rOSkgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC05Om50aC1jaGlsZCg5bisxKTpudGgtbGFzdC1jaGlsZCgtbis5KSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtOTpudGgtY2hpbGQoOW4pOm50aC1jaGlsZCgtbis5KSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC05Om50aC1jaGlsZCg5bik6bnRoLWNoaWxkKC1uKzkpIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtOTpudGgtY2hpbGQoOW4pOm50aC1jaGlsZCgtbis5KSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLndvcmRILTk6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtOTpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTk6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTk6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC05Omxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC05Omxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC0xMCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAxMCAtIDRweCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMnB4O1xufVxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5uZWcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xufVxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX25vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMi4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAyLjJ2aDtcbiAgaGVpZ2h0OiA0LjV2aDtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19tZWRpbyB7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjV2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19tZWRpb18yIHtcbiAgZm9udC1zaXplOiAxLjN2aDtcbiAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX3Age1xuICBmb250LXNpemU6IDEuNjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNjV2aDtcbiAgaGVpZ2h0OiAzLjV2aDtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMjV2aDtcbiAgaGVpZ2h0OiAzLjd2aDtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19nX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgaGVpZ2h0OiAzdmg7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0LjV2aCk7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX21lZGlvIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbWVkaW9fMiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuN3ZoKTtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19nX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM3ZoKTtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZLm5lZyB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZmZmO1xufVxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV8ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAubmVnLFxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV8gLm5lZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19ub3JtYWwsXG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX25vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMi4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAyLjJ2aDtcbiAgaGVpZ2h0OiA0LjV2aDtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX21lZGlvLFxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19tZWRpbyB7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjV2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX21lZGlvXzIsXG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX21lZGlvXzIge1xuICBmb250LXNpemU6IDEuM3ZoO1xuICBsaW5lLWhlaWdodDogMS4zdmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19wLFxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19wIHtcbiAgZm9udC1zaXplOiAxLjY1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1dmg7XG4gIGhlaWdodDogMy41dmg7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19ncmFuZGUsXG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXZoO1xuICBsaW5lLWhlaWdodDogMS4yNXZoO1xuICBoZWlnaHQ6IDMuN3ZoO1xufVxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fZ19ncmFuZGUsXG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICBoZWlnaHQ6IDN2aDtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX3AsXG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX25vcm1hbCxcbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbm9ybWFsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0LjV2aCk7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19tZWRpbyxcbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbWVkaW8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX21lZGlvXzIsXG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX21lZGlvXzIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX2dyYW5kZSxcbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjd2aCk7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19nX2dyYW5kZSxcbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fZ19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDN2aCk7XG59XG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZy1jb250YWluZXIsXG4ud29yZEgtMTAgLmNlbnRyb19wcmFuY2hhXyAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndvcmRILTEwIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIGltZyxcbi53b3JkSC0xMCAuY2VudHJvX3ByYW5jaGFfIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ud29yZEgtMTA6bnRoLWNoaWxkKDEwbikge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cblxuLndvcmRILTEwOm50aC1jaGlsZCgtbisxMCkge1xuICBib3JkZXItdG9wOiAwcHg7XG59XG5cbi53b3JkSC0xMDpudGgtY2hpbGQoMTBuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzEwKSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4ud29yZEgtMTA6bnRoLWNoaWxkKDEwbisxKTpudGgtbGFzdC1jaGlsZCgtbisxMCkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMTA6bnRoLWNoaWxkKDEwbisxKTpudGgtbGFzdC1jaGlsZCgtbisxMCkgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC0xMDpudGgtY2hpbGQoMTBuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzEwKSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtMTA6bnRoLWNoaWxkKDEwbik6bnRoLWNoaWxkKC1uKzEwKSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0xMDpudGgtY2hpbGQoMTBuKTpudGgtY2hpbGQoLW4rMTApIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtMTA6bnRoLWNoaWxkKDEwbik6bnRoLWNoaWxkKC1uKzEwKSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTEwOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi53b3JkSC0xMDpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0xMDpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTEwOmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC0xMDpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTEwOmxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC0xMDpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtMTEge1xuICB3aWR0aDogY2FsYygxMDAlIC8gMTEgLSA0cHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDJweDtcbn1cbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAubmVnIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbn1cbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19ub3JtYWwge1xuICBmb250LXNpemU6IDIuMnZoO1xuICBsaW5lLWhlaWdodDogMi4ydmg7XG4gIGhlaWdodDogNC41dmg7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbWVkaW8ge1xuICBmb250LXNpemU6IDEuNXZoO1xuICBsaW5lLWhlaWdodDogMS41dmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbWVkaW9fMiB7XG4gIGZvbnQtc2l6ZTogMS4zdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjN2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLnRpdF9waWN0b19wIHtcbiAgZm9udC1zaXplOiAxLjY1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1dmg7XG4gIGhlaWdodDogMy41dmg7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjI1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1dmg7XG4gIGhlaWdodDogMy43dmg7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fZ19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMnZoO1xuICBsaW5lLWhlaWdodDogMS4ydmg7XG4gIGhlaWdodDogM3ZoO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX25vcm1hbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNC41dmgpO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXZoKTtcbn1cbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19tZWRpbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX21lZGlvXzIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjd2aCk7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fZ19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDN2aCk7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWS5uZWcge1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2ZmZjtcbn1cbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLm5lZyxcbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfIC5uZWcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbm9ybWFsLFxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19ub3JtYWwge1xuICBmb250LXNpemU6IDIuMnZoO1xuICBsaW5lLWhlaWdodDogMi4ydmg7XG4gIGhlaWdodDogNC41dmg7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19tZWRpbyxcbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbWVkaW8ge1xuICBmb250LXNpemU6IDEuNXZoO1xuICBsaW5lLWhlaWdodDogMS41dmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19tZWRpb18yLFxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19tZWRpb18yIHtcbiAgZm9udC1zaXplOiAxLjN2aDtcbiAgbGluZS1oZWlnaHQ6IDEuM3ZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fcCxcbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fcCB7XG4gIGZvbnQtc2l6ZTogMS42NXZoO1xuICBsaW5lLWhlaWdodDogMS42NXZoO1xuICBoZWlnaHQ6IDMuNXZoO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fZ3JhbmRlLFxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMjV2aDtcbiAgaGVpZ2h0OiAzLjd2aDtcbn1cbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX2dfZ3JhbmRlLFxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV8gLnRpdF9waWN0b19nX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4ydmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJ2aDtcbiAgaGVpZ2h0OiAzdmg7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19wLFxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19ub3JtYWwsXG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX25vcm1hbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNC41dmgpO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbWVkaW8sXG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX21lZGlvIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19tZWRpb18yLFxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19tZWRpb18yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLmltZ19waWN0b19ncmFuZGUsXG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy43dmgpO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fZ19ncmFuZGUsXG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhXyAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzdmgpO1xufVxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWctY29udGFpbmVyLFxuLndvcmRILTExIC5jZW50cm9fcHJhbmNoYV8gLmltZy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53b3JkSC0xMSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCBpbWcsXG4ud29yZEgtMTEgLmNlbnRyb19wcmFuY2hhXyBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLndvcmRILTExOm50aC1jaGlsZCgxMW4pIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5cbi53b3JkSC0xMTpudGgtY2hpbGQoLW4rMTEpIHtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG4ud29yZEgtMTE6bnRoLWNoaWxkKDExbisxKTpudGgtbGFzdC1jaGlsZCgtbisxMSkge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLndvcmRILTExOm50aC1jaGlsZCgxMW4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rMTEpIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTExOm50aC1jaGlsZCgxMW4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rMTEpIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtMTE6bnRoLWNoaWxkKDExbisxKTpudGgtbGFzdC1jaGlsZCgtbisxMSkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTExOm50aC1jaGlsZCgxMW4pOm50aC1jaGlsZCgtbisxMSkgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMTE6bnRoLWNoaWxkKDExbik6bnRoLWNoaWxkKC1uKzExKSAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTExOm50aC1jaGlsZCgxMW4pOm50aC1jaGlsZCgtbisxMSkgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC0xMTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG4ud29yZEgtMTE6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMTE6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC0xMTpmaXJzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtMTE6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0xMTpsYXN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtMTE6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTEyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDEyIC0gNHB4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAycHg7XG59XG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLm5lZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDIuMnZoO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX21lZGlvIHtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNXZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX21lZGlvXzIge1xuICBmb250LXNpemU6IDEuM3ZoO1xuICBsaW5lLWhlaWdodDogMS4zdmg7XG4gIGhlaWdodDogMi45dmg7XG59XG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC50aXRfcGljdG9fcCB7XG4gIGZvbnQtc2l6ZTogMS42NXZoO1xuICBsaW5lLWhlaWdodDogMS42NXZoO1xuICBoZWlnaHQ6IDMuNXZoO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX2dyYW5kZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXZoO1xuICBsaW5lLWhlaWdodDogMS4yNXZoO1xuICBoZWlnaHQ6IDMuN3ZoO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAudGl0X3BpY3RvX2dfZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDEuMnZoO1xuICBoZWlnaHQ6IDN2aDtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19ub3JtYWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQuNXZoKTtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19wIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjV2aCk7XG59XG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fbWVkaW8ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuOXZoKTtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkgLmltZ19waWN0b19tZWRpb18yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyLjl2aCk7XG59XG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy43dmgpO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nX3BpY3RvX2dfZ3JhbmRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzdmgpO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfQ0FURUdPUlkubmVnIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNmZmY7XG59XG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhXyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5uZWcsXG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhXyAubmVnIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX25vcm1hbCxcbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbm9ybWFsIHtcbiAgZm9udC1zaXplOiAyLjJ2aDtcbiAgbGluZS1oZWlnaHQ6IDIuMnZoO1xuICBoZWlnaHQ6IDQuNXZoO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbWVkaW8sXG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX21lZGlvIHtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNXZoO1xuICBoZWlnaHQ6IDIuOXZoO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC50aXRfcGljdG9fbWVkaW9fMixcbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fbWVkaW9fMiB7XG4gIGZvbnQtc2l6ZTogMS4zdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjN2aDtcbiAgaGVpZ2h0OiAyLjl2aDtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX3AsXG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhXyAudGl0X3BpY3RvX3Age1xuICBmb250LXNpemU6IDEuNjV2aDtcbiAgbGluZS1oZWlnaHQ6IDEuNjV2aDtcbiAgaGVpZ2h0OiAzLjV2aDtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAudGl0X3BpY3RvX2dyYW5kZSxcbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fZ3JhbmRlIHtcbiAgZm9udC1zaXplOiAxLjI1dmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1dmg7XG4gIGhlaWdodDogMy43dmg7XG59XG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgLnRpdF9waWN0b19nX2dyYW5kZSxcbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfIC50aXRfcGljdG9fZ19ncmFuZGUge1xuICBmb250LXNpemU6IDEuMnZoO1xuICBsaW5lLWhlaWdodDogMS4ydmg7XG4gIGhlaWdodDogM3ZoO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fcCxcbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fcCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41dmgpO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbm9ybWFsLFxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19ub3JtYWwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQuNXZoKTtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX21lZGlvLFxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19tZWRpbyB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fbWVkaW9fMixcbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfIC5pbWdfcGljdG9fbWVkaW9fMiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMi45dmgpO1xufVxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5UIC5pbWdfcGljdG9fZ3JhbmRlLFxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19ncmFuZGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuN3ZoKTtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nX3BpY3RvX2dfZ3JhbmRlLFxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV8gLmltZ19waWN0b19nX2dyYW5kZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM3ZoKTtcbn1cbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCAuaW1nLWNvbnRhaW5lcixcbi53b3JkSC0xMiAuY2VudHJvX3ByYW5jaGFfIC5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ud29yZEgtMTIgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQgaW1nLFxuLndvcmRILTEyIC5jZW50cm9fcHJhbmNoYV8gaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi53b3JkSC0xMjpudGgtY2hpbGQoMTJuKSB7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuXG4ud29yZEgtMTI6bnRoLWNoaWxkKC1uKzEyKSB7XG4gIGJvcmRlci10b3A6IDBweDtcbn1cblxuLndvcmRILTEyOm50aC1jaGlsZCgxMm4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rMTIpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cbi53b3JkSC0xMjpudGgtY2hpbGQoMTJuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzEyKSAuY2VudHJvX3ByYW5jaGFfRUxFTUVOVCxcbi53b3JkSC0xMjpudGgtY2hpbGQoMTJuKzEpOm50aC1sYXN0LWNoaWxkKC1uKzEyKSAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTEyOm50aC1jaGlsZCgxMm4rMSk6bnRoLWxhc3QtY2hpbGQoLW4rMTIpIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi53b3JkSC0xMjpudGgtY2hpbGQoMTJuKTpudGgtY2hpbGQoLW4rMTIpIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTEyOm50aC1jaGlsZCgxMm4pOm50aC1jaGlsZCgtbisxMikgLmNlbnRyb19wcmFuY2hhXyxcbi53b3JkSC0xMjpudGgtY2hpbGQoMTJuKTpudGgtY2hpbGQoLW4rMTIpIC5jZW50cm9fcHJhbmNoYV9DQVRFR09SWSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ud29yZEgtMTI6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLndvcmRILTEyOmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV9FTEVNRU5ULFxuLndvcmRILTEyOmZpcnN0LWNoaWxkIC5jZW50cm9fcHJhbmNoYV8sXG4ud29yZEgtMTI6Zmlyc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLndvcmRILTEyOmxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0VMRU1FTlQsXG4ud29yZEgtMTI6bGFzdC1jaGlsZCAuY2VudHJvX3ByYW5jaGFfLFxuLndvcmRILTEyOmxhc3QtY2hpbGQgLmNlbnRyb19wcmFuY2hhX0NBVEVHT1JZIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZGRlNmU4O1xufVxuXG4udHlwZV8yIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMwMDA7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jbG9zZV9tZW51IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHggLSBjYWxjKDQgKiA1MHB4KSk7XG59XG5cbi5pdGVtLS1tZW51IHtcbiAgbWFyZ2luOiAycHggMHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uaXRlbS0tc3VibWVudSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1lbnVfZm9udCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAydnc7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLmJveF9wcmFuY2hhLm5lZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGxfcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RkZTZlOCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGxfaCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ib3hfcHJhbmNoYSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xuICBtYXJnaW46IDBweCAwcHg7XG4gIGhlaWdodDogOTcuNSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJveF9wcmFuY2hhIC5sYXRlcmFsIHtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMHB4IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5ib3hfcHJhbmNoYSAubGF0ZXJhbCAuaWNfbWVudSB7XG4gIGhlaWdodDogMTglO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uYm94X3ByYW5jaGEgLmxhdGVyYWwgLmljX21lbnUubmVnIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4uYm94X3ByYW5jaGEgLmxhdGVyYWwgLmljX3NldGEge1xuICBoZWlnaHQ6IGNhbGMoOTglIC0gMTglKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm94X29wYyB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbjogMHB4IDBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBoZWlnaHQ6IDk3LjUlO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5ib3hfb3BjIC5vcGFjaXR5IHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmJveF9vcGMgLm9wY190YW0ge1xuICBoZWlnaHQ6IGNhbGMoMjUlIC0gY2FsYygydmgvIDUpICogNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgYmFja2dyb3VuZDogIzg0YmFjNztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxNXB4IDBweCAjNjY2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib3hfb3BjIC5vcGNfdGFtIC5zdWJfb3BjX3RhbSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA4dmg7XG59XG4uYm94X29wYyAub3BjX3RhbTpudGgtY2hpbGQoNW4pIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmJveF9vcGMgLm9wY190YW0ubmVnIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG4uYm94X29wYyAub3BjX3RhbS5uZWcgaDYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cbi5ib3hfb3BjIC5vcGNfdGFtLm5lZyBpb24taWNvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmJveF9vcGMgLm9wY190YW0gaDYge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjJ2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3hfb3BjLm5lZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jZW50cm8ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMiAqNDBweCk7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2VudHJvIC5tYXJnaW4ge1xuICBoZWlnaHQ6IDElO1xufVxuLmNlbnRybyAudmluIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxOCU7XG59XG4uY2VudHJvIC52aW4gLmJ0bl9vY3VsdGFyIHtcbiAgYmFja2dyb3VuZDogIzg0YmFjNztcbiAgZm9udC1zaXplOiAydnc7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgbWFyZ2luOiAwLjJyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2VudHJvIC52aW4gLnZpbl9ib3JkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICM3Nzc7XG59XG4uY2VudHJvIC52aW4gLm5lZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4uY2VudHJvIC52aW4gLmNlbnRyb19mcmFzZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNlbnRybyAudmluIC5sYXRlcmFsX2ZyYXNlX2wge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNnB4O1xufVxuLmNlbnRybyAudmluIC5sYXRlcmFsX2ZyYXNlX3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNnB4O1xufVxuLmNlbnRybyAudmluIC5pbmRfZnJhc2Uge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XG4gIHdpZHRoOiBjYWxjKDEwJSAtIDJweCk7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDJweCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFweDtcbn1cbi5jZW50cm8gLnZpbiAuaW5kX2ZyYXNlIC50aXRfcGljdG9fZnJhc2Uge1xuICBmb250LXNpemU6IDEuMnZoO1xuICBoZWlnaHQ6IDQuM3ZoO1xufVxuLmNlbnRybyAudmluIC5pbmRfZnJhc2UgLmltZ19waWN0b19mcmFzZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNC4zdmgpO1xufVxuLmNlbnRybyAudmluIC5pbmRfZnJhc2UgLmltZ19waWN0b19mcmFzZSAuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNlbnRybyAudmluIC5pbmRfZnJhc2UgLmltZ19waWN0b19mcmFzZSBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5jZW50cm8gLnZpbiAudGV4dG9fb2N1bHRhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2VudHJvIC52aW4gLnRleHRvX29jdWx0YXIgaDEge1xuICBmb250LXNpemU6IDJ2dztcbiAgY29sb3I6ICM2NjY7XG59XG4uY2VudHJvIC52aW4gLnZpbl9ib3JkZXIubmVnIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cbi5jZW50cm8gLnZpbiAuaW5kX2ZyYXNlLm5lZyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNlbnRybyAudmluIC5pbmRfZnJhc2U6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuLmNlbnRybyAudmluIC5pbmRfZnJhc2U6bnRoLWNoaWxkKDEwbikge1xuICBib3JkZXItcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLmNlbnRybyAudmluIC5pbmRfZnJhc2U6bnRoLWNoaWxkKDEwbikgLmxhdGVyYWxfZnJhc2VfciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzc3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc3NztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5jZW50cm8gLm9pdCB7XG4gIGhlaWdodDogY2FsYyg5OCUgLSAxOCUpO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNzc3O1xufVxuLmNlbnRybyAub2N1bHRhZG8ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jZW50cm8gLm9pdC5uZWcge1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcbn1cbi5zbGlkZSAuY3VzdG9tLXBhZ2luYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDQ0O1xufVxuLnNsaWRlIC5jdXN0b20tcGFnaW5hdGlvbiAucGFnZS1udW1iZXIubmVnIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var speak_tts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! speak-tts */
    "./node_modules/speak-tts/lib/speak-tts.js");
    /* harmony import */


    var speak_tts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(speak_tts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/text-to-speech/ngx */
    "./node_modules/@ionic-native/text-to-speech/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/home.service */
    "./src/app/services/home.service.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(spinner, tts, homeService) {
        _classCallCheck2(this, HomePage);

        this.spinner = spinner;
        this.tts = tts;
        this.homeService = homeService;
        this.url = 'http://54.189.34.198/';
        this.cards = [];
        this.currentCards = [];
        this.currentType = {};
        this.sentece = [];
        this.init_cards = [];
        this.tam_v = 2;
        this.allowBack = false;
        this.tit_picto = 'normal';
        this.tam_h = 2;
        this.b_class = " ";
        this.total_per_page = 0;
        this.spc = new speak_tts__WEBPACK_IMPORTED_MODULE_2___default.a();
        this.hasVerb = false;
        this.hasAgent = false;
        this.getCards(0, {
          "sentence": this.sentece,
          "grid": 25
        });
        this.currentCards = this.cards;
        this.init_cards = JSON.parse(JSON.stringify(this.cards));
        var tam = this.currentCards.length;

        for (var i = 0; i < this.total_per_page - tam; i++) {
          this.currentCards.push({});
        }

        this.configPagination();
      }

      _createClass2(HomePage, [{
        key: "getCards",
        value: function getCards(index, payload) {
          var _this4 = this;

          console.log(payload);
          this.spinner.show();
          this.homeService.getCards(payload).subscribe(function (data) {
            console.log(data);
            _this4.tam_h = 5;
            _this4.tam_v = 5; // var arr = []
            // for(let i = 0 ; i < data['suggested'].length; i++){
            //   arr.push({
            //     image_path: data['suggested'][i]['image_path'],
            //     id: data['suggested'][i]['id'],
            //     label: data['suggested']setCard[i]['label'],
            //   })
            // }

            _this4.currentCards = data['suggested']; // for (let i = 0; i < data.length; i++) {
            //   var obj = {
            //     father: this.currentCards[index].type == 2 ? this.currentCards[index].father : this.currentCards[index].name,
            //     position: this.currentCards[index].position,
            //     color: this.currentCards[index].color,
            //     semantic_role: this.currentCards[index].semantic_role,
            //   }
            //   arr.push({ ...obj, ...data[i] });
            // }
            // if (this.currentCards[index].type == 3) {
            //   this.cards[index].subcards = arr;
            // }
            // this.currentCards = [];
            // this.currentCards = arr;
            // const tam = this.currentCards.length;
            // this.total_per_page = this.tam_h * this.tam_v;
            // for (let i = 0; i < this.total_per_page - tam; i++) {
            //   this.currentCards.push({})
            // }

            _this4.spinner.hide();

            _this4.configPagination();
          }, function (err) {
            _this4.spinner.hide();

            console.log(err);
          });
        }
      }, {
        key: "setCard",
        value: function setCard(data, index) {
          this.allowBack = false;
          this.sentece.push(data);
          this.getCards(0, {
            sentence: this.sentece,
            grid: 25
          });
          console.log(this.sentece); // if (data.type == 3) {
          //   let req = { missing: data.semantic_role };
          //   this.sentece.forEach(element => {
          //     req[element.semantic_role] = element.name
          //   });
          //   console.log(req)
          //   this.getCards(index, req)
          // } else if (parseInt(data.type) == 2) {
          //   let req = { missing: data.semantic_role, parent_id: data.id };
          //   this.sentece.forEach(element => {
          //     req[element.semantic_role] = element.name
          //   });
          //   console.log(req)
          //   this.getCards(index, req);
          //   this.allowBack = true;
          // } else {
          //   this.tam_h = 2;
          //   this.tam_v = 2;
          //   this.tit_picto = 'normal';
          //   console.log(data.semantic_role)
          //   if (data.semantic_role == 'agent') {
          //     this.hasAgent = true;
          //     this.cards[0].disabled = true;
          //   } else if (data.semantic_role == 'verb') {
          //     this.hasVerb = true;
          //     this.cards[1].disabled = true;
          //   } else if (data.semantic_role == 'theme') {
          //     this.cards[2].disabled = true;
          //   } else if (data.semantic_role == 'recipient') {
          //     this.cards[3].disabled = true;
          //   } else if (data.semantic_role == 'manner') {
          //     this.cards[4].disabled = true;
          //   } else if (data.semantic_role == 'location') {
          //     // this.cards[5].disabled = true;
          //   } else if (data.semantic_role == 'time') {
          //     // this.cards[7].disabled = true;
          //   }
          //   this.currentCards = this.cards;
          //   this.sentece.push(data);
          //   this.sentece.sort((a, b) => {
          //     return a.position - b.position;
          //   });
          //   this.configPagination();
          //   this.currentType = {};
          // }
        }
      }, {
        key: "configPagination",
        value: function configPagination() {
          this.total_per_page = this.tam_h * this.tam_v;
          this.total_pages = Math.round(this.currentCards.length / this.total_per_page + 0.5);
          this.config_slide = {
            itemsPerPage: this.total_per_page,
            currentPage: 1,
            totalItems: this.currentCards.length
          };
        }
      }, {
        key: "home",
        value: function home() {
          this.tam_h = 5;
          this.tam_v = 5;
          this.tit_picto = 'normal';
          this.currentCards = JSON.parse(JSON.stringify(this.cards));
          this.configPagination();
          this.allowBack = false;
        }
      }, {
        key: "clean",
        value: function clean() {
          this.tam_h = 5;
          this.tam_v = 5; // this.tit_picto = 'normal';

          this.sentece = [];
          this.cards = JSON.parse(JSON.stringify(this.init_cards));
          this.currentCards = JSON.parse(JSON.stringify(this.cards));
          this.getCards(0, {
            sentence: this.sentece,
            grid: 25
          }); // this.hasVerb = false;
          // this.hasAgent = false;
        }
      }, {
        key: "logDrag",
        value: function logDrag(ev) {
          alert(JSON.stringify(ev));
        }
      }, {
        key: "pressEvent",
        value: function pressEvent(data) {
          alert(JSON.stringify(data));
        }
      }, {
        key: "cleanText",
        value: function cleanText(label) {
          if (label) {
            return label.replace('?', '').replace('!', '').toLowerCase();
          }

          return false;
        }
      }, {
        key: "speaker",
        value: function speaker(data, type) {
          var _this5 = this;

          //tipo 1, só uma palavra - tipo 2, a frase completa
          if (type == 1) {
            this.spc.setRate(0.5);
            this.spc.setLanguage('en-US');
            this.spc.speak({
              text: data
            }).then(function () {})["catch"](function (e) {
              _this5.tts.speak({
                text: data,
                rate: 0.5
              });
            });
          } else if (type == 2) {
            this.spc.setRate(0.75);
            var word = '';

            for (var i = 0; i < this.sentece.length; i++) {
              word += this.sentece[i].label;
            }

            this.spc.setRate(0.5);
            this.spc.setLanguage('en-US');
            this.spc.speak({
              text: word
            }).then(function () {})["catch"](function (e) {
              _this5.tts.speak({
                text: word,
                rate: 0.5
              });
            });
          }
        }
      }, {
        key: "back",
        value: function back() {
          console.log(this.cards, this.currentCards[0]);
          var semantic_role = this.currentCards[0].semantic_role;
          var index = this.cards.findIndex(function (x) {
            return x.semantic_role === semantic_role;
          });
          this.currentCards = JSON.parse(JSON.stringify(this.cards[index].subcards));
          this.configPagination();
          this.allowBack = false;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_3__["TextToSpeech"]
      }, {
        type: _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  },

  /***/
  "./src/app/services/home.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/home.service.ts ***!
    \******************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HomeService = /*#__PURE__*/function () {
      function HomeService(http) {
        _classCallCheck2(this, HomeService);

        this.http = http;
      }

      _createClass2(HomeService, [{
        key: "getCards",
        value: function getCards(data) {
          // return this.http.post('http://54.189.34.198/memory', data);
          // return this.http.post('http://4528-35-190-135-8.ngrok.io/model', data);
          return this.http.post("http://" + document.domain + '/model', data);
        }
      }]);

      return HomeService;
    }();

    HomeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HomeService);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map