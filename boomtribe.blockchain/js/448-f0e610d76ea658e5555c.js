"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [448], {
        486: function(e, t, r) {
            var a = r(2809),
                n = r(219),
                s = (r(7294), r(1340)),
                l = r(5893),
                o = ["className", "loading", "variant", "size", "type", "children", "disabled", "onClick"];

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var d = function(e) {
                var t = e.className,
                    r = e.loading,
                    a = e.variant,
                    i = e.size,
                    d = e.type,
                    x = e.children,
                    f = e.disabled,
                    u = e.onClick,
                    h = (0, n.Z)(e, o),
                    p = s.Xd + " " + (!0 === f ? s.ab : s.Wu[a]) + " " + s.qE[i] + " " + t;
                return (0, l.jsxs)("button", c(c({
                    onClick: function(e) {
                        f || r || u && u(e)
                    },
                    className: p,
                    disabled: f,
                    type: d,
                    "aria-label": d
                }, h), {}, {
                    children: [!r && x, r && (0, l.jsx)("div", {
                        className: "h-5 w-5 border-3px border-gray-800 border-t-3px rounded-full animate-spin",
                        style: {
                            borderTopColor: "#f1f1f1"
                        }
                    })]
                }))
            };
            d.defaultProps = {
                variant: "primary",
                size: "normal",
                type: "button",
                loading: !1,
                disabled: !1
            }, t.Z = d
        },
        1340: function(e, t, r) {
            r.d(t, {
                Xd: function() {
                    return a
                },
                Wu: function() {
                    return n
                },
                ab: function() {
                    return s
                },
                qE: function() {
                    return l
                },
                Al: function() {
                    return o
                },
                mu: function() {
                    return i
                },
                Qj: function() {
                    return c
                },
                qx: function() {
                    return d
                },
                iH: function() {
                    return x
                },
                iz: function() {
                    return f
                },
                Fh: function() {
                    return u
                },
                MA: function() {
                    return h
                },
                $8: function() {
                    return p
                },
                Bx: function() {
                    return m
                },
                Oe: function() {
                    return j
                },
                UV: function() {
                    return g
                },
                H2: function() {
                    return v
                },
                Ft: function() {
                    return b
                },
                pp: function() {
                    return y
                },
                o: function() {
                    return w
                },
                WV: function() {
                    return O
                },
                BG: function() {
                    return N
                },
                CM: function() {
                    return P
                },
                Gz: function() {
                    return C
                },
                L4: function() {
                    return k
                },
                LC: function() {
                    return Z
                },
                lb: function() {
                    return M
                },
                r0: function() {
                    return D
                },
                sT: function() {
                    return G
                },
                CF: function() {
                    return E
                },
                eo: function() {
                    return A
                },
                NY: function() {
                    return H
                },
                cB: function() {
                    return S
                },
                Mj: function() {
                    return V
                },
                S_: function() {
                    return _
                },
                Vn: function() {
                    return B
                },
                VY: function() {
                    return T
                },
                Bo: function() {
                    return F
                },
                ji: function() {
                    return I
                },
                Fk: function() {
                    return L
                }
            });
            var a = "flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none",
                n = {
                    primary: "text-white bg-gray-900 hover:bg-gray-900",
                    secondary: "text-white bg-gray-900 hover:bg-gray-900",
                    elevation: "text-white bg-gray-900 hover:bg-gray-900 shadow-upside"
                },
                s = "text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300",
                l = {
                    big: "h-12 px-30px",
                    normal: "h-11 px-30px",
                    small: "h-9 text-13px px-20px"
                },
                o = "flex items-center justify-center outline-none transition-colors duration-250 ease-in-out",
                i = "group flex items-center justify-between flex-shrink-0 rounded overflow-hidden bg-gray-900 shadow-floatingUp",
                c = "font-semibold text-13px text-white flex items-center justify-center h-full w-40px transition-colors duration-250 ease-in-out cursor-default",
                d = {
                    big: "h-12",
                    normal: "h-35px"
                },
                x = "w-full h-12 px-4 placeholder-gray-500 border border-transparent rounded outline-none transition duration-200",
                f = "text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300 hover:border-transparent focus:border-transparent focus:placeholder-gray-500",
                u = "text-gray-900 bg-gray-f7 hover:border-gray-400 focus:border-black focus:placeholder-gray-900",
                h = "h-12 px-4",
                p = "h-120px p-4 resize-none",
                m = "w-full h-auto flex justify-start items-center bg-white px-30px py-6 border-b border-gray-200 relative last:border-b-0",
                j = "flex w-105px h-105px rounded overflow-hidden bg-gray-200 mr-15px flex-shrink-0",
                g = "flex flex-col w-full px-15px",
                v = "text-13px text-gray-900",
                b = "text-13px text-gray-500 mt-5px mb-10px",
                y = "flex items-center justify-between",
                w = "font-semibold text-16px text-gray-900 flex-shrink-0",
                O = "feature-block flex w-full items-start flex-row",
                N = "flex items-center justify-center w-70px h-70px rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold",
                P = "flex flex-col items-start",
                C = "w-full text-18px font-semibold text-gray-900 mt-0 mb-2",
                k = "w-full leading-6 text-14px",
                Z = "w-full flex flex-col items-start px-30px py-45px bg-cover bg-center bg-no-repeat bg-gray-100 border border-gray-300 rounded overflow-hidden relative xxl:py-60px xxl:px-80px",
                M = "flex flex-col items-center lg:items-start relative z-10 w-full lg:max-w-half",
                D = "w-full flex flex-col items-start cursor-pointer",
                G = "flex justify-center items-center w-full rounded overflow-hidden",
                E = "flex flex-col items-start mt-3",
                //A = "font-semibold text-gray-900 mb-2 text-16px",
                A = "".concat(currencyClass, " font-semibold text-gray-900 mb-2 text-16px"),
                H = "flex items-center justify-center w-full lg:max-w-screen-md rounded relative overflow-hidden",
                S = "absolute top-0 left-0 flex items-center justify-center h-full w-50px",
                V = "w-full h-12 pl-12 px-4 text-gray-900 placeholder-gray-500 bg-gray-f7 border-2 border-transparent rounded outline-none transition duration-200 hover:border-gray-400 focus:border-black focus:placeholder-gray-900",
                _ = "flex items-center absolute top-half w-full",
                B = "w-30px h-30px flex items-center justify-center rounded-full text-gray-00 bg-white shadow-navigation absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none",
                T = "left-0 ml-35px ",
                F = "right-0 mr-35px",
                I = "overflow-hidden w-full flex rounded overflow-hidden",
                L = "w-full h-full object-cover"
            },
        5448: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return Ve
                }
            });
            var a = r(2809),
                n = r(7294),
                s = r(1664),
                l = r(5893);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var c = function() {
                return (0, l.jsx)("img", {
                    className: "help",
                    src: "images\\help-icon.svg",
                    alt: "Help icon",
                    width: "24",
                })     
            },
                d = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "18px" : a,
                        s = e.height,
                        o = void 0 === s ? "18px" : s;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 18 18",
                        children: (0, l.jsx)("path", {
                            d: "M4.7,3.8H17.3a.9.9,0,0,1,.9.9V17.3a.9.9,0,0,1-.9.9H4.7a.9.9,0,0,1-.9-.9V4.7A.9.9,0,0,1,4.7,3.8ZM2,4.7A2.7,2.7,0,0,1,4.7,2H17.3A2.7,2.7,0,0,1,20,4.7V17.3A2.7,2.7,0,0,1,17.3,20H4.7A2.7,2.7,0,0,1,2,17.3ZM11,11C8.515,11,6.5,8.582,6.5,5.6H8.3c0,2.309,1.5,3.6,2.7,3.6s2.7-1.291,2.7-3.6h1.8C15.5,8.582,13.485,11,11,11Z",
                            transform: "translate(-2 -2)",
                            fill: r,
                            fillRule: "evenodd"
                        })
                    })
                },
                x = r(219),
                f = ["id"];

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var p = function(e) {
                var t = e.id,
                    r = (0, x.Z)(e, f);
                return (0, l.jsx)("img", {
                    className: "logo",
                    src: logoSrc,
                    alt: "Logo",
                    width: "140",
                    style: {
                        'max-width': "140px"
                    },
                })  
            },
                m = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "14px" : a,
                        s = e.height,
                        o = void 0 === s ? "14px" : s;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 14 14",
                        children: (0, l.jsx)("path", {
                            d: "M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z",
                            transform: "translate(-0.984)",
                            fill: r
                        })
                    })
                },
                j = r(2986),
                g = r(1340),
                v = ["className"];

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var w = function(e) {
                var t = e.className,
                    r = (0, x.Z)(e, v),
                    a = (0, j.R)(),
                    n = a.searchTerm,
                    s = a.setSearchTerm,
                    o = g.NY + " " + t;
                return (0, l.jsxs)("form", {
                    noValidate: !0,
                    role: "search",
                    className: o,
                    onSubmit: function(e) {
                        return e.preventDefault()
                    },
                    children: [(0, l.jsx)("span", {
                        className: g.cB,
                        children: (0, l.jsx)(m, {
                            color: "#999999"
                        })
                    }), (0, l.jsx)("input", y({
                        type: "search",
                        placeholder: "Search your product here",
                        className: g.Mj,
                        value: n,
                        onChange: function(e) {
                            var t = e.currentTarget.value;
                            s(t)
                        },
                        autoComplete: "off"
                    }, r))]
                })
            },
                O = r(9942),
                N = r(7469),
                P = r(1163);

            function C() {
                var e = (0, P.useRouter)(),
                    t = (0, n.useContext)(O.r).dispatch,
                    r = (0, N.j)().itemsCount;
                e.pathname;
                return (0, l.jsxs)("header", {
                    className: "flex items-center shadow-mobile text-gray-700 body-font fixed bg-white w-full h-90px z-20 lg:shadow-header pr-20px md:pr-30px lg:pr-40px",
                    children: [(0, l.jsx)("button", {
                        "aria-label": "Menu",
                        className: "menuBtn flex flex-col items-center justify-center w-50px flex-shrink-0 h-full outline-none focus:outline-none lg:w-90px",
                        onClick: function() {
                            t({
                                type: "OPEN_MENU",
                                payload: {
                                    menu: !0
                                }
                            })
                        },
                        children: (0, l.jsxs)("span", {
                            className: "menuIcon",
                            children: [(0, l.jsx)("span", {
                                className: "bar"
                            }), (0, l.jsx)("span", {
                                className: "bar"
                            }), (0, l.jsx)("span", {
                                className: "bar"
                            })]
                        })
                    }), (0, l.jsx)(s.default, {
                        href: "#",
                        children: (0, l.jsxs)("a", {
                            className: "hidden mx-auto lg:mr-10 lg:flex",
                            children: [(0, l.jsx)("span", {
                                className: "sr-only",
                                children: "DeCommerce"
                            }), (0, l.jsx)(p, {
                                width: "110px",
                                id: "header-logo"
                            })]
                        })
                    }), (0, l.jsx)("div", {
                        className: "w-full ml-10px mr-20px lg:mr-10 lg:ml-auto lg:flex lg:justify-center",
                        children: (0, l.jsx)(w, {})
                    }), (0, l.jsxs)("div", {
                        className: "hidden items-center text-gray-900 mr-10 flex-shrink-0 lg:flex",
                        children: [(0, l.jsx)(c, {}), (0, l.jsx)("a", {
                            href: customerSupportLink,
                            target: "_blank",
                            className: "font-semibold text-base text-14px ml-3",
                            children: customerSupportText,
                        })]
                    }), (0, l.jsxs)("button", {
                        className: "flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none",
                        onClick: function() {
                            t({
                                type: "SLIDE_CART",
                                payload: {
                                    open: !0
                                }
                            }), t({
                                type: "TOGGLE_CART_VIEW",
                                payload: {
                                    showCart: !0
                                }
                            })
                        },
                        "aria-label": "cart-button",
                        children: [(0, l.jsx)(d, {
                            width: "20px",
                            height: "20px"
                        }), (0, l.jsx)("span", {
                            className: "w-18px h-18px flex items-center justify-center bg-gray-900 text-white absolute rounded-full",
                            style: {
                                fontSize: "10px",
                                top: "-10px",
                                right: "-10px"
                            },
                            children: r
                        })]
                    })]
                })
            }
            var k = function() {
                return (0, l.jsx)("img", {
                    className: "footer-img",
                    src: "images/we-accept.svg",
                    width: "150",
                })     
            },
                Z = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "21px" : a,
                        s = e.height,
                        o = void 0 === s ? "16px" : s;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 20.64 15.339",
                        children: (0, l.jsx)("path", {
                            "data-name": "Path 1080",
                            d: "M37.3,65.659a7.136,7.136,0,0,1-2.027.558,3.542,3.542,0,0,0,1.553-1.954,7.014,7.014,0,0,1-2.242.857,3.529,3.529,0,0,0-6.107,2.414,3.456,3.456,0,0,0,.091.806A10,10,0,0,1,21.3,64.645a3.537,3.537,0,0,0,1.1,4.718,3.448,3.448,0,0,1-1.6-.441v.044a3.533,3.533,0,0,0,2.833,3.464,3.553,3.553,0,0,1-.93.124,3.33,3.33,0,0,1-.664-.066,3.535,3.535,0,0,0,3.3,2.454,7.077,7.077,0,0,1-4.386,1.513A7.153,7.153,0,0,1,20.1,76.4,9.866,9.866,0,0,0,25.5,78,9.983,9.983,0,0,0,35.555,67.945c0-.153,0-.306-.011-.456A7.185,7.185,0,0,0,37.3,65.659Z",
                            transform: "translate(-18.034 -63.161)",
                            fill: r,
                            stroke: "rgba(0,0,0,0)",
                            strokeMiterlimit: "10",
                            strokeWidth: "1"
                        })
                    })
                },
                M = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "19px" : a,
                        s = e.height,
                        o = void 0 === s ? "14px" : s;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 18.664 14",
                        children: (0, l.jsx)("path", {
                            "data-name": "logo-youtube (1)",
                            d: "M18.538,67.091a2.834,2.834,0,0,0-2.7-2.96C13.82,64.036,11.76,64,9.655,64H9c-2.1,0-4.163.036-6.183.131A2.84,2.84,0,0,0,.122,67.1c-.091,1.3-.13,2.6-.128,3.893s.038,2.6.124,3.9a2.844,2.844,0,0,0,2.694,2.971c2.122.1,4.3.142,6.511.139s4.387-.039,6.511-.139a2.844,2.844,0,0,0,2.7-2.971c.087-1.3.128-2.6.124-3.9S18.625,68.392,18.538,67.091Zm-11,7.477V67.4l5.286,3.58Z",
                            transform: "translate(0.006 -64)",
                            fill: r
                        })
                    })
                },
                D = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "14px" : a,
                        s = e.height,
                        o = void 0 === s ? "14px" : s;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 14 14",
                        children: (0, l.jsx)("path", {
                            d: "M39,32a7.092,7.092,0,0,0-7,7.178,7.164,7.164,0,0,0,4.787,6.809.549.549,0,0,0,.119.012.339.339,0,0,0,.359-.356c0-.172-.006-.622-.009-1.222a3.2,3.2,0,0,1-.706.084A1.626,1.626,0,0,1,34.9,43.459a1.9,1.9,0,0,0-.778-1.05c-.609-.428,0-.441.044-.441h0a1.5,1.5,0,0,1,1.072.744,1.374,1.374,0,0,0,1.237.784,1.969,1.969,0,0,0,.8-.187,1.551,1.551,0,0,1,.444-.959c-1.553-.181-3.187-.8-3.187-3.547a2.809,2.809,0,0,1,.719-1.925,2.642,2.642,0,0,1,.069-1.9.583.583,0,0,1,.156-.016,3.328,3.328,0,0,1,1.769.753,6.507,6.507,0,0,1,3.506,0,3.328,3.328,0,0,1,1.769-.753.583.583,0,0,1,.156.016,2.642,2.642,0,0,1,.069,1.9,2.821,2.821,0,0,1,.719,1.925c0,2.756-1.638,3.362-3.2,3.541a1.74,1.74,0,0,1,.475,1.328c0,.959-.009,1.734-.009,1.969a.337.337,0,0,0,.356.359.6.6,0,0,0,.125-.012A7.2,7.2,0,0,0,39,32Z",
                            transform: "translate(-32 -32)",
                            fill: r
                        })
                    })
                },
                G = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "14px" : a,
                        s = e.height,
                        o = void 0 === s ? "14px" : s;
                    return (0, l.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 14 14",
                        children: [(0, l.jsx)("path", {
                            "data-name": "Path 1083",
                            d: "M41.917,33.167a2.926,2.926,0,0,1,2.917,2.917v5.833a2.926,2.926,0,0,1-2.917,2.917H36.083a2.926,2.926,0,0,1-2.917-2.917V36.083a2.926,2.926,0,0,1,2.917-2.917h5.833m0-1.167H36.083A4.1,4.1,0,0,0,32,36.083v5.833A4.1,4.1,0,0,0,36.083,46h5.833A4.1,4.1,0,0,0,46,41.917V36.083A4.1,4.1,0,0,0,41.917,32Z",
                            transform: "translate(-32 -32)",
                            fill: r
                        }), (0, l.jsx)("path", {
                            "data-name": "Path 1084",
                            d: "M350.2,108.42a.873.873,0,1,1,.619-.256A.875.875,0,0,1,350.2,108.42Z",
                            transform: "translate(-339.413 -104.337)",
                            fill: r
                        }), (0, l.jsx)("path", {
                            "data-name": "Path 1085",
                            d: "M147.5,145.167a2.333,2.333,0,1,1-2.333,2.333,2.333,2.333,0,0,1,2.333-2.333m0-1.167a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,147.5,144Z",
                            transform: "translate(-140.5 -140.5)",
                            fill: r
                        })]
                    })
                },
                E = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "14px" : a,
                        s = e.height,
                        o = void 0 === s ? "14px" : s;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 14 14",
                        children: (0, l.jsx)("path", {
                            d: "M44.88,32H33.2A1.142,1.142,0,0,0,32,33.09V44.8A1.232,1.232,0,0,0,33.2,46H44.877A1.169,1.169,0,0,0,46,44.8V33.09A1.073,1.073,0,0,0,44.88,32ZM36.34,43.67H34.334V37.434H36.34Zm-.933-7.184h-.014a1.09,1.09,0,1,1,.014,0ZM43.67,43.67H41.664V40.26c0-.817-.292-1.375-1.017-1.375a1.1,1.1,0,0,0-1.028.74,1.351,1.351,0,0,0-.069.493V43.67H37.543V37.434h2.006V38.3a2.031,2.031,0,0,1,1.809-1.014c1.317,0,2.312.868,2.312,2.739Z",
                            transform: "translate(-32 -32)",
                            fill: r
                        })
                    })
                },
                A = [{
                    id: 0,
                    link: "#",
                    icon: (0, l.jsx)(k, {}),
                    className: "footer-img",
                }],
                H = function() {
                    return (0, l.jsxs)("footer", {
                        className: "w-full flex items-center justify-center bg-white shadow-footer px-4 py-30px lg:px-35px lg:justify-between",
                        children: [(0, l.jsxs)("p", {
                            className: "text-gray-900",
                            children: [(0, l.jsxs)("span", {
                                children: "Powered by ",
                            }), (0, l.jsx)("a", {
                                className: "powered-by",
                                children: "DeCommerce",
                                href: "https://www.ivyca.com/decommerce/",
                                style: {
                                    fontWeight: "bold"
                                },
                            }), (0, l.jsxs)("span", {
                                children: ".",
                            })
                                      ]
                        }), (0, l.jsx)("div", {
                            className: "items-center hidden lg:flex",
                            children: A.map((function(e, t) {
                                return (0, l.jsxs)("a", {
                                    href: e.link,
                                    className: "social ".concat(e.className),
                                    children: [(0, l.jsx)("span", {
                                        className: "sr-only",
                                        children: e.title
                                    }), e.icon]
                                }, t)
                            }))
                        })]
                    })
                },
                S = r(1861),
                V = ["children", "className", "options"];

            function _(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var T = function(e) {
                var t = e.children,
                    r = e.className,
                    a = e.options,
                    n = (0, x.Z)(e, V);
                return (0, l.jsx)(S.E, B(B({
                    options: B({
                        className: "".concat(r, " os-theme-thin"),
                        scrollbars: {
                            autoHide: "never",
                            touchSupport: !1
                        }
                    }, a)
                }, n), {}, {
                    children: t
                }))
            },
                F = r(486),
                I = r(405),
                L = ["color", "width", "height"];

            function z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var W = function(e) {
                var t = e.color,
                    r = void 0 === t ? "currentColor" : t,
                    a = e.width,
                    n = void 0 === a ? "19px" : a,
                    s = e.height,
                    o = void 0 === s ? "12px" : s,
                    i = (0, x.Z)(e, L);
                return (0, l.jsx)("svg", R(R({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: o,
                    viewBox: "0 0 18.738 12"
                }, i), {}, {
                    children: (0, l.jsx)("path", {
                        "data-name": "Path 17147",
                        d: "M1252.468,501.849l5.7-5.922,1.5,1.567-3.395,3.143.091.214h14.849v2.108H1256.2l3.654,3.43-1.558,1.538Z",
                        transform: "translate(-1252.468 -495.927)",
                        fill: r
                    })
                }))
            },
                q = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "12px" : a,
                        s = e.height,
                        o = void 0 === s ? "12px" : s;
                    return (0, l.jsx)("svg", {
                        "data-name": "plus (2)",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 12 12",
                        children: (0, l.jsx)("g", {
                            "data-name": "Group 5367",
                            children: (0, l.jsx)("path", {
                                "data-name": "Path 17138",
                                d: "M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z",
                                fill: r
                            })
                        })
                    })
                },
                U = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "12px" : a,
                        s = e.height,
                        o = void 0 === s ? "2px" : s;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 12 1.5",
                        children: (0, l.jsx)("rect", {
                            "data-name": "Rectangle 970",
                            width: n,
                            height: o,
                            fill: r
                        })
                    })
                },
                Y = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "12px" : a,
                        s = e.height,
                        o = void 0 === s ? "12px" : s;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: o,
                        viewBox: "0 0 11.344 12",
                        children: (0, l.jsxs)("g", {
                            transform: "translate(-13.989)",
                            children: [(0, l.jsx)("g", {
                                "data-name": "Group 5372",
                                transform: "translate(15.399 2.327)",
                                children: (0, l.jsx)("g", {
                                    "data-name": "Group 5371",
                                    children: (0, l.jsx)("path", {
                                        "data-name": "Path 17142",
                                        d: "M81.683,99.28l-.016,8.526a.166.166,0,0,1-.164.164h-6.2a.166.166,0,0,1-.164-.165l-.016-8.525-.984,0,.016,8.524a1.149,1.149,0,0,0,1.148,1.148h6.2a1.149,1.149,0,0,0,1.148-1.147l.016-8.525Z",
                                        transform: "translate(-74.142 -99.28)",
                                        fill: r
                                    })
                                })
                            }), (0, l.jsx)("g", {
                                "data-name": "Group 5374",
                                transform: "translate(13.989 1.836)",
                                children: (0, l.jsx)("g", {
                                    "data-name": "Group 5373",
                                    children: (0, l.jsx)("path", {
                                        "data-name": "Path 17143",
                                        d: "M24.841,78.339H14.481a.492.492,0,0,0,0,.984H24.841a.492.492,0,1,0,0-.984Z",
                                        transform: "translate(-13.989 -78.339)",
                                        fill: r
                                    })
                                })
                            }), (0, l.jsx)("g", {
                                "data-name": "Group 5376",
                                transform: "translate(17.514)",
                                children: (0, l.jsx)("g", {
                                    "data-name": "Group 5375",
                                    children: (0, l.jsx)("path", {
                                        "data-name": "Path 17144",
                                        d: "M167.846,0h-2.656a.821.821,0,0,0-.82.82V2.328h.984V.984h2.328V2.328h.984V.82A.821.821,0,0,0,167.846,0Z",
                                        transform: "translate(-164.371)",
                                        fill: r
                                    })
                                })
                            }), (0, l.jsx)("g", {
                                "data-name": "Group 5378",
                                transform: "translate(18.005 4.393)",
                                children: (0, l.jsx)("g", {
                                    "data-name": "Group 5377",
                                    children: (0, l.jsx)("path", {
                                        "data-name": "Path 17145",
                                        d: "M185.847,187.454a.492.492,0,0,0-.492.492v3.967a.492.492,0,1,0,.984,0v-3.967A.492.492,0,0,0,185.847,187.454Z",
                                        transform: "translate(-185.355 -187.454)",
                                        fill: r
                                    })
                                })
                            }), (0, l.jsx)("g", {
                                "data-name": "Group 5380",
                                transform: "translate(20.333 4.393)",
                                children: (0, l.jsx)("g", {
                                    "data-name": "Group 5379",
                                    children: (0, l.jsx)("path", {
                                        "data-name": "Path 17146",
                                        d: "M285.169,187.454a.492.492,0,0,0-.492.492v3.967a.492.492,0,1,0,.984,0v-3.967A.492.492,0,0,0,285.169,187.454Z",
                                        transform: "translate(-284.677 -187.454)",
                                        fill: r
                                    })
                                })
                            })]
                        })
                    })
                },
                Q = function(e) {
                    var t = e.className,
                        r = e.children,
                        a = e.disabled,
                        n = e.onClick,
                        s = g.Al + " " + t;
                    return (0, l.jsx)("button", {
                        onClick: function(e) {
                            a || n && n(e)
                        },
                        className: s,
                        disabled: a,
                        children: r
                    })
                };
            Q.defaultProps = {
                className: "",
                disabled: !1
            };
            var $ = Q,
                K = function(e) {
                    var t = e.onDecrement,
                        r = e.onIncrement,
                        a = e.value,
                        n = e.size,
                        s = void 0 === n ? "normal" : n,
                        o = e.className,
                        i = void 0 === o ? "" : o,
                        c = g.mu + " " + g.qx[s] + " " + i;
                    return (0, l.jsxs)("div", {
                        className: c,
                        children: [(0, l.jsx)($, {
                            onClick: t,
                            className: "h-full ".concat("big" === s ? "w-60px" : "w-35px", " text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none"),
                            children: a > 1 ? (0, l.jsx)(U, {}) : (0, l.jsx)(Y, {})
                        }), (0, l.jsx)("span", {
                            className: g.Qj,
                            children: a
                        }), (0, l.jsx)($, {
                            onClick: r,
                            className: "h-full ".concat("big" === s ? "w-60px" : "w-35px", " text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none"),
                            children: (0, l.jsx)(q, {})
                        })]
                    })
                };

            function X() {
                var e, t = (0, n.useState)(!1),
                    r = t[0],
                    a = t[1],
                    s = (0, N.j)(),
                    o = s.addItem,
                    i = s.getItem,
                    c = s.removeItem,
                    d = (0, n.useContext)(O.r),
                    x = d.state,
                    f = d.dispatch,
                    u = null === (e = i(x.item.id)) || void 0 === e ? void 0 : e.quantity;
                return (0, l.jsxs)("div", {
                    className: "flex flex-col w-full h-full",
                    children: [(0, l.jsxs)("div", {
                        className: "w-full flex justify-center relative px-30px py-20px",
                        children: [(0, l.jsx)("button", {
                            className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
                            onClick: function() {
                                f({
                                    type: "TOGGLE_PRODUCT_DETAIL",
                                    payload: {
                                        showDetails: !1
                                    }
                                }), f({
                                    type: "SLIDE_CART",
                                    payload: {
                                        open: !1
                                    }
                                })
                            },
                            "aria-label": "close",
                            children: (0, l.jsx)(W, {})
                        }), (0, l.jsx)("h2", {
                            className: "font-bold text-24px m-0",
                            children: "Details"
                        })]
                    }), (0, l.jsx)(T, {
                        className: "details-scrollbar flex-grow",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-col p-30px pt-0",
                            children: [(0, l.jsx)("div", {
                                className: "flex items-center justify-center w-full h-360px overflow-hidden rounded mb-30px",
                                children: (0, l.jsx)("img", {
                                    src: x.item.image,
                                    alt: "".concat(x.item.name, "-img")
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col items-start mb-4",
                                children: [(0, l.jsxs)("span", {
                                    className: "text-gray-900 font-semibold mb-2",                                  
                                    children: [(0, l.jsx)("span", {
                                        children: [x.item.price],
                                    }), (0, l.jsx)("span", {
                                        className: "curr hint--top-right hint--rounded hint--underline",
                                        'aria-label': currencyHint,
                                        children: currencySign,
                                    })]  
                                }), (0, l.jsx)("span", {
                                    className: "mb-3",
                                    children: x.item.name
                                }), (0, l.jsxs)("p", {
                                    className: "flex items-center mb-5",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-gray-500 text-11px mr-2",
                                        children: "Packaging:"
                                    }), (0, l.jsxs)("span", {
                                        className: "text-gray-500 text-11px",
                                        children: [x.item.quantity, " ", x.item.quantity > 1 ? "pieces" : "piece"]
                                        //children: [x.item.quantity, " ", x.item.quantity > 1 ? "" : ""]
                                    })]
                                }), !0 === r ? (0, l.jsx)("p", {
                                    className: "my-5",
                                    children: x.item.description
                                }) : "", x.item.description && (0, l.jsx)("button", {
                                    className: "font-semibold text-11px text-gray-800 mt-2 focus:outline-none",
                                    onClick: function() {
                                        a(!r)
                                    },
                                    "aria-label": "details",
                                    children: !0 === r ? "Less Details" : "More Details"
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex w-full flex-col",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex flex-col justify-start full mt-10 pr-30px even:pr-0",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-gray-500 text-11px mb-2",
                                        children: nameOfAttribute1
                                    }), (0, l.jsx)("span", {
                                        className: "font-normal text-13px text-gray-900 capitalize",
                                        children: x.item.attribute1
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-start full mt-10 pr-30px even:pr-0",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-gray-500 text-11px mb-2",
                                        children: nameOfAttribute2
                                    }), (0, l.jsx)("span", {
                                        className: "font-normal text-13px text-gray-900 capitalize",
                                        children: x.item.attribute2
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-start full mt-10 pr-30px even:pr-0",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-gray-500 text-11px mb-2",
                                        children: nameOfAttribute3
                                    }), (0, l.jsx)("span", {
                                        className: "font-normal text-13px text-gray-900 capitalize",
                                        children: x.item.attribute3
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-start full mt-10 pr-30px even:pr-0",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-gray-500 text-11px mb-2",
                                        children: nameOfAttribute4
                                    }), (0, l.jsx)("span", {
                                        className: "font-normal text-13px text-gray-900 capitalize",
                                        children: x.item.attribute4
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-start full mt-10 pr-30px even:pr-0",
                                    children: [(0, l.jsx)("span", {
                                        className: "text-gray-500 text-11px mb-2",
                                        children: ""
                                    }), (0, l.jsx)("span", {
                                        className: "font-normal text-13px text-gray-900 capitalize",
                                        children: ""
                                    })]
                                })]
                            })]
                        })
                    }), (0, l.jsx)("div", {
                        className: "flex flex-col p-30px",
                        children: u > 0 ? (0, l.jsx)(K, {
                            value: u,
                            className: "ml-auto w-full big",
                            size: "big",
                            onIncrement: function() {
                                o(x.item)
                            },
                            onDecrement: function() {
                                return c(x.item)
                            }
                        }) : (0, l.jsx)(F.Z, {
                            className: "w-full big",
                            onClick: function() {
                                o(x.item), f({
                                    type: "TOGGLE_CART_VIEW",
                                    payload: {
                                        showCart: !0
                                    }
                                })
                            },
                            children: "Add To Cart"
                        })
                    })]
                })
            }
            var J = function(e) {
                var t = e.item,
                    r = (0, N.j)(),
                    a = r.addItem,
                    n = r.removeItem;
                return (0, l.jsxs)("div", {
                    className: g.Bx,
                    children: [(0, l.jsx)("div", {
                        className: g.Oe,
                        children: (0, l.jsx)("img", {
                            src: t.image,
                            alt: t.name
                        })
                    }), (0, l.jsxs)("div", {
                        className: g.UV,
                        children: [(0, l.jsx)("span", {
                            className: g.H2,
                            children: t.name
                        }), (0, l.jsxs)("span", {
                            className: g.Ft,
                            children: [(0, l.jsx)("span", {
                                children: ["Unit Price \xa0", t.price],
                            }), (0, l.jsx)("span", {
                                className: "curr hint--top hint--rounded hint--underline",
                                'aria-label': currencyHint,
                                children: currencySign,
                            })]       
                        }), (0, l.jsxs)("div", {
                            className: g.pp,
                            children: [(0, l.jsx)(K, {
                                value: t.quantity,
                                onIncrement: function() {
                                    return a(t)
                                },
                                onDecrement: function() {
                                    return n(t)
                                }
                            }), (0, l.jsxs)("span", {
                                className: g.o,
                                //children: [I.w, (t.price * t.quantity).toFixed(2)]
                                children: [(0, l.jsx)("span", {
                                    children: [(t.price * t.quantity).toFixed(numberOfDecimal)],
                                }), (0, l.jsx)("span", {
                                    className: "curr hint--top-left hint--rounded hint--underline",
                                    'aria-label': currencyHint,
                                    children: currencySign,
                                })]
                            })]
                        })]
                    })]
                })
            },
                ee = function(e) {
                    e.color;
                    var t = e.width,
                        r = void 0 === t ? "166px" : t,
                        a = e.height,
                        n = void 0 === a ? "210px" : a;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: r,
                        height: n,
                        viewBox: "0 0 165.759 210",
                        children: (0, l.jsx)("g", {
                            "data-name": "empty cart",
                            transform: "translate(-758 -414.992)",
                            children: (0, l.jsxs)("g", {
                                "data-name": "\xd1\xeb\xee\xe9 2",
                                transform: "translate(758 414.992)",
                                children: [(0, l.jsx)("path", {
                                    "data-name": "Path 17149",
                                    d: "M761.008,613.9c-1.364,1.011-2.6,2.226-2.5,4.164.2,4.121,7.278,5.11,10.172,5.5,5.125.7,10.26.592,15.411.787q28.06,1.062,56.146.4,14.415-.321,28.818-1.047c8.434-.422,17.828.119,25.819-3.139a111.905,111.905,0,0,0,13.9-7c3.722-2.162,8.549-4.225,10.755-8.268,3.867-7.087-9.685-8.487-13.414-9.266-14.662-3.064-29.782-3.609-44.7-4.064a335.848,335.848,0,0,0-45.508,1.419c-18.947,2-39.206,8.411-54.681,20.353Z",
                                    transform: "translate(-758.001 -415.008)",
                                    fill: "#f7f7f7"
                                }), (0, l.jsxs)("g", {
                                    "data-name": "Group 3794",
                                    transform: "translate(1.474 98.965)",
                                    children: [(0, l.jsx)("rect", {
                                        "data-name": "Rectangle 949",
                                        width: "108.56",
                                        height: "74.415",
                                        transform: "translate(40.615 18.313)",
                                        fill: "#f7f7f7"
                                    }), (0, l.jsxs)("g", {
                                        "data-name": "Group 3788",
                                        transform: "translate(39.959)",
                                        children: [(0, l.jsx)("path", {
                                            "data-name": "Path 17150",
                                            d: "M908.654,532.279H800.094l14.369-16.609a3.511,3.511,0,0,1,2.656-1.214H922.08a.911.911,0,0,1,.689,1.507Z",
                                            transform: "translate(-799.438 -513.966)",
                                            fill: "#fff"
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3787",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17151",
                                                d: "M908.708,531.8H801.8a5.278,5.278,0,0,0-1.464,0,.674.674,0,0,1-.19,0l.482.671,10.592-12.244c1.252-1.447,2.447-2.983,3.774-4.363.969-1.008,2.018-.936,3.235-.936H918.744a20.618,20.618,0,0,1,2.9,0c1.323.2.1,1.4-.409,1.99L909.116,530.93l-1,1.154c-.53.612.687.837,1.074.39L920.1,519.867l2.515-2.908c.418-.483,1.057-1.033,1.02-1.726-.069-1.33-1.418-1.255-2.375-1.255H819.609c-.775,0-1.556-.027-2.331,0-1.957.068-3.073,1.172-4.249,2.531l-12.393,14.327-1.081,1.249c-.338.391.118.671.482.671H904.164c1.4,0,2.852.117,4.246,0,.062-.005.127,0,.19,0C909.337,532.755,909.576,531.8,908.708,531.8Z",
                                                transform: "translate(-799.438 -513.966)",
                                                fill: "#262626"
                                            })
                                        })]
                                    }), (0, l.jsxs)("g", {
                                        "data-name": "Group 3791",
                                        transform: "translate(13.509 18.066)",
                                        children: [(0, l.jsx)("path", {
                                            "data-name": "Path 17152",
                                            d: "M800.252,532.281l-26.669,10.382v74.415l26.669-10Z",
                                            transform: "translate(-772.985 -532.034)",
                                            fill: "#f7f7f7"
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3789",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17153",
                                                d: "M800.025,532.111,776.684,541.2l-3.328,1.3c-.843.328-.054.537.455.339l23.341-9.086,3.328-1.3C801.323,532.122,800.534,531.913,800.025,532.111Z",
                                                transform: "translate(-772.985 -532.034)",
                                                fill: "#262626"
                                            })
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3790",
                                            transform: "translate(26.627 3.446)",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17154",
                                                d: "M800.894,606.906V535.649c0-.347-1.279-.122-1.279.343v71.261c0,.347,1.279.122,1.279-.343Z",
                                                transform: "translate(-799.615 -535.48)",
                                                fill: "#262626"
                                            })
                                        })]
                                    }), (0, l.jsxs)("g", {
                                        "data-name": "Group 3793",
                                        transform: "translate(0 3.679)",
                                        children: [(0, l.jsx)("path", {
                                            "data-name": "Path 17155",
                                            d: "M800.251,532.28l-26.669,10.382L760.8,530.215a2.334,2.334,0,0,1,.809-3.857l21.859-8.2a2.335,2.335,0,0,1,2.425.492Z",
                                            transform: "translate(-759.475 -517.645)",
                                            fill: "#f2f2f2"
                                        }), (0, l.jsx)("path", {
                                            "data-name": "Path 17156",
                                            d: "M799.562,532.548l-25.98,10.113-10.859-10.774a2.334,2.334,0,0,1,.809-3.857l7.559-2.806c3.7-1.372,8.163-4.186,12.24-3.315C786.254,522.536,799.253,532.269,799.562,532.548Z",
                                            transform: "translate(-759.475 -517.645)",
                                            fill: "#fff"
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3792",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17157",
                                                d: "M799.98,531.95l-23.341,9.086-3.328,1.3.859.061-9.8-9.54-2.283-2.223a3.945,3.945,0,0,1-1.288-1.683c-.587-2.18,2.286-2.714,3.741-3.259l15.545-5.827c1.193-.447,3.433-1.818,4.737-1.229a5.393,5.393,0,0,1,1.356,1.125l2.241,2.126,11.242,10.666c.378.359,1.588-.148,1.178-.537l-10.58-10.044c-1.251-1.187-2.457-2.471-3.777-3.583-1.631-1.374-3.324-.543-5.023.094l-16.38,6.141a27.105,27.105,0,0,0-4.192,1.623,2.715,2.715,0,0,0-.792,4.111,16.218,16.218,0,0,0,1.166,1.151l11.73,11.422a.8.8,0,0,0,.859.061l23.341-9.086,3.328-1.3C801.343,532.288,800.609,531.7,799.98,531.95Z",
                                                transform: "translate(-759.475 -517.645)",
                                                fill: "#262626"
                                            })
                                        })]
                                    })]
                                }), (0, l.jsxs)("g", {
                                    "data-name": "Group 3807",
                                    transform: "translate(0 116.823)",
                                    children: [(0, l.jsx)("rect", {
                                        "data-name": "Rectangle 950",
                                        width: "108.897",
                                        height: "74.415",
                                        transform: "translate(15.083 10.837)",
                                        fill: "#f2f2f2"
                                    }), (0, l.jsx)("path", {
                                        "data-name": "Path 17158",
                                        d: "M881.982,544.206c-3.493,5.207-7.517,12.211-10.018,16.683a8.58,8.58,0,0,1-7.472,4.394l-91.407.2v51.6h108.9Z",
                                        transform: "translate(-758.002 -531.827)",
                                        fill: "#fff"
                                    }), (0, l.jsxs)("g", {
                                        "data-name": "Group 3796",
                                        transform: "translate(123.342 0.455)",
                                        children: [(0, l.jsx)("path", {
                                            "data-name": "Path 17159",
                                            d: "M908.662,532.281l-26.669,10.382v74.415l26.669-10Z",
                                            transform: "translate(-881.353 -532.281)",
                                            fill: "#f7f7f7"
                                        }), (0, l.jsx)("path", {
                                            "data-name": "Path 17160",
                                            d: "M908.661,556.952l-8.856,3.555a7.255,7.255,0,0,1-8.5-2.373l-9.311-12.386V617.08l26.669-10Z",
                                            transform: "translate(-881.353 -532.282)",
                                            fill: "#f2f2f2"
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3795",
                                            transform: "translate(0 13.265)",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17161",
                                                d: "M881.353,546.016v68.459c0,.274,1.279.073,1.279-.343V545.673C882.632,545.4,881.353,545.6,881.353,546.016Z",
                                                transform: "translate(-881.353 -545.547)",
                                                fill: "#262626"
                                            })
                                        })]
                                    }), (0, l.jsx)("g", {
                                        "data-name": "Group 3797",
                                        transform: "translate(14.477 0.182)",
                                        children: (0, l.jsx)("path", {
                                            "data-name": "Path 17162",
                                            d: "M772.824,542.976H876.462c1.713,0,3.525.169,5.233,0a11.657,11.657,0,0,0,2.831-1l7.747-3.016,15.615-6.078,1-.391c.838-.326.062-.622-.475-.413l-11.987,4.667c-4.76,1.853-9.666,3.5-14.334,5.58-.633.281.058.015.083.03-.111-.065-.458,0-.584,0H793.8c-6.707,0-13.448-.2-20.153,0h-.3c-.417,0-1.378.625-.524.625Z",
                                            transform: "translate(-772.478 -532.008)",
                                            fill: "#262626"
                                        })
                                    }), (0, l.jsx)("g", {
                                        "data-name": "Group 3798",
                                        transform: "translate(14.435 23.11)",
                                        children: (0, l.jsx)("path", {
                                            "data-name": "Path 17163",
                                            d: "M908,555.459v51.672l.364-.428-12.1,4.537c-4.744,1.779-9.611,3.373-14.276,5.352-.551.234.137.041-.037.018a4.837,4.837,0,0,0-.614,0H775.758a13.137,13.137,0,0,0-2.313,0,1.664,1.664,0,0,1-.3,0l.592.423V562.661c0-.671-1.3-.483-1.3.1v54.371c0,.332.309.423.592.423H876.545a40.671,40.671,0,0,0,5.341,0,13.265,13.265,0,0,0,2.64-.938l7.654-2.87,15.743-5.9,1.015-.38a.573.573,0,0,0,.364-.428V555.364c0-.671-1.3-.483-1.3.1Z",
                                            transform: "translate(-772.437 -554.938)",
                                            fill: "#262626"
                                        })
                                    }), (0, l.jsxs)("g", {
                                        "data-name": "Group 3800",
                                        transform: "translate(0 10.396)",
                                        children: [(0, l.jsx)("path", {
                                            "data-name": "Path 17164",
                                            d: "M881.982,542.667h-108.9l-14.358,16.6a.742.742,0,0,0,.561,1.227H866.224a.742.742,0,0,0,.561-.257Z",
                                            transform: "translate(-758.001 -542.222)",
                                            fill: "#f2f2f2"
                                        }), (0, l.jsx)("path", {
                                            "data-name": "Path 17165",
                                            d: "M881.983,542.667H774.159c-1.659,3.206-3.253,6.454-5.006,9.61-1.077,1.94-1.284,5.1,1.864,5.1h92.468a6.948,6.948,0,0,0,4.741-1.869Z",
                                            transform: "translate(-758.001 -542.222)",
                                            fill: "#fff"
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3799",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17166",
                                                d: "M882.217,542.251h-108.2a2.158,2.158,0,0,0-1.476.287,9.406,9.406,0,0,0-1.062,1.228l-2.241,2.592L758.574,558.69c-.759.878-.95,2.1.592,2.217.59.043,1.2,0,1.792,0H864.379c.519,0,1.049.033,1.567,0,1.256-.079,1.829-1.063,2.586-1.938l11.2-12.949,2.775-3.208c.512-.592-.718-.676-1.048-.294l-10.629,12.29c-1.489,1.721-2.928,3.507-4.476,5.174-.2.221.307.036-.113.1a6.843,6.843,0,0,1-.928,0H762.949a21.42,21.42,0,0,1-2.977,0c-.109-.016-.351.057-.447,0-.827-.484.428-1.478.71-1.8l12.293-14.214,1.08-1.248-.759.267H868.3c4.4,0,8.868.243,13.26,0h.19C882.294,543.079,883.079,542.251,882.217,542.251Z",
                                                transform: "translate(-758 -542.222)",
                                                fill: "#262626"
                                            })
                                        })]
                                    }), (0, l.jsxs)("g", {
                                        "data-name": "Group 3802",
                                        transform: "translate(123.35)",
                                        children: [(0, l.jsx)("path", {
                                            "data-name": "Path 17167",
                                            d: "M908.662,532.281l-26.669,10.381,14.889,14.388a1.167,1.167,0,0,0,1.221.253l24.273-9.1a1.167,1.167,0,0,0,.684-1.5,1.18,1.18,0,0,0-.272-.42Z",
                                            transform: "translate(-881.362 -531.826)",
                                            fill: "#f2f2f2"
                                        }), (0, l.jsx)("path", {
                                            "data-name": "Path 17168",
                                            d: "M907.794,532.619l-25.478,10.173,13.4,13.531a1.017,1.017,0,0,0,1.1.239l10.049-3.939,6.08-2.384c1.986-.779,4.765-1.719,4.523-4.4a5.448,5.448,0,0,0-1.742-3.06C914.813,541.813,908.239,533.081,907.794,532.619Z",
                                            transform: "translate(-881.362 -531.826)",
                                            fill: "#fff"
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3801",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17169",
                                                d: "M908.373,531.881l-23.341,9.086-3.328,1.3a.463.463,0,0,0-.2.781l11,10.63a47.359,47.359,0,0,0,3.887,3.756c1.3.992,3.307-.216,4.622-.708l17.433-6.535a43.4,43.4,0,0,0,4.219-1.582c2.541-1.272.065-3.245-1.062-4.363L909.245,532c-.429-.425-1.635.112-1.167.576l10.239,10.149,2.716,2.692a7.653,7.653,0,0,1,1.158,1.146c.931,1.506-2.4,2.107-3.312,2.449l-16.75,6.279-2.972,1.114a4.614,4.614,0,0,1-1.323.5c-.43-.023-.932-.679-1.211-.948l-2.327-2.249-11.816-11.423-.2.781,23.341-9.086,3.328-1.3C909.763,532.361,909.05,531.618,908.373,531.881Z",
                                                transform: "translate(-881.362 -531.826)",
                                                fill: "#262626"
                                            })
                                        })]
                                    }), (0, l.jsxs)("g", {
                                        "data-name": "Group 3806",
                                        transform: "translate(115.627 29.87)",
                                        children: [(0, l.jsx)("g", {
                                            "data-name": "Group 3803",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17170",
                                                d: "M873.638,562.232v12.643c0,.691,1.3.519,1.3-.086V562.146C874.938,561.455,873.638,561.627,873.638,562.232Z",
                                                transform: "translate(-873.638 -561.698)",
                                                fill: "#262626"
                                            })
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3804",
                                            transform: "translate(0.01 15.423)",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17171",
                                                d: "M873.648,577.582v1.99c0,.536,1.279.268,1.279-.157v-1.994c0-.536-1.279-.268-1.279.158Z",
                                                transform: "translate(-873.648 -577.122)",
                                                fill: "#262626"
                                            })
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3805",
                                            transform: "translate(0.003 19.662)",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17172",
                                                d: "M873.641,581.874v5.193c0,.649,1.293.445,1.293-.107v-5.194C874.934,581.117,873.641,581.322,873.641,581.874Z",
                                                transform: "translate(-873.641 -581.362)",
                                                fill: "#262626"
                                            })
                                        })]
                                    })]
                                }), (0, l.jsx)("g", {
                                    "data-name": "Group 3816",
                                    transform: "translate(129.022 172.653)",
                                    children: (0, l.jsxs)("g", {
                                        "data-name": "Group 3815",
                                        children: [(0, l.jsx)("g", {
                                            "data-name": "Group 3808",
                                            transform: "translate(0.061 8.841)",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17173",
                                                d: "M887.8,601.133l11.545-3.729c.768-.248.553-1.109-.23-.856l-11.544,3.724c-.768.248-.554,1.109.229.857Z",
                                                transform: "translate(-887.095 -596.502)",
                                                fill: "#e6e6e6"
                                            })
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3809",
                                            transform: "translate(0.079 4.4)",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17174",
                                                d: "M887.779,596.556l11.49-3.763c.748-.245.587-.929-.181-.677l-11.49,3.763C886.85,596.124,887.011,596.807,887.779,596.556Z",
                                                transform: "translate(-887.113 -592.061)",
                                                fill: "#e6e6e6"
                                            })
                                        }), (0, l.jsx)("g", {
                                            "data-name": "Group 3810",
                                            transform: "translate(0.088)",
                                            children: (0, l.jsx)("path", {
                                                "data-name": "Path 17175",
                                                d: "M887.768,592.116l11.438-3.8c.738-.245.6-.847-.159-.595l-11.438,3.8C886.871,591.766,887.009,592.368,887.768,592.116Z",
                                                transform: "translate(-887.122 -587.661)",
                                                fill: "#e6e6e6"
                                            })
                                        }), (0, l.jsxs)("g", {
                                            "data-name": "Group 3814",
                                            transform: "translate(0 12.368)",
                                            children: [(0, l.jsx)("g", {
                                                "data-name": "Group 3811",
                                                transform: "translate(0 2.779)",
                                                children: (0, l.jsx)("path", {
                                                    "data-name": "Path 17176",
                                                    d: "M887.814,604.6l2.549-.814c.264-.084.6-.319.513-.643-.082-.307-.5-.384-.766-.3l-2.549.814c-.264.084-.6.318-.513.643C887.13,604.6,887.548,604.682,887.814,604.6Z",
                                                    transform: "translate(-887.034 -602.809)",
                                                    fill: "#e6e6e6"
                                                })
                                            }), (0, l.jsx)("g", {
                                                "data-name": "Group 3812",
                                                transform: "translate(4.484 1.5)",
                                                children: (0, l.jsx)("path", {
                                                    "data-name": "Path 17177",
                                                    d: "M892.241,602.984l2.572-.822c.166-.053.631-.2.562-.459s-.566-.164-.716-.116l-2.572.822c-.166.053-.631.2-.562.458s.565.164.716.116Z",
                                                    transform: "translate(-891.518 -601.53)",
                                                    fill: "#e6e6e6"
                                                })
                                            }), (0, l.jsx)("g", {
                                                "data-name": "Group 3813",
                                                transform: "translate(8.996)",
                                                children: (0, l.jsx)("path", {
                                                    "data-name": "Path 17178",
                                                    d: "M896.774,601.6l2.6-.829c.2-.064.622-.238.545-.522s-.542-.24-.733-.179l-2.6.829c-.2.064-.622.237-.546.522s.542.24.733.179Z",
                                                    transform: "translate(-896.031 -600.03)",
                                                    fill: "#e6e6e6"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, l.jsxs)("g", {
                                    "data-name": "Group 3818",
                                    transform: "translate(54.145 165.556)",
                                    children: [(0, l.jsx)("g", {
                                        "data-name": "Group 3817",
                                        transform: "translate(0 10.266)",
                                        children: (0, l.jsx)("path", {
                                            "data-name": "Path 17179",
                                            d: "M813.36,598.282c3.4-3.962,9.024-6.258,14.142-6.472a21.9,21.9,0,0,1,11.223,2.587,20.11,20.11,0,0,1,3.959,2.77c.424.424,1.631-.11,1.168-.574a21.215,21.215,0,0,0-10.311-5.248A22.77,22.77,0,0,0,815.6,594.99a17.956,17.956,0,0,0-3.32,2.888c-.53.617.682.866,1.078.406Z",
                                            transform: "translate(-812.15 -590.829)",
                                            fill: "#262626"
                                        })
                                    }), (0, l.jsx)("path", {
                                        "data-name": "Path 17180",
                                        d: "M817.741,582.081a2.058,2.058,0,0,1-1.316,2.468,1.815,1.815,0,0,1-2.187-1.344c-.01-.041-.018-.082-.025-.124a2.058,2.058,0,0,1,1.316-2.468,1.815,1.815,0,0,1,2.187,1.344C817.726,582,817.734,582.039,817.741,582.081Z",
                                        transform: "translate(-812.15 -580.563)",
                                        fill: "#262626"
                                    }), (0, l.jsx)("ellipse", {
                                        "data-name": "Ellipse 105",
                                        cx: "1.82",
                                        cy: "2.03",
                                        rx: "1.82",
                                        ry: "2.03",
                                        transform: "translate(27.194 0.674)",
                                        fill: "#262626"
                                    })]
                                }), (0, l.jsx)("g", {
                                    "data-name": "Group 3819",
                                    transform: "translate(36.623)",
                                    children: (0, l.jsx)("path", {
                                        "data-name": "Path 17181",
                                        d: "M852.783,535.425c-5.86.7-12.166,1.474-17.745-.961-4.633-2.022-8.486-6.274-8.188-11.589.31-5.523,4.333-9.844,9.206-12a28.738,28.738,0,0,1,17.277-1.465c2.725.562,6.01,1.367,8.284,3.062,1.9,1.418,2.654,3.946.812,5.721a11.746,11.746,0,0,1-5.116,2.376c-1.843.506-3.714.978-5.6,1.3-9.6,1.67-20.5.084-28.031-6.515a18,18,0,0,1-6.352-13.145c-.016-5.151,2.893-9.841,6.8-13.019,7.819-6.359,18.692-8.17,28.488-8.215a89.692,89.692,0,0,1,14.461,1.162,27.467,27.467,0,0,1,7.559,1.913c2.377,1.132,4.79,3.5,4.158,6.38-.6,2.726-3.741,3.59-6.074,4.269a39.208,39.208,0,0,1-9.258,1.421,106.994,106.994,0,0,1-17.708-.908,95.443,95.443,0,0,1-16.359-3.342,35.589,35.589,0,0,1-10.945-5.19,17.785,17.785,0,0,1-6.667-9.423,21.317,21.317,0,0,1,.751-13.232c3.206-8.232,11.282-13.313,19.257-16.188a86.13,86.13,0,0,1,34.219-4.559,89.853,89.853,0,0,1,17.407,2.853,73.024,73.024,0,0,1,8.568,2.8c2.328.935,4.7,2,5.883,4.359,2.287,4.544-2.242,8.848-5.857,10.89-3.967,2.24-8.6,3.562-12.986,4.726a87.8,87.8,0,0,1-17.927,2.465c-5.75.3-11.522.509-17.281.416-11.091-.178-22.467-1.582-32.5-6.6-8.715-4.359-17.3-13.24-15.119-23.857,1.029-5.011,4.77-9.35,8.619-12.511a45.257,45.257,0,0,1,13.5-7.35c9.986-3.6,20.737-4.848,31.278-5.467a152.386,152.386,0,0,1,35.151,1.891,154.547,154.547,0,0,1,17.342,4.078c.361.107,1.511-.443,1.026-.587a155.349,155.349,0,0,0-74.177-3.462c-10.463,2.169-21.408,6.038-28.756,14.17-3.6,3.99-6.054,8.865-5.471,14.35a22.211,22.211,0,0,0,7.2,13.675c8.57,7.982,21.147,10.9,32.475,11.9a153.7,153.7,0,0,0,18.3.349,159.28,159.28,0,0,0,19.467-1.427,81.223,81.223,0,0,0,15.819-4.243c4.12-1.536,8.488-3.737,10.759-7.693a6.227,6.227,0,0,0,.246-6.356c-1.259-2.226-3.472-3.28-5.742-4.2a82.585,82.585,0,0,0-18.1-4.888,91.588,91.588,0,0,0-37.7,1.937c-8.957,2.375-18.449,6.388-23.855,14.327-5.058,7.429-5.356,18.257,1.033,25.009a28.549,28.549,0,0,0,11.087,6.737,82.551,82.551,0,0,0,15.727,3.809A118.8,118.8,0,0,0,861,496.857a48.333,48.333,0,0,0,9.035-.876,23.407,23.407,0,0,0,7.707-2.64,4.725,4.725,0,0,0,2.3-5.177c-.61-2.492-2.9-4.125-5.163-5.029a34.958,34.958,0,0,0-7.782-1.755q-3.861-.583-7.759-.855c-10.36-.718-21.315.217-30.7,4.994-4.564,2.324-8.737,5.623-11.021,10.31a15.921,15.921,0,0,0,.8,15.053c5.328,9.2,17.076,12.6,27.1,12.263,3.573-.118,23.491-2.145,18.636-9.733-1.466-2.291-4.691-3.195-7.146-3.919a34.493,34.493,0,0,0-8.423-1.406c-5.48-.209-11.329.9-15.988,3.909-4.272,2.758-7.47,7.491-6.99,12.75.477,5.22,4.824,9.055,9.516,10.743,5.591,2.011,11.716,1.275,17.477.583.595-.071,1.083-.754.191-.647Z",
                                        transform: "translate(-794.627 -414.992)",
                                        fill: "#262626"
                                    })
                                })]
                            })
                        })
                    })
                };

            function te() {
                var e = (0, n.useContext)(O.r).dispatch;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: "w-full flex justify-center flex-shrink-0 relative px-30px py-20px mb-30px border-b border-gray-200",
                        children: [(0, l.jsx)("button", {
                            className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
                            onClick: function() {
                                e({
                                    type: "SLIDE_CART",
                                    payload: {
                                        open: !1
                                    }
                                })
                            },
                            "aria-label": "close",
                            children: (0, l.jsx)(W, {})
                        }), (0, l.jsx)("h2", {
                            className: "font-semibold text-21px m-0",
                            children: "No items in Your Basket"
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex-auto",
                        children: [(0, l.jsx)("p", {
                            className: "text-center text-gray-900 px-10 leading-loose",
                            children: "You haven't added anything in your cart yet. Start adding the products you like."
                        }), (0, l.jsx)("div", {
                            className: "flex items-center justify-center mt-40px md:mt-95px",
                            children: (0, l.jsx)(ee, {})
                        })]
                    })]
                })
            }

            var itemsPrice;
            var totalPrice;
            function re() {
                var e = (0, n.useContext)(O.r).dispatch,
                    t = (0, N.j)(),
                    r = t.items,
                    a = t.calculatePrice;
                itemsPrice = +a(); // to produce a number from a string: "prepend it with +".
                totalPrice = (shippingCosts + itemsPrice).toFixed(numberOfDecimal);
                window.totalPrice = totalPrice; // totalPrice will be GLOBAL variable with the same value.

                return (0, l.jsxs)("div", {
                    className: "flex flex-col w-full h-full",
                    children: [r.length ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "w-full flex justify-center relative px-30px py-20px border-b border-gray-200",
                            children: [(0, l.jsx)("button", {
                                className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
                                onClick: function() {
                                    e({
                                        type: "SLIDE_CART",
                                        payload: {
                                            open: !1
                                        }
                                    })
                                },
                                "aria-label": "close",
                                children: (0, l.jsx)(W, {})
                            }), (0, l.jsx)("h2", {
                                className: "font-bold text-24px m-0",
                                children: "Your Basket"
                            })]
                        }), (0, l.jsx)(T, {
                            className: "cart-scrollbar flex-grow",
                            children: r.map((function(e) {
                                return (0, l.jsx)(J, {
                                    item: e
                                }, e.id)
                            }))
                        })]
                    }) : (0, l.jsx)(te, {}), (0, l.jsxs)("div", {
                        className: "flex flex-col p-30px",
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, l.jsxs)("span", {
                                className: "font-semibold text-gray-900",
                                children: ["Total \xa0", (0, l.jsx)("span", {
                                    className: "font-normal text-gray-700 text-13px",
                                    children: [(0, l.jsxs)("span", {
                                        children: "Shipping:",
                                    }), (0, l.jsxs)("span", {
                                        className: "",
                                        children: " " + shippingCosts,
                                    }), (0, l.jsxs)("span", {
                                        className: "curr hint--top-left hint--rounded hint--underline",
                                        'aria-label': currencyHint,
                                        children: currencySign,
                                    })]
                                })]
                            }), (0, l.jsxs)("span", {
                                className: "font-semibold text-18px text-gray-900",
                                children: [(0, l.jsx)("span", {
                                    children: totalPrice,
                                }), (0, l.jsx)("span", {
                                    className: "curr hint--top-left hint--rounded hint--underline",
                                    'aria-label': currencyHint,
                                    children: currencySign,
                                })]
                            })]
                        }), (0, l.jsx)(F.Z, {
                            className: "big mt-20px",
                            disabled: !r.length,
                            onClick: function() {
                                e({
                                    type: "TOGGLE_CHECKOUT_VIEW",
                                    payload: {
                                        showCheckout: !0
                                    }
                                })
                            },
                            children: "Confirm"
                        })]
                    })]
                })
            }
            var ae = r(266),
                ne = r(809),
                se = r.n(ne),
                le = r(7333),
                oe = ["className", "id", "value", "name", "initialValue", "disabled", "readOnly", "placeholder", "onChange", "onFocus", "onBlur"];

            function ie(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ie(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var de = n.forwardRef((function(e, t) {
                var r = e.className,
                    a = e.id,
                    s = e.value,
                    o = e.name,
                    i = e.initialValue,
                    c = e.disabled,
                    d = e.readOnly,
                    f = e.placeholder,
                    u = e.onChange,
                    h = e.onFocus,
                    p = e.onBlur,
                    m = (0, x.Z)(e, oe),
                    j = (0, n.useRef)(null);
                (0, n.useImperativeHandle)(t, (function() {
                    return j.current
                }));
                var v = (0, n.useState)(i),
                    b = v[0],
                    y = v[1];
                (0, n.useEffect)((function() {
                    void 0 !== s && y(s)
                }), [s]);
                var w = g.MA + " " + g.iH + " " + (!0 === c ? g.iz : g.Fh) + " " + r;
                return (0, l.jsxs)(n.Fragment, {
                    children: [(0, l.jsx)("label", {
                        htmlFor: a,
                        className: "sr-only",
                        children: o
                    }), (0, l.jsx)("input", ce({
                        ref: j,
                        type: "text",
                        placeholder: f,
                        className: w,
                        id: o,
                        value: b,
                        disabled: c,
                        readOnly: d,
                        onChange: function(e) {
                            c || d || (y(e.target.value), u && u(e))
                        },
                        onFocus: function(e) {
                            h && h(e)
                        },
                        onBlur: function(e) {
                            p && p(e)
                        },
                        autoComplete: "off",
                        name: o
                    }, m))]
                })
            }));
            de.defaultProps = {
                disabled: !1,
                readOnly: !1,
                className: "",
                placeholder: "",
                initialValue: ""
            };
            var xe = de,
                fe = ["className", "value", "initialValue", "disabled", "readOnly", "placeholder", "onChange", "onFocus", "onBlur"];

            function ue(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }
            var he = function(e) {
                var t = e.className,
                    r = e.value,
                    s = e.initialValue,
                    o = e.disabled,
                    i = e.readOnly,
                    c = e.placeholder,
                    d = e.onChange,
                    f = e.onFocus,
                    u = e.onBlur,
                    h = (0, x.Z)(e, fe),
                    p = (0, n.useState)(s),
                    m = p[0],
                    j = p[1];
                (0, n.useEffect)((function() {
                    void 0 !== r && j(r)
                }), [r]);
                var v = g.iH + " " + g.$8 + " " + (!0 === o ? g.iz : g.Fh) + " " + t;
                return (0, l.jsx)("textarea", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ue(Object(r), !0).forEach((function(t) {
                            (0, a.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    placeholder: c,
                    className: v,
                    value: m,
                    disabled: o,
                    readOnly: i,
                    onChange: function(e) {
                        o || i || (j(e.target.value), d && d(e))
                    },
                    onFocus: function(e) {
                        f && f(e)
                    },
                    onBlur: function(e) {
                        u && u(e)
                    },
                    autoComplete: "off"
                }, h))
            };
            he.defaultProps = {
                disabled: !1,
                readOnly: !1,
                className: "",
                placeholder: "",
                initialValue: ""
            };
            var pe = he;

            function me(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? me(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : me(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ge = function(e) {
                return (0, l.jsxs)("svg", je(je({
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    x: "0px",
                    y: "0px",
                    width: "20px",
                    height: "100%",
                    viewBox: "0 0 408.576 408.576"
                }, e), {}, {
                    children: [(0, l.jsx)("g", {
                        children: (0, l.jsx)("g", {
                            children: (0, l.jsx)("path", {
                                d: "M204.288,0C91.648,0,0,91.648,0,204.288s91.648,204.288,204.288,204.288s204.288-91.648,204.288-204.288 S316.928,0,204.288,0z M318.464,150.528l-130.56,129.536c-7.68,7.68-19.968,8.192-28.16,0.512L90.624,217.6 c-8.192-7.68-8.704-20.48-1.536-28.672c7.68-8.192,20.48-8.704,28.672-1.024l54.784,50.176L289.28,121.344 c8.192-8.192,20.992-8.192,29.184,0C326.656,129.536,326.656,142.336,318.464,150.528z",
                                fill: "currentColor"
                            })
                        })
                    }), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {}), (0, l.jsx)("g", {})]
                }))
            };

            function ve() {
                var e = (0, n.useContext)(O.r).dispatch;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: "w-full flex px-30px relative",
                        children: (0, l.jsx)("button", {
                            className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
                            onClick: function() {
                                e({
                                    type: "SLIDE_CART",
                                    payload: {
                                        open: !1
                                    }
                                })
                            },
                            "aria-label": "close",
                            children: (0, l.jsx)(W, {})
                        })
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col pb-60px flex-auto justify-center",
                        children: [(0, l.jsx)("div", {
                            className: "flex items-center justify-center text-green",
                            children: (0, l.jsx)(ge, {
                                style: {
                                    width: 60
                                }
                            })
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col items-center px-40px md:px-80px mt-15px",
                            children: [(0, l.jsx)("h3", {
                                className: "text-center text-18px font-semibold text-gray-900 mb-40px",
                                children: "Order Confirmation"
                            }), (0, l.jsx)("p", {
                                className: "text-center text-14px font-semibold text-gray-900 mb-1",
                                children: "Thank you for your order."
                            }), (0, l.jsx)("p", {
                                className: "text-center text-13px text-gray-700",
                                children: "We've received your order and will contact you very soon."
                            })]
                        })]
                    })]
                })
            }

            function be(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? be(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var we = {
                phone_number: "",
                name: "",
                email: "",
                address: "",
                postal_code: "",
                suite: ""
            };

            function Oe() {
                var e = (0, n.useContext)(O.r).dispatch,
                    t = (0, n.useState)(we),
                    r = t[0],
                    s = t[1],
                    o = (0, n.useState)(!1),
                    i = o[0],
                    c = o[1],
                    d = (0, n.useState)(!1),
                    x = d[0],
                    f = d[1],
                    u = (0, n.useState)(null),
                    h = u[0],
                    p = u[1],
                    m = (0, N.j)(),
                    j = m.items,
                    v = m.calculatePrice,
                    b = m.clearCart,
                    y = function() {
                        var e = (0, ae.Z)(se().mark((function e() {
                            var t, a, n, s, l, o;
                            return se().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = r.name, a = r.email, n = r.address, s = r.postal_code, l = r.suite, (o = r.phone_number).trim()) {
                                            e.next = 4;
                                            break
                                        }
                                        return p({
                                            field: "phone_number",
                                            message: "Phone number is required"
                                        }), e.abrupt("return");
                                    case 4:
                                        return f(!0), e.next = 7, fetch("/api/order", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                items: j,
                                                address: "".concat(t, " ").concat(n, " ").concat(s, " ").concat(l),
                                                phone_number: o,
                                                email: a,
                                                bill_amount: v()
                                            })
                                        });
                                    case 7:
                                        200 === e.sent.status ? (c(!0), b()) : p(!0), f(!1);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    w = function(e) {
                        var t = e.currentTarget,
                            n = t.value,
                            l = t.name;
                        s(ye(ye({}, r), {}, (0, a.Z)({}, l, n)))
                    };
                return i ? (0, l.jsx)(ve, {}) : (0, l.jsxs)("form", {
                    className: "flex flex-col w-full h-full",
                    action: "https://api.staticforms.xyz/submit",
                    method: "post",
                    children: [(0, l.jsxs)("div", {
                        className: "w-full flex justify-center relative px-30px py-20px border-b border-gray-200",
                        children: [(0, l.jsx)("button", {
                            className: "w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900",
                            onClick: function() {
                                e({
                                    type: "TOGGLE_CHECKOUT_VIEW",
                                    payload: {
                                        showCheckout: !1
                                    }
                                })
                            },
                            "aria-label": "close",
                            children: (0, l.jsx)(W, {})
                        }), (0, l.jsx)("h2", {
                            className: "font-bold text-24px m-0",
                            children: "Checkout",
                        })]
                    }), (0, l.jsx)(T, {
                        className: "checkout-scrollbar flex-grow",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-col px-30px pt-20px",
                            children: [(0, l.jsxs)("div", {
                                className: "flex flex-col mb-45px",
                                children: [(0, l.jsx)(xe, {
                                    name: "accessKey",
                                    type: "hidden",
                                    value: emailAccessKey,
                                    onChange: w
                                }), (0, l.jsx)(pe, {
                                    id: "itemsInBasket",
                                    name: "$products",
                                    value: itemsInBasket,
                                    style: {
                                        display: "none"
                                    },
                                    required: true,
                                }), (0, l.jsx)(xe, {
                                    className: "mb-10px",
                                    name: "$total",
                                    value: totalPrice,
                                    type: "hidden",
                                    required: true,
                                }), (0, l.jsx)(xe, {
                                    className: "mb-10px",
                                    name: currencyFormNameTag,  // defined in payment.js
                                    value: genCryptoAddress, // call the function generate crypto address
                                    type: "hidden",
                                    required: true,
                                }), (0, l.jsx)("span", {
                                    className: "flex font-semibold text-gray-900 text-18px mb-15px hint--bottom hint--large hint--rounded hint--underline",
                                    children: "Contact Information",
                                    'aria-label': "This email address is used to contact you in case something unexpected happens.",
                                }), (0, l.jsx)(xe, {
                                    placeholder: "Email Address",
                                    className: "mb-10px",
                                    name: "$email",
                                    type: "email",
                                    required: true,
                                    onChange: w
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col mb-45px",
                                children: [(0, l.jsx)("span", {
                                    className: "flex font-semibold text-gray-900 text-18px mb-15px hint--top hint--large hint--rounded hint--underline",
                                    children: "Shipping Address",
                                    'aria-label': "A shipping address is an address where we will send the order.",
                                }), (0, l.jsx)(xe, {
                                    placeholder: "Name",
                                    className: "mb-10px",
                                    name: "$name",
                                    type: "text",
                                    required: true,
                                    onChange: w
                                }), (0, l.jsx)(pe, {
                                    placeholder: "Address",
                                    className: "mb-10px",
                                    name: "$address",
                                    type: "text",
                                    value: "",
                                    required: true,
                                    onChange: w
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center mb-10px",
                                    children: [(0, l.jsx)(xe, {
                                        placeholder: "ZIP",
                                        style: {
                                            width: "calc(50% - 5px)",
                                            marginRight: "5px"
                                        },
                                        name: "$zip",
                                        type: "text",
                                        required: true,
                                        onChange: w
                                    }), (0, l.jsx)(xe, {
                                        placeholder: "City",
                                        style: {
                                            width: "calc(50% - 5px)",
                                            marginLeft: "5px"
                                        },
                                        name: "$city",
                                        type: "text",
                                        required: true,
                                        onChange: w
                                    })]
                                }),(0, l.jsx)(xe, {
                                    placeholder: "State / Province / County",
                                    className: "mb-10px",
                                    name: "$state",
                                    type: "text",
                                    onChange: w
                                }),(0, l.jsx)("select", {
                                    className: "h-12 px-4 w-full h-12 px-4 placeholder-gray-500 border border-transparent rounded outline-none transition duration-200 text-gray-900 bg-gray-f7 hover:border-gray-400 focus:border-black focus:placeholder-gray-900 mb-10px",
                                    id: "country",
                                    name: "$country",
                                    required: true,
                                    onChange: w,
                                    children: [(0, l.jsx)("option", {
                                        value: "",
                                        children: "Country",
                                        disabled: true,
                                        selected: true,
                                        style: {
                                            display: "none"
                                        },
                                    }), (0, l.jsx)("option", { // --- List of Countries Start --------------------------------- North America
                                        value: "",
                                        children: "North America",
                                        disabled: true,
                                        style: {
                                            color: "#bbb",
                                            fontSize: "18px",
                                        },
                                    }), (0, l.jsx)("option", {
                                        value: "Anguilla",
                                        children: "Anguilla"
                                    }), (0, l.jsx)("option", {
                                        value: "Antigua and Barbuda",
                                        children: "Antigua and Barbuda"
                                    }), (0, l.jsx)("option", {
                                        value: "Aruba",
                                        children: "Aruba"
                                    }), (0, l.jsx)("option", {
                                        value: "Bahamas",
                                        children: "Bahamas"
                                    }), (0, l.jsx)("option", {
                                        value: "Barbados",
                                        children: "Barbados"
                                    }), (0, l.jsx)("option", {
                                        value: "Belize",
                                        children: "Belize"
                                    }), (0, l.jsx)("option", {
                                        value: "Bermuda",
                                        children: "Bermuda"
                                    }), (0, l.jsx)("option", {
                                        value: "Bonaire, Sint Eustatius and Saba",
                                        children: "Bonaire, Sint Eustatius and Saba"
                                    }), (0, l.jsx)("option", {
                                        value: "Canada",
                                        children: "Canada"
                                    }), (0, l.jsx)("option", {
                                        value: "Cayman Islands",
                                        children: "Cayman Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "Costa Rica",
                                        children: "Costa Rica"
                                    }), (0, l.jsx)("option", {
                                        value: "Cuba",
                                        children: "Cuba"
                                    }), (0, l.jsx)("option", {
                                        value: "Curacao",
                                        children: "Curacao"
                                    }), (0, l.jsx)("option", {
                                        value: "Dominica",
                                        children: "Dominica"
                                    }), (0, l.jsx)("option", {
                                        value: "Dominican Republic",
                                        children: "Dominican Republic"
                                    }), (0, l.jsx)("option", {
                                        value: "El Salvador",
                                        children: "El Salvador"
                                    }), (0, l.jsx)("option", {
                                        value: "Greenland",
                                        children: "Greenland"
                                    }), (0, l.jsx)("option", {
                                        value: "Grenada",
                                        children: "Grenada"
                                    }), (0, l.jsx)("option", {
                                        value: "Guadeloupe",
                                        children: "Guadeloupe"
                                    }), (0, l.jsx)("option", {
                                        value: "Guatemala",
                                        children: "Guatemala"
                                    }), (0, l.jsx)("option", {
                                        value: "Haiti",
                                        children: "Haiti"
                                    }), (0, l.jsx)("option", {
                                        value: "Honduras",
                                        children: "Honduras"
                                    }), (0, l.jsx)("option", {
                                        value: "Jamaica",
                                        children: "Jamaica"
                                    }), (0, l.jsx)("option", {
                                        value: "Martinique",
                                        children: "Martinique"
                                    }), (0, l.jsx)("option", {
                                        value: "Mexico",
                                        children: "Mexico"
                                    }), (0, l.jsx)("option", {
                                        value: "Montserrat",
                                        children: "Montserrat"
                                    }), (0, l.jsx)("option", {
                                        value: "Netherlands Antilles",
                                        children: "Netherlands Antilles"
                                    }), (0, l.jsx)("option", {
                                        value: "Nicaragua",
                                        children: "Nicaragua"
                                    }), (0, l.jsx)("option", {
                                        value: "Panama",
                                        children: "Panama"
                                    }), (0, l.jsx)("option", {
                                        value: "Puerto Rico",
                                        children: "Puerto Rico"
                                    }), (0, l.jsx)("option", {
                                        value: "Saint Barthelemy",
                                        children: "Saint Barthelemy"
                                    }), (0, l.jsx)("option", {
                                        value: "Saint Kitts and Nevis",
                                        children: "Saint Kitts and Nevis"
                                    }), (0, l.jsx)("option", {
                                        value: "Saint Lucia",
                                        children: "Saint Lucia"
                                    }), (0, l.jsx)("option", {
                                        value: "Saint Martin",
                                        children: "Saint Martin"
                                    }), (0, l.jsx)("option", {
                                        value: "Saint Pierre and Miquelon",
                                        children: "Saint Pierre and Miquelon"
                                    }), (0, l.jsx)("option", {
                                        value: "Saint Vincent and the Grenadines",
                                        children: "Saint Vincent and the Grenadines"
                                    }), (0, l.jsx)("option", {
                                        value: "Sint Maarten",
                                        children: "Sint Maarten"
                                    }), (0, l.jsx)("option", {
                                        value: "Trinidad and Tobago",
                                        children: "Trinidad and Tobago"
                                    }), (0, l.jsx)("option", {
                                        value: "Turks and Caicos Islands",
                                        children: "Turks and Caicos Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "United States",
                                        children: "United States"
                                    }), (0, l.jsx)("option", {
                                        value: "United States Minor Outlying Islands",
                                        children: "United States Minor Outlying Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "Virgin Islands, British",
                                        children: "Virgin Islands, British"
                                    }), (0, l.jsx)("option", {
                                        value: "Virgin Islands, U.s.",
                                        children: "Virgin Islands, U.s."
                                    }), (0, l.jsx)("option", { // --- South America ---------------------------------
                                        value: "",
                                        children: "South America",
                                        disabled: true,
                                        style: {
                                            color: "#bbb",
                                            fontSize: "18px",
                                        },
                                    }), (0, l.jsx)("option", {
                                        value: "Argentina",
                                        children: "Argentina"
                                    }), (0, l.jsx)("option", {
                                        value: "Bolivia",
                                        children: "Bolivia"
                                    }), (0, l.jsx)("option", {
                                        value: "Brazil",
                                        children: "Brazil"
                                    }), (0, l.jsx)("option", {
                                        value: "Chile",
                                        children: "Chile"
                                    }), (0, l.jsx)("option", {
                                        value: "Colombia",
                                        children: "Colombia"
                                    }), (0, l.jsx)("option", {
                                        value: "Ecuador",
                                        children: "Ecuador"
                                    }), (0, l.jsx)("option", {
                                        value: "Falkland Islands (Malvinas)",
                                        children: "Falkland Islands (Malvinas)"
                                    }), (0, l.jsx)("option", {
                                        value: "French Guiana",
                                        children: "French Guiana"
                                    }), (0, l.jsx)("option", {
                                        value: "Guyana",
                                        children: "Guyana"
                                    }), (0, l.jsx)("option", {
                                        value: "Paraguay",
                                        children: "Paraguay"
                                    }), (0, l.jsx)("option", {
                                        value: "Peru",
                                        children: "Peru"
                                    }), (0, l.jsx)("option", {
                                        value: "Suriname",
                                        children: "Suriname"
                                    }), (0, l.jsx)("option", {
                                        value: "Uruguay",
                                        children: "Uruguay"
                                    }), (0, l.jsx)("option", {
                                        value: "Venezuela",
                                        children: "Venezuela"
                                    }), (0, l.jsx)("option", { // --- Europe ---------------------------------
                                        value: "",
                                        children: "Europe",
                                        disabled: true,
                                        style: {
                                            color: "#bbb",
                                            fontSize: "18px",
                                        },
                                    }), (0, l.jsx)("option", {
                                        value: "Aland Islands",
                                        children: "Aland Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "Albania",
                                        children: "Albania"
                                    }), (0, l.jsx)("option", {
                                        value: "Andorra",
                                        children: "Andorra"
                                    }), (0, l.jsx)("option", {
                                        value: "Austria",
                                        children: "Austria"
                                    }), (0, l.jsx)("option", {
                                        value: "Belarus",
                                        children: "Belarus"
                                    }), (0, l.jsx)("option", {
                                        value: "Belgium",
                                        children: "Belgium"
                                    }), (0, l.jsx)("option", {
                                        value: "Bosnia and Herzegovina",
                                        children: "Bosnia and Herzegovina"
                                    }), (0, l.jsx)("option", {
                                        value: "Bulgaria",
                                        children: "Bulgaria"
                                    }), (0, l.jsx)("option", {
                                        value: "Croatia",
                                        children: "Croatia"
                                    }), (0, l.jsx)("option", {
                                        value: "Czech Republic",
                                        children: "Czech Republic"
                                    }), (0, l.jsx)("option", {
                                        value: "Denmark",
                                        children: "Denmark"
                                    }), (0, l.jsx)("option", {
                                        value: "Estonia",
                                        children: "Estonia"
                                    }), (0, l.jsx)("option", {
                                        value: "Faroe Islands",
                                        children: "Faroe Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "Finland",
                                        children: "Finland"
                                    }),(0, l.jsx)("option", {
                                        value: "France",
                                        children: "France"
                                    }), (0, l.jsx)("option", {
                                        value: "Germany",
                                        children: "Germany"
                                    }), (0, l.jsx)("option", {
                                        value: "Gibraltar",
                                        children: "Gibraltar"
                                    }), (0, l.jsx)("option", {
                                        value: "Greece",
                                        children: "Greece"
                                    }), (0, l.jsx)("option", {
                                        value: "Guernsey",
                                        children: "Guernsey"
                                    }), (0, l.jsx)("option", {
                                        value: "Holy See (Vatican City State)",
                                        children: "Holy See (Vatican City State)"
                                    }), (0, l.jsx)("option", {
                                        value: "Hungary",
                                        children: "Hungary"
                                    }), (0, l.jsx)("option", {
                                        value: "Iceland",
                                        children: "Iceland"
                                    }), (0, l.jsx)("option", {
                                        value: "Ireland",
                                        children: "Ireland"
                                    }), (0, l.jsx)("option", {
                                        value: "Isle of Man",
                                        children: "Isle of Man"
                                    }), (0, l.jsx)("option", {
                                        value: "Italy",
                                        children: "Italy"
                                    }), (0, l.jsx)("option", {
                                        value: "Jersey",
                                        children: "Jersey"
                                    }), (0, l.jsx)("option", {
                                        value: "Kosovo",
                                        children: "Kosovo"
                                    }), (0, l.jsx)("option", {
                                        value: "Latvia",
                                        children: "Latvia"
                                    }), (0, l.jsx)("option", {
                                        value: "Liechtenstein",
                                        children: "Liechtenstein"
                                    }), (0, l.jsx)("option", {
                                        value: "Lithuania",
                                        children: "Lithuania"
                                    }), (0, l.jsx)("option", {
                                        value: "Luxembourg",
                                        children: "Luxembourg"
                                    }), (0, l.jsx)("option", {
                                        value: "Macedonia, the Former Yugoslav Republic of",
                                        children: "Macedonia, the Former Yugoslav Republic of"
                                    }), (0, l.jsx)("option", {
                                        value: "Malta",
                                        children: "Malta"
                                    }), (0, l.jsx)("option", {
                                        value: "Moldova, Republic of",
                                        children: "Moldova, Republic of"
                                    }), (0, l.jsx)("option", {
                                        value: "Monaco",
                                        children: "Monaco"
                                    }), (0, l.jsx)("option", {
                                        value: "Montenegro",
                                        children: "Montenegro"
                                    }), (0, l.jsx)("option", {
                                        value: "Netherlands",
                                        children: "Netherlands"
                                    }), (0, l.jsx)("option", {
                                        value: "Norway",
                                        children: "Norway"
                                    }), (0, l.jsx)("option", {
                                        value: "Poland",
                                        children: "Poland"
                                    }), (0, l.jsx)("option", {
                                        value: "Portugal",
                                        children: "Portugal"
                                    }), (0, l.jsx)("option", {
                                        value: "Romania",
                                        children: "Romania"
                                    }), (0, l.jsx)("option", {
                                        value: "San Marino",
                                        children: "San Marino"
                                    }),(0, l.jsx)("option", {
                                        value: "Serbia",
                                        children: "Serbia"
                                    }), (0, l.jsx)("option", {
                                        value: "Serbia and Montenegro",
                                        children: "Serbia and Montenegro"
                                    }), (0, l.jsx)("option", {
                                        value: "Slovakia",
                                        children: "Slovakia"
                                    }), (0, l.jsx)("option", {
                                        value: "Slovenia",
                                        children: "Slovenia"
                                    }), (0, l.jsx)("option", {
                                        value: "Spain",
                                        children: "Spain"
                                    }), (0, l.jsx)("option", {
                                        value: "Svalbard and Jan Mayen",
                                        children: "Svalbard and Jan Mayen"
                                    }), (0, l.jsx)("option", {
                                        value: "Sweden",
                                        children: "Sweden"
                                    }), (0, l.jsx)("option", {
                                        value: "Switzerland",
                                        children: "Switzerland"
                                    }), (0, l.jsx)("option", {
                                        value: "Ukraine",
                                        children: "Ukraine"
                                    }), (0, l.jsx)("option", {
                                        value: "United Kingdom",
                                        children: "United Kingdom"
                                    }), (0, l.jsx)("option", { // --- Asia ---------------------------------
                                        value: "",
                                        children: "Asia",
                                        disabled: true,
                                        style: {
                                            color: "#bbb",
                                            fontSize: "18px",
                                        },
                                    }), (0, l.jsx)("option", {
                                        value: "Afghanistan",
                                        children: "Afghanistan"
                                    }), (0, l.jsx)("option", {
                                        value: "Armenia",
                                        children: "Armenia"
                                    }), (0, l.jsx)("option", {
                                        value: "Azerbaijan",
                                        children: "Azerbaijan"
                                    }), (0, l.jsx)("option", {
                                        value: "Bahrain",
                                        children: "Bahrain"
                                    }), (0, l.jsx)("option", {
                                        value: "Bangladesh",
                                        children: "Bangladesh"
                                    }), (0, l.jsx)("option", {
                                        value: "Bhutan",
                                        children: "Bhutan"
                                    }), (0, l.jsx)("option", {
                                        value: "British Indian Ocean Territory",
                                        children: "British Indian Ocean Territory"
                                    }), (0, l.jsx)("option", {
                                        value: "Brunei Darussalam",
                                        children: "Brunei Darussalam"
                                    }), (0, l.jsx)("option", {
                                        value: "Cambodia",
                                        children: "Cambodia"
                                    }), (0, l.jsx)("option", {
                                        value: "China",
                                        children: "China"
                                    }), (0, l.jsx)("option", {
                                        value: "Christmas Island",
                                        children: "Christmas Island"
                                    }), (0, l.jsx)("option", {
                                        value: "Cocos (Keeling) Islands",
                                        children: "Cocos (Keeling) Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "Cyprus",
                                        children: "Cyprus"
                                    }), (0, l.jsx)("option", {
                                        value: "Georgia",
                                        children: "Georgia"
                                    }), (0, l.jsx)("option", {
                                        value: "Hong Kong",
                                        children: "Hong Kong"
                                    }), (0, l.jsx)("option", {
                                        value: "India",
                                        children: "India"
                                    }), (0, l.jsx)("option", {
                                        value: "Indonesia",
                                        children: "Indonesia"
                                    }), (0, l.jsx)("option", {
                                        value: "Iran, Islamic Republic of",
                                        children: "Iran, Islamic Republic of"
                                    }), (0, l.jsx)("option", {
                                        value: "Iraq",
                                        children: "Iraq"
                                    }), (0, l.jsx)("option", {
                                        value: "Israel",
                                        children: "Israel"
                                    }), (0, l.jsx)("option", {
                                        value: "Japan",
                                        children: "Japan"
                                    }), (0, l.jsx)("option", {
                                        value: "Jordan",
                                        children: "Jordan"
                                    }), (0, l.jsx)("option", {
                                        value: "Kazakhstan",
                                        children: "Kazakhstan"
                                    }), (0, l.jsx)("option", {
                                        value: "Korea, Democratic People's Republic of",
                                        children: "Korea, Democratic People's Republic of"
                                    }), (0, l.jsx)("option", {
                                        value: "Korea, Republic of",
                                        children: "Korea, Republic of"
                                    }), (0, l.jsx)("option", {
                                        value: "Kuwait",
                                        children: "Kuwait"
                                    }), (0, l.jsx)("option", {
                                        value: "Kyrgyzstan",
                                        children: "Kyrgyzstan"
                                    }), (0, l.jsx)("option", {
                                        value: "Lao People's Democratic Republic",
                                        children: "Lao People's Democratic Republic"
                                    }), (0, l.jsx)("option", {
                                        value: "Lebanon",
                                        children: "Lebanon"
                                    }), (0, l.jsx)("option", {
                                        value: "Macao",
                                        children: "Macao"
                                    }), (0, l.jsx)("option", {
                                        value: "Malaysia",
                                        children: "Malaysia"
                                    }), (0, l.jsx)("option", {
                                        value: "Maldives",
                                        children: "Maldives"
                                    }), (0, l.jsx)("option", {
                                        value: "Mongolia",
                                        children: "Mongolia"
                                    }), (0, l.jsx)("option", {
                                        value: "Myanmar",
                                        children: "Myanmar"
                                    }), (0, l.jsx)("option", {
                                        value: "Nepal",
                                        children: "Nepal"
                                    }), (0, l.jsx)("option", {
                                        value: "Oman",
                                        children: "Oman"
                                    }), (0, l.jsx)("option", {
                                        value: "Pakistan",
                                        children: "Pakistan"
                                    }), (0, l.jsx)("option", {
                                        value: "Palestinian Territory, Occupied",
                                        children: "Palestinian Territory, Occupied"
                                    }), (0, l.jsx)("option", {
                                        value: "Philippines",
                                        children: "Philippines"
                                    }), (0, l.jsx)("option", {
                                        value: "Qatar",
                                        children: "Qatar"
                                    }), (0, l.jsx)("option", {
                                        value: "Russian Federation",
                                        children: "Russian Federation"
                                    }), (0, l.jsx)("option", {
                                        value: "Saudi Arabia",
                                        children: "Saudi Arabia"
                                    }), (0, l.jsx)("option", {
                                        value: "Singapore",
                                        children: "Singapore"
                                    }), (0, l.jsx)("option", {
                                        value: "Sri Lanka",
                                        children: "Sri Lanka"
                                    }), (0, l.jsx)("option", {
                                        value: "Syrian Arab Republic",
                                        children: "Syrian Arab Republic"
                                    }), (0, l.jsx)("option", {
                                        value: "Taiwan, Province of China",
                                        children: "Taiwan, Province of China"
                                    }), (0, l.jsx)("option", {
                                        value: "Tajikistan",
                                        children: "Tajikistan"
                                    }), (0, l.jsx)("option", {
                                        value: "Thailand",
                                        children: "Thailand"
                                    }), (0, l.jsx)("option", {
                                        value: "Timor-Leste",
                                        children: "Timor-Leste"
                                    }), (0, l.jsx)("option", {
                                        value: "Turkey",
                                        children: "Turkey"
                                    }), (0, l.jsx)("option", {
                                        value: "Turkmenistan",
                                        children: "Turkmenistan"
                                    }), (0, l.jsx)("option", {
                                        value: "United Arab Emirates",
                                        children: "United Arab Emirates"
                                    }), (0, l.jsx)("option", {
                                        value: "Uzbekistan",
                                        children: "Uzbekistan"
                                    }), (0, l.jsx)("option", {
                                        value: "Viet Nam",
                                        children: "Viet Nam"
                                    }), (0, l.jsx)("option", {
                                        value: "Yemen",
                                        children: "Yemen"
                                    }), (0, l.jsx)("option", { // --- Australia ---------------------------------
                                        value: "",
                                        children: "Australia",
                                        disabled: true,
                                        style: {
                                            color: "#bbb",
                                            fontSize: "18px",
                                        },
                                    }), (0, l.jsx)("option", {
                                        value: "American Samoa",
                                        children: "American Samoa"
                                    }), (0, l.jsx)("option", {
                                        value: "Australia",
                                        children: "Australia"
                                    }), (0, l.jsx)("option", {
                                        value: "Cook Islands",
                                        children: "Cook Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "Fiji",
                                        children: "Fiji"
                                    }), (0, l.jsx)("option", {
                                        value: "French Polynesia",
                                        children: "French Polynesia"
                                    }), (0, l.jsx)("option", {
                                        value: "Guam",
                                        children: "Guam"
                                    }), (0, l.jsx)("option", {
                                        value: "Kiribati",
                                        children: "Kiribati"
                                    }), (0, l.jsx)("option", {
                                        value: "Marshall Islands",
                                        children: "Marshall Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "Micronesia, Federated States of",
                                        children: "Micronesia, Federated States of"
                                    }), (0, l.jsx)("option", {
                                        value: "Nauru",
                                        children: "Nauru"
                                    }), (0, l.jsx)("option", {
                                        value: "New Caledonia",
                                        children: "New Caledonia"
                                    }), (0, l.jsx)("option", {
                                        value: "New Zealand",
                                        children: "New Zealand"
                                    }), (0, l.jsx)("option", {
                                        value: "Niue",
                                        children: "Niue"
                                    }), (0, l.jsx)("option", {
                                        value: "Norfolk Island",
                                        children: "Norfolk Island"
                                    }), (0, l.jsx)("option", {
                                        value: "Northern Mariana Islands",
                                        children: "Northern Mariana Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "Palau",
                                        children: "Palau"
                                    }), (0, l.jsx)("option", {
                                        value: "Papua New Guinea",
                                        children: "Papua New Guinea"
                                    }), (0, l.jsx)("option", {
                                        value: "Pitcairn",
                                        children: "Pitcairn"
                                    }), (0, l.jsx)("option", {
                                        value: "Samoa",
                                        children: "Samoa"
                                    }), (0, l.jsx)("option", {
                                        value: "Solomon Islands",
                                        children: "Solomon Islands"
                                    }), (0, l.jsx)("option", {
                                        value: "Tokelau",
                                        children: "Tokelau"
                                    }), (0, l.jsx)("option", {
                                        value: "Tonga",
                                        children: "Tonga"
                                    }), (0, l.jsx)("option", {
                                        value: "Tuvalu",
                                        children: "Tuvalu"
                                    }), (0, l.jsx)("option", {
                                        value: "Vanuatu",
                                        children: "Vanuatu"
                                    }), (0, l.jsx)("option", {
                                        value: "Wallis and Futuna",
                                        children: "Wallis and Futuna"
                                    }), (0, l.jsx)("option", { // --- Africa ---------------------------------
                                        value: "",
                                        children: "Africa",
                                        disabled: true,
                                        style: {
                                            color: "#bbb",
                                            fontSize: "18px",
                                        },
                                    }), (0, l.jsx)("option", {
                                        value: "Algeria",
                                        children: "Algeria"
                                    }), (0, l.jsx)("option", {
                                        value: "Angola",
                                        children: "Angola"
                                    }), (0, l.jsx)("option", {
                                        value: "Benin",
                                        children: "Benin"
                                    }), (0, l.jsx)("option", {
                                        value: "Botswana",
                                        children: "Botswana"
                                    }), (0, l.jsx)("option", {
                                        value: "Burkina Faso",
                                        children: "Burkina Faso"
                                    }), (0, l.jsx)("option", {
                                        value: "Burundi",
                                        children: "Burundi"
                                    }), (0, l.jsx)("option", {
                                        value: "Cameroon",
                                        children: "Cameroon"
                                    }), (0, l.jsx)("option", {
                                        value: "Cape Verde",
                                        children: "Cape Verde"
                                    }), (0, l.jsx)("option", {
                                        value: "Central African Republic",
                                        children: "Central African Republic"
                                    }), (0, l.jsx)("option", {
                                        value: "Chad",
                                        children: "Chad"
                                    }), (0, l.jsx)("option", {
                                        value: "Comoros",
                                        children: "Comoros"
                                    }), (0, l.jsx)("option", {
                                        value: "Congo",
                                        children: "Congo"
                                    }), (0, l.jsx)("option", {
                                        value: "Congo, Democratic Republic of the Congo",
                                        children: "Congo, Democratic Republic of the Congo"
                                    }), (0, l.jsx)("option", {
                                        value: "Cote D'Ivoire",
                                        children: "Cote D'Ivoire"
                                    }), (0, l.jsx)("option", {
                                        value: "Djibouti",
                                        children: "Djibouti"
                                    }), (0, l.jsx)("option", {
                                        value: "Egypt",
                                        children: "Egypt"
                                    }), (0, l.jsx)("option", {
                                        value: "Equatorial Guinea",
                                        children: "Equatorial Guinea"
                                    }), (0, l.jsx)("option", {
                                        value: "Eritrea",
                                        children: "Eritrea"
                                    }), (0, l.jsx)("option", {
                                        value: "Ethiopia",
                                        children: "Ethiopia"
                                    }), (0, l.jsx)("option", {
                                        value: "Gabon",
                                        children: "Gabon"
                                    }), (0, l.jsx)("option", {
                                        value: "Gambia",
                                        children: "Gambia"
                                    }), (0, l.jsx)("option", {
                                        value: "Ghana",
                                        children: "Ghana"
                                    }), (0, l.jsx)("option", {
                                        value: "Guinea",
                                        children: "Guinea"
                                    }), (0, l.jsx)("option", {
                                        value: "Guinea-Bissau",
                                        children: "Guinea-Bissau"
                                    }), (0, l.jsx)("option", {
                                        value: "Kenya",
                                        children: "Kenya"
                                    }), (0, l.jsx)("option", {
                                        value: "Lesotho",
                                        children: "Lesotho"
                                    }), (0, l.jsx)("option", {
                                        value: "Liberia",
                                        children: "Liberia"
                                    }), (0, l.jsx)("option", {
                                        value: "Libyan Arab Jamahiriya",
                                        children: "Libyan Arab Jamahiriya"
                                    }), (0, l.jsx)("option", {
                                        value: "Madagascar",
                                        children: "Madagascar"
                                    }), (0, l.jsx)("option", {
                                        value: "Malawi",
                                        children: "Malawi"
                                    }), (0, l.jsx)("option", {
                                        value: "Mali",
                                        children: "Mali"
                                    }), (0, l.jsx)("option", {
                                        value: "Mauritania",
                                        children: "Mauritania"
                                    }), (0, l.jsx)("option", {
                                        value: "Mauritius",
                                        children: "Mauritius"
                                    }), (0, l.jsx)("option", {
                                        value: "Mayotte",
                                        children: "Mayotte"
                                    }), (0, l.jsx)("option", {
                                        value: "Morocco",
                                        children: "Morocco"
                                    }), (0, l.jsx)("option", {
                                        value: "Mozambique",
                                        children: "Mozambique"
                                    }), (0, l.jsx)("option", {
                                        value: "Namibia",
                                        children: "Namibia"
                                    }), (0, l.jsx)("option", {
                                        value: "Niger",
                                        children: "Niger"
                                    }), (0, l.jsx)("option", {
                                        value: "Nigeria",
                                        children: "Nigeria"
                                    }), (0, l.jsx)("option", {
                                        value: "Reunion",
                                        children: "Reunion"
                                    }), (0, l.jsx)("option", {
                                        value: "Rwanda",
                                        children: "Rwanda"
                                    }), (0, l.jsx)("option", {
                                        value: "Saint Helena",
                                        children: "Saint Helena"
                                    }), (0, l.jsx)("option", {
                                        value: "Sao Tome and Principe",
                                        children: "Sao Tome and Principe"
                                    }), (0, l.jsx)("option", {
                                        value: "Senegal",
                                        children: "Senegal"
                                    }), (0, l.jsx)("option", {
                                        value: "Seychelles",
                                        children: "Seychelles"
                                    }), (0, l.jsx)("option", {
                                        value: "Sierra Leone",
                                        children: "Sierra Leone"
                                    }), (0, l.jsx)("option", {
                                        value: "Somalia",
                                        children: "Somalia"
                                    }), (0, l.jsx)("option", {
                                        value: "South Africa",
                                        children: "South Africa"
                                    }), (0, l.jsx)("option", {
                                        value: "South Sudan",
                                        children: "South Sudan"
                                    }), (0, l.jsx)("option", {
                                        value: "Sudan",
                                        children: "Sudan"
                                    }), (0, l.jsx)("option", {
                                        value: "Swaziland",
                                        children: "Swaziland"
                                    }), (0, l.jsx)("option", {
                                        value: "Tanzania, United Republic of",
                                        children: "Tanzania, United Republic of"
                                    }), (0, l.jsx)("option", {
                                        value: "Togo",
                                        children: "Togo"
                                    }), (0, l.jsx)("option", {
                                        value: "Tunisia",
                                        children: "Tunisia"
                                    }), (0, l.jsx)("option", {
                                        value: "Uganda",
                                        children: "Uganda"
                                    }), (0, l.jsx)("option", {
                                        value: "Western Sahara",
                                        children: "Western Sahara"
                                    }), (0, l.jsx)("option", {
                                        value: "Zambia",
                                        children: "Zambia"
                                    }), (0, l.jsx)("option", {
                                        value: "Zimbabwe",
                                        children: "Zimbabwe"
                                    })] // ------------------------------------ List of Countries End.
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col mb-45px",
                                children: [(0, l.jsx)("span", {
                                    className: "flex font-semibold text-gray-900 text-18px mb-15px hint--top hint--large hint--rounded hint--underline",
                                    children: "Payment",
                                    'aria-label': "Send exact amount at the wallet address displayed below.",
                                }), (0, l.jsx)("div", {
                                    className: "text-gray-500 text-11px mb-2",
                                    children: "Send:",
                                }), (0, l.jsx)("div", {
                                    className: "text-center font-bold text-gray-900 text-24px mb-20px",
                                    children: [(0, l.jsx)("span", {
                                        children: totalPrice,
                                    }), (0, l.jsx)("span", {
                                        className: "curr hint--top hint--rounded hint--underline",
                                        'aria-label': currencyHint,
                                        children: currencySign,
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "text-gray-500 text-11px mb-2",
                                    children: "To this address:",
                                }), (0, l.jsxs)("div", {
                                    className: "text-left text-13px text-gray-700 mb-20px dashed-border",
                                    children: [(0, l.jsx)("a", {
                                        id: "paymentURI",
                                        className: "text-center font-semibold text-gray-900 text-16px",
                                        style: {
                                            wordWrap: "break-word",
                                            textAlign: "justify",
                                        }
                                    }) ]
                                }), (0, l.jsx)("div", {
                                    className: "text-gray-500 text-11px mb-2 text-center",
                                    children: "Or scan QR",
                                }), (0, l.jsx)("div", {
                                    id: "qrcode",
                                    className: "text-center text-gray-700",
                                    style: {
                                        //height: "250px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    },
                                })]
                            })]
                        })
                    }), (0, l.jsx)("div", {
                        className: "flex flex-col p-30px",
                        children: [(0, l.jsx)(xe, {
                            name: "redirectTo",
                            type: "hidden",
                            value: redirectTo,
                            onChange: w
                        }), (0, l.jsx)("div", {
                            className: "mt-15px mb-15px text-center text-13px text-gray-900 loader",
                            children: "Waiting for payment...",
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "none",
                            },
                        }), (0, l.jsx)("div", {
                            id: "CAPTCHA",
                            //className: "mb-10px",
                            //children: "CAPTCHA",
                        }), (0, l.jsx)(F.Z, {
                            className: "big w-full mt-20px",
                            onClick: y,
                            loading: x,
                            children: "Order Now",
                            type: "submit",
                            value: "Submit",
                        })]
                    })]

                })
            }

            var itemsInBasket = function(){ 
                localforage.iterate(function(value, key, iterationNumber) {
                    const products = JSON.parse(value);
                    if (products && products.items && products.items.length > 0) {                          
                        var basket = products.items.map(item => `${item.name} x ${item.quantity}`).join(";\n");
                        document.getElementById('itemsInBasket').value = basket;
                    };
                });
            }

            var Ne = ["children", "activeClassName", "href"];

            function Pe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Pe(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ke = function(e) {
                var t = e.children,
                    r = e.activeClassName,
                    a = e.href,
                    o = (0, x.Z)(e, Ne),
                    i = (0, P.useRouter)().pathname,
                    c = n.Children.only(t),
                    d = c.props.className || "",
                    f = i === a ? "".concat(d, " ").concat(r).trim() : d;
                return (0, l.jsx)(s.default, Ce(Ce({
                    href: a
                }, o), {}, {
                    children: n.cloneElement(c, {
                        className: f || null
                    })
                }))
            },
                Ze = function(e) {
                    e.color;
                    var t = e.width,
                        r = void 0 === t ? "18px" : t,
                        a = e.height,
                        n = void 0 === a ? "18px" : a;
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: r,
                        height: n,
                        viewBox: "0 0 18 18",
                        children: (0, l.jsx)("path", {
                            d: "M6.572,4.87a1.2,1.2,0,0,0-1.7,1.7l6.947,6.947L4.87,20.465a1.2,1.2,0,1,0,1.7,1.7l6.946-6.946,6.946,6.946a1.2,1.2,0,0,0,1.7-1.7l-6.946-6.946,6.947-6.947a1.2,1.2,0,0,0-1.7-1.7l-6.946,6.947Z",
                            transform: "translate(-4.518 -4.518)"
                        })
                    })
                },
                De = [{
                    id: 0,
                    link: "#",
                    icon: (0, l.jsx)(k, {}),
                    className: "footer-img",
                }];

            // Menu Links
            function Ge() {
                var e = (0, n.useContext)(O.r).dispatch,
                    t = function() {
                        e({
                            type: "OPEN_MENU",
                            payload: {
                                menu: !1
                            }
                        })
                    };
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        className: "flex flex-col w-full h-full",
                        children: [(0, l.jsxs)("div", {
                            className: "w-full h-90px bg-gray-100 flex justify-start items-center relative px-30px flex-shrink-0",
                            children: [(0, l.jsx)(s.default, {
                                href: "#",
                                children: (0, l.jsxs)("a", {
                                    className: "flex",
                                    onClick: t,
                                    children: [(0, l.jsx)("span", {
                                        className: "sr-only",
                                        children: "DeCommerce"
                                    }), (0, l.jsx)(p, {
                                        width: "100px",
                                        id: "menu-logo"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "flex items-center justify-end ml-auto pl-30px pr-50px text-gray-700 flex-shrink-0 lg:hidden",
                                children: (0, l.jsx)("a", {
                                    href: customerSupportLink,
                                    target: "_blank",
                                    className: "font-semibold text-base text-14px ml-3",
                                    children: customerSupportText,
                                })
                            }), (0, l.jsx)("button", {
                                className: "w-30px h-30px flex items-center justify-center text-gray-500 absolute right-25px focus:outline-none",
                                onClick: t,
                                "aria-label": "close",
                                children: (0, l.jsx)(Ze, {})
                            })]
                        }), (0, l.jsx)(T, {
                            className: "menu-scrollbar flex-grow",
                            children: (0, l.jsx)("div", {
                                className: "flex flex-col py-60px pb-40px lg:pb-60px",
                                children: [ (0, l.jsx)("a", {
                                    href: href_Link1,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link1,
                                }), (0, l.jsx)("a", {
                                    href: href_Link2,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link2,
                                }), (0, l.jsx)("a", {
                                    href: href_Link3,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link3,
                                }), (0, l.jsx)("a", {
                                    href: href_Link4,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link4,
                                }), (0, l.jsx)("a", {
                                    href: href_Link5,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link5,
                                }), (0, l.jsx)("a", {
                                    href: href_Link6,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link6,
                                }), (0, l.jsx)("a", {
                                    href: href_Link7,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link7,
                                }), (0, l.jsx)("a", {
                                    href: href_Link8,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link8,
                                }), (0, l.jsx)("a", {
                                    href: href_Link9,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link9,
                                }), (0, l.jsx)("a", {
                                    href: href_Link10,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link10,
                                }), (0, l.jsx)("a", {
                                    href: href_Link11,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link11,
                                }), (0, l.jsx)("a", {
                                    href: href_Link12,
                                    className: "menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900",
                                    children: text_Link12,
                                })],
                            })
                        }), (0, l.jsx)("div", {
                            className: "flex items-center justify-center border-t border-gray-300 bg-gray-100 h-12 px-30px flex-shrink-0 lg:hidden",
                            children: De.map((function(e, t) {
                                return (0, l.jsxs)("a", {
                                    href: e.link,
                                    className: "social ".concat(e.className),
                                    children: [(0, l.jsx)("span", {
                                        className: "sr-only",
                                        children: e.title
                                    }), e.icon]
                                }, t)
                            }))
                        })]
                    })
                })
            }

            var Ee = function() {
                var e = (0, n.useContext)(O.r),
                    t = e.state,
                    r = e.dispatch;
                return (0, l.jsxs)(n.Fragment, {
                    children: [!0 === (null === t || void 0 === t ? void 0 : t.open) ? (0, l.jsx)("div", {
                        className: "overlay",
                        role: "button",
                        onClick: function() {
                            return r({
                                type: "SLIDE_CART",
                                payload: {
                                    open: !1
                                }
                            })
                        }
                    }) : "", (0, l.jsx)("div", {
                        className: "drawer drawer-cart ".concat(!0 === (null === t || void 0 === t ? void 0 : t.open) ? "open" : ""),
                        children: function(e) {
                            return !0 === (null === e || void 0 === e ? void 0 : e.showDetails) ? (0, l.jsx)(X, {}) : !0 === (null === e || void 0 === e ? void 0 : e.showCart) ? (0, l.jsx)(re, {}) : !0 === (null === e || void 0 === e ? void 0 : e.showCheckout) ? (0, l.jsx)(Oe, {}) : (0, l.jsx)(re, {})
                        }(t)
                    })]
                })
            },
                Ae = function() {
                    var e = (0, n.useContext)(O.r),
                        t = e.state,
                        r = e.dispatch;
                    return (0, l.jsxs)(n.Fragment, {
                        children: [!0 === (null === t || void 0 === t ? void 0 : t.menu) ? (0, l.jsx)("div", {
                            className: "overlay overlay-menu",
                            role: "button",
                            onClick: function() {
                                return r({
                                    type: "OPEN_MENU",
                                    payload: {
                                        menu: !1
                                    }
                                })
                            }
                        }) : "", (0, l.jsx)("div", {
                            className: "drawer drawer-menu ".concat(!0 === (null === t || void 0 === t ? void 0 : t.menu) ? "open" : ""),
                            children: (0, l.jsx)(Ge, {})
                        })]
                    })
                };

            function He(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function Se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? He(Object(r), !0).forEach((function(t) {
                        (0, a.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : He(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ve = function(e) {
                return (0, l.jsxs)("main", {
                    className: "relative min-h-screen flex-grow",
                    style: Se({
                        minHeight: "-webkit-fill-available",
                        WebkitOverflowScrolling: "touch"
                    }, e.style),
                    children: [(0, l.jsx)(Ae, {}), (0, l.jsx)(C, {}), (0, l.jsxs)("div", {
                        className: "flex flex-col w-full h-full min-h-screen flex-grow",
                        children: [(0, l.jsx)("div", {
                            className: "pt-90px px-3 pb-50px flex-auto md:px-35px",
                            children: e.children
                        }), (0, l.jsx)(H, {})]
                    }), (0, l.jsx)(Ee, {})]
                })
            }
            },
        405: function(e, t, r) {
            r.d(t, {
                w: function() {
                    return a
                }
            });
            //var a = "$"
            var a = ""
            }
    }
]);