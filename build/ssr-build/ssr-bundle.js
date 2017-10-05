module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5hP":
/***/ (function(module, exports) {

module.exports = {"header":{"title":"Homepage Generator","subtitle":"Quickly spin up a personal website","background_color":"#663AB7","background_image":"newcastle.jpg","background_images":[{"width":2560,"filename":"newcastle-xlarge.jpg"},{"width":1920,"filename":"newcastle.jpg"},{"width":1600,"filename":"newcastle-large.jpg"},{"width":1280,"filename":"newcastle-medium.jpg"},{"width":960,"filename":"newcastle-small.jpg"},{"width":480,"filename":"newcastle-xsmall.jpg"}]},"profile":{"title":"Profile","background_color":"#FFF","about":{"title":"About me","description":"I love easy to build pages!"},"bio":{"title":"Bio","list":[{"label":"How cool?","value":"Very cool."},{"label":"Where","value":"In the cloud..."}]}},"experience":{"title":"Experience","background_color":"#41564E","list":[{"title":"Education","list":[{"location":"On my computer","time":{"from":"2017","to":"Present"},"title":"Building this","description":"Quickly spun this up in a day for my own personal website"}]},{"title":"What else?","list":[{"location":"Example","time":{"from":"Apr 2011","to":"Apr 2014"},"title":"Something else","description":"Some more stuff."},{"location":"Example","time":{"from":"Apr 2014"},"title":"Something else","description":"Some more stuff."}]}]},"skills":{"title":"Skills","background_color":"#FFF","list":[{"label":"Speed","value":5},{"label":"Simplicity","value":5},{"label":"Elegance","value":5},{"label":"Uniqueness","value":4}]},"contact":{"title":"Any other links?","background_color":"#5DC6DD","list":[{"label":"Live Example","link":"http://thomaswood.me/","icon_class":"globe"},{"label":"GitHub","link":"https://github.com/tomasswood/preact-homepage-generator","icon_class":"github"}]}}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "4eXR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "234e30fcb8d8f3074faf94677f88c158.jpg";

/***/ }),

/***/ "6GSK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unfetch__ = __webpack_require__("QAmr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__("jJeW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__("I3gj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__experience__ = __webpack_require__("XGvW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skills__ = __webpack_require__("rR8P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer__ = __webpack_require__("TqHG");


function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		var _temp, _this, _ret;

		_classCallCheck(this, Home);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			profile: __webpack_require__("+5hP")
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Home.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_unfetch__["a" /* default */])('/profile.json').then(function (response) {
			return response.json();
		}).then(function (profile) {
			return _this2.setState({ profile: profile });
		});
	};

	Home.prototype.render = function render(_ref, _ref2) {
		var profile = _ref2.profile;

		_objectDestructuringEmpty(_ref);

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ itemscope: true, itemprop: 'Person', itemtype: 'https://schema.org/Person' },
			profile.header && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__header__["a" /* default */], profile.header),
			profile.profile && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__profile__["a" /* default */], profile.profile),
			profile.experience && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__experience__["a" /* default */], profile.experience),
			profile.skills && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__skills__["a" /* default */], profile.skills),
			profile.contact && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6__footer__["a" /* default */], profile.contact)
		);
	};

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "ELET":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f07de9feb4b96a94cca030577f550cd5.jpg";

/***/ }),

/***/ "I3gj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "divider" });

var Profile = function (_Component) {
	_inherits(Profile, _Component);

	function Profile() {
		_classCallCheck(this, Profile);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Profile.prototype.render = function render(props) {
		var bioList = [];
		if (props.bio && props.bio.list) {
			var bioLabels = props.bio.list.map(function (item) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"li",
					{ key: item.label },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						"strong",
						null,
						item.label
					)
				);
			}),
			    bioValues = props.bio.list.map(function (item) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"li",
					{ key: item.value },
					item.value
				);
			});

			bioList = bioLabels.reduce(function (list, item, i) {
				list.push(item, bioValues[i]);
				return list;
			}, []);
		}

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			"main",
			{ "class": "main profile", style: { backgroundColor: props.background_color || null } },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"div",
				{ "class": "main-wrapper" },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "main-wrapper-text" },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						"h3",
						null,
						props.title
					)
				),
				_ref,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "summary" },
					props.about && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						"h5",
						null,
						props.about.title
					),
					props.about && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						"p",
						null,
						props.about.description
					)
				),
				bioList.length && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "details" },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						"h5",
						null,
						props.bio.title
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						"ul",
						null,
						bioList
					)
				)
			)
		);
	};

	return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "JBMF":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./newcastle-large.jpg": "TH7f",
	"./newcastle-medium.jpg": "mo1Q",
	"./newcastle-small.jpg": "ELET",
	"./newcastle-xlarge.jpg": "YmqD",
	"./newcastle-xsmall.jpg": "4eXR",
	"./newcastle.jpg": "UCVP"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "JBMF";

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__("yY49");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_app__ = __webpack_require__("qLaj");



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__components_app__["a" /* default */]);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "NfrT":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./newcastle-large.jpg": "TH7f",
	"./newcastle-medium.jpg": "mo1Q",
	"./newcastle-small.jpg": "ELET",
	"./newcastle-xlarge.jpg": "YmqD",
	"./newcastle-xsmall.jpg": "4eXR",
	"./newcastle.jpg": "UCVP"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "NfrT";

/***/ }),

/***/ "QAmr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var index = typeof fetch == 'function' ? fetch.bind() : function (url, options) {
	options = options || {};
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials == 'include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body);

		function response() {
			var _keys = [],
			    all = [],
			    headers = {},
			    header;

			request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function (m, key, value) {
				_keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? header + "," + value : value;
			});

			return {
				ok: (request.status / 200 | 0) == 1, // 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function text() {
					return Promise.resolve(request.responseText);
				},
				json: function json() {
					return Promise.resolve(request.responseText).then(JSON.parse);
				},
				blob: function blob() {
					return Promise.resolve(new Blob([request.response]));
				},
				headers: {
					keys: function keys() {
						return _keys;
					},
					entries: function entries() {
						return all;
					},
					get: function get(n) {
						return headers[n.toLowerCase()];
					},
					has: function has(n) {
						return n.toLowerCase() in headers;
					}
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["a"] = (index);
//# sourceMappingURL=unfetch.es.js.map

/***/ }),

/***/ "TH7f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9e4e1d8d6f4efb1f85bcc338de57704f.jpg";

/***/ }),

/***/ "TqHG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__("nRaQ");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FooterItem = function (_Component) {
	_inherits(FooterItem, _Component);

	function FooterItem() {
		_classCallCheck(this, FooterItem);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	FooterItem.prototype.render = function render(_ref) {
		var label = _ref.label,
		    link = _ref.link,
		    icon_class = _ref.icon_class;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'footer-link' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'a',
				{ href: link, target: '_blank', rel: 'noopener noreferrer' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], { icon: icon_class }),
				' ',
				label
			)
		);
	};

	return FooterItem;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { 'class': 'divider' });

var Footer = function (_Component2) {
	_inherits(Footer, _Component2);

	function Footer() {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
	}

	Footer.prototype.render = function render(props) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'footer',
			{ 'class': 'footer', style: { backgroundColor: props.background_color || null } },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'footer-wrapper' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': 'footer-wrapper-text' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'h3',
						null,
						props.title
					)
				),
				_ref2,
				props.list && props.list.map(function (item) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(FooterItem, item);
				})
			)
		);
	};

	return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "UCVP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cfb572d7700e8995aefaf25a49cbb7d9.jpg";

/***/ }),

/***/ "XGvW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experience; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var formatTime = function formatTime(_ref) {
	var from = _ref.from,
	    to = _ref.to;
	return [from, to].filter(function (val) {
		return val;
	}).join(' - ');
};

var ResumeItem = function (_Component) {
	_inherits(ResumeItem, _Component);

	function ResumeItem() {
		_classCallCheck(this, ResumeItem);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	ResumeItem.prototype.render = function render(_ref2) {
		var location = _ref2.location,
		    time = _ref2.time,
		    title = _ref2.title,
		    description = _ref2.description;

		var timePeriod = formatTime(_extends({}, time));

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'resume-item' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'qualification' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'strong',
					null,
					location
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'p',
					{ 'class': 'time-period' },
					timePeriod
				)
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'summary' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'strong',
					null,
					title
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'p',
					null,
					description
				)
			)
		);
	};

	return ResumeItem;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var ExperienceItem = function (_Component2) {
	_inherits(ExperienceItem, _Component2);

	function ExperienceItem() {
		_classCallCheck(this, ExperienceItem);

		return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
	}

	ExperienceItem.prototype.render = function render(_ref3) {
		var title = _ref3.title,
		    list = _ref3.list;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'resume' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'h5',
				null,
				title
			),
			list && list.map(function (item) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(ResumeItem, item);
			})
		);
	};

	return ExperienceItem;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { 'class': 'divider' });

var Experience = function (_Component3) {
	_inherits(Experience, _Component3);

	function Experience() {
		_classCallCheck(this, Experience);

		return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
	}

	Experience.prototype.render = function render(props) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'experience section', style: { backgroundColor: props.background_color || null } },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'main-wrapper' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': 'main-wrapper-text' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'h3',
						null,
						props.title
					)
				),
				props.list && props.list.map(function (item) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ 'class': 'experience-item' },
						_ref4,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(ExperienceItem, item)
					);
				})
			)
		);
	};

	return Experience;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "YmqD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa1386098b541e95769539f4bdb64bf8.jpg";

/***/ }),

/***/ "jJeW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var requireAll = function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
};

var determineImage = function determineImage(backgroundImage, backgroundImages) {
	var viewport = typeof window !== 'undefined' ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : '1920',
	    ratio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

	var headerImage = __webpack_require__("JBMF")("./" + backgroundImage);
	if (backgroundImages) {
		var imageModules = requireAll(__webpack_require__("NfrT"));
		var imagesSized = backgroundImages.reduce(function (arr, image, i) {
			if (viewport * ratio < image.width) {
				image.filename = imageModules[i];
				arr.push(image);
			}

			return arr;
		}, []);
		if (imagesSized.length) {
			var lastImage = imagesSized.pop();
			if (lastImage && lastImage.filename) {
				headerImage = lastImage.filename;
			}
		}
	}

	if (headerImage) {
		return 'url(' + headerImage + ')';
	}

	return;
};

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.state.background_image = props.background_image || props.background_images ? determineImage(props.background_image, props.background_images) : null;
		return _this;
	}

	Header.prototype.render = function render(props, _ref) {
		var background_image = _ref.background_image;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'header',
			{ 'class': 'header', style: { backgroundColor: props.background_color || null, backgroundImage: background_image } },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'header-wrapper' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': 'header-wrapper-text' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'h1',
						{ 'class': 'title', itemprop: 'name' },
						props.title
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'h2',
						{ 'class': 'subtitle', itemprop: 'jobTitle' },
						props.subtitle
					)
				)
			)
		);
	};

	return Header;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "mo1Q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dde14227fd6e8257f5a31eb7deb2ea3a.jpg";

/***/ }),

/***/ "nRaQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);

var FaIcon = function FaIcon(_ref) {
	var icon = _ref.icon;
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("i", { "class": "fa fa-" + icon, "aria-hidden": "true" });
};

/* harmony default export */ __webpack_exports__["a"] = (FaIcon);

/***/ }),

/***/ "qLaj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__("6GSK");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	'div',
	{ id: 'app' },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* default */], null)
);

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	App.prototype.render = function render() {
		return _ref;
	};

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "rR8P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skills; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__("nRaQ");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], { icon: 'star' });

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */], { icon: 'star-o' });

var SkillItem = function (_Component) {
	_inherits(SkillItem, _Component);

	function SkillItem() {
		_classCallCheck(this, SkillItem);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	SkillItem.prototype.render = function render(_ref) {
		var label = _ref.label,
		    value = _ref.value;

		var starsFull = Array(value).fill().map(function (val) {
			return _ref2;
		}),
		    starsEmpty = Array(5 - value).fill().map(function (val) {
			return _ref3;
		});

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': 'skillset-item' },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'skill-values' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': 'skill-name' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'p',
						null,
						label
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': 'skill-score' },
					starsFull,
					starsEmpty
				)
			)
		);
	};

	return SkillItem;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { 'class': 'divider' });

var Skills = function (_Component2) {
	_inherits(Skills, _Component2);

	function Skills() {
		_classCallCheck(this, Skills);

		return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
	}

	Skills.prototype.render = function render(props) {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'section',
			{ 'class': 'skills section', style: { backgroundColor: props.background_color || null } },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ 'class': 'main-wrapper' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ 'class': 'main-wrapper-text' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'h3',
						null,
						props.title
					)
				),
				_ref4,
				props.list && props.list.map(function (item) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(SkillItem, item);
				})
			)
		);
	};

	return Skills;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map