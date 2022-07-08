! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("babylonjs"), require("babylonjs-gui"), require("babylonjs-loaders"), require("babylonjs-materials"), require("babylonjs-serializers")) : "function" == typeof define && define.amd ? define("babylonjs-inspector", ["babylonjs", "babylonjs-gui", "babylonjs-loaders", "babylonjs-materials", "babylonjs-serializers"], t) : "object" == typeof exports ? exports["babylonjs-inspector"] = t(require("babylonjs"), require("babylonjs-gui"), require("babylonjs-loaders"), require("babylonjs-materials"), require("babylonjs-serializers")) : e.INSPECTOR = t(e.BABYLON, e.BABYLON.GUI, e.BABYLON, e.BABYLON, e.BABYLON)
}("undefined" != typeof self ? self : "undefined" != typeof global ? global : this, function(e, t, n, r, a) {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var a = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var a in e) n.d(r, a, function(t) {
                    return e[t]
                }.bind(null, a));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 17)
    }([function(e, t, n) {
        "use strict";
        e.exports = n(18)
    }, function(t, n) {
        t.exports = e
    }, function(e, t, n) {
        e.exports = n(25)()
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return v
            });
            var r = n(14),
                a = n(2),
                o = n.n(a),
                i = n(0),
                l = n.n(i);

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        p(e, t, n[t])
                    })
                }
                return e
            }

            function u(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            var h = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
            var b = function(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }(function(e) {
                ! function(t) {
                    var n = function(e, t, r) {
                            if (!s(t) || c(t) || u(t) || d(t) || l(t)) return t;
                            var a, o = 0,
                                i = 0;
                            if (p(t))
                                for (a = [], i = t.length; o < i; o++) a.push(n(e, t[o], r));
                            else
                                for (var h in a = {}, t) Object.prototype.hasOwnProperty.call(t, h) && (a[e(h, r)] = n(e, t[h], r));
                            return a
                        },
                        r = function(e) {
                            return h(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
                                return t ? t.toUpperCase() : ""
                            })).substr(0, 1).toLowerCase() + e.substr(1)
                        },
                        a = function(e) {
                            var t = r(e);
                            return t.substr(0, 1).toUpperCase() + t.substr(1)
                        },
                        o = function(e, t) {
                            return function(e, t) {
                                var n = (t = t || {}).separator || "_",
                                    r = t.split || /(?=[A-Z])/;
                                return e.split(r).join(n)
                            }(e, t).toLowerCase()
                        },
                        i = Object.prototype.toString,
                        l = function(e) {
                            return "function" == typeof e
                        },
                        s = function(e) {
                            return e === Object(e)
                        },
                        p = function(e) {
                            return "[object Array]" == i.call(e)
                        },
                        c = function(e) {
                            return "[object Date]" == i.call(e)
                        },
                        u = function(e) {
                            return "[object RegExp]" == i.call(e)
                        },
                        d = function(e) {
                            return "[object Boolean]" == i.call(e)
                        },
                        h = function(e) {
                            return (e -= 0) == e
                        },
                        b = function(e, t) {
                            var n = t && "process" in t ? t.process : t;
                            return "function" != typeof n ? e : function(t, r) {
                                return n(t, e, r)
                            }
                        },
                        m = {
                            camelize: r,
                            decamelize: o,
                            pascalize: a,
                            depascalize: o,
                            camelizeKeys: function(e, t) {
                                return n(b(r, t), e)
                            },
                            decamelizeKeys: function(e, t) {
                                return n(b(o, t), e, t)
                            },
                            pascalizeKeys: function(e, t) {
                                return n(b(a, t), e)
                            },
                            depascalizeKeys: function() {
                                return this.decamelizeKeys.apply(this, arguments)
                            }
                        };
                    e.exports ? e.exports = m : t.humps = m
                }(h)
            });
            var m = !1;
            try {
                m = !0
            } catch (e) {}

            function f(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? p({}, e, t) : {}
            }

            function g(e) {
                return null === e ? null : "object" === s(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" == typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function v(e) {
                var t = e.icon,
                    n = e.mask,
                    a = e.symbol,
                    o = e.className,
                    i = e.title,
                    l = g(t),
                    s = f("classes", [].concat(d(function(e) {
                        var t, n = (p(t = {
                            "fa-spin": e.spin,
                            "fa-pulse": e.pulse,
                            "fa-fw": e.fixedWidth,
                            "fa-inverse": e.inverse,
                            "fa-border": e.border,
                            "fa-li": e.listItem,
                            "fa-flip-horizontal": "horizontal" === e.flip || "both" === e.flip,
                            "fa-flip-vertical": "vertical" === e.flip || "both" === e.flip
                        }, "fa-".concat(e.size), null !== e.size), p(t, "fa-rotate-".concat(e.rotation), null !== e.rotation), p(t, "fa-pull-".concat(e.pull), null !== e.pull), t);
                        return Object.keys(n).map(function(e) {
                            return n[e] ? e : null
                        }).filter(function(e) {
                            return e
                        })
                    }(e)), d(o.split(" ")))),
                    u = f("transform", "string" == typeof e.transform ? r.b.transform(e.transform) : e.transform),
                    h = f("mask", g(n)),
                    b = Object(r.a)(l, c({}, s, u, h, {
                        symbol: a,
                        title: i
                    }));
                if (!b) return function() {
                    var e;
                    !m && console && "function" == typeof console.error && (e = console).error.apply(e, arguments)
                }("Could not find icon", l), null;
                var C = b.abstract,
                    E = {};
                return Object.keys(e).forEach(function(t) {
                    v.defaultProps.hasOwnProperty(t) || (E[t] = e[t])
                }), y(C[0], E)
            }
            v.displayName = "FontAwesomeIcon", v.propTypes = {
                border: o.a.bool,
                className: o.a.string,
                mask: o.a.oneOfType([o.a.object, o.a.array, o.a.string]),
                fixedWidth: o.a.bool,
                inverse: o.a.bool,
                flip: o.a.oneOf(["horizontal", "vertical", "both"]),
                icon: o.a.oneOfType([o.a.object, o.a.array, o.a.string]),
                listItem: o.a.bool,
                pull: o.a.oneOf(["right", "left"]),
                pulse: o.a.bool,
                rotation: o.a.oneOf([90, 180, 270]),
                size: o.a.oneOf(["lg", "xs", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: o.a.bool,
                symbol: o.a.oneOfType([o.a.bool, o.a.string]),
                title: o.a.string,
                transform: o.a.oneOfType([o.a.string, o.a.object])
            }, v.defaultProps = {
                border: !1,
                className: "",
                mask: null,
                fixedWidth: !1,
                inverse: !1,
                flip: null,
                icon: null,
                listItem: !1,
                pull: null,
                pulse: !1,
                rotation: null,
                size: null,
                spin: !1,
                symbol: !1,
                title: "",
                transform: null
            };
            var y = function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof n) return n;
                var a = (n.children || []).map(function(n) {
                        return e(t, n)
                    }),
                    o = Object.keys(n.attributes || {}).reduce(function(e, t) {
                        var r = n.attributes[t];
                        switch (t) {
                            case "class":
                                e.attrs.className = r, delete n.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = r.split(";").map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e
                                }).reduce(function(e, t) {
                                    var n, r = t.indexOf(":"),
                                        a = b.camelize(t.slice(0, r)),
                                        o = t.slice(r + 1).trim();
                                    return a.startsWith("webkit") ? e[(n = a, n.charAt(0).toUpperCase() + n.slice(1))] = o : e[a] = o, e
                                }, {});
                                break;
                            default:
                                0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = r : e.attrs[b.camelize(t)] = r
                        }
                        return e
                    }, {
                        attrs: {}
                    }),
                    i = r.style,
                    l = void 0 === i ? {} : i,
                    s = u(r, ["style"]);
                return o.attrs.style = c({}, o.attrs.style, l), t.apply(void 0, [n.tag, c({}, o.attrs, s)].concat(d(a)))
            }.bind(null, l.a.createElement)
        }).call(this, n(9))
    }, function(e, n) {
        e.exports = t
    }, function(e, t, n) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var r = Object.getOwnPropertySymbols,
            a = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;

        function i(e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function(e, t) {
            for (var n, l, s = i(e), p = 1; p < arguments.length; p++) {
                for (var c in n = Object(arguments[p])) a.call(n, c) && (s[c] = n[c]);
                if (r) {
                    l = r(n);
                    for (var u = 0; u < l.length; u++) o.call(n, l[u]) && (s[l[u]] = n[l[u]])
                }
            }
            return s
        }
    }, function(e, t, n) {
        var r;
        /*!
          Copyright (c) 2017 Jed Watson.
          Licensed under the MIT License (MIT), see
          http://jedwatson.github.io/classnames
        */
        /*!
          Copyright (c) 2017 Jed Watson.
          Licensed under the MIT License (MIT), see
          http://jedwatson.github.io/classnames
        */
        ! function() {
            "use strict";
            var n = {}.hasOwnProperty;

            function a() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                        var o = typeof r;
                        if ("string" === o || "number" === o) e.push(r);
                        else if (Array.isArray(r) && r.length) {
                            var i = a.apply(null, r);
                            i && e.push(i)
                        } else if ("object" === o)
                            for (var l in r) n.call(r, l) && r[l] && e.push(l)
                    }
                }
                return e.join(" ")
            }
            e.exports ? (a.default = a, e.exports = a) : void 0 === (r = function() {
                return a
            }.apply(t, [])) || (e.exports = r)
        }()
    }, function(e, t, n) {
        "use strict";
        ! function e() {
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
        }(), e.exports = n(19)
    }, function(e, t) {
        e.exports = n
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            a = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            },
            s = {
                base: {
                    position: "absolute",
                    userSelect: "none",
                    MsUserSelect: "none"
                },
                top: {
                    width: "100%",
                    height: "10px",
                    top: "-5px",
                    left: "0px",
                    cursor: "row-resize"
                },
                right: {
                    width: "10px",
                    height: "100%",
                    top: "0px",
                    right: "-5px",
                    cursor: "col-resize"
                },
                bottom: {
                    width: "100%",
                    height: "10px",
                    bottom: "-5px",
                    left: "0px",
                    cursor: "row-resize"
                },
                left: {
                    width: "10px",
                    height: "100%",
                    top: "0px",
                    left: "-5px",
                    cursor: "col-resize"
                },
                topRight: {
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    right: "-10px",
                    top: "-10px",
                    cursor: "ne-resize"
                },
                bottomRight: {
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    right: "-10px",
                    bottom: "-10px",
                    cursor: "se-resize"
                },
                bottomLeft: {
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    left: "-10px",
                    bottom: "-10px",
                    cursor: "sw-resize"
                },
                topLeft: {
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    left: "-10px",
                    top: "-10px",
                    cursor: "nw-resize"
                }
            },
            p = function(e) {
                return r.createElement("div", {
                    className: e.className,
                    style: i({}, s.base, s[e.direction], e.replaceStyles || {}),
                    onMouseDown: function(t) {
                        e.onResizeStart(t, e.direction)
                    },
                    onTouchStart: function(t) {
                        e.onResizeStart(t, e.direction)
                    }
                }, e.children)
            },
            c = {
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                MsUserSelect: "none"
            },
            u = {
                userSelect: "auto",
                MozUserSelect: "auto",
                WebkitUserSelect: "auto",
                MsUserSelect: "auto"
            },
            d = function(e, t, n) {
                return Math.max(Math.min(e, n), t)
            },
            h = function(e, t) {
                return Math.round(e / t) * t
            },
            b = function(e, t) {
                return t.reduce(function(t, n) {
                    return Math.abs(n - e) < Math.abs(t - e) ? n : t
                })
            },
            m = function(e, t) {
                return e.substr(e.length - t.length, t.length) === t
            },
            f = function(e) {
                return "auto" === e.toString() ? e.toString() : m(e.toString(), "px") ? e.toString() : m(e.toString(), "%") ? e.toString() : m(e.toString(), "vh") ? e.toString() : m(e.toString(), "vw") ? e.toString() : m(e.toString(), "vmax") ? e.toString() : m(e.toString(), "vmin") ? e.toString() : e + "px"
            },
            g = ["style", "className", "grid", "snap", "bounds", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent"],
            v = function(e) {
                function t(e) {
                    a(this, t);
                    var n = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.state = {
                        isResizing: !1,
                        resizeCursor: "auto",
                        width: void 0 === (n.propsSize && n.propsSize.width) ? "auto" : n.propsSize && n.propsSize.width,
                        height: void 0 === (n.propsSize && n.propsSize.height) ? "auto" : n.propsSize && n.propsSize.height,
                        direction: "right",
                        original: {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }, n.updateExtendsProps(e), n.onResizeStart = n.onResizeStart.bind(n), n.onMouseMove = n.onMouseMove.bind(n), n.onMouseUp = n.onMouseUp.bind(n), "undefined" != typeof window && (window.addEventListener("mouseup", n.onMouseUp), window.addEventListener("mousemove", n.onMouseMove), window.addEventListener("mouseleave", n.onMouseUp), window.addEventListener("touchmove", n.onMouseMove), window.addEventListener("touchend", n.onMouseUp)), n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, r.Component), o(t, [{
                    key: "updateExtendsProps",
                    value: function(e) {
                        this.extendsProps = Object.keys(e).reduce(function(t, n) {
                            return -1 !== g.indexOf(n) ? t : (t[n] = e[n], t)
                        }, {})
                    }
                }, {
                    key: "getParentSize",
                    value: function() {
                        var e = this.base;
                        if (!e) return {
                            width: window.innerWidth,
                            height: window.innerHeight
                        };
                        var t = !1,
                            n = this.parentNode.style.flexWrap,
                            r = e.style.minWidth;
                        "wrap" !== n && (t = !0, this.parentNode.style.flexWrap = "wrap"), e.style.position = "relative", e.style.minWidth = "100%";
                        var a = {
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        };
                        return e.style.position = "absolute", t && (this.parentNode.style.flexWrap = n), e.style.minWidth = r, a
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this.size;
                        this.setState({
                            width: this.state.width || e.width,
                            height: this.state.height || e.height
                        });
                        var t = this.parentNode;
                        if (t instanceof HTMLElement && !this.base) {
                            var n = document.createElement("div");
                            n.style.width = "100%", n.style.height = "100%", n.style.position = "absolute", n.style.transform = "scale(0, 0)", n.style.left = "0", n.style.flex = "0", n.classList ? n.classList.add("__resizable_base__") : n.className += "__resizable_base__", t.appendChild(n)
                        }
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        this.updateExtendsProps(e)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if ("undefined" != typeof window) {
                            window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseleave", this.onMouseUp), window.removeEventListener("touchmove", this.onMouseMove), window.removeEventListener("touchend", this.onMouseUp);
                            var e = this.parentNode,
                                t = this.base;
                            if (!t || !e) return;
                            if (!(e instanceof HTMLElement && t instanceof Node)) return;
                            e.removeChild(t)
                        }
                    }
                }, {
                    key: "calculateNewSize",
                    value: function(e, t) {
                        var n = this.propsSize && this.propsSize[t];
                        return "auto" !== this.state[t] || this.state.original[t] !== e || void 0 !== n && "auto" !== n ? e : "auto"
                    }
                }, {
                    key: "onResizeStart",
                    value: function(e, t) {
                        var n = 0,
                            r = 0;
                        if (e.nativeEvent instanceof MouseEvent) {
                            if (n = e.nativeEvent.clientX, r = e.nativeEvent.clientY, 3 === e.nativeEvent.which) return
                        } else e.nativeEvent instanceof TouchEvent && (n = e.nativeEvent.touches[0].clientX, r = e.nativeEvent.touches[0].clientY);
                        this.props.onResizeStart && this.props.onResizeStart(e, t, this.resizable), this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                            height: this.props.size.height
                        }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                            width: this.props.size.width
                        })), this.setState({
                            original: {
                                x: n,
                                y: r,
                                width: this.size.width,
                                height: this.size.height
                            },
                            isResizing: !0,
                            resizeCursor: window.getComputedStyle(e.target).cursor,
                            direction: t
                        })
                    }
                }, {
                    key: "onMouseMove",
                    value: function(e) {
                        if (this.state.isResizing) {
                            var t = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX,
                                n = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY,
                                r = this.state,
                                a = r.direction,
                                o = r.original,
                                i = r.width,
                                l = r.height,
                                s = this.props,
                                p = s.lockAspectRatio,
                                c = s.lockAspectRatioExtraHeight,
                                u = s.lockAspectRatioExtraWidth,
                                f = this.props,
                                g = f.maxWidth,
                                v = f.maxHeight,
                                y = f.minWidth,
                                C = f.minHeight,
                                E = this.getParentSize();
                            if (g && "string" == typeof g && m(g, "%")) {
                                var O = Number(g.replace("%", "")) / 100;
                                g = E.width * O
                            }
                            if (v && "string" == typeof v && m(v, "%")) {
                                var S = Number(v.replace("%", "")) / 100;
                                v = E.height * S
                            }
                            if (y && "string" == typeof y && m(y, "%")) {
                                var x = Number(y.replace("%", "")) / 100;
                                y = E.width * x
                            }
                            if (C && "string" == typeof C && m(C, "%")) {
                                var P = Number(C.replace("%", "")) / 100;
                                C = E.height * P
                            }
                            g = void 0 === g ? void 0 : Number(g), v = void 0 === v ? void 0 : Number(v), y = void 0 === y ? void 0 : Number(y), C = void 0 === C ? void 0 : Number(C);
                            var k = "number" == typeof p ? p : o.width / o.height,
                                T = o.width,
                                N = o.height;
                            if (/right/i.test(a) && (T = o.width + (t - o.x), p && (N = (T - u) / k + c)), /left/i.test(a) && (T = o.width - (t - o.x), p && (N = (T - u) / k + c)), /bottom/i.test(a) && (N = o.height + (n - o.y), p && (T = (N - c) * k + u)), /top/i.test(a) && (N = o.height - (n - o.y), p && (T = (N - c) * k + u)), "parent" === this.props.bounds) {
                                var w = this.parentNode;
                                if (w instanceof HTMLElement) {
                                    var _ = w.getBoundingClientRect(),
                                        M = _.left,
                                        L = _.top,
                                        R = this.resizable.getBoundingClientRect(),
                                        A = R.left,
                                        I = R.top,
                                        j = w.offsetWidth + (M - A),
                                        D = w.offsetHeight + (L - I);
                                    g = g && g < j ? g : j, v = v && v < D ? v : D
                                }
                            } else if ("window" === this.props.bounds) {
                                if ("undefined" != typeof window) {
                                    var z = this.resizable.getBoundingClientRect(),
                                        F = z.left,
                                        U = z.top,
                                        G = window.innerWidth - F,
                                        H = window.innerHeight - U;
                                    g = g && g < G ? g : G, v = v && v < H ? v : H
                                }
                            } else if (this.props.bounds instanceof HTMLElement) {
                                var V = this.props.bounds.getBoundingClientRect(),
                                    B = V.left,
                                    W = V.top,
                                    Y = this.resizable.getBoundingClientRect(),
                                    X = Y.left,
                                    K = Y.top;
                                if (!(this.props.bounds instanceof HTMLElement)) return;
                                var q = this.props.bounds.offsetWidth + (B - X),
                                    Q = this.props.bounds.offsetHeight + (W - K);
                                g = g && g < q ? g : q, v = v && v < Q ? v : Q
                            }
                            var $ = void 0 === y ? 10 : y,
                                Z = void 0 === g || g < 0 ? T : g,
                                J = void 0 === C ? 10 : C,
                                ee = void 0 === v || v < 0 ? N : v;
                            if (p) {
                                var te = (J - c) * k + u,
                                    ne = (ee - c) * k + u,
                                    re = ($ - u) / k + c,
                                    ae = (Z - u) / k + c,
                                    oe = Math.max($, te),
                                    ie = Math.min(Z, ne),
                                    le = Math.max(J, re),
                                    se = Math.min(ee, ae);
                                T = d(T, oe, ie), N = d(N, le, se)
                            } else T = d(T, $, Z), N = d(N, J, ee);
                            this.props.grid && (T = h(T, this.props.grid[0])), this.props.grid && (N = h(N, this.props.grid[1])), this.props.snap && this.props.snap.x && (T = b(T, this.props.snap.x)), this.props.snap && this.props.snap.y && (N = b(N, this.props.snap.y));
                            var pe = {
                                width: T - o.width,
                                height: N - o.height
                            };
                            if (i && "string" == typeof i && m(i, "%")) T = T / E.width * 100 + "%";
                            if (l && "string" == typeof l && m(l, "%")) N = N / E.height * 100 + "%";
                            this.setState({
                                width: this.calculateNewSize(T, "width"),
                                height: this.calculateNewSize(N, "height")
                            }), this.props.onResize && this.props.onResize(e, a, this.resizable, pe)
                        }
                    }
                }, {
                    key: "onMouseUp",
                    value: function(e) {
                        var t = this.state,
                            n = t.isResizing,
                            r = t.direction,
                            a = t.original;
                        if (n) {
                            var o = {
                                width: this.size.width - a.width,
                                height: this.size.height - a.height
                            };
                            this.props.onResizeStop && this.props.onResizeStop(e, r, this.resizable, o), this.props.size && this.setState(this.props.size), this.setState({
                                isResizing: !1,
                                resizeCursor: "auto"
                            })
                        }
                    }
                }, {
                    key: "updateSize",
                    value: function(e) {
                        this.setState({
                            width: e.width,
                            height: e.height
                        })
                    }
                }, {
                    key: "renderResizer",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.enable,
                            a = t.handleStyles,
                            o = t.handleClasses,
                            i = t.handleWrapperStyle,
                            l = t.handleWrapperClass,
                            s = t.handleComponent;
                        if (!n) return null;
                        var c = Object.keys(n).map(function(t) {
                            return !1 !== n[t] ? r.createElement(p, {
                                key: t,
                                direction: t,
                                onResizeStart: e.onResizeStart,
                                replaceStyles: a && a[t],
                                className: o && o[t]
                            }, s && s[t] ? r.createElement(s[t]) : null) : null
                        });
                        return r.createElement("span", {
                            className: l,
                            style: i
                        }, c)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state.isResizing ? c : u;
                        return r.createElement("div", i({
                            ref: function(t) {
                                t && (e.resizable = t)
                            },
                            style: i({
                                position: "relative"
                            }, t, this.props.style, this.sizeStyle, {
                                maxWidth: this.props.maxWidth,
                                maxHeight: this.props.maxHeight,
                                minWidth: this.props.minWidth,
                                minHeight: this.props.minHeight,
                                boxSizing: "border-box"
                            }),
                            className: this.props.className
                        }, this.extendsProps), this.state.isResizing && r.createElement("div", {
                            style: {
                                height: "100%",
                                width: "100%",
                                backgroundColor: "rgba(0,0,0,0)",
                                cursor: "" + (this.state.resizeCursor || "auto"),
                                opacity: "0",
                                position: "fixed",
                                zIndex: "9999",
                                top: "0",
                                left: "0",
                                bottom: "0",
                                right: "0"
                            }
                        }), this.props.children, this.renderResizer())
                    }
                }, {
                    key: "parentNode",
                    get: function() {
                        return this.resizable.parentNode
                    }
                }, {
                    key: "propsSize",
                    get: function() {
                        return this.props.size || this.props.defaultSize
                    }
                }, {
                    key: "base",
                    get: function() {
                        var e = this.parentNode;
                        if (e)
                            for (var t = [].slice.call(e.children), n = 0; n < t.length; n += 1) {
                                var r = t[n];
                                if (r instanceof HTMLElement && r.classList.contains("__resizable_base__")) return r
                            }
                    }
                }, {
                    key: "size",
                    get: function() {
                        var e = 0,
                            t = 0;
                        if ("undefined" != typeof window) {
                            var n = this.resizable.offsetWidth,
                                r = this.resizable.offsetHeight,
                                a = this.resizable.style.position;
                            "relative" !== a && (this.resizable.style.position = "relative"), e = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : n, t = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : r, this.resizable.style.position = a
                        }
                        return {
                            width: e,
                            height: t
                        }
                    }
                }, {
                    key: "sizeStyle",
                    get: function() {
                        var e = this,
                            t = this.props.size,
                            n = function(t) {
                                if (void 0 === e.state[t] || "auto" === e.state[t]) return "auto";
                                if (e.propsSize && e.propsSize[t] && m(e.propsSize[t].toString(), "%")) {
                                    if (m(e.state[t].toString(), "%")) return e.state[t].toString();
                                    var n = e.getParentSize();
                                    return Number(e.state[t].toString().replace("px", "")) / n[t] * 100 + "%"
                                }
                                return f(e.state[t])
                            };
                        return {
                            width: t && void 0 !== t.width && !this.state.isResizing ? f(t.width) : n("width"),
                            height: t && void 0 !== t.height && !this.state.isResizing ? f(t.height) : n("height")
                        }
                    }
                }]), t
            }();
        v.defaultProps = {
            onResizeStart: function() {},
            onResize: function() {},
            onResizeStop: function() {},
            enable: {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0,
                topRight: !0,
                bottomRight: !0,
                bottomLeft: !0,
                topLeft: !0
            },
            style: {},
            grid: [1, 1],
            lockAspectRatio: !1,
            lockAspectRatioExtraWidth: 0,
            lockAspectRatioExtraHeight: 0
        }, e.exports = v
    }, function(e, t, n) {
        "use strict";
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        };

        function a(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var o = function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }).apply(this, arguments)
        };
        var i, l = n(0),
            s = n.n(l),
            p = n(7),
            c = n(1),
            u = n(3),
            d = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.onSelect = function(e) {
                    this.props.onSelectedIndexChange(e)
                }, t.prototype.renderLabel = function(e, t) {
                    var n = this,
                        r = this.props.selectedIndex === t ? "label active" : "label";
                    return l.createElement("div", {
                        className: r,
                        key: t,
                        onClick: function() {
                            return n.onSelect(t)
                        },
                        title: e.props.title
                    }, l.createElement("div", null, l.createElement(u.a, {
                        icon: e.props.icon
                    })))
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "tabs",
                        onContextMenu: function(e) {
                            return e.preventDefault()
                        }
                    }, l.createElement("div", {
                        className: "labels"
                    }, this.props.children.map(function(t, n) {
                        return e.renderLabel(t, n)
                    })), l.createElement("div", {
                        className: "panes"
                    }, this.props.children[this.props.selectedIndex]))
                }, t
            }(l.Component),
            h = {
                prefix: "fas",
                iconName: "arrow-left",
                icon: [448, 512, [], "f060", "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"]
            },
            b = {
                prefix: "fas",
                iconName: "arrows-alt",
                icon: [512, 512, [], "f0b2", "M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"]
            },
            m = {
                prefix: "fas",
                iconName: "ban",
                icon: [512, 512, [], "f05e", "M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"]
            },
            f = {
                prefix: "fas",
                iconName: "bone",
                icon: [640, 512, [], "f5d7", "M598.88 244.56c25.2-12.6 41.12-38.36 41.12-66.53v-7.64C640 129.3 606.7 96 565.61 96c-32.02 0-60.44 20.49-70.57 50.86-7.68 23.03-11.6 45.14-38.11 45.14H183.06c-27.38 0-31.58-25.54-38.11-45.14C134.83 116.49 106.4 96 74.39 96 33.3 96 0 129.3 0 170.39v7.64c0 28.17 15.92 53.93 41.12 66.53 9.43 4.71 9.43 18.17 0 22.88C15.92 280.04 0 305.8 0 333.97v7.64C0 382.7 33.3 416 74.38 416c32.02 0 60.44-20.49 70.57-50.86 7.68-23.03 11.6-45.14 38.11-45.14h273.87c27.38 0 31.58 25.54 38.11 45.14C505.17 395.51 533.6 416 565.61 416c41.08 0 74.38-33.3 74.38-74.39v-7.64c0-28.18-15.92-53.93-41.12-66.53-9.42-4.71-9.42-18.17.01-22.88z"]
            },
            g = {
                prefix: "fas",
                iconName: "brush",
                icon: [384, 512, [], "f55d", "M352 0H32C14.33 0 0 14.33 0 32v224h384V32c0-17.67-14.33-32-32-32zM0 320c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64v-32H0v32zm192 104c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24z"]
            },
            v = {
                prefix: "fas",
                iconName: "bug",
                icon: [512, 512, [], "f188", "M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"]
            },
            y = {
                prefix: "fas",
                iconName: "camera",
                icon: [512, 512, [], "f030", "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"]
            },
            C = {
                prefix: "fas",
                iconName: "chart-bar",
                icon: [512, 512, [], "f080", "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"]
            },
            E = {
                prefix: "fas",
                iconName: "check",
                icon: [512, 512, [], "f00c", "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]
            },
            O = {
                prefix: "fas",
                iconName: "chevron-down",
                icon: [448, 512, [], "f078", "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"]
            },
            S = {
                prefix: "fas",
                iconName: "code-branch",
                icon: [384, 512, [], "f126", "M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"]
            },
            x = {
                prefix: "fas",
                iconName: "cog",
                icon: [512, 512, [], "f013", "M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"]
            },
            P = {
                prefix: "fas",
                iconName: "compress",
                icon: [448, 512, [], "f066", "M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"]
            },
            k = {
                prefix: "fas",
                iconName: "copy",
                icon: [448, 512, [], "f0c5", "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"]
            },
            T = {
                prefix: "fas",
                iconName: "crosshairs",
                icon: [512, 512, [], "f05b", "M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z"]
            },
            N = {
                prefix: "fas",
                iconName: "cube",
                icon: [512, 512, [], "f1b2", "M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"]
            },
            w = {
                prefix: "fas",
                iconName: "ellipsis-h",
                icon: [512, 512, [], "f141", "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"]
            },
            _ = {
                prefix: "fas",
                iconName: "expand-arrows-alt",
                icon: [448, 512, [], "f31e", "M448.1 344v112c0 13.3-10.7 24-24 24h-112c-21.4 0-32.1-25.9-17-41l36.2-36.2L224 295.6 116.8 402.9 153 439c15.1 15.1 4.4 41-17 41H24c-13.3 0-24-10.7-24-24V344c0-21.4 25.9-32.1 41-17l36.2 36.2L184.5 256 77.2 148.7 41 185c-15.1 15.1-41 4.4-41-17V56c0-13.3 10.7-24 24-24h112c21.4 0 32.1 25.9 17 41l-36.2 36.2L224 216.4l107.3-107.3L295.1 73c-15.1-15.1-4.4-41 17-41h112c13.3 0 24 10.7 24 24v112c0 21.4-25.9 32.1-41 17l-36.2-36.2L263.6 256l107.3 107.3 36.2-36.2c15.1-15.2 41-4.5 41 16.9z"]
            },
            M = {
                prefix: "fas",
                iconName: "eye",
                icon: [576, 512, [], "f06e", "M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"]
            },
            L = {
                prefix: "fas",
                iconName: "eye-slash",
                icon: [576, 512, [], "f070", "M286.693 391.984l32.579 46.542A333.958 333.958 0 0 1 288 440C168.19 440 63.031 376.051 6.646 280.369a47.999 47.999 0 0 1 0-48.739c24.023-40.766 56.913-75.775 96.024-102.537l57.077 81.539C154.736 224.82 152 240.087 152 256c0 74.736 60.135 135.282 134.693 135.984zm282.661-111.615c-31.667 53.737-78.747 97.46-135.175 125.475l.011.015 41.47 59.2c7.6 10.86 4.96 25.82-5.9 33.42l-13.11 9.18c-10.86 7.6-25.82 4.96-33.42-5.9L100.34 46.94c-7.6-10.86-4.96-25.82 5.9-33.42l13.11-9.18c10.86-7.6 25.82-4.96 33.42 5.9l51.038 72.617C230.68 75.776 258.905 72 288 72c119.81 0 224.969 63.949 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM424 256c0-75.174-60.838-136-136-136-17.939 0-35.056 3.473-50.729 9.772l19.299 27.058c25.869-8.171 55.044-6.163 80.4 7.41h-.03c-23.65 0-42.82 19.17-42.82 42.82 0 23.626 19.147 42.82 42.82 42.82 23.65 0 42.82-19.17 42.82-42.82v-.03c18.462 34.49 16.312 77.914-8.25 110.95v.01l19.314 27.061C411.496 321.2 424 290.074 424 256zM262.014 356.727l-77.53-110.757c-5.014 52.387 29.314 98.354 77.53 110.757z"]
            },
            R = {
                prefix: "fas",
                iconName: "file-alt",
                icon: [384, 512, [], "f15c", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]
            },
            A = {
                prefix: "fas",
                iconName: "film",
                icon: [512, 512, [], "f008", "M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"]
            },
            I = {
                prefix: "fas",
                iconName: "highlighter",
                icon: [544, 512, [], "f591", "M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"]
            },
            j = {
                prefix: "fas",
                iconName: "image",
                icon: [512, 512, [], "f03e", "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"]
            },
            D = {
                prefix: "fas",
                iconName: "lightbulb",
                icon: [352, 512, [], "f0eb", "M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"]
            },
            z = {
                prefix: "fas",
                iconName: "magic",
                icon: [512, 512, [], "f0d0", "M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"]
            },
            F = {
                prefix: "fas",
                iconName: "minus",
                icon: [448, 512, [], "f068", "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]
            },
            U = {
                prefix: "fas",
                iconName: "object-group",
                icon: [512, 512, [], "f247", "M480 128V96h20c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v20H64V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v40c0 6.627 5.373 12 12 12h20v320H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-20h384v20c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V128zM96 276V140c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v136c0 6.627-5.373 12-12 12H108c-6.627 0-12-5.373-12-12zm320 96c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12v-52h72c13.255 0 24-10.745 24-24v-72h84c6.627 0 12 5.373 12 12v136z"]
            },
            G = {
                prefix: "fas",
                iconName: "plus",
                icon: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]
            },
            H = {
                prefix: "fas",
                iconName: "project-diagram",
                icon: [640, 512, [], "f542", "M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"]
            },
            V = {
                prefix: "fas",
                iconName: "redo-alt",
                icon: [512, 512, [], "f2f9", "M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"]
            },
            B = {
                prefix: "fas",
                iconName: "skull",
                icon: [512, 512, [], "f54c", "M256 0C114.6 0 0 100.3 0 224c0 70.1 36.9 132.6 94.5 173.7 9.6 6.9 15.2 18.1 13.5 29.9l-9.4 66.2c-1.4 9.6 6 18.2 15.7 18.2H192v-56c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v56h64v-56c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v56h77.7c9.7 0 17.1-8.6 15.7-18.2l-9.4-66.2c-1.7-11.7 3.8-23 13.5-29.9C475.1 356.6 512 294.1 512 224 512 100.3 397.4 0 256 0zm-96 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm192 0c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"]
            },
            W = {
                prefix: "fas",
                iconName: "sync-alt",
                icon: [512, 512, [], "f2f1", "M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"]
            },
            Y = {
                prefix: "fas",
                iconName: "times",
                icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
            },
            X = {
                prefix: "fas",
                iconName: "times-circle",
                icon: [512, 512, [], "f057", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"]
            },
            K = {
                prefix: "fas",
                iconName: "vector-square",
                icon: [512, 512, [], "f5cb", "M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z"]
            },
            q = {
                prefix: "fas",
                iconName: "video",
                icon: [576, 512, [], "f03d", "M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"]
            },
            Q = {
                prefix: "fas",
                iconName: "window-restore",
                icon: [512, 512, [], "f2d2", "M512 48v288c0 26.5-21.5 48-48 48h-48V176c0-44.1-35.9-80-80-80H128V48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48zM384 176v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48zm-68 28c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v52h252v-52z"]
            },
            $ = {
                prefix: "fas",
                iconName: "wrench",
                icon: [512, 512, [], "f0ad", "M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"]
            },
            Z = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    return l.createElement("div", {
                        className: "pane"
                    })
                }, t
            }(l.Component),
            J = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.onLink = function() {
                    this.props.onLink && this.props.onLink()
                }, t.prototype.renderContent = function() {
                    var e = this;
                    return this.props.onLink ? l.createElement("div", {
                        className: "link-value",
                        title: this.props.value,
                        onClick: function() {
                            return e.onLink()
                        }
                    }, this.props.value || "no name") : l.createElement("div", {
                        className: "value",
                        title: this.props.value,
                        style: {
                            color: this.props.color ? this.props.color : ""
                        }
                    }, this.props.value || "no name")
                }, t.prototype.render = function() {
                    return l.createElement("div", {
                        className: this.props.underline ? "textLine underline" : "textLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), this.renderContent())
                }, t
            }(l.Component),
            ee = function(e) {
                function t(n) {
                    var r, a = e.call(this, n) || this;
                    try {
                        r = t._InMemoryStorage && void 0 !== t._InMemoryStorage[a.props.title] ? t._InMemoryStorage[a.props.title] : "undefined" != typeof Storage && null !== localStorage.getItem(a.props.title) ? "true" === localStorage.getItem(a.props.title) : !a.props.closed
                    } catch (e) {
                        t._InMemoryStorage = {}, t._InMemoryStorage[a.props.title] = !a.props.closed, r = !a.props.closed
                    }
                    return a.state = {
                        isExpanded: r,
                        isHighlighted: !1
                    }, a
                }
                return a(t, e), t.prototype.switchExpandedState = function() {
                    var e = !this.state.isExpanded;
                    try {
                        t._InMemoryStorage ? t._InMemoryStorage[this.props.title] = e : "undefined" != typeof Storage && localStorage.setItem(this.props.title, e ? "true" : "false")
                    } catch (n) {
                        t._InMemoryStorage = {}, t._InMemoryStorage[this.props.title] = e
                    }
                    this.setState({
                        isExpanded: e
                    })
                }, t.prototype.componentDidMount = function() {
                    var e = this;
                    this.props.globalState && !this.props.globalState.selectedLineContainerTitle || (this.props.globalState && this.props.globalState.selectedLineContainerTitle === this.props.title ? (setTimeout(function() {
                        e.props.globalState.selectedLineContainerTitle = ""
                    }), this.setState({
                        isExpanded: !0,
                        isHighlighted: !0
                    }), window.setTimeout(function() {
                        e.setState({
                            isHighlighted: !1
                        })
                    }, 5e3)) : this.setState({
                        isExpanded: !1
                    }))
                }, t.prototype.renderHeader = function() {
                    var e = this,
                        t = this.state.isExpanded ? "collapse" : "collapse closed";
                    return l.createElement("div", {
                        className: "header",
                        onClick: function() {
                            return e.switchExpandedState()
                        }
                    }, l.createElement("div", {
                        className: "title"
                    }, this.props.title), l.createElement("div", {
                        className: t
                    }, l.createElement(u.a, {
                        icon: O
                    })))
                }, t.prototype.render = function() {
                    return this.state.isExpanded ? l.createElement("div", {
                        className: "paneContainer"
                    }, l.createElement("div", {
                        className: "paneContainer-content"
                    }, this.renderHeader(), l.createElement("div", {
                        className: "paneList"
                    }, this.props.children)), l.createElement("div", {
                        className: "paneContainer-highlight-border" + (this.state.isHighlighted ? "" : " transparent")
                    })) : l.createElement("div", {
                        className: "paneContainer"
                    }, l.createElement("div", {
                        className: "paneContainer-content"
                    }, this.renderHeader()))
                }, t
            }(l.Component),
            te = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = void 0 !== this.props.fractionDigits ? this.props.fractionDigits : 2,
                        t = this.props.value.toFixed(e) + (this.props.units ? " " + this.props.units : "");
                    return l.createElement("div", {
                        className: "textLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "value",
                        style: {
                            color: this.props.color ? this.props.color : ""
                        }
                    }, t))
                }, t
            }(l.Component),
            ne = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.value ? l.createElement(u.a, {
                            icon: E
                        }) : l.createElement(u.a, {
                            icon: X
                        }),
                        t = this.props.value ? "value check" : "value uncheck";
                    return l.createElement("div", {
                        className: "textLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: t
                    }, e))
                }, t
            }(l.Component),
            re = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    var e = this,
                        t = this.props.scene;
                    t && (this._sceneInstrumentation = new c.SceneInstrumentation(t), this._sceneInstrumentation.captureActiveMeshesEvaluationTime = !0, this._sceneInstrumentation.captureRenderTargetsRenderTime = !0, this._sceneInstrumentation.captureFrameTime = !0, this._sceneInstrumentation.captureRenderTime = !0, this._sceneInstrumentation.captureInterFrameTime = !0, this._sceneInstrumentation.captureParticlesRenderTime = !0, this._sceneInstrumentation.captureSpritesRenderTime = !0, this._sceneInstrumentation.capturePhysicsTime = !0, this._sceneInstrumentation.captureAnimationsTime = !0, this._engineInstrumentation = new c.EngineInstrumentation(t.getEngine()), this._engineInstrumentation.captureGPUFrameTime = !0, this._timerIntervalId = window.setInterval(function() {
                        return e.forceUpdate()
                    }, 500))
                }, t.prototype.componentWillUnmount = function() {
                    this._sceneInstrumentation && (this._sceneInstrumentation.dispose(), this._sceneInstrumentation = null), this._engineInstrumentation && (this._engineInstrumentation.dispose(), this._engineInstrumentation = null), window.clearInterval(this._timerIntervalId)
                }, t.prototype.render = function() {
                    var e = this.props.scene;
                    if (!e || !this._sceneInstrumentation || !this._engineInstrumentation) return null;
                    var t = e.getEngine(),
                        n = this._sceneInstrumentation,
                        r = this._engineInstrumentation,
                        a = t.getCaps();
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(J, {
                        label: "Version",
                        value: c.Engine.Version,
                        color: "rgb(113, 159, 255)"
                    }), l.createElement(te, {
                        label: "FPS",
                        value: t.getFps(),
                        fractionDigits: 0
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "COUNT"
                    }, l.createElement(J, {
                        label: "Total meshes",
                        value: e.meshes.length.toString()
                    }), l.createElement(J, {
                        label: "Active meshes",
                        value: e.getActiveMeshes().length.toString()
                    }), l.createElement(J, {
                        label: "Active indices",
                        value: e.getActiveIndices().toString()
                    }), l.createElement(J, {
                        label: "Active faces",
                        value: (e.getActiveIndices() / 3).toString()
                    }), l.createElement(J, {
                        label: "Active bones",
                        value: e.getActiveBones().toString()
                    }), l.createElement(J, {
                        label: "Active particles",
                        value: e.getActiveParticles().toString()
                    }), l.createElement(J, {
                        label: "Draw calls",
                        value: n.drawCallsCounter.current.toString()
                    }), l.createElement(J, {
                        label: "Total lights",
                        value: e.lights.length.toString()
                    }), l.createElement(J, {
                        label: "Total vertices",
                        value: e.getTotalVertices().toString()
                    }), l.createElement(J, {
                        label: "Total materials",
                        value: e.materials.length.toString()
                    }), l.createElement(J, {
                        label: "Total textures",
                        value: e.textures.length.toString()
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "FRAME STEPS DURATION"
                    }, l.createElement(te, {
                        label: "Absolute FPS",
                        value: 1e3 / this._sceneInstrumentation.frameTimeCounter.current,
                        fractionDigits: 0
                    }), l.createElement(te, {
                        label: "Meshes selection",
                        value: n.activeMeshesEvaluationTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "Render targets",
                        value: n.renderTargetsRenderTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "Particles",
                        value: n.particlesRenderTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "Sprites",
                        value: n.spritesRenderTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "Animations",
                        value: n.animationsTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "Physics",
                        value: n.physicsTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "Render",
                        value: n.renderTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "Frame total",
                        value: n.frameTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "Inter-frame",
                        value: n.interFrameTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "GPU Frame time",
                        value: 1e-6 * r.gpuFrameTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "GPU Frame time (average)",
                        value: 1e-6 * r.gpuFrameTimeCounter.average,
                        units: "ms"
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SYSTEM INFO"
                    }, l.createElement(J, {
                        label: "Resolution",
                        value: t.getRenderWidth() + "x" + t.getRenderHeight()
                    }), l.createElement(J, {
                        label: "WebGL version",
                        value: t.webGLVersion.toString()
                    }), l.createElement(ne, {
                        label: "Std derivatives",
                        value: a.standardDerivatives
                    }), l.createElement(ne, {
                        label: "Compressed textures",
                        value: void 0 !== a.s3tc
                    }), l.createElement(ne, {
                        label: "Hardware instances",
                        value: a.instancedArrays
                    }), l.createElement(ne, {
                        label: "Texture float",
                        value: a.textureFloat
                    }), l.createElement(ne, {
                        label: "Texture half-float",
                        value: a.textureHalfFloat
                    }), l.createElement(ne, {
                        label: "Render to texture float",
                        value: a.textureFloatRender
                    }), l.createElement(ne, {
                        label: "Render to texture half-float",
                        value: a.textureHalfFloatRender
                    }), l.createElement(ne, {
                        label: "32bits indices",
                        value: a.uintIndices
                    }), l.createElement(ne, {
                        label: "Fragment depth",
                        value: a.fragmentDepthSupported
                    }), l.createElement(ne, {
                        label: "High precision shaders",
                        value: a.highPrecisionShaderSupported
                    }), l.createElement(ne, {
                        label: "Draw buffers",
                        value: a.drawBuffersExtension
                    }), l.createElement(ne, {
                        label: "Vertex array object",
                        value: a.vertexArrayObject
                    }), l.createElement(ne, {
                        label: "Timer query",
                        value: void 0 !== a.timerQuery
                    }), l.createElement(ne, {
                        label: "Stencil",
                        value: t.isStencilEnable
                    }), l.createElement(ne, {
                        label: "Parallel shader compilation",
                        value: null != a.parallelShaderCompile
                    }), l.createElement(te, {
                        label: "Max textures units",
                        value: a.maxTexturesImageUnits,
                        fractionDigits: 0
                    }), l.createElement(te, {
                        label: "Max textures size",
                        value: a.maxTextureSize,
                        fractionDigits: 0
                    }), l.createElement(te, {
                        label: "Max anisotropy",
                        value: a.maxAnisotropy,
                        fractionDigits: 0
                    }), l.createElement(J, {
                        label: "Driver",
                        value: t.getGlInfo().renderer
                    })))
                }, t
            }(Z),
            ae = function(e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return r._localChange = !1, r._uniqueId = t._UniqueIdSeed++, r.props.isSelected ? r.state = {
                        isSelected: r.props.isSelected()
                    } : r.state = {
                        isSelected: !0 === r.props.target[r.props.propertyName]
                    }, r
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    var n;
                    return !((n = this.props.isSelected ? e.isSelected() : !0 === e.target[e.propertyName]) === t.isSelected && !this._localChange) && (t.isSelected = n, this._localChange = !1, !0)
                }, t.prototype.onChange = function() {
                    this._localChange = !0, this.props.onSelect ? this.props.onSelect(!this.state.isSelected) : (this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: !this.state.isSelected,
                        initialValue: this.state.isSelected
                    }), this.props.target[this.props.propertyName] = !this.state.isSelected), this.props.onValueChanged && this.props.onValueChanged(), this.setState({
                        isSelected: !this.state.isSelected
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "checkBoxLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "checkBox"
                    }, l.createElement("input", {
                        type: "checkbox",
                        id: "checkbox" + this._uniqueId,
                        className: "cbx hidden",
                        checked: this.state.isSelected,
                        onChange: function() {
                            return e.onChange()
                        }
                    }), l.createElement("label", {
                        htmlFor: "checkbox" + this._uniqueId,
                        className: "lbl"
                    })))
                }, t._UniqueIdSeed = 0, t
            }(l.Component),
            oe = n(15),
            ie = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isEnabled: !1
                    }, n
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    for (var e = 0, t = c.UtilityLayerRenderer.DefaultKeepDepthUtilityLayer.utilityLayerScene.meshes; e < t.length; e++) {
                        var n = t[e];
                        if (n.reservedDataStore && n.reservedDataStore.isInspectorGrid) return this._gridMesh = n, void this.setState({
                            isEnabled: !0
                        })
                    }
                }, t.prototype.addOrRemoveGrid = function() {
                    var e = c.UtilityLayerRenderer.DefaultKeepDepthUtilityLayer.utilityLayerScene;
                    if (!this._gridMesh) {
                        var t = this.props.scene.getWorldExtends(),
                            n = 5 * (t.max.x - t.min.x),
                            r = 5 * (t.max.z - t.min.z);
                        this._gridMesh = c.Mesh.CreateGround("grid", 1, 1, 1, e), this._gridMesh.reservedDataStore || (this._gridMesh.reservedDataStore = {}), this._gridMesh.scaling.x = Math.max(n, r), this._gridMesh.scaling.z = this._gridMesh.scaling.x, this._gridMesh.reservedDataStore.isInspectorGrid = !0, this._gridMesh.isPickable = !1;
                        var a = new oe.GridMaterial("GridMaterial", e);
                        return a.majorUnitFrequency = 10, a.minorUnitVisibility = .3, a.gridRatio = .01, a.backFaceCulling = !1, a.mainColor = new c.Color3(1, 1, 1), a.lineColor = new c.Color3(1, 1, 1), a.opacity = .8, a.zOffset = 1, a.opacityTexture = new c.Texture("https://assets.babylonjs.com/environments/backgroundGround.png", e), this._gridMesh.material = a, void this.setState({
                            isEnabled: !0
                        })
                    }
                    this.setState({
                        isEnabled: !this.state.isEnabled
                    }), this._gridMesh.dispose(!0, !0), this._gridMesh = null
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", null, l.createElement(ae, {
                        label: "Render grid",
                        isSelected: function() {
                            return e.state.isEnabled
                        },
                        onSelect: function() {
                            return e.addOrRemoveGrid()
                        }
                    }))
                }, t
            }(l.Component),
            le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._physicsViewersEnabled = !1, n
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    var e = this.props.scene;
                    e && (e.reservedDataStore || (e.reservedDataStore = {}), this._physicsViewersEnabled = null != e.reservedDataStore.physicsViewer)
                }, t.prototype.componentWillUnmount = function() {}, t.prototype.switchPhysicsViewers = function() {
                    this._physicsViewersEnabled = !this._physicsViewersEnabled;
                    var e = this.props.scene;
                    if (this._physicsViewersEnabled) {
                        var t = new c.PhysicsViewer(e);
                        e.reservedDataStore.physicsViewer = t;
                        for (var n = 0, r = e.meshes; n < r.length; n++) {
                            var a = r[n];
                            if (a.physicsImpostor) {
                                var o = t.showImpostor(a.physicsImpostor, a);
                                o && (o.reservedDataStore = {
                                    hidden: !0
                                }, o.material.reservedDataStore = {
                                    hidden: !0
                                })
                            }
                        }
                    } else e.reservedDataStore.physicsViewer.dispose(), e.reservedDataStore.physicsViewer = null
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.scene;
                    return t ? l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "HELPERS"
                    }, l.createElement(ie, {
                        globalState: this.props.globalState,
                        scene: t
                    }), l.createElement(ae, {
                        label: "Physics",
                        isSelected: function() {
                            return e._physicsViewersEnabled
                        },
                        onSelect: function() {
                            return e.switchPhysicsViewers()
                        }
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TEXTURE CHANNELS"
                    }, l.createElement(ae, {
                        label: "Diffuse",
                        isSelected: function() {
                            return c.StandardMaterial.DiffuseTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.DiffuseTextureEnabled = !c.StandardMaterial.DiffuseTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Ambient",
                        isSelected: function() {
                            return c.StandardMaterial.AmbientTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.AmbientTextureEnabled = !c.StandardMaterial.AmbientTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Specular",
                        isSelected: function() {
                            return c.StandardMaterial.SpecularTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.SpecularTextureEnabled = !c.StandardMaterial.SpecularTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Emissive",
                        isSelected: function() {
                            return c.StandardMaterial.EmissiveTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.EmissiveTextureEnabled = !c.StandardMaterial.EmissiveTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Bump",
                        isSelected: function() {
                            return c.StandardMaterial.BumpTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.BumpTextureEnabled = !c.StandardMaterial.BumpTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Opacity",
                        isSelected: function() {
                            return c.StandardMaterial.OpacityTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.OpacityTextureEnabled = !c.StandardMaterial.OpacityTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Reflection",
                        isSelected: function() {
                            return c.StandardMaterial.ReflectionTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.ReflectionTextureEnabled = !c.StandardMaterial.ReflectionTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Refraction",
                        isSelected: function() {
                            return c.StandardMaterial.RefractionTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.RefractionTextureEnabled = !c.StandardMaterial.RefractionTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "ColorGrading",
                        isSelected: function() {
                            return c.StandardMaterial.ColorGradingTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.ColorGradingTextureEnabled = !c.StandardMaterial.ColorGradingTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Lightmap",
                        isSelected: function() {
                            return c.StandardMaterial.LightmapTextureEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.LightmapTextureEnabled = !c.StandardMaterial.LightmapTextureEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Fresnel",
                        isSelected: function() {
                            return c.StandardMaterial.FresnelEnabled
                        },
                        onSelect: function() {
                            return c.StandardMaterial.FresnelEnabled = !c.StandardMaterial.FresnelEnabled
                        }
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "FEATURES"
                    }, l.createElement(ae, {
                        label: "Animations",
                        isSelected: function() {
                            return t.animationsEnabled
                        },
                        onSelect: function() {
                            return t.animationsEnabled = !t.animationsEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Collisions",
                        isSelected: function() {
                            return t.collisionsEnabled
                        },
                        onSelect: function() {
                            return t.collisionsEnabled = !t.collisionsEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Fog",
                        isSelected: function() {
                            return t.fogEnabled
                        },
                        onSelect: function() {
                            return t.fogEnabled = !t.fogEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Lens flares",
                        isSelected: function() {
                            return t.lensFlaresEnabled
                        },
                        onSelect: function() {
                            return t.lensFlaresEnabled = !t.lensFlaresEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Lights",
                        isSelected: function() {
                            return t.lightsEnabled
                        },
                        onSelect: function() {
                            return t.lightsEnabled = !t.lightsEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Particles",
                        isSelected: function() {
                            return t.particlesEnabled
                        },
                        onSelect: function() {
                            return t.particlesEnabled = !t.particlesEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Post-processes",
                        isSelected: function() {
                            return t.postProcessesEnabled
                        },
                        onSelect: function() {
                            return t.postProcessesEnabled = !t.postProcessesEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Probes",
                        isSelected: function() {
                            return t.probesEnabled
                        },
                        onSelect: function() {
                            return t.probesEnabled = !t.probesEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Textures",
                        isSelected: function() {
                            return t.texturesEnabled
                        },
                        onSelect: function() {
                            return t.texturesEnabled = !t.texturesEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Procedural textures",
                        isSelected: function() {
                            return t.proceduralTexturesEnabled
                        },
                        onSelect: function() {
                            return t.proceduralTexturesEnabled = !t.proceduralTexturesEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Render targets",
                        isSelected: function() {
                            return t.renderTargetsEnabled
                        },
                        onSelect: function() {
                            return t.renderTargetsEnabled = !t.renderTargetsEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Shadows",
                        isSelected: function() {
                            return t.shadowsEnabled
                        },
                        onSelect: function() {
                            return t.shadowsEnabled = !t.shadowsEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Skeletons",
                        isSelected: function() {
                            return t.skeletonsEnabled
                        },
                        onSelect: function() {
                            return t.skeletonsEnabled = !t.skeletonsEnabled
                        }
                    }), l.createElement(ae, {
                        label: "Sprites",
                        isSelected: function() {
                            return t.spritesEnabled
                        },
                        onSelect: function() {
                            return t.spritesEnabled = !t.spritesEnabled
                        }
                    }))) : null
                }, t
            }(Z),
            se = n(10),
            pe = n.n(se),
            ce = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    if (n._localChange = !1, void 0 !== n.props.directValue) n.state = {
                        value: n.props.directValue
                    };
                    else {
                        var r = n.props.target[n.props.propertyName];
                        void 0 === r && (r = n.props.maximum), n.state = {
                            value: r
                        }
                    }
                    return n
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    if (void 0 !== e.directValue) return t.value = e.directValue, !0;
                    var n = e.target[e.propertyName];
                    return void 0 === n && (n = e.maximum), !(n === t.value && !this._localChange) && (t.value = n, this._localChange = !1, !0)
                }, t.prototype.onChange = function(e) {
                    this._localChange = !0;
                    var t = parseFloat(e);
                    this.props.useEuler && (t = c.Tools.ToRadians(t)), this.props.target && (this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: t,
                        initialValue: this.state.value
                    }), this.props.target[this.props.propertyName] = t), this.props.onChange && this.props.onChange(t), this.setState({
                        value: t
                    })
                }, t.prototype.onInput = function(e) {
                    var t = parseFloat(e);
                    this.props.onInput && this.props.onInput(t)
                }, t.prototype.prepareDataToRead = function(e) {
                    return this.props.useEuler ? c.Tools.ToDegrees(e) : e
                }, t.prototype.render = function() {
                    var e = this,
                        t = void 0 !== this.props.decimalCount ? this.props.decimalCount : 2;
                    return l.createElement("div", {
                        className: "sliderLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "slider"
                    }, this.state.value ? this.prepareDataToRead(this.state.value).toFixed(t) : "0", " ", l.createElement("input", {
                        className: "range",
                        type: "range",
                        step: this.props.step,
                        min: this.prepareDataToRead(this.props.minimum),
                        max: this.prepareDataToRead(this.props.maximum),
                        value: this.prepareDataToRead(this.state.value),
                        onInput: function(t) {
                            return e.onInput(t.target.value)
                        },
                        onChange: function(t) {
                            return e.onChange(t.target.value)
                        }
                    })))
                }, t
            }(l.Component),
            ue = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._localChange = !1, n.state = {
                        value: t.target[t.propertyName]
                    }, n
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    if (this._localChange) return this._localChange = !1, !0;
                    var n = e.target[e.propertyName];
                    return null != n && n !== t.value && (t.value = n, !0)
                }, t.prototype.raiseOnPropertyChanged = function(e, t) {
                    this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: e,
                        initialValue: t
                    })
                }, t.prototype.updateValue = function(e) {
                    var t = parseInt(e);
                    this._localChange = !0;
                    var n = this.state.value;
                    this.props.noDirectUpdate || (this.props.target[this.props.propertyName] = t), this.setState({
                        value: t
                    }), this.raiseOnPropertyChanged(t, n), this.props.onSelect && this.props.onSelect(t)
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "listLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "options"
                    }, l.createElement("select", {
                        onChange: function(t) {
                            return e.updateValue(t.target.value)
                        },
                        value: this.state.value
                    }, this.props.options.map(function(e) {
                        return l.createElement("option", {
                            key: e.label,
                            value: e.value
                        }, e.label)
                    }))))
                }, t
            }(l.Component),
            de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._localChange = !1, n.state = {
                        value: n.props.value.toFixed(3)
                    }, n
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    return this._localChange ? (this._localChange = !1, !0) : e.value.toString() !== t.value && (t.value = e.value.toFixed(3), !0)
                }, t.prototype.updateValue = function(e) {
                    var t = e.target.value;
                    if (!/[^0-9\.\-]/g.test(t)) {
                        var n = parseFloat(t);
                        this._localChange = !0, this.setState({
                            value: t
                        }), isNaN(n) || this.props.onChange(n)
                    }
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "numeric"
                    }, this.props.label && l.createElement("div", {
                        className: "numeric-label"
                    }, this.props.label + ": "), l.createElement("input", {
                        type: "number",
                        step: this.props.step,
                        className: "numeric-input",
                        value: this.state.value,
                        onChange: function(t) {
                            return e.updateValue(t)
                        }
                    }))
                }, t.defaultProps = {
                    step: 1
                }, t
            }(l.Component),
            he = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._localChange = !1, n.state = {
                        isExpanded: !1,
                        color: n.props.target[n.props.propertyName].clone()
                    }, n
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    var n = e.target[e.propertyName];
                    return !(n.equals(t.color) && !this._localChange) && (t.color = n.clone(), this._localChange = !1, !0)
                }, t.prototype.onChange = function(e) {
                    this._localChange = !0;
                    var t = c.Color3.FromHexString(e);
                    this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: t,
                        initialValue: this.state.color
                    }), this.props.target[this.props.propertyName] = t, this.setState({
                        color: t
                    })
                }, t.prototype.switchExpandState = function() {
                    this._localChange = !0, this.setState({
                        isExpanded: !this.state.isExpanded
                    })
                }, t.prototype.raiseOnPropertyChanged = function(e) {
                    this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: this.state.color,
                        initialValue: e
                    })
                }, t.prototype.updateStateR = function(e) {
                    this._localChange = !0;
                    var t = this.state.color.clone();
                    this.props.target[this.props.propertyName].x = e, this.state.color.r = e, this.props.target[this.props.propertyName] = this.state.color, this.setState({
                        color: this.state.color
                    }), this.raiseOnPropertyChanged(t)
                }, t.prototype.updateStateG = function(e) {
                    this._localChange = !0;
                    var t = this.state.color.clone();
                    this.props.target[this.props.propertyName].g = e, this.state.color.g = e, this.props.target[this.props.propertyName] = this.state.color, this.setState({
                        color: this.state.color
                    }), this.raiseOnPropertyChanged(t)
                }, t.prototype.updateStateB = function(e) {
                    this._localChange = !0;
                    var t = this.state.color.clone();
                    this.props.target[this.props.propertyName].b = e, this.state.color.b = e, this.props.target[this.props.propertyName] = this.state.color, this.setState({
                        color: this.state.color
                    }), this.raiseOnPropertyChanged(t)
                }, t.prototype.copyToClipboard = function() {
                    var e = document.createElement("div");
                    if (e.textContent = this.state.color.toHexString(), document.body.appendChild(e), window.getSelection) {
                        var t = document.createRange();
                        t.selectNode(e), window.getSelection().removeAllRanges(), window.getSelection().addRange(t)
                    }
                    document.execCommand("copy"), e.remove()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.state.isExpanded ? l.createElement(u.a, {
                            icon: F
                        }) : l.createElement(u.a, {
                            icon: G
                        }),
                        n = "Color3" === this.state.color.getClassName() ? this.state.color : new c.Color3(this.state.color.r, this.state.color.g, this.state.color.b);
                    return l.createElement("div", {
                        className: "color3Line"
                    }, l.createElement("div", {
                        className: "firstLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "color3"
                    }, l.createElement("input", {
                        type: "color",
                        value: n.toHexString(),
                        onChange: function(t) {
                            return e.onChange(t.target.value)
                        }
                    })), l.createElement("div", {
                        className: "copy hoverIcon",
                        onClick: function() {
                            return e.copyToClipboard()
                        },
                        title: "Copy to clipboard"
                    }, l.createElement(u.a, {
                        icon: k
                    })), l.createElement("div", {
                        className: "expand hoverIcon",
                        onClick: function() {
                            return e.switchExpandState()
                        },
                        title: "Expand"
                    }, t)), this.state.isExpanded && l.createElement("div", {
                        className: "secondLine"
                    }, l.createElement(de, {
                        label: "r",
                        value: this.state.color.r,
                        onChange: function(t) {
                            return e.updateStateR(t)
                        }
                    }), l.createElement(de, {
                        label: "g",
                        value: this.state.color.g,
                        onChange: function(t) {
                            return e.updateStateG(t)
                        }
                    }), l.createElement(de, {
                        label: "b",
                        value: this.state.color.b,
                        onChange: function(t) {
                            return e.updateStateB(t)
                        }
                    })))
                }, t
            }(l.Component),
            be = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._localChange = !1, n.state = {
                        isExpanded: !1,
                        value: n.getCurrentValue().clone()
                    }, n
                }
                return a(t, e), t.prototype.getCurrentValue = function() {
                    return this.props.target[this.props.propertyName]
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    var n = this.getCurrentValue();
                    return !(n.equals(t.value) && !this._localChange) && (t.value = n.clone(), this._localChange = !1, !0)
                }, t.prototype.switchExpandState = function() {
                    this._localChange = !0, this.setState({
                        isExpanded: !this.state.isExpanded
                    })
                }, t.prototype.raiseOnPropertyChanged = function(e) {
                    this.props.onChange && this.props.onChange(this.state.value), this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: this.state.value,
                        initialValue: e
                    })
                }, t.prototype.updateVector3 = function() {
                    var e = this.props.target[this.props.propertyName].clone();
                    this.props.target[this.props.propertyName] = this.state.value, this.setState({
                        value: e
                    }), this.raiseOnPropertyChanged(e)
                }, t.prototype.updateStateX = function(e) {
                    this._localChange = !0, this.state.value.x = e, this.updateVector3()
                }, t.prototype.updateStateY = function(e) {
                    this._localChange = !0, this.state.value.y = e, this.updateVector3()
                }, t.prototype.updateStateZ = function(e) {
                    this._localChange = !0, this.state.value.z = e, this.updateVector3()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.state.isExpanded ? l.createElement(u.a, {
                            icon: F
                        }) : l.createElement(u.a, {
                            icon: G
                        });
                    return l.createElement("div", {
                        className: "vector3Line"
                    }, l.createElement("div", {
                        className: "firstLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "vector"
                    }, !this.props.useEuler && "X: " + this.state.value.x.toFixed(2) + ", Y: " + this.state.value.y.toFixed(2) + ", Z: " + this.state.value.z.toFixed(2), this.props.useEuler && "X: " + c.Tools.ToDegrees(this.state.value.x).toFixed(2) + ", Y: " + c.Tools.ToDegrees(this.state.value.y).toFixed(2) + ", Z: " + c.Tools.ToDegrees(this.state.value.z).toFixed(2)), l.createElement("div", {
                        className: "expand hoverIcon",
                        onClick: function() {
                            return e.switchExpandState()
                        },
                        title: "Expand"
                    }, t)), this.state.isExpanded && !this.props.useEuler && l.createElement("div", {
                        className: "secondLine"
                    }, l.createElement(de, {
                        label: "x",
                        step: this.props.step,
                        value: this.state.value.x,
                        onChange: function(t) {
                            return e.updateStateX(t)
                        }
                    }), l.createElement(de, {
                        label: "y",
                        step: this.props.step,
                        value: this.state.value.y,
                        onChange: function(t) {
                            return e.updateStateY(t)
                        }
                    }), l.createElement(de, {
                        label: "z",
                        step: this.props.step,
                        value: this.state.value.z,
                        onChange: function(t) {
                            return e.updateStateZ(t)
                        }
                    })), this.state.isExpanded && this.props.useEuler && l.createElement("div", {
                        className: "secondLine"
                    }, l.createElement(ce, {
                        label: "x",
                        minimum: 0,
                        maximum: 360,
                        step: .1,
                        directValue: c.Tools.ToDegrees(this.state.value.x),
                        onChange: function(t) {
                            return e.updateStateX(c.Tools.ToRadians(t))
                        }
                    }), l.createElement(ce, {
                        label: "y",
                        minimum: 0,
                        maximum: 360,
                        step: .1,
                        directValue: c.Tools.ToDegrees(this.state.value.y),
                        onChange: function(t) {
                            return e.updateStateY(c.Tools.ToRadians(t))
                        }
                    }), l.createElement(ce, {
                        label: "z",
                        minimum: 0,
                        maximum: 360,
                        step: .1,
                        directValue: c.Tools.ToDegrees(this.state.value.z),
                        onChange: function(t) {
                            return e.updateStateZ(c.Tools.ToRadians(t))
                        }
                    })))
                }, t.defaultProps = {
                    step: .001
                }, t
            }(l.Component),
            me = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n._localChange = !1;
                    var r = n.props.target[n.props.propertyName].clone();
                    return n.state = {
                        isExpanded: !1,
                        value: r,
                        eulerValue: r.toEulerAngles()
                    }, n
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    var n = e.target[e.propertyName];
                    return !(n.equals(t.value) && !this._localChange) && (t.value = n.clone(), this._localChange = !1, !0)
                }, t.prototype.switchExpandState = function() {
                    this._localChange = !0, this.setState({
                        isExpanded: !this.state.isExpanded
                    })
                }, t.prototype.raiseOnPropertyChanged = function(e, t) {
                    this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: e,
                        initialValue: t
                    })
                }, t.prototype.updateQuaternion = function() {
                    var e = this.props.target[this.props.propertyName].clone();
                    this.props.target[this.props.propertyName] = this.state.value, this.setState({
                        value: e
                    }), this.raiseOnPropertyChanged(this.state.value, e)
                }, t.prototype.updateStateX = function(e) {
                    this._localChange = !0, this.state.value.x = e, this.updateQuaternion()
                }, t.prototype.updateStateY = function(e) {
                    this._localChange = !0, this.state.value.y = e, this.updateQuaternion()
                }, t.prototype.updateStateZ = function(e) {
                    this._localChange = !0, this.state.value.z = e, this.updateQuaternion()
                }, t.prototype.updateStateW = function(e) {
                    this._localChange = !0, this.state.value.w = e, this.updateQuaternion()
                }, t.prototype.updateQuaternionFromEuler = function() {
                    var e = this.state.eulerValue.toQuaternion();
                    this.state.value.x = e.x, this.state.value.y = e.y, this.state.value.z = e.z, this.state.value.w = e.w, this.updateQuaternion()
                }, t.prototype.updateStateEulerX = function(e) {
                    this._localChange = !0, this.state.eulerValue.x = c.Tools.ToRadians(e), this.updateQuaternionFromEuler()
                }, t.prototype.updateStateEulerY = function(e) {
                    this._localChange = !0, this.state.eulerValue.y = c.Tools.ToRadians(e), this.updateQuaternionFromEuler()
                }, t.prototype.updateStateEulerZ = function(e) {
                    this._localChange = !0, this.state.eulerValue.z = c.Tools.ToRadians(e), this.updateQuaternionFromEuler()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.state.isExpanded ? l.createElement(u.a, {
                            icon: F
                        }) : l.createElement(u.a, {
                            icon: G
                        }),
                        n = this.state.value,
                        r = this.state.eulerValue;
                    return l.createElement("div", {
                        className: "vector3Line"
                    }, l.createElement("div", {
                        className: "firstLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "vector"
                    }, !this.props.useEuler && "X: " + n.x.toFixed(1) + ", Y: " + n.y.toFixed(1) + ", Z: " + n.z.toFixed(1) + ", W: " + n.w.toFixed(1), this.props.useEuler && "X: " + c.Tools.ToDegrees(r.x).toFixed(2) + ", Y: " + c.Tools.ToDegrees(r.y).toFixed(2) + ", Z: " + c.Tools.ToDegrees(r.z).toFixed(2)), l.createElement("div", {
                        className: "expand",
                        onClick: function() {
                            return e.switchExpandState()
                        }
                    }, t)), this.state.isExpanded && !this.props.useEuler && l.createElement("div", {
                        className: "secondLine"
                    }, l.createElement(de, {
                        label: "x",
                        value: n.x,
                        onChange: function(t) {
                            return e.updateStateX(t)
                        }
                    }), l.createElement(de, {
                        label: "y",
                        value: n.y,
                        onChange: function(t) {
                            return e.updateStateY(t)
                        }
                    }), l.createElement(de, {
                        label: "z",
                        value: n.z,
                        onChange: function(t) {
                            return e.updateStateZ(t)
                        }
                    }), l.createElement(de, {
                        label: "w",
                        value: n.w,
                        onChange: function(t) {
                            return e.updateStateW(t)
                        }
                    })), this.state.isExpanded && this.props.useEuler && l.createElement("div", {
                        className: "secondLine"
                    }, l.createElement(ce, {
                        label: "x",
                        minimum: 0,
                        maximum: 360,
                        step: .1,
                        directValue: c.Tools.ToDegrees(r.x),
                        onChange: function(t) {
                            return e.updateStateEulerX(t)
                        }
                    }), l.createElement(ce, {
                        label: "y",
                        minimum: 0,
                        maximum: 360,
                        step: .1,
                        directValue: c.Tools.ToDegrees(r.y),
                        onChange: function(t) {
                            return e.updateStateEulerY(t)
                        }
                    }), l.createElement(ce, {
                        label: "z",
                        minimum: 0,
                        maximum: 360,
                        step: .1,
                        directValue: c.Tools.ToDegrees(r.z),
                        onChange: function(t) {
                            return e.updateStateEulerZ(t)
                        }
                    })))
                }, t
            }(l.Component),
            fe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._localChange = !1, n.state = {
                        value: n.props.value || n.props.target[n.props.propertyName] || ""
                    }, n
                }
                return a(t, e), t.prototype.componentWillUnmount = function() {
                    this.props.lockObject.lock = !1
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    if (this._localChange) return this._localChange = !1, !0;
                    var n = e.value || e.target[e.propertyName];
                    return n !== t.value && (t.value = n || "", !0)
                }, t.prototype.raiseOnPropertyChanged = function(e, t) {
                    this.props.onChange ? this.props.onChange(e) : this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: e,
                        initialValue: t
                    })
                }, t.prototype.updateValue = function(e) {
                    this._localChange = !0;
                    var t = this.props.value || this.props.target[this.props.propertyName];
                    this.setState({
                        value: e
                    }), this.raiseOnPropertyChanged(e, t), this.props.propertyName && (this.props.target[this.props.propertyName] = e)
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "textInputLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "value"
                    }, l.createElement("input", {
                        value: this.state.value,
                        onBlur: function() {
                            return e.props.lockObject.lock = !1
                        },
                        onFocus: function() {
                            return e.props.lockObject.lock = !0
                        },
                        onChange: function(t) {
                            return e.updateValue(t.target.value)
                        }
                    })))
                }, t
            }(l.Component),
            ge = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        mode: 0
                    }, n
                }
                return a(t, e), t.prototype.renderInspectable = function(e) {
                    switch (e.type) {
                        case c.InspectableType.Checkbox:
                            return l.createElement(ae, {
                                key: e.label,
                                label: e.label,
                                target: this.props.target,
                                propertyName: e.propertyName,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            });
                        case c.InspectableType.Slider:
                            return l.createElement(ce, {
                                key: e.label,
                                label: e.label,
                                target: this.props.target,
                                propertyName: e.propertyName,
                                step: void 0 !== e.step ? e.step : .1,
                                minimum: void 0 !== e.min ? e.min : 0,
                                maximum: void 0 !== e.max ? e.max : 1,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            });
                        case c.InspectableType.Vector3:
                            return l.createElement(be, {
                                key: e.label,
                                label: e.label,
                                target: this.props.target,
                                propertyName: e.propertyName,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            });
                        case c.InspectableType.Quaternion:
                            return l.createElement(me, {
                                useEuler: this.props.globalState.onlyUseEulers,
                                key: e.label,
                                label: e.label,
                                target: this.props.target,
                                propertyName: e.propertyName,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            });
                        case c.InspectableType.Color3:
                            return l.createElement(he, {
                                key: e.label,
                                label: e.label,
                                target: this.props.target,
                                propertyName: e.propertyName,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            });
                        case c.InspectableType.String:
                            return l.createElement(fe, {
                                key: e.label,
                                label: e.label,
                                lockObject: this.props.lockObject,
                                target: this.props.target,
                                propertyName: e.propertyName,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                    }
                    return null
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.target.inspectableCustomProperties;
                    return t && 0 !== t.length ? l.createElement(ee, {
                        title: "CUSTOM",
                        globalState: this.props.globalState
                    }, t.map(function(t) {
                        return e.renderInspectable(t)
                    })) : null
                }, t
            }(l.Component),
            ve = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.material,
                        n = [{
                            label: "Clockwise",
                            value: c.Material.ClockWiseSideOrientation
                        }, {
                            label: "Counterclockwise",
                            value: c.Material.CounterClockWiseSideOrientation
                        }],
                        r = [{
                            label: "Opaque",
                            value: c.PBRMaterial.PBRMATERIAL_OPAQUE
                        }, {
                            label: "Alpha test",
                            value: c.PBRMaterial.PBRMATERIAL_ALPHATEST
                        }, {
                            label: "Alpha blend",
                            value: c.PBRMaterial.PBRMATERIAL_ALPHABLEND
                        }, {
                            label: "Alpha blend and test",
                            value: c.PBRMaterial.PBRMATERIAL_ALPHATESTANDBLEND
                        }],
                        a = [{
                            label: "Combine",
                            value: c.Engine.ALPHA_COMBINE
                        }, {
                            label: "One one",
                            value: c.Engine.ALPHA_ONEONE
                        }, {
                            label: "Add",
                            value: c.Engine.ALPHA_ADD
                        }, {
                            label: "Subtract",
                            value: c.Engine.ALPHA_SUBTRACT
                        }, {
                            label: "Multiply",
                            value: c.Engine.ALPHA_MULTIPLY
                        }, {
                            label: "Maximized",
                            value: c.Engine.ALPHA_MAXIMIZED
                        }, {
                            label: "Pre-multiplied",
                            value: c.Engine.ALPHA_PREMULTIPLIED
                        }];
                    return l.createElement("div", null, l.createElement(ge, {
                        globalState: this.props.globalState,
                        target: t,
                        lockObject: this.props.lockObject,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "ID",
                        value: t.id
                    }), l.createElement(J, {
                        label: "Unique ID",
                        value: t.uniqueId.toString()
                    }), l.createElement(J, {
                        label: "Class",
                        value: t.getClassName()
                    }), l.createElement(ae, {
                        label: "Backface culling",
                        target: t,
                        propertyName: "backFaceCulling",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Orientation",
                        options: n,
                        target: t,
                        propertyName: "sideOrientation",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                mode: t
                            })
                        }
                    }), l.createElement(ae, {
                        label: "Disable lighting",
                        target: t,
                        propertyName: "disableLighting",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Disable depth write",
                        target: t,
                        propertyName: "disableDepthWrite",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Need depth pre-pass",
                        target: t,
                        propertyName: "needDepthPrePass",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Wireframe",
                        target: t,
                        propertyName: "wireframe",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Point cloud",
                        target: t,
                        propertyName: "pointsCloud",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Point size",
                        target: t,
                        propertyName: "pointSize",
                        minimum: 0,
                        maximum: 100,
                        step: .1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Z-offset",
                        target: t,
                        propertyName: "zOffset",
                        minimum: -10,
                        maximum: 10,
                        step: .1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TRANSPARENCY"
                    }, l.createElement(ce, {
                        label: "Alpha",
                        target: t,
                        propertyName: "alpha",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), void 0 !== t.transparencyMode && l.createElement(ue, {
                        label: "Transparency mode",
                        options: r,
                        target: t,
                        propertyName: "transparencyMode",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                transparencyMode: t
                            })
                        }
                    }), l.createElement(ue, {
                        label: "Alpha mode",
                        options: a,
                        target: t,
                        propertyName: "alphaMode",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                alphaMode: t
                            })
                        }
                    }), l.createElement(ae, {
                        label: "Separate culling pass",
                        target: t,
                        propertyName: "separateCullingPass",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            ye = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.material;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        material: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t
            }(l.Component),
            Ce = function(e) {
                function t(n) {
                    var r = e.call(this, n) || this;
                    return r._id = t._IDGenerator++, r
                }
                return a(t, e), t.prototype.onChange = function(e) {
                    var t = e.target.files;
                    t && t.length && this.props.onClick(t[0]), e.target.value = ""
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "buttonLine"
                    }, l.createElement("label", {
                        htmlFor: "file-upload" + this._id,
                        className: "file-upload"
                    }, this.props.label), l.createElement("input", {
                        ref: "upload",
                        id: "file-upload" + this._id,
                        type: "file",
                        accept: this.props.accept,
                        onChange: function(t) {
                            return e.onChange(t)
                        }
                    }))
                }, t._IDGenerator = 0, t
            }(l.Component),
            Ee = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = n.props.material,
                        a = n.props.texture;
                    return n.state = {
                        isDebugSelected: r && r.reservedDataStore && r.reservedDataStore.debugTexture === a
                    }, n
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    this.props.onDebugSelectionChangeObservable && (this._onDebugSelectionChangeObserver = this.props.onDebugSelectionChangeObservable.add(function(t) {
                        e.props.texture !== t && e.setState({
                            isDebugSelected: !1
                        })
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.onDebugSelectionChangeObservable && this._onDebugSelectionChangeObserver && this.props.onDebugSelectionChangeObservable.remove(this._onDebugSelectionChangeObserver)
                }, t.prototype.debugTexture = function() {
                    if (this.props.customDebugAction) {
                        var e = !this.state.isDebugSelected;
                        return this.props.customDebugAction(e), void this.setState({
                            isDebugSelected: e
                        })
                    }
                    var t = this.props.texture,
                        n = this.props.material;
                    if (n && t) {
                        var r = n.getScene();
                        if (n.reservedDataStore && n.reservedDataStore.debugTexture === t) {
                            var a = n.reservedDataStore.debugMaterial;
                            t.level = n.reservedDataStore.level;
                            for (var o = 0, i = r.meshes; o < i.length; o++) {
                                (h = i[o]).material === a && (h.material = n)
                            }
                            return a.dispose(), n.reservedDataStore.debugTexture = null, n.reservedDataStore.debugMaterial = null, void this.setState({
                                isDebugSelected: !1
                            })
                        }
                        var l = n,
                            s = !1;
                        n.reservedDataStore && n.reservedDataStore.debugTexture && (l = n.reservedDataStore.debugMaterial, s = !0);
                        var p = new c.StandardMaterial("debugMaterial", r);
                        p.disableLighting = !0, p.sideOrientation = n.sideOrientation, p.emissiveTexture = t, p.forceDepthWrite = !0, p.reservedDataStore = {
                            hidden: !0
                        };
                        for (var u = 0, d = r.meshes; u < d.length; u++) {
                            var h;
                            (h = d[u]).material === l && (h.material = p)
                        }
                        n.reservedDataStore || (n.reservedDataStore = {}), n.reservedDataStore.debugTexture = t, n.reservedDataStore.debugMaterial = p, n.reservedDataStore.level = t.level, t.level = 1, this.props.onDebugSelectionChangeObservable && this.props.onDebugSelectionChangeObservable.notifyObservers(t), s && l.dispose(), this.setState({
                            isDebugSelected: !0
                        })
                    }
                }, t.prototype.onLink = function() {
                    if (this.props.onSelectionChangedObservable) {
                        var e = this.props.texture;
                        this.props.onSelectionChangedObservable.notifyObservers(e)
                    }
                }, t.prototype.updateTexture = function(e) {
                    var t = this,
                        n = this.props.material;
                    c.Tools.ReadFile(e, function(e) {
                        var r = new Blob([e], {
                                type: "octet/stream"
                            }),
                            a = URL.createObjectURL(r),
                            o = new c.Texture(a, n.getScene());
                        n[t.props.propertyName] = o, t.forceUpdate()
                    }, void 0, !0)
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.texture;
                    return t ? l.createElement("div", {
                        className: "textureLinkLine"
                    }, !t.isCube && this.props.material && l.createElement("div", {
                        className: this.state.isDebugSelected ? "debug selected" : "debug",
                        onClick: function() {
                            return e.debugTexture()
                        },
                        title: "Render as main texture"
                    }, l.createElement(u.a, {
                        icon: $
                    })), l.createElement(J, {
                        label: this.props.label,
                        value: t.name,
                        onLink: function() {
                            return e.onLink()
                        }
                    })) : this.props.propertyName ? l.createElement(Ce, {
                        label: "Add " + this.props.label + " texture",
                        onClick: function(t) {
                            return e.updateTexture(t)
                        },
                        accept: ".jpg, .png, .tga, .dds, .env"
                    }) : null
                }, t
            }(l.Component),
            Oe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._onDebugSelectionChangeObservable = new c.Observable, n
                }
                return a(t, e), t.prototype.renderTextures = function() {
                    var e = this.props.material,
                        t = this._onDebugSelectionChangeObservable;
                    return l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TEXTURES"
                    }, l.createElement(Ee, {
                        label: "Diffuse",
                        texture: e.diffuseTexture,
                        propertyName: "diffuseTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Specular",
                        texture: e.specularTexture,
                        propertyName: "specularTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Reflection",
                        texture: e.reflectionTexture,
                        propertyName: "reflectionTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Refraction",
                        texture: e.refractionTexture,
                        propertyName: "refractionTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Emissive",
                        texture: e.emissiveTexture,
                        propertyName: "emissiveTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Bump",
                        texture: e.bumpTexture,
                        propertyName: "bumpTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Opacity",
                        texture: e.opacityTexture,
                        propertyName: "opacityTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Ambient",
                        texture: e.ambientTexture,
                        propertyName: "ambientTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Lightmap",
                        texture: e.lightmapTexture,
                        propertyName: "lightmapTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(ae, {
                        label: "Use lightmap as shadowmap",
                        target: e,
                        propertyName: "useLightmapAsShadowmap ",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t.prototype.render = function() {
                    var e = this.props.material;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        material: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), this.renderTextures(), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LIGHTING & COLORS"
                    }, l.createElement(he, {
                        label: "Diffuse",
                        target: e,
                        propertyName: "diffuseColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Specular",
                        target: e,
                        propertyName: "specularColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Specular power",
                        target: e,
                        propertyName: "specularPower",
                        minimum: 0,
                        maximum: 128,
                        step: .1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Emissive",
                        target: e,
                        propertyName: "emissiveColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Ambient",
                        target: e,
                        propertyName: "ambientColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LEVELS",
                        closed: !0
                    }, e.diffuseTexture && l.createElement(ce, {
                        label: "Diffuse level",
                        target: e.diffuseTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.specularTexture && l.createElement(ce, {
                        label: "Specular level",
                        target: e.specularTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.reflectionTexture && l.createElement(ce, {
                        label: "Reflection level",
                        target: e.reflectionTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.refractionTexture && l.createElement(ce, {
                        label: "Refraction level",
                        target: e.refractionTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.emissiveTexture && l.createElement(ce, {
                        label: "Emissive level",
                        target: e.emissiveTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.bumpTexture && l.createElement(ce, {
                        label: "Bump level",
                        target: e.bumpTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.opacityTexture && l.createElement(ce, {
                        label: "Opacity level",
                        target: e.opacityTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.ambientTexture && l.createElement(ce, {
                        label: "Ambient level",
                        target: e.ambientTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.lightmapTexture && l.createElement(ce, {
                        label: "Lightmap level",
                        target: e.lightmapTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component);
        ! function(e) {
            e[e.R = 0] = "R", e[e.G = 1] = "G", e[e.B = 2] = "B", e[e.A = 3] = "A", e[e.All = 4] = "All"
        }(i || (i = {}));
        var Se = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        channel: i.All,
                        face: 0
                    }, n
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    return e.texture !== this.props.texture || t.channel !== this.state.channel || t.face !== this.state.face
                }, t.prototype.componentDidMount = function() {
                    this.updatePreview()
                }, t.prototype.componentDidUpdate = function() {
                    this.updatePreview()
                }, t.prototype.updatePreview = function() {
                    var e = this,
                        t = this.props.texture;
                    !t.isReady() && t._texture && t._texture.onLoadedObservable.addOnce(function() {
                        e.updatePreview()
                    });
                    var n, r = t.getScene(),
                        a = r.getEngine(),
                        o = t.getSize(),
                        l = o.width / o.height,
                        s = this.props.width,
                        p = s / l | 1;
                    if (t.isCube) {
                        var u = new c.PassCubePostProcess("pass", 1, null, c.Texture.NEAREST_SAMPLINGMODE, a, !1, c.Constants.TEXTURETYPE_UNSIGNED_INT);
                        u.face = this.state.face, n = u
                    } else n = new c.PassPostProcess("pass", 1, null, c.Texture.NEAREST_SAMPLINGMODE, a, !1, c.Constants.TEXTURETYPE_UNSIGNED_INT);
                    if (!n.getEffect().isReady()) return n.dispose(), void setTimeout(function() {
                        return e.updatePreview()
                    }, 250);
                    var d = this.refs.canvas;
                    this.props.globalState && (this.props.globalState.blockMutationUpdates = !0);
                    var h = new c.RenderTargetTexture("temp", {
                        width: s,
                        height: p
                    }, r, !1);
                    n.onApply = function(e) {
                        e.setTexture("textureSampler", t)
                    };
                    var b = h.getInternalTexture();
                    if (b) {
                        r.postProcessManager.directRender([n], b);
                        var m = 4 * s,
                            f = p / 2,
                            g = a.readPixels(0, 0, s, p);
                        if (!t.isCube && this.state.channel != i.All)
                            for (var v = 0; v < s * p * 4; v += 4) switch (this.state.channel) {
                                case i.R:
                                    g[v + 1] = g[v], g[v + 2] = g[v], g[v + 3] = 255;
                                    break;
                                case i.G:
                                    g[v] = g[v + 1], g[v + 2] = g[v], g[v + 3] = 255;
                                    break;
                                case i.B:
                                    g[v] = g[v + 2], g[v + 1] = g[v + 2], g[v + 3] = 255;
                                    break;
                                case i.A:
                                    g[v] = g[v + 3], g[v + 1] = g[v + 3], g[v + 2] = g[v + 3], g[v + 3] = 255
                            }
                        if (t.invertY || t.isCube)
                            for (v = 0; v < f; v++)
                                for (var y = 0; y < m; y++) {
                                    var C = y + v * m,
                                        E = y + (p - v - 1) * m,
                                        O = g[C];
                                    g[C] = g[E], g[E] = O
                                }
                        d.width = s, d.height = p;
                        var S = d.getContext("2d");
                        if (S) {
                            var x = S.createImageData(s, p);
                            x.data.set(g), S.putImageData(x, 0, 0)
                        }
                        a.unBindFramebuffer(b)
                    }
                    h.dispose(), n.dispose(), d.style.height = p + "px", this.props.globalState && (this.props.globalState.blockMutationUpdates = !1)
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.texture;
                    return l.createElement("div", {
                        className: "textureLine"
                    }, !this.props.hideChannelSelect && t.isCube && l.createElement("div", {
                        className: "control3D"
                    }, l.createElement("button", {
                        className: 0 === this.state.face ? "px command selected" : "px command",
                        onClick: function() {
                            return e.setState({
                                face: 0
                            })
                        }
                    }, "PX"), l.createElement("button", {
                        className: 1 === this.state.face ? "nx command selected" : "nx command",
                        onClick: function() {
                            return e.setState({
                                face: 1
                            })
                        }
                    }, "NX"), l.createElement("button", {
                        className: 2 === this.state.face ? "py command selected" : "py command",
                        onClick: function() {
                            return e.setState({
                                face: 2
                            })
                        }
                    }, "PY"), l.createElement("button", {
                        className: 3 === this.state.face ? "ny command selected" : "ny command",
                        onClick: function() {
                            return e.setState({
                                face: 3
                            })
                        }
                    }, "NY"), l.createElement("button", {
                        className: 4 === this.state.face ? "pz command selected" : "pz command",
                        onClick: function() {
                            return e.setState({
                                face: 4
                            })
                        }
                    }, "PZ"), l.createElement("button", {
                        className: 5 === this.state.face ? "nz command selected" : "nz command",
                        onClick: function() {
                            return e.setState({
                                face: 5
                            })
                        }
                    }, "NZ")), !this.props.hideChannelSelect && !t.isCube && l.createElement("div", {
                        className: "control"
                    }, l.createElement("button", {
                        className: this.state.channel === i.R ? "red command selected" : "red command",
                        onClick: function() {
                            return e.setState({
                                channel: i.R
                            })
                        }
                    }, "R"), l.createElement("button", {
                        className: this.state.channel === i.G ? "green command selected" : "green command",
                        onClick: function() {
                            return e.setState({
                                channel: i.G
                            })
                        }
                    }, "G"), l.createElement("button", {
                        className: this.state.channel === i.B ? "blue command selected" : "blue command",
                        onClick: function() {
                            return e.setState({
                                channel: i.B
                            })
                        }
                    }, "B"), l.createElement("button", {
                        className: this.state.channel === i.A ? "alpha command selected" : "alpha command",
                        onClick: function() {
                            return e.setState({
                                channel: i.A
                            })
                        }
                    }, "A"), l.createElement("button", {
                        className: this.state.channel === i.All ? "all command selected" : "all command",
                        onClick: function() {
                            return e.setState({
                                channel: i.All
                            })
                        }
                    }, "ALL")), l.createElement("canvas", {
                        ref: "canvas",
                        className: "preview"
                    }))
                }, t
            }(l.Component),
            xe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n._localChange = !1;
                    var r = n.props.target[n.props.propertyName];
                    return n.state = {
                        value: r ? n.props.isInteger ? r.toFixed(0) : r.toFixed(n.props.digits || 3) : "0"
                    }, n._store = r, n
                }
                return a(t, e), t.prototype.componentWillUnmount = function() {
                    this.unlock()
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    if (this._localChange) return this._localChange = !1, !0;
                    var n = e.target[e.propertyName],
                        r = n ? this.props.isInteger ? n.toFixed(0) : n.toFixed(this.props.digits || 3) : "0";
                    return r !== t.value && (t.value = r, !0)
                }, t.prototype.raiseOnPropertyChanged = function(e, t) {
                    this.props.onChange && this.props.onChange(e), this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: e,
                        initialValue: t
                    })
                }, t.prototype.updateValue = function(e) {
                    var t;
                    /[^0-9\.\-]/g.test(e) || (t = this.props.isInteger ? parseInt(e) : parseFloat(e), this._localChange = !0, this.setState({
                        value: e
                    }), isNaN(t) || (this.raiseOnPropertyChanged(t, this._store), this.props.target[this.props.propertyName] = t, this._store = t))
                }, t.prototype.lock = function() {
                    this.props.lockObject && (this.props.lockObject.lock = !0)
                }, t.prototype.unlock = function() {
                    this.props.lockObject && (this.props.lockObject.lock = !1)
                }, t.prototype.render = function() {
                    var e, t = this;
                    return e = this.props.isInteger ? parseInt(this.state.value) : parseFloat(this.state.value), l.createElement("div", null, !this.props.useEuler && l.createElement("div", {
                        className: this.props.additionalClass ? this.props.additionalClass + " floatLine" : "floatLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "value"
                    }, l.createElement("input", {
                        type: "number",
                        step: this.props.step || "0.01",
                        className: "numeric-input",
                        value: this.state.value,
                        onBlur: function() {
                            return t.unlock()
                        },
                        onFocus: function() {
                            return t.lock()
                        },
                        onChange: function(e) {
                            return t.updateValue(e.target.value)
                        }
                    }))), this.props.useEuler && l.createElement(ce, {
                        label: this.props.label,
                        minimum: 0,
                        maximum: 360,
                        step: .1,
                        directValue: c.Tools.ToDegrees(e),
                        onChange: function(e) {
                            return t.updateValue(c.Tools.ToRadians(e).toString())
                        }
                    }))
                }, t
            }(l.Component),
            Pe = n(4),
            ke = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    var e = this.props.texture;
                    if (e && e.rootContainer) {
                        var t = e;
                        this._adtInstrumentation = new Pe.AdvancedDynamicTextureInstrumentation(t), this._adtInstrumentation.captureRenderTime = !0, this._adtInstrumentation.captureLayoutTime = !0
                    }
                }, t.prototype.componentWillUnmount = function() {
                    this._adtInstrumentation && (this._adtInstrumentation.dispose(), this._adtInstrumentation = null)
                }, t.prototype.updateTexture = function(e) {
                    var t = this,
                        n = this.props.texture;
                    c.Tools.ReadFile(e, function(r) {
                        var a = new Blob([r], {
                                type: "octet/stream"
                            }),
                            o = URL.createObjectURL(a);
                        if (n.isCube) {
                            var i = void 0;
                            e.name.toLowerCase().indexOf(".dds") > 0 ? i = ".dds" : e.name.toLowerCase().indexOf(".env") > 0 && (i = ".env"), n.updateURL(o, i, function() {
                                return t.forceUpdate()
                            })
                        } else n.updateURL(o, null, function() {
                            return t.forceUpdate()
                        })
                    }, void 0, !0)
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.texture,
                        n = [{
                            label: "Nearest",
                            value: c.Texture.NEAREST_NEAREST
                        }, {
                            label: "Nearest & linear mip",
                            value: c.Texture.NEAREST_LINEAR
                        }, {
                            label: "Linear",
                            value: c.Texture.LINEAR_LINEAR_MIPLINEAR
                        }],
                        r = [{
                            label: "Explicit",
                            value: c.Texture.EXPLICIT_MODE
                        }, {
                            label: "Cubic",
                            value: c.Texture.CUBIC_MODE
                        }, {
                            label: "Inverse cubic",
                            value: c.Texture.INVCUBIC_MODE
                        }, {
                            label: "Equirectangular",
                            value: c.Texture.EQUIRECTANGULAR_MODE
                        }, {
                            label: "Fixed equirectangular",
                            value: c.Texture.FIXED_EQUIRECTANGULAR_MODE
                        }, {
                            label: "Fixed equirectangular mirrored",
                            value: c.Texture.FIXED_EQUIRECTANGULAR_MIRRORED_MODE
                        }, {
                            label: "Planar",
                            value: c.Texture.PLANAR_MODE
                        }, {
                            label: "Projection",
                            value: c.Texture.PROJECTION_MODE
                        }, {
                            label: "Skybox",
                            value: c.Texture.SKYBOX_MODE
                        }, {
                            label: "Spherical",
                            value: c.Texture.SPHERICAL_MODE
                        }],
                        a = "",
                        o = t.url;
                    if (o)
                        for (var i = o.length - 1; i >= 0 && "." !== o[i]; i--) a = o[i] + a;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "PREVIEW"
                    }, l.createElement(Se, {
                        texture: t,
                        width: 256,
                        height: 256,
                        globalState: this.props.globalState
                    }), l.createElement(Ce, {
                        label: "Replace texture",
                        onClick: function(t) {
                            return e.updateTexture(t)
                        },
                        accept: ".jpg, .png, .tga, .dds, .env"
                    })), l.createElement(ge, {
                        globalState: this.props.globalState,
                        target: t,
                        lockObject: this.props.lockObject,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "Width",
                        value: t.getSize().width.toString()
                    }), l.createElement(J, {
                        label: "Height",
                        value: t.getSize().height.toString()
                    }), a && l.createElement(J, {
                        label: "File format",
                        value: a
                    }), l.createElement(J, {
                        label: "Unique ID",
                        value: t.uniqueId.toString()
                    }), l.createElement(J, {
                        label: "Class",
                        value: t.getClassName()
                    }), l.createElement(J, {
                        label: "Has alpha",
                        value: t.hasAlpha ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Is 3D",
                        value: t.is3D ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Is cube",
                        value: t.isCube ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Is render target",
                        value: t.isRenderTarget ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Has mipmaps",
                        value: t.noMipmap ? "No" : "Yes"
                    }), l.createElement(ce, {
                        label: "UV set",
                        target: t,
                        propertyName: "coordinatesIndex",
                        minimum: 0,
                        maximum: 3,
                        step: 1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        decimalCount: 0
                    }), l.createElement(ue, {
                        label: "Mode",
                        options: r,
                        target: t,
                        propertyName: "coordinatesMode",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(e) {
                            return t.updateSamplingMode(e)
                        }
                    }), l.createElement(ce, {
                        label: "Level",
                        target: t,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.updateSamplingMode && l.createElement(ue, {
                        label: "Sampling",
                        options: n,
                        target: t,
                        noDirectUpdate: !0,
                        propertyName: "samplingMode",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(e) {
                            return t.updateSamplingMode(e)
                        }
                    })), t.rootContainer && l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ADVANCED TEXTURE PROPERTIES"
                    }, l.createElement(te, {
                        label: "Last layout time",
                        value: this._adtInstrumentation.renderTimeCounter.current,
                        units: "ms"
                    }), l.createElement(te, {
                        label: "Last render time",
                        value: this._adtInstrumentation.layoutTimeCounter.current,
                        units: "ms"
                    }), l.createElement(ce, {
                        label: "Render scale",
                        minimum: .1,
                        maximum: 5,
                        step: .1,
                        target: t,
                        propertyName: "renderScale",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Premultiply alpha",
                        target: t,
                        propertyName: "premulAlpha",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Ideal width",
                        target: t,
                        propertyName: "idealWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Ideal height",
                        target: t,
                        propertyName: "idealHeight",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Use smallest ideal",
                        target: t,
                        propertyName: "useSmallestIdeal",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Render at ideal size",
                        target: t,
                        propertyName: "renderAtIdealSize",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Invalidate Rect optimization",
                        target: t,
                        propertyName: "useInvalidateRectOptimization",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TRANSFORM"
                    }, !t.isCube && l.createElement("div", null, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "U offset",
                        target: t,
                        propertyName: "uOffset",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "V offset",
                        target: t,
                        propertyName: "vOffset",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "U scale",
                        target: t,
                        propertyName: "uScale",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "V scale",
                        target: t,
                        propertyName: "vScale",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "U angle",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: t,
                        propertyName: "uAng",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "V angle",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: t,
                        propertyName: "vAng",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "W angle",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: t,
                        propertyName: "wAng",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Clamp U",
                        isSelected: function() {
                            return t.wrapU === c.Texture.CLAMP_ADDRESSMODE
                        },
                        onSelect: function(e) {
                            return t.wrapU = e ? c.Texture.CLAMP_ADDRESSMODE : c.Texture.WRAP_ADDRESSMODE
                        }
                    }), l.createElement(ae, {
                        label: "Clamp V",
                        isSelected: function() {
                            return t.wrapV === c.Texture.CLAMP_ADDRESSMODE
                        },
                        onSelect: function(e) {
                            return t.wrapV = e ? c.Texture.CLAMP_ADDRESSMODE : c.Texture.WRAP_ADDRESSMODE
                        }
                    })), t.isCube && l.createElement("div", null, l.createElement(ce, {
                        label: "Rotation Y",
                        useEuler: this.props.globalState.onlyUseEulers,
                        minimum: 0,
                        maximum: 2 * Math.PI,
                        step: .1,
                        target: t,
                        propertyName: "rotationY"
                    }))))
                }, t
            }(l.Component),
            Te = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._localChange = !1, n.state = {
                        isExpanded: !1,
                        value: n.props.target[n.props.propertyName].clone()
                    }, n
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    var n = e.target[e.propertyName];
                    return !(n.equals(t.value) && !this._localChange) && (t.value = n.clone(), this._localChange = !1, !0)
                }, t.prototype.switchExpandState = function() {
                    this._localChange = !0, this.setState({
                        isExpanded: !this.state.isExpanded
                    })
                }, t.prototype.raiseOnPropertyChanged = function(e) {
                    this.props.onChange && this.props.onChange(this.state.value), this.props.onPropertyChangedObservable && this.props.onPropertyChangedObservable.notifyObservers({
                        object: this.props.target,
                        property: this.props.propertyName,
                        value: this.state.value,
                        initialValue: e
                    })
                }, t.prototype.updateStateX = function(e) {
                    this._localChange = !0;
                    var t = this.state.value.clone();
                    this.props.target[this.props.propertyName].x = e, this.state.value.x = e, this.setState({
                        value: this.state.value
                    }), this.raiseOnPropertyChanged(t)
                }, t.prototype.updateStateY = function(e) {
                    this._localChange = !0;
                    var t = this.state.value.clone();
                    this.props.target[this.props.propertyName].y = e, this.state.value.y = e, this.setState({
                        value: this.state.value
                    }), this.raiseOnPropertyChanged(t)
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.state.isExpanded ? l.createElement(u.a, {
                            icon: F
                        }) : l.createElement(u.a, {
                            icon: G
                        });
                    return l.createElement("div", {
                        className: "vector3Line"
                    }, l.createElement("div", {
                        className: "firstLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "vector"
                    }, "X: " + this.state.value.x.toFixed(2) + ", Y: " + this.state.value.y.toFixed(2)), l.createElement("div", {
                        className: "expand hoverIcon",
                        onClick: function() {
                            return e.switchExpandState()
                        },
                        title: "Expand"
                    }, t)), this.state.isExpanded && l.createElement("div", {
                        className: "secondLine"
                    }, l.createElement(de, {
                        label: "x",
                        step: this.props.step,
                        value: this.state.value.x,
                        onChange: function(t) {
                            return e.updateStateX(t)
                        }
                    }), l.createElement(de, {
                        label: "y",
                        step: this.props.step,
                        value: this.state.value.y,
                        onChange: function(t) {
                            return e.updateStateY(t)
                        }
                    })))
                }, t.defaultProps = {
                    step: .001
                }, t
            }(l.Component),
            Ne = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._onDebugSelectionChangeObservable = new c.Observable, n
                }
                return a(t, e), t.prototype.switchAmbientMode = function(e) {
                    this.props.material.debugMode = e ? 21 : 0
                }, t.prototype.switchMetallicMode = function(e) {
                    this.props.material.debugMode = e ? 62 : 0
                }, t.prototype.renderTextures = function(e) {
                    var t = this,
                        n = this.props.material;
                    return l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TEXTURES"
                    }, l.createElement(Ee, {
                        label: "Albedo",
                        texture: n.albedoTexture,
                        propertyName: "albedoTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(Ee, {
                        customDebugAction: function(e) {
                            return t.switchMetallicMode(e)
                        },
                        label: "Metallic",
                        texture: n.metallicTexture,
                        propertyName: "metallicTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(Ee, {
                        label: "Reflection",
                        texture: n.reflectionTexture,
                        propertyName: "reflectionTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(Ee, {
                        label: "Refraction",
                        texture: n.refractionTexture,
                        propertyName: "refractionTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(Ee, {
                        label: "Micro-surface",
                        texture: n.microSurfaceTexture,
                        propertyName: "microSurfaceTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(Ee, {
                        label: "Bump",
                        texture: n.bumpTexture,
                        propertyName: "bumpTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(Ee, {
                        label: "Emissive",
                        texture: n.emissiveTexture,
                        propertyName: "emissiveTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(Ee, {
                        label: "Opacity",
                        texture: n.opacityTexture,
                        propertyName: "opacityTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(Ee, {
                        customDebugAction: function(e) {
                            return t.switchAmbientMode(e)
                        },
                        label: "Ambient",
                        texture: n.ambientTexture,
                        propertyName: "ambientTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(Ee, {
                        label: "Lightmap",
                        texture: n.lightmapTexture,
                        propertyName: "lightmapTexture",
                        material: n,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: e
                    }), l.createElement(ae, {
                        label: "Use lightmap as shadowmap",
                        target: n,
                        propertyName: "useLightmapAsShadowmap ",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.material;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        material: t,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), this.renderTextures(this._onDebugSelectionChangeObservable), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LIGHTING & COLORS"
                    }, l.createElement(he, {
                        label: "Albedo",
                        target: t,
                        propertyName: "albedoColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Reflectivity",
                        target: t,
                        propertyName: "reflectivityColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Micro-surface",
                        target: t,
                        propertyName: "microSurface",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Emissive",
                        target: t,
                        propertyName: "emissiveColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Ambient",
                        target: t,
                        propertyName: "ambientColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Use physical light falloff",
                        target: t,
                        propertyName: "usePhysicalLightFalloff ",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "METALLIC WORKFLOW"
                    }, l.createElement(ce, {
                        label: "Metallic",
                        target: t,
                        propertyName: "metallic",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Roughness",
                        target: t,
                        propertyName: "roughness",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "CLEAR COAT"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t.clearCoat,
                        propertyName: "isEnabled",
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.clearCoat.isEnabled && l.createElement("div", {
                        className: "fragment"
                    }, l.createElement(ce, {
                        label: "Intensity",
                        target: t.clearCoat,
                        propertyName: "intensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Roughness",
                        target: t.clearCoat,
                        propertyName: "roughness",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "IOR",
                        target: t.clearCoat,
                        propertyName: "indexOfRefraction",
                        minimum: 1,
                        maximum: 3,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(Ee, {
                        label: "Texture",
                        texture: t.clearCoat.texture,
                        material: t,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: this._onDebugSelectionChangeObservable
                    }), l.createElement(Ee, {
                        label: "Bump",
                        texture: t.clearCoat.bumpTexture,
                        material: t,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: this._onDebugSelectionChangeObservable
                    }), t.clearCoat.bumpTexture && l.createElement(ce, {
                        label: "Bump strength",
                        target: t.clearCoat.bumpTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Tint",
                        target: t.clearCoat,
                        propertyName: "isTintEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.clearCoat.isEnabled && t.clearCoat.isTintEnabled && l.createElement(he, {
                        label: "Tint Color",
                        target: t.clearCoat,
                        propertyName: "tintColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.clearCoat.isEnabled && t.clearCoat.isTintEnabled && l.createElement(ce, {
                        label: "At Distance",
                        target: t.clearCoat,
                        propertyName: "tintColorAtDistance",
                        minimum: 0,
                        maximum: 20,
                        step: .1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.clearCoat.isEnabled && t.clearCoat.isTintEnabled && l.createElement(ce, {
                        label: "Tint Thickness",
                        target: t.clearCoat,
                        propertyName: "tintThickness",
                        minimum: 0,
                        maximum: 20,
                        step: .1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.clearCoat.isEnabled && t.clearCoat.isTintEnabled && l.createElement(Ee, {
                        label: "Tint Texture",
                        texture: t.clearCoat.tintTexture,
                        material: t,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: this._onDebugSelectionChangeObservable
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ANISOTROPIC"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t.anisotropy,
                        propertyName: "isEnabled",
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.anisotropy.isEnabled && l.createElement("div", {
                        className: "fragment"
                    }, l.createElement(ce, {
                        label: "Intensity",
                        target: t.anisotropy,
                        propertyName: "intensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(Te, {
                        label: "Direction",
                        target: t.anisotropy,
                        propertyName: "direction",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(Ee, {
                        label: "Texture",
                        texture: t.anisotropy.texture,
                        material: t,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: this._onDebugSelectionChangeObservable
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SHEEN"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t.sheen,
                        propertyName: "isEnabled",
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.sheen.isEnabled && l.createElement("div", {
                        className: "fragment"
                    }, l.createElement(ae, {
                        label: "Link to Albedo",
                        target: t.sheen,
                        propertyName: "linkSheenWithAlbedo",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Intensity",
                        target: t.sheen,
                        propertyName: "intensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Color",
                        target: t.sheen,
                        propertyName: "color",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(Ee, {
                        label: "Texture",
                        texture: t.sheen.texture,
                        material: t,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: this._onDebugSelectionChangeObservable
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SUBSURFACE"
                    }, l.createElement(Ee, {
                        label: "Thickness",
                        texture: t.subSurface.thicknessTexture,
                        material: t,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: this._onDebugSelectionChangeObservable
                    }), l.createElement(ce, {
                        label: "Min Thickness",
                        target: t.subSurface,
                        propertyName: "minimumThickness",
                        minimum: 0,
                        maximum: 10,
                        step: .1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Max Thickness",
                        target: t.subSurface,
                        propertyName: "maximumThickness",
                        minimum: 0,
                        maximum: 10,
                        step: .1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Mask From Thickness",
                        target: t.subSurface,
                        propertyName: "useMaskFromThicknessTexture",
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Tint Color",
                        target: t.subSurface,
                        propertyName: "tintColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Refraction Enabled",
                        target: t.subSurface,
                        propertyName: "isRefractionEnabled",
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.subSurface.isRefractionEnabled && l.createElement("div", {
                        className: "fragment"
                    }, l.createElement(ce, {
                        label: "Intensity",
                        target: t.subSurface,
                        propertyName: "refractionIntensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Index of Refraction",
                        target: t.subSurface,
                        propertyName: "indexOfRefraction",
                        minimum: 1,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Tint at Distance",
                        target: t.subSurface,
                        propertyName: "tintColorAtDistance",
                        minimum: 0,
                        maximum: 10,
                        step: .1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Link refraction with transparency",
                        target: t.subSurface,
                        propertyName: "linkRefractionWithTransparency",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ae, {
                        label: "Translucency Enabled",
                        target: t.subSurface,
                        propertyName: "isTranslucencyEnabled",
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.subSurface.isTranslucencyEnabled && l.createElement("div", {
                        className: "fragment"
                    }, l.createElement(ce, {
                        label: "Intensity",
                        target: t.subSurface,
                        propertyName: "translucencyIntensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Diffusion Distance",
                        target: t.subSurface,
                        propertyName: "diffusionDistance",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LEVELS",
                        closed: !0
                    }, l.createElement(ce, {
                        label: "Environment",
                        target: t,
                        propertyName: "environmentIntensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Specular",
                        target: t,
                        propertyName: "specularIntensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Emissive",
                        target: t,
                        propertyName: "emissiveIntensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Direct",
                        target: t,
                        propertyName: "directIntensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.bumpTexture && l.createElement(ce, {
                        label: "Bump strength",
                        target: t.bumpTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 2,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.ambientTexture && l.createElement(ce, {
                        label: "Ambient strength",
                        target: t,
                        propertyName: "ambientTextureStrength",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.reflectionTexture && l.createElement(ce, {
                        label: "Reflection strength",
                        target: t.reflectionTexture,
                        propertyName: "level",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "RENDERING",
                        closed: !0
                    }, l.createElement(ae, {
                        label: "Alpha from albedo",
                        target: t,
                        propertyName: "useAlphaFromAlbedoTexture",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Ambient in grayscale",
                        target: t,
                        propertyName: "useAmbientInGrayScale",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Radiance over alpha",
                        target: t,
                        propertyName: "useRadianceOverAlpha",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Micro-surface from ref. map alpha",
                        target: t,
                        propertyName: "useMicroSurfaceFromReflectivityMapAlpha",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Specular over alpha",
                        target: t,
                        propertyName: "useSpecularOverAlpha",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Specular anti-aliasing",
                        target: t,
                        propertyName: "enableSpecularAntiAliasing",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ADVANCED",
                        closed: !0
                    }, l.createElement(ae, {
                        label: "Energy Conservation",
                        target: t.brdf,
                        propertyName: "useEnergyConservation",
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Spherical Harmonics",
                        target: t.brdf,
                        propertyName: "useSphericalHarmonics",
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Radiance occlusion",
                        target: t,
                        propertyName: "useRadianceOcclusion",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Horizon occlusion ",
                        target: t,
                        propertyName: "useHorizonOcclusion",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Unlit",
                        target: t,
                        propertyName: "unlit",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "DEBUG",
                        closed: !0
                    }, l.createElement(ue, {
                        label: "Debug mode",
                        options: [{
                            label: "None",
                            value: 0
                        }, {
                            label: "Normalized position",
                            value: 1
                        }, {
                            label: "Normals",
                            value: 2
                        }, {
                            label: "Tangents",
                            value: 3
                        }, {
                            label: "Bitangents",
                            value: 4
                        }, {
                            label: "Bump Normals",
                            value: 5
                        }, {
                            label: "UV1",
                            value: 6
                        }, {
                            label: "UV2",
                            value: 7
                        }, {
                            label: "ClearCoat Normals",
                            value: 8
                        }, {
                            label: "ClearCoat Tangents",
                            value: 9
                        }, {
                            label: "ClearCoat Bitangents",
                            value: 10
                        }, {
                            label: "Anisotropic Normals",
                            value: 11
                        }, {
                            label: "Anisotropic Tangents",
                            value: 12
                        }, {
                            label: "Anisotropic Bitangents",
                            value: 13
                        }, {
                            label: "Albdeo Map",
                            value: 20
                        }, {
                            label: "Ambient Map",
                            value: 21
                        }, {
                            label: "Opacity Map",
                            value: 22
                        }, {
                            label: "Emissive Map",
                            value: 23
                        }, {
                            label: "Light Map",
                            value: 24
                        }, {
                            label: "Metallic Map",
                            value: 25
                        }, {
                            label: "Reflectivity Map",
                            value: 26
                        }, {
                            label: "ClearCoat Map",
                            value: 27
                        }, {
                            label: "ClearCoat Tint Map",
                            value: 28
                        }, {
                            label: "Sheen Map",
                            value: 29
                        }, {
                            label: "Anisotropic Map",
                            value: 30
                        }, {
                            label: "Thickness Map",
                            value: 31
                        }, {
                            label: "Env Refraction",
                            value: 40
                        }, {
                            label: "Env Reflection",
                            value: 41
                        }, {
                            label: "Env Clear Coat",
                            value: 42
                        }, {
                            label: "Direct Diffuse",
                            value: 50
                        }, {
                            label: "Direct Specular",
                            value: 51
                        }, {
                            label: "Direct Clear Coat",
                            value: 52
                        }, {
                            label: "Direct Sheen",
                            value: 53
                        }, {
                            label: "Env Irradiance",
                            value: 54
                        }, {
                            label: "Surface Albedo",
                            value: 60
                        }, {
                            label: "Reflectance 0",
                            value: 61
                        }, {
                            label: "Metallic",
                            value: 62
                        }, {
                            label: "Roughness",
                            value: 63
                        }, {
                            label: "AlphaG",
                            value: 64
                        }, {
                            label: "NdotV",
                            value: 65
                        }, {
                            label: "ClearCoat Color",
                            value: 66
                        }, {
                            label: "ClearCoat Roughness",
                            value: 67
                        }, {
                            label: "ClearCoat NdotV",
                            value: 68
                        }, {
                            label: "Transmittance",
                            value: 69
                        }, {
                            label: "Refraction Transmittance",
                            value: 70
                        }, {
                            label: "SEO",
                            value: 80
                        }, {
                            label: "EHO",
                            value: 81
                        }, {
                            label: "Energy Factor",
                            value: 82
                        }, {
                            label: "Specular Reflectance",
                            value: 83
                        }, {
                            label: "Clear Coat Reflectance",
                            value: 84
                        }, {
                            label: "Sheen Reflectance",
                            value: 85
                        }, {
                            label: "Luminance Over Alpha",
                            value: 86
                        }, {
                            label: "Alpha",
                            value: 87
                        }],
                        target: t,
                        propertyName: "debugMode"
                    }), l.createElement(ce, {
                        label: "Split position",
                        target: t,
                        propertyName: "debugLimit",
                        minimum: -1,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Output factor",
                        target: t,
                        propertyName: "debugFactor",
                        minimum: 0,
                        maximum: 5,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            we = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isSelected: n.props.isSelected()
                    }, n
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    this._onSelectionChangedObserver = this.props.onSelectionChangedObservable.add(function(t) {
                        e.setState({
                            isSelected: t === e
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this._onSelectionChangedObserver && (this.props.onSelectionChangedObservable.remove(this._onSelectionChangedObserver), this._onSelectionChangedObserver = null)
                }, t.prototype.onChange = function() {
                    this.props.onSelect(), this.props.onSelectionChangedObservable.notifyObservers(this)
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "radioLine"
                    }, l.createElement("div", {
                        className: "label"
                    }, this.props.label), l.createElement("div", {
                        className: "radioContainer"
                    }, l.createElement("input", {
                        id: this.props.label,
                        className: "radio",
                        type: "radio",
                        checked: this.state.isSelected,
                        onChange: function() {
                            return e.onChange()
                        }
                    }), l.createElement("label", {
                        htmlFor: this.props.label,
                        className: "labelForRadio"
                    })))
                }, t
            }(l.Component),
            _e = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        mode: n.props.scene.fogMode
                    }, n
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.scene,
                        n = [{
                            label: "None",
                            value: c.Scene.FOGMODE_NONE
                        }, {
                            label: "Linear",
                            value: c.Scene.FOGMODE_LINEAR
                        }, {
                            label: "Exp",
                            value: c.Scene.FOGMODE_EXP
                        }, {
                            label: "Exp2",
                            value: c.Scene.FOGMODE_EXP2
                        }];
                    return l.createElement("div", null, l.createElement(ue, {
                        label: "Fog mode",
                        options: n,
                        target: t,
                        propertyName: "fogMode",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                mode: t
                            })
                        }
                    }), this.state.mode !== c.Scene.FOGMODE_NONE && l.createElement(he, {
                        label: "Fog color",
                        target: t,
                        propertyName: "fogColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), (this.state.mode === c.Scene.FOGMODE_EXP || this.state.mode === c.Scene.FOGMODE_EXP2) && l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Fog density",
                        target: t,
                        propertyName: "fogDensity",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), this.state.mode === c.Scene.FOGMODE_LINEAR && l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Fog start",
                        target: t,
                        propertyName: "fogStart",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), this.state.mode === c.Scene.FOGMODE_LINEAR && l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Fog end",
                        target: t,
                        propertyName: "fogEnd",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t
            }(l.Component),
            Me = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "buttonLine"
                    }, l.createElement("button", {
                        onClick: function() {
                            return e.props.onClick()
                        }
                    }, this.props.label))
                }, t
            }(l.Component),
            Le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._renderingModeGroupObservable = new c.Observable, n
                }
                return a(t, e), t.prototype.setRenderingModes = function(e, t) {
                    var n = this.props.scene;
                    n.forcePointsCloud = e, n.forceWireframe = t
                }, t.prototype.switchIBL = function() {
                    var e = this.props.scene;
                    e.environmentTexture ? (this._storedEnvironmentTexture = e.environmentTexture, e.environmentTexture = null) : (e.environmentTexture = this._storedEnvironmentTexture, this._storedEnvironmentTexture = null)
                }, t.prototype.updateEnvironmentTexture = function(e) {
                    var t = e.name.toLowerCase().indexOf(".dds") > 0,
                        n = e.name.toLowerCase().indexOf(".env") > 0;
                    if (t || n) {
                        var r = this.props.scene;
                        c.Tools.ReadFile(e, function(e) {
                            var n = new Blob([e], {
                                    type: "octet/stream"
                                }),
                                a = URL.createObjectURL(n);
                            r.environmentTexture = t ? c.CubeTexture.CreateFromPrefilteredData(a, r, ".dds") : new c.CubeTexture(a, r, void 0, void 0, void 0, function() {}, function(e) {
                                e && console.error(e)
                            }, void 0, void 0, ".env")
                        }, void 0, !0)
                    } else console.error("Unable to update environment texture. Please select a dds or env file.")
                }, t.prototype.updateGravity = function(e) {
                    this.props.scene.getPhysicsEngine().setGravity(e)
                }, t.prototype.updateTimeStep = function(e) {
                    this.props.scene.getPhysicsEngine().setTimeStep(e)
                }, t.prototype.normalizeScene = function() {
                    this.props.scene.meshes.forEach(function(e) {
                        e.normalizeToUnitCube(!0), e.computeWorldMatrix(!0)
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.scene,
                        n = t.getPhysicsEngine(),
                        r = null;
                    n && (r = {
                        gravity: n.gravity,
                        timeStep: n.getTimeStep()
                    });
                    var a = t.imageProcessingConfiguration,
                        o = [{
                            label: "Standard",
                            value: c.ImageProcessingConfiguration.TONEMAPPING_STANDARD
                        }, {
                            label: "ACES",
                            value: c.ImageProcessingConfiguration.TONEMAPPING_ACES
                        }],
                        i = [{
                            label: "Multiply",
                            value: c.ImageProcessingConfiguration.VIGNETTEMODE_MULTIPLY
                        }, {
                            label: "Opaque",
                            value: c.ImageProcessingConfiguration.VIGNETTEMODE_OPAQUE
                        }];
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "RENDERING MODE"
                    }, l.createElement(we, {
                        onSelectionChangedObservable: this._renderingModeGroupObservable,
                        label: "Point",
                        isSelected: function() {
                            return t.forcePointsCloud
                        },
                        onSelect: function() {
                            return e.setRenderingModes(!0, !1)
                        }
                    }), l.createElement(we, {
                        onSelectionChangedObservable: this._renderingModeGroupObservable,
                        label: "Wireframe",
                        isSelected: function() {
                            return t.forceWireframe
                        },
                        onSelect: function() {
                            return e.setRenderingModes(!1, !0)
                        }
                    }), l.createElement(we, {
                        onSelectionChangedObservable: this._renderingModeGroupObservable,
                        label: "Solid",
                        isSelected: function() {
                            return !t.forcePointsCloud && !t.forceWireframe
                        },
                        onSelect: function() {
                            return e.setRenderingModes(!1, !1)
                        }
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ENVIRONMENT"
                    }, l.createElement(he, {
                        label: "Clear color",
                        target: t,
                        propertyName: "clearColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Clear color enabled",
                        target: t,
                        propertyName: "autoClear",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Ambient color",
                        target: t,
                        propertyName: "ambientColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Environment texture (IBL)",
                        isSelected: function() {
                            return null != t.environmentTexture
                        },
                        onSelect: function() {
                            return e.switchIBL()
                        }
                    }), t.environmentTexture && l.createElement(Ee, {
                        label: "Env. texture",
                        texture: t.environmentTexture,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable
                    }), l.createElement(Ce, {
                        label: "Update environment texture",
                        onClick: function(t) {
                            return e.updateEnvironmentTexture(t)
                        },
                        accept: ".dds, .env"
                    }), l.createElement(_e, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        scene: t,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "MATERIAL IMAGE PROCESSING"
                    }, l.createElement(ce, {
                        minimum: 0,
                        maximum: 4,
                        step: .1,
                        label: "Contrast",
                        target: a,
                        propertyName: "contrast",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 4,
                        step: .1,
                        label: "Exposure",
                        target: a,
                        propertyName: "exposure",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Tone mapping",
                        target: a,
                        propertyName: "toneMappingEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Tone mapping type",
                        options: o,
                        target: a,
                        propertyName: "toneMappingType",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                mode: t
                            })
                        }
                    }), l.createElement(ae, {
                        label: "Vignette",
                        target: a,
                        propertyName: "vignetteEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 4,
                        step: .1,
                        label: "Vignette weight",
                        target: a,
                        propertyName: "vignetteWeight",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 1,
                        step: .1,
                        label: "Vignette stretch",
                        target: a,
                        propertyName: "vignetteStretch",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: Math.PI,
                        step: .1,
                        label: "Vignette FOV",
                        target: a,
                        propertyName: "vignetteCameraFov",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 1,
                        step: .1,
                        label: "Vignette center X",
                        target: a,
                        propertyName: "vignetteCentreX",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 1,
                        step: .1,
                        label: "Vignette center Y",
                        target: a,
                        propertyName: "vignetteCentreY",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Vignette color",
                        target: a,
                        propertyName: "vignetteColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Vignette blend mode",
                        options: i,
                        target: a,
                        propertyName: "vignetteBlendMode",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                mode: t
                            })
                        }
                    })), null !== r && l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "PHYSICS",
                        closed: !0
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Time step",
                        target: r,
                        propertyName: "timeStep",
                        onChange: function(t) {
                            return e.updateTimeStep(t)
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Gravity",
                        target: r,
                        propertyName: "gravity",
                        onChange: function(t) {
                            return e.updateGravity(t)
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "COLLISIONS",
                        closed: !0
                    }, l.createElement(be, {
                        label: "Gravity",
                        target: t,
                        propertyName: "gravity",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SHADOWS",
                        closed: !0
                    }, l.createElement(Me, {
                        label: "Normalize scene",
                        onClick: function() {
                            return e.normalizeScene()
                        }
                    })))
                }, t
            }(l.Component),
            Re = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.light;
                    return l.createElement("div", null, l.createElement(ge, {
                        globalState: this.props.globalState,
                        target: e,
                        lockObject: this.props.lockObject,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "ID",
                        value: e.id
                    }), l.createElement(J, {
                        label: "Unique ID",
                        value: e.uniqueId.toString()
                    }), l.createElement(J, {
                        label: "Class",
                        value: e.getClassName()
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Intensity",
                        target: e,
                        propertyName: "intensity",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Ae = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.light;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Re, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        light: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SETUP"
                    }, l.createElement(he, {
                        label: "Diffuse",
                        target: e,
                        propertyName: "diffuse",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Ground",
                        target: e,
                        propertyName: "groundColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Direction",
                        target: e,
                        propertyName: "direction",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Ie = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.createShadowGenerator = function() {
                    var e = this.props.light,
                        t = e.getScene(),
                        n = new c.ShadowGenerator(512, e);
                    t.meshes.forEach(function(e) {
                        n.addShadowCaster(e), e.receiveShadows = !0
                    }), this.forceUpdate()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.light,
                        n = t.getShadowGenerator() || null,
                        r = [{
                            label: "None",
                            value: c.ShadowGenerator.FILTER_NONE
                        }, {
                            label: "PCF",
                            value: c.ShadowGenerator.FILTER_PCF
                        }, {
                            label: "PCSS",
                            value: c.ShadowGenerator.FILTER_PCSS
                        }, {
                            label: "Poisson",
                            value: c.ShadowGenerator.FILTER_POISSONSAMPLING
                        }, {
                            label: "Exponential",
                            value: c.ShadowGenerator.FILTER_EXPONENTIALSHADOWMAP
                        }, {
                            label: "Blurred exponential",
                            value: c.ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP
                        }, {
                            label: "Close exponential",
                            value: c.ShadowGenerator.FILTER_CLOSEEXPONENTIALSHADOWMAP
                        }, {
                            label: "Blurred close exponential",
                            value: c.ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP
                        }],
                        a = [{
                            label: "Low",
                            value: c.ShadowGenerator.QUALITY_LOW
                        }, {
                            label: "Medium",
                            value: c.ShadowGenerator.QUALITY_MEDIUM
                        }, {
                            label: "High",
                            value: c.ShadowGenerator.QUALITY_HIGH
                        }],
                        o = n ? n.filter : 0;
                    return l.createElement("div", null, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SHADOWS"
                    }, l.createElement(ae, {
                        label: "Shadows enabled",
                        target: t,
                        propertyName: "shadowEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Shadows near plane",
                        target: t,
                        propertyName: "shadowMinZ",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Shadows far plane",
                        target: t,
                        propertyName: "shadowMaxZ",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), null == n && l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SHADOW GENERATOR"
                    }, l.createElement(Me, {
                        label: "Create generator",
                        onClick: function() {
                            return e.createShadowGenerator()
                        }
                    })), null !== n && l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SHADOW GENERATOR"
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        digits: 4,
                        step: "0.0001",
                        label: "Bias",
                        target: n,
                        propertyName: "bias",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Normal bias",
                        target: n,
                        propertyName: "normalBias",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Darkness",
                        target: n,
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        propertyName: "darkness",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Allow transparent shadows",
                        target: n,
                        propertyName: "transparencyShadow",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Filter",
                        options: r,
                        onSelect: function() {
                            e.forceUpdate()
                        },
                        target: n,
                        propertyName: "filter",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), (o === c.ShadowGenerator.FILTER_PCF || o === c.ShadowGenerator.FILTER_PCSS) && l.createElement(ue, {
                        label: "Filtering quality",
                        options: a,
                        onSelect: function() {
                            e.forceUpdate()
                        },
                        target: n,
                        propertyName: "filteringQuality",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), o === c.ShadowGenerator.FILTER_PCSS && l.createElement(ce, {
                        label: "Penumbra ratio",
                        minimum: 0,
                        maximum: .5,
                        step: .001,
                        target: n,
                        propertyName: "contactHardeningLightSizeUVRatio",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), (o === c.ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP || o === c.ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP) && l.createElement(ae, {
                        label: "Use kernel blur",
                        target: n,
                        propertyName: "useKernelBlur",
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), (o === c.ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP || o === c.ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP) && !n.useKernelBlur && l.createElement(ce, {
                        label: "Blur box offset",
                        target: n,
                        propertyName: "blurBoxOffset",
                        minimum: 1,
                        maximum: 64,
                        step: 1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), (o === c.ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP || o === c.ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP) && n.useKernelBlur && l.createElement(ce, {
                        label: "Blur kernel",
                        target: n,
                        propertyName: "blurKernel",
                        minimum: 1,
                        maximum: 64,
                        step: 1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), (o === c.ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP || o === c.ShadowGenerator.FILTER_EXPONENTIALSHADOWMAP) && l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Depth scale",
                        target: n,
                        propertyName: "depthScale",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), (o === c.ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP || o === c.ShadowGenerator.FILTER_EXPONENTIALSHADOWMAP) && l.createElement(ce, {
                        label: "Blur scale",
                        target: n,
                        propertyName: "blurScale",
                        minimum: 1,
                        maximum: 4,
                        step: 1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            je = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.light;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Re, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        light: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SETUP"
                    }, l.createElement(he, {
                        label: "Diffuse",
                        target: e,
                        propertyName: "diffuse",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Specular",
                        target: e,
                        propertyName: "specular",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Position",
                        target: e,
                        propertyName: "position",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(Ie, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        light: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t
            }(l.Component),
            De = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        mode: n.props.camera.mode
                    }, n
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.camera,
                        n = [{
                            label: "Perspective",
                            value: c.Camera.PERSPECTIVE_CAMERA
                        }, {
                            label: "Orthographic",
                            value: c.Camera.ORTHOGRAPHIC_CAMERA
                        }];
                    return l.createElement("div", null, l.createElement(ge, {
                        globalState: this.props.globalState,
                        target: t,
                        lockObject: this.props.lockObject,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "ID",
                        value: t.id
                    }), l.createElement(J, {
                        label: "Unique ID",
                        value: t.uniqueId.toString()
                    }), l.createElement(J, {
                        label: "Class",
                        value: t.getClassName()
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Near plane",
                        target: t,
                        propertyName: "minZ",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Far plane",
                        target: t,
                        propertyName: "maxZ",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Inertia",
                        target: t,
                        propertyName: "inertia",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Mode",
                        options: n,
                        target: t,
                        propertyName: "mode",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                mode: t
                            })
                        }
                    }), t.mode === c.Camera.PERSPECTIVE_CAMERA && l.createElement(ce, {
                        label: "Field of view",
                        target: t,
                        useEuler: this.props.globalState.onlyUseEulers,
                        propertyName: "fov",
                        minimum: .1,
                        maximum: Math.PI,
                        step: .1,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.mode === c.Camera.ORTHOGRAPHIC_CAMERA && l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Left",
                        target: t,
                        propertyName: "orthoLeft",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.mode === c.Camera.ORTHOGRAPHIC_CAMERA && l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Top",
                        target: t,
                        propertyName: "orthoTop",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.mode === c.Camera.ORTHOGRAPHIC_CAMERA && l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Right",
                        target: t,
                        propertyName: "orthoRight",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.mode === c.Camera.ORTHOGRAPHIC_CAMERA && l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Bottom",
                        target: t,
                        propertyName: "orthoBottom",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            ze = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.camera;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(De, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        camera: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TRANSFORMS"
                    }, l.createElement(be, {
                        label: "Position",
                        target: e,
                        propertyName: "position",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "CONTROLS",
                        closed: !0
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Angular sensitivity",
                        target: e,
                        propertyName: "angularSensibility",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Speed",
                        target: e,
                        propertyName: "speed",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "COLLISIONS",
                        closed: !0
                    }, l.createElement(ae, {
                        label: "Check collisions",
                        target: e,
                        propertyName: "checkCollisions",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Apply gravity",
                        target: e,
                        propertyName: "applyGravity",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Ellipsoid",
                        target: e,
                        propertyName: "ellipsoid",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Ellipsoid offset",
                        target: e,
                        propertyName: "ellipsoidOffset",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Fe = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.camera;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(De, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        camera: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TRANSFORMS"
                    }, l.createElement(be, {
                        label: "Target",
                        target: e,
                        propertyName: "target",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Alpha",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: e,
                        propertyName: "alpha",
                        minimum: e.lowerAlphaLimit || 0,
                        maximum: e.upperAlphaLimit || 2 * Math.PI,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Beta",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: e,
                        propertyName: "beta",
                        minimum: e.lowerAlphaLimit || 0,
                        maximum: e.upperBetaLimit || 2 * Math.PI,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Radius",
                        target: e,
                        propertyName: "radius",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "CONTROLS",
                        closed: !0
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Angular sensitivity X",
                        target: e,
                        propertyName: "angularSensibilityX",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Angular sensitivity Y",
                        target: e,
                        propertyName: "angularSensibilityY",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Panning sensitivity",
                        target: e,
                        propertyName: "panningSensibility",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Pinch delta percentage",
                        target: e,
                        propertyName: "pinchDeltaPercentage",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Wheel delta percentage",
                        target: e,
                        propertyName: "wheelDeltaPercentage",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Speed",
                        target: e,
                        propertyName: "speed",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "COLLISIONS",
                        closed: !0
                    }, l.createElement(ae, {
                        label: "Check collisions",
                        target: e,
                        propertyName: "checkCollisions",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Collision radius",
                        target: e,
                        propertyName: "collisionRadius",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LIMITS",
                        closed: !0
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Lower alpha limit",
                        target: e,
                        propertyName: "lowerAlphaLimit",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Upper alpha limit",
                        target: e,
                        propertyName: "upperAlphaLimit",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Lower beta limit",
                        target: e,
                        propertyName: "lowerBetaLimit",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Upper beta limit",
                        target: e,
                        propertyName: "upperBetaLimit",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Lower radius limit",
                        target: e,
                        propertyName: "lowerRadiusLimit",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Upper radius limit",
                        target: e,
                        propertyName: "upperRadiusLimit",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "BEHAVIORS",
                        closed: !0
                    }, l.createElement(ae, {
                        label: "Auto rotation",
                        target: e,
                        propertyName: "useAutoRotationBehavior",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Bouncing",
                        target: e,
                        propertyName: "useBouncingBehavior",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Framing",
                        target: e,
                        propertyName: "useFramingBehavior",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Ue = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        displayNormals: !1
                    }, n
                }
                return a(t, e), t.prototype.renderWireframeOver = function() {
                    var e = this.props.mesh,
                        t = e.getScene();
                    if (e.reservedDataStore && e.reservedDataStore.wireframeOver) return e.reservedDataStore.wireframeOver.dispose(!1, !0), e.reservedDataStore.wireframeOver = null, void this.forceUpdate();
                    var n = e.clone();
                    n.reservedDataStore = {
                        hidden: !0
                    }, n.parent = e, n.position = c.Vector3.Zero(), n.scaling = new c.Vector3(1, 1, 1), n.rotation = c.Vector3.Zero(), n.rotationQuaternion = null;
                    var r = new c.StandardMaterial("wireframeOver", t);
                    r.reservedDataStore = {
                        hidden: !0
                    }, n.material = r, r.zOffset = 1, r.disableLighting = !0, r.backFaceCulling = !1, r.emissiveColor = c.Color3.White(), r.wireframe = !0, e.reservedDataStore || (e.reservedDataStore = {}), e.reservedDataStore.wireframeOver = n, this.forceUpdate()
                }, t.prototype.renderNormalVectors = function() {
                    var e = this.props.mesh,
                        t = e.getScene();
                    if (e.reservedDataStore && e.reservedDataStore.normalLines) return e.reservedDataStore.normalLines.dispose(), e.reservedDataStore.normalLines = null, void this.forceUpdate();
                    for (var n = e.getVerticesData(c.VertexBuffer.NormalKind), r = e.getVerticesData(c.VertexBuffer.PositionKind), a = c.Color3.White(), o = .05 * e.getBoundingInfo().diagonalLength, i = [], l = 0; l < n.length; l += 3) {
                        var s = c.Vector3.FromArray(r, l),
                            p = s.add(c.Vector3.FromArray(n, l).scaleInPlace(o));
                        i.push([s, p])
                    }
                    var u = c.LinesBuilder.CreateLineSystem("normalLines", {
                        lines: i
                    }, t);
                    u.color = a, u.parent = e, u.reservedDataStore = {
                        hidden: !0
                    }, e.reservedDataStore || (e.reservedDataStore = {}), e.reservedDataStore.normalLines = u, this.forceUpdate()
                }, t.prototype.displayNormals = function() {
                    var e = this,
                        t = this.props.mesh,
                        n = t.getScene();
                    if (t.material)
                        if ("NormalMaterial" === t.material.getClassName()) t.material.dispose(), t.material = t.reservedDataStore.originalMaterial, t.reservedDataStore.originalMaterial = null, this.setState({
                            displayNormals: !1
                        });
                        else {
                            if (!BABYLON.NormalMaterial) return this.setState({
                                displayNormals: !0
                            }), void c.Tools.LoadScript("https://preview.babylonjs.com/materialsLibrary/babylonjs.materials.js", function() {
                                e.displayNormals()
                            });
                            t.reservedDataStore || (t.reservedDataStore = {}), t.reservedDataStore.originalMaterial = t.material;
                            var r = new BABYLON.NormalMaterial("normalMaterial", n);
                            r.disableLighting = !0, r.sideOrientation = t.material.sideOrientation, r.reservedDataStore = {
                                hidden: !0
                            }, t.material = r, this.setState({
                                displayNormals: !0
                            })
                        }
                }, t.prototype.onMaterialLink = function() {
                    if (this.props.onSelectionChangedObservable) {
                        var e = this.props.mesh;
                        this.props.onSelectionChangedObservable.notifyObservers(e.material)
                    }
                }, t.prototype.onSourceMeshLink = function() {
                    if (this.props.onSelectionChangedObservable) {
                        var e = this.props.mesh;
                        this.props.onSelectionChangedObservable.notifyObservers(e.sourceMesh)
                    }
                }, t.prototype.convertPhysicsTypeToString = function() {
                    switch (this.props.mesh.physicsImpostor.type) {
                        case c.PhysicsImpostor.NoImpostor:
                            return "No impostor";
                        case c.PhysicsImpostor.SphereImpostor:
                            return "Sphere";
                        case c.PhysicsImpostor.BoxImpostor:
                            return "Box";
                        case c.PhysicsImpostor.PlaneImpostor:
                            return "Plane";
                        case c.PhysicsImpostor.MeshImpostor:
                            return "Mesh";
                        case c.PhysicsImpostor.CylinderImpostor:
                            return "Cylinder";
                        case c.PhysicsImpostor.ParticleImpostor:
                            return "Particle";
                        case c.PhysicsImpostor.HeightmapImpostor:
                            return "Heightmap";
                        case c.PhysicsImpostor.ConvexHullImpostor:
                            return "Convex hull";
                        case c.PhysicsImpostor.RopeImpostor:
                            return "Rope";
                        case c.PhysicsImpostor.SoftbodyImpostor:
                            return "Soft body"
                    }
                    return "Unknown"
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.mesh,
                        n = t.getScene(),
                        r = null != t.material && "NormalMaterial" === t.material.getClassName(),
                        a = !(!t.reservedDataStore || !t.reservedDataStore.normalLines),
                        o = !(!t.reservedDataStore || !t.reservedDataStore.wireframeOver),
                        i = [];
                    if (t.morphTargetManager)
                        for (var s = 0; s < t.morphTargetManager.numTargets; s++) i.push(t.morphTargetManager.getTarget(s));
                    var p = [{
                            label: "Accurate",
                            value: c.AbstractMesh.OCCLUSION_ALGORITHM_TYPE_ACCURATE
                        }, {
                            label: "Conservative",
                            value: c.AbstractMesh.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE
                        }],
                        u = [{
                            label: "None",
                            value: c.AbstractMesh.OCCLUSION_TYPE_NONE
                        }, {
                            label: "Optimistic",
                            value: c.AbstractMesh.OCCLUSION_TYPE_OPTIMISTIC
                        }, {
                            label: "Strict",
                            value: c.AbstractMesh.OCCLUSION_TYPE_STRICT
                        }];
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ge, {
                        globalState: this.props.globalState,
                        target: t,
                        lockObject: this.props.lockObject,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "ID",
                        value: t.id
                    }), l.createElement(J, {
                        label: "Unique ID",
                        value: t.uniqueId.toString()
                    }), l.createElement(J, {
                        label: "Class",
                        value: t.getClassName()
                    }), l.createElement(J, {
                        label: "Vertices",
                        value: t.getTotalVertices().toString()
                    }), l.createElement(J, {
                        label: "Faces",
                        value: (t.getTotalIndices() / 3).toFixed(0)
                    }), l.createElement(J, {
                        label: "Sub-meshes",
                        value: t.subMeshes ? t.subMeshes.length.toString() : "0"
                    }), l.createElement(J, {
                        label: "Has skeleton",
                        value: t.skeleton ? "Yes" : "No"
                    }), l.createElement(ae, {
                        label: "Is enabled",
                        isSelected: function() {
                            return t.isEnabled()
                        },
                        onSelect: function(e) {
                            return t.setEnabled(e)
                        }
                    }), l.createElement(ae, {
                        label: "Is pickable",
                        target: t,
                        propertyName: "isPickable",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.material && l.createElement(J, {
                        label: "Material",
                        value: t.material.name,
                        onLink: function() {
                            return e.onMaterialLink()
                        }
                    }), t.isAnInstance && l.createElement(J, {
                        label: "Source",
                        value: t.sourceMesh.name,
                        onLink: function() {
                            return e.onSourceMeshLink()
                        }
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TRANSFORMS"
                    }, l.createElement(be, {
                        label: "Position",
                        target: t,
                        propertyName: "position",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), !t.rotationQuaternion && l.createElement(be, {
                        label: "Rotation",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: t,
                        propertyName: "rotation",
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.rotationQuaternion && l.createElement(me, {
                        label: "Rotation",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: t,
                        propertyName: "rotationQuaternion",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Scaling",
                        target: t,
                        propertyName: "scaling",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "DISPLAY",
                        closed: !0
                    }, !t.isAnInstance && l.createElement(ce, {
                        label: "Visibility",
                        target: t,
                        propertyName: "visibility",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Alpha index",
                        target: t,
                        propertyName: "alphaIndex",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Receive shadows",
                        target: t,
                        propertyName: "receiveShadows",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.isVerticesDataPresent(c.VertexBuffer.ColorKind) && l.createElement(ae, {
                        label: "Use vertex colors",
                        target: t,
                        propertyName: "useVertexColors",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), n.fogMode !== c.Scene.FOGMODE_NONE && l.createElement(ae, {
                        label: "Apply fog",
                        target: t,
                        propertyName: "applyFog",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), !t.parent && l.createElement(ae, {
                        label: "Infinite distance",
                        target: t,
                        propertyName: "infiniteDistance",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), null != t.morphTargetManager && l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "MORPH TARGETS",
                        closed: !0
                    }, i.map(function(t, n) {
                        return l.createElement(ce, {
                            label: t.name,
                            target: t,
                            propertyName: "influence",
                            minimum: 0,
                            maximum: 1,
                            step: .01,
                            onPropertyChangedObservable: e.props.onPropertyChangedObservable
                        })
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ADVANCED",
                        closed: !0
                    }, t.useBones && l.createElement(ae, {
                        label: "Compute bones using shaders",
                        target: t,
                        propertyName: "computeBonesUsingShaders",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Collisions",
                        target: t,
                        propertyName: "checkCollisions",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(J, {
                        label: "Has normals",
                        value: t.isVerticesDataPresent(c.VertexBuffer.NormalKind) ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Has vertex colors",
                        value: t.isVerticesDataPresent(c.VertexBuffer.ColorKind) ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Has UV set 0",
                        value: t.isVerticesDataPresent(c.VertexBuffer.UVKind) ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Has UV set 1",
                        value: t.isVerticesDataPresent(c.VertexBuffer.UV2Kind) ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Has UV set 2",
                        value: t.isVerticesDataPresent(c.VertexBuffer.UV3Kind) ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Has UV set 3",
                        value: t.isVerticesDataPresent(c.VertexBuffer.UV4Kind) ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Has tangents",
                        value: t.isVerticesDataPresent(c.VertexBuffer.TangentKind) ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Has matrix weights",
                        value: t.isVerticesDataPresent(c.VertexBuffer.MatricesWeightsKind) ? "Yes" : "No"
                    }), l.createElement(J, {
                        label: "Has matrix indices",
                        value: t.isVerticesDataPresent(c.VertexBuffer.MatricesIndicesKind) ? "Yes" : "No"
                    })), null != t.physicsImpostor && l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "PHYSICS",
                        closed: !0
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Mass",
                        target: t.physicsImpostor,
                        propertyName: "mass",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Friction",
                        target: t.physicsImpostor,
                        propertyName: "friction",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Restitution",
                        target: t.physicsImpostor,
                        propertyName: "restitution",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(J, {
                        label: "Type",
                        value: this.convertPhysicsTypeToString()
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "OCCLUSIONS",
                        closed: !0
                    }, l.createElement(ue, {
                        label: "Type",
                        options: u,
                        target: t,
                        propertyName: "occlusionType",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Retry count",
                        minimum: -1,
                        maximum: 10,
                        decimalCount: 0,
                        step: 1,
                        target: t,
                        propertyName: "occlusionRetryCount",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Algorithm",
                        options: p,
                        target: t,
                        propertyName: "occlusionQueryAlgorithmType",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "EDGE RENDERING",
                        closed: !0
                    }, l.createElement(ae, {
                        label: "Enable",
                        target: t,
                        isSelected: function() {
                            return null != t.edgesRenderer
                        },
                        onSelect: function(e) {
                            e ? t.enableEdgesRendering() : t.disableEdgesRendering()
                        }
                    }), l.createElement(ce, {
                        label: "Edge width",
                        minimum: 0,
                        maximum: 10,
                        step: .1,
                        target: t,
                        propertyName: "edgesWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Edge color",
                        target: t,
                        propertyName: "edgesColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "OUTLINE & OVERLAY",
                        closed: !0
                    }, l.createElement(ae, {
                        label: "Render overlay",
                        target: t,
                        propertyName: "renderOverlay",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Overlay color",
                        target: t,
                        propertyName: "overlayColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Render outline",
                        target: t,
                        propertyName: "renderOutline",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Outline color",
                        target: t,
                        propertyName: "outlineColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "DEBUG",
                        closed: !0
                    }, t.material && l.createElement(ae, {
                        label: "Display normals",
                        isSelected: function() {
                            return r
                        },
                        onSelect: function() {
                            return e.displayNormals()
                        }
                    }), t.isVerticesDataPresent(c.VertexBuffer.NormalKind) && l.createElement(ae, {
                        label: "Render vertex normals",
                        isSelected: function() {
                            return a
                        },
                        onSelect: function() {
                            return e.renderNormalVectors()
                        }
                    }), l.createElement(ae, {
                        label: "Render wireframe over mesh",
                        isSelected: function() {
                            return o
                        },
                        onSelect: function() {
                            return e.renderWireframeOver()
                        }
                    })))
                }, t
            }(l.Component),
            Ge = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.transformNode;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ge, {
                        globalState: this.props.globalState,
                        target: e,
                        lockObject: this.props.lockObject,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "ID",
                        value: e.id
                    }), l.createElement(J, {
                        label: "Unique ID",
                        value: e.uniqueId.toString()
                    }), l.createElement(J, {
                        label: "Class",
                        value: e.getClassName()
                    }), l.createElement(ae, {
                        label: "IsEnabled",
                        isSelected: function() {
                            return e.isEnabled()
                        },
                        onSelect: function(t) {
                            return e.setEnabled(t)
                        }
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TRANSFORMATIONS"
                    }, l.createElement(be, {
                        label: "Position",
                        target: e,
                        propertyName: "position",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), !e.rotationQuaternion && l.createElement(be, {
                        label: "Rotation",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: e,
                        propertyName: "rotation",
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.rotationQuaternion && l.createElement(me, {
                        label: "Rotation",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: e,
                        propertyName: "rotationQuaternion",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Scaling",
                        target: e,
                        propertyName: "scaling",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            He = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._onDebugSelectionChangeObservable = new c.Observable, n
                }
                return a(t, e), t.prototype.renderTextures = function() {
                    var e = this.props.material,
                        t = this._onDebugSelectionChangeObservable;
                    return l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TEXTURES"
                    }, l.createElement(Ee, {
                        label: "Diffuse",
                        texture: e.diffuseTexture,
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Reflection",
                        texture: e.reflectionTexture,
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), e.reflectionTexture && l.createElement(ce, {
                        label: "Reflection blur",
                        target: e,
                        propertyName: "reflectionBlur",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t.prototype.render = function() {
                    var e = this.props.material;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        material: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LIGHTING & COLORS"
                    }, l.createElement(he, {
                        label: "Primary",
                        target: e,
                        propertyName: "primaryColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Shadow level",
                        target: e,
                        propertyName: "primaryColorShadowLevel",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Highlight level",
                        target: e,
                        propertyName: "primaryColorHighlightLevel",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), this.renderTextures(), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "RENDERING",
                        closed: !0
                    }, l.createElement(ae, {
                        label: "Enable noise",
                        target: e,
                        propertyName: "enableNoise",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Opacity fresnel",
                        target: e,
                        propertyName: "opacityFresnel",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Reflection fresnel",
                        target: e,
                        propertyName: "reflectionFresnel",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Reflection amount",
                        target: e,
                        propertyName: "reflectionAmount",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Ve = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.renderGridInformation = function() {
                    var e = this.props.control;
                    if (!e.parent) return null;
                    var t = e.parent;
                    if (void 0 === t.rowCount) return null;
                    var n = t.getChildCellInfo(e);
                    if (void 0 === n) return null;
                    var r = n.split(":");
                    return l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GRID"
                    }, l.createElement(J, {
                        label: "Row",
                        value: r[0]
                    }), l.createElement(J, {
                        label: "Column",
                        value: r[1]
                    }))
                }, t.prototype.render = function() {
                    var e = this.props.control,
                        t = [{
                            label: "Left",
                            value: Pe.Control.HORIZONTAL_ALIGNMENT_LEFT
                        }, {
                            label: "Right",
                            value: Pe.Control.HORIZONTAL_ALIGNMENT_RIGHT
                        }, {
                            label: "Center",
                            value: Pe.Control.HORIZONTAL_ALIGNMENT_CENTER
                        }],
                        n = [{
                            label: "Top",
                            value: Pe.Control.VERTICAL_ALIGNMENT_TOP
                        }, {
                            label: "Bottom",
                            value: Pe.Control.VERTICAL_ALIGNMENT_BOTTOM
                        }, {
                            label: "Center",
                            value: Pe.Control.VERTICAL_ALIGNMENT_CENTER
                        }];
                    return l.createElement("div", null, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "Class",
                        value: e.getClassName()
                    }), l.createElement(J, {
                        label: "Unique ID",
                        value: e.uniqueId.toString()
                    }), l.createElement(ce, {
                        label: "Alpha",
                        target: e,
                        propertyName: "alpha",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), void 0 !== e.color && l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Color",
                        target: e,
                        propertyName: "color",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), void 0 !== e.background && l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Background",
                        target: e,
                        propertyName: "background",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), this.renderGridInformation(), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ALIGNMENT"
                    }, l.createElement(ue, {
                        label: "Horizontal",
                        options: t,
                        target: e,
                        propertyName: "horizontalAlignment",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Vertical",
                        options: n,
                        target: e,
                        propertyName: "verticalAlignment",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "POSITION"
                    }, l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Left",
                        target: e,
                        propertyName: "left",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Top",
                        target: e,
                        propertyName: "top",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Width",
                        target: e,
                        propertyName: "width",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Height",
                        target: e,
                        propertyName: "height",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Padding left",
                        target: e,
                        propertyName: "paddingLeft",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Padding top",
                        target: e,
                        propertyName: "paddingTop",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Padding right",
                        target: e,
                        propertyName: "paddingRight",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Padding bottom",
                        target: e,
                        propertyName: "paddingBottom",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TRANSFORMATION",
                        closed: !0
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "ScaleX",
                        target: e,
                        propertyName: "scaleX",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "ScaleY",
                        target: e,
                        propertyName: "scaleY",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Rotation",
                        target: e,
                        propertyName: "rotation",
                        minimum: 0,
                        maximum: 2 * Math.PI,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Transform center X",
                        target: e,
                        propertyName: "transformCenterX",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Transform center Y",
                        target: e,
                        propertyName: "transformCenterY",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "FONT",
                        closed: !0
                    }, l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Family",
                        target: e,
                        propertyName: "fontFamily",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Size",
                        target: e,
                        propertyName: "fontSize",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Weight",
                        target: e,
                        propertyName: "fontWeight",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Style",
                        target: e,
                        propertyName: "fontStyle",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SHADOWS",
                        closed: !0
                    }, l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Color",
                        target: e,
                        propertyName: "shadowColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Offset X",
                        target: e,
                        propertyName: "shadowOffsetX",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Offset Y",
                        target: e,
                        propertyName: "shadowOffsetY",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Blur",
                        target: e,
                        propertyName: "shadowBlur",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Be = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.control;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t
            }(l.Component),
            We = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.textBlock,
                        t = [{
                            label: "Left",
                            value: Pe.Control.HORIZONTAL_ALIGNMENT_LEFT
                        }, {
                            label: "Right",
                            value: Pe.Control.HORIZONTAL_ALIGNMENT_RIGHT
                        }, {
                            label: "Center",
                            value: Pe.Control.HORIZONTAL_ALIGNMENT_CENTER
                        }],
                        n = [{
                            label: "Top",
                            value: Pe.Control.VERTICAL_ALIGNMENT_TOP
                        }, {
                            label: "Bottom",
                            value: Pe.Control.VERTICAL_ALIGNMENT_BOTTOM
                        }, {
                            label: "Center",
                            value: Pe.Control.VERTICAL_ALIGNMENT_CENTER
                        }],
                        r = [{
                            label: "Clip",
                            value: Pe.TextWrapping.Clip
                        }, {
                            label: "Ellipsis",
                            value: Pe.TextWrapping.Ellipsis
                        }, {
                            label: "Word wrap",
                            value: Pe.TextWrapping.WordWrap
                        }];
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TEXTBLOCK"
                    }, l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Text",
                        target: e,
                        propertyName: "text",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Horizontal text alignment",
                        options: t,
                        target: e,
                        propertyName: "textHorizontalAlignment",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Vertical text alignment",
                        options: n,
                        target: e,
                        propertyName: "textVerticalAlignment",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Resize to fit",
                        target: e,
                        propertyName: "resizeToFit",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Wrapping",
                        options: r,
                        target: e,
                        propertyName: "textWrapping",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Line spacing",
                        target: e,
                        propertyName: "lineSpacing",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "OUTLINE"
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Outline width",
                        target: e,
                        propertyName: "outlineWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Outline color",
                        target: e,
                        propertyName: "outlineColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Ye = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.inputText;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "INPUTTEXT"
                    }, l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Text",
                        target: e,
                        propertyName: "text",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Prompt",
                        target: e,
                        propertyName: "promptMessage",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Max width",
                        target: e,
                        propertyName: "maxWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Highlight color",
                        target: e,
                        propertyName: "textHighlightColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Highligher opacity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        target: e,
                        propertyName: "highligherOpacity",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "On focus select all",
                        target: e,
                        propertyName: "onFocusSelectAll",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Focused background",
                        target: e,
                        propertyName: "focusedBackground",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Max width",
                        target: e,
                        propertyName: "maxWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Margin",
                        target: e,
                        propertyName: "margin",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Auto stretch width",
                        target: e,
                        propertyName: "autoStretchWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Thickness",
                        target: e,
                        propertyName: "thickness",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Placeholder text",
                        target: e,
                        propertyName: "placeholderText",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Placeholder color",
                        target: e,
                        propertyName: "placeholderColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Xe = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.colorPicker;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "COLORPICKER"
                    }, l.createElement(he, {
                        label: "Color",
                        target: e,
                        propertyName: "value",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Ke = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = n.props.animationGroup;
                    return n.state = {
                        playButtonText: r.isPlaying ? "Pause" : "Play",
                        currentFrame: 0
                    }, n
                }
                return a(t, e), t.prototype.disconnect = function(e) {
                    this._onAnimationGroupPlayObserver && (e.onAnimationGroupPlayObservable.remove(this._onAnimationGroupPlayObserver), this._onAnimationGroupPlayObserver = null), this._onAnimationGroupPauseObserver && (e.onAnimationGroupPauseObservable.remove(this._onAnimationGroupPauseObserver), this._onAnimationGroupPauseObserver = null)
                }, t.prototype.connect = function(e) {
                    var t = this;
                    this._onAnimationGroupPlayObserver = e.onAnimationGroupPlayObservable.add(function() {
                        t.forceUpdate()
                    }), this._onAnimationGroupPauseObserver = e.onAnimationGroupPauseObservable.add(function() {
                        t.forceUpdate()
                    }), this.updateCurrentFrame(e)
                }, t.prototype.updateCurrentFrame = function(e) {
                    if (e.targetedAnimations.length > 0) {
                        var t = e.targetedAnimations[0].animation.runtimeAnimations;
                        t.length > 0 ? this.setState({
                            currentFrame: t[0].currentFrame
                        }) : this.setState({
                            currentFrame: 0
                        })
                    }
                }, t.prototype.shouldComponentUpdate = function(e) {
                    return this.props.animationGroup !== e.animationGroup && (this.disconnect(this.props.animationGroup), this.connect(e.animationGroup)), !0
                }, t.prototype.componentWillMount = function() {
                    var e = this;
                    this.connect(this.props.animationGroup), this._onBeforeRenderObserver = this.props.scene.onBeforeRenderObservable.add(function() {
                        e.updateCurrentFrame(e.props.animationGroup)
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.disconnect(this.props.animationGroup), this._onBeforeRenderObserver && (this.props.scene.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = null)
                }, t.prototype.playOrPause = function() {
                    var e = this.props.animationGroup;
                    e.isPlaying ? (this.setState({
                        playButtonText: "Play"
                    }), e.pause()) : (this.setState({
                        playButtonText: "Pause"
                    }), this.props.scene.animationGroups.forEach(function(e) {
                        return e.pause()
                    }), e.play(!0))
                }, t.prototype.onCurrentFrameChange = function(e) {
                    var t = this.props.animationGroup;
                    t.isPlaying ? t.goToFrame(e) : (t.play(!0), t.goToFrame(e), t.pause()), this.setState({
                        currentFrame: e
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.animationGroup,
                        n = t.isPlaying ? "Pause" : "Play";
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "CONTROLS"
                    }, l.createElement(Me, {
                        label: n,
                        onClick: function() {
                            return e.playOrPause()
                        }
                    }), l.createElement(ce, {
                        label: "Speed ratio",
                        minimum: 0,
                        maximum: 10,
                        step: .1,
                        target: t,
                        propertyName: "speedRatio",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        ref: "timeline",
                        label: "Current frame",
                        minimum: t.from,
                        maximum: t.to,
                        step: (t.to - t.from) / 1e3,
                        directValue: this.state.currentFrame,
                        onInput: function(t) {
                            return e.onCurrentFrameChange(t)
                        }
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "INFOS"
                    }, l.createElement(J, {
                        label: "Animation count",
                        value: t.targetedAnimations.length.toString()
                    }), l.createElement(J, {
                        label: "From",
                        value: t.from.toFixed(2)
                    }), l.createElement(J, {
                        label: "To",
                        value: t.to.toFixed(2)
                    })))
                }, t
            }(l.Component),
            qe = function() {
                this.lock = !1
            },
            Qe = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.image,
                        n = [{
                            label: "None",
                            value: Pe.Image.STRETCH_NONE
                        }, {
                            label: "Fill",
                            value: Pe.Image.STRETCH_FILL
                        }, {
                            label: "Uniform",
                            value: Pe.Image.STRETCH_UNIFORM
                        }, {
                            label: "Extend",
                            value: Pe.Image.STRETCH_EXTEND
                        }, {
                            label: "NinePatch",
                            value: Pe.Image.STRETCH_NINE_PATCH
                        }];
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: t,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "IMAGE"
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Source left",
                        target: t,
                        propertyName: "sourceLeft",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Source top",
                        target: t,
                        propertyName: "sourceTop",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Source width",
                        target: t,
                        propertyName: "sourceWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Source height",
                        target: t,
                        propertyName: "sourceHeight",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Autoscale",
                        target: t,
                        propertyName: "autoScale",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Stretch",
                        options: n,
                        target: t,
                        propertyName: "stretch",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                mode: t
                            })
                        }
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ANIMATION SHEET"
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Cell Id",
                        isInteger: !0,
                        target: t,
                        propertyName: "cellId",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Cell width",
                        target: t,
                        propertyName: "cellWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Cell height",
                        target: t,
                        propertyName: "cellHeight",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            $e = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.slider;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SLIDER"
                    }, l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Border color",
                        target: e,
                        propertyName: "borderColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Display thumb",
                        target: e,
                        propertyName: "displayThumb",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Thumb circle",
                        target: e,
                        propertyName: "isThumbCircle",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Vertical",
                        target: e,
                        propertyName: "isVertical",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Thumb clamped",
                        target: e,
                        propertyName: "isThumbClamped",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Bar offset",
                        target: e,
                        propertyName: "barOffset",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Thumb width",
                        target: e,
                        propertyName: "thumbWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Minimum",
                        target: e,
                        propertyName: "minimum",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Maximum",
                        target: e,
                        propertyName: "maximum",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Value",
                        target: e,
                        propertyName: "value",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Ze = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.imageBasedSlider;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "IMAGE BASED SLIDER"
                    }, l.createElement(ae, {
                        label: "Display thumb",
                        target: e,
                        propertyName: "displayThumb",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Vertical",
                        target: e,
                        propertyName: "isVertical",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Thumb clamped",
                        target: e,
                        propertyName: "isThumbClamped",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Bar offset",
                        target: e,
                        propertyName: "barOffset",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Thumb width",
                        target: e,
                        propertyName: "thumbWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Minimum",
                        target: e,
                        propertyName: "minimum",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Maximum",
                        target: e,
                        propertyName: "maximum",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Value",
                        target: e,
                        propertyName: "value",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Je = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.rectangle;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "RECTANGLE"
                    }, l.createElement(ae, {
                        label: "Clip children",
                        target: e,
                        propertyName: "clipChildren",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Thickness",
                        target: e,
                        propertyName: "thickness",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Corner radius",
                        target: e,
                        propertyName: "cornerRadius",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            et = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.ellipse;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ELLIPSE"
                    }, l.createElement(ae, {
                        label: "Clip children",
                        target: e,
                        propertyName: "clipChildren",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Thickness",
                        target: e,
                        propertyName: "thickness",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            tt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.checkbox;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "CHECKBOX"
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Check size ratio",
                        target: e,
                        propertyName: "checkSizeRatio",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Checked",
                        target: e,
                        propertyName: "isChecked",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            nt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.radioButton;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "RADIO BUTTON"
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Thickness",
                        target: e,
                        propertyName: "thickness",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Check size ratio",
                        target: e,
                        propertyName: "checkSizeRatio",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Group",
                        target: e,
                        propertyName: "group",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Checked",
                        target: e,
                        propertyName: "isChecked",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            rt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.onDashChange = function(e) {
                    var t = this.props.line,
                        n = e.split(",");
                    t.dash = [], n.forEach(function(e) {
                        var n = parseInt(e);
                        isNaN(n) || t.dash.push(n)
                    })
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.line;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: t,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LINE"
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Line width",
                        target: t,
                        propertyName: "lineWidth",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "X1",
                        target: t,
                        propertyName: "x1",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Y1",
                        target: t,
                        propertyName: "y1",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "X2",
                        target: t,
                        propertyName: "x2",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Y2",
                        target: t,
                        propertyName: "y2",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Dash pattern",
                        target: t,
                        value: t.dash.join(","),
                        onChange: function(t) {
                            return e.onDashChange(t)
                        }
                    })))
                }, t
            }(l.Component),
            at = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.scrollViewer;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "RECTANGLE"
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Thickness",
                        target: e,
                        propertyName: "thickness",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Corner radius",
                        target: e,
                        propertyName: "cornerRadius",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SCROLLVIEWER"
                    }, l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Bar size",
                        target: e,
                        propertyName: "barSize",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Bar color",
                        target: e,
                        propertyName: "barColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(fe, {
                        lockObject: this.props.lockObject,
                        label: "Bar background",
                        target: e,
                        propertyName: "barBackground",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Wheel precision",
                        target: e,
                        propertyName: "wheelPrecision",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            ot = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.renderRows = function() {
                    for (var e = this.props.grid, t = [], n = 0; n < e.rowCount; n++) t.push(e.getRowDefinition(n));
                    return t.map(function(t, n) {
                        return l.createElement(J, {
                            key: "r" + n,
                            label: "Row " + n,
                            value: t.toString(e.host, 2),
                            underline: n === e.rowCount - 1
                        })
                    })
                }, t.prototype.renderColumns = function() {
                    for (var e = this.props.grid, t = [], n = 0; n < e.columnCount; n++) t.push(e.getColumnDefinition(n));
                    return t.map(function(t, n) {
                        return l.createElement(J, {
                            key: "c" + n,
                            label: "Column " + n,
                            value: t.toString(e.host, 2)
                        })
                    })
                }, t.prototype.render = function() {
                    for (var e = this.props.grid, t = [], n = 0; n < e.rowCount; n++) t.push(e.getColumnDefinition(n));
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GRID"
                    }, this.renderRows(), this.renderColumns()))
                }, t
            }(l.Component),
            it = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._onDebugSelectionChangeObservable = new c.Observable, n
                }
                return a(t, e), t.prototype.renderTextures = function() {
                    var e = this.props.material,
                        t = this._onDebugSelectionChangeObservable;
                    return l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TEXTURES"
                    }, l.createElement(Ee, {
                        label: "Base",
                        texture: e.baseTexture,
                        propertyName: "baseTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Metallic roughness",
                        texture: e.metallicRoughnessTexture,
                        propertyName: "metallicRoughnessTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Normal",
                        texture: e.normalTexture,
                        propertyName: "normalTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Environment",
                        texture: e.environmentTexture,
                        propertyName: "environmentTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Emissive",
                        texture: e.emissiveTexture,
                        propertyName: "emissiveTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Lightmap",
                        texture: e.lightmapTexture,
                        propertyName: "lightmapTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }))
                }, t.prototype.render = function() {
                    var e = this.props.material;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        material: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), this.renderTextures(), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LIGHTING & COLORS"
                    }, l.createElement(he, {
                        label: "Base",
                        target: e,
                        propertyName: "baseColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Emissive",
                        target: e,
                        propertyName: "emissiveColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LEVELS",
                        closed: !0
                    }, l.createElement(ce, {
                        label: "Metallic",
                        target: e,
                        propertyName: "metallic",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Roughness",
                        target: e,
                        propertyName: "roughness",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            lt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._onDebugSelectionChangeObservable = new c.Observable, n
                }
                return a(t, e), t.prototype.renderTextures = function() {
                    var e = this.props.material,
                        t = this._onDebugSelectionChangeObservable;
                    return l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TEXTURES"
                    }, l.createElement(Ee, {
                        label: "Diffuse",
                        texture: e.diffuseTexture,
                        propertyName: "diffuseTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Specular glossiness",
                        texture: e.specularGlossinessTexture,
                        propertyName: "specularGlossinessTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Normal",
                        texture: e.normalTexture,
                        propertyName: "normalTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Environment",
                        texture: e.environmentTexture,
                        propertyName: "environmentTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Emissive",
                        texture: e.emissiveTexture,
                        propertyName: "emissiveTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }), l.createElement(Ee, {
                        label: "Lightmap",
                        texture: e.lightmapTexture,
                        propertyName: "lightmapTexture",
                        material: e,
                        onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                        onDebugSelectionChangeObservable: t
                    }))
                }, t.prototype.render = function() {
                    var e = this.props.material;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        material: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), this.renderTextures(), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LIGHTING & COLORS"
                    }, l.createElement(he, {
                        label: "Diffuse",
                        target: e,
                        propertyName: "diffuseColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Specular",
                        target: e,
                        propertyName: "specularColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "LEVELS",
                        closed: !0
                    }, l.createElement(ce, {
                        label: "Glossiness",
                        target: e,
                        propertyName: "glossiness",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            st = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.stackPanel;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        control: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "STACKPANEL"
                    }, l.createElement(ae, {
                        label: "Clip children",
                        target: e,
                        propertyName: "clipChildren",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Vertical",
                        target: e,
                        propertyName: "isVertical",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            pt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.postProcess;
                    return l.createElement("div", null, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "Class",
                        value: e.getClassName()
                    }), e.width && l.createElement(J, {
                        label: "Width",
                        value: e.width.toString()
                    }), e.height && l.createElement(J, {
                        label: "Height",
                        value: e.height.toString()
                    }), l.createElement(ae, {
                        label: "Auto clear",
                        target: e,
                        propertyName: "autoClear",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.clearColor && l.createElement(he, {
                        label: "Clear color",
                        target: e,
                        propertyName: "clearColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Pixel perfect",
                        target: e,
                        propertyName: "enablePixelPerfectMode",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Fullscreen viewport",
                        target: e,
                        propertyName: "forceFullscreenViewport",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Samples",
                        target: e,
                        propertyName: "samples",
                        minimum: 1,
                        maximum: 8,
                        step: 1,
                        decimalCount: 0,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            ct = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.postProcess;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(pt, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        postProcess: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t
            }(l.Component),
            ut = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.renderPipeline,
                        t = e;
                    return l.createElement("div", null, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "Class",
                        value: e.getClassName()
                    }), void 0 !== t.samples && l.createElement(ce, {
                        label: "Samples",
                        minimum: 1,
                        maximum: 8,
                        step: 1,
                        decimalCount: 0,
                        target: e,
                        propertyName: "samples",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            dt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.renderPipeline;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ut, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        renderPipeline: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t
            }(l.Component),
            ht = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.renderPipeline,
                        n = t.scene.activeCamera,
                        r = [{
                            label: "Standard",
                            value: c.ImageProcessingConfiguration.TONEMAPPING_STANDARD
                        }, {
                            label: "ACES",
                            value: c.ImageProcessingConfiguration.TONEMAPPING_ACES
                        }],
                        a = [{
                            label: "Multiply",
                            value: c.ImageProcessingConfiguration.VIGNETTEMODE_MULTIPLY
                        }, {
                            label: "Opaque",
                            value: c.ImageProcessingConfiguration.VIGNETTEMODE_OPAQUE
                        }];
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ut, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        renderPipeline: t,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "BLOOM"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t,
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        propertyName: "bloomEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.bloomEnabled && l.createElement("div", null, l.createElement(ce, {
                        label: "Threshold",
                        minimum: 0,
                        maximum: 1,
                        step: .05,
                        target: t,
                        propertyName: "bloomThreshold",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Weight",
                        minimum: 0,
                        maximum: 1,
                        step: .05,
                        target: t,
                        propertyName: "bloomWeight",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Kernel",
                        minimum: 0,
                        maximum: 128,
                        step: 1,
                        target: t,
                        propertyName: "bloomKernel",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        decimalCount: 0
                    }), l.createElement(ce, {
                        label: "Scale",
                        minimum: 0,
                        maximum: 1,
                        step: .25,
                        target: t,
                        propertyName: "bloomScale",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "CHROMATIC ABERRATION"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t,
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        propertyName: "chromaticAberrationEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.chromaticAberrationEnabled && l.createElement("div", null, l.createElement(ce, {
                        label: "aberrationAmount",
                        minimum: 0,
                        maximum: 128,
                        step: .1,
                        target: t.chromaticAberration,
                        propertyName: "aberrationAmount",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Radial intensity",
                        minimum: 0,
                        maximum: 1,
                        step: .01,
                        target: t.chromaticAberration,
                        propertyName: "radialIntensity",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(Te, {
                        label: "Center",
                        target: t.chromaticAberration,
                        propertyName: "centerPosition",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(Te, {
                        label: "Direction",
                        target: t.chromaticAberration,
                        propertyName: "direction",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "DEPTH OF FIELD"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t,
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        propertyName: "depthOfFieldEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.depthOfFieldEnabled && l.createElement("div", null, l.createElement(ce, {
                        label: "Focal length",
                        minimum: 0,
                        maximum: n.maxZ,
                        step: .1,
                        target: t.depthOfField,
                        propertyName: "focalLength",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "fStop",
                        minimum: 0,
                        maximum: 32,
                        step: .1,
                        target: t.depthOfField,
                        propertyName: "fStop",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Distance",
                        minimum: 0,
                        maximum: n.maxZ,
                        step: .1,
                        target: t.depthOfField,
                        propertyName: "focusDistance",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Lens size",
                        minimum: 0,
                        maximum: 1e3,
                        step: 1,
                        target: t.depthOfField,
                        propertyName: "lensSize",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        decimalCount: 0
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "FXAA"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t,
                        propertyName: "fxaaEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GLOW LAYER"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t,
                        propertyName: "glowLayerEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.glowLayerEnabled && l.createElement("div", null, l.createElement(ce, {
                        label: "Blur kernel size",
                        minimum: 1,
                        maximum: 128,
                        step: 1,
                        decimalCount: 0,
                        target: t.glowLayer,
                        propertyName: "blurKernelSize",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Intensity",
                        minimum: 0,
                        maximum: 10,
                        step: .1,
                        target: t.glowLayer,
                        propertyName: "intensity",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GRAIN"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t,
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        propertyName: "grainEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.grainEnabled && l.createElement("div", null, l.createElement(ae, {
                        label: "Animated",
                        target: t.grain,
                        propertyName: "animated",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Intensity",
                        minimum: 0,
                        maximum: 50,
                        step: .1,
                        target: t.grain,
                        propertyName: "intensity",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "IMAGE PROCESSING"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t,
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        propertyName: "imageProcessingEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.imageProcessing && l.createElement("div", null, l.createElement(ce, {
                        minimum: 0,
                        maximum: 4,
                        step: .1,
                        label: "Contrast",
                        target: t.imageProcessing,
                        propertyName: "contrast",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 4,
                        step: .1,
                        label: "Exposure",
                        target: t.imageProcessing,
                        propertyName: "exposure",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Tone mapping",
                        target: t.imageProcessing,
                        propertyName: "toneMappingEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Tone mapping type",
                        options: r,
                        target: t.imageProcessing,
                        propertyName: "toneMappingType",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                mode: t
                            })
                        }
                    }), l.createElement(ae, {
                        label: "Vignette",
                        target: t.imageProcessing,
                        propertyName: "vignetteEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 4,
                        step: .1,
                        label: "Vignette weight",
                        target: t.imageProcessing,
                        propertyName: "vignetteWeight",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 1,
                        step: .1,
                        label: "Vignette stretch",
                        target: t.imageProcessing,
                        propertyName: "vignetteStretch",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: Math.PI,
                        step: .1,
                        label: "Vignette FOV",
                        target: t.imageProcessing,
                        propertyName: "vignetteCameraFov",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 1,
                        step: .1,
                        label: "Vignette center X",
                        target: t.imageProcessing,
                        propertyName: "vignetteCentreX",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        minimum: 0,
                        maximum: 1,
                        step: .1,
                        label: "Vignette center Y",
                        target: t.imageProcessing,
                        propertyName: "vignetteCentreY",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Vignette color",
                        target: t.imageProcessing,
                        propertyName: "vignetteColor",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ue, {
                        label: "Vignette blend mode",
                        options: a,
                        target: t.imageProcessing,
                        propertyName: "vignetteBlendMode",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        onSelect: function(t) {
                            return e.setState({
                                mode: t
                            })
                        }
                    }))), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SHARPEN"
                    }, l.createElement(ae, {
                        label: "Enabled",
                        target: t,
                        onValueChanged: function() {
                            return e.forceUpdate()
                        },
                        propertyName: "sharpenEnabled",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), t.sharpenEnabled && l.createElement("div", null, l.createElement(ce, {
                        label: "Color amount",
                        minimum: 0,
                        maximum: 1,
                        step: .05,
                        target: t.sharpen,
                        propertyName: "colorAmount",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Edge amount",
                        minimum: 0,
                        maximum: 5,
                        step: .05,
                        target: t.sharpen,
                        propertyName: "edgeAmount",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))))
                }, t
            }(l.Component),
            bt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.renderPipeline;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ut, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        renderPipeline: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SSAO"
                    }, l.createElement(ce, {
                        label: "Strength",
                        minimum: 0,
                        maximum: 2,
                        step: .05,
                        target: e,
                        propertyName: "totalStrength",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Base",
                        minimum: 0,
                        maximum: 1,
                        step: .05,
                        target: e,
                        propertyName: "base",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Radius",
                        minimum: 1e-4,
                        maximum: .001,
                        step: 1e-4,
                        target: e,
                        propertyName: "radius",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        decimalCount: 4
                    }), l.createElement(ce, {
                        label: "Area",
                        minimum: 1e-4,
                        maximum: .01,
                        step: 1e-4,
                        target: e,
                        propertyName: "area",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        decimalCount: 4
                    }), l.createElement(ce, {
                        label: "Falloff",
                        minimum: 0,
                        maximum: 1e-5,
                        step: 1e-6,
                        target: e,
                        propertyName: "fallOff",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable,
                        decimalCount: 6
                    })))
                }, t
            }(l.Component),
            mt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.renderPipeline,
                        t = e.scene.activeCamera;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ut, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        renderPipeline: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SSAO"
                    }, l.createElement(ce, {
                        label: "Strength",
                        minimum: 0,
                        maximum: 2,
                        step: .05,
                        target: e,
                        propertyName: "totalStrength",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Base",
                        minimum: 0,
                        maximum: 1,
                        step: .05,
                        target: e,
                        propertyName: "base",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Max Z",
                        minimum: 0,
                        maximum: t.maxZ,
                        step: 1,
                        target: e,
                        propertyName: "maxZ",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Min Z aspect",
                        minimum: 0,
                        maximum: .5,
                        step: .01,
                        target: e,
                        propertyName: "minZAspect",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Radius",
                        minimum: 0,
                        maximum: 10,
                        step: .05,
                        target: e,
                        propertyName: "radius",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            ft = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n._animations = null, n._animationControl = {
                        from: 0,
                        to: 0,
                        loop: !1
                    }, n._isPlaying = !1, n.state = {
                        currentFrame: 0
                    };
                    var r = n.props.animatable;
                    if (n._ranges = r.getAnimationRanges ? r.getAnimationRanges() : [], r.getAnimatables) {
                        var a = r.getAnimatables();
                        n._animations = new Array, a.forEach(function(e) {
                            var t;
                            e.animations && (t = n._animations).push.apply(t, e.animations)
                        }), n._animations && n._animations.length && n._animations.forEach(function(e) {
                            var t = e.getKeys();
                            if (t && t.length > 0) {
                                t[0].frame < n._animationControl.from && (n._animationControl.from = t[0].frame);
                                var r = t.length - 1;
                                t[r].frame > n._animationControl.to && (n._animationControl.to = t[r].frame)
                            }
                        })
                    }
                    return n
                }
                return a(t, e), t.prototype.playOrPause = function() {
                    var e = this.props.animatable;
                    this._isPlaying = this.props.scene.getAllAnimatablesByTarget(e).length > 0, this._isPlaying ? (this.props.scene.stopAnimation(this.props.animatable), this._runningAnimatable = null) : this._runningAnimatable = this.props.scene.beginAnimation(this.props.animatable, this._animationControl.from, this._animationControl.to, this._animationControl.loop), this.forceUpdate()
                }, t.prototype.componentWillMount = function() {
                    var e = this;
                    this._onBeforeRenderObserver = this.props.scene.onBeforeRenderObservable.add(function() {
                        e._isPlaying && e._runningAnimatable && e.setState({
                            currentFrame: e._runningAnimatable.masterFrame
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this._onBeforeRenderObserver && (this.props.scene.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = null)
                }, t.prototype.onCurrentFrameChange = function(e) {
                    this._runningAnimatable && (this._runningAnimatable.goToFrame(e), this.setState({
                        currentFrame: e
                    }))
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.animatable,
                        n = this.props.animatable,
                        r = this.props.scene.getAllAnimatablesByTarget(t);
                    return this._isPlaying = r.length > 0, this._isPlaying && !this._runningAnimatable && (this._runningAnimatable = r[0]), this._runningAnimatable && (this._animationControl.from = this._runningAnimatable.fromFrame, this._animationControl.to = this._runningAnimatable.toFrame, this._animationControl.loop = this._runningAnimatable.loopAnimation), l.createElement("div", null, (this._ranges.length > 0 || this._animations && this._animations.length > 0) && l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ANIMATION OVERRIDE"
                    }, l.createElement(ae, {
                        label: "Enable override",
                        onSelect: function(t) {
                            t ? (n.animationPropertiesOverride = new c.AnimationPropertiesOverride, n.animationPropertiesOverride.blendingSpeed = .05) : n.animationPropertiesOverride = null, e.forceUpdate()
                        },
                        isSelected: function() {
                            return null != n.animationPropertiesOverride
                        },
                        onValueChanged: function() {
                            return e.forceUpdate()
                        }
                    }), null != n.animationPropertiesOverride && l.createElement("div", null, l.createElement(ae, {
                        label: "Enable blending",
                        target: n.animationPropertiesOverride,
                        propertyName: "enableBlending",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Blending speed",
                        target: n.animationPropertiesOverride,
                        propertyName: "blendingSpeed",
                        minimum: 0,
                        maximum: .1,
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))), this._ranges.length > 0 && l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ANIMATION RANGES"
                    }, this._ranges.map(function(n) {
                        return l.createElement(Me, {
                            key: n.name,
                            label: n.name,
                            onClick: function() {
                                e._runningAnimatable = null, e.props.scene.beginAnimation(t, n.from, n.to, !0)
                            }
                        })
                    })), this._animations && this._animations.length > 0 && l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "ANIMATIONS"
                    }, l.createElement(J, {
                        label: "Count",
                        value: this._animations.length.toString()
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "From",
                        target: this._animationControl,
                        propertyName: "from"
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "To",
                        target: this._animationControl,
                        propertyName: "to"
                    }), l.createElement(ae, {
                        label: "Loop",
                        onSelect: function(t) {
                            return e._animationControl.loop = t
                        },
                        isSelected: function() {
                            return e._animationControl.loop
                        }
                    }), l.createElement(Me, {
                        label: this._isPlaying ? "Stop" : "Play",
                        onClick: function() {
                            return e.playOrPause()
                        }
                    }), this._isPlaying && l.createElement(ce, {
                        ref: "timeline",
                        label: "Current frame",
                        minimum: this._animationControl.from,
                        maximum: this._animationControl.to,
                        step: (this._animationControl.to - this._animationControl.from) / 1e3,
                        directValue: this.state.currentFrame,
                        onInput: function(t) {
                            return e.onCurrentFrameChange(t)
                        }
                    })))
                }, t
            }(l.Component),
            gt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._skeletonViewersEnabled = !1, n._skeletonViewers = new Array, n
                }
                return a(t, e), t.prototype.switchSkeletonViewers = function() {
                    this._skeletonViewersEnabled = !this._skeletonViewersEnabled;
                    var e = this.props.skeleton.getScene();
                    if (this._skeletonViewersEnabled)
                        for (var t = 0, n = e.meshes; t < n.length; t++) {
                            var r = n[t];
                            if (r.skeleton === this.props.skeleton) {
                                for (var a = !1, o = 0; o < this._skeletonViewers.length; o++)
                                    if (this._skeletonViewers[o].skeleton === r.skeleton) {
                                        a = !0;
                                        break
                                    }
                                if (a) continue;
                                var i = new c.SkeletonViewer(r.skeleton, r, e, !0, 0);
                                i.isEnabled = !0, this._skeletonViewers.push(i), r.reservedDataStore || (r.reservedDataStore = {}), r.reservedDataStore.skeletonViewer = i
                            }
                        } else {
                            for (var l = 0; l < this._skeletonViewers.length; l++) this._skeletonViewers[l].mesh.reservedDataStore.skeletonViewer = null, this._skeletonViewers[l].dispose();
                            this._skeletonViewers = []
                        }
                }, t.prototype.checkSkeletonViewerState = function(e) {
                    var t = e.skeleton.getScene();
                    if (this._skeletonViewers = [], t) {
                        for (var n = 0, r = t.meshes; n < r.length; n++) {
                            var a = r[n];
                            a.skeleton === e.skeleton && a.reservedDataStore && a.reservedDataStore.skeletonViewer && this._skeletonViewers.push(a.reservedDataStore.skeletonViewer)
                        }
                        this._skeletonViewersEnabled = this._skeletonViewers.length > 0
                    }
                }, t.prototype.componentWillMount = function() {
                    this.checkSkeletonViewerState(this.props)
                }, t.prototype.shouldComponentUpdate = function(e) {
                    return e.skeleton !== this.props.skeleton && this.checkSkeletonViewerState(e), !0
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.skeleton;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ge, {
                        globalState: this.props.globalState,
                        target: t,
                        lockObject: this.props.lockObject,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "ID",
                        value: t.id
                    }), l.createElement(J, {
                        label: "Bone count",
                        value: t.bones.length.toString()
                    }), l.createElement(ae, {
                        label: "Use texture to store matrices",
                        target: t,
                        propertyName: "useTextureToStoreBoneMatrices",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Debug mode",
                        isSelected: function() {
                            return e._skeletonViewersEnabled
                        },
                        onSelect: function() {
                            return e.switchSkeletonViewers()
                        }
                    })), l.createElement(ft, {
                        globalState: this.props.globalState,
                        animatable: t,
                        scene: t.getScene(),
                        lockObject: this.props.lockObject
                    }))
                }, t
            }(l.Component),
            vt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.bone;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GENERAL"
                    }, l.createElement(J, {
                        label: "ID",
                        value: e.id
                    }), l.createElement(J, {
                        label: "Unique ID",
                        value: e.uniqueId.toString()
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "TRANSFORMATIONS"
                    }, l.createElement(be, {
                        label: "Position",
                        target: e,
                        propertyName: "position",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), !e.rotationQuaternion && l.createElement(be, {
                        label: "Rotation",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: e,
                        propertyName: "rotation",
                        step: .01,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), e.rotationQuaternion && l.createElement(me, {
                        label: "Rotation",
                        useEuler: this.props.globalState.onlyUseEulers,
                        target: e,
                        propertyName: "rotationQuaternion",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Scaling",
                        target: e,
                        propertyName: "scaling",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            yt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.light;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Re, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        light: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SETUP"
                    }, l.createElement(he, {
                        label: "Diffuse",
                        target: e,
                        propertyName: "diffuse",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Specular",
                        target: e,
                        propertyName: "specular",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Position",
                        target: e,
                        propertyName: "position",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Direction",
                        target: e,
                        propertyName: "direction",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(Ie, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        light: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t
            }(l.Component),
            Ct = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.light;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(Re, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        light: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SETUP"
                    }, l.createElement(he, {
                        label: "Diffuse",
                        target: e,
                        propertyName: "diffuse",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(he, {
                        label: "Specular",
                        target: e,
                        propertyName: "specular",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Position",
                        target: e,
                        propertyName: "position",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(be, {
                        label: "Direction",
                        target: e,
                        propertyName: "direction",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        useEuler: this.props.globalState.onlyUseEulers,
                        label: "Angle",
                        target: e,
                        propertyName: "angle",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        useEuler: this.props.globalState.onlyUseEulers,
                        label: "Inner angle",
                        target: e,
                        propertyName: "innerAngle",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(xe, {
                        lockObject: this.props.lockObject,
                        label: "Exponent",
                        target: e,
                        propertyName: "exponent",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(Ie, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        light: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }))
                }, t
            }(l.Component),
            Et = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.renderPipeline;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ut, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        renderPipeline: e,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "OPTIONS"
                    }, l.createElement(ce, {
                        label: "Edge blur",
                        minimum: 0,
                        maximum: 5,
                        step: .1,
                        target: e,
                        propertyName: "edgeBlur",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Edge distortion",
                        minimum: 0,
                        maximum: 5,
                        step: .1,
                        target: e,
                        propertyName: "edgeDistortion",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Grain amount",
                        minimum: 0,
                        maximum: 1,
                        step: .1,
                        target: e,
                        propertyName: "grainAmount",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Chromatic aberration",
                        minimum: 0,
                        maximum: 5,
                        step: .1,
                        target: e,
                        propertyName: "chromaticAberration",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Darken out of focus",
                        minimum: 0,
                        maximum: 5,
                        step: .1,
                        target: e,
                        propertyName: "darkenOutOfFocus",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Blur noise",
                        target: e,
                        propertyName: "blurNoise",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "DEPTH OF FIELD"
                    }, l.createElement(ce, {
                        label: "Aperture",
                        minimum: 0,
                        maximum: 10,
                        step: .1,
                        target: e,
                        propertyName: "dofAperture",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Distortion",
                        minimum: 0,
                        maximum: 10,
                        step: .1,
                        target: e,
                        propertyName: "dofDistortion",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ae, {
                        label: "Pentagon bokeh",
                        target: e,
                        propertyName: "pentagonBokeh",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Highlight gain",
                        minimum: 0,
                        maximum: 5,
                        step: .1,
                        target: e,
                        propertyName: "highlightsGain",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ce, {
                        label: "Highlight threshold",
                        minimum: 0,
                        maximum: 5,
                        step: .1,
                        target: e,
                        propertyName: "highlightsThreshold",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    })))
                }, t
            }(l.Component),
            Ot = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.edit = function() {
                    this.props.material.edit()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.material;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ve, {
                        globalState: this.props.globalState,
                        lockObject: this.props.lockObject,
                        material: t,
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "NODES"
                    }, l.createElement(ae, {
                        label: "Ignore alpha",
                        target: t,
                        propertyName: "ignoreAlpha",
                        onPropertyChangedObservable: this.props.onPropertyChangedObservable
                    }), l.createElement(Me, {
                        label: "Edit",
                        onClick: function() {
                            return e.edit()
                        }
                    })))
                }, t
            }(l.Component),
            St = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._lockObject = new qe, n
                }
                return a(t, e), t.prototype.timerRefresh = function() {
                    this._lockObject.lock || this.forceUpdate()
                }, t.prototype.componentWillMount = function() {
                    var e = this;
                    this._timerIntervalId = window.setInterval(function() {
                        return e.timerRefresh()
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    window.clearInterval(this._timerIntervalId)
                }, t.prototype.render = function() {
                    var e = this.props.selectedEntity;
                    if (!e) return l.createElement("div", {
                        className: "infoMessage"
                    }, "Please select an entity in the scene explorer.");
                    if (e.getClassName) {
                        var t = e.getClassName();
                        if ("Scene" === t) {
                            var n = e;
                            return l.createElement(Le, {
                                scene: n,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("Mesh")) {
                            var r = e;
                            if (r.getTotalVertices() > 0) return l.createElement("div", null, l.createElement(Ue, {
                                globalState: this.props.globalState,
                                mesh: r,
                                lockObject: this._lockObject,
                                onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            }))
                        }
                        if (-1 !== t.indexOf("FreeCamera") || -1 !== t.indexOf("UniversalCamera")) {
                            var a = e;
                            return l.createElement(ze, {
                                globalState: this.props.globalState,
                                camera: a,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("ArcRotateCamera")) {
                            var o = e;
                            return l.createElement(Fe, {
                                globalState: this.props.globalState,
                                camera: o,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("HemisphericLight" === t) {
                            var i = e;
                            return l.createElement(Ae, {
                                globalState: this.props.globalState,
                                light: i,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("PointLight" === t) {
                            var s = e;
                            return l.createElement(je, {
                                globalState: this.props.globalState,
                                light: s,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("DirectionalLight" === t) {
                            s = e;
                            return l.createElement(yt, {
                                globalState: this.props.globalState,
                                light: s,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("SpotLight" === t) {
                            s = e;
                            return l.createElement(Ct, {
                                globalState: this.props.globalState,
                                light: s,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("TransformNode") || -1 !== t.indexOf("Mesh")) {
                            var p = e;
                            return l.createElement(Ge, {
                                transformNode: p,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("StandardMaterial" === t) {
                            var c = e;
                            return l.createElement(Oe, {
                                globalState: this.props.globalState,
                                material: c,
                                lockObject: this._lockObject,
                                onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("NodeMaterial" === t) {
                            c = e;
                            return l.createElement(Ot, {
                                globalState: this.props.globalState,
                                material: c,
                                lockObject: this._lockObject,
                                onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("PBRMaterial" === t) {
                            c = e;
                            return l.createElement(Ne, {
                                globalState: this.props.globalState,
                                material: c,
                                lockObject: this._lockObject,
                                onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("PBRMetallicRoughnessMaterial" === t) {
                            c = e;
                            return l.createElement(it, {
                                globalState: this.props.globalState,
                                material: c,
                                lockObject: this._lockObject,
                                onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("PBRSpecularGlossinessMaterial" === t) {
                            c = e;
                            return l.createElement(lt, {
                                globalState: this.props.globalState,
                                material: c,
                                lockObject: this._lockObject,
                                onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("BackgroundMaterial" === t) {
                            c = e;
                            return l.createElement(He, {
                                globalState: this.props.globalState,
                                material: c,
                                lockObject: this._lockObject,
                                onSelectionChangedObservable: this.props.onSelectionChangedObservable,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("AnimationGroup" === t) {
                            var u = e;
                            return l.createElement(Ke, {
                                globalState: this.props.globalState,
                                animationGroup: u,
                                scene: this.props.scene,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("Material")) {
                            c = e;
                            return l.createElement(ye, {
                                material: c,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("DefaultRenderingPipeline")) {
                            var d = e;
                            return l.createElement(ht, {
                                renderPipeline: d,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("LensRenderingPipeline")) {
                            d = e;
                            return l.createElement(Et, {
                                renderPipeline: d,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("SSAORenderingPipeline")) {
                            d = e;
                            return l.createElement(bt, {
                                renderPipeline: d,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("SSAO2RenderingPipeline")) {
                            d = e;
                            return l.createElement(mt, {
                                renderPipeline: d,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("RenderingPipeline")) {
                            d = e;
                            return l.createElement(dt, {
                                renderPipeline: d,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("PostProcess")) {
                            var h = e;
                            return l.createElement(ct, {
                                postProcess: h,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("Texture")) {
                            var b = e;
                            return l.createElement(ke, {
                                texture: b,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("Skeleton")) {
                            var m = e;
                            return l.createElement(gt, {
                                skeleton: m,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (-1 !== t.indexOf("Bone")) {
                            var f = e;
                            return l.createElement(vt, {
                                bone: f,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("TextBlock" === t) {
                            var g = e;
                            return l.createElement(We, {
                                textBlock: g,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("InputText" === t) {
                            var v = e;
                            return l.createElement(Ye, {
                                inputText: v,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("ColorPicker" === t) {
                            var y = e;
                            return l.createElement(Xe, {
                                colorPicker: y,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("Image" === t) {
                            var C = e;
                            return l.createElement(Qe, {
                                image: C,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("Slider" === t) {
                            var E = e;
                            return l.createElement($e, {
                                slider: E,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("ImageBasedSlider" === t) {
                            var O = e;
                            return l.createElement(Ze, {
                                imageBasedSlider: O,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("Rectangle" === t) {
                            var S = e;
                            return l.createElement(Je, {
                                rectangle: S,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("StackPanel" === t) {
                            var x = e;
                            return l.createElement(st, {
                                stackPanel: x,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("Grid" === t) {
                            var P = e;
                            return l.createElement(ot, {
                                grid: P,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("ScrollViewer" === t) {
                            var k = e;
                            return l.createElement(at, {
                                scrollViewer: k,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("Ellipse" === t) {
                            var T = e;
                            return l.createElement(et, {
                                ellipse: T,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("Checkbox" === t) {
                            var N = e;
                            return l.createElement(tt, {
                                checkbox: N,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("RadioButton" === t) {
                            var w = e;
                            return l.createElement(nt, {
                                radioButton: w,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if ("Line" === t) {
                            var _ = e;
                            return l.createElement(rt, {
                                line: _,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                        if (e._host) {
                            var M = e;
                            return l.createElement(Be, {
                                control: M,
                                globalState: this.props.globalState,
                                lockObject: this._lockObject,
                                onPropertyChangedObservable: this.props.onPropertyChangedObservable
                            })
                        }
                    }
                    return null
                }, t
            }(Z),
            xt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._backStack = new Array, n.state = {
                        isBackVisible: !1
                    }, n
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    this.props.onSelectionChangedObservable && (this._onSelectionChangeObserver = this.props.onSelectionChangedObservable.add(function(t) {
                        0 !== e._backStack.length && t === e._backStack[e._backStack.length - 1] || (e._backStack.push(t), e.setState({
                            isBackVisible: e._backStack.length > 1
                        }))
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this._onSelectionChangeObserver && this.props.onSelectionChangedObservable.remove(this._onSelectionChangeObserver)
                }, t.prototype.goBack = function() {
                    this._backStack.pop();
                    var e = this._backStack[this._backStack.length - 1];
                    this.props.onSelectionChangedObservable && this.props.onSelectionChangedObservable.notifyObservers(e), this.setState({
                        isBackVisible: this._backStack.length > 1
                    })
                }, t.prototype.renderLogo = function() {
                    var e = this;
                    return this.props.noCommands ? null : this.props.handleBack ? this.state.isBackVisible ? l.createElement("div", {
                        id: "back",
                        onClick: function() {
                            return e.goBack()
                        }
                    }, l.createElement(u.a, {
                        icon: h
                    })) : null : l.createElement("img", {
                        id: "logo",
                        style: {
                            top: "0%"
                        },
                        src: "https://www.babylonjs.com/Assets/logo-babylonjs-social-twitter.png"
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        id: "header"
                    }, this.renderLogo(), l.createElement("div", {
                        id: "title"
                    }, this.props.title), l.createElement("div", {
                        id: "commands"
                    }, !this.props.noCommands && !this.props.noExpand && l.createElement("div", {
                        className: "expand",
                        onClick: function() {
                            return e.props.onPopup()
                        }
                    }, l.createElement(u.a, {
                        icon: Q
                    })), !this.props.noCommands && !this.props.noClose && l.createElement("div", {
                        className: "close",
                        onClick: function() {
                            return e.props.onClose()
                        }
                    }, l.createElement(u.a, {
                        icon: Y
                    }))))
                }, t
            }(l.Component),
            Pt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    return this.props.icon ? l.createElement("div", {
                        className: "iconMessageLine"
                    }, l.createElement("div", {
                        className: "icon",
                        style: {
                            color: this.props.color ? this.props.color : ""
                        }
                    }, l.createElement(u.a, {
                        icon: this.props.icon
                    })), l.createElement("div", {
                        className: "value",
                        title: this.props.text
                    }, this.props.text)) : l.createElement("div", {
                        className: "messageLine"
                    }, l.createElement("div", {
                        className: "value",
                        title: this.props.text,
                        style: {
                            color: this.props.color ? this.props.color : ""
                        }
                    }, this.props.text))
                }, t
            }(l.Component),
            kt = n(8),
            Tt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = n.props.globalState.glTFLoaderExtensionDefaults;
                    r.MSFT_lod = r.MSFT_lod || {
                        enabled: !0,
                        maxLODsToLoad: Number.MAX_VALUE
                    }, r.MSFT_minecraftMesh = r.MSFT_minecraftMesh || {
                        enabled: !0
                    }, r.MSFT_sRGBFactors = r.MSFT_sRGBFactors || {
                        enabled: !0
                    }, r.MSFT_audio_emitter = r.MSFT_audio_emitter || {
                        enabled: !0
                    }, r.KHR_draco_mesh_compression = r.KHR_draco_mesh_compression || {
                        enabled: !0
                    }, r.KHR_materials_pbrSpecularGlossiness = r.KHR_materials_pbrSpecularGlossiness || {
                        enabled: !0
                    }, r.KHR_materials_unlit = r.KHR_materials_unlit || {
                        enabled: !0
                    }, r.KHR_lights_punctual = r.KHR_lights_punctual || {
                        enabled: !0
                    }, r.KHR_texture_transform = r.KHR_texture_transform || {
                        enabled: !0
                    }, r.EXT_lights_image_based = r.EXT_lights_image_based || {
                        enabled: !0
                    };
                    var a = n.props.globalState.glTFLoaderDefaults;
                    return void 0 === a.animationStartMode && (a.animationStartMode = kt.GLTFLoaderAnimationStartMode.FIRST), a.capturePerformanceCounters = a.capturePerformanceCounters || !1, a.compileMaterials = a.compileMaterials || !1, a.compileShadowGenerators = a.compileShadowGenerators || !1, a.coordinateSystemMode = a.coordinateSystemMode || kt.GLTFLoaderCoordinateSystemMode.AUTO, a.loggingEnabled = a.loggingEnabled || !1, a.transparencyAsCoverage = a.transparencyAsCoverage || !1, a.useClipPlane = a.useClipPlane || !1, a.validate = a.validate || !0, n
                }
                return a(t, e), t.prototype.openValidationDetails = function() {
                    var e = this.props.globalState.validationResults,
                        t = window.open("", "_blank");
                    t && (t.document.title = "glTF Validation Results", t.document.body.innerText = JSON.stringify(e, null, 2), t.document.body.style.whiteSpace = "pre", t.document.body.style.fontFamily = "monospace", t.document.body.style.fontSize = "14px", t.focus())
                }, t.prototype.prepareText = function(e, t) {
                    return t ? t + " " + e + "s" : "" + e
                }, t.prototype.renderValidation = function() {
                    var e = this,
                        t = this.props.globalState.validationResults.issues;
                    return l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GLTF VALIDATION",
                        closed: !t.numErrors && !t.numWarnings
                    }, 0 !== t.numErrors && l.createElement(Pt, {
                        text: "Your file has some validation issues",
                        icon: X,
                        color: "Red"
                    }), 0 === t.numErrors && l.createElement(Pt, {
                        text: "Your file is a valid glTF file",
                        icon: E,
                        color: "Green"
                    }), l.createElement(J, {
                        label: "Errors",
                        value: t.numErrors.toString()
                    }), l.createElement(J, {
                        label: "Warnings",
                        value: t.numWarnings.toString()
                    }), l.createElement(J, {
                        label: "Infos",
                        value: t.numInfos.toString()
                    }), l.createElement(J, {
                        label: "Hints",
                        value: t.numHints.toString()
                    }), l.createElement(J, {
                        label: "More details",
                        value: "Click here",
                        onLink: function() {
                            return e.openValidationDetails()
                        }
                    }))
                }, t.prototype.render = function() {
                    var e = this.props.globalState.glTFLoaderExtensionDefaults,
                        t = this.props.globalState.glTFLoaderDefaults,
                        n = [{
                            label: "None",
                            value: kt.GLTFLoaderAnimationStartMode.NONE
                        }, {
                            label: "First",
                            value: kt.GLTFLoaderAnimationStartMode.FIRST
                        }, {
                            label: "ALL",
                            value: kt.GLTFLoaderAnimationStartMode.ALL
                        }],
                        r = [{
                            label: "Auto",
                            value: kt.GLTFLoaderCoordinateSystemMode.AUTO
                        }, {
                            label: "Right handed",
                            value: kt.GLTFLoaderCoordinateSystemMode.FORCE_RIGHT_HANDED
                        }];
                    return l.createElement("div", null, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GLTF LOADER",
                        closed: !0
                    }, l.createElement(ue, {
                        label: "Animation start mode",
                        options: n,
                        target: t,
                        propertyName: "animationStartMode"
                    }), l.createElement(ae, {
                        label: "Capture performance counters",
                        target: t,
                        propertyName: "capturePerformanceCounters"
                    }), l.createElement(ae, {
                        label: "Compile materials",
                        target: t,
                        propertyName: "compileMaterials"
                    }), l.createElement(ae, {
                        label: "Compile shadow generators",
                        target: t,
                        propertyName: "compileShadowGenerators"
                    }), l.createElement(ue, {
                        label: "Coordinate system",
                        options: r,
                        target: t,
                        propertyName: "coordinateSystemMode"
                    }), l.createElement(ae, {
                        label: "Enable logging",
                        target: t,
                        propertyName: "loggingEnabled"
                    }), l.createElement(ae, {
                        label: "Transparency as coverage",
                        target: t,
                        propertyName: "transparencyAsCoverage"
                    }), l.createElement(ae, {
                        label: "Use clip plane",
                        target: t,
                        propertyName: "useClipPlane"
                    }), l.createElement(ae, {
                        label: "Validate",
                        target: t,
                        propertyName: "validate"
                    }), l.createElement(Pt, {
                        text: "You need to reload your file to see these changes"
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "GLTF EXTENSIONS",
                        closed: !0
                    }, l.createElement(ae, {
                        label: "MSFT_lod",
                        isSelected: function() {
                            return e.MSFT_lod.enabled
                        },
                        onSelect: function(t) {
                            return e.MSFT_lod.enabled = t
                        }
                    }), l.createElement(xe, {
                        label: "Maximum LODs",
                        target: e.MSFT_lod,
                        propertyName: "maxLODsToLoad",
                        additionalClass: "gltf-extension-property"
                    }), l.createElement(ae, {
                        label: "MSFT_minecraftMesh",
                        isSelected: function() {
                            return e.MSFT_minecraftMesh.enabled
                        },
                        onSelect: function(t) {
                            return e.MSFT_minecraftMesh.enabled = t
                        }
                    }), l.createElement(ae, {
                        label: "MSFT_sRGBFactors",
                        isSelected: function() {
                            return e.MSFT_sRGBFactors.enabled
                        },
                        onSelect: function(t) {
                            return e.MSFT_sRGBFactors.enabled = t
                        }
                    }), l.createElement(ae, {
                        label: "MSFT_audio_emitter",
                        isSelected: function() {
                            return e.MSFT_audio_emitter.enabled
                        },
                        onSelect: function(t) {
                            return e.MSFT_audio_emitter.enabled = t
                        }
                    }), l.createElement(ae, {
                        label: "KHR_draco_mesh_compression",
                        isSelected: function() {
                            return e.KHR_draco_mesh_compression.enabled
                        },
                        onSelect: function(t) {
                            return e.KHR_draco_mesh_compression.enabled = t
                        }
                    }), l.createElement(ae, {
                        label: "KHR_materials_pbrSpecularGlossiness",
                        isSelected: function() {
                            return e.KHR_materials_pbrSpecularGlossiness.enabled
                        },
                        onSelect: function(t) {
                            return e.KHR_materials_pbrSpecularGlossiness.enabled = t
                        }
                    }), l.createElement(ae, {
                        label: "KHR_materials_unlit",
                        isSelected: function() {
                            return e.KHR_materials_unlit.enabled
                        },
                        onSelect: function(t) {
                            return e.KHR_materials_unlit.enabled = t
                        }
                    }), l.createElement(ae, {
                        label: "KHR_lights_punctual",
                        isSelected: function() {
                            return e.KHR_lights_punctual.enabled
                        },
                        onSelect: function(t) {
                            return e.KHR_lights_punctual.enabled = t
                        }
                    }), l.createElement(ae, {
                        label: "KHR_texture_transform",
                        isSelected: function() {
                            return e.KHR_texture_transform.enabled
                        },
                        onSelect: function(t) {
                            return e.KHR_texture_transform.enabled = t
                        }
                    }), l.createElement(ae, {
                        label: "EXT_lights_image_based",
                        isSelected: function() {
                            return e.EXT_lights_image_based.enabled
                        },
                        onSelect: function(t) {
                            return e.EXT_lights_image_based.enabled = t
                        }
                    }), l.createElement(Pt, {
                        text: "You need to reload your file to see these changes"
                    })), t.validate && this.props.globalState.validationResults && this.renderValidation())
                }, t
            }(l.Component),
            Nt = n(16),
            wt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        tag: "Record video"
                    }, n
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    BABYLON.GLTF2Export || c.Tools.LoadScript("https://preview.babylonjs.com/serializers/babylonjs.serializers.min.js", function() {})
                }, t.prototype.componentWillUnmount = function() {
                    this._videoRecorder && (this._videoRecorder.stopRecording(), this._videoRecorder.dispose(), this._videoRecorder = null)
                }, t.prototype.captureScreenshot = function() {
                    var e = this.props.scene;
                    e.activeCamera && c.Tools.CreateScreenshot(e.getEngine(), e.activeCamera, {
                        precision: 1
                    })
                }, t.prototype.recordVideo = function() {
                    var e = this;
                    if (this._videoRecorder && this._videoRecorder.isRecording) this._videoRecorder.stopRecording();
                    else {
                        var t = this.props.scene;
                        this._videoRecorder || (this._videoRecorder = new c.VideoRecorder(t.getEngine())), this._videoRecorder.startRecording().then(function() {
                            e.setState({
                                tag: "Record video"
                            })
                        }), this.setState({
                            tag: "Stop recording"
                        })
                    }
                }, t.prototype.shouldExport = function(e) {
                    if (e instanceof c.Mesh && e.material) {
                        var t = e.material.reflectionTexture;
                        if (t && t.coordinatesMode === c.Texture.SKYBOX_MODE) return !1
                    }
                    return !0
                }, t.prototype.exportGLTF = function() {
                    var e = this,
                        t = this.props.scene;
                    Nt.GLTF2Export.GLBAsync(t, "scene", {
                        shouldExportNode: function(t) {
                            return e.shouldExport(t)
                        }
                    }).then(function(e) {
                        e.downloadFiles()
                    })
                }, t.prototype.exportBabylon = function() {
                    var e = this.props.scene,
                        t = JSON.stringify(c.SceneSerializer.Serialize(e)),
                        n = new Blob([t], {
                            type: "octet/stream"
                        });
                    c.Tools.Download(n, "scene.babylon")
                }, t.prototype.createEnvTexture = function() {
                    var e = this.props.scene;
                    c.EnvironmentTextureTools.CreateEnvTextureAsync(e.environmentTexture).then(function(e) {
                        var t = new Blob([e], {
                            type: "octet/stream"
                        });
                        c.Tools.Download(t, "environment.env")
                    }).catch(function(e) {
                        console.error(e), alert(e)
                    })
                }, t.prototype.resetReplay = function() {
                    this.props.globalState.recorder.reset()
                }, t.prototype.exportReplay = function() {
                    this.props.globalState.recorder.export()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.scene;
                    return t ? l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "CAPTURE"
                    }, l.createElement(Me, {
                        label: "Screenshot",
                        onClick: function() {
                            return e.captureScreenshot()
                        }
                    }), l.createElement(Me, {
                        label: this.state.tag,
                        onClick: function() {
                            return e.recordVideo()
                        }
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "REPLAY"
                    }, l.createElement(Me, {
                        label: "Generate replay code",
                        onClick: function() {
                            return e.exportReplay()
                        }
                    }), l.createElement(Me, {
                        label: "Reset",
                        onClick: function() {
                            return e.resetReplay()
                        }
                    })), l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "SCENE EXPORT"
                    }, l.createElement(Me, {
                        label: "Export to GLB",
                        onClick: function() {
                            return e.exportGLTF()
                        }
                    }), l.createElement(Me, {
                        label: "Export to Babylon",
                        onClick: function() {
                            return e.exportBabylon()
                        }
                    }), !t.getEngine().premultipliedAlpha && t.environmentTexture && t.environmentTexture.isPrefiltered && t.activeCamera && l.createElement(Me, {
                        label: "Generate .env texture",
                        onClick: function() {
                            return e.createEnvTexture()
                        }
                    })), BABYLON.GLTFFileLoader && l.createElement(Tt, {
                        scene: t,
                        globalState: this.props.globalState
                    })) : null
                }, t
            }(Z),
            _t = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this.props.globalState;
                    return l.createElement("div", {
                        className: "pane"
                    }, l.createElement(ee, {
                        globalState: this.props.globalState,
                        title: "UI"
                    }, l.createElement(ae, {
                        label: "Only display Euler values",
                        target: e,
                        propertyName: "onlyUseEulers"
                    }), l.createElement(ae, {
                        label: "Ignore backfaces when picking",
                        target: e,
                        propertyName: "ignoreBackfacesForPicking"
                    })))
                }, t
            }(Z);
        n(27);
        var Mt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n._once = !0;
                    var r = 0;
                    if (n.props.globalState) {
                        var a = n.props.globalState.validationResults;
                        a && (a.issues.numErrors || a.issues.numWarnings) && (r = 3)
                    }
                    return n.state = {
                        selectedEntity: null,
                        selectedIndex: r
                    }, n
                }
                return a(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    this.props.globalState && (this._onSelectionChangeObserver = this.props.globalState.onSelectionChangedObservable.add(function(t) {
                        e.setState({
                            selectedEntity: t,
                            selectedIndex: 0
                        })
                    }), this._onTabChangedObserver = this.props.globalState.onTabChangedObservable.add(function(t) {
                        e.setState({
                            selectedIndex: t
                        })
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.globalState && (this._onSelectionChangeObserver && this.props.globalState.onSelectionChangedObservable.remove(this._onSelectionChangeObserver), this._onTabChangedObserver && this.props.globalState.onTabChangedObservable.remove(this._onTabChangedObserver))
                }, t.prototype.changeSelectedTab = function(e) {
                    this.props.globalState && this.props.globalState.onTabChangedObservable.notifyObservers(e)
                }, t.prototype.renderContent = function() {
                    var e = this;
                    return this.props.globalState && this.props.scene ? l.createElement(d, {
                        selectedIndex: this.state.selectedIndex,
                        onSelectedIndexChange: function(t) {
                            return e.changeSelectedTab(t)
                        }
                    }, l.createElement(St, {
                        title: "Properties",
                        icon: R,
                        scene: this.props.scene,
                        selectedEntity: this.state.selectedEntity,
                        globalState: this.props.globalState,
                        onSelectionChangedObservable: this.props.globalState.onSelectionChangedObservable,
                        onPropertyChangedObservable: this.props.globalState.onPropertyChangedObservable
                    }), l.createElement(le, {
                        title: "Debug",
                        icon: v,
                        scene: this.props.scene,
                        globalState: this.props.globalState
                    }), l.createElement(re, {
                        title: "Statistics",
                        icon: C,
                        scene: this.props.scene,
                        globalState: this.props.globalState
                    }), l.createElement(wt, {
                        title: "Tools",
                        icon: $,
                        scene: this.props.scene,
                        globalState: this.props.globalState
                    }), l.createElement(_t, {
                        title: "Settings",
                        icon: x,
                        scene: this.props.scene,
                        globalState: this.props.globalState
                    })) : null
                }, t.prototype.onClose = function() {
                    this.props.onClose && this.props.onClose()
                }, t.prototype.onPopup = function() {
                    this.props.onPopup && this.props.onPopup()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.popupMode ? l.createElement("div", {
                        id: "actionTabs"
                    }, !this.props.noHeader && l.createElement(xt, {
                        title: "INSPECTOR",
                        handleBack: !0,
                        noClose: this.props.noClose,
                        noExpand: this.props.noExpand,
                        noCommands: this.props.noCommands,
                        onClose: function() {
                            return e.onClose()
                        },
                        onPopup: function() {
                            return e.onPopup()
                        },
                        onSelectionChangedObservable: this.props.globalState ? this.props.globalState.onSelectionChangedObservable : void 0
                    }), this.renderContent()) : (this._once && (this._once = !1, setTimeout(function() {
                        var e = document.getElementById("actionTabs");
                        e && (e.style.width = "300px")
                    }, 150)), l.createElement(pe.a, {
                        id: "actionTabs",
                        minWidth: 300,
                        maxWidth: 600,
                        size: {
                            height: "100%"
                        },
                        minHeight: "100%",
                        enable: {
                            top: !1,
                            right: !1,
                            bottom: !1,
                            left: !0,
                            topRight: !1,
                            bottomRight: !1,
                            bottomLeft: !1,
                            topLeft: !1
                        }
                    }, !this.props.noHeader && l.createElement(xt, {
                        title: "INSPECTOR",
                        handleBack: !0,
                        noClose: this.props.noClose,
                        noExpand: this.props.noExpand,
                        noCommands: this.props.noCommands,
                        onClose: function() {
                            return e.onClose()
                        },
                        onPopup: function() {
                            return e.onPopup()
                        },
                        onSelectionChangedObservable: this.props.globalState ? this.props.globalState.onSelectionChangedObservable : void 0
                    }), this.renderContent()))
                }, t
            }(l.Component),
            Lt = {
                prefix: "far",
                iconName: "eye",
                icon: [576, 512, [], "f06e", "M569.354 231.631C512.97 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-102.556 0-192.091-54.701-240-136 44.157-74.933 123.677-127.27 216.162-135.007C273.958 131.078 280 144.83 280 160c0 30.928-25.072 56-56 56s-56-25.072-56-56l.001-.042C157.794 179.043 152 200.844 152 224c0 75.111 60.889 136 136 136s136-60.889 136-136c0-31.031-10.4-59.629-27.895-82.515C451.704 164.638 498.009 205.106 528 256c-47.908 81.299-137.444 136-240 136z"]
            },
            Rt = {
                prefix: "far",
                iconName: "eye-slash",
                icon: [576, 512, [], "f070", "M272.702 359.139c-80.483-9.011-136.212-86.886-116.93-167.042l116.93 167.042zM288 392c-102.556 0-192.092-54.701-240-136 21.755-36.917 52.1-68.342 88.344-91.658l-27.541-39.343C67.001 152.234 31.921 188.741 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.004 376.006 168.14 440 288 440a332.89 332.89 0 0 0 39.648-2.367l-32.021-45.744A284.16 284.16 0 0 1 288 392zm281.354-111.631c-33.232 56.394-83.421 101.742-143.554 129.492l48.116 68.74c3.801 5.429 2.48 12.912-2.949 16.712L450.23 509.83c-5.429 3.801-12.912 2.48-16.712-2.949L102.084 33.399c-3.801-5.429-2.48-12.912 2.949-16.712L125.77 2.17c5.429-3.801 12.912-2.48 16.712 2.949l55.526 79.325C226.612 76.343 256.808 72 288 72c119.86 0 224.996 63.994 281.354 159.631a48.002 48.002 0 0 1 0 48.738zM528 256c-44.157-74.933-123.677-127.27-216.162-135.007C302.042 131.078 296 144.83 296 160c0 30.928 25.072 56 56 56s56-25.072 56-56l-.001-.042c30.632 57.277 16.739 130.26-36.928 171.719l26.695 38.135C452.626 346.551 498.308 306.386 528 256z"]
            },
            At = {
                prefix: "far",
                iconName: "lightbulb",
                icon: [352, 512, [], "f0eb", "M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]
            },
            It = {
                prefix: "far",
                iconName: "square",
                icon: [448, 512, [], "f0c8", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"]
            },
            jt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.onClick = function() {
                    this.props.onClick && this.props.onClick()
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "title",
                        onClick: function() {
                            return e.onClick()
                        }
                    }, l.createElement("div", {
                        className: "titleIcon"
                    }, l.createElement(u.a, {
                        icon: this.props.icon,
                        color: this.props.color
                    })), l.createElement("div", {
                        className: "titleText"
                    }, this.props.label || "no name"))
                }, t
            }(l.Component),
            Dt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        popupVisible: !1
                    }, n
                }
                return a(t, e), t.prototype.showPopup = function() {
                    this.setState({
                        popupVisible: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    this._popup && this._popup.focus()
                }, t.prototype.componentDidUpdate = function() {
                    this._popup && this._popup.focus()
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.extensibilityGroups) return null;
                    for (var t = [], n = 0, r = this.props.extensibilityGroups; n < r.length; n++) {
                        var a = r[n];
                        a.predicate(this.props.target) && t.push.apply(t, a.entries)
                    }
                    return 0 === t.length ? null : l.createElement("div", {
                        ref: "extensions",
                        className: "extensions",
                        onClick: function() {
                            return e.showPopup()
                        }
                    }, l.createElement("div", {
                        title: "Additional options",
                        className: "icon"
                    }, l.createElement(u.a, {
                        icon: w
                    })), l.createElement("div", {
                        ref: function(t) {
                            e._popup = t
                        },
                        tabIndex: -1,
                        className: this.state.popupVisible ? "popup show" : "popup",
                        onBlur: function() {
                            return e.setState({
                                popupVisible: !1
                            })
                        }
                    }, t.map(function(t) {
                        return l.createElement("div", {
                            key: t.label,
                            className: "popupMenu",
                            onClick: function() {
                                return t.action(e.props.target)
                            }
                        }, t.label)
                    })))
                }, t
            }(l.Component),
            zt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = n.props.mesh;
                    return n.state = {
                        isBoundingBoxEnabled: r.showBoundingBox,
                        isVisible: n.props.mesh.isVisible
                    }, n
                }
                return a(t, e), t.prototype.showBoundingBox = function() {
                    this.props.mesh.showBoundingBox = !this.state.isBoundingBoxEnabled, this.setState({
                        isBoundingBoxEnabled: !this.state.isBoundingBoxEnabled
                    })
                }, t.prototype.switchVisibility = function() {
                    var e = !this.state.isVisible;
                    this.setState({
                        isVisible: e
                    }), this.props.mesh.isVisible = e
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.mesh,
                        n = this.state.isVisible ? l.createElement(u.a, {
                            icon: Lt
                        }) : l.createElement(u.a, {
                            icon: Rt,
                            className: "isNotActive"
                        });
                    return l.createElement("div", {
                        className: "meshTools"
                    }, l.createElement(jt, {
                        label: t.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: N,
                        color: "dodgerblue"
                    }), l.createElement("div", {
                        className: this.state.isBoundingBoxEnabled ? "bounding-box selected icon" : "bounding-box icon",
                        onClick: function() {
                            return e.showBoundingBox()
                        },
                        title: "Show/Hide bounding box"
                    }, l.createElement(u.a, {
                        icon: It
                    })), l.createElement("div", {
                        className: "visibility icon",
                        onClick: function() {
                            return e.switchVisibility()
                        },
                        title: "Show/Hide mesh"
                    }, n), l.createElement(Dt, {
                        target: t,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Ft = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = n.props.camera,
                        a = r.getScene();
                    return n.state = {
                        isActive: a.activeCamera === r
                    }, n
                }
                return a(t, e), t.prototype.setActive = function() {
                    var e = this.props.camera,
                        t = e.getScene();
                    t.activeCamera = e, e.attachControl(t.getEngine().getRenderingCanvas(), !0), this.setState({
                        isActive: !0
                    })
                }, t.prototype.componentWillMount = function() {
                    var e = this,
                        t = this.props.camera,
                        n = t.getScene();
                    this._onActiveCameraObserver = n.onActiveCameraChanged.add(function() {
                        e.state.isActive && n.activeCameras.length <= 1 && t.detachControl(n.getEngine().getRenderingCanvas()), e.setState({
                            isActive: n.activeCamera === t
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this._onActiveCameraObserver && this.props.camera.getScene().onActiveCameraChanged.remove(this._onActiveCameraObserver)
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.state.isActive ? l.createElement(u.a, {
                            icon: q
                        }) : l.createElement(u.a, {
                            icon: q,
                            className: "isNotActive"
                        }),
                        n = this.props.camera.getScene();
                    return l.createElement("div", {
                        className: "cameraTools"
                    }, l.createElement(jt, {
                        label: this.props.camera.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: y,
                        color: "green"
                    }), (!n.activeCameras || 0 === n.activeCameras.length) && l.createElement("div", {
                        className: "activeCamera icon",
                        onClick: function() {
                            return e.setActive()
                        },
                        title: "Set as main camera"
                    }, t), l.createElement(Dt, {
                        target: this.props.camera,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Ut = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = n.props.light;
                    return n.state = {
                        isEnabled: r.isEnabled(),
                        isGizmoEnabled: r.reservedDataStore && r.reservedDataStore.lightGizmo
                    }, n
                }
                return a(t, e), t.prototype.switchIsEnabled = function() {
                    var e = this.props.light;
                    e.setEnabled(!e.isEnabled()), this.setState({
                        isEnabled: e.isEnabled()
                    })
                }, t.prototype.toggleGizmo = function() {
                    var e = this.props.light;
                    e.reservedDataStore && e.reservedDataStore.lightGizmo ? (e.getScene().reservedDataStore && e.getScene().reservedDataStore.gizmoManager && e.getScene().reservedDataStore.gizmoManager.attachToMesh(null), this.props.globalState.enableLightGizmo(e, !1), this.setState({
                        isGizmoEnabled: !1
                    })) : (this.props.globalState.enableLightGizmo(e, !0), this.setState({
                        isGizmoEnabled: !0
                    }))
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.state.isEnabled ? l.createElement(u.a, {
                            icon: At
                        }) : l.createElement(u.a, {
                            icon: At,
                            className: "isNotActive"
                        }),
                        n = this.state.isGizmoEnabled || this.props.light && this.props.light.reservedDataStore && this.props.light.reservedDataStore.lightGizmo ? l.createElement(u.a, {
                            icon: M
                        }) : l.createElement(u.a, {
                            icon: M,
                            className: "isNotActive"
                        });
                    return l.createElement("div", {
                        className: "lightTools"
                    }, l.createElement(jt, {
                        label: this.props.light.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: D,
                        color: "yellow"
                    }), l.createElement("div", {
                        className: "visibility icon",
                        onClick: function() {
                            return e.switchIsEnabled()
                        },
                        title: "Turn on/off the light"
                    }, t), l.createElement("div", {
                        className: "enableGizmo icon",
                        onClick: function() {
                            return e.toggleGizmo()
                        },
                        title: "Turn on/off the light's gizmo"
                    }, n), l.createElement(Dt, {
                        target: this.props.light,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Gt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "materialTools"
                    }, l.createElement(jt, {
                        label: this.props.material.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: g,
                        color: "orange"
                    }), l.createElement(Dt, {
                        target: this.props.material,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Ht = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "textureTools"
                    }, l.createElement(jt, {
                        label: this.props.texture.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: j,
                        color: "mediumpurple"
                    }), l.createElement(Dt, {
                        target: this.props.texture,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Vt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.transformNode;
                    return l.createElement("div", {
                        className: "transformNodeTools"
                    }, l.createElement(jt, {
                        label: t.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: S,
                        color: "cornflowerblue"
                    }), l.createElement(Dt, {
                        target: t,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Bt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this,
                        r = n.props.control;
                    return n.state = {
                        isActive: r.isHighlighted,
                        isVisible: r.isVisible
                    }, n
                }
                return a(t, e), t.prototype.highlight = function() {
                    var e = this.props.control;
                    e.isHighlighted = !e.isHighlighted, this.setState({
                        isActive: e.isHighlighted
                    })
                }, t.prototype.switchVisibility = function() {
                    var e = !this.state.isVisible;
                    this.setState({
                        isVisible: e
                    }), this.props.control.isVisible = e
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.control,
                        n = (t.name || "No name") + " [" + t.getClassName() + "]",
                        r = this.state.isActive ? l.createElement(u.a, {
                            icon: I
                        }) : l.createElement(u.a, {
                            icon: I,
                            className: "isNotActive"
                        }),
                        a = this.state.isVisible ? l.createElement(u.a, {
                            icon: M
                        }) : l.createElement(u.a, {
                            icon: L,
                            className: "isNotActive"
                        });
                    return l.createElement("div", {
                        className: "controlTools"
                    }, l.createElement(jt, {
                        label: n,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: U,
                        color: "greenyellow"
                    }), l.createElement("div", {
                        className: "highlight icon",
                        onClick: function() {
                            return e.highlight()
                        },
                        title: "Highlight this control"
                    }, r), l.createElement("div", {
                        className: "visibility icon",
                        onClick: function() {
                            return e.switchVisibility()
                        },
                        title: "Show/Hide control"
                    }, a), l.createElement(Dt, {
                        target: t,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Wt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isInPickingMode: !1
                    }, n
                }
                return a(t, e), t.prototype.componentWillUnmount = function() {
                    var e = this.props.texture;
                    this._onControlPickedObserver && (e.onControlPickedObservable.remove(this._onControlPickedObserver), this._onControlPickedObserver = null)
                }, t.prototype.onPickingMode = function() {
                    var e = this,
                        t = this.props.texture;
                    this._onControlPickedObserver && (t.onControlPickedObservable.remove(this._onControlPickedObserver), this._onControlPickedObserver = null), this.state.isInPickingMode || (this._onControlPickedObserver = t.onControlPickedObservable.add(function(t) {
                        e.props.onSelectionChangedObservable && ("ScrollViewerWindow" === t.getClassName() && (t = t.getAscendantOfClass("ScrollViewer")), e.props.onSelectionChangedObservable.notifyObservers(t))
                    })), this.setState({
                        isInPickingMode: !this.state.isInPickingMode
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "adtextureTools"
                    }, l.createElement(jt, {
                        label: this.props.texture.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: j,
                        color: "mediumpurple"
                    }), l.createElement("div", {
                        className: this.state.isInPickingMode ? "pickingMode selected icon" : "pickingMode icon",
                        onClick: function() {
                            return e.onPickingMode()
                        },
                        title: "Turn picking mode on/off"
                    }, l.createElement(u.a, {
                        icon: T
                    })), l.createElement(Dt, {
                        target: this.props.texture,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Yt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.animationGroup;
                    return l.createElement("div", {
                        className: "animationGroupTools"
                    }, l.createElement(jt, {
                        label: t.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: A,
                        color: "cornflowerblue"
                    }), l.createElement(Dt, {
                        target: t,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Xt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "postProcessTools"
                    }, l.createElement(jt, {
                        label: this.props.postProcess.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: z,
                        color: "red"
                    }), l.createElement(Dt, {
                        target: this.props.postProcess,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Kt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "postProcessTools"
                    }, l.createElement(jt, {
                        label: this.props.renderPipeline.name,
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: z,
                        color: "orangered"
                    }), l.createElement(Dt, {
                        target: this.props.renderPipeline,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            qt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.skeleton;
                    return l.createElement("div", {
                        className: "skeletonTools"
                    }, l.createElement(jt, {
                        label: t.name || "no name",
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: B,
                        color: "gray"
                    }), l.createElement(Dt, {
                        target: t,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            Qt = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.bone;
                    return l.createElement("div", {
                        className: "skeletonTools"
                    }, l.createElement(jt, {
                        label: t.name || "no name",
                        onClick: function() {
                            return e.props.onClick()
                        },
                        icon: f,
                        color: "lightgray"
                    }), l.createElement(Dt, {
                        target: t,
                        extensibilityGroups: this.props.extensibilityGroups
                    }))
                }, t
            }(l.Component),
            $t = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.onClick = function() {
                    this.props.onClick && this.props.onClick()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.entity;
                    if (t && t.getClassName) {
                        var n = t.getClassName();
                        if (-1 !== n.indexOf("Mesh")) {
                            var r = t;
                            return r.isAnInstance || r.getTotalVertices() > 0 ? l.createElement(zt, {
                                extensibilityGroups: this.props.extensibilityGroups,
                                mesh: r,
                                onClick: function() {
                                    return e.onClick()
                                }
                            }) : l.createElement(Vt, {
                                extensibilityGroups: this.props.extensibilityGroups,
                                transformNode: t,
                                onClick: function() {
                                    return e.onClick()
                                }
                            })
                        }
                        if (-1 !== n.indexOf("Skeleton")) return l.createElement(qt, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            skeleton: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if (-1 !== n.indexOf("Bone")) return l.createElement(Qt, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            bone: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if (-1 !== n.indexOf("TransformNode")) return l.createElement(Vt, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            transformNode: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if (-1 !== n.indexOf("Camera")) return l.createElement(Ft, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            camera: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if (-1 !== n.indexOf("Light")) return l.createElement(Ut, {
                            globalState: this.props.globalState,
                            extensibilityGroups: this.props.extensibilityGroups,
                            light: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if (-1 !== n.indexOf("Material")) return l.createElement(Gt, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            material: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if ("AdvancedDynamicTexture" === n) return l.createElement(Wt, {
                            onSelectionChangedObservable: this.props.globalState.onSelectionChangedObservable,
                            extensibilityGroups: this.props.extensibilityGroups,
                            texture: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if ("AnimationGroup" === n) return l.createElement(Yt, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            animationGroup: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if (-1 !== n.indexOf("Texture")) return l.createElement(Ht, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            texture: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if (-1 !== n.indexOf("RenderingPipeline")) return l.createElement(Kt, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            renderPipeline: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if (-1 !== n.indexOf("PostProcess")) return l.createElement(Xt, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            postProcess: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        });
                        if (t._host) return l.createElement(Bt, {
                            extensibilityGroups: this.props.extensibilityGroups,
                            control: t,
                            onClick: function() {
                                return e.onClick()
                            }
                        })
                    }
                    return l.createElement("div", {
                        className: "meshTools"
                    }, l.createElement(jt, {
                        label: t.name,
                        onClick: function() {
                            return e.onClick()
                        },
                        icon: H,
                        color: "cornflowerblue"
                    }))
                }, t
            }(l.Component),
            Zt = function() {
                function e() {}
                return e.StoreLocalBooleanSettings = function(e, t) {
                    "undefined" != typeof Storage && localStorage.setItem(e, t ? "true" : "false")
                }, e.ReadLocalBooleanSettings = function(e, t) {
                    return "undefined" != typeof Storage && null !== localStorage.getItem(e) ? "true" === localStorage.getItem(e) : t
                }, e.LookForItem = function(t, n) {
                    if (t === n) return !0;
                    var r = t.getChildren ? t.getChildren() : t.children;
                    if (r)
                        for (var a = 0, o = r; a < o.length; a++) {
                            var i = o[a];
                            if (e.LookForItem(i, n)) return !0
                        }
                    return !1
                }, e._RecursiveRemoveHiddenMeshesAndHoistChildren = function(t) {
                    for (var n = [], r = 0, a = t; r < a.length; r++) {
                        var o = a[r];
                        o.reservedDataStore && o.reservedDataStore.hidden && o.getChildMeshes ? e._RecursiveRemoveHiddenMeshesAndHoistChildren(o.getChildMeshes()).forEach(function(e) {
                            n.push(e)
                        }) : o.reservedDataStore && o.reservedDataStore.hidden || n.push(o)
                    }
                    return n
                }, e.SortAndFilter = function(t, n) {
                    if (!n) return [];
                    var r = e._RecursiveRemoveHiddenMeshesAndHoistChildren(n);
                    return t && t.reservedDataStore && t.reservedDataStore.detachedChildren && r.push.apply(r, t.reservedDataStore.detachedChildren), r.sort(function(e, t) {
                        var n = (e.name || "").toLowerCase(),
                            r = (t.name || "").toLowerCase();
                        return n === r ? 0 : n > r ? 1 : -1
                    })
                }, e
            }(),
            Jt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._wasSelected = !1, n.state = {
                        isSelected: n.props.entity === n.props.selectedEntity,
                        isExpanded: n.props.mustExpand || Zt.LookForItem(n.props.entity, n.props.selectedEntity)
                    }, n
                }
                return a(t, e), t.prototype.switchExpandedState = function() {
                    this.setState({
                        isExpanded: !this.state.isExpanded
                    })
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    if (!t.isExpanded && this.state.isExpanded) return !0;
                    if (e.selectedEntity) {
                        if (e.entity === e.selectedEntity) return t.isSelected = !0, !0;
                        if (t.isSelected = !1, Zt.LookForItem(e.entity, e.selectedEntity)) return t.isExpanded = !0, !0
                    }
                    return !0
                }, t.prototype.scrollIntoView = function() {
                    var e = p.findDOMNode(this);
                    e && e.scrollIntoView(!1)
                }, t.prototype.componentDidMount = function() {
                    this.state.isSelected && this.scrollIntoView()
                }, t.prototype.componentDidUpdate = function() {
                    this.state.isSelected && !this._wasSelected && this.scrollIntoView(), this._wasSelected = !1
                }, t.prototype.onSelect = function() {
                    if (this.props.globalState.onSelectionChangedObservable) {
                        this._wasSelected = !0;
                        var e = this.props.entity;
                        this.props.globalState.onSelectionChangedObservable.notifyObservers(e)
                    }
                }, t.prototype.renderChildren = function() {
                    var e = this,
                        n = this.props.entity;
                    return (n.getChildren || n.children) && this.state.isExpanded ? Zt.SortAndFilter(n, n.getChildren ? n.getChildren() : n.children).map(function(n) {
                        return l.createElement(t, {
                            globalState: e.props.globalState,
                            mustExpand: e.props.mustExpand,
                            extensibilityGroups: e.props.extensibilityGroups,
                            selectedEntity: e.props.selectedEntity,
                            key: n.uniqueId,
                            offset: e.props.offset + 2,
                            entity: n,
                            filter: e.props.filter
                        })
                    }) : null
                }, t.prototype.render = function() {
                    var e = this,
                        t = {
                            paddingLeft: 10 * (this.props.offset + .5) + "px"
                        },
                        n = this.props.entity,
                        r = this.state.isExpanded ? l.createElement(u.a, {
                            icon: F
                        }) : l.createElement(u.a, {
                            icon: G
                        }),
                        a = Zt.SortAndFilter(n, n.getChildren ? n.getChildren() : n.children).length > 0;
                    if (n.reservedDataStore || (n.reservedDataStore = {}), n.reservedDataStore.setExpandedState = function(t) {
                            e.setState({
                                isExpanded: t
                            })
                        }, n.reservedDataStore.isExpanded = this.state.isExpanded, this.props.filter) {
                        var o = this.props.filter.toLowerCase();
                        if (!n.name || -1 === n.name.toLowerCase().indexOf(o)) {
                            if (!a) return null;
                            if (n.getDescendants && 0 === n.getDescendants(!1, function(e) {
                                    return console.log(e.name), e.name && -1 !== e.name.toLowerCase().indexOf(o)
                                }).length) return null
                        }
                    }
                    return l.createElement("div", null, l.createElement("div", {
                        className: this.state.isSelected ? "itemContainer selected" : "itemContainer",
                        style: t
                    }, a && l.createElement("div", {
                        className: "arrow icon",
                        onClick: function() {
                            return e.switchExpandedState()
                        }
                    }, r), l.createElement($t, {
                        globalState: this.props.globalState,
                        extensibilityGroups: this.props.extensibilityGroups,
                        label: n.name,
                        entity: n,
                        onClick: function() {
                            return e.onSelect()
                        }
                    })), this.renderChildren())
                }, t
            }(l.Component),
            en = n(2),
            tn = n.n(en),
            nn = n(6),
            rn = n.n(nn),
            an = n(5),
            on = n.n(an);
        /*!
         * Font Awesome Free 5.4.2 by @fontawesome - https://fontawesome.com
         * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
         */
        function ln(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return "function" == typeof e && e.apply(void 0, n)
        }

        function sn(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        var pn = "react-contextmenu",
            cn = "react-contextmenu--visible",
            un = "react-contextmenu-wrapper",
            dn = "react-contextmenu-item",
            hn = "react-contextmenu-item--active",
            bn = "react-contextmenu-item--disabled",
            mn = "react-contextmenu-item--divider",
            fn = "react-contextmenu-item--selected",
            gn = "react-contextmenu-submenu",
            vn = {},
            yn = Boolean("undefined" != typeof window && window.document && window.document.createElement),
            Cn = "REACT_CONTEXTMENU_SHOW",
            En = "REACT_CONTEXTMENU_HIDE";

        function On(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = void 0;
            "function" == typeof window.CustomEvent ? r = new window.CustomEvent(e, {
                detail: t
            }) : (r = document.createEvent("CustomEvent")).initCustomEvent(e, !1, !0, t), n && (n.dispatchEvent(r), on()(vn, t))
        }

        function Sn() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            On(Cn, on()({}, e, {
                type: Cn
            }), t)
        }

        function xn() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            On(En, on()({}, e, {
                type: En
            }), t)
        }
        var Pn = new function e() {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.handleShowEvent = function(e) {
                    for (var n in t.callbacks) sn(t.callbacks, n) && t.callbacks[n].show(e)
                }, this.handleHideEvent = function(e) {
                    for (var n in t.callbacks) sn(t.callbacks, n) && t.callbacks[n].hide(e)
                }, this.register = function(e, n) {
                    var r = Math.random().toString(36).substring(7);
                    return t.callbacks[r] = {
                        show: e,
                        hide: n
                    }, r
                }, this.unregister = function(e) {
                    e && t.callbacks[e] && delete t.callbacks[e]
                }, this.callbacks = {}, yn && (window.addEventListener(Cn, this.handleShowEvent), window.addEventListener(En, this.handleHideEvent))
            },
            kn = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            Tn = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();

        function Nn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function wn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var _n = function(e) {
            function t() {
                var e, n, r;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                return n = r = wn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), r.handleClick = function(e) {
                    e.preventDefault(), r.props.disabled || r.props.divider || (ln(r.props.onClick, e, on()({}, r.props.data, vn.data), vn.target), r.props.preventClose || xn())
                }, wn(r, n)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, l["Component"]), Tn(t, [{
                key: "render",
                value: function() {
                    var e, t = this,
                        n = this.props,
                        r = n.disabled,
                        a = n.divider,
                        o = n.children,
                        i = n.attributes,
                        l = n.selected,
                        p = rn()(dn, i.className, (Nn(e = {}, rn()(bn, i.disabledClassName), r), Nn(e, rn()(mn, i.dividerClassName), a), Nn(e, rn()(fn, i.selectedClassName), l), e));
                    return s.a.createElement("div", kn({}, i, {
                        className: p,
                        role: "menuitem",
                        tabIndex: "-1",
                        "aria-disabled": r ? "true" : "false",
                        "aria-orientation": a ? "horizontal" : null,
                        ref: function(e) {
                            t.ref = e
                        },
                        onMouseMove: this.props.onMouseMove,
                        onMouseLeave: this.props.onMouseLeave,
                        onTouchEnd: this.handleClick,
                        onClick: this.handleClick
                    }), a ? null : o)
                }
            }]), t
        }();
        _n.propTypes = {
            children: tn.a.node,
            attributes: tn.a.object,
            data: tn.a.object,
            disabled: tn.a.bool,
            divider: tn.a.bool,
            preventClose: tn.a.bool,
            onClick: tn.a.func,
            selected: tn.a.bool,
            onMouseMove: tn.a.func,
            onMouseLeave: tn.a.func
        }, _n.defaultProps = {
            disabled: !1,
            data: {},
            divider: !1,
            attributes: {},
            preventClose: !1,
            onClick: function() {
                return null
            },
            children: null,
            selected: !1,
            onMouseMove: function() {
                return null
            },
            onMouseLeave: function() {
                return null
            }
        };
        var Mn = _n;
        var Ln = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return Rn.call(n), n.seletedItemRef = null, n.state = {
                    selectedItem: null,
                    forceSubMenuOpen: !1
                }, n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, l["Component"]), t
        }();
        Ln.propTypes = {
            children: tn.a.node.isRequired
        };
        var Rn = function() {
                var e = this;
                this.handleKeyNavigation = function(t) {
                    if (!1 !== e.state.isVisible) switch (t.keyCode) {
                        case 37:
                        case 27:
                            t.preventDefault(), e.hideMenu(t);
                            break;
                        case 38:
                            t.preventDefault(), e.selectChildren(!0);
                            break;
                        case 40:
                            t.preventDefault(), e.selectChildren(!1);
                            break;
                        case 39:
                            e.tryToOpenSubMenu(t);
                            break;
                        case 13:
                            t.preventDefault(), e.tryToOpenSubMenu(t);
                            var n = e.seletedItemRef && e.seletedItemRef.props && e.seletedItemRef.props.disabled;
                            e.seletedItemRef && e.seletedItemRef.ref instanceof HTMLElement && !n ? e.seletedItemRef.ref.click() : e.hideMenu(t)
                    }
                }, this.handleForceClose = function() {
                    e.setState({
                        forceSubMenuOpen: !1
                    })
                }, this.tryToOpenSubMenu = function(t) {
                    e.state.selectedItem && e.state.selectedItem.type === e.getSubMenuType() && (t.preventDefault(), e.setState({
                        forceSubMenuOpen: !0
                    }))
                }, this.selectChildren = function(t) {
                    var n = e.state.selectedItem,
                        r = [];
                    s.a.Children.forEach(e.props.children, function t(n) {
                        n && ([Mn, e.getSubMenuType()].indexOf(n.type) < 0 ? s.a.Children.forEach(n.props.children, t) : n.props.divider || r.push(n))
                    });
                    var a = r.indexOf(n);
                    a < 0 ? e.setState({
                        selectedItem: t ? r[r.length - 1] : r[0],
                        forceSubMenuOpen: !1
                    }) : t ? e.setState({
                        selectedItem: r[a - 1 < 0 ? r.length - 1 : a - 1],
                        forceSubMenuOpen: !1
                    }) : e.setState({
                        selectedItem: r[a + 1 < r.length ? a + 1 : 0],
                        forceSubMenuOpen: !1
                    })
                }, this.onChildMouseMove = function(t) {
                    e.state.selectedItem !== t && e.setState({
                        selectedItem: t,
                        forceSubMenuOpen: !1
                    })
                }, this.onChildMouseLeave = function() {
                    e.setState({
                        selectedItem: null,
                        forceSubMenuOpen: !1
                    })
                }, this.renderChildren = function(t) {
                    return s.a.Children.map(t, function(t) {
                        var n = {};
                        return s.a.isValidElement(t) ? [Mn, e.getSubMenuType()].indexOf(t.type) < 0 ? (n.children = e.renderChildren(t.props.children), s.a.cloneElement(t, n)) : (n.onMouseLeave = e.onChildMouseLeave.bind(e), t.type === e.getSubMenuType() && (n.forceOpen = e.state.forceSubMenuOpen && e.state.selectedItem === t, n.forceClose = e.handleForceClose, n.parentKeyNavigationHandler = e.handleKeyNavigation), t.props.divider || e.state.selectedItem !== t ? (n.onMouseMove = function() {
                            return e.onChildMouseMove(t)
                        }, s.a.cloneElement(t, n)) : (n.selected = !0, n.ref = function(t) {
                            e.seletedItemRef = t
                        }, s.a.cloneElement(t, n))) : t
                    })
                }
            },
            An = Ln,
            In = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            jn = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();

        function Dn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var zn = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.getMenuPosition = function() {
                    var e = window,
                        t = e.innerWidth,
                        r = e.innerHeight,
                        a = n.subMenu.getBoundingClientRect(),
                        o = {};
                    return a.bottom > r ? o.bottom = 0 : o.top = 0, a.right < t ? o.left = "100%" : o.right = "100%", o
                }, n.getRTLMenuPosition = function() {
                    var e = window.innerHeight,
                        t = n.subMenu.getBoundingClientRect(),
                        r = {};
                    return t.bottom > e ? r.bottom = 0 : r.top = 0, t.left < 0 ? r.left = "100%" : r.right = "100%", r
                }, n.hideMenu = function(e) {
                    e.detail && e.detail.id && n.menu && e.detail.id !== n.menu.id || (n.props.forceOpen && n.props.forceClose(), n.setState({
                        visible: !1,
                        selectedItem: null
                    }), n.unregisterHandlers())
                }, n.handleClick = function(e) {
                    e.preventDefault(), n.props.disabled || ln(n.props.onClick, e, on()({}, n.props.data, vn.data), vn.target)
                }, n.handleMouseEnter = function() {
                    n.closetimer && clearTimeout(n.closetimer), n.props.disabled || n.state.visible || (n.opentimer = setTimeout(function() {
                        return n.setState({
                            visible: !0,
                            selectedItem: null
                        })
                    }, n.props.hoverDelay))
                }, n.handleMouseLeave = function() {
                    n.opentimer && clearTimeout(n.opentimer), n.state.visible && (n.closetimer = setTimeout(function() {
                        return n.setState({
                            visible: !1,
                            selectedItem: null
                        })
                    }, n.props.hoverDelay))
                }, n.menuRef = function(e) {
                    n.menu = e
                }, n.subMenuRef = function(e) {
                    n.subMenu = e
                }, n.registerHandlers = function() {
                    document.removeEventListener("keydown", n.props.parentKeyNavigationHandler), document.addEventListener("keydown", n.handleKeyNavigation)
                }, n.unregisterHandlers = function(e) {
                    document.removeEventListener("keydown", n.handleKeyNavigation), e || document.addEventListener("keydown", n.props.parentKeyNavigationHandler)
                }, n.state = on()({}, n.state, {
                    visible: !1
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, An), jn(t, [{
                key: "componentDidMount",
                value: function() {
                    this.listenId = Pn.register(function() {}, this.hideMenu)
                }
            }, {
                key: "getSubMenuType",
                value: function() {
                    return t
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return this.isVisibilityChange = !(this.state.visible === t.visible && this.props.forceOpen === e.forceOpen || this.state.visible && e.forceOpen || this.props.forceOpen && t.visible), !0
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this;
                    if (this.isVisibilityChange)
                        if (this.props.forceOpen || this.state.visible) {
                            (window.requestAnimationFrame || setTimeout)(function() {
                                var t = e.props.rtl ? e.getRTLMenuPosition() : e.getMenuPosition();
                                e.subMenu.style.removeProperty("top"), e.subMenu.style.removeProperty("bottom"), e.subMenu.style.removeProperty("left"), e.subMenu.style.removeProperty("right"), sn(t, "top") && (e.subMenu.style.top = t.top), sn(t, "left") && (e.subMenu.style.left = t.left), sn(t, "bottom") && (e.subMenu.style.bottom = t.bottom), sn(t, "right") && (e.subMenu.style.right = t.right), e.subMenu.classList.add(cn), e.registerHandlers(), e.setState({
                                    selectedItem: null
                                })
                            })
                        } else {
                            this.subMenu.addEventListener("transitionend", function t() {
                                e.subMenu.removeEventListener("transitionend", t), e.subMenu.style.removeProperty("bottom"), e.subMenu.style.removeProperty("right"), e.subMenu.style.top = 0, e.subMenu.style.left = "100%", e.unregisterHandlers()
                            }), this.subMenu.classList.remove(cn)
                        }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.listenId && Pn.unregister(this.listenId), this.opentimer && clearTimeout(this.opentimer), this.closetimer && clearTimeout(this.closetimer), this.unregisterHandlers(!0)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        n = t.children,
                        r = t.attributes,
                        a = t.disabled,
                        o = t.title,
                        i = t.selected,
                        l = this.state.visible,
                        p = {
                            ref: this.menuRef,
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                            className: rn()(dn, gn, r.listClassName),
                            style: {
                                position: "relative"
                            }
                        },
                        c = {
                            className: rn()(dn, r.className, (e = {}, Dn(e, rn()(bn, r.disabledClassName), a), Dn(e, rn()(hn, r.visibleClassName), l), Dn(e, rn()(fn, r.selectedClassName), i), e)),
                            onMouseMove: this.props.onMouseMove,
                            onMouseOut: this.props.onMouseOut,
                            onClick: this.handleClick
                        },
                        u = {
                            ref: this.subMenuRef,
                            style: {
                                position: "absolute",
                                transition: "opacity 1ms",
                                top: 0,
                                left: "100%"
                            },
                            className: rn()(pn, this.props.className)
                        };
                    return s.a.createElement("nav", In({}, p, {
                        role: "menuitem",
                        tabIndex: "-1",
                        "aria-haspopup": "true"
                    }), s.a.createElement("div", In({}, r, c), o), s.a.createElement("nav", In({}, u, {
                        role: "menu",
                        tabIndex: "-1"
                    }), this.renderChildren(n)))
                }
            }]), t
        }();
        zn.propTypes = {
            children: tn.a.node.isRequired,
            attributes: tn.a.object,
            title: tn.a.node.isRequired,
            className: tn.a.string,
            disabled: tn.a.bool,
            hoverDelay: tn.a.number,
            rtl: tn.a.bool,
            selected: tn.a.bool,
            onMouseMove: tn.a.func,
            onMouseOut: tn.a.func,
            forceOpen: tn.a.bool,
            forceClose: tn.a.func,
            parentKeyNavigationHandler: tn.a.func
        }, zn.defaultProps = {
            disabled: !1,
            hoverDelay: 500,
            attributes: {},
            className: "",
            rtl: !1,
            selected: !1,
            onMouseMove: function() {
                return null
            },
            onMouseOut: function() {
                return null
            },
            forceOpen: !1,
            forceClose: function() {
                return null
            },
            parentKeyNavigationHandler: function() {
                return null
            }
        };
        var Fn = zn,
            Un = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        var Gn = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.registerHandlers = function() {
                    document.addEventListener("mousedown", n.handleOutsideClick), document.addEventListener("touchstart", n.handleOutsideClick), document.addEventListener("scroll", n.handleHide), document.addEventListener("contextmenu", n.handleHide), document.addEventListener("keydown", n.handleKeyNavigation), window.addEventListener("resize", n.handleHide)
                }, n.unregisterHandlers = function() {
                    document.removeEventListener("mousedown", n.handleOutsideClick), document.removeEventListener("touchstart", n.handleOutsideClick), document.removeEventListener("scroll", n.handleHide), document.removeEventListener("contextmenu", n.handleHide), document.removeEventListener("keydown", n.handleKeyNavigation), window.removeEventListener("resize", n.handleHide)
                }, n.handleShow = function(e) {
                    if (e.detail.id === n.props.id && !n.state.isVisible) {
                        var t = e.detail.position,
                            r = t.x,
                            a = t.y;
                        n.setState({
                            isVisible: !0,
                            x: r,
                            y: a
                        }), n.registerHandlers(), ln(n.props.onShow, e)
                    }
                }, n.handleHide = function(e) {
                    !n.state.isVisible || e.detail && e.detail.id && e.detail.id !== n.props.id || (n.unregisterHandlers(), n.setState({
                        isVisible: !1,
                        selectedItem: null,
                        forceSubMenuOpen: !1
                    }), ln(n.props.onHide, e))
                }, n.handleOutsideClick = function(e) {
                    n.menu.contains(e.target) || xn()
                }, n.handleMouseLeave = function(e) {
                    e.preventDefault(), ln(n.props.onMouseLeave, e, on()({}, n.props.data, vn.data), vn.target), n.props.hideOnLeave && xn()
                }, n.handleContextMenu = function(e) {
                    e.preventDefault(), n.handleHide(e)
                }, n.hideMenu = function(e) {
                    27 !== e.keyCode && 13 !== e.keyCode || xn()
                }, n.getMenuPosition = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = {
                            top: t,
                            left: e
                        };
                    if (!n.menu) return r;
                    var a = window,
                        o = a.innerWidth,
                        i = a.innerHeight,
                        l = n.menu.getBoundingClientRect();
                    return t + l.height > i && (r.top -= l.height), e + l.width > o && (r.left -= l.width), r.top < 0 && (r.top = l.height < i ? (i - l.height) / 2 : 0), r.left < 0 && (r.left = l.width < o ? (o - l.width) / 2 : 0), r
                }, n.getRTLMenuPosition = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = {
                            top: t,
                            left: e
                        };
                    if (!n.menu) return r;
                    var a = window,
                        o = a.innerWidth,
                        i = a.innerHeight,
                        l = n.menu.getBoundingClientRect();
                    return r.left = e - l.width, t + l.height > i && (r.top -= l.height), r.left < 0 && (r.left += l.width), r.top < 0 && (r.top = l.height < i ? (i - l.height) / 2 : 0), r.left + l.width > o && (r.left = l.width < o ? (o - l.width) / 2 : 0), r
                }, n.menuRef = function(e) {
                    n.menu = e
                }, n.state = on()({}, n.state, {
                    x: 0,
                    y: 0,
                    isVisible: !1
                }), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, An), Un(t, [{
                key: "getSubMenuType",
                value: function() {
                    return Fn
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.listenId = Pn.register(this.handleShow, this.handleHide)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this;
                    if (this.state.isVisible) {
                        var t = window.requestAnimationFrame || setTimeout;
                        t(function() {
                            var n = e.state,
                                r = n.x,
                                a = n.y,
                                o = e.props.rtl ? e.getRTLMenuPosition(r, a) : e.getMenuPosition(r, a),
                                i = o.top,
                                l = o.left;
                            t(function() {
                                e.menu && (e.menu.style.top = i + "px", e.menu.style.left = l + "px", e.menu.style.opacity = 1, e.menu.style.pointerEvents = "auto")
                            })
                        })
                    } else {
                        if (!this.menu) return;
                        this.menu.style.opacity = 0, this.menu.style.pointerEvents = "none"
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.listenId && Pn.unregister(this.listenId), this.unregisterHandlers()
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n, r = this.props,
                        a = r.children,
                        o = r.className,
                        i = r.style,
                        l = this.state.isVisible,
                        p = on()({}, i, {
                            position: "fixed",
                            opacity: 0,
                            pointerEvents: "none"
                        }),
                        c = rn()(pn, o, (n = l, (t = cn) in (e = {}) ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e));
                    return s.a.createElement("nav", {
                        role: "menu",
                        tabIndex: "-1",
                        ref: this.menuRef,
                        style: p,
                        className: c,
                        onContextMenu: this.handleContextMenu,
                        onMouseLeave: this.handleMouseLeave
                    }, this.renderChildren(a))
                }
            }]), t
        }();
        Gn.propTypes = {
            id: tn.a.string.isRequired,
            children: tn.a.node.isRequired,
            data: tn.a.object,
            className: tn.a.string,
            hideOnLeave: tn.a.bool,
            rtl: tn.a.bool,
            onHide: tn.a.func,
            onMouseLeave: tn.a.func,
            onShow: tn.a.func,
            style: tn.a.object
        }, Gn.defaultProps = {
            className: "",
            data: {},
            hideOnLeave: !1,
            rtl: !1,
            onHide: function() {
                return null
            },
            onMouseLeave: function() {
                return null
            },
            onShow: function() {
                return null
            },
            style: {}
        };
        var Hn = Gn,
            Vn = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();

        function Bn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var Wn = function(e) {
            function t() {
                var e, n, r;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                return n = r = Bn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), r.touchHandled = !1, r.handleMouseDown = function(e) {
                    r.props.holdToDisplay >= 0 && 0 === e.button && (e.persist(), e.stopPropagation(), r.mouseDownTimeoutId = setTimeout(function() {
                        return r.handleContextClick(e)
                    }, r.props.holdToDisplay)), ln(r.props.attributes.onMouseDown, e)
                }, r.handleMouseUp = function(e) {
                    0 === e.button && clearTimeout(r.mouseDownTimeoutId), ln(r.props.attributes.onMouseUp, e)
                }, r.handleMouseOut = function(e) {
                    0 === e.button && clearTimeout(r.mouseDownTimeoutId), ln(r.props.attributes.onMouseOut, e)
                }, r.handleTouchstart = function(e) {
                    r.touchHandled = !1, r.props.holdToDisplay >= 0 && (e.persist(), e.stopPropagation(), r.touchstartTimeoutId = setTimeout(function() {
                        r.handleContextClick(e), r.touchHandled = !0
                    }, r.props.holdToDisplay)), ln(r.props.attributes.onTouchStart, e)
                }, r.handleTouchEnd = function(e) {
                    r.touchHandled && e.preventDefault(), clearTimeout(r.touchstartTimeoutId), ln(r.props.attributes.onTouchEnd, e)
                }, r.handleContextMenu = function(e) {
                    r.handleContextClick(e), ln(r.props.attributes.onContextMenu, e)
                }, r.handleContextClick = function(e) {
                    if (!r.props.disable) {
                        e.preventDefault(), e.stopPropagation();
                        var t = e.clientX || e.touches && e.touches[0].pageX,
                            n = e.clientY || e.touches && e.touches[0].pageY;
                        r.props.posX && (t -= r.props.posX), r.props.posY && (n -= r.props.posY), xn();
                        var a = ln(r.props.collect, r.props),
                            o = {
                                position: {
                                    x: t,
                                    y: n
                                },
                                target: r.elem,
                                id: r.props.id,
                                data: a
                            };
                        a && "function" == typeof a.then ? a.then(function(e) {
                            o.data = e, Sn(o)
                        }) : Sn(o)
                    }
                }, r.elemRef = function(e) {
                    r.elem = e
                }, Bn(r, n)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, l["Component"]), Vn(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.renderTag,
                        n = e.attributes,
                        r = e.children,
                        a = on()({}, n, {
                            className: rn()(un, n.className),
                            onContextMenu: this.handleContextMenu,
                            onMouseDown: this.handleMouseDown,
                            onMouseUp: this.handleMouseUp,
                            onTouchStart: this.handleTouchstart,
                            onTouchEnd: this.handleTouchEnd,
                            onMouseOut: this.handleMouseOut,
                            ref: this.elemRef
                        });
                    return s.a.createElement(t, a, r)
                }
            }]), t
        }();
        Wn.propTypes = {
            id: tn.a.string.isRequired,
            children: tn.a.node.isRequired,
            attributes: tn.a.object,
            collect: tn.a.func,
            disable: tn.a.bool,
            holdToDisplay: tn.a.number,
            posX: tn.a.number,
            posY: tn.a.number,
            renderTag: tn.a.oneOfType([tn.a.node, tn.a.func])
        }, Wn.defaultProps = {
            attributes: {},
            collect: function() {
                return null
            },
            disable: !1,
            holdToDisplay: 1e3,
            renderTag: "div",
            posX: 0,
            posY: 0
        };
        var Yn = Wn;
        Object.assign,
            function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
            }();
        [].concat(function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }(Object.keys(Yn.propTypes)), ["children"]);
        var Xn = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.expandAll = function() {
                    this.props.onExpandAll(!this.props.isExpanded)
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.isExpanded ? l.createElement(u.a, {
                            icon: F
                        }) : l.createElement(u.a, {
                            icon: G
                        }),
                        n = this.props.isExpanded ? l.createElement(u.a, {
                            icon: P
                        }) : l.createElement(u.a, {
                            icon: _
                        });
                    return l.createElement("div", {
                        className: "expandableHeader"
                    }, l.createElement("div", {
                        className: "text"
                    }, l.createElement("div", {
                        className: "arrow icon",
                        onClick: function() {
                            return e.props.onClick()
                        }
                    }, t), l.createElement("div", {
                        className: "text-value"
                    }, this.props.label)), l.createElement("div", {
                        className: "expandAll icon",
                        onClick: function() {
                            return e.expandAll()
                        },
                        title: this.props.isExpanded ? "Collapse all" : "Expand all"
                    }, n))
                }, t
            }(l.Component),
            Kn = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    return l.createElement("div", {
                        className: "expandableHeader"
                    }, l.createElement("div", {
                        className: "text"
                    }, l.createElement("div", {
                        className: "arrow icon"
                    }, l.createElement(u.a, {
                        icon: m
                    })), l.createElement("div", {
                        className: "text-value"
                    }, this.props.label)))
                }, t
            }(l.Component),
            qn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isExpanded: !1,
                        mustExpand: !1
                    }, n
                }
                return a(t, e), t.prototype.switchExpandedState = function() {
                    this.setState({
                        isExpanded: !this.state.isExpanded,
                        mustExpand: !1
                    })
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    if (!t.isExpanded && this.state.isExpanded) return !0;
                    var n = e.items;
                    if (n && n.length && e.selectedEntity)
                        for (var r = 0, a = n; r < a.length; r++) {
                            var o = a[r];
                            if (Zt.LookForItem(o, e.selectedEntity)) return t.isExpanded = !0, !0
                        }
                    return !0
                }, t.prototype.expandAll = function(e) {
                    this.setState({
                        isExpanded: e,
                        mustExpand: e
                    })
                }, t.prototype.renderContextMenu = function() {
                    return this.props.contextMenuItems ? l.createElement(Hn, {
                        id: "contextmenu#" + t._ContextMenuUniqueIdGenerator++,
                        className: "context-menu"
                    }, this.props.contextMenuItems.map(function(e) {
                        return l.createElement(Mn, {
                            onClick: function() {
                                return e.action()
                            },
                            key: e.label
                        }, e.label)
                    })) : (t._ContextMenuUniqueIdGenerator++, null)
                }, t.prototype.render = function() {
                    var e = this,
                        n = this.props.items,
                        r = {
                            paddingLeft: 10 * (this.props.offset + .5) + "px"
                        };
                    if (!n) return l.createElement("div", {
                        className: "groupContainer",
                        style: r
                    }, l.createElement("div", null, this.props.label));
                    if (!n.length) return l.createElement("div", {
                        className: "groupContainer",
                        style: r
                    }, l.createElement(Yn, {
                        id: "contextmenu#" + t._ContextMenuUniqueIdGenerator
                    }, this.renderContextMenu(), l.createElement(Kn, {
                        label: this.props.label
                    })));
                    if (!this.state.isExpanded) return l.createElement("div", {
                        className: "groupContainer",
                        style: r
                    }, l.createElement(Yn, {
                        id: "contextmenu#" + t._ContextMenuUniqueIdGenerator
                    }, this.renderContextMenu(), l.createElement(Xn, {
                        isExpanded: !1,
                        label: this.props.label,
                        onClick: function() {
                            return e.switchExpandedState()
                        },
                        onExpandAll: function(t) {
                            return e.expandAll(t)
                        }
                    })));
                    var a = Zt.SortAndFilter(null, n);
                    return l.createElement("div", null, l.createElement("div", {
                        className: "groupContainer",
                        style: r
                    }, l.createElement(Yn, {
                        id: "contextmenu#" + t._ContextMenuUniqueIdGenerator
                    }, this.renderContextMenu(), l.createElement(Xn, {
                        isExpanded: this.state.isExpanded,
                        label: this.props.label,
                        onClick: function() {
                            return e.switchExpandedState()
                        },
                        onExpandAll: function(t) {
                            return e.expandAll(t)
                        }
                    }))), a.map(function(t) {
                        return l.createElement(Jt, {
                            mustExpand: e.state.mustExpand,
                            extensibilityGroups: e.props.extensibilityGroups,
                            key: t.uniqueId || t.name,
                            offset: e.props.offset + 1,
                            selectedEntity: e.props.selectedEntity,
                            entity: t,
                            globalState: e.props.globalState,
                            filter: e.props.filter
                        })
                    }))
                }, t._ContextMenuUniqueIdGenerator = 0, t
            }(l.Component),
            Qn = function() {},
            $n = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n._posDragEnd = null, n._scaleDragEnd = null, n._rotateDragEnd = null;
                    var r = n.props.scene,
                        a = 0;
                    if (r.reservedDataStore && r.reservedDataStore.gizmoManager) {
                        var o = r.reservedDataStore.gizmoManager;
                        o.positionGizmoEnabled ? a = 1 : o.rotationGizmoEnabled ? a = 2 : o.scaleGizmoEnabled ? a = 3 : o.boundingBoxGizmoEnabled && (a = 4)
                    }
                    return n.state = {
                        isSelected: !1,
                        isInPickingMode: !1,
                        gizmoMode: a
                    }, n
                }
                return a(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
                    if (e.selectedEntity) {
                        if (e.scene === e.selectedEntity) return t.isSelected = !0, !0;
                        t.isSelected = !1
                    }
                    return !0
                }, t.prototype.componentWillMount = function() {
                    var e = this;
                    if (this.props.onSelectionChangedObservable) {
                        var t = this.props.scene;
                        this._onSelectionChangeObserver = this.props.onSelectionChangedObservable.add(function(n) {
                            if (e._selectedEntity = n, t.reservedDataStore && t.reservedDataStore.gizmoManager) {
                                var r = t.reservedDataStore.gizmoManager,
                                    a = n.getClassName();
                                "TransformNode" === a || -1 !== a.indexOf("Mesh") ? r.attachToMesh(n) : -1 !== a.indexOf("Light") ? (e._selectedEntity.reservedDataStore && e._selectedEntity.reservedDataStore.lightGizmo || (e.props.globalState.enableLightGizmo(e._selectedEntity, !0), e.forceUpdate()), r.attachToMesh(e._selectedEntity.reservedDataStore.lightGizmo.attachedMesh)) : r.attachToMesh(null)
                            }
                        })
                    }
                }, t.prototype.componentWillUnmount = function() {
                    var e = this.props.scene;
                    this._onPointerObserver && (e.onPointerObservable.remove(this._onPointerObserver), this._onPointerObserver = null), this._gizmoLayerOnPointerObserver && (e.onPointerObservable.remove(this._gizmoLayerOnPointerObserver), this._gizmoLayerOnPointerObserver = null), this._onSelectionChangeObserver && this.props.onSelectionChangedObservable && this.props.onSelectionChangedObservable.remove(this._onSelectionChangeObserver)
                }, t.prototype.onSelect = function() {
                    if (this.props.onSelectionChangedObservable) {
                        var e = this.props.scene;
                        this.props.onSelectionChangedObservable.notifyObservers(e)
                    }
                }, t.prototype.onPickingMode = function() {
                    var e = this,
                        t = this.props.scene;
                    this._onPointerObserver && (t.onPointerObservable.remove(this._onPointerObserver), this._onPointerObserver = null), this.state.isInPickingMode || (this._onPointerObserver = t.onPointerObservable.add(function() {
                        var n = t.unTranslatedPointer,
                            r = t.pick(n.x, n.y, function(e) {
                                return e.isEnabled() && e.isVisible && e.getTotalVertices() > 0
                            }, !1, void 0, function(t, n, r, a) {
                                if (!e.props.globalState.ignoreBackfacesForPicking) return !0;
                                var o = c.TmpVectors.Vector3[0],
                                    i = c.TmpVectors.Vector3[1],
                                    l = c.TmpVectors.Vector3[2];
                                return n.subtractToRef(t, o), r.subtractToRef(n, i), l = c.Vector3.Cross(o, i), c.Vector3.Dot(l, a.direction) < 0
                            });
                        if (e.props.globalState.lightGizmos.length > 0) {
                            var a = e.props.globalState.lightGizmos[0].gizmoLayer.utilityLayerScene.pick(n.x, n.y, function(t) {
                                for (var n = 0, r = e.props.globalState.lightGizmos; n < r.length; n++) {
                                    if (r[n].attachedMesh == t) return !0
                                }
                                return !1
                            });
                            if (a && a.hit && e.props.onSelectionChangedObservable) return void e.props.onSelectionChangedObservable.notifyObservers(a.pickedMesh)
                        }
                        r && r.hit && e.props.onSelectionChangedObservable && e.props.onSelectionChangedObservable.notifyObservers(r.pickedMesh)
                    }, c.PointerEventTypes.POINTERTAP)), this.setState({
                        isInPickingMode: !this.state.isInPickingMode
                    })
                }, t.prototype.setGizmoMode = function(e) {
                    var t = this,
                        n = this.props.scene;
                    n.reservedDataStore || (n.reservedDataStore = {}), this._gizmoLayerOnPointerObserver && (n.onPointerObservable.remove(this._gizmoLayerOnPointerObserver), this._gizmoLayerOnPointerObserver = null), n.reservedDataStore.gizmoManager || (n.reservedDataStore.gizmoManager = new c.GizmoManager(n));
                    var r = n.reservedDataStore.gizmoManager;
                    if (this._gizmoLayerOnPointerObserver = c.UtilityLayerRenderer.DefaultUtilityLayer.utilityLayerScene.onPointerObservable.add(function(e) {
                            if (e.type == c.PointerEventTypes.POINTERDOWN && e.pickInfo && e.pickInfo.pickedMesh) {
                                for (var n = e.pickInfo.pickedMesh; n && null != n.parent;) n = n.parent;
                                for (var a = 0, o = t.props.globalState.lightGizmos; a < o.length; a++) {
                                    var i = o[a];
                                    i._rootMesh == n && r.attachToMesh(i.attachedMesh)
                                }
                            }
                        }), r.boundingBoxGizmoEnabled = !1, r.positionGizmoEnabled = !1, r.rotationGizmoEnabled = !1, r.scaleGizmoEnabled = !1, this.state.gizmoMode === e) e = 0, r.dispose(), n.reservedDataStore.gizmoManager = null;
                    else {
                        switch (e) {
                            case 1:
                                r.positionGizmoEnabled = !0, this._posDragEnd || (this._posDragEnd = r.gizmos.positionGizmo.onDragEndObservable.add(function() {
                                    if (r.gizmos.positionGizmo && r.gizmos.positionGizmo.attachedMesh) {
                                        var e = r.gizmos.positionGizmo.attachedMesh.reservedDataStore.lightGizmo,
                                            n = e && e.light ? e.light : r.gizmos.positionGizmo.attachedMesh;
                                        if (n.position) {
                                            var a = new Qn;
                                            a.object = n, a.property = "position", a.value = n.position, t.props.globalState.onPropertyChangedObservable.notifyObservers(a)
                                        }
                                    }
                                }));
                                break;
                            case 2:
                                r.rotationGizmoEnabled = !0, this._rotateDragEnd || (this._rotateDragEnd = r.gizmos.rotationGizmo.onDragEndObservable.add(function() {
                                    if (r.gizmos.rotationGizmo && r.gizmos.rotationGizmo.attachedMesh) {
                                        var e = r.gizmos.rotationGizmo.attachedMesh.reservedDataStore.lightGizmo,
                                            n = e && e.light ? e.light : r.gizmos.rotationGizmo.attachedMesh;
                                        if (n.rotationQuaternion)(a = new Qn).object = n, a.property = "rotationQuaternion", a.value = n.rotationQuaternion, t.props.globalState.onPropertyChangedObservable.notifyObservers(a);
                                        else if (n.rotation) {
                                            (a = new Qn).object = n, a.property = "rotation", a.value = n.rotation, t.props.globalState.onPropertyChangedObservable.notifyObservers(a)
                                        } else if (n.direction) {
                                            var a;
                                            (a = new Qn).object = n, a.property = "direction", a.value = n.direction, t.props.globalState.onPropertyChangedObservable.notifyObservers(a)
                                        }
                                    }
                                }));
                                break;
                            case 3:
                                r.scaleGizmoEnabled = !0, this._scaleDragEnd || (this._scaleDragEnd = r.gizmos.scaleGizmo.onDragEndObservable.add(function() {
                                    if (r.gizmos.scaleGizmo && r.gizmos.scaleGizmo.attachedMesh) {
                                        var e = r.gizmos.scaleGizmo.attachedMesh.reservedDataStore.lightGizmo,
                                            n = e && e.light ? e.light : r.gizmos.scaleGizmo.attachedMesh;
                                        if (n.scaling) {
                                            var a = new Qn;
                                            a.object = n, a.property = "scaling", a.value = n.scaling, t.props.globalState.onPropertyChangedObservable.notifyObservers(a)
                                        }
                                    }
                                }));
                                break;
                            case 4:
                                r.boundingBoxGizmoEnabled = !0, r.gizmos.boundingBoxGizmo && (r.gizmos.boundingBoxGizmo.fixedDragMeshScreenSize = !0)
                        }
                        if (this._selectedEntity && this._selectedEntity.getClassName) {
                            var a = this._selectedEntity.getClassName();
                            "TransformNode" === a || -1 !== a.indexOf("Mesh") ? r.attachToMesh(this._selectedEntity) : -1 !== a.indexOf("Light") && (this._selectedEntity.reservedDataStore && this._selectedEntity.reservedDataStore.lightGizmo || (this.props.globalState.enableLightGizmo(this._selectedEntity, !0), this.forceUpdate()), r.attachToMesh(this._selectedEntity.reservedDataStore.lightGizmo.attachedMesh))
                        }
                    }
                    this.setState({
                        gizmoMode: e
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: this.state.isSelected ? "itemContainer selected" : "itemContainer"
                    }, l.createElement("div", {
                        className: "sceneNode"
                    }, l.createElement("div", {
                        className: "sceneTitle",
                        onClick: function() {
                            return e.onSelect()
                        }
                    }, l.createElement(u.a, {
                        icon: j
                    }), " Scene"), l.createElement("div", {
                        className: 1 === this.state.gizmoMode ? "translation selected icon" : "translation icon",
                        onClick: function() {
                            return e.setGizmoMode(1)
                        },
                        title: "Enable/Disable position mode"
                    }, l.createElement(u.a, {
                        icon: b
                    })), l.createElement("div", {
                        className: 2 === this.state.gizmoMode ? "rotation selected icon" : "rotation icon",
                        onClick: function() {
                            return e.setGizmoMode(2)
                        },
                        title: "Enable/Disable rotation mode"
                    }, l.createElement(u.a, {
                        icon: V
                    })), l.createElement("div", {
                        className: 3 === this.state.gizmoMode ? "scaling selected icon" : "scaling icon",
                        onClick: function() {
                            return e.setGizmoMode(3)
                        },
                        title: "Enable/Disable scaling mode"
                    }, l.createElement(u.a, {
                        icon: P
                    })), l.createElement("div", {
                        className: 4 === this.state.gizmoMode ? "bounding selected icon" : "bounding icon",
                        onClick: function() {
                            return e.setGizmoMode(4)
                        },
                        title: "Enable/Disable bounding box mode"
                    }, l.createElement(u.a, {
                        icon: K
                    })), l.createElement("div", {
                        className: "separator"
                    }), l.createElement("div", {
                        className: this.state.isInPickingMode ? "pickingMode selected icon" : "pickingMode icon",
                        onClick: function() {
                            return e.onPickingMode()
                        },
                        title: "Turn picking mode on/off"
                    }, l.createElement(u.a, {
                        icon: T
                    })), l.createElement("div", {
                        className: "refresh icon",
                        onClick: function() {
                            return e.props.onRefresh()
                        },
                        title: "Refresh the explorer"
                    }, l.createElement(u.a, {
                        icon: W
                    })), l.createElement(Dt, {
                        target: this.props.scene,
                        extensibilityGroups: this.props.extensibilityGroups
                    })))
                }, t
            }(l.Component);
        n(30);
        var Zn = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return a(t, e), t.prototype.render = function() {
                    var e = this;
                    return l.createElement("div", {
                        className: "filter"
                    }, l.createElement("input", {
                        type: "text",
                        placeholder: "Filter",
                        onChange: function(t) {
                            return e.props.onFilter(t.target.value)
                        }
                    }))
                }, t
            }(l.Component),
            Jn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._once = !0, n._hooked = !1, n.state = {
                        filter: null,
                        selectedEntity: null,
                        scene: n.props.scene
                    }, n.sceneMutationFunc = n.processMutation.bind(n), n
                }
                return a(t, e), t.prototype.processMutation = function() {
                    this.props.globalState.blockMutationUpdates || this.forceUpdate()
                }, t.prototype.componentWillMount = function() {
                    var e = this;
                    this._onSelectionChangeObserver = this.props.globalState.onSelectionChangedObservable.add(function(t) {
                        e.state.selectedEntity !== t && e.setState({
                            selectedEntity: t
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this._onSelectionChangeObserver && this.props.globalState.onSelectionChangedObservable.remove(this._onSelectionChangeObserver), this._onNewSceneAddedObserver && c.EngineStore.LastCreatedEngine.onNewSceneAddedObservable.remove(this._onNewSceneAddedObserver);
                    var e = this.state.scene;
                    e.onNewSkeletonAddedObservable.removeCallback(this.sceneMutationFunc), e.onNewCameraAddedObservable.removeCallback(this.sceneMutationFunc), e.onNewLightAddedObservable.removeCallback(this.sceneMutationFunc), e.onNewMaterialAddedObservable.removeCallback(this.sceneMutationFunc), e.onNewMeshAddedObservable.removeCallback(this.sceneMutationFunc), e.onNewTextureAddedObservable.removeCallback(this.sceneMutationFunc), e.onNewTransformNodeAddedObservable.removeCallback(this.sceneMutationFunc), e.onSkeletonRemovedObservable.removeCallback(this.sceneMutationFunc), e.onMeshRemovedObservable.removeCallback(this.sceneMutationFunc), e.onCameraRemovedObservable.removeCallback(this.sceneMutationFunc), e.onLightRemovedObservable.removeCallback(this.sceneMutationFunc), e.onMaterialRemovedObservable.removeCallback(this.sceneMutationFunc), e.onTransformNodeRemovedObservable.removeCallback(this.sceneMutationFunc), e.onTextureRemovedObservable.removeCallback(this.sceneMutationFunc)
                }, t.prototype.filterContent = function(e) {
                    this.setState({
                        filter: e
                    })
                }, t.prototype.findSiblings = function(e, t, n, r, a) {
                    if (!t) return !1;
                    var o = Zt.SortAndFilter(e, t);
                    if (!t || 0 === o.length) return !1;
                    for (var i = 0, l = o; i < l.length; i++) {
                        var s = l[i];
                        if (s === n) {
                            if (a.found = !0, !r) return a.previousOne && this.props.globalState.onSelectionChangedObservable.notifyObservers(a.previousOne), !0
                        } else {
                            if (a.found) return this.props.globalState.onSelectionChangedObservable.notifyObservers(s), !0;
                            a.previousOne = s
                        }
                        if (s.getChildren && s.reservedDataStore && s.reservedDataStore.isExpanded && this.findSiblings(s, s.getChildren(), n, r, a)) return !0
                    }
                    return !1
                }, t.prototype.processKeys = function(e) {
                    if (this.state.selectedEntity) {
                        var t = this.state.scene,
                            n = !1,
                            r = !1;
                        if (38 === e.keyCode) n = !0;
                        else if (40 === e.keyCode) r = !0, n = !0;
                        else {
                            var a;
                            if (13 === e.keyCode || 39 === e.keyCode) return (a = this.state.selectedEntity.reservedDataStore) && a.setExpandedState && a.setExpandedState(!0), void e.preventDefault();
                            if (37 === e.keyCode) return (a = this.state.selectedEntity.reservedDataStore) && a.setExpandedState && a.setExpandedState(!1), void e.preventDefault()
                        }
                        if (n) {
                            e.preventDefault();
                            var o = {};
                            this.findSiblings(null, t.rootNodes, this.state.selectedEntity, r, o) || this.findSiblings(null, t.materials, this.state.selectedEntity, r, o) || this.findSiblings(null, t.textures, this.state.selectedEntity, r, o)
                        }
                    }
                }, t.prototype.renderContent = function() {
                    var e = this,
                        t = this.state.scene;
                    if (!t) return this._onNewSceneAddedObserver = c.EngineStore.LastCreatedEngine.onNewSceneAddedObservable.addOnce(function(t) {
                        return e.setState({
                            scene: t
                        })
                    }), null;
                    this._hooked || (this._hooked = !0, t.onNewSkeletonAddedObservable.add(this.sceneMutationFunc), t.onNewCameraAddedObservable.add(this.sceneMutationFunc), t.onNewLightAddedObservable.add(this.sceneMutationFunc), t.onNewMaterialAddedObservable.add(this.sceneMutationFunc), t.onNewMeshAddedObservable.add(this.sceneMutationFunc), t.onNewTextureAddedObservable.add(this.sceneMutationFunc), t.onNewTransformNodeAddedObservable.add(this.sceneMutationFunc), t.onSkeletonRemovedObservable.add(this.sceneMutationFunc), t.onMeshRemovedObservable.add(this.sceneMutationFunc), t.onCameraRemovedObservable.add(this.sceneMutationFunc), t.onLightRemovedObservable.add(this.sceneMutationFunc), t.onMaterialRemovedObservable.add(this.sceneMutationFunc), t.onTransformNodeRemovedObservable.add(this.sceneMutationFunc), t.onTextureRemovedObservable.add(this.sceneMutationFunc));
                    var n = t.textures.filter(function(e) {
                            return "AdvancedDynamicTexture" === e.getClassName()
                        }),
                        r = t.textures.filter(function(e) {
                            return "AdvancedDynamicTexture" !== e.getClassName()
                        }),
                        a = t.postProcesses,
                        o = t.postProcessRenderPipelineManager.supportedPipelines,
                        i = [];
                    t.activeCamera && (o.some(function(e) {
                        return "DefaultRenderingPipeline" === e.getClassName()
                    }) || i.push({
                        label: "Add new Default Rendering Pipeline",
                        action: function() {
                            var n = new c.DefaultRenderingPipeline("Default rendering pipeline", !0, t, [t.activeCamera]);
                            e.props.globalState.onSelectionChangedObservable.notifyObservers(n)
                        }
                    }), o.some(function(e) {
                        return "SSAORenderingPipeline" === e.getClassName()
                    }) || i.push({
                        label: "Add new SSAO Rendering Pipeline",
                        action: function() {
                            var n = new c.SSAORenderingPipeline("SSAO rendering pipeline", t, 1, [t.activeCamera]);
                            e.props.globalState.onSelectionChangedObservable.notifyObservers(n)
                        }
                    }), t.getEngine().webGLVersion > 1 && !o.some(function(e) {
                        return "SSAORenderingPipeline" === e.getClassName()
                    }) && i.push({
                        label: "Add new SSAO2 Rendering Pipeline",
                        action: function() {
                            var n = new c.SSAORenderingPipeline("SSAO2 rendering pipeline", t, 1, [t.activeCamera]);
                            e.props.globalState.onSelectionChangedObservable.notifyObservers(n)
                        }
                    }));
                    var s = [];
                    return s.push({
                        label: "Add new point light",
                        action: function() {
                            var n = new c.PointLight("point light", c.Vector3.Zero(), t);
                            e.props.globalState.onSelectionChangedObservable.notifyObservers(n)
                        }
                    }), s.push({
                        label: "Add new directional light",
                        action: function() {
                            var n = new c.DirectionalLight("directional light", new c.Vector3(-1, -1, -.5), t);
                            e.props.globalState.onSelectionChangedObservable.notifyObservers(n)
                        }
                    }), s.push({
                        label: "Add new free camera",
                        action: function() {
                            var n = new c.FreeCamera("free camera", t.activeCamera ? t.activeCamera.globalPosition : new c.Vector3(0, 0, -5), t);
                            e.props.globalState.onSelectionChangedObservable.notifyObservers(n)
                        }
                    }), l.createElement("div", {
                        id: "tree",
                        onContextMenu: function(e) {
                            return e.preventDefault()
                        }
                    }, l.createElement(Zn, {
                        onFilter: function(t) {
                            return e.filterContent(t)
                        }
                    }), l.createElement($n, {
                        globalState: this.props.globalState,
                        extensibilityGroups: this.props.extensibilityGroups,
                        selectedEntity: this.state.selectedEntity,
                        scene: t,
                        onRefresh: function() {
                            return e.forceUpdate()
                        },
                        onSelectionChangedObservable: this.props.globalState.onSelectionChangedObservable
                    }), l.createElement(qn, {
                        globalState: this.props.globalState,
                        contextMenuItems: s,
                        extensibilityGroups: this.props.extensibilityGroups,
                        selectedEntity: this.state.selectedEntity,
                        items: t.rootNodes,
                        label: "Nodes",
                        offset: 1,
                        filter: this.state.filter
                    }), t.skeletons.length > 0 && l.createElement(qn, {
                        globalState: this.props.globalState,
                        extensibilityGroups: this.props.extensibilityGroups,
                        selectedEntity: this.state.selectedEntity,
                        items: t.skeletons,
                        label: "Skeletons",
                        offset: 1,
                        filter: this.state.filter
                    }), l.createElement(qn, {
                        globalState: this.props.globalState,
                        extensibilityGroups: this.props.extensibilityGroups,
                        selectedEntity: this.state.selectedEntity,
                        items: t.materials,
                        label: "Materials",
                        offset: 1,
                        filter: this.state.filter
                    }), l.createElement(qn, {
                        globalState: this.props.globalState,
                        extensibilityGroups: this.props.extensibilityGroups,
                        selectedEntity: this.state.selectedEntity,
                        items: r,
                        label: "Textures",
                        offset: 1,
                        filter: this.state.filter
                    }), a.length > 0 && l.createElement(qn, {
                        globalState: this.props.globalState,
                        extensibilityGroups: this.props.extensibilityGroups,
                        selectedEntity: this.state.selectedEntity,
                        items: a,
                        label: "Post-processes",
                        offset: 1,
                        filter: this.state.filter
                    }), l.createElement(qn, {
                        globalState: this.props.globalState,
                        extensibilityGroups: this.props.extensibilityGroups,
                        contextMenuItems: i,
                        selectedEntity: this.state.selectedEntity,
                        items: o,
                        label: "Rendering pipelines",
                        offset: 1,
                        filter: this.state.filter
                    }), n && n.length > 0 && l.createElement(qn, {
                        globalState: this.props.globalState,
                        extensibilityGroups: this.props.extensibilityGroups,
                        selectedEntity: this.state.selectedEntity,
                        items: n,
                        label: "GUI",
                        offset: 1,
                        filter: this.state.filter
                    }), t.animationGroups.length > 0 && l.createElement(qn, {
                        globalState: this.props.globalState,
                        extensibilityGroups: this.props.extensibilityGroups,
                        selectedEntity: this.state.selectedEntity,
                        items: t.animationGroups,
                        label: "Animation groups",
                        offset: 1,
                        filter: this.state.filter
                    }))
                }, t.prototype.onClose = function() {
                    this.props.onClose && this.props.onClose()
                }, t.prototype.onPopup = function() {
                    this.props.onPopup && this.props.onPopup()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.popupMode ? l.createElement("div", {
                        id: "sceneExplorer"
                    }, !this.props.noHeader && l.createElement(xt, {
                        title: "SCENE EXPLORER",
                        noClose: this.props.noClose,
                        noExpand: this.props.noExpand,
                        noCommands: this.props.noCommands,
                        onClose: function() {
                            return e.onClose()
                        },
                        onPopup: function() {
                            return e.onPopup()
                        }
                    }), this.renderContent()) : (this._once && (this._once = !1, setTimeout(function() {
                        var e = document.getElementById("sceneExplorer");
                        e && (e.style.width = "300px")
                    }, 150)), l.createElement(pe.a, {
                        tabIndex: -1,
                        id: "sceneExplorer",
                        ref: "sceneExplorer",
                        size: {
                            height: "100%"
                        },
                        minWidth: 300,
                        maxWidth: 600,
                        minHeight: "100%",
                        enable: {
                            top: !1,
                            right: !0,
                            bottom: !1,
                            left: !1,
                            topRight: !1,
                            bottomRight: !1,
                            bottomLeft: !1,
                            topLeft: !1
                        },
                        onKeyDown: function(t) {
                            return e.processKeys(t)
                        }
                    }, !this.props.noHeader && l.createElement(xt, {
                        title: "SCENE EXPLORER",
                        noClose: this.props.noClose,
                        noExpand: this.props.noExpand,
                        noCommands: this.props.noCommands,
                        onClose: function() {
                            return e.onClose()
                        },
                        onPopup: function() {
                            return e.onPopup()
                        }
                    }), this.renderContent()))
                }, t
            }(l.Component),
            er = n(32).default;
        n(33);
        var tr = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n._once = !0, n
                }
                return a(t, e), t.prototype.componentDidMount = function() {
                    this.refs.split && er([this.refs.topPart, this.refs.bottomPart], {
                        direction: "vertical",
                        minSize: [200, 200],
                        gutterSize: 4
                    })
                }, t.prototype.renderContent = function() {
                    return this.props.popupMode ? l.createElement("div", {
                        id: "split",
                        className: "splitPopup"
                    }, l.createElement("div", {
                        id: "topPart"
                    }, l.createElement(Jn, {
                        scene: this.props.scene,
                        popupMode: !0,
                        globalState: this.props.globalState,
                        noHeader: !0
                    })), l.createElement("div", {
                        id: "separator"
                    }), l.createElement("div", {
                        id: "bottomPart",
                        style: {
                            marginTop: "4px",
                            overflow: "hidden"
                        }
                    }, l.createElement(Mt, {
                        scene: this.props.scene,
                        popupMode: !0,
                        globalState: this.props.globalState,
                        noHeader: !0
                    }))) : l.createElement("div", {
                        ref: "split",
                        id: "split",
                        className: "noPopup"
                    }, l.createElement("div", {
                        id: "topPart",
                        ref: "topPart"
                    }, l.createElement(Jn, {
                        scene: this.props.scene,
                        globalState: this.props.globalState,
                        popupMode: !0,
                        noHeader: !0
                    })), l.createElement("div", {
                        id: "bottomPart",
                        ref: "bottomPart",
                        style: {
                            marginTop: "4px",
                            overflow: "hidden"
                        }
                    }, l.createElement(Mt, {
                        scene: this.props.scene,
                        globalState: this.props.globalState,
                        popupMode: !0,
                        noHeader: !0
                    })))
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.popupMode ? l.createElement("div", {
                        id: "embed"
                    }, l.createElement(xt, {
                        title: "INSPECTOR",
                        noClose: this.props.noClose,
                        noExpand: this.props.noExpand,
                        handleBack: !0,
                        onClose: function() {
                            return e.props.onClose()
                        },
                        onPopup: function() {
                            return e.props.onPopup()
                        },
                        onSelectionChangedObservable: this.props.globalState.onSelectionChangedObservable
                    }), this.renderContent()) : (this._once && (this._once = !1, setTimeout(function() {
                        var e = document.getElementById("embed");
                        e && (e.style.width = "300px")
                    }, 150)), l.createElement(pe.a, {
                        id: "embed",
                        minWidth: 300,
                        maxWidth: 600,
                        size: {
                            height: "100%"
                        },
                        minHeight: "100%",
                        enable: {
                            top: !1,
                            right: !1,
                            bottom: !1,
                            left: !0,
                            topRight: !1,
                            bottomRight: !1,
                            bottomLeft: !1,
                            topLeft: !1
                        }
                    }, l.createElement(xt, {
                        title: "INSPECTOR",
                        noClose: this.props.noClose,
                        noExpand: this.props.noExpand,
                        handleBack: !0,
                        onClose: function() {
                            return e.props.onClose()
                        },
                        onPopup: function() {
                            return e.props.onPopup()
                        },
                        onSelectionChangedObservable: this.props.globalState.onSelectionChangedObservable
                    }), this.renderContent()))
                }, t
            }(l.Component),
            nr = function() {
                function e() {}
                return e.prototype.reset = function() {
                    this._recordedCodeLines = [], this._previousObject = null, this._previousProperty = ""
                }, e.prototype.record = function(e) {
                    this._recordedCodeLines || (this._recordedCodeLines = []), this._previousObject === e.object && this._previousProperty === e.property && this._recordedCodeLines.pop();
                    var t = e.value;
                    void 0 !== t.w ? t = "new BABYLON.Quaternion(" + t.x + ", " + t.y + ", " + t.z + ", " + t.w + ")" : void 0 !== t.z ? t = "new BABYLON.Vector3(" + t.x + ", " + t.y + ", " + t.z + ")" : void 0 !== t.y ? t = "new BABYLON.Vector2(" + t.x + ", " + t.y + ")" : void 0 !== t.a ? t = "new BABYLON.Color4(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")" : void 0 !== t.b && (t = "new BABYLON.Color3(" + t.r + ", " + t.g + ", " + t.b + ")");
                    var n = e.object.getClassName().toLowerCase();
                    e.object.id && ("Scene" === n ? n = "scene" : n.indexOf("camera") > -1 ? n = 'scene.getCameraByID("' + e.object.id + '")' : n.indexOf("mesh") > -1 ? n = 'scene.getMeshByID("' + e.object.id + '")' : n.indexOf("light") > -1 ? n = 'scene.getLightByID("' + e.object.id + '")' : "transformnode" === n ? n = 'scene.getTransformNodeByID("' + e.object.id + '")' : "skeleton" === n ? n = 'scene.getSkeletonById("' + e.object.id + '")' : n.indexOf("material") > -1 && (n = 'scene.getMaterialByID("' + e.object.id + '")')), this._recordedCodeLines.push(n + "." + e.property + " = " + t + ";"), this._previousObject = e.object, this._previousProperty = e.property
                }, e.prototype.export = function() {
                    var e = "// Code generated by babylon.js Inspector\r\n// Please keep in mind to define the 'scene' variable before using that code\r\n\r\n";
                    this._recordedCodeLines && (e += this._recordedCodeLines.join("\r\n")), c.Tools.Download(new Blob([e]), "pseudo-code.txt")
                }, e
            }(),
            rr = function() {
                function e() {
                    this.onInspectorClosedObservable = new c.Observable, this.onTabChangedObservable = new c.Observable, this.onValidationResultsUpdatedObservable = new c.Observable, this.glTFLoaderExtensionDefaults = {}, this.glTFLoaderDefaults = {
                        validate: !0
                    }, this.blockMutationUpdates = !1, this.selectedLineContainerTitle = "", this.recorder = new nr, this._onlyUseEulers = null, this._ignoreBackfacesForPicking = null, this.lightGizmos = []
                }
                return Object.defineProperty(e.prototype, "onlyUseEulers", {
                    get: function() {
                        return null === this._onlyUseEulers && (this._onlyUseEulers = Zt.ReadLocalBooleanSettings("settings_onlyUseEulers", !0)), this._onlyUseEulers
                    },
                    set: function(e) {
                        this._onlyUseEulers = e, Zt.StoreLocalBooleanSettings("settings_onlyUseEulers", e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "ignoreBackfacesForPicking", {
                    get: function() {
                        return null === this._ignoreBackfacesForPicking && (this._ignoreBackfacesForPicking = Zt.ReadLocalBooleanSettings("settings_ignoreBackfacesForPicking", !1)), this._ignoreBackfacesForPicking
                    },
                    set: function(e) {
                        this._ignoreBackfacesForPicking = e, Zt.StoreLocalBooleanSettings("settings_ignoreBackfacesForPicking", e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.init = function(e) {
                    var t = this;
                    this.onPropertyChangedObservable = e, e.add(function(e) {
                        t.recorder.record(e)
                    })
                }, e.prototype.prepareGLTFPlugin = function(e) {
                    var t = this,
                        n = this.glTFLoaderDefaults;
                    if (void 0 !== n)
                        for (var r in n) e[r] = n[r];
                    e.onExtensionLoadedObservable.add(function(e) {
                        var n = t.glTFLoaderExtensionDefaults[e.name];
                        if (void 0 !== n)
                            for (var r in n) e[r] = n[r]
                    }), e.onValidatedObservable.add(function(e) {
                        t.validationResults = e, t.onValidationResultsUpdatedObservable.notifyObservers(e), (e.issues.numErrors || e.issues.numWarnings) && t.onTabChangedObservable.notifyObservers(3)
                    })
                }, e.prototype.enableLightGizmo = function(e, t) {
                    void 0 === t && (t = !0), t ? (e.reservedDataStore || (e.reservedDataStore = {}), e.reservedDataStore.lightGizmo || (e.reservedDataStore.lightGizmo = new c.LightGizmo, this.lightGizmos.push(e.reservedDataStore.lightGizmo), e.reservedDataStore.lightGizmo.light = e)) : e.reservedDataStore && e.reservedDataStore.lightGizmo && (this.lightGizmos.splice(this.lightGizmos.indexOf(e.reservedDataStore.lightGizmo), 1), e.reservedDataStore.lightGizmo.dispose(), e.reservedDataStore.lightGizmo = null)
                }, e
            }(),
            ar = function() {
                function e() {}
                return e.MarkLineContainerTitleForHighlighting = function(e) {
                    this._GlobalState.selectedLineContainerTitle = e
                }, e._CopyStyles = function(e, t) {
                    for (var n = 0; n < e.styleSheets.length; n++) {
                        var r = e.styleSheets[n];
                        try {
                            if (r.cssRules) {
                                for (var a = e.createElement("style"), o = 0, i = r.cssRules; o < i.length; o++) {
                                    var l = i[o];
                                    a.appendChild(e.createTextNode(l.cssText))
                                }
                                t.head.appendChild(a)
                            } else if (r.href) {
                                var s = e.createElement("link");
                                s.rel = "stylesheet", s.href = r.href, t.head.appendChild(s)
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }, e._CreateSceneExplorer = function(t, n, r) {
                    var a = this;
                    if (n.original && (n = {
                            original: !1,
                            popup: n.popup,
                            overlay: n.overlay,
                            showExplorer: n.showExplorer,
                            showInspector: n.showInspector,
                            embedMode: n.embedMode,
                            handleResize: n.handleResize,
                            enablePopup: n.enablePopup,
                            enableClose: n.enableClose,
                            explorerExtensibility: n.explorerExtensibility
                        }), r && (this._SceneExplorerHost = r.ownerDocument.createElement("div"), this._SceneExplorerHost.id = "scene-explorer-host", this._SceneExplorerHost.style.width = n.explorerWidth || "auto", n.popup ? r.appendChild(this._SceneExplorerHost) : r.insertBefore(this._SceneExplorerHost, this._NewCanvasContainer), n.overlay || (this._SceneExplorerHost.style.position = "relative")), this._SceneExplorerHost) {
                        this._OpenedPane++;
                        var o = l.createElement(Jn, {
                            scene: t,
                            globalState: this._GlobalState,
                            extensibilityGroups: n.explorerExtensibility,
                            noClose: !n.enableClose,
                            noExpand: !n.enablePopup,
                            popupMode: n.popup,
                            onPopup: function() {
                                p.unmountComponentAtNode(a._SceneExplorerHost), a._RemoveElementFromDOM(a._SceneExplorerHost), n.popup && a._SceneExplorerWindow.close(), n.popup = !n.popup, n.showExplorer = !0, n.showInspector = !1, n.explorerWidth = n.popup ? "100%" : "300px", e.Show(t, n)
                            },
                            onClose: function() {
                                p.unmountComponentAtNode(a._SceneExplorerHost), e._OpenedPane--, a._RemoveElementFromDOM(a._SceneExplorerHost), a._Cleanup(), n.popup && a._SceneExplorerWindow.close()
                            }
                        });
                        p.render(o, this._SceneExplorerHost)
                    }
                }, e._CreateActionTabs = function(t, n, r) {
                    var a = this;
                    if (n.original = !1, r) {
                        var o = r.ownerDocument.createElement("div");
                        o.id = "inspector-host", o.style.width = n.inspectorWidth || "auto", r.appendChild(o), this._ActionTabsHost = o, n.overlay || (this._ActionTabsHost.style.position = "relative")
                    }
                    if (this._ActionTabsHost) {
                        this._OpenedPane++;
                        var i = l.createElement(Mt, {
                            globalState: this._GlobalState,
                            scene: t,
                            noClose: !n.enableClose,
                            noExpand: !n.enablePopup,
                            popupMode: n.popup,
                            onPopup: function() {
                                p.unmountComponentAtNode(a._ActionTabsHost), a._RemoveElementFromDOM(a._ActionTabsHost), n.popup && a._ActionTabsWindow.close(), n.popup = !n.popup, n.showExplorer = !1, n.showInspector = !0, n.inspectorWidth = n.popup ? "100%" : "300px", e.Show(t, n)
                            },
                            onClose: function() {
                                p.unmountComponentAtNode(a._ActionTabsHost), e._OpenedPane--, a._Cleanup(), a._RemoveElementFromDOM(a._ActionTabsHost), n.popup && a._ActionTabsWindow.close()
                            }
                        });
                        p.render(i, this._ActionTabsHost)
                    }
                }, e._CreateEmbedHost = function(t, n, r, a) {
                    var o = this;
                    if (r) {
                        var i = r.ownerDocument.createElement("div");
                        i.id = "embed-host", i.style.width = n.embedHostWidth || "auto", r.appendChild(i), this._EmbedHost = i, n.overlay || (this._EmbedHost.style.position = "relative")
                    }
                    if (this._EmbedHost) {
                        this._OpenedPane++;
                        var s = l.createElement(tr, {
                            globalState: this._GlobalState,
                            scene: t,
                            noExpand: !n.enablePopup,
                            noClose: !n.enableClose,
                            popupMode: n.popup,
                            onPopup: function() {
                                p.unmountComponentAtNode(o._EmbedHost), n.popup && o._EmbedHostWindow.close(), o._RemoveElementFromDOM(o._EmbedHost), n.popup = !n.popup, n.embedMode = !0, n.showExplorer = !0, n.showInspector = !0, n.embedHostWidth = n.popup ? "100%" : "auto", e.Show(t, n)
                            },
                            onClose: function() {
                                p.unmountComponentAtNode(o._EmbedHost), o._OpenedPane = 0, o._Cleanup(), o._RemoveElementFromDOM(o._EmbedHost), n.popup && o._EmbedHostWindow.close()
                            }
                        });
                        p.render(s, this._EmbedHost)
                    }
                }, e._CreatePopup = function(e, t, n, r) {
                    void 0 === n && (n = 300), void 0 === r && (r = 800);
                    var a = {
                            width: n,
                            height: r,
                            top: (window.innerHeight - n) / 2 + window.screenY,
                            left: (window.innerWidth - r) / 2 + window.screenX
                        },
                        o = Object.keys(a).map(function(e) {
                            return e + "=" + a[e]
                        }).join(","),
                        i = window.open("", e, o);
                    if (!i) return null;
                    var l = i.document;
                    l.title = e, l.body.style.width = "100%", l.body.style.height = "100%", l.body.style.margin = "0", l.body.style.padding = "0";
                    var s = l.createElement("div");
                    return s.style.width = "100%", s.style.height = "100%", s.style.margin = "0", s.style.padding = "0", i.document.body.appendChild(s), this._CopyStyles(window.document, l), this[t] = i, s
                }, Object.defineProperty(e, "IsVisible", {
                    get: function() {
                        return this._OpenedPane > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.EarlyAttachToLoader = function() {
                    var e = this;
                    this._GlobalState.onPluginActivatedObserver || (this._GlobalState.onPluginActivatedObserver = c.SceneLoader.OnPluginActivatedObservable.add(function(t) {
                        var n = t;
                        "gltf" === n.name && e._GlobalState.prepareGLTFPlugin(n)
                    }))
                }, e.Show = function(t, n) {
                    var r = o({
                        original: !0,
                        popup: !1,
                        overlay: !1,
                        showExplorer: !0,
                        showInspector: !0,
                        embedMode: !1,
                        enableClose: !0,
                        handleResize: !0,
                        enablePopup: !0
                    }, n);
                    this._GlobalState.onPropertyChangedObservable || this._GlobalState.init(this.OnPropertyChangedObservable), this._GlobalState.onSelectionChangedObservable || (this._GlobalState.onSelectionChangedObservable = this.OnSelectionChangeObservable), this.IsVisible && r.original && this.Hide(), t || (t = c.EngineStore.LastCreatedScene), this._Scene = t;
                    var a = t ? t.getEngine().getRenderingCanvas() : c.EngineStore.LastCreatedEngine.getRenderingCanvas();
                    if (r.embedMode && r.showExplorer && r.showInspector)
                        if (r.popup) this._CreateEmbedHost(t, r, this._CreatePopup("INSPECTOR", "_EmbedHostWindow"), e.OnSelectionChangeObservable);
                        else {
                            var i = r.globalRoot ? r.globalRoot : a.parentElement;
                            r.overlay || this._NewCanvasContainer ? !r.overlay && this._NewCanvasContainer && this._NewCanvasContainer.parentElement && (i = this._NewCanvasContainer.parentElement) : this._CreateCanvasContainer(i), this._NewCanvasContainer && r.handleResize && t && (this._OnBeforeRenderObserver = t.onBeforeRenderObservable.add(function() {
                                t.getEngine().resize()
                            })), this._CreateEmbedHost(t, r, i, e.OnSelectionChangeObservable)
                        }
                    else if (r.popup) r.showExplorer && (this._SceneExplorerHost && (this._SceneExplorerHost.style.width = "0"), this._CreateSceneExplorer(t, r, this._CreatePopup("SCENE EXPLORER", "_SceneExplorerWindow"))), r.showInspector && (this._ActionTabsHost && (this._ActionTabsHost.style.width = "0"), this._CreateActionTabs(t, r, this._CreatePopup("INSPECTOR", "_ActionTabsWindow")));
                    else {
                        i = r.globalRoot ? r.globalRoot : a.parentElement;
                        r.overlay || this._NewCanvasContainer ? !r.overlay && this._NewCanvasContainer && this._NewCanvasContainer.parentElement && (i = this._NewCanvasContainer.parentElement) : this._CreateCanvasContainer(i), this._NewCanvasContainer && r.handleResize && t && (this._OnBeforeRenderObserver = t.onBeforeRenderObservable.add(function() {
                            t.getEngine().resize()
                        })), r.showExplorer && this._CreateSceneExplorer(t, r, i), r.showInspector && this._CreateActionTabs(t, r, i)
                    }
                }, e._CreateCanvasContainer = function(e) {
                    for (this._NewCanvasContainer = e.ownerDocument.createElement("div"), this._NewCanvasContainer.style.display = e.style.display, e.style.display = "flex"; e.childElementCount > 0;) {
                        var t = e.childNodes[0];
                        e.removeChild(t), this._NewCanvasContainer.appendChild(t)
                    }
                    e.appendChild(this._NewCanvasContainer), this._NewCanvasContainer.style.width = "100%", this._NewCanvasContainer.style.height = "100%"
                }, e._DestroyCanvasContainer = function() {
                    for (var e = this._NewCanvasContainer.parentElement; this._NewCanvasContainer.childElementCount > 0;) {
                        var t = this._NewCanvasContainer.childNodes[0];
                        this._NewCanvasContainer.removeChild(t), e.appendChild(t)
                    }
                    e.removeChild(this._NewCanvasContainer), e.style.display = this._NewCanvasContainer.style.display, delete this._NewCanvasContainer
                }, e._Cleanup = function() {
                    var t = this;
                    0 === e._OpenedPane && (this._GlobalState.lightGizmos.forEach(function(e) {
                        e.light && t._GlobalState.enableLightGizmo(e.light, !1)
                    }), this._Scene && this._Scene.reservedDataStore && this._Scene.reservedDataStore.gizmoManager && (this._Scene.reservedDataStore.gizmoManager.dispose(), this._Scene.reservedDataStore.gizmoManager = null), this._NewCanvasContainer && this._DestroyCanvasContainer(), this._OnBeforeRenderObserver && this._Scene && (this._Scene.onBeforeRenderObservable.remove(this._OnBeforeRenderObserver), this._OnBeforeRenderObserver = null, this._Scene.getEngine().resize()), this._GlobalState.onInspectorClosedObservable.notifyObservers(this._Scene))
                }, e._RemoveElementFromDOM = function(e) {
                    e && e.parentElement && e.parentElement.removeChild(e)
                }, e.Hide = function() {
                    this._ActionTabsHost && (p.unmountComponentAtNode(this._ActionTabsHost), this._RemoveElementFromDOM(this._ActionTabsHost), this._ActionTabsHost = null), this._SceneExplorerHost && (p.unmountComponentAtNode(this._SceneExplorerHost), this._SceneExplorerHost.parentElement && this._SceneExplorerHost.parentElement.removeChild(this._SceneExplorerHost), this._SceneExplorerHost = null), this._EmbedHost && (p.unmountComponentAtNode(this._EmbedHost), this._EmbedHost.parentElement && this._EmbedHost.parentElement.removeChild(this._EmbedHost), this._EmbedHost = null), e._OpenedPane = 0, this._Cleanup(), this._GlobalState.onPluginActivatedObserver || (c.SceneLoader.OnPluginActivatedObservable.remove(this._GlobalState.onPluginActivatedObserver), this._GlobalState.onPluginActivatedObserver = null)
                }, e._OpenedPane = 0, e.OnSelectionChangeObservable = new c.Observable, e.OnPropertyChangedObservable = new c.Observable, e._GlobalState = new rr, e
            }();
        ar.EarlyAttachToLoader(), n.d(t, "a", function() {
            return ar
        })
    }, function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var n = function(e, t) {
                        var n = e[1] || "",
                            r = e[3];
                        if (!r) return n;
                        if (t && "function" == typeof btoa) {
                            var a = (i = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
                                o = r.sources.map(function(e) {
                                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                                });
                            return [n].concat(o).concat([a]).join("\n")
                        }
                        var i;
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }).join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var r = {}, a = 0; a < this.length; a++) {
                    var o = this[a][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (a = 0; a < e.length; a++) {
                    var i = e[a];
                    "number" == typeof i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), t.push(i))
                }
            }, t
        }
    }, function(e, t, n) {
        var r, a, o = {},
            i = (r = function() {
                return window && document && document.all && !window.atob
            }, function() {
                return void 0 === a && (a = r.apply(this, arguments)), a
            }),
            l = function(e) {
                var t = {};
                return function(e) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var n = function(e) {
                            return document.querySelector(e)
                        }.call(this, e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                        t[e] = n
                    }
                    return t[e]
                }
            }(),
            s = null,
            p = 0,
            c = [],
            u = n(29);

        function d(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    a = o[r.id];
                if (a) {
                    a.refs++;
                    for (var i = 0; i < a.parts.length; i++) a.parts[i](r.parts[i]);
                    for (; i < r.parts.length; i++) a.parts.push(v(r.parts[i], t))
                } else {
                    var l = [];
                    for (i = 0; i < r.parts.length; i++) l.push(v(r.parts[i], t));
                    o[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: l
                    }
                }
            }
        }

        function h(e, t) {
            for (var n = [], r = {}, a = 0; a < e.length; a++) {
                var o = e[a],
                    i = t.base ? o[0] + t.base : o[0],
                    l = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                r[i] ? r[i].parts.push(l) : n.push(r[i] = {
                    id: i,
                    parts: [l]
                })
            }
            return n
        }

        function b(e, t) {
            var n = l(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = c[c.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), c.push(t);
            else if ("bottom" === e.insertAt) n.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var a = l(e.insertInto + " " + e.insertAt.before);
                n.insertBefore(t, a)
            }
        }

        function m(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = c.indexOf(e);
            t >= 0 && c.splice(t, 1)
        }

        function f(e) {
            var t = document.createElement("style");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), g(t, e.attrs), b(e, t), t
        }

        function g(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n])
            })
        }

        function v(e, t) {
            var n, r, a, o;
            if (t.transform && e.css) {
                if (!(o = t.transform(e.css))) return function() {};
                e.css = o
            }
            if (t.singleton) {
                var i = p++;
                n = s || (s = f(t)), r = E.bind(null, n, i, !1), a = E.bind(null, n, i, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                var t = document.createElement("link");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", g(t, e.attrs), b(e, t), t
            }(t), r = function(e, t, n) {
                var r = n.css,
                    a = n.sourceMap,
                    o = void 0 === t.convertToAbsoluteUrls && a;
                (t.convertToAbsoluteUrls || o) && (r = u(r));
                a && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
                var i = new Blob([r], {
                        type: "text/css"
                    }),
                    l = e.href;
                e.href = URL.createObjectURL(i), l && URL.revokeObjectURL(l)
            }.bind(null, n, t), a = function() {
                m(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = f(t), r = function(e, t) {
                var n = t.css,
                    r = t.media;
                r && e.setAttribute("media", r);
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), a = function() {
                m(n)
            });
            return r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t)
                    } else a()
                }
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = h(e, t);
            return d(n, t),
                function(e) {
                    for (var r = [], a = 0; a < n.length; a++) {
                        var i = n[a];
                        (l = o[i.id]).refs--, r.push(l)
                    }
                    e && d(h(e, t), t);
                    for (a = 0; a < r.length; a++) {
                        var l;
                        if (0 === (l = r[a]).refs) {
                            for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                            delete o[l.id]
                        }
                    }
                }
        };
        var y, C = (y = [], function(e, t) {
            return y[e] = t, y.filter(Boolean).join("\n")
        });

        function E(e, t, n, r) {
            var a = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = C(t, a);
            else {
                var o = document.createTextNode(a),
                    i = e.childNodes;
                i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(o, i[t]) : e.appendChild(o)
            }
        }
    }, function(e, t, n) {
        "use strict";
        (function(e, r) {
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        i(e, t, n[t])
                    })
                }
                return e
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            n.d(t, "a", function() {
                return Me
            }), n.d(t, "b", function() {
                return _e
            });
            var p = function() {},
                c = {},
                u = {},
                d = {
                    mark: p,
                    measure: p
                };
            try {
                "undefined" != typeof window && (c = window), "undefined" != typeof document && (u = document), "undefined" != typeof MutationObserver && MutationObserver, "undefined" != typeof performance && (d = performance)
            } catch (e) {}
            var h = (c.navigator || {}).userAgent,
                b = void 0 === h ? "" : h,
                m = c,
                f = u,
                g = d,
                v = (m.document, !!f.documentElement && !!f.head && "function" == typeof f.addEventListener && "function" == typeof f.createElement),
                y = (~b.indexOf("MSIE") || b.indexOf("Trident/"), "fa"),
                C = "svg-inline--fa",
                E = "data-fa-i2svg",
                O = (function() {
                    try {} catch (e) {
                        return !1
                    }
                }(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
                S = O.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                x = (["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(O.map(function(e) {
                    return "".concat(e, "x")
                })).concat(S.map(function(e) {
                    return "w-".concat(e)
                })), m.FontAwesomeConfig || {});
            if (f && "function" == typeof f.querySelector) {
                [
                    ["data-family-prefix", "familyPrefix"],
                    ["data-replacement-class", "replacementClass"],
                    ["data-auto-replace-svg", "autoReplaceSvg"],
                    ["data-auto-add-css", "autoAddCss"],
                    ["data-auto-a11y", "autoA11y"],
                    ["data-search-pseudo-elements", "searchPseudoElements"],
                    ["data-observe-mutations", "observeMutations"],
                    ["data-mutate-approach", "mutateApproach"],
                    ["data-keep-original-source", "keepOriginalSource"],
                    ["data-measure-performance", "measurePerformance"],
                    ["data-show-missing-icons", "showMissingIcons"]
                ].forEach(function(e) {
                    var t = s(e, 2),
                        n = t[0],
                        r = t[1],
                        a = function(e) {
                            return "" === e || "false" !== e && ("true" === e || e)
                        }(function(e) {
                            var t = f.querySelector("script[" + e + "]");
                            if (t) return t.getAttribute(e)
                        }(n));
                    null != a && (x[r] = a)
                })
            }
            var P = l({}, {
                familyPrefix: y,
                replacementClass: C,
                autoReplaceSvg: !0,
                autoAddCss: !0,
                autoA11y: !0,
                searchPseudoElements: !1,
                observeMutations: !0,
                mutateApproach: "async",
                keepOriginalSource: !0,
                measurePerformance: !1,
                showMissingIcons: !0
            }, x);
            P.autoReplaceSvg || (P.observeMutations = !1);
            var k = l({}, P);
            m.FontAwesomeConfig = k;
            var T = m || {};
            T.___FONT_AWESOME___ || (T.___FONT_AWESOME___ = {}), T.___FONT_AWESOME___.styles || (T.___FONT_AWESOME___.styles = {}), T.___FONT_AWESOME___.hooks || (T.___FONT_AWESOME___.hooks = {}), T.___FONT_AWESOME___.shims || (T.___FONT_AWESOME___.shims = []);
            var N = T.___FONT_AWESOME___,
                w = [];
            v && ((f.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(f.readyState) || f.addEventListener("DOMContentLoaded", function e() {
                f.removeEventListener("DOMContentLoaded", e), 1, w.map(function(e) {
                    return e()
                })
            }));
            var _, M = "pending",
                L = "settled",
                R = "fulfilled",
                A = "rejected",
                I = function() {},
                j = void 0 !== e && void 0 !== e.process && "function" == typeof e.process.emit,
                D = void 0 === r ? setTimeout : r,
                z = [];

            function F() {
                for (var e = 0; e < z.length; e++) z[e][0](z[e][1]);
                z = [], _ = !1
            }

            function U(e, t) {
                z.push([e, t]), _ || (_ = !0, D(F, 0))
            }

            function G(e) {
                var t = e.owner,
                    n = t._state,
                    r = t._data,
                    a = e[n],
                    o = e.then;
                if ("function" == typeof a) {
                    n = R;
                    try {
                        r = a(r)
                    } catch (e) {
                        W(o, e)
                    }
                }
                H(o, r) || (n === R && V(o, r), n === A && W(o, r))
            }

            function H(e, t) {
                var n;
                try {
                    if (e === t) throw new TypeError("A promises callback cannot return that same promise.");
                    if (t && ("function" == typeof t || "object" === a(t))) {
                        var r = t.then;
                        if ("function" == typeof r) return r.call(t, function(r) {
                            n || (n = !0, t === r ? B(e, r) : V(e, r))
                        }, function(t) {
                            n || (n = !0, W(e, t))
                        }), !0
                    }
                } catch (t) {
                    return n || W(e, t), !0
                }
                return !1
            }

            function V(e, t) {
                e !== t && H(e, t) || B(e, t)
            }

            function B(e, t) {
                e._state === M && (e._state = L, e._data = t, U(X, e))
            }

            function W(e, t) {
                e._state === M && (e._state = L, e._data = t, U(K, e))
            }

            function Y(e) {
                e._then = e._then.forEach(G)
            }

            function X(e) {
                e._state = R, Y(e)
            }

            function K(t) {
                t._state = A, Y(t), !t._handled && j && e.process.emit("unhandledRejection", t._data, t)
            }

            function q(t) {
                e.process.emit("rejectionHandled", t)
            }

            function Q(e) {
                if ("function" != typeof e) throw new TypeError("Promise resolver " + e + " is not a function");
                if (this instanceof Q == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this._then = [],
                    function(e, t) {
                        function n(e) {
                            W(t, e)
                        }
                        try {
                            e(function(e) {
                                V(t, e)
                            }, n)
                        } catch (e) {
                            n(e)
                        }
                    }(e, this)
            }
            Q.prototype = {
                constructor: Q,
                _state: M,
                _then: null,
                _data: void 0,
                _handled: !1,
                then: function(e, t) {
                    var n = {
                        owner: this,
                        then: new this.constructor(I),
                        fulfilled: e,
                        rejected: t
                    };
                    return !t && !e || this._handled || (this._handled = !0, this._state === A && j && U(q, this)), this._state === R || this._state === A ? U(G, n) : this._then.push(n), n.then
                },
                catch: function(e) {
                    return this.then(null, e)
                }
            }, Q.all = function(e) {
                if (!Array.isArray(e)) throw new TypeError("You must pass an array to Promise.all().");
                return new Q(function(t, n) {
                    var r = [],
                        a = 0;

                    function o(e) {
                        return a++,
                            function(n) {
                                r[e] = n, --a || t(r)
                            }
                    }
                    for (var i, l = 0; l < e.length; l++)(i = e[l]) && "function" == typeof i.then ? i.then(o(l), n) : r[l] = i;
                    a || t(r)
                })
            }, Q.race = function(e) {
                if (!Array.isArray(e)) throw new TypeError("You must pass an array to Promise.race().");
                return new Q(function(t, n) {
                    for (var r, a = 0; a < e.length; a++)(r = e[a]) && "function" == typeof r.then ? r.then(t, n) : t(r)
                })
            }, Q.resolve = function(e) {
                return e && "object" === a(e) && e.constructor === Q ? e : new Q(function(t) {
                    t(e)
                })
            }, Q.reject = function(e) {
                return new Q(function(t, n) {
                    n(e)
                })
            };
            "function" == typeof Promise && Promise;
            var $ = {
                size: 16,
                x: 0,
                y: 0,
                rotate: 0,
                flipX: !1,
                flipY: !1
            };

            function Z(e) {
                if (e && v) {
                    var t = f.createElement("style");
                    t.setAttribute("type", "text/css"), t.innerHTML = e;
                    for (var n = f.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
                        var o = n[a],
                            i = (o.tagName || "").toUpperCase();
                        ["STYLE", "LINK"].indexOf(i) > -1 && (r = o)
                    }
                    return f.head.insertBefore(t, r), e
                }
            }
            var J = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function ee() {
                for (var e = 12, t = ""; e-- > 0;) t += J[62 * Math.random() | 0];
                return t
            }

            function te(e) {
                return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function ne(e) {
                return Object.keys(e || {}).reduce(function(t, n) {
                    return t + "".concat(n, ": ").concat(e[n], ";")
                }, "")
            }

            function re(e) {
                return e.size !== $.size || e.x !== $.x || e.y !== $.y || e.rotate !== $.rotate || e.flipX || e.flipY
            }

            function ae(e) {
                var t = e.transform,
                    n = e.containerWidth,
                    r = e.iconWidth,
                    a = {
                        transform: "translate(".concat(n / 2, " 256)")
                    },
                    o = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
                    i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
                    l = "rotate(".concat(t.rotate, " 0 0)");
                return {
                    outer: a,
                    inner: {
                        transform: "".concat(o, " ").concat(i, " ").concat(l)
                    },
                    path: {
                        transform: "translate(".concat(r / 2 * -1, " -256)")
                    }
                }
            }
            var oe = {
                x: 0,
                y: 0,
                width: "100%",
                height: "100%"
            };

            function ie(e) {
                var t = e.icons,
                    n = t.main,
                    r = t.mask,
                    a = e.prefix,
                    o = e.iconName,
                    i = e.transform,
                    s = e.symbol,
                    p = e.title,
                    c = e.extra,
                    u = e.watchable,
                    d = void 0 !== u && u,
                    h = r.found ? r : n,
                    b = h.width,
                    m = h.height,
                    f = "fa-w-".concat(Math.ceil(b / m * 16)),
                    g = [k.replacementClass, o ? "".concat(k.familyPrefix, "-").concat(o) : "", f].filter(function(e) {
                        return -1 === c.classes.indexOf(e)
                    }).concat(c.classes).join(" "),
                    v = {
                        children: [],
                        attributes: l({}, c.attributes, {
                            "data-prefix": a,
                            "data-icon": o,
                            class: g,
                            role: c.attributes.role || "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 ".concat(b, " ").concat(m)
                        })
                    };
                d && (v.attributes[E] = ""), p && v.children.push({
                    tag: "title",
                    attributes: {
                        id: v.attributes["aria-labelledby"] || "title-".concat(ee())
                    },
                    children: [p]
                });
                var y = l({}, v, {
                        prefix: a,
                        iconName: o,
                        main: n,
                        mask: r,
                        transform: i,
                        symbol: s,
                        styles: c.styles
                    }),
                    C = r.found && n.found ? function(e) {
                        var t = e.children,
                            n = e.attributes,
                            r = e.main,
                            a = e.mask,
                            o = e.transform,
                            i = r.width,
                            s = r.icon,
                            p = a.width,
                            c = a.icon,
                            u = ae({
                                transform: o,
                                containerWidth: p,
                                iconWidth: i
                            }),
                            d = {
                                tag: "rect",
                                attributes: l({}, oe, {
                                    fill: "white"
                                })
                            },
                            h = {
                                tag: "g",
                                attributes: l({}, u.inner),
                                children: [{
                                    tag: "path",
                                    attributes: l({}, s.attributes, u.path, {
                                        fill: "black"
                                    })
                                }]
                            },
                            b = {
                                tag: "g",
                                attributes: l({}, u.outer),
                                children: [h]
                            },
                            m = "mask-".concat(ee()),
                            f = "clip-".concat(ee()),
                            g = {
                                tag: "defs",
                                children: [{
                                    tag: "clipPath",
                                    attributes: {
                                        id: f
                                    },
                                    children: [c]
                                }, {
                                    tag: "mask",
                                    attributes: l({}, oe, {
                                        id: m,
                                        maskUnits: "userSpaceOnUse",
                                        maskContentUnits: "userSpaceOnUse"
                                    }),
                                    children: [d, b]
                                }]
                            };
                        return t.push(g, {
                            tag: "rect",
                            attributes: l({
                                fill: "currentColor",
                                "clip-path": "url(#".concat(f, ")"),
                                mask: "url(#".concat(m, ")")
                            }, oe)
                        }), {
                            children: t,
                            attributes: n
                        }
                    }(y) : function(e) {
                        var t = e.children,
                            n = e.attributes,
                            r = e.main,
                            a = e.transform,
                            o = ne(e.styles);
                        if (o.length > 0 && (n.style = o), re(a)) {
                            var i = ae({
                                transform: a,
                                containerWidth: r.width,
                                iconWidth: r.width
                            });
                            t.push({
                                tag: "g",
                                attributes: l({}, i.outer),
                                children: [{
                                    tag: "g",
                                    attributes: l({}, i.inner),
                                    children: [{
                                        tag: r.icon.tag,
                                        children: r.icon.children,
                                        attributes: l({}, r.icon.attributes, i.path)
                                    }]
                                }]
                            })
                        } else t.push(r.icon);
                        return {
                            children: t,
                            attributes: n
                        }
                    }(y),
                    O = C.children,
                    S = C.attributes;
                return y.children = O, y.attributes = S, s ? function(e) {
                    var t = e.prefix,
                        n = e.iconName,
                        r = e.children,
                        a = e.attributes,
                        o = e.symbol;
                    return [{
                        tag: "svg",
                        attributes: {
                            style: "display: none;"
                        },
                        children: [{
                            tag: "symbol",
                            attributes: l({}, a, {
                                id: !0 === o ? "".concat(t, "-").concat(k.familyPrefix, "-").concat(n) : o
                            }),
                            children: r
                        }]
                    }]
                }(y) : function(e) {
                    var t = e.children,
                        n = e.main,
                        r = e.mask,
                        a = e.attributes,
                        o = e.styles,
                        i = e.transform;
                    if (re(i) && n.found && !r.found) {
                        var s = {
                            x: n.width / n.height / 2,
                            y: .5
                        };
                        a.style = ne(l({}, o, {
                            "transform-origin": "".concat(s.x + i.x / 16, "em ").concat(s.y + i.y / 16, "em")
                        }))
                    }
                    return [{
                        tag: "svg",
                        attributes: a,
                        children: t
                    }]
                }(y)
            }
            var le = function() {},
                se = (k.measurePerformance && g && g.mark && g.measure, function(e, t, n, r) {
                    var a, o, i, l = Object.keys(e),
                        s = l.length,
                        p = void 0 !== r ? function(e, t) {
                            return function(n, r, a, o) {
                                return e.call(t, n, r, a, o)
                            }
                        }(t, r) : t;
                    for (void 0 === n ? (a = 1, i = e[l[0]]) : (a = 0, i = n); a < s; a++) i = p(i, e[o = l[a]], o, e);
                    return i
                });

            function pe(e, t) {
                var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                    r = void 0 !== n && n,
                    a = Object.keys(t).reduce(function(e, n) {
                        var r = t[n];
                        return !!r.icon ? e[r.iconName] = r.icon : e[n] = r, e
                    }, {});
                "function" != typeof N.hooks.addPack || r ? N.styles[e] = l({}, N.styles[e] || {}, a) : N.hooks.addPack(e, a), "fas" === e && pe("fa", t)
            }
            var ce = N.styles,
                ue = N.shims,
                de = function() {
                    var e = function(e) {
                        return se(ce, function(t, n, r) {
                            return t[r] = se(n, e, {}), t
                        }, {})
                    };
                    e(function(e, t, n) {
                        return t[3] && (e[t[3]] = n), e
                    }), e(function(e, t, n) {
                        var r = t[2];
                        return e[n] = n, r.forEach(function(t) {
                            e[t] = n
                        }), e
                    });
                    var t = "far" in ce;
                    se(ue, function(e, n) {
                        var r = n[0],
                            a = n[1],
                            o = n[2];
                        return "far" !== a || t || (a = "fas"), e[r] = {
                            prefix: a,
                            iconName: o
                        }, e
                    }, {})
                };
            de();
            N.styles;

            function he(e, t, n) {
                if (e && e[t] && e[t][n]) return {
                    prefix: t,
                    iconName: n,
                    icon: e[t][n]
                }
            }

            function be(e) {
                var t = e.tag,
                    n = e.attributes,
                    r = void 0 === n ? {} : n,
                    a = e.children,
                    o = void 0 === a ? [] : a;
                return "string" == typeof e ? te(e) : "<".concat(t, " ").concat(function(e) {
                    return Object.keys(e || {}).reduce(function(t, n) {
                        return t + "".concat(n, '="').concat(te(e[n]), '" ')
                    }, "").trim()
                }(r), ">").concat(o.map(be).join(""), "</").concat(t, ">")
            }
            var me = function(e) {
                var t = {
                    size: 16,
                    x: 0,
                    y: 0,
                    flipX: !1,
                    flipY: !1,
                    rotate: 0
                };
                return e ? e.toLowerCase().split(" ").reduce(function(e, t) {
                    var n = t.toLowerCase().split("-"),
                        r = n[0],
                        a = n.slice(1).join("-");
                    if (r && "h" === a) return e.flipX = !0, e;
                    if (r && "v" === a) return e.flipY = !0, e;
                    if (a = parseFloat(a), isNaN(a)) return e;
                    switch (r) {
                        case "grow":
                            e.size = e.size + a;
                            break;
                        case "shrink":
                            e.size = e.size - a;
                            break;
                        case "left":
                            e.x = e.x - a;
                            break;
                        case "right":
                            e.x = e.x + a;
                            break;
                        case "up":
                            e.y = e.y - a;
                            break;
                        case "down":
                            e.y = e.y + a;
                            break;
                        case "rotate":
                            e.rotate = e.rotate + a
                    }
                    return e
                }, t) : t
            };

            function fe(e) {
                this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = (new Error).stack
            }
            fe.prototype = Object.create(Error.prototype), fe.prototype.constructor = fe;
            var ge = {
                    fill: "currentColor"
                },
                ve = {
                    attributeType: "XML",
                    repeatCount: "indefinite",
                    dur: "2s"
                },
                ye = {
                    tag: "path",
                    attributes: l({}, ge, {
                        d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                    })
                },
                Ce = l({}, ve, {
                    attributeName: "opacity"
                });
            l({}, ge, {
                cx: "256",
                cy: "364",
                r: "28"
            }), l({}, ve, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
            }), l({}, Ce, {
                values: "1;0;1;1;0;1;"
            }), l({}, ge, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
            }), l({}, Ce, {
                values: "1;0;0;0;0;1;"
            }), l({}, ge, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            }), l({}, Ce, {
                values: "0;0;1;1;0;0;"
            }), N.styles;
            N.styles;
            var Ee = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}';

            function Oe() {
                var e = y,
                    t = C,
                    n = k.familyPrefix,
                    r = k.replacementClass,
                    a = Ee;
                if (n !== e || r !== t) {
                    var o = new RegExp("\\.".concat(e, "\\-"), "g"),
                        i = new RegExp("\\.".concat(t), "g");
                    a = a.replace(o, ".".concat(n, "-")).replace(i, ".".concat(r))
                }
                return a
            }

            function Se(e) {
                return {
                    found: !0,
                    width: e[0],
                    height: e[1],
                    icon: {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: e.slice(4)[0]
                        }
                    }
                }
            }

            function xe() {
                k.autoAddCss && !we && (Z(Oe()), we = !0)
            }

            function Pe(e, t) {
                return Object.defineProperty(e, "abstract", {
                    get: t
                }), Object.defineProperty(e, "html", {
                    get: function() {
                        return e.abstract.map(function(e) {
                            return be(e)
                        })
                    }
                }), Object.defineProperty(e, "node", {
                    get: function() {
                        if (v) {
                            var t = f.createElement("div");
                            return t.innerHTML = e.html, t.children
                        }
                    }
                }), e
            }

            function ke(e) {
                var t = e.prefix,
                    n = void 0 === t ? "fa" : t,
                    r = e.iconName;
                if (r) return he(Ne.definitions, n, r) || he(N.styles, n, r)
            }
            var Te, Ne = new(function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.definitions = {}
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "add",
                        value: function() {
                            for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var a = n.reduce(this._pullDefinitions, {});
                            Object.keys(a).forEach(function(t) {
                                e.definitions[t] = l({}, e.definitions[t] || {}, a[t]), pe(t, a[t]), de()
                            })
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.definitions = {}
                        }
                    }, {
                        key: "_pullDefinitions",
                        value: function(e, t) {
                            var n = t.prefix && t.iconName && t.icon ? {
                                0: t
                            } : t;
                            return Object.keys(n).map(function(t) {
                                var r = n[t],
                                    a = r.prefix,
                                    o = r.iconName,
                                    i = r.icon;
                                e[a] || (e[a] = {}), e[a][o] = i
                            }), e
                        }
                    }]) && o(t.prototype, n), r && o(t, r), e
                }()),
                we = !1,
                _e = {
                    transform: function(e) {
                        return me(e)
                    }
                },
                Me = (Te = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.transform,
                        r = void 0 === n ? $ : n,
                        a = t.symbol,
                        o = void 0 !== a && a,
                        i = t.mask,
                        s = void 0 === i ? null : i,
                        p = t.title,
                        c = void 0 === p ? null : p,
                        u = t.classes,
                        d = void 0 === u ? [] : u,
                        h = t.attributes,
                        b = void 0 === h ? {} : h,
                        m = t.styles,
                        f = void 0 === m ? {} : m;
                    if (e) {
                        var g = e.prefix,
                            v = e.iconName,
                            y = e.icon;
                        return Pe(l({
                            type: "icon"
                        }, e), function() {
                            return xe(), k.autoA11y && (c ? b["aria-labelledby"] = "".concat(k.replacementClass, "-title-").concat(ee()) : (b["aria-hidden"] = "true", b.focusable = "false")), ie({
                                icons: {
                                    main: Se(y),
                                    mask: s ? Se(s.icon) : {
                                        found: !1,
                                        width: null,
                                        height: null,
                                        icon: {}
                                    }
                                },
                                prefix: g,
                                iconName: v,
                                transform: l({}, $, r),
                                symbol: o,
                                title: c,
                                extra: {
                                    attributes: b,
                                    styles: f,
                                    classes: d
                                }
                            })
                        })
                    }
                }, function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (e || {}).icon ? e : ke(e || {}),
                        r = t.mask;
                    return r && (r = (r || {}).icon ? r : ke(r || {})), Te(n, l({}, t, {
                        mask: r
                    }))
                })
        }).call(this, n(9), n(22).setImmediate)
    }, function(e, t) {
        e.exports = r
    }, function(e, t) {
        e.exports = a
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            function(e) {
                var r = n(11);
                n.d(t, "Inspector", function() {
                    return r.a
                });
                var a = void 0 !== e ? e : "undefined" != typeof window ? window : void 0;
                void 0 !== a && (a.BABYLON = a.BABYLON || {}, a.BABYLON.Inspector = r.a)
            }.call(this, n(9))
    }, function(e, t, n) {
        "use strict";
        /** @license React v16.6.1
         * react.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var r = n(5),
            a = "function" == typeof Symbol && Symbol.for,
            o = a ? Symbol.for("react.element") : 60103,
            i = a ? Symbol.for("react.portal") : 60106,
            l = a ? Symbol.for("react.fragment") : 60107,
            s = a ? Symbol.for("react.strict_mode") : 60108,
            p = a ? Symbol.for("react.profiler") : 60114,
            c = a ? Symbol.for("react.provider") : 60109,
            u = a ? Symbol.for("react.context") : 60110,
            d = a ? Symbol.for("react.concurrent_mode") : 60111,
            h = a ? Symbol.for("react.forward_ref") : 60112,
            b = a ? Symbol.for("react.suspense") : 60113,
            m = a ? Symbol.for("react.memo") : 60115,
            f = a ? Symbol.for("react.lazy") : 60116,
            g = "function" == typeof Symbol && Symbol.iterator;

        function v(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            ! function(e, t, n, r, a, o, i, l) {
                if (!e) {
                    if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var s = [n, r, a, o, i, l],
                            p = 0;
                        (e = Error(t.replace(/%s/g, function() {
                            return s[p++]
                        }))).name = "Invariant Violation"
                    }
                    throw e.framesToPop = 1, e
                }
            }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
        }
        var y = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            C = {};

        function E(e, t, n) {
            this.props = e, this.context = t, this.refs = C, this.updater = n || y
        }

        function O() {}

        function S(e, t, n) {
            this.props = e, this.context = t, this.refs = C, this.updater = n || y
        }
        E.prototype.isReactComponent = {}, E.prototype.setState = function(e, t) {
            "object" != typeof e && "function" != typeof e && null != e && v("85"), this.updater.enqueueSetState(this, e, t, "setState")
        }, E.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, O.prototype = E.prototype;
        var x = S.prototype = new O;
        x.constructor = S, r(x, E.prototype), x.isPureReactComponent = !0;
        var P = {
                current: null,
                currentDispatcher: null
            },
            k = Object.prototype.hasOwnProperty,
            T = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function N(e, t, n) {
            var r = void 0,
                a = {},
                i = null,
                l = null;
            if (null != t)
                for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) k.call(t, r) && !T.hasOwnProperty(r) && (a[r] = t[r]);
            var s = arguments.length - 2;
            if (1 === s) a.children = n;
            else if (1 < s) {
                for (var p = Array(s), c = 0; c < s; c++) p[c] = arguments[c + 2];
                a.children = p
            }
            if (e && e.defaultProps)
                for (r in s = e.defaultProps) void 0 === a[r] && (a[r] = s[r]);
            return {
                $$typeof: o,
                type: e,
                key: i,
                ref: l,
                props: a,
                _owner: P.current
            }
        }

        function w(e) {
            return "object" == typeof e && null !== e && e.$$typeof === o
        }
        var _ = /\/+/g,
            M = [];

        function L(e, t, n, r) {
            if (M.length) {
                var a = M.pop();
                return a.result = e, a.keyPrefix = t, a.func = n, a.context = r, a.count = 0, a
            }
            return {
                result: e,
                keyPrefix: t,
                func: n,
                context: r,
                count: 0
            }
        }

        function R(e) {
            e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > M.length && M.push(e)
        }

        function A(e, t, n) {
            return null == e ? 0 : function e(t, n, r, a) {
                var l = typeof t;
                "undefined" !== l && "boolean" !== l || (t = null);
                var s = !1;
                if (null === t) s = !0;
                else switch (l) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (t.$$typeof) {
                            case o:
                            case i:
                                s = !0
                        }
                }
                if (s) return r(a, t, "" === n ? "." + I(t, 0) : n), 1;
                if (s = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
                    for (var p = 0; p < t.length; p++) {
                        var c = n + I(l = t[p], p);
                        s += e(l, c, r, a)
                    } else if (c = null === t || "object" != typeof t ? null : "function" == typeof(c = g && t[g] || t["@@iterator"]) ? c : null, "function" == typeof c)
                        for (t = c.call(t), p = 0; !(l = t.next()).done;) s += e(l = l.value, c = n + I(l, p++), r, a);
                    else "object" === l && v("31", "[object Object]" == (r = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "");
                return s
            }(e, "", t, n)
        }

        function I(e, t) {
            return "object" == typeof e && null !== e && null != e.key ? function(e) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + ("" + e).replace(/[=:]/g, function(e) {
                    return t[e]
                })
            }(e.key) : t.toString(36)
        }

        function j(e, t) {
            e.func.call(e.context, t, e.count++)
        }

        function D(e, t, n) {
            var r = e.result,
                a = e.keyPrefix;
            e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? z(e, r, n, function(e) {
                return e
            }) : null != e && (w(e) && (e = function(e, t) {
                return {
                    $$typeof: o,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                }
            }(e, a + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(_, "$&/") + "/") + n)), r.push(e))
        }

        function z(e, t, n, r, a) {
            var o = "";
            null != n && (o = ("" + n).replace(_, "$&/") + "/"), A(e, D, t = L(t, o, r, a)), R(t)
        }
        var F = {
            Children: {
                map: function(e, t, n) {
                    if (null == e) return e;
                    var r = [];
                    return z(e, r, null, t, n), r
                },
                forEach: function(e, t, n) {
                    if (null == e) return e;
                    A(e, j, t = L(null, null, t, n)), R(t)
                },
                count: function(e) {
                    return A(e, function() {
                        return null
                    }, null)
                },
                toArray: function(e) {
                    var t = [];
                    return z(e, t, null, function(e) {
                        return e
                    }), t
                },
                only: function(e) {
                    return w(e) || v("143"), e
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: E,
            PureComponent: S,
            createContext: function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: u,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: c,
                    _context: e
                }, e.Consumer = e
            },
            forwardRef: function(e) {
                return {
                    $$typeof: h,
                    render: e
                }
            },
            lazy: function(e) {
                return {
                    $$typeof: f,
                    _ctor: e,
                    _status: -1,
                    _result: null
                }
            },
            memo: function(e, t) {
                return {
                    $$typeof: m,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            },
            Fragment: l,
            StrictMode: s,
            Suspense: b,
            createElement: N,
            cloneElement: function(e, t, n) {
                null == e && v("267", e);
                var a = void 0,
                    i = r({}, e.props),
                    l = e.key,
                    s = e.ref,
                    p = e._owner;
                if (null != t) {
                    void 0 !== t.ref && (s = t.ref, p = P.current), void 0 !== t.key && (l = "" + t.key);
                    var c = void 0;
                    for (a in e.type && e.type.defaultProps && (c = e.type.defaultProps), t) k.call(t, a) && !T.hasOwnProperty(a) && (i[a] = void 0 === t[a] && void 0 !== c ? c[a] : t[a])
                }
                if (1 === (a = arguments.length - 2)) i.children = n;
                else if (1 < a) {
                    c = Array(a);
                    for (var u = 0; u < a; u++) c[u] = arguments[u + 2];
                    i.children = c
                }
                return {
                    $$typeof: o,
                    type: e.type,
                    key: l,
                    ref: s,
                    props: i,
                    _owner: p
                }
            },
            createFactory: function(e) {
                var t = N.bind(null, e);
                return t.type = e, t
            },
            isValidElement: w,
            version: "16.6.3",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentOwner: P,
                assign: r
            }
        };
        F.unstable_ConcurrentMode = d, F.unstable_Profiler = p;
        var U = {
                default: F
            },
            G = U && F || U;
        e.exports = G.default || G
    }, function(e, t, n) {
        "use strict";
        /** @license React v16.6.1
         * react-dom.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var r = n(0),
            a = n(5),
            o = n(20);

        function i(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            ! function(e, t, n, r, a, o, i, l) {
                if (!e) {
                    if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var s = [n, r, a, o, i, l],
                            p = 0;
                        (e = Error(t.replace(/%s/g, function() {
                            return s[p++]
                        }))).name = "Invariant Violation"
                    }
                    throw e.framesToPop = 1, e
                }
            }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
        }
        r || i("227");
        var l = !1,
            s = null,
            p = !1,
            c = null,
            u = {
                onError: function(e) {
                    l = !0, s = e
                }
            };

        function d(e, t, n, r, a, o, i, p, c) {
            l = !1, s = null,
                function(e, t, n, r, a, o, i, l, s) {
                    var p = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, p)
                    } catch (e) {
                        this.onError(e)
                    }
                }.apply(u, arguments)
        }
        var h = null,
            b = {};

        function m() {
            if (h)
                for (var e in b) {
                    var t = b[e],
                        n = h.indexOf(e);
                    if (-1 < n || i("96", e), !g[n])
                        for (var r in t.extractEvents || i("97", e), g[n] = t, n = t.eventTypes) {
                            var a = void 0,
                                o = n[r],
                                l = t,
                                s = r;
                            v.hasOwnProperty(s) && i("99", s), v[s] = o;
                            var p = o.phasedRegistrationNames;
                            if (p) {
                                for (a in p) p.hasOwnProperty(a) && f(p[a], l, s);
                                a = !0
                            } else o.registrationName ? (f(o.registrationName, l, s), a = !0) : a = !1;
                            a || i("98", r, e)
                        }
                }
        }

        function f(e, t, n) {
            y[e] && i("100", e), y[e] = t, C[e] = t.eventTypes[n].dependencies
        }
        var g = [],
            v = {},
            y = {},
            C = {},
            E = null,
            O = null,
            S = null;

        function x(e, t, n) {
            var r = e.type || "unknown-event";
            e.currentTarget = S(n),
                function(e, t, n, r, a, o, u, h, b) {
                    if (d.apply(this, arguments), l) {
                        if (l) {
                            var m = s;
                            l = !1, s = null
                        } else i("198"), m = void 0;
                        p || (p = !0, c = m)
                    }
                }(r, t, void 0, e), e.currentTarget = null
        }

        function P(e, t) {
            return null == t && i("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
        }

        function k(e, t, n) {
            Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
        }
        var T = null;

        function N(e) {
            if (e) {
                var t = e._dispatchListeners,
                    n = e._dispatchInstances;
                if (Array.isArray(t))
                    for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) x(e, t[r], n[r]);
                else t && x(e, t, n);
                e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
            }
        }
        var w = {
            injectEventPluginOrder: function(e) {
                h && i("101"), h = Array.prototype.slice.call(e), m()
            },
            injectEventPluginsByName: function(e) {
                var t, n = !1;
                for (t in e)
                    if (e.hasOwnProperty(t)) {
                        var r = e[t];
                        b.hasOwnProperty(t) && b[t] === r || (b[t] && i("102", t), b[t] = r, n = !0)
                    }
                n && m()
            }
        };

        function _(e, t) {
            var n = e.stateNode;
            if (!n) return null;
            var r = E(n);
            if (!r) return null;
            n = r[t];
            e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                    break e;
                default:
                    e = !1
            }
            return e ? null : (n && "function" != typeof n && i("231", t, typeof n), n)
        }

        function M(e) {
            if (null !== e && (T = P(T, e)), e = T, T = null, e && (k(e, N), T && i("95"), p)) throw e = c, p = !1, c = null, e
        }
        var L = Math.random().toString(36).slice(2),
            R = "__reactInternalInstance$" + L,
            A = "__reactEventHandlers$" + L;

        function I(e) {
            if (e[R]) return e[R];
            for (; !e[R];) {
                if (!e.parentNode) return null;
                e = e.parentNode
            }
            return 5 === (e = e[R]).tag || 6 === e.tag ? e : null
        }

        function j(e) {
            return !(e = e[R]) || 5 !== e.tag && 6 !== e.tag ? null : e
        }

        function D(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            i("33")
        }

        function z(e) {
            return e[A] || null
        }

        function F(e) {
            do {
                e = e.return
            } while (e && 5 !== e.tag);
            return e || null
        }

        function U(e, t, n) {
            (t = _(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = P(n._dispatchListeners, t), n._dispatchInstances = P(n._dispatchInstances, e))
        }

        function G(e) {
            if (e && e.dispatchConfig.phasedRegistrationNames) {
                for (var t = e._targetInst, n = []; t;) n.push(t), t = F(t);
                for (t = n.length; 0 < t--;) U(n[t], "captured", e);
                for (t = 0; t < n.length; t++) U(n[t], "bubbled", e)
            }
        }

        function H(e, t, n) {
            e && n && n.dispatchConfig.registrationName && (t = _(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = P(n._dispatchListeners, t), n._dispatchInstances = P(n._dispatchInstances, e))
        }

        function V(e) {
            e && e.dispatchConfig.registrationName && H(e._targetInst, null, e)
        }

        function B(e) {
            k(e, G)
        }
        var W = !("undefined" == typeof window || !window.document || !window.document.createElement);

        function Y(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
        }
        var X = {
                animationend: Y("Animation", "AnimationEnd"),
                animationiteration: Y("Animation", "AnimationIteration"),
                animationstart: Y("Animation", "AnimationStart"),
                transitionend: Y("Transition", "TransitionEnd")
            },
            K = {},
            q = {};

        function Q(e) {
            if (K[e]) return K[e];
            if (!X[e]) return e;
            var t, n = X[e];
            for (t in n)
                if (n.hasOwnProperty(t) && t in q) return K[e] = n[t];
            return e
        }
        W && (q = document.createElement("div").style, "AnimationEvent" in window || (delete X.animationend.animation, delete X.animationiteration.animation, delete X.animationstart.animation), "TransitionEvent" in window || delete X.transitionend.transition);
        var $ = Q("animationend"),
            Z = Q("animationiteration"),
            J = Q("animationstart"),
            ee = Q("transitionend"),
            te = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            ne = null,
            re = null,
            ae = null;

        function oe() {
            if (ae) return ae;
            var e, t, n = re,
                r = n.length,
                a = "value" in ne ? ne.value : ne.textContent,
                o = a.length;
            for (e = 0; e < r && n[e] === a[e]; e++);
            var i = r - e;
            for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
            return ae = a.slice(e, 1 < t ? 1 - t : void 0)
        }

        function ie() {
            return !0
        }

        function le() {
            return !1
        }

        function se(e, t, n, r) {
            for (var a in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(a) && ((t = e[a]) ? this[a] = t(n) : "target" === a ? this.target = r : this[a] = n[a]);
            return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? ie : le, this.isPropagationStopped = le, this
        }

        function pe(e, t, n, r) {
            if (this.eventPool.length) {
                var a = this.eventPool.pop();
                return this.call(a, e, t, n, r), a
            }
            return new this(e, t, n, r)
        }

        function ce(e) {
            e instanceof this || i("279"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
        }

        function ue(e) {
            e.eventPool = [], e.getPooled = pe, e.release = ce
        }
        a(se.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = ie)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = ie)
            },
            persist: function() {
                this.isPersistent = ie
            },
            isPersistent: le,
            destructor: function() {
                var e, t = this.constructor.Interface;
                for (e in t) this[e] = null;
                this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = le, this._dispatchInstances = this._dispatchListeners = null
            }
        }), se.Interface = {
            type: null,
            target: null,
            currentTarget: function() {
                return null
            },
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        }, se.extend = function(e) {
            function t() {}

            function n() {
                return r.apply(this, arguments)
            }
            var r = this;
            t.prototype = r.prototype;
            var o = new t;
            return a(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = a({}, r.Interface, e), n.extend = r.extend, ue(n), n
        }, ue(se);
        var de = se.extend({
                data: null
            }),
            he = se.extend({
                data: null
            }),
            be = [9, 13, 27, 32],
            me = W && "CompositionEvent" in window,
            fe = null;
        W && "documentMode" in document && (fe = document.documentMode);
        var ge = W && "TextEvent" in window && !fe,
            ve = W && (!me || fe && 8 < fe && 11 >= fe),
            ye = String.fromCharCode(32),
            Ce = {
                beforeInput: {
                    phasedRegistrationNames: {
                        bubbled: "onBeforeInput",
                        captured: "onBeforeInputCapture"
                    },
                    dependencies: ["compositionend", "keypress", "textInput", "paste"]
                },
                compositionEnd: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionEnd",
                        captured: "onCompositionEndCapture"
                    },
                    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
                },
                compositionStart: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionStart",
                        captured: "onCompositionStartCapture"
                    },
                    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
                },
                compositionUpdate: {
                    phasedRegistrationNames: {
                        bubbled: "onCompositionUpdate",
                        captured: "onCompositionUpdateCapture"
                    },
                    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
                }
            },
            Ee = !1;

        function Oe(e, t) {
            switch (e) {
                case "keyup":
                    return -1 !== be.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "blur":
                    return !0;
                default:
                    return !1
            }
        }

        function Se(e) {
            return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
        }
        var xe = !1;
        var Pe = {
                eventTypes: Ce,
                extractEvents: function(e, t, n, r) {
                    var a = void 0,
                        o = void 0;
                    if (me) e: {
                        switch (e) {
                            case "compositionstart":
                                a = Ce.compositionStart;
                                break e;
                            case "compositionend":
                                a = Ce.compositionEnd;
                                break e;
                            case "compositionupdate":
                                a = Ce.compositionUpdate;
                                break e
                        }
                        a = void 0
                    }
                    else xe ? Oe(e, n) && (a = Ce.compositionEnd) : "keydown" === e && 229 === n.keyCode && (a = Ce.compositionStart);
                    return a ? (ve && "ko" !== n.locale && (xe || a !== Ce.compositionStart ? a === Ce.compositionEnd && xe && (o = oe()) : (re = "value" in (ne = r) ? ne.value : ne.textContent, xe = !0)), a = de.getPooled(a, t, n, r), o ? a.data = o : null !== (o = Se(n)) && (a.data = o), B(a), o = a) : o = null, (e = ge ? function(e, t) {
                        switch (e) {
                            case "compositionend":
                                return Se(t);
                            case "keypress":
                                return 32 !== t.which ? null : (Ee = !0, ye);
                            case "textInput":
                                return (e = t.data) === ye && Ee ? null : e;
                            default:
                                return null
                        }
                    }(e, n) : function(e, t) {
                        if (xe) return "compositionend" === e || !me && Oe(e, t) ? (e = oe(), ae = re = ne = null, xe = !1, e) : null;
                        switch (e) {
                            case "paste":
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length) return t.char;
                                    if (t.which) return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return ve && "ko" !== t.locale ? null : t.data;
                            default:
                                return null
                        }
                    }(e, n)) ? ((t = he.getPooled(Ce.beforeInput, t, n, r)).data = e, B(t)) : t = null, null === o ? t : null === t ? o : [o, t]
                }
            },
            ke = null,
            Te = null,
            Ne = null;

        function we(e) {
            if (e = O(e)) {
                "function" != typeof ke && i("280");
                var t = E(e.stateNode);
                ke(e.stateNode, e.type, t)
            }
        }

        function _e(e) {
            Te ? Ne ? Ne.push(e) : Ne = [e] : Te = e
        }

        function Me() {
            if (Te) {
                var e = Te,
                    t = Ne;
                if (Ne = Te = null, we(e), t)
                    for (e = 0; e < t.length; e++) we(t[e])
            }
        }

        function Le(e, t) {
            return e(t)
        }

        function Re(e, t, n) {
            return e(t, n)
        }

        function Ae() {}
        var Ie = !1;

        function je(e, t) {
            if (Ie) return e(t);
            Ie = !0;
            try {
                return Le(e, t)
            } finally {
                Ie = !1, (null !== Te || null !== Ne) && (Ae(), Me())
            }
        }
        var De = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

        function ze(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === t ? !!De[e.type] : "textarea" === t
        }

        function Fe(e) {
            return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
        }

        function Ue(e) {
            if (!W) return !1;
            var t = (e = "on" + e) in document;
            return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
        }

        function Ge(e) {
            var t = e.type;
            return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
        }

        function He(e) {
            e._valueTracker || (e._valueTracker = function(e) {
                var t = Ge(e) ? "checked" : "value",
                    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                    r = "" + e[t];
                if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                    var a = n.get,
                        o = n.set;
                    return Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function() {
                            return a.call(this)
                        },
                        set: function(e) {
                            r = "" + e, o.call(this, e)
                        }
                    }), Object.defineProperty(e, t, {
                        enumerable: n.enumerable
                    }), {
                        getValue: function() {
                            return r
                        },
                        setValue: function(e) {
                            r = "" + e
                        },
                        stopTracking: function() {
                            e._valueTracker = null, delete e[t]
                        }
                    }
                }
            }(e))
        }

        function Ve(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var n = t.getValue(),
                r = "";
            return e && (r = Ge(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
        }
        var Be = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            We = /^(.*)[\\\/]/,
            Ye = "function" == typeof Symbol && Symbol.for,
            Xe = Ye ? Symbol.for("react.element") : 60103,
            Ke = Ye ? Symbol.for("react.portal") : 60106,
            qe = Ye ? Symbol.for("react.fragment") : 60107,
            Qe = Ye ? Symbol.for("react.strict_mode") : 60108,
            $e = Ye ? Symbol.for("react.profiler") : 60114,
            Ze = Ye ? Symbol.for("react.provider") : 60109,
            Je = Ye ? Symbol.for("react.context") : 60110,
            et = Ye ? Symbol.for("react.concurrent_mode") : 60111,
            tt = Ye ? Symbol.for("react.forward_ref") : 60112,
            nt = Ye ? Symbol.for("react.suspense") : 60113,
            rt = Ye ? Symbol.for("react.memo") : 60115,
            at = Ye ? Symbol.for("react.lazy") : 60116,
            ot = "function" == typeof Symbol && Symbol.iterator;

        function it(e) {
            return null === e || "object" != typeof e ? null : "function" == typeof(e = ot && e[ot] || e["@@iterator"]) ? e : null
        }

        function lt(e) {
            if (null == e) return null;
            if ("function" == typeof e) return e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
                case et:
                    return "ConcurrentMode";
                case qe:
                    return "Fragment";
                case Ke:
                    return "Portal";
                case $e:
                    return "Profiler";
                case Qe:
                    return "StrictMode";
                case nt:
                    return "Suspense"
            }
            if ("object" == typeof e) switch (e.$$typeof) {
                case Je:
                    return "Context.Consumer";
                case Ze:
                    return "Context.Provider";
                case tt:
                    var t = e.render;
                    return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                case rt:
                    return lt(e.type);
                case at:
                    if (e = 1 === e._status ? e._result : null) return lt(e)
            }
            return null
        }

        function st(e) {
            var t = "";
            do {
                e: switch (e.tag) {
                    case 2:
                    case 16:
                    case 0:
                    case 1:
                    case 5:
                    case 8:
                    case 13:
                        var n = e._debugOwner,
                            r = e._debugSource,
                            a = lt(e.type),
                            o = null;
                        n && (o = lt(n.type)), n = a, a = "", r ? a = " (at " + r.fileName.replace(We, "") + ":" + r.lineNumber + ")" : o && (a = " (created by " + o + ")"), o = "\n    in " + (n || "Unknown") + a;
                        break e;
                    default:
                        o = ""
                }
                t += o,
                e = e.return
            } while (e);
            return t
        }
        var pt = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            ct = Object.prototype.hasOwnProperty,
            ut = {},
            dt = {};

        function ht(e, t, n, r, a) {
            this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t
        }
        var bt = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
            bt[e] = new ht(e, 0, !1, e, null)
        }), [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
        ].forEach(function(e) {
            var t = e[0];
            bt[t] = new ht(t, 1, !1, e[1], null)
        }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
            bt[e] = new ht(e, 2, !1, e.toLowerCase(), null)
        }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
            bt[e] = new ht(e, 2, !1, e, null)
        }), "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
            bt[e] = new ht(e, 3, !1, e.toLowerCase(), null)
        }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
            bt[e] = new ht(e, 3, !0, e, null)
        }), ["capture", "download"].forEach(function(e) {
            bt[e] = new ht(e, 4, !1, e, null)
        }), ["cols", "rows", "size", "span"].forEach(function(e) {
            bt[e] = new ht(e, 6, !1, e, null)
        }), ["rowSpan", "start"].forEach(function(e) {
            bt[e] = new ht(e, 5, !1, e.toLowerCase(), null)
        });
        var mt = /[\-:]([a-z])/g;

        function ft(e) {
            return e[1].toUpperCase()
        }

        function gt(e, t, n, r) {
            var a = bt.hasOwnProperty(t) ? bt[t] : null;
            (null !== a ? 0 === a.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
                if (null == t || function(e, t, n, r) {
                        if (null !== n && 0 === n.type) return !1;
                        switch (typeof t) {
                            case "function":
                            case "symbol":
                                return !0;
                            case "boolean":
                                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                            default:
                                return !1
                        }
                    }(e, t, n, r)) return !0;
                if (r) return !1;
                if (null !== n) switch (n.type) {
                    case 3:
                        return !t;
                    case 4:
                        return !1 === t;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || 1 > t
                }
                return !1
            }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                return !!ct.call(dt, e) || !ct.call(ut, e) && (pt.test(e) ? dt[e] = !0 : (ut[e] = !0, !1))
            }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
        }

        function vt(e) {
            switch (typeof e) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return e;
                default:
                    return ""
            }
        }

        function yt(e, t) {
            var n = t.checked;
            return a({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != n ? n : e._wrapperState.initialChecked
            })
        }

        function Ct(e, t) {
            var n = null == t.defaultValue ? "" : t.defaultValue,
                r = null != t.checked ? t.checked : t.defaultChecked;
            n = vt(null != t.value ? t.value : n), e._wrapperState = {
                initialChecked: r,
                initialValue: n,
                controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
            }
        }

        function Et(e, t) {
            null != (t = t.checked) && gt(e, "checked", t, !1)
        }

        function Ot(e, t) {
            Et(e, t);
            var n = vt(t.value),
                r = t.type;
            if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
            else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
            t.hasOwnProperty("value") ? xt(e, t.type, n) : t.hasOwnProperty("defaultValue") && xt(e, t.type, vt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
        }

        function St(e, t, n) {
            if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                var r = t.type;
                if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
            }
            "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
        }

        function xt(e, t, n) {
            "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
            var t = e.replace(mt, ft);
            bt[t] = new ht(t, 1, !1, e, null)
        }), "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
            var t = e.replace(mt, ft);
            bt[t] = new ht(t, 1, !1, e, "http://www.w3.org/1999/xlink")
        }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
            var t = e.replace(mt, ft);
            bt[t] = new ht(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace")
        }), bt.tabIndex = new ht("tabIndex", 1, !1, "tabindex", null);
        var Pt = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
            }
        };

        function kt(e, t, n) {
            return (e = se.getPooled(Pt.change, e, t, n)).type = "change", _e(n), B(e), e
        }
        var Tt = null,
            Nt = null;

        function wt(e) {
            M(e)
        }

        function _t(e) {
            if (Ve(D(e))) return e
        }

        function Mt(e, t) {
            if ("change" === e) return t
        }
        var Lt = !1;

        function Rt() {
            Tt && (Tt.detachEvent("onpropertychange", At), Nt = Tt = null)
        }

        function At(e) {
            "value" === e.propertyName && _t(Nt) && je(wt, e = kt(Nt, e, Fe(e)))
        }

        function It(e, t, n) {
            "focus" === e ? (Rt(), Nt = n, (Tt = t).attachEvent("onpropertychange", At)) : "blur" === e && Rt()
        }

        function jt(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e) return _t(Nt)
        }

        function Dt(e, t) {
            if ("click" === e) return _t(t)
        }

        function zt(e, t) {
            if ("input" === e || "change" === e) return _t(t)
        }
        W && (Lt = Ue("input") && (!document.documentMode || 9 < document.documentMode));
        var Ft = {
                eventTypes: Pt,
                _isInputEventSupported: Lt,
                extractEvents: function(e, t, n, r) {
                    var a = t ? D(t) : window,
                        o = void 0,
                        i = void 0,
                        l = a.nodeName && a.nodeName.toLowerCase();
                    if ("select" === l || "input" === l && "file" === a.type ? o = Mt : ze(a) ? Lt ? o = zt : (o = jt, i = It) : (l = a.nodeName) && "input" === l.toLowerCase() && ("checkbox" === a.type || "radio" === a.type) && (o = Dt), o && (o = o(e, t))) return kt(o, n, r);
                    i && i(e, a, t), "blur" === e && (e = a._wrapperState) && e.controlled && "number" === a.type && xt(a, "number", a.value)
                }
            },
            Ut = se.extend({
                view: null,
                detail: null
            }),
            Gt = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };

        function Ht(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : !!(e = Gt[e]) && !!t[e]
        }

        function Vt() {
            return Ht
        }
        var Bt = 0,
            Wt = 0,
            Yt = !1,
            Xt = !1,
            Kt = Ut.extend({
                screenX: null,
                screenY: null,
                clientX: null,
                clientY: null,
                pageX: null,
                pageY: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                getModifierState: Vt,
                button: null,
                buttons: null,
                relatedTarget: function(e) {
                    return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                },
                movementX: function(e) {
                    if ("movementX" in e) return e.movementX;
                    var t = Bt;
                    return Bt = e.screenX, Yt ? "mousemove" === e.type ? e.screenX - t : 0 : (Yt = !0, 0)
                },
                movementY: function(e) {
                    if ("movementY" in e) return e.movementY;
                    var t = Wt;
                    return Wt = e.screenY, Xt ? "mousemove" === e.type ? e.screenY - t : 0 : (Xt = !0, 0)
                }
            }),
            qt = Kt.extend({
                pointerId: null,
                width: null,
                height: null,
                pressure: null,
                tangentialPressure: null,
                tiltX: null,
                tiltY: null,
                twist: null,
                pointerType: null,
                isPrimary: null
            }),
            Qt = {
                mouseEnter: {
                    registrationName: "onMouseEnter",
                    dependencies: ["mouseout", "mouseover"]
                },
                mouseLeave: {
                    registrationName: "onMouseLeave",
                    dependencies: ["mouseout", "mouseover"]
                },
                pointerEnter: {
                    registrationName: "onPointerEnter",
                    dependencies: ["pointerout", "pointerover"]
                },
                pointerLeave: {
                    registrationName: "onPointerLeave",
                    dependencies: ["pointerout", "pointerover"]
                }
            },
            $t = {
                eventTypes: Qt,
                extractEvents: function(e, t, n, r) {
                    var a = "mouseover" === e || "pointerover" === e,
                        o = "mouseout" === e || "pointerout" === e;
                    if (a && (n.relatedTarget || n.fromElement) || !o && !a) return null;
                    if (a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window, o ? (o = t, t = (t = n.relatedTarget || n.toElement) ? I(t) : null) : o = null, o === t) return null;
                    var i = void 0,
                        l = void 0,
                        s = void 0,
                        p = void 0;
                    "mouseout" === e || "mouseover" === e ? (i = Kt, l = Qt.mouseLeave, s = Qt.mouseEnter, p = "mouse") : "pointerout" !== e && "pointerover" !== e || (i = qt, l = Qt.pointerLeave, s = Qt.pointerEnter, p = "pointer");
                    var c = null == o ? a : D(o);
                    if (a = null == t ? a : D(t), (e = i.getPooled(l, o, n, r)).type = p + "leave", e.target = c, e.relatedTarget = a, (n = i.getPooled(s, t, n, r)).type = p + "enter", n.target = a, n.relatedTarget = c, r = t, o && r) e: {
                        for (a = r, p = 0, i = t = o; i; i = F(i)) p++;
                        for (i = 0, s = a; s; s = F(s)) i++;
                        for (; 0 < p - i;) t = F(t),
                        p--;
                        for (; 0 < i - p;) a = F(a),
                        i--;
                        for (; p--;) {
                            if (t === a || t === a.alternate) break e;
                            t = F(t), a = F(a)
                        }
                        t = null
                    }
                    else t = null;
                    for (a = t, t = []; o && o !== a && (null === (p = o.alternate) || p !== a);) t.push(o), o = F(o);
                    for (o = []; r && r !== a && (null === (p = r.alternate) || p !== a);) o.push(r), r = F(r);
                    for (r = 0; r < t.length; r++) H(t[r], "bubbled", e);
                    for (r = o.length; 0 < r--;) H(o[r], "captured", n);
                    return [e, n]
                }
            },
            Zt = Object.prototype.hasOwnProperty;

        function Jt(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
        }

        function en(e, t) {
            if (Jt(e, t)) return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++)
                if (!Zt.call(t, n[r]) || !Jt(e[n[r]], t[n[r]])) return !1;
            return !0
        }

        function tn(e) {
            var t = e;
            if (e.alternate)
                for (; t.return;) t = t.return;
            else {
                if (0 != (2 & t.effectTag)) return 1;
                for (; t.return;)
                    if (0 != (2 & (t = t.return).effectTag)) return 1
            }
            return 3 === t.tag ? 2 : 3
        }

        function nn(e) {
            2 !== tn(e) && i("188")
        }

        function rn(e) {
            if (!(e = function(e) {
                    var t = e.alternate;
                    if (!t) return 3 === (t = tn(e)) && i("188"), 1 === t ? null : e;
                    for (var n = e, r = t;;) {
                        var a = n.return,
                            o = a ? a.alternate : null;
                        if (!a || !o) break;
                        if (a.child === o.child) {
                            for (var l = a.child; l;) {
                                if (l === n) return nn(a), e;
                                if (l === r) return nn(a), t;
                                l = l.sibling
                            }
                            i("188")
                        }
                        if (n.return !== r.return) n = a, r = o;
                        else {
                            l = !1;
                            for (var s = a.child; s;) {
                                if (s === n) {
                                    l = !0, n = a, r = o;
                                    break
                                }
                                if (s === r) {
                                    l = !0, r = a, n = o;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!l) {
                                for (s = o.child; s;) {
                                    if (s === n) {
                                        l = !0, n = o, r = a;
                                        break
                                    }
                                    if (s === r) {
                                        l = !0, r = o, n = a;
                                        break
                                    }
                                    s = s.sibling
                                }
                                l || i("189")
                            }
                        }
                        n.alternate !== r && i("190")
                    }
                    return 3 !== n.tag && i("188"), n.stateNode.current === n ? e : t
                }(e))) return null;
            for (var t = e;;) {
                if (5 === t.tag || 6 === t.tag) return t;
                if (t.child) t.child.return = t, t = t.child;
                else {
                    if (t === e) break;
                    for (; !t.sibling;) {
                        if (!t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
            }
            return null
        }
        var an = se.extend({
                animationName: null,
                elapsedTime: null,
                pseudoElement: null
            }),
            on = se.extend({
                clipboardData: function(e) {
                    return "clipboardData" in e ? e.clipboardData : window.clipboardData
                }
            }),
            ln = Ut.extend({
                relatedTarget: null
            });

        function sn(e) {
            var t = e.keyCode;
            return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
        }
        var pn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            },
            cn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            },
            un = Ut.extend({
                key: function(e) {
                    if (e.key) {
                        var t = pn[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    return "keypress" === e.type ? 13 === (e = sn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? cn[e.keyCode] || "Unidentified" : ""
                },
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: Vt,
                charCode: function(e) {
                    return "keypress" === e.type ? sn(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? sn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }),
            dn = Kt.extend({
                dataTransfer: null
            }),
            hn = Ut.extend({
                touches: null,
                targetTouches: null,
                changedTouches: null,
                altKey: null,
                metaKey: null,
                ctrlKey: null,
                shiftKey: null,
                getModifierState: Vt
            }),
            bn = se.extend({
                propertyName: null,
                elapsedTime: null,
                pseudoElement: null
            }),
            mn = Kt.extend({
                deltaX: function(e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                },
                deltaZ: null,
                deltaMode: null
            }),
            fn = [
                ["abort", "abort"],
                [$, "animationEnd"],
                [Z, "animationIteration"],
                [J, "animationStart"],
                ["canplay", "canPlay"],
                ["canplaythrough", "canPlayThrough"],
                ["drag", "drag"],
                ["dragenter", "dragEnter"],
                ["dragexit", "dragExit"],
                ["dragleave", "dragLeave"],
                ["dragover", "dragOver"],
                ["durationchange", "durationChange"],
                ["emptied", "emptied"],
                ["encrypted", "encrypted"],
                ["ended", "ended"],
                ["error", "error"],
                ["gotpointercapture", "gotPointerCapture"],
                ["load", "load"],
                ["loadeddata", "loadedData"],
                ["loadedmetadata", "loadedMetadata"],
                ["loadstart", "loadStart"],
                ["lostpointercapture", "lostPointerCapture"],
                ["mousemove", "mouseMove"],
                ["mouseout", "mouseOut"],
                ["mouseover", "mouseOver"],
                ["playing", "playing"],
                ["pointermove", "pointerMove"],
                ["pointerout", "pointerOut"],
                ["pointerover", "pointerOver"],
                ["progress", "progress"],
                ["scroll", "scroll"],
                ["seeking", "seeking"],
                ["stalled", "stalled"],
                ["suspend", "suspend"],
                ["timeupdate", "timeUpdate"],
                ["toggle", "toggle"],
                ["touchmove", "touchMove"],
                [ee, "transitionEnd"],
                ["waiting", "waiting"],
                ["wheel", "wheel"]
            ],
            gn = {},
            vn = {};

        function yn(e, t) {
            var n = e[0],
                r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
            t = {
                phasedRegistrationNames: {
                    bubbled: r,
                    captured: r + "Capture"
                },
                dependencies: [n],
                isInteractive: t
            }, gn[e] = t, vn[n] = t
        }[
            ["blur", "blur"],
            ["cancel", "cancel"],
            ["click", "click"],
            ["close", "close"],
            ["contextmenu", "contextMenu"],
            ["copy", "copy"],
            ["cut", "cut"],
            ["auxclick", "auxClick"],
            ["dblclick", "doubleClick"],
            ["dragend", "dragEnd"],
            ["dragstart", "dragStart"],
            ["drop", "drop"],
            ["focus", "focus"],
            ["input", "input"],
            ["invalid", "invalid"],
            ["keydown", "keyDown"],
            ["keypress", "keyPress"],
            ["keyup", "keyUp"],
            ["mousedown", "mouseDown"],
            ["mouseup", "mouseUp"],
            ["paste", "paste"],
            ["pause", "pause"],
            ["play", "play"],
            ["pointercancel", "pointerCancel"],
            ["pointerdown", "pointerDown"],
            ["pointerup", "pointerUp"],
            ["ratechange", "rateChange"],
            ["reset", "reset"],
            ["seeked", "seeked"],
            ["submit", "submit"],
            ["touchcancel", "touchCancel"],
            ["touchend", "touchEnd"],
            ["touchstart", "touchStart"],
            ["volumechange", "volumeChange"]
        ].forEach(function(e) {
            yn(e, !0)
        }), fn.forEach(function(e) {
            yn(e, !1)
        });
        var Cn = {
                eventTypes: gn,
                isInteractiveTopLevelEventType: function(e) {
                    return void 0 !== (e = vn[e]) && !0 === e.isInteractive
                },
                extractEvents: function(e, t, n, r) {
                    var a = vn[e];
                    if (!a) return null;
                    switch (e) {
                        case "keypress":
                            if (0 === sn(n)) return null;
                        case "keydown":
                        case "keyup":
                            e = un;
                            break;
                        case "blur":
                        case "focus":
                            e = ln;
                            break;
                        case "click":
                            if (2 === n.button) return null;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            e = Kt;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            e = dn;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            e = hn;
                            break;
                        case $:
                        case Z:
                        case J:
                            e = an;
                            break;
                        case ee:
                            e = bn;
                            break;
                        case "scroll":
                            e = Ut;
                            break;
                        case "wheel":
                            e = mn;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            e = on;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            e = qt;
                            break;
                        default:
                            e = se
                    }
                    return B(t = e.getPooled(a, t, n, r)), t
                }
            },
            En = Cn.isInteractiveTopLevelEventType,
            On = [];

        function Sn(e) {
            var t = e.targetInst,
                n = t;
            do {
                if (!n) {
                    e.ancestors.push(n);
                    break
                }
                var r;
                for (r = n; r.return;) r = r.return;
                if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo)) break;
                e.ancestors.push(n), n = I(r)
            } while (n);
            for (n = 0; n < e.ancestors.length; n++) {
                t = e.ancestors[n];
                var a = Fe(e.nativeEvent);
                r = e.topLevelType;
                for (var o = e.nativeEvent, i = null, l = 0; l < g.length; l++) {
                    var s = g[l];
                    s && (s = s.extractEvents(r, t, o, a)) && (i = P(i, s))
                }
                M(i)
            }
        }
        var xn = !0;

        function Pn(e, t) {
            if (!t) return null;
            var n = (En(e) ? Tn : Nn).bind(null, e);
            t.addEventListener(e, n, !1)
        }

        function kn(e, t) {
            if (!t) return null;
            var n = (En(e) ? Tn : Nn).bind(null, e);
            t.addEventListener(e, n, !0)
        }

        function Tn(e, t) {
            Re(Nn, e, t)
        }

        function Nn(e, t) {
            if (xn) {
                var n = Fe(t);
                if (null === (n = I(n)) || "number" != typeof n.tag || 2 === tn(n) || (n = null), On.length) {
                    var r = On.pop();
                    r.topLevelType = e, r.nativeEvent = t, r.targetInst = n, e = r
                } else e = {
                    topLevelType: e,
                    nativeEvent: t,
                    targetInst: n,
                    ancestors: []
                };
                try {
                    je(Sn, e)
                } finally {
                    e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > On.length && On.push(e)
                }
            }
        }
        var wn = {},
            _n = 0,
            Mn = "_reactListenersID" + ("" + Math.random()).slice(2);

        function Ln(e) {
            return Object.prototype.hasOwnProperty.call(e, Mn) || (e[Mn] = _n++, wn[e[Mn]] = {}), wn[e[Mn]]
        }

        function Rn(e) {
            if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
            try {
                return e.activeElement || e.body
            } catch (t) {
                return e.body
            }
        }

        function An(e) {
            for (; e && e.firstChild;) e = e.firstChild;
            return e
        }

        function In(e, t) {
            var n, r = An(e);
            for (e = 0; r;) {
                if (3 === r.nodeType) {
                    if (n = e + r.textContent.length, e <= t && n >= t) return {
                        node: r,
                        offset: t - e
                    };
                    e = n
                }
                e: {
                    for (; r;) {
                        if (r.nextSibling) {
                            r = r.nextSibling;
                            break e
                        }
                        r = r.parentNode
                    }
                    r = void 0
                }
                r = An(r)
            }
        }

        function jn() {
            for (var e = window, t = Rn(); t instanceof e.HTMLIFrameElement;) {
                try {
                    e = t.contentDocument.defaultView
                } catch (e) {
                    break
                }
                t = Rn(e.document)
            }
            return t
        }

        function Dn(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
        }
        var zn = W && "documentMode" in document && 11 >= document.documentMode,
            Fn = {
                select: {
                    phasedRegistrationNames: {
                        bubbled: "onSelect",
                        captured: "onSelectCapture"
                    },
                    dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
                }
            },
            Un = null,
            Gn = null,
            Hn = null,
            Vn = !1;

        function Bn(e, t) {
            var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
            return Vn || null == Un || Un !== Rn(n) ? null : ("selectionStart" in (n = Un) && Dn(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : n = {
                anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }, Hn && en(Hn, n) ? null : (Hn = n, (e = se.getPooled(Fn.select, Gn, e, t)).type = "select", e.target = Un, B(e), e))
        }
        var Wn = {
            eventTypes: Fn,
            extractEvents: function(e, t, n, r) {
                var a, o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
                if (!(a = !o)) {
                    e: {
                        o = Ln(o),
                        a = C.onSelect;
                        for (var i = 0; i < a.length; i++) {
                            var l = a[i];
                            if (!o.hasOwnProperty(l) || !o[l]) {
                                o = !1;
                                break e
                            }
                        }
                        o = !0
                    }
                    a = !o
                }
                if (a) return null;
                switch (o = t ? D(t) : window, e) {
                    case "focus":
                        (ze(o) || "true" === o.contentEditable) && (Un = o, Gn = t, Hn = null);
                        break;
                    case "blur":
                        Hn = Gn = Un = null;
                        break;
                    case "mousedown":
                        Vn = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        return Vn = !1, Bn(n, r);
                    case "selectionchange":
                        if (zn) break;
                    case "keydown":
                    case "keyup":
                        return Bn(n, r)
                }
                return null
            }
        };

        function Yn(e, t) {
            return e = a({
                children: void 0
            }, t), (t = function(e) {
                var t = "";
                return r.Children.forEach(e, function(e) {
                    null != e && (t += e)
                }), t
            }(t.children)) && (e.children = t), e
        }

        function Xn(e, t, n, r) {
            if (e = e.options, t) {
                t = {};
                for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
            } else {
                for (n = "" + vt(n), t = null, a = 0; a < e.length; a++) {
                    if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                    null !== t || e[a].disabled || (t = e[a])
                }
                null !== t && (t.selected = !0)
            }
        }

        function Kn(e, t) {
            return null != t.dangerouslySetInnerHTML && i("91"), a({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue
            })
        }

        function qn(e, t) {
            var n = t.value;
            null == n && (n = t.defaultValue, null != (t = t.children) && (null != n && i("92"), Array.isArray(t) && (1 >= t.length || i("93"), t = t[0]), n = t), null == n && (n = "")), e._wrapperState = {
                initialValue: vt(n)
            }
        }

        function Qn(e, t) {
            var n = vt(t.value),
                r = vt(t.defaultValue);
            null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
        }

        function $n(e) {
            var t = e.textContent;
            t === e._wrapperState.initialValue && (e.value = t)
        }
        w.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), E = z, O = j, S = D, w.injectEventPluginsByName({
            SimpleEventPlugin: Cn,
            EnterLeaveEventPlugin: $t,
            ChangeEventPlugin: Ft,
            SelectEventPlugin: Wn,
            BeforeInputEventPlugin: Pe
        });
        var Zn = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        };

        function Jn(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
            }
        }

        function er(e, t) {
            return null == e || "http://www.w3.org/1999/xhtml" === e ? Jn(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
        }
        var tr = void 0,
            nr = function(e) {
                return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
                    MSApp.execUnsafeLocalFunction(function() {
                        return e(t, n)
                    })
                } : e
            }(function(e, t) {
                if (e.namespaceURI !== Zn.svg || "innerHTML" in e) e.innerHTML = t;
                else {
                    for ((tr = tr || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = tr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            });

        function rr(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
            }
            e.textContent = t
        }
        var ar = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            },
            or = ["Webkit", "ms", "Moz", "O"];

        function ir(e, t, n) {
            return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || ar.hasOwnProperty(e) && ar[e] ? ("" + t).trim() : t + "px"
        }

        function lr(e, t) {
            for (var n in e = e.style, t)
                if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"),
                        a = ir(n, t[n], r);
                    "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                }
        }
        Object.keys(ar).forEach(function(e) {
            or.forEach(function(t) {
                t = t + e.charAt(0).toUpperCase() + e.substring(1), ar[t] = ar[e]
            })
        });
        var sr = a({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        });

        function pr(e, t) {
            t && (sr[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && i("137", e, ""), null != t.dangerouslySetInnerHTML && (null != t.children && i("60"), "object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML || i("61")), null != t.style && "object" != typeof t.style && i("62", ""))
        }

        function cr(e, t) {
            if (-1 === e.indexOf("-")) return "string" == typeof t.is;
            switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
            }
        }

        function ur(e, t) {
            var n = Ln(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
            t = C[t];
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                if (!n.hasOwnProperty(a) || !n[a]) {
                    switch (a) {
                        case "scroll":
                            kn("scroll", e);
                            break;
                        case "focus":
                        case "blur":
                            kn("focus", e), kn("blur", e), n.blur = !0, n.focus = !0;
                            break;
                        case "cancel":
                        case "close":
                            Ue(a) && kn(a, e);
                            break;
                        case "invalid":
                        case "submit":
                        case "reset":
                            break;
                        default:
                            -1 === te.indexOf(a) && Pn(a, e)
                    }
                    n[a] = !0
                }
            }
        }

        function dr() {}
        var hr = null,
            br = null;

        function mr(e, t) {
            switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!t.autoFocus
            }
            return !1
        }

        function fr(e, t) {
            return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
        }
        var gr = "function" == typeof setTimeout ? setTimeout : void 0,
            vr = "function" == typeof clearTimeout ? clearTimeout : void 0;

        function yr(e) {
            for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
            return e
        }

        function Cr(e) {
            for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
            return e
        }
        new Set;
        var Er = [],
            Or = -1;

        function Sr(e) {
            0 > Or || (e.current = Er[Or], Er[Or] = null, Or--)
        }

        function xr(e, t) {
            Er[++Or] = e.current, e.current = t
        }
        var Pr = {},
            kr = {
                current: Pr
            },
            Tr = {
                current: !1
            },
            Nr = Pr;

        function wr(e, t) {
            var n = e.type.contextTypes;
            if (!n) return Pr;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
            var a, o = {};
            for (a in n) o[a] = t[a];
            return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
        }

        function _r(e) {
            return null != (e = e.childContextTypes)
        }

        function Mr(e) {
            Sr(Tr), Sr(kr)
        }

        function Lr(e) {
            Sr(Tr), Sr(kr)
        }

        function Rr(e, t, n) {
            kr.current !== Pr && i("168"), xr(kr, t), xr(Tr, n)
        }

        function Ar(e, t, n) {
            var r = e.stateNode;
            if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
            for (var o in r = r.getChildContext()) o in e || i("108", lt(t) || "Unknown", o);
            return a({}, n, r)
        }

        function Ir(e) {
            var t = e.stateNode;
            return t = t && t.__reactInternalMemoizedMergedChildContext || Pr, Nr = kr.current, xr(kr, t), xr(Tr, Tr.current), !0
        }

        function jr(e, t, n) {
            var r = e.stateNode;
            r || i("169"), n ? (t = Ar(e, t, Nr), r.__reactInternalMemoizedMergedChildContext = t, Sr(Tr), Sr(kr), xr(kr, t)) : Sr(Tr), xr(Tr, n)
        }
        var Dr = null,
            zr = null;

        function Fr(e) {
            return function(t) {
                try {
                    return e(t)
                } catch (e) {}
            }
        }

        function Ur(e, t, n, r) {
            this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.firstContextDependency = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
        }

        function Gr(e, t, n, r) {
            return new Ur(e, t, n, r)
        }

        function Hr(e) {
            return !(!(e = e.prototype) || !e.isReactComponent)
        }

        function Vr(e, t) {
            var n = e.alternate;
            return null === n ? ((n = Gr(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, n.firstContextDependency = e.firstContextDependency, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
        }

        function Br(e, t, n, r, a, o) {
            var l = 2;
            if (r = e, "function" == typeof e) Hr(e) && (l = 1);
            else if ("string" == typeof e) l = 5;
            else e: switch (e) {
                case qe:
                    return Wr(n.children, a, o, t);
                case et:
                    return Yr(n, 3 | a, o, t);
                case Qe:
                    return Yr(n, 2 | a, o, t);
                case $e:
                    return (e = Gr(12, n, t, 4 | a)).elementType = $e, e.type = $e, e.expirationTime = o, e;
                case nt:
                    return (e = Gr(13, n, t, a)).elementType = nt, e.type = nt, e.expirationTime = o, e;
                default:
                    if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                        case Ze:
                            l = 10;
                            break e;
                        case Je:
                            l = 9;
                            break e;
                        case tt:
                            l = 11;
                            break e;
                        case rt:
                            l = 14;
                            break e;
                        case at:
                            l = 16, r = null;
                            break e
                    }
                    i("130", null == e ? e : typeof e, "")
            }
            return (t = Gr(l, n, t, a)).elementType = e, t.type = r, t.expirationTime = o, t
        }

        function Wr(e, t, n, r) {
            return (e = Gr(7, e, r, t)).expirationTime = n, e
        }

        function Yr(e, t, n, r) {
            return e = Gr(8, e, r, t), t = 0 == (1 & t) ? Qe : et, e.elementType = t, e.type = t, e.expirationTime = n, e
        }

        function Xr(e, t, n) {
            return (e = Gr(6, e, null, t)).expirationTime = n, e
        }

        function Kr(e, t, n) {
            return (t = Gr(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t
        }

        function qr(e, t) {
            e.didError = !1;
            var n = e.earliestPendingTime;
            0 === n ? e.earliestPendingTime = e.latestPendingTime = t : n < t ? e.earliestPendingTime = t : e.latestPendingTime > t && (e.latestPendingTime = t), Zr(t, e)
        }

        function Qr(e, t) {
            e.didError = !1;
            var n = e.latestPingedTime;
            0 !== n && n >= t && (e.latestPingedTime = 0), n = e.earliestPendingTime;
            var r = e.latestPendingTime;
            n === t ? e.earliestPendingTime = r === t ? e.latestPendingTime = 0 : r : r === t && (e.latestPendingTime = n), n = e.earliestSuspendedTime, r = e.latestSuspendedTime, 0 === n ? e.earliestSuspendedTime = e.latestSuspendedTime = t : n < t ? e.earliestSuspendedTime = t : r > t && (e.latestSuspendedTime = t), Zr(t, e)
        }

        function $r(e, t) {
            var n = e.earliestPendingTime;
            return n > t && (t = n), (e = e.earliestSuspendedTime) > t && (t = e), t
        }

        function Zr(e, t) {
            var n = t.earliestSuspendedTime,
                r = t.latestSuspendedTime,
                a = t.earliestPendingTime,
                o = t.latestPingedTime;
            0 === (a = 0 !== a ? a : o) && (0 === e || r < e) && (a = r), 0 !== (e = a) && n > e && (e = n), t.nextExpirationTimeToWorkOn = a, t.expirationTime = e
        }
        var Jr = !1;

        function ea(e) {
            return {
                baseState: e,
                firstUpdate: null,
                lastUpdate: null,
                firstCapturedUpdate: null,
                lastCapturedUpdate: null,
                firstEffect: null,
                lastEffect: null,
                firstCapturedEffect: null,
                lastCapturedEffect: null
            }
        }

        function ta(e) {
            return {
                baseState: e.baseState,
                firstUpdate: e.firstUpdate,
                lastUpdate: e.lastUpdate,
                firstCapturedUpdate: null,
                lastCapturedUpdate: null,
                firstEffect: null,
                lastEffect: null,
                firstCapturedEffect: null,
                lastCapturedEffect: null
            }
        }

        function na(e) {
            return {
                expirationTime: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null,
                nextEffect: null
            }
        }

        function ra(e, t) {
            null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
        }

        function aa(e, t) {
            var n = e.alternate;
            if (null === n) {
                var r = e.updateQueue,
                    a = null;
                null === r && (r = e.updateQueue = ea(e.memoizedState))
            } else r = e.updateQueue, a = n.updateQueue, null === r ? null === a ? (r = e.updateQueue = ea(e.memoizedState), a = n.updateQueue = ea(n.memoizedState)) : r = e.updateQueue = ta(a) : null === a && (a = n.updateQueue = ta(r));
            null === a || r === a ? ra(r, t) : null === r.lastUpdate || null === a.lastUpdate ? (ra(r, t), ra(a, t)) : (ra(r, t), a.lastUpdate = t)
        }

        function oa(e, t) {
            var n = e.updateQueue;
            null === (n = null === n ? e.updateQueue = ea(e.memoizedState) : ia(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
        }

        function ia(e, t) {
            var n = e.alternate;
            return null !== n && t === n.updateQueue && (t = e.updateQueue = ta(t)), t
        }

        function la(e, t, n, r, o, i) {
            switch (n.tag) {
                case 1:
                    return "function" == typeof(e = n.payload) ? e.call(i, r, o) : e;
                case 3:
                    e.effectTag = -2049 & e.effectTag | 64;
                case 0:
                    if (null == (o = "function" == typeof(e = n.payload) ? e.call(i, r, o) : e)) break;
                    return a({}, r, o);
                case 2:
                    Jr = !0
            }
            return r
        }

        function sa(e, t, n, r, a) {
            Jr = !1;
            for (var o = (t = ia(e, t)).baseState, i = null, l = 0, s = t.firstUpdate, p = o; null !== s;) {
                var c = s.expirationTime;
                c < a ? (null === i && (i = s, o = p), l < c && (l = c)) : (p = la(e, 0, s, p, n, r), null !== s.callback && (e.effectTag |= 32, s.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = s : (t.lastEffect.nextEffect = s, t.lastEffect = s))), s = s.next
            }
            for (c = null, s = t.firstCapturedUpdate; null !== s;) {
                var u = s.expirationTime;
                u < a ? (null === c && (c = s, null === i && (o = p)), l < u && (l = u)) : (p = la(e, 0, s, p, n, r), null !== s.callback && (e.effectTag |= 32, s.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = s : (t.lastCapturedEffect.nextEffect = s, t.lastCapturedEffect = s))), s = s.next
            }
            null === i && (t.lastUpdate = null), null === c ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === i && null === c && (o = p), t.baseState = o, t.firstUpdate = i, t.firstCapturedUpdate = c, e.expirationTime = l, e.memoizedState = p
        }

        function pa(e, t, n) {
            null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), ca(t.firstEffect, n), t.firstEffect = t.lastEffect = null, ca(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
        }

        function ca(e, t) {
            for (; null !== e;) {
                var n = e.callback;
                if (null !== n) {
                    e.callback = null;
                    var r = t;
                    "function" != typeof n && i("191", n), n.call(r)
                }
                e = e.nextEffect
            }
        }

        function ua(e, t) {
            return {
                value: e,
                source: t,
                stack: st(t)
            }
        }
        var da = {
                current: null
            },
            ha = null,
            ba = null,
            ma = null;

        function fa(e, t) {
            var n = e.type._context;
            xr(da, n._currentValue), n._currentValue = t
        }

        function ga(e) {
            var t = da.current;
            Sr(da), e.type._context._currentValue = t
        }

        function va(e) {
            ha = e, ma = ba = null, e.firstContextDependency = null
        }

        function ya(e, t) {
            return ma !== e && !1 !== t && 0 !== t && ("number" == typeof t && 1073741823 !== t || (ma = e, t = 1073741823), t = {
                context: e,
                observedBits: t,
                next: null
            }, null === ba ? (null === ha && i("293"), ha.firstContextDependency = ba = t) : ba = ba.next = t), e._currentValue
        }
        var Ca = {},
            Ea = {
                current: Ca
            },
            Oa = {
                current: Ca
            },
            Sa = {
                current: Ca
            };

        function xa(e) {
            return e === Ca && i("174"), e
        }

        function Pa(e, t) {
            xr(Sa, t), xr(Oa, e), xr(Ea, Ca);
            var n = t.nodeType;
            switch (n) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : er(null, "");
                    break;
                default:
                    t = er(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
            }
            Sr(Ea), xr(Ea, t)
        }

        function ka(e) {
            Sr(Ea), Sr(Oa), Sr(Sa)
        }

        function Ta(e) {
            xa(Sa.current);
            var t = xa(Ea.current),
                n = er(t, e.type);
            t !== n && (xr(Oa, e), xr(Ea, n))
        }

        function Na(e) {
            Oa.current === e && (Sr(Ea), Sr(Oa))
        }

        function wa(e, t) {
            if (e && e.defaultProps)
                for (var n in t = a({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
            return t
        }
        var _a = Be.ReactCurrentOwner,
            Ma = (new r.Component).refs;

        function La(e, t, n, r) {
            n = null == (n = n(r, t = e.memoizedState)) ? t : a({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
        }
        var Ra = {
            isMounted: function(e) {
                return !!(e = e._reactInternalFiber) && 2 === tn(e)
            },
            enqueueSetState: function(e, t, n) {
                e = e._reactInternalFiber;
                var r = Si(),
                    a = na(r = qo(r, e));
                a.payload = t, null != n && (a.callback = n), Bo(), aa(e, a), Zo(e, r)
            },
            enqueueReplaceState: function(e, t, n) {
                e = e._reactInternalFiber;
                var r = Si(),
                    a = na(r = qo(r, e));
                a.tag = 1, a.payload = t, null != n && (a.callback = n), Bo(), aa(e, a), Zo(e, r)
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternalFiber;
                var n = Si(),
                    r = na(n = qo(n, e));
                r.tag = 2, null != t && (r.callback = t), Bo(), aa(e, r), Zo(e, n)
            }
        };

        function Aa(e, t, n, r, a, o, i) {
            return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!en(n, r) || !en(a, o))
        }

        function Ia(e, t, n) {
            var r = !1,
                a = Pr,
                o = t.contextType;
            return "object" == typeof o && null !== o ? o = _a.currentDispatcher.readContext(o) : (a = _r(t) ? Nr : kr.current, o = (r = null != (r = t.contextTypes)) ? wr(e, a) : Pr), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ra, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
        }

        function ja(e, t, n, r) {
            e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ra.enqueueReplaceState(t, t.state, null)
        }

        function Da(e, t, n, r) {
            var a = e.stateNode;
            a.props = n, a.state = e.memoizedState, a.refs = Ma;
            var o = t.contextType;
            "object" == typeof o && null !== o ? a.context = _a.currentDispatcher.readContext(o) : (o = _r(t) ? Nr : kr.current, a.context = wr(e, o)), null !== (o = e.updateQueue) && (sa(e, o, n, a, r), a.state = e.memoizedState), "function" == typeof(o = t.getDerivedStateFromProps) && (La(e, t, o, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Ra.enqueueReplaceState(a, a.state, null), null !== (o = e.updateQueue) && (sa(e, o, n, a, r), a.state = e.memoizedState)), "function" == typeof a.componentDidMount && (e.effectTag |= 4)
        }
        var za = Array.isArray;

        function Fa(e, t, n) {
            if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                if (n._owner) {
                    n = n._owner;
                    var r = void 0;
                    n && (1 !== n.tag && i("289"), r = n.stateNode), r || i("147", e);
                    var a = "" + e;
                    return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = function(e) {
                        var t = r.refs;
                        t === Ma && (t = r.refs = {}), null === e ? delete t[a] : t[a] = e
                    })._stringRef = a, t)
                }
                "string" != typeof e && i("284"), n._owner || i("290", e)
            }
            return e
        }

        function Ua(e, t) {
            "textarea" !== e.type && i("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
        }

        function Ga(e) {
            function t(t, n) {
                if (e) {
                    var r = t.lastEffect;
                    null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
                }
            }

            function n(n, r) {
                if (!e) return null;
                for (; null !== r;) t(n, r), r = r.sibling;
                return null
            }

            function r(e, t) {
                for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                return e
            }

            function a(e, t, n) {
                return (e = Vr(e, t)).index = 0, e.sibling = null, e
            }

            function o(t, n, r) {
                return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
            }

            function l(t) {
                return e && null === t.alternate && (t.effectTag = 2), t
            }

            function s(e, t, n, r) {
                return null === t || 6 !== t.tag ? ((t = Xr(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
            }

            function p(e, t, n, r) {
                return null !== t && t.elementType === n.type ? ((r = a(t, n.props)).ref = Fa(e, t, n), r.return = e, r) : ((r = Br(n.type, n.key, n.props, null, e.mode, r)).ref = Fa(e, t, n), r.return = e, r)
            }

            function c(e, t, n, r) {
                return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Kr(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
            }

            function u(e, t, n, r, o) {
                return null === t || 7 !== t.tag ? ((t = Wr(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
            }

            function d(e, t, n) {
                if ("string" == typeof t || "number" == typeof t) return (t = Xr("" + t, e.mode, n)).return = e, t;
                if ("object" == typeof t && null !== t) {
                    switch (t.$$typeof) {
                        case Xe:
                            return (n = Br(t.type, t.key, t.props, null, e.mode, n)).ref = Fa(e, null, t), n.return = e, n;
                        case Ke:
                            return (t = Kr(t, e.mode, n)).return = e, t
                    }
                    if (za(t) || it(t)) return (t = Wr(t, e.mode, n, null)).return = e, t;
                    Ua(e, t)
                }
                return null
            }

            function h(e, t, n, r) {
                var a = null !== t ? t.key : null;
                if ("string" == typeof n || "number" == typeof n) return null !== a ? null : s(e, t, "" + n, r);
                if ("object" == typeof n && null !== n) {
                    switch (n.$$typeof) {
                        case Xe:
                            return n.key === a ? n.type === qe ? u(e, t, n.props.children, r, a) : p(e, t, n, r) : null;
                        case Ke:
                            return n.key === a ? c(e, t, n, r) : null
                    }
                    if (za(n) || it(n)) return null !== a ? null : u(e, t, n, r, null);
                    Ua(e, n)
                }
                return null
            }

            function b(e, t, n, r, a) {
                if ("string" == typeof r || "number" == typeof r) return s(t, e = e.get(n) || null, "" + r, a);
                if ("object" == typeof r && null !== r) {
                    switch (r.$$typeof) {
                        case Xe:
                            return e = e.get(null === r.key ? n : r.key) || null, r.type === qe ? u(t, e, r.props.children, a, r.key) : p(t, e, r, a);
                        case Ke:
                            return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a)
                    }
                    if (za(r) || it(r)) return u(t, e = e.get(n) || null, r, a, null);
                    Ua(t, r)
                }
                return null
            }

            function m(a, i, l, s) {
                for (var p = null, c = null, u = i, m = i = 0, f = null; null !== u && m < l.length; m++) {
                    u.index > m ? (f = u, u = null) : f = u.sibling;
                    var g = h(a, u, l[m], s);
                    if (null === g) {
                        null === u && (u = f);
                        break
                    }
                    e && u && null === g.alternate && t(a, u), i = o(g, i, m), null === c ? p = g : c.sibling = g, c = g, u = f
                }
                if (m === l.length) return n(a, u), p;
                if (null === u) {
                    for (; m < l.length; m++)(u = d(a, l[m], s)) && (i = o(u, i, m), null === c ? p = u : c.sibling = u, c = u);
                    return p
                }
                for (u = r(a, u); m < l.length; m++)(f = b(u, a, m, l[m], s)) && (e && null !== f.alternate && u.delete(null === f.key ? m : f.key), i = o(f, i, m), null === c ? p = f : c.sibling = f, c = f);
                return e && u.forEach(function(e) {
                    return t(a, e)
                }), p
            }

            function f(a, l, s, p) {
                var c = it(s);
                "function" != typeof c && i("150"), null == (s = c.call(s)) && i("151");
                for (var u = c = null, m = l, f = l = 0, g = null, v = s.next(); null !== m && !v.done; f++, v = s.next()) {
                    m.index > f ? (g = m, m = null) : g = m.sibling;
                    var y = h(a, m, v.value, p);
                    if (null === y) {
                        m || (m = g);
                        break
                    }
                    e && m && null === y.alternate && t(a, m), l = o(y, l, f), null === u ? c = y : u.sibling = y, u = y, m = g
                }
                if (v.done) return n(a, m), c;
                if (null === m) {
                    for (; !v.done; f++, v = s.next()) null !== (v = d(a, v.value, p)) && (l = o(v, l, f), null === u ? c = v : u.sibling = v, u = v);
                    return c
                }
                for (m = r(a, m); !v.done; f++, v = s.next()) null !== (v = b(m, a, f, v.value, p)) && (e && null !== v.alternate && m.delete(null === v.key ? f : v.key), l = o(v, l, f), null === u ? c = v : u.sibling = v, u = v);
                return e && m.forEach(function(e) {
                    return t(a, e)
                }), c
            }
            return function(e, r, o, s) {
                var p = "object" == typeof o && null !== o && o.type === qe && null === o.key;
                p && (o = o.props.children);
                var c = "object" == typeof o && null !== o;
                if (c) switch (o.$$typeof) {
                    case Xe:
                        e: {
                            for (c = o.key, p = r; null !== p;) {
                                if (p.key === c) {
                                    if (7 === p.tag ? o.type === qe : p.elementType === o.type) {
                                        n(e, p.sibling), (r = a(p, o.type === qe ? o.props.children : o.props)).ref = Fa(e, p, o), r.return = e, e = r;
                                        break e
                                    }
                                    n(e, p);
                                    break
                                }
                                t(e, p), p = p.sibling
                            }
                            o.type === qe ? ((r = Wr(o.props.children, e.mode, s, o.key)).return = e, e = r) : ((s = Br(o.type, o.key, o.props, null, e.mode, s)).ref = Fa(e, r, o), s.return = e, e = s)
                        }
                        return l(e);
                    case Ke:
                        e: {
                            for (p = o.key; null !== r;) {
                                if (r.key === p) {
                                    if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                        n(e, r.sibling), (r = a(r, o.children || [])).return = e, e = r;
                                        break e
                                    }
                                    n(e, r);
                                    break
                                }
                                t(e, r), r = r.sibling
                            }(r = Kr(o, e.mode, s)).return = e,
                            e = r
                        }
                        return l(e)
                }
                if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = a(r, o)).return = e, e = r) : (n(e, r), (r = Xr(o, e.mode, s)).return = e, e = r), l(e);
                if (za(o)) return m(e, r, o, s);
                if (it(o)) return f(e, r, o, s);
                if (c && Ua(e, o), void 0 === o && !p) switch (e.tag) {
                    case 1:
                    case 0:
                        i("152", (s = e.type).displayName || s.name || "Component")
                }
                return n(e, r)
            }
        }
        var Ha = Ga(!0),
            Va = Ga(!1),
            Ba = null,
            Wa = null,
            Ya = !1;

        function Xa(e, t) {
            var n = Gr(5, null, null, 0);
            n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
        }

        function Ka(e, t) {
            switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                default:
                    return !1
            }
        }

        function qa(e) {
            if (Ya) {
                var t = Wa;
                if (t) {
                    var n = t;
                    if (!Ka(e, t)) {
                        if (!(t = yr(n)) || !Ka(e, t)) return e.effectTag |= 2, Ya = !1, void(Ba = e);
                        Xa(Ba, n)
                    }
                    Ba = e, Wa = Cr(t)
                } else e.effectTag |= 2, Ya = !1, Ba = e
            }
        }

        function Qa(e) {
            for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag;) e = e.return;
            Ba = e
        }

        function $a(e) {
            if (e !== Ba) return !1;
            if (!Ya) return Qa(e), Ya = !0, !1;
            var t = e.type;
            if (5 !== e.tag || "head" !== t && "body" !== t && !fr(t, e.memoizedProps))
                for (t = Wa; t;) Xa(e, t), t = yr(t);
            return Qa(e), Wa = Ba ? yr(e.stateNode) : null, !0
        }

        function Za() {
            Wa = Ba = null, Ya = !1
        }
        var Ja = Be.ReactCurrentOwner;

        function eo(e, t, n, r) {
            t.child = null === e ? Va(t, null, n, r) : Ha(t, e.child, n, r)
        }

        function to(e, t, n, r, a) {
            n = n.render;
            var o = t.ref;
            return va(t), r = n(r, o), t.effectTag |= 1, eo(e, t, r, a), t.child
        }

        function no(e, t, n, r, a, o) {
            if (null === e) {
                var i = n.type;
                return "function" != typeof i || Hr(i) || void 0 !== i.defaultProps || null !== n.compare ? ((e = Br(n.type, null, r, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, ro(e, t, i, r, a, o))
            }
            return i = e.child, a < o && (a = i.memoizedProps, (n = null !== (n = n.compare) ? n : en)(a, r) && e.ref === t.ref) ? co(e, t, o) : (t.effectTag |= 1, (e = Vr(i, r)).ref = t.ref, e.return = t, t.child = e)
        }

        function ro(e, t, n, r, a, o) {
            return null !== e && a < o && en(e.memoizedProps, r) && e.ref === t.ref ? co(e, t, o) : oo(e, t, n, r, o)
        }

        function ao(e, t) {
            var n = t.ref;
            (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
        }

        function oo(e, t, n, r, a) {
            var o = _r(n) ? Nr : kr.current;
            return o = wr(t, o), va(t), n = n(r, o), t.effectTag |= 1, eo(e, t, n, a), t.child
        }

        function io(e, t, n, r, a) {
            if (_r(n)) {
                var o = !0;
                Ir(t)
            } else o = !1;
            if (va(t), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Ia(t, n, r), Da(t, n, r, a), r = !0;
            else if (null === e) {
                var i = t.stateNode,
                    l = t.memoizedProps;
                i.props = l;
                var s = i.context,
                    p = n.contextType;
                "object" == typeof p && null !== p ? p = _a.currentDispatcher.readContext(p) : p = wr(t, p = _r(n) ? Nr : kr.current);
                var c = n.getDerivedStateFromProps,
                    u = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
                u || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || s !== p) && ja(t, i, r, p), Jr = !1;
                var d = t.memoizedState;
                s = i.state = d;
                var h = t.updateQueue;
                null !== h && (sa(t, h, r, i, a), s = t.memoizedState), l !== r || d !== s || Tr.current || Jr ? ("function" == typeof c && (La(t, n, c, r), s = t.memoizedState), (l = Jr || Aa(t, n, l, r, d, s, p)) ? (u || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = p, r = l) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), r = !1)
            } else i = t.stateNode, l = t.memoizedProps, i.props = t.type === t.elementType ? l : wa(t.type, l), s = i.context, "object" == typeof(p = n.contextType) && null !== p ? p = _a.currentDispatcher.readContext(p) : p = wr(t, p = _r(n) ? Nr : kr.current), (u = "function" == typeof(c = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || s !== p) && ja(t, i, r, p), Jr = !1, s = t.memoizedState, d = i.state = s, null !== (h = t.updateQueue) && (sa(t, h, r, i, a), d = t.memoizedState), l !== r || s !== d || Tr.current || Jr ? ("function" == typeof c && (La(t, n, c, r), d = t.memoizedState), (c = Jr || Aa(t, n, l, r, s, d, p)) ? (u || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, d, p), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, d, p)), "function" == typeof i.componentDidUpdate && (t.effectTag |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = d), i.props = r, i.state = d, i.context = p, r = c) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && s === e.memoizedState || (t.effectTag |= 256), r = !1);
            return lo(e, t, n, r, o, a)
        }

        function lo(e, t, n, r, a, o) {
            ao(e, t);
            var i = 0 != (64 & t.effectTag);
            if (!r && !i) return a && jr(t, n, !1), co(e, t, o);
            r = t.stateNode, Ja.current = t;
            var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
            return t.effectTag |= 1, null !== e && i ? (t.child = Ha(t, e.child, null, o), t.child = Ha(t, null, l, o)) : eo(e, t, l, o), t.memoizedState = r.state, a && jr(t, n, !0), t.child
        }

        function so(e) {
            var t = e.stateNode;
            t.pendingContext ? Rr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Rr(0, t.context, !1), Pa(e, t.containerInfo)
        }

        function po(e, t, n) {
            var r = t.mode,
                a = t.pendingProps,
                o = t.memoizedState;
            if (0 == (64 & t.effectTag)) {
                o = null;
                var i = !1
            } else o = {
                timedOutAt: null !== o ? o.timedOutAt : 0
            }, i = !0, t.effectTag &= -65;
            return null === e ? i ? (i = a.fallback, a = Wr(null, r, 0, null), 0 == (1 & t.mode) && (a.child = null !== t.memoizedState ? t.child.child : t.child), r = Wr(i, r, n, null), a.sibling = r, (n = a).return = r.return = t) : n = r = Va(t, null, a.children, n) : null !== e.memoizedState ? (e = (r = e.child).sibling, i ? (n = a.fallback, a = Vr(r, r.pendingProps), 0 == (1 & t.mode) && ((i = null !== t.memoizedState ? t.child.child : t.child) !== r.child && (a.child = i)), r = a.sibling = Vr(e, n, e.expirationTime), n = a, a.childExpirationTime = 0, n.return = r.return = t) : n = r = Ha(t, r.child, a.children, n)) : (e = e.child, i ? (i = a.fallback, (a = Wr(null, r, 0, null)).child = e, 0 == (1 & t.mode) && (a.child = null !== t.memoizedState ? t.child.child : t.child), (r = a.sibling = Wr(i, r, n, null)).effectTag |= 2, n = a, a.childExpirationTime = 0, n.return = r.return = t) : r = n = Ha(t, e, a.children, n)), t.memoizedState = o, t.child = n, r
        }

        function co(e, t, n) {
            if (null !== e && (t.firstContextDependency = e.firstContextDependency), t.childExpirationTime < n) return null;
            if (null !== e && t.child !== e.child && i("153"), null !== t.child) {
                for (n = Vr(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Vr(e, e.pendingProps, e.expirationTime)).return = t;
                n.sibling = null
            }
            return t.child
        }

        function uo(e, t, n) {
            var r = t.expirationTime;
            if (null !== e && e.memoizedProps === t.pendingProps && !Tr.current && r < n) {
                switch (t.tag) {
                    case 3:
                        so(t), Za();
                        break;
                    case 5:
                        Ta(t);
                        break;
                    case 1:
                        _r(t.type) && Ir(t);
                        break;
                    case 4:
                        Pa(t, t.stateNode.containerInfo);
                        break;
                    case 10:
                        fa(t, t.memoizedProps.value);
                        break;
                    case 13:
                        if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? po(e, t, n) : null !== (t = co(e, t, n)) ? t.sibling : null
                }
                return co(e, t, n)
            }
            switch (t.expirationTime = 0, t.tag) {
                case 2:
                    r = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps;
                    var a = wr(t, kr.current);
                    if (va(t), a = r(e, a), t.effectTag |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
                        if (t.tag = 1, _r(r)) {
                            var o = !0;
                            Ir(t)
                        } else o = !1;
                        t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null;
                        var l = r.getDerivedStateFromProps;
                        "function" == typeof l && La(t, r, l, e), a.updater = Ra, t.stateNode = a, a._reactInternalFiber = t, Da(t, r, e, n), t = lo(null, t, r, !0, o, n)
                    } else t.tag = 0, eo(null, t, a, n), t = t.child;
                    return t;
                case 16:
                    switch (a = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), o = t.pendingProps, e = function(e) {
                        var t = e._result;
                        switch (e._status) {
                            case 1:
                                return t;
                            case 2:
                            case 0:
                                throw t;
                            default:
                                throw e._status = 0, (t = (t = e._ctor)()).then(function(t) {
                                    0 === e._status && (t = t.default, e._status = 1, e._result = t)
                                }, function(t) {
                                    0 === e._status && (e._status = 2, e._result = t)
                                }), e._result = t, t
                        }
                    }(a), t.type = e, a = t.tag = function(e) {
                        if ("function" == typeof e) return Hr(e) ? 1 : 0;
                        if (null != e) {
                            if ((e = e.$$typeof) === tt) return 11;
                            if (e === rt) return 14
                        }
                        return 2
                    }(e), o = wa(e, o), l = void 0, a) {
                        case 0:
                            l = oo(null, t, e, o, n);
                            break;
                        case 1:
                            l = io(null, t, e, o, n);
                            break;
                        case 11:
                            l = to(null, t, e, o, n);
                            break;
                        case 14:
                            l = no(null, t, e, wa(e.type, o), r, n);
                            break;
                        default:
                            i("283", e)
                    }
                    return l;
                case 0:
                    return r = t.type, a = t.pendingProps, oo(e, t, r, a = t.elementType === r ? a : wa(r, a), n);
                case 1:
                    return r = t.type, a = t.pendingProps, io(e, t, r, a = t.elementType === r ? a : wa(r, a), n);
                case 3:
                    return so(t), null === (r = t.updateQueue) && i("282"), a = null !== (a = t.memoizedState) ? a.element : null, sa(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === a ? (Za(), t = co(e, t, n)) : (a = t.stateNode, (a = (null === e || null === e.child) && a.hydrate) && (Wa = Cr(t.stateNode.containerInfo), Ba = t, a = Ya = !0), a ? (t.effectTag |= 2, t.child = Va(t, null, r, n)) : (eo(e, t, r, n), Za()), t = t.child), t;
                case 5:
                    return Ta(t), null === e && qa(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, l = a.children, fr(r, a) ? l = null : null !== o && fr(r, o) && (t.effectTag |= 16), ao(e, t), 1 !== n && 1 & t.mode && a.hidden ? (t.expirationTime = 1, t = null) : (eo(e, t, l, n), t = t.child), t;
                case 6:
                    return null === e && qa(t), null;
                case 13:
                    return po(e, t, n);
                case 4:
                    return Pa(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ha(t, null, r, n) : eo(e, t, r, n), t.child;
                case 11:
                    return r = t.type, a = t.pendingProps, to(e, t, r, a = t.elementType === r ? a : wa(r, a), n);
                case 7:
                    return eo(e, t, t.pendingProps, n), t.child;
                case 8:
                case 12:
                    return eo(e, t, t.pendingProps.children, n), t.child;
                case 10:
                    e: {
                        if (r = t.type._context, a = t.pendingProps, l = t.memoizedProps, fa(t, o = a.value), null !== l) {
                            var s = l.value;
                            if (0 === (o = s === o && (0 !== s || 1 / s == 1 / o) || s != s && o != o ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, o) : 1073741823))) {
                                if (l.children === a.children && !Tr.current) {
                                    t = co(e, t, n);
                                    break e
                                }
                            } else
                                for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                    if (null !== (s = l.firstContextDependency))
                                        do {
                                            if (s.context === r && 0 != (s.observedBits & o)) {
                                                if (1 === l.tag) {
                                                    var p = na(n);
                                                    p.tag = 2, aa(l, p)
                                                }
                                                l.expirationTime < n && (l.expirationTime = n), null !== (p = l.alternate) && p.expirationTime < n && (p.expirationTime = n);
                                                for (var c = l.return; null !== c;) {
                                                    if (p = c.alternate, c.childExpirationTime < n) c.childExpirationTime = n, null !== p && p.childExpirationTime < n && (p.childExpirationTime = n);
                                                    else {
                                                        if (!(null !== p && p.childExpirationTime < n)) break;
                                                        p.childExpirationTime = n
                                                    }
                                                    c = c.return
                                                }
                                            }
                                            p = l.child, s = s.next
                                        } while (null !== s);
                                    else p = 10 === l.tag && l.type === t.type ? null : l.child;
                                    if (null !== p) p.return = l;
                                    else
                                        for (p = l; null !== p;) {
                                            if (p === t) {
                                                p = null;
                                                break
                                            }
                                            if (null !== (l = p.sibling)) {
                                                l.return = p.return, p = l;
                                                break
                                            }
                                            p = p.return
                                        }
                                    l = p
                                }
                        }
                        eo(e, t, a.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return a = t.type, r = (o = t.pendingProps).children, va(t), r = r(a = ya(a, o.unstable_observedBits)), t.effectTag |= 1, eo(e, t, r, n), t.child;
                case 14:
                    return no(e, t, a = t.type, o = wa(a.type, t.pendingProps), r, n);
                case 15:
                    return ro(e, t, t.type, t.pendingProps, r, n);
                case 17:
                    return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : wa(r, a), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, _r(r) ? (e = !0, Ir(t)) : e = !1, va(t), Ia(t, r, a), Da(t, r, a, n), lo(null, t, r, !0, e, n);
                default:
                    i("156")
            }
        }

        function ho(e) {
            e.effectTag |= 4
        }
        var bo = void 0,
            mo = void 0,
            fo = void 0,
            go = void 0;

        function vo(e, t) {
            var n = t.source,
                r = t.stack;
            null === r && null !== n && (r = st(n)), null !== n && lt(n.type), t = t.value, null !== e && 1 === e.tag && lt(e.type);
            try {
                console.error(t)
            } catch (e) {
                setTimeout(function() {
                    throw e
                })
            }
        }

        function yo(e) {
            var t = e.ref;
            if (null !== t)
                if ("function" == typeof t) try {
                    t(null)
                } catch (t) {
                    Ko(e, t)
                } else t.current = null
        }

        function Co(e) {
            switch ("function" == typeof zr && zr(e), e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    var t = e.updateQueue;
                    if (null !== t && null !== (t = t.lastEffect)) {
                        var n = t = t.next;
                        do {
                            var r = n.destroy;
                            if (null !== r) {
                                var a = e;
                                try {
                                    r()
                                } catch (e) {
                                    Ko(a, e)
                                }
                            }
                            n = n.next
                        } while (n !== t)
                    }
                    break;
                case 1:
                    if (yo(e), "function" == typeof(t = e.stateNode).componentWillUnmount) try {
                        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                    } catch (t) {
                        Ko(e, t)
                    }
                    break;
                case 5:
                    yo(e);
                    break;
                case 4:
                    So(e)
            }
        }

        function Eo(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }

        function Oo(e) {
            e: {
                for (var t = e.return; null !== t;) {
                    if (Eo(t)) {
                        var n = t;
                        break e
                    }
                    t = t.return
                }
                i("160"),
                n = void 0
            }
            var r = t = void 0;
            switch (n.tag) {
                case 5:
                    t = n.stateNode, r = !1;
                    break;
                case 3:
                case 4:
                    t = n.stateNode.containerInfo, r = !0;
                    break;
                default:
                    i("161")
            }
            16 & n.effectTag && (rr(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
                for (; null === n.sibling;) {
                    if (null === n.return || Eo(n.return)) {
                        n = null;
                        break e
                    }
                    n = n.return
                }
                for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag;) {
                    if (2 & n.effectTag) continue t;
                    if (null === n.child || 4 === n.tag) continue t;
                    n.child.return = n, n = n.child
                }
                if (!(2 & n.effectTag)) {
                    n = n.stateNode;
                    break e
                }
            }
            for (var a = e;;) {
                if (5 === a.tag || 6 === a.tag)
                    if (n)
                        if (r) {
                            var o = t,
                                l = a.stateNode,
                                s = n;
                            8 === o.nodeType ? o.parentNode.insertBefore(l, s) : o.insertBefore(l, s)
                        } else t.insertBefore(a.stateNode, n);
                else r ? (l = t, s = a.stateNode, 8 === l.nodeType ? (o = l.parentNode).insertBefore(s, l) : (o = l).appendChild(s), null != (l = l._reactRootContainer) || null !== o.onclick || (o.onclick = dr)) : t.appendChild(a.stateNode);
                else if (4 !== a.tag && null !== a.child) {
                    a.child.return = a, a = a.child;
                    continue
                }
                if (a === e) break;
                for (; null === a.sibling;) {
                    if (null === a.return || a.return === e) return;
                    a = a.return
                }
                a.sibling.return = a.return, a = a.sibling
            }
        }

        function So(e) {
            for (var t = e, n = !1, r = void 0, a = void 0;;) {
                if (!n) {
                    n = t.return;
                    e: for (;;) {
                        switch (null === n && i("160"), n.tag) {
                            case 5:
                                r = n.stateNode, a = !1;
                                break e;
                            case 3:
                            case 4:
                                r = n.stateNode.containerInfo, a = !0;
                                break e
                        }
                        n = n.return
                    }
                    n = !0
                }
                if (5 === t.tag || 6 === t.tag) {
                    e: for (var o = t, l = o;;)
                        if (Co(l), null !== l.child && 4 !== l.tag) l.child.return = l, l = l.child;
                        else {
                            if (l === o) break;
                            for (; null === l.sibling;) {
                                if (null === l.return || l.return === o) break e;
                                l = l.return
                            }
                            l.sibling.return = l.return, l = l.sibling
                        }a ? (o = r, l = t.stateNode, 8 === o.nodeType ? o.parentNode.removeChild(l) : o.removeChild(l)) : r.removeChild(t.stateNode)
                }
                else if (4 === t.tag ? (r = t.stateNode.containerInfo, a = !0) : Co(t), null !== t.child) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return;
                    4 === (t = t.return).tag && (n = !1)
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }

        function xo(e, t) {
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 1:
                    break;
                case 5:
                    var n = t.stateNode;
                    if (null != n) {
                        var r = t.memoizedProps,
                            a = null !== e ? e.memoizedProps : r;
                        e = t.type;
                        var o = t.updateQueue;
                        if (t.updateQueue = null, null !== o) {
                            for (n[A] = r, "input" === e && "radio" === r.type && null != r.name && Et(n, r), cr(e, a), t = cr(e, r), a = 0; a < o.length; a += 2) {
                                var l = o[a],
                                    s = o[a + 1];
                                "style" === l ? lr(n, s) : "dangerouslySetInnerHTML" === l ? nr(n, s) : "children" === l ? rr(n, s) : gt(n, l, s, t)
                            }
                            switch (e) {
                                case "input":
                                    Ot(n, r);
                                    break;
                                case "textarea":
                                    Qn(n, r);
                                    break;
                                case "select":
                                    t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? Xn(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Xn(n, !!r.multiple, r.defaultValue, !0) : Xn(n, !!r.multiple, r.multiple ? [] : "", !1))
                            }
                        }
                    }
                    break;
                case 6:
                    null === t.stateNode && i("162"), t.stateNode.nodeValue = t.memoizedProps;
                    break;
                case 3:
                case 12:
                    break;
                case 13:
                    if (e = t, null === (n = t.memoizedState) ? r = !1 : (r = !0, e = t.child, 0 === n.timedOutAt && (n.timedOutAt = Si())), null !== e) e: for (t = n = e;;) {
                        if (5 === t.tag) e = t.stateNode, r ? e.style.display = "none" : (e = t.stateNode, o = null != (o = t.memoizedProps.style) && o.hasOwnProperty("display") ? o.display : null, e.style.display = ir("display", o));
                        else if (6 === t.tag) t.stateNode.nodeValue = r ? "" : t.memoizedProps;
                        else {
                            if (13 === t.tag && null !== t.memoizedState) {
                                (e = t.child.sibling).return = t, t = e;
                                continue
                            }
                            if (null !== t.child) {
                                t.child.return = t, t = t.child;
                                continue
                            }
                        }
                        if (t === n) break e;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === n) break e;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    break;
                case 17:
                    break;
                default:
                    i("163")
            }
        }

        function Po(e, t, n) {
            (n = na(n)).tag = 3, n.payload = {
                element: null
            };
            var r = t.value;
            return n.callback = function() {
                Ri(r), vo(e, t)
            }, n
        }

        function ko(e, t, n) {
            (n = na(n)).tag = 3;
            var r = e.type.getDerivedStateFromError;
            if ("function" == typeof r) {
                var a = t.value;
                n.payload = function() {
                    return r(a)
                }
            }
            var o = e.stateNode;
            return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
                "function" != typeof r && (null === Ho ? Ho = new Set([this]) : Ho.add(this));
                var n = t.value,
                    a = t.stack;
                vo(e, t), this.componentDidCatch(n, {
                    componentStack: null !== a ? a : ""
                })
            }), n
        }

        function To(e) {
            switch (e.tag) {
                case 1:
                    _r(e.type) && Mr();
                    var t = e.effectTag;
                    return 2048 & t ? (e.effectTag = -2049 & t | 64, e) : null;
                case 3:
                    return ka(), Lr(), 0 != (64 & (t = e.effectTag)) && i("285"), e.effectTag = -2049 & t | 64, e;
                case 5:
                    return Na(e), null;
                case 13:
                    return 2048 & (t = e.effectTag) ? (e.effectTag = -2049 & t | 64, e) : null;
                case 4:
                    return ka(), null;
                case 10:
                    return ga(e), null;
                default:
                    return null
            }
        }
        bo = function(e, t) {
            for (var n = t.child; null !== n;) {
                if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                else if (4 !== n.tag && null !== n.child) {
                    n.child.return = n, n = n.child;
                    continue
                }
                if (n === t) break;
                for (; null === n.sibling;) {
                    if (null === n.return || n.return === t) return;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
        }, mo = function() {}, fo = function(e, t, n, r, o) {
            var i = e.memoizedProps;
            if (i !== r) {
                var l = t.stateNode;
                switch (xa(Ea.current), e = null, n) {
                    case "input":
                        i = yt(l, i), r = yt(l, r), e = [];
                        break;
                    case "option":
                        i = Yn(l, i), r = Yn(l, r), e = [];
                        break;
                    case "select":
                        i = a({}, i, {
                            value: void 0
                        }), r = a({}, r, {
                            value: void 0
                        }), e = [];
                        break;
                    case "textarea":
                        i = Kn(l, i), r = Kn(l, r), e = [];
                        break;
                    default:
                        "function" != typeof i.onClick && "function" == typeof r.onClick && (l.onclick = dr)
                }
                pr(n, r), l = n = void 0;
                var s = null;
                for (n in i)
                    if (!r.hasOwnProperty(n) && i.hasOwnProperty(n) && null != i[n])
                        if ("style" === n) {
                            var p = i[n];
                            for (l in p) p.hasOwnProperty(l) && (s || (s = {}), s[l] = "")
                        } else "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (y.hasOwnProperty(n) ? e || (e = []) : (e = e || []).push(n, null));
                for (n in r) {
                    var c = r[n];
                    if (p = null != i ? i[n] : void 0, r.hasOwnProperty(n) && c !== p && (null != c || null != p))
                        if ("style" === n)
                            if (p) {
                                for (l in p) !p.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (s || (s = {}), s[l] = "");
                                for (l in c) c.hasOwnProperty(l) && p[l] !== c[l] && (s || (s = {}), s[l] = c[l])
                            } else s || (e || (e = []), e.push(n, s)), s = c;
                    else "dangerouslySetInnerHTML" === n ? (c = c ? c.__html : void 0, p = p ? p.__html : void 0, null != c && p !== c && (e = e || []).push(n, "" + c)) : "children" === n ? p === c || "string" != typeof c && "number" != typeof c || (e = e || []).push(n, "" + c) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (y.hasOwnProperty(n) ? (null != c && ur(o, n), e || p === c || (e = [])) : (e = e || []).push(n, c))
                }
                s && (e = e || []).push("style", s), o = e, (t.updateQueue = o) && ho(t)
            }
        }, go = function(e, t, n, r) {
            n !== r && ho(t)
        };
        var No = {
                readContext: ya
            },
            wo = Be.ReactCurrentOwner,
            _o = 1073741822,
            Mo = 0,
            Lo = !1,
            Ro = null,
            Ao = null,
            Io = 0,
            jo = -1,
            Do = !1,
            zo = null,
            Fo = !1,
            Uo = null,
            Go = null,
            Ho = null;

        function Vo() {
            if (null !== Ro)
                for (var e = Ro.return; null !== e;) {
                    var t = e;
                    switch (t.tag) {
                        case 1:
                            var n = t.type.childContextTypes;
                            null != n && Mr();
                            break;
                        case 3:
                            ka(), Lr();
                            break;
                        case 5:
                            Na(t);
                            break;
                        case 4:
                            ka();
                            break;
                        case 10:
                            ga(t)
                    }
                    e = e.return
                }
            Ao = null, Io = 0, jo = -1, Do = !1, Ro = null
        }

        function Bo() {
            null !== Go && (o.unstable_cancelCallback(Uo), Go())
        }

        function Wo(e) {
            for (;;) {
                var t = e.alternate,
                    n = e.return,
                    r = e.sibling;
                if (0 == (1024 & e.effectTag)) {
                    Ro = e;
                    e: {
                        var o = t,
                            l = Io,
                            s = (t = e).pendingProps;
                        switch (t.tag) {
                            case 2:
                            case 16:
                                break;
                            case 15:
                            case 0:
                                break;
                            case 1:
                                _r(t.type) && Mr();
                                break;
                            case 3:
                                ka(), Lr(), (s = t.stateNode).pendingContext && (s.context = s.pendingContext, s.pendingContext = null), null !== o && null !== o.child || ($a(t), t.effectTag &= -3), mo(t);
                                break;
                            case 5:
                                Na(t);
                                var p = xa(Sa.current);
                                if (l = t.type, null !== o && null != t.stateNode) fo(o, t, l, s, p), o.ref !== t.ref && (t.effectTag |= 128);
                                else if (s) {
                                    var c = xa(Ea.current);
                                    if ($a(t)) {
                                        o = (s = t).stateNode;
                                        var u = s.type,
                                            d = s.memoizedProps,
                                            h = p;
                                        switch (o[R] = s, o[A] = d, l = void 0, p = u) {
                                            case "iframe":
                                            case "object":
                                                Pn("load", o);
                                                break;
                                            case "video":
                                            case "audio":
                                                for (u = 0; u < te.length; u++) Pn(te[u], o);
                                                break;
                                            case "source":
                                                Pn("error", o);
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Pn("error", o), Pn("load", o);
                                                break;
                                            case "form":
                                                Pn("reset", o), Pn("submit", o);
                                                break;
                                            case "details":
                                                Pn("toggle", o);
                                                break;
                                            case "input":
                                                Ct(o, d), Pn("invalid", o), ur(h, "onChange");
                                                break;
                                            case "select":
                                                o._wrapperState = {
                                                    wasMultiple: !!d.multiple
                                                }, Pn("invalid", o), ur(h, "onChange");
                                                break;
                                            case "textarea":
                                                qn(o, d), Pn("invalid", o), ur(h, "onChange")
                                        }
                                        for (l in pr(p, d), u = null, d) d.hasOwnProperty(l) && (c = d[l], "children" === l ? "string" == typeof c ? o.textContent !== c && (u = ["children", c]) : "number" == typeof c && o.textContent !== "" + c && (u = ["children", "" + c]) : y.hasOwnProperty(l) && null != c && ur(h, l));
                                        switch (p) {
                                            case "input":
                                                He(o), St(o, d, !0);
                                                break;
                                            case "textarea":
                                                He(o), $n(o);
                                                break;
                                            case "select":
                                            case "option":
                                                break;
                                            default:
                                                "function" == typeof d.onClick && (o.onclick = dr)
                                        }
                                        l = u, s.updateQueue = l, (s = null !== l) && ho(t)
                                    } else {
                                        d = t, o = l, h = s, u = 9 === p.nodeType ? p : p.ownerDocument, c === Zn.html && (c = Jn(o)), c === Zn.html ? "script" === o ? ((o = u.createElement("div")).innerHTML = "<script><\/script>", u = o.removeChild(o.firstChild)) : "string" == typeof h.is ? u = u.createElement(o, {
                                            is: h.is
                                        }) : (u = u.createElement(o), "select" === o && h.multiple && (u.multiple = !0)) : u = u.createElementNS(c, o), (o = u)[R] = d, o[A] = s, bo(o, t, !1, !1), h = o;
                                        var b = p,
                                            m = cr(u = l, d = s);
                                        switch (u) {
                                            case "iframe":
                                            case "object":
                                                Pn("load", h), p = d;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (p = 0; p < te.length; p++) Pn(te[p], h);
                                                p = d;
                                                break;
                                            case "source":
                                                Pn("error", h), p = d;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Pn("error", h), Pn("load", h), p = d;
                                                break;
                                            case "form":
                                                Pn("reset", h), Pn("submit", h), p = d;
                                                break;
                                            case "details":
                                                Pn("toggle", h), p = d;
                                                break;
                                            case "input":
                                                Ct(h, d), p = yt(h, d), Pn("invalid", h), ur(b, "onChange");
                                                break;
                                            case "option":
                                                p = Yn(h, d);
                                                break;
                                            case "select":
                                                h._wrapperState = {
                                                    wasMultiple: !!d.multiple
                                                }, p = a({}, d, {
                                                    value: void 0
                                                }), Pn("invalid", h), ur(b, "onChange");
                                                break;
                                            case "textarea":
                                                qn(h, d), p = Kn(h, d), Pn("invalid", h), ur(b, "onChange");
                                                break;
                                            default:
                                                p = d
                                        }
                                        pr(u, p), c = void 0;
                                        var f = u,
                                            g = h,
                                            v = p;
                                        for (c in v)
                                            if (v.hasOwnProperty(c)) {
                                                var C = v[c];
                                                "style" === c ? lr(g, C) : "dangerouslySetInnerHTML" === c ? null != (C = C ? C.__html : void 0) && nr(g, C) : "children" === c ? "string" == typeof C ? ("textarea" !== f || "" !== C) && rr(g, C) : "number" == typeof C && rr(g, "" + C) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (y.hasOwnProperty(c) ? null != C && ur(b, c) : null != C && gt(g, c, C, m))
                                            }
                                        switch (u) {
                                            case "input":
                                                He(h), St(h, d, !1);
                                                break;
                                            case "textarea":
                                                He(h), $n(h);
                                                break;
                                            case "option":
                                                null != d.value && h.setAttribute("value", "" + vt(d.value));
                                                break;
                                            case "select":
                                                (p = h).multiple = !!d.multiple, null != (h = d.value) ? Xn(p, !!d.multiple, h, !1) : null != d.defaultValue && Xn(p, !!d.multiple, d.defaultValue, !0);
                                                break;
                                            default:
                                                "function" == typeof p.onClick && (h.onclick = dr)
                                        }(s = mr(l, s)) && ho(t), t.stateNode = o
                                    }
                                    null !== t.ref && (t.effectTag |= 128)
                                } else null === t.stateNode && i("166");
                                break;
                            case 6:
                                o && null != t.stateNode ? go(o, t, o.memoizedProps, s) : ("string" != typeof s && (null === t.stateNode && i("166")), o = xa(Sa.current), xa(Ea.current), $a(t) ? (l = (s = t).stateNode, o = s.memoizedProps, l[R] = s, (s = l.nodeValue !== o) && ho(t)) : (l = t, (s = (9 === o.nodeType ? o : o.ownerDocument).createTextNode(s))[R] = t, l.stateNode = s));
                                break;
                            case 11:
                                break;
                            case 13:
                                if (s = t.memoizedState, 0 != (64 & t.effectTag)) {
                                    t.expirationTime = l, Ro = t;
                                    break e
                                }
                                s = null !== s, l = null !== o && null !== o.memoizedState, null !== o && !s && l && (null !== (o = o.child.sibling) && (null !== (p = t.firstEffect) ? (t.firstEffect = o, o.nextEffect = p) : (t.firstEffect = t.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), (s !== l || 0 == (1 & t.effectTag) && s) && (t.effectTag |= 4);
                                break;
                            case 7:
                            case 8:
                            case 12:
                                break;
                            case 4:
                                ka(), mo(t);
                                break;
                            case 10:
                                ga(t);
                                break;
                            case 9:
                            case 14:
                                break;
                            case 17:
                                _r(t.type) && Mr();
                                break;
                            default:
                                i("156")
                        }
                        Ro = null
                    }
                    if (t = e, 1 === Io || 1 !== t.childExpirationTime) {
                        for (s = 0, l = t.child; null !== l;)(o = l.expirationTime) > s && (s = o), (p = l.childExpirationTime) > s && (s = p), l = l.sibling;
                        t.childExpirationTime = s
                    }
                    if (null !== Ro) return Ro;
                    null !== n && 0 == (1024 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), 1 < e.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e))
                } else {
                    if (null !== (e = To(e))) return e.effectTag &= 1023, e;
                    null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= 1024)
                }
                if (null !== r) return r;
                if (null === n) break;
                e = n
            }
            return null
        }

        function Yo(e) {
            var t = uo(e.alternate, e, Io);
            return e.memoizedProps = e.pendingProps, null === t && (t = Wo(e)), wo.current = null, t
        }

        function Xo(e, t) {
            Lo && i("243"), Bo(), Lo = !0, wo.currentDispatcher = No;
            var n = e.nextExpirationTimeToWorkOn;
            n === Io && e === Ao && null !== Ro || (Vo(), Io = n, Ro = Vr((Ao = e).current, null), e.pendingCommitExpirationTime = 0);
            for (var r = !1;;) {
                try {
                    if (t)
                        for (; null !== Ro && !Ti();) Ro = Yo(Ro);
                    else
                        for (; null !== Ro;) Ro = Yo(Ro)
                } catch (t) {
                    if (ma = ba = ha = null, null === Ro) r = !0, Ri(t);
                    else {
                        null === Ro && i("271");
                        var a = Ro,
                            o = a.return;
                        if (null !== o) {
                            e: {
                                var l = e,
                                    s = o,
                                    p = a,
                                    c = t;
                                if (o = Io, p.effectTag |= 1024, p.firstEffect = p.lastEffect = null, null !== c && "object" == typeof c && "function" == typeof c.then) {
                                    var u = c;
                                    c = s;
                                    var d = -1,
                                        h = -1;
                                    do {
                                        if (13 === c.tag) {
                                            var b = c.alternate;
                                            if (null !== b && null !== (b = b.memoizedState)) {
                                                h = 10 * (1073741822 - b.timedOutAt);
                                                break
                                            }
                                            "number" == typeof(b = c.pendingProps.maxDuration) && (0 >= b ? d = 0 : (-1 === d || b < d) && (d = b))
                                        }
                                        c = c.return
                                    } while (null !== c);
                                    c = s;
                                    do {
                                        if ((b = 13 === c.tag) && (b = void 0 !== c.memoizedProps.fallback && null === c.memoizedState), b) {
                                            if (s = Qo.bind(null, l, c, p, 0 == (1 & c.mode) ? 1073741823 : o), u.then(s, s), 0 == (1 & c.mode)) {
                                                c.effectTag |= 64, p.effectTag &= -1957, 1 === p.tag && null === p.alternate && (p.tag = 17), p.expirationTime = o;
                                                break e
                                            } - 1 === d ? l = 1073741823 : (-1 === h && (h = 10 * (1073741822 - $r(l, o)) - 5e3), l = h + d), 0 <= l && jo < l && (jo = l), c.effectTag |= 2048, c.expirationTime = o;
                                            break e
                                        }
                                        c = c.return
                                    } while (null !== c);
                                    c = Error((lt(p.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + st(p))
                                }
                                Do = !0,
                                c = ua(c, p),
                                l = s;do {
                                    switch (l.tag) {
                                        case 3:
                                            p = c, l.effectTag |= 2048, l.expirationTime = o, oa(l, o = Po(l, p, o));
                                            break e;
                                        case 1:
                                            if (p = c, s = l.type, u = l.stateNode, 0 == (64 & l.effectTag) && ("function" == typeof s.getDerivedStateFromError || null !== u && "function" == typeof u.componentDidCatch && (null === Ho || !Ho.has(u)))) {
                                                l.effectTag |= 2048, l.expirationTime = o, oa(l, o = ko(l, p, o));
                                                break e
                                            }
                                    }
                                    l = l.return
                                } while (null !== l)
                            }
                            Ro = Wo(a);
                            continue
                        }
                        r = !0, Ri(t)
                    }
                }
                break
            }
            if (Lo = !1, ma = ba = ha = wo.currentDispatcher = null, r) Ao = null, e.finishedWork = null;
            else if (null !== Ro) e.finishedWork = null;
            else {
                if (null === (r = e.current.alternate) && i("281"), Ao = null, Do) {
                    if (a = e.latestPendingTime, o = e.latestSuspendedTime, l = e.latestPingedTime, 0 !== a && a < n || 0 !== o && o < n || 0 !== l && l < n) return Qr(e, n), void Oi(e, r, n, e.expirationTime, -1);
                    if (!e.didError && t) return e.didError = !0, n = e.nextExpirationTimeToWorkOn = n, t = e.expirationTime = 1073741823, void Oi(e, r, n, t, -1)
                }
                t && -1 !== jo ? (Qr(e, n), (t = 10 * (1073741822 - $r(e, n))) < jo && (jo = t), t = 10 * (1073741822 - Si()), t = jo - t, Oi(e, r, n, e.expirationTime, 0 > t ? 0 : t)) : (e.pendingCommitExpirationTime = n, e.finishedWork = r)
            }
        }

        function Ko(e, t) {
            for (var n = e.return; null !== n;) {
                switch (n.tag) {
                    case 1:
                        var r = n.stateNode;
                        if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Ho || !Ho.has(r))) return aa(n, e = ko(n, e = ua(t, e), 1073741823)), void Zo(n, 1073741823);
                        break;
                    case 3:
                        return aa(n, e = Po(n, e = ua(t, e), 1073741823)), void Zo(n, 1073741823)
                }
                n = n.return
            }
            3 === e.tag && (aa(e, n = Po(e, n = ua(t, e), 1073741823)), Zo(e, 1073741823))
        }

        function qo(e, t) {
            return 0 !== Mo ? e = Mo : Lo ? e = Fo ? 1073741823 : Io : 1 & t.mode ? (e = di ? 1073741822 - 10 * (1 + ((1073741822 - e + 15) / 10 | 0)) : 1073741822 - 25 * (1 + ((1073741822 - e + 500) / 25 | 0)), null !== Ao && e === Io && --e) : e = 1073741823, di && (0 === li || e < li) && (li = e), e
        }

        function Qo(e, t, n, r) {
            var a = e.earliestSuspendedTime,
                o = e.latestSuspendedTime;
            if (0 !== a && r <= a && r >= o) {
                o = a = r, e.didError = !1;
                var i = e.latestPingedTime;
                (0 === i || i > o) && (e.latestPingedTime = o), Zr(o, e)
            } else qr(e, a = qo(a = Si(), t));
            0 != (1 & t.mode) && e === Ao && Io === r && (Ao = null), $o(t, a), 0 == (1 & t.mode) && ($o(n, a), 1 === n.tag && null !== n.stateNode && ((t = na(a)).tag = 2, aa(n, t))), 0 !== (n = e.expirationTime) && xi(e, n)
        }

        function $o(e, t) {
            e.expirationTime < t && (e.expirationTime = t);
            var n = e.alternate;
            null !== n && n.expirationTime < t && (n.expirationTime = t);
            var r = e.return,
                a = null;
            if (null === r && 3 === e.tag) a = e.stateNode;
            else
                for (; null !== r;) {
                    if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                        a = r.stateNode;
                        break
                    }
                    r = r.return
                }
            return a
        }

        function Zo(e, t) {
            null !== (e = $o(e, t)) && (!Lo && 0 !== Io && t > Io && Vo(), qr(e, t), Lo && !Fo && Ao === e || xi(e, e.expirationTime), vi > gi && (vi = 0, i("185")))
        }

        function Jo(e, t, n, r, a) {
            var o = Mo;
            Mo = 1073741823;
            try {
                return e(t, n, r, a)
            } finally {
                Mo = o
            }
        }
        var ei = null,
            ti = null,
            ni = 0,
            ri = void 0,
            ai = !1,
            oi = null,
            ii = 0,
            li = 0,
            si = !1,
            pi = null,
            ci = !1,
            ui = !1,
            di = !1,
            hi = null,
            bi = o.unstable_now(),
            mi = 1073741822 - (bi / 10 | 0),
            fi = mi,
            gi = 50,
            vi = 0,
            yi = null;

        function Ci() {
            mi = 1073741822 - ((o.unstable_now() - bi) / 10 | 0)
        }

        function Ei(e, t) {
            if (0 !== ni) {
                if (t < ni) return;
                null !== ri && o.unstable_cancelCallback(ri)
            }
            ni = t, e = o.unstable_now() - bi, ri = o.unstable_scheduleCallback(Ni, {
                timeout: 10 * (1073741822 - t) - e
            })
        }

        function Oi(e, t, n, r, a) {
            e.expirationTime = r, 0 !== a || Ti() ? 0 < a && (e.timeoutHandle = gr(function(e, t, n) {
                e.pendingCommitExpirationTime = n, e.finishedWork = t, Ci(), fi = mi, _i(e, n)
            }.bind(null, e, t, n), a)) : (e.pendingCommitExpirationTime = n, e.finishedWork = t)
        }

        function Si() {
            return ai ? fi : (Pi(), 0 !== ii && 1 !== ii || (Ci(), fi = mi), fi)
        }

        function xi(e, t) {
            null === e.nextScheduledRoot ? (e.expirationTime = t, null === ti ? (ei = ti = e, e.nextScheduledRoot = e) : (ti = ti.nextScheduledRoot = e).nextScheduledRoot = ei) : t > e.expirationTime && (e.expirationTime = t), ai || (ci ? ui && (oi = e, ii = 1073741823, Mi(e, 1073741823, !1)) : 1073741823 === t ? wi(1073741823, !1) : Ei(e, t))
        }

        function Pi() {
            var e = 0,
                t = null;
            if (null !== ti)
                for (var n = ti, r = ei; null !== r;) {
                    var a = r.expirationTime;
                    if (0 === a) {
                        if ((null === n || null === ti) && i("244"), r === r.nextScheduledRoot) {
                            ei = ti = r.nextScheduledRoot = null;
                            break
                        }
                        if (r === ei) ei = a = r.nextScheduledRoot, ti.nextScheduledRoot = a, r.nextScheduledRoot = null;
                        else {
                            if (r === ti) {
                                (ti = n).nextScheduledRoot = ei, r.nextScheduledRoot = null;
                                break
                            }
                            n.nextScheduledRoot = r.nextScheduledRoot, r.nextScheduledRoot = null
                        }
                        r = n.nextScheduledRoot
                    } else {
                        if (a > e && (e = a, t = r), r === ti) break;
                        if (1073741823 === e) break;
                        n = r, r = r.nextScheduledRoot
                    }
                }
            oi = t, ii = e
        }
        var ki = !1;

        function Ti() {
            return !!ki || !!o.unstable_shouldYield() && (ki = !0)
        }

        function Ni() {
            try {
                if (!Ti() && null !== ei) {
                    Ci();
                    var e = ei;
                    do {
                        var t = e.expirationTime;
                        0 !== t && mi <= t && (e.nextExpirationTimeToWorkOn = mi), e = e.nextScheduledRoot
                    } while (e !== ei)
                }
                wi(0, !0)
            } finally {
                ki = !1
            }
        }

        function wi(e, t) {
            if (Pi(), t)
                for (Ci(), fi = mi; null !== oi && 0 !== ii && e <= ii && !(ki && mi > ii);) Mi(oi, ii, mi > ii), Pi(), Ci(), fi = mi;
            else
                for (; null !== oi && 0 !== ii && e <= ii;) Mi(oi, ii, !1), Pi();
            if (t && (ni = 0, ri = null), 0 !== ii && Ei(oi, ii), vi = 0, yi = null, null !== hi)
                for (e = hi, hi = null, t = 0; t < e.length; t++) {
                    var n = e[t];
                    try {
                        n._onComplete()
                    } catch (e) {
                        si || (si = !0, pi = e)
                    }
                }
            if (si) throw e = pi, pi = null, si = !1, e
        }

        function _i(e, t) {
            ai && i("253"), oi = e, ii = t, Mi(e, t, !1), wi(1073741823, !1)
        }

        function Mi(e, t, n) {
            if (ai && i("245"), ai = !0, n) {
                var r = e.finishedWork;
                null !== r ? Li(e, r, t) : (e.finishedWork = null, -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1, vr(r)), Xo(e, n), null !== (r = e.finishedWork) && (Ti() ? e.finishedWork = r : Li(e, r, t)))
            } else null !== (r = e.finishedWork) ? Li(e, r, t) : (e.finishedWork = null, -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1, vr(r)), Xo(e, n), null !== (r = e.finishedWork) && Li(e, r, t));
            ai = !1
        }

        function Li(e, t, n) {
            var r = e.firstBatch;
            if (null !== r && r._expirationTime >= n && (null === hi ? hi = [r] : hi.push(r), r._defer)) return e.finishedWork = t, void(e.expirationTime = 0);
            e.finishedWork = null, e === yi ? vi++ : (yi = e, vi = 0), Fo = Lo = !0, e.current === t && i("177"), 0 === (n = e.pendingCommitExpirationTime) && i("261"), e.pendingCommitExpirationTime = 0, r = t.expirationTime;
            var a = t.childExpirationTime;
            if (r = a > r ? a : r, e.didError = !1, 0 === r ? (e.earliestPendingTime = 0, e.latestPendingTime = 0, e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0) : (0 !== (a = e.latestPendingTime) && (a > r ? e.earliestPendingTime = e.latestPendingTime = 0 : e.earliestPendingTime > r && (e.earliestPendingTime = e.latestPendingTime)), 0 === (a = e.earliestSuspendedTime) ? qr(e, r) : r < e.latestSuspendedTime ? (e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0, qr(e, r)) : r > a && qr(e, r)), Zr(0, e), wo.current = null, 1 < t.effectTag ? null !== t.lastEffect ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, hr = xn, Dn(a = jn())) {
                if ("selectionStart" in a) var o = {
                    start: a.selectionStart,
                    end: a.selectionEnd
                };
                else e: {
                    var l = (o = (o = a.ownerDocument) && o.defaultView || window).getSelection && o.getSelection();
                    if (l && 0 !== l.rangeCount) {
                        o = l.anchorNode;
                        var s = l.anchorOffset,
                            p = l.focusNode;
                        l = l.focusOffset;
                        try {
                            o.nodeType, p.nodeType
                        } catch (e) {
                            o = null;
                            break e
                        }
                        var c = 0,
                            u = -1,
                            d = -1,
                            h = 0,
                            b = 0,
                            m = a,
                            f = null;
                        t: for (;;) {
                            for (var g; m !== o || 0 !== s && 3 !== m.nodeType || (u = c + s), m !== p || 0 !== l && 3 !== m.nodeType || (d = c + l), 3 === m.nodeType && (c += m.nodeValue.length), null !== (g = m.firstChild);) f = m, m = g;
                            for (;;) {
                                if (m === a) break t;
                                if (f === o && ++h === s && (u = c), f === p && ++b === l && (d = c), null !== (g = m.nextSibling)) break;
                                f = (m = f).parentNode
                            }
                            m = g
                        }
                        o = -1 === u || -1 === d ? null : {
                            start: u,
                            end: d
                        }
                    } else o = null
                }
                o = o || {
                    start: 0,
                    end: 0
                }
            } else o = null;
            for (br = {
                    focusedElem: a,
                    selectionRange: o
                }, xn = !1, zo = r; null !== zo;) {
                a = !1, o = void 0;
                try {
                    for (; null !== zo;) {
                        if (256 & zo.effectTag) e: {
                            var v = zo.alternate;
                            switch ((s = zo).tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break e;
                                case 1:
                                    if (256 & s.effectTag && null !== v) {
                                        var y = v.memoizedProps,
                                            C = v.memoizedState,
                                            E = s.stateNode,
                                            O = E.getSnapshotBeforeUpdate(s.elementType === s.type ? y : wa(s.type, y), C);
                                        E.__reactInternalSnapshotBeforeUpdate = O
                                    }
                                    break e;
                                case 3:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break e;
                                default:
                                    i("163")
                            }
                        }
                        zo = zo.nextEffect
                    }
                } catch (e) {
                    a = !0, o = e
                }
                a && (null === zo && i("178"), Ko(zo, o), null !== zo && (zo = zo.nextEffect))
            }
            for (zo = r; null !== zo;) {
                v = !1, y = void 0;
                try {
                    for (; null !== zo;) {
                        var S = zo.effectTag;
                        if (16 & S && rr(zo.stateNode, ""), 128 & S) {
                            var x = zo.alternate;
                            if (null !== x) {
                                var P = x.ref;
                                null !== P && ("function" == typeof P ? P(null) : P.current = null)
                            }
                        }
                        switch (14 & S) {
                            case 2:
                                Oo(zo), zo.effectTag &= -3;
                                break;
                            case 6:
                                Oo(zo), zo.effectTag &= -3, xo(zo.alternate, zo);
                                break;
                            case 4:
                                xo(zo.alternate, zo);
                                break;
                            case 8:
                                So(C = zo), C.return = null, C.child = null, C.alternate && (C.alternate.child = null, C.alternate.return = null)
                        }
                        zo = zo.nextEffect
                    }
                } catch (e) {
                    v = !0, y = e
                }
                v && (null === zo && i("178"), Ko(zo, y), null !== zo && (zo = zo.nextEffect))
            }
            if (P = br, x = jn(), S = P.focusedElem, y = P.selectionRange, x !== S && S && S.ownerDocument && function e(t, n) {
                    return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
                }(S.ownerDocument.documentElement, S)) {
                null !== y && Dn(S) && (x = y.start, void 0 === (P = y.end) && (P = x), "selectionStart" in S ? (S.selectionStart = x, S.selectionEnd = Math.min(P, S.value.length)) : (P = (x = S.ownerDocument || document) && x.defaultView || window).getSelection && (P = P.getSelection(), C = S.textContent.length, v = Math.min(y.start, C), y = void 0 === y.end ? v : Math.min(y.end, C), !P.extend && v > y && (C = y, y = v, v = C), C = In(S, v), E = In(S, y), C && E && (1 !== P.rangeCount || P.anchorNode !== C.node || P.anchorOffset !== C.offset || P.focusNode !== E.node || P.focusOffset !== E.offset) && ((x = x.createRange()).setStart(C.node, C.offset), P.removeAllRanges(), v > y ? (P.addRange(x), P.extend(E.node, E.offset)) : (x.setEnd(E.node, E.offset), P.addRange(x))))), x = [];
                for (P = S; P = P.parentNode;) 1 === P.nodeType && x.push({
                    element: P,
                    left: P.scrollLeft,
                    top: P.scrollTop
                });
                for ("function" == typeof S.focus && S.focus(), S = 0; S < x.length; S++)(P = x[S]).element.scrollLeft = P.left, P.element.scrollTop = P.top
            }
            for (br = null, xn = !!hr, hr = null, e.current = t, zo = r; null !== zo;) {
                r = !1, S = void 0;
                try {
                    for (x = n; null !== zo;) {
                        var k = zo.effectTag;
                        if (36 & k) {
                            var T = zo.alternate;
                            switch (v = x, (P = zo).tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    var N = P.stateNode;
                                    if (4 & P.effectTag)
                                        if (null === T) N.componentDidMount();
                                        else {
                                            var w = P.elementType === P.type ? T.memoizedProps : wa(P.type, T.memoizedProps);
                                            N.componentDidUpdate(w, T.memoizedState, N.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var _ = P.updateQueue;
                                    null !== _ && pa(0, _, N);
                                    break;
                                case 3:
                                    var M = P.updateQueue;
                                    if (null !== M) {
                                        if (y = null, null !== P.child) switch (P.child.tag) {
                                            case 5:
                                                y = P.child.stateNode;
                                                break;
                                            case 1:
                                                y = P.child.stateNode
                                        }
                                        pa(0, M, y)
                                    }
                                    break;
                                case 5:
                                    var L = P.stateNode;
                                    null === T && 4 & P.effectTag && mr(P.type, P.memoizedProps) && L.focus();
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 13:
                                case 17:
                                    break;
                                default:
                                    i("163")
                            }
                        }
                        if (128 & k) {
                            var R = zo.ref;
                            if (null !== R) {
                                var A = zo.stateNode;
                                switch (zo.tag) {
                                    case 5:
                                        var I = A;
                                        break;
                                    default:
                                        I = A
                                }
                                "function" == typeof R ? R(I) : R.current = I
                            }
                        }
                        zo = zo.nextEffect
                    }
                } catch (e) {
                    r = !0, S = e
                }
                r && (null === zo && i("178"), Ko(zo, S), null !== zo && (zo = zo.nextEffect))
            }
            Lo = Fo = !1, "function" == typeof Dr && Dr(t.stateNode), k = t.expirationTime, 0 === (t = (t = t.childExpirationTime) > k ? t : k) && (Ho = null), e.expirationTime = t, e.finishedWork = null
        }

        function Ri(e) {
            null === oi && i("246"), oi.expirationTime = 0, si || (si = !0, pi = e)
        }

        function Ai(e, t) {
            var n = ci;
            ci = !0;
            try {
                return e(t)
            } finally {
                (ci = n) || ai || wi(1073741823, !1)
            }
        }

        function Ii(e, t) {
            if (ci && !ui) {
                ui = !0;
                try {
                    return e(t)
                } finally {
                    ui = !1
                }
            }
            return e(t)
        }

        function ji(e, t, n) {
            if (di) return e(t, n);
            ci || ai || 0 === li || (wi(li, !1), li = 0);
            var r = di,
                a = ci;
            ci = di = !0;
            try {
                return e(t, n)
            } finally {
                di = r, (ci = a) || ai || wi(1073741823, !1)
            }
        }

        function Di(e, t, n, r, a) {
            var o = t.current;
            e: if (n) {
                t: {
                    2 === tn(n = n._reactInternalFiber) && 1 === n.tag || i("170");
                    var l = n;do {
                        switch (l.tag) {
                            case 3:
                                l = l.stateNode.context;
                                break t;
                            case 1:
                                if (_r(l.type)) {
                                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break t
                                }
                        }
                        l = l.return
                    } while (null !== l);i("171"),
                    l = void 0
                }
                if (1 === n.tag) {
                    var s = n.type;
                    if (_r(s)) {
                        n = Ar(n, s, l);
                        break e
                    }
                }
                n = l
            }
            else n = Pr;
            return null === t.context ? t.context = n : t.pendingContext = n, t = a, (a = na(r)).payload = {
                element: e
            }, null !== (t = void 0 === t ? null : t) && (a.callback = t), Bo(), aa(o, a), Zo(o, r), r
        }

        function zi(e, t, n, r) {
            var a = t.current;
            return Di(e, t, n, a = qo(Si(), a), r)
        }

        function Fi(e) {
            if (!(e = e.current).child) return null;
            switch (e.child.tag) {
                case 5:
                default:
                    return e.child.stateNode
            }
        }

        function Ui(e) {
            var t = 1073741822 - 25 * (1 + ((1073741822 - Si() + 500) / 25 | 0));
            t >= _o && (t = _o - 1), this._expirationTime = _o = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
        }

        function Gi() {
            this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
        }

        function Hi(e, t, n) {
            e = {
                current: t = Gr(3, null, null, t ? 3 : 0),
                containerInfo: e,
                pendingChildren: null,
                earliestPendingTime: 0,
                latestPendingTime: 0,
                earliestSuspendedTime: 0,
                latestSuspendedTime: 0,
                latestPingedTime: 0,
                didError: !1,
                pendingCommitExpirationTime: 0,
                finishedWork: null,
                timeoutHandle: -1,
                context: null,
                pendingContext: null,
                hydrate: n,
                nextExpirationTimeToWorkOn: 0,
                expirationTime: 0,
                firstBatch: null,
                nextScheduledRoot: null
            }, this._internalRoot = t.stateNode = e
        }

        function Vi(e) {
            return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
        }

        function Bi(e, t, n, r, a) {
            Vi(n) || i("200");
            var o = n._reactRootContainer;
            if (o) {
                if ("function" == typeof a) {
                    var l = a;
                    a = function() {
                        var e = Fi(o._internalRoot);
                        l.call(e)
                    }
                }
                null != e ? o.legacy_renderSubtreeIntoContainer(e, t, a) : o.render(t, a)
            } else {
                if (o = n._reactRootContainer = function(e, t) {
                        if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                            for (var n; n = e.lastChild;) e.removeChild(n);
                        return new Hi(e, !1, t)
                    }(n, r), "function" == typeof a) {
                    var s = a;
                    a = function() {
                        var e = Fi(o._internalRoot);
                        s.call(e)
                    }
                }
                Ii(function() {
                    null != e ? o.legacy_renderSubtreeIntoContainer(e, t, a) : o.render(t, a)
                })
            }
            return Fi(o._internalRoot)
        }

        function Wi(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            return Vi(t) || i("200"),
                function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: Ke,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
        }
        ke = function(e, t, n) {
            switch (t) {
                case "input":
                    if (Ot(e, n), t = n.name, "radio" === n.type && null != t) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var a = z(r);
                                a || i("90"), Ve(r), Ot(r, a)
                            }
                        }
                    }
                    break;
                case "textarea":
                    Qn(e, n);
                    break;
                case "select":
                    null != (t = n.value) && Xn(e, !!n.multiple, t, !1)
            }
        }, Ui.prototype.render = function(e) {
            this._defer || i("250"), this._hasChildren = !0, this._children = e;
            var t = this._root._internalRoot,
                n = this._expirationTime,
                r = new Gi;
            return Di(e, t, null, n, r._onCommit), r
        }, Ui.prototype.then = function(e) {
            if (this._didComplete) e();
            else {
                var t = this._callbacks;
                null === t && (t = this._callbacks = []), t.push(e)
            }
        }, Ui.prototype.commit = function() {
            var e = this._root._internalRoot,
                t = e.firstBatch;
            if (this._defer && null !== t || i("251"), this._hasChildren) {
                var n = this._expirationTime;
                if (t !== this) {
                    this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
                    for (var r = null, a = t; a !== this;) r = a, a = a._next;
                    null === r && i("251"), r._next = a._next, this._next = t, e.firstBatch = this
                }
                this._defer = !1, _i(e, n), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
            } else this._next = null, this._defer = !1
        }, Ui.prototype._onComplete = function() {
            if (!this._didComplete) {
                this._didComplete = !0;
                var e = this._callbacks;
                if (null !== e)
                    for (var t = 0; t < e.length; t++)(0, e[t])()
            }
        }, Gi.prototype.then = function(e) {
            if (this._didCommit) e();
            else {
                var t = this._callbacks;
                null === t && (t = this._callbacks = []), t.push(e)
            }
        }, Gi.prototype._onCommit = function() {
            if (!this._didCommit) {
                this._didCommit = !0;
                var e = this._callbacks;
                if (null !== e)
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        "function" != typeof n && i("191", n), n()
                    }
            }
        }, Hi.prototype.render = function(e, t) {
            var n = this._internalRoot,
                r = new Gi;
            return null !== (t = void 0 === t ? null : t) && r.then(t), zi(e, n, null, r._onCommit), r
        }, Hi.prototype.unmount = function(e) {
            var t = this._internalRoot,
                n = new Gi;
            return null !== (e = void 0 === e ? null : e) && n.then(e), zi(null, t, null, n._onCommit), n
        }, Hi.prototype.legacy_renderSubtreeIntoContainer = function(e, t, n) {
            var r = this._internalRoot,
                a = new Gi;
            return null !== (n = void 0 === n ? null : n) && a.then(n), zi(t, r, e, a._onCommit), a
        }, Hi.prototype.createBatch = function() {
            var e = new Ui(this),
                t = e._expirationTime,
                n = this._internalRoot,
                r = n.firstBatch;
            if (null === r) n.firstBatch = e, e._next = null;
            else {
                for (n = null; null !== r && r._expirationTime >= t;) n = r, r = r._next;
                e._next = r, null !== n && (n._next = e)
            }
            return e
        }, Le = Ai, Re = ji, Ae = function() {
            ai || 0 === li || (wi(li, !1), li = 0)
        };
        var Yi, Xi, Ki = {
            createPortal: Wi,
            findDOMNode: function(e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternalFiber;
                return void 0 === t && ("function" == typeof e.render ? i("188") : i("268", Object.keys(e))), e = null === (e = rn(t)) ? null : e.stateNode
            },
            hydrate: function(e, t, n) {
                return Bi(null, e, t, !0, n)
            },
            render: function(e, t, n) {
                return Bi(null, e, t, !1, n)
            },
            unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
                return (null == e || void 0 === e._reactInternalFiber) && i("38"), Bi(e, t, n, !1, r)
            },
            unmountComponentAtNode: function(e) {
                return Vi(e) || i("40"), !!e._reactRootContainer && (Ii(function() {
                    Bi(null, null, e, !1, function() {
                        e._reactRootContainer = null
                    })
                }), !0)
            },
            unstable_createPortal: function() {
                return Wi.apply(void 0, arguments)
            },
            unstable_batchedUpdates: Ai,
            unstable_interactiveUpdates: ji,
            flushSync: function(e, t) {
                ai && i("187");
                var n = ci;
                ci = !0;
                try {
                    return Jo(e, t)
                } finally {
                    ci = n, wi(1073741823, !1)
                }
            },
            unstable_flushControlled: function(e) {
                var t = ci;
                ci = !0;
                try {
                    Jo(e)
                } finally {
                    (ci = t) || ai || wi(1073741823, !1)
                }
            },
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                Events: [j, D, z, w.injectEventPluginsByName, v, B, function(e) {
                    k(e, V)
                }, _e, Me, Nn, M]
            },
            unstable_createRoot: function(e, t) {
                return Vi(e) || i("299", "unstable_createRoot"), new Hi(e, !0, null != t && !0 === t.hydrate)
            }
        };
        Xi = (Yi = {
                findFiberByHostInstance: I,
                bundleType: 0,
                version: "16.6.3",
                rendererPackageName: "react-dom"
            }).findFiberByHostInstance,
            function(e) {
                if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (t.isDisabled || !t.supportsFiber) return !0;
                try {
                    var n = t.inject(e);
                    Dr = Fr(function(e) {
                        return t.onCommitFiberRoot(n, e)
                    }), zr = Fr(function(e) {
                        return t.onCommitFiberUnmount(n, e)
                    })
                } catch (e) {}
            }(a({}, Yi, {
                findHostInstanceByFiber: function(e) {
                    return null === (e = rn(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: function(e) {
                    return Xi ? Xi(e) : null
                }
            }));
        var qi = {
                default: Ki
            },
            Qi = qi && Ki || qi;
        e.exports = Qi.default || Qi
    }, function(e, t, n) {
        "use strict";
        e.exports = n(21)
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            /** @license React v0.11.3
             * scheduler.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = null,
                r = !1,
                a = 3,
                o = -1,
                i = -1,
                l = !1,
                s = !1;

            function p() {
                if (!l) {
                    var e = n.expirationTime;
                    s ? S() : s = !0, O(d, e)
                }
            }

            function c() {
                var e = n,
                    t = n.next;
                if (n === t) n = null;
                else {
                    var r = n.previous;
                    n = r.next = t, t.previous = r
                }
                e.next = e.previous = null, r = e.callback, t = e.expirationTime, e = e.priorityLevel;
                var o = a,
                    l = i;
                a = e, i = t;
                try {
                    var s = r()
                } finally {
                    a = o, i = l
                }
                if ("function" == typeof s)
                    if (s = {
                            callback: s,
                            priorityLevel: e,
                            expirationTime: t,
                            next: null,
                            previous: null
                        }, null === n) n = s.next = s.previous = s;
                    else {
                        r = null, e = n;
                        do {
                            if (e.expirationTime >= t) {
                                r = e;
                                break
                            }
                            e = e.next
                        } while (e !== n);
                        null === r ? r = n : r === n && (n = s, p()), (t = r.previous).next = r.previous = s, s.next = r, s.previous = t
                    }
            }

            function u() {
                if (-1 === o && null !== n && 1 === n.priorityLevel) {
                    l = !0;
                    try {
                        do {
                            c()
                        } while (null !== n && 1 === n.priorityLevel)
                    } finally {
                        l = !1, null !== n ? p() : s = !1
                    }
                }
            }

            function d(e) {
                l = !0;
                var a = r;
                r = e;
                try {
                    if (e)
                        for (; null !== n;) {
                            var o = t.unstable_now();
                            if (!(n.expirationTime <= o)) break;
                            do {
                                c()
                            } while (null !== n && n.expirationTime <= o)
                        } else if (null !== n)
                            do {
                                c()
                            } while (null !== n && !x())
                } finally {
                    l = !1, r = a, null !== n ? p() : s = !1, u()
                }
            }
            var h, b, m = Date,
                f = "function" == typeof setTimeout ? setTimeout : void 0,
                g = "function" == typeof clearTimeout ? clearTimeout : void 0,
                v = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
                y = "function" == typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;

            function C(e) {
                h = v(function(t) {
                    g(b), e(t)
                }), b = f(function() {
                    y(h), e(t.unstable_now())
                }, 100)
            }
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var E = performance;
                t.unstable_now = function() {
                    return E.now()
                }
            } else t.unstable_now = function() {
                return m.now()
            };
            var O, S, x, P = null;
            if ("undefined" != typeof window ? P = window : void 0 !== e && (P = e), P && P._schedMock) {
                var k = P._schedMock;
                O = k[0], S = k[1], x = k[2], t.unstable_now = k[3]
            } else if ("undefined" == typeof window || "function" != typeof MessageChannel) {
                var T = null,
                    N = function(e) {
                        if (null !== T) try {
                            T(e)
                        } finally {
                            T = null
                        }
                    };
                O = function(e) {
                    null !== T ? setTimeout(O, 0, e) : (T = e, setTimeout(N, 0, !1))
                }, S = function() {
                    T = null
                }, x = function() {
                    return !1
                }
            } else {
                "undefined" != typeof console && ("function" != typeof v && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof y && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
                var w = null,
                    _ = !1,
                    M = -1,
                    L = !1,
                    R = !1,
                    A = 0,
                    I = 33,
                    j = 33;
                x = function() {
                    return A <= t.unstable_now()
                };
                var D = new MessageChannel,
                    z = D.port2;
                D.port1.onmessage = function() {
                    _ = !1;
                    var e = w,
                        n = M;
                    w = null, M = -1;
                    var r = t.unstable_now(),
                        a = !1;
                    if (0 >= A - r) {
                        if (!(-1 !== n && n <= r)) return L || (L = !0, C(F)), w = e, void(M = n);
                        a = !0
                    }
                    if (null !== e) {
                        R = !0;
                        try {
                            e(a)
                        } finally {
                            R = !1
                        }
                    }
                };
                var F = function(e) {
                    if (null !== w) {
                        C(F);
                        var t = e - A + j;
                        t < j && I < j ? (8 > t && (t = 8), j = t < I ? I : t) : I = t, A = e + j, _ || (_ = !0, z.postMessage(void 0))
                    } else L = !1
                };
                O = function(e, t) {
                    w = e, M = t, R || 0 > t ? z.postMessage(void 0) : L || (L = !0, C(F))
                }, S = function() {
                    w = null, _ = !1, M = -1
                }
            }
            t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, n) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var r = a,
                    i = o;
                a = e, o = t.unstable_now();
                try {
                    return n()
                } finally {
                    a = r, o = i, u()
                }
            }, t.unstable_scheduleCallback = function(e, r) {
                var i = -1 !== o ? o : t.unstable_now();
                if ("object" == typeof r && null !== r && "number" == typeof r.timeout) r = i + r.timeout;
                else switch (a) {
                    case 1:
                        r = i + -1;
                        break;
                    case 2:
                        r = i + 250;
                        break;
                    case 5:
                        r = i + 1073741823;
                        break;
                    case 4:
                        r = i + 1e4;
                        break;
                    default:
                        r = i + 5e3
                }
                if (e = {
                        callback: e,
                        priorityLevel: a,
                        expirationTime: r,
                        next: null,
                        previous: null
                    }, null === n) n = e.next = e.previous = e, p();
                else {
                    i = null;
                    var l = n;
                    do {
                        if (l.expirationTime > r) {
                            i = l;
                            break
                        }
                        l = l.next
                    } while (l !== n);
                    null === i ? i = n : i === n && (n = e, p()), (r = i.previous).next = i.previous = e, e.next = i, e.previous = r
                }
                return e
            }, t.unstable_cancelCallback = function(e) {
                var t = e.next;
                if (null !== t) {
                    if (t === e) n = null;
                    else {
                        e === n && (n = t);
                        var r = e.previous;
                        r.next = t, t.previous = r
                    }
                    e.next = e.previous = null
                }
            }, t.unstable_wrapCallback = function(e) {
                var n = a;
                return function() {
                    var r = a,
                        i = o;
                    a = n, o = t.unstable_now();
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        a = r, o = i, u()
                    }
                }
            }, t.unstable_getCurrentPriorityLevel = function() {
                return a
            }, t.unstable_shouldYield = function() {
                return !r && (null !== n && n.expirationTime < i || x())
            }
        }).call(this, n(9))
    }, function(e, t, n) {
        (function(e) {
            var r = void 0 !== e && e || "undefined" != typeof self && self || window,
                a = Function.prototype.apply;

            function o(e, t) {
                this._id = e, this._clearFn = t
            }
            t.setTimeout = function() {
                return new o(a.call(setTimeout, r, arguments), clearTimeout)
            }, t.setInterval = function() {
                return new o(a.call(setInterval, r, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(r, this._id)
            }, t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, n(23), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(this, n(9))
    }, function(e, t, n) {
        (function(e, t) {
            ! function(e, n) {
                "use strict";
                if (!e.setImmediate) {
                    var r, a, o, i, l, s = 1,
                        p = {},
                        c = !1,
                        u = e.document,
                        d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                        t.nextTick(function() {
                            b(e)
                        })
                    } : ! function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = n, t
                        }
                    }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
                        b(e.data)
                    }, r = function(e) {
                        o.port2.postMessage(e)
                    }) : u && "onreadystatechange" in u.createElement("script") ? (a = u.documentElement, r = function(e) {
                        var t = u.createElement("script");
                        t.onreadystatechange = function() {
                            b(e), t.onreadystatechange = null, a.removeChild(t), t = null
                        }, a.appendChild(t)
                    }) : r = function(e) {
                        setTimeout(b, 0, e)
                    } : (i = "setImmediate$" + Math.random() + "$", l = function(t) {
                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(i) && b(+t.data.slice(i.length))
                    }, e.addEventListener ? e.addEventListener("message", l, !1) : e.attachEvent("onmessage", l), r = function(t) {
                        e.postMessage(i + t, "*")
                    }), d.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                        var a = {
                            callback: e,
                            args: t
                        };
                        return p[s] = a, r(s), s++
                    }, d.clearImmediate = h
                }

                function h(e) {
                    delete p[e]
                }

                function b(e) {
                    if (c) setTimeout(b, 0, e);
                    else {
                        var t = p[e];
                        if (t) {
                            c = !0;
                            try {
                                ! function(e) {
                                    var t = e.callback,
                                        r = e.args;
                                    switch (r.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(r[0]);
                                            break;
                                        case 2:
                                            t(r[0], r[1]);
                                            break;
                                        case 3:
                                            t(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            t.apply(n, r)
                                    }
                                }(t)
                            } finally {
                                h(e), c = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(this, n(9), n(24))
    }, function(e, t) {
        var n, r, a = e.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function l(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                n = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                r = i
            }
        }();
        var s, p = [],
            c = !1,
            u = -1;

        function d() {
            c && s && (c = !1, s.length ? p = s.concat(p) : u = -1, p.length && h())
        }

        function h() {
            if (!c) {
                var e = l(d);
                c = !0;
                for (var t = p.length; t;) {
                    for (s = p, p = []; ++u < t;) s && s[u].run();
                    u = -1, t = p.length
                }
                s = null, c = !1,
                    function(e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function b(e, t) {
            this.fun = e, this.array = t
        }

        function m() {}
        a.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            p.push(new b(e, t)), 1 !== p.length || c || l(h)
        }, b.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = m, a.addListener = m, a.once = m, a.off = m, a.removeListener = m, a.removeAllListeners = m, a.emit = m, a.prependListener = m, a.prependOnceListener = m, a.listeners = function(e) {
            return []
        }, a.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, a.cwd = function() {
            return "/"
        }, a.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, a.umask = function() {
            return 0
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(26);

        function a() {}

        function o() {}
        o.resetWarningCache = a, e.exports = function() {
            function e(e, t, n, a, o, i) {
                if (i !== r) {
                    var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw l.name = "Invariant Violation", l
                }
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: o,
                resetWarningCache: a
            };
            return n.PropTypes = n, n
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, n) {
        var r = n(28);
        "string" == typeof r && (r = [
            [e.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(13)(r, a);
        r.locals && (e.exports = r.locals)
    }, function(e, t, n) {
        (e.exports = n(12)(!1)).push([e.i, '#inspector-host {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  bottom: 0px; }\n\n#__resizable_base__ {\n  display: none; }\n\n#actionTabs {\n  background: #333333;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  font: 14px "Arial";\n  overflow: hidden; }\n  #actionTabs .hoverIcon:hover {\n    opacity: 0.8; }\n  #actionTabs #header {\n    height: 30px;\n    font-size: 16px;\n    color: white;\n    background: #222222;\n    grid-row: 1;\n    text-align: center;\n    display: grid;\n    grid-template-columns: 30px 1fr 50px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    #actionTabs #header #logo {\n      grid-column: 1;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      align-self: center;\n      justify-self: center; }\n    #actionTabs #header #back {\n      grid-column: 1;\n      display: grid;\n      align-self: center;\n      justify-self: center;\n      cursor: pointer; }\n    #actionTabs #header #title {\n      grid-column: 2;\n      display: grid;\n      align-items: center;\n      text-align: center; }\n    #actionTabs #header #commands {\n      grid-column: 3;\n      display: grid;\n      align-items: center;\n      grid-template-columns: 1fr 1fr; }\n      #actionTabs #header #commands .expand {\n        grid-column: 1;\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        cursor: pointer; }\n      #actionTabs #header #commands .close {\n        grid-column: 2;\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        cursor: pointer; }\n  #actionTabs .tabs {\n    display: grid;\n    grid-row: 2;\n    grid-template-rows: 40px 1fr;\n    font: 14px "Arial";\n    overflow: hidden; }\n    #actionTabs .tabs .labels {\n      grid-row: 1;\n      display: flex;\n      align-items: center;\n      justify-items: center;\n      border-bottom: 1px solid #ffffff;\n      margin: 0;\n      padding: 0; }\n      #actionTabs .tabs .labels .label {\n        font-size: 24px;\n        color: white;\n        width: 40px;\n        display: flex;\n        align-content: center;\n        justify-content: center;\n        border: 1px solid transparent;\n        border-bottom: none;\n        background: #333333;\n        padding: 5px;\n        height: 28px;\n        cursor: pointer; }\n        #actionTabs .tabs .labels .label.active {\n          border-color: #ffffff;\n          border-bottom: 2px solid transparent;\n          margin-bottom: -2px; }\n    #actionTabs .tabs .panes {\n      grid-row: 2;\n      display: grid;\n      grid-template-rows: 100%;\n      overflow: hidden; }\n      #actionTabs .tabs .panes .infoMessage {\n        opacity: 0.5;\n        color: white;\n        margin: 15px 5px 0px 5px; }\n      #actionTabs .tabs .panes .pane {\n        color: white;\n        overflow-x: hidden;\n        overflow-y: auto;\n        height: 100%;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none; }\n        #actionTabs .tabs .panes .pane .underline {\n          border-bottom: 0.5px solid rgba(255, 255, 255, 0.5); }\n        #actionTabs .tabs .panes .pane .textureLinkLine {\n          display: grid;\n          grid-template-columns: auto 1fr; }\n          #actionTabs .tabs .panes .pane .textureLinkLine .debug {\n            grid-column: 1;\n            margin-left: 5px;\n            margin-right: 5px;\n            display: grid;\n            align-items: center;\n            justify-items: center;\n            cursor: pointer;\n            opacity: 0.5; }\n            #actionTabs .tabs .panes .pane .textureLinkLine .debug.selected {\n              opacity: 1.0; }\n          #actionTabs .tabs .panes .pane .textureLinkLine .textLine {\n            grid-column: 2; }\n        #actionTabs .tabs .panes .pane .messageLine {\n          text-align: center;\n          font-size: 12px;\n          font-style: italic;\n          opacity: 0.6; }\n        #actionTabs .tabs .panes .pane .iconMessageLine {\n          padding-left: 2px;\n          height: 30px;\n          display: grid;\n          grid-template-columns: 30px 1fr; }\n          #actionTabs .tabs .panes .pane .iconMessageLine .icon {\n            grid-column: 1;\n            display: grid;\n            align-items: center;\n            justify-items: center; }\n          #actionTabs .tabs .panes .pane .iconMessageLine .value {\n            grid-column: 2;\n            display: flex;\n            align-items: center; }\n        #actionTabs .tabs .panes .pane .textLine {\n          padding-left: 2px;\n          height: 30px;\n          display: grid;\n          grid-template-columns: 1fr auto; }\n          #actionTabs .tabs .panes .pane .textLine .label {\n            grid-column: 1;\n            display: flex;\n            align-items: center; }\n          #actionTabs .tabs .panes .pane .textLine .link-value {\n            grid-column: 2;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            text-align: end;\n            opacity: 0.8;\n            margin: 5px;\n            margin-top: 6px;\n            max-width: 140px;\n            text-decoration: underline;\n            cursor: pointer; }\n          #actionTabs .tabs .panes .pane .textLine .value {\n            grid-column: 2;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            text-align: end;\n            opacity: 0.8;\n            margin: 5px;\n            margin-top: 6px;\n            max-width: 200px;\n            -webkit-user-select: text;\n            -moz-user-select: text;\n            -ms-user-select: text;\n            user-select: text; }\n            #actionTabs .tabs .panes .pane .textLine .value.check {\n              color: green; }\n            #actionTabs .tabs .panes .pane .textLine .value.uncheck {\n              color: red; }\n        #actionTabs .tabs .panes .pane .textInputLine {\n          padding-left: 2px;\n          height: 30px;\n          display: grid;\n          grid-template-columns: 1fr 120px; }\n          #actionTabs .tabs .panes .pane .textInputLine .label {\n            grid-column: 1;\n            display: flex;\n            align-items: center; }\n          #actionTabs .tabs .panes .pane .textInputLine .value {\n            display: flex;\n            align-items: center;\n            grid-column: 2; }\n            #actionTabs .tabs .panes .pane .textInputLine .value input {\n              width: 110px; }\n        #actionTabs .tabs .panes .pane .buttonLine {\n          height: 30px;\n          display: grid;\n          align-items: center;\n          justify-items: stretch; }\n          #actionTabs .tabs .panes .pane .buttonLine input[type="file"] {\n            display: none; }\n          #actionTabs .tabs .panes .pane .buttonLine .file-upload {\n            background: transparent;\n            border: 1px solid #337ab7;\n            margin: 0px 10px;\n            color: white;\n            padding: 4px 5px;\n            opacity: 0.9;\n            cursor: pointer;\n            text-align: center; }\n          #actionTabs .tabs .panes .pane .buttonLine .file-upload:hover {\n            opacity: 1.0; }\n          #actionTabs .tabs .panes .pane .buttonLine .file-upload:active {\n            transform: scale(0.98);\n            transform-origin: 0.5 0.5; }\n          #actionTabs .tabs .panes .pane .buttonLine button {\n            background: #222222;\n            border: 1px solid #337ab7;\n            margin: 5px 10px 5px 10px;\n            color: white;\n            padding: 4px 5px;\n            opacity: 0.9; }\n          #actionTabs .tabs .panes .pane .buttonLine button:hover {\n            opacity: 1.0; }\n          #actionTabs .tabs .panes .pane .buttonLine button:active {\n            background: #282828; }\n          #actionTabs .tabs .panes .pane .buttonLine button:focus {\n            border: 1px solid #337ab7;\n            outline: 0px; }\n        #actionTabs .tabs .panes .pane .radioLine {\n          padding-left: 2px;\n          height: 30px;\n          display: grid;\n          grid-template-columns: 1fr 24px; }\n          #actionTabs .tabs .panes .pane .radioLine .label {\n            grid-column: 1;\n            display: flex;\n            align-items: center; }\n          #actionTabs .tabs .panes .pane .radioLine .radioContainer {\n            display: flex;\n            align-items: center; }\n            #actionTabs .tabs .panes .pane .radioLine .radioContainer .radio {\n              grid-column: 2;\n              display: none; }\n              #actionTabs .tabs .panes .pane .radioLine .radioContainer .radio:checked + label:before {\n                border-color: #337ab7; }\n              #actionTabs .tabs .panes .pane .radioLine .radioContainer .radio:checked + label:after {\n                transform: scale(1); }\n            #actionTabs .tabs .panes .pane .radioLine .radioContainer .labelForRadio {\n              display: inline-block;\n              height: 14px;\n              position: relative;\n              padding: 0 24px;\n              margin-bottom: 0;\n              cursor: pointer;\n              vertical-align: bottom; }\n              #actionTabs .tabs .panes .pane .radioLine .radioContainer .labelForRadio:before, #actionTabs .tabs .panes .pane .radioLine .radioContainer .labelForRadio:after {\n                position: absolute;\n                content: \'\';\n                border-radius: 50%;\n                transition: all .3s ease;\n                transition-property: transform, border-color; }\n              #actionTabs .tabs .panes .pane .radioLine .radioContainer .labelForRadio:before {\n                left: 0px;\n                top: 0;\n                width: 16px;\n                height: 16px;\n                border: 2px solid white; }\n              #actionTabs .tabs .panes .pane .radioLine .radioContainer .labelForRadio:after {\n                top: 6px;\n                left: 6px;\n                width: 8px;\n                height: 8px;\n                transform: scale(0);\n                background: #337ab7; }\n        #actionTabs .tabs .panes .pane .vector3Line {\n          padding-left: 2px;\n          display: grid; }\n          #actionTabs .tabs .panes .pane .vector3Line .firstLine {\n            display: grid;\n            grid-template-columns: 1fr auto 20px;\n            height: 30px; }\n            #actionTabs .tabs .panes .pane .vector3Line .firstLine .label {\n              grid-column: 1;\n              display: flex;\n              align-items: center; }\n            #actionTabs .tabs .panes .pane .vector3Line .firstLine .vector {\n              grid-column: 2;\n              display: flex;\n              align-items: center;\n              text-align: right;\n              opacity: 0.8; }\n            #actionTabs .tabs .panes .pane .vector3Line .firstLine .expand {\n              grid-column: 3;\n              display: grid;\n              align-items: center;\n              justify-items: center;\n              cursor: pointer; }\n          #actionTabs .tabs .panes .pane .vector3Line .secondLine {\n            display: grid;\n            padding-right: 5px;\n            border-left: 1px solid #337ab7; }\n            #actionTabs .tabs .panes .pane .vector3Line .secondLine .numeric {\n              display: grid;\n              grid-template-columns: 1fr auto; }\n            #actionTabs .tabs .panes .pane .vector3Line .secondLine .numeric-label {\n              text-align: right;\n              grid-column: 1;\n              display: flex;\n              align-items: center;\n              justify-self: right;\n              margin-right: 10px; }\n            #actionTabs .tabs .panes .pane .vector3Line .secondLine .numeric-value {\n              width: 120px;\n              grid-column: 2;\n              display: flex;\n              align-items: center;\n              border: 1px solid #337ab7; }\n        #actionTabs .tabs .panes .pane .checkBoxLine {\n          padding-left: 2px;\n          height: 30px;\n          display: grid;\n          grid-template-columns: 1fr auto; }\n          #actionTabs .tabs .panes .pane .checkBoxLine .label {\n            grid-column: 1;\n            display: flex;\n            align-items: center; }\n          #actionTabs .tabs .panes .pane .checkBoxLine .checkBox {\n            grid-column: 2;\n            display: flex;\n            align-items: center; }\n            #actionTabs .tabs .panes .pane .checkBoxLine .checkBox .lbl {\n              position: relative;\n              display: block;\n              height: 14px;\n              width: 34px;\n              margin-right: 5px;\n              background: #898989;\n              border-radius: 100px;\n              cursor: pointer;\n              transition: all 0.3s ease; }\n            #actionTabs .tabs .panes .pane .checkBoxLine .checkBox .lbl:after {\n              position: absolute;\n              left: 3px;\n              top: 2px;\n              display: block;\n              width: 10px;\n              height: 10px;\n              border-radius: 100px;\n              background: #fff;\n              box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05);\n              content: \'\';\n              transition: all 0.15s ease; }\n            #actionTabs .tabs .panes .pane .checkBoxLine .checkBox .lbl:active:after {\n              transform: scale(1.15, 0.85); }\n            #actionTabs .tabs .panes .pane .checkBoxLine .checkBox .cbx:checked ~ label {\n              background: #337ab7; }\n            #actionTabs .tabs .panes .pane .checkBoxLine .checkBox .cbx:checked ~ label:after {\n              left: 20px;\n              background: #164975; }\n            #actionTabs .tabs .panes .pane .checkBoxLine .checkBox .hidden {\n              display: none; }\n        #actionTabs .tabs .panes .pane .textureLine {\n          display: grid;\n          grid-template-rows: 30px auto; }\n          #actionTabs .tabs .panes .pane .textureLine .control {\n            margin-top: 2px;\n            grid-row: 1;\n            display: grid;\n            grid-template-columns: 1fr 40px 40px 40px 40px 40px 1fr; }\n            #actionTabs .tabs .panes .pane .textureLine .control .red {\n              grid-column: 2; }\n            #actionTabs .tabs .panes .pane .textureLine .control .green {\n              grid-column: 3; }\n            #actionTabs .tabs .panes .pane .textureLine .control .blue {\n              grid-column: 4; }\n            #actionTabs .tabs .panes .pane .textureLine .control .alpha {\n              grid-column: 5; }\n            #actionTabs .tabs .panes .pane .textureLine .control .all {\n              grid-column: 6; }\n          #actionTabs .tabs .panes .pane .textureLine .control3D {\n            margin-top: 2px;\n            grid-row: 1;\n            display: grid;\n            grid-template-columns: 1fr 40px 40px 40px 40px 40px 40px 1fr; }\n            #actionTabs .tabs .panes .pane .textureLine .control3D .px {\n              grid-column: 2; }\n            #actionTabs .tabs .panes .pane .textureLine .control3D .nx {\n              grid-column: 3; }\n            #actionTabs .tabs .panes .pane .textureLine .control3D .py {\n              grid-column: 4; }\n            #actionTabs .tabs .panes .pane .textureLine .control3D .ny {\n              grid-column: 5; }\n            #actionTabs .tabs .panes .pane .textureLine .control3D .pz {\n              grid-column: 6; }\n            #actionTabs .tabs .panes .pane .textureLine .control3D .nz {\n              grid-column: 7; }\n          #actionTabs .tabs .panes .pane .textureLine .command {\n            border: 1px solid transparent;\n            background: transparent;\n            color: white; }\n          #actionTabs .tabs .panes .pane .textureLine .selected {\n            border: 1px solid #337ab7; }\n          #actionTabs .tabs .panes .pane .textureLine .preview {\n            grid-row: 2;\n            display: grid;\n            align-self: center;\n            justify-self: center;\n            height: 256px;\n            width: 256px;\n            margin-top: 5px;\n            margin-bottom: 5px;\n            border: 2px solid rgba(255, 255, 255, 0.4); }\n        #actionTabs .tabs .panes .pane .gltf-extension-property {\n          margin-left: 30px;\n          border-left: 1px solid #337ab7; }\n        #actionTabs .tabs .panes .pane .floatLine {\n          padding-left: 2px;\n          height: 30px;\n          display: grid;\n          grid-template-columns: 1fr 120px; }\n          #actionTabs .tabs .panes .pane .floatLine .label {\n            grid-column: 1;\n            display: flex;\n            align-items: center; }\n          #actionTabs .tabs .panes .pane .floatLine .value {\n            grid-column: 2;\n            display: flex;\n            align-items: center; }\n            #actionTabs .tabs .panes .pane .floatLine .value input {\n              width: 110px; }\n        #actionTabs .tabs .panes .pane .sliderLine {\n          padding-left: 2px;\n          height: 30px;\n          display: grid;\n          grid-template-columns: 1fr auto; }\n          #actionTabs .tabs .panes .pane .sliderLine .label {\n            grid-column: 1;\n            display: flex;\n            align-items: center; }\n          #actionTabs .tabs .panes .pane .sliderLine .slider {\n            grid-column: 2;\n            margin-right: 5px;\n            display: flex;\n            align-items: center; }\n            #actionTabs .tabs .panes .pane .sliderLine .slider .range {\n              -webkit-appearance: none;\n              width: 120px;\n              height: 6px;\n              background: #d3d3d3;\n              border-radius: 5px;\n              outline: none;\n              opacity: 0.7;\n              -webkit-transition: .2s;\n              transition: opacity .2s; }\n            #actionTabs .tabs .panes .pane .sliderLine .slider .range:hover {\n              opacity: 1; }\n            #actionTabs .tabs .panes .pane .sliderLine .slider .range::-webkit-slider-thumb {\n              -webkit-appearance: none;\n              appearance: none;\n              width: 14px;\n              height: 14px;\n              border-radius: 50%;\n              background: #337ab7;\n              cursor: pointer; }\n            #actionTabs .tabs .panes .pane .sliderLine .slider .range::-moz-range-thumb {\n              width: 14px;\n              height: 14px;\n              border-radius: 50%;\n              background: #337ab7;\n              cursor: pointer; }\n        #actionTabs .tabs .panes .pane .color3Line {\n          padding-left: 2px;\n          display: grid; }\n          #actionTabs .tabs .panes .pane .color3Line .firstLine {\n            height: 30px;\n            display: grid;\n            grid-template-columns: 1fr auto 20px 20px; }\n            #actionTabs .tabs .panes .pane .color3Line .firstLine .label {\n              grid-column: 1;\n              display: flex;\n              align-items: center; }\n            #actionTabs .tabs .panes .pane .color3Line .firstLine .color3 {\n              grid-column: 2;\n              display: flex;\n              align-items: center; }\n              #actionTabs .tabs .panes .pane .color3Line .firstLine .color3 input[type="color"] {\n                -webkit-appearance: none;\n                border: 1px solid rgba(255, 255, 255, 0.5);\n                padding: 0;\n                width: 30px;\n                height: 20px; }\n              #actionTabs .tabs .panes .pane .color3Line .firstLine .color3 input[type="color"]::-webkit-color-swatch-wrapper {\n                padding: 0; }\n              #actionTabs .tabs .panes .pane .color3Line .firstLine .color3 input[type="color"]::-webkit-color-swatch {\n                border: none; }\n              #actionTabs .tabs .panes .pane .color3Line .firstLine .color3 input {\n                margin-right: 5px; }\n            #actionTabs .tabs .panes .pane .color3Line .firstLine .copy {\n              grid-column: 3;\n              display: grid;\n              align-items: center;\n              justify-items: center;\n              cursor: pointer; }\n            #actionTabs .tabs .panes .pane .color3Line .firstLine .expand {\n              grid-column: 4;\n              display: grid;\n              align-items: center;\n              justify-items: center;\n              cursor: pointer; }\n          #actionTabs .tabs .panes .pane .color3Line .secondLine {\n            display: grid;\n            padding-right: 5px;\n            border-left: 1px solid #337ab7; }\n            #actionTabs .tabs .panes .pane .color3Line .secondLine .numeric {\n              display: grid;\n              grid-template-columns: 1fr auto; }\n            #actionTabs .tabs .panes .pane .color3Line .secondLine .numeric-label {\n              text-align: right;\n              grid-column: 1;\n              display: flex;\n              align-items: center;\n              justify-self: right;\n              margin-right: 10px; }\n            #actionTabs .tabs .panes .pane .color3Line .secondLine .numeric-value {\n              width: 120px;\n              grid-column: 2;\n              display: flex;\n              align-items: center;\n              border: 1px solid #337ab7; }\n        #actionTabs .tabs .panes .pane .listLine {\n          padding-left: 2px;\n          height: 30px;\n          display: grid;\n          grid-template-columns: 1fr auto; }\n          #actionTabs .tabs .panes .pane .listLine .label {\n            grid-column: 1;\n            display: flex;\n            align-items: center; }\n          #actionTabs .tabs .panes .pane .listLine .options {\n            grid-column: 2;\n            display: flex;\n            align-items: center;\n            margin-right: 5px; }\n            #actionTabs .tabs .panes .pane .listLine .options select {\n              width: 115px; }\n        #actionTabs .tabs .panes .pane .paneContainer {\n          margin-top: 3px;\n          display: grid;\n          grid-template-rows: 100%;\n          grid-template-columns: 100%; }\n          #actionTabs .tabs .panes .pane .paneContainer .paneList {\n            border-left: 3px solid transparent; }\n          #actionTabs .tabs .panes .pane .paneContainer:hover .paneList {\n            border-left: 3px solid rgba(51, 122, 183, 0.8); }\n          #actionTabs .tabs .panes .pane .paneContainer:hover .paneContainer-content .header .title {\n            border-left: 3px solid #337ab7; }\n          #actionTabs .tabs .panes .pane .paneContainer .paneContainer-highlight-border {\n            grid-row: 1;\n            grid-column: 1;\n            opacity: 1;\n            border: 3px solid red;\n            transition: opacity 250ms;\n            pointer-events: none; }\n            #actionTabs .tabs .panes .pane .paneContainer .paneContainer-highlight-border.transparent {\n              opacity: 0; }\n          #actionTabs .tabs .panes .pane .paneContainer .paneContainer-content {\n            grid-row: 1;\n            grid-column: 1; }\n            #actionTabs .tabs .panes .pane .paneContainer .paneContainer-content .header {\n              display: grid;\n              grid-template-columns: 1fr auto;\n              background: #555555;\n              height: 30px;\n              padding-right: 5px;\n              cursor: pointer; }\n              #actionTabs .tabs .panes .pane .paneContainer .paneContainer-content .header .title {\n                border-left: 3px solid transparent;\n                padding-left: 5px;\n                grid-column: 1;\n                display: flex;\n                align-items: center; }\n              #actionTabs .tabs .panes .pane .paneContainer .paneContainer-content .header .collapse {\n                grid-column: 2;\n                display: flex;\n                align-items: center;\n                justify-items: center;\n                transform-origin: center; }\n                #actionTabs .tabs .panes .pane .paneContainer .paneContainer-content .header .collapse.closed {\n                  transform: rotate(180deg); }\n            #actionTabs .tabs .panes .pane .paneContainer .paneContainer-content .paneList > div:not(:last-child) {\n              border-bottom: 0.5px solid rgba(255, 255, 255, 0.1); }\n            #actionTabs .tabs .panes .pane .paneContainer .paneContainer-content .fragment > div:not(:last-child) {\n              border-bottom: 0.5px solid rgba(255, 255, 255, 0.1); }\n', ""])
    }, function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
                r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var a, o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (a = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")")
            })
        }
    }, function(e, t, n) {
        var r = n(31);
        "string" == typeof r && (r = [
            [e.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(13)(r, a);
        r.locals && (e.exports = r.locals)
    }, function(e, t, n) {
        (e.exports = n(12)(!1)).push([e.i, '#scene-explorer-host {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  bottom: 0px; }\n  #scene-explorer-host:focus {\n    outline: none; }\n\n#__resizable_base__ {\n  display: none; }\n\n.context-menu {\n  background: #222222; }\n  .context-menu .react-contextmenu-item {\n    padding: 10px;\n    cursor: pointer; }\n    .context-menu .react-contextmenu-item:hover {\n      background: #555555; }\n\n.react-contextmenu.context-menu.react-contextmenu--visible {\n  z-index: 99;\n  transform: scale(1); }\n\n#sceneExplorer {\n  background: #333333;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  font: 14px "Arial"; }\n  #sceneExplorer:focus {\n    outline: none; }\n  #sceneExplorer #header {\n    height: 30px;\n    font-size: 16px;\n    color: white;\n    background: #222222;\n    grid-row: 1;\n    text-align: center;\n    display: grid;\n    grid-template-columns: 30px 1fr 50px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    #sceneExplorer #header #logo {\n      position: relative;\n      grid-column: 1;\n      width: 24px;\n      height: 24px;\n      left: 0;\n      display: flex;\n      align-self: center;\n      justify-self: center; }\n    #sceneExplorer #header #title {\n      grid-column: 2;\n      display: grid;\n      align-items: center;\n      text-align: center; }\n    #sceneExplorer #header #commands {\n      grid-column: 3;\n      display: grid;\n      align-items: center;\n      grid-template-columns: 1fr 1fr; }\n      #sceneExplorer #header #commands .expand {\n        grid-column: 1;\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        cursor: pointer; }\n      #sceneExplorer #header #commands .close {\n        grid-column: 2;\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        cursor: pointer; }\n  #sceneExplorer #tree {\n    grid-row: 2;\n    overflow-x: hidden;\n    overflow-y: auto; }\n  #sceneExplorer .filter {\n    display: flex;\n    align-items: stretch; }\n    #sceneExplorer .filter input {\n      width: 100%;\n      margin: 10px 40px 5px 40px;\n      display: block;\n      border: none;\n      padding: 0;\n      border-bottom: solid 1px #337ab7;\n      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #337ab7 4%);\n      background-position: -1000px 0;\n      background-size: 1000px 100%;\n      background-repeat: no-repeat;\n      color: white; }\n    #sceneExplorer .filter input:focus {\n      box-shadow: none;\n      outline: none;\n      background-position: 0 0; }\n  #sceneExplorer .groupContainer {\n    margin-left: 0px;\n    color: white;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    height: 24px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    align-self: center;\n    display: grid;\n    align-items: center; }\n    #sceneExplorer .groupContainer:hover {\n      background: #444444; }\n    #sceneExplorer .groupContainer .expandableHeader {\n      display: grid;\n      grid-template-columns: 1fr 20px; }\n      #sceneExplorer .groupContainer .expandableHeader .text {\n        grid-column: 1;\n        display: grid;\n        grid-template-columns: 20px 1fr; }\n        #sceneExplorer .groupContainer .expandableHeader .text .arrow {\n          grid-column: 1;\n          margin-left: 0px;\n          color: white;\n          cursor: pointer;\n          display: inline-block;\n          margin-right: 6px;\n          opacity: 0.5; }\n        #sceneExplorer .groupContainer .expandableHeader .text .text-value {\n          grid-column: 2;\n          display: flex;\n          align-items: center; }\n      #sceneExplorer .groupContainer .expandableHeader .expandAll {\n        opacity: 0.5;\n        grid-column: 2;\n        margin-right: 10px; }\n  #sceneExplorer .icon {\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    cursor: pointer; }\n  #sceneExplorer .itemContainer {\n    margin-left: 0px;\n    color: white;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    height: 24px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    display: grid;\n    grid-template-columns: 20px 1fr; }\n    #sceneExplorer .itemContainer:hover {\n      background: #444444; }\n    #sceneExplorer .itemContainer.selected {\n      background: #bbbbbb;\n      color: black; }\n    #sceneExplorer .itemContainer .isNotActive {\n      opacity: 0.3; }\n    #sceneExplorer .itemContainer .arrow {\n      grid-column: 1;\n      color: white;\n      opacity: 0.6; }\n    #sceneExplorer .itemContainer .popup {\n      width: 200px;\n      visibility: hidden;\n      background-color: #444444;\n      color: #fff;\n      border: 1px solid rgba(255, 255, 255, 0.5);\n      position: absolute;\n      z-index: 1;\n      margin-left: -180px;\n      box-sizing: border-box; }\n      #sceneExplorer .itemContainer .popup.show {\n        visibility: visible; }\n      #sceneExplorer .itemContainer .popup:focus {\n        outline: none; }\n      #sceneExplorer .itemContainer .popup .popupMenu {\n        padding: 6px 5px 5px 10px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        height: 18px; }\n        #sceneExplorer .itemContainer .popup .popupMenu:hover {\n          background: white;\n          color: #333333; }\n    #sceneExplorer .itemContainer .sceneNode {\n      grid-column: 2;\n      margin-left: -10px;\n      display: grid;\n      grid-template-columns: 1fr 20px 20px 20px 20px 10px 20px 20px auto 5px;\n      align-items: center;\n      cursor: pointer; }\n      #sceneExplorer .itemContainer .sceneNode .sceneTitle {\n        grid-column: 1;\n        margin-right: 5px;\n        display: flex;\n        align-items: center;\n        height: 24px; }\n      #sceneExplorer .itemContainer .sceneNode .translation {\n        grid-column: 2;\n        opacity: 0.6; }\n        #sceneExplorer .itemContainer .sceneNode .translation.selected {\n          opacity: 1; }\n      #sceneExplorer .itemContainer .sceneNode .rotation {\n        grid-column: 3;\n        opacity: 0.6; }\n        #sceneExplorer .itemContainer .sceneNode .rotation.selected {\n          opacity: 1; }\n      #sceneExplorer .itemContainer .sceneNode .scaling {\n        grid-column: 4;\n        opacity: 0.6; }\n        #sceneExplorer .itemContainer .sceneNode .scaling.selected {\n          opacity: 1; }\n      #sceneExplorer .itemContainer .sceneNode .bounding {\n        grid-column: 5;\n        opacity: 0.6; }\n        #sceneExplorer .itemContainer .sceneNode .bounding.selected {\n          opacity: 1; }\n      #sceneExplorer .itemContainer .sceneNode .separator {\n        grid-column: 6;\n        margin-left: 5px;\n        width: 5px;\n        display: flex;\n        align-items: center;\n        height: 18px;\n        border-left: solid 1px #337ab7; }\n      #sceneExplorer .itemContainer .sceneNode .pickingMode {\n        grid-column: 7;\n        opacity: 0.6; }\n        #sceneExplorer .itemContainer .sceneNode .pickingMode.selected {\n          opacity: 1; }\n      #sceneExplorer .itemContainer .sceneNode .refresh {\n        grid-column: 8; }\n      #sceneExplorer .itemContainer .sceneNode .extensions {\n        width: 20px;\n        grid-column: 9; }\n    #sceneExplorer .itemContainer .animationGroupTools {\n      grid-column: 2;\n      width: 100%;\n      display: grid;\n      grid-template-columns: 1fr auto 5px;\n      align-items: center;\n      min-width: 0; }\n      #sceneExplorer .itemContainer .animationGroupTools .extensions {\n        width: 20px;\n        grid-column: 2; }\n    #sceneExplorer .itemContainer .meshTools {\n      grid-column: 2;\n      width: 100%;\n      display: grid;\n      grid-template-columns: 1fr 20px 20px auto 5px;\n      align-items: center;\n      min-width: 0; }\n      #sceneExplorer .itemContainer .meshTools .bounding-box {\n        grid-column: 2;\n        opacity: 0.5; }\n        #sceneExplorer .itemContainer .meshTools .bounding-box.selected {\n          opacity: 1; }\n      #sceneExplorer .itemContainer .meshTools .visibility {\n        grid-column: 3; }\n      #sceneExplorer .itemContainer .meshTools .extensions {\n        width: 20px;\n        grid-column: 4; }\n    #sceneExplorer .itemContainer .cameraTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr 20px auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .cameraTools .activeCamera {\n        grid-column: 2; }\n      #sceneExplorer .itemContainer .cameraTools .extensions {\n        width: 20px;\n        grid-column: 3; }\n    #sceneExplorer .itemContainer .lightTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr 20px 20px auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .lightTools .enableLight {\n        grid-column: 2; }\n      #sceneExplorer .itemContainer .lightTools .extensions {\n        width: 20px;\n        grid-column: 3; }\n    #sceneExplorer .itemContainer .materialTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .materialTools .extensions {\n        width: 20px;\n        grid-column: 2; }\n    #sceneExplorer .itemContainer .postProcessTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .postProcessTools .extensions {\n        width: 20px;\n        grid-column: 2; }\n    #sceneExplorer .itemContainer .renderingPipelineTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .renderingPipelineTools .extensions {\n        width: 20px;\n        grid-column: 2; }\n    #sceneExplorer .itemContainer .textureTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .textureTools .extensions {\n        width: 20px;\n        grid-column: 2; }\n    #sceneExplorer .itemContainer .adtextureTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr 20px auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .adtextureTools .pickingMode {\n        grid-column: 2;\n        opacity: 0.6; }\n        #sceneExplorer .itemContainer .adtextureTools .pickingMode.selected {\n          opacity: 1; }\n      #sceneExplorer .itemContainer .adtextureTools .extensions {\n        width: 20px;\n        grid-column: 3; }\n    #sceneExplorer .itemContainer .controlTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr 20px 20px auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .controlTools .highlight {\n        grid-column: 2; }\n      #sceneExplorer .itemContainer .controlTools .visibility {\n        grid-column: 3; }\n      #sceneExplorer .itemContainer .controlTools .extensions {\n        width: 20px;\n        grid-column: 4; }\n    #sceneExplorer .itemContainer .transformNodeTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .transformNodeTools .extensions {\n        width: 20px;\n        grid-column: 2; }\n    #sceneExplorer .itemContainer .skeletonTools {\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: 1fr auto 5px;\n      align-items: center; }\n      #sceneExplorer .itemContainer .skeletonTools .extensions {\n        width: 20px;\n        grid-column: 2; }\n    #sceneExplorer .itemContainer .title {\n      grid-column: 1;\n      background: transparent;\n      white-space: nowrap;\n      overflow: hidden;\n      min-width: 0;\n      margin-right: 5px;\n      display: grid;\n      align-items: center;\n      grid-template-columns: 25px 1fr;\n      height: 24px;\n      cursor: pointer; }\n      #sceneExplorer .itemContainer .title .titleIcon {\n        grid-column: 1;\n        display: grid;\n        align-items: center;\n        justify-items: center; }\n      #sceneExplorer .itemContainer .title .titleText {\n        grid-column: 2;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n', ""])
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var r = window,
            a = r.document,
            o = "addEventListener",
            i = "removeEventListener",
            l = "getBoundingClientRect",
            s = "_a",
            p = "_b",
            c = "_c",
            u = "horizontal",
            d = function() {
                return !1
            },
            h = r.attachEvent && !r[o],
            b = ["", "-webkit-", "-moz-", "-o-"].filter(function(e) {
                var t = a.createElement("div");
                return t.style.cssText = "width:" + e + "calc(9px)", !!t.style.length
            }).shift() + "calc",
            m = function(e) {
                return "string" == typeof e || e instanceof String
            },
            f = function(e) {
                if (m(e)) {
                    var t = a.querySelector(e);
                    if (!t) throw new Error("Selector " + e + " did not match a DOM element");
                    return t
                }
                return e
            },
            g = function(e, t, n) {
                var r = e[t];
                return void 0 !== r ? r : n
            },
            v = function(e, t, n, r) {
                if (t) {
                    if ("end" === r) return 0;
                    if ("center" === r) return e / 2
                } else if (n) {
                    if ("start" === r) return 0;
                    if ("center" === r) return e / 2
                }
                return e
            },
            y = function(e, t) {
                var n = a.createElement("div");
                return n.className = "gutter gutter-" + t, n
            },
            C = function(e, t, n) {
                var r = {};
                return m(t) ? r[e] = t : r[e] = h ? t + "%" : b + "(" + t + "% - " + n + "px)", r
            },
            E = function(e, t) {
                var n;
                return (n = {})[e] = t + "px", n
            };
        t.default = function(e, t) {
            void 0 === t && (t = {});
            var n, b, m, O, S, x, P = e;
            Array.from && (P = Array.from(P));
            var k = f(P[0]).parentNode,
                T = getComputedStyle ? getComputedStyle(k) : null,
                N = T ? T.flexDirection : null,
                w = g(t, "sizes") || P.map(function() {
                    return 100 / P.length
                }),
                _ = g(t, "minSize", 100),
                M = Array.isArray(_) ? _ : P.map(function() {
                    return _
                }),
                L = g(t, "expandToMin", !1),
                R = g(t, "gutterSize", 10),
                A = g(t, "gutterAlign", "center"),
                I = g(t, "snapOffset", 30),
                j = g(t, "dragInterval", 1),
                D = g(t, "direction", u),
                z = g(t, "cursor", D === u ? "col-resize" : "row-resize"),
                F = g(t, "gutter", y),
                U = g(t, "elementStyle", C),
                G = g(t, "gutterStyle", E);

            function H(e, t, r, a) {
                var o = U(n, t, r, a);
                Object.keys(o).forEach(function(t) {
                    e.style[t] = o[t]
                })
            }

            function V() {
                return x.map(function(e) {
                    return e.size
                })
            }

            function B(e) {
                return "touches" in e ? e.touches[0][b] : e[b]
            }

            function W(e) {
                var t = x[this.a],
                    n = x[this.b],
                    r = t.size + n.size;
                t.size = e / this.size * r, n.size = r - e / this.size * r, H(t.element, t.size, this[p], t.i), H(n.element, n.size, this[c], n.i)
            }

            function Y() {
                var e = x[this.a].element,
                    t = x[this.b].element,
                    r = e[l](),
                    a = t[l]();
                this.size = r[n] + a[n] + this[p] + this[c], this.start = r[m], this.end = r[O]
            }

            function X(e) {
                var t = function(e) {
                    if (!getComputedStyle) return null;
                    var t = getComputedStyle(e);
                    if (!t) return null;
                    var n = e[S];
                    return 0 === n ? null : n -= D === u ? parseFloat(t.paddingLeft) + parseFloat(t.paddingRight) : parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)
                }(k);
                if (null === t) return e;
                if (M.reduce(function(e, t) {
                        return e + t
                    }, 0) > t) return e;
                var n = 0,
                    r = [],
                    a = e.map(function(a, o) {
                        var i = t * a / 100,
                            l = v(R, 0 === o, o === e.length - 1, A),
                            s = M[o] + l;
                        return i < s ? (n += s - i, r.push(0), s) : (r.push(i - s), i)
                    });
                return 0 === n ? e : a.map(function(e, a) {
                    var o = e;
                    if (n > 0 && r[a] - n > 0) {
                        var i = Math.min(n, r[a] - n);
                        n -= i, o = e - i
                    }
                    return o / t * 100
                })
            }

            function K(e) {
                if (!("button" in e && 0 !== e.button)) {
                    var n = x[this.a].element,
                        l = x[this.b].element;
                    this.dragging || g(t, "onDragStart", d)(V()), e.preventDefault(), this.dragging = !0, this.move = function(e) {
                        var n, r = x[this.a],
                            a = x[this.b];
                        this.dragging && (n = B(e) - this.start + (this[p] - this.dragOffset), j > 1 && (n = Math.round(n / j) * j), n <= r.minSize + I + this[p] ? n = r.minSize + this[p] : n >= this.size - (a.minSize + I + this[c]) && (n = this.size - (a.minSize + this[c])), W.call(this, n), g(t, "onDrag", d)())
                    }.bind(this), this.stop = function() {
                        var e = x[this.a].element,
                            n = x[this.b].element;
                        this.dragging && g(t, "onDragEnd", d)(V()), this.dragging = !1, r[i]("mouseup", this.stop), r[i]("touchend", this.stop), r[i]("touchcancel", this.stop), r[i]("mousemove", this.move), r[i]("touchmove", this.move), this.stop = null, this.move = null, e[i]("selectstart", d), e[i]("dragstart", d), n[i]("selectstart", d), n[i]("dragstart", d), e.style.userSelect = "", e.style.webkitUserSelect = "", e.style.MozUserSelect = "", e.style.pointerEvents = "", n.style.userSelect = "", n.style.webkitUserSelect = "", n.style.MozUserSelect = "", n.style.pointerEvents = "", this.gutter.style.cursor = "", this.parent.style.cursor = "", a.body.style.cursor = ""
                    }.bind(this), r[o]("mouseup", this.stop), r[o]("touchend", this.stop), r[o]("touchcancel", this.stop), r[o]("mousemove", this.move), r[o]("touchmove", this.move), n[o]("selectstart", d), n[o]("dragstart", d), l[o]("selectstart", d), l[o]("dragstart", d), n.style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.MozUserSelect = "none", n.style.pointerEvents = "none", l.style.userSelect = "none", l.style.webkitUserSelect = "none", l.style.MozUserSelect = "none", l.style.pointerEvents = "none", this.gutter.style.cursor = z, this.parent.style.cursor = z, a.body.style.cursor = z, Y.call(this), this.dragOffset = B(e) - this.end
                }
            }
            D === u ? (n = "width", b = "clientX", m = "left", O = "right", S = "clientWidth") : "vertical" === D && (n = "height", b = "clientY", m = "top", O = "bottom", S = "clientHeight"), w = X(w);
            var q = [];

            function Q(e) {
                var t = e.i === q.length,
                    n = t ? q[e.i - 1] : q[e.i];
                Y.call(n);
                var r = t ? n.size - e.minSize - n[c] : e.minSize + n[p];
                W.call(n, r)
            }

            function $(e) {
                var t = X(e);
                t.forEach(function(e, n) {
                    if (n > 0) {
                        var r = q[n - 1],
                            a = x[r.a],
                            o = x[r.b];
                        a.size = t[n - 1], o.size = e, H(a.element, a.size, r[p], a.i), H(o.element, o.size, r[c], o.i)
                    }
                })
            }

            function Z(e, t) {
                q.forEach(function(r) {
                    if (!0 !== t ? r.parent.removeChild(r.gutter) : (r.gutter[i]("mousedown", r[s]), r.gutter[i]("touchstart", r[s])), !0 !== e) {
                        var a = U(n, r.a.size, r[p]);
                        Object.keys(a).forEach(function(e) {
                            x[r.a].element.style[e] = "", x[r.b].element.style[e] = ""
                        })
                    }
                })
            }
            return (x = P.map(function(e, t) {
                var r, a = {
                    element: f(e),
                    size: w[t],
                    minSize: M[t],
                    i: t
                };
                if (t > 0 && ((r = {
                        a: t - 1,
                        b: t,
                        dragging: !1,
                        direction: D,
                        parent: k
                    })[p] = v(R, t - 1 == 0, !1, A), r[c] = v(R, !1, t === P.length - 1, A), "row-reverse" === N || "column-reverse" === N)) {
                    var i = r.a;
                    r.a = r.b, r.b = i
                }
                if (!h && t > 0) {
                    var l = F(t, D, a.element);
                    ! function(e, t, r) {
                        var a = G(n, t, r);
                        Object.keys(a).forEach(function(t) {
                            e.style[t] = a[t]
                        })
                    }(l, R, t), r[s] = K.bind(r), l[o]("mousedown", r[s]), l[o]("touchstart", r[s]), k.insertBefore(l, a.element), r.gutter = l
                }
                return H(a.element, a.size, v(R, 0 === t, t === P.length - 1, A), t), t > 0 && q.push(r), a
            })).forEach(function(e) {
                var t = e.element[l]()[n];
                t < e.minSize && (L ? Q(e) : e.minSize = t)
            }), h ? {
                setSizes: $,
                destroy: Z
            } : {
                setSizes: $,
                getSizes: V,
                collapse: function(e) {
                    Q(x[e])
                },
                destroy: Z,
                parent: k,
                pairs: q
            }
        }
    }, function(e, t, n) {
        var r = n(34);
        "string" == typeof r && (r = [
            [e.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(13)(r, a);
        r.locals && (e.exports = r.locals)
    }, function(e, t, n) {
        (e.exports = n(12)(!1)).push([e.i, '#embed-host {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  bottom: 0px; }\n\n#__resizable_base__ {\n  display: none; }\n\n#embed {\n  background: #333333;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-rows: 30px 1fr;\n  font: 14px "Arial";\n  overflow: hidden; }\n  #embed #header {\n    font-size: 16px;\n    color: white;\n    background: #222222;\n    grid-row: 1;\n    text-align: center;\n    display: grid;\n    grid-template-columns: 30px 1fr 50px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    #embed #header #logo {\n      grid-column: 1;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      align-self: center;\n      justify-self: center; }\n    #embed #header #back {\n      grid-column: 1;\n      display: grid;\n      align-self: center;\n      justify-self: center;\n      cursor: pointer; }\n    #embed #header #title {\n      grid-column: 2;\n      display: grid;\n      align-items: center;\n      text-align: center; }\n    #embed #header #commands {\n      grid-column: 3;\n      display: grid;\n      align-items: center;\n      grid-template-columns: 1fr 1fr; }\n      #embed #header #commands .expand {\n        grid-column: 1;\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        cursor: pointer; }\n      #embed #header #commands .close {\n        grid-column: 2;\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        cursor: pointer; }\n  #embed #split {\n    grid-row: 2;\n    overflow: hidden; }\n    #embed #split.splitPopup {\n      display: grid;\n      grid-template-rows: 300px 2px 1fr; }\n      #embed #split.splitPopup .panes {\n        margin-bottom: 1px; }\n    #embed #split #topPart {\n      grid-row: 1;\n      overflow: hidden;\n      display: grid;\n      grid-auto-rows: 100%; }\n    #embed #split #separator {\n      grid-row: 2;\n      background: white;\n      opacity: 0.1; }\n    #embed #split #bottomPart {\n      overflow: hidden;\n      grid-row: 3;\n      display: grid;\n      grid-auto-rows: 100%; }\n    #embed #split .gutter.gutter-vertical {\n      background-image: none;\n      background: #444444;\n      cursor: row-resize; }\n', ""])
    }])
});