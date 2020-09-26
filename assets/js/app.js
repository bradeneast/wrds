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
    var qb = new WeakMap(), V = function (a) { return typeof a === "function" && qb.has(a); };
    var va = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, ka = function (a, b, d) {
        if (d === void 0) { d = null; }
        for (; b !== d;) {
            var e = b.nextSibling;
            a.removeChild(b), b = e;
        }
    };
    var v = {}, wa = {};
    var E = "{{lit-" + String(Math.random()).slice(2) + "}}", za = "<!--" + E + "-->", lb = new RegExp(E + "|" + za), W = "$lit$";
    var ib = (function () {
        function ib(a, b) {
            var e_2, _b;
            this.parts = [], this.element = b;
            var d = [], e = [], f = document.createTreeWalker(b.content, 133, null, !1);
            var j = 0, h = -1, m = 0;
            var p = a.strings, Aa = a.values.length;
            for (; m < Aa;) {
                var k = f.nextNode();
                if (k === null) {
                    f.currentNode = e.pop();
                    continue;
                }
                h++;
                if (k.nodeType === 1) {
                    if (k.hasAttributes()) {
                        var w = k.attributes, X = w.length;
                        var G = 0;
                        for (var x = 0; x < X; x++)
                            mb(w[x].name, W) && G++;
                        for (; G-- > 0;) {
                            var x = p[m], O = ma.exec(x)[2], H = O.toLowerCase() + W, I = k.getAttribute(H);
                            k.removeAttribute(H);
                            var C = I.split(lb);
                            this.parts.push({ type: "attribute", index: h, name: O, strings: C }), m += C.length - 1;
                        }
                    }
                    k.tagName === "TEMPLATE" && (e.push(k), f.currentNode = k.content);
                }
                else if (k.nodeType === 3) {
                    var w = k.data;
                    if (w.indexOf(E) >= 0) {
                        var X = k.parentNode, G = w.split(lb), x = G.length - 1;
                        for (var O = 0; O < x; O++) {
                            var H = void 0, I = G[O];
                            if (I === "")
                                H = F();
                            else {
                                var C = ma.exec(I);
                                C !== null && mb(C[2], W) && (I = I.slice(0, C.index) + C[1] + C[2].slice(0, -W.length) + C[3]), H = document.createTextNode(I);
                            }
                            X.insertBefore(H, k), this.parts.push({ type: "node", index: ++h });
                        }
                        G[x] === "" ? (X.insertBefore(F(), k), d.push(k)) : k.data = G[x], m += x;
                    }
                }
                else if (k.nodeType === 8)
                    if (k.data === E) {
                        var w = k.parentNode;
                        (k.previousSibling === null || h === j) && (h++, w.insertBefore(F(), k)), j = h, this.parts.push({ type: "node", index: h }), k.nextSibling === null ? k.data = "" : (d.push(k), h--), m++;
                    }
                    else {
                        var w = -1;
                        for (; (w = k.data.indexOf(E, w + 1)) !== -1;)
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
        return ib;
    }());
    var mb = function (a, b) { var d = a.length - b.length; return d >= 0 && a.slice(d) === b; }, kb = function (a) { return a.index !== -1; }, F = function () { return document.createComment(""); }, ma = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
    var xa = (function () {
        function xa(a, b, d) {
            this.__parts = [], this.template = a, this.processor = b, this.options = d;
        }
        xa.prototype.update = function (a) {
            var e_3, _b, e_4, _c;
            var b = 0;
            try {
                for (var _d = __values(this.__parts), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var d = _e.value;
                    d !== void 0 && d.setValue(a[b]), b++;
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
        xa.prototype._clone = function () {
            var _b;
            var a = va ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), b = [], d = this.template.parts, e = document.createTreeWalker(a, 133, null, !1);
            var f = 0, j = 0, h, m = e.nextNode();
            for (; f < d.length;) {
                h = d[f];
                if (!kb(h)) {
                    this.__parts.push(void 0), f++;
                    continue;
                }
                for (; j < h.index;)
                    j++, m.nodeName === "TEMPLATE" && (b.push(m), e.currentNode = m.content), (m = e.nextNode()) === null && (e.currentNode = b.pop(), m = e.nextNode());
                if (h.type === "node") {
                    var p = this.processor.handleTextExpression(this.options);
                    p.insertAfterNode(m.previousSibling), this.__parts.push(p);
                }
                else
                    (_b = this.__parts).push.apply(_b, __spread(this.processor.handleAttributeExpressions(m, h.name, h.strings, this.options)));
                f++;
            }
            return va && (document.adoptNode(a), customElements.upgrade(a)), a;
        };
        return xa;
    }());
    var tb = " " + E + " ";
    var la = (function () {
        function la(a, b, d, e) {
            this.strings = a, this.values = b, this.type = d, this.processor = e;
        }
        la.prototype.getHTML = function () { var a = this.strings.length - 1; var b = "", d = !1; for (var e = 0; e < a; e++) {
            var f = this.strings[e], j = f.lastIndexOf("<!--");
            d = (j > -1 || d) && f.indexOf("-->", j + 1) === -1;
            var h = ma.exec(f);
            h === null ? b += f + (d ? tb : za) : b += f.substr(0, h.index) + h[1] + h[2] + W + h[3] + E;
        } return b += this.strings[a], b; };
        la.prototype.getTemplateElement = function () { var a = document.createElement("template"); return a.innerHTML = this.getHTML(), a; };
        return la;
    }());
    var ya = function (a) { return a === null || !(typeof a === "object" || typeof a === "function"); }, db = function (a) { return Array.isArray(a) || !!(a && a[Symbol.iterator]); };
    var ua = (function () {
        function ua(a, b, d) {
            this.dirty = !0, this.element = a, this.name = b, this.strings = d, this.parts = [];
            for (var e = 0; e < d.length - 1; e++)
                this.parts[e] = this._createPart();
        }
        ua.prototype._createPart = function () { return new eb(this); };
        ua.prototype._getValue = function () {
            var e_5, _b;
            var a = this.strings, b = a.length - 1;
            var d = "";
            for (var e = 0; e < b; e++) {
                d += a[e];
                var f = this.parts[e];
                if (f !== void 0) {
                    var j = f.value;
                    if (ya(j) || !db(j))
                        d += typeof j === "string" ? j : String(j);
                    else
                        try {
                            for (var j_1 = (e_5 = void 0, __values(j)), j_1_1 = j_1.next(); !j_1_1.done; j_1_1 = j_1.next()) {
                                var h = j_1_1.value;
                                d += typeof h === "string" ? h : String(h);
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (j_1_1 && !j_1_1.done && (_b = j_1.return)) _b.call(j_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                }
            }
            return d += a[b], d;
        };
        ua.prototype.commit = function () { this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue())); };
        return ua;
    }());
    var eb = (function () {
        function eb(a) {
            this.value = void 0, this.committer = a;
        }
        eb.prototype.setValue = function (a) { a !== v && (!ya(a) || a !== this.value) && (this.value = a, V(a) || (this.committer.dirty = !0)); };
        eb.prototype.commit = function () { for (; V(this.value);) {
            var a = this.value;
            this.value = v, a(this);
        } if (this.value === v)
            return; this.committer.commit(); };
        return eb;
    }());
    var aa = (function () {
        function aa(a) {
            this.value = void 0, this.__pendingValue = void 0, this.options = a;
        }
        aa.prototype.appendInto = function (a) { this.startNode = a.appendChild(F()), this.endNode = a.appendChild(F()); };
        aa.prototype.insertAfterNode = function (a) { this.startNode = a, this.endNode = a.nextSibling; };
        aa.prototype.appendIntoPart = function (a) { a.__insert(this.startNode = F()), a.__insert(this.endNode = F()); };
        aa.prototype.insertAfterPart = function (a) { a.__insert(this.startNode = F()), this.endNode = a.endNode, a.endNode = this.startNode; };
        aa.prototype.setValue = function (a) { this.__pendingValue = a; };
        aa.prototype.commit = function () { if (this.startNode.parentNode === null)
            return; for (; V(this.__pendingValue);) {
            var b = this.__pendingValue;
            this.__pendingValue = v, b(this);
        } var a = this.__pendingValue; if (a === v)
            return; ya(a) ? a !== this.value && this.__commitText(a) : a instanceof la ? this.__commitTemplateResult(a) : a instanceof Node ? this.__commitNode(a) : db(a) ? this.__commitIterable(a) : a === wa ? (this.value = wa, this.clear()) : this.__commitText(a); };
        aa.prototype.__insert = function (a) { this.endNode.parentNode.insertBefore(a, this.endNode); };
        aa.prototype.__commitNode = function (a) { if (this.value === a)
            return; this.clear(), this.__insert(a), this.value = a; };
        aa.prototype.__commitText = function (a) { var b = this.startNode.nextSibling; a = a == null ? "" : a; var d = typeof a === "string" ? a : String(a); b === this.endNode.previousSibling && b.nodeType === 3 ? b.data = d : this.__commitNode(document.createTextNode(d)), this.value = a; };
        aa.prototype.__commitTemplateResult = function (a) { var b = this.options.templateFactory(a); if (this.value instanceof xa && this.value.template === b)
            this.value.update(a.values);
        else {
            var d = new xa(b, a.processor, this.options), e = d._clone();
            d.update(a.values), this.__commitNode(e), this.value = d;
        } };
        aa.prototype.__commitIterable = function (a) {
            var e_6, _b;
            Array.isArray(this.value) || (this.value = [], this.clear());
            var b = this.value;
            var d = 0, e;
            try {
                for (var a_1 = __values(a), a_1_1 = a_1.next(); !a_1_1.done; a_1_1 = a_1.next()) {
                    var f = a_1_1.value;
                    e = b[d], e === void 0 && (e = new aa(this.options), b.push(e), d === 0 ? e.appendIntoPart(this) : e.insertAfterPart(b[d - 1])), e.setValue(f), e.commit(), d++;
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (a_1_1 && !a_1_1.done && (_b = a_1.return)) _b.call(a_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
            d < b.length && (b.length = d, this.clear(e && e.endNode));
        };
        aa.prototype.clear = function (a) {
            if (a === void 0) { a = this.startNode; }
            ka(this.startNode.parentNode, a.nextSibling, this.endNode);
        };
        return aa;
    }());
    var $a = (function () {
        function $a(a, b, d) {
            this.value = void 0, this.__pendingValue = void 0;
            if (d.length !== 2 || d[0] !== "" || d[1] !== "")
                throw new Error("Boolean attributes can only contain a single expression");
            this.element = a, this.name = b, this.strings = d;
        }
        $a.prototype.setValue = function (a) { this.__pendingValue = a; };
        $a.prototype.commit = function () { for (; V(this.__pendingValue);) {
            var b = this.__pendingValue;
            this.__pendingValue = v, b(this);
        } if (this.__pendingValue === v)
            return; var a = !!this.__pendingValue; this.value !== a && (a ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = a), this.__pendingValue = v; };
        return $a;
    }());
    var bb = (function (_super) {
        __extends(bb, _super);
        function bb(a, b, d) {
            var _this = _super.call(this, a, b, d) || this;
            _this.single = d.length === 2 && d[0] === "" && d[1] === "";
            return _this;
        }
        bb.prototype._createPart = function () { return new rb(this); };
        bb.prototype._getValue = function () { return this.single ? this.parts[0].value : _super.prototype._getValue.call(this); };
        bb.prototype.commit = function () { this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue()); };
        return bb;
    }(ua));
    var rb = (function (_super) {
        __extends(rb, _super);
        function rb() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return rb;
    }(eb));
    var fb = !1;
    (function () { try {
        var a = { get capture() { return fb = !0, !1; } };
        window.addEventListener("test", a, a), window.removeEventListener("test", a, a);
    }
    catch (a) { } })();
    var ab = (function () {
        function ab(a, b, d) {
            var _this = this;
            this.value = void 0, this.__pendingValue = void 0, this.element = a, this.eventName = b, this.eventContext = d, this.__boundHandleEvent = function (e) { return _this.handleEvent(e); };
        }
        ab.prototype.setValue = function (a) { this.__pendingValue = a; };
        ab.prototype.commit = function () { for (; V(this.__pendingValue);) {
            var f = this.__pendingValue;
            this.__pendingValue = v, f(this);
        } if (this.__pendingValue === v)
            return; var a = this.__pendingValue, b = this.value, d = a == null || b != null && (a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive), e = a != null && (b == null || d); d && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), e && (this.__options = sb(a), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = a, this.__pendingValue = v; };
        ab.prototype.handleEvent = function (a) { typeof this.value === "function" ? this.value.call(this.eventContext || this.element, a) : this.value.handleEvent(a); };
        return ab;
    }());
    var sb = function (a) { return a && (fb ? { capture: a.capture, passive: a.passive, once: a.once } : a.capture); };
    var pb = (function () {
        function pb() {
        }
        pb.prototype.handleAttributeExpressions = function (a, b, d, e) { var f = b[0]; if (f === ".") {
            var h = new bb(a, b.slice(1), d);
            return h.parts;
        } if (f === "@")
            return [new ab(a, b.slice(1), e.eventContext)]; if (f === "?")
            return [new $a(a, b.slice(1), d)]; var j = new ua(a, b, d); return j.parts; };
        pb.prototype.handleTextExpression = function (a) { return new aa(a); };
        return pb;
    }());
    var cb = new pb();
    function gb(a) { var b = jb.get(a.type); b === void 0 && (b = { stringsArray: new WeakMap(), keyString: new Map() }, jb.set(a.type, b)); var d = b.stringsArray.get(a.strings); if (d !== void 0)
        return d; var e = a.strings.join(E); return d = b.keyString.get(e), d === void 0 && (d = new ib(a, a.getTemplateElement()), b.keyString.set(e, d)), b.stringsArray.set(a.strings, d), d; }
    var jb = new Map();
    var hb = new WeakMap(), P = function (a, b, d) { var e = hb.get(b); e === void 0 && (ka(b, b.firstChild), hb.set(b, e = new aa(Object.assign({ templateFactory: gb }, d))), e.appendInto(b)), e.setValue(a), e.commit(); };
    typeof window !== "undefined" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.2.1");
    var i = function (a) {
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        return new la(a, b, "html", cb);
    };
    var t = function (a) { return document.getElementById(a); }, o = function (a) { return parseInt(a.closest("section").id); }, T = function (a) { return parseInt(a.closest(".field").id); }, Z = function () { return Math.round(new Date().getTime() * Math.random()); }, _ = function (a) { return a.replace(/\W+|[-_]/g, "-"); };
    function B(a, b) {
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
                    return [4, { section: d, parent: b }];
                case 2:
                    _d.sent();
                    _b = d.children;
                    if (!_b) return [3, 4];
                    return [5, __values(B(d.children, d))];
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
    function D(a) {
        var e_8, _b;
        var b;
        try {
            for (var _c = __values(B(c.now.children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = _d.value, d = _e.section, e = _e.parent;
                if (d.id == a) {
                    b = d;
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
        return b;
    }
    function ja(a) { var b = a.closest("section"), d = b.getAttribute("data-section-depth"); return parseInt(d); }
    function ga(a, b, d) { var _b; var e = a[b] || [], f = e[d]; e.splice(d, 1), e.splice(d - 1, 0, f), s(), n(), c.hasChanged = !0, document.activeElement.blur(), (_b = document.querySelector("[id=\"" + f.id + "\"] .moveUp")) === null || _b === void 0 ? void 0 : _b.focus(); }
    function fa(a, b, d) { var _b; var e = a[b] || [], f = e[d]; e.splice(d, 1), e.splice(d + 1, 0, f), s(), n(), c.hasChanged = !0, document.activeElement.blur(), (_b = document.querySelector("[id=\"" + f.id + "\"] .moveDown")) === null || _b === void 0 ? void 0 : _b.focus(); }
    function R() {
        var e_9, _b;
        var _c, _d;
        c.now.selected.fieldType = ((_c = c.now.fieldTypes) === null || _c === void 0 ? void 0 : _c[0]) || {}, c.now.selected.globalType = ((_d = c.now.globalTypes) === null || _d === void 0 ? void 0 : _d[0]) || {};
        try {
            for (var _e = __values(B(c.now.children)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var _g = _f.value, a = _g.section, b = _g.parent;
                if (!a.fields.length)
                    continue;
                a.fields.map(function (d) { var _b; d.type = c.now.fieldTypes.find(function (e) { var _b; return e.id == ((_b = d.type) === null || _b === void 0 ? void 0 : _b.id); }) || ((_b = c.now.fieldTypes) === null || _b === void 0 ? void 0 : _b[0]); });
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
    var J = (function () {
        function J(a) {
            if (a === void 0) { a = 0; }
            this.id = Z(), this.depth = a, this.text = "", this.html = "", this.children = [], this.fields = [];
        }
        return J;
    }());
    var Ca = (function () {
        function Ca() {
            this.id = Z(), this.value = "", this.type = 0;
        }
        return Ca;
    }());
    var Q = (function () {
        function Q(a) {
            this.id = Z(), this.name = a, this.css = "";
        }
        return Q;
    }());
    var nb = (function () {
        function nb(a) {
            this.id = Z(), this.name = a;
        }
        return nb;
    }());
    var ba = (function (_super) {
        __extends(ba, _super);
        function ba(a) {
            var _this = _super.call(this, a) || this;
            _this.type = "field type", _this.css = "";
            return _this;
        }
        return ba;
    }(nb));
    var r = ["Chapter", "Section", "Block"], L = { h1: "Lvl 1 Heading", h2: "Lvl 2 Heading", h3: "Lvl 3 Heading", h4: "Lvl 4 Heading", h5: "Lvl 5 Heading", h6: "Lvl 6 Heading", hr: "Horizontal Rules", p: "Paragraph", blockquote: "Block Quote", ul: "Unordered List", ol: "Ordered List", li: "List Item", a: "Link", strong: "Bolded Text", em: "Italic Text", code: "Code", img: "Image" }, u = { previewPane: t("preview"), toolbar: t("toolbar"), contentEditorPane: t("content_editor"), styleEditorPane: t("style_editor"), modal: t("modal"), customStyles: t("custom_styles"), walkThroughDialogue: t("walkthrough_dialogue"), mobileNav: t("mobile_nav") }, ca = { throttle: 60, mobileBreakpoint: 960, saveInterval: 2000 };
    var Da;
    try {
        Da = JSON.parse(localStorage.getItem("State"));
    }
    catch (a) {
        console.log("No previous data found.");
    }
    var c = Da || { now: { children: [], fieldTypes: [], globalTypes: r.map(function (a) { return new Q(a); }).concat(Object.values(L).map(function (a) { return new Q(a); })), selected: { fieldType: {}, globalType: {} }, editing: {} }, nowIndex: 0, settings: { darkMode: !1, advancedUI: !1, messagesShown: !1 }, walkthroughIndex: 0, history: [], hasChanged: !1, isNewUser: !0, isMobile: innerWidth <= ca.mobileBreakpoint, lastSaved: new Date(), forExport: "" };
    var Ta = function (a) {
        var e_10, _b;
        var _c;
        var b = o(a.target), d = ja(a.target), e;
        try {
            for (var _d = __values(B(c.now.children, c.now)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = _e.value, f = _f.section, j = _f.parent;
                if (f.id == b) {
                    var h = new J(d);
                    j.children.push(h), e = h.id;
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
        c.hasChanged = !0, s(), c.isMobile || ((_c = document.querySelector("[id=\"" + e + "\"] textarea")) === null || _c === void 0 ? void 0 : _c.focus());
    };
    var Ua = function (a) {
        var e_11, _b;
        var _c;
        var b = o(a.target), d = ja(a.target), e;
        try {
            for (var _d = __values(B(c.now.children, c.now)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = _e.value, f = _f.section, j = _f.parent;
                if (f.id == b) {
                    var h = new J(d + 1);
                    f.children.unshift(h), e = h.id;
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
        c.hasChanged = !0, s(), c.isMobile || ((_c = document.querySelector("[id=\"" + e + "\"] textarea")) === null || _c === void 0 ? void 0 : _c.focus());
    };
    var Va = function (a) {
        var e_12, _b;
        var b = o(a.target);
        var _loop_1 = function (d, e) {
            if (d.id != b)
                return "continue";
            e.children = e.children.filter(function (f) { return f != d; });
        };
        try {
            for (var _c = __values(B(c.now.children, c.now)), _d = _c.next(); !_d.done; _d = _c.next()) {
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
        c.hasChanged = !0, n(), s();
    };
    var Wa = function (a) { var b = o(a.target), d = D(b); d.text = a.target.value, c.hasChanged = !0, n(); };
    var S = { addSiblingSection: Ta, addChildSection: Ua, removeSection: Va, updateSection: Wa };
    var Ka = function (a) { var _b; var b = o(a.target), d = D(b), e = new Ca(); e.type = c.now.fieldTypes[0], d.fields.push(e), c.hasChanged = !0, s(), c.isMobile || ((_b = document.querySelector("[id=\"" + e.id + "\"] input")) === null || _b === void 0 ? void 0 : _b.focus()); };
    var La = function (a) { var b = o(a.target), d = D(b), e = T(a.target); d.fields = d.fields.filter(function (f) { return f.id != e; }), c.hasChanged = !0, s(), n(); };
    var Ma = function (a) { var b = o(a.target), d = D(b), e = T(a.target), f = d.fields.find(function (j) { return j.id == e; }); f.value = a.target.value, c.hasChanged = !0, n(); };
    var Na = function (a) { var b = a.target.value, d = T(a.target), e = o(a.target), f = D(e), j = f.fields.find(function (h) { return h.id == d; }); j.type = c.now.fieldTypes.find(function (h) { return h.id == b; }), c.hasChanged = !0, n(); };
    var M = { addField: Ka, removeField: La, updateFieldValue: Ma, updateFieldType: Na };
    var Xa = function (a) { var b = a.target.textContent || ""; a.target.id.includes("global") && (c.now.selected.globalType.css = b, c.hasChanged = !0), a.target.id.includes("field") && (c.now.selected.fieldType.css = b, c.hasChanged = !0), ta(); };
    var U = function (a) { var b = a.target || a, d = function (e, f) { return "<span class=\"token " + f + "\">" + e + "</span>"; }; b.innerHTML = b.innerText.replace(/\n/g, "").replace(/;/g, d(";", "newline")).replace(/[,:](?!\s)/g, function (e) { return e + " "; }); };
    var Ya = function (a) { var b = a.target.value, d = t("field_type_styles"), e = c.now.fieldTypes.find(function (f) { return f.id == b; }); if (e)
        e.css || (e.css = ""), c.now.selected.fieldType = e;
    else {
        var f = { id: b, css: "" };
        c.now.fieldTypes.push(f), c.now.selected.fieldType = f;
    } d.innerHTML = c.now.selected.fieldType.css, U(d), c.hasChanged = !0, n(); };
    var Za = function (a) { var b = t("global_type_styles"), d = a.target.value, e = c.now.globalTypes.find(function (f) { return f.name == d; }); if (e)
        e.css || (e.css = ""), c.now.selected.globalType = e;
    else {
        var f = { id: d, css: "" };
        c.now.globalTypes.push(f), c.now.selected.globalType = f;
    } b.innerHTML = c.now.selected.globalType.css, U(b), c.hasChanged = !0, n(); };
    var z = { updateStyles: Xa, updateCurrentFieldType: Ya, updateCurrentGlobalType: Za, formatCSS: U };
    var Ga = function (a) { var _b; a == "field type" && (c.now.fieldTypes = c.now.fieldTypes.filter(function (b) { return b.id != c.now.selected.fieldType.id; }), c.now.selected.fieldType = ((_b = c.now.fieldTypes) === null || _b === void 0 ? void 0 : _b[0]) || {}), c.now.editing = {}, c.hasChanged = !0, q(), A(null); };
    var Ha = function (a) { c.now.editing[a.target.name] = a.target.value, c.hasChanged = !0, q(); };
    var Ja = function () {
        var e_13, _b;
        c.now.selected.fieldType = c.now.fieldTypes[c.now.fieldTypes.length - 1];
        if (c.now.fieldTypes.length == 1)
            try {
                for (var _c = __values(B(c.now.children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = _d.value, a = _e.section, b = _e.parent;
                    a.fields.map(function (d) { return d.type = c.now.fieldTypes[0]; });
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
    var Ia = function (a) { var _b; c.now.editing.name = c.now.editing.name.trim(); if (!c.now.editing.name.length) {
        A(null);
        return;
    } a == "field type" && (c.now.fieldTypes.push(new ba(c.now.editing.name)), Ja(), (_b = u.styleEditorPane.querySelector("code")) === null || _b === void 0 ? void 0 : _b.focus()), c.now.editing = {}, c.hasChanged = !0, q(), A(null); };
    var $ = { removeType: Ga, updateType: Ha, saveNewType: Ia };
    var Oa = function (a) { var b = c.settings.darkMode; document.documentElement.classList.toggle("dark_mode", !b), c.settings.darkMode = !b, c.hasChanged = !0, K(); };
    var Pa = function (a) { var b = c.settings.advancedUI; document.documentElement.classList.toggle("advanced", !b), c.settings.advancedUI = !b, c.hasChanged = !0, K(); };
    var Qa = function (a) { return window.print(); };
    var Ra = function (a) { var b = a.target.files[0], d = new FileReader(); d.onerror = function () { console.error(this.error); }, d.onload = function () { var e = JSON.parse(this.result); Object.keys(c).map(function (f) { return c[f] = e[f]; }), R(), q(); }, document.body.classList.add("importing"), d.readAsText(b); };
    var Sa = function (a) { c.now.children = [new J()], c.now.fieldTypes = [], c.now.globalTypes = r.map(function (b) { return new Q(b); }).concat(Object.values(L).map(function (b) { return new Q(b); })), c.now.editing = {}, c.now.selected = { fieldType: {}, globalType: {} }, q(), c.hasChanged = !0; };
    var N = { toggleDarkMode: Oa, toggleAdvancedUI: Pa, printDocument: Qa, importData: Ra, clearData: Sa };
    var ha = function (_b) {
        var _c = _b === void 0 ? {} : _b, _d = _c.global, a = _d === void 0 ? !1 : _d, _e = _c.field, b = _e === void 0 ? {} : _e;
        var _f, _g, _h, _j;
        if (!((_f = c.now.fieldTypes) === null || _f === void 0 ? void 0 : _f.length))
            return;
        var d = a ? (_g = c.now.selected.fieldType) === null || _g === void 0 ? void 0 : _g.id : (_j = (_h = b) === null || _h === void 0 ? void 0 : _h.type) === null || _j === void 0 ? void 0 : _j.id;
        return i(__makeTemplateObject(["\n    <select name=type @input=", ">\n\n        ", "\n\n    </select>"], ["\n    <select name=type @input=", ">\n\n        ",
            "\n\n    </select>"]), a ? z.updateCurrentFieldType : M.updateFieldType, c.now.fieldTypes.map(function (e) { return i(__makeTemplateObject(["\n            <option value=", " ?selected=", ">\n                ", "\n            </option>\n        "], ["\n            <option value=", " ?selected=", ">\n                ", "\n            </option>\n        "]), e.id, e.id == d, e.name); }));
    };
    var Ea = function (a, b, d) { return i(__makeTemplateObject(["\n<div \nclass=field \nid=", ">\n\n    <input \n    placeholder=\"Field value...\"\n    type=text \n    .value=", " \n    @input=", " />\n\n    ", "\n\n    <button \n    @click=", " \n    class=remove>\n        Remove\n    </button>\n\n    <button\n    data-icon\n    @click=", "\n    ?disabled=", "\n    class=\"move moveDown\">\n    </button>\n\n    <button\n    data-icon\n    @click=", "\n    ?disabled=", " \n    class=\"move moveUp\">\n    </button>\n\n</div>"], ["\n<div \nclass=field \nid=", ">\n\n    <input \n    placeholder=\"Field value...\"\n    type=text \n    .value=", " \n    @input=", " />\n\n    ", "\n\n    <button \n    @click=", " \n    class=remove>\n        Remove\n    </button>\n\n    <button\n    data-icon\n    @click=", "\n    ?disabled=", "\n    class=\"move moveDown\">\n    </button>\n\n    <button\n    data-icon\n    @click=", "\n    ?disabled=", " \n    class=\"move moveUp\">\n    </button>\n\n</div>"]), a.id, a.value, M.updateFieldValue, ha({ field: a }), M.removeField, fa.bind(void 0, b, "fields", d), d >= b.fields.length - 1, ga.bind(void 0, b, "fields", d), !d); };
    function da(a, b, d) {
        var e = c.now.children.length, f = a.depth, j = f == r.length - 1;
        return i(__makeTemplateObject(["\n    <section \n    id=", " \n    data-section-depth=", ">\n\n        <div class=fields>\n            ", "\n        </div>\n\n        <textarea \n        id=\"", "-text\"\n        placeholder=", " \n        @input=", " \n        .value=", ">\n        </textarea>\n\n        <div class=actions>\n\n            <button \n            data-icon=add_another\n            title=", "\n            @click=", ">\n            </button>\n\n            ", "\n\n            <button \n            class=add\n            data-icon\n            title=\"Add Field\"\n            @click=", ">\n            </button>\n\n            ", "\n\n            ", "\n\n        </div>\n\n        ", "\n\n    </section>"], ["\n    <section \n    id=", " \n    data-section-depth=", ">\n\n        <div class=fields>\n            ", "\n        </div>\n\n        <textarea \n        id=\"", "-text\"\n        placeholder=", " \n        @input=", " \n        .value=", ">\n        </textarea>\n\n        <div class=actions>\n\n            <button \n            data-icon=add_another\n            title=", "\n            @click=", ">\n            </button>\n\n            ",
            "\n\n            <button \n            class=add\n            data-icon\n            title=\"Add Field\"\n            @click=", ">\n            </button>\n\n            ",
            "\n\n            ",
            "\n\n        </div>\n\n        ", "\n\n    </section>"]), a.id, a.depth, a.fields.map(function (h, m) { return Ea(h, a, m); }), a.id, "Write something for this " + r[f].toLowerCase() + "...", S.updateSection, a.text, "Add " + r[f], S.addSiblingSection, j ? "" : i(__makeTemplateObject(["\n            <button \n            data-icon=add_sub\n            title=", "\n            @click=", ">\n            </button>"], ["\n            <button \n            data-icon=add_sub\n            title=", "\n            @click=", ">\n            </button>"]), "Add " + r[f + 1], S.addChildSection), M.addField, e > 1 || f ? i(__makeTemplateObject(["\n            <button \n            class=remove\n            @click=", ">\n            Remove\n            </button>"], ["\n            <button \n            class=remove\n            @click=", ">\n            Remove\n            </button>"]), S.removeSection) : "", b.children.length > 1 ? i(__makeTemplateObject(["\n\n            <button \n            class=\"move moveDown\" \n            data-icon\n            title=\"Move Down\"\n            ?disabled=", " \n            @click=", ">\n            </button>\n\n            <button \n            class=\"move moveUp\"\n            data-icon\n            title=\"Move Up\"\n            ?disabled=", " \n            @click=", ">\n            </button>\n            \n            "], ["\n\n            <button \n            class=\"move moveDown\" \n            data-icon\n            title=\"Move Down\"\n            ?disabled=", " \n            @click=", ">\n            </button>\n\n            <button \n            class=\"move moveUp\"\n            data-icon\n            title=\"Move Up\"\n            ?disabled=", " \n            @click=", ">\n            </button>\n            \n            "]), d >= b.children.length - 1, fa.bind(this, b, "children", d), !d, ga.bind(this, b, "children", d)) : "", a.children.length ? a.children.map(function (h, m) { return da(h, a, m); }) : "");
    }
    var ia = function (a) {
        var b = { "!": "33", "#": "35", "&": "38;", "(": "40", ")": "41", "*": "42", "+": "43", "-": "45", ".": "46", "<": "60;", ">": "62;", "[": "91", "\\": "92", "]": "93", _: "95", "`": "96", "{": "123", "}": "125", "~": "126" }, d = /(^|\s)(> )+(.|\n)+?(?=$|\n(?!>))/g, e = "[0-9]+\\. ", f = "[-+*] ", j = function (g) { return "&#" + (b[g] || g); }, h = function (g) { return g.replace(/[&<>]/g, j); }, m = function (g) { return g.trim().slice(1, -1); }, p = function (g, l) { return "<" + g + ">" + l + "</" + g + ">"; }, Aa = function (g) { var l = new RegExp("[^|\\n]" + e).test(g), y = new RegExp("(^|\\n)" + (l ? e : f)), Y = g.split(y).filter(function (Ba) { return Ba.trim().length; }); return p(l ? "ol" : "ul", Y.map(function (Ba) { return p("li", Ba); }).join("")); }, k = function (g) { g = g.trim(); var l = g.indexOf(" "); return p("h" + l, g.slice(l).replace(/#+$/, "").trim()); }, w = function (g) { var l = g.trim().split(/\n/); return p("h" + (l[1].indexOf("-") > -1 ? 2 : 1), l[0]); }, X = function (g) { var l = g.slice(1, -1).split("]("), y = l[1].split(/ ["`']/)[1]; return "<a href=\"" + l[1] + "\" " + (y ? "title=\"" + y + "\"" : "") + ">" + l[0] + "</a>"; }, G = function (g) { var l = g.split(/["`']/), y = l[0].trim().replace(/^<|>$/g, ""), Y = l[1]; return " <a href=\"" + y + "\" " + (Y ? "title=\"" + Y + "\"" : "") + ">" + y + "</a>"; }, x = function (g) { var l = g.slice(2, -1).split("]("), y = l[1].split(/ ["`']/)[1]; return "<img src=\"" + l[1] + "\" " + (y ? "title=\"" + y + "\"" : "") + " alt=\"" + l[0] + "\">"; }, O = function (g) { var _b = __read(g.trim().split(/\n+/)), l = _b[0], y = _b.slice(1), Y = h(y.slice(0, -1).join("\r")).trim(); return p("pre", "<code class=\"language-" + l.slice(3) + "\">" + Y + "</code>"); }, H = function (g) { return (g = p("blockquote", g.replace(/^ *?> /gm, "")), g.replace(d, H)); }, I = function (g) { return " <a href=\"" + g + "\">" + g.trim() + "</a>"; }, C = function (g) { return p("p", g.trim()); }, ub = function (g) { return p("strong", g.slice(2, -2)); }, vb = function (g) { return p("em", m(g)); }, wb = function (g) { return p("del", m(g)); }, xb = function (g) { return p("code", h(m(g))); };
        return a.replace(/\r+/g, "\n").replace(/\\[-*_\\`#~+.!(){}[\]]/g, function (g) { return j(g.slice(1)); }).replace(/(^|\n).+?\n[-=]+(?=$|\n)/g, w).replace(/(^|\n)#+? (.|\n)+?(?=$|\n)/g, k).replace(/(^|\n)([-*_] ?){3,}(?=$|\n)/g, "<hr>").replace(/(^|\n)([0-9]+\.|[-+*]) (.|\n)+?(?=$|[\s\n]{3,})/g, Aa).replace(d, H).replace(/(^|\n)```(.|\n)+?```(?=$|\n)/g, O).replace(/  (\n|$)/g, "<br>").replace(/!\[.+?\]\(.+?\)/g, x).replace(/\[.+?\]\(.+?\)/g, X).replace(/<(https?:\/\/|www).+?>( (".+?")|('.+?'))?(?=$|\n| )/g, G).replace(/(^|\n| )(https?:\/\/|www)(.+?)+?(?=$|\n| )/g, I).replace(/\s[*_](?=\s)/g, function (g) { return g.slice(0, 1) + j(g.slice(1)); }).replace(/[*_]{2}.+?[*_]{2}/gm, ub).replace(/[*_].+?[*_]/gm, vb).replace(/~.+?~/gm, wb).replace(/`.+?`/gm, xb).replace(/(^|\n\n+)(?!<[huol]).+?(?=$|\n\n+)/gi, C);
    };
    var Fa = function (a) {
        var _b;
        var b = c.now.fieldTypes.find(function (e) { var _b, _c; return e.id == ((_c = (_b = a) === null || _b === void 0 ? void 0 : _b.type) === null || _c === void 0 ? void 0 : _c.id); }), d = document.createElement("div");
        return d.innerHTML = ia(a.value), /<p>/.test(d.innerHTML) && (d.innerHTML = d.firstElementChild.innerHTML), i(__makeTemplateObject(["\n    <div class=", ">\n        ", "\n    </div>"], ["\n    <div class=", ">\n        ", "\n    </div>"]), _(((_b = b) === null || _b === void 0 ? void 0 : _b.name) || ""), d);
    };
    function ea(a) {
        var b = document.createElement("div");
        return b.classList.add("content"), b.innerHTML = ia(a.text), i(__makeTemplateObject(["\n    <section class=", ">\n    \n        ", "\n    \n        ", "\n    \n        ", "\n    \n    </section>"], ["\n    <section class=", ">\n    \n        ", "\n    \n        ", "\n    \n        ", "\n    \n    </section>"]), r[a.depth], a.fields.map(function (d) { return Fa(d); }), a.text.length ? b : "", a.children.map(function (d) { return ea(d); }));
    }
    var pa = function () {
        var _b;
        return i(__makeTemplateObject(["\n\n<div class=\"heading\">\n    Style Editor\n    <span tabindex=\"0\" data-tooltip=\"This pane is for editing your document's styles. Apply valid CSS rules to any custom field type or global element.\"></span>\n</div>\n\n<section id=manageFieldTypes>\n\n    <div class=actions>\n\n        <label>Field Styles</label>\n\n        ", "\n\n        ", "\n\n        <button \n        class=add \n        data-icon\n        title=\"New Field Type\"\n        @click=", ">\n        </button>\n        \n    </div>\n\n    <code \n    spellcheck=false\n    id=field_type_styles\n    class=language-css \n    contenteditable=true \n    @focusout=", "\n    @keyup=", "></code>\n    \n</section>\n\n\n<section id=manageGlobalTypes>\n\n    <div class=actions>\n\n        <label>Global Styles</label>\n\n        <select id=global-style-select @input=", ">\n\n            <optgroup label=Layout>\n            ", "\n            </optgroup>\n\n            <optgroup label=Elements>\n                ", "\n            </optgroup>\n        </select>\n\n    </div>\n\n    <code\n    spellcheck=false\n    id=global_type_styles\n    class=language-css\n    contenteditable=true\n    @focusout=", "\n    @keyup=", "></code>\n\n</section>\n"], ["\n\n<div class=\"heading\">\n    Style Editor\n    <span tabindex=\"0\" data-tooltip=\"This pane is for editing your document's styles. Apply valid CSS rules to any custom field type or global element.\"></span>\n</div>\n\n<section id=manageFieldTypes>\n\n    <div class=actions>\n\n        <label>Field Styles</label>\n\n        ", "\n\n        ",
            "\n\n        <button \n        class=add \n        data-icon\n        title=\"New Field Type\"\n        @click=", ">\n        </button>\n        \n    </div>\n\n    <code \n    spellcheck=false\n    id=field_type_styles\n    class=language-css \n    contenteditable=true \n    @focusout=", "\n    @keyup=", "></code>\n    \n</section>\n\n\n<section id=manageGlobalTypes>\n\n    <div class=actions>\n\n        <label>Global Styles</label>\n\n        <select id=global-style-select @input=", ">\n\n            <optgroup label=Layout>\n            ",
            "\n            </optgroup>\n\n            <optgroup label=Elements>\n                ",
            "\n            </optgroup>\n        </select>\n\n    </div>\n\n    <code\n    spellcheck=false\n    id=global_type_styles\n    class=language-css\n    contenteditable=true\n    @focusout=", "\n    @keyup=", "></code>\n\n</section>\n"]), ha({ global: !0 }), ((_b = c.now.fieldTypes) === null || _b === void 0 ? void 0 : _b.length) ? i(__makeTemplateObject(["\n        <button \n        data-icon\n        title=\"Edit Field Type\"\n        @click=", ">\n        </button>"], ["\n        <button \n        data-icon\n        title=\"Edit Field Type\"\n        @click=", ">\n        </button>"]), A.bind(void 0, "field type", !0)) : "", A.bind(void 0, "field type", !1), z.formatCSS, z.updateStyles, z.updateCurrentGlobalType, r.map(function (a) {
            var _b;
            return i(__makeTemplateObject(["\n                <option\n                value=", "\n                ?selected=", ">\n                    ", "s\n                </option>\n            "], ["\n                <option\n                value=", "\n                ?selected=", ">\n                    ", "s\n                </option>\n            "]), a, a == ((_b = c.now.selected.globalType) === null || _b === void 0 ? void 0 : _b.name), a);
        }), Object.values(L).map(function (a) {
            var _b;
            return i(__makeTemplateObject(["\n                    <option \n                    label=", "\n                    value=", "\n                    ?selected=", ">\n                        ", "s\n                    </option>\n                "], ["\n                    <option \n                    label=", "\n                    value=", "\n                    ?selected=", ">\n                        ", "s\n                    </option>\n                "]), a, a, a == ((_b = c.now.selected.globalType) === null || _b === void 0 ? void 0 : _b.name), a);
        }), z.formatCSS, z.updateStyles);
    };
    var qa = function () { return i(__makeTemplateObject(["\n\n", "\n\n", "\n\n", "\n"], ["\n\n", "\n\n", "\n\n", "\n"]), c.now.fieldTypes.map(function (a) { return "#preview ." + _(a.name).trim() + "{" + a.css + "}"; }), r.map(function (a) { var _b; var b = c.now.globalTypes.find(function (d) { return d.name == a; }); return "#preview ." + _(a).trim() + "{" + ((_b = b) === null || _b === void 0 ? void 0 : _b.css) + "}"; }), Object.keys(L).map(function (a) { var _b; var b = L[a], d = c.now.globalTypes.find(function (e) { return e.name == b; }); return "#preview " + a + " {" + ((_b = d) === null || _b === void 0 ? void 0 : _b.css) + "}"; })); };
    var na = function (a) {
        if (a === void 0) { a = 0; }
        var b = c.nowIndex + a;
        c.now = JSON.parse(c.history[b]), c.nowIndex = b, R(), q();
    };
    var ra = function () {
        var _b, _c;
        var a = c.settings;
        return i(__makeTemplateObject(["\n    <!-- Undo/Redo -->\n    <div class=configuration id=undo_redo>\n        <button data-icon title=Undo ?disabled=", " @click=", ">\n        </button>\n        <button data-icon title=Redo ?disabled=", "\n            @click=", ">\n        </button>\n    </div>\n    \n    <!-- Toggle Dark Mode -->\n    <div class=configuration>\n        <button data-icon title=", "\n            ?aria-pressed=", " @click=", " id=dark_mode_toggle>\n        </button>\n    </div>\n    \n    <!-- Toggle Advanced UI -->\n    <div class=configuration id=advancedUI_toggle>\n        <button data-icon id=\"advanced_toggle\" ?aria-pressed=", " title=", " @click=", ">\n        </button>\n    </div>\n    \n    <!-- Print Document -->\n    <div class=configuration id=printDocument>\n        <button data-icon title=Print @click=", ">\n        </button>\n    </div>\n    \n    <!-- Import and Export Data -->\n    <div class=configuration id=import_export>\n        <input aria-hidden=\"true\" id=importData type=file accept=.json @input=", ">\n        <label data-icon title=\"Import Data\" class=\"fileInput secondary\" for=importData>\n        </label>\n        <a class=\"button primary\" data-icon title=\"Export Data\" id=exportData .href=", " download=", ">\n        </a>\n        <!-- Clear Data -->\n        <button data-icon title=\"Clear Data\" class=destructive @click=", ">\n        </button>\n    </div>\n    \n    <!-- Last Saved -->\n    <div class=configuration id=savedIndicator>\n        Saved: ", "\n    </div>"], ["\n    <!-- Undo/Redo -->\n    <div class=configuration id=undo_redo>\n        <button data-icon title=Undo ?disabled=", " @click=", ">\n        </button>\n        <button data-icon title=Redo ?disabled=", "\n            @click=", ">\n        </button>\n    </div>\n    \n    <!-- Toggle Dark Mode -->\n    <div class=configuration>\n        <button data-icon title=", "\n            ?aria-pressed=", " @click=", " id=dark_mode_toggle>\n        </button>\n    </div>\n    \n    <!-- Toggle Advanced UI -->\n    <div class=configuration id=advancedUI_toggle>\n        <button data-icon id=\"advanced_toggle\" ?aria-pressed=", " title=", " @click=", ">\n        </button>\n    </div>\n    \n    <!-- Print Document -->\n    <div class=configuration id=printDocument>\n        <button data-icon title=Print @click=", ">\n        </button>\n    </div>\n    \n    <!-- Import and Export Data -->\n    <div class=configuration id=import_export>\n        <input aria-hidden=\"true\" id=importData type=file accept=.json @input=", ">\n        <label data-icon title=\"Import Data\" class=\"fileInput secondary\" for=importData>\n        </label>\n        <a class=\"button primary\" data-icon title=\"Export Data\" id=exportData .href=", " download=",
            ">\n        </a>\n        <!-- Clear Data -->\n        <button data-icon title=\"Clear Data\" class=destructive @click=", ">\n        </button>\n    </div>\n    \n    <!-- Last Saved -->\n    <div class=configuration id=savedIndicator>\n        Saved: ", "\n    </div>"]), c.nowIndex == 0, na.bind(void 0, -1), c.nowIndex >= c.history.length - 1, na.bind(void 0, 1), "You're in " + (a.darkMode ? "Dark" : "Light") + " Mode", a.darkMode, N.toggleDarkMode, a.advancedUI, (a.advancedUI ? "Disable" : "Enable") + " Advanced UI", N.toggleAdvancedUI, N.printDocument, N.importData, (_b = c) === null || _b === void 0 ? void 0 : _b.forExport, "My Data\r\n            (" + new Date(c.lastSaved).toLocaleDateString() + ").json", N.clearData, new Date(((_c = c) === null || _c === void 0 ? void 0 : _c.lastSaved) || "").toLocaleTimeString("en-us", { timeStyle: "short" }));
    };
    var sa = function (a, b) { return a ? (a == "field type" && (c.now.editing = b ? c.now.selected.fieldType : new ba()), i(__makeTemplateObject(["\n    <div class=content>\n    \n        <div class=heading>\n            ", " Editor\n            <span tabindex=0 data-tooltip=", ">\n            </span>\n        </div>\n    \n        <input name=name @input=", " type=text placeholder=", " value=", " />\n        \n            <div class=actions>\n        \n                <button @click=", ">\n                    Done\n                </button>\n        \n                ", "\n        \n                <button class=cancel @click=", ">\n                    Cancel\n                </button>\n        \n            </div>\n        \n        </div>"], ["\n    <div class=content>\n    \n        <div class=heading>\n            ", " Editor\n            <span tabindex=0 data-tooltip=", ">\n            </span>\n        </div>\n    \n        <input name=name @input=", " type=text placeholder=", " value=", " />\n        \n            <div class=actions>\n        \n                <button @click=", ">\n                    Done\n                </button>\n        \n                ",
        "\n        \n                <button class=cancel @click=", ">\n                    Cancel\n                </button>\n        \n            </div>\n        \n        </div>"]), c.now.editing.type, "This pane is for renaming or editing your " + c.now.editing.type + " .", $.updateType, "Name your " + c.now.editing.type + "...", b ? c.now.editing.name : "", b ? A.bind(void 0, null) : $.saveNewType.bind(void 0, c.now.editing.type), b ? i(__makeTemplateObject(["\n                <button class=remove @click=", ">\n                    Delete ", "\n                </button>"], ["\n                <button class=remove @click=", ">\n                    Delete ", "\n                </button>"]), $.removeType.bind(void 0, c.now.editing.type), c.now.editing.type) : "", A.bind(void 0, null))) : ""; };
    function q() {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            s(), K(), n(), _a(), ta();
            return [2];
        }); });
    }
    function n() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                P(i(__makeTemplateObject(["\n        <div class=content>\n            ", "\n        </div>"], ["\n        <div class=content>\n            ", "\n        </div>"]), c.now.children.map(function (a) { return ea(a); })), u.previewPane);
                return [2];
            });
        });
    }
    function K() {
        return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
            a = document.documentElement;
            a.classList.toggle("dark_mode", c.settings.darkMode), a.classList.toggle("advanced", c.settings.advancedUI), P(ra(), u.toolbar);
            return [2];
        }); });
    }
    function ta() { P(qa(), u.customStyles); }
    function A(a, b) {
        if (b === void 0) { b = !1; }
        u.modal.classList.toggle("open", a), P(sa(a, b), u.modal);
        if (a)
            try {
                u.modal.querySelector("input").focus();
            }
            catch (d) { }
        a || (c.now.editing = {}, K(), _a(), n());
    }
    function _a() {
        var e_14, _b;
        var _c, _d, _e;
        P(pa(), u.styleEditorPane);
        try {
            for (var _f = __values(u.styleEditorPane.querySelectorAll("code")), _g = _f.next(); !_g.done; _g = _f.next()) {
                var a = _g.value;
                a.innerHTML = "", a.id.includes("field") && (a.innerText = ((_c = c.now.selected.fieldType) === null || _c === void 0 ? void 0 : _c.css) || ""), a.id.includes("global") && (a.innerText = ((_d = c.now.selected.globalType) === null || _d === void 0 ? void 0 : _d.css) || ""), (_e = z) === null || _e === void 0 ? void 0 : _e.formatCSS({ target: a });
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_14) throw e_14.error; }
        }
    }
    function s() {
        P(i(__makeTemplateObject(["\n        <div class=heading>\n            Content Editor\n            <span tabindex=0\n                data-tooltip=\"This pane is for editing the content of your document. Try nesting content blocks or adding custom fields to a section.\"></span>\n        </div>\n        \n        ", "\n        "], ["\n        <div class=heading>\n            Content Editor\n            <span tabindex=0\n                data-tooltip=\"This pane is for editing the content of your document. Try nesting content blocks or adding custom fields to a section.\"></span>\n        </div>\n        \n        ", "\n        "]), c.now.children.map(function (a, b) { return da(a, c.now, b); })), u.contentEditorPane);
    }
    function oa(a) {
        if (a === void 0) { a = !1; }
        return __awaiter(this, void 0, void 0, function () { var b; return __generator(this, function (_b) {
            if (!c.hasChanged && !a)
                return [2];
            localStorage.setItem("State", JSON.stringify(c));
            b = JSON.stringify(c, function (d, e) { return d == "history" ? [] : d == "settings" ? {} : e; });
            c.history.push(JSON.stringify(c.now)), c.nowIndex = c.history.length - 1, c.history.length > 250 && c.history.splice(0, 1), c.hasChanged = !1, c.lastSaved = new Date().getTime(), c.forExport = URL.createObjectURL(new Blob([b], { type: "application/json" })), K();
            return [2];
        }); });
    }
    c.isNewUser && !c.now.children.length && (c.now.children.push(new J()), oa(!0));
    R();
    q();
    setInterval(oa, ca.saveInterval);
    document.body.classList.remove("loading");
    c.isMobile = innerWidth < ca.mobileBreakpoint;
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
