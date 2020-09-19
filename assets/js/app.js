var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(function () {
    var e_1, _b;
    var rb = new WeakMap(), X = function (a) { return typeof a === "function" && rb.has(a); };
    var ya = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, ma = function (a, c, d) {
        if (d === void 0) { d = null; }
        for (; c !== d;) {
            var e = c.nextSibling;
            a.removeChild(c), c = e;
        }
    };
    var A = {}, U = {};
    var F = "{{lit-" + String(Math.random()).slice(2) + "}}", Ba = "<!--" + F + "-->", nb = new RegExp(F + "|" + Ba), Y = "$lit$";
    var kb = (function () {
        function kb(a, c) {
            var e_2, _b;
            this.parts = [], this.element = c;
            var d = [], e = [], f = document.createTreeWalker(c.content, 133, null, !1);
            var h = 0, g = -1, m = 0;
            var J = a.strings, j = a.values.length;
            for (; m < j;) {
                var k = f.nextNode();
                if (k === null) {
                    f.currentNode = e.pop();
                    continue;
                }
                g++;
                if (k.nodeType === 1) {
                    if (k.hasAttributes()) {
                        var p = k.attributes, P = p.length;
                        var G = 0;
                        for (var q = 0; q < P; q++)
                            ob(p[q].name, Y) && G++;
                        for (; G-- > 0;) {
                            var q = J[m], y = oa.exec(q)[2], D = y.toLowerCase() + Y, Q = k.getAttribute(D);
                            k.removeAttribute(D);
                            var K = Q.split(nb);
                            this.parts.push({ type: "attribute", index: g, name: y, strings: K }), m += K.length - 1;
                        }
                    }
                    k.tagName === "TEMPLATE" && (e.push(k), f.currentNode = k.content);
                }
                else if (k.nodeType === 3) {
                    var p = k.data;
                    if (p.indexOf(F) >= 0) {
                        var P = k.parentNode, G = p.split(nb), q = G.length - 1;
                        for (var y = 0; y < q; y++) {
                            var D = void 0, Q = G[y];
                            if (Q === "")
                                D = I();
                            else {
                                var K = oa.exec(Q);
                                K !== null && ob(K[2], Y) && (Q = Q.slice(0, K.index) + K[1] + K[2].slice(0, -Y.length) + K[3]), D = document.createTextNode(Q);
                            }
                            P.insertBefore(D, k), this.parts.push({ type: "node", index: ++g });
                        }
                        G[q] === "" ? (P.insertBefore(I(), k), d.push(k)) : k.data = G[q], m += q;
                    }
                }
                else if (k.nodeType === 8)
                    if (k.data === F) {
                        var p = k.parentNode;
                        (k.previousSibling === null || g === h) && (g++, p.insertBefore(I(), k)), h = g, this.parts.push({ type: "node", index: g }), k.nextSibling === null ? k.data = "" : (d.push(k), g--), m++;
                    }
                    else {
                        var p = -1;
                        for (; (p = k.data.indexOf(F, p + 1)) !== -1;)
                            this.parts.push({ type: "node", index: -1 }), m++;
                    }
            }
            try {
                for (var d_1 = __values(d), d_1_1 = d_1.next(); !d_1_1.done; d_1_1 = d_1.next()) {
                    var k = d_1_1.value;
                    k.parentNode.removeChild(k);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (d_1_1 && !d_1_1.done && (_b = d_1.return)) _b.call(d_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return kb;
    }());
    var ob = function (a, c) { var d = a.length - c.length; return d >= 0 && a.slice(d) === c; }, mb = function (a) { return a.index !== -1; }, I = function () { return document.createComment(""); }, oa = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    var za = (function () {
        function za(a, c, d) {
            this.__parts = [], this.template = a, this.processor = c, this.options = d;
        }
        za.prototype.update = function (a) {
            var e_3, _b, e_4, _c;
            var c = 0;
            try {
                for (var _d = __values(this.__parts), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var d = _e.value;
                    d !== void 0 && d.setValue(a[c]), c++;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_3) throw e_3.error; }
            }
            try {
                for (var _f = __values(this.__parts), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var d = _g.value;
                    d !== void 0 && d.commit();
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        za.prototype._clone = function () {
            var _b;
            var a = ya ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), c = [], d = this.template.parts, e = document.createTreeWalker(a, 133, null, !1);
            var f = 0, h = 0, g, m = e.nextNode();
            for (; f < d.length;) {
                g = d[f];
                if (!mb(g)) {
                    this.__parts.push(void 0), f++;
                    continue;
                }
                for (; h < g.index;)
                    h++, m.nodeName === "TEMPLATE" && (c.push(m), e.currentNode = m.content), (m = e.nextNode()) === null && (e.currentNode = c.pop(), m = e.nextNode());
                if (g.type === "node") {
                    var J = this.processor.handleTextExpression(this.options);
                    J.insertAfterNode(m.previousSibling), this.__parts.push(J);
                }
                else
                    (_b = this.__parts).push.apply(_b, __spread(this.processor.handleAttributeExpressions(m, g.name, g.strings, this.options)));
                f++;
            }
            return ya && (document.adoptNode(a), customElements.upgrade(a)), a;
        };
        return za;
    }());
    var ub = " " + F + " ";
    var na = (function () {
        function na(a, c, d, e) {
            this.strings = a, this.values = c, this.type = d, this.processor = e;
        }
        na.prototype.getHTML = function () { var a = this.strings.length - 1; var c = "", d = !1; for (var e = 0; e < a; e++) {
            var f = this.strings[e], h = f.lastIndexOf("<!--");
            d = (h > -1 || d) && f.indexOf("-->", h + 1) === -1;
            var g = oa.exec(f);
            g === null ? c += f + (d ? ub : Ba) : c += f.substr(0, g.index) + g[1] + g[2] + Y + g[3] + F;
        } return c += this.strings[a], c; };
        na.prototype.getTemplateElement = function () { var a = document.createElement("template"); return a.innerHTML = this.getHTML(), a; };
        return na;
    }());
    var Aa = function (a) { return a === null || !(typeof a === "object" || typeof a === "function"); }, fb = function (a) { return Array.isArray(a) || !!(a && a[Symbol.iterator]); };
    var xa = (function () {
        function xa(a, c, d) {
            this.dirty = !0, this.element = a, this.name = c, this.strings = d, this.parts = [];
            for (var e = 0; e < d.length - 1; e++)
                this.parts[e] = this._createPart();
        }
        xa.prototype._createPart = function () { return new gb(this); };
        xa.prototype._getValue = function () {
            var e_5, _b;
            var a = this.strings, c = a.length - 1;
            var d = "";
            for (var e = 0; e < c; e++) {
                d += a[e];
                var f = this.parts[e];
                if (f !== void 0) {
                    var h = f.value;
                    if (Aa(h) || !fb(h))
                        d += typeof h === "string" ? h : String(h);
                    else
                        try {
                            for (var h_1 = (e_5 = void 0, __values(h)), h_1_1 = h_1.next(); !h_1_1.done; h_1_1 = h_1.next()) {
                                var g = h_1_1.value;
                                d += typeof g === "string" ? g : String(g);
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (h_1_1 && !h_1_1.done && (_b = h_1.return)) _b.call(h_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                }
            }
            return d += a[c], d;
        };
        xa.prototype.commit = function () { this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue())); };
        return xa;
    }());
    var gb = (function () {
        function gb(a) {
            this.value = void 0, this.committer = a;
        }
        gb.prototype.setValue = function (a) { a !== A && (!Aa(a) || a !== this.value) && (this.value = a, X(a) || (this.committer.dirty = !0)); };
        gb.prototype.commit = function () { for (; X(this.value);) {
            var a = this.value;
            this.value = A, a(this);
        } if (this.value === A)
            return; this.committer.commit(); };
        return gb;
    }());
    var aa = (function () {
        function aa(a) {
            this.value = void 0, this.__pendingValue = void 0, this.options = a;
        }
        aa.prototype.appendInto = function (a) { this.startNode = a.appendChild(I()), this.endNode = a.appendChild(I()); };
        aa.prototype.insertAfterNode = function (a) { this.startNode = a, this.endNode = a.nextSibling; };
        aa.prototype.appendIntoPart = function (a) { a.__insert(this.startNode = I()), a.__insert(this.endNode = I()); };
        aa.prototype.insertAfterPart = function (a) { a.__insert(this.startNode = I()), this.endNode = a.endNode, a.endNode = this.startNode; };
        aa.prototype.setValue = function (a) { this.__pendingValue = a; };
        aa.prototype.commit = function () { if (this.startNode.parentNode === null)
            return; for (; X(this.__pendingValue);) {
            var c = this.__pendingValue;
            this.__pendingValue = A, c(this);
        } var a = this.__pendingValue; if (a === A)
            return; Aa(a) ? a !== this.value && this.__commitText(a) : a instanceof na ? this.__commitTemplateResult(a) : a instanceof Node ? this.__commitNode(a) : fb(a) ? this.__commitIterable(a) : a === U ? (this.value = U, this.clear()) : this.__commitText(a); };
        aa.prototype.__insert = function (a) { this.endNode.parentNode.insertBefore(a, this.endNode); };
        aa.prototype.__commitNode = function (a) { if (this.value === a)
            return; this.clear(), this.__insert(a), this.value = a; };
        aa.prototype.__commitText = function (a) { var c = this.startNode.nextSibling; a = a == null ? "" : a; var d = typeof a === "string" ? a : String(a); c === this.endNode.previousSibling && c.nodeType === 3 ? c.data = d : this.__commitNode(document.createTextNode(d)), this.value = a; };
        aa.prototype.__commitTemplateResult = function (a) { var c = this.options.templateFactory(a); if (this.value instanceof za && this.value.template === c)
            this.value.update(a.values);
        else {
            var d = new za(c, a.processor, this.options), e = d._clone();
            d.update(a.values), this.__commitNode(e), this.value = d;
        } };
        aa.prototype.__commitIterable = function (a) {
            var e_6, _b;
            Array.isArray(this.value) || (this.value = [], this.clear());
            var c = this.value;
            var d = 0, e;
            try {
                for (var a_1 = __values(a), a_1_1 = a_1.next(); !a_1_1.done; a_1_1 = a_1.next()) {
                    var f = a_1_1.value;
                    e = c[d], e === void 0 && (e = new aa(this.options), c.push(e), d === 0 ? e.appendIntoPart(this) : e.insertAfterPart(c[d - 1])), e.setValue(f), e.commit(), d++;
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (a_1_1 && !a_1_1.done && (_b = a_1.return)) _b.call(a_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
            d < c.length && (c.length = d, this.clear(e && e.endNode));
        };
        aa.prototype.clear = function (a) {
            if (a === void 0) { a = this.startNode; }
            ma(this.startNode.parentNode, a.nextSibling, this.endNode);
        };
        return aa;
    }());
    var bb = (function () {
        function bb(a, c, d) {
            this.value = void 0, this.__pendingValue = void 0;
            if (d.length !== 2 || d[0] !== "" || d[1] !== "")
                throw new Error("Boolean attributes can only contain a single expression");
            this.element = a, this.name = c, this.strings = d;
        }
        bb.prototype.setValue = function (a) { this.__pendingValue = a; };
        bb.prototype.commit = function () { for (; X(this.__pendingValue);) {
            var c = this.__pendingValue;
            this.__pendingValue = A, c(this);
        } if (this.__pendingValue === A)
            return; var a = !!this.__pendingValue; this.value !== a && (a ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = a), this.__pendingValue = A; };
        return bb;
    }());
    var db = (function (_super) {
        __extends(db, _super);
        function db(a, c, d) {
            var _this = _super.call(this, a, c, d) || this;
            _this.single = d.length === 2 && d[0] === "" && d[1] === "";
            return _this;
        }
        db.prototype._createPart = function () { return new sb(this); };
        db.prototype._getValue = function () { return this.single ? this.parts[0].value : _super.prototype._getValue.call(this); };
        db.prototype.commit = function () { this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue()); };
        return db;
    }(xa));
    var sb = (function (_super) {
        __extends(sb, _super);
        function sb() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return sb;
    }(gb));
    var hb = !1;
    (function () { try {
        var a = { get capture() { return hb = !0, !1; } };
        window.addEventListener("test", a, a), window.removeEventListener("test", a, a);
    }
    catch (a) { } })();
    var cb = (function () {
        function cb(a, c, d) {
            var _this = this;
            this.value = void 0, this.__pendingValue = void 0, this.element = a, this.eventName = c, this.eventContext = d, this.__boundHandleEvent = function (e) { return _this.handleEvent(e); };
        }
        cb.prototype.setValue = function (a) { this.__pendingValue = a; };
        cb.prototype.commit = function () { for (; X(this.__pendingValue);) {
            var f = this.__pendingValue;
            this.__pendingValue = A, f(this);
        } if (this.__pendingValue === A)
            return; var a = this.__pendingValue, c = this.value, d = a == null || c != null && (a.capture !== c.capture || a.once !== c.once || a.passive !== c.passive), e = a != null && (c == null || d); d && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), e && (this.__options = tb(a), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = a, this.__pendingValue = A; };
        cb.prototype.handleEvent = function (a) { typeof this.value === "function" ? this.value.call(this.eventContext || this.element, a) : this.value.handleEvent(a); };
        return cb;
    }());
    var tb = function (a) { return a && (hb ? { capture: a.capture, passive: a.passive, once: a.once } : a.capture); };
    var qb = (function () {
        function qb() {
        }
        qb.prototype.handleAttributeExpressions = function (a, c, d, e) { var f = c[0]; if (f === ".") {
            var g = new db(a, c.slice(1), d);
            return g.parts;
        } if (f === "@")
            return [new cb(a, c.slice(1), e.eventContext)]; if (f === "?")
            return [new bb(a, c.slice(1), d)]; var h = new xa(a, c, d); return h.parts; };
        qb.prototype.handleTextExpression = function (a) { return new aa(a); };
        return qb;
    }());
    var eb = new qb();
    function ib(a) { var c = lb.get(a.type); c === void 0 && (c = { stringsArray: new WeakMap(), keyString: new Map() }, lb.set(a.type, c)); var d = c.stringsArray.get(a.strings); if (d !== void 0)
        return d; var e = a.strings.join(F); return d = c.keyString.get(e), d === void 0 && (d = new kb(a, a.getTemplateElement()), c.keyString.set(e, d)), c.stringsArray.set(a.strings, d), d; }
    var lb = new Map();
    var jb = new WeakMap(), O = function (a, c, d) { var e = jb.get(c); e === void 0 && (ma(c, c.firstChild), jb.set(c, e = new aa(Object.assign({ templateFactory: ib }, d))), e.appendInto(c)), e.setValue(a), e.commit(); };
    typeof window !== "undefined" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.2.1");
    var i = function (a) {
        var c = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            c[_i - 1] = arguments[_i];
        }
        return new na(a, c, "html", eb);
    };
    var v = function (a) { return document.getElementById(a); };
    function Z() { return Math.round(new Date().getTime() * Math.random()); }
    function _(a) {
        if (a === void 0) { a = ""; }
        return a.replace(/\W+|[-_]/g, "-");
    }
    function C(a, c) {
        var a_2, a_2_1, d, _b, e_7_1;
        var e_7, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 7, 8, 9]);
                    a_2 = __values(a), a_2_1 = a_2.next();
                    _d.label = 1;
                case 1:
                    if (!!a_2_1.done) return [3, 6];
                    d = a_2_1.value;
                    return [4, { section: d, parent: c }];
                case 2:
                    _d.sent();
                    _b = d.children;
                    if (!_b) return [3, 4];
                    return [5, __values(C(d.children, d))];
                case 3:
                    _b = (_d.sent());
                    _d.label = 4;
                case 4:
                    _b;
                    _d.label = 5;
                case 5:
                    a_2_1 = a_2.next();
                    return [3, 1];
                case 6: return [3, 9];
                case 7:
                    e_7_1 = _d.sent();
                    e_7 = { error: e_7_1 };
                    return [3, 9];
                case 8:
                    try {
                        if (a_2_1 && !a_2_1.done && (_c = a_2.return)) _c.call(a_2);
                    }
                    finally { if (e_7) throw e_7.error; }
                    return [7];
                case 9: return [2];
            }
        });
    }
    function t(a) { var c = a.closest("section"); return parseInt(c.id); }
    function V(a) { var c = a.closest(".field"); return parseInt(c.id); }
    function E(a) {
        var e_8, _b;
        var c;
        try {
            for (var _c = __values(C(b.now.children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = _d.value, d = _e.section, e = _e.parent;
                if (d.id == a) {
                    c = d;
                    break;
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return c;
    }
    function la(a) { var c = a.closest("section"), d = c.getAttribute("data-section-depth"); return parseInt(d); }
    function ia(a, c, d) { var _b; var e = a[c] || [], f = e[d]; e.splice(d, 1), e.splice(d - 1, 0, f), n(), l(), b.hasChanged = !0, document.activeElement.blur(); try {
        (_b = document.querySelector("[id=\"" + f.id + "\"] .moveUp")) === null || _b === void 0 ? void 0 : _b.focus();
    }
    catch (h) { } }
    function ha(a, c, d) { var _b; var e = a[c] || [], f = e[d]; e.splice(d, 1), e.splice(d + 1, 0, f), n(), l(), b.hasChanged = !0, document.activeElement.blur(); try {
        (_b = document.querySelector("[id=\"" + f.id + "\"] .moveDown")) === null || _b === void 0 ? void 0 : _b.focus();
    }
    catch (h) { } }
    function M() {
        var e_9, _b;
        var _c, _d;
        b.now.fieldTypes = b.now.selected.template.fieldTypes || [], b.now.globalTypes = b.now.selected.template.globalTypes || b.now.globalTypes, b.now.selected.fieldType = ((_c = b.now.fieldTypes) === null || _c === void 0 ? void 0 : _c[0]) || {}, b.now.selected.globalType = ((_d = b.now.globalTypes) === null || _d === void 0 ? void 0 : _d[0]) || {};
        try {
            for (var _e = __values(C(b.now.children)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var _g = _f.value, a = _g.section, c = _g.parent;
                if (!a.fields.length)
                    continue;
                a.fields.map(function (d) { var _b; d.type = b.now.fieldTypes.find(function (e) { var _b; return e.id == ((_b = d.type) === null || _b === void 0 ? void 0 : _b.id); }) || ((_b = b.now.fieldTypes) === null || _b === void 0 ? void 0 : _b[0]); });
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_9) throw e_9.error; }
        }
    }
    var L = (function () {
        function L(a) {
            if (a === void 0) { a = 0; }
            this.id = Z(), this.depth = a, this.text = "", this.html = "", this.children = [], this.fields = [];
        }
        return L;
    }());
    var ca = (function () {
        function ca() {
            this.id = Z(), this.value = "", this.type = 0;
        }
        return ca;
    }());
    var pa = (function () {
        function pa(a) {
            this.id = Z(), this.name = a, this.css = "";
        }
        return pa;
    }());
    var Ca = (function () {
        function Ca(a) {
            this.id = Z(), this.name = a;
        }
        return Ca;
    }());
    var da = (function (_super) {
        __extends(da, _super);
        function da(a) {
            var _this = _super.call(this, a) || this;
            _this.type = "field type", _this.css = "";
            return _this;
        }
        return da;
    }(Ca));
    var ea = (function (_super) {
        __extends(ea, _super);
        function ea(a) {
            var _this = _super.call(this, a) || this;
            _this.type = "template", _this.fieldTypes = [], _this.globalTypes = [];
            return _this;
        }
        return ea;
    }(Ca));
    var z = ["Chapter", "Section", "Block"], R = { h1: "Lvl 1 Heading", h2: "Lvl 2 Heading", h3: "Lvl 3 Heading", h4: "Lvl 4 Heading", h5: "Lvl 5 Heading", h6: "Lvl 6 Heading", hr: "Horizontal Rules", p: "Paragraph", blockquote: "Block Quote", ul: "Unordered List", ol: "Ordered List", li: "List Item", a: "Link", strong: "Bolded Text", em: "Italic Text", code: "Code", img: "Image" }, w = { previewPane: v("preview"), toolbar: v("toolbar"), contentEditorPane: v("content_editor"), styleEditorPane: v("style_editor"), modal: v("modal"), customStyles: v("custom_styles"), walkThroughDialogue: v("walkthrough_dialogue"), mobileNav: v("mobile_nav") }, H = { throttle: 60, mobileBreakpoint: 960, saveInterval: 2000, zoom: { min: .5, max: 2, interval: .1 } };
    var Da;
    try {
        Da = JSON.parse(localStorage.getItem("State"));
    }
    catch (a) {
        console.log("No previous data found.");
    }
    var b = Da || { now: { children: [], fieldTypes: [], globalTypes: z.map(function (a) { return new pa(a); }).concat(Object.values(R).map(function (a) { return new pa(a); })), selected: { fieldType: {}, globalType: {}, template: {} }, editing: {} }, nowIndex: 0, settings: { zoom: 1, darkMode: !1, advancedUI: !1, messagesShown: !1 }, walkthroughIndex: 0, history: [], templates: [], hasChanged: !1, isNewUser: !0, isMobile: innerWidth <= H.mobileBreakpoint, lastSaved: new Date(), forExport: "" };
    var Wa = function (a) {
        var e_10, _b;
        var _c;
        var c = t(a.target), d = la(a.target), e;
        try {
            for (var _d = __values(C(b.now.children, b.now)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = _e.value, f = _f.section, h = _f.parent;
                if (f.id == c) {
                    var g = new L(d);
                    h.children.push(g), e = g.id;
                    break;
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_10) throw e_10.error; }
        }
        b.hasChanged = !0, n(), b.isMobile || ((_c = document.querySelector("[id=\"" + e + "\"] textarea")) === null || _c === void 0 ? void 0 : _c.focus());
    };
    var Xa = function (a) {
        var e_11, _b;
        var _c;
        var c = t(a.target), d = la(a.target), e;
        try {
            for (var _d = __values(C(b.now.children, b.now)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = _e.value, f = _f.section, h = _f.parent;
                if (f.id == c) {
                    var g = new L(d + 1);
                    f.children.unshift(g), e = g.id;
                    break;
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_11) throw e_11.error; }
        }
        b.hasChanged = !0, n(), b.isMobile || ((_c = document.querySelector("[id=\"" + e + "\"] textarea")) === null || _c === void 0 ? void 0 : _c.focus());
    };
    var Ya = function (a) {
        var e_12, _b;
        var c = t(a.target);
        var _loop_1 = function (d, e) {
            if (d.id != c)
                return "continue";
            e.children = e.children.filter(function (f) { return f != d; });
        };
        try {
            for (var _c = __values(C(b.now.children, b.now)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = _d.value, d = _e.section, e = _e.parent;
                _loop_1(d, e);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        b.hasChanged = !0, l(), n();
    };
    var Za = function (a) { var c = t(a.target), d = E(c); d.text = a.target.value, b.hasChanged = !0, l(); };
    var S = { addSiblingSection: Wa, addChildSection: Xa, removeSection: Ya, updateSection: Za };
    var La = function (a) { var _b; var c = t(a.target), d = E(c), e = new ca(); e.type = b.now.fieldTypes[0], d.fields.push(e), b.hasChanged = !0, n(), b.isMobile || ((_b = document.querySelector("[id=\"" + e.id + "\"] input")) === null || _b === void 0 ? void 0 : _b.focus()); };
    var Ma = function (a) { var c = t(a.target), d = E(c), e = V(a.target); d.fields = d.fields.filter(function (f) { return f.id != e; }), b.hasChanged = !0, n(), l(); };
    var Na = function (a) { var c = t(a.target), d = E(c), e = V(a.target), f = d.fields.find(function (h) { return h.id == e; }); f.value = a.target.value, b.hasChanged = !0, l(); };
    var Oa = function (a) { var c = a.target.value, d = V(a.target), e = t(a.target), f = E(e), h = f.fields.find(function (g) { return g.id == d; }); h.type = b.now.fieldTypes.find(function (g) { return g.id == c; }), b.hasChanged = !0, l(); };
    var N = { addField: La, removeField: Ma, updateFieldValue: Na, updateFieldType: Oa };
    var _a = function (a) { var c = a.target.textContent || ""; a.target.id.includes("global") && (b.now.selected.globalType.css = c, b.hasChanged = !0), a.target.id.includes("field") && (b.now.selected.fieldType.css = c, b.hasChanged = !0), s(); };
    var W = function (a) { var c = a.target || a, d = function (e, f) { return "<span class=\"token " + f + "\">" + e + "</span>"; }; c.innerHTML = c.innerText.replace(/\n/g, "").replace(/;/g, d(";", "newline")).replace(/[,:](?!\s)/g, function (e) { return e + " "; }); };
    var $a = function (a) { var c = a.target.value, d = v("field_type_styles"), e = b.now.fieldTypes.find(function (f) { return f.id == c; }); if (e)
        e.css || (e.css = ""), b.now.selected.fieldType = e;
    else {
        var f = { id: c, css: "" };
        b.now.fieldTypes.push(f), b.now.selected.fieldType = f;
    } d.innerHTML = b.now.selected.fieldType.css, W(d), b.hasChanged = !0, l(); };
    var ab = function (a) { var c = v("global_type_styles"), d = a.target.value, e = b.now.globalTypes.find(function (f) { return f.name == d; }); if (e)
        e.css || (e.css = ""), b.now.selected.globalType = e;
    else {
        var f = { id: d, css: "" };
        b.now.globalTypes.push(f), b.now.selected.globalType = f;
    } c.innerHTML = b.now.selected.globalType.css, W(c), b.hasChanged = !0, l(); };
    var B = { updateStyles: _a, updateCurrentFieldType: $a, updateCurrentGlobalType: ab, formatCSS: W };
    var Ha = function (a) { var _b, _c; if (a == "template") {
        b.templates = b.templates.filter(function (c) { return JSON.parse(c).id != b.now.selected.template.id; });
        try {
            b.now.selected.template = JSON.parse((_b = b.templates) === null || _b === void 0 ? void 0 : _b[0]) || {};
        }
        catch (c) { }
    } a == "field type" && (b.now.fieldTypes = b.now.fieldTypes.filter(function (c) { return c.id != b.now.selected.fieldType.id; }), b.now.selected.template.fieldTypes = b.now.fieldTypes, b.now.selected.fieldType = ((_c = b.now.fieldTypes) === null || _c === void 0 ? void 0 : _c[0]) || {}), b.now.editing = {}, b.hasChanged = !0, u(null), n(), o(), r(), s(), l(); };
    var Ia = function (a) { var _b; b.now.editing[a.target.name] = a.target.value, ((_b = b.now.editing) === null || _b === void 0 ? void 0 : _b.type) == "template" && b.templates.map(function (c, d) { var e = JSON.parse(c), f = e.id == b.now.editing.id; f && b.templates.splice(d, 1, JSON.stringify(b.now.editing)); }), b.hasChanged = !0, n(), o(), r(), s(); };
    var Ka = function () {
        var e_13, _b;
        b.now.selected.fieldType = b.now.fieldTypes[b.now.fieldTypes.length - 1], b.now.selected.template.fieldTypes = b.now.fieldTypes;
        if (b.now.fieldTypes.length == 1)
            try {
                for (var _c = __values(C(b.now.children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = _d.value, a = _e.section, c = _e.parent;
                    a.fields.map(function (d) { return d.type = b.now.fieldTypes[0]; });
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_13) throw e_13.error; }
            }
    };
    var Ja = function (a) { var _b; b.now.editing.name = b.now.editing.name.trim(); if (!b.now.editing.name.length) {
        u(null);
        return;
    } a == "field type" && (b.now.fieldTypes.push(new da(b.now.editing.name)), Ka(), (_b = w.styleEditorPane.querySelector("code")) === null || _b === void 0 ? void 0 : _b.focus()); if (a == "template") {
        var c = new ea(b.now.editing.name);
        c.fieldTypes = b.now.fieldTypes, c.globalTypes = b.now.globalTypes, b.templates.push(JSON.stringify(c)), b.now.selected.template = c;
    } b.now.editing = {}, b.hasChanged = !0, n(), o(), l(), r(), u(null); };
    var $ = { removeType: Ha, updateType: Ia, saveNewType: Ja };
    var Pa = function (a) { var c = b.settings.darkMode; document.documentElement.classList.toggle("dark_mode", !c), b.settings.darkMode = !c, b.hasChanged = !0, o(); };
    var Qa = function (a) { var c = b.settings.advancedUI; document.documentElement.classList.toggle("advanced", !c), b.settings.advancedUI = !c, b.hasChanged = !0, o(); };
    var ka = function (a) {
        var e_14, _b;
        if (!confirm("Are you sure you want to load this template?"))
            return;
        try {
            for (var _c = __values(b.templates), _d = _c.next(); !_d.done; _d = _c.next()) {
                var c = _d.value;
                var d = JSON.parse(c);
                if (d.id == a.target.value) {
                    b.now.selected.template = d, M(), n(), o(), l(), r(), s(), b.hasChanged = !0;
                    break;
                }
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_14) throw e_14.error; }
        }
    };
    var Ra = function (a) { return window.print(); };
    var Sa = function (a) { var c = a.target.files[0], d = new FileReader(); d.onerror = function () { console.error(this.error); }, d.onload = function () { var e = JSON.parse(this.result); Object.keys(b).map(function (f) { return b[f] = e[f]; }), M(), n(), o(), l(), r(), s(); }, document.body.classList.add("importing"), d.readAsText(c); };
    var Ta = function (a) { b.now.children = [], b.now.fieldTypes = [], b.now.editing = {}, b.now.selected = { fieldType: {}, globalType: {}, template: {} }, b.templates = [], b.settings = { zoom: 1, darkMode: !1, advancedUI: !1 }, n(), o(), l(), r(), s(), b.now.children.push(new L()), n(), b.hasChanged = !0; };
    var Ua = function (a) { document.body.setAttribute("data-selected-pane", a); };
    var Va = function (a) {
        if (a === void 0) { a = ""; }
        var c = a.toLowerCase(), d = b.settings.zoom;
        c == "out" && d > H.zoom.min && (d = d - H.zoom.interval), c == "in" && d < H.zoom.max && (d = d + H.zoom.interval), d != b.settings.zoom && (b.settings.zoom = d, b.hasChanged = !0, o());
    };
    var x = { toggleDarkMode: Pa, toggleAdvancedUI: Qa, loadTemplate: ka, printDocument: Ra, importData: Sa, clearData: Ta, switchPane: Ua, zoom: Va };
    var ja = function (_b) {
        var _c = _b === void 0 ? {} : _b, _d = _c.global, a = _d === void 0 ? !1 : _d, _e = _c.field, c = _e === void 0 ? {} : _e;
        var _f, _g, _h, _j;
        if (!((_f = b.now.fieldTypes) === null || _f === void 0 ? void 0 : _f.length))
            return;
        var d = a ? (_g = b.now.selected.fieldType) === null || _g === void 0 ? void 0 : _g.id : (_j = (_h = c) === null || _h === void 0 ? void 0 : _h.type) === null || _j === void 0 ? void 0 : _j.id;
        return i(__makeTemplateObject(["\n    <select name=type @input=", ">\n\n        ", "\n\n    </select>"], ["\n    <select name=type @input=", ">\n\n        ",
            "\n\n    </select>"]), a ? B.updateCurrentFieldType : N.updateFieldType, b.now.fieldTypes.map(function (e) { return i(__makeTemplateObject(["\n            <option value=", " ?selected=", ">\n                ", "\n            </option>\n        "], ["\n            <option value=", " ?selected=", ">\n                ", "\n            </option>\n        "]), e.id, e.id == d, e.name); }));
    };
    var Fa = function (a, c, d) { return i(__makeTemplateObject(["\n<div \nclass=field \nid=", ">\n\n    <input \n    placeholder=\"Field value...\"\n    type=text \n    .value=", " \n    @input=", " />\n\n    ", "\n\n    <button \n    @click=", " \n    class=remove>\n        Remove\n    </button>\n\n    <button\n    data-icon\n    @click=", "\n    ?disabled=", "\n    class=\"move moveDown\">\n    </button>\n\n    <button\n    data-icon\n    @click=", "\n    ?disabled=", " \n    class=\"move moveUp\">\n    </button>\n\n</div>"], ["\n<div \nclass=field \nid=", ">\n\n    <input \n    placeholder=\"Field value...\"\n    type=text \n    .value=", " \n    @input=", " />\n\n    ", "\n\n    <button \n    @click=", " \n    class=remove>\n        Remove\n    </button>\n\n    <button\n    data-icon\n    @click=", "\n    ?disabled=", "\n    class=\"move moveDown\">\n    </button>\n\n    <button\n    data-icon\n    @click=", "\n    ?disabled=", " \n    class=\"move moveUp\">\n    </button>\n\n</div>"]), a.id, a.value, N.updateFieldValue, ja({ field: a }), N.removeField, ha.bind(void 0, c, "fields", d), d >= c.fields.length - 1, ia.bind(void 0, c, "fields", d), !d); };
    function fa(a, c, d) {
        var e = b.now.children.length, f = a.depth, h = f == z.length - 1;
        return i(__makeTemplateObject(["\n    <section \n    id=", " \n    data-section-depth=", ">\n\n        <div class=fields>\n            ", "\n        </div>\n\n        <textarea \n        id=\"", "-text\"\n        placeholder=", " \n        @input=", " \n        .value=", ">\n        </textarea>\n\n        <div class=actions>\n\n            <button \n            data-icon=add_another\n            title=", "\n            @click=", ">\n            </button>\n\n            ", "\n\n            <button \n            class=add\n            data-icon\n            title=\"Add Field\"\n            @click=", ">\n            </button>\n\n            ", "\n\n            ", "\n\n        </div>\n\n        ", "\n\n    </section>"], ["\n    <section \n    id=", " \n    data-section-depth=", ">\n\n        <div class=fields>\n            ", "\n        </div>\n\n        <textarea \n        id=\"", "-text\"\n        placeholder=", " \n        @input=", " \n        .value=", ">\n        </textarea>\n\n        <div class=actions>\n\n            <button \n            data-icon=add_another\n            title=", "\n            @click=", ">\n            </button>\n\n            ",
            "\n\n            <button \n            class=add\n            data-icon\n            title=\"Add Field\"\n            @click=", ">\n            </button>\n\n            ",
            "\n\n            ",
            "\n\n        </div>\n\n        ", "\n\n    </section>"]), a.id, a.depth, a.fields.map(function (g, m) { return Fa(g, a, m); }), a.id, "Write something for this " + z[f].toLowerCase() + "...", S.updateSection, a.text, "Add " + z[f], S.addSiblingSection, h ? "" : i(__makeTemplateObject(["\n            <button \n            data-icon=add_sub\n            title=", "\n            @click=", ">\n            </button>"], ["\n            <button \n            data-icon=add_sub\n            title=", "\n            @click=", ">\n            </button>"]), "Add " + z[f + 1], S.addChildSection), N.addField, e > 1 || f ? i(__makeTemplateObject(["\n            <button \n            class=remove\n            @click=", ">\n            Remove\n            </button>"], ["\n            <button \n            class=remove\n            @click=", ">\n            Remove\n            </button>"]), S.removeSection) : "", c.children.length > 1 ? i(__makeTemplateObject(["\n\n            <button \n            class=\"move moveDown\" \n            data-icon\n            title=\"Move Down\"\n            ?disabled=", " \n            @click=", ">\n            </button>\n\n            <button \n            class=\"move moveUp\"\n            data-icon\n            title=\"Move Up\"\n            ?disabled=", " \n            @click=", ">\n            </button>\n            \n            "], ["\n\n            <button \n            class=\"move moveDown\" \n            data-icon\n            title=\"Move Down\"\n            ?disabled=", " \n            @click=", ">\n            </button>\n\n            <button \n            class=\"move moveUp\"\n            data-icon\n            title=\"Move Up\"\n            ?disabled=", " \n            @click=", ">\n            </button>\n            \n            "]), d >= c.children.length - 1, ha.bind(this, c, "children", d), !d, ia.bind(this, c, "children", d)) : "", a.children.length ? a.children.map(function (g, m) { return fa(g, a, m); }) : "");
    }
    var vb = { "": ["<em>", "</em>"], _: ["<strong>", "</strong>"], "*": ["<strong>", "</strong>"], "~": ["<s>", "</s>"], "\n": ["<br />"], " ": ["<br />"], "-": ["<hr />"] };
    function pb(a) { return a.replace(RegExp("^" + (a.match(/^(\t| )+/) || "")[0], "gm"), ""); }
    function ba(a) { return (a + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    function T(a, c) { var d = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm, e = [], f = "", h = c || {}, g = 0, m, J, j, k, p; function P(q) { var y = vb[q[1] || ""], D = e[e.length - 1] == q; return y ? y[1] ? (D ? e.pop() : e.push(q), y[D | 0]) : y[0] : q; } function G() { var q = ""; for (; e.length;)
        q += P(e[e.length - 1]); return q; } for (a = a.replace(/^\[(.+?)\]:\s*(.+)$/gm, function (q, y, D) { return (h[y.toLowerCase()] = D, ""); }).replace(/^\n+|\n+$/g, ""); j = d.exec(a);)
        J = a.substring(g, j.index), g = d.lastIndex, m = j[0], J.match(/[^\\](\\\\)*\\$/) || ((p = j[3] || j[4]) ? m = '<pre class="code ' + (j[4] ? "poetry" : j[2].toLowerCase()) + '"><code' + (j[2] ? " class=\"language-" + j[2].toLowerCase() + "\"" : "") + ">" + pb(ba(p).replace(/^\n+|\n+$/g, "")) + "</code></pre>" : (p = j[6]) ? (p.match(/\./) && (j[5] = j[5].replace(/^\d+/gm, "")), k = T(pb(j[5].replace(/^\s*[>*+.-]/gm, ""))), p == ">" ? p = "blockquote" : (p = p.match(/\./) ? "ol" : "ul", k = k.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")), m = "<" + p + ">" + k + "</" + p + ">") : j[8] ? m = "<img src=\"" + ba(j[8]) + "\" alt=\"" + ba(j[7]) + "\">" : j[10] ? (f = f.replace("<a>", "<a href=\"" + ba(j[11] || h[J.toLowerCase()]) + "\">"), m = G() + "</a>") : j[9] ? m = "<a>" : j[12] || j[14] ? (p = "h" + (j[14] ? j[14].length : j[13] > "=" ? 1 : 2), m = "<" + p + ">" + T(j[12] || j[15], h) + "</" + p + ">") : j[16] ? m = "<code>" + ba(j[16]) + "</code>" : (j[17] || j[1]) && (m = P(j[17] || "--"))), f += J, f += m; return (f + a.substring(g) + G()).replace(/^\n+|\n+$/g, ""); }
    var Ga = function (a) {
        var _b;
        var c = b.now.fieldTypes.find(function (e) { var _b, _c; return e.id == ((_c = (_b = a) === null || _b === void 0 ? void 0 : _b.type) === null || _c === void 0 ? void 0 : _c.id); }), d = document.createElement("div");
        return d.innerHTML = T(a.value), /<p>/.test(d.innerHTML) && (d.innerHTML = d.firstElementChild.innerHTML), i(__makeTemplateObject(["\n    <div class=", ">\n        ", "\n    </div>"], ["\n    <div class=", ">\n        ", "\n    </div>"]), _(((_b = c) === null || _b === void 0 ? void 0 : _b.name) || ""), d);
    };
    function ga(a) {
        var c = document.createElement("div");
        return c.classList.add("content"), c.innerHTML = T(a.text), i(__makeTemplateObject(["\n    <section class=", ">\n    \n        ", "\n    \n        ", "\n    \n        ", "\n    \n    </section>"], ["\n    <section class=", ">\n    \n        ", "\n    \n        ", "\n    \n        ", "\n    \n    </section>"]), z[a.depth], a.fields.map(function (d) { return Ga(d); }), a.text.length ? c : "", a.children.map(function (d) { return ga(d); }));
    }
    var sa = function () {
        var _b;
        return i(__makeTemplateObject(["\n\n<div class=\"heading\">\n    Style Editor\n    <span tabindex=\"0\" data-tooltip=\"This pane is for editing your document's styles. Apply valid CSS rules to any custom field type or global element.\"></span>\n</div>\n\n<section id=manageFieldTypes>\n\n    <div class=actions>\n\n        <label>Field Styles</label>\n\n        ", "\n\n        ", "\n\n        <button \n        class=add \n        data-icon\n        title=\"New Field Type\"\n        @click=", ">\n        </button>\n        \n    </div>\n\n    <code \n    spellcheck=false\n    id=field_type_styles\n    class=language-css \n    contenteditable=true \n    @focusout=", "\n    @keyup=", "></code>\n    \n</section>\n\n\n<section id=manageGlobalTypes>\n\n    <div class=actions>\n\n        <label>Global Styles</label>\n\n        <select id=global-style-select @input=", ">\n\n            <optgroup label=Layout>\n            ", "\n            </optgroup>\n\n            <optgroup label=Elements>\n                ", "\n            </optgroup>\n        </select>\n\n    </div>\n\n    <code\n    spellcheck=false\n    id=global_type_styles\n    class=language-css\n    contenteditable=true\n    @focusout=", "\n    @keyup=", "></code>\n\n</section>\n"], ["\n\n<div class=\"heading\">\n    Style Editor\n    <span tabindex=\"0\" data-tooltip=\"This pane is for editing your document's styles. Apply valid CSS rules to any custom field type or global element.\"></span>\n</div>\n\n<section id=manageFieldTypes>\n\n    <div class=actions>\n\n        <label>Field Styles</label>\n\n        ", "\n\n        ",
            "\n\n        <button \n        class=add \n        data-icon\n        title=\"New Field Type\"\n        @click=", ">\n        </button>\n        \n    </div>\n\n    <code \n    spellcheck=false\n    id=field_type_styles\n    class=language-css \n    contenteditable=true \n    @focusout=", "\n    @keyup=", "></code>\n    \n</section>\n\n\n<section id=manageGlobalTypes>\n\n    <div class=actions>\n\n        <label>Global Styles</label>\n\n        <select id=global-style-select @input=", ">\n\n            <optgroup label=Layout>\n            ",
            "\n            </optgroup>\n\n            <optgroup label=Elements>\n                ",
            "\n            </optgroup>\n        </select>\n\n    </div>\n\n    <code\n    spellcheck=false\n    id=global_type_styles\n    class=language-css\n    contenteditable=true\n    @focusout=", "\n    @keyup=", "></code>\n\n</section>\n"]), ja({ global: !0 }), ((_b = b.now.fieldTypes) === null || _b === void 0 ? void 0 : _b.length) ? i(__makeTemplateObject(["\n        <button \n        data-icon\n        title=\"Edit Field Type\"\n        @click=", ">\n        </button>"], ["\n        <button \n        data-icon\n        title=\"Edit Field Type\"\n        @click=", ">\n        </button>"]), u.bind(void 0, "field type", !0)) : "", u.bind(void 0, "field type", !1), B.formatCSS, B.updateStyles, B.updateCurrentGlobalType, z.map(function (a) {
            var _b;
            return i(__makeTemplateObject(["\n                <option\n                value=", "\n                ?selected=", ">\n                    ", "s\n                </option>\n            "], ["\n                <option\n                value=", "\n                ?selected=", ">\n                    ", "s\n                </option>\n            "]), a, a == ((_b = b.now.selected.globalType) === null || _b === void 0 ? void 0 : _b.name), a);
        }), Object.values(R).map(function (a) {
            var _b;
            return i(__makeTemplateObject(["\n                    <option \n                    label=", "\n                    value=", "\n                    ?selected=", ">\n                        ", "s\n                    </option>\n                "], ["\n                    <option \n                    label=", "\n                    value=", "\n                    ?selected=", ">\n                        ", "s\n                    </option>\n                "]), a, a, a == ((_b = b.now.selected.globalType) === null || _b === void 0 ? void 0 : _b.name), a);
        }), B.formatCSS, B.updateStyles);
    };
    var ta = function () { return i(__makeTemplateObject(["\n\n", "\n\n", "\n\n", "\n"], ["\n\n", "\n\n", "\n\n", "\n"]), b.now.fieldTypes.map(function (a) { return "#preview ." + _(a.name).trim() + "{" + a.css + "}"; }), z.map(function (a) { var _b; var c = b.now.globalTypes.find(function (d) { return d.name == a; }); return "#preview ." + _(a).trim() + "{" + ((_b = c) === null || _b === void 0 ? void 0 : _b.css) + "}"; }), Object.keys(R).map(function (a) { var _b; var c = R[a], d = b.now.globalTypes.find(function (e) { return e.name == c; }); return "#preview " + a + " {" + ((_b = d) === null || _b === void 0 ? void 0 : _b.css) + "}"; })); };
    var qa = function (a) {
        if (a === void 0) { a = 0; }
        var c = b.nowIndex + a;
        b.now = JSON.parse(b.history[c]), b.nowIndex = c, M(), n(), o(), l(), r(), s();
    };
    var ua = function () {
        var _b;
        var a = b.settings;
        return i(__makeTemplateObject(["\n\n\n    <!-- Undo/Redo -->\n    <div class=configuration id=undo_redo>\n\n        <button\n        data-icon\n        title=Undo\n        ?disabled=", "\n        @click=", ">\n        </button>\n\n        <button\n        data-icon\n        title=Redo\n        ?disabled=", "\n        @click=", ">\n        </button>\n\n    </div>\n\n\n    <!-- Zoom -->\n    <div class=configuration id=zoom>\n\n        <button\n        data-icon\n        title=\"Zoom Out\"\n        @click=", ">\n        </button>\n\n        <button\n        data-icon\n        title=\"Zoom In\"\n        @click=", ">\n        </button>\n\n        <label>", "</label>\n\n    </div>\n    \n\n    <!-- Toggle Dark Mode -->\n    <div class=configuration>\n\n        <button \n        data-icon \n        title=", "\n        ?aria-pressed=", "\n        @click=", "\n        id=dark_mode_toggle>\n        </button>\n\n    </div>\n    \n\n    <!-- Toggle Advanced UI -->\n    <div class=configuration id=advancedUI_toggle>\n\n        <button\n        data-icon\n        id=\"advanced_toggle\"\n        ?aria-pressed=", "\n        title=", "\n        @click=", ">\n        </button>\n\n    </div>\n    \n\n    <!-- Template Management -->\n    <div class=configuration id=manageTemplates>\n\n        <!-- Select Template -->\n    ", "\n\n        <!-- Save New Template -->\n        <button\n        data-icon\n        title=\"New Template\"\n        @click=", ">\n        </button>\n\n    </div>\n\n\n    <!-- Print Document -->\n    <div class=configuration id=printDocument>\n        <button \n        data-icon\n        title=Print\n        @click=", ">\n        </button>\n    </div>\n\n\n    <!-- Import and Export Data -->\n    <div class=configuration id=import_export>\n\n        <a \n        class=\"button primary\"\n        data-icon\n        title=\"Export Data\"\n        id=exportData\n        .href=", "\n        download=", "\n        >\n        </a>\n\n        <input\n        aria-hidden=\"true\"\n        id=importData\n        type=file\n        accept=.json\n        @input=", ">\n\n        <label \n        data-icon\n        title=\"Import Data\"\n        class=\"fileInput secondary\"\n        for=importData>\n        </label>\n\n        <!-- Clear Data -->\n        <button\n        data-icon\n        title=\"Clear Data\"\n        class=destructive\n        @click=", ">\n        </button>\n\n    </div>\n\n\n    <!-- Last Saved -->\n    ", "\n    "], ["\n\n\n    <!-- Undo/Redo -->\n    <div class=configuration id=undo_redo>\n\n        <button\n        data-icon\n        title=Undo\n        ?disabled=", "\n        @click=", ">\n        </button>\n\n        <button\n        data-icon\n        title=Redo\n        ?disabled=", "\n        @click=", ">\n        </button>\n\n    </div>\n\n\n    <!-- Zoom -->\n    <div class=configuration id=zoom>\n\n        <button\n        data-icon\n        title=\"Zoom Out\"\n        @click=", ">\n        </button>\n\n        <button\n        data-icon\n        title=\"Zoom In\"\n        @click=", ">\n        </button>\n\n        <label>", "</label>\n\n    </div>\n    \n\n    <!-- Toggle Dark Mode -->\n    <div class=configuration>\n\n        <button \n        data-icon \n        title=", "\n        ?aria-pressed=", "\n        @click=", "\n        id=dark_mode_toggle>\n        </button>\n\n    </div>\n    \n\n    <!-- Toggle Advanced UI -->\n    <div class=configuration id=advancedUI_toggle>\n\n        <button\n        data-icon\n        id=\"advanced_toggle\"\n        ?aria-pressed=", "\n        title=", "\n        @click=", ">\n        </button>\n\n    </div>\n    \n\n    <!-- Template Management -->\n    <div class=configuration id=manageTemplates>\n\n        <!-- Select Template -->\n    ",
            "\n\n        <!-- Save New Template -->\n        <button\n        data-icon\n        title=\"New Template\"\n        @click=", ">\n        </button>\n\n    </div>\n\n\n    <!-- Print Document -->\n    <div class=configuration id=printDocument>\n        <button \n        data-icon\n        title=Print\n        @click=", ">\n        </button>\n    </div>\n\n\n    <!-- Import and Export Data -->\n    <div class=configuration id=import_export>\n\n        <a \n        class=\"button primary\"\n        data-icon\n        title=\"Export Data\"\n        id=exportData\n        .href=", "\n        download=", "\n        >\n        </a>\n\n        <input\n        aria-hidden=\"true\"\n        id=importData\n        type=file\n        accept=.json\n        @input=", ">\n\n        <label \n        data-icon\n        title=\"Import Data\"\n        class=\"fileInput secondary\"\n        for=importData>\n        </label>\n\n        <!-- Clear Data -->\n        <button\n        data-icon\n        title=\"Clear Data\"\n        class=destructive\n        @click=", ">\n        </button>\n\n    </div>\n\n\n    <!-- Last Saved -->\n    ",
            "\n    "]), b.nowIndex == 0, qa.bind(void 0, -1), b.nowIndex >= b.history.length - 1, qa.bind(void 0, 1), x.zoom.bind(void 0, "out"), x.zoom.bind(void 0, "in"), "(" + Math.round(a.zoom * 100) + "%)", "You're in " + (a.darkMode ? "Dark" : "Light") + " Mode", a.darkMode, x.toggleDarkMode, a.advancedUI, (a.advancedUI ? "Disable" : "Enable") + " Advanced UI", x.toggleAdvancedUI, b.templates.length ? i(__makeTemplateObject(["\n        <select \n        title=", " \n        @input=", ">\n\n    ", "\n\n        </select>\n\n        <!-- Edit Template -->\n        <button\n        data-icon\n        title=\"Edit Template\"\n        @click=", ">\n        </button>\n\n        "], ["\n        <select \n        title=", " \n        @input=", ">\n\n    ",
            "\n\n        </select>\n\n        <!-- Edit Template -->\n        <button\n        data-icon\n        title=\"Edit Template\"\n        @click=", ">\n        </button>\n\n        "]), "Current Template: " + b.now.selected.template.name, ka, b.templates.map(function (c) {
            var d = JSON.parse(c), e = b.now.selected.template.id == d.id;
            return i(__makeTemplateObject(["\n            <option \n            ?selected=", "\n            value=", ">\n                ", "\n            </option>"], ["\n            <option \n            ?selected=", "\n            value=", ">\n                ", "\n            </option>"]), e, d.id, d.name);
        }), u.bind(void 0, "template", !0)) : U, u.bind(void 0, "template", !1), x.printDocument, (_b = b) === null || _b === void 0 ? void 0 : _b.forExport, "My Data (" + new Date(b.lastSaved).toLocaleDateString() + ").json", x.importData, x.clearData, b.lastSaved ? i(__makeTemplateObject(["\n    <div class=configuration>\n            Saved: ", "\n    </div>\n    "], ["\n    <div class=configuration>\n            Saved: ", "\n    </div>\n    "]), new Date(b.lastSaved).toLocaleTimeString("en-us", { timeStyle: "short" })) : U);
    };
    var va = function (a, c) { return a ? (a == "field type" && (b.now.editing = c ? b.now.selected.fieldType : new da()), a == "template" && (b.now.editing = c ? b.now.selected.template : new ea()), i(__makeTemplateObject(["\n    <div class=content>\n        \n        <div class=heading>\n            ", " Editor\n            <span\n            tabindex=0 \n            data-tooltip=", ">\n            </span>\n        </div>\n\n        <input \n        name=name \n        @input=", " \n        type=text \n        placeholder=", "\n        value=", " />\n        \n        <div class=actions>\n\n            <button \n            @click=", ">\n                Done\n            </button>\n\n            ", "\n\n            <button \n            class=cancel \n            @click=", ">\n                Cancel\n            </button>\n            \n        </div>\n\n    </div>"], ["\n    <div class=content>\n        \n        <div class=heading>\n            ", " Editor\n            <span\n            tabindex=0 \n            data-tooltip=", ">\n            </span>\n        </div>\n\n        <input \n        name=name \n        @input=", " \n        type=text \n        placeholder=", "\n        value=", " />\n        \n        <div class=actions>\n\n            <button \n            @click=", ">\n                Done\n            </button>\n\n            ",
        "\n\n            <button \n            class=cancel \n            @click=", ">\n                Cancel\n            </button>\n            \n        </div>\n\n    </div>"]), b.now.editing.type, "This pane is for renaming or editing your " + b.now.editing.type + ".", $.updateType, "Name your " + b.now.editing.type + "...", c ? b.now.editing.name : "", c ? u.bind(void 0, null) : $.saveNewType.bind(void 0, b.now.editing.type), c ? i(__makeTemplateObject(["\n            <button \n            class=remove \n            @click=", ">\n                Delete ", "\n            </button>"], ["\n            <button \n            class=remove \n            @click=", ">\n                Delete ", "\n            </button>"]), $.removeType.bind(void 0, b.now.editing.type), b.now.editing.type) : "", u.bind(void 0, null))) : ""; };
    var wa = function () { return i(__makeTemplateObject(["\n\n<button \ndata-icon\ntitle=\"Switch to Content Editor\" \n@click=", ">\n</button>\n\n<button\ndata-icon\ntitle=\"Switch to Preview\"\n@click=", ">\n</button>\n\n<button\ndata-icon\ntitle=\"Switch to Style Editor\"\n@click=", ">\n</button>\n\n"], ["\n\n<button \ndata-icon\ntitle=\"Switch to Content Editor\" \n@click=", ">\n</button>\n\n<button\ndata-icon\ntitle=\"Switch to Preview\"\n@click=", ">\n</button>\n\n<button\ndata-icon\ntitle=\"Switch to Style Editor\"\n@click=", ">\n</button>\n\n"]), x.switchPane.bind(void 0, "content_editor"), x.switchPane.bind(void 0, "preview"), x.switchPane.bind(void 0, "style_editor")); };
    function l() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                O(i(__makeTemplateObject(["\n        <div class=content>\n            ", "\n        </div>"], ["\n        <div class=content>\n            ", "\n        </div>"]), b.now.children.map(function (a) { return ga(a); })), w.previewPane);
                return [2];
            });
        });
    }
    function o() {
        return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
            a = document.documentElement;
            a.style.setProperty("--preview_zoom", b.settings.zoom), a.classList.toggle("dark_mode", b.settings.darkMode), a.classList.toggle("advanced", b.settings.advancedUI), O(ua(), w.toolbar);
            return [2];
        }); });
    }
    function s() { O(ta(), w.customStyles); }
    function u(a, c) {
        if (c === void 0) { c = !1; }
        w.modal.classList.toggle("open", a), O(va(a, c), w.modal);
        if (a)
            try {
                w.modal.querySelector("input").focus();
            }
            catch (d) { }
        a || (b.now.editing = {}, o(), r(), l());
    }
    function r() {
        var e_15, _b;
        var _c, _d, _e;
        O(sa(), w.styleEditorPane);
        try {
            for (var _f = __values(w.styleEditorPane.querySelectorAll("code")), _g = _f.next(); !_g.done; _g = _f.next()) {
                var a = _g.value;
                a.innerHTML = "", a.id.includes("field") && (a.innerText = ((_c = b.now.selected.fieldType) === null || _c === void 0 ? void 0 : _c.css) || ""), a.id.includes("global") && (a.innerText = ((_d = b.now.selected.globalType) === null || _d === void 0 ? void 0 : _d.css) || ""), (_e = B) === null || _e === void 0 ? void 0 : _e.formatCSS({ target: a });
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_15) throw e_15.error; }
        }
    }
    function n() {
        O(i(__makeTemplateObject(["\n        <div class=heading>\n            Content Editor\n            <span tabindex=0\n                data-tooltip=\"This pane is for editing the content of your document. Try nesting content blocks or adding custom fields to a section.\"></span>\n        </div>\n        \n        ", "\n        "], ["\n        <div class=heading>\n            Content Editor\n            <span tabindex=0\n                data-tooltip=\"This pane is for editing the content of your document. Try nesting content blocks or adding custom fields to a section.\"></span>\n        </div>\n        \n        ", "\n        "]), b.now.children.map(function (a, c) { return fa(a, b.now, c); })), w.contentEditorPane);
    }
    function Ea() { O(wa(), w.mobileNav); }
    function ra(a) {
        if (a === void 0) { a = !1; }
        return __awaiter(this, void 0, void 0, function () { var c, d, e; return __generator(this, function (_b) {
            if (!b.hasChanged && !a)
                return [2];
            b.templates.map(function (f, h) { var g = JSON.parse(f), m = g.id == b.now.selected.template.id; m && b.templates.splice(h, 1, JSON.stringify(b.now.selected.template)); }), localStorage.setItem("State", JSON.stringify(b)), b.history.push(JSON.stringify(b.now)), b.nowIndex = b.history.length - 1, b.history.length > 250 && b.history.splice(0, 1), b.hasChanged = !1, b.lastSaved = new Date().getTime();
            c = JSON.stringify(b, function (f, h) { return f == "history" ? [] : h; }), d = new Blob([c], { type: "application/json" }), e = URL.createObjectURL(d);
            b.forExport = e, o();
            return [2];
        }); });
    }
    b.isNewUser && !b.now.children.length && (b.now.children.push(new L()), b.now.children[0].fields.push(new ca()), ra(!0));
    M();
    n();
    o();
    l();
    r();
    Ea();
    s();
    setInterval(ra, H.saveInterval);
    document.body.classList.remove("loading");
    b.isMobile = innerWidth < H.mobileBreakpoint;
    try {
        for (var _c = __values(document.querySelectorAll("[data-icon]")), _d = _c.next(); !_d.done; _d = _c.next()) {
            var a = _d.value;
            a.setAttribute("aria-hidden", !0);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
})();
