(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
    'use strict';
    var aa = "-t-k0-und", ba = "Android", ca = "Edge", da = "IFRAME", m = "INPUT", ea = "Invalid event type", fa = "Symbol.dispose", ha = "TEXTAREA", ia = "bg-t-k0-qwerty", ka = "character", la = "chr-t-und-latn-k0-und", ma = "cs-t-k0-qwertz", na = "en-t-k0-dvorak", n = "function", oa = "gu-t-und-latn-k0-qwerty", pa = "hi-t-k0-qwerty", qa = "hu-t-k0-101key", ra = "hy-hyr-t-k0-und", sa = "hy-hyt-t-k0-und", ta = "i18n.input.chext.XDomainPlugin", ua = "iPad", va = "iPod", wa = "insertText", xa = "ja-hira-t-i0-und", ya = "ja-t-ja-hira-i0-und", za = "ka-t-k0-legacy", p = "keydown", t = "keypress", u = "keyup", v = "latn_002", w = "number", y = "object", Aa = "pa-guru-t-k0-und", Ba = "pa-guru-t-und-latn-k0-und", Ca = "ro-t-k0-extended", Da = "ro-t-k0-legacy", Ea = "ru-t-k0-aatseel", Fa = "ru-t-k0-qwerty", Ga = "ru-t-k0-yazhert", Ha = "sk-t-k0-qwerty", z = "string", Ia = "ta-t-k0-itrans", Ja = "ta-t-k0-typewriter", Ka = "textInput", La = "th-t-k0-pattajoti", Ma = "tr-t-k0-legacy", Na = "uk-t-k0-101key", Oa = "und-ethi-t-k0-und", A = "us_intl", Pa = "uz-cyrl-t-k0-legacy", Qa = "uz-cyrl-t-k0-und", Ra = "vi-t-k0-legacy", Sa = "yue-hant-t-i0-und", Ta = "zh-hant-t-i0-pinyin", Ua = "zh-hant-t-i0-und", Va = "zh-t-i0-pinyin", Wa = "zh-t-i0-wubi-1986", B, Xa = function(a) {
        a = [y == typeof globalThis && globalThis, a, y == typeof window && window, y == typeof self && self, y == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }, $a = function(a, b) {
        if (b)
            a: {
                var c = Ya;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && b != null && Za(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }, ab = function(a) {
        var b = typeof a;
        b = b != y ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return b == "array" || b == y && typeof a.length == w
    }, C = function(a) {
        var b = typeof a;
        return b == y && a != null || b == n
    }, D = function(a) {
        return Object.prototype.hasOwnProperty.call(a, bb) && a[bb] || (a[bb] = ++cb)
    }, db = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, eb = function(a, b, c) {
        if (!a)
            throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }, fb = function(a, b, c) {
        fb = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? db : eb;
        return fb.apply(null, arguments)
    }, E = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.I = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Mi = function(d, e, f) {
            for (var h = Array(arguments.length - 2), g = 2; g < arguments.length; g++)
                h[g - 2] = arguments[g];
            return b.prototype[e].apply(d, h)
        }
    }, gb = function(a) {
        return a[a.length - 1]
    }, F = function(a, b) {
        return hb(a, b) >= 0
    }, ib = function(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }, jb = function(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (ab(d)) {
                const e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (let h = 0; h < f; h++)
                    a[e + h] = d[h]
            } else
                a.push(d)
        }
    }, kb = function(a, b) {
        const c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) == c
    }, mb = function() {
        let a = null;
        if (!lb)
            return a;
        try {
            const b = c => c;
            a = lb.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    }, G = function(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }, nb = function(a, b) {
        this.width = a;
        this.height = b
    }, ob = function(a, b, c) {
        for (const d in a)
            b.call(c, a[d], d, a)
    }, qb = function(a) {
        var b = pb;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }, rb = function(a) {
        const b = {};
        for (const c in a)
            b[c] = a[c];
        return b
    }, sb = function(a) {
        const b = {};
        for (const c in a)
            b[a[c]] = c;
        return b
    }, ub = function(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (let f = 0; f < tb.length; f++)
                c = tb[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }, I = function() {
        var a = H.navigator;
        return a && (a = a.userAgent) ? a : ""
    }, wb = function(a) {
        return vb ? J ? J.brands.some( ({brand: b}) => b && b.indexOf(a) != -1) : !1 : !1
    }, K = function(a) {
        return I().indexOf(a) != -1
    }, L = function() {
        return vb ? !!J && J.brands.length > 0 : !1
    }, xb = function() {
        return L() ? !1 : K("Opera")
    }, yb = function() {
        return L() ? !1 : K("Trident") || K("MSIE")
    }, zb = function() {
        return K("Firefox") || K("FxiOS")
    }, Ab = function() {
        return L() ? wb("Chromium") : (K("Chrome") || K("CriOS")) && !(L() ? 0 : K(ca)) || K("Silk")
    }, Bb = function() {
        var a = I();
        if (yb()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1])
                a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a),
                    c[1] == "7.0")
                        if (a && a[1])
                            switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                            }
                        else
                            b = "7.0";
                    else
                        b = c[1];
                a = b
            }
        } else
            a = "";
        return a
    }, Cb = function() {
        if (L()) {
            var a = J.brands.find( ({brand: b}) => b === "Internet Explorer");
            if (!a || !a.version)
                return NaN;
            a = a.version.split(".")
        } else {
            a = Bb();
            if (a === "")
                return NaN;
            a = a.split(".")
        }
        return a.length === 0 ? NaN : Number(a[0])
    }, Db = function() {
        return vb ? !!J && !!J.platform : !1
    }, Eb = function() {
        return K("iPhone") && !K(va) && !K(ua)
    }, Fb = function() {
        return Db() ? J.platform === "macOS" : K("Macintosh")
    }, Gb = function() {
        var a = H.document;
        return a ? a.documentMode : void 0
    }, N = function(a) {
        return a ? new Hb(M(a)) : Ib || (Ib = new Hb)
    }, Kb = function(a, b) {
        ob(b, function(c, d) {
            d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : Jb.hasOwnProperty(d) ? a.setAttribute(Jb[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
        })
    }, Lb = function(a) {
        return a ? a.defaultView : window
    }, Nb = function(a, b, c) {
        return Mb(document, arguments)
    }, Mb = function(a, b) {
        var c = b[1]
          , d = Ob(a, String(b[0]));
        c && (typeof c === z ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : Kb(d, c));
        b.length > 2 && Pb(a, d, b);
        return d
    }, Pb = function(a, b, c) {
        function d(g) {
            g && b.appendChild(typeof g === z ? a.createTextNode(g) : g)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            if (!ab(f) || C(f) && f.nodeType > 0)
                d(f);
            else {
                a: {
                    if (f && typeof f.length == w) {
                        if (C(f)) {
                            var h = typeof f.item == n || typeof f.item == z;
                            break a
                        }
                        if (typeof f === n) {
                            h = typeof f.item == n;
                            break a
                        }
                    }
                    h = !1
                }
                Qb(h ? ib(f) : f, d)
            }
        }
    }, Ob = function(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }, Rb = function(a) {
        if (a.nodeType != 1)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case m:
        case da:
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }, Sb = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }, Tb = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && b.nodeType == 1)
            return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined")
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }, Wb = function(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
            var c = a.nodeType == 1
              , d = b.nodeType == 1;
            if (c && d)
                return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode
              , f = b.parentNode;
            return e == f ? Ub(a, b) : !c && Tb(e, b) ? -1 * Vb(a, b) : !d && Tb(f, a) ? Vb(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = M(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(H.Range.START_TO_END, a)
    }, Vb = function(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (; b.parentNode != c; )
            b = b.parentNode;
        return Ub(b, a)
    }, Ub = function(a, b) {
        for (; b = b.previousSibling; )
            if (b == a)
                return -1;
        return 1
    }, Xb = function(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (c == 1)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], h = arguments[b]; h; )
                f.unshift(h),
                h = h.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var g = 1; g < c; g++)
                if (h != d[g][b])
                    return f;
            f = h
        }
        return f
    }, M = function(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }, Zb = function(a) {
        var b = [];
        Yb(a, b, !1);
        return b.join("")
    }, Yb = function(a, b, c) {
        if (!(a.nodeName in $b))
            if (a.nodeType == 3)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ac)
                b.push(ac[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Yb(a, b, c),
                    a = a.nextSibling
    }, bc = function(a) {
        try {
            var b = a && a.activeElement;
            return b && b.nodeName ? b : null
        } catch (c) {
            return null
        }
    }, Hb = function(a) {
        this.g = a || H.document || document
    }, cc = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }, dc = function(a) {
        a && typeof a.dispose == n && a.dispose()
    }, O = function() {
        this.v = this.v;
        this.D = this.D
    }, P = function(a, b) {
        this.type = a;
        this.h = this.target = b;
        this.defaultPrevented = this.i = !1
    }, Q = function(a, b) {
        P.call(this, a ? a.type : "");
        this.relatedTarget = this.h = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.l = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        if (a) {
            var c = this.type = a.type
              , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.h = b;
            b = a.relatedTarget;
            b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
            this.relatedTarget = b;
            d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX,
            this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY,
            this.screenX = d.screenX || 0,
            this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX,
            this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY,
            this.screenX = a.screenX || 0,
            this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.charCode = a.charCode || (c == t ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.l = ec ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = a.pointerType;
            this.state = a.state;
            this.g = a;
            a.defaultPrevented && Q.I.j.call(this)
        }
    }, gc = function(a) {
        return !(!a || !a[fc])
    }, ic = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.C = e;
        this.key = ++hc;
        this.removed = this.P = !1
    }, jc = function(a) {
        a.removed = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.C = null
    }, kc = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    }, lc = function(a, b) {
        var c = b.type;
        if (c in a.g) {
            var d = a.g[c], e = hb(d, b), f;
            (f = e >= 0) && Array.prototype.splice.call(d, e, 1);
            f && (jc(b),
            a.g[c].length == 0 && (delete a.g[c],
            a.h--))
        }
    }, nc = function(a, b, c, d, e) {
        a = a.g[b.toString()];
        b = -1;
        a && (b = mc(a, c, d, e));
        return b > -1 ? a[b] : null
    }, mc = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.listener == b && f.capture == !!c && f.C == d)
                return e
        }
        return -1
    }, pc = function(a, b, c, d, e) {
        if (d && d.once)
            return oc(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                pc(a, b[f], c, d, e);
            return null
        }
        c = qc(c);
        return gc(a) ? a.listen(b, c, C(d) ? !!d.capture : !!d, e) : rc(a, b, c, !1, d, e)
    }, rc = function(a, b, c, d, e, f) {
        if (!b)
            throw Error(ea);
        var h = C(e) ? !!e.capture : !!e
          , g = sc(a);
        g || (a[tc] = g = new kc(a));
        c = g.add(b, c, d, h, f);
        if (c.proxy)
            return c;
        d = uc();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            vc || (e = h),
            e === void 0 && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(wc(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        xc++;
        return c
    }, uc = function() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        const b = yc;
        return a
    }, oc = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                oc(a, b[f], c, d, e);
            return null
        }
        c = qc(c);
        return gc(a) ? a.g.add(String(b), c, !0, C(d) ? !!d.capture : !!d, e) : rc(a, b, c, !0, d, e)
    }, zc = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                zc(a, b[f], c, d, e);
        else
            d = C(d) ? !!d.capture : !!d,
            c = qc(c),
            gc(a) ? a.g.remove(String(b), c, d, e) : a && (a = sc(a)) && (b = nc(a, b, c, d, e)) && Ac(b)
    }, Ac = function(a) {
        if (typeof a !== w && a && !a.removed) {
            var b = a.src;
            if (gc(b))
                lc(b.g, a);
            else {
                var c = a.type
                  , d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(wc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                xc--;
                (c = sc(b)) ? (lc(c, a),
                c.h == 0 && (c.src = null,
                b[tc] = null)) : jc(a)
            }
        }
    }, wc = function(a) {
        return a in Bc ? Bc[a] : Bc[a] = "on" + a
    }, yc = function(a, b) {
        if (a.removed)
            a = !0;
        else {
            b = new Q(b,this);
            var c = a.listener
              , d = a.C || a.src;
            a.P && Ac(a);
            a = c.call(d, b)
        }
        return a
    }, sc = function(a) {
        a = a[tc];
        return a instanceof kc ? a : null
    }, qc = function(a) {
        if (typeof a === n)
            return a;
        a[Cc] || (a[Cc] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Cc]
    }, R = function() {
        O.call(this);
        this.g = new kc(this);
        this.o = this;
        this.l = null
    }, Dc = function(a, b, c, d) {
        b = a.g.g[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.removed && h.capture == c) {
                var g = h.listener
                  , k = h.C || h.src;
                h.P && lc(a.g, h);
                e = g.call(k, d) !== !1 && e
            }
        }
        return e && !d.defaultPrevented
    }, Ec = function(a, b) {
        var c = M(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }, Fc = function(a, b) {
        return Ec(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }, Hc = function(a, b) {
        if (b instanceof G) {
            var c = b.x;
            b = b.y
        } else
            c = b,
            b = void 0;
        a.style.left = Gc(c);
        a.style.top = Gc(b)
    }, Ic = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }, Jc = function(a) {
        var b = M(a)
          , c = new G(0,0);
        if (a == (b ? M(b) : document).documentElement)
            return c;
        a = Ic(a);
        var d = N(b).g;
        b = d.scrollingElement ? d.scrollingElement : S || d.compatMode != "CSS1Compat" ? d.body || d.documentElement : d.documentElement;
        d = d.defaultView;
        b = new G(d.pageXOffset || b.scrollLeft,d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }, Kc = function(a) {
        if (a.nodeType == 1)
            return a = Ic(a),
            new G(a.left,a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new G(a.clientX,a.clientY)
    }, Gc = function(a) {
        typeof a == w && (a += "px");
        return a
    }, Mc = function(a) {
        var b = Lc;
        if (Fc(a, "display") != "none")
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }, Lc = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = S && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Ic(a),
        new nb(a.right - a.left,a.bottom - a.top)) : new nb(b,c)
    }, Nc = function(a) {
        return (a = a.exec(I())) ? a[1] : ""
    }, Rc = function(a) {
        if (!a)
            return null;
        if (a === "nacl_mozc_jp" || a === "nacl_mozc_us")
            a = ya;
        a.lastIndexOf("xkb", 0) != 0 && (qb(a) || (a = Oc(a)),
        a = a.replace(/_/g, "-"),
        qb(a) || (a = Oc(`${a}-und`)));
        return Pc[a] ? Pc[a] : qb(a) ? (Pc[a] = new Qc(a),
        Pc[a]) : null
    }, Oc = function(a) {
        if (Sc[a])
            return Sc[a];
        if (a === "vkd_iw")
            return "he-t-k0-und";
        if (a === "im_t13n_iw")
            return "he-t-i0-und";
        if (a === "tr-t-k0-lagacy")
            return Ma;
        const b = a.split("_");
        let c = "";
        a.lastIndexOf("im_t13n", 0) == 0 ? c = b[2] + "-t-i0-und" : a.lastIndexOf("vkd_", 0) == 0 && (b.length === 2 ? c = b[1] + aa : F(Tc, b[1]) ? c = b[2] === "inscript" ? b[1] + aa : b[1] + "-t-und-latn-k0-und" : (c = b[1] + "-t-k0-" + b[2],
        qb(c) || (c = b[1] + "-" + b[2] + aa)));
        return qb(c) ? c : a
    }, Vc = function(a) {
        return Uc || a.type !== "im" ? !1 : /^(zh|yue)/.test(a.code)
    }, Wc = function(a) {
        return typeof a.className == z ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }, Yc = function(a, b) {
        a = a.match(Xc);
        b = b.match(Xc);
        return a[3] == b[3] && a[1] == b[1] && a[4] == b[4]
    }, $c = function(a) {
        if (!a.tagName || a.readOnly)
            return !1;
        switch (a.tagName.toUpperCase()) {
        case ha:
            return !0;
        case m:
            return F("EMAIL NUMBER SEARCH TEL TEXT URL".split(" "), a.type.toUpperCase());
        case da:
            try {
                const b = Zc(a);
                return !!b && !!(b.designMode && b.designMode.toUpperCase() == "ON" || b.body && b.body.isContentEditable)
            } catch (b) {
                return !1
            }
        default:
            return !!a.isContentEditable
        }
    }, Zc = function(a) {
        const b = D(document)
          , c = D(a);
        let d = ad[b];
        d || (d = ad[b] = {});
        try {
            const e = window.location.href || "";
            if (!(c in d))
                if (a.src) {
                    const f = a.src.indexOf("//")
                      , h = f < 0 ? "N/A" : a.src.slice(0, f);
                    d[c] = h != "" && h != "http:" && h != "https:" || Yc(a.src, e)
                } else
                    d[c] = !0;
            return d[c] ? a.contentDocument || a.contentWindow.document : null
        } catch (e) {
            return d[c] = !1,
            null
        }
    }, bd = function(a) {
        a = a || document;
        const b = []
          , c = [];
        jb(b, (a || document).getElementsByTagName(da), (a || document).getElementsByTagName("FRAME"));
        b.forEach(d => {
            (d = Zc(d)) && c.push(d)
        }
        );
        return c
    }, T = function(a) {
        O.call(this);
        this.i = a;
        this.g = {}
    }, dd = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (cd[0] = c.toString()),
        c = cd);
        for (var h = 0; h < c.length; h++) {
            var g = pc(b, c[h], d || a.handleEvent, e || !1, f || a.i || a);
            if (!g)
                break;
            a.g[g.key] = g
        }
        return a
    }, ed = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var h = 0; h < c.length; h++)
                ed(a, b, c[h], d, e, f);
        else
            d = d || a.handleEvent,
            e = C(e) ? !!e.capture : !!e,
            f = f || a.i || a,
            d = qc(d),
            e = !!e,
            c = gc(b) ? nc(b.g, String(c), d, e, f) : b ? (b = sc(b)) ? nc(b, c, d, e, f) : null : null,
            c && (Ac(c),
            delete a.g[c.key])
    }, fd = function(a, b) {
        if (typeof a !== n)
            if (a && typeof a.handleEvent == n)
                a = fb(a.handleEvent, a);
            else
                throw Error("Invalid listener argument");
        Number(b) > 2147483647 || H.setTimeout(a, b || 0)
    }, hd = function(a, b) {
        const c = U ? "focusin" : "focus"
          , d = U ? "focusout" : "blur";
        (ab(b) ? b : [b]).forEach(function(e) {
            const f = D(e);
            this.i[f] || (this.i[f] = !0,
            e = S ? Lb(e) : e,
            this.j.listen(e, c, this.u, gd),
            this.j.listen(e, d, this.B, gd))
        }, a)
    }, id = function(a, b, c) {
        if (c != a.m) {
            a.m = c;
            b = new Q(b.g);
            b.target = c;
            b.type = "aec";
            var d;
            if (c = a.l)
                for (d = []; c; c = c.l)
                    d.push(c);
            a = a.o;
            c = b.type || b;
            if (typeof b === z)
                b = new P(b,a);
            else if (b instanceof P)
                b.target = b.target || a;
            else {
                var e = b;
                b = new P(c,a);
                ub(b, e)
            }
            e = !0;
            if (d)
                for (var f = d.length - 1; !b.i && f >= 0; f--) {
                    var h = b.h = d[f];
                    e = Dc(h, c, !0, b) && e
                }
            b.i || (h = b.h = a,
            e = Dc(h, c, !0, b) && e,
            b.i || (e = Dc(h, c, !1, b) && e));
            if (d)
                for (f = 0; !b.i && f < d.length; f++)
                    h = b.h = d[f],
                    e = Dc(h, c, !1, b) && e
        }
    }, kd = function(a, b, c) {
        if (a.i) {
            var d = jd;
            if (d != "kix" && d != "punch" && d != "trix" || !U)
                d = N(b),
                bd(d.g).forEach(function(f) {
                    try {
                        hd(this, f)
                    } catch (h) {}
                }, a);
            if (b = bc(b)) {
                d = b;
                for (var e = b.tagName; e && (e == da || e == "FRAME") && (!b.src || Yc(b.src, window.location.href)); ) {
                    d = b.contentDocument || b.contentWindow.document;
                    if (!d)
                        break;
                    hd(a, d);
                    e = bc(d);
                    if (!e)
                        break;
                    d = b;
                    b = e;
                    if ((e = b.tagName) && e.toUpperCase() == "BODY") {
                        b = d;
                        break
                    }
                }
                id(a, c, b)
            }
        }
    }, ld = function() {}, nd = function(a) {
        if (a instanceof ld)
            return a;
        if (typeof a.L == n)
            return a.L(!1);
        if (ab(a)) {
            let b = 0;
            const c = new ld;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        return md;
                    if (b in a)
                        return {
                            value: a[b++],
                            done: !1
                        };
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }, V = function(a, b, c, d, e) {
        this.v = !!b;
        this.node = null;
        this.l = 0;
        this.u = !1;
        this.B = !c;
        a && od(this, a, d);
        this.o = e != void 0 ? e : this.l || 0;
        this.v && (this.o *= -1)
    }, od = function(a, b, c, d) {
        if (a.node = b)
            a.l = typeof c === w ? c : a.node.nodeType != 1 ? 0 : a.v ? -1 : 1;
        typeof d === w && (a.o = d)
    }, pd = function() {}, qd = function(a) {
        for (var b = [], c = 0, d = a.M(); c < d; c++)
            b.push(a.H(c));
        return b
    }, rd = function(a, b) {
        V.call(this, a, b, !0)
    }, W = function(a, b, c, d, e) {
        this.g = this.h = null;
        this.i = this.j = 0;
        this.m = !!e;
        if (a) {
            this.h = a;
            this.j = b;
            this.g = c;
            this.i = d;
            if (a.nodeType == 1 && a.tagName != "BR")
                if (a = a.childNodes,
                b = a[b])
                    this.h = b,
                    this.j = 0;
                else {
                    a.length && (this.h = gb(a));
                    var f = !0
                }
            c.nodeType == 1 && ((this.g = c.childNodes[d]) ? this.i = 0 : this.g = c)
        }
        V.call(this, this.m ? this.g : this.h, this.m, !0);
        f && this.next()
    }, sd = function() {}, td = function(a, b) {
        a = a.g.getClientRects();
        return a.length ? (a = b ? a[0] : gb(a),
        new G(b ? a.left : a.right,b ? a.top : a.bottom)) : null
    }, X = function(a) {
        this.g = a
    }, ud = function(a, b, c, d) {
        var e = M(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    }, vd = function(a) {
        this.g = a
    }, wd = function(a) {
        this.g = a
    }, yd = function(a) {
        return S ? new wd(a) : xd ? new vd(a) : new X(a)
    }, zd = function() {
        this.i = this.g = this.j = this.h = this.l = null;
        this.m = !1
    }, Ad = function(a, b) {
        var c = new zd;
        c.l = a;
        c.m = !!b;
        return c
    }, Y = function(a) {
        var b;
        if (!(b = a.l)) {
            b = a.A();
            var c = a.G()
              , d = a.F()
              , e = a.J();
            b = S ? new wd(ud(b, c, d, e)) : xd ? new vd(ud(b, c, d, e)) : new X(ud(b, c, d, e));
            b = a.l = b
        }
        return b
    }, Bd = function() {}, Cd = function() {
        this.g = [];
        this.i = [];
        this.j = this.h = null
    }, Ed = function(a) {
        a.h || (a.h = qd(a),
        a.h.sort(function(b, c) {
            var d = b.A();
            b = b.G();
            var e = c.A();
            c = c.G();
            return d == e && b == c ? 0 : Dd(d, b, e, c) ? 1 : -1
        }));
        return a.h
    }, Fd = function(a) {
        this.g = null;
        this.h = 0;
        a && (this.g = Ed(a).map(function(b) {
            return nd(b)
        }));
        V.call(this, a ? this.s() : null, !1, !0)
    }, Gd = function(a) {
        var b = !1;
        if (a.createRange)
            try {
                var c = a.createRange()
            } catch (e) {
                return null
            }
        else if (a.rangeCount) {
            if (a.rangeCount > 1) {
                c = new Cd;
                b = 0;
                for (var d = a.rangeCount; b < d; b++)
                    c.g.push(a.getRangeAt(b));
                return c
            }
            c = a.getRangeAt(0);
            b = Dd(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else
            return null;
        return Ad(yd(c), b)
    }, Dd = function(a, b, c, d) {
        if (a == c)
            return d < b;
        var e;
        if (a.nodeType == 1 && b)
            if (e = a.childNodes[b])
                a = e,
                b = 0;
            else if (Tb(a, c))
                return !0;
        if (c.nodeType == 1 && d)
            if (e = c.childNodes[d])
                c = e,
                d = 0;
            else if (Tb(c, a))
                return !1;
        return (Wb(a, c) || b - d) > 0
    }, Id = function(a, b) {
        return b ? Hd(a.A(), a.G()) : Hd(a.F(), a.J())
    }, Md = function(a) {
        var b = a.aa()
          , c = Jd(Id(a, !b))
          , d = Kd(c)
          , e = c.node.previousSibling;
        c.node.nodeType == 3 && (c.node = null);
        var f = Jd(Id(a, b))
          , h = Kd(f)
          , g = f.node.previousSibling;
        f.node.nodeType == 3 && (f.node = null);
        return function() {
            !c.node && e && (c.node = e.nextSibling,
            c.node || (c = new Ld(e,e.length || e.childNodes.length)));
            !f.node && g && (f.node = g.nextSibling,
            f.node || (f = new Ld(g,g.length || g.childNodes.length)));
            var k = c.node || d.node.firstChild || d.node
              , l = c.offset
              , x = f.node || h.node.firstChild || h.node
              , r = f.offset
              , q = new zd;
            q.m = Dd(k, l, x, r);
            if (C(k) && k.nodeType == 1 && !Rb(k)) {
                var ja = k.parentNode;
                l = Array.prototype.indexOf.call(ja.childNodes, k);
                k = ja
            }
            C(x) && x.nodeType == 1 && !Rb(x) && (ja = x.parentNode,
            r = Array.prototype.indexOf.call(ja.childNodes, x),
            x = ja);
            q.m ? (q.h = x,
            q.j = r,
            q.g = k,
            q.i = l) : (q.h = k,
            q.j = l,
            q.g = x,
            q.i = r);
            return q
        }
    }, Jd = function(a) {
        var b;
        if (a.node.nodeType == 3)
            for (b = a.node.previousSibling; b && b.nodeType == 3; b = b.previousSibling)
                a.offset += b.length || b.childNodes.length;
        else
            b = a.node.previousSibling;
        var c = a.node.parentNode;
        a.node = b ? b.nextSibling : c.firstChild;
        return a
    }, Ld = function(a, b) {
        this.node = a;
        this.offset = b
    }, Kd = function(a) {
        var b = a.node.parentNode;
        return new Ld(b,Array.prototype.indexOf.call(b.childNodes, a.node))
    }, Hd = function(a, b) {
        for (; a.nodeType == 1; ) {
            var c = a.childNodes[b];
            if (c || a.lastChild)
                c ? (a = c,
                b = 0) : (a = a.lastChild,
                b = a.length || a.childNodes.length);
            else
                break
        }
        return new Ld(a,b)
    }, Nd = function(a) {
        const b = a.getBoundingClientRect();
        if (U) {
            const c = Kc(a);
            a = Mc(a);
            b.left = c.x;
            b.right = c.x + a.width;
            b.top = c.y;
            b.bottom = c.y + a.height
        }
        return b
    }, Od = function(a) {
        var b = N(a);
        let c = 0;
        if (Cb() <= 8) {
            var d = b.g.selection.createRange();
            if (d)
                try {
                    const g = a.createTextRange()
                      , k = g.duplicate();
                    g.moveToBookmark(d.getBookmark());
                    k.setEndPoint("EndToStart", g);
                    c = k.text.length
                } catch (g) {}
        } else
            c = a.selectionStart;
        d = `_h#${D(a)}`;
        let e = typeof d === z ? b.g.getElementById(d) : d;
        e ? cc(e) : e = b.fa("PRE", {
            id: d
        });
        e.parentNode || b.g.body.appendChild(e);
        let f = [];
        Qb(a.value, (g, k, l) => {
            f.push(g == " " && k + 1 != l.length && l[k + 1] == " " ? "\u00a0" : g)
        }
        );
        f = f.join("");
        b.V(e, b.g.createTextNode(String(f.substring(0, c))));
        d = Ob(b.g, "SPAN");
        d.appendChild(b.g.createTextNode("\u200b"));
        b.V(e, d);
        b.V(e, b.g.createTextNode(String(f.substring(c) + " ")));
        b = a.classList ? a.classList : Wc(a).match(/\S+/g) || [];
        Array.prototype.forEach.call(b, g => {
            var k = e;
            if (k.classList)
                k.classList.add(g);
            else if (k.classList ? !k.classList.contains(g) : !F(k.classList ? k.classList : Wc(k).match(/\S+/g) || [], g)) {
                var l = Wc(k);
                g = l + (l.length > 0 ? " " + g : g);
                typeof k.className == z ? k.className = g : k.setAttribute && k.setAttribute("class", g)
            }
        }
        );
        let h = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
        "font-family font-size font-weight font-style text-transform text-decoration letter-spacing word-spacing line-height text-align vertical-align direction width height margin-top margin-right margin-bottom margin-left padding-top padding-right padding-bottom padding-left border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style overflow-x overflow-y".split(" ").forEach(g => {
            try {
                var k;
                (k = Ec(a, g) || (a.currentStyle ? a.currentStyle[g] : null) || a.style[g]) && (h += `${g}:${k};`)
            } catch (l) {}
        }
        );
        e.style.cssText = h;
        b = Fc(a, "overflowX");
        e.style.overflowX = b && b != "visible" ? b : "auto";
        b = Fc(a, "overflowY");
        e.style.overflowY = b && b != "visible" ? b : "auto";
        e.scrollTop = a.scrollTop;
        e.scrollLeft = a.scrollLeft;
        Hc(e, Jc(a));
        b = Nd(d);
        return a.tagName.toUpperCase() == m ? new G(b.left,Math.ceil(Kc(a).y + Mc(a).height)) : new G(b.left,Math.ceil(b.bottom))
    }, Pd = function() {}, Qd = function(a, b) {
        this.g = a instanceof G ? a : new G(a,b)
    }, Rd = function(a) {
        switch (a.type) {
        case p:
        case t:
            if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey && a.keyCode == 32)
                return !0;
            break;
        case "click":
            if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey)
                return !0;
            break;
        case "key":
            if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey || a.l)
                return !0
        }
        return !1
    }, Sd = function(a) {
        a instanceof Q && (a = a.g);
        if (a.getAttribute) {
            if (a.getAttribute("isFake"))
                return !0
        } else if (a.isFake)
            return !0;
        return !1
    }, Td = function(a, b, c=0, d) {
        const e = N(a).g.defaultView
          , f = e.document
          , h = [p, t, u];
        try {
            let g;
            if (f.createEvent) {
                if (jd == "chext" && [Ka, "compositionstart", "compositionupdate", "compositionend"].includes(b))
                    b === Ka ? (g = f.createEvent("CustomEvent"),
                    g.initCustomEvent(b, !0, !0, d)) : g = new CompositionEvent(b,{
                        data: d ? d.data : ""
                    });
                else if (g = f.createEvent("Events"),
                g.initEvent(b, !0, !0),
                g.view = e,
                g.isFake = !0,
                g.charCode = 0,
                g.keyCode = c,
                d)
                    for (let k in d)
                        g[k] = d[k];
                a.dispatchEvent(g)
            } else if (F(h, b) && f.createEventObject && a.fireEvent) {
                g = f.createEventObject();
                g.bubbles = !0;
                g.cancelable = !0;
                g.view = e;
                g.ctrlKey = !1;
                g.altKey = !1;
                g.shiftKey = !0;
                g.metaKey = !1;
                g.keyCode = c;
                if (g.setAttribute && (g.setAttribute("isFake", !0),
                d))
                    for (let k in d)
                        g.setAttribute(k, d[k]);
                a.fireEvent(`on${b}`, g)
            }
        } catch (g) {}
    }, Ud = function(a, b, c) {
        switch (b) {
        case 1:
        case 2:
        case 4:
        case 8:
            Td(a, p, 229);
            break;
        case 3:
        case 5:
        case 6:
        case 9:
            const d = {};
            c && (d.data = c);
            fd( () => {
                Td(a, Ka, void 0, d);
                Td(a, "input");
                Td(a, u)
            }
            )
        }
    }, Z = function(a) {
        const b = a.h || (a.j ? (a.i.contentDocument || a.i.contentWindow.document || a.i.document).body : a.i);
        a.h != b && (a.h = b,
        a.g = N(b));
        return b
    }, Wd = function(a, b) {
        if (b < 0) {
            b = -b;
            var c = Z(a);
            if (c) {
                var d = ""
                  , e = a.g.g;
                e.selection && !Vd ? (a = e.selection.createRange(),
                a.collapse(!0),
                a.moveEnd("word", -1),
                d = a.text.length > b ? a.text.slice(0, b) : a.text) : c.selectionEnd ? d = c.value.slice(c.selectionStart, Math.min(c.value.length, c.selectionStart + b)) : (e = a.g.g.defaultView.getSelection(),
                e.rangeCount > 0 && (a = e.getRangeAt(0).endContainer,
                e = e.getRangeAt(0).endOffset,
                a.nodeType == 3 && (d = a.nodeValue.slice(e, Math.min(a.nodeValue.length, e + b)))));
                a = d
            } else
                a = "";
            return a
        }
        e = Z(a);
        if (!e)
            return "";
        d = "";
        c = a.g.g;
        c.selection && !Vd ? (a = c.selection.createRange(),
        a.collapse(!0),
        a.moveStart("word", -1),
        d = a.text.length > b ? a.text.slice(-b) : a.text) : e.selectionStart ? d = e.value.slice(Math.max(0, e.selectionStart - b), e.selectionStart) : (e = a.g.g.defaultView.getSelection(),
        e.rangeCount > 0 && (a = e.getRangeAt(0).startContainer,
        e = e.getRangeAt(0).startOffset,
        a.nodeType == 3 && (d = a.nodeValue.slice(Math.max(0, e - b), e))));
        return d
    }, Xd = function(a, b, c) {
        if (c <= 0)
            return a;
        const d = b.toString().length;
        if (b.anchorNode.nodeType == 3 && b.rangeCount > 0) {
            const e = b.getRangeAt(0);
            let f;
            const h = b.anchorOffset;
            for (f = Math.min(c, h); h >= f; ) {
                e.setStart(b.anchorNode, h - f);
                b.addRange(e);
                if (b.toString().length - d == f)
                    break;
                f++
            }
            if (f > c)
                return b.toString().slice(0, f - c) + a
        }
        return a
    }, Yd = function(a) {
        const b = Z(a);
        b && (a.j ? a.g.g.defaultView.focus() : b.focus())
    }, de = function() {
        const a = D(Zd);
        $d[a] || ($d[a] = new ae);
        be = $d[a];
        ce(be)
    }, fe = function() {
        if (be)
            return be;
        ee.listen("a", de, !1, void 0);
        de();
        return be
    }, ce = function(a) {
        a.g = bd(a.m.g);
        for (let b in a.i)
            ge(a, b, a.l);
        ge(a, t, a.s)
    }, ie = function(a, b, c, d, e) {
        const f = b.ownerDocument;
        let h = !1;
        a.g = he(a.g, k => {
            try {
                k == f && (h = !0)
            } catch (l) {
                return !1
            }
            return !0
        }
        );
        if (f && f != a.m.g && !h) {
            a.g.push(f);
            try {
                dd(a.j, f, c, a.l, !0, a)
            } catch (k) {}
        }
        if (c)
            if (Array.isArray(c))
                for (var g = 0; g < c.length; g++)
                    ie(a, b, c[g], d, e);
            else {
                g = a.i[c];
                g || (g = {},
                a.i[c] = g,
                ge(a, c, a.l));
                a = g[D(b)];
                a || (a = [],
                g[D(b)] = a);
                b = null;
                for (c = 0; c < a.length; c++)
                    if (b = a[c],
                    b.R(d, e))
                        return;
                b = new je(d,e);
                a.push(b)
            }
        else
            throw Error(ea);
    }, ke = function(a, b, c, d, e) {
        if (c)
            if (Array.isArray(c))
                for (var f = 0; f < c.length; f++)
                    ke(a, b, c[f], d, e);
            else {
                if (f = a.i[c]) {
                    const h = f[D(b)];
                    if (h) {
                        for (let g = 0; g < h.length; g++)
                            if (h[g].R(d, e)) {
                                Array.prototype.splice.call(h, g, 1);
                                break
                            }
                        h.length == 0 && delete f[D(b)]
                    }
                    a: {
                        for (const g in f) {
                            b = !1;
                            break a
                        }
                        b = !0
                    }
                    b && (delete a.i[c],
                    le(a, c, a.l))
                }
            }
        else
            throw Error(ea);
    }, ge = function(a, b, c) {
        dd(a.j, a.m.g, b, c, !0, a);
        Qb(a.g, function(d) {
            try {
                dd(this.j, d, b, c, !0, this)
            } catch (e) {}
        }, a)
    }, le = function(a, b, c) {
        ed(a.j, a.m.g, b, c, !0, a);
        Qb(a.g, function(d) {
            try {
                ed(this.j, d, b, c, !0, this)
            } catch (e) {}
        }, a)
    }, me = function(a) {
        a.o && (clearTimeout(a.o),
        a.o = 0)
    }, pe = function(a) {
        let b;
        try {
            b = chrome.runtime.connect(void 0, {
                name: a.ca
            })
        } catch (e) {
            throw console.error("connect error", e),
            a.dispose(),
            e;
        }
        const c = e => {
            if (a.g && (e.getCursorPosition && ne(a),
            e.setFocus && Yd(a.g),
            e.commitText && (Z(a.g),
            a.g.commitText(e.commitText[0], e.commitText[1]),
            oe(a),
            ne(a)),
            e.inputMode && (e.inputMode[0] ? a.i = Rc(e.inputMode[0]) : a.i = null,
            a.j = e.inputMode[1]),
            e.offstage && (a.u = !1),
            e.onstage && (a.u = !0),
            e = e.sendInputEvents)) {
                const f = Z(a.g);
                f && Ud(f, e[0], e[1])
            }
        }
        ;
        a.l = b;
        b.onMessage.addListener(c);
        const d = () => {
            a.l = null;
            b.onMessage.removeListener(c);
            b.onDisconnect.removeListener(d);
            console.log("disconnect", a.ca)
        }
        ;
        b.onDisconnect.addListener(d)
    }, qe = function(a) {
        a.l || pe(a);
        return a.l
    }, ne = function(a) {
        if (a.g) {
            var b = Z(a.g);
            if (b) {
                var c = N(b)
                  , d = b.nodeName.toUpperCase();
                if (Number(re) >= 8 && !(Number(re) >= 9) && b.tagName.toUpperCase() == ha) {
                    const q = c.g.selection.createRange();
                    var e = q.getBoundingClientRect();
                    var f = d = 0;
                    try {
                        var h = Fc(b, "fontSize")
                          , g = h.match(se);
                        var k = g && g[0] || null;
                        if (h && "px" == k)
                            var l = parseInt(h, 10);
                        else {
                            var x = Nb("SPAN", {
                                style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
                            });
                            b.appendChild(x);
                            h = x.offsetHeight;
                            Sb(x);
                            l = h
                        }
                        f = l + 2
                    } catch (ja) {
                        f = 16
                    }
                    if ("rtl" == Fc(b, "direction")) {
                        for (l = q.duplicate(); l.boundingHeight <= f && l.htmlText == l.text && (d = q.boundingLeft - l.boundingLeft,
                        l.moveStart(ka, -1) != 0); )
                            ;
                        l = Jc(b).x;
                        l = Math.max(e.left - d, l)
                    } else
                        l = e.left;
                    e = new G(l,e.top + f)
                } else if (d == ha || d == m)
                    e = Od(b);
                else
                    b: {
                        l = null;
                        if (!l)
                            l = (l = (c.g.defaultView || window).getSelection()) && Gd(l);
                        else if (l.A().nodeType == 3 && l.F().nodeType == 3 && (h = td(Y(l), !0),
                        k = td(Y(l), !1),
                        h && k)) {
                            e = new G(h.x,k.y);
                            break b
                        }
                        if (l) {
                            g = Ob(c.g, "SPAN");
                            g.appendChild(c.g.createTextNode("\u200b"));
                            Cb() <= 8 ? (k = null,
                            l.K() || (k = l.X(),
                            l.collapse(!1)),
                            h = l,
                            h.K() || h.Z(),
                            g = h.Y(g, !0),
                            k && (l.collapse(!0),
                            l.S().moveStart(ka, 0 - k.length),
                            l.select())) : l.Y(g, !1);
                            h = Nd(g);
                            k = g.parentNode;
                            c.ea(g);
                            if (k) {
                                if (l)
                                    c: {
                                        e = Md(l),
                                        f = l.W(),
                                        f = f.nodeType == 1 ? f : f.parentNode;
                                        for (l = 0; f; ) {
                                            g = f && f.nodeName;
                                            if (f && ((f.nodeType != 1 ? null : Ec(f, "display")) == "block" || g == "TD" || g == "TABLE" || g == "LI"))
                                                break c;
                                            f = f.parentNode;
                                            l++
                                        }
                                        f = null
                                    }
                                f ? Xb(f, k).normalize() : k && k.normalize();
                                e && e()
                            }
                            e = new G(h.left,h.bottom)
                        } else
                            e = new G(0,0)
                    }
                f = e.x;
                l = e.y;
                b = Nd(b);
                f = f > b.right ? b.right : f;
                f = f < b.left ? b.left : f;
                l = l > b.bottom ? b.bottom : l;
                l = l < b.top ? b.top : l;
                e.x = f;
                e.y = l;
                b = e;
                c = c.g.defaultView;
                try {
                    for (; c && c != te && c.frameElement; c = c.parent) {
                        var r = Kc(c.frameElement);
                        b.x += r.x;
                        b.y += r.y
                    }
                } catch (q) {}
                r = e;
                r = new Qd(r.x,r.y)
            } else
                r = null;
            r && qe(a).postMessage({
                cursorPos: [r.g.x, r.g.y]
            })
        }
    }, oe = function(a) {
        if (a.g) {
            var b = Wd(a.g, 20);
            qe(a).postMessage({
                text: [b]
            })
        }
    }, ue = function(a, b) {
        return b.keyCode !== 16 || b.type !== p && !a.O ? Vc(a.i) ? b.keyCode === 32 && b.shiftKey || b.keyCode === 190 && b.ctrlKey : !1 : !0
    }, ve = function(a) {
        return F([13, 9], a.keyCode) ? !0 : a.type === t ? !1 : F([8, 27, 37, 39, 38, 40, 34, 33, 46, 36, 35], a.keyCode)
    }, we = function(a, b) {
        switch (a.i.type) {
        case "vkd":
            return ve(b);
        case "hw":
            var c = [32, 13, 37, 39, 27, 8];
            return !a.u || !F(c, b.keyCode);
        case "im":
            return c = !1,
            /^(zh|yue)/.test(a.i.code) ? c = a.j.tsbc && !a.j.tlang : /^ja/.test(a.i.code) || (c = !a.j.tlang),
            c || !a.u && ve(b);
        default:
            return !0
        }
    }, xe = function(a, b, c) {
        qe(a).postMessage({
            event: c
        });
        (!Rd(b) || ue(a, b)) && (b.type === p && ve(b) || b.type === t) && b.j()
    }, ze = function() {
        const a = (new Date).getTime();
        let b = H[ta];
        b && b.dispose();
        try {
            if (window.top != window && !window.parent || !window.parent.document || window.parent.document.domain != window.document.domain)
                H[ta] = new ye(a)
        } catch (c) {
            H[ta] = new ye(a)
        }
        console.log("Initialized chextloader at:", a)
    }, Za = typeof Object.defineProperties == n ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , Ya = Xa(this);
    $a(fa, function(a) {
        return a ? a : Symbol(fa)
    });
    $a("globalThis", function(a) {
        return a || Ya
    });
    var H = this || self
      , bb = "closure_uid_" + (Math.random() * 1E9 >>> 0)
      , cb = 0;
    var Ib;
    var hb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (typeof a === z)
            return typeof b !== z || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , Qb = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        const d = a.length
          , e = typeof a === z ? a.split("") : a;
        for (let f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , he = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    }
    : function(a, b) {
        const c = a.length
          , d = [];
        let e = 0;
        const f = typeof a === z ? a.split("") : a;
        for (let h = 0; h < c; h++)
            if (h in f) {
                const g = f[h];
                b.call(void 0, g, h, a) && (d[e++] = g)
            }
        return d
    }
      , Ae = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    }
    : function(a, b) {
        const c = a.length
          , d = typeof a === z ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    ;
    var lb = globalThis.trustedTypes, Be;
    var Ce = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
    ;
    G.prototype.R = function(a) {
        return a instanceof G && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    }
    ;
    G.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    G.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    G.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    nb.prototype.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    nb.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    nb.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    nb.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    var tb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var vb, De;
    a: {
        for (var Ee = ["CLOSURE_FLAGS"], Fe = H, Ge = 0; Ge < Ee.length; Ge++)
            if (Fe = Fe[Ee[Ge]],
            Fe == null) {
                De = null;
                break a
            }
        De = Fe
    }
    var He = De && De[610401301];
    vb = He != null ? He : !1;
    var J, Ie = H.navigator;
    J = Ie ? Ie.userAgentData || null : null;
    var Vd = xb(), U = yb(), Je = K(ca), xd = K("Gecko") && !(I().toLowerCase().indexOf("webkit") != -1 && !K(ca)) && !(K("Trident") || K("MSIE")) && !K(ca), S = I().toLowerCase().indexOf("webkit") != -1 && !K(ca), Uc = S && K("Mobile"), ec = Fb(), Ke = Db() ? J.platform === "Windows" : K("Windows"), Le = Db() ? J.platform === ba : K(ba), Me = Eb(), Ne = K(ua), Oe = K(va), Pe;
    a: {
        var Qe = ""
          , Re = function() {
            var a = I();
            if (xd)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Je)
                return /Edge\/([\d\.]+)/.exec(a);
            if (U)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (S)
                return /WebKit\/(\S+)/.exec(a);
            if (Vd)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Re && (Qe = Re ? Re[1] : "");
        if (U) {
            var Se = Gb();
            if (Se != null && Se > parseFloat(Qe)) {
                Pe = String(Se);
                break a
            }
        }
        Pe = Qe
    }
    var Te = Pe, Ue;
    if (H.document && U) {
        var Ve = Gb();
        Ue = Ve ? Ve : parseInt(Te, 10) || void 0
    } else
        Ue = void 0;
    var re = Ue;
    var Jb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }
      , $b = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , ac = {
        IMG: " ",
        BR: "\n"
    };
    B = Hb.prototype;
    B.setProperties = Kb;
    B.fa = function(a, b, c) {
        return Mb(this.g, arguments)
    }
    ;
    B.V = function(a, b) {
        a.appendChild(b)
    }
    ;
    B.ea = Sb;
    B.getChildren = function(a) {
        return a.children != void 0 ? a.children : Array.prototype.filter.call(a.childNodes, function(b) {
            return b.nodeType == 1
        })
    }
    ;
    B.contains = Tb;
    O.prototype.v = !1;
    O.prototype.dispose = function() {
        this.v || (this.v = !0,
        this.h())
    }
    ;
    O.prototype[Symbol.dispose] = function() {
        this.dispose()
    }
    ;
    O.prototype.h = function() {
        if (this.D)
            for (; this.D.length; )
                this.D.shift()()
    }
    ;
    P.prototype.m = function() {
        this.i = !0
    }
    ;
    P.prototype.j = function() {
        this.defaultPrevented = !0
    }
    ;
    var vc = function() {
        if (!H.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            const c = () => {}
            ;
            H.addEventListener("test", c, b);
            H.removeEventListener("test", c, b)
        } catch (c) {}
        return a
    }();
    E(Q, P);
    Q.prototype.m = function() {
        Q.I.m.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    }
    ;
    Q.prototype.j = function() {
        Q.I.j.call(this);
        var a = this.g;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    var fc = "closure_listenable_" + (Math.random() * 1E6 | 0);
    var hc = 0;
    kc.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [],
        this.h++);
        var h = mc(a, b, d, e);
        h > -1 ? (b = a[h],
        c || (b.P = !1)) : (b = new ic(b,this.src,f,!!d,e),
        b.P = c,
        a.push(b));
        return b
    }
    ;
    kc.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g))
            return !1;
        var e = this.g[a];
        b = mc(e, b, c, d);
        return b > -1 ? (jc(e[b]),
        Array.prototype.splice.call(e, b, 1),
        e.length == 0 && (delete this.g[a],
        this.h--),
        !0) : !1
    }
    ;
    kc.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.g)
            if (!a || c == a) {
                for (var d = this.g[c], e = 0; e < d.length; e++)
                    ++b,
                    jc(d[e]);
                delete this.g[c];
                this.h--
            }
        return b
    }
    ;
    var tc = "closure_lm_" + (Math.random() * 1E6 | 0)
      , Bc = {}
      , xc = 0
      , Cc = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0);
    E(R, O);
    R.prototype[fc] = !0;
    R.prototype.removeEventListener = function(a, b, c, d) {
        zc(this, a, b, c, d)
    }
    ;
    R.prototype.h = function() {
        R.I.h.call(this);
        this.g && this.g.removeAll(void 0);
        this.l = null
    }
    ;
    R.prototype.listen = function(a, b, c, d) {
        return this.g.add(String(a), b, !1, c, d)
    }
    ;
    var Zd = window.document
      , te = window
      , We = N(window.document)
      , ee = new R;
    var se = /[^\d]+$/;
    (function() {
        if (Ke) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(I())) ? a[1] : "0"
        }
        return ec ? (a = /1[0|1][_.][0-9_.]+/,
        (a = a.exec(I())) ? a[0].replace(/_/g, ".") : "10") : Le ? (a = /Android\s+([^\);]+)(\)|;)/,
        (a = a.exec(I())) ? a[1] : "") : Me || Ne || Oe ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
        (a = a.exec(I())) ? a[1].replace(/_/g, ".") : "") : ""
    }
    )();
    var Xe = zb()
      , Ye = Eb() || K(va)
      , Ze = K(ua)
      , $e = K(ba) && !(Ab() || zb() || xb() || K("Silk"))
      , af = Ab()
      , bf = K("Safari") && !(Ab() || (L() ? 0 : K("Coast")) || xb() || (L() ? 0 : K(ca)) || (L() ? wb("Microsoft Edge") : K("Edg/")) || (L() ? wb("Opera") : K("OPR")) || zb() || K("Silk") || K(ba)) && !(Eb() || K(ua) || K(va));
    (function() {
        if (Xe)
            return Nc(/Firefox\/([0-9.]+)/);
        if (U || Je || Vd)
            return Te;
        if (af) {
            if (Eb() || K(ua) || K(va) || Fb()) {
                var a = Nc(/CriOS\/([0-9.]+)/);
                if (a)
                    return a
            }
            return Nc(/Chrome\/([0-9.]+)/)
        }
        if (bf && !(Eb() || K(ua) || K(va)))
            return Nc(/Version\/([0-9.]+)/);
        if (Ye || Ze) {
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(I()))
                return a[1] + "." + a[2]
        } else if ($e)
            return (a = Nc(/Android\s+([0-9.]+)/)) ? a : Nc(/Version\/([0-9.]+)/);
        return ""
    }
    )();
    var jd = "jsapi"
      , gd = !(Cb() <= 8);
    var pb = {
        wc: "zh-hant-t-i0-array-1992",
        xc: "zh-hans-t-i0-cangjie-1982",
        yc: "zh-hant-t-i0-cangjie-1982",
        zc: "zh-hans-t-i0-cangjie-1987",
        Ac: "zh-hant-t-i0-cangjie-1987",
        Bc: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
        Cc: Sa,
        Dc: "yue-hant-t-i0-jyutping",
        Ec: "yue-hant-t-i0-yale",
        Fc: "zh-hant-t-i0-dayi-1988",
        Hc: Va,
        Ic: Ta,
        Gc: "ko-t-i0-und",
        Jc: "zh-t-i0-pinyin-x0-shuangpin-abc",
        Kc: "zh-t-i0-pinyin-x0-shuangpin-flypy",
        Lc: "zh-t-i0-pinyin-x0-shuangpin-jiajia",
        Mc: "zh-t-i0-pinyin-x0-shuangpin-ms",
        Nc: "zh-t-i0-pinyin-x0-shuangpin-ziguang",
        Oc: "zh-t-i0-pinyin-x0-shuangpin-ziranma",
        Pc: "am-t-i0-und",
        Qc: "ar-t-i0-und",
        Rc: "be-t-i0-und",
        Sc: "bn-t-i0-und",
        Tc: "bg-t-i0-und",
        Uc: "nl-t-i0-und",
        Vc: "en-t-i0-und",
        Wc: "fr-t-i0-und",
        Xc: "de-t-i0-und",
        Yc: "el-t-i0-und",
        Zc: "gu-t-i0-und",
        ad: "he-t-i0-und",
        bd: "hi-t-i0-und",
        cd: xa,
        dd: "it-t-i0-und",
        ed: ya,
        gd: "ja-t-i0-mozcus",
        fd: "ja-t-i0-mozcjp",
        hd: "kn-t-i0-und",
        jd: "ml-t-i0-und",
        kd: "mr-t-i0-und",
        ld: "ne-t-i0-und",
        md: "or-t-i0-und",
        nd: "fa-t-i0-und",
        od: "pl-t-i0-und",
        pd: "pt-t-i0-und",
        qd: "pt-br-t-i0-und",
        rd: "pt-pt-t-i0-und",
        sd: "pa-t-i0-und",
        td: "ru-t-i0-und",
        ud: "sa-t-i0-und",
        vd: "sr-t-i0-und",
        wd: "si-t-i0-und",
        xd: "es-t-i0-und",
        yd: "ta-t-i0-und",
        zd: "te-t-i0-und",
        Ad: "th-t-i0-und",
        Bd: "ti-t-i0-und",
        Cd: "tr-t-i0-und",
        Dd: "uk-t-i0-und",
        Ed: "ur-t-i0-und",
        Fd: "vi-t-i0-und",
        Gd: Wa,
        Hd: Ua,
        Id: "zh-hant-t-i0-bopomofo",
        Jd: "sq-t-k0-und",
        Kd: "ar-t-k0-und",
        Ld: ra,
        Md: sa,
        Nd: "eu-t-k0-und",
        Od: "be-t-k0-und",
        Pd: "bn-t-k0-und",
        Qd: "bn-t-und-latn-k0-und",
        Rd: "bs-t-k0-und",
        Sd: "pt-br-t-k0-und",
        Td: "bg-t-k0-und",
        Ud: ia,
        Vd: "ca-t-k0-und",
        Wd: "ccp-t-k0-und",
        Xd: "chr-t-k0-und",
        Yd: la,
        ae: "csw-t-k0-phone",
        be: "crm-t-k0-phone",
        ce: "csw-t-k0-phone-oji",
        de: "hr-t-k0-und",
        ee: "cs-t-k0-und",
        fe: ma,
        ge: "da-t-k0-und",
        he: "prs-t-k0-und",
        ie: pa,
        je: "nl-t-k0-und",
        ke: "nl-t-k0-intl",
        le: "dz-t-k0-und",
        me: "en-t-k0-und",
        ne: na,
        oe: "et-t-k0-und",
        pe: Oa,
        Rg: "ti-ethi-t-k0-und",
        qe: "fi-t-k0-und",
        re: "fr-t-k0-und",
        te: "fr-t-k0-intl",
        ue: "ff-t-k0-adlm",
        ve: "gl-t-k0-und",
        xe: "ka-t-k0-und",
        ye: za,
        ze: "de-t-k0-und",
        Ae: "de-t-k0-intl",
        Be: "el-t-k0-und",
        De: "gu-t-k0-und",
        Ee: oa,
        Ce: "gu-t-k0-phone2",
        Fe: Aa,
        Ge: Ba,
        Ie: "haw-t-k0-und",
        He: "ht-t-k0-und",
        Ke: "he-t-k0-und",
        Le: "hi-t-k0-und",
        Me: "hi-t-k0-phone",
        Ne: "win-t-k0-und",
        Oe: qa,
        Pe: "is-t-k0-und",
        Qe: "id-t-k0-und",
        Re: "iu-t-k0-inuktitu",
        Se: "iu-t-k0-nunavik",
        Te: "iu-t-k0-nunavut",
        Ue: "ga-t-k0-und",
        Ve: "ga-t-k0-accents",
        We: "it-t-k0-und",
        Ye: "it-t-k0-intl",
        Ze: "jw-t-k0-und",
        af: "kn-t-k0-und",
        bf: "kn-t-und-latn-k0-und",
        cf: "kk-t-k0-und",
        df: "km-t-k0-und",
        ef: "ko-t-k0-und",
        ff: "ku-t-k0-und",
        gf: "ky-cyrl-t-k0-und",
        hf: "lo-t-k0-und",
        jf: "lv-t-k0-und",
        kf: "lis-t-k0-und",
        lf: "lt-t-k0-und",
        mf: "mk-t-k0-und",
        nf: "myh-t-k0-und",
        pf: "ms-t-k0-und",
        qf: "ml-t-k0-und",
        rf: "ml-t-und-latn-k0-und",
        sf: "mt-t-k0-und",
        tf: "mi-t-k0-und",
        uf: "mr-t-k0-und",
        vf: "mr-t-k0-devanaga",
        wf: "mr-t-k0-phone",
        xf: "mni-mtei-t-k0-phone",
        yf: "mez-t-k0-und",
        zf: "mn-cyrl-t-k0-und",
        Af: "srp-t-k0-und",
        Bf: "my-t-k0-und",
        Cf: "my-t-k0-myansan",
        Df: "nv-t-k0-und",
        Ef: "nv-t-k0-std",
        Ff: "ne-t-k0-und",
        Gf: "ne-t-und-latn-k0-und",
        If: "no-t-k0-und",
        Kf: "one-t-k0-und",
        Lf: "or-t-k0-und",
        Mf: "or-t-und-latn-k0-und",
        Nf: "osa-t-k0-und",
        Of: "latn-002-t-k0-und",
        Pf: "ps-t-k0-und",
        Qf: "fa-t-k0-und",
        Rf: "crk-t-k0-phone",
        Sf: "pl-t-k0-und",
        Uf: "pt-pt-t-k0-und",
        Wf: "pt-br-t-k0-intl",
        Yf: "pt-pt-t-k0-intl",
        Zf: "rhg-rohg-t-k0-und",
        ag: "rom-t-k0-und",
        bg: "ro-t-k0-und",
        cg: Da,
        dg: Ca,
        eg: "ru-t-k0-und",
        fg: Fa,
        gg: Ea,
        hg: Ga,
        kg: "sa-t-und-latn-k0-und",
        jg: "sa-t-k0-devanaga",
        mg: "see-t-k0-und",
        ng: "sr-cyrl-t-k0-und",
        og: "sr-latn-t-k0-und",
        pg: "sd-t-k0-und",
        qg: "si-t-k0-und",
        rg: "sk-t-k0-und",
        sg: Ha,
        tg: "sl-t-k0-und",
        ug: "ckb-t-k0-ar",
        vg: "ckb-t-k0-en",
        wg: "uzs-t-k0-und",
        xg: "es-t-k0-und",
        zg: "es-t-k0-intl",
        Ag: "sw-t-k0-und",
        Bg: "sv-t-k0-und",
        Cg: "de-ch-t-k0-und",
        Dg: "tl-t-k0-und",
        Eg: "tg-t-k0-und",
        Fg: "ta-t-k0-ta99",
        Gg: "ta-t-k0-und",
        Hg: Ia,
        Ig: "ta-t-und-latn-k0-und",
        Jg: Ja,
        Kg: "tt-t-k0-und",
        Lg: "te-t-k0-und",
        Mg: "te-t-und-latn-k0-und",
        Ng: "th-t-k0-und",
        Og: La,
        Pg: "th-t-k0-tis",
        Qg: "ti-t-k0-und",
        Sg: Ma,
        Ug: "tr-t-k0-und",
        Wg: "ug-t-k0-und",
        Xg: Na,
        Yg: "ur-t-k0-und",
        Zg: "en-us-t-k0-intl",
        ah: Qa,
        bh: Pa,
        dh: "uz-latn-t-k0-und",
        eh: "vi-t-k0-und",
        fh: Ra,
        gh: "vi-t-k0-viqr",
        hh: "vi-t-k0-vni",
        ih: "cy-t-k0-und",
        kh: "yi-t-k0-und",
        Hf: "yo-ng-t-k0-und",
        Jf: "oj-t-k0-ojibwe",
        we: "de-t-k0-accents",
        yg: "es-t-k0-accents",
        se: "fr-t-k0-accents",
        Xe: "it-t-k0-accents",
        ia: "nl-t-k0-accents",
        Tf: "pl-t-k0-accents",
        Vf: "pt-br-t-k0-accents",
        Xf: "pt-pt-t-k0-accents",
        Tg: "tr-t-k0-f-accents",
        Vg: "tr-t-k0-q-accents",
        Zd: "co-t-k0-accents",
        Je: "haw-t-k0-accents",
        ig: "sm-t-k0-accents",
        lg: "gd-t-k0-accents",
        jh: "fy-t-k0-accents",
        lh: "lb-t-k0-accents",
        ja: "af-t-i0-handwrit",
        ka: "sq-t-i0-handwrit",
        la: "am-t-i0-handwrit",
        ma: "ar-t-i0-handwrit",
        na: "hy-t-i0-handwrit",
        oa: "as-t-i0-handwrit",
        pa: "az-t-i0-handwrit",
        qa: "eu-t-i0-handwrit",
        ra: "be-t-i0-handwrit",
        sa: "bn-t-i0-handwrit",
        ta: "bs-t-i0-handwrit",
        ua: "bg-t-i0-handwrit",
        va: "my-t-i0-handwrit",
        wa: "zh-yue-t-i0-handwrit",
        xa: "ca-t-i0-handwrit",
        ya: "ceb-t-i0-handwrit",
        za: "zh-t-i0-handwrit",
        Aa: "zh-hans-t-i0-handwrit",
        Ba: "zh-hant-t-i0-handwrit",
        Ca: "co-t-i0-handwrit",
        Da: "hr-t-i0-handwrit",
        Ea: "cs-t-i0-handwrit",
        Fa: "da-t-i0-handwrit",
        Ga: "nl-t-i0-handwrit",
        Ha: "en-t-i0-handwrit",
        Ia: "eo-t-i0-handwrit",
        Ja: "et-t-i0-handwrit",
        Ka: "fil-t-i0-handwrit",
        La: "fi-t-i0-handwrit",
        Ma: "fr-t-i0-handwrit",
        Na: "gl-t-i0-handwrit",
        Oa: "ka-t-i0-handwrit",
        Pa: "de-t-i0-handwrit",
        Qa: "el-t-i0-handwrit",
        Ra: "gu-t-i0-handwrit",
        Sa: "ht-t-i0-handwrit",
        Ta: "haw-t-i0-handwrit",
        Ua: "he-t-i0-handwrit",
        Va: "hi-t-i0-handwrit",
        Wa: "hmn-t-i0-handwrit",
        Xa: "hu-t-i0-handwrit",
        Ya: "is-t-i0-handwrit",
        Za: "id-t-i0-handwrit",
        ab: "ga-t-i0-handwrit",
        bb: "it-t-i0-handwrit",
        cb: "ja-t-i0-handwrit",
        eb: "jv-t-i0-handwrit",
        fb: "kn-t-i0-handwrit",
        gb: "kk-t-i0-handwrit",
        hb: "km-t-i0-handwrit",
        ib: "ko-t-i0-handwrit",
        jb: "ku-t-i0-handwrit",
        kb: "ky-t-i0-handwrit",
        lb: "lo-t-i0-handwrit",
        mb: "la-t-i0-handwrit",
        nb: "lv-t-i0-handwrit",
        ob: "lt-t-i0-handwrit",
        pb: "lb-t-i0-handwrit",
        qb: "mk-t-i0-handwrit",
        rb: "mg-t-i0-handwrit",
        sb: "ms-t-i0-handwrit",
        tb: "ml-t-i0-handwrit",
        ub: "mt-t-i0-handwrit",
        vb: "mi-t-i0-handwrit",
        wb: "mr-t-i0-handwrit",
        xb: "mn-t-i0-handwrit",
        yb: "mul-t-i0-handwrit",
        zb: "mul-beng-t-i0-handwrit",
        Ab: "mul-cyrl-t-i0-handwrit",
        Bb: "mul-deva-t-i0-handwrit",
        Cb: "mul-ethi-t-i0-handwrit",
        Db: "mul-latn-t-i0-handwrit",
        Eb: "ne-t-i0-handwrit",
        Fb: "no-t-i0-handwrit",
        Gb: "nb-t-i0-handwrit",
        Hb: "nn-t-i0-handwrit",
        Ib: "ny-t-i0-handwrit",
        Jb: "or-t-i0-handwrit",
        Kb: "fa-t-i0-handwrit",
        Lb: "pl-t-i0-handwrit",
        Mb: "pt-t-i0-handwrit",
        Nb: "pt-br-t-i0-handwrit",
        Ob: "pt-pt-t-i0-handwrit",
        Pb: "pa-t-i0-handwrit",
        Qb: "ro-t-i0-handwrit",
        Rb: "ru-t-i0-handwrit",
        Sb: "sm-t-i0-handwrit",
        Tb: "gd-t-i0-handwrit",
        Ub: "sr-t-i0-handwrit",
        Vb: "sn-t-i0-handwrit",
        Wb: "si-t-i0-handwrit",
        Xb: "sk-t-i0-handwrit",
        Yb: "sl-t-i0-handwrit",
        Zb: "so-t-i0-handwrit",
        ac: "es-t-i0-handwrit",
        bc: "su-t-i0-handwrit",
        cc: "sw-t-i0-handwrit",
        dc: "sv-t-i0-handwrit",
        ec: "tg-t-i0-handwrit",
        fc: "ta-t-i0-handwrit",
        hc: "te-t-i0-handwrit",
        ic: "th-t-i0-handwrit",
        jc: "bo-t-i0-handwrit",
        kc: "ti-t-i0-handwrit",
        lc: "tr-t-i0-handwrit",
        mc: "uk-t-i0-handwrit",
        oc: "ur-t-i0-handwrit",
        pc: "uz-t-i0-handwrit",
        qc: "vi-t-i0-handwrit",
        rc: "cy-t-i0-handwrit",
        sc: "fy-t-i0-handwrit",
        tc: "xh-t-i0-handwrit",
        uc: "yi-t-i0-handwrit",
        vc: "zu-t-i0-handwrit",
        nc: "und-t-i0-handwrit",
        oh: "en-t-i0-voice",
        mh: "zh-hans-t-i0-voice",
        nh: "zh-hant-t-i0-voice",
        ph: "xkb:am:phonetic:arm",
        qh: "xkb:be::fra",
        rh: "xkb:be::ger",
        sh: "xkb:be::nld",
        th: "xkb:bg::bul",
        uh: "xkb:bg:phonetic:bul",
        vh: "xkb:br::por",
        wh: "xkb:by::bel",
        yh: "xkb:ca::fra",
        xh: "xkb:ca:eng:eng",
        zh: "xkb:ca:multix:fra",
        Bh: "xkb:ch::ger",
        Ah: "xkb:ch:fr:fra",
        Ch: "xkb:cz::cze",
        Dh: "xkb:cz:qwerty:cze",
        Eh: "xkb:de::ger",
        Fh: "xkb:de:neo:ger",
        Gh: "xkb:dk::dan",
        Hh: "xkb:ee::est",
        Jh: "xkb:es::spa",
        Ih: "xkb:es:cat:cat",
        Lh: "xkb:fo::fao",
        Kh: "xkb:fi::fin",
        Mh: "xkb:fr:bepo:fra",
        Nh: "xkb:fr::fra",
        Oh: "xkb:gb:dvorak:eng",
        Ph: "xkb:gb:extd:eng",
        Qh: "xkb:ge::geo",
        Rh: "xkb:gr::gre",
        Sh: "xkb:hr::scr",
        Th: "xkb:hu::hun",
        Uh: "xkb:hu:qwerty:hun",
        Vh: "xkb:ie::ga",
        Wh: "xkb:il::heb",
        Xh: "xkb:is::ice",
        Yh: "xkb:it::ita",
        Zh: "xkb:jp::jpn",
        ai: "xkb:kz::kaz",
        bi: "xkb:latam::spa",
        ci: "xkb:lt::lit",
        di: "xkb:lv:apostrophe:lav",
        fi: "xkb:mn::mon",
        ei: "xkb:mk::mkd",
        gi: "xkb:mt::mlt",
        hi: "xkb:no::nob",
        ii: "xkb:pl::pol",
        ji: "xkb:pt::por",
        ki: "xkb:ro::rum",
        li: "xkb:ro:std:rum",
        mi: "xkb:rs::srp",
        oi: "xkb:ru::rus",
        ni: "xkb:ru:phonetic:rus",
        pi: "xkb:se::swe",
        ri: "xkb:si::slv",
        si: "xkb:sk::slo",
        ui: "xkb:tr::tur",
        ti: "xkb:tr:f:tur",
        vi: "xkb:ua::ukr",
        Ai: "xkb:us::eng",
        Bi: "xkb:us::fil",
        Ci: "xkb:us::ind",
        Ji: "xkb:us::msa",
        wi: "xkb:us:altgr-intl:eng",
        xi: "xkb:us:colemak:eng",
        yi: "xkb:us:dvorak:eng",
        zi: "xkb:us:dvp:eng",
        Di: "xkb:us:intl:eng",
        Ei: "xkb:us:intl:nld",
        Ii: "xkb:us:intl:por",
        Fi: "xkb:us:intl_pc:eng",
        Gi: "xkb:us:intl_pc:nld",
        Hi: "xkb:us:intl_pc:por",
        Li: "xkb:us:workman-intl:eng",
        Ki: "xkb:us:workman:eng"
    };
    var Qc = class {
        constructor(a) {
            this.code = a;
            this.type = null;
            this.code.indexOf("-i0") >= 0 ? (this.type = "im",
            kb(this.code, "-handwrit") ? this.type = "hw" : kb(this.code, "-voice") && (this.type = "vo")) : this.code.indexOf("-k0") >= 0 ? this.type = "vkd" : this.code.lastIndexOf("xkb", 0) == 0 && (this.type = "xkb");
            a = this.code.split(/-t|-i0|-k0|:/);
            a[0] === "yue-hant" && (a[0] = "zh-HK");
            switch (this.code) {
            case Sa:
                a[0] = "zh-HK";
                break;
            case Va:
            case Wa:
                a[0] = "zh-Hans"
            }
            if (this.type === "vkd" && !cf[this.code] && !df[this.code]) {
                var b = this.code.split("-t-");
                a = b[0];
                b = b[1];
                a = a.replace(/-/g, "_");
                a === "en_us" && (a = "us");
                F(Tc, a) && (b === "und-latn-k0-und" || b === "k0-und") || b === "k0-und" || (a = b.match(/k0-(.*)/),
                a[1] && a[1].replace("qwerty", "phone").replace("-", "_"))
            }
        }
        toString() {
            return this.code
        }
    }
      , Pc = {}
      , Tc = "bn gu pa kn ml or sa ta te ne".split(" ")
      , Sc = {
        im_pinyin_zh_hans: Va,
        im_pinyin_zh_hant: Ta,
        im_t13n_ja: ya,
        "im_t13n_ja-Hira": xa,
        im_wubi_zh_hans: Wa,
        im_zhuyin_zh_hant: Ua,
        vkd_bg_phone: ia,
        vkd_chr_phone: la,
        vkd_cs_qwertz: ma,
        vkd_deva_phone: pa,
        vkd_en_dvorak: na,
        vkd_es_es: "es-t-k0-und",
        vkd_ethi: Oa,
        vkd_gu_phone: oa,
        vkd_guru_inscript: Aa,
        vkd_guru_phone: Ba,
        vkd_hu_101: qa,
        vkd_hy_east: ra,
        vkd_hy_west: sa,
        vkd_ka_qwerty: "ka-t-k0-und",
        vkd_ka_typewriter: za,
        vkd_ro_sr13392_primary: Da,
        vkd_ro_sr13392_secondary: Ca,
        vkd_ru_phone: Fa,
        vkd_ru_phone_aatseel: Ea,
        vkd_ru_phone_yazhert: Ga,
        vkd_sk_qwerty: Ha,
        vkd_ta_itrans: Ia,
        vkd_ta_tamil99: "ta-t-k0-ta99",
        vkd_ta_typewriter: Ja,
        vkd_th_pattajoti: La,
        vkd_th_tis: "th-t-k0-tis",
        vkd_tr_f: Ma,
        vkd_tr_q: "tr-t-k0-und",
        vkd_uk_101: Na,
        vkd_us_intl: "fr-t-k0-intl",
        vkd_uz_cyrl_phone: Qa,
        vkd_uz_cyrl_type: Pa,
        vkd_vi_tcvn: "vi-t-k0-und",
        vkd_vi_telex: Ra
    }
      , df = sb(Sc)
      , cf = {
        "nl-t-k0-intl": A,
        "fr-t-k0-intl": A,
        "de-t-k0-intl": A,
        "ht-t-k0-und": "fr",
        "id-t-k0-und": v,
        "ga-t-k0-und": v,
        "it-t-k0-intl": A,
        "jw-t-k0-und": v,
        "mr-t-k0-und": "deva_phone",
        "mr-t-k0-devanaga": "hi",
        "ms-t-k0-und": v,
        "pt-br-t-k0-intl": A,
        "pt-pt-t-k0-intl": A,
        "sa-t-k0-devanaga": "hi",
        "es-t-k0-intl": A,
        "sw-t-k0-und": v,
        "tl-t-k0-und": v,
        "ti-t-k0-und": "ethi",
        "cy-t-k0-und": v
    };
    var ef = null
      , ff = class {
        async get(a) {
            const b = await new Promise(c => {
                chrome.storage.local.get([a], c)
            }
            );
            return b[a] === void 0 ? void 0 : JSON.parse(b[a])
        }
        async set(a, b) {
            a = String(a);
            b !== void 0 ? await chrome.storage.local.set({
                [a]: JSON.stringify(b)
            }) : await chrome.storage.local.remove(a)
        }
    }
    ;
    var Xc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    var ad = {};
    E(T, O);
    var cd = [];
    T.prototype.listen = function(a, b, c, d) {
        return dd(this, a, b, c, d)
    }
    ;
    T.prototype.removeAll = function() {
        ob(this.g, function(a, b) {
            this.g.hasOwnProperty(b) && Ac(a)
        }, this);
        this.g = {}
    }
    ;
    T.prototype.h = function() {
        T.I.h.call(this);
        this.removeAll()
    }
    ;
    T.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    var gf = class extends R {
        constructor() {
            var a = document;
            super();
            this.i = {};
            this.s = ab(a) ? a[0] : a;
            this.m = null;
            this.j = new T(this);
            hd(this, a)
        }
        u(a) {
            let b = a.target;
            b && b != te && (b.frameElement && (b = b.frameElement),
            id(this, a, b))
        }
        B(a) {
            const b = rb(a.g);
            fd( () => kd(this, this.s, new Q(b)), 0)
        }
        h() {
            super.h();
            try {
                dc(this.j)
            } catch (a) {}
            delete this.i;
            delete this.m
        }
    }
    ;
    ld.prototype.next = function() {
        return md
    }
    ;
    var md = {
        done: !0,
        value: void 0
    };
    ld.prototype.L = function() {
        return this
    }
    ;
    E(V, ld);
    V.prototype.next = function() {
        if (this.u) {
            if (!this.node || this.B && this.o == 0)
                return md;
            var a = this.node;
            var b = this.v ? -1 : 1;
            if (this.l == b) {
                var c = this.v ? a.lastChild : a.firstChild;
                c ? od(this, c) : od(this, a, b * -1)
            } else
                (c = this.v ? a.previousSibling : a.nextSibling) ? od(this, c) : od(this, a.parentNode, b * -1);
            this.o += this.l * (this.v ? -1 : 1)
        } else
            this.u = !0;
        return (a = this.node) ? {
            value: a,
            done: !1
        } : md
    }
    ;
    V.prototype.R = function(a) {
        return a.node == this.node && (!this.node || a.l == this.l)
    }
    ;
    pd.prototype.aa = function() {
        return !1
    }
    ;
    E(rd, V);
    E(W, rd);
    W.prototype.s = function() {
        return this.h
    }
    ;
    W.prototype.D = function() {
        return this.u && (this.node != (this.m ? this.h : this.g) ? !1 : this.m ? this.j ? this.l != -1 : this.l == 1 : !this.i || this.l != 1)
    }
    ;
    W.prototype.next = function() {
        return this.D() ? md : W.I.next.call(this)
    }
    ;
    sd.prototype.L = function() {
        return new W(this.g.startContainer,this.g.startOffset,this.g.endContainer,this.g.endOffset)
    }
    ;
    E(X, sd);
    X.prototype.select = function(a) {
        this.h(Lb(M(this.g.startContainer)).getSelection(), a)
    }
    ;
    X.prototype.h = function(a) {
        a.removeAllRanges();
        a.addRange(this.g)
    }
    ;
    X.prototype.collapse = function(a) {
        this.g.collapse(a)
    }
    ;
    E(vd, X);
    vd.prototype.h = function(a, b) {
        !b || this.g.collapsed ? vd.I.h.call(this, a, b) : (a.collapse(this.g.endContainer, this.g.endOffset),
        a.extend(this.g.startContainer, this.g.startOffset))
    }
    ;
    E(wd, X);
    wd.prototype.h = function(a, b) {
        b ? a.setBaseAndExtent(this.g.endContainer, this.g.endOffset, this.g.startContainer, this.g.startOffset) : a.setBaseAndExtent(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset)
    }
    ;
    E(zd, pd);
    B = zd.prototype;
    B.S = function() {
        return Y(this).g
    }
    ;
    B.M = function() {
        return 1
    }
    ;
    B.H = function() {
        return this
    }
    ;
    B.W = function() {
        return Y(this).g.commonAncestorContainer
    }
    ;
    B.A = function() {
        return this.h || (this.h = Y(this).g.startContainer)
    }
    ;
    B.G = function() {
        return this.j != null ? this.j : this.j = Y(this).g.startOffset
    }
    ;
    B.F = function() {
        return this.g || (this.g = Y(this).g.endContainer)
    }
    ;
    B.J = function() {
        return this.i != null ? this.i : this.i = Y(this).g.endOffset
    }
    ;
    B.aa = function() {
        return this.m
    }
    ;
    B.K = function() {
        return Y(this).g.collapsed
    }
    ;
    B.X = function() {
        return Y(this).g.toString()
    }
    ;
    B.L = function() {
        return new W(this.A(),this.G(),this.F(),this.J())
    }
    ;
    B.select = function() {
        Y(this).select(this.m)
    }
    ;
    B.Z = function() {
        var a = Y(this).g;
        a.extractContents();
        if (a.startContainer.hasChildNodes() && (a = a.startContainer.childNodes[a.startOffset])) {
            var b = a.previousSibling;
            Zb(a) == "" && Sb(a);
            b && Zb(b) == "" && Sb(b)
        }
        this.h = this.j = this.g = this.i = null
    }
    ;
    B.Y = function(a, b) {
        var c = Y(this).g.cloneRange();
        c.collapse(b);
        c.insertNode(a);
        c.detach();
        this.h = this.j = this.g = this.i = null;
        return a
    }
    ;
    B.collapse = function(a) {
        a = this.aa() ? !a : a;
        this.l && this.l.collapse(a);
        a ? (this.g = this.h,
        this.i = this.j) : (this.h = this.g,
        this.j = this.i);
        this.m = !1
    }
    ;
    E(Bd, pd);
    Bd.prototype.Y = function(a, b) {
        b ? (b = this.A(),
        b.parentNode && b.parentNode.insertBefore(a, b)) : (b = this.F(),
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling));
        return a
    }
    ;
    E(Cd, Bd);
    B = Cd.prototype;
    B.S = function() {
        return this.g[0]
    }
    ;
    B.M = function() {
        return this.g.length
    }
    ;
    B.H = function(a) {
        this.i[a] || (this.i[a] = Ad(yd(this.g[a])));
        return this.i[a]
    }
    ;
    B.W = function() {
        if (!this.j) {
            for (var a = [], b = 0, c = this.M(); b < c; b++)
                a.push(this.H(b).W());
            this.j = Xb.apply(null, a)
        }
        return this.j
    }
    ;
    B.A = function() {
        return Ed(this)[0].A()
    }
    ;
    B.G = function() {
        return Ed(this)[0].G()
    }
    ;
    B.F = function() {
        return gb(Ed(this)).F()
    }
    ;
    B.J = function() {
        return gb(Ed(this)).J()
    }
    ;
    B.K = function() {
        return this.g.length == 0 || this.g.length == 1 && this.H(0).K()
    }
    ;
    B.X = function() {
        return qd(this).map(function(a) {
            return a.X()
        }).join("")
    }
    ;
    B.L = function() {
        return new Fd(this)
    }
    ;
    B.select = function() {
        var a = Lb(M(this.A())).getSelection();
        a.removeAllRanges();
        for (var b = 0, c = this.M(); b < c; b++)
            a.addRange(this.H(b).S())
    }
    ;
    B.Z = function() {
        qd(this).forEach(function(a) {
            a.Z()
        })
    }
    ;
    B.collapse = function(a) {
        if (!this.K()) {
            var b = a ? this.H(0) : this.H(this.M() - 1);
            this.i = [];
            this.j = this.h = null;
            b.collapse(a);
            this.i = [b];
            this.h = [b];
            this.g = [b.S()]
        }
    }
    ;
    E(Fd, rd);
    Fd.prototype.s = function() {
        return this.g[0].s()
    }
    ;
    Fd.prototype.D = function() {
        return this.g[this.h].D()
    }
    ;
    Fd.prototype.next = function() {
        for (; this.h < this.g.length; ) {
            const a = this.g[this.h]
              , b = a.next();
            if (b.done)
                this.h++;
            else
                return od(this, a.node, a.l, a.o),
                b
        }
        return md
    }
    ;
    E(Qd, Pd);
    sb({
        u: 1,
        B: 2,
        N: 3,
        T: 4,
        O: 5,
        i: 6,
        j: 7,
        U: 8,
        s: 10,
        m: 11
    });
    var hf = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]")
      , jf = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]")
      , kf = /^http:\/\/.*/
      , lf = /\s+/
      , mf = /[\d\u06f0-\u06f9]/;
    var nf = class {
        constructor(a) {
            const b = a.nodeName.toUpperCase();
            this.j = b == da;
            this.m = b != ha && b != m;
            this.i = a;
            this.h = null;
            this.g = N(this.h);
            this.l = {}
        }
        commitText(a, b) {
            const c = Z(this);
            if (c) {
                var d = c.type && c.type.toUpperCase();
                d = (d == "EMAIL" || d == "NUMBER") && c.tagName.toUpperCase() == m;
                b = b ? b : 0;
                if (!d && c.tagName.toUpperCase() == m && a.length > b) {
                    var e = c.maxLength;
                    if (typeof e === w && e >= 0 && e < c.value.length + a.length - b)
                        return
                }
                Yd(this);
                e = {};
                e["fs-input"] = a;
                Ud && jd == "gmail" && (Td(c, u),
                Td(c, t, 0, e));
                if (d)
                    c.value = (b ? c.value.slice(0, -b) : c.value) + a;
                else if (Cb() <= 8 || Cb() <= 10 && (a == "\n" || !a && b == 1))
                    d = this.g.g.selection.createRange(),
                    b > 0 && (a || !d.text) && d.moveStart(ka, -b),
                    (b > 0 || d.text) && d.execCommand("delete", !1, null),
                    a.charAt(0) != " " && a.charAt(a.length - 1) != " " || !this.m || (b = d.duplicate(),
                    b.moveToElementText(d.parentElement()),
                    e = d.duplicate(),
                    a.charAt(0) == " " && (d.moveStart(ka, -1),
                    b.inRange(d) ? (e = d.text.charAt(0),
                    a = (e == " " ? "\u00a0" : e) + a) : d = e),
                    e = d.duplicate(),
                    a.charAt(a.length - 1) == " " && (d.moveEnd(ka, 1),
                    b.inRange(d) && d.text.charAt(d.text.length - 1) == " " && (a = a.slice(0, a.length - 1) + "\u00a0"),
                    d = e)),
                    d.text = a,
                    d.collapse(!1),
                    d.select();
                else if (this.m)
                    a: if (e = b,
                    jd == "chext")
                        b = this.g.g.defaultView,
                        d = b.getSelection(),
                        e = d.isCollapsed || d.toString() === "\u200b" ? Xd(a, d, e) : a,
                        a ? b.document.execCommand(wa, !1, e) : d.deleteFromDocument();
                    else {
                        d = this.g.g.defaultView;
                        b = d.document;
                        d = d.getSelection();
                        d.isCollapsed || (b.execCommand("delete", !1, null),
                        a || (e = 0));
                        if (e > 0) {
                            if (a || e > 1 || U || Vd)
                                a = Xd(a, d, e);
                            d.isCollapsed && U || b.execCommand("delete", !1, null)
                        }
                        if (a) {
                            if (b.queryCommandSupported) {
                                if (b.queryCommandSupported(wa)) {
                                    b.execCommand(wa, !1, a);
                                    break a
                                }
                                if (b.queryCommandSupported("insertHTML")) {
                                    d = {
                                        ga: !0,
                                        ha: !0
                                    };
                                    a instanceof Ce ? d = a : (a = String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"),
                                    d.ha && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;")),
                                    d.ga && (a = a.replace(/(\r\n|\n|\r)/g, "<br>")),
                                    d.Ni && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')),
                                    d = a,
                                    Be === void 0 && (Be = mb()),
                                    a = Be,
                                    d = new Ce(a ? a.createHTML(d) : d));
                                    a = b.execCommand;
                                    if (d instanceof Ce)
                                        d = d.g;
                                    else
                                        throw Error("");
                                    a.call(b, "insertHTML", !1, d);
                                    break a
                                }
                            }
                            if (d.anchorNode.nodeType == 3) {
                                b = d.anchorNode;
                                var f = d.anchorNode.nodeValue;
                                e = d.anchorOffset + a.length;
                                var h;
                                let g;
                                g = h = d.anchorOffset;
                                const k = [" ", "\u00a0"];
                                for (; g > 0 && F(k, f[--g]); )
                                    ;
                                for (; h < f.length && F(k, f[h++]); )
                                    ;
                                if (a.charAt(0) == " " || a.charAt(a.length - 1) == " " || g < h)
                                    a = f.slice(g, d.anchorOffset) + a + f.slice(d.anchorOffset, h),
                                    a = a.replace(/\u00a0/g, " "),
                                    a = a.replace(/^\u0020/g, "\u00a0"),
                                    a = a.replace(/\u0020{2}/g, " \u00a0"),
                                    a = a.replace(/\u0020$/g, "\u00a0");
                                b.nodeValue = f.slice(0, g) + a + f.slice(h)
                            } else
                                a = a.replace(/ /g, "\u00a0"),
                                b = this.g.g.createTextNode(String(a)),
                                e = d.anchorNode,
                                e.insertBefore(b, e.childNodes[d.anchorOffset] || null),
                                e = a.length;
                            a = d.getRangeAt(0);
                            a.setStart(b, e);
                            a.collapse(!0);
                            d.addRange(a)
                        }
                    }
                else
                    d = this.h,
                    e = d.selectionStart,
                    f = d.selectionEnd,
                    h = d.value.length,
                    e > h && (e = h),
                    f > h && (f = h),
                    !a && e < f && (b = 0),
                    e -= Math.min(e, b),
                    d.value = d.value.slice(0, e) + a + d.value.slice(f),
                    e += a.length,
                    d.setSelectionRange(e, e);
                if (c && c.getAttribute("itaautodir") == "1") {
                    b = a = 0;
                    d = !1;
                    e = Wd(this, 50).split(lf);
                    for (f = 0; f < e.length; f++)
                        h = e[f],
                        jf.test(h) ? (a++,
                        b++) : kf.test(h) ? d = !0 : hf.test(h) ? b++ : mf.test(h) && (d = !0);
                    c.dir = (b == 0 ? d ? 1 : 0 : a / b > .4 ? -1 : 1) == -1 ? "rtl" : "ltr"
                }
            }
        }
        deleteToken(a) {
            delete this.l[String(D(a))]
        }
    }
    ;
    var ae = class extends O {
        constructor() {
            super();
            this.i = {};
            this.o = {};
            this.g = [];
            this.m = We;
            this.j = new T(this);
            ce(this)
        }
        l(a) {
            var b = this.i[a.type];
            return b && a.target ? (b = b[D(a.target)]) ? Ae(b, c => {
                const d = c.listener;
                return typeof d === n ? d.call(c.C, a) : d && d.handleEvent && typeof d.handleEvent === n ? d.handleEvent.call(d, a) : !0
            }
            ) : !0 : !0
        }
        s(a) {
            var b = this.o[a.charCode];
            return b && a.target ? (b = b[D(a.target)]) ? Ae(b, c => {
                const d = c.listener;
                return typeof d === n ? d.call(c.C, a) : d && d.handleEvent && typeof d.handleEvent === n ? d.handleEvent.call(d, a) : !0
            }
            ) : !0 : !0
        }
        h() {
            dc(this.j);
            delete this.i;
            delete this.o;
            delete this.g
        }
    }
    , be, je = class {
        constructor(a, b) {
            this.listener = a;
            this.C = b
        }
        R(a, b) {
            return this.listener == a && this.C == b
        }
    }
    , $d = {};
    var ye = class extends O {
        constructor(a) {
            super();
            this.O = this.u = !1;
            this.ca = `inner_frame_${a}`;
            this.j = {};
            this.N = [];
            this.B = new T(this);
            this.o = 0;
            this.U = new gf;
            this.B.listen(this.U, "aec", this.T);
            this.T()
        }
        h() {
            me(this);
            dc(this.U);
            dc(this.B);
            this.N.forEach(b => {
                var c = this.s;
                ke(fe(), b, [t, p, u], c, this);
                c = this.ba;
                ke(fe(), b, "focus", c, this)
            }
            );
            this.N = [];
            this.i = null;
            this.j = {};
            this.g = this.m = null;
            const a = document.getElementById("GOOGLE_INPUT_CHEXT_IFRAME_FLAG");
            a && Sb(a);
            this.l && (this.l.disconnect(),
            this.l = null)
        }
        T() {
            var a;
            if ((a = (a = document.activeElement) ? $c(a) ? a : null : null) && (!this.g || a !== Z(this.g))) {
                this.g = new nf(a);
                ne(this);
                var b = this.s;
                ie(fe(), a, t, b, this);
                b = this.s;
                ie(fe(), a, p, b, this);
                b = this.s;
                ie(fe(), a, u, b, this);
                b = this.ba;
                ie(fe(), a, "focus", b, this);
                dd(this.B, document, "mousedown", this.da, !0, this);
                this.N.push(a)
            }
        }
        ba(a) {
            me(this);
            qe(this).postMessage({
                event: {
                    [a.type]: {
                        type: a.type,
                        isShortcut: !1
                    }
                }
            });
            oe(this);
            ne(this)
        }
        s(a) {
            var b;
            if (b = !Sd(a) && this.i && !!a && !!a.g && a.g.isTrusted)
                a.keyCode === 16 && Vc(this.i) && this.O && a.type == u ? (me(this),
                this.j.tlang = !this.j.tlang,
                ef || (ef = new ff),
                ef.set("4", this.j.tlang),
                b = !0) : b = !1,
                b = !b;
            if (b) {
                var c = ue(this, a)
                  , d = ve(a);
                b = {
                    type: a.type,
                    keyCode: a.keyCode,
                    charCode: a.charCode,
                    shiftKey: a.shiftKey,
                    ctrlKey: a.ctrlKey,
                    altKey: a.altKey,
                    metaKey: a.metaKey,
                    isShortcut: c
                };
                var e = {
                    [a.type]: b
                };
                a.type === p && (this.m = b,
                this.O = a.keyCode === 16);
                if (!c && we(this, a))
                    me(this),
                    oe(this),
                    ne(this);
                else
                    switch (a.type) {
                    case p:
                        a.keyCode === 13 ? (c = rb(b),
                        c.type = t,
                        c.charCode = 13,
                        xe(this, a, {
                            keydown: b,
                            keypress: c
                        }),
                        a.m(),
                        this.m = null) : d || c || this.i.type === "vkd" ? (xe(this, a, e),
                        this.m = null) : this.o = setTimeout( () => {
                            xe(this, a, e)
                        }
                        , 10);
                        break;
                    case t:
                        me(this);
                        xe(this, a, this.m ? {
                            keydown: this.m,
                            keypress: b
                        } : {
                            keypress: b
                        });
                        this.m = null;
                        break;
                    case u:
                        a.keyCode === 16 && c || xe(this, a, e)
                    }
            }
        }
        da(a) {
            a = {
                type: a.type
            };
            qe(this).postMessage({
                event: {
                    mousedown: a
                }
            })
        }
    }
    ;
    setTimeout( () => {
        jd = "chext";
        document.readyState == "complete" ? ze() : oc(window, "load", ze, !0)
    }
    , 200);
}
).call(this);
