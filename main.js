! function (e) {
    var t = {};

    function s(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, s), r.l = !0, r.exports
    }
    s.m = e, s.c = t, s.d = function (e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, s.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(i, r, function (t) {
                return e[t]
            }.bind(null, r));
        return i
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "", s(s.s = 0)
}([function (e, t, s) {
    "use strict";

    function i(e, t, s, i, r) {
        let n = document.createElement("div");
        n.classList.add("menu-item");
        let a = document.createElement("img");
        a.setAttribute("src", t);
        let o = document.createElement("div");
        o.classList.add("item-description");
        let c = document.createElement("h3");
        c.innerText = s;
        let d = document.createElement("p");
        d.innerText = i;
        let u = document.createElement("h4");
        u.innerText = r, o.appendChild(c), o.appendChild(d), o.appendChild(u), n.appendChild(a), n.appendChild(o), e.appendChild(n)
    }

    function r(e) {
        i(e, "dist/assets/pictures/angry-wife.jpg", "Angry Wife", "Double hamburger with chilli sauce, peppers, pickles and chedar", "13.59$"), i(e, "dist/assets/pictures/double-trouble.jpg", "Double Trouble", "Double hambruger with double chedar, bacon and barbeque sauce", "12.59$"), i(e, "dist/assets/pictures/egg-splash.jpg", "Egg Splash", "Tortilla hamburger with eggs, chedar, mozzarella and bacon", "9.59$"), i(e, "dist/assets/pictures/green-pasture.jpg", "Green Pasture", "Hamburger with parsley, mozzarella, tomato sauce and pickles", "10.59$"), i(e, "dist/assets/pictures/homemade.jpg", "Homemade", "Double Hamburger with homemade sauce, pickels, tomatos and onions", "14.59$"), i(e, "dist/assets/pictures/melting-potato.jpg", "Melting Potato", "Potato burger with chedar, mozarella, onions and mayo", "12.59$"), i(e, "dist/assets/pictures/original.jpg", "Original", "Hamburger with chedar, salad, tomato, onions and homemade sauce", "10.59$"), i(e, "dist/assets/pictures/tripple-dipple.jpg", "Tripple Dipple", "Triple everything, including pickles, cheese, tomatos, onions", "17.59$")
    }
    let n, a, o, c, d, u;

    function l() {
        n.innerText = ""
    }

    function p(e, t) {
        e.classList.add("active"), t.classList.remove("active")
    }
    s.r(t), document.addEventListener("DOMContentLoaded", (function () {
        n = document.getElementsByClassName("menu")[0], a = document.getElementById("starters"), o = document.getElementById("mains"), d = document.getElementById("desserts"), c = document.getElementById("drinks"), r(n), o.classList.add("active"), u = o, a.addEventListener("click", (function (e) {
            var t;
            l(), i(t = n, "dist/assets/pictures/fried-chedar.jpg", "Fried Chedar", "Fried cheddar served with tartar sauce", "4.59$"), i(t, "dist/assets/pictures/fries.jpg", "French Fries", "Thin French fries served with ketchup and mayo", "2.89$"), i(t, "dist/assets/pictures/onion-rings.jpg", "Onion Rings", "Fried onion rings served with any 2 sauces", "2.49$"), p(a, u), u = a
        })), o.addEventListener("click", (function (e) {
            l(), r(n), p(o, u), u = o
        })), d.addEventListener("click", (function (e) {
            var t;
            l(), i(t = n, "dist/assets/pictures/ice-cream.jpg", "Ice Cream", "", "1.59$"), i(t, "dist/assets/pictures/princess-cake.jpg", "Princess Cake", "", "2.59$"), i(t, "dist/assets/pictures/rainbow-cake.jpg", "Rainbow Cake", "", "3.59$"), i(t, "dist/assets/pictures/souffle.jpg", "Souffle", "", "2.89$"), i(t, "dist/assets/pictures/tiramisu.jpg", "Tiramisu", "", "2.59$"), p(d, u), u = d
        })), c.addEventListener("click", (function (e) {
            var t;
            l(), i(t = n, "dist/assets/pictures/soft-drinks.jpg", "Soft Drinks", "Coca Cola, Fanta, Sprite, Schweppes", "2.59$"), i(t, "dist/assets/pictures/beer.jpg", "Draft beer", "Carlsberg, Blue Moon, Kruger Red", "3.59$"), i(t, "dist/assets/pictures/wine.jpg", "Wine", "Your choice of red wine, rose, chardonne or riesling", "3.59$"), p(c, u), u = c
        }))
    }))
}]);