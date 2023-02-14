(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        4012: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return se
                },
                default: function() {
                    return le
                }
            });
            var a = r(7294),
                n = r(9008),
                i = r(5448),
                s = r(2809),
                l = r(219),
                o = r(6529),
                c = r(5893),
                d = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "8.5px" : a,
                        i = e.height,
                        s = void 0 === i ? "14px" : i;
                    return (0, c.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: s,
                        viewBox: "0 0 8.4 14",
                        children: (0, c.jsx)("path", {
                            id: "chevron-left",
                            d: "M16.157,6.329l-1.4-1.4-7,7,7,7,1.4-1.4-5.6-5.6Z",
                            transform: "translate(-7.757 -4.93)",
                            fill: r
                        })
                    })
                },
                p = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "8.5px" : a,
                        i = e.height,
                        s = void 0 === i ? "14px" : i;
                    return (0, c.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: s,
                        viewBox: "0 0 8.4 14",
                        children: (0, c.jsx)("path", {
                            d: "M7.757,6.329l1.4-1.4,7,7-7,7-1.4-1.4,5.6-5.6Z",
                            transform: "translate(-7.757 -4.929)",
                            fill: r
                        })
                    })
                },
                u = r(1340),
                f = (r(4472), ["data", "autoPlay", "infinite", "itemClass", "className"]);

            function m(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var h = function(e) {
                var t = e.onClick,
                    r = e.children;
                return (0, c.jsx)("button", {
                    onClick: function(e) {
                        e.preventDefault(), t(e)
                    },
                    "aria-label": "prev-button",
                    className: u.Vn + " " + u.VY,
                    children: r
                })
            },
                g = function(e) {
                    var t = e.onClick,
                        r = e.children;
                    return (0, c.jsx)("button", {
                        onClick: function(e) {
                            e.preventDefault(), t(e)
                        },
                        "aria-label": "next-button",
                        className: u.Vn + " " + u.Bo,
                        children: r
                    })
                },
                j = function(e) {
                    var t = e.next,
                        r = e.previous;
                    return (0, c.jsxs)("div", {
                        className: u.S_,
                        children: [(0, c.jsx)(h, {
                            onClick: function() {
                                return r()
                            },
                            children: (0, c.jsx)(d, {
                                height: "12px"
                            })
                        }), (0, c.jsx)(g, {
                            onClick: function() {
                                return t()
                            },
                            children: (0, c.jsx)(p, {
                                height: "12px"
                            })
                        })]
                    })
                },
                b = {
                    desktop: {
                        breakpoint: {
                            max: 3e3,
                            min: 1280
                        },
                        items: 4
                    },
                    smallScreen: {
                        breakpoint: {
                            max: 1279,
                            min: 851
                        },
                        items: 3
                    },
                    tablet: {
                        breakpoint: {
                            max: 850,
                            min: 601
                        },
                        items: 2
                    },
                    mobile: {
                        breakpoint: {
                            max: 600,
                            min: 0
                        },
                        items: 1
                    }
                },
                v = function(e) {
                    var t = e.data,
                        r = e.autoPlay,
                        n = e.infinite,
                        i = e.itemClass,
                        s = e.className,
                        d = (0, l.Z)(e, f);
                    return (0, c.jsx)(o.default, x(x({
                        arrows: !1,
                        responsive: b,
                        ssr: !0,
                        showDots: !1,
                        slidesToSlide: 1,
                        infinite: n,
                        containerClass: "carousel-container",
                        itemClass: i,
                        autoPlay: r,
                        autoPlaySpeed: 3e3,
                        renderButtonGroupOutside: !0,
                        additionalTransfrom: 0,
                        customButtonGroup: (0, c.jsx)(j, {}),
                        className: s
                    }, d), {}, {
                        children: t.map((function(e, t) {
                            return (0, c.jsx)(a.Fragment, {
                                children: e && e.link ? (0, c.jsxs)("a", {
                                    href: e.link,
                                    className: u.ji,
                                    children: [(0, c.jsx)("span", {
                                        className: "sr-only",
                                        children: e.title
                                    }), (0, c.jsx)("img", {
                                        src: e.image,
                                        className: u.Fk,
                                        alt: e.title
                                    })]
                                }) : (0, c.jsx)("div", {
                                    className: u.ji,
                                    children: (0, c.jsx)("img", {
                                        src: e.image,
                                        className: u.Fk,
                                        alt: e.title
                                    })
                                })
                            }, t)
                        }))
                    }))
                };
            v.defaultProps = {
                autoPlay: !1,
                infinite: !0,
                className: ""
            };
            var w = v,
                y = r(7259),
                P = r.n(y),
                O = r(2023),
                k = r.n(O),
                N = r(4640),
                C = r.n(N),
                Z = r(9316),
                M = r.n(Z),
                _ = [{
                    id: 1,
                    image: C(),
                    link: banner_1_Link,
                }, {
                    id: 2,
                    image: P(),
                    link: banner_2_Link,
                }, {
                    id: 3,
                    image: k(),
                    link: banner_3_Link,
                }, {
                    id: 4,
                    image: M(),
                    link: banner_4_Link,
                }];

            function E() {
                return (0, c.jsx)("div", {
                    className: "w-full relative my-35px",
                    children: (0, c.jsx)(w, {
                        data: _,
                        itemClass: "px-5px"
                    })
                })
            }
            var L = r(405),
                D = function(e) {
                    var t = e.item,
                        r = e.onClick;
                    return (0, c.jsxs)("div", {
                        className: u.r0,
                        onClick: r,
                        children: [(0, c.jsx)("div", {
                            className: u.sT,
                            children: (0, c.jsx)("img", {
                                className: "object-cover",
                                src: t.image,
                                alt: " Alt " + t.name
                            })
                        }), (0, c.jsxs)("div", {
                            className: u.CF,
                            children: [(0, c.jsxs)("span", {
                                className: u.eo,
                                children: [L.w, t.price]
                                //children: [I.w, (t.price * t.quantity).toFixed(2)]
                            }), (0, c.jsx)("span", {
                                className: "text-13px",
                                children: t.name
                            })]
                        })]
                    })
                },
                S = r(9942),
                T = r(2986);

            function V(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var R = function(e) {
                return (0, c.jsx)("svg", A(A({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "180",
                    height: "309.722",
                    viewBox: "0 0 180 309.722"
                }, e), {}, {
                    children: (0, c.jsx)("g", {
                        "data-name": "no cart in bag",
                        transform: "translate(-988 -7673)",
                        children: (0, c.jsx)("g", {
                            "data-name": "no cart",
                            transform: "translate(988 7673)",
                            children: (0, c.jsxs)("g", {
                                "data-name": "Group 5970",
                                transform: "translate(0 0)",
                                children: [(0, c.jsxs)("g", {
                                    "data-name": "Group 5967",
                                    transform: "translate(17.408 92.119)",
                                    children: [(0, c.jsx)("path", {
                                        "data-name": "Path 17743",
                                        d: "M405.506,794.581l63.621-36.762L418.2,724.274Z",
                                        transform: "translate(-323.428 -576.978)",
                                        fill: "#ba8064"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17744",
                                        d: "M135.711,140.727l32.918-.12,1.287-20.225,79.451,45.843-34.42,1.084v19.165Z",
                                        transform: "translate(-118.988 -119.373)",
                                        fill: "#dba480"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17745",
                                        d: "M314.4,206.341,272,124.761l-2.279,22.008,1.4,59.572Z",
                                        transform: "translate(-220.537 -122.691)",
                                        fill: "#460100",
                                        opacity: "0.1"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17746",
                                        d: "M141.237,253.056l-10.26-47.388,34.59-.126v37.243Z",
                                        transform: "translate(-115.402 -183.904)",
                                        fill: "#995b47"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17747",
                                        d: "M511.029,445.295l-49.136-22.179L460.8,385.489l1.089-72.515,35.954-1.133Z",
                                        transform: "translate(-365.33 -264.454)",
                                        fill: "#a96e56"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17748",
                                        d: "M148.755,398.756l9.58-70.307,4.9-79.149L81.161,201.911,66.677,351.368Z",
                                        transform: "translate(-66.677 -181.153)",
                                        fill: "#dba480"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17749",
                                        d: "M349.459,429.379c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.414-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,349.459,429.379Z",
                                        transform: "translate(-276.046 -348.874)",
                                        fill: "#67251d"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17750",
                                        d: "M209.819,348.753c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.415-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,209.819,348.753Z",
                                        transform: "translate(-170.233 -287.779)",
                                        fill: "#67251d"
                                    }), (0, c.jsx)("g", {
                                        "data-name": "Group 5965",
                                        transform: "translate(31.503 60.166)",
                                        opacity: "0.2",
                                        children: (0, c.jsx)("path", {
                                            "data-name": "Path 17751",
                                            d: "M219.35,441.507a16.861,16.861,0,0,1-8.439-2.272A28.35,28.35,0,0,1,196.858,412l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41a16.912,16.912,0,0,1-16.809,15.266Z",
                                            transform: "translate(-196.727 -364.591)",
                                            fill: "#460100"
                                        })
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17752",
                                        d: "M162.373,116.218,161.06,136.85l-34.59.126,82.078,47.388V164.738l35.954-1.132Zm44.968,47.351v18.7l-76.395-44.106,31.247-.113,1.261-19.819,76.774,44.3Z",
                                        transform: "translate(-111.986 -116.218)",
                                        fill: "#fcc89d"
                                    }), (0, c.jsx)("g", {
                                        "data-name": "Group 5966",
                                        transform: "translate(29.24 57.45)",
                                        children: (0, c.jsx)("path", {
                                            "data-name": "Path 17753",
                                            d: "M210.007,430.3a16.864,16.864,0,0,1-8.438-2.271,28.35,28.35,0,0,1-14.054-27.235l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41A16.912,16.912,0,0,1,210.007,430.3Z",
                                            transform: "translate(-187.384 -353.38)",
                                            fill: "#995b47"
                                        })
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17754",
                                        d: "M405.506,546.991,419.99,488.05V397.534Z",
                                        transform: "translate(-323.428 -329.388)",
                                        fill: "#995b47"
                                    })]
                                }), (0, c.jsxs)("g", {
                                    "data-name": "Group 5968",
                                    transform: "translate(0 0)",
                                    children: [(0, c.jsx)("path", {
                                        "data-name": "Path 17755",
                                        d: "M394.573,120.6c-.142-.5.244-.855.5-1.088a1.4,1.4,0,0,0,.271-.293,0,0,0,0,0,0,0,1.39,1.39,0,0,0-.384-.107c-.34-.065-.853-.162-1-.665s.244-.855.5-1.088a1.39,1.39,0,0,0,.271-.293,0,0,0,0,0,0,0,1.4,1.4,0,0,0-.384-.107c-.34-.064-.853-.162-1-.664s.244-.855.5-1.088l.009-.008a.9.9,0,0,0,.259-.482.391.391,0,0,1,.276-.292.41.41,0,0,1,.5.316,1.122,1.122,0,0,1-.51,1.046,1.4,1.4,0,0,0-.271.292,0,0,0,0,0,0,0,1.4,1.4,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.4,1.4,0,0,0-.271.293,0,0,0,0,0,0,0,1.391,1.391,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.257,1.257,0,0,0-.273.3,0,0,0,0,0,0,0,1.641,1.641,0,0,0,.387.1c.331.063.826.157.983.625a.416.416,0,0,1-.21.507.392.392,0,0,1-.456-.109.789.789,0,0,0-.464-.253h0C395.229,121.2,394.716,121.1,394.573,120.6Z",
                                        transform: "translate(-349.075 -37.518)",
                                        fill: "#212121",
                                        opacity: "0.3"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17765",
                                        d: "M395.468,120.6c.142-.5-.244-.855-.5-1.088a1.4,1.4,0,0,1-.271-.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1,.384-.107c.34-.065.853-.162,1-.665s-.244-.855-.5-1.088a1.389,1.389,0,0,1-.271-.293,0,0,0,0,1,0,0,1.4,1.4,0,0,1,.384-.107c.34-.064.853-.162,1-.664s-.244-.855-.5-1.088l-.009-.008a.9.9,0,0,1-.259-.482.391.391,0,0,0-.276-.292.41.41,0,0,0-.5.316,1.122,1.122,0,0,0,.51,1.046,1.4,1.4,0,0,1,.271.292,0,0,0,0,1,0,0,1.4,1.4,0,0,1-.384.107c-.34.065-.853.162-1,.664s.244.855.5,1.088a1.4,1.4,0,0,1,.271.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1-.384.107c-.34.065-.853.162-1,.665s.244.855.5,1.088a1.257,1.257,0,0,1,.273.3,0,0,0,0,1,0,0,1.641,1.641,0,0,1-.387.1c-.331.063-.826.157-.983.625a.416.416,0,0,0,.21.507.392.392,0,0,0,.456-.109.789.789,0,0,1,.464-.253h0C394.812,121.2,395.326,121.1,395.468,120.6Z",
                                        transform: "translate(-262.76 -23.736)",
                                        fill: "#212121",
                                        opacity: "0.3"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17756",
                                        d: "M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z",
                                        transform: "translate(-375.232 -52.408)",
                                        fill: "#212121",
                                        opacity: "0.3"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17764",
                                        d: "M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z",
                                        transform: "translate(-333.888 -175.716)",
                                        fill: "#212121",
                                        opacity: "0.3"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17757",
                                        d: "M350.086,264.8a1.852,1.852,0,0,1-2.682-2.547l-.868-.823a3.047,3.047,0,0,0,4.417,4.194Z",
                                        transform: "translate(-253.642 -206.302)",
                                        fill: "#212121",
                                        opacity: "0.3"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Path 17766",
                                        d: "M346.628,264.8a1.852,1.852,0,0,0,2.682-2.547l.867-.823a3.047,3.047,0,0,1-4.417,4.194Z",
                                        transform: "translate(-170.953 -110.557)",
                                        fill: "#212121",
                                        opacity: "0.15"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Union 11",
                                        d: "M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z",
                                        transform: "translate(6.528 48.598)",
                                        fill: "#212121",
                                        stroke: "rgba(0,0,0,0)",
                                        strokeMiterlimit: "10",
                                        strokeWidth: "1",
                                        opacity: "0.3"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Union 13",
                                        d: "M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z",
                                        transform: "translate(94.294 121.132)",
                                        fill: "#212121",
                                        stroke: "rgba(0,0,0,0)",
                                        strokeMiterlimit: "10",
                                        strokeWidth: "1",
                                        opacity: "0.3"
                                    }), (0, c.jsx)("path", {
                                        "data-name": "Union 12",
                                        d: "M1.235,4.182l.593-1.829L0,1.759l.17-.524L2,1.829,2.592,0l.525.17L2.523,2l1.828.594-.17.523L2.353,2.523,1.759,4.352Z",
                                        transform: "translate(107.351 6.528)",
                                        fill: "#212121",
                                        stroke: "rgba(0,0,0,0)",
                                        strokeMiterlimit: "10",
                                        strokeWidth: "1",
                                        opacity: "0.3"
                                    })]
                                })]
                            })
                        })
                    })
                }))
            },
                B = r(218),
                G = a.forwardRef((function(e, t) {
                    var r = e.items,
                        n = (0, a.useContext)(S.r).dispatch,
                        i = (0, T.R)().searchTerm,
                        s = function(e, t, r, n) {
                            return (0, a.useMemo)((function() {
                                var a = new RegExp(r, "i"),
                                    i = e;
                                return t && (i = i.filter((function(e) {
                                    var r;
                                    return null === (r = e.category_ids.split(",")) || void 0 === r ? void 0 : r.includes(t)
                                }))), i.filter((function(e) {
                                    return n(e).some((function(e) {
                                        return a.test(e)
                                    }))
                                }))
                            }), [e, r, n])
                        }(r, (0, B.b)().category, i, (function(e) {
                            return [e.name]
                        }));
                    return (0, c.jsx)("div", {
                        className: "w-full py-10",
                        ref: t,
                        id: "myScrollToElement",
                        children: s.length ? (0, c.jsx)("div", {
                            className: "grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 md:gap-x-4 md:gap-y-8 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10 xxl:grid-cols-5 xxl:gap-x-4 xxl:gap-y-12 2xxl:grid-cols-7 2xxl:gap-x-5 2xxl:gap-y-12",
                            children: s.map((function(e) {
                                return (0, c.jsx)(D, {
                                    item: e,
                                    onClick: function() {
                                        return function(e) {
                                            n({
                                                type: "STORE_PRODUCT_DETAIL",
                                                payload: {
                                                    item: e
                                                }
                                            }), n({
                                                type: "SLIDE_CART",
                                                payload: {
                                                    open: !0
                                                }
                                            }), n({
                                                type: "TOGGLE_PRODUCT_DETAIL",
                                                payload: {
                                                    showDetails: !0
                                                }
                                            })
                                        }(e)
                                    }
                                }, e.id)
                            }))
                        }) : (0, c.jsxs)("div", {
                            className: "pt-10px md:pt-40px lg:pt-20px pb-40px",
                            children: [(0, c.jsx)(R, {
                                width: "100%"
                            }), (0, c.jsx)("h3", {
                                className: "text-24px text-gray-900 font-bold mt-35px mb-0 text-center",
                                children: "No product found :("
                            })]
                        })
                    })
                })),
                W = function(e) {
                    var t = e.background,
                        r = e.children,
                        a = e.parentClassName,
                        n = void 0 === a ? "" : a,
                        i = e.childClassName,
                        s = void 0 === i ? "" : i,
                        l = u.LC + " " + n + " cta-base",
                        o = u.lb + " " + s;
                    return (0, c.jsxs)("a", {
                        //className: l,
                        className: "banner-bottom overflow-hidden rounded",
                        href: bannerBottomLink,
                        children: [(0, c.jsx)("img", {
                            src: bannerBottomImg,
                            className: "banner banner-bottom-img w-full h-full object-cover rounded",
                            alt: "",
                        })]

                    })        
                },
                F = r(486),
                U = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "currentColor" : t,
                        a = e.width,
                        n = void 0 === a ? "16px" : a,
                        i = e.height,
                        s = void 0 === i ? "13px" : i;
                    return (0, c.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: n,
                        height: s,
                        viewBox: "0 0 15.333 12.825",
                        children: (0, c.jsxs)("g", {
                            "data-name": "arrow-forward (1)",
                            transform: "translate(-93 -110.588)",
                            children: [(0, c.jsx)("path", {
                                "data-name": "Path 16639",
                                d: "M268,112l4.517,5L268,122",
                                transform: "translate(-165.184 0)",
                                fill: "none",
                                stroke: r,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            }), (0, c.jsx)("line", {
                                "data-name": "Line 6",
                                x1: "12.308",
                                transform: "translate(94 117)",
                                fill: "none",
                                stroke: r,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2"
                            })]
                        })
                    })
                },
                X = r(6095),
                Y = r.n(X);

            function I() {
                return (0, c.jsxs)(W, {
                    children: [(0, c.jsxs)("h3", {
                        className: "font-normal text-white text-36px mb-6 text-center lg:text-left",
                        children: ["Fast, Free Shipping,", (0, c.jsx)("br", {}), (0, c.jsx)("span", {
                            className: "font-bold",
                            children: "International Delivery."
                        })]
                    }), (0, c.jsx)("p", {
                        className: "text-white text-center lg:text-left mb-10",
                        children: "Now you can have your products delivered, just like everything else.",
                    }), (0, c.jsxs)(F.Z, {
                        variant: "elevation",
                        children: [(0, c.jsx)("a", {
                            className: "mr-2",
                            link: "help.html#shipping",
                            children: "Learn More"
                        }), " ", (0, c.jsx)(U, {
                            width: "13px"
                        })]
                    })]
                })
            }
            var z = function(e) {
                var t = e.title,
                    r = e.description,
                    a = e.className,
                    n = e.counterBg,
                    i = e.counter,
                    s = u.WV + " " + a;
                return (0, c.jsxs)("div", {
                    className: s,
                    children: [(0, c.jsx)("span", {
                        className: u.BG,
                        style: {
                            backgroundColor: n
                        },
                        children: i
                    }), (0, c.jsxs)("div", {
                        className: u.CM,
                        children: [(0, c.jsx)("h3", {
                            className: u.Gz,
                            children: t
                        }), (0, c.jsx)("p", {
                            className: u.L4,
                            children: r
                        })]
                    })]
                })
            },
                H = [{
                    id: 1,
                    background: "#ffc49d",
                    title: processes_1_Title,
                    description: processes_1_Desc,
                }, {
                    id: 2,
                    background: "#c3effb",
                    title: processes_2_Title,
                    description: processes_2_Desc,
                }, {
                    id: 3,
                    background: "#f1f1f5",
                    title: processes_3_Title,
                    description: processes_3_Desc,
                }, {
                    id: 4,
                    background: "#d4f8c4",
                    title: processes_4_Title,
                    description: processes_4_Desc,
                }];

            function q() {
                return (0, c.jsx)("div", {
                    className: "flex w-full px-20px md:p-30px py-40px rounded border border-gray-300 bg-white",
                    children: (0, c.jsx)("div", {
                        className: "feature-block-wrapper w-full grid grid-cols-1 gap-x-30px gap-y-40px md:grid-cols-2 xl:grid-cols-4 xxl:gap-30px",
                        children: H.map((function(e, t) {
                            return (0, c.jsx)(z, {
                                title: e.title,
                                description: e.description,
                                counterBg: e.background,
                                counter: t + 1,
                                className: "feature-block"
                            }, e.id)
                        }))
                    })
                })
            }

            function J(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Q = !(!window.document || !window.document.createElement);

            function $(e) {
                var t = e.percentOfElement,
                    r = void 0 === t ? 50 : t,
                    n = e.offsetPX,
                    i = void 0 === n ? 0 : n,
                    s = e.onMount,
                    l = void 0 !== s && s,
                    o = e.container,
                    c = void 0 === o ? Q ? window : null : o,
                    d = e.percentOfContainer,
                    p = void 0 === d ? 50 : d,
                    u = e.direction,
                    f = void 0 === u ? "vertical" : u,
                    m = (0, a.useRef)(null),
                    x = (0, a.useCallback)((function() {
                        m.current && function(e, t) {
                            var r = t.container,
                                a = t.percentOfElement,
                                n = t.offsetPX,
                                i = t.direction,
                                s = t.percentOfContainer,
                                l = e.current.getClientRects()[0],
                                o = "vertical" === i,
                                c = o ? l.height : l.width,
                                d = o ? l.y : l.x,
                                p = r === window ? o ? r.innerHeight : r.innerWidth : o ? r.scrollHeight : r.scrollWidth,
                                u = c * a / 100;
                            n && (u += n);
                            var f = (o ? r.scrollY : r.scrollX) + d + (p * s / 100 + u),
                                m = o ? {
                                    top: f
                                } : {
                                    left: f
                                };
                            window.scrollTo(K(K({}, m), {}, {
                                behavior: "smooth"
                            }))
                        }(m, {
                            percentOfElement: r,
                            offsetPX: i,
                            container: c,
                            percentOfContainer: p,
                            direction: f
                        })
                    }), [m.current]);
                return (0, a.useEffect)((function() {
                    l && x()
                }), []), {
                    elRef: m,
                    scroll: x
                }
            }
            var ee = r(5675);

            function te(e) {
                var t = e.imageUrl,
                    r = e.name,
                    a = e.id,
                    n = (0, B.b)(),
                    i = n.category,
                    s = n.setCategory;
                return (0, c.jsxs)("div", {
                    className: "p-4 flex flex-col border rounded-md text-center ".concat(i === a ? "border-gray-900" : " border-gray-300"),
                    onClick: function() {
                        s(i !== a ? a : "")
                    },
                    role: "button",
                    children: [(0, c.jsx)(ee.default, {
                        src: null !== t && void 0 !== t ? t : "/",
                        alt: r,
                        width: 120,
                        height: 120,
                        unoptimized: !0
                    }), (0, c.jsx)("p", {
                        className: "font-semibold text-gray-900 truncate",
                        children: r
                    })]
                })
            }
            var re = r(1801),
                ae = r(2051);
            r(1464);
            ae.ZP.use([ae.W_]);
            var ne = {
                600: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 4
                },
                1024: {
                    slidesPerView: 5
                },
                1200: {
                    slidesPerView: 6
                },
                1400: {
                    slidesPerView: 8
                },
                1900: {
                    slidesPerView: 10
                }
            },
                ie = a.forwardRef((function(e, t) {
                    var r = e.data;
                    return (0, c.jsx)("div", {
                        className: "category pt-8",
                        ref: t,
                        children: (0, c.jsxs)(re.t, {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            navigation: {
                                prevEl: ".swiper-previous-button",
                                nextEl: ".swiper-next-button"
                            },
                            breakpoints: ne,
                            children: [null === r || void 0 === r ? void 0 : r.map((function(e) {
                                return (0, c.jsx)(re.o, {
                                    children: (0, c.jsx)(te, {
                                        id: e.id,
                                        imageUrl: e.image_icon_url,
                                        name: e.name
                                    })
                                }, e.id)
                            })), (0, c.jsxs)("div", {
                                className: u.S_ + " z-10",
                                children: [(0, c.jsx)("button", {
                                    "aria-label": "prev-button",
                                    className: u.Vn + " " + u.VY + " swiper-previous-button",
                                    children: (0, c.jsx)(d, {
                                        height: "12px"
                                    })
                                }), (0, c.jsx)("button", {
                                    "aria-label": "next-button",
                                    className: u.Vn + " " + u.Bo + " swiper-next-button",
                                    children: (0, c.jsx)(p, {
                                        height: "12px"
                                    })
                                })]
                            })]
                        })
                    })
                })),
                se = !0;

            function le(e) {
                var t = e.products,
                    r = e.categories,
                    s = $({
                        percentOfElement: 0,
                        percentOfContainer: 0,
                        offsetPX: -100
                    }),
                    l = s.elRef,
                    o = s.scroll,
                    d = (0, T.R)().searchTerm,
                    p = (0, B.b)().category;
                return (0, a.useEffect)((function() {
                    if (d || p) return o()
                }), [d, p, o]), (0, c.jsxs)(i.Z, {
                    children: [(0, c.jsxs)(n.default, {
                        children: [(0, c.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, maximum-scale=1"
                        }), (0, c.jsx)("meta", {
                            name: "Description",
                            content: pageDescription,
                        }), (0, c.jsx)("title", {
                            children: pageTitle,
                        })]
                    }), (0, c.jsx)(E, {}), (0, c.jsx)(q, {}), (0, c.jsx)(ie, {
                        data: r,
                        ref: l
                    }), (0, c.jsx)(G, {
                        items: t
                    }), (0, c.jsx)(I, {})]
                })
            }
        },
        5301: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(4012)
            }])
        },
        6095: function(e) {
            e.exports = ""
        },
        7259: function(e) {
            e.exports = banner_2_Img;
        },
        2023: function(e) {
            e.exports = banner_3_Img;
        },
        4640: function(e) {
            e.exports = banner_1_Img;
        },
        9316: function(e) {
            e.exports = banner_4_Img;
        }
    },
    function(e) {
        e.O(0, [351, 563, 549, 448, 774, 888, 179], (function() {
            return t = 5301, e(e.s = t);
            var t
            }));
        var t = e.O();
        _N_E = t
    }
]);