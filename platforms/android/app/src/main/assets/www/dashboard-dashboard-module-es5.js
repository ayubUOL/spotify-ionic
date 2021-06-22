function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Trending</ion-title>\n    <ion-button\n      (click)=\"presentPopover($event)\"\n      slot=\"end\"\n      size=\"small\"\n      icon-only\n      fill=\"clear\"\n    >\n      <ion-icon color=\"dark\" name=\"ellipsis-vertical\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"isLoading\">\n    <ion-item *ngFor=\"let i of [].constructor(5)\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <h6>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h6>\n      </ion-label>\n    </ion-item>\n  </ng-container>\n  <ng-container *ngIf=\"!isLoading\">\n    <ion-item\n      (click)=\"collapsed[repo.name]? collapsed[repo.name]=false : collapsed[repo.name]=true\"\n      *ngFor=\"let repo of repos\"\n    >\n      <ion-avatar slot=\"start\">\n        <ion-img [src]=\"repo.track.preview_url\"></ion-img>\n      </ion-avatar>\n      <ion-list>\n        <div *ngFor=\"let artist of repo.track.artists\">\n          <p>{{artist.name}}</p>\n        </div>\n        \n        <h6>{{repo.track.name}}</h6>\n        <ng-container *ngIf=\"collapsed[repo.name]\">\n          <p>{{repo.description}}({{repo.url}})</p>\n          <div class=\"custom-label\">\n            <ion-icon\n              [style.color]=\"repo.languageColor\"\n              name=\"ellipse\"\n            ></ion-icon>\n            <span>{{repo.language}}</span>\n            <ion-icon name=\"star\" color=\"warning\"></ion-icon>\n            <span>{{repo.stars}}</span>\n            <ion-icon name=\"git-network\" color=\"dark\"></ion-icon>\n            <span>{{repo.forks}}</span>\n          </div>\n        </ng-container>\n      </ion-list>\n    </ion-item>\n  </ng-container>\n</ion-content>\n\n<ion-footer (click)=\"logout()\">\n  <ion-toolbar color=\"secondary\">\n    <ion-title>Log out</ion-title>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFilterFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-list>\n    <ion-item lines=\"none\" (click)=\"closePopOver('stars')\">\n      <p class=\"ion-text-capitalize\">Sort by stars</p>\n    </ion-item>\n    <ion-item lines=\"none\" (click)=\"closePopOver('name')\">\n      <p class=\"ion-text-capitalize\">Sort by name</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../filter/filter.component */
    "./src/app/filter/filter.component.ts");
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared.module */
    "./src/app/shared.module.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardPageRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"]],
      entryComponents: [_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item p {\n  margin: 10px 0;\n  font-size: 14px;\n}\nion-item h3 {\n  margin: 10px 0;\n  font-size: 17px;\n}\nion-item .custom-label {\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  padding-bottom: 10px;\n}\nion-item .custom-label ion-icon {\n  margin-right: 5px;\n}\nion-item .custom-label span {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RBVEEvc2FtcGxlV29yay9hc2hpc2gvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBSUEsb0JBQUE7QUNISjtBREFJO0VBQ0UsaUJBQUE7QUNFTjtBRENJO0VBQ0Usa0JBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICBwIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgaDMge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuICAuY3VzdG9tLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBzcGFuIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gIH1cbn1cbiIsImlvbi1pdGVtIHAge1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWl0ZW0gaDMge1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuaW9uLWl0ZW0gLmN1c3RvbS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24taXRlbSAuY3VzdG9tLWxhYmVsIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5pb24taXRlbSAuY3VzdG9tLWxhYmVsIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ts ***!
    \*********************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../filter/filter.component */
    "./src/app/filter/filter.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts"); // dashboard.page.ts


    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(apiService, navCtrl, authService, popoverController, alertController) {
        _classCallCheck(this, DashboardPage);

        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.repos = [];
        this.descending = false;
        this.column = "name";
        this.collapsed = [];
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.userDetails().subscribe(function (res) {
            console.log("res", res);

            if (res !== null) {
              _this.userEmail = res.email;
            } else {
              _this.navCtrl.navigateBack("");
            }
          }, function (err) {
            console.log("err", err);
          });
          this.loadCountries();
        }
      }, {
        key: "loadCountries",
        value: function loadCountries() {
          var _this2 = this;

          this.isLoading = true;
          this.apiService.getTrendingRepos().subscribe(function (res) {
            _this2.isLoading = false;
            _this2.repos = res.tracks.items;
            console.log(res);
          }, function (err) {
            _this2.isLoading = false;

            _this2.presentNoInternetAlert();
          });
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this3 = this;

          this.apiService.getTrendingRepos().subscribe(function (res) {
            _this3.repos = res;
            event.target.complete();
          }, function (err) {
            event.target.complete();
          });
        }
      }, {
        key: "sort",
        value: function sort() {
          this.descending = !this.descending;
          this.order = this.descending ? 1 : -1;
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this4 = this;

          this.authService.logoutUser().then(function (res) {
            console.log(res);

            _this4.navCtrl.navigateBack("");
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"],
                      cssClass: "my-custom-class",
                      event: ev,
                      translucent: true
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    _context.next = 7;
                    return popover.onDidDismiss().then(function (data) {
                      if (data.data) {
                        switch (data.data) {
                          case "name":
                            _this5.repos.sort(function (a, b) {
                              return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
                            });

                            break;

                          case "stars":
                            _this5.repos.sort(function (a, b) {
                              return parseFloat(b.stars) - parseFloat(a.stars);
                            });

                            break;
                        }
                      }

                      console.log(data);
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentNoInternetAlert",
        value: function presentNoInternetAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "Something went wrong!",
                      message: "An alien is probably blocking your signal",
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          console.log("Confirm Cancel: blah");
                        }
                      }, {
                        text: "Try again",
                        handler: function handler() {
                          _this6.loadCountries();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/dashboard/dashboard.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], DashboardPage);
    /***/
  },

  /***/
  "./src/app/filter/filter.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/filter/filter.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFilterFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/filter/filter.component.ts":
  /*!********************************************!*\
    !*** ./src/app/filter/filter.component.ts ***!
    \********************************************/

  /*! exports provided: FilterComponent */

  /***/
  function srcAppFilterFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterComponent", function () {
      return FilterComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var FilterComponent = /*#__PURE__*/function () {
      function FilterComponent(popCtrl) {
        _classCallCheck(this, FilterComponent);

        this.popCtrl = popCtrl;
      }

      _createClass(FilterComponent, [{
        key: "closePopOver",
        value: function closePopOver(data) {
          this.popCtrl.dismiss(data);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FilterComponent;
    }();

    FilterComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-filter",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filter.component.scss */
      "./src/app/filter/filter.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], FilterComponent);
    /***/
  },

  /***/
  "./src/app/search.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/search.pipe.ts ***!
    \********************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchPipe = /*#__PURE__*/function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(items, terms) {
          if (!items) return [];
          if (!terms) return items;
          terms = terms.toLowerCase();
          return items.filter(function (it) {
            return it.name.toLowerCase().includes(terms); // only filter country name
          });
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'search'
    })], SearchPipe);
    /***/
  },

  /***/
  "./src/app/shared.module.ts":
  /*!**********************************!*\
    !*** ./src/app/shared.module.ts ***!
    \**********************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sort.pipe */
    "./src/app/sort.pipe.ts");
    /* harmony import */


    var _search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./search.pipe */
    "./src/app/search.pipe.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["SortPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"]],
      exports: [_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["SortPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchPipe"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/sort.pipe.ts":
  /*!******************************!*\
    !*** ./src/app/sort.pipe.ts ***!
    \******************************/

  /*! exports provided: SortPipe */

  /***/
  function srcAppSortPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPipe", function () {
      return SortPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SortPipe = /*#__PURE__*/function () {
      function SortPipe() {
        _classCallCheck(this, SortPipe);
      }

      _createClass(SortPipe, [{
        key: "transform",
        value: function transform(array, args) {
          return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
              return -1 * args.order;
            } else if (a[args.property] > b[args.property]) {
              return 1 * args.order;
            } else {
              return 0;
            }
          });
        }
      }]);

      return SortPipe;
    }();

    SortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'sort'
    })], SortPipe);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map