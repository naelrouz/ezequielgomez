!function () {
    function e() {

        function e() {
            var e = document.getElementById("js-above"), i = document.createElement("div");
            document.documentElement.clientHeight;
                i.id = "js-intro-fil-bk",
                i.className = "intro-filter-bk",
                e.appendChild(i),
                j.setAttribute("style", "opacity: 0; display: none"),
                w.setAttribute("style", "opacity: 0; bottom: 14%; display: none")
        }

        function i() {
            if (c.isAndroid || c.isiOS || c.isTablet)$("#js-png-sprite").addClass("play"); else {
                var e = $("#js-video").get(0);
                e.play()
            }
        }

        function t(e) {
            TweenMax.set("#js-top-logo", {webkitFilter: "blur(" + b.a + "px)", filter: "blur(" + b.a + "px)"})
        }

        function s() {
            TweenMax.to("#js-loading", 1, {opacity: 0, display: "none"})
        }

        function n() {
            TweenMax.to("#js-intro", .4, {opacity: 0, display: "none"})
        }

        function o() {
            TweenMax.to(j, 2, {opacity: 1, display: "block", easing: Power0.easeNone}), TweenMax.to(b, 3.5, {
                a: 0,
                onUpdate: t,
                easing: Power0.easeNone
            })
        }

        function a() {
            TweenMax.to("#js-intro-fil-bk", 4, {opacity: 0, display: "none"})
        }

        function r() {
            TweenMax.to(w, .8, {opacity: 1, bottom: "15%", display: "block"})
        }

        function l() {
            $("#js-top-logo, #js-top-btn").css({"z-index": 1})
        }

        function d() {
            for (var e = [{animation: s, interval: 1e3}, {animation: i, interval: 5800}, {
                animation: n,
                interval: 1400
            }, {animation: o, interval: 3600}, {animation: a, interval: 4e3}, {
                animation: r,
                interval: 800
            }, {
                animation: l,
                interval: 0
            }], t = 500, d = e.length, c = 0; d > c; c++)setTimeout(e[c].animation, t), t += e[c].interval
        }

        var m = document.getElementById("js-intro-inner"), p = document.createElement("video"), u = document.createElement("source"), v = document.createElement("source"), h = document.createElement("p"), f = document.createElement("img"), g = document.createElement("div");
        p.id = "js-video", p.className = "intro__video", p.setAttribute("poster", "http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/front-page/sj-poster.svg"), u.setAttribute("src", "http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/video/logo-anim.webm"), u.setAttribute("type", "video/webm"), v.setAttribute("src", "http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/video/logo-anim.mp4"), v.setAttribute("type", "video/mp4"), f.setAttribute("src", "http://shokijoetaki.com/wordpress/wp-content/themes/shokijoetaki/assets/images/common/sj-logo.svg"), h.appendChild(f), p.appendChild(u), p.appendChild(v), p.appendChild(h), g.id = "js-png-sprite", g.className = "intro__png-sprite", c.isAndroid || c.isiOS || c.isTablet ? m.appendChild(g) : m.appendChild(p);
        var j = document.getElementById("js-top-logo"), w = document.getElementById("js-top-btn");
        e();
        var b = {a: 20};
        window.onload = d()
    }

    function i(e) {
        var i = $(window), t = i.height();
        e.css({height: t + "px"})
    }

    function t(e) {
        e.children().andSelf().contents().each(function () {
            3 === this.nodeType && $(this).replaceWith($(this).text().replace(/(\w)/g, "<span>$&</span>"))
        })
    }

    function s() {
        var e = $("#slideshow"), t = $("#js-main"), s = $("#slideshow-thumbs");
        t.hasClass("collections-single") && (c.isAndroid || c.isiPhone || c.isiPod ? t.addClass("is-mobile") : window.matchMedia("(max-width: 768px)").matches !== !0 && (i(e), e.each(function () {
            function e(e) {
                p = e, i()
            }

            function i() {
                o.removeClass("cur").eq(p).addClass("cur"), p === d - 1 ? o.removeClass("after").eq(0).addClass("after") : o.removeClass("after").eq(p + 1).addClass("after"), o.removeClass("before").eq(p - 1).addClass("before"), l.removeClass("active").eq(p).addClass("active")
            }

            var t = $("#slideshow-slides"), n = t.find("div.slide__desc"), o = t.find("div.slide__img"), a = $("#slideshow-nav"), r = $("#slideshow-indicator"), l = r.find("a"), d = o.length, c = "", m = "", p = 0;
            l.each(function (e) {
                c += "<span>" + (e + 1) + "</span>", $(this).html(c)
            }), n.each(function (e) {
                m = "<span>" + (e + 1) + "</span>", $(this).prepend(m)
            }), a.on("click", "a", function (i) {
                var t = $(this);
                i.preventDefault(), t.hasClass("trigger--prev") ? e(0 === p ? d - 1 : p - 1) : t.hasClass("trigger--next") && e(p === d - 1 ? 0 : p + 1)
            }), l.on("click", function (i) {
                $(this).hasClass("active") || (e($(this).index()), setTimeout(function () {
                    s.removeClass("is-visible")
                }, 800)), i.preventDefault()
            }), e(p)
        }),
        $("#slideshow-indicator-open").on("click", function () {
            s.addClass("is-visible")
        }),
        $("#slideshow-indicator-close").on("click", function () {
            s.removeClass("is-visible")
        })))
    }

    function n(e) {
        var i = $(window), t = (i.width, e.find("img")), s = $("#js-slide-btn");
        (c.isAndroid || c.isiOS || c.isTablet) !== !0 && t.each(function () {
            $(this).on("click.addstyle", function () {
                var i = $(this);
                e.css({overflow: "hidden", "z-index": 9999}), i.parent("div").css({
                    overflow: "auto",
                    background: "rgba(0,0,0,.8)"
                }), i.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    "max-height": "none",
                    cursor: "auto"
                }),
                    s.addClass("is-visible")
            }),
            s.on("click", function () {
                var i = $(this);
                    e.removeAttr("style"),
                    i.parent("div").removeAttr("style"),
                    t.removeAttr("style"),
                    i.removeClass("is-visible")
            })
        })
    }

    function o(e, i) {
        e.each(function () {
            function e() {
                n = setInterval(t, i)
            }

            function t() {
                var e = (r + 1) % a;
                a >= 3 && (o.eq(r).removeClass("is-visible").removeClass("is-first-time").addClass("is-prev"), o.eq(r - 1).removeClass("is-prev"), o.eq(e).addClass("is-visible"), r = e)
            }

            function s() {
                clearInterval(n)
            }

            var n, o = $(this).find(".slides"), a = o.length, r = 0;
            o.eq(r).addClass("is-first-time"),
            (c.isAndroid || c.isiOS || c.isTablet) !== !0 && $("#js-wrapper").on({
                mouseleave: s,
                mouseenter: e
            })
        })
    }

    function a() {
        var e = $("#js-menu-btn"), i = $("#js-modal");
        i.find("ul");
        $("#js-menu-btn-in").on("click", function () {
            e.toggleClass("is-prepend"), i.toggleClass("is-fadeIn")
        })
    }

    function r() {
        var e = $("#js-intro"), i = $("#js-loading"), t = $("#js-ticker"), s = $("#js-top-slide");
        e.length && i.length && TweenMax.to([e, i], 1, {
            opacity: 0,
            display: "none"
        }), o(s, 12500), t.length && setTimeout(function () {
            o(t, 6e3)
        }, 500)
    }

    function l(e) {
        for (var i, t = e, s = t.children(), n = s.length, o = [], a = 0; n > a; a++)o[a] = s.eq(a).height();
        i = Math.max.apply(null, o),
        s.css({height: i + "px"})
    }

    function d() {
        var e = $("[id^=js-page-ttl-]");
        i($("#js-above")), t($("#js-text"));
        for (var o = 0, a = e.length; a > o; o++)t($("#js-page-ttl-" + (o + 1)));
        l($("#js-japan")), l($("#js-overseas")), l($("#js-online")), s(), n($("#slideshow-slides")), $("#lb-checkbox").on("change", function () {
            $(this).prop("checked") ? $("#js-label").css({opacity: 1}) : $("#js-label").css({opacity: 0})
        }), $("a[href^=#]").on("click", function () {
            var e = $(this).attr("href"), i = $("#" === e || "" === e ? "html" : e), t = i.offset().top;
            return TweenMax.to($(window), .5, {scrollTo: {y: t}, ease: Power4.easeOut}), !1
        })
    }

    var c = {};
    c.name = window.navigator.userAgent.toLowerCase(), c.isIE = c.name.indexOf("msie") >= 0 || c.name.indexOf("trident") >= 0, c.isiPhone = c.name.indexOf("iphone") >= 0, c.isiPod = c.name.indexOf("ipod") >= 0, c.isiPad = c.name.indexOf("ipad") >= 0, c.isiOS = c.isiPhone || c.isiPod || c.isiPad, c.isAndroid = c.name.indexOf("android") >= 0, c.isTablet = c.isiPad || c.isAndroid && c.name.indexOf("mobile") < 0, c.isIE && (c.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(c.name), c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isiOS && (c.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(c.name), c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isAndroid && (c.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(c.name), c.verArray && (c.ver = parseInt(c.verArray[2], 10))), $.fn.inViews = function (e) {
        var i = $(window), t = {}, s = {};
        switch (t.top = i.scrollTop(), t.mid = t.top + i.height() / 2, t.bottom = t.top + i.height(), s.top = $(this).offset().top, s.bottom = s.top + $(this).outerHeight(), e) {
            case"whmid":
                return s.top > i.height() / 2;
            case"wh":
                return s.top > i.height();
            case"bottom":
                return s.bottom <= t.bottom;
            case"center":
                return s.top <= t.mid;
            case"top":
                return s.top <= t.bottom;
            default:
                return s.top <= t.bottom && s.top >= t.top
        }
    }, $(function () {
        var i = $(window), s = ($("body"), $("#js-main")), n = $("#js-page-change");
        $.pjax({
            area: "#js-main, #js-nav, #js-modal-li",
            link: "a:not([target])",
            wait: 1e3,
            ajax: {timeout: 2500},
            load: {head: "base, meta, link", script: !0, css: !0},
            reset: {count: 10}
        }), $(document).on("pjax:fetch", function () {
            var e = $("#js-nav"), i = e.find("li"), t = $("#js-modal-li"), s = t.find("li");
            i.removeClass("cur"), s.removeClass("cur"), n.addClass("is-visible"), $("#js-menu-btn").removeClass("is-prepend"), $("#js-modal").removeClass("is-fadeIn").addClass("is-fadeOut"), $("#js-ticker").removeClass("is-visible"), clearTimeout($.data($("#js-page-loading").get(0), "pjax-effect-id")), $.data($("#js-page-loading").get(0), "pjax-effect-id", setTimeout(function () {
                $("#js-page-loading").fadeIn(100)
            }, 1e3))
        }), $(window).on("pjax:unload", function () {
            return $("#js-modal").removeClass("is-fadeOut")
        }), $(document).on("pjax:ready", function () {
            var e = document.getElementById("js-top-logo");
            $("#js-cover, #js-ticker").removeClass("is-visible"), null !== e && e.setAttribute("style", "z-index: 1;")
        }), $(document).on("pjax:render", function () {
            d(), r(), clearTimeout($.data($("#js-page-loading").get(0), "pjax-effect-id")), $("#js-page-loading").fadeOut(100), $.data($("#js-page-loading").get(0), "pjax-effect-id", 0)
        }), $(window).on("pjax:load", function () {
            return n.removeClass("is-visible"), $("#js-cover, #js-ticker").addClass("is-visible")
        }), d(), a(), t($("#js-page-loading, #js-opening-loading")), i.on({
            load: function () {
                var i = document.referrer, t = "http://" + location.hostname, n = $("#js-ticker"), a = $("#js-top-slide");
                s.hasClass("front-page") && -1 === i.indexOf(t) ? (e(), setTimeout(function (e, i) {
                    o(e, i)
                }, 7700, a, 14500), n.length && setTimeout(function (e, i) {
                    o(e, i)
                }, 7800, n, 8500)) : r()
            }, scroll: $.throttle(1e3 / 15, function () {
                var e = $("#js-con-img"), t = $("#js-header"), s = $("#js-gtt"), n = $("#js-view"), o = $("#js-view-1"), a = $("#js-view-2"), r = $("#js-view-3"), l = $(".post-li__inner"), d = $("[id^=js-page-ttl-]");
                null !== document.getElementById("js-con-img") && e.inViews("top") === !0 && e.addClass("is-visible");
                for (var m = 0, p = d.length; p > m; m++)$("#js-page-ttl-" + (m + 1)).inViews("top") === !0 && $("#js-page-ttl-" + (m + 1)).addClass("is-visible");
                (c.isAndroid || c.isiOS || c.isTablet) !== !0 && ($("body[class^=blog], body[class$=single]").length ? i.scrollTop() > 10 ? t.addClass("is-hover") : t.removeClass("is-hover") : t.inViews("whmid") === !0 ? t.addClass("is-hover") : t.removeClass("is-hover")), s.inViews("wh") === !0 ? s.css({
                    opacity: 1,
                    visibility: "visible",
                    transitionDuration: "1s"
                }) : s.css({
                    opacity: 0,
                    visibility: "hidden",
                    transitionDuration: "1s"
                }), null !== document.getElementById("js-view-1") && o.inViews("center") === !0 && o.addClass("is-visible"), null !== document.getElementById("js-view-2") && a.inViews("center") === !0 && a.addClass("is-visible"), null !== document.getElementById("js-view-3") && r.inViews("center") === !0 && r.addClass("is-visible"), null !== document.getElementById("js-view") && l.length && n.inViews("center") === !0 && TweenMax.staggerTo(l, 1, {
                    visibility: "visible",
                    opacity: 1,
                    ease: Power2.easeOut
                }, .3)
            })
        })
    })
}();