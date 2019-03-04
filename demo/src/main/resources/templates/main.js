(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], pathMatch: 'full' },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], pathMatch: 'full' },
    { path: '*', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" *ngIf=\"loginSuccess\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Wander Notes</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a>Hi, <span>{{user}}</span></a></li>\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n    </ul>\n  </div>\n</nav>\n<div style=\"max-height: 455px;overflow-y: scroll;min-height: 455px;\">\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"page-footer font-small blue\" *ngIf=\"loginSuccess\" style=\"background: black;height: 50px;position: relative;\nmargin-bottom: 0px;\">\n  <div class=\"footer-copyright text-center py-3\">Wander © 2019 Copyright:\n    <a href=\"https://www.wander.today/\">https://www.wander.today</a>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'wander-web';
        this.loginSuccess = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('uname');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-service.service */ "./src/app/global-service.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: '*', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule(globalService) {
        this.globalService = globalService;
    }
    AppModule.prototype.ngOnInit = function () {
    };
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ],
            exports: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_global_service_service__WEBPACK_IMPORTED_MODULE_6__["GlobalServiceService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-form\">\n  <form action=\"/notes/getAllNOtes\" method=\"post\">\n    <h2 class=\"text-center\">Notes</h2>\n    <div class=\"form-group\" style=\"width:500px;\">\n      <input type=\"text\" #titleName=\"ngModel\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" placeholder=\"Title\" required>\n      <span *ngIf=\"titleName.errors?.required\" class=\"text-danger\">*Required</span>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" #desc=\"ngModel\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" placeholder=\"Description\"\n        required>\n        <span *ngIf=\"desc.errors?.required\" class=\"text-danger\">*Required</span>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"container\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"addNote(title,description)\" [disabled]=\"titleName.errors?.required || desc.errors?.required\">Add Note</button>\n      </div>\n    </div>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Sr. No</th>\n          <th>Title</th>\n          <th>Description</th>\n          <th>Edit Options</th>\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngFor=\"let note of notes;let i =index\" >\n          <td>{{i}}</td>\n          <td><input type=\"text\" [(ngModel)]=\"note.title\" name=\"title-{{i}}\"></td>\n          <td><textarea type=\"text\" [(ngModel)]=\"note.description\" name=\"description-{{i}}\"></textarea></td>\n          <td><button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 5px;\"\n              (click)=\"updateNote(note)\">Update</button>\n            <button type=\"button\" class=\"btn btn-danger\" style=\"margin-right: 5px;\"\n              (click)=\"deleteNote(note)\">Delete</button></td>\n        </tr>\n<tr *ngIf=\"!notes || notes.length==0\" colspan=\"4\"><h3>No notes to display</h3></tr>\n      </tbody>\n    </table>\n  </form>\n  <p class=\"text-center\"><a (click)=\"getNotes()\">Refresh Notes</a></p>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-service.service */ "./src/app/global-service.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(globalService, AppComp) {
        this.globalService = globalService;
        this.AppComp = AppComp;
        this.notes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.getAllNotes().subscribe(function (data) {
            _this.AppComp.loginSuccess = true;
            _this.AppComp.user = localStorage.getItem("uname");
            _this.notes = data;
        });
    };
    DashboardComponent.prototype.addNote = function (title, description) {
        var _this = this;
        this.globalService.addNote(title, description).subscribe(function (data) {
            _this.notes = data;
        });
    };
    DashboardComponent.prototype.updateNote = function (note) {
        var _this = this;
        this.globalService.updateNote(note).subscribe(function (data) {
            // this.notes=data;
            _this.ngOnInit();
        });
    };
    DashboardComponent.prototype.deleteNote = function (note) {
        var _this = this;
        this.globalService.deleteNote(note).subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    DashboardComponent.prototype.getNotes = function () {
        this.ngOnInit();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_global_service_service__WEBPACK_IMPORTED_MODULE_1__["GlobalServiceService"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/global-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/global-service.service.ts ***!
  \*******************************************/
/*! exports provided: GlobalServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalServiceService", function() { return GlobalServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalServiceService = /** @class */ (function () {
    function GlobalServiceService(_http) {
        this._http = _http;
    }
    GlobalServiceService.prototype.getAllNotes = function () {
        var url;
        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'getAllNotes';
        console.log(url);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
        headers.set("Access-Control-Allow-Headers", "Content-Type");
        headers.set("Access-Control-Allow-Credentials", "true");
        return this._http.get(url, { headers: headers });
    };
    GlobalServiceService.prototype.addNote = function (title, description) {
        var url;
        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'addNote';
        console.log(url);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
        headers.set("Access-Control-Allow-Headers", "Content-Type");
        headers.set("Access-Control-Allow-Credentials", "true");
        var user = localStorage.getItem('uname');
        var formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("user", user);
        return this._http.post(url, formData, { headers: headers });
    };
    GlobalServiceService.prototype.updateNote = function (note) {
        var url;
        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'updateNote';
        console.log(url);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
        headers.set("Access-Control-Allow-Headers", "Content-Type");
        headers.set("Access-Control-Allow-Credentials", "true");
        var formData = new FormData();
        formData.append("note", JSON.stringify(note));
        return this._http.post(url, formData, { headers: headers });
    };
    GlobalServiceService.prototype.deleteNote = function (note) {
        var url;
        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'deleteNote';
        console.log(url);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
        headers.set("Access-Control-Allow-Headers", "Content-Type");
        headers.set("Access-Control-Allow-Credentials", "true");
        var formData = new FormData();
        formData.append("note", JSON.stringify(note));
        return this._http.post(url, formData, { headers: headers });
    };
    GlobalServiceService.prototype.addUser = function (user) {
        var url;
        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'addUser';
        console.log(url);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
        headers.set("Access-Control-Allow-Headers", "Content-Type");
        headers.set("Access-Control-Allow-Credentials", "true");
        var formData = new FormData();
        formData.append("user", JSON.stringify(user));
        return this._http.post(url, formData, { headers: headers });
    };
    GlobalServiceService.prototype.login = function (uname, pass) {
        var url;
        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'login';
        console.log(url);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Access-Control-Allow-Methods", "GET, POST, PUT");
        headers.set("Access-Control-Allow-Headers", "Content-Type");
        headers.set("Access-Control-Allow-Credentials", "true");
        var formData = new FormData();
        formData.append("uname", uname);
        formData.append("pass", pass);
        return this._http.post(url, formData, { headers: headers });
    };
    GlobalServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GlobalServiceService);
    return GlobalServiceService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container login-form\" style=\"width: 300px;\">\n    <p class=\"text-center\" style=\"color:orangered\">{{errorMessage}}</p>\n   \n  <form  action=\"/notes/getAllNOtes\" method=\"post\">\n    <div class=\"alert alert-danger\" *ngIf=\"username.touched && username.errors?.required\">Username cannot be blank.</div>\n    <div class=\"alert alert-danger\" *ngIf=\"password.touched && password.errors?.required\">Password cannot be blank.</div>\n      <h2 class=\"text-center\">Log in</h2>       \n      <div class=\"form-group\">\n            <input #username=\"ngModel\" type=\"text\" [(ngModel)]=\"uname\" name=\"uname\" class=\"form-control\" placeholder=\"Username\"  required>\n        </div>\n        <div class=\"form-group\">\n            <input #password=\"ngModel\" type=\"password\" [(ngModel)]=\"pass\" name=\"pass\" class=\"form-control\" placeholder=\"Password\" required >\n        </div>\n      <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"login(uname,pass)\">Log In </button>\n      </div>\n      <!-- <div class=\"clearfix\">\n          <label class=\"pull-left checkbox-inline\"><input type=\"checkbox\"> Remember me</label>\n          <a href=\"#\" class=\"pull-right\">Forgot Password?</a>\n      </div>         -->\n  </form>\n  <p class=\"text-center\"  ><a  routerLink=\"signup\">Create an Account</a></p>\n  \n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-service.service */ "./src/app/global-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(globalService, route, AppCom) {
        this.globalService = globalService;
        this.route = route;
        this.AppCom = AppCom;
        this.uname = "";
        this.pass = "";
        this.currentUser = [];
        this.errorMessage = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.AppCom.loginSuccess = false;
    };
    LoginComponent.prototype.login = function (uname, pass) {
        var _this = this;
        if (uname === undefined || pass === undefined || uname === "" || pass === "") {
            this.errorMessage = "Please enter a valid userame and password";
            this.route.navigate(['login']);
        }
        else {
            this.globalService.login(uname, pass).subscribe(function (data) {
                _this.currentUser = data;
                if (_this.currentUser.length > 0) {
                    localStorage.setItem('user', _this.currentUser);
                    localStorage.setItem('uname', uname);
                    _this.AppCom.loginSuccess = true;
                    _this.AppCom.user = localStorage.getItem('uname');
                    console.log(_this.AppCom.user);
                    _this.route.navigate(['dashboard']);
                }
                else {
                    _this.errorMessage = "Invalid Username or Password";
                    _this.route.navigate(['login']);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_global_service_service__WEBPACK_IMPORTED_MODULE_1__["GlobalServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-form\" style=\"width: 300px;\">\n\n    <form action=\"/notes/getAllNOtes\" method=\"post\" #loginForm=\"ngForm\">\n        <p class=\"text-center\" style=\"color:orangered\">{{errorMessage}}</p>\n        <div class=\"alert alert-danger\" *ngIf=\"username.touched && username.errors?.required\">Username is required.</div>\n        <div class=\"alert alert-danger\" *ngIf=\"password.touched && password.errors?.required\">Password is required.</div>\n        <div class=\"alert alert-danger\" *ngIf=\"fullname.touched && fullname.errors?.required\">Full Name is required.</div>\n        <h2 class=\"text-center\">Create Account</h2>\n\n        <div class=\"form-group\">\n            <input type=\"text\" #username=\"ngModel\" [(ngModel)]=\"user.uname\" name=\"uname\" class=\"form-control\" placeholder=\"Username\"\n                required>\n            <span *ngIf=\"loginForm.form.invalid\" class=\"text-danger\">*Required</span>\n        </div>\n        <div class=\"form-group\"> \n            <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.pass\" name=\"pass\" class=\"form-control\"\n                placeholder=\"Choose Password\" required>\n            <span *ngIf=\"loginForm.form.invalid\" class=\"text-danger\">*Required</span>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" #fullname=\"ngModel\" [(ngModel)]=\"user.fullName\" name=\"name\" class=\"form-control\" placeholder=\"Full Name\"\n                required>\n            <span *ngIf=\"loginForm.form.invalid\" class=\"text-danger\">*Required</span>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" [(ngModel)]=\"user.contact\" name=\"contact\" class=\"form-control\" placeholder=\"Contact\">\n        </div>\n\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"addUser(user)\"\n                [disabled]=\"loginForm.form.invalid\">Sign Up</button>\n        </div>\n    </form>\n    <p class=\"text-center\"><a (click)=\"this.route.navigate(['']);\">Log In</a></p>\n\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-service.service */ "./src/app/global-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(globalService, route) {
        this.globalService = globalService;
        this.route = route;
        this.errorMessage = "";
        this.user = {};
        this.userlist = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.errorMessage = "";
    };
    SignupComponent.prototype.addUser = function (user) {
        var _this = this;
        if (user === null || user === undefined) {
            this.errorMessage = "Please fill in the details";
            //this.route.navigate(['signup']);
        }
        else {
            this.globalService.addUser(user).subscribe(function (data) {
                _this.userlist = data;
                if (_this.userlist.length > 0) {
                    _this.route.navigate(['']);
                }
                else {
                    _this.errorMessage = "Username , password and full name are required !";
                    // this.route.navigate(['signup']);
                }
            });
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_global_service_service__WEBPACK_IMPORTED_MODULE_1__["GlobalServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8080/notes/'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Programming Work\AngularJsWorkspace\wander-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map