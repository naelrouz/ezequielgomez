/**
 * Created by nael on 15.05.16.
 */
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.4", n = function (a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ea = function () {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)return la(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)i.unshift(c);
                while (h[d] === i[d])d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: oa(function () {
                    return [0]
                }), last: oa(function (a, b) {
                    return [b - 1]
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = na(b);
        function qa() {
        }

        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)if (c = d.relative[a[i].type])m = [sa(ta(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                }
                m.push(c)
            }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a)return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b))return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b))return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++)if (n.contains(e[b], this))return !0
            }));
            for (b = 0; c > b; b++)n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
                if (e && n(a).is(c))break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return n.Deferred(function (c) {
                        n.each(b, function (b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)return c;
                    if (c = M.get(f, d), void 0 !== c)return c;
                    if (c = P(f, d, void 0), void 0 !== c)return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        L.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;
    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)pa(f[d], g[d]);
            if (b)if (c)for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                while (j--)f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                j = 0;
                while (e = f[j++])fa.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }

    var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"), Ba = new RegExp("^([+-])=(" + Q + ")", "i"), Ca = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Da = {letterSpacing: "0", fontWeight: "400"}, Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a)return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
        while (e--)if (b = Ea[e] + c, b in a)return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xa, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Ja(this, !0)
        }, hide: function () {
            return Ja(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }

    n.Tween = Ka, Ka.prototype = {
        constructor: Ka, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pa = /queueHooks$/, Qa = [Va], Ra = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function Sa() {
        return setTimeout(function () {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d])continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m))"inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m)n.style(a, b, m[b])
            });
            for (d in m)g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)if (d = Qa[f].call(j, a, k, j.opts))return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a)return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {}, f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c)f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = gb.exec(e))f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? e : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild)a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b))n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Ab(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(xb, "\r\n")}
                }) : {name: b.name, value: c.replace(xb, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Bb = 0, Cb = {}, Db = {0: 200, 1223: 204}, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb)Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb)return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}), a;
    $.throttle = a = function (e, f, j, i) {
        var h, d = 0;
        if (typeof f !== "boolean") {
            i = j;
            j = f;
            f = c
        }
        function g() {
            var o = this, m = +new Date() - d, n = arguments;

            function l() {
                d = +new Date();
                j.apply(o, n)
            }

            function k() {
                h = c
            }

            if (i && !h) {
                l()
            }
            h && clearTimeout(h);
            if (i === c && m > e) {
                l()
            } else {
                if (f !== true) {
                    h = setTimeout(i ? k : l, i === c ? e - m : e)
                }
            }
        }

        if ($.guid) {
            g.guid = j.guid = j.guid || $.guid++
        }
        return g
    };
    $.debounce = function (d, e, f) {
        return f === c ? a(d, e, false) : a(d, f, e !== false)
    }
})(this);

/*! jquery-pjax v2.40.0 | (c) 2012, falsandtru | MIT Licence */
!new function (window, document, undefined, $) {
    "use strict";
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            a.NAME = "pjax", a.NAMESPACE = jQuery
        }(b = a.DEF || (a.DEF = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        !function (a) {
            a[a.blank = 0] = "blank", a[a.initiate = 1] = "initiate", a[a.open = 2] = "open", a[a.pause = 3] = "pause", a[a.lock = 4] = "lock", a[a.seal = 5] = "seal", a[a.error = 6] = "error", a[a.crash = 7] = "crash", a[a.terminate = 8] = "terminate", a[a.close = 9] = "close"
        }(a.State || (a.State = {}));
        a.State;
        a.EVENT = {
            PJAX: a.DEF.NAME.toLowerCase(),
            CLICK: "click",
            SUBMIT: "submit",
            POPSTATE: "popstate",
            SCROLL: "scroll"
        }
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b;
                !function (a) {
                }(b = a.DATA || (a.DATA = {}))
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        function b(a, b) {
            var c = a.prototype;
            b = b.reverse();
            for (var d = b.length; d--;) {
                var e = b[d].prototype;
                for (var f in e)"constructor" !== f && c[f] && e.hasOwnProperty(f) && (c[f] = e[f])
            }
        }

        function c() {
            function a(a) {
                var b = 16 * Math.random() | 0, c = "x" == a ? b : 3 & b | 8;
                return c.toString(16).toUpperCase()
            }

            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, a)
        }

        function d(a, b) {
            if (!Object.freeze || a === a.window || "ownerDocument" in a)return a;
            if (!Object.isFrozen(a) && Object.freeze(a), !b)return a;
            for (var c in a) {
                var e = a[c];
                ~"object,function".indexOf(typeof e) && e && d(e, b)
            }
            return a
        }

        function e(a, b) {
            if (!Object.seal || a === a.window || "ownerDocument" in a)return a;
            if (!Object.isSealed(a) && Object.seal(a), !b)return a;
            for (var c in a) {
                var d = a[c];
                ~"object,function".indexOf(typeof d) && d && e(d, b)
            }
            return a
        }

        a.MIXIN = b, a.UUID = c, a.FREEZE = d, a.SEAL = e
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c = function () {
                function b(b) {
                    this.NAME = a.DEF.NAME, this.NAMESPACE = a.DEF.NAMESPACE, this.UUID = a.UUID(), this.state_ = a.State.blank, this.state_ = b
                }

                return b.prototype.MAIN = function (a) {
                    for (var b = [], c = 1; c < arguments.length; c++)b[c - 1] = arguments[c];
                    return this.main_.apply(this, [a].concat(b))
                }, b.prototype.main_ = function (a) {
                    for (var b = [], c = 1; c < arguments.length; c++)b[c - 1] = arguments[c];
                    return a
                }, b
            }();
            b.Template = c
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c = function () {
                function b(b) {
                    this.UUID = a.UUID(), this.state_ = a.State.blank, this.state_ = b
                }

                return b
            }();
            b.Template = c
        }(b = a.VIEW || (a.VIEW = {}))
    }(MODULE || (MODULE = {}));
    var __extends = this && this.__extends || function (a, b) {
            function c() {
                this.constructor = a
            }

            for (var d in b)b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c
        }, MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c = function (b) {
                function c(c, d, e, f) {
                    var g = this;
                    b.call(this, a.State.initiate), this.model_ = c, this.controller_ = d, this.context_ = e, this.handlers = {
                        click: function () {
                            for (var a = [], b = 0; b < arguments.length; b++)a[b - 0] = arguments[b];
                            g.controller_.click(a)
                        }, submit: function () {
                            for (var a = [], b = 0; b < arguments.length; b++)a[b - 0] = arguments[b];
                            g.controller_.submit(a)
                        }, popstate: function () {
                            for (var a = [], b = 0; b < arguments.length; b++)a[b - 0] = arguments[b];
                            g.controller_.popstate(a)
                        }, scroll: function () {
                            for (var a = [], b = 0; b < arguments.length; b++)a[b - 0] = arguments[b];
                            g.controller_.scroll(a)
                        }
                    }, a.FREEZE(this), this.observe_(f)
                }

                return __extends(c, b), c.prototype.observe_ = function (a) {
                    return this.release_(a), a.link && this.context_.delegate(a.link, a.nss.event.click, this.handlers.click), a.form && this.context_.delegate(a.form, a.nss.event.submit, this.handlers.submit), jQuery(window).bind(a.nss.event.popstate, this.handlers.popstate), a.database.active && a.fix.scroll && jQuery(window).bind(a.nss.event.scroll, this.handlers.scroll), this
                }, c.prototype.release_ = function (a) {
                    return a.link && this.context_.undelegate(a.link, a.nss.event.click), a.form && this.context_.undelegate(a.form, a.nss.event.submit), jQuery(window).unbind(a.nss.event.popstate), a.database.active && a.fix.scroll && jQuery(window).unbind(a.nss.event.scroll), this
                }, c
            }(b.Template);
            b.Main = c
        }(b = a.VIEW || (a.VIEW = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        a.View = a.VIEW.Main
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c = function () {
                function b() {
                    a.FREEZE(this)
                }

                return b.prototype.enable = function () {
                    return a.Model.singleton().enable(), this
                }, b.prototype.disable = function () {
                    return a.Model.singleton().disable(), this
                }, b.prototype.click = function (b, c) {
                    var d;
                    switch (typeof b) {
                        case"undefined":
                            d = jQuery(this).filter("a").first().clone();
                            break;
                        case"object":
                            d = jQuery(b).clone();
                            break;
                        case"string":
                            c = jQuery.extend(!0, {}, c, {href: b}), d = jQuery("<a/>", c);
                            break;
                        default:
                            return this
                    }
                    var e = a.Model.singleton().configure(d[0]);
                    return e && d.first().one(e.nss.event.click, function () {
                        for (var b = [], c = 0; c < arguments.length; c++)b[c - 0] = arguments[c];
                        return a.Controller.singleton().click(b)
                    }).click(), this
                }, b.prototype.submit = function (b, c, d) {
                    var e, f, g, h = document.createDocumentFragment();
                    switch (typeof b) {
                        case"undefined":
                            e = jQuery(this).filter("form").first().clone();
                            break;
                        case"object":
                            e = jQuery(b).clone();
                            break;
                        case"string":
                            c = jQuery.extend(!0, {}, c, {action: b}), f = d instanceof Array && Array || d instanceof Object && Object || undefined;
                            for (var i in d) {
                                switch (f) {
                                    case Object:
                                        if (!Object.prototype.hasOwnProperty.call(d, i))continue;
                                        g = jQuery("<textarea/>", {name: i}).val(d[i]);
                                        break;
                                    case Array:
                                        d[i].attrs = d[i].attrs || {}, d[i].attrs.name = d[i].name || d[i].attrs.name, d[i].attrs.type = d[i].type || d[i].attrs.type, g = jQuery("<" + d[i].tag + "/>", d[i].attrs).val(d[i].value);
                                        break;
                                    default:
                                        continue
                                }
                                h.appendChild(g[0])
                            }
                            e = jQuery("<form/>", c).append(h);
                            break;
                        default:
                            return this
                    }
                    var j = a.Model.singleton().configure(e[0]);
                    return j && e.first().one(j.nss.event.submit, function () {
                        for (var b = [], c = 0; c < arguments.length; c++)b[c - 0] = arguments[c];
                        return a.Controller.singleton().submit(b)
                    }).submit(), this
                }, b.prototype.getCache = function (b) {
                    void 0 === b && (b = window.location.href);
                    var c = a.Model.singleton().getCache(b);
                    return c && (c = {data: c.data, textStatus: c.textStatus, jqXHR: c.jqXHR, expires: c.expires}), c
                }, b.prototype.setCache = function (b, c, d, e) {
                    switch (void 0 === b && (b = window.location.href), arguments.length) {
                        case 0:
                            return this.setCache(b, document.documentElement.outerHTML);
                        case 1:
                            return this.setCache(b, null);
                        case 2:
                        case 3:
                        case 4:
                        default:
                            a.Model.singleton().setCache(b, c, d, e)
                    }
                    return this
                }, b.prototype.removeCache = function (b) {
                    return void 0 === b && (b = window.location.href), a.Model.singleton().removeCache(b), this
                }, b.prototype.clearCache = function () {
                    return a.Model.singleton().clearCache(), this
                }, b.prototype.follow = function (b, c, d, e) {
                    if (!a.Model.singleton().isDeferrable)return !1;
                    var f = b.currentTarget;
                    return c.follow = !0, c.host = d || "", isFinite(b.timeStamp) && (c.timeStamp = e || b.timeStamp), a.Model.singleton().setPageXHR(c), jQuery.when(c).done(function () {
                        !a.Model.singleton().getCache(f.href) && a.Model.singleton().isOperatable(b) && a.Model.singleton().setCache(f.href, undefined, undefined, c)
                    }), jQuery[a.DEF.NAME].click(f.href), !0
                }, b.prototype.bypass = function () {
                    return a.Model.singleton().bypass()
                }, b.prototype.host = function () {
                    return a.Model.singleton().host()
                }, b
            }();
            b.Functions = c
        }(b = a.CONTROLLER || (a.CONTROLLER = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c = function () {
                function b() {
                    a.FREEZE(this)
                }

                return b
            }();
            b.Methods = c
        }(b = a.CONTROLLER || (a.CONTROLLER = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c = function () {
                function b(b, c) {
                    this.UUID = a.UUID(), this.state_ = a.State.blank, this.PROPERTIES = [], this.state_ = c
                }

                return b.prototype.EXTEND = function (b) {
                    return b instanceof a.DEF.NAMESPACE ? (b instanceof jQuery && (b = b.add()), this.REGISTER_FUNCTION(b), this.REGISTER_METHOD(b)) : (b !== this.EXTENSION && (b = this.EXTENSION), this.REGISTER_FUNCTION(b)), this.UPDATE_PROPERTIES(b), b
                }, b.prototype.REGISTER = function (b) {
                    var c = this;
                    this.EXTENSION = this.EXTENSION || function () {
                            for (var a = [], d = 0; d < arguments.length; d++)a[d - 0] = arguments[d];
                            var e = c.EXTEND(this);
                            return a = [e].concat(a), a = c.EXEC.apply(c, a), a instanceof Array ? b.MAIN.apply(b, a) : a
                        }, this.EXTEND(this.EXTENSION), window[a.DEF.NAMESPACE] = window[a.DEF.NAMESPACE] || {}, a.DEF.NAMESPACE.prototype ? a.DEF.NAMESPACE[a.DEF.NAME] = a.DEF.NAMESPACE.prototype[a.DEF.NAME] = this.EXTENSION : a.DEF.NAMESPACE[a.DEF.NAME] = this.EXTENSION
                }, b.prototype.EXEC = function () {
                    return this.exec_.apply(this, arguments)
                }, b.prototype.exec_ = function (a) {
                    for (var b = [], c = 1; c < arguments.length; c++)b[c - 1] = arguments[c];
                    return [a].concat(b)
                }, b.prototype.REGISTER_FUNCTION = function (a) {
                    var b = this.FUNCTIONS;
                    for (var c in b)"constructor" !== c && (a[c] = b[c]);
                    return a
                }, b.prototype.REGISTER_METHOD = function (a) {
                    var b = this.METHODS;
                    for (var c in b)"constructor" !== c && (a[c] = b[c]);
                    return a
                }, b.prototype.UPDATE_PROPERTIES = function (a) {
                    var b, c, d, e = this.PROPERTIES;
                    for (b = 0, c = e.length; c > b; b++)"constructor" !== b && (d = e[b], a[d] && (a[d] = a[d]()));
                    return a
                }, b
            }();
            b.Template = c
        }(b = a.CONTROLLER || (a.CONTROLLER = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c = function (c) {
                function d(d) {
                    c.call(this, d, a.State.initiate), this.model_ = d, this.FUNCTIONS = new b.Functions, this.METHODS = new b.Methods, this.REGISTER(d), a.FREEZE(this)
                }

                return __extends(d, c), d.prototype.exec_ = function (a) {
                    var b = [].slice.call(arguments, 1, 2), c = b[0];
                    switch (typeof c) {
                        case"undefined":
                        case"object":
                            break;
                        default:
                            return a
                    }
                    return [a].concat(b)
                }, d.prototype.view = function (b, c) {
                    return new a.View(this.model_, this, b, c)
                }, d.prototype.click = function (a) {
                    this.model_.click.apply(this.model_, a)
                }, d.prototype.submit = function (a) {
                    this.model_.submit.apply(this.model_, a)
                }, d.prototype.popstate = function (a) {
                    this.model_.popstate.apply(this.model_, a)
                }, d.prototype.scroll = function (a) {
                    this.model_.scroll.apply(this.model_, a)
                }, d
            }(b.Template);
            b.Main = c;
            var d = function () {
                function b(d) {
                    void 0 === d && (d = a.Model.singleton()), b.instance_ = b.instance_ || new c(d)
                }

                return b.singleton = function () {
                    return b.instance_
                }, b.prototype.singleton = function () {
                    return b.singleton()
                }, b
            }();
            b.Singleton = d
        }(b = a.CONTROLLER || (a.CONTROLLER = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        a.Controller = a.CONTROLLER.Singleton
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b = function () {
                function a(a, b) {
                    void 0 === a && (a = 1), void 0 === b && (b = 0), this.list_ = [], this.config_ = {
                        mode: 1,
                        size: 0
                    }, this.table_ = {}, this.option_ = {}, this.config_.mode = a || this.config_.mode, this.config_.size = b || this.config_.size
                }

                return a.prototype.define = function (a, b, c) {
                    void 0 === b && (b = this.config_.mode), void 0 === c && (c = this.config_.size), this.option_[a] = {
                        mode: b,
                        size: c
                    }, this.table_[a] = []
                }, a.prototype.reserve = function (a, b) {
                    switch (typeof a) {
                        case"string":
                            !this.option_[a] && this.define(a);
                            var c = this.option_[a], d = this.table_[a], e = [].slice.call(arguments, 2);
                            break;
                        case"function":
                            b = a, a = undefined;
                            var c = this.config_, d = this.list_, e = [].slice.call(arguments, 1);
                            break;
                        default:
                            return
                    }
                    if ("function" == typeof b) {
                        var f;
                        f = c.mode > 0 ? "push" : "unshift", d[f]([b, e.shift(), e])
                    }
                }, a.prototype.digest = function (a, b) {
                    switch (typeof a) {
                        case"string":
                            !this.option_[a] && this.define(a), b = b || 0;
                            var c = this.option_[a], d = this.table_[a];
                            if (!d)return;
                            break;
                        case"number":
                        case"undefined":
                            b = a || 0, a = undefined;
                            var c = this.config_, d = this.list_;
                            break;
                        default:
                            return
                    }
                    d.length > c.size && c.size && (c.mode > 0 ? d.splice(0, d.length - c.size) : d.splice(d.length - c.size, d.length));
                    var e;
                    for (b = b || -1; e = b-- && d.pop();)e.shift().apply(e.shift() || window, e.shift() || []);
                    if (undefined === a) {
                        var f = this.table_;
                        for (var g in f)this.digest(g, b)
                    }
                }, a.prototype.clear = function (a) {
                    switch (typeof a) {
                        case"string":
                            !this.option_[a] && this.define(a), this.table_[a].splice(0, this.table_[a].length);
                            break;
                        default:
                            var b = this.table_;
                            for (var c in b)this.clear(c)
                    }
                }, a
            }();
            a.Task = b
        }(b = a.LIBRARY || (a.LIBRARY = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b;
                !function (a) {
                    var b;
                    !function (a) {
                        var b;
                        !function (a) {
                            var b = function () {
                                function a(a) {
                                    this.task_ = a, this.labels_ = {done: "done", fail: "fail", always: "always"}
                                }

                                return a.prototype.done = function (a) {
                                    return this.task_.reserve(this.labels_.done, a), this
                                }, a.prototype.fail = function (a) {
                                    return this.task_.reserve(this.labels_.fail, a), this
                                }, a.prototype.always = function (a) {
                                    return this.task_.reserve(this.labels_.always, a), this
                                }, a.prototype.resolve = function () {
                                    return this.task_.clear(this.labels_.fail), this.task_.digest(this.labels_.done), this.task_.digest(this.labels_.always), this
                                }, a.prototype.reject = function () {
                                    return this.task_.clear(this.labels_.done), this.task_.digest(this.labels_.fail), this.task_.digest(this.labels_.always), this
                                }, a
                            }();
                            a.Task = b;
                            var c = function (a) {
                                function b() {
                                    a.apply(this, arguments)
                                }

                                return __extends(b, a), b
                            }(b);
                            a.TaskUp = c;
                            var d = function (a) {
                                function b() {
                                    a.apply(this, arguments)
                                }

                                return __extends(b, a), b.prototype.done = function (a) {
                                    return this
                                }, b.prototype.fail = function (a) {
                                    return this
                                }, b.prototype.always = function (a) {
                                    return this
                                }, b.prototype.resolve = function () {
                                    return this
                                }, b
                            }(b);
                            a.TaskDown = d
                        }(b = a.STATEFUL || (a.STATEFUL = {}))
                    }(b = a.DB || (a.DB = {}))
                }(b = a.DATA || (a.DATA = {}))
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (b) {
                var c;
                !function (b) {
                    var c;
                    !function (b) {
                        var c = function () {
                            function c(b, c, d) {
                                var e = this;
                                this.origin_ = b, this.connect_ = c, this.extend_ = d, this.state_ = function () {
                                    return e.origin_.state()
                                }, this.task_ = new a.LIBRARY.Task, this.cache_ = {stateful: {}}
                            }

                            return c.prototype.stateful_ = function () {
                                var c = this, d = function (a, b) {
                                    return c.cache_.stateful[c.state_()] = c.cache_.stateful[c.state_()] || new a(c.origin_, c.connect_, c.extend_, c.task_, b)
                                };
                                switch (this.state_()) {
                                    case a.State.blank:
                                        return d(b.STATE.Blank, !0);
                                    case a.State.initiate:
                                        return d(b.STATE.Initiate, !0);
                                    case a.State.open:
                                        return d(b.STATE.Open, !0);
                                    case a.State.close:
                                        return d(b.STATE.Close, !0);
                                    case a.State.terminate:
                                        return d(b.STATE.Terminate, !0);
                                    case a.State.error:
                                        return d(b.STATE.Error, !1);
                                    default:
                                        return d(b.STATE.Except, !1)
                                }
                            }, c.prototype.open = function () {
                                return this.stateful_().open()
                            }, c.prototype.resolve = function () {
                                return this.stateful_().resolve()
                            }, c.prototype.reject = function () {
                                return this.stateful_().reject()
                            }, c
                        }();
                        b.Stateful = c
                    }(c = b.DB || (b.DB = {}))
                }(c = b.DATA || (b.DATA = {}))
            }(c = b.APP || (b.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b;
                !function (a) {
                    var b;
                    !function (a) {
                        var b;
                        !function (b) {
                            var c = function () {
                                function b(b, c, d, e, f) {
                                    this.origin = b, this.connect = c, this.extend = d, this.task = f ? new a.STATEFUL.TaskUp(e) : new a.STATEFUL.TaskDown(e)
                                }

                                return b.prototype.open = function () {
                                    return this.task
                                }, b.prototype.resolve = function () {
                                }, b.prototype.reject = function () {
                                    this.task.reject()
                                }, b
                            }();
                            b.Default = c;
                            var d = function (a) {
                                function b() {
                                    a.apply(this, arguments)
                                }

                                return __extends(b, a), b.prototype.open = function () {
                                    return this.connect(), this.task
                                }, b.prototype.resolve = function () {
                                    this.open()
                                }, b.prototype.reject = function () {
                                    this.task.reject()
                                }, b
                            }(c);
                            b.Blank = d;
                            var e = function (a) {
                                function b() {
                                    a.apply(this, arguments)
                                }

                                return __extends(b, a), b.prototype.open = function () {
                                    return this.task
                                }, b.prototype.resolve = function () {
                                }, b.prototype.reject = function () {
                                    this.task.reject()
                                }, b
                            }(c);
                            b.Initiate = e;
                            var f = function (a) {
                                function b() {
                                    a.apply(this, arguments)
                                }

                                return __extends(b, a), b.prototype.open = function () {
                                    var a = this;
                                    return this.extend(), setTimeout(function () {
                                        return a.origin.resolve()
                                    }, 1), this.task
                                }, b.prototype.resolve = function () {
                                    this.task.resolve()
                                }, b.prototype.reject = function () {
                                    this.task.reject()
                                }, b
                            }(c);
                            b.Open = f;
                            var g = function (a) {
                                function b() {
                                    a.apply(this, arguments)
                                }

                                return __extends(b, a), b.prototype.open = function () {
                                    return this.connect(), this.task
                                }, b.prototype.resolve = function () {
                                    this.open()
                                }, b.prototype.reject = function () {
                                    this.task.reject()
                                }, b
                            }(c);
                            b.Close = g;
                            var h = function (a) {
                                function b() {
                                    a.apply(this, arguments)
                                }

                                return __extends(b, a), b
                            }(c);
                            b.Terminate = h;
                            var i = function (a) {
                                function b() {
                                    a.apply(this, arguments)
                                }

                                return __extends(b, a), b
                            }(c);
                            b.Error = i;
                            var j = function (a) {
                                function b() {
                                    a.apply(this, arguments)
                                }

                                return __extends(b, a), b
                            }(c);
                            b.Except = j
                        }(b = a.STATE || (a.STATE = {}))
                    }(b = a.DB || (a.DB = {}))
                }(b = a.DATA || (a.DATA = {}))
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b;
                !function (a) {
                    var b = function () {
                        function a(a) {
                            this.DB = a, this.autoIncrement = !1, this.indexes = [], this.size = 100, this.buffer = {}, this.diff = {}
                        }

                        return a.prototype.accessStore = function (a, b) {
                            var c = this;
                            void 0 === b && (b = "readwrite");
                            try {
                                var d = this.DB.database(), e = d && d.transaction(this.name, b).objectStore(this.name)
                            } catch (f) {
                            }
                            e ? a(e) : this.DB.open().done(function () {
                                return c.accessStore(a)
                            })
                        }, a.prototype.accessCount = function () {
                            var a = "string" == typeof arguments[0] && arguments[0], b = arguments[a ? 1 : 0];
                            this.accessStore(function (c) {
                                var d = a ? c.index(a).count() : c.count();
                                d.onsuccess = function () {
                                    b.apply(this, [].slice.call(arguments, 1).concat(this.result))
                                }
                            })
                        }, a.prototype.accessRecord = function (a, b, c) {
                            this.accessStore(function (c) {
                                c.get(a).onsuccess = b
                            }, c)
                        }, a.prototype.accessCursor = function (a, b, c, d) {
                            this.accessStore(function (e) {
                                var f;
                                f = c && b ? e.index(a).openCursor(b, c) : b ? e.index(a).openCursor(b) : e.openCursor(), f.onsuccess = d
                            })
                        }, a.prototype.accessAll = function (a, b, c, d) {
                            "function" == typeof a && (d = a, a = null, b = null, c = null), this.accessCursor(a, b, c, d)
                        }, a.prototype.get = function (a, b) {
                            var c = this;
                            this.accessRecord(a, function (a) {
                                c.setBuffer(a.target.result), b(a)
                            })
                        }, a.prototype.set = function (a, b) {
                            var c = this;
                            a = jQuery.extend(!0, {}, a), this.setBuffer(a, b), this.accessRecord(a[this.keyPath], function (d) {
                                d.target.source.put(b ? jQuery.extend(!0, {}, d.target.result, a) : a), c.autoIncrement || delete c.diff[a[c.keyPath]]
                            })
                        }, a.prototype.remove = function (a) {
                            this.removeBuffer(a), this.accessStore(function (b) {
                                b["delete"](a)
                            })
                        }, a.prototype.clear = function () {
                            this.clearBuffer(), this.accessStore(function (a) {
                                a.clear()
                            })
                        }, a.prototype.clean = function () {
                            var a = this;
                            if (this.size && this.indexes.length) {
                                var b = this.indexes[0].name, c = this.size;
                                this.accessCount(b, function (d) {
                                    c >= d || (c = d - c, a.accessCursor(b, a.DB.IDBKeyRange.upperBound(1 / 0), "next", function (b) {
                                        if (b.target.result && c--) {
                                            var d = b.target.result;
                                            delete a.diff[d.primaryKey], d["delete"](), d["continue"]()
                                        }
                                    }))
                                })
                            }
                        }, a.prototype.loadBuffer = function (a) {
                            function b() {
                                if (!this.result)return a && a();
                                var b = this.result;
                                c[b.primaryKey] = b.value, b["continue"]()
                            }

                            if (!this.autoIncrement) {
                                var c = this.buffer;
                                this.indexes.length ? this.DB.IDBKeyRange && this.accessAll(this.indexes[0].name, this.DB.IDBKeyRange.upperBound(1 / 0), "prev", b) : this.accessAll(b)
                            }
                        }, a.prototype.saveBuffer = function (a) {
                            var b = this;
                            this.autoIncrement || this.accessStore(function (c) {
                                for (var d in b.diff)c.put(b.diff[d]);
                                a && a()
                            })
                        }, a.prototype.getBuffers = function () {
                            return this.buffer
                        }, a.prototype.setBuffers = function (a, b) {
                            for (var c in a)this.setBuffer(a[c], b);
                            return this.buffer
                        }, a.prototype.getBuffer = function (a) {
                            return this.autoIncrement ? void 0 : this.buffer[a]
                        }, a.prototype.setBuffer = function (a, b) {
                            if (!this.autoIncrement) {
                                if (!a)return a;
                                var c = a[this.keyPath];
                                return this.buffer[c] = b ? jQuery.extend(!0, {}, this.buffer[c], a) : a, this.diff[c] = this.buffer[c], this.buffer[c]
                            }
                        }, a.prototype.removeBuffer = function (a) {
                            if (!this.autoIncrement) {
                                var b = this.buffer[a];
                                return delete this.buffer[a], delete this.diff[a], b
                            }
                        }, a.prototype.clearBuffer = function () {
                            if (!this.autoIncrement) {
                                for (var a in this.buffer)delete this.buffer[a];
                                for (var a in this.diff)delete this.diff[a]
                            }
                        }, a
                    }();
                    a.Store = b
                }(b = a.DATA || (a.DATA = {}))
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b;
                !function (a) {
                    var b;
                    !function (b) {
                        var c = function (a) {
                            function b() {
                                a.apply(this, arguments), this.name = "meta", this.keyPath = "key", this.autoIncrement = !1, this.size = 0
                            }

                            return __extends(b, a), b
                        }(a.Store);
                        b.Meta = c
                    }(b = a.STORE || (a.STORE = {}))
                }(b = a.DATA || (a.DATA = {}))
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b;
                !function (a) {
                    var b;
                    !function (b) {
                        var c = function (a) {
                            function b() {
                                a.apply(this, arguments), this.name = "history", this.keyPath = "url", this.autoIncrement = !1, this.indexes = [{
                                    name: "date",
                                    keyPath: "date",
                                    option: {unique: !1}
                                }], this.size = 300
                            }

                            return __extends(b, a), b
                        }(a.Store);
                        b.History = c
                    }(b = a.STORE || (a.STORE = {}))
                }(b = a.DATA || (a.DATA = {}))
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b;
                !function (a) {
                    var b;
                    !function (b) {
                        var c = function (a) {
                            function b() {
                                a.apply(this, arguments), this.name = "server", this.keyPath = "host", this.autoIncrement = !1, this.indexes = [{
                                    name: "score",
                                    keyPath: "score",
                                    option: {unique: !1}
                                }], this.size = 100
                            }

                            return __extends(b, a), b
                        }(a.Store);
                        b.Server = c
                    }(b = a.STORE || (a.STORE = {}))
                }(b = a.DATA || (a.DATA = {}))
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (b) {
                var c;
                !function (b) {
                    var c = function () {
                        function c() {
                            var c = this;
                            this.IDBFactory = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB, this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.mozIDBKeyRange || window.msIDBKeyRange, this.name = a.DEF.NAME, this.version = 10, this.refresh = 10, this.upgrade = 0, this.revision = 0, this.state_ = a.State.blank, this.stateful = new b.DB.Stateful(this, function () {
                                return c.connect()
                            }, function () {
                                return c.extend()
                            }), this.age = 1e4, this.expires = 0, this.timer = 0, this.stores = {
                                meta: new b.STORE.Meta(this),
                                history: new b.STORE.History(this),
                                server: new b.STORE.Server(this)
                            }, this.meta = {
                                version: {key: "version", value: undefined},
                                update: {key: "update", value: undefined},
                                revision: {key: "revision", value: undefined}
                            }
                        }

                        return c.prototype.state = function () {
                            return this.state_
                        }, c.prototype.extend = function () {
                            var a = this;
                            this.expires = (new Date).getTime() + this.age, clearTimeout(this.timer), this.timer = setTimeout(function () {
                                return a.check()
                            }, this.age)
                        }, c.prototype.check = function () {
                            !this.age || (new Date).getTime() <= this.expires || a.State.open === this.state() && this.close()
                        }, c.prototype.database = function () {
                            return this.extend(), this.database_
                        }, c.prototype.configure = function (a, b) {
                            this.revision = a, this.refresh = b
                        }, c.prototype.up = function () {
                            this.state_ = a.State.blank, this.open()
                        }, c.prototype.down = function () {
                            this.reject(), this.close(), this.state_ = a.State.error
                        }, c.prototype.open = function () {
                            return !this.IDBFactory && this.down(), this.stateful.open()
                        }, c.prototype.close = function () {
                            this.database_ && this.database_.close && this.database_.close(), this.state_ = a.State.close
                        }, c.prototype.resolve = function () {
                            this.stateful.resolve()
                        }, c.prototype.reject = function () {
                            this.stateful.reject()
                        }, c.prototype.connect = function () {
                            this.create()
                        }, c.prototype.create = function () {
                            var b = this;
                            try {
                                this.close(), this.state_ = a.State.initiate;
                                var c = this.IDBFactory.open(this.name, this.upgrade ? this.version : 1), d = function () {
                                    b.verify(function () {
                                        b.state_ = a.State.open, b.resolve(), b.extend()
                                    })
                                };
                                if ("done" === c.readyState)this.database_ = c.result, this.database() ? d() : this.format(); else {
                                    var e = setTimeout(function () {
                                        return b.down()
                                    }, 3e3);
                                    c.onblocked = function () {
                                        clearTimeout(e), b.database_ = c.result, b.close(), setTimeout(function () {
                                            return b.open()
                                        }, 1e3)
                                    }, c.onupgradeneeded = function () {
                                        clearTimeout(e), b.database_ = c.result, b.createStores()
                                    }, c.onsuccess = function () {
                                        clearTimeout(e), b.database_ = c.result, d()
                                    }, c.onerror = function () {
                                        clearTimeout(e), b.database_ = c.result, b.down()
                                    }
                                }
                            } catch (f) {
                                this.down()
                            }
                        }, c.prototype.destroy = function (b, c) {
                            var d = this;
                            try {
                                this.close(), this.state_ = a.State.terminate;
                                var e = this.IDBFactory.deleteDatabase(this.name);
                                e && (e.onsuccess = b, e.onerror = c), setTimeout(function () {
                                    return a.State.terminate === d.state() && d.down()
                                }, 3e3)
                            } catch (f) {
                                this.down()
                            }
                        }, c.prototype.format = function () {
                            var a = this;
                            this.destroy(function () {
                                return a.up()
                            }, function () {
                                return a.down()
                            })
                        }, c.prototype.verify = function (a) {
                            var b = this, c = this.database(), d = this.version, e = this.revision, f = this.meta, g = this.stores.meta, h = function () {
                                return b.format()
                            };
                            if (c.objectStoreNames.length !== Object.keys(this.stores).length)return void h();
                            for (var i in this.stores) {
                                var j = c.transaction(this.stores[i].name, "readonly").objectStore(this.stores[i].name);
                                switch (!1) {
                                    case j.keyPath === this.stores[i].keyPath:
                                    case j.indexNames.length === this.stores[i].indexes.length:
                                        return void h()
                                }
                            }
                            var k = !1;
                            g.get(f.version.key, function (a) {
                                if (!k) {
                                    var c = a.target.result;
                                    !c || b.upgrade ? g.set(g.setBuffer({
                                        key: f.version.key,
                                        value: d
                                    })) : c.value > d ? (k = !0, b.down()) : c.value < d && (k = !0, h())
                                }
                            }), g.get(f.revision.key, function (a) {
                                if (!k) {
                                    var c = a.target.result;
                                    c ? c.value > e ? (k = !0, b.down()) : c.value < e && (k = !0, h()) : g.set(g.setBuffer({
                                        key: f.revision.key,
                                        value: e
                                    }))
                                }
                            }), g.get(f.update.key, function (c) {
                                if (!k) {
                                    var d = c.target.result, e = Math.floor((new Date).getTime() / 864e5);
                                    d && b.refresh ? d.value > e ? a() : d.value <= e && h() : (g.set(g.setBuffer({
                                        key: f.update.key,
                                        value: e + b.refresh
                                    })), a())
                                }
                            })
                        }, c.prototype.createStores = function () {
                            this.destroyStores();
                            var a = this.database();
                            for (var b in this.stores)for (var c, d = this.stores[b], e = a.createObjectStore(d.name, {
                                keyPath: d.keyPath,
                                autoIncrement: d.autoIncrement
                            }), f = 0, g = d.indexes; c = g[f]; f++)e.createIndex(c.name, c.keyPath, c.option)
                        }, c.prototype.destroyStores = function () {
                            for (var a = this.database(), b = a.objectStoreNames ? a.objectStoreNames.length : 0; b--;)a.deleteObjectStore(a.objectStoreNames[b])
                        }, c
                    }();
                    b.Database = c
                }(c = b.DATA || (b.DATA = {}))
            }(c = b.APP || (b.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b;
                !function (a) {
                    var b = function () {
                        function a(a) {
                            this.age_ = a
                        }

                        return a.prototype.getCookie = function (a) {
                            if (a && window.navigator.cookieEnabled) {
                                var b = new RegExp("(?:^|; )(" + encodeURIComponent(a) + "=[^;]*)"), c = (document.cookie.match(b) || []).pop();
                                return c && decodeURIComponent(c.split("=").pop())
                            }
                        }, a.prototype.setCookie = function (a, b, c) {
                            return void 0 === c && (c = {}), a && window.navigator.cookieEnabled ? (c.age = c.age || this.age_, document.cookie = [encodeURIComponent(a) + "=" + encodeURIComponent(b), c.age ? "; expires=" + new Date((new Date).getTime() + 1e3 * c.age).toUTCString() : "", c.path ? "; path=" + c.path : "; path=/", c.secure ? "; secure" : ""].join(""), this.getCookie(a)) : void 0
                        }, a
                    }();
                    a.Cookie = b
                }(b = a.DATA || (a.DATA = {}))
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b;
                !function (a) {
                    var b = function () {
                        function b() {
                            this.DB = new a.Database, this.Cookie = new a.Cookie(864e3)
                        }

                        return b
                    }();
                    a.Main = b
                }(b = a.DATA || (a.DATA = {}))
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b = function () {
                function a() {
                }

                return a.trim = function (a) {
                    if (a = "string" == typeof a ? a : String(0 === a && a.toString() || ""), a.trim)a = a.trim(); else if (a = a.replace(/^[\s\uFEFF\xA0]+/, "")) {
                        var b = /[\s\uFEFF\xA0]/, c = a.length, d = c % 8;
                        a:{
                            for (; d--;)if (!b.test(a.charAt(--c)))break a;
                            for (; c;) {
                                if (!b.test(a.charAt(--c)))break a;
                                if (!b.test(a.charAt(--c)))break a;
                                if (!b.test(a.charAt(--c)))break a;
                                if (!b.test(a.charAt(--c)))break a;
                                if (!b.test(a.charAt(--c)))break a;
                                if (!b.test(a.charAt(--c)))break a;
                                if (!b.test(a.charAt(--c)))break a;
                                if (!b.test(a.charAt(--c)))break a
                            }
                        }
                        a = a.substring(0, c + 1)
                    }
                    return a
                }, a.repeat = function (a, b) {
                    switch (a instanceof Array && "array" || typeof a) {
                        case"string":
                            var c = a;
                            return Array(b + 1).join(c);
                        case"array":
                            var d = a.length;
                            if (300 > b) {
                                var e = Array(b);
                                this.duff(-b, function (b) {
                                    return e[b] = a[b % d]
                                })
                            } else {
                                for (var e = a.slice(); 2 * e.length <= b;)e = e.concat(e);
                                e = e.concat(e.slice(0, b - e.length))
                            }
                            return e
                    }
                }, a.fire = function (a, b, c, d) {
                    return void 0 === b && (b = window), void 0 === c && (c = []), "function" == typeof a ? d ? setTimeout(function () {
                        a.apply(b || window, c)
                    }, 0) : a.apply(b || window, c) : a
                }, a.duff = function (a, b) {
                    if (0 > a) {
                        for (var c = -a, d = c % 8; d--;)b(--c);
                        for (; c;)b(--c), b(--c), b(--c), b(--c), b(--c), b(--c), b(--c), b(--c)
                    } else {
                        for (var e = a, c = 0, d = e % 8, f = e / 8 ^ 0; d--;)b(c++);
                        for (; f--;)b(c++), b(c++), b(c++), b(c++), b(c++), b(c++), b(c++), b(c++)
                    }
                }, a.duffEx = function (a, b) {
                    if (0 > a) {
                        var c = -a, d = c % 8;
                        a:{
                            for (; d--;)if (!1 === b(--c))break a;
                            for (; c;) {
                                if (!1 === b(--c))break a;
                                if (!1 === b(--c))break a;
                                if (!1 === b(--c))break a;
                                if (!1 === b(--c))break a;
                                if (!1 === b(--c))break a;
                                if (!1 === b(--c))break a;
                                if (!1 === b(--c))break a;
                                if (!1 === b(--c))break a
                            }
                        }
                    } else {
                        var e = a, c = 0, d = e % 8, f = e / 8 ^ 0;
                        a:{
                            for (; d--;)if (!1 === b(c++))break a;
                            for (; f--;) {
                                if (!1 === b(c++))break a;
                                if (!1 === b(c++))break a;
                                if (!1 === b(c++))break a;
                                if (!1 === b(c++))break a;
                                if (!1 === b(c++))break a;
                                if (!1 === b(c++))break a;
                                if (!1 === b(c++))break a;
                                if (!1 === b(c++))break a
                            }
                        }
                    }
                }, a.normalizeUrl = function (a, b) {
                    void 0 === b && (b = !0);
                    var c;
                    return c = this.trim(a), c = /^([^:/?#]+):\/\/[^/?#.]+\.[^/?#]+/i.test(c) ? c : function (a, b) {
                        return b.href = a, b.href
                    }(c, document.createElement("a")), c = encodeURI(decodeURI(c)), c = c.replace(/["`^|\\<>{}\[\]\s].*/, ""), c = b ? this.justifyPercentEncodingUrlCase_(a, c) : c
                }, a.canonicalizeUrl = function (a) {
                    function b(a) {
                        return a.toUpperCase()
                    }

                    var c = this.normalizeUrl(a, !1);
                    return c = c.replace(/(?:%\w{2})+/g, b)
                }, a.compareUrl = function (a, b) {
                    return a = this.canonicalizeUrl(a), b = this.canonicalizeUrl(b), a === b
                }, a.justifyPercentEncodingUrlCase_ = function (a, b) {
                    function c(b) {
                        var c = ~a.indexOf(b.toUpperCase()) || ~a.indexOf(b.toLowerCase());
                        return c ? a.substr(~c, b.length) : b
                    }

                    return a === b ? b : b.replace(/(?:%\w{2})+/g, c)
                }, a
            }();
            a.Utility = b
        }(b = a.LIBRARY || (a.LIBRARY = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (b) {
                var c = function () {
                    function c(c) {
                        this.model_ = c, this.data_ = new b.DATA.Main, this.stores_ = this.data_.DB.stores, this.util_ = a.LIBRARY.Utility
                    }

                    return c.prototype.getCookie = function (a) {
                        return this.data_.Cookie.getCookie(a)
                    }, c.prototype.setCookie = function (a, b, c) {
                        return this.data_.Cookie.setCookie(a, b, c)
                    }, c.prototype.connect = function (a) {
                        a.database.active ? (this.data_.DB.configure(a.database.revision, a.database.refresh), this.data_.DB.up(), this.saveTitle(), this.saveScrollPosition()) : this.data_.DB.down()
                    }, c.prototype.loadBuffers = function () {
                        for (var a in this.stores_)this.stores_[a].loadBuffer()
                    }, c.prototype.saveBuffers = function () {
                        for (var a in this.stores_)this.stores_[a].saveBuffer()
                    }, c.prototype.getHistoryBuffer = function (a) {
                        return this.stores_.history.getBuffer(this.model_.convertUrlToKey(a, !0))
                    }, c.prototype.loadTitle = function () {
                        var a = this, b = this.model_.convertUrlToKey(window.location.href, !0), c = this.stores_.history.getBuffer(b);
                        c && "string" == typeof c.title ? document.title = c.title : this.stores_.history.get(b, function (d) {
                            c = d.target.result, c && c.title && a.model_.compareKeyByUrl(b, a.util_.canonicalizeUrl(window.location.href)) && (document.title = c.title)
                        })
                    }, c.prototype.saveTitle = function (a, b) {
                        void 0 === a && (a = window.location.href), void 0 === b && (b = document.title);
                        var c = this.model_.convertUrlToKey(a, !0), d = {
                            url: c,
                            title: b,
                            date: (new Date).getTime(),
                            scrollX: undefined,
                            scrollY: undefined,
                            host: undefined,
                            expires: undefined
                        };
                        this.stores_.history.set(d, !0), this.stores_.history.clean()
                    }, c.prototype.loadScrollPosition = function () {
                        function a(a, b) {
                            "number" == typeof a && "number" == typeof b && window.scrollTo(parseInt(Number(a) + "", 10), parseInt(Number(b) + "", 10))
                        }

                        var b = this, c = this.model_.convertUrlToKey(window.location.href, !0), d = this.stores_.history.getBuffer(c);
                        d && "number" == typeof d.scrollX ? a(d.scrollX, d.scrollY) : this.stores_.history.get(c, function (e) {
                            d = e.target.result, d && "number" == typeof d.scrollX && b.model_.compareKeyByUrl(c, b.util_.canonicalizeUrl(window.location.href)) && a(d.scrollX, d.scrollY)
                        })
                    }, c.prototype.saveScrollPosition = function (a, b, c) {
                        void 0 === a && (a = window.location.href), void 0 === b && (b = jQuery(window).scrollLeft()), void 0 === c && (c = jQuery(window).scrollTop());
                        var d = this.model_.convertUrlToKey(a, !0), e = {
                            url: d,
                            scrollX: b,
                            scrollY: c,
                            date: (new Date).getTime(),
                            title: undefined,
                            host: undefined,
                            expires: undefined
                        };
                        this.stores_.history.set(e, !0)
                    }, c.prototype.loadExpires = function () {
                    }, c.prototype.saveExpires = function (a, b, c) {
                        var d = this.model_.convertUrlToKey(a, !0), e = {
                            url: d,
                            host: b || "",
                            expires: c,
                            title: undefined,
                            scrollX: undefined,
                            scrollY: undefined,
                            date: undefined
                        };
                        this.stores_.history.set(e, !0)
                    }, c.prototype.getServerBuffers = function () {
                        return this.stores_.server.getBuffers()
                    }, c.prototype.getServerBuffer = function (a) {
                        var b = this.model_.convertUrlToKey(a, !0).split("//").pop().split("/").shift();
                        return b = this.model_.compareKeyByUrl("http://" + b, "http://" + window.location.host) ? "" : b, this.stores_.server.getBuffer(b)
                    }, c.prototype.loadServer = function () {
                    }, c.prototype.saveServer = function (a, b, c, d, e) {
                        a = a.split("//").pop().split("/").shift(), a = this.model_.compareKeyByUrl("http://" + a, "http://" + window.location.host) ? "" : a;
                        var f = {
                            host: a, time: Math.max(c, 1), score: d, state: e,
                            expires: b
                        };
                        this.stores_.server.set(f, !0), this.stores_.server.clean()
                    }, c.prototype.removeServer = function (a) {
                        this.stores_.server.remove(a), this.stores_.server.clean()
                    }, c
                }();
                b.Data = c
            }(c = b.APP || (b.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (b) {
                var c = function () {
                    function b(b) {
                        this.data_ = b, this.util_ = a.LIBRARY.Utility, this.force_ = !1, this._host = "", this.parallel_ = 4
                    }

                    return b.prototype.host_ = function (a, b) {
                        return b && (this._host = b.balance.active ? this.sanitize(a, b).split("//").pop().split("/").shift() || "" : ""), this._host
                    }, b.prototype.host = function () {
                        return this.host_()
                    }, b.prototype.sanitize = function (a, b) {
                        if (!b)return "";
                        var c;
                        switch (a && typeof a) {
                            case"string":
                                c = a;
                                break;
                            case"object":
                                var d = a;
                                c = 4 === d.readyState && d.getResponseHeader(b.balance.server.header) || d.host
                        }
                        return c = c || "", !/[/?#"`^|\\<>{}\[\]\s]/.test(c) && jQuery.grep(b.balance.bounds, function (a) {
                            return "" === c || "*" === a || c === a || "." === a.charAt(0) && a === c.slice(-a.length)
                        }).length && c || ""
                    }, b.prototype.enable = function (a) {
                        return a.balance.active && a.balance.client.support.browser.test(window.navigator.userAgent) ? (this.data_.setCookie(a.balance.client.cookie.balance, "1"), void(a.balance.client.support.redirect.test(window.navigator.userAgent) && this.data_.setCookie(a.balance.client.cookie.redirect, "1"))) : void this.disable(a)
                    }, b.prototype.disable = function (a) {
                        this.data_.getCookie(a.balance.client.cookie.balance) && this.data_.setCookie(a.balance.client.cookie.balance, "0"), this.data_.getCookie(a.balance.client.cookie.redirect) && this.data_.setCookie(a.balance.client.cookie.redirect, "0"), this.changeServer("", a)
                    }, b.prototype.score = function (a, b) {
                        return Math.max(Math.round(b / a * 1e3), 0)
                    }, b.prototype.changeServer = function (a, b) {
                        return b.balance.active ? (this.host_(a, b), this.data_.setCookie(b.balance.client.cookie.host, a)) : this.host_("", b), this.host()
                    }, b.prototype.chooseServers_ = function (a) {
                        function b(a, b) {
                            return +b - +a
                        }

                        var c = this, d = a.balance.server.respite, e = a.balance.weight, f = a.ajax.timeout, g = a.balance.client.hosts.slice();
                        g = this.force_ ? jQuery.grep(g, function (a) {
                            return !!a
                        }) : g, function () {
                            var b = c.data_.getCookie(a.balance.client.cookie.host);
                            (!c.force_ || b) && (b === c.sanitize(b, a) ? !~jQuery.inArray(b, g) && g.unshift(b) : c.data_.setCookie(a.balance.client.cookie.host, ""))
                        }();
                        var h = this.data_.getServerBuffers(), i = {};
                        jQuery.each(Object.keys(h), function (b, d) {
                            var e = h[d];
                            ~jQuery.inArray(e.host, g) && g.splice(jQuery.inArray(e.host, g), 1), (!c.force_ || e.host) && (e.host === c.sanitize(e.host, a) && e.expires > (new Date).getTime() ? i[e.score] = e : c.data_.removeServer(e.host))
                        });
                        var j, k = Object.keys(i).sort(b), l = [];
                        for (jQuery.each(k, function (b) {
                            var h = i[k[b]], m = h.host, n = h.time, o = h.score, p = h.state;
                            if (~jQuery.inArray(m, g) && g.splice(jQuery.inArray(m, g), 1), !(p + d >= (new Date).getTime())) {
                                switch (p && c.data_.removeServer(h.host), !0) {
                                    case l.length >= a.balance.random && 0 < l.length:
                                        return !1;
                                    case e && !m && !!Math.floor(Math.random() * e):
                                    case f && n >= f:
                                    case l.length >= Math.min(Math.floor(k.length / 2), 3) && j && n >= j.time + 500 && f && n >= 2 * f / 3:
                                    case l.length >= Math.min(Math.floor(k.length / 2), 3) && j && o <= j.score / 2:
                                        return
                                }
                                j = j || h, l.push(m)
                            }
                        }); g.length;)l.push(g.splice(Math.floor(Math.random() * g.length), 1).shift());
                        return l
                    }, b.prototype.chooseServerFromCache_ = function (a) {
                        var b = this, c = [], d = this.data_.getHistoryBuffer(a.destLocation.href);
                        switch (!0) {
                            case!d:
                                break;
                            case d.host !== this.sanitize(d.host, a):
                                this.data_.saveExpires(d.url, "", 0);
                            case!d.expires:
                            case d.expires < (new Date).getTime():
                            case this.force_ && !d.host:
                                break;
                            default:
                                c = jQuery.map(this.data_.getServerBuffers(), function (a) {
                                    return a.host === d.host ? a.state >= (new Date).getTime() ? void b.data_.saveExpires(d.url, d.host, 0) : a.host : void 0
                                })
                        }
                        return c.length ? c.pop() || " " : ""
                    }, b.prototype.chooseServerFromScore_ = function (a) {
                        var b = this.chooseServers_(a);
                        return b.slice(Math.floor(Math.random() * Math.min(b.length, 6))).shift() || " "
                    }, b.prototype.chooseServer = function (a) {
                        return a.balance.active ? this.util_.trim(this.chooseServerFromCache_(a) || this.chooseServerFromScore_(a)) : ""
                    }, b.prototype.bypass = function (a) {
                        var b = this;
                        this.force_ = !0;
                        var c = jQuery.Deferred();
                        if (!a || !a.balance.active)return c.reject();
                        var d = this.parallel_, e = this.chooseServers_(a), f = jQuery.extend({}, a.ajax, a.balance.option.ajax);
                        e = jQuery.grep(e, function (a) {
                            return !!a
                        });
                        for (var g = 0, h = e.length, i = function (d) {
                            var j = b, k = (new Date).getTime();
                            "pending" === c.state() && jQuery.ajax(jQuery.extend({}, f, {
                                url: j.util_.normalizeUrl(window.location.protocol + "//" + d + window.location.pathname.replace(/^\/?/, "/") + window.location.search),
                                xhr: a.balance.option.callbacks.ajax.xhr ? function () {
                                    var b;
                                    return b = j.util_.fire(a.balance.option.callbacks.ajax.xhr, this, [event, a]), b = "object" == typeof b ? b : jQuery.ajaxSettings.xhr()
                                } : undefined,
                                beforeSend: a.balance.option.callbacks.ajax.beforeSend || a.server.header ? function (b, c) {
                                    a.server.header && b.setRequestHeader(a.nss.requestHeader, "true"), "object" == typeof a.server.header && (b.setRequestHeader(a.nss.requestHeader, "true"), a.server.header.area && b.setRequestHeader(a.nss.requestHeader + "-Area", this.app_.chooseArea(a.area, document, document)), a.server.header.head && b.setRequestHeader(a.nss.requestHeader + "-Head", a.load.head), a.server.header.css && b.setRequestHeader(a.nss.requestHeader + "-CSS", a.load.css.toString()), a.server.header.script && b.setRequestHeader(a.nss.requestHeader + "-Script", a.load.script.toString())), j.util_.fire(a.balance.option.callbacks.ajax.beforeSend, this, [event, a, b, c])
                                } : undefined,
                                dataFilter: a.balance.option.callbacks.ajax.dataFilter ? function (b, c) {
                                    return j.util_.fire(a.balance.option.callbacks.ajax.dataFilter, this, [event, a, b, c]) || b
                                } : undefined,
                                success: function (b, c, e) {
                                    k = (new Date).getTime() - k;
                                    var f = j.data_.getServerBuffer(this.url), g = j.score(k, e.responseText.length);
                                    k = f && !f.state && f.time ? Math.round((f.time + k) / 2) : k, g = f && !f.state && f.score ? Math.round((f.score + g) / 2) : g, j.data_.saveServer(d, (new Date).getTime() + a.balance.server.expires, k, g, 0), d = j.sanitize(e, a) || d, j.util_.fire(a.balance.option.ajax.success, this, arguments)
                                },
                                error: function (b) {
                                    j.data_.saveServer(d, (new Date).getTime() + a.balance.server.expires, 0, 0, (new Date).getTime()), d = null, j.util_.fire(a.balance.option.ajax.error, this, arguments)
                                },
                                complete: function () {
                                    j.util_.fire(a.balance.option.ajax.complete, this, arguments), ++g, c.notify(g, h, d), d ? (j.host_(d, a), e.splice(0, e.length), c.resolve(d)) : !j.host() && e.length ? i(e.shift()) : c.reject()
                                }
                            }))
                        }; d-- && e.length;)i(e.shift());
                        return c
                    }, b
                }();
                b.Balancer = c
            }(c = b.APP || (b.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b = function () {
                    function a(a, b, d, e, f, g) {
                        this.data_ = a ? {url: a, data: b, textStatus: d, jqXHR: e, host: f, bind: g} : {
                            url: undefined,
                            data: undefined,
                            textStatus: undefined,
                            jqXHR: undefined,
                            host: undefined,
                            bind: undefined
                        }, this.data = new c(this.data_)
                    }

                    return a.prototype.state = function (a) {
                        var b = a ? a.cache.expires.min : undefined, c = a ? a.cache.expires.max : undefined;
                        switch (!1) {
                            case this.data.jqXHR() && 200 === +this.data.jqXHR().status:
                            case this.data.expires(b, c) >= (new Date).getTime():
                                return !1;
                            default:
                                return !0
                        }
                    }, a
                }();
                a.PageRecord = b;
                var c = function () {
                    function a(a) {
                        this.data_ = a
                    }

                    return a.prototype.url = function () {
                        return this.data_.url
                    }, a.prototype.data = function () {
                        return this.data_.data
                    }, a.prototype.textStatus = function () {
                        return this.data_.textStatus
                    }, a.prototype.jqXHR = function () {
                        return this.data_.jqXHR
                    }, a.prototype.bind = function () {
                        return this.data_.bind
                    }, a.prototype.host = function () {
                        return this.data_.host
                    }, a.prototype.expires = function (a, b) {
                        if (!this.jqXHR() && !this.data())return 0;
                        var c, d = this.jqXHR();
                        switch (d && (d.timeStamp = d.timeStamp || new Date(d.getResponseHeader("Date")).getTime() || (new Date).getTime()), !0) {
                            case!d:
                                c = 0;
                                break;
                            case/no-store|no-cache/.test(d.getResponseHeader("Cache-Control")):
                                c = 0;
                                break;
                            case!!d.getResponseHeader("Cache-Control") && !!~d.getResponseHeader("Cache-Control").indexOf("max-age="):
                                c = new Date(d.getResponseHeader("Date") || new Date(d.timeStamp).toString()).getTime() + 1e3 * +d.getResponseHeader("Cache-Control").match(/max-age=(\d*)/).pop();
                                break;
                            case!!d.getResponseHeader("Expires"):
                                c = new Date(d.getResponseHeader("Expires")).getTime();
                                break;
                            default:
                                c = 0
                        }
                        return (undefined !== a || undefined !== b) && (c = "number" == typeof a ? Math.max(a + (new Date).getTime(), c) : c, c = "number" == typeof b ? Math.min(b + (new Date).getTime(), c) : c), c = Math.max(c, 0) || 0
                    }, a
                }();
                a.PageRecordData = c
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b = function () {
                    function a() {
                    }

                    return a.prototype.chooseArea = function (a, b, c, d) {
                        void 0 === d && (d = !0);
                        var e = "string" == typeof a ? [a] : a;
                        a:for (var f = 0; f < e.length; f++) {
                            for (var g = e[f], h = g.match(/(?:[^,\(\[]+|\(.*?\)|\[.*?\])+/g) || [g], i = h.length; i--;) {
                                var j = h[i];
                                switch (!0) {
                                    case 0 === jQuery(j, b).length:
                                    case jQuery(j, b).length !== jQuery(j, c).length:
                                        continue a
                                }
                            }
                            return g
                        }
                        return ""
                    }, a.prototype.dispatchEvent = function (a, b, c, d) {
                        var e = document.createEvent("HTMLEvents");
                        e.initEvent(b, c, d), a.dispatchEvent(e)
                    }, a
                }();
                a.PageUtility = b
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (b) {
                var c = function () {
                    function b(b, c, d, e, f, g, h) {
                        this.model_ = b, this.page_ = c, this.balancer_ = d, this.setting_ = e, this.event_ = f, this.success_ = g, this.failure_ = h, this.util_ = a.LIBRARY.Utility, this.binds_ = [], this.jsons_ = [], this.main_()
                    }

                    return b.prototype.main_ = function () {
                        function b(a, b, c) {
                            return e.call(this, [].slice.call(arguments), undefined)
                        }

                        function c(a, b, c) {
                            return f.apply(this, arguments)
                        }

                        function d(a, b) {
                            return g.apply(this, arguments)
                        }

                        function e(a, b, c) {
                            void 0 === c && (c = []), arguments.length && arguments[0] && (h.data_ = a[0], h.textStatus_ = a[1], h.jqXHR_ = a[2], h.binds_ = c.every(function (a) {
                                return !!a && "object" == typeof a
                            }) ? c : [c[2]], h.util_.fire(i.callbacks.ajax.success, this[0] || this, [j, i, h.data_, h.textStatus_, h.jqXHR_]))
                        }

                        function f(a, b, c) {
                            arguments.length && arguments[0] && (h.jqXHR_ = a, h.textStatus_ = b, h.errorThrown_ = c, h.binds_ = [], h.util_.fire(i.callbacks.ajax.error, this[0] || this, [j, i, h.jqXHR_, h.textStatus_, h.errorThrown_]))
                        }

                        function g() {
                            arguments.length && arguments[0] && (h.util_.fire(i.callbacks.ajax.complete, this[0] || this, [j, i, h.jqXHR_, h.textStatus_]), h.model_.setPageXHR(null), h.model_.setDataXHR(null), 200 === +h.jqXHR_.status && h.binds_.every(function (a) {
                                return 200 === +a.status
                            }) ? (h.binds_.forEach(function (a, b) {
                                return h.binds_[b].responseJSON = h.binds_[b].responseJSON || h.jsons_[b]
                            }), h.model_.setCache(i.destLocation.href, n && n.data || null, h.textStatus_, h.jqXHR_), h.success_(i, j, h.data_, h.textStatus_, h.jqXHR_, h.host_, h.binds_)) : h.failure_(i, j, h.data_, h.textStatus_, h.jqXHR_, h.host_, h.binds_))
                        }

                        var h = this, i = this.setting_, j = this.event_ = jQuery.extend(!0, {}, this.event_), k = this.util_.fire(i.wait, i, [j, i, i.origLocation.cloneNode(), i.destLocation.cloneNode()]), l = i.speedcheck, m = this.model_.speed;
                        l && (m.fire = j.timeStamp), l && m.time.splice(0, 100, 0), l && m.name.splice(0, 100, "pjax(" + m.time.slice(-1) + ")");
                        var n;
                        switch (i.cache[j.type.toLowerCase()] && j.type.toLowerCase()) {
                            case a.EVENT.CLICK:
                                n = this.model_.getCache(i.destLocation.href);
                                break;
                            case a.EVENT.SUBMIT:
                                n = i.cache[j.currentTarget.method.toLowerCase()] ? this.model_.getCache(i.destLocation.href) : n;
                                break;
                            case a.EVENT.POPSTATE:
                                n = this.model_.getCache(i.destLocation.href)
                        }
                        var o = this.model_.getPageXHR();
                        if (!(o && o.readyState < 4 && o.location && this.model_.comparePageByUrl(o.location.href, i.destLocation.href)))if (this.dispatchEvent(document, i.nss.event.pjax.fetch, !1, !1), n && n.jqXHR && 200 === +n.jqXHR.status)if (l && m.name.splice(0, 1, "cache(" + m.time.slice(-1) + ")"), this.host_ = this.model_.host(), this.model_.setDataXHR(this.bind_(this.util_.fire(i.bind, i, [j, i, i.origLocation.cloneNode(), i.destLocation.cloneNode()]))), o = n.jqXHR, o.location = o.location || i.destLocation.cloneNode(), this.model_.setPageXHR(o), this.page_.loadtime = 0, this.host_ = this.balancer_.sanitize(n.host, i), this.data_ = n.jqXHR.responseText, this.textStatus_ = n.textStatus, this.jqXHR_ = n.jqXHR, this.model_.isDeferrable) {
                            var p = this.wait_(k);
                            this.page_.setWait(p), jQuery.when(jQuery.Deferred().resolve(this.data_, this.textStatus_, this.jqXHR_), p, jQuery.when.apply(null, this.model_.getDataXHR())).done(e).fail(f).always(g)
                        } else {
                            var q = jQuery.extend({}, jQuery.ajaxSettings, i.ajax);
                            q = q.context || q, b.call(q, this.data_, this.textStatus_, this.jqXHR_), d.call(q, this.jqXHR_, this.textStatus_)
                        } else if (o && o.follow && !~"error abort timeout parsererror".indexOf(o.statusText)) {
                            l && m.time.splice(0, 1, o.timeStamp - m.fire), l && m.name.splice(0, 1, "preload(" + m.time.slice(-1) + ")"), l && m.time.push(m.now() - m.fire), l && m.name.push("continue(" + m.time.slice(-1) + ")"), this.host_ = this.model_.host(), this.model_.setDataXHR(this.bind_(this.util_.fire(i.bind, i, [j, i, i.origLocation.cloneNode(), i.destLocation.cloneNode()]))), o.location = i.destLocation.cloneNode(), this.model_.setPageXHR(o), this.host_ = this.model_.host(), this.page_.loadtime = o.timeStamp;
                            var p = this.wait_(k);
                            this.page_.setWait(p), delete o.timeStamp, jQuery.when(o, p, jQuery.when.apply(null, this.model_.getDataXHR())).done(e).fail(f).always(g)
                        } else {
                            this.page_.loadtime = j.timeStamp;
                            var r = {};
                            this.host_ = this.model_.host(), this.model_.setDataXHR(this.bind_(this.util_.fire(i.bind, i, [j, i, i.origLocation.cloneNode(), i.destLocation.cloneNode()])));
                            var s = this.balance_(i.destLocation.href);
                            switch (r.url = i.server.query ? [s.protocol, "//", s.host, s.pathname.replace(/^\/?/, "/"), s.search.replace(/&*$/, "&" + i.server.query).replace(/^\??&/, "?").replace(/(\?|&)$/, ""), s.hash].join("") : s.href, j.type.toLowerCase()) {
                                case a.EVENT.CLICK:
                                    r.type = "GET";
                                    break;
                                case a.EVENT.SUBMIT:
                                    switch (r.type = j.currentTarget.method.toUpperCase(), r.type) {
                                        case"POST":
                                            jQuery(j.currentTarget).has(":file").length ? "function" == typeof FormData && (r.data = (new FormData)(j.currentTarget), r.contentType = !1, r.processData = !1) : r.data = jQuery(j.currentTarget).serializeArray();
                                            break;
                                        case"GET":
                                    }
                                    break;
                                case a.EVENT.POPSTATE:
                                    r.type = "GET"
                            }
                            if (r = jQuery.extend({}, i.ajax, r, {
                                    xhr: i.callbacks.ajax.xhr ? function () {
                                        var a;
                                        return a = h.util_.fire(i.callbacks.ajax.xhr, this, [j, i]), a = "object" == typeof a ? a : jQuery.ajaxSettings.xhr()
                                    } : undefined,
                                    beforeSend: i.callbacks.ajax.beforeSend || i.server.header ? function (a, b) {
                                        i.server.header && a.setRequestHeader(i.nss.requestHeader, "true"), "object" == typeof i.server.header && (a.setRequestHeader(i.nss.requestHeader, "true"), i.server.header.area && a.setRequestHeader(i.nss.requestHeader + "-Area", this.app_.chooseArea(i.area, document, document)), i.server.header.head && a.setRequestHeader(i.nss.requestHeader + "-Head", i.load.head), i.server.header.css && a.setRequestHeader(i.nss.requestHeader + "-CSS", i.load.css.toString()), i.server.header.script && a.setRequestHeader(i.nss.requestHeader + "-Script", i.load.script.toString())), h.util_.fire(i.callbacks.ajax.beforeSend, this, [j, i, a, b])
                                    } : undefined,
                                    dataFilter: i.callbacks.ajax.dataFilter ? function (a, b) {
                                        return h.util_.fire(i.callbacks.ajax.dataFilter, this, [j, i, a, b]) || a
                                    } : undefined,
                                    success: this.model_.isDeferrable ? null : b,
                                    error: this.model_.isDeferrable ? null : c,
                                    complete: this.model_.isDeferrable ? null : d
                                }), o = jQuery.ajax(r), o.location = i.destLocation.cloneNode(), this.model_.setPageXHR(o), !this.model_.isDeferrable)return;
                            var p = this.wait_(k);
                            this.page_.setWait(p), jQuery.when(this.model_.getPageXHR(), p, jQuery.when.apply(null, this.model_.getDataXHR())).done(e).fail(f).always(g)
                        }
                    }, b.prototype.balance_ = function (a) {
                        var b = (this.setting_, document.createElement("a"));
                        return b.href = a, b.host = this.host_ || b.host, b
                    }, b.prototype.bind_ = function (a) {
                        var b = this;
                        return (a || []).map(function (a) {
                            return a.url = b.util_.canonicalizeUrl(a.url), a.url.indexOf("//") > -1 ? a : (a.url = b.balance_(a.url).href, a)
                        }).map(jQuery.ajax).map(function (a, c) {
                            return a.done(function (a, d, e) {
                                var f = a;
                                switch (e.getResponseHeader("Content-Type").split("/").pop()) {
                                    case"json":
                                        if (e.responseJSON)break;
                                        if (b.jsons_[c])for (var g in f)b.jsons_[c][g] = f[g]; else b.jsons_[c] = f
                                }
                            })
                        })
                    }, b.prototype.wait_ = function (a) {
                        var b = jQuery.Deferred();
                        return a ? (setTimeout(function () {
                            b.resolve()
                        }, a), b) : b.resolve()
                    }, b.prototype.chooseArea = function (a, b, c) {
                    }, b.prototype.dispatchEvent = function (a, b, c, d) {
                    }, b
                }();
                b.PageFetch = c
            }(c = b.APP || (b.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            var b;
            !function (a) {
                var b = function () {
                    function b(b, c, d, e) {
                        this.Record_ = b, this.model_ = c, this.balancer_ = d, this.page_ = e, this.hash_ = function (a) {
                            return a.nss.url
                        }, this.table_ = {}, this.order_ = [], this.fetch_ = a.PageFetch
                    }

                    return b.prototype.fetchRecord = function (a, b, c, d) {
                        this.getRecord(a).state(a) ? this.pullRecord(a, b, c, d) : this.pullRecord(a, b, c, d)
                    }, b.prototype.pullRecord = function (a, b, c, d) {
                        var e = this;
                        new this.fetch_(this.model_, this.page_, this.balancer_, a, b, function (a, b, d, f, g, h, i) {
                            var j = e.setRecord(a, e.getRecord(a).data.data() || "", f, g, h, i);
                            c(j, a, b)
                        }, function (a, b, c, f, g, h, i) {
                            var j = e.setRecord(a, e.getRecord(a).data.data() || "", f, g, h, i);
                            d(j, a, b)
                        })
                    }, b.prototype.getRecord = function (a) {
                        return this.table_[this.hash_(a)] = this.table_[this.hash_(a)] || new this.Record_
                    }, b.prototype.setRecord = function (a, b, c, d, e, f) {
                        return this.cleanRecords_(a), this.addOrder_(a), this.table_[this.hash_(a)] = new this.Record_(a.nss.url, b, c, d, e, f)
                    }, b.prototype.removeRecord = function (a) {
                        return this.removeOrder_(a), this.table_[this.hash_(a)] = new this.Record_
                    }, b.prototype.clearRecord = function () {
                        this.order_.splice(0, this.order_.length);
                        for (var a in this.table_)delete this.table_[a]
                    }, b.prototype.cleanRecords_ = function (a) {
                        if (a.cache.limit)for (; this.order_.length >= a.cache.limit;)this.removeRecord(this.order_.pop())
                    }, b.prototype.addOrder_ = function (a) {
                        this.removeOrder_(a), this.order_.unshift(a)
                    }, b.prototype.removeOrder_ = function (a) {
                        for (var b = this.order_.length; b--;)this.order_[b].nss.url === a.nss.url && this.order_.splice(b, 1)
                    }, b
                }();
                a.PageProvider = b
            }(b = a.APP || (a.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (b) {
                var c = function () {
                    function b(b, c, d, e, f, g, h) {
                        this.model_ = b, this.page_ = c, this.data_ = d, this.balancer_ = e, this.setting_ = f, this.event_ = g, this.record_ = h, this.util_ = a.LIBRARY.Utility, this.loadwaits_ = [], this.main_()
                    }

                    return b.prototype.main_ = function () {
                        var b = this.record_, c = this.setting_, d = this.event_, e = c.speedcheck, f = this.model_.speed;
                        if (e && f.time.push(f.now() - f.fire), e && f.name.push("fetch(" + f.time.slice(-1) + ")"), ++this.page_.count, this.page_.loadtime = this.page_.loadtime && (new Date).getTime() - this.page_.loadtime, c.cache.mix && a.EVENT.POPSTATE !== d.type.toLowerCase() && (new Date).getTime() - d.timeStamp <= c.cache.mix)return this.model_.fallback(d);
                        try {
                            if (this.page_.landing = null, !~(b.data.jqXHR().getResponseHeader("Content-Type") || "").toLowerCase().search(c.contentType))throw new Error("throw: content-type mismatch");
                            if (this.srcTitle_ = jQuery(b.data.jqXHR().responseText.match(/<title(?:\s.*?[^\\])?>(?:.*?[^\\])?<\/title>|$/i).pop()).text(), this.dstTitle_ = document.title, this.redirect_(), this.dispatchEvent(window, c.nss.event.pjax.unload, !1, !1), this.url_(), !this.model_.comparePageByUrl(c.destLocation.href, window.location.href))throw new Error("throw: location mismatch");
                            this.document_()
                        } catch (g) {
                            if (!g)return;
                            this.model_.getCache(window.location.href) && this.model_.removeCache(c.destLocation.href), this.model_.fallback(d)
                        }
                    }, b.prototype.isRegister_ = function (b, c) {
                        if (b.destLocation.href === b.origLocation.href)return !1;
                        switch (c.type.toLowerCase()) {
                            case a.EVENT.CLICK:
                            case a.EVENT.SUBMIT:
                                return !0;
                            case a.EVENT.POPSTATE:
                                return !1
                        }
                    }, b.prototype.isReplace_ = function (b, c) {
                        switch (c.type.toLowerCase()) {
                            case a.EVENT.CLICK:
                            case a.EVENT.SUBMIT:
                                return jQuery(c.currentTarget).is(b.replace);
                            case a.EVENT.POPSTATE:
                                return !1
                        }
                    }, b.prototype.isCacheUsable_ = function (b, c) {
                        switch (!0) {
                            case!c.cache.click && !c.cache.submit && !c.cache.popstate:
                            case a.EVENT.SUBMIT === b.type.toLowerCase() && !c.cache[b.currentTarget.method.toLowerCase()]:
                                return !1;
                            default:
                                return !0
                        }
                    }, b.prototype.redirect_ = function () {
                        var b = this, c = this.setting_, d = this.event_, e = (jQuery('head meta[http-equiv="Refresh"][content*="URL="]').attr("content") || "").match(/\w+:\/\/[^;\s"']+|$/i).shift();
                        if (e && !this.model_.comparePageByUrl(c.destLocation.href, e)) {
                            var f = c.destLocation.cloneNode();
                            if (f.href = e, this.util_.fire(c.callbacks.update.redirect.before, c, [d, c, f.cloneNode(), c.origLocation.cloneNode(), c.destLocation.cloneNode()]) !== !1) {
                                switch (!0) {
                                    case!c.redirect:
                                    case f.protocol !== c.destLocation.protocol:
                                    case f.host !== c.destLocation.host:
                                    case a.EVENT.SUBMIT === d.type.toLowerCase() && "GET" !== d.currentTarget.method.toUpperCase():
                                        switch (d.type.toLowerCase()) {
                                            case a.EVENT.CLICK:
                                            case a.EVENT.SUBMIT:
                                                window.location.assign(f.href);
                                                break;
                                            case a.EVENT.POPSTATE:
                                                window.location.replace(f.href)
                                        }
                                        throw!1;
                                    default:
                                        switch (jQuery[a.DEF.NAME].enable(), d.type.toLowerCase()) {
                                            case a.EVENT.CLICK:
                                            case a.EVENT.SUBMIT:
                                                setTimeout(function () {
                                                    return jQuery[a.DEF.NAME].click(f.href)
                                                }, 0);
                                                break;
                                            case a.EVENT.POPSTATE:
                                                window.history.replaceState(window.history.state, this.srcTitle_, f.href), this.isRegister_(c, d) && c.fix.location && !this.util_.compareUrl(c.destLocation.href, window.location.href) && (jQuery[a.DEF.NAME].disable(), window.history.back(), window.history.forward(), jQuery[a.DEF.NAME].enable()), setTimeout(function () {
                                                    return b.dispatchEvent(window, a.EVENT.POPSTATE, !1, !1)
                                                }, 0)
                                        }
                                        throw!1
                                }
                                this.util_.fire(c.callbacks.update.redirect.after, c, [d, c, f.cloneNode(), c.origLocation.cloneNode(), c.destLocation.cloneNode()]) === !1
                            }
                        }
                    }, b.prototype.url_ = function () {
                        var b = this.setting_, c = this.event_;
                        this.model_.location.href = b.destLocation.href, this.util_.fire(b.callbacks.update.url.before, b, [c, b, b.origLocation.cloneNode(), b.destLocation.cloneNode()]) !== !1 && (this.isReplace_(b, c) ? (window.history.replaceState(this.util_.fire(b.state, b, [c, b, b.origLocation.cloneNode(), b.destLocation.cloneNode()]), this.srcTitle_, b.destLocation.href), b.fix.location && !this.util_.compareUrl(b.destLocation.href, window.location.href) && window.location.replace(b.destLocation.href)) : this.isRegister_(b, c) && (window.history.pushState(this.util_.fire(b.state, b, [c, b, b.origLocation.cloneNode(), b.destLocation.cloneNode()]), ~window.navigator.userAgent.toLowerCase().indexOf("opera") ? this.dstTitle_ : this.srcTitle_, b.destLocation.href), b.fix.location && !this.util_.compareUrl(b.destLocation.href, window.location.href) && (jQuery[a.DEF.NAME].disable(), window.history.back(), window.history.forward(), jQuery[a.DEF.NAME].enable())), this.util_.fire(b.callbacks.update.url.after, b, [c, b, b.origLocation.cloneNode(), b.destLocation.cloneNode()]) === !1)
                    }, b.prototype.document_ = function () {
                        var b = this, c = this.setting_, d = this.event_;
                        if (c.load.script && !this.page_.loadedScripts[""]) {
                            var e = this.page_.loadedScripts;
                            e[""] = !0, jQuery("script").each(function () {
                                var a = this;
                                a.src && (e[a.src] = !c.load.reload || !jQuery(a).is(c.load.reload))
                            })
                        }
                        this.srcDocument_ = this.page_.parser.parse(this.record_.data.jqXHR().responseText, c.destLocation.href), this.dstDocument_ = document;
                        var f = c.speedcheck, g = this.model_.speed;
                        if (f && g.time.push(g.now() - g.fire), f && g.name.push("parse(" + g.time.slice(-1) + ")"), this.area_ = this.chooseArea(c.area, this.srcDocument_, this.dstDocument_), !this.area_)throw new Error("throw: area notfound");
                        this.areas_ = this.area_.match(/(?:[^,]+?|\(.*?\)|\[.*?\])+/g), this.overwriteDocumentByCache_(), c.fix.noscript && this.escapeNoscript_(this.srcDocument_), c.fix.reference && this.fixReference_(c.origLocation.href, this.dstDocument_), this.rewrite_(), this.title_(), c.fix.history && this.data_.saveTitle(), this.data_.saveExpires(this.record_.data.url(), this.record_.data.host(), this.record_.data.expires()), this.head_(), f && g.time.push(g.now() - g.fire), f && g.name.push("head(" + g.time.slice(-1) + ")"), this.content_(), f && g.time.push(g.now() - g.fire), f && g.name.push("content(" + g.time.slice(-1) + ")"), this.balance_(), this.css_('link[rel~="stylesheet"], style'), jQuery(window).one(a.DEF.NAME + ":rendering", function (e) {
                            e.preventDefault(), e.stopImmediatePropagation();
                            var h = function (a) {
                                return b.model_.comparePageByUrl(c.destLocation.href, window.location.href) ? (b.dispatchEvent(document, c.nss.event.pjax.ready, !1, !1), jQuery(b.area_).each(function (a, b) {
                                    return jQuery(b).width()
                                }), jQuery.when ? jQuery.Deferred().resolve() : a()) : void 0
                            }, i = function (e) {
                                return b.model_.comparePageByUrl(c.destLocation.href, window.location.href) ? (b.util_.fire(c.callback, c, [d, c]), setTimeout(function () {
                                    switch (d.type.toLowerCase()) {
                                        case a.EVENT.CLICK:
                                        case a.EVENT.SUBMIT:
                                            b.model_.overlay(c) || b.scrollByHash_(c) || b.scroll_(!0);
                                            break;
                                        case a.EVENT.POPSTATE:
                                            b.model_.overlay(c) || b.scroll_(!0)
                                    }
                                }, 100), b.dispatchEvent(document, c.nss.event.pjax.render, !1, !1), f && g.time.push(g.now() - g.fire), f && g.name.push("render(" + g.time.slice(-1) + ")"), jQuery.when ? jQuery.when.apply(jQuery, b.loadwaits_) : e()) : void 0
                            }, j = function () {
                                return b.model_.comparePageByUrl(c.destLocation.href, window.location.href) ? (b.dispatchEvent(window, c.nss.event.pjax.load, !1, !1), f && g.time.push(g.now() - g.fire), f && g.name.push("load(" + g.time.slice(-1) + ")"), f && console.log(g.time), f && console.log(g.name), b.script_("[src][defer]"), jQuery.when && jQuery.Deferred().resolve()) : jQuery.when && jQuery.Deferred().reject()
                            };
                            if (b.scroll_(!1), 100 > b.page_.loadtime && c.reset.type.match(d.type.toLowerCase()) && !jQuery('form[method][method!="GET"]').length)switch (!1) {
                                case b.page_.count < c.reset.count || !c.reset.count:
                                case(new Date).getTime() < c.reset.time + b.page_.time || !c.reset.time:
                                    throw new Error("throw: reset")
                            }
                            var k = b.script_(":not([defer]), :not([src])");
                            if (jQuery.when) {
                                var l = jQuery.Deferred().pipe ? "pipe" : "then";
                                jQuery.when.apply(jQuery, k)[l](function () {
                                    return h()
                                })[l](function () {
                                    return i()
                                })[l](function () {
                                    return j()
                                })
                            } else h(function () {
                                return i(function () {
                                    return j()
                                })
                            })
                        }).trigger(a.DEF.NAME + ":rendering")
                    }, b.prototype.overwriteDocumentByCache_ = function () {
                        var a = this.setting_, b = this.event_, c = this.model_.getCache(a.destLocation.href);
                        if (this.isCacheUsable_(b, a) && c && c.data) {
                            var d = a.fix.noscript ? this.restoreNoscript_(c.data) : c.data, e = this.page_.parser.parse(d, a.destLocation.href), f = this.srcDocument_;
                            f.title = e.title;
                            for (var g, h, i = 0; this.areas_[i]; i++) {
                                if (g = jQuery(this.areas_[i], e).clone(), h = jQuery(this.areas_[i], f), !g.length || !h.length || g.length !== h.length)throw new Error("throw: area mismatch");
                                for (var j = 0; g[j]; j++)h[j].parentNode.replaceChild(g[j], h[j])
                            }
                        }
                    }, b.prototype.rewrite_ = function () {
                        function a(a) {
                            if (!a)return {};
                            switch (a.getResponseHeader("Content-Type").split("/").pop()) {
                                case"json":
                                    return a.responseJSON
                            }
                        }

                        var b = this.setting_, c = this.event_;
                        b.rewrite && this.util_.fire(b.callbacks.update.rewrite.before, b, [c, b, this.srcDocument_, this.dstDocument_]) !== !1 && (this.util_.fire(b.rewrite, b, [this.srcDocument_, this.area_, this.record_.data.host(), this.record_.data.bind().map(a)]), this.util_.fire(b.callbacks.update.rewrite.before, b, [c, b, this.srcDocument_, this.dstDocument_]) === !1)
                    }, b.prototype.title_ = function () {
                        var a = this.setting_, b = this.event_;
                        this.util_.fire(a.callbacks.update.title.before, a, [b, a, this.srcDocument_.title, this.dstDocument_.title]) !== !1 && (this.dstDocument_.title = this.srcDocument_.title, this.util_.fire(a.callbacks.update.title.after, a, [b, a, this.srcDocument_.title, this.dstDocument_.title]) === !1)
                    }, b.prototype.head_ = function () {
                        var a = this.setting_, b = this.event_, c = this.srcDocument_, d = this.dstDocument_;
                        if (a.load.head && this.util_.fire(a.callbacks.update.head.before, a, [b, a, this.srcDocument_.querySelector("head"), this.dstDocument_.querySelector("head")]) !== !1) {
                            for (var e, f = "base, meta, link", g = jQuery(c.head).children(f).filter(a.load.head).not(a.load.ignore).not('link[rel~="stylesheet"], style, script'), h = jQuery(d.head).children(f).filter(a.load.head).not(a.load.ignore).not('link[rel~="stylesheet"], style, script'), i = jQuery(), j = h, k = 0; e = g[k]; k++) {
                                for (var l = 0; j[l]; l++)if (j[l].tagName === e.tagName && j[l].outerHTML === e.outerHTML) {
                                    if (i.length) {
                                        var m = h[h.index(j[l]) - 1];
                                        m ? jQuery(m).after(i.clone()) : j.eq(l).before(i.clone()), i = jQuery()
                                    }
                                    j = j.not(j[l]), e = null;
                                    break
                                }
                                i = i.add(e)
                            }
                            jQuery("title", d).before(i.clone()), j.remove(), this.util_.fire(a.callbacks.update.head.after, a, [b, a, this.srcDocument_.querySelector("head"), this.dstDocument_.querySelector("head")]) === !1
                        }
                    }, b.prototype.content_ = function () {
                        function a() {
                            if (jQuery.Deferred) {
                                var a = jQuery.Deferred();
                                switch (this.tagName.toLowerCase()) {
                                    case"img":
                                        jQuery(this).one("load error abort", a.resolve);
                                        break;
                                    case"iframe":
                                    case"frame":
                                        jQuery(this).one("load", a.resolve)
                                }
                                return a
                            }
                        }

                        var b = this, c = this.setting_, d = this.event_, e = this.srcDocument_, f = this.dstDocument_;
                        if (this.util_.fire(c.callbacks.update.content.before, c, [d, c, jQuery(this.area_, this.srcDocument_).get(), jQuery(this.area_, this.dstDocument_).get()]) !== !1) {
                            jQuery(this.area_).children("." + c.nss.elem + "-check").remove();
                            for (var g, h, i = 0; this.areas_[i]; i++) {
                                if (g = jQuery(this.areas_[i], e), h = jQuery(this.areas_[i], f), !g.length || !h.length || g.length !== h.length)throw new Error("throw: area mismatch");
                                g = g.map(function (a, b) {
                                    return document.importNode(b, !0)
                                }), g.find("script").each(function (a, c) {
                                    return b.escapeScript_(c)
                                }), this.loadwaits_ = this.loadwaits_.concat(g.find("img, iframe, frame").map(a).get());
                                for (var j = 0; g[j]; j++)h[j].parentNode.replaceChild(g[j], h[j]), document.body === g[j] && (jQuery.each(g[j].attributes, function (a, b) {
                                    return h[j].removeAttribute(b.name)
                                }), jQuery.each(g[j].attributes, function (a, b) {
                                    return h[j].setAttribute(b.name, b.value)
                                }));
                                h = jQuery(this.areas_[i], f), h.find("script").each(function (a, c) {
                                    return b.restoreScript_(c)
                                })
                            }
                            this.dispatchEvent(document, c.nss.event.pjax.DOMContentLoaded, !1, !1), this.util_.fire(c.callbacks.update.content.after, c, [d, c, jQuery(this.area_, this.srcDocument_).get(), jQuery(this.area_, this.dstDocument_).get()]) === !1
                        }
                    }, b.prototype.balance_ = function () {
                        var a = this, b = this.setting_, c = this.event_;
                        !b.balance.active || this.page_.loadtime < 100 || [this.record_.data.jqXHR()].concat(this.record_.data.bind()).forEach(function (d) {
                            var e = a.balancer_.sanitize(d, b) || a.record_.data.host() || "", f = a.page_.loadtime, g = a.balancer_.score(f, d.responseText.length);
                            if (a.util_.fire(b.callbacks.update.balance.before, b, [c, b, e, a.page_.loadtime, d.responseText.length]) !== !1) {
                                var h = a.data_.getServerBuffer(b.destLocation.href), g = a.balancer_.score(f, d.responseText.length);
                                f = h && !h.state && h.time ? Math.round((h.time + f) / 2) : f, g = h && !h.state && h.score ? Math.round((h.score + g) / 2) : g, a.data_.saveServer(e, (new Date).getTime() + b.balance.server.expires, f, g, 0), a.balancer_.changeServer(a.balancer_.chooseServer(b), b), a.util_.fire(b.callbacks.update.balance.after, b, [c, b, e, a.page_.loadtime, d.responseText.length]) === !1
                            }
                        })
                    }, b.prototype.css_ = function (a) {
                        function b() {
                            return jQuery.contains(f.head, this)
                        }

                        function c() {
                            return jQuery.contains(f.body, this)
                        }

                        var d = this.setting_, e = this.event_, f = this.srcDocument_, g = this.dstDocument_;
                        if (d.load.css) {
                            var h = "link, style", i = jQuery(h, f).filter(a).not(jQuery("noscript", f).find(h)), j = jQuery(h, g).filter(a).not(jQuery("noscript", f).find(h)), k = jQuery(), l = j;
                            if (this.util_.fire(d.callbacks.update.css.before, d, [e, d, i.get(), j.get()]) !== !1) {
                                i = i.not(d.load.ignore), j = i.not(d.load.ignore);
                                for (var m, n = 0; m = i[n]; n++) {
                                    for (var o, p = 0; l[p]; p++) {
                                        switch (m.tagName.toLowerCase()) {
                                            case"link":
                                                o = m.href === l[p].href;
                                                break;
                                            case"style":
                                                o = this.util_.trim(m.innerHTML) === this.util_.trim(l[p].innerHTML)
                                        }
                                        if (o) {
                                            if (k.length) {
                                                if (jQuery.contains(g.body, l[p]) && k.first().parents("head").length)jQuery(g.head).append(k.filter(b).clone()), l.eq(p).before(k.filter(c).clone()); else {
                                                    var q = j[j.index(l[p]) - 1];
                                                    q ? jQuery(q).after(k.clone()) : l.eq(p).before(k.clone())
                                                }
                                                k = jQuery()
                                            }
                                            l = l.not(l[p]), p -= Number(!!p), m = null;
                                            break
                                        }
                                    }
                                    k = k.add(m)
                                }
                                if (jQuery(g.head).append(k.filter(b).clone()), jQuery(g.body).append(k.filter(c).clone()), l.remove(), j = jQuery(h, g).filter(a).not(jQuery("noscript", f).find(h)), this.util_.fire(d.callbacks.update.css.after, d, [e, d, i.get(), j.get()]) !== !1) {
                                    var r = d.speedcheck, s = this.model_.speed;
                                    r && s.time.push(s.now() - s.fire), r && s.name.push("css(" + s.time.slice(-1) + ")")
                                }
                            }
                        }
                    }, b.prototype.script_ = function (a) {
                        var b = this, c = this.setting_, d = this.event_, e = this.srcDocument_, f = this.dstDocument_, g = [], h = [];
                        if (!c.load.script)return g;
                        var i = "script", j = jQuery(i, e).filter(a).not(jQuery("noscript", e).find(i)), k = jQuery(i, f).filter(a).not(jQuery("noscript", f).find(i)), l = this.page_.loadedScripts, m = /^$|(?:application|text)\/(?:java|ecma)script/i, n = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                        if (this.util_.fire(c.callbacks.update.script.before, c, [d, c, j.get(), k.get()]) === !1)return g;
                        j = j.not(c.load.ignore);
                        for (var o, p = function (a, d) {
                            if (!b.model_.comparePageByUrl(c.destLocation.href, window.location.href))return !1;
                            a.src && (l[a.src] = !c.load.reload || !jQuery(a).is(c.load.reload));
                            try {
                                if (b.model_.isDeferrable) {
                                    if ("string" != typeof d)throw d;
                                    eval.call(window, d)
                                } else a.hasAttribute("src") ? jQuery.ajax(jQuery.extend(!0, {}, c.ajax, c.load.ajax, {
                                    url: a.src,
                                    dataType: "script",
                                    async: !1,
                                    global: !1,
                                    success: function () {
                                        return null
                                    },
                                    error: function (a) {
                                        throw a
                                    }
                                })) : eval.call(window, (a.text || a.textContent || a.innerHTML || "").replace(n, ""));
                                try {
                                    a.hasAttribute("src") && b.dispatchEvent(a, "load", !1, !1)
                                } catch (e) {
                                }
                            } catch (f) {
                                try {
                                    a.hasAttribute("src") && b.dispatchEvent(a, "error", !1, !1)
                                } catch (e) {
                                }
                                if (!0 === c.load.error)throw f;
                                b.util_.fire(c.load.error, c, [f, a])
                            }
                        }, q = 0; o = j[q]; q++)if (m.test(o.type || "") && (o.hasAttribute("src") ? !l[o.src] : this.util_.trim(o.innerHTML))) {
                            var r = jQuery(o).parent(c.load.log)[0];
                            if (r && !jQuery(o).parents(this.area_).length) {
                                var s = jQuery(r.id || r.tagName, f)[0], t = o.cloneNode(!0);
                                this.escapeScript_(t), s.appendChild(t), this.restoreScript_(t)
                            }
                            !function (a) {
                                var d = b.model_.isDeferrable && jQuery.Deferred();
                                a.hasAttribute("src") && a.getAttribute("src") ? (l[a.src] = !c.load.reload || !jQuery(a).is(c.load.reload), a.hasAttribute("async") ? jQuery.ajax(jQuery.extend({}, c.ajax, c.load.ajax, {
                                    url: a.src,
                                    dataType: "script",
                                    async: !0,
                                    global: !1,
                                    success: function () {
                                        return b.dispatchEvent(a, "load", !1, !1)
                                    },
                                    error: function () {
                                        return b.dispatchEvent(a, "error", !1, !1)
                                    }
                                })) : d ? (jQuery.ajax(jQuery.extend({}, c.ajax, c.load.ajax, {
                                    url: a.src,
                                    dataType: "text",
                                    async: !0,
                                    global: !1,
                                    success: function (b) {
                                        return d.resolve([a, b])
                                    },
                                    error: function (b) {
                                        return d.resolve([a, b])
                                    }
                                })), g.push(d)) : h.push(a)) : a.hasAttribute("src") || (d ? g.push(d.resolve([a, (a.text || a.textContent || a.innerHTML || "").replace(n, "")])) : h.push(a))
                            }(o)
                        }
                        try {
                            this.model_.isDeferrable ? jQuery.when.apply(jQuery, g).always(function () {
                                for (var a = [], c = 0; c < arguments.length; c++)a[c - 0] = arguments[c];
                                return jQuery.each(a, function (a, c) {
                                    return p.apply(b, c)
                                })
                            }) : jQuery.each(h, function (a, b) {
                                return p(b)
                            })
                        } catch (u) {
                            throw setTimeout(function () {
                                return b.model_.fallback(d)
                            }, 1), u
                        }
                        if (k = jQuery(i, f).filter(a).not(jQuery("noscript", f).find(i)), this.util_.fire(c.callbacks.update.script.after, c, [d, c, j.get(), k.get()]) === !1)return g;
                        var v = c.speedcheck, w = this.model_.speed;
                        return v && w.time.push(w.now() - w.fire), v && w.name.push("script(" + w.time.slice(-1) + ")"), g
                    }, b.prototype.scroll_ = function (b) {
                        var c = this.setting_, d = this.event_;
                        if (this.util_.fire(c.callbacks.update.scroll.before, c, [d, c]) !== !1) {
                            var e, f;
                            switch (d.type.toLowerCase()) {
                                case a.EVENT.CLICK:
                                case a.EVENT.SUBMIT:
                                    e = b && "function" == typeof c.scrollLeft ? this.util_.fire(c.scrollLeft, c, [d, c, c.origLocation.cloneNode(), c.destLocation.cloneNode()]) : c.scrollLeft, e = e >= 0 ? e : 0, e = e === !1 || null === e ? jQuery(window).scrollLeft() : parseInt(Number(e) + "", 10), f = b && "function" == typeof c.scrollTop ? this.util_.fire(c.scrollTop, c, [d, c, c.origLocation.cloneNode(), c.destLocation.cloneNode()]) : c.scrollTop, f = f >= 0 ? f : 0, f = f === !1 || null === f ? jQuery(window).scrollTop() : parseInt(Number(f) + "", 10), window.scrollTo(e, f);
                                    break;
                                case a.EVENT.POPSTATE:
                                    b && c.fix.scroll && this.data_.loadScrollPosition()
                            }
                            b && this.data_.saveScrollPosition(), this.util_.fire(c.callbacks.update.scroll.after, c, [d, c]) === !1
                        }
                    }, b.prototype.scrollByHash_ = function (a) {
                        var b = a.destLocation.hash.replace(/^#/, "");
                        if (!b)return !1;
                        var c = jQuery("#" + b + ", [name~=" + b + "]").first();
                        return c.length ? (isFinite(c.offset().top) && window.scrollTo(jQuery(window).scrollLeft(), parseInt(Number(c.offset().top) + "", 10)), this.data_.saveScrollPosition(), !0) : !1
                    }, b.prototype.fixReference_ = function (a, b) {
                        function c(a, b) {
                            var c;
                            switch (!0) {
                                case"href" in b:
                                    c = "href";
                                    break;
                                case"src" in b:
                                    c = "src";
                                    break;
                                default:
                                    return
                            }
                            switch (d) {
                                case 0:
                                    break;
                                case 1:
                                    b[c] = j + b.getAttribute(c);
                                    break;
                                case-1:
                                    b[c] = b.getAttribute(c).replace(j, "")
                            }
                            b.setAttribute(c, b[c].replace(i, "/"))
                        }

                        var d, e = a.replace(/[^/]+$/, ""), f = b.URL.replace(/[^/]+$/, ""), g = e.split("/").length, h = f.split("/").length, i = /^.+?\w\//, j = this.util_.repeat("../", Math.abs(g - h));
                        switch (!0) {
                            case g === h:
                                d = 0;
                                break;
                            case h > g:
                                d = 1;
                                break;
                            case g > h:
                                d = -1
                        }
                        jQuery("[href], [src]", b).not(['[href^="/"]', '[href^= "http:"]', '[href^= "https:"]', '[src^= "/"]', '[src^= "http:"]', '[src^= "https:"]'].join(",")).each(c)
                    }, b.prototype.escapeNoscript_ = function (a) {
                        function b() {
                            jQuery(this).text(this.innerHTML)
                        }

                        jQuery("noscript", a).children().parent().each(b)
                    }, b.prototype.restoreNoscript_ = function (a) {
                        var b = jQuery("<span/>");
                        return a.replace(/(<noscript>)([^<>]+?)(<\/noscript>)/gim, function (a, c, d, e) {
                            return c + b.html(d).text() + e
                        })
                    }, b.prototype.escapeScript_ = function (a) {
                        jQuery.data(a, "source", a.src), jQuery.data(a, "code", a.innerHTML), a.removeAttribute("src"), a.innerHTML = ""
                    }, b.prototype.restoreScript_ = function (a) {
                        undefined !== jQuery.data(a, "code") && (a.innerHTML = " ", jQuery.data(a, "source") ? (a.src = jQuery.data(a, "source"), jQuery.removeData(a, "source")) : a.removeAttribute("src"), a.innerHTML = jQuery.data(a, "code"), jQuery.removeData(a, "code"))
                    }, b.prototype.chooseArea = function (a, b, c) {
                    }, b.prototype.dispatchEvent = function (a, b, c, d) {
                    }, b
                }();
                b.PageUpdate = c
            }(c = b.APP || (b.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (b) {
                var c = function () {
                    function b() {
                        this.util_ = a.LIBRARY.Utility, this.sandbox_cache_ = {}
                    }

                    return b.prototype.sandbox_ = function (a) {
                        var b = this;
                        return void 0 === a && (a = window.location.href), a = this.util_.canonicalizeUrl(a).split("#").shift(), this.sandbox_cache_[a] && "object" == typeof this.sandbox_cache_[a].document && this.sandbox_cache_[a].document.URL === a || jQuery('<iframe srcdoc="<!DOCTYPE html>" sandbox="allow-same-origin"></iframe>').appendTo("body").each(function (c, d) {
                            b.sandbox_cache_[a] = d.contentWindow, b.sandbox_cache_[a].document.open(), b.sandbox_cache_[a].document.close()
                        }).remove(), this.sandbox_cache_[a]
                    }, b.prototype.test_ = function (a) {
                        try {
                            var b = '<html lang="en" class="html"><head><title>&amp;</title><link href="/"><noscript><style>/**/</style></noscript></head><body><noscript>noscript</noscript><a href="/"></a></body></html>', c = this.parse(b, window.location.href, a);
                            switch (!1) {
                                case!!c:
                                case c.URL && decodeURI(c.URL) === decodeURI(window.location.href):
                                case"&" === c.title:
                                case!!c.querySelector('html.html[lang="en"]'):
                                case!!c.querySelector("head>link").href:
                                case!!c.querySelector("head>noscript").innerHTML:
                                case!!c.querySelector("body>noscript").innerHTML:
                                case!!c.querySelector("body>a").href:
                                    throw!0
                            }
                            return a
                        } catch (d) {
                        }
                    }, b.prototype.parse = function (a, b, c) {
                        function d(a, b) {
                            var c = document.createElement("div");
                            c.innerHTML = b.match(/<html(?:\s.*?[^\\])?>|$/i).shift().replace(/html/i, "div") || "<div>";
                            for (var d, e = c.firstChild.attributes, f = 0; d = e[f]; f++)a.documentElement.setAttribute(d.name, d.value);
                            var c = document.createElement("html");
                            for (c.innerHTML = b.replace(/^.*?<html(?:\s.*?[^\\])?>/im, ""), a.documentElement.removeChild(a.head), a.documentElement.removeChild(a.body); c.childNodes.length;)a.documentElement.appendChild(c.childNodes[0]);
                            return a
                        }

                        void 0 === b && (b = ""), void 0 === c && (c = this.mode_), a += ~a.search(/<title[\s>]/i) ? "" : "<title></title>";
                        var e;
                        switch (c) {
                            case"dom":
                                e = (new window.DOMParser).parseFromString(a, "text/html");
                                break;
                            case"doc":
                                if (e = document.implementation.createHTMLDocument(""), "object" != typeof e.activeElement || !e.activeElement)break;
                                "function" == typeof window.DOMParser && (e.title = (new window.DOMParser).parseFromString(a.match(/<title(?:\s.*?[^\\])?>(?:.*?[^\\])?<\/title>|$/i), "text/html").title), e.open(), e.write(a), e.close(), e.title !== e.querySelector("title").textContent && (e.title = e.querySelector("title").textContent);
                                break;
                            case"manipulate":
                                e = d(document.implementation.createHTMLDocument(""), a);
                                break;
                            case null:
                                e = null;
                                break;
                            default:
                                switch (/webkit|firefox|trident|$/i.exec(window.navigator.userAgent).shift().toLowerCase()) {
                                    case"webkit":
                                        this.mode_ = this.test_("doc") || this.test_("dom") || this.test_("manipulate");
                                        break;
                                    case"firefox":
                                        this.mode_ = this.test_("dom") || this.test_("doc") || this.test_("manipulate");
                                        break;
                                    case"trident":
                                        this.mode_ = this.test_("manipulate") || this.test_("dom") || this.test_("doc");
                                        break;
                                    default:
                                        this.mode_ = this.test_("dom") || this.test_("doc") || this.test_("manipulate")
                                }
                                e = this.mode_ && this.parse(a, b)
                        }
                        return e
                    }, b
                }();
                b.PageParser = c;
                var d = function () {
                    function a() {
                        a.instance_ = a.instance_ || new c
                    }

                    return a.prototype.singleton_ = function () {
                        return a.instance_
                    }, a.prototype.parse = function (a, b) {
                        return this.singleton_().parse(a, b)
                    }, a
                }();
                b.PageParserSingleton = d
            }(c = b.APP || (b.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c;
            !function (b) {
                a.MIXIN(b.PageFetch, [b.PageUtility]), a.MIXIN(b.PageUpdate, [b.PageUtility]);
                var c = function () {
                    function c(c, d, e) {
                        var f = this;
                        this.model_ = c, this.data_ = d, this.balancer_ = e, this.util_ = a.LIBRARY.Utility, this.parser = new b.PageParserSingleton, this.provider = new b.PageProvider(b.PageRecord, this.model_, this.balancer_, this), this.landing = this.util_.normalizeUrl(window.location.href), this.loadedScripts = {}, this.dataXHR = [], this.loadtime = 0, this.count = 0, this.time = (new Date).getTime(), setTimeout(function () {
                            return f.parser.parse("") || f.model_.disable()
                        }, 100)
                    }

                    return c.prototype.transfer = function (b, c) {
                        switch (c.type.toLowerCase()) {
                            case a.EVENT.CLICK:
                                this.data_.saveTitle(), this.data_.saveScrollPosition();
                                break;
                            case a.EVENT.SUBMIT:
                                this.data_.saveTitle(), this.data_.saveScrollPosition();
                                break;
                            case a.EVENT.POPSTATE:
                                this.data_.saveTitle(b.origLocation.href, document.title), b.fix.history && this.data_.loadTitle()
                        }
                        b = jQuery.extend(!0, {}, b), b.origLocation = b.origLocation.cloneNode(), b.destLocation = b.destLocation.cloneNode(), b = a.FREEZE(b), this.fetch_(b, c)
                    }, c.prototype.getWait = function () {
                        return this.wait_
                    }, c.prototype.setWait = function (a) {
                        return this.wait_ && this.wait_.state && "pending" === this.wait_.state() && this.wait_.reject(), this.wait_ = a
                    }, c.prototype.fetch_ = function (a, b) {
                        var c = this;
                        this.provider.fetchRecord(a, b, function (a, b, d) {
                            return c.success_(a, b, d)
                        }, function (a, b, d) {
                            return c.failure_(a, b, d)
                        })
                    }, c.prototype.success_ = function (a, c, d) {
                        new b.PageUpdate(this.model_, this, this.data_, this.balancer_, c, d, a)
                    }, c.prototype.failure_ = function (a, b, c) {
                        var d = this;
                        b.fallback && "abort" !== a.data.textStatus() && (this.data_.saveExpires(b.destLocation.href, "", 0), b.balance.active && (this.data_.saveServer(a.data.host(), (new Date).getTime() + b.balance.server.expires, 0, 0, (new Date).getTime()), this.balancer_.changeServer(this.balancer_.chooseServer(b), b)), setTimeout(function () {
                            return d.model_.fallback(c)
                        }, 100))
                    }, c.prototype.chooseArea = function (a, b, c) {
                    }, c.prototype.dispatchEvent = function (a, b, c, d) {
                    }, c
                }();
                b.Page = c
            }(c = b.APP || (b.APP = {}))
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (MODULE) {
        var MODEL;
        !function (MODEL) {
            var APP;
            !function (APP) {
                MODULE.MIXIN(APP.Page, [APP.PageUtility]);
                var Main = function () {
                    function Main(a, b) {
                        this.model_ = a, this.controller_ = b, this.util_ = MODULE.LIBRARY.Utility, this.settings_ = {}, this.data = new APP.Data(this.model_), this.balancer = new APP.Balancer(this.data), this.page = new APP.Page(this.model_, this.data, this.balancer)
                    }

                    return Main.prototype.initialize = function (a, b) {
                        var c = this;
                        this.controller_.view(a, b), this.balancer.enable(b), this.balancer.changeServer(this.balancer.chooseServer(b), b), this.data.loadBuffers(), setTimeout(function () {
                            return c.page.landing = null
                        }, 1500)
                    }, Main.prototype.configure = function (destination) {
                        var _this = this, event = destination.preventDefault ? destination : null;
                        switch (event && "object" == typeof event && event.type.toLowerCase()) {
                            case MODULE.EVENT.CLICK:
                                return this.configure(event.currentTarget);
                            case MODULE.EVENT.SUBMIT:
                                return this.configure(event.currentTarget);
                            case MODULE.EVENT.POPSTATE:
                                return this.configure(window.location);
                            case null:
                        }
                        var url;
                        switch (!0) {
                            case"string" == typeof destination:
                                url = destination;
                                break;
                            case"href" in destination && "string" == typeof destination.href:
                                url = this.util_.normalizeUrl(destination.href);
                                break;
                            case"href" in destination && "object" == typeof destination.href:
                                url = this.util_.normalizeUrl(destination.href.baseVal);
                                break;
                            case"action" in destination:
                                switch (url = this.util_.normalizeUrl(destination.action.replace(/[?#].*/, "")), destination.method.toUpperCase()) {
                                    case"GET":
                                        url += "?" + jQuery(destination).serialize()
                                }
                                break;
                            default:
                                url = this.model_.location.href, this.option_ = destination
                        }
                        var index = [this.util_.canonicalizeUrl(this.model_.location.href).slice(0, 2048), this.util_.canonicalizeUrl(url).slice(0, 2048)].join(" ");
                        if (!this.option_)return null;
                        if (index in this.settings_)return this.settings_[index];
                        var origLocation = this.model_.location.cloneNode(), destLocation = this.model_.location.cloneNode();
                        origLocation.href = this.util_.canonicalizeUrl(origLocation.href), destLocation.href = this.util_.canonicalizeUrl(url);
                        var scope = this.scope_(this.option_, origLocation.href, destLocation.href) || null, initial = {
                            area: "body",
                            link: "a:not([target])",
                            filter: function () {
                                var a = document.createElement("a");
                                return a.href = "string" == typeof this.href ? this.href : this.href.baseVal, /^https?:/.test(a.href) && /\/[^.]*$|\.(html?|php)$/.test(a.pathname.replace(/^\/?/, "/"))
                            },
                            form: null,
                            replace: null,
                            bind: null,
                            rewrite: null,
                            scope: null,
                            state: null,
                            scrollTop: 0,
                            scrollLeft: 0,
                            ajax: {dataType: "text"},
                            contentType: "text/html",
                            redirect: !0,
                            cache: {
                                click: !1,
                                submit: !1,
                                popstate: !1,
                                get: !0,
                                post: !0,
                                mix: 0,
                                limit: 100,
                                expires: {max: null, min: 3e5}
                            },
                            buffer: {limit: 30, delay: 500},
                            load: {
                                head: "",
                                css: !1,
                                script: !1,
                                ignore: '[src*="jquery.js"], [src*="jquery.min.js"], [href^="chrome-extension://"]',
                                reload: "",
                                log: "head, body",
                                error: !0,
                                ajax: {dataType: "script", cache: !0}
                            },
                            balance: {
                                active: !1,
                                bounds: ["*"],
                                weight: 1,
                                random: 0,
                                option: {
                                    server: {header: !1},
                                    ajax: {crossDomain: !0},
                                    callbacks: {ajax: {beforeSend: null}}
                                },
                                client: {
                                    hosts: [],
                                    support: {
                                        browser: /msie|trident.+ rv:|chrome|firefox|safari/i,
                                        redirect: /chrome|firefox|safari/i
                                    },
                                    cookie: {balance: "balanceable", redirect: "redirectable", host: "host"}
                                },
                                server: {header: "X-Ajax-Host", respite: 6e5, expires: 864e6}
                            },
                            wait: 0,
                            fallback: !0,
                            reset: {type: "", count: 100, time: 108e5},
                            fix: {location: !0, history: !0, scroll: !0, noscript: !0, reference: !0},
                            database: {active: !0, revision: 0, refresh: 10},
                            server: {query: null, header: !0},
                            overlay: "",
                            callback: null,
                            callbacks: {
                                ajax: {},
                                update: {
                                    redirect: {},
                                    url: {},
                                    rewrite: {},
                                    title: {},
                                    head: {},
                                    content: {},
                                    scroll: {},
                                    css: {},
                                    script: {},
                                    balance: {}
                                }
                            },
                            data: undefined
                        }, force = {
                            uid: MODULE.UUID(),
                            ns: "",
                            nss: undefined,
                            speedcheck: undefined,
                            origLocation: origLocation,
                            destLocation: destLocation,
                            scroll: {queue: []},
                            option: this.option_
                        }, compute = function () {
                            setting.ns = setting.ns ? setting.ns.split(".").sort().join(".") : "";
                            var nsArray = [MODULE.DEF.NAME].concat(setting.ns ? setting.ns.split(".") : []), query = setting.server.query;
                            switch (query && typeof query) {
                                case"string":
                                    query = eval("({" + query.toString().match(/[^?=&]+=[^&]*/g).join("&").replace(/"/g, '\\"').replace(/([^?=&]+)=([^&]*)/g, '"$1": "$2"').replace(/&/g, ",") + "})");
                                case"object":
                                    query = jQuery.param(query);
                                    break;
                                default:
                                    query = ""
                            }
                            return {
                                uid: undefined,
                                ns: undefined,
                                origLocation: undefined,
                                destLocation: undefined,
                                scroll: undefined,
                                option: undefined,
                                speedcheck: undefined,
                                nss: {
                                    array: nsArray,
                                    name: nsArray.join("."),
                                    data: nsArray[0],
                                    url: _this.model_.convertUrlToKey(setting.destLocation.href, !0),
                                    event: {
                                        pjax: {
                                            fetch: [MODULE.EVENT.PJAX, "fetch"].join(":"),
                                            unload: [MODULE.EVENT.PJAX, "unload"].join(":"),
                                            DOMContentLoaded: [MODULE.EVENT.PJAX, "DOMContentLoaded"].join(":"),
                                            ready: [MODULE.EVENT.PJAX, "ready"].join(":"),
                                            render: [MODULE.EVENT.PJAX, "render"].join(":"),
                                            load: [MODULE.EVENT.PJAX, "load"].join(":")
                                        },
                                        click: [MODULE.EVENT.CLICK].concat(nsArray.join(":")).join("."),
                                        submit: [MODULE.EVENT.SUBMIT].concat(nsArray.join(":")).join("."),
                                        popstate: [MODULE.EVENT.POPSTATE].concat(nsArray.join(":")).join("."),
                                        scroll: [MODULE.EVENT.SCROLL].concat(nsArray.join(":")).join(".")
                                    },
                                    elem: nsArray.join("-"),
                                    requestHeader: ["X", nsArray[0].replace(/^\w/, function (a) {
                                        return a.toUpperCase()
                                    })].join("-")
                                },
                                fix: /android|iphone os|like mac os x/i.test(window.navigator.userAgent) ? undefined : {location: !1},
                                contentType: setting.contentType.replace(/\s*[,;]\s*/g, "|").toLowerCase(),
                                database: {refresh: Math.min(setting.database.refresh, 30)},
                                reset: {type: (setting.reset.type || "").toLowerCase()},
                                server: {query: query},
                                timeStamp: (new Date).getTime()
                            }
                        }, setting;
                        return setting = jQuery.extend(!0, initial, scope || this.option_), setting = jQuery.extend(!0, setting, setting.balance.active && setting.balance.option, force), setting = jQuery.extend(!0, setting, compute()), scope ? (MODULE.FREEZE(setting, !0), this.settings_[index] = setting, setting) : (this.settings_[index] = null, null)
                    }, Main.prototype.scope_ = function (a, b, c) {
                        if (a = jQuery.extend(!0, {}, a), !a.scope)return a;
                        var d, e, f, g, h, i, j = a.scope;
                        d = this.model_.convertUrlToKey(b, !0).match(/.+?\w(\/.*)/).pop(), e = this.model_.convertUrlToKey(c, !0).match(/.+?\w(\/.*)/).pop(), f = d.split("/");
                        for (var k = f.length; k--;)if (g = f.slice(0, k + 1).join("/"), g += "/" === d.charAt(g.length) ? "/" : "", g && g in j) {
                            var l;
                            if (j[g] instanceof Array ? (h = "", l = j[g]) : (h = j[g], l = j[h]), l) {
                                l = l.concat();
                                var m, n, o, p = [];
                                o = i = m = n = undefined;
                                for (var q, r = 0; q = l[r]; r++) {
                                    if ("#" === q.charAt(0)) {
                                        if (~jQuery.inArray(q, p) || !(q.length > 1)) {
                                            h = "";
                                            continue
                                        }
                                        p.push(q), h = q.slice(1), [].splice.apply(l, [r, 1].concat(j[h], "#")), q = l[r]
                                    }
                                    if ("inherit" === q)o = !0; else if ("string" == typeof q) {
                                        var s = "!" === q.charAt(0);
                                        q = s ? q.slice(1) : q;
                                        var t = "*" === q.charAt(0);
                                        q = t ? q.slice(1) : q, (t ? ~d.search(q) : ~d.indexOf(q)) && (s ? m = !1 : (m = !0, i = j["$" + h] || j["$" + q] || undefined)), (t ? ~e.search(q) : ~e.indexOf(q)) && (s ? n = !1 : (n = !0, i = j["$" + h] || j["$" + q] || undefined))
                                    }
                                    if (!1 === m || !1 === n)return null
                                }
                                if (m && n)return jQuery.extend(!0, a, i);
                                if (!o)break
                            }
                        }
                        return undefined
                    }, Main
                }();
                APP.Main = Main
            }(APP = MODEL.APP || (MODEL.APP = {}))
        }(MODEL = MODULE.MODEL || (MODULE.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (a) {
            a.App = a.APP.Main
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        var b;
        !function (b) {
            var c = function (c) {
                function d() {
                    c.call(this, a.State.initiate), this.controller_ = new a.Controller(this).singleton(), this.app_ = new b.App(this, this.controller_), this.util_ = a.LIBRARY.Utility, this.isDeferrable = !!jQuery.when && "1.006" <= jQuery().jquery.match(/\d[\d.]+\d/).pop().replace(/\.(\d+)/g, ".00$1").replace(/0*(\d{3})/g, "$1"), this.location = document.createElement("a"), this.queue_ = []
                }

                return __extends(d, c), d.prototype.host = function () {
                    return this.app_.balancer.host()
                }, d.prototype.state = function () {
                    return this.state_
                }, d.prototype.main_ = function (b, c) {
                    var d = this;
                    switch (typeof c) {
                        case"object":
                            b = b instanceof a.DEF.NAMESPACE ? b : jQuery(document)[a.DEF.NAME](), a.FREEZE(c, !0);
                            break;
                        default:
                            return b
                    }
                    if (!window.history || !window.history.pushState || !window.history.replaceState)return b;
                    this.location.href = this.util_.normalizeUrl(window.location.href);
                    var e = this.app_.configure(c);
                    return e ? (this.app_.data.connect(e), this.speed = {
                        fire: 0, time: [], name: [], now: function () {
                            return (new Date).getTime()
                        }
                    }, jQuery(function () {
                        d.app_.initialize(b, e), d.state_ = d.state() === a.State.initiate ? a.State.open : d.state(), d.overlay(e, !0)
                    }), b) : b
                }, d.prototype.convertUrlToKey = function (a, b) {
                    return a = b ? this.util_.canonicalizeUrl(a) : a, this.util_.trim(a).split("#").shift()
                }, d.prototype.compareKeyByUrl = function (a, b) {
                    return a = this.convertUrlToKey(a, !0), b = this.convertUrlToKey(b, !0), a === b
                }, d.prototype.comparePageByUrl = function (a, b) {
                    return a = this.convertUrlToKey(a, !0), b = this.convertUrlToKey(b, !0), a === b
                }, d.prototype.configure = function (a) {
                    return this.app_.configure(a)
                }, d.prototype.isOperatable = function (b) {
                    if (a.State.open !== this.state())return !1;
                    if (b.which > 1 || b.metaKey || b.ctrlKey || b.shiftKey || b.altKey)return !1;
                    var c;
                    switch (b.type.toLowerCase()) {
                        case a.EVENT.CLICK:
                            if (c = this.app_.configure(b.currentTarget), c && !jQuery(b.currentTarget).filter(c.filter).length)return !1;
                            break;
                        case a.EVENT.SUBMIT:
                            c = this.app_.configure(b.currentTarget);
                            break;
                        case a.EVENT.POPSTATE:
                            c = this.app_.configure(window.location)
                    }
                    if (!c)return !1;
                    if (c.origLocation.protocol !== c.destLocation.protocol || c.origLocation.host !== c.destLocation.host)return !1;
                    switch (b.type.toLowerCase()) {
                        case a.EVENT.CLICK:
                            if (this.comparePageByUrl(c.origLocation.href, c.destLocation.href) && c.destLocation.hash)return !1;
                            break;
                        case a.EVENT.SUBMIT:
                            break;
                        case a.EVENT.POPSTATE:
                            if (this.comparePageByUrl(c.origLocation.href, c.destLocation.href))return !1
                    }
                    return this.app_.page.chooseArea(c.area, document, document) ? !0 : !1
                }, d.prototype.getPageXHR = function () {
                    return this.app_.page.pageXHR
                }, d.prototype.setPageXHR = function (a) {
                    return this.app_.page.pageXHR && this.app_.page.pageXHR.readyState < 4 && this.app_.page.pageXHR !== a && this.app_.page.pageXHR.abort(), this.app_.page.pageXHR = a
                }, d.prototype.getDataXHR = function () {
                    return this.app_.page.dataXHR
                }, d.prototype.setDataXHR = function (a) {
                    function b(b) {
                        switch (!0) {
                            case b >= c.length:
                            case 4 === c[b].readyState:
                            case c.indexOf(a[b]) > -1:
                                return a[b]
                        }
                        return c[b].abort(), a[b]
                    }

                    a = a || [];
                    var c = this.app_.page.dataXHR;
                    return this.app_.page.dataXHR = Array.apply(null, Array(Math.max(a.length, this.app_.page.dataXHR.length))).map(function (a, c) {
                        return b(c)
                    }).filter(function (a) {
                        return !!a
                    })
                }, d.prototype.click = function (b) {
                    b.timeStamp = (new Date).getTime();
                    var c = b.currentTarget, d = (jQuery(c), this.app_.configure(c));
                    switch (this.location.href = this.util_.normalizeUrl(window.location.href), !0) {
                        case!d:
                        case b.isDefaultPrevented():
                        case this.state() !== a.State.open:
                            break;
                        case this.isOperatable(b):
                            this.app_.page.transfer(d, b), b.preventDefault();
                            break;
                        case this.isHashChange(d) && this.overlay(d):
                            b.preventDefault(), window.history.pushState(null, document.title, d.destLocation.href);
                            break;
                        case!b.originalEvent && !jQuery(document).has(c).length:
                            this.fallback(b)
                    }
                }, d.prototype.submit = function (b) {
                    b.timeStamp = (new Date).getTime();
                    var c = b.currentTarget, d = (jQuery(c), this.app_.configure(c));
                    switch (this.location.href = this.util_.normalizeUrl(window.location.href), !0) {
                        case!d:
                        case b.isDefaultPrevented():
                        case this.state() !== a.State.open:
                            break;
                        case this.isOperatable(b):
                            this.app_.page.transfer(d, b), b.preventDefault;
                            break;
                        case!b.originalEvent && !jQuery(document).has(c).length:
                            this.fallback(b)
                    }
                }, d.prototype.popstate = function (b) {
                    if (!this.app_.page.landing || !this.util_.compareUrl(this.app_.page.landing, window.location.href)) {
                        b.timeStamp = (new Date).getTime();
                        var c = this.app_.configure(window.location);
                        switch (!0) {
                            case!c:
                                !this.comparePageByUrl(this.location.href, window.location.href) && this.fallback(b);
                                break;
                            case this.state() !== a.State.open:
                                break;
                            case this.isOperatable(b):
                                this.app_.page.transfer(c, b);
                                break;
                            case this.isHashChange(c) && this.overlay(c):
                                break;
                            case!this.comparePageByUrl(c.origLocation.href, window.location.href):
                                this.fallback(b)
                        }
                        this.location.href = this.util_.normalizeUrl(window.location.href)
                    }
                }, d.prototype.scroll = function (a, b) {
                    for (var c, d = this; c = this.queue_.shift();)clearTimeout(c);
                    c = setTimeout(function () {
                        for (; c = d.queue_.shift();)clearTimeout(c);
                        d.compareKeyByUrl(window.location.href, d.location.href) && d.app_.data.saveScrollPosition()
                    }, 300), this.queue_.push(c)
                }, d.prototype.fallback = function (a) {
                    var b = this.configure(a);
                    switch (!0) {
                        case b && !b.fallback:
                        case b && !1 === this.util_.fire(b.fallback, b, [a, b, b.origLocation.cloneNode(), b.destLocation.cloneNode()]):
                            break;
                        default:
                            this.movePageNormally_(a)
                    }
                }, d.prototype.movePageNormally_ = function (b) {
                    switch (b.type.toLowerCase()) {
                        case a.EVENT.CLICK:
                            "string" == typeof b.currentTarget.href ? window.location.assign(b.currentTarget.href) : window.location.assign(b.currentTarget.href.baseVal);
                            break;
                        case a.EVENT.SUBMIT:
                            switch (b.currentTarget.method.toUpperCase()) {
                                case"GET":
                                    window.location.assign(b.currentTarget.action.replace(/[?#].*/, "") + "?" + jQuery(b.currentTarget).serialize());
                                    break;
                                case"POST":
                                    window.location.assign(b.currentTarget.action)
                            }
                            break;
                        case a.EVENT.POPSTATE:
                            window.location.reload()
                    }
                }, d.prototype.isHashChange = function (a) {
                    return !!a && a.origLocation.href.replace(/#.*/, "") === a.destLocation.href.replace(/#.*/, "") && a.origLocation.hash !== a.destLocation.hash
                }, d.prototype.overlay = function (a, b) {
                    var c = this, d = a.destLocation.hash.replace(/^#/, "");
                    if (!d || !a.overlay)return !1;
                    var e = jQuery("#" + d + ", [name~=" + d + "]");
                    if (e = e.add(e.nextUntil(":header")), e = e.filter(a.overlay).add(e.find(a.overlay)).first(), !e.length)return !1;
                    this.isHashChange(a) && (this.app_.data.loadScrollPosition(), setTimeout(function () {
                        return c.app_.data.loadScrollPosition()
                    }, 1));
                    var f = jQuery("<div>");
                    return e = e.clone(!0), f.addClass(a.nss.elem + "-overlay").css({
                        background: "rgba(255, 255, 255, 0.8)",
                        display: "none",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: 0,
                        padding: 0,
                        border: "none"
                    }).append(e.css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: "auto"
                    }).show()), f.bind("click", f, function (a) {
                        a.target === a.currentTarget && (window.history.pushState(window.history.state, document.title, window.location.href.replace(/#.*/, "")), c.location.href = c.util_.normalizeUrl(window.location.href), jQuery(a.data).fadeOut("fast", function () {
                            return jQuery(a.data).remove()
                        }))
                    }), f.appendTo("body").fadeIn(b ? 0 : 100), jQuery(window).one("popstate", f, function (a) {
                        setTimeout(function () {
                            return c.app_.data.loadScrollPosition()
                        }, 1), jQuery(a.data).fadeOut("fast", function () {
                            return jQuery(a.data).remove()
                        })
                    }), /trident/i.test(window.navigator.userAgent) && e.width(e.width()), this.app_.data.saveScrollPosition(), !0
                }, d.prototype.enable = function () {
                    this.state_ = a.State.open
                }, d.prototype.disable = function () {
                    this.state_ = a.State.pause
                }, d.prototype.getCache = function (a) {
                    var b = this.configure(this.convertUrlToKey(a));
                    if (b) {
                        var c = this.app_.page.provider.getRecord(b);
                        return c.state(b) || c.data.data() ? {
                            data: c.data.data(),
                            textStatus: c.data.textStatus(),
                            jqXHR: c.data.jqXHR(),
                            expires: c.data.expires(),
                            host: c.data.host()
                        } : void this.removeCache(a)
                    }
                }, d.prototype.setCache = function (a, b, c, d) {
                    var e = this.configure(this.convertUrlToKey(a));
                    if (e) {
                        var f = this.app_.page.provider.getRecord(e);
                        this.app_.page.provider.setRecord(e, b || "", c || f.data.textStatus(), d || f.data.jqXHR(), this.app_.balancer.sanitize(d, e) || f.data.host() || "", null)
                    }
                }, d.prototype.removeCache = function (a) {
                    var b = this.configure(this.convertUrlToKey(a));
                    b && this.app_.page.provider.removeRecord(b)
                }, d.prototype.clearCache = function () {
                    this.app_.page.provider.clearRecord()
                }, d.prototype.bypass = function () {
                    return this.app_.balancer.bypass(this.app_.configure(window.location))
                }, d
            }(b.Template);
            b.Main = c;
            var d = function () {
                function a() {
                    a.instance_ = a.instance_ || new c
                }

                return a.singleton = function () {
                    return a.instance_
                }, a.prototype.singleton = function () {
                    return a.singleton()
                }, a
            }();
            b.Singleton = d
        }(b = a.MODEL || (a.MODEL = {}))
    }(MODULE || (MODULE = {}));
    var MODULE;
    !function (a) {
        a.Model = a.MODEL.Singleton
    }(MODULE || (MODULE = {}));
    var Module = function () {
        function a() {
            new MODULE.Model
        }

        return a
    }();
    new Module
}(window, window.document, void 0, jQuery);

/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var s = function (t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        }, r = function (t, e, i) {
            var s, r, n = t.cycle;
            for (s in n)r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
            delete t.cycle
        }, n = function (t, e, s) {
            i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = n.prototype.render
        }, a = 1e-10, o = i._internals, l = o.isSelector, h = o.isArray, _ = n.prototype = i.to({}, .1, {}), u = [];
        n.version = "1.18.0", _.constructor = n, _.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, _.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, _.updateTo = function (t, e) {
            var s, r = this.ratio, n = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t)this.vars[s] = t[s];
            if (this._initted || n)if (e)this._initted = !1, n && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var a = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
            } else if (this._time > 0 || n) {
                this._initted = !1, this._init();
                for (var o, l = 1 / (1 - r), h = this._firstPT; h;)o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next
            }
            return this
        }, _.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, r, n, l, h, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, m = this._totalTime, d = this._cycle, g = this._duration, v = this._rawPrevTime;
            if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === a) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : .5 > this._time / g ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && d === this._cycle)return m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc)return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = p, this._totalTime = m, this._rawPrevTime = v, this._cycle = d, o.lazyTweens.push(this), this._lazy = [t, e], void 0;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), n = this._firstPT; n;)n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== d && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && c !== a && (this._rawPrevTime = 0))
        }, n.to = function (t, e, i) {
            return new n(t, e, i)
        }, n.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
        }, n.fromTo = function (t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(t, e, s)
        }, n.staggerTo = n.allTo = function (t, e, a, o, _, c, f) {
            o = o || 0;
            var p, m, d, g, v = a.delay || 0, y = [], T = function () {
                a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), _.apply(f || a.callbackScope || this, c || u)
            }, x = a.cycle, w = a.startAt && a.startAt.cycle;
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), p = t.length - 1, d = 0; p >= d; d++) {
                m = {};
                for (g in a)m[g] = a[g];
                if (x && r(m, t, d), w) {
                    w = m.startAt = {};
                    for (g in a.startAt)w[g] = a.startAt[g];
                    r(m.startAt, t, d)
                }
                m.delay = v, d === p && _ && (m.onComplete = T), y[d] = new n(t[d], e, m), v += o
            }
            return y
        }, n.staggerFrom = n.allFrom = function (t, e, i, s, r, a, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, s, r, a, o)
        }, n.staggerFromTo = n.allFromTo = function (t, e, i, s, r, a, o, l) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, s, r, a, o, l)
        }, n.delayedCall = function (t, e, i, s, r) {
            return new n(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, n.set = function (t, e) {
            return new n(t, 0, e)
        }, n.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var c = function (t, e) {
            for (var s = [], r = 0, n = t._first; n;)n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(c(n, e)), r = s.length), n = n._next;
            return s
        }, f = n.getAllTweens = function (e) {
            return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
        };
        n.killAll = function (t, i, s, r) {
            null == i && (i = !0), null == s && (s = !0);
            var n, a, o, l = f(0 != r), h = l.length, _ = i && s && r;
            for (o = 0; h > o; o++)a = l[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }, n.killChildTweensOf = function (t, e) {
            if (null != t) {
                var r, a, _, u, c, f = o.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t))for (u = t.length; --u > -1;)n.killChildTweensOf(t[u], e); else {
                    r = [];
                    for (_ in f)for (a = f[_].target.parentNode; a;)a === t && (r = r.concat(f[_].tweens)), a = a.parentNode;
                    for (c = r.length, u = 0; c > u; u++)e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                }
            }
        };
        var p = function (t, i, s, r) {
            i = i !== !1, s = s !== !1, r = r !== !1;
            for (var n, a, o = f(r), l = i && s && r, h = o.length; --h > -1;)a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return n.pauseAll = function (t, e, i) {
            p(!0, t, e, i)
        }, n.resumeAll = function (t, e, i) {
            p(!1, t, e, i)
        }, n.globalTimeScale = function (e) {
            var s = t._rootTimeline, r = i.ticker.time;
            return arguments.length ? (e = e || a, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
        }, _.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, _.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, _.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, _.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, _.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, _.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, _.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, _.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, n
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var s = function (t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, s, r = this.vars;
            for (s in r)i = r[s], l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }, r = 1e-10, n = i._internals, a = s._internals = {}, o = n.isSelector, l = n.isArray, h = n.lazyTweens, _ = n.lazyRender, u = _gsScope._gsDefine.globals, c = function (t) {
            var e, i = {};
            for (e in t)i[e] = t[e];
            return i
        }, f = function (t, e, i) {
            var s, r, n = t.cycle;
            for (s in n)r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
            delete t.cycle
        }, p = a.pauseCallback = function () {
        }, m = function (t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        }, d = s.prototype = new e;
        return s.version = "1.18.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = d._hasPause = !1, d.to = function (t, e, s, r) {
            var n = s.repeat && u.TweenMax || i;
            return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
        }, d.from = function (t, e, s, r) {
            return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
        }, d.fromTo = function (t, e, s, r, n) {
            var a = r.repeat && u.TweenMax || i;
            return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
        }, d.staggerTo = function (t, e, r, n, a, l, h, _) {
            var u, p, d = new s({
                onComplete: l,
                onCompleteParams: h,
                callbackScope: _,
                smoothChildTiming: this.smoothChildTiming
            }), g = r.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), p = 0; t.length > p; p++)u = c(r), u.startAt && (u.startAt = c(u.startAt), u.startAt.cycle && f(u.startAt, t, p)), g && f(u, t, p), d.to(t[p], e, u, p * n);
            return this.add(d, a)
        }, d.staggerFrom = function (t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
        }, d.staggerFromTo = function (t, e, i, s, r, n, a, o, l) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l)
        }, d.call = function (t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
        }, d.set = function (t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
        }, s.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t), o = a._timeline;
            for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;)n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
            return o.add(a, 0), a
        }, d.add = function (r, n, a, o) {
            var h, _, u, c, f, p;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && l(r)) {
                    for (a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0; _ > u; u++)l(c = r[u]) && (c = new s({tweens: c})), this.add(c, h), "string" != typeof c && "function" != typeof c && ("sequence" === a ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())), h += o;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)return this.addLabel(r, n);
                if ("function" != typeof r)throw"Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())for (f = this, p = f.rawTime() > r._startTime; f._timeline;)p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
            return this
        }, d.remove = function (e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var s = e.length; --s > -1;)this.remove(e[s]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, d._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, d.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, d.insert = d.insertMultiple = function (t, e, i, s) {
            return this.add(t, e || 0, i, s)
        }, d.appendMultiple = function (t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        }, d.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, d.addPause = function (t, e, s, r) {
            var n = i.delayedCall(0, p, s, r || this);
            return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
        }, d.removeLabel = function (t) {
            return delete this._labels[t], this
        }, d.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, d._parseTimeOrLabel = function (e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this)this.remove(r); else if (r && (r instanceof Array || r.push && l(r)))for (n = r.length; --n > -1;)r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i)return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])null == e && (e = this.duration()); else {
                if (n = e.indexOf("="), -1 === n)return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        }, d.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, d.stop = function () {
            return this.paused(!0)
        }, d.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, d.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, d.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, l, u, c = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, p = this._startTime, m = this._timeScale, d = this._paused;
            if (t >= c)this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = c + 1e-4; else if (1e-7 > t)if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)for (s = this._first; s && 0 === s._startTime;)s._duration || (n = !1), s = s._next;
                t = 0, this._initted || (l = !0)
            } else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= f)for (s = this._first; s && t >= s._startTime && !u;)s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next; else for (s = this._last; s && s._startTime >= t && !u;)s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
                    u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== f && this._first || i || l || u) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a; else for (s = this._last; s && (a = s._prev, !this._paused || d);) {
                    if (s._active || f >= s._startTime && !s._paused && !s._gc) {
                        if (u === s) {
                            for (u = s._prev; u && u.endTime() > this._time;)u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                            u = null, this.pause()
                        }
                        s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                    }
                    s = a
                }
                this._onUpdate && (e || (h.length && _(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (h.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            }
        }, d._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof s && t._hasPausedChild())return !0;
                t = t._next
            }
            return !1
        }, d.getChildren = function (t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a;)r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
            return n
        }, d.getTweensOf = function (t, e) {
            var s, r, n = this._gc, a = [], o = 0;
            for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
            return n && this._enabled(!1, !0), a
        }, d.recent = function () {
            return this._recent
        }, d._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this)return !0;
                e = e.timeline
            }
            return !1
        }, d.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var s, r = this._first, n = this._labels; r;)r._startTime >= i && (r._startTime += t), r = r._next;
            if (e)for (s in n)n[s] >= i && (n[s] += t);
            return this._uncache(!0)
        }, d._kill = function (t, e) {
            if (!t && !e)return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;)i[s]._kill(t, e) && (r = !0);
            return r
        }, d.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;)e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, d.invalidate = function () {
            for (var e = this._first; e;)e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, d._enabled = function (t, i) {
            if (t === this._gc)for (var s = this._first; s;)s._enabled(t, !0), s = s._next;
            return e.prototype._enabled.call(this, t, i)
        }, d.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e
        }, d.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, d.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0, r = this._last, n = 999999999999; r;)e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                    this._duration = this._totalDuration = s, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, d.paused = function (e) {
            if (!e)for (var i = this._first, s = this._time; i;)i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }, d.usesFrames = function () {
            for (var e = this._timeline; e._timeline;)e = e._timeline;
            return e === t._rootFramesTimeline
        }, d.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, s
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var s = function (e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, r = 1e-10, n = e._internals, a = n.lazyTweens, o = n.lazyRender, l = new i(null, null, 1, 0), h = s.prototype = new t;
        return h.constructor = s, h.kill()._gc = !1, s.version = "1.18.0", h.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, h.addCallback = function (t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
        }, h.removeCallback = function (t, e) {
            if (t)if (null == e)this._kill(null, t); else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;)i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
        }, h.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, h.tweenTo = function (t, i) {
            i = i || {};
            var s, r, n, a = {ease: l, useFrames: this.usesFrames(), immediateRender: !1};
            for (r in i)a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t), s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new e(this, s, a), a.onStart = function () {
                n.target.paused(!0), n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale), i.onStart && n._callback("onStart")
            }, n
        }, h.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            }, i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        }, h.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, l, h, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration, p = this._duration, m = this._time, d = this._totalTime, g = this._startTime, v = this._timeScale, y = this._rawPrevTime, T = this._paused, x = this._cycle;
            if (t >= f)this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (_ = !0, y > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4); else if (1e-7 > t)if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === p && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, h = "onReverseComplete") : y >= 0 && this._first && (_ = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)for (s = this._first; s && 0 === s._startTime;)s._duration || (n = !1), s = s._next;
                t = 0, this._initted || (_ = !0)
            } else if (0 === p && 0 > y && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = p + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if (t = this._time, t >= m)for (s = this._first; s && t >= s._startTime && !c;)s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s), s = s._next; else for (s = this._last; s && s._startTime >= t && !c;)s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (c = s), s = s._prev;
                c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== x && !this._locked) {
                var w = this._yoyo && 0 !== (1 & x), b = w === (this._yoyo && 0 !== (1 & this._cycle)), P = this._totalTime, k = this._cycle, S = this._rawPrevTime, R = this._time;
                if (this._totalTime = x * p, x > this._cycle ? w = !w : this._totalTime += p, this._time = m, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = x, this._locked = !0, m = w ? 0 : p, this.render(m, e, 0 === p), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), b && (m = w ? p + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T)return;
                this._time = R, this._totalTime = P, this._cycle = k, this._rawPrevTime = S
            }
            if (!(this._time !== m && this._first || i || _ || c))return d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")), void 0;
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= m)for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (c === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l; else for (s = this._last; s && (l = s._prev, !this._paused || T);) {
                if (s._active || m >= s._startTime && !s._paused && !s._gc) {
                    if (c === s) {
                        for (c = s._prev; c && c.endTime() > this._time;)c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                        c = null, this.pause()
                    }
                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                }
                s = l
            }
            this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), h && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
        }, h.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var s, r, n = [], a = this.getChildren(t, e, i), o = 0, l = a.length;
            for (s = 0; l > s; s++)r = a[s], r.isActive() && (n[o++] = r);
            return n
        }, h.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), s = i.length;
            for (e = 0; s > e; e++)if (i[e].time > t)return i[e].name;
            return null
        }, h.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;)if (t > e[i].time)return e[i].name;
            return null
        }, h.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels)e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, h.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, h.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, h.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, h.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, h.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, h.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, h.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, h.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, s
    }, !0), function () {
        var t = 180 / Math.PI, e = [], i = [], s = [], r = {}, n = _gsScope._gsDefine.globals, a = function (t, e, i, s) {
            this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
        }, o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", l = function (t, e, i, s) {
            var r = {a: t}, n = {}, a = {}, o = {c: s}, l = (t + e) / 2, h = (e + i) / 2, _ = (i + s) / 2, u = (l + h) / 2, c = (h + _) / 2, f = (c - u) / 8;
            return r.b = l + (t - l) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + c) / 2, a.b = c - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
        }, h = function (t, r, n, a, o) {
            var h, _, u, c, f, p, m, d, g, v, y, T, x, w = t.length - 1, b = 0, P = t[0].a;
            for (h = 0; w > h; h++)f = t[b], _ = f.a, u = f.d, c = t[b + 1].d, o ? (y = e[h], T = i[h], x = .25 * (T + y) * r / (a ? .5 : s[h] || .5), p = u - (u - _) * (a ? .5 * r : 0 !== y ? x / y : 0), m = u + (c - u) * (a ? .5 * r : 0 !== T ? x / T : 0), d = u - (p + ((m - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - .5 * (u - _) * r, m = u + .5 * (c - u) * r, d = u - (p + m) / 2), p += d, m += d, f.c = g = p, f.b = 0 !== h ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = l(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
            f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = l(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
        }, _ = function (t, s, r, n) {
            var o, l, h, _, u, c, f = [];
            if (n)for (t = [n].concat(t), l = t.length; --l > -1;)"string" == typeof(c = t[l][s]) && "=" === c.charAt(1) && (t[l][s] = n[s] + Number(c.charAt(0) + c.substr(2)));
            if (o = t.length - 2, 0 > o)return f[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), f;
            for (l = 0; o > l; l++)h = t[l][s], _ = t[l + 1][s], f[l] = new a(h, 0, 0, _), r && (u = t[l + 2][s], e[l] = (e[l] || 0) + (_ - h) * (_ - h), i[l] = (i[l] || 0) + (u - _) * (u - _));
            return f[l] = new a(t[l][s], 0, 0, t[l + 1][s]), f
        }, u = function (t, n, a, l, u, c) {
            var f, p, m, d, g, v, y, T, x = {}, w = [], b = c || t[0];
            u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1);
            for (p in t[0])w.push(p);
            if (t.length > 1) {
                for (T = t[t.length - 1], y = !0, f = w.length; --f > -1;)if (p = w[f], Math.abs(b[p] - T[p]) > .05) {
                    y = !1;
                    break
                }
                y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
            }
            for (e.length = i.length = s.length = 0, f = w.length; --f > -1;)p = w[f], r[p] = -1 !== u.indexOf("," + p + ","), x[p] = _(t, p, r[p], c);
            for (f = e.length; --f > -1;)e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
            if (!l) {
                for (f = w.length; --f > -1;)if (r[p])for (m = x[w[f]], v = m.length - 1, d = 0; v > d; d++)g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                for (f = s.length; --f > -1;)s[f] = Math.sqrt(s[f])
            }
            for (f = w.length, d = a ? 4 : 1; --f > -1;)p = w[f], m = x[p], h(m, n, a, l, r[p]), y && (m.splice(0, d), m.splice(m.length - d, d));
            return x
        }, c = function (t, e, i) {
            e = e || "soft";
            var s, r, n, o, l, h, _, u, c, f, p, m = {}, d = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
            if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length)throw"invalid Bezier data";
            for (c in t[0])v.push(c);
            for (h = v.length; --h > -1;) {
                for (c = v[h], m[c] = l = [], f = 0, u = t.length, _ = 0; u > _; _++)s = null == i ? t[_][c] : "string" == typeof(p = t[_][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && _ > 1 && u - 1 > _ && (l[f++] = (s + l[f - 2]) / 2), l[f++] = s;
                for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d)s = l[_], r = l[_ + 1], n = l[_ + 2], o = 2 === d ? 0 : l[_ + 3], l[f++] = p = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                l.length = f
            }
            return m
        }, f = function (t, e, i) {
            for (var s, r, n, a, o, l, h, _, u, c, f, p = 1 / i, m = t.length; --m > -1;)for (c = t[m], n = c.a, a = c.d - n, o = c.c - n, l = c.b - n, s = r = 0, _ = 1; i >= _; _++)h = p * _, u = 1 - h, s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
        }, p = function (t, e) {
            e = e >> 0 || 6;
            var i, s, r, n, a = [], o = [], l = 0, h = 0, _ = e - 1, u = [], c = [];
            for (i in t)f(t[i], a, e);
            for (r = a.length, s = 0; r > s; s++)l += Math.sqrt(a[s]), n = s % e, c[n] = l, n === _ && (h += l, n = s / e >> 0, u[n] = c, o[n] = h, l = 0, c = []);
            return {length: h, lengths: o, segments: u}
        }, m = _gsScope._gsDefine.plugin({
            propName: "bezier", priority: -1, version: "1.3.4", API: 2, global: !0, init: function (t, e, i) {
                this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, l = e.values || [], h = {}, _ = l[0], f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;
                for (s in _)this._props.push(s);
                for (n = this._props.length; --n > -1;)s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || h[s] !== l[0][s] && (o = h);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                    var m = p(this._beziers, this._timeRes);
                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate)for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                    for (a = 0; 3 > a; a++)s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            }, set: function (e) {
                var i, s, r, n, a, o, l, h, _, u, c = this._segCount, f = this._func, p = this._target, m = e !== this._startRatio;
                if (this._timeRes) {
                    if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && c - 1 > r) {
                        for (h = c - 1; h > r && e >= (this._l2 = _[++r]););
                        this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = _[--r]) >= e;);
                        0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                        for (h = u.length - 1; h > r && e >= (this._s2 = u[++r]););
                        this._s1 = u[r - 1], this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e;);
                        0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, o = (e - i * (1 / c)) * c;
                for (s = 1 - o, r = this._props.length; --r > -1;)n = this._props[r], a = this._beziers[n][i], l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (l = Math.round(l)), f[n] ? p[n](l) : p[n] = l;
                if (this._autoRotate) {
                    var d, g, v, y, T, x, w, b = this._autoRotate;
                    for (r = b.length; --r > -1;)n = b[r][2], x = b[r][3] || 0, w = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, l = m ? Math.atan2(T - v, y - g) * w + x : this._initialRotations[r], f[n] ? p[n](l) : p[n] = l)
                }
            }
        }), d = m.prototype;
        m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function () {
            var t = n.CSSPlugin;
            if (t) {
                var e = t._internals, i = e._parseToProxy, s = e._setPluginRatio, r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, n, a, o, l) {
                        e instanceof Array && (e = {values: e}), l = new m;
                        var h, _, u, c = e.values, f = c.length - 1, p = [], d = {};
                        if (0 > f)return o;
                        for (h = 0; f >= h; h++)u = i(t, c[h], a, o, l, f !== h), p[h] = u.end;
                        for (_ in e)d[_] = e[_];
                        return d.values = p, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = l, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (h = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x ? [["x", "y", "rotation", h, !1]] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), l._onInitTween(u.proxy, d, a._tween), o
                    }
                })
            }
        }, d._roundProps = function (t, e) {
            for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        }, d._kill = function (t) {
            var e, i, s = this._props;
            for (e in this._beziers)if (e in t)for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;)s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i, s, r, n, a = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
        }, o = _gsScope._gsDefine.globals, l = {}, h = a.prototype = new t("css");
        h.constructor = a, a.version = "1.18.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
        };
        var _, u, c, f, p, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g, g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, T = /(?:\d|\-|\+|=|#|\.)*/g, x = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, b = /alpha\(opacity *=.+?\)/i, P = /^(rgb|hsl)/, k = /([A-Z])/g, S = /-([a-z])/gi, R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, O = function (t, e) {
            return e.toUpperCase()
        }, A = /(?:Left|Right|Width)/i, C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, M = /,(?=[^\)]*(?:\(|$))/gi, z = Math.PI / 180, F = 180 / Math.PI, I = {}, E = document, N = function (t) {
            return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t)
        }, L = N("div"), X = N("img"), B = a._internals = {_specialProps: l}, j = navigator.userAgent, Y = function () {
            var t = j.indexOf("Android"), e = N("a");
            return c = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === t || Number(j.substr(t + 8, 1)) > 3), p = c && 6 > Number(j.substr(j.indexOf("Version/") + 8, 1)), f = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
        }(), U = function (t) {
            return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, q = function (t) {
            window.console && console.log(t)
        }, V = "", G = "", W = function (t, e) {
            e = e || L;
            var i, s, r = e.style;
            if (void 0 !== r[t])return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
            return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null
        }, Z = E.defaultView ? E.defaultView.getComputedStyle : function () {
        }, Q = a.getStyle = function (t, e, i, s, r) {
            var n;
            return Y || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : U(t)
        }, $ = B.convertToPixels = function (t, i, s, r, n) {
            if ("px" === r || !r)return s;
            if ("auto" === r || !s)return 0;
            var o, l, h, _ = A.test(i), u = t, c = L.style, f = 0 > s;
            if (f && (s = -s), "%" === r && -1 !== i.indexOf("border"))o = s / 100 * (_ ? t.clientWidth : t.clientHeight); else {
                if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r)c[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r; else {
                    if (u = t.parentNode || E.body, l = u._gsCache, h = e.ticker.frame, l && _ && l.time === h)return l.width * s / 100;
                    c[_ ? "width" : "height"] = s + r
                }
                u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0))
            }
            return f ? -o : o
        }, H = B.calculateOffset = function (t, e, i) {
            if ("absolute" !== Q(t, "position", i))return 0;
            var s = "left" === e ? "Left" : "Top", r = Q(t, "margin" + s, i);
            return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0)
        }, K = function (t, e) {
            var i, s, r, n = {};
            if (e = e || Z(t, null))if (i = e.length)for (; --i > -1;)r = e[i], (-1 === r.indexOf("-transform") || ke === r) && (n[r.replace(S, O)] = e.getPropertyValue(r)); else for (i in e)(-1 === i.indexOf("Transform") || Pe === i) && (n[i] = e[i]); else if (e = t.currentStyle || t.style)for (i in e)"string" == typeof i && void 0 === n[i] && (n[i.replace(S, O)] = e[i]);
            return Y || (n.opacity = U(t)), s = Ne(t, e, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Re && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
        }, J = function (t, e, i, s, r) {
            var n, a, o, l = {}, h = t.style;
            for (a in i)"cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== h[a] && (o = new pe(h, a, h[a], o)));
            if (s)for (a in s)"className" !== a && (l[a] = s[a]);
            return {difs: l, firstMPT: o}
        }, te = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ie = function (t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = te[e], n = r.length;
            for (i = i || Z(t, null); --n > -1;)s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        }, se = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i = t.split(" "), s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
        }, re = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, ne = function (t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }, ae = function (t, e, i, s) {
            var r, n, a, o, l, h = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o
        }, oe = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, le = function (t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, he = a.parseColor = function (t, e) {
            var i, s, r, n, a, o, l, h, _, u, c;
            if (t)if ("number" == typeof t)i = [t >> 16, 255 & t >> 8, 255 & t]; else {
                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t])i = oe[t]; else if ("#" === t.charAt(0))4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, 255 & t >> 8, 255 & t]; else if ("hsl" === t.substr(0, 3))if (i = c = t.match(d), e) {
                    if (-1 !== t.indexOf("="))return t.match(g)
                } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o + 1) : l + o - l * o, s = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = le(a + 1 / 3, s, r), i[1] = le(a, s, r), i[2] = le(a - 1 / 3, s, r); else i = t.match(d) || oe.transparent;
                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
            } else i = oe.black;
            return e && !c && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), _ = Math.min(s, r, n), l = (h + _) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = 0 | a + .5, i[1] = 0 | 100 * o + .5, i[2] = 0 | 100 * l + .5), i
        }, _e = function (t, e) {
            var i, s, r, n = t.match(ue) || [], a = 0, o = n.length ? "" : t;
            for (i = 0; n.length > i; i++)s = n[i], r = t.substr(a, t.indexOf(s, a) - a), a += r.length + s.length, s = he(s, e), 3 === s.length && s.push(1), o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
            return o
        }, ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in oe)ue += "|" + h + "\\b";
        ue = RegExp(ue + ")", "gi"), a.colorStringFilter = function (t) {
            var e, i = t[0] + t[1];
            ue.lastIndex = 0, ue.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = _e(t[0], e), t[1] = _e(t[1], e))
        }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
        var ce = function (t, e, i, s) {
            if (null == t)return function (t) {
                return t
            };
            var r, n = e ? (t.match(ue) || [""])[0] : "", a = t.split(n).join("").match(v) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(d, "") : "";
            return _ ? r = e ? function (t) {
                var e, c, f, p;
                if ("number" == typeof t)t += u; else if (s && M.test(t)) {
                    for (p = t.replace(M, "|").split("|"), f = 0; p.length > f; f++)p[f] = r(p[f]);
                    return p.join(",")
                }
                if (e = (t.match(ue) || [n])[0], c = t.split(e).join("").match(v) || [], f = c.length, _ > f--)for (; _ > ++f;)c[f] = i ? c[0 | (f - 1) / 2] : a[f];
                return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
                var e, n, c;
                if ("number" == typeof t)t += u; else if (s && M.test(t)) {
                    for (n = t.replace(M, "|").split("|"), c = 0; n.length > c; c++)n[c] = r(n[c]);
                    return n.join(",")
                }
                if (e = t.match(v) || [], c = e.length, _ > c--)for (; _ > ++c;)e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                return o + e.join(h) + l
            } : function (t) {
                return t
            }
        }, fe = function (t) {
            return t = t.split(","), function (e, i, s, r, n, a, o) {
                var l, h = (i + "").split(" ");
                for (o = {}, l = 0; 4 > l; l++)o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        }, pe = (B._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;)e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)for (o = n.firstMPT; o;) {
                if (i = o.t, i.type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++)r += i["xn" + s] + i["xs" + (s + 1)];
                        i.e = r
                    }
                } else i.e = i.s + i.xs0;
                o = o._next
            }
        }, function (t, e, i, s, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
        }), me = (B._parseToProxy = function (t, e, i, s, r, n) {
            var a, o, l, h, _, u = s, c = {}, f = {}, p = i._transform, m = I;
            for (i._transform = null, I = e, s = _ = i.parse(t, e, s, r), I = m, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, c[o] = s.s, n || (h = new pe(s, "s", o, h, s.r), s.c = 0), 1 === s.type))for (a = s.l; --a > 0;)l = "xn" + a, o = s.p + "_" + l, f[o] = s.data[l], c[o] = s[l], n || (h = new pe(s, l, o, h, s.rxp[l]));
                s = s._next
            }
            return {proxy: c, end: f, firstMPT: h, pt: _}
        }, B.CSSPropTween = function (t, e, s, r, a, o, l, h, _, u, c) {
            this.t = t, this.p = e, this.s = s, this.c = r, this.n = l || e, t instanceof me || n.push(this.n), this.r = h, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === c ? s + r : c, a && (this._next = a, a._prev = this)
        }), de = function (t, e, i, s, r, n) {
            var a = new me(t, e, i, s - i, r, -1, n);
            return a.b = i, a.e = a.xs0 = s, a
        }, ge = a.parseComplex = function (t, e, i, s, r, n, a, o, l, h) {
            i = i || n || "", a = new me(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, s), s += "";
            var u, c, f, p, m, v, y, T, x, w, b, P, k, S = i.split(", ").join(",").split(" "), R = s.split(", ").join(",").split(" "), O = S.length, A = _ !== !1;
            for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), O = S.length), O !== R.length && (S = (n || "").split(" "), O = S.length), a.plugin = l, a.setRatio = h, ue.lastIndex = 0, u = 0; O > u; u++)if (p = S[u], m = R[u], T = parseFloat(p), T || 0 === T)a.appendXtra("", T, re(m, T), m.replace(g, ""), A && -1 !== m.indexOf("px"), !0); else if (r && ue.test(p))P = "," === m.charAt(m.length - 1) ? ")," : ")", k = -1 !== m.indexOf("hsl") && Y, p = he(p, k), m = he(m, k), x = p.length + m.length > 6, x && !Y && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (Y || (x = !1), k ? a.appendXtra(x ? "hsla(" : "hsl(", p[0], re(m[0], p[0]), ",", !1, !0).appendXtra("", p[1], re(m[1], p[1]), "%,", !1).appendXtra("", p[2], re(m[2], p[2]), x ? "%," : "%" + P, !1) : a.appendXtra(x ? "rgba(" : "rgb(", p[0], m[0] - p[0], ",", !0, !0).appendXtra("", p[1], m[1] - p[1], ",", !0).appendXtra("", p[2], m[2] - p[2], x ? "," : P, !0), x && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > m.length ? 1 : m[3]) - p, P, !1))), ue.lastIndex = 0; else if (v = p.match(d)) {
                if (y = m.match(g), !y || y.length !== v.length)return a;
                for (f = 0, c = 0; v.length > c; c++)b = v[c], w = p.indexOf(b, f), a.appendXtra(p.substr(f, w - f), Number(b), re(y[c], b), "", A && "px" === p.substr(w + b.length, 2), 0 === c), f = w + b.length;
                a["xs" + a.l] += p.substr(f)
            } else a["xs" + a.l] += a.l ? " " + p : p;
            if (-1 !== s.indexOf("=") && a.data) {
                for (P = a.xs0 + a.data.s, u = 1; a.l > u; u++)P += a["xs" + u] + a.data["xn" + u];
                a.e = P + a["xs" + u]
            }
            return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
        }, ve = 9;
        for (h = me.prototype, h.l = h.pr = 0; --ve > 0;)h["xn" + ve] = 0, h["xs" + ve] = "";
        h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, s, r, n) {
            var a = this, o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new me(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {s: e + i}, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var ye = function (t, e) {
            e = e || {}, this.p = e.prefix ? W(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ce(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, Te = B._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var s, r, n = t.split(","), a = e.defaultValue;
            for (i = i || [a], s = 0; n.length > s; s++)e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ye(n[s], e)
        }, xe = function (t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                Te(t, {
                    parser: function (t, i, s, r, n, a, h) {
                        var _ = o.com.greensock.plugins[e];
                        return _ ? (_._cssRegister(), l[s].parse(t, i, s, r, n, a, h)) : (q("Error: " + e + " js file not loaded."), n)
                    }
                })
            }
        };
        h = ye.prototype, h.parseComplex = function (t, e, i, s, r, n) {
            var a, o, l, h, _, u, c = this.keyword;
            if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : c && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++)e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (_ = e.indexOf(c), u = i.indexOf(c), _ !== u && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c)));
                e = o.join(", "), i = l.join(", ")
            }
            return ge(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        }, h.parse = function (t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        }, a.registerSpecialProp = function (t, e, i) {
            Te(t, {
                parser: function (t, s, r, n, a, o) {
                    var l = new me(t, r, 0, 0, a, 2, r, !1, i);
                    return l.plugin = o, l.setRatio = e(t, s, n._tween, r), l
                }, priority: i
            })
        }, a.useSVGTransformAttr = c || f;
        var we, be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Pe = W("transform"), ke = V + "transform", Se = W("transformOrigin"), Re = null !== W("perspective"), Oe = B.Transform = function () {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Re ? a.defaultForce3D || "auto" : !1
        }, Ae = window.SVGElement, Ce = function (t, e, i) {
            var s, r = E.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
            for (s in i)r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(r), r
        }, De = E.documentElement, Me = function () {
            var t, e, i, s = m || /Android/i.test(j) && !window.chrome;
            return E.createElementNS && !s && (t = Ce("svg", De), e = Ce("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }), i = e.getBoundingClientRect().width, e.style[Se] = "50% 50%", e.style[Pe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Re), De.removeChild(t)), s
        }(), ze = function (t, e, i, s, r) {
            var n, o, l, h, _, u, c, f, p, m, d, g, v, y, T = t._gsTransform, x = Ee(t, !0);
            T && (v = T.xOrigin, y = T.yOrigin), (!s || 2 > (n = s.split(" ")).length) && (c = t.getBBox(), e = se(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(n[0]), i.yOrigin = _ = parseFloat(n[1]), s && x !== Ie && (u = x[0], c = x[1], f = x[2], p = x[3], m = x[4], d = x[5], g = u * p - c * f, o = h * (p / g) + _ * (-f / g) + (f * d - p * m) / g, l = h * (-c / g) + _ * (u / g) - (u * d - c * m) / g, h = i.xOrigin = n[0] = o, _ = i.yOrigin = n[1] = l), T && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = _ - y, T.xOffset += o * x[0] + l * x[2] - o, T.yOffset += o * x[1] + l * x[3] - l) : T.xOffset = T.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "))
        }, Fe = function (t) {
            return !!(Ae && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }, Ie = [1, 0, 0, 1, 0, 0], Ee = function (t, e) {
            var i, s, r, n, a, o = t._gsTransform || new Oe, l = 1e5;
            if (Pe ? s = Q(t, ke, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(C), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (o.svg || t.getBBox && Fe(t)) && (i && -1 !== (t.style[Pe] + "").indexOf("matrix") && (s = t.style[Pe], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i)return Ie;
            for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ve = r.length; --ve > -1;)n = Number(r[ve]), r[ve] = (a = n - (n |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + n : n;
            return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
        }, Ne = B.getTransform = function (t, i, s, n) {
            if (t._gsTransform && s && !n)return t._gsTransform;
            var o, l, h, _, u, c, f = s ? t._gsTransform || new Oe : new Oe, p = 0 > f.scaleX, m = 2e-5, d = 1e5, g = Re ? parseFloat(Q(t, Se, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0, v = parseFloat(a.defaultTransformPerspective) || 0;
            if (f.svg = !(!t.getBBox || !Fe(t)), f.svg && (ze(t, Q(t, Se, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), we = a.useSVGTransformAttr || Me), o = Ee(t), o !== Ie) {
                if (16 === o.length) {
                    var y, T, x, w, b, P = o[0], k = o[1], S = o[2], R = o[3], O = o[4], A = o[5], C = o[6], D = o[7], M = o[8], z = o[9], I = o[10], E = o[12], N = o[13], L = o[14], X = o[11], B = Math.atan2(C, I);
                    f.zOrigin && (L = -f.zOrigin, E = M * L - o[12], N = z * L - o[13], L = I * L + f.zOrigin - o[14]), f.rotationX = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), y = O * w + M * b, T = A * w + z * b, x = C * w + I * b, M = O * -b + M * w, z = A * -b + z * w, I = C * -b + I * w, X = D * -b + X * w, O = y, A = T, C = x), B = Math.atan2(M, I), f.rotationY = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), y = P * w - M * b, T = k * w - z * b, x = S * w - I * b, z = k * b + z * w, I = S * b + I * w, X = R * b + X * w, P = y, k = T, S = x), B = Math.atan2(k, P), f.rotation = B * F, B && (w = Math.cos(-B), b = Math.sin(-B), P = P * w + O * b, T = k * w + A * b, A = k * -b + A * w, C = S * -b + C * w, k = T), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(P * P + k * k) * d + .5) / d, f.scaleY = (0 | Math.sqrt(A * A + z * z) * d + .5) / d, f.scaleZ = (0 | Math.sqrt(C * C + I * I) * d + .5) / d, f.skewX = 0, f.perspective = X ? 1 / (0 > X ? -X : X) : 0, f.x = E, f.y = N, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * k - f.xOrigin * A))
                } else if (!(Re && !n && o.length && f.x === o[4] && f.y === o[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Q(t, "display", i))) {
                    var j = o.length >= 6, Y = j ? o[0] : 1, U = o[1] || 0, q = o[2] || 0, V = j ? o[3] : 1;
                    f.x = o[4] || 0, f.y = o[5] || 0, h = Math.sqrt(Y * Y + U * U), _ = Math.sqrt(V * V + q * q), u = Y || U ? Math.atan2(U, Y) * F : f.rotation || 0, c = q || V ? Math.atan2(q, V) * F + u : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (h *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (_ *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = h, f.scaleY = _, f.rotation = u, f.skewX = c, Re && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * Y + f.yOrigin * q), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * V))
                }
                f.zOrigin = g;
                for (l in f)m > f[l] && f[l] > -m && (f[l] = 0)
            }
            return s && (t._gsTransform = f, f.svg && (we && t.style[Pe] ? e.delayedCall(.001, function () {
                je(t.style, Pe)
            }) : !we && t.getAttribute("transform") && e.delayedCall(.001, function () {
                t.removeAttribute("transform")
            }))), f
        }, Le = function (t) {
            var e, i, s = this.data, r = -s.rotation * z, n = r + s.skewX * z, a = 1e5, o = (0 | Math.cos(r) * s.scaleX * a) / a, l = (0 | Math.sin(r) * s.scaleX * a) / a, h = (0 | Math.sin(n) * -s.scaleY * a) / a, _ = (0 | Math.cos(n) * s.scaleY * a) / a, u = this.t.style, c = this.t.currentStyle;
            if (c) {
                i = l, l = -h, h = -i, e = c.filter, u.filter = "";
                var f, p, d = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== c.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _, w = s.x + d * s.xPercent / 100, b = s.y + g * s.yPercent / 100;
                if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, p = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + p * l), b += p - (f * h + p * _)), v ? (f = d / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * l) + w) + ", Dy=" + (p - (f * h + p * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                    var P, k, S, R = 8 > m ? 1 : -1;
                    for (f = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > l ? -l : l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > h ? -h : h) * d)) / 2 + b), ve = 0; 4 > ve; ve++)k = ee[ve], P = c[k], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, k, parseFloat(P), P.replace(T, "")) || 0, S = i !== s[k] ? 2 > ve ? -s.ieOffsetX : -s.ieOffsetY : 2 > ve ? f - s.ieOffsetX : p - s.ieOffsetY, u[k] = (s[k] = Math.round(i - S * (0 === ve || 2 === ve ? 1 : R))) + "px"
                }
            }
        }, Xe = B.set3DTransformRatio = B.setTransformRatio = function (t) {
            var e, i, s, r, n, a, o, l, h, _, u, c, p, m, d, g, v, y, T, x, w, b, P, k = this.data, S = this.t.style, R = k.rotation, O = k.rotationX, A = k.rotationY, C = k.scaleX, D = k.scaleY, M = k.scaleZ, F = k.x, I = k.y, E = k.z, N = k.svg, L = k.perspective, X = k.force3D;
            if (!(((1 !== t && 0 !== t || "auto" !== X || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && X || E || L || A || O) && (!we || !N) && Re))return R || k.skewX || N ? (R *= z, b = k.skewX * z, P = 1e5, e = Math.cos(R) * C, r = Math.sin(R) * C, i = Math.sin(R - b) * -D, n = Math.cos(R - b) * D, b && "simple" === k.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, k.skewY && (e *= v, r *= v)), N && (F += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, I += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset, we && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), F += .01 * k.xPercent * m.width, I += .01 * k.yPercent * m.height), m = 1e-6, m > F && F > -m && (F = 0), m > I && I > -m && (I = 0)), T = (0 | e * P) / P + "," + (0 | r * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + F + "," + I + ")", N && we ? this.t.setAttribute("transform", "matrix(" + T) : S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + T) : S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + D + "," + F + "," + I + ")", void 0;
            if (f && (m = 1e-4, m > C && C > -m && (C = M = 2e-5), m > D && D > -m && (D = M = 2e-5), !L || k.z || k.rotationX || k.rotationY || (L = 0)), R || k.skewX)R *= z, d = e = Math.cos(R), g = r = Math.sin(R), k.skewX && (R -= k.skewX * z, d = Math.cos(R), g = Math.sin(R), "simple" === k.skewType && (v = Math.tan(k.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v, k.skewY && (e *= v, r *= v))), i = -g, n = d; else {
                if (!(A || O || 1 !== M || L || N))return S[Pe] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + I + "px," + E + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")" : ""), void 0;
                e = n = 1, i = r = 0
            }
            h = 1, s = a = o = l = _ = u = 0, c = L ? -1 / L : 0, p = k.zOrigin, m = 1e-6, x = ",", w = "0", R = A * z, R && (d = Math.cos(R), g = Math.sin(R), o = -g, _ = c * -g, s = e * g, a = r * g, h = d, c *= d, e *= d, r *= d), R = O * z, R && (d = Math.cos(R), g = Math.sin(R), v = i * d + s * g, y = n * d + a * g, l = h * g, u = c * g, s = i * -g + s * d, a = n * -g + a * d, h *= d, c *= d, i = v, n = y), 1 !== M && (s *= M, a *= M, h *= M, c *= M), 1 !== D && (i *= D, n *= D, l *= D, u *= D), 1 !== C && (e *= C, r *= C, o *= C, _ *= C), (p || N) && (p && (F += s * -p, I += a * -p, E += h * -p + p), N && (F += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, I += k.yOrigin - (k.xOrigin * r + k.yOrigin * n) + k.yOffset), m > F && F > -m && (F = w), m > I && I > -m && (I = w), m > E && E > -m && (E = 0)), T = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? w : e) + x + (m > r && r > -m ? w : r) + x + (m > o && o > -m ? w : o), T += x + (m > _ && _ > -m ? w : _) + x + (m > i && i > -m ? w : i) + x + (m > n && n > -m ? w : n), O || A ? (T += x + (m > l && l > -m ? w : l) + x + (m > u && u > -m ? w : u) + x + (m > s && s > -m ? w : s), T += x + (m > a && a > -m ? w : a) + x + (m > h && h > -m ? w : h) + x + (m > c && c > -m ? w : c) + x) : T += ",0,0,0,0,1,0,", T += F + x + I + x + E + x + (L ? 1 + -E / L : 1) + ")", S[Pe] = T
        };
        h = Oe.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (t, e, i, s, n, o, l) {
                if (s._lastParsedTransform === l)return n;
                s._lastParsedTransform = l;
                var h, _, u, c, f, p, m, d, g, v, y = t._gsTransform, T = t.style, x = 1e-6, w = be.length, b = l, P = {}, k = "transformOrigin";
                if (l.display ? (c = Q(t, "display"), T.display = "block", h = Ne(t, r, !0, l.parseTransform), T.display = c) : h = Ne(t, r, !0, l.parseTransform), s._transform = h, "string" == typeof b.transform && Pe)c = L.style, c[Pe] = b.transform, c.display = "block", c.position = "absolute", E.body.appendChild(L), _ = Ne(L, null, !1), E.body.removeChild(L), _.perspective || (_.perspective = h.perspective), null != b.xPercent && (_.xPercent = ne(b.xPercent, h.xPercent)), null != b.yPercent && (_.yPercent = ne(b.yPercent, h.yPercent)); else if ("object" == typeof b) {
                    if (_ = {
                            scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, h.scaleX),
                            scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, h.scaleY),
                            scaleZ: ne(b.scaleZ, h.scaleZ),
                            x: ne(b.x, h.x),
                            y: ne(b.y, h.y),
                            z: ne(b.z, h.z),
                            xPercent: ne(b.xPercent, h.xPercent),
                            yPercent: ne(b.yPercent, h.yPercent),
                            perspective: ne(b.transformPerspective, h.perspective)
                        }, d = b.directionalRotation, null != d)if ("object" == typeof d)for (c in d)b[c] = d[c]; else b.rotation = d;
                    "string" == typeof b.x && -1 !== b.x.indexOf("%") && (_.x = 0, _.xPercent = ne(b.x, h.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (_.y = 0, _.yPercent = ne(b.y, h.yPercent)), _.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : h.rotation, h.rotation, "rotation", P), Re && (_.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", P), _.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", P)), _.skewX = null == b.skewX ? h.skewX : ae(b.skewX, h.skewX), _.skewY = null == b.skewY ? h.skewY : ae(b.skewY, h.skewY), (u = _.skewY - h.skewY) && (_.skewX += u, _.rotation += u)
                }
                for (Re && null != b.force3D && (h.force3D = b.force3D, m = !0), h.skewType = b.skewType || h.skewType || a.defaultSkewType, p = h.force3D || h.z || h.rotationX || h.rotationY || _.z || _.rotationX || _.rotationY || _.perspective, p || null == b.scale || (_.scaleZ = 1); --w > -1;)i = be[w], f = _[i] - h[i], (f > x || -x > f || null != b[i] || null != I[i]) && (m = !0, n = new me(h, i, h[i], f, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                return f = b.transformOrigin, h.svg && (f || b.svgOrigin) && (g = h.xOffset, v = h.yOffset, ze(t, se(f), _, b.svgOrigin, b.smoothOrigin), n = de(h, "xOrigin", (y ? h : _).xOrigin, _.xOrigin, n, k), n = de(h, "yOrigin", (y ? h : _).yOrigin, _.yOrigin, n, k), (g !== h.xOffset || v !== h.yOffset) && (n = de(h, "xOffset", y ? g : h.xOffset, h.xOffset, n, k), n = de(h, "yOffset", y ? v : h.yOffset, h.yOffset, n, k)), f = we ? null : "0px 0px"), (f || Re && p && h.zOrigin) && (Pe ? (m = !0, i = Se, f = (f || Q(t, i, r, !1, "50% 50%")) + "", n = new me(T, i, 0, 0, n, -1, k), n.b = T[i], n.plugin = o, Re ? (c = h.zOrigin, f = f.split(" "), h.zOrigin = (f.length > 2 && (0 === c || "0px" !== f[2]) ? parseFloat(f[2]) : c) || 0, n.xs0 = n.e = f[0] + " " + (f[1] || "50%") + " 0px", n = new me(h, "zOrigin", 0, 0, n, -1, n.n), n.b = c, n.xs0 = n.e = h.zOrigin) : n.xs0 = n.e = f) : se(f + "", h)), m && (s._transformType = h.svg && we || !p && 3 !== this._transformType ? 2 : 3), n
            }, prefix: !0
        }), Te("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), Te("borderRadius", {
            defaultValue: "0px", parser: function (t, e, i, n, a) {
                e = this.format(e);
                var o, l, h, _, u, c, f, p, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++)this.p.indexOf("border") && (b[l] = W(b[l])), u = _ = Q(t, b[l], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), c = h = o[l], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", f, v), x = $(t, "borderTop", f, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (x / d) + "%") : "em" === g ? (w = $(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (c = parseFloat(u) + p + g, h = parseFloat(_) + p + g)), a = ge(P, b[l], u + " " + _, c + " " + h, !1, "0px", a);
                return a
            }, prefix: !0, formatter: ce("0px 0px 0px 0px", !1, !0)
        }), Te("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, i, s, n, a) {
                var o, l, h, _, u, c, f = "background-position", p = r || Z(t, null), d = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(R, ""), c && "none" !== c)) {
                    for (o = d.split(" "), l = g.split(" "), X.setAttribute("src", c), h = 2; --h > -1;)d = o[h], _ = -1 !== d.indexOf("%"), _ !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[h] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, g, n, a)
            }, formatter: se
        }), Te("backgroundSize", {defaultValue: "0 0", formatter: se}), Te("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), Te("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), Te("transformStyle", {prefix: !0}), Te("backfaceVisibility", {prefix: !0}), Te("userSelect", {prefix: !0}), Te("margin", {parser: fe("marginTop,marginRight,marginBottom,marginLeft")}), Te("padding", {parser: fe("paddingTop,paddingRight,paddingBottom,paddingLeft")}), Te("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, s, n, a) {
                var o, l, h;
                return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
            }
        }), Te("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), Te("autoRound,strictUnits", {
            parser: function (t, e, i, s, r) {
                return r
            }
        }), Te("border", {
            defaultValue: "0px solid #000", parser: function (t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            }, color: !0, formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ue) || ["#000"])[0]
            }
        }), Te("borderWidth", {parser: fe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), Te("float,cssFloat,styleFloat", {
            parser: function (t, e, i, s, r) {
                var n = t.style, a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                return new me(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
            }
        });
        var Be = function (t) {
            var e, i = this.t, s = i.filter || Q(this.data, "filter") || "", r = 0 | this.s + this.c * t;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(x, "opacity=" + r))
        };
        Te("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, i, s, n, a) {
                var o = parseFloat(Q(t, "opacity", r, !1, "1")), l = t.style, h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), Y ? n = new me(l, "opacity", o, e - o, n) : (n = new me(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Be), h && (n = new me(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
            }
        });
        var je = function (t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, Ye = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;)e.v ? i[e.p] = e.v : je(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        Te("className", {
            parser: function (t, e, s, n, a, o, l) {
                var h, _, u, c, f, p = t.getAttribute("class") || "", m = t.style.cssText;
                if (a = n._classNamePT = new me(t, s, 0, 0, a, 2), a.setRatio = Ye, a.pr = -11, i = !0, a.b = p, _ = K(t, r), u = t._gsClassPT) {
                    for (c = {}, f = u.data; f;)c[f.p] = 1, f = f._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = J(t, _, K(t), l, c), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, h.difs, a, o)
            }
        });
        var Ue = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, r, n, a = this.t.style, o = l.transform.parse;
                if ("all" === this.e)a.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;)i = e[s], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Se : l[i].p), je(a, i);
                r && (je(a, Pe), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
            }
        };
        for (Te("clearProps", {
            parser: function (t, e, s, r, n) {
                return n = new me(t, s, 0, 0, n, 2), n.setRatio = Ue, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
            }
        }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ve = h.length; ve--;)xe(h[ve]);
        h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, o) {
            if (!t.nodeType)return !1;
            this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
            var h, f, m, d, g, v, y, T, x, b = t.style;
            if (u && "" === b.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (d = b.cssText, h = K(t, r), b.cssText = d + ";" + e, h = J(t, h, K(t)).difs, !Y && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, b.cssText = d), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                for (x = 3 === this._transformType, Pe ? c && (u = !0, "" === b.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : b.zoom = 1, m = f; m && m._next;)m = m._next;
                T = new me(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, m), T.setRatio = Pe ? Xe : Le, T.data = this._transform || Ne(t, r, !0), T.tween = o, T.pr = -1, n.pop()
            }
            if (i) {
                for (; f;) {
                    for (v = f._next, m = d; m && m.pr > f.pr;)m = m._next;
                    (f._prev = m ? m._prev : g) ? f._prev._next = f : d = f, (f._next = m) ? m._prev = f : g = f, f = v
                }
                this._firstPT = d
            }
            return !0
        }, h.parse = function (t, e, i, n) {
            var a, o, h, u, c, f, p, m, d, g, v = t.style;
            for (a in e)f = e[a], o = l[a], o ? i = o.parse(t, f, a, this, i, n, e) : (c = Q(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(f) ? (d || (f = he(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = ge(v, a, c, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), p = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = ie(t, a, r), p = "px") : "left" === a || "top" === a ? (h = H(t, a, r), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(T, "")) : (u = parseFloat(f), m = d ? f.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : p), f = u || 0 === u ? (g ? u + h : u) + m : e[a], p !== m && "" !== m && (u || 0 === u) && h && (h = $(t, a, h, p), "%" === m ? (h /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === m || "rem" === m ? h /= $(t, a, 1, m) : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + h + m)), g && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new me(v, a, u || h || 0, 0, i, -1, a, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c) : q("invalid " + a + " tween value: " + e[a]) : (i = new me(v, a, h, u - h, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, c, f), i.xs0 = m)) : i = ge(v, a, c, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
            return i
        }, h.setRatio = function (t) {
            var e, i, s, r = this._firstPT, n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)if (1 === r.type)if (s = r.l, 2 === s)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === s)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === s)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === s)r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else {
                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++)i += r["xn" + s] + r["xs" + (s + 1)];
                    r.t[r.p] = i
                } else-1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;)2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;) {
                if (2 !== r.type)if (r.r && -1 !== r.type)if (e = Math.round(r.s + r.c), r.type) {
                    if (1 === r.type) {
                        for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++)i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i
                    }
                } else r.t[r.p] = e + r.xs0; else r.t[r.p] = r.e; else r.setRatio(t);
                r = r._next
            }
        }, h._enableTransforms = function (t) {
            this._transform = this._transform || Ne(this._target, r, !0), this._transformType = this._transform.svg && we || !t && 3 !== this._transformType ? 2 : 3
        };
        var qe = function () {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function (t, e, i) {
            var s = this._firstPT = new me(t, e, 0, 0, this._firstPT, 2);
            s.e = i, s.setRatio = qe, s.data = this
        }, h._linkCSSP = function (t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, h._kill = function (e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e)n[s] = e[s];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
        };
        var Ve = function (t, e, i) {
            var s, r, n, a;
            if (t.slice)for (r = t.length; --r > -1;)Ve(t[r], e, i); else for (s = t.childNodes, r = s.length; --r > -1;)n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ve(n, e, i)
        };
        return a.cascadeTo = function (t, i, s) {
            var r, n, a, o, l = e.to(t, i, s), h = [l], _ = [], u = [], c = [], f = e._internals.reservedProps;
            for (t = l._targets || l.target, Ve(t, _, c), l.render(i, !0, !0), Ve(t, u), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;)if (n = J(c[r], _[r], u[r]), n.firstMPT) {
                n = n.difs;
                for (a in s)f[a] && (n[a] = s[a]);
                o = {};
                for (a in n)o[a] = _[r][a];
                h.push(e.fromTo(c[r], i, o, n))
            }
            return h
        }, t.activate([a]), a
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function (t, e, i) {
                return this._tween = i, !0
            }
        }), e = function (t) {
            for (; t;)t.f || t.blob || (t.r = 1), t = t._next
        }, i = t.prototype;
        i._onInitAllProps = function () {
            for (var t, i, s, r = this._tween, n = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = n.length, o = {}, l = r._propLookup.roundProps; --a > -1;)o[n[a]] = 1;
            for (a = n.length; --a > -1;)for (t = n[a], i = r._firstPT; i;)s = i._next, i.pg ? i.t._roundProps(o, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s : r._firstPT === i && (r._firstPT = s), i._next = i._prev = null, r._propLookup[t] = l)), i = s;
            return !1
        }, i._add = function (t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
        }
    }(), function () {
        _gsScope._gsDefine.plugin({
            propName: "attr", API: 2, version: "0.5.0", init: function (t, e) {
                var i;
                if ("function" != typeof t.setAttribute)return !1;
                for (i in e)this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), this._overwriteProps.push(i);
                return !0
            }
        })
    }(), _gsScope._gsDefine.plugin({
        propName: "directionalRotation", version: "0.2.1", API: 2, init: function (t, e) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var i, s, r, n, a, o, l = e.useRadians === !0 ? 2 * Math.PI : 360, h = 1e-6;
            for (i in e)"useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > h || -h > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
            return !0
        }, set: function (t) {
            var e;
            if (1 !== t)this._super.setRatio.call(this, t); else for (e = this._firstPT; e;)e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, l = n._class, h = function (e, i) {
            var s = l("easing." + e, function () {
            }, !0), r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, s
        }, _ = t.register || function () {
            }, u = function (t, e, i, s) {
            var r = l("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new s}, !0);
            return _(r, t), r
        }, c = function (t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        }, f = function (e, i) {
            var s = l("easing." + e, function (t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, r.config = function (t) {
                return new s(t)
            }, s
        }, p = u("Back", f("BackOut", function (t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn", function (t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut", function (t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = l("easing.SlowMo", function (t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
        }, !0), d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function (t, e, i) {
            return new m(t, e, i)
        }, e = l("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function (t) {
            return new e(t)
        }, i = l("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, s, r, n, a, o, l = e.taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;)i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (n = 1 - i, r = n * n * g) : "in" === l ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), h[_++] = {
                x: i,
                y: s
            };
            for (h.sort(function (t, e) {
                return t.x - e.x
            }), o = new c(1, 1, null), f = u; --f > -1;)a = h[f], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;)e = e.next;
                e = e.prev
            } else for (; e.prev && e.t >= t;)e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function (t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", h("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), h("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), h("BounceInOut", function (t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", h("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), h("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), h("CircInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function (e, i, s) {
            var r = l("easing." + e, function (t, e) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
            }, !0), n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function (t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), s("ElasticIn", function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), s("ElasticInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
        }, .45)), u("Expo", h("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), h("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), h("ExpoInOut", function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", h("SineOut", function (t) {
            return Math.sin(t * o)
        }), h("SineIn", function (t) {
            return -Math.cos(t * o) + 1
        }), h("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, r, n, a, o, l = function (t) {
            var e, s = t.split("."), r = i;
            for (e = 0; s.length > e; e++)r[s[e]] = r = r[s[e]] || {};
            return r
        }, h = l("com.greensock"), _ = 1e-10, u = function (t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        }, c = function () {
        }, f = function () {
            var t = Object.prototype.toString, e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), p = {}, m = function (s, r, n, a) {
            this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = n;
            var o = [];
            this.check = function (h) {
                for (var _, u, c, f, d, g = r.length, v = g; --g > -1;)(_ = p[r[g]] || new m(r[g], [])).gsClass ? (o[g] = _.gsClass, v--) : h && _.sc.push(this);
                if (0 === v && n)for (u = ("com.greensock." + s).split("."), c = u.pop(), f = l(u.join("."))[c] = this.gsClass = n.apply(n, o), a && (i[c] = f, d = "undefined" != typeof module && module.exports, !d && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function () {
                    return f
                }) : s === e && d && (module.exports = f)), g = 0; this.sc.length > g; g++)this.sc[g].check()
            }, this.check(!0)
        }, d = t._gsDefine = function (t, e, i, s) {
            return new m(t, e, i, s)
        }, g = h._class = function (t, e, i) {
            return e = e || function () {
                }, d(t, [], function () {
                return e
            }, i), e
        };
        d.globals = i;
        var v = [0, 0, 1, 1], y = [], T = g("easing.Ease", function (t, e, i, s) {
            this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
        }, !0), x = T.map = {}, w = T.register = function (t, e, i, s) {
            for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)for (n = l[_], r = s ? g("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;)o = u[a], x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t
        };
        for (n = T.prototype, n._calcEnd = !1, n.getRatio = function (t) {
            if (this._func)return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;)n = s[r] + ",Power" + r, w(new T(null, null, 1, r), n, "easeOut", !0), w(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), w(new T(null, null, 3, r), n, "easeInOut");
        x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
        var b = g("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        n = b.prototype, n.addEventListener = function (t, e, i, s, r) {
            r = r || 0;
            var n, l, h = this._listeners[t], _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;)n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && r > n.pr && (_ = l + 1);
            h.splice(_, 0, {c: e, s: i, up: s, pr: r}), this !== a || o || a.wake()
        }, n.removeEventListener = function (t, e) {
            var i, s = this._listeners[t];
            if (s)for (i = s.length; --i > -1;)if (s[i].c === e)return s.splice(i, 1), void 0
        }, n.dispatchEvent = function (t) {
            var e, i, s, r = this._listeners[t];
            if (r)for (e = r.length, i = this._eventTarget; --e > -1;)s = r[e], s && (s.up ? s.c.call(s.s || i, {
                type: t,
                target: i
            }) : s.c.call(s.s || i))
        };
        var P = t.requestAnimationFrame, k = t.cancelAnimationFrame, S = Date.now || function () {
                return (new Date).getTime()
            }, R = S();
        for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;)P = t[s[r] + "RequestAnimationFrame"], k = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
        g("Ticker", function (t, e) {
            var i, s, r, n, l, h = this, u = S(), f = e !== !1 && P, p = 500, m = 33, d = "tick", g = function (t) {
                var e, a, o = S() - R;
                o > p && (u += o - m), R += o, h.time = (R - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && h.dispatchEvent(d)
            };
            b.call(h), h.time = h.frame = 0, h.tick = function () {
                g(!0)
            }, h.lagSmoothing = function (t, e) {
                p = t || 1 / _, m = Math.min(e, p, 0)
            }, h.sleep = function () {
                null != r && (f && k ? k(r) : clearTimeout(r), s = c, r = null, h === a && (o = !1))
            }, h.wake = function () {
                null !== r ? h.sleep() : h.frame > 10 && (R = S() - p + 5), s = 0 === i ? c : f && P ? P : function (t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === a && (o = !0), g(2)
            }, h.fps = function (t) {
                return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, h.wake(), void 0) : i
            }, h.useRAF = function (t) {
                return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f
            }, h.fps(t), setTimeout(function () {
                f && 5 > h.frame && h.useRAF(!1)
            }, 1500)
        }), n = h.Ticker.prototype = new h.events.EventDispatcher, n.constructor = h.Ticker;
        var O = g("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                o || a.wake();
                var i = this.vars.useFrames ? G : W;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = O.ticker = new h.Ticker, n = O.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
        var A = function () {
            o && S() - R > 2e3 && a.wake(), setTimeout(A, 2e3)
        };
        A(), n.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, n.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, n.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, n.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, n.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, n.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, n.render = function () {
        }, n.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, n.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, n._enabled = function (t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, n._kill = function () {
            return this._enabled(!1, !1)
        }, n.kill = function (t, e) {
            return this._kill(t, e), this
        }, n._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline;
            return this
        }, n._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        }, n._callback = function (t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
        }, n.eventCallback = function (t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, n.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, n.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, n.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, n.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, n.totalTime = function (t, e, i) {
            if (o || a.wake(), !arguments.length)return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration, r = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)for (; r._timeline;)r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (F.length && Q(), this.render(t, e, !1), F.length && Q())
            }
            return this
        }, n.progress = n.totalProgress = function (t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, n.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, n.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, n.timeScale = function (t) {
            if (!arguments.length)return this._timeScale;
            if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, n.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, n.paused = function (t) {
            if (!arguments.length)return this._paused;
            var e, i, s = this._timeline;
            return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var C = g("core.SimpleTimeline", function (t) {
            O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        n = C.prototype = new O, n.constructor = C, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function (t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)for (s = t._startTime; i && i._startTime > s;)i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, n._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, n.render = function (t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;)s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
        }, n.rawTime = function () {
            return o || a.wake(), this._totalTime
        };
        var D = g("TweenLite", function (e, i, s) {
            if (O.call(this, i, s), this.render = D.prototype.render, null == e)throw"Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : D.selector(e) || e;
            var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? V[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++)n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = $(n, this, !1), 1 === l && this._siblings[r].length > 1 && K(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1); else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
        }, !0), M = function (e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, z = function (t, e) {
            var i, s = {};
            for (i in t)q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (s[i] = t[i], delete t[i]);
            t.css = s
        };
        n = D.prototype = new O, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.18.0", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = 120, D.lagSmoothing = function (t, e) {
            a.lagSmoothing(t, e)
        }, D.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
        var F = [], I = {}, E = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = function (t) {
            for (var e, i = this._firstPT, s = 1e-6; i;)e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, L = function (t, e, i, s) {
            var r, n, a, o, l, h, _, u = [t, e], c = 0, f = "", p = 0;
            for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(E) || [], n = e.match(E) || [], s && (s._next = null, s.blob = 1, u._firstPT = s), l = n.length, o = 0; l > o; o++)_ = n[o], h = e.substr(c, e.indexOf(_, c) - c), f += h || !o ? h : ",", c += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), _ === r[o] || o >= r.length ? f += _ : (f && (u.push(f), f = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                _next: u._firstPT,
                t: u,
                p: u.length - 1,
                s: a,
                c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                f: 0,
                r: p && 4 > p
            }), c += _.length;
            return f += e.substr(c), f && u.push(f), u.setRatio = N, u
        }, X = function (t, e, i, s, r, n, a, o) {
            var l, h, _ = "get" === i ? t[e] : i, u = typeof t[e], c = "string" == typeof s && "=" === s.charAt(1), f = {
                t: t,
                p: e,
                s: _,
                f: "function" === u,
                pg: 0,
                n: r || e,
                r: n,
                pr: 0,
                c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - _ || 0
            };
            return "number" !== u && ("function" === u && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), f.s = _ = a ? t[h](a) : t[h]()), "string" == typeof _ && (a || isNaN(_)) ? (f.fp = a, l = L(_, s, o || D.defaultStringFilter, f), f = {
                t: l,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: r || e,
                pr: 0
            }) : c || (f.c = parseFloat(s) - parseFloat(_) || 0)), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
        }, B = D._internals = {
            isArray: f,
            isSelector: M,
            lazyTweens: F,
            blobDif: L
        }, j = D._plugins = {}, Y = B.tweenLookup = {}, U = 0, q = B.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1
        }, V = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, G = O._rootFramesTimeline = new C, W = O._rootTimeline = new C, Z = 30, Q = B.lazyRender = function () {
            var t, e = F.length;
            for (I = {}; --e > -1;)t = F[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            F.length = 0
        };
        W._startTime = a.time, G._startTime = a.frame, W._active = G._active = !0, setTimeout(Q, 1), O._updateRoot = D.render = function () {
            var t, e, i;
            if (F.length && Q(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), G.render((a.frame - G._startTime) * G._timeScale, !1, !1), F.length && Q(), a.frame >= Z) {
                Z = a.frame + (parseInt(D.autoSleep, 10) || 120);
                for (i in Y) {
                    for (e = Y[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete Y[i]
                }
                if (i = W._first, (!i || i._paused) && D.autoSleep && !G._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;)i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", O._updateRoot);
        var $ = function (t, e, i) {
            var s, r, n = t._gsTweenID;
            if (Y[n || (t._gsTweenID = n = "t" + U++)] || (Y[n] = {
                    target: t,
                    tweens: []
                }), e && (s = Y[n].tweens, s[r = s.length] = e, i))for (; --r > -1;)s[r] === e && s.splice(r, 1);
            return Y[n].tweens
        }, H = function (t, e, i, s) {
            var r, n, a = t.vars.onOverwrite;
            return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
        }, K = function (t, e, i, s, r) {
            var n, a, o, l;
            if (1 === s || s >= 4) {
                for (l = r.length, n = 0; l > n; n++)if ((o = r[n]) !== e)o._gc || o._kill(null, t, e) && (a = !0); else if (5 === s)break;
                return a
            }
            var h, u = e._startTime + _, c = [], f = 0, p = 0 === e._duration;
            for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, p), 0 === J(o, h, p) && (c[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (c[f++] = o)));
            for (n = f; --n > -1;)if (o = c[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                if (2 !== s && !H(o, e))continue;
                o._enabled(!1, !1) && (a = !0)
            }
            return a
        }, J = function (t, e, i) {
            for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                if (n += s._startTime, r *= s._timeScale, s._paused)return -100;
                s = s._timeline
            }
            return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
        };
        n._init = function () {
            var t, e, i, s, r, n = this.vars, a = this._overwrittenProps, o = this._duration, l = !!n.immediateRender, h = n.ease;
            if (n.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (s in n.startAt)r[s] = n.startAt[s];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)if (this._time > 0)this._startAt = null; else if (0 !== o)return
            } else if (n.runBackwards && 0 !== o)if (this._startAt)this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (l = !1), i = {};
                for (s in n)q[s] && "autoCSS" !== s || (i[s] = n[s]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                    if (0 === this._time)return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = h = h ? h instanceof T ? h : "function" == typeof h ? new T(h, n.easeParams) : x[h] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (t = this._targets.length; --t > -1;)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = n.onUpdate, this._initted = !0
        }, n._initProps = function (e, i, s, r) {
            var n, a, o, l, h, _;
            if (null == e)return !1;
            I[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (n in this.vars)if (_ = this.vars[n], q[n])_ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this)); else if (j[n] && (l = new j[n])._onInitTween(e, this.vars[n], this)) {
                for (this._firstPT = h = {
                    _next: this._firstPT,
                    t: l,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: n,
                    pg: 1,
                    pr: l._priority
                }, a = l._overwriteProps.length; --a > -1;)i[l._overwriteProps[a]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
            } else i[n] = X.call(this, e, n, "get", _, n, 0, null, this.vars.stringFilter);
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), o)
        }, n.render = function (t, e, i) {
            var s, r, n, a, o = this._time, l = this._duration, h = this._rawPrevTime;
            if (t >= l)this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _); else if (1e-7 > t)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l, c = this._easeType, f = this._easePower;
                (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = o, this._rawPrevTime = h, F.push(this), this._lazy = [t, e], void 0;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;)n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        }, n._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target))return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
            var s, r, n, a, o, l, h, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((f(e) || M(e)) && "number" != typeof e[0])for (s = e.length; --s > -1;)this._kill(t, e[s], i) && (l = !0); else {
                if (this._targets) {
                    for (s = this._targets.length; --s > -1;)if (e === this._targets[s]) {
                        o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target)return !1;
                    o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                        for (n in h)o[n] && (u || (u = []), u.push(n));
                        if ((u || !t) && !H(this, i, e, u))return !1
                    }
                    for (n in h)(a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, n.invalidate = function () {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
        }, n._enabled = function (t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)for (i = s.length; --i > -1;)this._siblings[i] = $(s[i], this, !0); else this._siblings = $(this.target, this, !0)
            }
            return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, D.to = function (t, e, i) {
            return new D(t, e, i)
        }, D.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
        }, D.fromTo = function (t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
        }, D.delayedCall = function (t, e, i, s, r) {
            return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, D.set = function (t, e) {
            return new D(t, 0, e)
        }, D.getTweensOf = function (t, e) {
            if (null == t)return [];
            t = "string" != typeof t ? t : D.selector(t) || t;
            var i, s, r, n;
            if ((f(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;)s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;)for (n = s[i], r = i; --r > -1;)n === s[r] && s.splice(i, 1)
            } else for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;)s[r]._kill(i, t)
        };
        var te = g("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = te.prototype
        }, !0);
        if (n = te.prototype, te.version = "1.18.0", te.API = 2, n._firstPT = null, n._addTween = X, n.setRatio = N, n._kill = function (t) {
                var e, i = this._overwriteProps, s = this._firstPT;
                if (null != t[this._propName])this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1);
                for (; s;)null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, n._roundProps = function (t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, D._onPluginEvent = function (t, e) {
                var i, s, r, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = r; s && s.pr > o.pr;)s = s._next;
                        (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;)o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, te.activate = function (t) {
                for (var e = t.length; --e > -1;)t[e].API === te.API && (j[(new t[e])._propName] = t[e]);
                return !0
            }, d.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API))throw"illegal plugin definition.";
                var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                    te.call(this, i, s), this._overwriteProps = r || []
                }, t.global === !0), o = a.prototype = new te(i);
                o.constructor = a, a.API = t.API;
                for (e in n)"function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version, te.activate([a]), a
            }, s = t._gsQueue) {
            for (r = 0; s.length > r; r++)s[r]();
            for (n in p)p[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
        }
        o = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

/*!
 * VERSION: 1.7.5
 * DATE: 2015-02-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t = document.documentElement, e = window, i = function (i, r) {
        var s = "x" === r ? "Width" : "Height", n = "scroll" + s, a = "client" + s, o = document.body;
        return i === e || i === t || i === o ? Math.max(t[n], o[n]) - (e["inner" + s] || t[a] || o[a]) : i[n] - i["offset" + s]
    }, r = _gsScope._gsDefine.plugin({
        propName: "scrollTo", API: 2, version: "1.7.5", init: function (t, r, s) {
            return this._wdw = t === e, this._target = t, this._tween = s, "object" != typeof r && (r = {y: r}), this.vars = r, this._autoKill = r.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != r.x ? (this._addTween(this, "x", this.x, "max" === r.x ? i(t, "x") : r.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != r.y ? (this._addTween(this, "y", this.y, "max" === r.y ? i(t, "y") : r.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
        }, set: function (t) {
            this._super.setRatio.call(this, t);
            var r = this._wdw || !this.skipX ? this.getX() : this.xPrev, s = this._wdw || !this.skipY ? this.getY() : this.yPrev, n = s - this.yPrev, a = r - this.xPrev;
            this._autoKill && (!this.skipX && (a > 7 || -7 > a) && i(this._target, "x") > r && (this.skipX = !0), !this.skipY && (n > 7 || -7 > n) && i(this._target, "y") > s && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? r : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
        }
    }), s = r.prototype;
    r.max = i, s.getX = function () {
        return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, s.getY = function () {
        return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, s._kill = function (t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();