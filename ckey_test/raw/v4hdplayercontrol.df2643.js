

/*! Txplayer - v3.0.0 - 2020-05-29 18:50:31
 * Copyright (c) 2020
 * Powered by Tencent-Video Web Front End Team
*/
!function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {exports: {}, id: d, loaded: !1};
        return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }

    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
}({
    0: function (a, b, c) {
        a.exports = c(284)
    }, 49: function (a, b) {
        !function (a) {
            function b() {
            }

            function c(a) {
                g = [a]
            }

            function d(a, b, c) {
                return a && a.apply(b.context || b, c)
            }

            function e(a) {
                return /\?/.test(a) ? "&" : "?"
            }

            function f(f) {
                function n(a) {
                    X++ || (Y(), S && (A[U] = {s: [a]}), O && (a = O.apply(f, [a])), d(L, f, [a, v, f]), d(N, f, [f, v]))
                }

                function F(a) {
                    X++ || (Y(), S && a != w && (A[U] = a), d(M, f, [f, a]), d(N, f, [f, a]))
                }

                f = a.extend({}, C, f);
                var G, H, I, J, K, L = f.success, M = f.error, N = f.complete, O = f.dataFilter,
                    P = f.callbackParameter, Q = f.callback, R = f.cache, S = f.pageCache, T = f.charset, U = f.url,
                    V = f.data, W = f.timeout, X = 0, Y = b;
                return y && y(function (a) {
                    a.done(L).fail(M), L = a.resolve, M = a.reject
                }).promise(f), f.abort = function () {
                    !X++ && Y()
                }, d(f.beforeSend, f, [f]) === !1 || X ? f : (U = U || j, V = V ? "string" == typeof V ? V : a.param(V, f.traditional) : j, U += V ? e(U) + V : j, P && (U += e(U) + encodeURIComponent(P) + "=?"), !R && !S && (U += e(U) + "_" + (new Date).getTime() + "="), U = U.replace(/=\?(&|$)/, "=" + Q + "$1"), S && (G = A[U]) ? G.s ? n(G.s[0]) : F(G) : (x[Q] = c, I = a(u)[0], I.id = m + B++, T && (I[i] = T), D && D.version() < 11.6 ? (J = a(u)[0]).text = "document.getElementById('" + I.id + "')." + p + "()" : I[h] = h, E && (I.htmlFor = I.id, I.event = o), I[q] = I[p] = I[r] = function (a) {
                    if (!I[s] || !/i/.test(I[s])) {
                        try {
                            I[o] && I[o]()
                        } catch (b) {
                        }
                        a = g, g = 0, a ? n(a[0]) : F(k)
                    }
                }, I.src = U, Y = function (a) {
                    K && clearTimeout(K), I[r] = I[q] = I[p] = null, z[t](I), J && z[t](J)
                }, z[l](I, H = z.firstChild), J && z[l](J, H), K = W > 0 && setTimeout(function () {
                    F(w)
                }, W)), f)
            }

            var g, h = "async", i = "charset", j = "", k = "error", l = "insertBefore", m = "_jqjsp", n = "on",
                o = n + "click", p = n + k, q = n + "load", r = n + "readystatechange", s = "readyState",
                t = "removeChild", u = "<script>", v = "success", w = "timeout", x = window, y = a.Deferred,
                z = a("head")[0] || document.documentElement, A = {}, B = 0, C = {callback: m, url: location.href},
                D = x.opera, E = !!a("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;
            f.setup = function (b) {
                a.extend(C, b)
            }, a.jsonp = f
        }(Txplayer.$)
    }, 68: function (a, b) {
        var c = {unstarted: -1, ended: 0, playing: 1, paused: 2, buffering: 3, cued: 4, stop: 5}, d = {
            msd: "\u6d41\u7545180P",
            sd: "\u6807\u6e05270P",
            hd: "\u9ad8\u6e05480P",
            shd: "\u8d85\u6e05720P",
            fhd: "\u84dd\u51491080P",
            uhd: "4K"
        };
        a.exports = {playerstate: c, definitionMap: d}
    }, 69: function (a, b) {
        function c(a) {
            var b = {
                getinfo: ["http://h5vv.video.qq.com/getinfo?callback=?", "https://h5vv.video.qq.com/getinfo?callback=?"],
                edugetvinfo: ["http://sv.video.qq.com/edugetvinfo?callback=?", "https://sv.video.qq.com/edugetvinfo?callback=?"],
                mvgetinfo: ["http://sv.video.qq.com/mvgetinfo?callback=?", "https://sv.video.qq.com/mvgetinfo?callback=?"],
                getinfoInews: ["http://h5wx.video.qq.com/getinfo?callback=?", "https://h5wx.video.qq.com/getinfo?callback=?"],
                getvinfo: ["http://h5vv.video.qq.com/getvinfo?callback=?", "https://h5vv.video.qq.com/getvinfo?callback=?"],
                getkey: ["http://h5vv.video.qq.com/getkey?callback=?", "https://h5vv.video.qq.com/getkey?callback=?"],
                mvgetkey: ["http://sv.video.qq.com/mvgetkey?callback=?", "https://sv.video.qq.com/mvgetkey?callback=?"],
                getkeyInews: ["http://h5wx.video.qq.com/getkey?callback=?", "https://h5wx.video.qq.com/getkey?callback=?"],
                zb: ["http://info.zb.video.qq.com/?callback=?", "https://info.zb.video.qq.com/?callback=?"],
                rmd_mobile: ["http://like.video.qq.com/fcgi-bin/rmd_mobile?callback=?", "https://like.video.qq.com/fcgi-bin/rmd_mobile?callback=?"],
                like: ["http://like.video.qq.com/fcgi-bin/like?", "https://like.video.qq.com/fcgi-bin/like?"],
                dataout_ex: ["http://sns.video.qq.com/fcgi-bin/dlib/dataout_ex?", "https://sns.video.qq.com/fcgi-bin/dlib/dataout_ex?"],
                get_dtype: ["http://h5vv.video.qq.com/getdtype?", "https://h5vv.video.qq.com/getdtype?"]
            };
            return "https:" === window.location.protocol ? b[a][1] : b[a][0]
        }

        function d(a) {
            return e = Txplayer.$, this.context = a.context, this.init()
        }

        var e = Txplayer.$, f = Txplayer.util, g = f.AppHelper, h = [{
            reg: function () {
                return !!this.cfg.noAuth
            }, request: function (a) {
                var b = this;
                a.resolve({param: {vids: b.cfg.vid, defaultfmt: b.cfg.fmt}})
            }
        }, {
            reg: function () {
                var a;
                return a = f.isInIframe() ? f.getHostname(document.referrer) : window.location.hostname, !!(a && a.indexOf("weishi.qq.com") > -1)
            }, request: function (a) {
                a.resolve({param: {platform: "110701", sdtfrom: "v7015"}})
            }
        }, {
            reg: function () {
                return !(!this.cfg.eduext && !this.cfg.authext || location.href.indexOf("campus.qq.com") !== -1)
            }, request: function (a) {
                var b = this;
                a.resolve({
                    cgi: c("edugetvinfo"),
                    param: {
                        eduext: b.cfg.eduext,
                        platform: f.mobile ? "261001" : "260201",
                        vid: b.cfg.vid,
                        defn: b.cfg.fmt
                    }
                })
            }
        }, {
            reg: function () {
                var a = window.location.hostname;
                return f.isInIframe() && (a = f.getHostname(document.referrer)), "kuaibao.qq.com" === a || "m.gamefeeds.qq.com" === a
            }, request: function (a) {
                var b = this;
                a.resolve({cgi: c("getinfo"), param: {platform: "570701", vid: b.cfg.vid, sdtfrom: "v7152"}})
            }
        }, {
            reg: function () {
                return 1 === this.cfg.classType
            }, request: function (a) {
                var b = this;
                a.resolve({cgi: c("edugetvinfo"), param: {platform: 221001, vid: b.cfg.vid, defn: b.cfg.fmt}})
            }
        }, {
            reg: function () {
                if (window !== top && "v.qq.com" === location.hostname && "/iframe/player.html" === location.pathname) {
                    var a = f.getParams(location.href);
                    if (a && a.cKey && a.encryptVer && a.platform) return this.params = a, !0
                }
                return !1
            }, request: function (a) {
                var b, d = this, e = {
                    cgi: c("getinfo"),
                    param: {
                        encryptVer: d.params.encryptVer,
                        platform: d.params.platform,
                        cKey: d.params.cKey,
                        vids: d.cfg.vid,
                        defaultfmt: d.cfg.fmt
                    }
                };
                try {
                    b = window.parent.location.href
                } catch (f) {
                }
                b && (e.param.wxrefer = b), a.resolve(e)
            }
        }, {
            reg: function () {
                return !(!f.browser.mqq || "xiaoqu.qq.com" !== window.location.hostname && "buluo.qq.com" !== window.location.hostname)
            }, request: function (a) {
                if (!window.getBrowserSignature) return void a.reject();
                var b = this;
                window.getBrowserSignature(b.cfg.vid, function (c) {
                    var d;
                    if (c && c.data) try {
                        var e = JSON.parse(c.data);
                        e && e.result && e.result.token && (d = e.result.token)
                    } catch (g) {
                    }
                    d ? a.resolve({
                        param: {
                            cKey: d,
                            encryptVer: "6.4",
                            platform: f.os.ios ? "170408" : "170308",
                            vids: b.cfg.vid,
                            defaultfmt: b.cfg.fmt
                        }
                    }) : a.reject()
                })
            }
        }, {
            reg: function () {
                return "qzs.qq.com" == window.location.hostname && (window.location.href.indexOf("//qzs.qq.com/open/mobile") > -1 || window.location.href.indexOf("//qzs.qq.com/open/yyb/") > -1)
            }, request: function (a) {
                a.resolve({param: {platform: "2730701", sdtfrom: "v7002"}})
            }
        }, {
            reg: function () {
                return "post.mp.qq.com" === window.location.hostname
            }, request: function (a) {
                a.resolve({param: {platform: "4080701", sdtfrom: "v7016"}})
            }
        }, {
            reg: function () {
                return "viewlite.inews.qq.com" == window.location.hostname || "rl.inews.qq.com" == window.location.hostname || "album.sparta.html5.qq.com" == window.location.hostname
            }, request: function (a) {
                a.resolve({param: {platform: "5750701", sdtfrom: "v7003"}})
            }
        }, {
            reg: function () {
                return !!(window.location.hostname && window.location.hostname.indexOf("lexiangla.com") > -1)
            }, request: function (a) {
                a.resolve({param: {platform: "3570701", sdtfrom: "v7005"}})
            }
        }, {
            reg: function () {
                return !(!f.browser.mqqbrowser || f.browser.mqq || f.browser.wechat || f.browser.qqdownloader || window !== top)
            }, request: function (a) {
                var b, d, h = this,
                    i = "undefined" != typeof h.cfg.svr_time ? h.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "",
                    j = function () {
                        var b, d, e = {vid: h.cfg.vid};
                        e.timestamp = i, f.os.ios ? (b = window.x5.ios.getBrowserSignature, d = f.os.ipad ? e : "vid:" + e.vid + "[" + e.timestamp + "]") : (b = window.x5.android.getBrowserSignature, d = "vid:" + e.vid + "[" + e.timestamp + "]"), b(d, function (b) {
                            var d;
                            "object" == typeof b && b.key && b.ver && b.platform ? (d = {
                                cgi: c("getvinfo"),
                                param: {
                                    cKey: b.key,
                                    encryptVer: b.ver,
                                    platform: b.platform,
                                    vid: h.cfg.vid,
                                    defn: h.cfg.fmt,
                                    cgiType: "getvinfo"
                                }
                            }, a.resolve(d)) : "object" == typeof b && b.data ? (d = {
                                cgi: c("getvinfo"),
                                param: {
                                    cKey: b.data,
                                    encryptVer: "4.0",
                                    platform: "161001",
                                    vid: h.cfg.vid,
                                    defn: h.cfg.fmt,
                                    cgiType: "getvinfo"
                                }
                            }, a.resolve(d)) : "string" == typeof b ? (d = {
                                cgi: c("getvinfo"),
                                param: {
                                    cKey: b,
                                    encryptVer: "4.0",
                                    platform: "161001",
                                    vid: h.cfg.vid,
                                    defn: h.cfg.fmt,
                                    cgiType: "getvinfo"
                                }
                            }, a.resolve(d)) : a.reject()
                        }, function () {
                            a.reject()
                        })
                    };
                b = window.x5 && window.x5.ios && "function" === e.type(window.x5.ios.getBrowserSignature), d = window.x5 && "function" === e.type(window.x5.getBrowserSignature), b || d ? j() : g.loadMqqBrowserAPI().done(function () {
                    b = window.x5 && window.x5.ios && "function" === e.type(window.x5.ios.getBrowserSignature), d = window.x5 && "function" === e.type(window.x5.getBrowserSignature), b || d ? j() : a.reject()
                }).fail(function () {
                    a.reject()
                })
            }
        }, {
            reg: function () {
                return !!f.browser.kuaibao
            }, request: function (a) {
                var b, c, d, e = this, g = e.cfg.vid,
                    h = "undefined" != typeof e.cfg.svr_time ? e.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "",
                    i = "TVP_KUAIBAO_CB_" + h.substr(-4, 4);
                if (window.top !== window) {
                    try {
                        var j = window.top.location.href;
                        j && (b = window.top, c = b.document)
                    } catch (k) {
                        d = !0
                    }
                    if (d) return void a.reject()
                } else b = window, c = b.document;
                b[i] = function (b) {
                    var c;
                    try {
                        c = JSON.parse(b)
                    } catch (d) {
                    }
                    if (c && c.key && c.ver && c.platform && c.sdtfrom) {
                        var f = {
                            param: {
                                cKey: c.key,
                                encryptVer: c.ver,
                                platform: c.platform,
                                sdtfrom: c.sdtfrom,
                                vid: e.cfg.vid,
                                defaultfmt: "mp4",
                                clip: 4
                            }
                        };
                        a.resolve(f)
                    } else a.reject()
                };
                var l = function () {
                    var a = {
                            method: "getCKey",
                            types: ["string", "string", "string"],
                            args: [g, h, i],
                            instanceName: "TencentNewsScriptControllerJsInterface"
                        }, b = "jsbridge://get_with_json_data?json=" + encodeURIComponent(JSON.stringify(a)) + "&_t=" + h,
                        c = new Image;
                    c.src = b
                }, m = function () {
                    var a = function () {
                        b.getBrowserSignature(g, h, i)
                    };
                    "function" == typeof b.getBrowserSignature ? (a(), c.addEventListener("TencentNewsJSInjectionComplete", function () {
                        a()
                    })) : c.addEventListener("TencentNewsJSInjectionComplete", function () {
                        a()
                    })
                };
                f.os.ios ? m() : f.os.android ? l() : a.reject()
            }
        }, {
            reg: function () {
                return !(!f.browser.qqnews || f.browser.qqnewsAd)
            }, request: function (a) {
                var b, c, d, g = this, h = g.cfg.vid,
                    i = "undefined" != typeof g.cfg.svr_time ? g.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "",
                    j = "TVP_KUAIBAO_CB_" + i.substr(-4, 4);
                if (window.top !== window) {
                    try {
                        var k = window.top.location.href;
                        k && (b = window.top, c = b.document)
                    } catch (l) {
                        d = !0
                    }
                    if (d) return void a.reject()
                } else b = window, c = b.document;
                b[j] = function (b) {
                    var c;
                    try {
                        c = JSON.parse(b)
                    } catch (d) {
                    }
                    if (c && c.key && c.ver && c.platform && c.sdtfrom) {
                        var e = {
                            param: {
                                cKey: c.key,
                                encryptVer: c.ver,
                                platform: c.platform,
                                sdtfrom: c.sdtfrom,
                                vid: g.cfg.vid,
                                defaultfmt: "mp4",
                                clip: 4
                            }
                        };
                        a.resolve(e)
                    } else a.reject()
                };
                var m = function () {
                    var a = function () {
                        window.TencentNews.invoke("getCKey", h, i, j)
                    };
                    window.TencentNews && window.TencentNews.invoke ? a() : e.getScript("//mat1.gtimg.com/www/js/newsapp/jsapi/news.js?_tsid=1", function () {
                        window.TencentNews && window.TencentNews.invoke && a()
                    })
                }, n = function () {
                    var a = function () {
                        b.getBrowserSignature(h, i, j)
                    };
                    "function" == typeof b.getBrowserSignature ? (a(), c.addEventListener("TencentNewsJSInjectionComplete", function () {
                        a()
                    })) : c.addEventListener("TencentNewsJSInjectionComplete", function () {
                        a()
                    })
                };
                f.os.ios ? n() : f.os.android ? m() : a.reject()
            }
        }, {
            reg: function () {
                return !(!f.browser.douban && !f.browser.liebao)
            }, request: function (a) {
                var b, c = this,
                    d = "undefined" != typeof c.cfg.svr_time ? c.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "",
                    e = function () {
                        if (!window.getBrowserSignature) return void a.reject();
                        try {
                            b = window.getBrowserSignature(c.cfg.vid, d)
                        } catch (e) {
                        }
                        if (b && b.key && b.ver && b.platform) {
                            var f = {
                                param: {
                                    cKey: b.key,
                                    encryptVer: b.ver,
                                    platform: b.platform,
                                    vid: c.cfg.vid,
                                    defaultfmt: c.cfg.fmt
                                }
                            };
                            a.resolve(f)
                        } else a.reject()
                    };
                e()
            }
        }, {
            reg: function () {
                return !(!f.browser.mqq || "mqqcartoon" !== f.getUrlParam("openS"))
            }, request: function (a) {
                var b = this,
                    d = "undefined" != typeof b.cfg.svr_time ? b.cfg.svr_time + "" : parseInt(+new Date / 1e3) + "";
                e.getScript("http://imgcache.qq.com/club/client/comic/release/js/util/qqComicVideoAuth.js?t=" + d, function () {
                    "function" === e.type(window.getBrowserSignature) ? window.getBrowserSignature(b.cfg.vid, function (d) {
                        if (d && d !== -1) {
                            var e = {
                                cgi: c("getvinfo"),
                                param: {cKey: d, encryptVer: "6.4", platform: "170101", vid: b.cfg.vid, defn: b.cfg.fmt}
                            };
                            a.resolve(e)
                        }
                    }) : a.reject()
                })
            }
        }, {
            reg: function () {
                return f.isNews()
            }, request: function (a) {
                a.resolve({param: {platform: "20701"}})
            }
        }, {
            reg: function () {
                return f.isNewsPlugin()
            }, request: function (a) {
                a.resolve({param: {platform: "5430701", sdtfrom: "v7013"}})
            }
        }, {
            reg: function () {
                return "yoo.qq.com" === window.location.hostname
            }, request: function (a) {
                a.resolve({param: {platform: "4450701", sdtfrom: "v7158"}})
            }
        }, {
            reg: function () {
                function a(a, b) {
                    var c = a.replace(/\?/g, ".").replace(/#/g, "\\d").replace(/\*+/g, ".*");
                    return new RegExp("^" + c + "$", "i").test(b)
                }

                var b = ["lol.qq.com", "lolm.qq.com", "lole.qq.com", "lpl.qq.com"],
                    c = ["*.lol.qq.com", "*.lolm.qq.com", "*.lole.qq.com", "*.lpl.qq.com"];
                if (b.indexOf(window.location.hostname) > -1) return !0;
                for (var d = 0, e = c.length; d < e; d++) if (a(c[d], window.location.hostname)) return !0;
                return !1
            }, request: function (a) {
                a.resolve({param: {platform: "5290701", sdtfrom: "v7012"}})
            }
        }, {
            reg: function () {
                return "qc.vip.qq.com" == window.location.hostname || "cdn.vip.qq.com" == window.location.hostname
            }, request: function (a) {
                a.resolve({param: {platform: "4860701", sdtfrom: "v7159"}})
            }
        }, {
            reg: function () {
                return "h5.maobing.qq.com" == window.location.hostname || "h5test.maobing.qq.com" == window.location.hostname
            }, request: function (a) {
                a.resolve({param: {platform: "5020701", sdtfrom: "v7161"}})
            }
        }, {
            reg: function () {
                return "tool.helper.qq.com" === window.location.hostname || "pre.tool.helper.qq.com" === window.location.hostname
            }, request: function (a) {
                a.resolve({param: {platform: "5600701", sdtfrom: "v7019"}})
            }
        }, {
            reg: function () {
                return "xian.qq.com" === window.location.hostname
            }, request: function (a) {
                a.resolve({param: {platform: "5610701", sdtfrom: "v7021"}})
            }
        }, {
            reg: function () {
                return "m.v.qq.com" != window.location.hostname && "v.qq.com" != window.location.hostname
            }, request: function (a) {
                a.resolve({param: {platform: "4810701", sdtfrom: "v7157"}})
            }
        }];
        d.prototype = {
            init: function () {
                return this.exportsModuleApis(), this.reg_request
            }, reg_request: function (a, b) {
                var c = this;
                c.cfg = a, c.cfg2 = b;
                var d = e.Deferred(), f = !1;
                return e(h).each(function (a, b) {
                    return "function" !== e.type(b.reg) || ("function" !== e.type(b.request) || (!b.reg.call(c) || (f = !0, b.request.call(c, d), !1)))
                }), f || d.reject(), setTimeout(function () {
                    d.reject()
                }, 6e3), d
            }, exportsModuleApis: function () {
                var a = this;
                this.context.msg.setData("isInAuthRuleList", function (b, c) {
                    var d = !1;
                    a.cfg = {}, a.cfg2 = {}, e(h).each(function (b, c) {
                        return "function" !== e.type(c.reg) || (!c.reg.call(a) || (d = !0, !1))
                    }), c.data = d
                })
            }
        }, a.exports = d
    }, 108: function (a, b) {
        a.exports = {
            RFID: "TxpCreativePlayer-rfid",
            AD_EVENT: {
                AD_ORDER_DATA_READY: "onAdOrderDataReady",
                AD_ORDER_PPB_DATA_READY: "ppbAdDataReady",
                AD_ORDER_PDF_DATA_READY: "pdfAdDataReady",
                VIDEO_AD_LAYER_SHOW: "adVideoShow",
                VIDEO_AD_LAYER_HIDE: "adVideoHide"
            },
            PLAYER_STATE: {NOT_START: -1, END: 0, PLAYING: 1, PAUSE: 2, LOADING: 3},
            AD_TYPE: {
                LD: "LD",
                HT: "HT",
                ZC: "ZC",
                ZT: "ZT",
                KB: "KB",
                PSJ: "PSJ",
                PPB: "PPB",
                PVL: "PVL",
                ZI: "ZI",
                BS: "BS",
                PDF: "PDF",
                VIDEO_MARK: "PSJ|BS|ZI|ZC|CZC|VIN|PHLS",
                PHLS: "PHLS",
                CZC: "CZC"
            },
            LD_AD_REG: /LD|KB/,
            VIDEO_AD_REG: /LD|KB|ZC|HT/
        }
    }, 117: function (a, b, c) {
        function d(a) {
            e = Txplayer.util, f = Txplayer.$, this.context = a, this.dataset = {
                hasRequest: !1,
                retryTime: 0
            }, this.dataset.url = "//mark.l.qq.com/fcgi-bin/get_video_mark_all", 1 == e.getUrlParam("debugvideomark") && (this.dataset.url = "//testmark.l.qq.com/fcgi-bin/get_video_mark_all"), this.context.config.usePreviewDomain && (this.dataset.url = "//mark.cm.com/fcgi-bin/get_video_mark_all"), this.init(), f.jsonp || c(49)
        }

        var e, f, g = c(108).AD_TYPE, h = d.prototype, i = 1;
        h.init = function () {
            this.addEventListeners()
        }, h.addEventListeners = function () {
            var a = this;
            this.dataset.eventList = {}, this.dataset.eventList[e.getUniqueMsgKey("vidChange")] = function (b, c) {
                a.dataset.request && "function" === f.type(a.dataset.request.abort) && a.dataset.request.abort(), a.dataset.hasRequest = !1, a.dataset.retryTime = 0
            }, this.dataset.eventList[e.getUniqueMsgKey("beforeVideoRePlay")] = function () {
                a.dataset.request && "function" === f.type(a.dataset.request.abort) && a.dataset.request.abort(), a.dataset.hasRequest = !1, a.dataset.retryTime = 0
            }, f.each(this.dataset.eventList, function (b, c) {
                a.context.msg.on(b, c)
            })
        }, h.requestVideoMark = function () {
            var a = this, b = this.context.dataset.vid;
            if ((this.context.config.usePreviewDomain || "v.qq.com" === location.hostname && this.context.config.official) && !this.dataset.hasRequest) {
                this.dataset.hasRequest = !0;
                var c = "txplayer_get_video_mark_all", d = this.context.adApi.getAdRequestParam("VIDEO_MARK");
                d.url = encodeURIComponent(d.url), d.refer = encodeURIComponent(d.refer), d.vptag = encodeURIComponent(d.vptag), d.anchor = 1, this.context.dataset.adExtras.adsid && (d.session_id = this.context.dataset.adExtras.adsid);
                var h = {idlist: b, pr: 1, otype: "json", strAdParam: e.param(d), callback: c};
                if (this.context.dataset.adExtras && this.context.dataset.adExtras.adpinfo) {
                    var j = null;
                    try {
                        j = JSON.parse(this.context.dataset.adExtras.adpinfo)
                    } catch (k) {
                        e.v4log("get_video_mark_all: adpinfo parse err")
                    }
                    if (j && j.plugin_info && j.plugin_info.length > 0) {
                        var l = {ad_segments: []};
                        j.plugin_info.forEach(function (a) {
                            2 === +a.optype && l.ad_segments.push({start_time: a.ad_time, duration: a.ad_dura})
                        }), h.adsegments = JSON.stringify(l)
                    }
                }
                this.context.dataset.cid && (h.cid = this.context.dataset.cid), this.context.dataset.columnId && (h.lid = this.context.dataset.columnId);
                var m = (new Date).getTime(), n = {}, o = +new Date;
                this.dataset.request = f.jsonp({
                    url: this.dataset.url,
                    data: h,
                    callback: c,
                    timeout: 6e3
                }).done(function (b) {
                    n.adcost = +new Date - o, n.requestOk = !0;
                    var c = b && b.errorno;
                    if (b && 0 == b.errorno) {
                        var d = b.results[0], e = d.admark || {};
                        e.requestOk = !0;
                        var f = d.fields || [];
                        if (0 === Object.keys(e).length) a.dataset.retryTime < i ? (a.dataset.retryTime++, a.dataset.hasRequest = !1, a.requestVideoMark()) : (n.errorCode = 2102, a.reportVideoMarkError(n)); else {
                            var h = a.filterVideoBuyPoint(f);
                            a._handleData(h), e.fields = f, e.adtype = g.VIDEO_MARK, e.adcost = (new Date).getTime() - m, a.context.msg.broadcast("onAdOrderDataReady", e)
                        }
                    } else {
                        if (20005 == c) return;
                        a.dataset.retryTime < i ? (a.dataset.retryTime++, a.dataset.hasRequest = !1, a.requestVideoMark()) : (n.errorCode = 2102, a.reportVideoMarkError(n))
                    }
                }).fail(function (b) {
                    n.adcost = +new Date - o, n.requestOk = !1, a.dataset.retryTime < i ? (a.dataset.retryTime++, a.dataset.hasRequest = !1, a.requestVideoMark()) : (n.adcost >= 6e3 ? n.errorCode = 2101 : n.errorCode = 2102, a.reportVideoMarkError(n))
                })
            }
        }, h.filterVideoBuyPoint = function (a) {
            var b = [];
            try {
                b = a[0].videotag[0].ts.t[0]
            } catch (c) {
            }
            if (0 === b.length) return this._setVideoMarkForPage([]), a;
            var d = b.filter(function (a) {
                return 768 != a.cate
            });
            return this._setVideoMarkForPage(d), a[0].videotag[0].ts.t[0] = d, a
        }, h.reportVideoMarkError = function (a) {
            this.context.msg.broadcast("adPluginMsg", {
                name: "reportAd",
                adtype: g.VIDEO_MARK,
                reportData: {info: !0, data: {adcost: a.adcost, errorCode: a.errorCode, adtype: g.VIDEO_MARK}}
            }), Txplayer.util.localLog("GET_VIDEO_MARK_DATA_ERROR", a)
        }, h._handleData = function (a) {
            var b = [], c = {}, d = this;
            try {
                b = a[0].videotag[0].ts.t[0]
            } catch (g) {
                Txplayer.util.localLog("PARSE_VIDEO_MARK_DATA_ERROR", g)
            }
            f.each(b, function (a, b) {
                b = b || {};
                var d = b.cate;
                "undefined" !== f.type(b.cate) && (c[d] || (c[d] = []), c[d].push(b))
            }), f.each(c, function (a, b) {
                try {
                    d.context.msg.broadcast("getVideoMarkDataReady." + a, b)
                } catch (c) {
                    e.showError("getVideoMark.handleData.Error." + a, c)
                }
            })
        }, h._setVideoMarkForPage = function (a) {
            var b = a && a.length ? a : [];
            if ("function" == typeof window.__tenvideo_setPlayerAction) {
                var c = {cmd: 10, action: "list", data: b};
                window.__tenvideo_setPlayerAction(c)
            }
        }, a.exports = d
    }, 138: function (a, b) {
        function c() {
            throw new Error("setTimeout has not been defined")
        }

        function d() {
            throw new Error("clearTimeout has not been defined")
        }

        function e(a) {
            if (k === setTimeout) return setTimeout(a, 0);
            if ((k === c || !k) && setTimeout) return k = setTimeout, setTimeout(a, 0);
            try {
                return k(a, 0)
            } catch (b) {
                try {
                    return k.call(null, a, 0)
                } catch (b) {
                    return k.call(this, a, 0)
                }
            }
        }

        function f(a) {
            if (l === clearTimeout) return clearTimeout(a);
            if ((l === d || !l) && clearTimeout) return l = clearTimeout, clearTimeout(a);
            try {
                return l(a)
            } catch (b) {
                try {
                    return l.call(null, a)
                } catch (b) {
                    return l.call(this, a)
                }
            }
        }

        function g() {
            p && n && (p = !1, n.length ? o = n.concat(o) : q = -1, o.length && h())
        }

        function h() {
            if (!p) {
                var a = e(g);
                p = !0;
                for (var b = o.length; b;) {
                    for (n = o, o = []; ++q < b;) n && n[q].run();
                    q = -1, b = o.length
                }
                n = null, p = !1, f(a)
            }
        }

        function i(a, b) {
            this.fun = a, this.array = b
        }

        function j() {
        }

        var k, l, m = a.exports = {};
        !function () {
            try {
                k = "function" == typeof setTimeout ? setTimeout : c
            } catch (a) {
                k = c
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : d
            } catch (a) {
                l = d
            }
        }();
        var n, o = [], p = !1, q = -1;
        m.nextTick = function (a) {
            var b = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            o.push(new i(a, b)), 1 !== o.length || p || e(h)
        }, i.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = j, m.addListener = j, m.once = j, m.off = j, m.removeListener = j, m.removeAllListeners = j, m.emit = j, m.prependListener = j, m.prependOnceListener = j, m.listeners = function (a) {
            return []
        }, m.binding = function (a) {
            throw new Error("process.binding is not supported")
        }, m.cwd = function () {
            return "/"
        }, m.chdir = function (a) {
            throw new Error("process.chdir is not supported")
        }, m.umask = function () {
            return 0
        }
    }, 146: function (a, b) {
        var c = {};
        c[445] = c[444] = "\u7f51\u7edc\u8fde\u63a5\u4f3c\u4e4e\u51fa\u73b0\u95ee\u9898\uff0c", c[10001] = c[1] = c[2] = c[3] = c[4] = c[5] = c[30] = c[40] = c[41] = c[42] = c[50] = c[68] = "\u89c6\u9891\u83b7\u53d6\u9014\u4e2d\u51fa\u73b0\u95ee\u9898\uff0c", c.defaultMsg = c[51] = c[52] = c[61] = c[62] = c[63] = c[65] = c[66] = c[69] = c[71] = c[73] = c[74] = c[76] = c[77] = c[81] = c[82] = c[86] = c["80.10"] = c[94] = "\u8fd9\u4e2a\u89c6\u9891\u88ab\u5916\u661f\u4eba\u52ab\u8d70\uff0c\u6682\u65f6\u770b\u4e0d\u4e86\u4e86~", c[64] = c[100] = "\u5f88\u9057\u61be\uff0c\u5bf9\u6b64\u89c6\u9891\u7684\u8bbf\u95ee\u6682\u65f6\u53d7\u9650", c[80.3] = c["80.10"] = c[80.11] = c[84] = "\u6b64\u89c6\u9891\u5305\u542b\u654f\u611f\u4fe1\u606f\uff0c\u5df2\u88ab\u7ba1\u7406\u5458\u6349\u62ff~", c[80] = c[83] = "\u6682\u65f6\u6ca1\u6709\u83b7\u5f97\u8be5\u89c6\u9891\u7248\u6743\uff0c\u52aa\u529b\u4e3a\u60a8\u4e89\u53d6\u4e2d~", c[80.1] = "\u5f88\u62b1\u6b49\uff0c\u7531\u4e8e\u7248\u6743\u9650\u5236\uff0c\u60a8\u6240\u5728\u7684\u5730\u533a\u6682\u65f6\u65e0\u6cd5\u64ad\u653e\u8be5\u89c6\u9891", c[80.2] = "\u5f88\u62b1\u6b49\uff0c\u8be5\u89c6\u9891\u6682\u65e0\u64ad\u653e\u7248\u6743", c[80.7] = c[80.9] = "\u6682\u65f6\u6ca1\u6709\u83b7\u5f97\u8be5\u89c6\u9891\u7248\u6743\uff0c\u52aa\u529b\u4e3a\u60a8\u4e89\u53d6\u4e2d~", c[69.4] = c[80.14] = c[-11111] = "\u5e94\u7248\u6743\u65b9\u8981\u6c42\u672c\u7247\u91c7\u7528\u52a0\u5bc6\u683c\u5f0f\uff0c\u6b64\u6d4f\u89c8\u5668\u6682\u4e0d\u652f\u6301\u64ad\u653e", c.adblock = "\u64ad\u653e\u5185\u5bb9\u88abadblock\u8bef\u62e6\u622a\u4e86\uff0c\u8bf7\u60a8\u5173\u95ed\u63d2\u4ef6\uff0c\u6216\u4f7f\u7528\u4e0b\u5217\u65b9\u5f0f\u89c2\u770b\uff1a", c.getPlatformErrorCode = function (a, b, c) {
            var d = "-", e = "-", f = "-";
            return c = c || "00", d = Txplayer.util.os.mac ? "62" : Txplayer.util.os.windows ? "61" : "66", "getinfo" === a ? e = "101" : "getkey" === a ? e = "102" : "ad" === a ? e = "215" : "player" === a && (e = "200"), "neterror" === b ? f = "140" : "cgiInnerError" === b ? (f = "13", c && (c = "" + c), 2 === c.length && (c = "0" + c)) : "h5video" === b ? f = "111" : "aderror" === b && (f = "150"), Txplayer.util.localLog && Txplayer.util.localLog("VIDEO_ERROR", {
                platform: d,
                type: e,
                module: f,
                code: c
            }), d + e + "." + f + c
        }, a.exports = c
    }, 247: function (a, b) {
        function c(a) {
            this.options = e(a), this.resizeListened = !1, this.initDom()
        }

        function d(a) {
            return d.dialog ? (d.dialog.initDom(a), d.dialog) : (d.dialog = new c(a), d.dialog)
        }

        function e(a) {
            "[object Object]" != Object.prototype.toString.call(a) && (a = {});
            var b = {};
            for (var c in h) h.hasOwnProperty(c) && (b[c] = h[c]);
            for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
            return b
        }

        var f = Txplayer.util, g = Txplayer.$, h = {
                type: "trial_watch", context: null, showClose: !0, content: "", open: function () {
                }, close: function () {
                }
            },
            i = '<txp class="${overlayClass}" display-id="14"><txp class="txp_overlay_content"><txp class="txp_close ${closeClass}"><svg class="txp_icon txp_icon_close" version="1.1" viewBox="0 0 16 16" width="16" height="16"><use class="txp_svg_symbol txp_svg_close" xlink:href="#txp_svg_close"></use></svg></txp>${content}</txp></txp>';
        c.prototype.initDom = function (a) {
            a && (this.options = e(a));
            var b = this.options;
            this.$dom && (this.delEvent(), this.$dom.remove()), this.$target = b.target;
            var c = this.overlayClass = "txp_overlay_" + b.type, d = this.soverlayClass = c + "_s",
                h = {overlayClass: c, content: b.content || "", closeClass: b.showClose ? " " : "txp_none"};
            this.domStr = f.tpl(i, h), this.$dom = g(this.domStr), this.$dom.attr("id", "txp-" + b.type + "-dialog");
            var j = this.$target.width();
            j < 700 ? (this.$dom.addClass(d), this.$dom.find(".brspace").html("<br>")) : (this.$dom.removeClass(d), this.$dom.find(".brspace").text("\uff0c")), this.$target.append(this.$dom), this.$closeBtn = this.$dom.find(".txp_close"), this.initEvent()
        }, c.prototype.initEvent = function () {
            var a = this;
            this.options.showClose && this.$closeBtn.on("click", function () {
                a.close()
            }), this.options.context && !this.resizeListened && this.options.context.msg.on("resize", function (b) {
                a.resizeListened = !0;
                var c = b.width;
                b.height;
                c < 700 ? (a.$dom.addClass(a.soverlayClass), a.$dom.find(".brspace").html("<br>")) : (a.$dom.removeClass(a.soverlayClass), a.$dom.find(".brspace").text("\uff0c"))
            })
        }, c.prototype.delEvent = function () {
            this.options.showClose && this.$closeBtn.off("click")
        }, c.prototype.open = function () {
            this.$dom.removeClass("txp_none"), this.status = 1, this.options.open()
        }, c.prototype.close = function (a) {
            this.status = 0, this.$dom.addClass("txp_none"), a || this.options.close()
        }, c.prototype.destroy = function () {
            this.delEvent(), this.status && this.close();
            var a = this, b = setTimeout(function () {
                a.$dom.remove(), clearTimeout(b), b = null
            }, 1e3)
        }, d.dialog = null, a.exports = d
    }, 284: function (a, b, c) {
        function d(a) {
            f = Txplayer.$, this.dataset = {}, this.context = a, this.init()
        }

        var e = c(285), f = Txplayer.$, g = Txplayer.util, h = (c(146), c(69)), i = c(117);
        d.prototype = {
            init: function () {
                var a = this;
                return this.auth = new h({context: this.context}), this.getVideoMark = new i(this.context), this.dataset.hasVideoPlayed = !1, this.context.dataset.urlIndex = 0, ["vid", "cid", "columnId", "title", "nextVid", "tpid", "authext", "eduext", "authfrom", "isNeedPay", "autoplay", "skipPrelude", "connectionPlayTime", "playStartTime"].forEach(function (b) {
                    a.context.dataset[b] = a.context.config[b]
                }), "string" === f.type(this.context.config.volume) && /^\d+$/.test(this.context.config.volume) && (this.context.config.volume = parseInt(this.context.config.volume)), "number" !== f.type(this.context.config.volume) || this.context.config.volume > 100 || this.context.config.volume < 0 ? void g.showError("context.config.volume\u5fc5\u987b\u4e3a 0~100 ") : (this.context.dataset.volume = this.context.config.volume, this.context.config.duration && this.context.config.playEndTime && (this.context.dataset.playEndTime = parseInt(this.context.config.duration) - this.context.config.playEndTime, this.context.dataset.playEndTime < 0 && (this.context.dataset.playEndTime = null)), this.context.msg.broadcast("setVolume", {
                    volume: this.context.dataset.volume,
                    showTips: !1
                }), g.isSupportSafariHls(this.context.dataset.platform) && (this.context.dataset.useHls = !0), a.context.dataset.hasChromeHlsPlugin && (this.context.dataset.useChromeHls = !0, this.context.dataset.useHls = !0), this.context.getinfo = new e(this.context), this.addEventListener(), this.exportsModuleApis(), g.v4log("v4HdPlayerControl-init"), void (this.context.dataset.autoplay && this.playControl({
                    nextVid: this.context.dataset.nextVid,
                    vid: this.context.dataset.vid,
                    connectionPlayTime: this.context.dataset.connectionPlayTime,
                    playStartTime: this.context.dataset.playStartTime
                })))
            }, addEventListener: function () {
                this.dealAdMsgMoudle(), this.dealFilmMsgMoudle()
            }, exportsModuleApis: function () {
                this.initUserApis(), this.initPrivateMsg(), this.initDataApis()
            }
        }, g.extend(d.prototype, c(290)), g.extend(d.prototype, c(292)), g.extend(d.prototype, c(293)), g.extend(d.prototype, c(294)), g.extend(d.prototype, c(295)), g.extend(d.prototype, c(296)), g.extend(d.prototype, c(298)), g.extend(d.prototype, c(299)), Txplayer.register("v4HdPlayerControl", d)
    }, 285: function (a, b, c) {
        function d(a) {
            var b = function () {
            };
            return b.prototype = a, new b
        }

        function e(a) {
            f = Txplayer.$, h.call(this, a)
        }

        var f = Txplayer.$, g = Txplayer.util, h = c(286), i = "POST";
        e.prototype = d(h.prototype), e.prototype.constructor = e, e.prototype.requestGetinfo = function (a) {
            return this.context.dataset.requestNewGetinfoError || 1 == g.getUrlParam("debuggetinfo") ? this.requestOldGetinfo(a) : this.requestNewGetinfo(a)
        }, e.prototype.requestGetkey = function (a) {
            return this.context.dataset.requestNewGetinfoError ? this.requestOldGetVkey(a) : this.requestNewGetVkey(a)
        }, e.prototype.requestInsertAd = function (a) {
            return a && (a.method = i), this.requestPostCgi("insertAd", a).defer
        }, e.prototype.requestPauseAd = function (a) {
            return a && (a.method = i), this.requestPostCgi("pauseAd", a).defer
        }, e.prototype.requestEndingAd = function (a) {
            return a && (a.method = i), this.requestPostCgi("endingAd", a).defer
        }, e.prototype.requestPpbAd = function (a) {
            return a && (a.method = i), this.requestPostCgi("ppbAd", a).defer
        }, e.prototype.requestPdfAd = function (a) {
            return a && (a.method = i), this.requestPostCgi("pdfAd", a).defer
        }, e.prototype.requestIvbAd = function (a) {
            return a && (a.method = i), this.requestPostCgi("ivbAd", a).defer
        }, e.prototype.requestYaliuAd = function (a) {
            return a && (a.method = i), this.requestPostCgi("yaliuAd", a).defer
        }, e.prototype.requestPostCgi = function (a, b) {
            var c = {};
            c = "vinfoad" == a ? this.dataset.svDomain ? {
                buid: "vinfoad_sv",
                adparam: f.param(b.adparam),
                vinfoparam_sv: f.param(b.vinfoparam)
            } : {
                buid: "vinfoad",
                adparam: f.param(b.adparam),
                vinfoparam: f.param(b.vinfoparam)
            } : "vinfo" == a ? this.dataset.svDomain ? {
                buid: "onlyvinfo_sv",
                vinfoparam_sv: f.param(b.vinfoparam)
            } : {
                buid: "onlyvinfo",
                vinfoparam: f.param(b.vinfoparam)
            } : "getkey" == a ? this.dataset.svDomain ? {
                buid: "onlyvkey_sv",
                vkeyparam_sv: f.param(b.vkeyparam)
            } : {buid: "onlyvkey", vkeyparam: f.param(b.vkeyparam)} : {buid: "onlyad", adparam: f.param(b)};
            var d = b.domain ? b.domain : "vd.l.qq.com";
            1 == g.getUrlParam("debugvideomark") && (d = "testvd.l.qq.com");
            var e = f.Deferred(), h = +new Date, j = b.method || "POST";
            "GET" === j && (i = j), Txplayer.util.v4log("6072 beforeRequest", h);
            var k = f.ajax({
                method: j,
                type: j,
                url: "//" + d + "/proxyhttp",
                crossDomain: !0,
                xhrFields: {withCredentials: !0},
                timeout: 8e3,
                dataType: "POST" === j ? "json" : "jsonp",
                contentType: "POST" === j ? "text/plain" : "application/javascript",
                data: "POST" === j ? JSON.stringify(c) : c
            }).done(function (a) {
                var b = +new Date;
                if (Txplayer.util.v4log("6072 afterRequest", b), 0 == a.errCode) try {
                    if ("onlyad" == c.buid) {
                        var d = JSON.parse(a.ad);
                        d.requestOk = !0, d.adcost = b - h, e.resolve(d)
                    } else "vinfoad" == c.buid ? ("{}" == a.vinfo && e.reject(a, "dataerr"), e.resolve(JSON.parse(a.vinfo), a.ad)) : "vinfoad_sv" == c.buid ? ("{}" == a.vinfo && e.reject(a, "dataerr"), e.resolve(JSON.parse(a.vinfo), a.ad)) : "onlyvinfo" == c.buid ? ("{}" == a.vinfo && e.reject(a, "dataerr"), e.resolve(JSON.parse(a.vinfo))) : "onlyvinfo_sv" == c.buid ? ("{}" == a.vinfo && e.reject(a, "dataerr"), e.resolve(JSON.parse(a.vinfo))) : "onlyvkey" == c.buid ? ("{}" == a.vkey && e.reject(a, "dataerr"), e.resolve(JSON.parse(a.vkey))) : "onlyvkey_sv" == c.buid && ("{}" == a.vkey && e.reject(a, "dataerr"), e.resolve(JSON.parse(a.vkey)))
                } catch (f) {
                    e.reject(a, "dataerr")
                } else e.reject(a)
            }).fail(function (a, b) {
                a = a || {};
                var c = new Date;
                a.adcost = c - h, a.requestOk = !1, e.reject(a, b)
            });
            return {request: k, defer: e}
        }, e.prototype.requestRollVideoInfo = function (a) {
            var b = this;
            return this.requestRollInfo(a).done(function (a) {
                if (a.hasnlink) {
                    if (b.context.dataset.hasnlink = !0, ["LD", "ZC", "HT"].indexOf(b.context.dataset.currentAdType) > -1) return;
                    if (b.context.dataset.hasShowEndAdditionTip) return void (b.context.dataset.fvpint = 0);
                    b.context.msg.broadcast("showAdditionTip", {duration: a.vlinktd, type: "normal"})
                }
                a.nextpint ? b.context.dataset.fvpint = 1e3 * a.nextpint : b.context.dataset.fvpint = 0
            }).fail(function (a) {
                b.context.dataset.fvpint = 6e5
            })
        }, a.exports = e
    }, 286: function (a, b, c) {
        function d(a) {
            j = Txplayer.$;
            this.context = a, this.dataset = {}, this.context && this.context.dataset && this.context.dataset.businessId && (this.context.dataset.authext || this.context.dataset.authfrom) && ("11" == this.context.dataset.businessId || this.context.dataset.businessId >= 200) && (this.dataset.svDomain = !0);
            var b = "object" == typeof window.WebAssembly;
            if (l.browser.chrome && l.compareVersion(l.browser.chrome.version, "62.0") <= 0 && (b = !1), b && !h && (h = j.Deferred(), Txplayer.ckeyModule = {
                locateFile: function (a) {
                    return "//vm.gtimg.cn/tencentvideo/txp/js/" + a + "?v=" + Txplayer.dataset.ts
                },
                print: Txplayer.util.v4log.bind(Txplayer.util, "ckey9"),
                printErr: Txplayer.util.v4log.bind(Txplayer.util, "ckey9"),
                monitorRunDependencies: function (a) {
                    a <= 0 && setTimeout(function () {
                        f = g.cwrap("getckey", "string", ["number", "string", "string", "string", "string", "number"]), h.resolve()
                    }, 0)
                },
                onAbort: function (a) {
                    Txplayer.util.v4log("init ckey9xModule: ", a), h.reject()
                }
            }, !g)) try {
                g = c(289)
            } catch (d) {
                Txplayer.util.v4log("import ckey9xModule: ", d ? d.message : "error"), h.reject()
            }
        }

        function e(a) {
            var b;
            f ? (a.encryptVer = "9.1", b = f(a.platform, a.appVer, a.vids || a.vid, "", a.guid, a.tm)) : (a.encryptVer = "8.1", b = i(a.vids || a.vid, a.tm, a.appVer, a.guid, a.platform)), a.cKey = b || ""
        }

        var f, g, h, i = c(287), j = Txplayer.$, k = c(288), l = Txplayer.util,
            m = ["30", "40", "41", "42", "50", "64", "85", "445"], n = ["vd.l.qq.com", "vi.l.qq.com"],
            o = "pxy.video.qq.com", p = ["l.cm.com", "l.cm.com"], q = "testvd.l.qq.com", r = !1;
        d.prototype = {
            checkGetInfoData: function (a) {
                return a && "o" == a.s ? 1 : 0
            }, checkGetinfoRetCode: function (a) {
                var b, c, d = 0;
                return a && a.s ? "o" !== a.s ? (d = a.em || 50, c = a.exem) : a.vl && a.vl.vi && j.isArray(a.vl.vi) && 0 !== a.vl.cnt ? b = a.vl.vi[0] : d = 68 : d = 50, 0 !== d || 5 === b.fst && j.isPlainObject(b.ul) && j.isArray(b.ul.ui) && 0 !== b.ul.ui.length ? 0 === d && 2 !== b.st && (8 != b.st ? d = 62 : (d = 83, c = b.ch)) : d = 62, {
                    exVal: c,
                    iRetCode: d,
                    vi: b
                }
            }, getRequestUrl: function (a) {
                a = a || {};
                var b, c = {}, d = ["vv.video.qq.com", "av.video.qq.com", "bkvv.video.qq.com", "h5vv.video.qq.com"];
                return c.domain = d[a.retryTimes], "vv.video.qq.com" == c.domain && this.dataset.svDomain && (c.domain = "sv.video.qq.com"), "http:" === location.protocol ? c.protocol = "http:" : c.protocol = "https:", "geth5info" === a.type ? c.path = "/geth5info?" : "getkey" === a.type ? c.path = "/geth5key?" : "pollvinfo" === a.type && (c.path = "/pollvinfo?"), b = c.protocol + "//" + c.domain + c.path, a.disableCallback || (b += "callback=?&"), b
            }, getInfoConfig: function (a, b) {
                var c = "";
                try {
                    c = location.href.replace(location.search, ""), l.isInIframe() && (c = l.removeUrlParams(top.location.href || ""))
                } catch (d) {
                }
                var f = window != top ? l.removeUrlParams(document.referrer || "") : document.location.host;
                c = l.getUrlParam("debugehost") || c;
                var g = {
                    charge: 0,
                    defaultfmt: "auto",
                    otype: "vinfoad" == a ? "ojson" : "json",
                    guid: this.context.dataset.guid,
                    flowid: this.context.dataset.flowid,
                    platform: this.context.dataset.platform,
                    sdtfrom: this.context.dataset.sdtfrom,
                    defnpayver: 1,
                    appVer: Txplayer.dataset.ver,
                    host: location.host,
                    ehost: c,
                    refer: f,
                    sphttps: "https:" === location.protocol ? 1 : 0,
                    tm: b.tm ? b.tm : l.getTimeStampStr(),
                    spwm: 4
                };
                g.logintoken = this.context.dataset.txplayerAuth.getInfo(!0), "nintendo" === this.context.config.playerType && (g.clip = 4), this.context.dataset.unid && (g.unid = this.context.dataset.unid), this.context.dataset.authfrom && (g.auth_from = this.context.dataset.authfrom), this.context.dataset.authext && (g.auth_ext = this.context.dataset.authext);
                var h = j.extend(g, b);
                if (this.context.config && "function" === j.type(this.context.config.getUserType)) try {
                    var i = this.context.config.getUserType();
                    2 != i && 10 != i && +l.getData("gp-cacdc") >= 4 && (h.defn = "sd")
                } catch (d) {
                }
                return b.show1080p || (h.defnpayver = 0), "auto" != h.defn && h.defn ? h.defsrc = 2 : h.defsrc = 1, e(h), this.context.dataset.useP2P && (h.fp2p = 1), this.context.dataset.IsSupportVideoIn && (h.spadseg = 3), this.context.dataset.adExtras && (h.adsid = this.context.dataset.adExtras.adsid || "", h.adpinfo = this.context.dataset.adExtras.adpinfo || ""), h
            }, getinfoOnError: function (a, b) {
                a = a || {}, "444" == a.code ? a.timeout ? a.errCode = Txplayer.v4errcode.getPlatformErrorCode("getinfo", "neterror", "03") : a.dataerr ? a.errCode = Txplayer.v4errcode.getPlatformErrorCode("getinfo", "neterror", "04") : a.errCode = Txplayer.v4errcode.getPlatformErrorCode("getinfo", "neterror", "01") : a.code ? a.errCode = Txplayer.v4errcode.getPlatformErrorCode("getinfo", "cgiInnerError", a.code) : (a.code = "444", a.errCode = Txplayer.v4errcode.getPlatformErrorCode("getinfo", "neterror", "04")), a.errCode && a.exem && (a.errCode += "." + a.exem), b.reject(a)
            }, getinfoReport: function (a, b, c, d) {
                var e = +new Date, f = {endTime: e, startTime: c, getinfoURL: b, costTime: e - c};
                a && "object" === j.type(a) ? (f.err = "error", f = j.extend(f, a)) : a && "string" === j.type(a) && (f.err = a, "timeout" == a && (f.code = 600)), "string" === j.type(a) ? "timeout" == a ? f.errCode = Txplayer.v4errcode.getPlatformErrorCode("getinfo", "neterror", "03") : f.errCode = Txplayer.v4errcode.getPlatformErrorCode("getinfo", "neterror", "01") : a && a.code && (f.errCode = Txplayer.v4errcode.getPlatformErrorCode("getinfo", "cgiInnerError", a.code)), d && (f.isLastRetry = 1), f.errCode && f.exem && (f.errCode += "." + f.exem), this.context.msg.broadcast("getinfoFinish", f)
            }, dealGetinfoData: function (a, b, c) {
                var d, e, f, g = this, h = g.checkGetInfoData(a);
                if (1 === h) {
                    if (d = g.checkGetinfoRetCode(a), 83 != d.iRetCode && 0 !== d.iRetCode) return Txplayer.util.v4log("getinfo\u8fd4\u56de\u9519\u8bef\u7801\u9519\u8bef ", {iRetCode: d.iRetCode}), void g.getinfoOnError(a, b);
                    a.iRetCode = d.iRetCode, g.dataset.getinfoData = a;
                    try {
                        g.context.dataset.reportClip = d.vi.fc || d.vi.cl.fc, g.context.dataset.reportStatus = d.vi.vst, g.context.dataset.reportType = d.vi.type, g.context.dataset.reportTestId = a.tstid, g.context.dataset.reportUsrIP = a.ip, g.context.dataset.cdnID = d.vi.ul.ui[0].vt, g.context.dataset.originalHwRate = (d.vi.vh / d.vi.vw).toFixed(3)
                    } catch (i) {
                    }
                    return e = k.getPcVideoMp4Url(a, g.context), "array" === j.type(e) && e.length && (f = 1 == a.dltype ? e[0].urlArray[0].url + "&vkey=" + d.vi.fvkey : e[0].urlArray && e[0].urlArray[0] && e[0].urlArray[0].url), g.context.dataset.dltype = a.dltype, 8 === g.context.dataset.dltype && e && e[0] && !e[0].m3u8 && (g.context.dataset.dltype = 3), b.resolve(f, e, k.getDefinitionListFromData(a), a, c ? c : {}), g.context.msg.broadcast("reportGetinfo", {
                        filename: d.vi.fn,
                        cdnIp: Txplayer.util.getHostNameByUrl(d.vi.ul.ui[0].url),
                        cdnId: d.vi.ul.ui[0].vt,
                        vkey: 1 == a.dltype ? d.vi.fvkey : ""
                    }), null
                }
                return {exem: a.exem, code: a.em, curTime: a.curTime}
            }, requestBefore: function (a) {
                var b = j.Deferred(), c = this, d = [b].concat(Array.prototype.slice.call(arguments, 1));
                return h ? h.done(function () {
                    a.apply(c, d)
                }).fail(function () {
                    f = null, a.apply(c, d)
                }) : a.apply(c, d), b
            }, requestNewGetinfo: function (a) {
                return this.requestBefore(this.requestNewGetinfoImpl, a)
            }, requestNewGetinfoImpl: function (a, b) {
                function c(p) {
                    p && p.tm && (b.tm = p.tm, g = f.getInfoConfig("vinfoad", b), 3 == s && (s += 1)), p && p.ckeyRetry && (delete b.tm, g = f.getInfoConfig("vinfoad", b)), p && p.domainRetry && h++;
                    var v = p && p.domain || n[h % 2];
                    1 == l.getUrlParam("debugvideomark") && (v = q);
                    var w = p && p.method || "POST";
                    r && (w = "GET");
                    var x = +new Date, y = "//" + v + "/proxyhttp/" + d + "&" + j.param(g), z = k >= s;
                    (k > 0 || b.onlyGetinfo && !b.fhdswitch) && (g.sphls = 1, g.spgzip = "", g.dlver = ""), k++, f.context.msg.broadcast("getinfoStart", {
                        getinfoURL: y,
                        time: +new Date
                    }), v === o && (e.finaltry = 1);
                    var A = +new Date;
                    Txplayer.util.v4log("6072 before.defer: ", A), Txplayer.util.v4log("requestGetinfo", g), Txplayer.util.v4log("requestAd", e);
                    var B = f.requestPostCgi(d, {vinfoparam: g, adparam: e, domain: v, method: w});
                    i = B.request;
                    var C = B.defer;
                    C.done(function (b, d) {
                        var e = +new Date;
                        Txplayer.util.v4log("6072 _defer.done: ", e, b, d);
                        var g = {};
                        try {
                            g = JSON.parse(d)
                        } catch (h) {
                        }
                        g.orginStr = d, g.adcost = e - A, g.retryTimes = k, g.domain = v, Txplayer.util.v4log("6072 adcost: ", g.adcost), g.requestOk = !0;
                        var i = f.dealGetinfoData(b, a, g);
                        f.getinfoReport(i, y, x, z), i && (i.code ? z || j.inArray(i.code + "", m) == -1 ? f.getinfoOnError(i, a) : 85 == i.code ? c(i.exem == -3 && i.curTime ? {tm: i.curTime} : {ckeyRetry: !0}) : c() : z ? f.getinfoOnError({}, a) : c({domainRetry: !0}))
                    }).fail(function (b, d) {
                        var e = +new Date;
                        b.adcost = e - A, b.requestOk = !1, u.push(e - A), d && "abort" === d || (f.getinfoReport(d, y, x, z), z ? !t && k >= s && u.every(function (a) {
                            return a <= 500
                        }) ? (c({domain: o}), t = !0) : r ? f.getinfoOnError({
                            code: 444,
                            timeout: "timeout" === d,
                            dataerr: "dataerr" === d,
                            costTime: +new Date - x
                        }, a) : (c({domain: n[0], method: "GET"}), r = !0) : c({domainRetry: !0}))
                    })
                }

                var d, e, f = this, g = this.getInfoConfig("vinfoad", b), h = 0;
                b.onlyGetinfo ? (d = "vinfo", e = "") : (d = "vinfoad", e = f.context.adApi && f.context.adApi.getAdRequestParam() || {});
                var i, k = 0, s = 3, t = !1, u = [];
                return f.context.config.usePreviewDomain && (n = p), c(), this.context.msg.off("vidChange.requestGetinfo").on("vidChange.requestGetinfo", function () {
                    i && i.abort && i.abort()
                }), this.context.msg.off("seekStart.requestGetinfo").on("seekStart.requestGetinfo", function () {
                    i && i.abort && i.abort()
                }), this.context.msg.off("userStopVideo.requestGetinfo").on("userStopVideo.requestGetinfo", function () {
                    i && i.abort && i.abort()
                }), a
            }, requestOldGetinfo: function (a) {
                return this.requestBefore(this.requestOldGetinfoImpl, a)
            }, requestOldGetinfoImpl: function (a, b) {
                function c(h) {
                    var i = h && h.cgi ? h.cgi : f.getRequestUrl({type: "geth5info", retryTimes: g}), k = +new Date;
                    h && h.tm && (b.tm = h.tm, e = f.getInfoConfig("getinfo", b));
                    var l = i + "&" + j.param(e), n = g >= 3;
                    g++, f.context.msg.broadcast("getinfoStart", {getinfoURL: l, time: k}), d = j.jsonp({
                        url: i,
                        data: e,
                        timeout: 6e3,
                        callback: Txplayer.util.getJsonpCallbackName("getinfo")
                    }).done(function (b) {
                        var d = f.dealGetinfoData(b, a);
                        f.getinfoReport(d, l, k, n), d && (d.code ? n || j.inArray(d.code + "", m) == -1 ? f.getinfoOnError(d, a) : c(85 == d.code && d.exem == -3 && d.curTime ? {
                            tm: d.curTime,
                            cgi: i
                        } : {cgi: i}) : n ? f.getinfoOnError({}, a) : c())
                    }).fail(function (b, d) {
                        d && "abort" === d || (f.getinfoReport(d, l, k, n), n ? f.getinfoOnError({
                            code: 444,
                            timeout: "timeout" === d,
                            costTime: +new Date - k
                        }, a) : c())
                    })
                }

                var d, e = this.getInfoConfig("getinfo", b), f = this, g = 0;
                return c(), this.context.msg.off("vidChange.requestGetinfo").on("vidChange.requestGetinfo", function () {
                    d && d.abort && d.abort()
                }), this.context.msg.off("seekStart.requestGetinfo").on("seekStart.requestGetinfo", function () {
                    d && d.abort && d.abort()
                }), this.context.msg.off("userStopVideo.requestGetinfo").on("userStopVideo.requestGetinfo", function () {
                    d && d.abort && d.abort()
                }), a
            }, getKeyConfig: function (a, b, c) {
                function d(a) {
                    for (var b = 0, c = a.length; b < c; b++) if (1 == a[b].sl) return a[b].id;
                    return -1
                }

                var f = "";
                try {
                    f = location.href.replace(location.search, ""), l.isInIframe() && (f = top.location.href.replace(top.location.search, ""))
                } catch (g) {
                }
                var h = l.getUrlParam("debugehost") || l.removeUrlParams(f), i = {
                    otype: b ? "ojson" : "json",
                    vid: a.vid,
                    format: d(this.dataset.getinfoData.fl.fi),
                    filename: a.newFileName,
                    platform: this.context.dataset.platform,
                    appVer: Txplayer.dataset.ver,
                    vt: a.vt,
                    sdtfrom: this.context.dataset.sdtfrom,
                    guid: this.context.dataset.guid,
                    flowid: this.context.dataset.flowid,
                    charge: a.isNeedPay ? 1 : 0,
                    linkver: 2,
                    lnk: this.context.dataset.getinfoJSON.vl.vi[0].lnk,
                    tm: c ? c : l.getTimeStampStr(),
                    refer: f,
                    ehost: h
                };
                return i.logintoken = this.context.dataset.txplayerAuth.getInfo(!0), this.context.dataset.unid && (i.unid = this.context.dataset.unid), this.context.dataset.authfrom && (i.auth_from = this.context.dataset.authfrom), this.context.dataset.authext && (i.auth_ext = this.context.dataset.authext), e(i), i
            }, getKeyErrorCode: function (a) {
                a = a || {}, !a.err && a.em && (a.err = "error"), !a.code && a.em && (a.code = a.em);
                var b = "";
                return "error" === a ? b = Txplayer.v4errcode.getPlatformErrorCode("getkey", "neterror", "01") : "timeout" === a ? b = Txplayer.v4errcode.getPlatformErrorCode("getkey", "neterror", "03") : "dataerr" === a ? b = Txplayer.v4errcode.getPlatformErrorCode("getkey", "neterror", "04") : a.errCode ? b = a.errCode : "timeout" === a.err ? b = Txplayer.v4errcode.getPlatformErrorCode("getkey", "neterror", "03") : "no key" !== a.err || a.hasOwnProperty("code") ? a.err && !a.hasOwnProperty("code") ? b = Txplayer.v4errcode.getPlatformErrorCode("getkey", "neterror", "01") : a.err && a.hasOwnProperty("code") && (b = Txplayer.v4errcode.getPlatformErrorCode("getkey", "cgiInnerError", a.code + "")) : b = Txplayer.v4errcode.getPlatformErrorCode("getkey", "neterror", "04"), b && a.exem && (b += "." + a.exem), b
            }, getkeyReport: function (a, b, c, d) {
                var e = this, f = +new Date,
                    g = {endTime: f, startTime: b, getkeyURL: c, costTime: f - b, isLastRetry: d};
                a && "object" === j.type(a) ? (g.err = "error", g = j.extend(g, a), a.em && (g.code = a.em)) : a && "string" === j.type(a) && (g.err = a, "timeout" == a && (g.code = 600)), g.errCode = e.getKeyErrorCode(a), e.context.msg.broadcast("getkeyFinish", g)
            }, requestOldGetVkey: function (a) {
                return this.requestBefore(this.requestOldGetVkeyImpl, a)
            }, requestOldGetVkeyImpl: function (a, b) {
                var c, d = this, e = 0, f = this.getRequestUrl({type: "getkey", retryTimes: e}),
                    g = this.getKeyConfig(b, !1), h = function (b) {
                        if (b = b || {}, b.code && j.inArray(b.code + "", m) == -1) return void a.reject(b);
                        var i = e > d.context.config.keyRetryTimes;
                        if (i) return b.code || (b.code = 445), void a.reject(b);
                        e++;
                        var k = +new Date;
                        d.context.msg.broadcast("getkeyStart"), c = j.jsonp({
                            url: b.url || f,
                            data: g,
                            timeout: 6e3,
                            callback: Txplayer.util.getJsonpCallbackName("getkey")
                        }).done(function (c) {
                            c && c.key ? (a.resolve(c.key), d.getkeyReport(null, k, f + "&" + j.param(g), i)) : (!c.code && b.em && (c.code = b.em), c.key || (c.err = "no key"), d.getkeyReport(c, k, f + "&" + j.param(g), i), c.errCode = d.getKeyErrorCode(c), h(c))
                        }).fail(function (a, b) {
                            b && "abort" === b || (d.getkeyReport(b, k, f + "&" + j.param(g), i), h({
                                code: 445,
                                errCode: d.getKeyErrorCode(b),
                                url: d.getRequestUrl({type: "getkey", retryTimes: e}),
                                timeout: "timeout" === b
                            }))
                        })
                    };
                return h(), this.context.msg.off("vidChange.requestOldGetVkey").on("vidChange.requestOldGetVkey", function () {
                    c && c.abort && c.abort()
                }), this.context.msg.off("userStopVideo.requestOldGetVkey").on("userStopVideo.requestOldGetVkey", function () {
                    c && c.abort && c.abort()
                }), a
            }, requestNewGetVkey: function (a) {
                return this.requestBefore(this.requestNewGetVkeyImpl, a)
            }, requestNewGetVkeyImpl: function (a, b) {
                var c, d = this, e = 0, f = this.getKeyConfig(b, !0), g = 0, h = d.context.config.keyRetryTimes, i = !1,
                    k = [], l = function (p) {
                        if (p = p || {}, p.code && j.inArray(p.code + "", m) == -1) return void a.reject(p);
                        var q = e > h;
                        if (q && !p.lastDomain) return p.code || (p.code = 445), void a.reject(p);
                        p && p.domainRetry && g++, p.ckeyRetry && (f = d.getKeyConfig(b, !0, p.curTime));
                        var s = p && p.domain || n[g % 2], t = p && p.method || "POST";
                        r && (t = "GET"), e++;
                        var u = +new Date, v = "//" + s + "/proxyhttp/getkey&" + j.param(f);
                        d.context.msg.broadcast("getkeyStart");
                        var w = +new Date, x = d.requestPostCgi("getkey", {vkeyparam: f, domain: s, method: t});
                        c = x.request;
                        var y = x.defer;
                        y.done(function (b) {
                            b && b.key ? (a.resolve(b.key), d.getkeyReport(null, u, v, q)) : (!b.code && b.em && (b.code = b.em), 85 == b.code && (b.hasOwnProperty("exem") && (b.exem = b.exem), b.exem == -3 && (h = 3 == h ? 4 : h), b.curTime && (b.curTime = b.curTime), b.ckeyRetry = !0), b.err || (b.err = "no key"), d.getkeyReport(b, u, v, q), b.errCode = d.getKeyErrorCode(b), b.code || "no key" != b.err || (b.domainRetry = !0), Txplayer.util.v4log("\u91cd\u8bd5getkey\uff0c\u540e\u53f0\u6709\u8fd4\u56de\u6570\u636e\uff1a" + JSON.stringify(b)), l(b))
                        }).fail(function (a, b) {
                            return k.push(+new Date - w), b && "abort" === b ? void Txplayer.util.v4log("\u91cd\u8bd5getkey\uff0c\u6240\u6709\u8bf7\u6c42\u90fd\u5931\u8d25\u4e86\uff0cabort\uff0cerr: " + b) : void (!i && e > h && k.every(function (a) {
                                return a <= 500
                            }) ? (Txplayer.util.v4log("\u91cd\u8bd5getkey\uff0c\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u5931\u8d25\u4e86,500ms\u4ee5\u5185, err: " + b), l({domain: o}), i = !0) : r ? (Txplayer.util.v4log("\u91cd\u8bd5getkey\uff0c\u5176\u4ed6\u573a\u666f, err: " + b), d.getkeyReport(b, u, v, q), l({
                                code: 445,
                                errCode: d.getKeyErrorCode(b || "error"),
                                timeout: "timeout" === b,
                                domainRetry: !0
                            })) : (Txplayer.util.v4log("\u91cd\u8bd5getkey\uff0c\u6ca1\u6709\u7528\u8fc7GET\u8bf7\u6c42\uff0c\u5207\u6362\u5230GET\u8bf7\u6c42, err: " + b), l({
                                domain: n[0],
                                lastDomain: !0,
                                method: "GET"
                            }), r = !0))
                        })
                    };
                return l(), this.context.msg.off("vidChange.requestOldGetVkey").on("vidChange.requestOldGetVkey", function () {
                    c && c.abort && c.abort()
                }), this.context.msg.off("userStopVideo.requestOldGetVkey").on("userStopVideo.requestOldGetVkey", function () {
                    c && c.abort && c.abort()
                }), a
            }, requestRollInfo: function (a) {
                return this.requestBefore(this.requestRollInfoImpl, a)
            }, requestRollInfoImpl: function (a, b) {
                function c(c) {
                    var g = c && c.cgi ? c.cgi : f.getRequestUrl({type: "pollvinfo", retryTimes: 0});
                    c && c.tm && (b.tm = c.tm, e = f.getInfoConfig("getinfo", b)), e.jsonp = 1, e.vid = f.context.dataset.vid, d = j.jsonp({
                        url: g,
                        data: e,
                        timeout: 6e3,
                        callback: Txplayer.util.getJsonpCallbackName("pollvinfo")
                    }).done(function (b) {
                        a.resolve(b)
                    }).fail(function (b, c) {
                        a.reject(c)
                    })
                }

                var d, e = this.getInfoConfig("getinfo", b), f = this;
                return c(), this.context.msg.off("vidChange.requestRollInfo").on("vidChange.requestRollInfo", function () {
                    d && d.abort && d.abort()
                }), this.context.msg.off("seekStart.requestRollInfo").on("seekStart.requestRollInfo", function () {
                    d && d.abort && d.abort()
                }), this.context.msg.off("userStopVideo.requestRollInfo").on("userStopVideo.requestRollInfo", function () {
                    d && d.abort && d.abort()
                }), a
            }
        }, a.exports = d
    }, 287: function (a, b) {
        var c = function () {
            function a(a) {
                return b.call(this, ia + 2097 + 8214 - 15822, a)
            }

            function b(c) {
                for (var d = "", e = -8432 + ka + 12979; e < "\u090a".length; e++) d += String.fromCharCode(la + ma + na - 50 ^ "\u090a".charCodeAt(e));
                for (var f = "", g = 0; g < "\u07ad".length; g++) f += String.fromCharCode(I + 3326 + 4681 ^ "\u07ad".charCodeAt(g));
                for (var k = "", l = 0; l < "\u04a0".length; l++) k += String.fromCharCode(oa + Q + m + 8449 ^ "\u04a0".charCodeAt(l));
                for (var n = "", p = 0; p < "\u0d07".length; p++) n += String.fromCharCode(G + -5316 + 8904 ^ "\u0d07".charCodeAt(p));
                for (var r = "", A = pa + 3628 + qa - 16465; A < "\u05ff".length; A++) r += String.fromCharCode(146 + na + -1434 - 5788 ^ "\u05ff".charCodeAt(A));
                for (var C = "", D = -1434 + ra + 11308; D < "\u08a8".length; D++) C += String.fromCharCode(2260 ^ "\u08a8".charCodeAt(D));
                for (var N = "", O = 0; O < "\u0b36".length; O++) N += String.fromCharCode(2890 ^ "\u0b36".charCodeAt(O));
                for (var P = "", T = sa + 6246; T < "\u01a8\u01a2\u01f6\u01a6\u01f6\u01a7\u01f5\u01f1\u01a7\u01a4".length; T++) P += String.fromCharCode(-5316 + da + ta + 358 ^ "\u01a8\u01a2\u01f6\u01a6\u01f6\u01a7\u01f5\u01f1\u01a7\u01a4".charCodeAt(T));
                for (var U = "", V = ua + 146 + 4448 - 6833; V < "\u0a78".length; V++) U += String.fromCharCode(2564 ^ "\u0a78".charCodeAt(V));
                for (var W = "", ia = va + 4448 + 4019; ia < "\u084c".length; ia++) W += String.fromCharCode(2096 ^ "\u084c".charCodeAt(ia));
                for (var gb = "", hb = wa + -3155 + -9555 + 13665; hb < "\u0676".length; hb++) gb += String.fromCharCode(E + -3155 + 6442 ^ "\u0676".charCodeAt(hb));
                for (var ib = "", jb = xa + 2579; jb < "\u0a88".length; jb++) ib += String.fromCharCode(K + 9851 - 9876 ^ "\u0a88".charCodeAt(jb));
                for (var kb = "", lb = 0; lb < "\u0227".length; lb++) kb += String.fromCharCode(da + 4223 ^ "\u0227".charCodeAt(lb));
                for (var mb = "", nb = 0; nb < "\u043e".length; nb++) mb += String.fromCharCode(ya + E + 9851 - 4347 ^ "\u043e".charCodeAt(nb));
                for (var ob = "", pb = 0; pb < "\u07e1".length; pb++) ob += String.fromCharCode(za + S + fa - 4523 ^ "\u07e1".charCodeAt(pb));
                for (var qb = "", rb = -215 + L + F + 6127; rb < "\u0305".length; rb++) qb += String.fromCharCode(889 ^ "\u0305".charCodeAt(rb));
                for (var sb = "", tb = Aa + -6842 + 7201; tb < "".length; tb++) sb += String.fromCharCode(z + Ba + 3363 ^ "".charCodeAt(tb));
                for (var ub = "", vb = ba + Ca + Da - 4446; vb < "".length; vb++) ub += String.fromCharCode(aa + y + 4989 ^ "".charCodeAt(vb));
                for (var wb = "", xb = -7878 + $ + y + 16828; xb < "".length; xb++) wb += String.fromCharCode(3628 + Ea + 2321 ^ "".charCodeAt(xb));
                for (var yb = "", zb = Fa + Ga + Ha - 10082; zb < "\xb4\xb9\xb2\xaf".length; zb++) yb += String.fromCharCode(Ia + 5817 - 5364 ^ "\xb4\xb9\xb2\xaf".charCodeAt(zb));
                for (var Ab = "", Bb = Z + u + -1665 - 4436; Bb < "\u06d8\u06d5\u06de\u06c3".length; Bb++) Ab += String.fromCharCode(Ja + 146 + -4109 + 529 ^ "\u06d8\u06d5\u06de\u06c3".charCodeAt(Bb));
                for (var Cb = "", Db = Ka + 9456 - 19159; Db < "\u0668\u0669\u0668\u0663".length; Db++) Cb += String.fromCharCode(1542 ^ "\u0668\u0669\u0668\u0663".charCodeAt(Db));
                for (var Eb = "", Fb = ea + ha + X + 3846; Fb < "\xc1\xcc".length; Fb++) Eb += String.fromCharCode(168 ^ "\xc1\xcc".charCodeAt(Fb));
                for (var Gb = "", Hb = ga + 7940; Hb < "\u06c6\u06cb\u06d4".length; Hb++) Gb += String.fromCharCode(1698 ^ "\u06c6\u06cb\u06d4".charCodeAt(Hb));
                for (var Ib = "", Jb = 0, Kb = "\u0b36\u0b0b\u0b51\u0b5e\u0b08\u0b0d\u0b0d\u0b51\u0b59\u0b36"; Jb < Kb.length; Jb++) Ib += String.fromCharCode(9964 + La + -1265 - 7812 ^ Kb.charCodeAt(Jb));
                for (var Lb = "", Mb = 0; Mb < "\u05d9\u05c7\u05c0\u05ca\u05c1\u05d9".length; Mb++) Lb += String.fromCharCode(1454 ^ "\u05d9\u05c7\u05c0\u05ca\u05c1\u05d9".charCodeAt(Mb));
                switch (c) {
                    case 0:
                        var Nb = [];
                        window[Lb] === window ? Nb.push(o + M + Ma - 12906) : Nb.push(Na + 5538);
                        try {
                            var Ob = Ib + Math.floor(1e7 * Math.random()), Pb = document.createElement(Gb);
                            Pb.setAttribute(Eb, Ob), Pb.style.La = Cb, (document.body || document.getElementsByTagName(Ab)[0]).appendChild(Pb), document.getElementById(Ob) ? Nb.push(0) : Nb.push(1), (document.body || document.getElementsByTagName(yb)[Oa + h + Pa - 8151]).removeChild(Pb)
                        } catch (Qb) {
                            Nb.push(-1361 + Qa + 1879)
                        }
                        return Nb.join(wb);
                    case 1:
                        var Rb = arguments[x + 5347],
                            Sb = new fb.a.f.init([1332468387, -1641050960, Ra + R + 2136881301, -1629555948], ya + 2689),
                            Tb = new fb.a.f.init([Sa + w + 22041281, Y + Ta + 1457907509, 776125350, -(-7878 + _ + -5975 + 1942018983)], Ua + 4647);
                        return fb.Ga.$(Rb, Sb, {ra: Tb, ba: fb.ba.la, qa: fb.na.ma}).xa.toString().toUpperCase();
                    case Va + Wa - 5967:
                        return (_b = arguments[Xa + -1708 + Ya + 5932]) ? _b.length > 8011 + H - 16329 ? _b.substr(6968 + Za - 7677, 48) : _b : ub;
                    case 3:
                        var Ub = window.document.URL, Vb = window.navigator.userAgent.toLowerCase(), Wb = sb;
                        window.document.referrer.length > -11220 + $a + 18473 && (Wb = window.document.referrer);
                        try {
                            Wb.length == _a - 8815 && opener.location.href.length > 0 && (Wb = opener.location.href)
                        } catch (Xb) {
                        }
                        var Yb = window.navigator.appCodeName, Zb = window.navigator.appName,
                            $b = window.navigator.platform;
                        return Ub = a(Ub), Wb = a(Wb), Ub + qb + (Vb = a(Vb)) + ob + Wb + mb + Yb + kb + Zb + ib + $b;
                    case ab + J + ca - 11490:
                        var _b = arguments[1], ac = bb + -1434 - 689;
                        if (_b.length == s + ca + cb - 13491) return ac;
                        for (i = db + 1003 + 4059 - 782; i < _b.length; i++) char = _b.charCodeAt(i), ac = (ac << 8276 + j - 10445) - ac + char, ac &= ac;
                        return ac;
                    case eb + 8945:
                        var bc = gb + arguments[B + i + 8787] + W + arguments[2] + U + P + N + arguments[3] + C + arguments[t + z + q - 3244] + r + arguments[y + Na + -1658 + 11280] + n + function () {
                            return b.call(this, ja - 5974)
                        }() + k + function () {
                            return b.call(this, 0)
                        }() + f;
                        return function (a) {
                            return b.call(this, 1, a)
                        }(d + (ac = function (a) {
                            return b.call(this, v + 1735, a)
                        }(bc)) + bc)
                }
            }

            var c, d, e, f, g, h = 1836, i = -8290, j = 2174, k = -957, l = -2285, m = 3198, n = -9220, o = 5906,
                p = 8126, q = -3571, r = -213, s = 2249, t = -693, u = -327, v = -1731, w = 1765, x = -5346, y = -4080,
                z = 7512, A = 4359, B = -496, C = -4191, D = 2007, E = -1741, F = 700, G = -137, H = 8366, I = -6006,
                J = 9095, K = 2829, L = -6612, M = 2907, N = -450, O = -4002, P = 9852, Q = -3683, R = 8972, S = 5031,
                T = -1124, U = 847, V = -2667, W = -1169, X = 3738, Y = 4510, Z = 6428, $ = -4870, _ = -5763, aa = -132,
                ba = 9425, ca = 9587, da = -3620, ea = -955, fa = 9508, ga = -7940, ha = -6629, ia = 5513, ja = 5977,
                ka = -4547, la = -3840, ma = -2175, na = 8487, oa = -6720, pa = 6747, qa = 6090, ra = -9874, sa = -6246,
                ta = 9031, ua = 2239, va = -8467, wa = -955, xa = -2579, ya = -2673, za = -8067, Aa = -359, Ba = -7307,
                Ca = 291, Da = -5270, Ea = -3336, Fa = -1623, Ga = 7936, Ha = 3769, Ia = -239, Ja = 5156, Ka = 9703,
                La = 2034, Ma = 4093, Na = -5537, Oa = -657, Pa = 6972, Qa = -517, Ra = 5772, Sa = -3763, Ta = 8444,
                Ua = -4631, Va = -1401, Wa = 7370, Xa = -1755, Ya = -2468, Za = 709, $a = -7253, _a = 8815, ab = -7188,
                bb = 2123, cb = 1655, db = -4280, eb = -8940, fb = fb || function (a, b) {
                    var c = {}, d = c.a = {}, e = function () {
                    }, f = d.b = {
                        c: function (a) {
                            for (var b = "", c = 0; c < "\u0945\u0942\u0945\u0958".length; c++) b += String.fromCharCode(h + 9807 - 9295 ^ "\u0945\u0942\u0945\u0958".charCodeAt(c));
                            e.prototype = this;
                            var d = new e;
                            return a && d.d(a), d.hasOwnProperty(b) || (d.init = function () {
                                d.$super.init.apply(this, arguments)
                            }), d.init.prototype = d, d.$super = this, d
                        }, create: function () {
                            var a = this.c();
                            return a.init.apply(a, arguments), a
                        }, init: function () {
                        }, d: function (a) {
                            for (var b = "", c = 0; c < "\u037e\u0365\u0359\u037e\u0378\u0363\u0364\u036d".length; c++) b += String.fromCharCode(778 ^ "\u037e\u0365\u0359\u037e\u0378\u0363\u0364\u036d".charCodeAt(c));
                            for (var d in a) a.hasOwnProperty(d) && (this[d] = a[d]);
                            a.hasOwnProperty(b) && (this.toString = a.toString)
                        }, e: function () {
                            return this.init.prototype.c(this)
                        }
                    }, g = d.f = f.c({
                        init: function (a, b) {
                            a = this.g = a || [], this.h = void 0 != b ? b : (-2630 + i + 10924) * a.length
                        }, toString: function (a) {
                            return (a || q).i(this)
                        }, concat: function (a) {
                            var b = this.g, c = a.g, d = this.h;
                            if (a = a.h, this.j(), d % (j + -269 + -4213 + 2312)) for (var e = 0; e < a; e++) b[d + e >>> 2] |= (c[e >>> 2] >>> 24 - e % 4 * 8 & 255) << 24 - (d + e) % (-9975 + j + -4490 + 12295) * 8; else if (65535 < c.length) for (e = 0; e < a; e += 4) b[d + e >>> 2] = c[e >>> k + 959]; else b.push.apply(b, c);
                            return this.h += a, this
                        }, j: function () {
                            var b = this.g, c = this.h;
                            b[c >>> 8517 + h + -2630 - 7721] &= h + 8309 + -4849 + 4294961999 << 32 - (h + -8270 + 6442) * (c % 4), b.length = a.ceil(c / 4)
                        }, e: function () {
                            var a = f.e.call(this);
                            return a.g = this.g.slice(0), a
                        }, random: function (b) {
                            for (var c = [], d = 0; d < b; d += 4) c.push(4294967296 * a.random() | -8555 + l + 376 + 10464);
                            return new g.init(c, b)
                        }
                    }), p = c.k = {}, q = p.l = {
                        i: function (a) {
                            for (var b = "", c = 0; c < "".length; c++) b += String.fromCharCode(368 ^ "".charCodeAt(c));
                            var d = a.g;
                            a = a.h;
                            for (var e = [], f = 0; f < a; f++) {
                                var g = d[f >>> 2] >>> 24 - f % (m + 5624 - 8818) * 8 & 255;
                                e.push((g >>> 4).toString(16)), e.push((15 & g).toString(16))
                            }
                            return e.join(b)
                        }, parse: function (a) {
                            for (var b = a.length, c = [], d = 0; d < b; d += 2) c[d >>> n + 9223] |= parseInt(a.substr(d, 2), 16) << 24 - d % 8 * 4;
                            return new g.init(c, b / 2)
                        }
                    }, r = p.m = {
                        i: function (a) {
                            for (var b = "", c = 0; c < "".length; c++) b += String.fromCharCode(2238 ^ "".charCodeAt(c));
                            var d = a.g;
                            a = a.h;
                            for (var e = [], f = 0; f < a; f++) e.push(String.fromCharCode(d[f >>> 2] >>> 8383 + k - 7402 - f % 4 * 8 & 255));
                            return e.join(b)
                        }, parse: function (a) {
                            for (var b = a.length, c = [], d = o - 5906; d < b; d++) c[d >>> 2] |= (255 & a.charCodeAt(d)) << 24 - d % 4 * 8;
                            return new g.init(c, b)
                        }
                    }, s = p.n = {
                        i: function (a) {
                            for (var b = "", c = 0, d = "\xd8\xf4\xf9\xf3\xfa\xe7\xf8\xf0\xf1\xb5\xc0\xc1\xd3\xb8\xad\xb5\xf1\xf4\xe1\xf4"; c < d.length; c++) b += String.fromCharCode(149 ^ d.charCodeAt(c));
                            try {
                                return decodeURIComponent(escape(r.i(a)))
                            } catch (e) {
                                throw Error(b)
                            }
                        }, parse: function (a) {
                            return r.parse(unescape(encodeURIComponent(a)))
                        }
                    }, t = d.o = f.c({
                        p: function () {
                            this.q = new g.init, this.r = h - 1836
                        }, s: function (a) {
                            for (var b = "", c = 0; c < "\u0fa7\u0fa0\u0fa6\u0fbd\u0fba\u0fb3".length; c++) b += String.fromCharCode(4052 ^ "\u0fa7\u0fa0\u0fa6\u0fbd\u0fba\u0fb3".charCodeAt(c));
                            b == typeof a && (a = s.parse(a)), this.q.concat(a), this.r += a.h
                        }, t: function (b) {
                            var c = this.q, d = c.g, e = c.h, f = this.u, h = e / (4 * f);
                            if (b = (h = b ? a.ceil(h) : a.max((0 | h) - this.v, 0)) * f, e = a.min(4 * b, e), b) {
                                for (var i = 0; i < b; i += f) this.w(d, i);
                                i = d.splice(0, b), c.h -= e
                            }
                            return new g.init(i, e)
                        }, e: function () {
                            var a = f.e.call(this);
                            return a.q = this.q.e(), a
                        }, v: 0
                    });
                    d.x = t.c({
                        y: f.c(), init: function (a) {
                            this.y = this.y.c(a), this.p()
                        }, p: function () {
                            t.p.call(this), this.z()
                        }, A: function (a) {
                            return this.s(a), this.t(), this
                        }, B: function (a) {
                            return a && this.s(a), this.C()
                        }, u: 16, D: function (a) {
                            return function (b, c) {
                                return new a.init(c).B(b)
                            }
                        }, F: function (a) {
                            return function (b, c) {
                                return new u.HMAC.init(a, c).B(b)
                            }
                        }
                    });
                    var u = c.G = {};
                    return c
                }(Math);
            return function () {
                for (var a = "", b = 0, c = "\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xfb\xff\xed"; b < c.length; b++) a += String.fromCharCode(208 ^ c.charCodeAt(b));
                var d = fb, e = d.a.f;
                d.k.H = {
                    i: function (a) {
                        for (var b = "", c = 0; c < "".length; c++) b += String.fromCharCode(4077 ^ "".charCodeAt(c));
                        var d = a.g, e = a.h, f = this.I;
                        a.j(), a = [];
                        for (var g = 0; g < e; g += 3) for (var h = (d[g >>> 2] >>> 24 - g % 4 * 8 & 255) << p + -9200 + 1090 | (d[g + (l + 7275 - 4989) >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255) << 8 | d[g + 2 >>> 2] >>> q + 3595 - (g + 2) % 4 * 8 & 255, i = 0; 4 > i && g + .75 * i < e; i++) a.push(f.charAt(h >>> 6 * (3 - i) & 63));
                        if (d = f.charAt(64)) for (; a.length % 4;) a.push(d);
                        return a.join(b)
                    }, parse: function (a) {
                        var b = a.length, c = this.I;
                        (d = c.charAt(64)) && -1 != (d = a.indexOf(d)) && (b = d);
                        for (var d = [], f = 0, g = 0; g < b; g++) if (g % 4) {
                            var h = c.indexOf(a.charAt(g - 1)) << g % (r + 1860 + 5724 - 7367) * 2,
                                i = c.indexOf(a.charAt(g)) >>> 6 - g % 4 * 2;
                            d[f >>> p + -6116 + 4162 - 6170] |= (h | i) << 24 - f % 4 * 8, f++
                        }
                        return e.create(d, f)
                    }, I: a
                }
            }(), function (a) {
                function b(a, b, c, d, e, h, i) {
                    return f.call(this, 2727 + g + 2727 - 7318, a, b, c, d, e, h, i)
                }

                function c(a, b, c, d, e, h, i) {
                    return f.call(this, g + -3418 + 1555, a, b, c, d, e, h, i)
                }

                function d(a, b, c, d, e, h, j) {
                    return f.call(this, g + i + -406 + 4647, a, b, c, d, e, h, j)
                }

                function e(a, b, c, d, e, g, h) {
                    return f.call(this, k + 1320 + 1320 - 1680, a, b, c, d, e, g, h)
                }

                function f(a) {
                    switch (a) {
                        case 0:
                            var b = arguments[1], c = arguments[ea + 7592 + 7592 - 20100],
                                d = arguments[ga + ha - 7012], e = arguments[fa + ia + 1567],
                                f = arguments[-1789 + ja - 503], g = arguments[ka + la + l + 20776];
                            return ((b = b + (c & d | ~c & e) + f + arguments[7]) << g | b >>> 32 - g) + c;
                        case ma + Y + 11708:
                            return b = arguments[na + 7051], c = arguments[A + 4673 + P - 18882], d = arguments[ca + J + n - 6198], e = arguments[Q + R + S - 10316], f = arguments[T + C + Z + 12875], g = arguments[6], ((b = b + (c & e | d & ~e) + f + arguments[7]) << g | b >>> -9475 + oa + J + 1645 - g) + c;
                        case $ + 460:
                            return b = arguments[D + v - 275], c = arguments[O + U + 3157], d = arguments[pa + -6801 + 14678], e = arguments[ca + _ - 7393], f = arguments[ba + qa + 36 - 3310], g = arguments[p + K - 10949], ((b = b + (c ^ d ^ e) + f + arguments[7]) << g | b >>> 32 - g) + c;
                        case ra + sa + V + 2160:
                            return b = arguments[1], c = arguments[7592 + W + 4673 - 11094], d = arguments[D + aa - 2931], e = arguments[5298 + N + -4862 + 18], f = arguments[ta - 4630], g = arguments[K + -6978 + 4155], ((b = b + (d ^ (c | ~e)) + f + arguments[r + 220]) << g | b >>> -8328 + da + -2734 + 15298 - g) + c
                    }
                }

                for (var g = 1864, i = -6103, X = -5750, Y = -5616, Z = -7555, $ = -458, _ = 1071, aa = 927, ba = -2568, ca = 6326, da = -4204, ea = 4918, fa = 7574, ga = 6160, ha = 855, ia = -9137, ja = 2297, ka = -9619, la = -8866, ma = -6091, na = -7050, oa = -1233, pa = -7874, qa = 5847, ra = 5062, sa = -4552, ta = 4635, ua = fb, va = (xa = ua.a).f, wa = xa.x, xa = ua.G, ya = [], za = g - 1864; -12185 + l + 14534 > za; za++) ya[za] = (i + -7357 + X + 4294986506) * a.abs(a.sin(za + (-7343 + l + X + 15379))) | 0;
                xa = xa.J = wa.c({
                    z: function () {
                        this.K = new va.init([1732584193, 4023233417, 2562383102, 9348 + q + 7556 + 271720545])
                    }, w: function (a, f) {
                        for (var l = 4921 + i + 1182; 16 > l; l++) {
                            var n = a[P = f + l];
                            a[P] = 16711935 & (n << 5017 + g + 4620 - 11493 | n >>> Y + 5640) | 4278255360 & (n << 24 | n >>> 8)
                        }
                        l = this.K.g;
                        var q, O, P = a[f + 0], Q = (n = a[f + 1], a[f + (s - 2247)]), R = a[f + 3], S = a[f + 4],
                            T = a[f + 5], U = a[f + (Y + s + 5624 - 2251)], V = a[f + 7], W = a[f + 8], ea = a[f + 9],
                            fa = a[f + 10], ga = a[f + 11], ha = a[f + 12], ia = a[f + (i + j + 3942)], ja = a[f + 14],
                            ka = a[f + (14808 + i - 8690)], la = l[-1465 + h - 371],
                            ma = e(ma = e(ma = e(ma = e(ma = d(ma = d(ma = d(ma = d(ma = c(ma = c(ma = c(ma = c(ma = b(ma = b(ma = b(ma = b(ma = l[1], O = b(O = l[2], q = b(q = l[3], la = b(la, ma, O, q, P, 7, ya[-2964 + p - 5162]), ma, O, n, 12, ya[1]), la, ma, Q, 5903 + Y - 270, ya[2]), q, la, R, 22, ya[3]), O = b(O, q = b(q, la = b(la, ma, O, q, S, 7, ya[4]), ma, O, T, 12, ya[5]), la, ma, U, 17, ya[6]), q, la, V, 22, ya[7]), O = b(O, q = b(q, la = b(la, ma, O, q, W, 7, ya[8]), ma, O, ea, 12, ya[9]), la, ma, fa, 4264 + Y + 1369, ya[-3423 + t + 4126]), q, la, ga, 22, ya[11]), O = b(O, q = b(q, la = b(la, ma, O, q, ha, o - 5899, ya[12]), ma, O, ia, 12, ya[t + -2344 + 3050]), la, ma, ja, 17, ya[1227 + Z + 6342]), q, la, ka, -8569 + r + 8804, ya[$ + -1821 + 806 + 1488]), O = c(O, q = c(q, la = c(la, ma, O, q, n, i + -1310 + Y + 13034, ya[16]), ma, O, U, 9, ya[g + u + -7697 + 6177]), la, ma, ga, v + -5305 + 7539 - 489, ya[18]), q, la, P, w + -571 + 6443 - 7617, ya[19]), O = c(O, q = c(q, la = c(la, ma, O, q, T, 5, ya[_ - 1051]), ma, O, fa, 9, ya[21]), la, ma, ka, 14, ya[x + X + -8178 + 19296]), q, la, S, 20, ya[-11385 + y + 15488]), O = c(O, q = c(q, la = c(la, ma, O, q, ea, 5, ya[24]), ma, O, ja, 9, ya[25]), la, ma, R, -912 + z + A - 10945, ya[aa - 901]), q, la, W, 12598 + ba - 10010, ya[27]), O = c(O, q = c(q, la = c(la, ma, O, q, ia, 5, ya[-4202 + ca - 2096]), ma, O, Q, 9, ya[29]), la, ma, V, B + Y + ca - 200, ya[30]), q, la, ha, ba + 9955 - 7367, ya[7539 + p + 42 - 15676]), O = d(O, q = d(q, la = d(la, ma, O, q, T, 4, ya[32]), ma, O, W, g - 1853, ya[33]), la, ma, ga, B + 9362 - 8850, ya[34]), q, la, ja, t + 716, ya[35]), O = d(O, q = d(q, la = d(la, ma, O, q, n, -5345 + C + 9540, ya[36]), ma, O, S, 11, ya[37]), la, ma, V, 16, ya[38]), q, la, fa, 23, ya[39]), O = d(O, q = d(q, la = d(la, ma, O, q, ia, Y + $ + D + 4071, ya[40]), ma, O, P, E + 1752, ya[41]), la, ma, R, 16, ya[42]), q, la, U, 23, ya[43]), O = d(O, q = d(q, la = d(la, ma, O, q, ea, 4, ya[44]), ma, O, ha, 11, ya[45]), la, ma, ka, y + 4096, ya[46]), q, la, Q, k + 8387 + -9793 + 2386, ya[47]), O = e(O, q = e(q, la = e(la, ma, O, q, P, X + F + 5056, ya[G + 185]), ma, O, V, z - 7502, ya[49]), la, ma, ja, 4376 + H + 3667 - 16394, ya[50]), q, la, T, I + -983 + 7010, ya[51]), O = e(O, q = e(q, la = e(la, ma, O, q, ha, 42 + s + 656 - 2941, ya[52]), ma, O, R, 10, ya[53]), la, ma, fa, 2553 + J + -8569 - 3064, ya[54]), q, la, n, 21, ya[3412 + x + 1989]), O = e(O, q = e(q, la = e(la, ma, O, q, W, 6, ya[56]), ma, O, ka, 2260 + $ - 1792, ya[-6071 + K + 3299]), la, ma, U, 15, ya[-990 + da + 5252]), q, la, ia, 4121 + m - 7298, ya[59]), O = e(O, q = e(q, la = e(la, ma, O, q, S, 6, ya[L + 6672]), ma, O, ga, 10, ya[61]), la, ma, Q, 15, ya[62]), q, la, ea, 21, ya[63]);
                        l[M - 2907] = l[0] + la | 0, l[1] = l[1] + ma | 0, l[2] = l[2] + O | 0, l[3] = l[3] + q | -11860 + N + 12310
                    }, C: function () {
                        var b = this.q, c = b.g, d = (6876 + $ + -335 - 6075) * this.r, e = 8 * b.h;
                        c[e >>> 8761 + ea + 1268 - 14942] |= 128 << C + 4215 - e % 32;
                        var f = a.floor(d / 4294967296);
                        for (c[15 + (e + 64 >>> 9 << O + 4006)] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), c[14 + (e + (D + -6251 + 4308) >>> 9 << 4)] = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), b.h = 4 * (c.length + 1), this.t(), c = (b = this.K).g, d = 0; 4 > d; d++) e = c[d], c[d] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 2244 + fa + 2814 - 12624);
                        return b
                    }, e: function () {
                        var a = wa.e.call(this);
                        return a.K = this.K.e(), a
                    }
                }), ua.J = wa.D(xa), ua.L = wa.F(xa)
            }(Math), e = (c = (d = fb).a).b, f = c.f, g = (c = d.G).M = e.c({
                y: e.c({N: 4, O: c.J, P: 1}),
                init: function (a) {
                    this.y = this.y.c(a)
                },
                Q: function (a, b) {
                    for (var c = (h = this.y).O.create(), d = f.create(), e = d.g, g = h.N, h = h.P; e.length < g;) {
                        i && c.A(i);
                        var i = c.A(a).B(b);
                        c.p();
                        for (var j = 1; j < h; j++) i = c.B(i), c.p();
                        d.concat(i)
                    }
                    return d.h = 4 * g, d
                }
            }), d.M = function (a, b, c) {
                return g.create(c).Q(a, b)
            }, fb.a.R || function (a) {
                var b = (o = fb).a, c = b.b, d = b.f, e = b.o, f = o.k.H, g = o.G.M, h = b.R = e.c({
                    y: c.c(), S: function (a, b) {
                        return this.create(this.T, a, b)
                    }, U: function (a, b) {
                        return this.create(this.V, a, b)
                    }, init: function (a, b, c) {
                        this.y = this.y.c(c), this.W = a, this.X = b, this.p()
                    }, p: function () {
                        e.p.call(this), this.z()
                    }, Y: function (a) {
                        return this.s(a), this.t()
                    }, B: function (a) {
                        return a && this.s(a), this.C()
                    }, N: w - 1761, Z: 4, T: 1, V: 2, D: function (a) {
                        return {
                            $: function (b, c, d) {
                                for (var e = "", f = 0; f < "\u01e0\u01e7\u01e1\u01fa\u01fd\u01f4".length; f++) e += String.fromCharCode(403 ^ "\u01e0\u01e7\u01e1\u01fa\u01fd\u01f4".charCodeAt(f));
                                return (e == typeof c ? p : n).$(a, b, c, d)
                            }, _: function (b, c, d) {
                                for (var e = "", f = 0; f < "\u08d8\u08df\u08d9\u08c2\u08c5\u08cc".length; f++) e += String.fromCharCode(2219 ^ "\u08d8\u08df\u08d9\u08c2\u08c5\u08cc".charCodeAt(f));
                                return (e == typeof c ? p : n)._(a, b, c, d)
                            }
                        }
                    }
                });
                b.aa = h.c({
                    C: function () {
                        return this.t(!0)
                    }, u: 1
                });
                var i = o.ba = {}, j = function (a, b, c) {
                    var d = this.ca;
                    d ? this.ca = void 0 : d = this.da;
                    for (var e = 0; e < c; e++) a[b + e] ^= d[e]
                }, l = (b.ea = c.c({
                    S: function (a, b) {
                        return this.fa.create(a, b)
                    }, U: function (a, b) {
                        return this.ga.create(a, b)
                    }, init: function (a, b) {
                        this.ha = a, this.ca = b
                    }
                })).c();
                l.fa = l.c({
                    ia: function (a, b) {
                        var c = this.ha, d = c.u;
                        j.call(this, a, b, d), c.ja(a, b), this.da = a.slice(b, b + d)
                    }
                }), l.ga = l.c({
                    ia: function (a, b) {
                        var c = this.ha, d = c.u, e = a.slice(b, b + d);
                        c.ka(a, b), j.call(this, a, b, d), this.da = e
                    }
                }), i = i.la = l, l = (o.na = {}).ma = {
                    na: function (a, b) {
                        for (var c, e = (c = (c = 4 * b) - a.h % c) << 24 | c << 16 | c << 8 | c, f = [], g = 6180 + K + -1259 - 7750; g < c; g += X + 6428 - 10162) f.push(e);
                        c = d.create(f, c), a.concat(c)
                    }, oa: function (a) {
                        a.h -= 255 & a.g[a.h - 1 >>> 2]
                    }
                }, b.pa = h.c({
                    y: h.y.c({ba: i, qa: l}),
                    p: function () {
                        h.p.call(this);
                        var a = (b = this.y).ra, b = b.ba;
                        if (this.W == this.T) var c = b.S; else c = b.U, this.v = 1;
                        this.sa = c.call(b, this, a && a.g)
                    }, w: function (a, b) {
                        this.sa.ia(a, b)
                    }, C: function () {
                        var a = this.y.qa;
                        if (this.W == this.T) {
                            a.na(this.q, this.u);
                            var b = this.t(!0)
                        } else b = this.t(!0), a.oa(b);
                        return b
                    }, u: V + -6989 + -3440 + 13100
                });
                var m = b.ta = c.c({
                    init: function (a) {
                        this.d(a)
                    }, toString: function (a) {
                        return (a || this.ua).i(this)
                    }
                }), n = (i = (o.wa = {}).va = {
                    i: function (a) {
                        var b = a.xa;
                        return ((a = a.ya) ? d.create([1398893684, 6475 + D + 1701068349]).concat(a).concat(b) : b).toString(f)
                    }, parse: function (a) {
                        var b = (a = f.parse(a)).g;
                        if (1398893684 == b[0] && 1701076831 == b[1]) {
                            var c = d.create(b.slice(2, 4));
                            b.splice(0, 4), a.h -= 16
                        }
                        return m.create({xa: a, ya: c})
                    }
                }, b.za = c.c({
                    y: c.c({wa: i}), $: function (a, b, c, d) {
                        d = this.y.c(d);
                        var e = a.S(c, d);
                        return b = e.B(b), e = e.y, m.create({
                            xa: b,
                            Aa: c,
                            ra: e.ra,
                            Ba: a,
                            ba: e.ba,
                            qa: e.qa,
                            u: a.u,
                            ua: d.wa
                        })
                    }, _: function (a, b, c, d) {
                        return d = this.y.c(d), b = this.Ca(b, d.wa), a.U(c, d).B(b.xa)
                    }, Ca: function (a, b) {
                        for (var c = "", d = -8390 + Y + 3880; d < "\u0815\u0812\u0814\u080f\u0808\u0801".length; d++) c += String.fromCharCode(2150 ^ "\u0815\u0812\u0814\u080f\u0808\u0801".charCodeAt(d));
                        return c == typeof a ? b.parse(a, this) : a
                    }
                })), o = (o.Da = {}).va = {
                    Ea: function (a, b, c, e) {
                        return e || (e = d.random(k + 4678 + -4737 + 1024)), a = g.create({N: b + c}).Q(a, e), c = d.create(a.g.slice(b), 4 * c), a.h = 4 * b, m.create({
                            Aa: a,
                            ra: c,
                            ya: e
                        })
                    }
                }, p = b.Fa = n.c({
                    y: n.y.c({Da: o}), $: function (a, b, c, d) {
                        return c = (d = this.y.c(d)).Da.Ea(c, a.N, a.Z), d.ra = c.ra, (a = n.$.call(this, a, b, c.Aa, d)).d(c), a
                    }, _: function (a, b, c, d) {
                        return d = this.y.c(d), b = this.Ca(b, d.wa), c = d.Da.Ea(c, a.N, a.Z, b.ya), d.ra = c.ra, n._.call(this, a, b, c.Aa, d)
                    }
                })
            }(), function () {
                for (var a = fb, b = a.a.pa, c = a.G, d = [], e = [], f = [], g = [], i = [], j = [], k = [], l = [], m = [], n = [], o = [], q = U + 2043 + -9216 + 6326; 256 > q; q++) o[q] = 128 > q ? q << 1 : q << Z + 4353 - 10780 ^ -4619 + $ + 9772;
                var t = 0, u = 13770 + V - 11103;
                for (q = 8146 + s + s - 12644; 256 > q; q++) {
                    var v = (v = u ^ u << 1 ^ u << h + 7286 + 7286 - 16406 ^ u << 3 ^ u << X + 2744 - 6478) >>> 8 ^ 255 & v ^ 7286 + _ + -803 - 621;
                    d[t] = v, e[v] = t;
                    var x = o[t], y = o[x], z = o[y], A = 257 * o[v] ^ 16843008 * v;
                    f[t] = A << 24 | A >>> 8, g[t] = A << 8146 + L - 1518 | A >>> 16, i[t] = A << -7226 + B + -8993 + 16723 | A >>> 24, j[t] = A, A = 16843009 * z ^ 65537 * y ^ (12950 + aa - 12561) * x ^ (ba + 6038 + ca + 16817958) * t, k[v] = A << 24 | A >>> W + 1177, l[v] = A << 16 | A >>> 16, m[v] = A << H + da - 4738 | A >>> 24, n[v] = A, t ? (t = x ^ o[o[o[z ^ x]]], u ^= o[o[u]]) : t = u = 1
                }
                var C = [0, 1, da + 1538 + -9246 + 11330, ea + -8064 + -6326 + 15349, 8, -7197 + fa - 2295, 32, 64, 128, 27, 54];
                c = c.Ga = b.c({
                    z: function () {
                        for (var a = (c = this.X).g, b = c.h / 4, c = 4 * ((this.Ha = b + 6) + 1), e = this.Ia = [], f = 0; f < c; f++) if (f < b) e[f] = a[f]; else {
                            var g = e[f - 1];
                            f % b ? 6 < b && 4 == f % b && (g = d[g >>> 24] << 24 | d[g >>> 16 & 255] << 16 | d[g >>> 8 & 255] << 8 | d[255 & g]) : (g = d[(g = g << 8 | g >>> 24) >>> 24] << 24 | d[g >>> 16 & 255] << 16 | d[g >>> 8 & ga + 8195] << 8 | d[255 & g], g ^= C[f / b | 0] << 24), e[f] = e[f - b] ^ g
                        }
                        for (a = this.Ja = [], b = 0; b < c; b++) f = c - b, g = b % 4 ? e[f] : e[f - 4], a[b] = 4 > b || 4 >= f ? g : k[d[g >>> 24]] ^ l[d[g >>> 16 & 255]] ^ m[d[g >>> 8 & 255]] ^ n[d[255 & g]]
                    }, ja: function (a, b) {
                        this.Ka(a, b, this.Ia, f, g, i, j, d)
                    }, ka: function (a, b) {
                        var c = a[b + 1];
                        a[b + 1] = a[b + 3], a[b + 3] = c, this.Ka(a, b, this.Ja, k, l, m, n, e), c = a[b + 1], a[b + 1] = a[b + 3], a[b + 3] = c
                    }, Ka: function (a, b, c, d, e, f, g, h) {
                        for (var i = this.Ha, j = a[b] ^ c[0], k = a[b + 1] ^ c[1], l = a[b + 2] ^ c[6782 + r + 2889 - 9456], m = a[b + 3] ^ c[3], n = 4, o = 1; o < i; o++) {
                            var q = d[j >>> 24] ^ e[k >>> 16 & 255] ^ f[l >>> 8 & 255] ^ g[255 & m] ^ c[n++],
                                s = d[k >>> 24] ^ e[l >>> 16 & 255] ^ f[m >>> 8 & 255] ^ g[255 & j] ^ c[n++],
                                t = d[l >>> 24] ^ e[m >>> 16 & 255] ^ f[j >>> 8 & w - 1510] ^ g[255 & k] ^ c[n++];
                            m = d[m >>> 24] ^ e[j >>> 16 & 255] ^ f[k >>> -3930 + Q + 7621 & 255] ^ g[255 & l] ^ c[n++], j = q, k = s, l = t
                        }
                        q = (h[j >>> 24] << 24 | h[k >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & m]) ^ c[n++], s = (h[k >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[m >>> 8 & 255] << 8 | h[255 & j]) ^ c[n++], t = (h[l >>> 24] << 24 | h[m >>> 16 & 255] << 16 | h[j >>> 8 & 255] << 8 | h[255 & k]) ^ c[n++], m = (h[m >>> 24] << 9424 + ha + -1219 - 1552 | h[j >>> 16 & 255] << 16 | h[k >>> 8 & 255] << 8 | h[255 & l]) ^ c[n++], a[b] = q, a[b + 1] = s, a[b + (-5365 + p - 2759)] = t, a[b + 3] = m
                    }, N: 8
                }), a.Ga = b.D(c)
            }(), function (a, c, d, e, f) {
                return b.call(this, 5, a, c, d, e, f)
            }
        }();
        a.exports = c
    }, 288: function (a, b, c) {
        var d = c(68).definitionMap;
        a.exports = {
            getDefinitionListFromData: function (a) {
                var b = Txplayer.$, c = [], e = location.hostname;
                if (top !== window) try {
                    e = top.location.hostname
                } catch (f) {
                }
                if ("o" === a.s && a.fl && a.fl.fi && "array" === b.type(a.fl.fi) && a.fl.fi.length && a.fl.fi[0]) for (var g = 0, h = a.fl.fi.length; g < h; g++) a.fl.fi[g].name in d && ("fhd" == a.fl.fi[g].name && "fhd" != a.fl.fi[g].name || c.push({
                    name: a.fl.fi[g].name,
                    cname: a.fl.fi[g].cname,
                    sl: a.fl.fi[g].sl,
                    format: a.fl.fi[g].id,
                    lmt: a.fl.fi[g].lmt,
                    fs: a.fl.fi[g].fs,
                    br: a.fl.fi[g].br
                }));
                return c
            }, getPcVideoMp4Url: function (a, b) {
                function c(a) {
                    var b = [];
                    return 8 === a.dltype && "o" === a.s && a.vl && a.vl.vi && a.vl.vi.length && a.vl.vi[0] && a.vl.vi[0].ul && (b.m3u8 = a.vl.vi[0].ul.m3u8), (3 === a.dltype || 8 === a.dltype) && "o" === a.s && a.vl && a.vl.vi && a.vl.vi.length && a.vl.vi[0] && a.vl.vi[0].ul && a.vl.vi[0].ul.ui && a.vl.vi[0].ul.ui.length && k.each(a.vl.vi[0].ul.ui, function (c, d) {
                        d.url && d.hls && d.hls.pt ? b.push(d.url + d.hls.pt) : 8 === a.dltype && b.push(d.url)
                    }), b
                }

                function d(a, b) {
                    if (0 === b) return a;
                    var c = a.lastIndexOf("."), d = a.substr(0, c) + "." + b + a.substring(c);
                    return d
                }

                function e(a) {
                    var b = a.indexOf("."), c = a.substr(b);
                    return c
                }

                function f(a, c, d, e) {
                    for (var f = [], g = {}, h = {}, i = a.ui.length, j = 0; j < i; j++) g = a.ui[j], h = {}, g.url && (g.url && g.url.indexOf(c + ".flv") === -1 && g.url.indexOf(c + ".mp4") === -1 ? h.url = g.url + d : h.url = g.url, g.vt && (h.vt = parseInt(g.vt)), h.url.indexOf("sdtfrom") === -1 && (h.url.indexOf("?") > -1 ? h.url += "&sdtfrom=" + b.dataset.sdtfrom : h.url += "?sdtfrom=" + b.dataset.sdtfrom, h.url += "&guid=" + b.dataset.guid), f.push(h));
                    return f
                }

                var g, h, i, j, k = Txplayer.$, l = a.vl, m = l.vi, n = m[0], o = [], p = n.fn;
                if (3 == a.dltype || 8 === a.dltype) {
                    g = {}, g.vid = n.lnk, g.width = parseInt(n.vw), g.height = parseInt(n.vh), g.bytesTotal = parseInt(n.fs), g.byteRate = n.br, g.filename = n.fn, h = n.fn, g.newFileName = h, g.fileNameSuffix = e(h);
                    var q = c(a);
                    g.urlArray = [], j = q.length;
                    for (var r = 0; r < j; r++) g.urlArray.push({url: q[r]});
                    return g.vt = n.ul.ui[0].vt, g.duration = parseInt(n.td, 10), g.m3u8 = q.m3u8, o.push(g), o
                }
                if (j = n.cl.fc, !n.cl.ci && n.fvkey && n.fn && n.ul && n.ul.ui && n.ul.ui.length) return g = {}, g.vid = n.lnk, g.width = parseInt(n.vw), g.height = parseInt(n.vh), g.bytesTotal = parseInt(n.fs), g.byteRate = n.br, g.filename = n.fn, h = n.fn, g.newFileName = h, g.fileNameSuffix = e(h), g.urlArray = f(n.ul, n.lnk, h, g.fileNameSuffix), g.vt = n.ul.ui[0].vt, g.duration = parseInt(n.td, 10), o.push(g), o;
                if (n.cl.ci && j === n.cl.ci.length) {
                    for (var s = 0; s < j; s++) i = n.cl.ci[s], g = {}, g.vid = n.lnk, g.width = parseInt(n.vw), g.height = parseInt(n.vh), g.bytesTotal = parseInt(i.cs), g.duration = parseFloat(i.cd), g.byteRate = n.br, g.filename = n.fn, h = d(p, s + 1), g.newFileName = h, g.fileNameSuffix = e(h), g.urlArray = f(n.ul, n.lnk, h, g.fileNameSuffix), g.vt = n.ul.ui[0].vt, o.push(g);
                    return o
                }
            }
        }
    }, 289: function (a, b, c) {
        (function (b) {
            function c(a) {
                return ua.locateFile ? ua.locateFile(a, Aa) : Aa + a
            }

            function d(a) {
                g(!Pa);
                var b = Oa;
                return Oa = Oa + a + 15 & -16, g(Oa < db, "not enough memory for static allocation - increase TOTAL_MEMORY"), b
            }

            function e(a, b) {
                b || (b = Da);
                var c = a = Math.ceil(a / b) * b;
                return c
            }

            function f(a) {
                f.shown || (f.shown = {}), f.shown[a] || (f.shown[a] = 1, Ca(a))
            }

            function g(a, b) {
                a || sa("Assertion failed: " + b)
            }

            function h(a) {
                var b = ua["_" + a];
                return g(b, "Cannot call unknown function " + a + ", make sure it is exported"), b
            }

            function i(a, b, c, d, e) {
                function f(a) {
                    return "string" === b ? k(a) : "boolean" === b ? Boolean(a) : a
                }

                var i = h(a), j = [], l = 0;
                if (g("array" !== b, 'Return type should not be "array".'), d) for (var m = 0; m < d.length; m++) {
                    var n = $a[c[m]];
                    n ? (0 === l && (l = Ub()), j[m] = n(d[m])) : j[m] = d[m]
                }
                var o = i.apply(null, j);
                return o = f(o), 0 !== l && Tb(l), o
            }

            function j(a, b, c, d) {
                return function () {
                    return i(a, b, c, arguments, d)
                }
            }

            function k(a, b) {
                if (0 === b || !a) return "";
                for (var c, d = 0, e = 0; ;) {
                    if (g(a + e < db), c = Ga[a + e >> 0], d |= c, 0 == c && !b) break;
                    if (e++, b && e == b) break
                }
                b || (b = e);
                var f = "";
                if (d < 128) {
                    for (var h, i = 1024; b > 0;) h = String.fromCharCode.apply(String, Ga.subarray(a, a + Math.min(b, i))), f = f ? f + h : h, a += i, b -= i;
                    return f
                }
                return m(a)
            }

            function l(a, b) {
                for (var c = b; a[c];) ++c;
                if (c - b > 16 && a.subarray && _a) return _a.decode(a.subarray(b, c));
                for (var d, e, f, g, h, i, j = ""; ;) {
                    if (d = a[b++], !d) return j;
                    if (128 & d) if (e = 63 & a[b++], 192 != (224 & d)) if (f = 63 & a[b++], 224 == (240 & d) ? d = (15 & d) << 12 | e << 6 | f : (g = 63 & a[b++], 240 == (248 & d) ? d = (7 & d) << 18 | e << 12 | f << 6 | g : (h = 63 & a[b++], 248 == (252 & d) ? d = (3 & d) << 24 | e << 18 | f << 12 | g << 6 | h : (i = 63 & a[b++], d = (1 & d) << 30 | e << 24 | f << 18 | g << 12 | h << 6 | i))), d < 65536) j += String.fromCharCode(d); else {
                        var k = d - 65536;
                        j += String.fromCharCode(55296 | k >> 10, 56320 | 1023 & k)
                    } else j += String.fromCharCode((31 & d) << 6 | e); else j += String.fromCharCode(d)
                }
            }

            function m(a) {
                return l(Ga, a)
            }

            function n(a, b, c, d) {
                if (!(d > 0)) return 0;
                for (var e = c, f = c + d - 1, g = 0; g < a.length; ++g) {
                    var h = a.charCodeAt(g);
                    if (h >= 55296 && h <= 57343) {
                        var i = a.charCodeAt(++g);
                        h = 65536 + ((1023 & h) << 10) | 1023 & i
                    }
                    if (h <= 127) {
                        if (c >= f) break;
                        b[c++] = h
                    } else if (h <= 2047) {
                        if (c + 1 >= f) break;
                        b[c++] = 192 | h >> 6, b[c++] = 128 | 63 & h
                    } else if (h <= 65535) {
                        if (c + 2 >= f) break;
                        b[c++] = 224 | h >> 12, b[c++] = 128 | h >> 6 & 63, b[c++] = 128 | 63 & h
                    } else if (h <= 2097151) {
                        if (c + 3 >= f) break;
                        b[c++] = 240 | h >> 18, b[c++] = 128 | h >> 12 & 63, b[c++] = 128 | h >> 6 & 63, b[c++] = 128 | 63 & h
                    } else if (h <= 67108863) {
                        if (c + 4 >= f) break;
                        b[c++] = 248 | h >> 24, b[c++] = 128 | h >> 18 & 63, b[c++] = 128 | h >> 12 & 63, b[c++] = 128 | h >> 6 & 63, b[c++] = 128 | 63 & h
                    } else {
                        if (c + 5 >= f) break;
                        b[c++] = 252 | h >> 30, b[c++] = 128 | h >> 24 & 63, b[c++] = 128 | h >> 18 & 63, b[c++] = 128 | h >> 12 & 63, b[c++] = 128 | h >> 6 & 63, b[c++] = 128 | 63 & h
                    }
                }
                return b[c] = 0, c - e
            }

            function o(a, b, c) {
                return g("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), n(a, Ga, b, c)
            }

            function p(a) {
                for (var b = 0, c = 0; c < a.length; ++c) {
                    var d = a.charCodeAt(c);
                    d >= 55296 && d <= 57343 && (d = 65536 + ((1023 & d) << 10) | 1023 & a.charCodeAt(++c)), d <= 127 ? ++b : b += d <= 2047 ? 2 : d <= 65535 ? 3 : d <= 2097151 ? 4 : d <= 67108863 ? 5 : 6
                }
                return b
            }

            function q(a) {
                return f("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"), a
            }

            function r(a) {
                var b = /__Z[\w\d_]+/g;
                return a.replace(b, function (a) {
                    var b = q(a);
                    return a === b ? a : b + " [" + a + "]"
                })
            }

            function s() {
                var a = new Error;
                if (!a.stack) {
                    try {
                        throw new Error(0)
                    } catch (b) {
                        a = b
                    }
                    if (!a.stack) return "(no stack trace available)"
                }
                return a.stack.toString()
            }

            function t() {
                var a = s();
                return ua.extraStackTrace && (a += "\n" + ua.extraStackTrace()), r(a)
            }

            function u(a, b) {
                return a % b > 0 && (a += b - a % b), a
            }

            function v(a) {
                ua.buffer = Ea = a
            }

            function w() {
                ua.HEAP8 = Fa = new Int8Array(Ea), ua.HEAP16 = Ha = new Int16Array(Ea), ua.HEAP32 = Ja = new Int32Array(Ea), ua.HEAPU8 = Ga = new Uint8Array(Ea), ua.HEAPU16 = Ia = new Uint16Array(Ea), ua.HEAPU32 = Ka = new Uint32Array(Ea), ua.HEAPF32 = La = new Float32Array(Ea), ua.HEAPF64 = Ma = new Float64Array(Ea)
            }

            function x() {
                g(0 == (3 & Sa)), Ka[(Sa >> 2) - 1] = 34821223, Ka[(Sa >> 2) - 2] = 2310721022
            }

            function y() {
                if (34821223 == Ka[(Sa >> 2) - 1] && 2310721022 == Ka[(Sa >> 2) - 2] || sa("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x" + Ka[(Sa >> 2) - 2].toString(16) + " " + Ka[(Sa >> 2) - 1].toString(16)), 1668509029 !== Ja[0]) throw"Runtime error: The application has corrupted its heap memory area (address zero)!"
            }

            function z(a) {
                sa("Stack overflow! Attempted to allocate " + a + " bytes on the stack, but stack has only " + (Sa - Ub() + a) + " bytes available!")
            }

            function A() {
                sa("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + db + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")
            }

            function B() {
                A()
            }

            function C() {
                return db
            }

            function D(a) {
                for (; a.length > 0;) {
                    var b = a.shift();
                    if ("function" != typeof b) {
                        var c = b.func;
                        "number" == typeof c ? void 0 === b.arg ? ua.dynCall_v(c) : ua.dynCall_vi(c, b.arg) : c(void 0 === b.arg ? null : b.arg)
                    } else b()
                }
            }

            function E() {
                if (ua.preRun) for ("function" == typeof ua.preRun && (ua.preRun = [ua.preRun]); ua.preRun.length;) I(ua.preRun.shift());
                D(eb)
            }

            function F() {
                y(), ib || (ib = !0, D(fb))
            }

            function G() {
                y(), D(gb)
            }

            function H() {
                if (y(), ua.postRun) for ("function" == typeof ua.postRun && (ua.postRun = [ua.postRun]); ua.postRun.length;) J(ua.postRun.shift());
                D(hb)
            }

            function I(a) {
                eb.unshift(a)
            }

            function J(a) {
                hb.unshift(a)
            }

            function K(a, b) {
                g(a.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)"), Fa.set(a, b)
            }

            function L(a) {
                kb++, ua.monitorRunDependencies && ua.monitorRunDependencies(kb), a ? (g(!nb[a]), nb[a] = 1, null === lb && "undefined" != typeof setInterval && (lb = setInterval(function () {
                    if (Xa) return clearInterval(lb), void (lb = null);
                    var a = !1;
                    for (var b in nb) a || (a = !0, Ca("still waiting on run dependencies:")), Ca("dependency: " + b);
                    a && Ca("(end of list)")
                }, 1e4))) : Ca("warning: run dependency added without ID")
            }

            function M(a) {
                if (kb--, ua.monitorRunDependencies && ua.monitorRunDependencies(kb), a ? (g(nb[a]), delete nb[a]) : Ca("warning: run dependency removed without ID"), 0 == kb && (null !== lb && (clearInterval(lb), lb = null), mb)) {
                    var b = mb;
                    mb = null, b()
                }
            }

            function N(a) {
                return String.prototype.startsWith ? a.startsWith(pb) : 0 === a.indexOf(pb)
            }

            function O() {
                function a(a) {
                    var b = ua.buffer;
                    a.byteLength < b.byteLength && Ca("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
                    var c = new Int8Array(b), d = new Int8Array(a);
                    d.set(c), v(a), w()
                }

                function b() {
                    try {
                        if (ua.wasmBinary) return new Uint8Array(ua.wasmBinary);
                        if (ua.readBinary) return ua.readBinary(h);
                        throw"both async and sync fetching of the wasm failed"
                    } catch (a) {
                        sa(a)
                    }
                }

                function d() {
                    return ua.wasmBinary || !wa && !xa || "function" != typeof fetch ? new Promise(function (a, c) {
                        a(b())
                    }) : fetch(h, {credentials: "same-origin"}).then(function (a) {
                        if (!a.ok) throw"failed to load wasm binary file at '" + h + "'";
                        return a.arrayBuffer()
                    })["catch"](function () {
                        return b()
                    })
                }

                function e(b, c, e) {
                    function f(b, c) {
                        l = b.exports, l.memory && a(l.memory), ua.asm = l, ua.usingWasm = !0, M("wasm-instantiate")
                    }

                    function h(a) {
                        g(ua === m, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), m = null, f(a.instance, a.module)
                    }

                    function i(a) {
                        d().then(function (a) {
                            return WebAssembly.instantiate(a, k)
                        }).then(a, function (a) {
                            Ca("failed to asynchronously prepare wasm: " + a), sa(a)
                        })
                    }

                    if ("object" != typeof WebAssembly) return sa("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead."), Ca("no native wasm support detected"), !1;
                    if (!(ua.wasmMemory instanceof WebAssembly.Memory)) return Ca("no native wasm Memory in use"), !1;
                    if (c.memory = ua.wasmMemory, k.global = {
                        NaN: NaN,
                        Infinity: 1 / 0
                    }, k["global.Math"] = Math, k.env = c, L("wasm-instantiate"), ua.instantiateWasm) try {
                        return ua.instantiateWasm(k, f)
                    } catch (j) {
                        return Ca("Module.instantiateWasm callback failed with error: " + j), !1
                    }
                    var m = ua;
                    return i(h), {}
                }

                var f = "ckey.wast", h = "ckey.wasm", i = "ckey.temp.asm.js";
                N(f) || (f = c(f)), N(h) || (h = c(h)), N(i) || (i = c(i));
                var j = 65536, k = {global: null, env: null, asm2wasm: Va, parent: ua}, l = null;
                ua.asmPreload = ua.asm;
                var m = ua.reallocBuffer, n = function (a) {
                    var b = ua.usingWasm ? ab : bb;
                    a = u(a, b);
                    var c = ua.buffer, d = c.byteLength;
                    if (ua.usingWasm) try {
                        var e = ua.wasmMemory.grow((a - d) / j);
                        return e !== -1 ? ua.buffer = ua.wasmMemory.buffer : null
                    } catch (f) {
                        return null
                    }
                };
                ua.reallocBuffer = function (a) {
                    return "asmjs" === o ? m(a) : n(a)
                };
                var o = "";
                ua.asm = function (a, b, c) {
                    if (!b.table) {
                        var d = ua.wasmTableSize;
                        void 0 === d && (d = 1024);
                        var f = ua.wasmMaxTableSize;
                        "object" == typeof WebAssembly && "function" == typeof WebAssembly.Table ? void 0 !== f ? b.table = new WebAssembly.Table({
                            initial: d,
                            maximum: f,
                            element: "anyfunc"
                        }) : b.table = new WebAssembly.Table({
                            initial: d,
                            element: "anyfunc"
                        }) : b.table = new Array(d), ua.wasmTable = b.table
                    }
                    b.memoryBase || (b.memoryBase = ua.STATIC_BASE), b.tableBase || (b.tableBase = 0);
                    var h;
                    return h = e(a, b, c), g(h, "no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: http://kripken.github.io/emscripten-site/docs/compiling/WebAssembly.html#binaryen-methods"), h
                };
                ua.asm
            }

            function P() {
                function a(a) {
                    return a ? a.length > 48 ? a.substr(0, 48) : a : ""
                }

                function b() {
                    var b = document.URL, c = window.navigator.userAgent.toLowerCase(), d = "";
                    document.referrer.length > 0 && (d = document.referrer);
                    try {
                        0 == d.length && opener.location.href.length > 0 && (d = opener.location.href)
                    } catch (e) {
                    }
                    var f = window.navigator.appCodeName, g = window.navigator.appName, h = window.navigator.platform;
                    return b = a(b), d = a(d), c = a(c), b + "|" + c + "|" + d + "|" + f + "|" + g + "|" + h
                }

                var c = b(), d = p(c) + 1, e = Pb(d);
                return o(c, e, d + 1), e
            }

            function Q() {
                return !!Q.uncaught_exception
            }

            function R(a) {
                throw sb.last || (sb.last = a), a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."
            }

            function S() {
                var a = sb.last;
                if (!a) return 0 | (Rb(0), 0);
                var b = sb.infos[a], c = b.type;
                if (!c) return 0 | (Rb(0), a);
                var d = Array.prototype.slice.call(arguments);
                ua.___cxa_is_pointer_type(c);
                S.buffer || (S.buffer = Pb(4)), Ja[S.buffer >> 2] = a, a = S.buffer;
                for (var e = 0; e < d.length; e++) if (d[e] && ua.___cxa_can_catch(d[e], c, a)) return a = Ja[a >> 2], b.adjusted = a, 0 | (Rb(d[e]), a);
                return a = Ja[a >> 2], 0 | (Rb(c), a)
            }

            function T() {
            }

            function U() {
            }

            function V(a, b) {
                tb.varargs = b;
                try {
                    var c = tb.getStreamFromFD(), d = (tb.get(), tb.get()), e = tb.get(), f = tb.get(), g = d;
                    return ob.llseek(c, g, f), Ja[e >> 2] = c.position, c.getdents && 0 === g && 0 === f && (c.getdents = null), 0
                } catch (h) {
                    return "undefined" != typeof ob && h instanceof ob.ErrnoError || sa(h), -h.errno
                }
            }

            function W() {
                var a = ua._fflush;
                a && a(0);
                var b = tb.buffers;
                b[1].length && tb.printChar(1, 10), b[2].length && tb.printChar(2, 10)
            }

            function X(a, b) {
                tb.varargs = b;
                try {
                    for (var c = tb.get(), d = tb.get(), e = tb.get(), f = 0, g = 0; g < e; g++) {
                        for (var h = Ja[d + 8 * g >> 2], i = Ja[d + (8 * g + 4) >> 2], j = 0; j < i; j++) tb.printChar(c, Ga[h + j]);
                        f += i
                    }
                    return f
                } catch (k) {
                    return "undefined" != typeof ob && k instanceof ob.ErrnoError || sa(k), -k.errno
                }
            }

            function Y(a, b) {
                tb.varargs = b;
                try {
                    return 0
                } catch (c) {
                    return "undefined" != typeof ob && c instanceof ob.ErrnoError || sa(c), -c.errno
                }
            }

            function Z(a, b) {
                tb.varargs = b;
                try {
                    var c = tb.getStreamFromFD();
                    return ob.close(c), 0
                } catch (d) {
                    return "undefined" != typeof ob && d instanceof ob.ErrnoError || sa(d), -d.errno
                }
            }

            function $() {
            }

            function _() {
                ua.abort()
            }

            function aa(a, b, c) {
                return Ga.set(Ga.subarray(b, b + c), a), a
            }

            function ba(a) {
                return ua.___errno_location ? Ja[ua.___errno_location() >> 2] = a : Ca("failed to set errno from JS"), a
            }

            function ca(a) {
                Ca("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), Ca("Build with ASSERTIONS=2 for more info."), sa(a)
            }

            function da(a) {
                Ca("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), Ca("Build with ASSERTIONS=2 for more info."), sa(a)
            }

            function ea(a) {
                Ca("Invalid function pointer called with signature 'v'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), Ca("Build with ASSERTIONS=2 for more info."), sa(a)
            }

            function fa(a) {
                Ca("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), Ca("Build with ASSERTIONS=2 for more info."), sa(a)
            }

            function ga(a) {
                Ca("Invalid function pointer called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), Ca("Build with ASSERTIONS=2 for more info."), sa(a)
            }

            function ha(a) {
                Ca("Invalid function pointer called with signature 'viiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), Ca("Build with ASSERTIONS=2 for more info."), sa(a)
            }

            function ia(a) {
                Ca("Invalid function pointer called with signature 'viiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)"), Ca("Build with ASSERTIONS=2 for more info."), sa(a)
            }

            function ja(a, b) {
                var c = Ub();
                try {
                    return ua.dynCall_ii(a, b)
                } catch (d) {
                    if (Tb(c), "number" != typeof d && "longjmp" !== d) throw d;
                    ua.setThrew(1, 0)
                }
            }

            function ka(a, b, c, d) {
                var e = Ub();
                try {
                    return ua.dynCall_iiii(a, b, c, d)
                } catch (f) {
                    if (Tb(e), "number" != typeof f && "longjmp" !== f) throw f;
                    ua.setThrew(1, 0)
                }
            }

            function la(a) {
                var b = Ub();
                try {
                    ua.dynCall_v(a)
                } catch (c) {
                    if (Tb(b), "number" != typeof c && "longjmp" !== c) throw c;
                    ua.setThrew(1, 0)
                }
            }

            function ma(a, b) {
                var c = Ub();
                try {
                    ua.dynCall_vi(a, b)
                } catch (d) {
                    if (Tb(c), "number" != typeof d && "longjmp" !== d) throw d;
                    ua.setThrew(1, 0)
                }
            }

            function na(a, b, c, d, e) {
                var f = Ub();
                try {
                    ua.dynCall_viiii(a, b, c, d, e)
                } catch (g) {
                    if (Tb(f), "number" != typeof g && "longjmp" !== g) throw g;
                    ua.setThrew(1, 0)
                }
            }

            function oa(a, b, c, d, e, f) {
                var g = Ub();
                try {
                    ua.dynCall_viiiii(a, b, c, d, e, f)
                } catch (h) {
                    if (Tb(g), "number" != typeof h && "longjmp" !== h) throw h;
                    ua.setThrew(1, 0)
                }
            }

            function pa(a, b, c, d, e, f, g) {
                var h = Ub();
                try {
                    ua.dynCall_viiiiii(a, b, c, d, e, f, g)
                } catch (i) {
                    if (Tb(h), "number" != typeof i && "longjmp" !== i) throw i;
                    ua.setThrew(1, 0)
                }
            }

            function qa(a) {
                this.name = "ExitStatus", this.message = "Program terminated with exit(" + a + ")", this.status = a
            }

            function ra(a) {
                function b() {
                    ua.calledRun || (ua.calledRun = !0, Xa || (F(), G(), ua.onRuntimeInitialized && ua.onRuntimeInitialized(), g(!ua._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), H()))
                }

                a = a || ua.arguments, kb > 0 || (x(), E(), kb > 0 || ua.calledRun || (ua.setStatus ? (ua.setStatus("Running..."), setTimeout(function () {
                    setTimeout(function () {
                        ua.setStatus("")
                    }, 1), b()
                }, 1)) : b(), y()))
            }

            function sa(a) {
                ua.onAbort && ua.onAbort(a), void 0 !== a ? (Ba(a), Ca(a), a = JSON.stringify(a)) : a = "", Xa = !0, Ya = 1;
                var b = "", c = "abort(" + a + ") at " + t() + b;
                throw Vb && Vb.forEach(function (b) {
                    c = b(c, a)
                }), c
            }

            var ta, ua = "undefined" != typeof Txplayer.ckeyModule ? Txplayer.ckeyModule : {}, va = {};
            for (ta in ua) ua.hasOwnProperty(ta) && (va[ta] = ua[ta]);
            ua.arguments = [], ua.thisProgram = "./this.program", ua.quit = function (a, b) {
                throw b
            }, ua.preRun = [], ua.postRun = [];
            var wa = !1, xa = !1, ya = !1, za = !1;
            if (wa = "object" == typeof window, xa = "function" == typeof importScripts, ya = "object" == typeof b && !0 && !wa && !xa, za = !wa && !ya && !xa, ua.ENVIRONMENT) throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
            var Aa = "";
            if (!wa && !xa) throw new Error("environment detection error");
            ua.read = function (a) {
                var b = new XMLHttpRequest;
                return b.open("GET", a, !1), b.send(null), b.responseText
            }, xa && (ua.readBinary = function (a) {
                var b = new XMLHttpRequest;
                return b.open("GET", a, !1), b.responseType = "arraybuffer", b.send(null), new Uint8Array(b.response)
            }), ua.readAsync = function (a, b, c) {
                var d = new XMLHttpRequest;
                d.open("GET", a, !0), d.responseType = "arraybuffer", d.onload = function () {
                    return 200 == d.status || 0 == d.status && d.response ? void b(d.response) : void c()
                }, d.onerror = c, d.send(null)
            }, ua.setWindowTitle = function (a) {
                document.title = a
            };
            var Ba = ua.print || ("undefined" != typeof console ? void 0 : "undefined" != typeof print ? print : null),
                Ca = ua.printErr || ("undefined" != typeof printErr ? printErr : "undefined" != typeof console && void 0 || Ba);
            for (ta in va) va.hasOwnProperty(ta) && (ua[ta] = va[ta]);
            va = void 0, g("undefined" == typeof ua.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), g("undefined" == typeof ua.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), g("undefined" == typeof ua.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), g("undefined" == typeof ua.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
            var Da = 16;
            Ub = Tb = Sb = Rb = Qb = function () {
                sa("cannot use the stack before compiled code is ready to run, and has provided stack access")
            };
            var Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va = {
                    "f64-rem": function (a, b) {
                        return a % b
                    }, "debugger": function () {
                    }
                }, Wa = (new Array(0), 1024), Xa = !1, Ya = 0, Za = {
                    stackSave: function () {
                        Ub()
                    }, stackRestore: function () {
                        Tb()
                    }, arrayToC: function (a) {
                        var b = Sb(a.length);
                        return K(a, b), b
                    }, stringToC: function (a) {
                        var b = 0;
                        if (null !== a && void 0 !== a && 0 !== a) {
                            var c = (a.length << 2) + 1;
                            b = Sb(c), o(a, b, c)
                        }
                        return b
                    }
                }, $a = {string: Za.stringToC, array: Za.arrayToC},
                _a = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0,
                ab = ("undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, 65536), bb = 16777216;
            Na = Oa = Qa = Ra = Sa = Ta = Ua = 0, Pa = !1;
            var cb = ua.TOTAL_STACK || 5242880, db = ua.TOTAL_MEMORY || 16777216;
            if (db < cb && Ca("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + db + "! (TOTAL_STACK=" + cb + ")"), g("undefined" != typeof Int32Array && "undefined" != typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support"), ua.buffer ? (Ea = ua.buffer, g(Ea.byteLength === db, "provided buffer should be " + db + " bytes, but it is " + Ea.byteLength)) : ("object" == typeof WebAssembly && "function" == typeof WebAssembly.Memory ? (g(db % ab === 0), ua.wasmMemory = new WebAssembly.Memory({
                initial: db / ab,
                maximum: db / ab
            }), Ea = ua.wasmMemory.buffer) : Ea = new ArrayBuffer(db), g(Ea.byteLength === db), ua.buffer = Ea), w(), Ja[0] = 1668509029, Ha[1] = 25459, 115 !== Ga[2] || 99 !== Ga[3]) throw"Runtime error: expected the system to be little-endian!";
            var eb = [], fb = [], gb = [], hb = [], ib = !1, jb = !1;
            g(Math.imul && Math.fround && Math.clz32 && Math.trunc, "this is a legacy browser, build with LEGACY_VM_SUPPORT");
            var kb = (Math.abs, Math.cos, Math.sin, Math.tan, Math.acos, Math.asin, Math.atan, Math.atan2, Math.exp, Math.log, Math.sqrt, Math.ceil, Math.floor, Math.pow, Math.imul, Math.fround, Math.round, Math.min, Math.max, Math.clz32, Math.trunc, 0),
                lb = null, mb = null, nb = {};
            ua.preloadedImages = {}, ua.preloadedAudios = {};
            var ob = {
                error: function () {
                    sa("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1")
                }, init: function () {
                    ob.error()
                }, createDataFile: function () {
                    ob.error()
                }, createPreloadedFile: function () {
                    ob.error()
                }, createLazyFile: function () {
                    ob.error()
                }, open: function () {
                    ob.error()
                }, mkdev: function () {
                    ob.error()
                }, registerDevice: function () {
                    ob.error()
                }, analyzePath: function () {
                    ob.error()
                }, loadFilesFromDB: function () {
                    ob.error()
                }, ErrnoError: function () {
                    ob.error()
                }
            };
            ua.FS_createDataFile = ob.createDataFile, ua.FS_createPreloadedFile = ob.createPreloadedFile;
            var pb = "data:application/octet-stream;base64,";
            O();
            Na = Wa, Oa = Na + 6928, fb.push();
            var qb = 6928;
            ua.STATIC_BASE = Na, ua.STATIC_BUMP = qb;
            var rb = Oa;
            Oa += 16, g(rb % 8 == 0);
            var sb = {
                last: 0, caught: [], infos: {}, deAdjust: function (a) {
                    if (!a || sb.infos[a]) return a;
                    for (var b in sb.infos) {
                        var c = +b, d = sb.infos[c];
                        if (d.adjusted === a) return c
                    }
                    return a
                }, addRef: function (a) {
                    if (a) {
                        var b = sb.infos[a];
                        b.refcount++
                    }
                }, decRef: function (a) {
                    if (a) {
                        var b = sb.infos[a];
                        g(b.refcount > 0), b.refcount--, 0 !== b.refcount || b.rethrown || (b.destructor && ua.dynCall_vi(b.destructor, a), delete sb.infos[a], ___cxa_free_exception(a))
                    }
                }, clearRef: function (a) {
                    if (a) {
                        var b = sb.infos[a];
                        b.refcount = 0
                    }
                }
            }, tb = {
                buffers: [null, [], []], printChar: function (a, b) {
                    var c = tb.buffers[a];
                    g(c), 0 === b || 10 === b ? ((1 === a ? Ba : Ca)(l(c, 0)), c.length = 0) : c.push(b)
                }, varargs: 0, get: function (a) {
                    tb.varargs += 4;
                    var b = Ja[tb.varargs - 4 >> 2];
                    return b
                }, getStr: function () {
                    var a = k(tb.get());
                    return a
                }, get64: function () {
                    var a = tb.get(), b = tb.get();
                    return g(a >= 0 ? 0 === b : b === -1), a
                }, getZero: function () {
                    g(0 === tb.get())
                }
            };
            Ua = d(4), Qa = Ra = e(Oa), Sa = Qa + cb, Ta = e(Sa), Ja[Ua >> 2] = Ta, Pa = !0, g(Ta < db, "TOTAL_MEMORY not big enough for stack");
            ua.wasmTableSize = 99, ua.wasmMaxTableSize = 99, ua.asmGlobalArg = {}, ua.asmLibraryArg = {
                abort: sa,
                assert: g,
                enlargeMemory: B,
                getTotalMemory: C,
                abortOnCannotGrowMemory: A,
                abortStackOverflow: z,
                nullFunc_ii: ca,
                nullFunc_iiii: da,
                nullFunc_v: ea,
                nullFunc_vi: fa,
                nullFunc_viiii: ga,
                nullFunc_viiiii: ha,
                nullFunc_viiiiii: ia,
                invoke_ii: ja,
                invoke_iiii: ka,
                invoke_v: la,
                invoke_vi: ma,
                invoke_viiii: na,
                invoke_viiiii: oa,
                invoke_viiiiii: pa,
                __ZSt18uncaught_exceptionv: Q,
                ___cxa_find_matching_catch: S,
                ___gxx_personality_v0: T,
                ___lock: U,
                ___resumeException: R,
                ___setErrNo: ba,
                ___syscall140: V,
                ___syscall146: X,
                ___syscall54: Y,
                ___syscall6: Z,
                ___unlock: $,
                _abort: _,
                _emscripten_memcpy_big: aa,
                _get_unicode_str: P,
                flush_NO_FILESYSTEM: W,
                DYNAMICTOP_PTR: Ua,
                tempDoublePtr: rb,
                STACKTOP: Ra,
                STACK_MAX: Sa
            };
            var ub = ua.asm(ua.asmGlobalArg, ua.asmLibraryArg, Ea), vb = ub.___cxa_can_catch;
            ub.___cxa_can_catch = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), vb.apply(null, arguments)
            };
            var wb = ub.___cxa_is_pointer_type;
            ub.___cxa_is_pointer_type = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), wb.apply(null, arguments)
            };
            var xb = ub.___em_js__get_unicode_str;
            ub.___em_js__get_unicode_str = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), xb.apply(null, arguments)
            };
            var yb = ub.___errno_location;
            ub.___errno_location = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), yb.apply(null, arguments)
            };
            var zb = ub._ckeytest;
            ub._ckeytest = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), zb.apply(null, arguments)
            };
            var Ab = ub._fflush;
            ub._fflush = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Ab.apply(null, arguments)
            };
            var Bb = ub._free;
            ub._free = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Bb.apply(null, arguments)
            };
            var Cb = ub._getckey;
            ub._getckey = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Cb.apply(null, arguments)
            };
            var Db = ub._llvm_bswap_i16;
            ub._llvm_bswap_i16 = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Db.apply(null, arguments)
            };
            var Eb = ub._llvm_bswap_i32;
            ub._llvm_bswap_i32 = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Eb.apply(null, arguments)
            };
            var Fb = ub._malloc;
            ub._malloc = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Fb.apply(null, arguments)
            };
            var Gb = ub._memmove;
            ub._memmove = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Gb.apply(null, arguments)
            };
            var Hb = ub._sbrk;
            ub._sbrk = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"),
                    g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Hb.apply(null, arguments)
            };
            var Ib = ub.establishStackSpace;
            ub.establishStackSpace = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Ib.apply(null, arguments)
            };
            var Jb = ub.getTempRet0;
            ub.getTempRet0 = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Jb.apply(null, arguments)
            };
            var Kb = ub.setTempRet0;
            ub.setTempRet0 = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Kb.apply(null, arguments)
            };
            var Lb = ub.setThrew;
            ub.setThrew = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Lb.apply(null, arguments)
            };
            var Mb = ub.stackAlloc;
            ub.stackAlloc = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Mb.apply(null, arguments)
            };
            var Nb = ub.stackRestore;
            ub.stackRestore = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Nb.apply(null, arguments)
            };
            var Ob = ub.stackSave;
            ub.stackSave = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), Ob.apply(null, arguments)
            }, ua.asm = ub;
            var Pb = (ua.___cxa_can_catch = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.___cxa_can_catch.apply(null, arguments)
            }, ua.___cxa_is_pointer_type = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.___cxa_is_pointer_type.apply(null, arguments)
            }, ua.___em_js__get_unicode_str = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.___em_js__get_unicode_str.apply(null, arguments)
            }, ua.___errno_location = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.___errno_location.apply(null, arguments)
            }, ua._ckeytest = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._ckeytest.apply(null, arguments)
            }, ua._fflush = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._fflush.apply(null, arguments)
            }, ua._free = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._free.apply(null, arguments)
            }, ua._getckey = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._getckey.apply(null, arguments)
            }, ua._llvm_bswap_i16 = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._llvm_bswap_i16.apply(null, arguments)
            }, ua._llvm_bswap_i32 = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._llvm_bswap_i32.apply(null, arguments)
            }, ua._malloc = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._malloc.apply(null, arguments)
            }), Qb = (ua._memcpy = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._memcpy.apply(null, arguments)
            }, ua._memmove = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._memmove.apply(null, arguments)
            }, ua._memset = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._memset.apply(null, arguments)
            }, ua._sbrk = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm._sbrk.apply(null, arguments)
            }, ua.establishStackSpace = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.establishStackSpace.apply(null, arguments)
            }, ua.getTempRet0 = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.getTempRet0.apply(null, arguments)
            }), Rb = (ua.runPostSets = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.runPostSets.apply(null, arguments)
            }, ua.setTempRet0 = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.setTempRet0.apply(null, arguments)
            }), Sb = (ua.setThrew = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.setThrew.apply(null, arguments)
            }, ua.stackAlloc = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.stackAlloc.apply(null, arguments)
            }), Tb = ua.stackRestore = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.stackRestore.apply(null, arguments)
            }, Ub = ua.stackSave = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.stackSave.apply(null, arguments)
            };
            ua.dynCall_ii = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.dynCall_ii.apply(null, arguments)
            }, ua.dynCall_iiii = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.dynCall_iiii.apply(null, arguments)
            }, ua.dynCall_v = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.dynCall_v.apply(null, arguments)
            }, ua.dynCall_vi = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.dynCall_vi.apply(null, arguments)
            }, ua.dynCall_viiii = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.dynCall_viiii.apply(null, arguments)
            }, ua.dynCall_viiiii = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.dynCall_viiiii.apply(null, arguments)
            }, ua.dynCall_viiiiii = function () {
                return g(ib, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)"), g(!jb, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)"), ua.asm.dynCall_viiiiii.apply(null, arguments)
            };
            ua.asm = ub, ua.intArrayFromString || (ua.intArrayFromString = function () {
                sa("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.intArrayToString || (ua.intArrayToString = function () {
                sa("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.ccall = i, ua.cwrap = j, ua.setValue || (ua.setValue = function () {
                sa("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.getValue || (ua.getValue = function () {
                sa("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.allocate || (ua.allocate = function () {
                sa("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.getMemory || (ua.getMemory = function () {
                sa("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.Pointer_stringify || (ua.Pointer_stringify = function () {
                sa("'Pointer_stringify' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.AsciiToString || (ua.AsciiToString = function () {
                sa("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.stringToAscii || (ua.stringToAscii = function () {
                sa("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.UTF8ArrayToString || (ua.UTF8ArrayToString = function () {
                sa("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.UTF8ToString || (ua.UTF8ToString = function () {
                sa("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.stringToUTF8Array || (ua.stringToUTF8Array = function () {
                sa("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.stringToUTF8 || (ua.stringToUTF8 = function () {
                sa("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.lengthBytesUTF8 || (ua.lengthBytesUTF8 = function () {
                sa("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.UTF16ToString || (ua.UTF16ToString = function () {
                sa("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.stringToUTF16 || (ua.stringToUTF16 = function () {
                sa("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.lengthBytesUTF16 || (ua.lengthBytesUTF16 = function () {
                sa("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.UTF32ToString || (ua.UTF32ToString = function () {
                sa("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.stringToUTF32 || (ua.stringToUTF32 = function () {
                sa("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.lengthBytesUTF32 || (ua.lengthBytesUTF32 = function () {
                sa("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.allocateUTF8 || (ua.allocateUTF8 = function () {
                sa("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.stackTrace || (ua.stackTrace = function () {
                sa("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.addOnPreRun || (ua.addOnPreRun = function () {
                sa("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.addOnInit || (ua.addOnInit = function () {
                sa("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.addOnPreMain || (ua.addOnPreMain = function () {
                sa("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.addOnExit || (ua.addOnExit = function () {
                sa("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.addOnPostRun || (ua.addOnPostRun = function () {
                sa("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.writeStringToMemory || (ua.writeStringToMemory = function () {
                sa("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.writeArrayToMemory || (ua.writeArrayToMemory = function () {
                sa("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.writeAsciiToMemory || (ua.writeAsciiToMemory = function () {
                sa("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.addRunDependency || (ua.addRunDependency = function () {
                sa("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.removeRunDependency || (ua.removeRunDependency = function () {
                sa("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.ENV || (ua.ENV = function () {
                sa("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.FS || (ua.FS = function () {
                sa("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.FS_createFolder || (ua.FS_createFolder = function () {
                sa("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.FS_createPath || (ua.FS_createPath = function () {
                sa("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.FS_createDataFile || (ua.FS_createDataFile = function () {
                sa("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.FS_createPreloadedFile || (ua.FS_createPreloadedFile = function () {
                sa("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.FS_createLazyFile || (ua.FS_createLazyFile = function () {
                sa("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.FS_createLink || (ua.FS_createLink = function () {
                sa("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.FS_createDevice || (ua.FS_createDevice = function () {
                sa("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.FS_unlink || (ua.FS_unlink = function () {
                sa("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you")
            }), ua.GL || (ua.GL = function () {
                sa("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.staticAlloc || (ua.staticAlloc = function () {
                sa("'staticAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.dynamicAlloc || (ua.dynamicAlloc = function () {
                sa("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.warnOnce || (ua.warnOnce = function () {
                sa("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.loadDynamicLibrary || (ua.loadDynamicLibrary = function () {
                sa("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.loadWebAssemblyModule || (ua.loadWebAssemblyModule = function () {
                sa("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.getLEB || (ua.getLEB = function () {
                sa("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.getFunctionTables || (ua.getFunctionTables = function () {
                sa("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.alignFunctionTables || (ua.alignFunctionTables = function () {
                sa("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.registerFunctions || (ua.registerFunctions = function () {
                sa("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.addFunction || (ua.addFunction = function () {
                sa("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.removeFunction || (ua.removeFunction = function () {
                sa("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.getFuncWrapper || (ua.getFuncWrapper = function () {
                sa("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.prettyPrint || (ua.prettyPrint = function () {
                sa("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.makeBigInt || (ua.makeBigInt = function () {
                sa("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.dynCall || (ua.dynCall = function () {
                sa("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.getCompilerSetting || (ua.getCompilerSetting = function () {
                sa("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.stackSave || (ua.stackSave = function () {
                sa("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.stackRestore || (ua.stackRestore = function () {
                sa("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.stackAlloc || (ua.stackAlloc = function () {
                sa("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.establishStackSpace || (ua.establishStackSpace = function () {
                sa("'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.print || (ua.print = function () {
                sa("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.printErr || (ua.printErr = function () {
                sa("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
            }), ua.ALLOC_NORMAL || Object.defineProperty(ua, "ALLOC_NORMAL", {
                get: function () {
                    sa("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
                }
            }), ua.ALLOC_STACK || Object.defineProperty(ua, "ALLOC_STACK", {
                get: function () {
                    sa("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
                }
            }), ua.ALLOC_STATIC || Object.defineProperty(ua, "ALLOC_STATIC", {
                get: function () {
                    sa("'ALLOC_STATIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
                }
            }), ua.ALLOC_DYNAMIC || Object.defineProperty(ua, "ALLOC_DYNAMIC", {
                get: function () {
                    sa("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
                }
            }), ua.ALLOC_NONE || Object.defineProperty(ua, "ALLOC_NONE", {
                get: function () {
                    sa("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)")
                }
            }), qa.prototype = new Error, qa.prototype.constructor = qa;
            mb = function Wb() {
                ua.calledRun || ra(), ua.calledRun || (mb = Wb)
            }, ua.run = ra;
            var Vb = [];
            if (ua.abort = sa, ua.preInit) for ("function" == typeof ua.preInit && (ua.preInit = [ua.preInit]); ua.preInit.length > 0;) ua.preInit.pop()();
            ua.noExitRuntime = !0, ra(), a.exports = ua
        }).call(b, c(138))
    }, 290: function (a, b, c) {
        var d = Txplayer.util, e = c(291);
        a.exports = {
            playControl: function (a) {
                var b = Txplayer.$, c = this;
                if (c.context.dataset.playerWidth = c.context.dataset.$playermod.width(), c.context.dataset.playerHeight = c.context.dataset.$playermod.height(), "string" === b.type(a) ? a = {vid: a} : "undefined" === b.type(a) && (a = {}), a.vid || (a.vid = this.context.dataset.vid), !a.vid || 11 !== a.vid.length) throw new Error("vid is illegal");
                if (this.context.dataset.canPlayTime && this.context.dataset.currentTime >= this.context.dataset.canPlayTime && a.vid === this.context.dataset.vid) return void (this.context.dataset.getinfoJSON && 4 == this.context.dataset.getinfoJSON.exem ? this.showDujiaDialog() : this.showUIVipGuide("trial"));
                if (1 !== this.context.dataset.playState && !this.context.dataset.isPlayingAd || a.vid !== this.context.dataset.vid) {
                    if (a.vid == this.context.dataset.vid) {
                        if (this.dataset.hasVideoPlayed) return void this.context.msg.broadcast("play");
                        if (this.context.dataset.playList && this.context.dataset.playList.length) return void this.context.msg.broadcast("setFocusVideoUrl", b.extend({}, this.context.dataset.playList[0], {autoplay: !0}))
                    }
                    a.autoplay = !0, this.checkLanguageSwitch(a), a.hasOwnProperty("cid") && (this.context.dataset.cid = a.cid), a.hasOwnProperty("triggerplay") && (this.context.config.triggerplay = a.triggerplay), a.hasOwnProperty("columnId") && (this.context.dataset.columnId = a.columnId), a.hasOwnProperty("autoplay") && (this.context.dataset.autoplay = a.autoplay), a.hasOwnProperty("isNeedPay") && (this.context.dataset.isNeedPay = a.isNeedPay), a.hasOwnProperty("nextVid") && (this.context.dataset.nextVid = a.nextVid), a.hasOwnProperty("showBullet") && (this.context.config.showBullet = a.showBullet || this.context.config.showBullet || !1), a.hasOwnProperty("playEndTime") && a.playEndTime && a.hasOwnProperty("duration") ? (this.context.config.playEndTime = parseInt(a.playEndTime), this.context.dataset.playEndTime = parseInt(a.duration) - parseInt(a.playEndTime), this.context.dataset.playEndTime < 0 && (this.context.dataset.playEndTime = null)) : a.hasOwnProperty("vid") && a.vid !== this.context.dataset.vid && (this.context.dataset.playEndTime = null, this.context.config.playEndTime = 0), a.hasOwnProperty("trailerMode") && a.trailerMode ? this.context.dataset.trailerMode = !0 : this.context.dataset.trailerMode = !1, this.context.dataset.connectionPlayTime = a.connectionPlayTime ? a.connectionPlayTime : 0, a.connectionPlayTime && this.context.config.duration && Math.abs(+a.connectionPlayTime - +this.context.config.duration) < 1 && (this.context.dataset.connectionPlayTime = a.connectionPlayTime = 0), this.context.dataset.playStartTime = a.playStartTime ? a.playStartTime : 0, delete c.context.dataset.hlsLoadStartTime, this.context.dataset.connectionPlayType = a.hasOwnProperty("connectionPlayType") ? a.connectionPlayType : 0, a.hasOwnProperty("connectionPlayType") || a.vid === this.context.dataset.vid || (this.context.dataset.connectionPlayType = 3), a.hasOwnProperty("title") && (this.context.dataset.title = d.xss(a.title)), a.authext && (this.context.dataset.authext = a.authext), a.eduext && (this.context.dataset.eduext = a.eduext), this.context.dataset.isAnNewPlayAction = !!a.isAnNewPlayAction, this.dataset.hasVideoPlayed = !1, this.dataset.hasLoadVideoUrl = !1;
                    var f = this.context.dataset.vid;
                    a.hasOwnProperty("vid") && this.setVid(a.vid), this.context.msg.broadcast("beforeVideoPlay", this.context.dataset.vid, f), this.initNextVid();
                    var g = {};
                    g.playStartTime = c.getSkipPreludeTime(), g.connectionPlayTime = c.context.dataset.connectionPlayTime, d.v4log("main-playcontrol:loadVideoUrls", g), "nintendo" === c.context.config.playerType ? (c.context.config.browserDisableAutoPlay = !1, c.loadVideoUrls(g)) : e.video().then(function (a) {
                        if (a.result === !0) c.context.config.browserDisableAutoPlay = !1, c.loadVideoUrls(g); else {
                            var b = a.error && a.error.name;
                            if (/NotAllow/i.test(b) && d.browser.safari) return;
                            c.context.config.autoPlayInMute && (c.context.config.browserDisableAutoPlay = !0, c.context.userApi.setVolume(0), c.context.userApi.mute(), c.loadVideoUrls(g))
                        }
                    })
                }
            }, initNextVid: function () {
                var a = this;
                "array" == Txplayer.$.type(Txplayer.dataset.isReadyPlugins) && Txplayer.dataset.isReadyPlugins.indexOf("UiPlayNext") != -1 ? this.context.msg.broadcast("setNextVid", {nextVid: this.context.dataset.nextVid}) : this.context.msg.on("pluginReady", function (b) {
                    "UiPlayNext" == b.name && a.context.msg.broadcast("setNextVid", {nextVid: a.context.dataset.nextVid})
                })
            }, setVid: function (a) {
                if (a && a !== this.context.dataset.vid) {
                    d.showInfo("HdPlayerControl.onVidChange", {currentVid: this.context.dataset.vid, nextVid: a});
                    var b = this.context.dataset.vid;
                    this.context.dataset.vid = a, this.context.msg.broadcast("vidChange", a, b), this.context.dataset.hasCallSetVid = !0;
                    try {
                        this.context.userMsg.broadcast("vidChange", a, b)
                    } catch (c) {
                    }
                    this.updatePlayerId()
                }
            }, updatePlayerId: function () {
                this.context.dataset.playerId = d.createGUID(), this.context.dataset.flowid = this.context.dataset.playerId + "_" + this.context.dataset.platform
            }, pauseControl: function () {
                this.context.dataset.disableHotKey || this.context.dataset.isPlayingAd || this.context.msg.broadcast("pause")
            }
        }
    }, 291: function (a, b) {
        function c(a) {
            return Object.assign({muted: !1, timeout: 2e3, inline: !1}, a)
        }

        function d(a, b) {
            var c = a.muted, d = a.timeout, e = a.inline, f = b(), g = f.element, h = f.source, i = void 0, j = void 0,
                k = void 0;
            if (g.muted = c, c === !0 && g.setAttribute("muted", "muted"), e === !0 && g.setAttribute("playsinline", "playsinline"), g.src = h, "undefined" != typeof window.Promise) return new window.Promise(function (a) {
                i = g.play(), j = setTimeout(function () {
                    k(!1, new Error("Timeout " + d + " ms has been reached"))
                }, d), k = function (b) {
                    var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    clearTimeout(j), a({result: b, error: c})
                }, void 0 !== i ? i.then(function () {
                    return k(!0)
                })["catch"](function (a) {
                    return k(!1, a)
                }) : k(!0)
            });
            var l = Txplayer.$.Deferred();
            return i = g.play(), j = setTimeout(function () {
                k(!1, new Error("Timeout " + d + " ms has been reached"))
            }, d), k = function (a) {
                var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                clearTimeout(j), l.resolve({result: a, error: b})
            }, void 0 !== i ? i.then(function () {
                return k(!0)
            })["catch"](function (a) {
                return k(!1, a)
            }) : setTimeout(function () {
                k(!0)
            }), l
        }

        function e(a) {
            return a = c(a), d(a, function () {
                return {element: document.createElement("video"), source: URL.createObjectURL(h)}
            })
        }

        function f(a) {
            return a = c(a), d(a, function () {
                return {element: document.createElement("audio"), source: URL.createObjectURL(g)}
            })
        }

        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function (a, b) {
                "use strict";
                if (null == a) throw new TypeError("Cannot convert undefined or null to object");
                for (var c = Object(a), d = 1; d < arguments.length; d++) {
                    var e = arguments[d];
                    if (null != e) for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (c[f] = e[f])
                }
                return c
            }, writable: !0, configurable: !0
        });
        var g = new Blob([new Uint8Array([255, 227, 24, 196, 0, 0, 0, 3, 72, 1, 64, 0, 0, 4, 132, 16, 31, 227, 192, 225, 76, 255, 67, 12, 255, 221, 27, 255, 228, 97, 73, 63, 255, 195, 131, 69, 192, 232, 223, 255, 255, 207, 102, 239, 255, 255, 255, 101, 158, 206, 70, 20, 59, 255, 254, 95, 70, 149, 66, 4, 16, 128, 0, 2, 2, 32, 240, 138, 255, 36, 106, 183, 255, 227, 24, 196, 59, 11, 34, 62, 80, 49, 135, 40, 0, 253, 29, 191, 209, 200, 141, 71, 7, 255, 252, 152, 74, 15, 130, 33, 185, 6, 63, 255, 252, 195, 70, 203, 86, 53, 15, 255, 255, 247, 103, 76, 121, 64, 32, 47, 255, 34, 227, 194, 209, 138, 76, 65, 77, 69, 51, 46, 57, 55, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 255, 227, 24, 196, 73, 13, 153, 210, 100, 81, 135, 56, 0, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170])], {type: "audio/mpeg"}),
            h = new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {
                type: "video/mp4"
            }), i = {audio: f, video: e};
        a.exports = i
    }, 292: function (a, b) {
        var c = Txplayer.util;
        a.exports = {
            seekTo: function (a) {
                function b() {
                    i === j.index ? e.context.msg.broadcast("setFocusVideoCurrentTime", {
                        time: f - j.prevDurtion,
                        autoplay: !0
                    }) : e.context.dataset.playList[j.index] && (g = e.context.dataset.playList[j.index], g.autoplay = !0, g.currentTime = f - j.prevDurtion, g.updateIndex = j.index, e.context.msg.broadcast("setFocusVideoUrl", g))
                }

                var d = Txplayer.$, e = this;
                if ("object" === d.type(a) && a.showTips && (this.dataset.seekToSyncFlag = !0), !this.context.dataset.isPlayingAd) {
                    if (0 === this.context.dataset.playState) return void c.showError("\u64ad\u653e\u5df2\u7ed3\u675f\uff0c\u4e0d\u80fdseek");
                    if (this.context.dataset.playState === -1) return void c.showError("\u64ad\u653e\u72b6\u6001\u672a\u521d\u59cb\u5316\uff0c\u4e0d\u80fdseek", "seekTo");
                    if (!this.context.dataset.disableHotKey) {
                        var f, g, h, i, j, k, l, m, n = this.context.dataset.currentTime,
                            o = "object" !== d.type(a) || !a.hasOwnProperty("connectionPlayTime") && !a.hasOwnProperty("playStartTime") && !a.hasOwnProperty("historyTime") && !a.hasOwnProperty("showTips") && !a.hasOwnProperty("doNotReport");
                        if (a && "object" === d.type(a) && (a.time && "string" == typeof a.time && /^\d+$/.test(a.time) && (a.time = Number(a.time)), a.connectionPlayTime && "string" == typeof a.connectionPlayTime && /^\d+$/.test(a.connectionPlayTime) && (a.connectionPlayTime = Number(a.connectionPlayTime)), a.playStartTime && "string" == typeof a.playStartTime && /^\d+$/.test(a.playStartTime) && (a.playStartTime = Number(a.playStartTime))), "object" === d.type(a) ? f = "number" === d.type(a.time) ? a.time : "number" === d.type(a.connectionPlayTime) ? a.connectionPlayTime : "number" === d.type(a.playStartTime) ? a.playStartTime : null : "number" === d.type(a) && (f = a, a = {}), "number" !== d.type(f)) return void c.error("seekTo\u53c2\u6570\u9519: \u53c2\u6570\u5fc5\u987b\u4e3anumber(" + f + ")");
                        if (f < 0 && (f = 0), "number" === d.type(f) && f <= this.context.dataset.duration && ("number" !== d.type(this.context.dataset.canPlayTime) || f <= this.context.dataset.canPlayTime) && this.updateCurrentTime(f, "seekTo"), h = this.context.dataset.duration, f > h) return void c.showError("seekTo\u53c2\u6570\u9519\u8bef: seekTime[" + f + "]\u4e0d\u80fd\u8d85\u8fc7\u89c6\u9891\u7684\u65f6\u957f[" + h + "]", "");
                        "number" == d.type(this.context.dataset.canPlayTime) && f > this.context.dataset.canPlayTime && (f = this.context.dataset.canPlayTime - 1), j = this.getVideoSeekToInfo(f), i = this.context.dataset.playListIndex, k = +new Date, this.context.dataset.isVideoSeeking = !0, c.v4log("seekStart ", {isVideoSeeking: this.context.dataset.isVideoSeeking}), this.context.msg.broadcast("seekStart", {
                            type: "film",
                            seekTime: f,
                            seekIndex: j.index,
                            seekStartTime: k,
                            currentTimeWhenSeekStart: n,
                            isUserAction: o
                        });
                        try {
                            this.context.userMsg.broadcast("seekStart", {
                                type: "film",
                                seekTime: f,
                                seekIndex: j.index,
                                seekStartTime: k,
                                currentTimeWhenSeekStart: n,
                                isUserAction: o
                            })
                        } catch (p) {
                        }
                        this.context.msg.off("videoSeeked.seekTo"), this.context.msg.once("videoSeeked.seekTo", function () {
                            l = +new Date, m = e.context.dataset.currentTime, e.context.msg.broadcast("seekEnd", {
                                seekStartTime: k,
                                seekEndTime: l,
                                seekTime: f,
                                currentTimeWhenSeekStart: n,
                                currentTimeWhenSeekEnd: m,
                                isUserAction: o
                            });
                            try {
                                e.context.userMsg.broadcast("seekEnd", {
                                    type: "film",
                                    seekStartTime: k,
                                    seekEndTime: l,
                                    seekTime: f,
                                    currentTimeWhenSeekStart: n,
                                    currentTimeWhenSeekEnd: m,
                                    isUserAction: o
                                })
                            } catch (a) {
                            }
                            Math.abs(f - m) > 5 && (e.context.dataset.retrySeekTo = !0, b())
                        }), e.context.msg.broadcast("pause"), b(), a.seekTime = f, e.context.msg.broadcast("showUiSeekTip", a), a.bulletid && e.context.msg.broadcast("barrageSeekTime", {
                            bulletid: a.bulletid,
                            time: f
                        })
                    }
                }
            }
        }
    }, 293: function (a, b) {
        function c() {
            var a = this, b = Txplayer.util;
            this.context.msg.on("onAdOrderDataReady", function (a) {
            }), this.context.msg.on("loadingAdStart", function (c) {
                if (b.v4log("loadingAdStart \u524d\u5e16\u5f00\u59cb\u64ad\u653e"), !a.context.dataset.hasLoadingAdStart) {
                    a.context.dataset.hasLoadingAdStart = !0, a.context.msg.broadcast("adVideoShow"), a.context.msg.broadcast("filmVideoHide", "loadingad");
                    try {
                        a.context.userMsg.broadcast("adStart", {type: "loadingad"}), a.context.msg.broadcast("adStart", {type: "loadingad"})
                    } catch (d) {
                    }
                }
            }), this.context.msg.on("loadingAdLoadComplete", function (c) {
                b.v4log("loadingAdLoadComplete \u524d\u5e16\u5168\u90e8\u4e0b\u8f7d\u5b8c\u6210 "), a.context.msg.broadcast("play", {
                    isPreloadFirstFilm: !0,
                    autoplay: !1
                }), a.context.dataset.isPreloadFilm = !0
            }), this.context.msg.on("loadingAdEnd", function (c) {
                b.v4log("loadingAdEnd \u524d\u5e16\u64ad\u653e\u7ed3\u675f"), a.context.msg.broadcast("adVideoHide"), a.context.msg.broadcast("filmVideoShow", "loadingad");
                try {
                    a.context.userMsg.broadcast("adEnd", {type: "loadingad"}), a.context.msg.broadcast("adEnd", {type: "loadingad"})
                } catch (d) {
                }
            }), this.context.msg.on("insertAdStart", function (c) {
                b.v4log("insertAdStart"), a.context.msg.broadcast("adVideoShow"), a.context.msg.broadcast("filmVideoHide", "insertad");
                try {
                    a.context.userMsg.broadcast("adStart", {type: "insertad"}), a.context.msg.broadcast("adStart", {type: "insertad"})
                } catch (d) {
                }
            }), this.context.msg.on("insertAdEnd", function (c) {
                b.v4log("insertAdEnd"), a.context.msg.broadcast("adVideoHide"), a.context.msg.broadcast("filmVideoShow", "insertad");
                try {
                    a.context.userMsg.broadcast("adEnd", {type: "insertad"}), a.context.msg.broadcast("adEnd", {type: "insertad"})
                } catch (d) {
                }
            }), this.context.msg.on("endingAdStart", function (c) {
                b.v4log("endingAdStart"), a.context.msg.broadcast("adVideoShow"), a.context.msg.broadcast("filmVideoHide", "endingad");
                try {
                    a.context.userMsg.broadcast("adStart", {type: "endingad"}), a.context.msg.broadcast("adStart", {type: "endingad"})
                } catch (d) {
                }
            }), this.context.msg.on("endingAdEnd", function (c) {
                if (!a.context.dataset.isFilmEnded) return b.v4log("isEndingAdEnded"), void (a.context.dataset.isEndingAdEnded = !0);
                b.v4log("endingAdEnd"), a.context.msg.broadcast("adVideoHide"), a.context.msg.broadcast("filmVideoShow", "endingad"), setTimeout(function () {
                    a.context.msg.broadcast("videoEnd", {
                        index: a.context.dataset.playListIndex,
                        playListType: "endingad",
                        isTheLastFilm: !0,
                        isAllEnd: !0,
                        from: "endingAdEnd"
                    });
                    try {
                        a.context.userMsg.broadcast("videoEnd", {isTheLastFilm: !0, isAllEnd: !0})
                    } catch (b) {
                    }
                }, 0);
                try {
                    a.context.userMsg.broadcast("adEnd", {type: "endingad"}), a.context.msg.broadcast("adEnd", {type: "endingad"})
                } catch (d) {
                }
            }), this.context.msg.on("pauseAdStart", function (b) {
                a.context.msg.broadcast("adVideoShow")
            }), this.context.msg.on("pauseAdEnd", function (b) {
                a.context.msg.broadcast("adVideoHide")
            }), this.context.msg.on("pvlAdStart", function (b) {
                a.context.msg.broadcast("loadingImageAdUrlReady", {url: b})
            })
        }

        a.exports = {dealAdMsgMoudle: c}
    }, 294: function (a, b) {
        function c() {
            var a = this;
            a.context.msg.on(d.getUniqueMsgKey("beforeVideoPlay"), function (b, c) {
                a.context.dataset.urlIndex = 0, a.context.dataset.getinfoJSON = null, a.context.dataset.requestNewGetinfoError = !1, a.context.dataset.filmVideoData = [], a.context.dataset.duration = null, a.context.dataset.disableHotKey = !1, a.context.dataset.hasLoadingAdStart = !1, a.updateCurrentTime(0, "beforeVideoPlay"), a.dataset.seekToSyncFlag = !1, a.context.msg.off("videoPlaying.loadAndSeekSync"), a.context.msg.off("getVideoUrlSuccess.loadVideoUrls"), a.context.msg.off("videoPlaying.showUiSeekTip")
            }), a.context.msg.on(d.getUniqueMsgKey("beforeVideoRePlay"), function (b, c) {
                a.dataset.hasVideoPlayed = !1, a.context.dataset.hasLoadingAdStart = !1, a.updateCurrentTime(0, "beforeVideoRePlay")
            }), this.context.msg.on(d.getUniqueMsgKey("videoPlaying"), function (b) {
                "film" === a.context.dataset.currentPlayListType && (a.dataset.hasVideoPlayed = !0)
            }), this.context.msg.on(d.getUniqueMsgKey("videoEnd"), function (b) {
                b.isTheLastFilm && "film" === b.playListType && (a.context.msg.off("videoSeeked.seekTo"), a.dataset.hasVideoPlayed = !1, a.context.dataset.getinfoJSON = null)
            }), this.context.msg.on("userStopVideo", function (b) {
                a.dataset.hasVideoPlayed = !1
            }), a.context.msg.on(d.getUniqueMsgKey("videoTimeUpdateWithHlsAd"), function (b) {
                if (b && "film" === b.playListType) {
                    var c = a.calcCurrentTime();
                    if (c && b && b.videoTag && b.videoTag.currentTime && a.updateCurrentTime(c, "onSectionTimeupdate"), a.context.dataset.canPlayTime) {
                        if (c && c >= a.context.dataset.canPlayTime && (a.context.dataset.getinfoJSON && 4 == a.context.dataset.getinfoJSON.exem ? a.showDujiaDialog() : a.showUIVipGuide("trial")), b && b.videoTag && Math.floor(b.videoTag.duration) !== a.context.dataset.canPlayTime) {
                            var d = a.context.dataset.canPlayTime - b.videoTag.duration;
                            d > 0 && d <= 3 && (a.context.dataset.canPlayTime = Math.floor(b.videoTag.duration))
                        }
                        a.showUnOfficialLimitTips()
                    }
                }
            }), a.context.msg.on(d.getUniqueMsgKey("videoPlaying"), function (b) {
                if (b && "film" === b.playListType && a.context.dataset.canPlayTime) {
                    var c = a.calcCurrentTime();
                    c && a.updateCurrentTime(c, "onSectionPlaying"), c && c >= a.context.dataset.canPlayTime && (a.context.dataset.getinfoJSON && 4 == a.context.dataset.getinfoJSON.exem ? a.showDujiaDialog() : a.showUIVipGuide("trial"))
                }
            }), a.context.msg.on(d.getUniqueMsgKey("seekStart"), function (b) {
                b && "film" === b.type && a.context.dataset.canPlayTime && b && b.seekTime && b.seekTime >= a.dataset.canPlayTime && (a.context.dataset.getinfoJSON && 4 == a.context.dataset.getinfoJSON.exem ? a.showDujiaDialog() : a.showUIVipGuide("trial"))
            }), a.context.msg.on(d.getUniqueMsgKey("videoEnd"), function (b) {
                b && "film" === b.playListType && a.context.dataset.canPlayTime && a.context.dataset.currentTime > a.context.dataset.canPlayTime && (a.updateCurrentTime(a.context.dataset.canPlayTime, "videoEnd"), a.context.dataset.getinfoJSON && 4 == a.context.dataset.getinfoJSON.exem ? a.showDujiaDialog() : a.showUIVipGuide("trial"))
            }), a.context.msg.on(d.getUniqueMsgKey("beforeVideoPlay"), function (b, c) {
                if (a.context.dataset.hasChromeHlsPlugin) {
                    a.context.dataset.useChromeHls = !0, a.context.dataset.useHls = !0;
                    var e = ["html5hd", "safarihls", "chromehls"], f = a.context.config.playerType;
                    e.indexOf(f) > -1 && (a.context.config.playerType = "chromehls")
                }
                d.isSupportSafariHls(a.context.dataset.platform) && (a.context.dataset.useHls = !0), a.context.dataset.hasCallShowUIVipGuide = !1
            }), this.context.msg.on(d.getUniqueMsgKey("videoInterruptByError"), function () {
                a.dataset.getVkeyErrorData && 83 === a.dataset.getVkeyErrorData.code ? a.context.dataset.getinfoJSON && 4 == a.context.dataset.getinfoJSON.exem ? a.showDujiaDialog() : a.showUIVipGuide("trial") : a.dataset.getVideoInfoErrorData && 91 === a.dataset.getVideoInfoErrorData.code && (a.showUIVipGuide("switchDef"), a.context.dataset.isDefinitionSwitching = !1)
            }), a.context.msg.on(d.getUniqueMsgKey("chromehlsErrorSwitchToHtml5hd"), function (b, c) {
                a.context.msg.broadcast("reportChromeHlsError", b.code), a.context.dataset.useHls = !1, a.context.dataset.useChromeHls = !1, delete a.context.dataset.hlsLoadStartTime;
                var d = ["html5hd", "safarihls", "chromehls"], e = a.context.config.playerType;
                d.indexOf(e) > -1 && (a.context.config.playerType = "html5hd");
                var f = {autoplay: !0};
                f.playStartTime = a.getSkipPreludeTime(), f.connectionPlayTime = a.context.dataset.connectionPlayTime, f.onlyGetinfo = !0, a.context.dataset.isDefinitionSwitching && a.context.dataset.definition && (f.defn = a.context.dataset.definition), a.context.dataset.isPlayingAd ? a.context.msg.once("loadingAdEnd", function () {
                    a.loadVideoUrls(f)
                }) : a.loadVideoUrls(f)
            }), a.context.msg.on(d.getUniqueMsgKey("chromehlsErrorSwitchToChromehls"), function (b, c) {
                a.context.msg.broadcast("reportChromeHlsError", b.code);
                var d = {autoplay: !0};
                d.playStartTime = a.getSkipPreludeTime(), d.connectionPlayTime = a.context.dataset.connectionPlayTime, d.onlyGetinfo = !0, a.context.dataset.isDefinitionSwitching && a.context.dataset.definition && (d.defn = a.context.dataset.definition), a.loadVideoUrls(d)
            }), a.context.msg.on(d.getUniqueMsgKey("chromehlsCkeyTimeout"), function () {
                if ("undefined" == typeof a.context.dataset.ckeytimeoutRetryCount && (a.context.dataset.ckeytimeoutRetryCount = 0), a.context.dataset.ckeytimeoutRetryCount < 20) {
                    a.context.dataset.ckeytimeoutRetryCount++;
                    var b = {onlyGetinfo: !0};
                    a.updateVideoUrls(b)
                }
            }), a.context.msg.on(d.getUniqueMsgKey("getVideoUrlSuccess"), function () {
                var b = {width: a.context.dataset.videoWidth, height: a.context.dataset.videoHeight};
                if (b.width && b.height) {
                    var c = a.context.dataset.$playermod.width(), d = a.context.dataset.$playermod.height(),
                        e = b.width * (d / b.height), f = b.height * (c / b.width);
                    e < c && e >= c - 20 ? a.context.dataset.$videomod.addClass("txp_video_fit_cover") : f < d && f >= d - 20 ? a.context.dataset.$videomod.addClass("txp_video_fit_cover") : a.context.dataset.$videomod.removeClass("txp_video_fit_cover")
                }
            });
            var b = function () {
                var b = {
                    otype: "json",
                    market_id: 1,
                    platform: 2,
                    unix_time: +new Date,
                    ip: a.context.dataset.reportUsrIP,
                    user_agent: navigator.userAgent,
                    qq: d.getQQFromCookie(),
                    wx_openid: d.cookie.get("vuserid"),
                    refer: document.referrer,
                    url: location.href
                };
                Txplayer.$.jsonp({
                    url: "//ncgi.video.qq.com/fcgi-bin/get_guid_http_to_jce?callback=?",
                    data: b,
                    callback: Txplayer.util.getJsonpCallbackName("get_guid")
                }).done(function (b) {
                    b && 0 == b.err_code && b.guid ? (a.context.dataset.unid = b.guid, d.setData(Txplayer.dataset.localStorageKey.unid, b.guid)) : a.dataset.hasRequestUnid = !1
                }).fail(function () {
                    a.dataset.hasRequestUnid = !1
                })
            };
            a.context.msg.on(d.getUniqueMsgKey("videoPlaying"), function (c) {
                if (c && "film" === c.playListType) {
                    if (a.context.dataset.unid) return;
                    var e = d.getData(Txplayer.dataset.localStorageKey.unid);
                    if (e) return void (a.context.dataset.unid || (a.context.dataset.unid = e));
                    if (a.dataset.hasRequestUnid) return;
                    a.dataset.hasRequestUnid = !0, b()
                }
            }), a.context.msg.on(d.getUniqueMsgKey("videoPlaying"), function (b) {
                b && "film" === b.playListType && a.getVideoMark && a.getVideoMark.requestVideoMark()
            }), a.context.msg.on(d.getUniqueMsgKey("showLoginGuide"), function (b) {
                a.context.dataset.disableHotKey = !0, a.context.msg.broadcast("pause"), a.context.msg.broadcast("hideUiTips"), Txplayer.util.v4log("showLoginGuide", {connectionPlayTime: a.context.dataset.currentTime});
                try {
                    a.context.userMsg.broadcast("showLoginGuide", {connectionPlayTime: a.context.dataset.currentTime})
                } catch (c) {
                }
                a.context.dataset.isBrowserFullscreen && a.context.msg.broadcast("exitBrowserFullscreen"), a.context.dataset.isWindowFullscreen && a.context.msg.broadcast("exitWindowFullscreen")
            }), a.context.msg.on(d.getUniqueMsgKey("startRollVideoInfo"), function (b) {
                a.context.dataset.rollVideoInfoTimer && clearTimeout(a.context.dataset.rollVideoInfoTimer);
                var c = a.context.dataset.fvpint;
                b && c && (a.context.dataset.rollVideoInfoTimer = setTimeout(function () {
                    a.context.getinfo.requestRollVideoInfo(b).always(function () {
                        a.context.msg.broadcast("startRollVideoInfo", b)
                    })
                }, c))
            }), a.context.msg.on(d.getUniqueMsgKey("vidChange"), function () {
                a.context.dataset.rollVideoInfoTimer && clearTimeout(a.context.dataset.rollVideoInfoTimer), a.context.dataset.hasShowEndAdditionTip = !1, a.context.dataset.hasnlink = !1
            }), a.context.msg.on(d.getUniqueMsgKey("videoEnd"), function () {
                a.context.dataset.rollVideoInfoTimer && clearTimeout(a.context.dataset.rollVideoInfoTimer), a.context.dataset.hasShowEndAdditionTip = !1, a.context.dataset.hasnlink = !1
            }), a.context.msg.on(d.getUniqueMsgKey("smallWindowModeChange"), function (b) {
                b.isSmallWindow && a.context.msg.broadcast("hideUiTips")
            }), a.context.msg.on(d.getUniqueMsgKey("videoTimeUpdate"), function (b) {
                var c = a.calcCurrentTime(), d = c / a.context.dataset.duration;
                if (d >= .98 && a.context.dataset.hasnlink) {
                    if (a.context.dataset.hasShowEndAdditionTip) return;
                    if (["LD", "ZC", "HT"].indexOf(a.context.dataset.currentAdType) > -1) return;
                    a.context.dataset.hasShowEndAdditionTip = !0, a.context.msg.broadcast("showAdditionTip", {
                        duration: b.vlinktd,
                        type: "end"
                    })
                }
            })
        }

        var d = Txplayer.util;
        a.exports = {dealFilmMsgMoudle: c}
    }, 295: function (a, b) {
        a.exports = {
            initUserApis: function () {
                this.dataset.moduleApis = {}, this.dataset.moduleApis.seekTo = this.seekTo.bind(this), this.dataset.moduleApis.play = this.playControl.bind(this), this.dataset.moduleApis.pause = this.pauseControl.bind(this), this.dataset.moduleApis.getVid = this.getVid.bind(this), this.dataset.moduleApis.getCid = this.getCid.bind(this), this.dataset.moduleApis.getColumnId = this.getColumnId.bind(this), this.dataset.moduleApis.isSmallWindowMode = this.isSmallWindowMode.bind(this), this.dataset.moduleApis.setPlayerVipStatus = this.setPlayerVipStatus.bind(this), this.dataset.moduleApis.getDuration = this.getDuration.bind(this), this.dataset.moduleApis.getFileSize = this.getFileSize.bind(this), this.dataset.moduleApis.getVideoSize = this.getVideoSize.bind(this), this.dataset.moduleApis.getCurrentTime = this.getCurrentTime.bind(this), this.dataset.moduleApis.getCurrentTimeWithHlsAd = this.getCurrentTimeWithHlsAd.bind(this), this.dataset.moduleApis.getBufferedTime = this.getBufferedTime.bind(this), this.dataset.moduleApis.seekRight = this.seekRight.bind(this), this.dataset.moduleApis.seekLeft = this.seekLeft.bind(this), this.dataset.moduleApis.togglePlayPause = this.togglePlayPause.bind(this), this.dataset.moduleApis.getUserPayStatus = this.getUserPayStatus.bind(this), this.dataset.moduleApis.getVideoType = this.getVideoType.bind(this), this.dataset.moduleApis.getPlayerType = this.getPlayerType.bind(this), this.dataset.moduleApis.setSmallWindowMode = this.setSmallWindowMode.bind(this), this.dataset.moduleApis.getDefinitionList = this.getDefinitionList.bind(this), this.dataset.moduleApis.callPlayerExtendMethod = this.callPlayerExtendMethod.bind(this), this.dataset.moduleApis.closeLoginGuide = this.closeLoginGuide.bind(this), Txplayer.$.extend(this.context.userApi, this.dataset.moduleApis)
            }, initPrivateMsg: function () {
                var a = this;
                this.dataset.privateApis = {}, this.dataset.privateApis.playControl = this.playControl.bind(this), this.dataset.privateApis.pauseControl = this.pauseControl.bind(this), this.dataset.privateApis.seekTo = this.seekTo.bind(this), this.dataset.privateApis.retryUrlsWhenErr = this.retryUrlsWhenErr.bind(this), this.dataset.privateApis.loadVideoUrls = this.loadVideoUrls.bind(this), Txplayer.$.each(this.dataset.privateApis, function (b, c) {
                    a.context.msg.on(b, c)
                })
            }, initDataApis: function () {
                var a = this;
                this.dataset.dataApis = {}, this.dataset.dataApis.getVideoSeekToInfo = function (b, c) {
                    c.data = a.getVideoSeekToInfo(b)
                }, Txplayer.$.each(this.dataset.dataApis, function (b, c) {
                    a.context.msg.setData(b, c)
                })
            }
        }
    }, 296: function (a, b, c) {
        var d = Txplayer.util, e = c(146), f = (Txplayer.$, c(297));
        a.exports = {
            requestVideoUrlsByVid: function (a) {
                a = a || {};
                var b = {
                    vid: this.context.dataset.vid,
                    defn: this.context.dataset.historyDefinition || "",
                    charge: this.context.dataset.isNeedPay ? 1 : 0,
                    fhdswitch: a.fhdswitch ? 1 : 0,
                    show1080p: this.context.config.show1080p ? 1 : 0,
                    isHLS: 0
                }, c = this, g = {};
                if (Txplayer.$.extend(b, a), this.context.dataset.useHls === !0 && "false" != d.getUrlParam("ishls") && !this.context.dataset.closeHLS) {
                    var h = {isHLS: 1, dtype: 3, sphls: 1, spgzip: "", dlver: ""},
                        i = !d.inNewIframe() && ("v.qq.com" === location.hostname || "film.qq.com" === location.hostname),
                        j = i && "0" === d.getUrlParam("useNewHls");
                    i && !j && (h.sphls = 2, h.spgzip = 1, h.dlver = 2), Txplayer.$.extend(b, h)
                }
                var k = new Date;
                f.sptEme() && d.browser.safari ? b.drm = 16 : d.isSupportEme && (b.drm = 32), b.hdcp = d.isSupportHDCP ? 1 : 0, b.spau = 1, b.spaudio = 15, b.defn = b.defn.replace("auto-", ""), this.context.getinfo.requestGetinfo(b).done(function (e, h, i, j, k) {
                    function l() {
                        if (j.preview || 1 !== j.exem && 83 !== j.iRetCode) {
                            if (1 == j.dltype) {
                                c.context.msg.broadcast("destroyHlsPlayer", {msg: "backend does not suppoert hls, dltype=1"}), c.context.dataset.useHls = !1, c.context.dataset.useChromeHls = !1;
                                var f = ["html5hd", "safarihls", "chromehls"], i = c.context.config.playerType;
                                f.indexOf(i) > -1 && (c.context.config.playerType = "html5hd")
                            }
                            d.v4log("broadcast-getVideoUrlSuccess", a), c.context.msg.broadcast("getVideoUrlSuccess", e, h[0]), b.onlyGetinfo && !a.requestNewGetinfoError || (d.v4log("broadcast-onAdOrderDataReady", ""), k.adtype = "LD", c.context.msg.broadcast("onAdOrderDataReady", k))
                        } else g = {code: 83, trailTime: 0};
                        g && g.hasOwnProperty("trailTime") && !g.trailTime ? c.showUIVipGuide("trial") : (g && g.hasOwnProperty("code") && 83 === g.code || c.context.dataset.trailerMode) && (d.v4log("\u8be5\u7247\u652f\u6301\u8bd5\u770b", g), 4 == j.exem ? c.context.msg.broadcast("showUIDujiaTip", g) : c.context.msg.broadcast("showUIVipTip", g))
                    }

                    d.v4log("requestGetinfo-done", j), h && (c.context.dataset.filmVideoData = h, c.context.dataset.definitionList = i, Txplayer.$(c.context.dataset.definitionList).each(function (a, b) {
                        1 === b.sl && (c.context.dataset.currentDefinitionRate = b.br, c.context.dataset.definition = b.name, c.context.dataset.currentDefinitionFormat = b.format)
                    })), c.context.dataset.getinfoJSON = j, c.context.dataset.duration = c.getDuration(), c.context.dataset.originDuration = c.context.dataset.duration, c.dataset.getVideoInfoErrorData = null, c.context.dataset.userPayStatus = c.getUserPayStatus(), c.context.dataset.filesize = c.getFileSize(), c.context.dataset.canPlayTime = null, j && j.preview && (1 == j.exem || 2 == j.exem || 4 == j.exem || 83 == j.iRetCode) && (c.context.dataset.canPlayTime = j.preview, g = {
                        code: 83,
                        trailTime: j.preview
                    }), j && j.vl && j.vl.vi && "object" === Txplayer.$.type(j.vl.vi[0]) && (c.context.dataset.lnkVid = j.vl.vi[0].lnk, c.context.dataset.videoWidth = j.vl.vi[0].vw, c.context.dataset.videoHeight = j.vl.vi[0].vh, c.context.dataset.tpid = j.vl.vi[0].videotype, c.context.dataset.ckey = j.vl.vi[0].fvkey, c.context.dataset.fvideo = j.vl.vi[0].fvideo, c.context.dataset.fvpint = j.vl.vi[0].fvpint ? 1e3 * j.vl.vi[0].fvpint : 6e5, c.context.dataset.adExtras = j.vl.vi[0].ad || {}, d.v4log("requestGetinfo-done-adExtras", c.context.dataset.adExtras)), "1" == c.context.dataset.fvideo && c.context.msg.broadcast("startRollVideoInfo", {
                        config: b,
                        fvpint: c.context.dataset.fvpint
                    });
                    var m, n = j && j.fl && j.fl.fi && j.fl.fi || [], o = j && j.al && j.al.ai && j.al.ai[0],
                        p = o && o.keyid || "";
                    p = p.split("."), p = p.length > 1 ? p[1] : "", n.forEach(function (a) {
                        1 == a.sl && (m = a.id, c.context.dataset.drm = a.drm || 0)
                    });
                    var q = !1;
                    if (d.browser.safari && 4 === c.context.dataset.drm && j && j.vl && j.vl.vi && "object" === Txplayer.$.type(j.vl.vi[0]) && j.vl.vi[0].ckc) {
                        q = !0;
                        var r = c.context.dataset.fairplay;
                        r || (r = new f, c.context.dataset.fairplay = r), r.init(c.context, j, l, {
                            ckc: j.vl.vi[0].ckc,
                            fmt: m,
                            afmt: p
                        })
                    } else if (5 == c.context.dataset.drm && j && j.vl && j.vl.vi && "object" === Txplayer.$.type(j.vl.vi[0]) && j.vl.vi[0].ckc) {
                        if (!d.isSupportEme || !c.context.dataset.useChromeHls) return void (c.context.dataset.isDefinitionSwitching && c.context.dataset.vid === j.vl.vi[0].vid ? c.context.msg.broadcast("switchDrmDefinitionError", {
                            type: "hls",
                            code: -11111,
                            errCode: "-11111.1",
                            exem: -1
                        }) : c.context.msg.broadcast("error", {
                            type: "hls",
                            errCode: "-11111.1",
                            code: -11111,
                            exem: -1
                        }));
                        var s = j.vl.vi[0].ckc;
                        c.context.dataset.emeEnabled = !0;
                        var t = ["vid=" + c.context.dataset.vid, "fmt=" + m, "afmt=" + p, "ip=" + j.ip, "platform=" + c.context.dataset.platform, "uin=" + d.getUin(), "openid=" + d.cookie.get("openid"), "version=1"];
                        s = s.replace(/\|$/, ""), c.context.dataset.ckc = s.indexOf("?") > -1 ? s + "&" + t.join("&") : s + "?" + t.join("&")
                    } else c.context.dataset.emeEnabled = !1, c.context.dataset.ckc = "";
                    q || l()
                }).fail(function (f) {
                    d.v4log("requestGetinfo-Fail", f);
                    var g = new Date, h = g - k;
                    if (h > 32e3 && (h = 32e3), f && 1001 == f.code) {
                        d.v4log("\u5408\u5e76\u63a5\u53e3\u5931\u8d25 \u5355\u72ec\u8bf7\u6c42\u63a5\u53e3", f), a.onlyGetinfo = !0, a.requestNewGetinfoError = !0, c.context.dataset.requestNewGetinfoError = !0, c.requestVideoUrlsByVid(a);
                        var i = window.performance && window.performance.now() || 0;
                        return void c.context.msg.broadcast("reportAdInfo", {
                            version: Txplayer.appVersion,
                            adtype: "LD",
                            step: 1,
                            step_duration: h,
                            step_code: f.code,
                            step_index: 1,
                            firstview_duration: parseInt(i, 10)
                        })
                    }
                    if (b.onlyGetinfo && !a.requestNewGetinfoError || (d.v4log("broadcast-onAdOrderDataReady", ""), c.context.msg.broadcast("onAdOrderDataReady", {
                        videoErrorCode: f.code,
                        adtype: "LD",
                        requestOk: !1,
                        adcost: g - k
                    })), f && 91 === f.code) c.dataset.getVideoInfoErrorData = f, c.context.msg.broadcast("videoInterruptByError"); else if (f && 96 == f.code) c.context.msg.broadcast("showLoginGuide"); else if (f && "76" === f.code && "hls" === f.type) c.context.dataset.useHls = !1, c.requestVideoUrlsByVid(a); else {
                        var j = e[f.code] || e.defaultMsg;
                        "80" == f.code && d.inArray(["1", "2", "3", "7", "9", "10", "11", "14"], "" + f.exem) > -1 && (j = e["80." + f.exem]), c.context.msg.broadcast("error", {
                            errCode: f.errCode,
                            code: f.code,
                            msg: j,
                            type: "cgi",
                            exem: f.exem
                        });
                        try {
                            c.context.userMsg.broadcast("error", {
                                flowId: c.context.dataset.flowid,
                                errCode: f.errCode,
                                code: f.code,
                                msg: j,
                                type: "cgi",
                                exem: f.exem
                            })
                        } catch (l) {
                        }
                    }
                })
            }, requestVideoNextPartKey: function (a, b, c) {
                if (b = b || 0, !this.context.dataset.filmVideoData) return !1;
                var d = this;
                return c = c ? c : Txplayer.$.Deferred(), a.isNeedPay = this.context.dataset.isNeedPay, this.context.getinfo.requestGetkey(a).done(function (e) {
                    return d.dataset.getVkeyErrorData = null, e ? void c.resolve(a.urlArray[b].url + "&vkey=" + e) : void c.reject()
                }).fail(function (f) {
                    if (f && "1001" == f.code) return d.context.dataset.requestNewGetinfoError = !0, void d.requestVideoNextPartKey(a, b, c);
                    if (!d.context.dataset.canPlayTime || 83 !== f.code) {
                        d.dataset.getVkeyErrorData = f, d.context.msg.broadcast("error", {
                            code: f.code,
                            errCode: f.errCode,
                            msg: e[f.code] || e.defaultMsg,
                            type: "cgi"
                        });
                        try {
                            d.context.userMsg.broadcast("error", {
                                flowId: d.context.dataset.flowid,
                                code: f.code,
                                errCode: f.errCode,
                                msg: e[f.code] || e.defaultMsg,
                                type: "cgi"
                            })
                        } catch (g) {
                        }
                        c.reject(f)
                    }
                }), c
            }, updateVideoUrls: function (a) {
                a = a || {};
                var b = this;
                this.context.msg.once("getVideoUrlSuccess.updateVideoUrls", function (a, c) {
                    c = c || {};
                    var d = [];
                    c.urlArray && c.urlArray.length > 0 && (d = c.urlArray.map(function (a) {
                        return a.url
                    })), b.context.msg.broadcast("setChromeHlsData", {
                        k: "keytimeout",
                        v: {
                            keyid: "hls." + b.context.dataset.getinfoJSON.vl.vi[0].lnk + "." + b.context.dataset.currentDefinitionFormat,
                            m3u8url: d
                        }
                    })
                });
                var c = Txplayer.$.extend({}, {
                    vid: a.vid,
                    charge: a.charge,
                    defn: a.defn,
                    fhdswitch: a.fhdswitch,
                    onlyGetinfo: a.onlyGetinfo
                });
                this.requestVideoUrlsByVid(c)
            }, loadVideoUrls: function (a) {
                a = a || {}, this.dataset.hasLoadVideoUrl = !0;
                var b, c = this;
                d.v4log("loadVideoUrls", a);
                var e = function (a) {
                    if (d.v4log("seekToSync", {
                        playState: c.context.dataset.playState,
                        seekToSyncFlag: c.dataset.seekToSyncFlag
                    }), c.context.dataset.playState === -1) c.context.msg.on("videoPlaying.loadAndSeekSync", function (b) {
                        "film" == b.playListType && (c.dataset.seekToSyncFlag || (a(), c.context.msg.off("videoPlaying.loadAndSeekSync")))
                    }); else {
                        if (c.dataset.seekToSyncFlag) return;
                        a()
                    }
                };
                this.context.msg.once("getVideoUrlSuccess.loadVideoUrls", function (b, f) {
                    if (f = f || {}, !c.context.dataset.filmVideoData) return void d.showError("onGetVideoUrlSuccess\u5931\u8d25", "\u627e\u4e0d\u5230\u64ad\u653eurl\u5217\u8868");
                    var g = [];
                    c.context.dataset.useHls === !0 ? g.push({
                        url: b,
                        filesize: c.context.dataset.filmVideoData[0].bytesTotal,
                        byteRate: c.context.dataset.filmVideoData[0].byteRate,
                        vid: c.context.dataset.vid,
                        m3u8: f && f.m3u8
                    }) : Txplayer.$(c.context.dataset.filmVideoData).each(function (a, e) {
                        return 0 === a && b ? void g.push({
                            url: b,
                            filesize: e.bytesTotal,
                            vid: c.context.dataset.vid,
                            data: e
                        }) : void g.push({
                            _url: e.urlArray,
                            data: e,
                            filesize: e.bytesTotal,
                            vid: c.context.dataset.vid,
                            getUrlSync: function () {
                                var a = Txplayer.$.Deferred();
                                return c.requestVideoNextPartKey(this.data, c.context.dataset.urlIndex).done(function (b) {
                                    d.showInfo("getUrlSync.done", b), a.resolve(b)
                                }).fail(function (b) {
                                    d.showError("getUrlSync.fail", b), a.reject(b)
                                }), a
                            }
                        })
                    });
                    var h = {data: g};
                    return a.repalcePlayList && (h.repalcePlayList = !0), a.clear && (h.clear = !0), d.v4log("addUrls2Player", ""), c.context.msg.broadcast("addUrls2Player", h), d.v4log("videoListChange", ""), c.context.msg.broadcast("videoListChange", b, g), c.context.dataset.useChromeHls && (c.context.dataset.hlsLoadStartTime = a.connectionPlayTime ? a.connectionPlayTime : a.playStartTime, c.context.dataset.hlsLoadStartTime = +c.context.dataset.hlsLoadStartTime), d.v4log("options.autoplay", {
                        autoplay: a.autoplay || "",
                        noHdAdPlugin: c.context.dataset.noHdAdPlugin || ""
                    }), a.autoplay ? (c.context.dataset.autoplay = !0, c.context.msg.broadcast("play")) : c.context.dataset.noHdAdPlugin && !a.fhdswitch && (d.v4log("noHdAdPlugin-play", a), c.context.dataset.autoplay = !0, c.context.msg.broadcast("play")), c.context.dataset.autoplay && c.context.dataset.requestNewGetinfoError && !a.fhdswitch && (d.v4log("requestNewGetinfoError", {}), c.context.msg.broadcast("play")), c.context.dataset.useChromeHls ? (c.context.msg.off("videoPlaying.showUiSeekTip"), void c.context.msg.on("videoPlaying.showUiSeekTip", function (b) {
                        b && "film" == b.playListType && (delete c.context.dataset.hlsLoadStartTime, c.context.msg.off("videoPlaying.showUiSeekTip"), a.type = "chromehls", c.context.msg.broadcast("showUiSeekTip", a))
                    })) : void (a.connectionPlayTime ? e(function () {
                        c.context.dataset.isSkippingTime = !0, c.seekTo({connectionPlayTime: a.connectionPlayTime})
                    }) : a.playStartTime && e(function () {
                        c.context.dataset.isSkippingTime = !0, c.seekTo({playStartTime: a.playStartTime})
                    }))
                }), b = Txplayer.$.extend({}, {
                    vid: a.vid,
                    charge: a.charge,
                    defn: a.defn,
                    fhdswitch: a.fhdswitch,
                    onlyGetinfo: a.onlyGetinfo
                }), c.requestVideoUrlsByVid(b)
            }
        }
    }, 297: function (a, b) {
        function c(a) {
            return String.fromCharCode.apply(null, new Uint16Array(a.buffer))
        }

        function d(a) {
            for (var b = "=".repeat((4 - a.length % 4) % 4), c = (a + b).replace(/\-/g, "+").replace(/_/g, "/"), d = window.atob(c), e = new Uint8Array(d.length), f = 0; f < d.length; ++f) e[f] = d.charCodeAt(f);
            return e
        }

        function e(a) {
            for (var b = "", c = new Uint8Array(a), d = c.byteLength, e = 0; e < d; e++) b += String.fromCharCode(c[e]);
            return window.btoa(b)
        }

        function f(a) {
            for (var b = a.length, c = new ArrayBuffer(2 * b), d = new Uint16Array(c), e = 0; e < b; e++) d[e] = a.charCodeAt(e);
            return d
        }

        function g(a, b, c) {
            "string" == typeof b && (b = f(b));
            var d = a.byteLength + 4 + b.byteLength + 4 + c.byteLength, e = 0, g = new ArrayBuffer(d),
                h = new DataView(g), i = new Uint8Array(g, e, a.byteLength);
            i.set(a), e += i.byteLength, h.setUint32(e, b.byteLength, !0), e += 4;
            var j = new Uint16Array(g, e, b.length);
            j.set(b), e += j.byteLength, h.setUint32(e, c.byteLength, !0), e += 4;
            var k = new Uint8Array(g, e, c.byteLength);
            return k.set(c), new Uint8Array(g, 0, g.byteLength)
        }

        function h() {
            this.evtMap = {
                webkitneedkey: this.onVideoWebkitNeedKey.bind(this),
                certificateError: this.onCertificateError.bind(this),
                certificateOk: this.onCertificateOk.bind(this),
                webkitkeyadded: this.onKeySessionWebkitKeyAdded.bind(this),
                webkitkeyerror: this.onKeySessionWebkitKeyError.bind(this),
                webkitkeymessage: this.onKeySessionWebkitKeyMessage.bind(this)
            }
        }

        var i = Txplayer.util, j = "com.apple.fps.1_0", k = Txplayer.$;
        h.prototype.onKeySessionWebkitKeyAdded = function () {
            i.v4log("[fairplay]", "onKeySessionWebkitKeyAdded()"), i.v4log("[fairplay]", "Decryption key was added to the session.")
        }, h.prototype.onKeySessionWebkitKeyError = function (a) {
            i.v4log("[fairplay]", "onKeySessionWebkitKeyError()", a ? a.message : ""), this.riseError("error", 3)
        }, h.prototype.onKeySessionWebkitKeyMessage = function (a) {
            i.v4log("[fairplay]", "onKeySessionWebkitKeyMessage()");
            var b = a.target, c = a.message;
            this.fetchLicense(b, c)
        }, h.prototype.fetchLicense = function (a, b) {
            i.v4log("[fairplay]", "fetchLicense()"), this.licenseRequestParam.spc = e(b);
            var c = this;
            this.licenseRequest = k.ajax({
                url: this.context.dataset.ckc,
                data: this.licenseRequestParam,
                type: "POST",
                dataType: "json"
            }).done(function (b) {
                b && 0 === +b.code && b.ckc ? a.update(d(b.ckc)) : c.riseError("error", 6)
            }).fail(function (a) {
                c.riseError("error", 5)
            })
        }, h.prototype.onCertificateOk = function (a) {
            if (i.v4log("[fairplay]", "onCertificateOk()"), this.certRequest && (this.certificate = new Uint8Array(this.certRequest.response), this.certRequest.removeEventListener("error", this.evtMap.certificateError), this.certRequest.removeEventListener("load", this.evtMap.certificateOk), this.certRequest = null), !this.certificate) throw new Error("missing certificate");
            this.getVideoUrlSuccHandler()
        }, h.prototype.onCertificateError = function (a) {
            i.v4log("[fairplay]", "onCertificateError()"), this.certRequest && (this.certRequest.removeEventListener("error", this.evtMap.certificateError), this.certRequest.removeEventListener("load", this.evtMap.certificateOk), this.certRequest = null), this.riseError("error", 4)
        }, h.prototype.onVideoWebkitNeedKey = function (a) {
            i.v4log("[fairplay]", "onVideoWebkitNeedKey()"), this.$focusVideo.removeEventListener("webkitneedkey", this.evtMap.webkitneedkey);
            var b = c(a.initData), d = b.split("skd://")[1].split("?")[0], e = g(a.initData, d, this.certificate);
            this.keySession = this.createKeySession(e), this.keySession.contentId = d, this.keySession.addEventListener("webkitkeyadded", this.evtMap.webkitkeyadded), this.keySession.addEventListener("webkitkeyerror", this.evtMap.webkitkeyerror), this.keySession.addEventListener("webkitkeymessage", this.evtMap.webkitkeymessage)
        }, h.prototype.createKeySession = function (a) {
            if (i.v4log("[fairplay]", "createKeySession()"), !this.$focusVideo.webkitKeys) {
                if (!window.WebKitMediaKeys.isTypeSupported(j, "video/mp4")) throw new Error("Key System not supported");
                this.$focusVideo.webkitSetMediaKeys(new window.WebKitMediaKeys(j))
            }
            if (!this.$focusVideo.webkitKeys) throw new Error("Could not create MediaKeys");
            var b = this.$focusVideo.webkitKeys.createSession("video/mp4", a);
            if (!b) throw new Error("Could not create key session");
            return b
        }, h.sptEme = function () {
            if (!window.WebKitMediaKeys) return !1;
            var a = window.WebKitMediaKeys.isTypeSupported(j, "video/mp4");
            return !!a
        }, h.prototype.init = function (a, b, c, d) {
            this.reset(),
                this.context = a, this.getinfoJSON = b, this.getVideoUrlSuccHandler = c, this.extraParam = d;
            var e = this.extraParam.ckc, f = this.extraParam.fmt, g = this.getinfoJSON.vl.vi[0].vid,
                j = this.getinfoJSON.vl.vi[0].lnk;
            if (h.sptEme()) {
                this.context.config.playerType = "safarihls", this.context.dataset.useChromeHls = !1, this.context.dataset.useHls = !0;
                var k = e.split("|");
                if (k && k.length >= 2) {
                    this.context.dataset.ckc = k[0], this.context.dataset.certUrl = k[1], this.licenseRequestParam = {
                        assetId: j || g,
                        spc: "",
                        vid: this.context.dataset.vid,
                        fmt: f,
                        ip: this.getinfoJSON.ip,
                        platform: this.context.dataset.platform,
                        uin: i.getUin(),
                        openid: i.cookie.get("openid"),
                        guid: this.context.dataset.guid,
                        version: 1,
                        iosVersion: "11.0"
                    };
                    var l = this.context.dataset.$videomod.find("video");
                    this.$focusVideo = l[0].isFocus ? l[0] : l[1], this.$focusVideo.addEventListener("webkitneedkey", this.evtMap.webkitneedkey), this.certificate ? this.onCertificateOk() : this.fetchCertificate()
                } else this.riseError("error", 2)
            } else this.context.dataset.isDefinitionSwitching && this.context.dataset.vid === g ? this.riseError("switchDrmDefinitionError") : this.riseError()
        }, h.prototype.riseError = function (a, b) {
            a = a || "error", b = b || 1, this.context.msg.broadcast(a, {
                type: "hls",
                errCode: "-11111." + b,
                code: -11111,
                exem: -1 * b
            })
        }, h.prototype.fetchCertificate = function () {
            i.v4log("[fairplay]", "fetchCertificate()"), this.certRequest = new XMLHttpRequest, this.certRequest.responseType = "arraybuffer", this.certRequest.addEventListener("error", this.evtMap.certificateError), this.certRequest.addEventListener("load", this.evtMap.certificateOk), this.certRequest.open("GET", this.context.dataset.certUrl, !0), this.certRequest.send()
        }, h.prototype.reset = function () {
            this.certRequest && (this.certRequest.removeEventListener("error", this.evtMap.certificateError), this.certRequest.removeEventListener("load", this.evtMap.certificateOk), this.certRequest.abort(), this.certRequest = null), this.licenseRequest && (this.licenseRequest.abort && this.licenseRequest.abort(), this.licenseRequest = null), this.$focusVideo && (this.$focusVideo.removeEventListener("webkitneedkey", this.evtMap.webkitneedkey), this.$focusVideo = null), this.keySession && (this.keySession.removeEventListener("webkitkeyadded", this.evtMap.webkitkeyadded), this.keySession.removeEventListener("webkitkeyerror", this.evtMap.webkitkeyerror), this.keySession.removeEventListener("webkitkeymessage", this.evtMap.webkitkeymessage))
        }, h.prototype.destroy = function () {
            this.reset(), this.context.dataset.fairplay = null, this.context = null, this.getVideoUrlSuccHandler = null, this.certificate = null, this.licenseRequestParam = null, this.keySession = null
        }, a.exports = h
    }, 298: function (a, b, c) {
        var d = Txplayer.util;
        Txplayer.$, c(247);
        a.exports = {
            calcCurrentTime: function () {
                if ("film" != this.context.dataset.currentPlayListType) return 0;
                var a = this.context.dataset.playListIndex;
                this.context.dataset.filmVideoData && a >= this.context.dataset.filmVideoData.length && (a = 0);
                var b = 0;
                return Txplayer.$(this.context.dataset.filmVideoData).each(function (c, d) {
                    return !(c >= a) && void (b += d.duration)
                }), b += parseInt(this.context.dataset.videoCurrentTime), parseInt(b)
            }, updateCurrentTime: function (a, b) {
                "number" === Txplayer.$.type(a) && (this.context.dataset.currentTime = parseInt(d.getHlsAdOffsetTime(a, this.context), 10), this.context.dataset.currentTimeWithHlsAd = parseInt(a, 10))
            }, getVideoSeekToInfo: function (a) {
                var b = 0, c = 0;
                this.context.dataset.useHls || Txplayer.$(this.context.dataset.filmVideoData).each(function (d, e) {
                    if (c = d, b += e.duration, b > a) return b -= e.duration, !1
                });
                var d = {index: c, prevDurtion: b};
                return d
            }, showUIVipGuide: function (a) {
                if (!this.context.dataset.hasCallShowUIVipGuide) {
                    this.context.dataset.hasCallShowUIVipGuide = !0;
                    var b = this;
                    setTimeout(function () {
                        b.context.dataset.hasCallShowUIVipGuide = !1
                    }, 3e3);
                    var c = {
                        trial: {trialFinish: !0},
                        switchDef: {switchDefinitionFail: !0, defn: this.context.dataset.targetDefn}
                    };
                    this.pauseControl(), d.v4log("showUIVipGuide", c[a]), this.context.msg.broadcast("showUIVipGuide", c[a]);
                    try {
                        this.context.userMsg.broadcast("showUIVipGuide", c[a])
                    } catch (e) {
                    }
                    this.context.dataset.isBrowserFullscreen && this.context.msg.broadcast("exitBrowserFullscreen"), this.context.dataset.isWindowFullscreen && this.context.msg.broadcast("exitWindowFullscreen")
                }
            }, showDujiaDialog: function () {
            }, showUnOfficialLimitTips: function () {
                if ((!this.context.config.official || "nintendo" === this.context.config.playerType) && this.context.dataset.canPlayTime && 4 != this.context.dataset.getinfoJSON.exem) {
                    var a = Txplayer.util.getTxVideoPageURLByVid(this.context.dataset.vid, 0),
                        b = this.context.dataset.canPlayTime || 0, c = Math.floor(b / 60), d = b - 60 * c;
                    this.context.msg.broadcast("showUnOfficialLimitTips", {min: c, sec: d, href: a})
                }
            }, getSkipPreludeTime: function () {
                var a;
                return a = this.context.dataset.skipPrelude ? parseInt(this.context.dataset.playStartTime) : 0
            }, checkLanguageSwitch: function (a) {
                var b = d.getSessionData(Txplayer.dataset.sessionStorageKey.languageSwitch), c = "";
                try {
                    if (b && (b = b.split("|") || [], b.length > 0)) {
                        var e = b[0], f = (b[1], b[2]), g = (new Date).getTime();
                        g - f < 3e4 ? e === a.vid && (c = "page_langSwitch") : d.delSessionData(Txplayer.dataset.sessionStorageKey.languageSwitch)
                    }
                    var h = this.context.dataset.adext || "";
                    c ? 0 === h.length ? h = c : h.indexOf("page_langSwitch") === -1 && (h = h + "|" + c) : h = h.replace(/\|?page\_langSwitch/g, ""), this.context.dataset.adext = h
                } catch (i) {
                }
            }, getDuration: function () {
                var a = 0;
                return this.context.dataset.getinfoJSON && this.context.dataset.getinfoJSON.vl && this.context.dataset.getinfoJSON.vl.vi && this.context.dataset.getinfoJSON.vl.vi[0] && this.context.dataset.getinfoJSON.vl.vi[0].td && (a = parseFloat(this.context.dataset.getinfoJSON.vl.vi[0].td)), parseFloat(a)
            }, getFileSize: function () {
                if (!this.context.dataset.filmVideoData || "array" !== Txplayer.$.type(this.context.dataset.filmVideoData)) return 0;
                var a = 0;
                return Txplayer.$(this.context.dataset.filmVideoData).each(function (b, c) {
                    a += parseInt(c.bytesTotal)
                }), parseInt(a / 1024)
            }, getVideoSize: function () {
                return {width: this.context.dataset.videoWidth, height: this.context.dataset.videoHeight}
            }, getVideoType: function () {
                return this.context.config.videoType
            }, getPlayerType: function () {
                return this.context.config.playerType
            }, getCurrentTime: function () {
                return this.context.dataset.currentTime || 0
            }, getCurrentTimeWithHlsAd: function () {
                return this.context.dataset.currentTimeWithHlsAd || 0
            }, getBufferedTime: function () {
                return this.context.dataset.bufferedTime || 0
            }, getVid: function () {
                return this.context.dataset.vid
            }, getCid: function () {
                return this.context.dataset.cid
            }, getColumnId: function () {
                return this.context.dataset.columnId
            }, isSmallWindowMode: function () {
                return !!this.context.dataset.isSmallWindowMode
            }, callPlayerExtendMethod: function () {
                var a = Array.prototype.slice.call(arguments, 0), b = a.shift();
                if (b) switch (a.length) {
                    case 1:
                        try {
                            this.context.msg.broadcast(b, a[0])
                        } catch (c) {
                        }
                        break;
                    case 2:
                        try {
                            this.context.msg.broadcast(b, a[0], a[1])
                        } catch (c) {
                        }
                        break;
                    default:
                        try {
                            this.context.msg.broadcast(b, a)
                        } catch (c) {
                        }
                }
            }, setPlayerVipStatus: function (a) {
                this.context.config.show1080p = !!a
            }, getDefinitionList: function () {
                return []
            }, seekRight: function (a) {
                var b = 5;
                "number" === Txplayer.$.type(a) && (b = a);
                var c = this.context.dataset.duration;
                if (c) {
                    var d = this.getCurrentTimeWithHlsAd();
                    d += b, d > c || this.seekTo(d)
                }
            }, seekLeft: function (a) {
                var b = 5;
                "number" === Txplayer.$.type(a) && (b = a);
                var c = this.context.dataset.duration;
                if (c) {
                    var d = this.getCurrentTimeWithHlsAd();
                    d -= b, d < 0 || this.seekTo(d)
                }
            }, togglePlayPause: function () {
                this.context.dataset.disableHotKey || (1 === this.context.dataset.playState ? (this.pauseControl(), this.context.msg.broadcast("userPausePlayer")) : (this.playControl(), this.context.msg.broadcast("userPlayPlayer")))
            }, getUserPayStatus: function () {
                var a = null;
                return this.context.dataset.getinfoJSON && this.context.dataset.getinfoJSON.vl && this.context.dataset.getinfoJSON.vl.vi && this.context.dataset.getinfoJSON.vl.vi.length && this.context.dataset.getinfoJSON.vl.vi[0] && (a = this.context.dataset.getinfoJSON.vl.vi[0].ch), a
            }, setSmallWindowMode: function (a) {
                this.context.dataset.isSmallWindowMode = !!a, this.context.msg.broadcast("smallWindowModeChange", {isSmallWindow: !!a})
            }, closeLoginGuide: function (a) {
                if (Txplayer.util.v4log("closeLoginGuide", a), this.context.dataset.disableHotKey = !1, a) if (a.success) if (a.isVip) {
                    this.context.msg.broadcast("definitionChange", "shd");
                    try {
                        this.context.userMsg.broadcast("definitionChange", {definition: "shd"})
                    } catch (b) {
                    }
                } else this.context.msg.broadcast("definitionChange", "shd"), this.context.msg.broadcast("set720pWhenLogin"); else this.context.msg.broadcast("closeLoginGuide"), this.context.msg.broadcast("play")
            }
        }
    }, 299: function (a, b) {
        var c = Txplayer.util;
        a.exports = {
            retryUrlsWhenErr: function (a) {
                c.v4log("retryUrlsWhenErr", a);
                var b = this, d = a.currentTime, e = a.index;
                if (b.context.dataset.urlIndex++, b.context.dataset.filmVideoData && !(e >= b.context.dataset.filmVideoData.length)) if (b.context.dataset.urlIndex >= b.context.dataset.filmVideoData[e].urlArray.length && (b.context.dataset.urlIndex = 0), b.context.dataset.useHls === !0) a.isFocus ? b.context.msg.broadcast("setFocusVideoUrl", {
                    url: b.context.dataset.filmVideoData[e].urlArray[b.context.dataset.urlIndex].url,
                    currentTime: d,
                    autoplay: !0
                }) : b.context.msg.broadcast("setPreloadVideoUrl", {
                    url: b.context.dataset.filmVideoData[e].urlArray[b.context.dataset.urlIndex].url,
                    currentTime: d,
                    autoplay: !1
                }); else {
                    if (c.browser.ie && 0 == b.context.dataset.playState) return;
                    a.isFocus && b.requestVideoNextPartKey(b.context.dataset.filmVideoData[e], b.context.dataset.urlIndex).done(function (a) {
                        b.context.msg.broadcast("setFocusVideoUrl", {url: a, currentTime: d, autoplay: !0})
                    })
                }
            }
        }
    }
});