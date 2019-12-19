"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};

var fed = {
    global: {
        init: function () {
            fed['global']['draws'](), fed['record']['init'](), 0 != vfed['mob'] && vfed['wap'] != location['host'] && fed['global']['mobile']() && (location['href'] = location['href']['replace'](location['host'], vfed['wap']));
            $(document)['on']('click', '.fed-part-advs', function () {
                $(this)['parent']()['remove']()
            }),
                $('.fed-week-brns')['click'](function () {
                    $('.fed-week-brns')['removeClass']('fed-text-green'), $(this)['addClass']('fed-text-green'), $['get']($('.fed-week-href')['attr']('data-week') + ('?week=') + $(this)['text']()['replace']('周', '') + ('&nums=') + $('.fed-week-href')['attr']('data-nums'), function (g) {
                        $('.fed-week-boxs')['html'](g)
                    })
                }),
                $('.fed-page-jump')['click'](function () {
                    var g = $(this)['attr']('data-sp'),
                        k = parseInt($('.fed-page-info input')['val']());
                    return 0 < k && k <= parseInt($(this)['attr']('data-total')) && (location['href'] = $(this)['attr']('data-url')['replace'](g + ('PAGELINK'), g + k)['replace']('PAGELINK', k)), !1
                })
        },
        adds: function (e) {
            $('.fed-part-mask')['remove'](), $(e)['append']('<div class="fed-part-mask fed-back-ashen fed-hide-sm fed-show"></div>'),
                $('.fed-play-iframe')['addClass']('fed-part-left')
        },
        dels: function (e) {
            $(e)['remove'](),
                $('.fed-play-iframe')['removeClass']('fed-part-left')
        },
        user: function (e) {
            $('.fed-part-height')['height']($('.fed-part-height')['height']()), fed['cookie']['get']('user_id') != void 0 && fed['cookie']['get']('user_id') != '' && ($('.fed-navs-login')['addClass']('fed-navs-user fed-event')['removeClass']('fed-navs-login')['html']('我的<span class="fed-part-move fed-edge-info fed-edge-bottom"></span>'), $(e)['text'](fed['cookie']['get']('user_name')))
        },
        login: function (e) {
            $(e)['click'](function () {
                fed['module']['login']()
            })
        },
        gotop: function (e, a) {
            $(window)['scroll'](function () {
                500 < $(window)['scrollTop']() ? $(e)['addClass']('fed-visible') : $(e)['removeClass']('fed-visible')
            }), $(document)['on']('click', a, function () {
                $('html,body')['animate']({scrollTop: 0}, 200)
            })
        },
        submit: function (e, a) {
            $(document)['on']('keyup', a, function (i) {
                var P = window['event'] ? i['keyCode'] : i['which'];
                13 == P && $(e)['click']()
            })
        },
        swiper: function () {
            var e;
            $('.fed-list-pics.fed-lazy, img.fed-lazy')['lazyload']({effect: 'fadeIn'});
            new Swiper('.fed-swip-container', {
                wrapperClass: 'fed-swip-wrapper',
                slideClass: 'fed-swip-slide',
                pagination: '.fed-swip-pagin',
                bulletClass: 'fed-swip-bullet',
                bulletActiveClass: 'fed-swip-this',
                nextButton: '.fed-swip-next',
                prevButton: '.fed-swip-prev',
                paginationClickable: !0,
                lazyLoading: !0,
                lazyLoadingClass: 'fed-swip-lazy',
                lazyLoadingInPrevNext: !0,
                autoplay: 5e3,
                loop: !0
            })
        },
        click: function () {
            $(document)['on']('focus', 'input,textarea', function () {
                $(this)['attr']('type') != 'radio' && $(this)['attr']('type') != 'submit' && $('.fed-tabr-info,.fed-goto-info')['hide']()
            }), $(document)['on']('blur', 'input,textarea', function () {
                $('.fed-tabr-info')['fadeIn'](500)
            }), $(document)['on']('click', '.fed-event', function (s) {
                s['stopPropagation']()
            }), $(document)['click'](function () {
                $('.fed-navs-input')['removeClass']('fed-rims-reds'),
                    $('.fed-pops-btns')['removeClass']('fed-pops-tops'),
                    $('.fed-pops-channel')['removeClass']('fed-show'),
                    $('.fed-navs-search,.fed-navs-close')['removeClass']('fed-show'),
                    $('.fed-pops-navbar ul li')['removeClass']('fed-line-top fed-line-right'), fed['global']['dels']('.fed-part-mask,.fed-mode-info'),
                    $('.fed-goto-info')['show'](),
                    $('.fed-conceal')['hide'](),
                    fed['navbar']['closes'](),
                    fed['navbar']['trigon']()
            })
        },
        finish: function () {
            fed['global']['click'](), fed['global']['swiper'](), fed['global']['user']('.fed-pops-user li:first a'), fed['global']['gotop']('.fed-goto-toper', '.fed-goto-toper'), fed['global']['login']('.fed-navs-login'), fed['module']['share'](), fed['module']['color'](), fed['myuser']['center']('.fed-subm-login')
        },
        draws: function () {
            /MSIE/i['test'](navigator['userAgent']) || (console['log']('%c%c主题名称%c' + fed['global']['vers'], 'line-height:28px', 'padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px', 'color:#3fa9f5;font-size:16px;line-height:28px'), console['log']('%c%c主题官网%c' + fed['global']['jump'], 'line-height:28px', 'padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px', 'color:#ff9900;font-size:16px;line-height:28px'))
        },
        mobile: function () {
            if (/Android|webOS|iPhone|iPod|BlackBerry/i['test'](navigator['userAgent'])) return !0
        },
        vers: 'vfed 3.1(苹果CMSv10)',
        jump: 'http://vfed.cc',
        tips: function (e) {
            alert(e)
        },
        ajax: function (e) {
            $['get'](e)
        },
        loca: function (e) {
            location['href'] = e
        }
    },
    module: {
        login: function () {
            return void 0 != fed['cookie']['get']('user_id') && fed['cookie']['get']('user_id') != '' || void ($('.fed-comm-text')['blur'](),
                $('.fed-play-iframe')['addClass']('fed-part-left'), fed['global']['submit']('.fed-user-submit', '.fed-user-form'), $['get'](vfed['path'] + ('index.php/user/ajax_login'), function (s) {
                var d;
                layer['open']({
                    type: 1,
                    id: 'login',
                    area: 'auto;',
                    title: !1,
                    content: s,
                    closeBtn: !1,
                    shadeClose: !0,
                    success: function () {
                        $('input[name="user_name"]')['val'](fed['cookie']['get']('fed_username')),
                            $('input[name="user_pwd"]')['val'](fed['cookie']['get']('fed_password')), $(document)['on']('click', '.fed-mode-close', function () {
                            $('.fed-play-iframe')['removeClass']('fed-part-left'), layer['closeAll']()
                        })
                    },
                    cancel: function () {
                        $('.fed-play-iframe')['removeClass']('fed-part-left')
                    }
                })
            }))
        },
        trace: function () {
            $['get']('/cdn-cgi/trace', function (s) {
                var k = s['match'](/(colo=?)(\S*)/)[2],
                    v = [['HKG', '香港'], ['YVR', '加拿大'], ['TPE', '台北'], ['NRT', '东京'], ['ICN', '仁川'], ['LHR', '伦敦'], ['CDG', '巴黎'], ['FRA', '法兰克福'], ['KUL', '马来西亚'], ['LAX', '洛杉矶'], ['SIN', '新加坡'], ['SJC', '圣塞何'], ['KBP', '乌克兰'], ['PRG', '布拉格']];
                $('.fed-navs-route')['html']('节点：' + k)['show']();
                for (var P = 0; P < v['length']; P++) k == v[P][0] && $('.fed-navs-route')['html']('节点：' + v[P][1])['show']()
            })
        },
        color: function () {
            $('.fed-goto-color')['click'](function () {
                for (var s, k = [['black', '黑色'], ['golds', '黑金'], ['colou', '彩色'], ['glass', '透明'], ['green', '绿色'], ['blues', '蓝色'], ['white', '橙色'], ['pinks', '粉色'], ['gules', '红色']], v = '<ul class="fed-colo-info fed-part-rows fed-padding fed-back-whits fed-event">', P = 0; P < k['length']; P++) v += '<li class="fed-col-xs4 fed-padding"><a class="fed-btns-info fed-rims-info fed-padding fed-visible fed-colo-btns fed-colo-' + k[P][0] + ('" data-type="') + k[P][0] + ('" href="javascript:;">') + k[P][1] + ('</a>');
                v += '</ul>', layer['open']({
                    type: 1,
                    btn: !1,
                    id: 'color',
                    title: '主题颜色',
                    content: v,
                    shadeClose: !0,
                    success: function () {
                        $('.fed-play-iframe')['addClass']('fed-part-left'),
                            $('.fed-colo-btns')['click'](function () {
                                fed['cookie']['set']('fed_color', $(this)['attr']('data-type'), 7), $(this)['attr']('data-type') == 'white' ? $('#fed-colo-color')['remove']() : 0 < $('#fed-colo-color')['length'] ? $('#fed-colo-color')['attr']('href', vfed['tpl'] + ('asset/css/') + $(this)['attr']('data-type') + ('.css?v=') + vfed['ver']) : $('head')['append']('<link href="' + vfed['tpl'] + ('asset/css/') + $(this)['attr']('data-type') + ('.css?v=') + vfed['ver'] + ('" rel="stylesheet" type="text/css" id="fed-colo-color" />'))
                            })
                    },
                    cancel: function () {
                        $('.fed-play-iframe')['removeClass']('fed-part-left')
                    }
                })
            })
        },
        notice: function () {
            var s = parseInt(fed['cookie']['get']('fed_notice'));
            if (s >= vfed['not']) return !1;
            $['get'](vfed['path'] + ('index.php/label/notice'), function (d) {
                var i;
                layer['open']({
                    type: 1,
                    id: 'notice',
                    area: 'auto;',
                    title: !1,
                    content: d,
                    closeBtn: !1,
                    shadeClose: !0,
                    success: function () {
                        $('.fed-play-iframe')['addClass']('fed-part-left'), $(document)['on']('click', '.fed-tips-btns', function () {
                            s ? fed['cookie']['set']('fed_notice', +(s + 1), 1) : fed['cookie']['set']('fed_notice', 1, 1);
                            $(this)['attr']('data-href') && (location['href'] = $(this)['attr']('data-href'));
                            $('.fed-play-iframe')['removeClass']('fed-part-left'), layer['closeAll']()
                        }), $(document)['on']('click', '.fed-tips-close', function () {
                            $('.fed-play-iframe')['removeClass']('fed-part-left'), layer['closeAll']()
                        })
                    },
                    cancel: function () {
                        $('.fed-play-iframe')['removeClass']('fed-part-left')
                    }
                })
            })
        },
        taoke: function () {
            $['get'](vfed['tpl'] + ('asset/fed/create.php?id=tao'), function (s) {
                if (null == s || 0 == s['length']) return !1;
                for (var P, k = '', v = 0; v < s['length']; v++) P = 6 == s['length'] && 3 < v ? ' fed-hide-sm fed-show-md-block' : '', k += '<li class="fed-list-item fed-padding fed-col-xs4 fed-col-sm3 fed-col-md2' + P + ('">'), k += '<a target="_blank" class="fed-list-pics fed-lazy fed-part-2by3" href="' + s[v]['ali_click'] + ('" style="background-image: url(') + s[v]['Pic'] + (')"><span class="fed-list-play fed-list-arts fed-hide-xs"></span><span class="fed-list-score fed-font-xii fed-back-green">券后价￥') + s[v]['Price'] + ('</span><span class="fed-list-remarks fed-font-xii fed-text-white fed-text-center">领券￥') + s[v]['Quan_price'] + ('</span></a>'), k += '<a target="_blank" class="fed-list-title fed-font-xiv fed-text-center fed-text-sm-left fed-visible fed-part-eone" href="' + s[v]['ali_click'] + ('">') + s[v]['D_title'] + ('</a>'), k += '<span class="fed-list-desc fed-font-xii fed-visible fed-part-eone fed-text-muted fed-hide-xs fed-show-sm-block">销量' + s[v]['Sales_num'] + ('</span>'), k += '</li>';
                $('.fed-taor-info')['html'](k)
            })
        },
        share: function () {
            $('.fed-play-share,.fed-goto-share')['click'](function () {
                $['post'](vfed['tpl'] + ('asset/fed/create.php?id=sha'), 'url=' + location['href'], function (g) {
                    var k;
                    layer['alert'](document['title'] + ' ' + g['msg'], {
                        offset: '45%',
                        shadeClose: !0,
                        title: '复制短连接',
                        btn: '复制'
                    }, function () {
                        if (!g['msg']) return prompt('请手动复制链接分享', location['href']);
                        if ($('body')['append']('<div id="fed-link-share" style="position: absolute;left:-200px; color: rgba(0,0,0,0);background-color: transparent">' + document['title'] + ' ' + g['msg'] + ('</div>')), navigator['userAgent']['match'](/(iPhone|iPod|iPad);?/i)) {
                            window['getSelection']()['removeAllRanges']();
                            var R = document['getElementById']('fed-link-share'),
                                S = document['createRange']();
                            S['selectNode'](R), window['getSelection']()['addRange'](S);
                            var T = document['execCommand']('Copy');
                            window['getSelection']()['removeAllRanges']()
                        } else {
                            var U = document['getElementById']('fed-link-share')['innerText'],
                                R = document['createElement']('input');
                            R['value'] = U, document['body']['appendChild'](R), R['select']();
                            var T = document['execCommand']('Copy');
                            R['className'] = 'input', R['style']['display'] = 'none'
                        }
                        T ? layer['msg']('短链接复制成功，请粘贴到你的QQ/微博/微信上分享给你的好友') : layer['msg']('短链接复制成功，请粘贴到你的QQ/微博/微信上分享给你的好友')
                    })
                }, 'json')
            })
        },
        qrcode: function (e) {
            var a;
            $('.fed-side-code')['qrcode']({
                image: $('.fed-side-image')[0],
                background: '#fff',
                render: 'image',
                ecLevel: 'Q',
                fill: '#333',
                mSize: 0.2,
                size: 170,
                text: e,
                quiet: 2,
                mode: 4
            })
        }
    },
    navbar: {
        init: function () {
            fed['navbar']['scroll']('.fed-this', '.fed-pops-navbar ul'), fed['navbar']['toggle']('.fed-navs-navbar', '.fed-pops-navbar', !1), fed['navbar']['toggle']('.fed-navs-record', '.fed-pops-record', !0), fed['navbar']['toggle']('.fed-navs-btns', '.fed-pops-cuts', !0), fed['navbar']['toggle']('.fed-navs-code', '.fed-pops-code', !0), fed['navbar']['toggle']('.fed-navs-user', '.fed-pops-user', !1), fed['navbar']['button']('.fed-pops-btns')
        },
        toggle: function (e, a, x) {
            $(document)['on']('click', e, function () {
                $('.fed-pops-btns')['removeClass']('fed-pops-tops'),
                    $('.fed-pops-channel')['removeClass']('fed-show'),
                    $('.fed-pops-navbar ul li')['removeClass'](' fed-line-top fed-line-right'),
                    $('.fed-pops-navbar ul')['removeClass']('fed-pops-open');
                $(a)['is'](':hidden') ? (!0 == x && fed['global']['adds']('body'), fed['navbar']['closes'](), fed['navbar']['trigon'](), $(this)['find']('.fed-edge-info')['removeClass']('fed-edge-bottom')['addClass']('fed-edge-top'),
                    $('.fed-conceal')['hide'](), $(a)['show']()) : (fed['global']['dels']('.fed-part-mask'), fed['navbar']['trigon'](), $(a)['hide']())
            })
        },
        trigon: function () {
            $('.fed-edge-info')['removeClass']('fed-edge-top')['addClass']('fed-edge-bottom')
        },
        button: function (e) {
            $(e)['click'](function () {
                0 < $('.fed-part-mask')['length'] ? fed['global']['dels']('.fed-part-mask') : fed['global']['adds']('body');
                $('.fed-pops-btns')['toggleClass']('fed-pops-tops'),
                    $('.fed-pops-channel')['toggleClass']('fed-show'),
                    $('.fed-pops-navbar ul li')['toggleClass'](' fed-line-top fed-line-right'),
                    $('.fed-pops-navbar ul')['toggleClass']('fed-pops-open'), fed['navbar']['scroll']('.fed-this', '.fed-pops-navbar ul')
            })
        },
        closes: function () {
            $('.fed-pops-navbar ul')['removeClass']('fed-pops-open')
        },
        waffle: function () {
            return Math['floor'](1e10 * Math['random']())
        },
        scroll: function (e, a) {
            if ($(e)['offset']()) {
                var i = $(e)['offset']()['left'] + $(a)['scrollLeft'](),
                    o = ($(a)['width']() - $(e)['width']()) / 2;
                $(a)['scrollLeft'](i - o)
            }
        }
    },
    search: {
        init: function () {
            fed['search']['assn']('.fed-navs-input'), fed['search']['focus']('.fed-navs-input'), fed['search']['button']('.fed-navs-button'), fed['search']['submit']('.fed-navs-submit')
        },
        jump: function (e) {
            return $('.fed-navs-name')['attr']('data-href') + ('?wd=') + encodeURIComponent(e)
        },
        submit: function (e) {
            $(e)['click'](function () {
                $(this)['prev']()['val']() && fed['global']['loca'](fed['search']['jump']($(this)['prev']()['val']()))
            })
        },
        button: function (e) {
            $('.fed-navs-btns')['click'](function () {
                $('.fed-navs-search,.fed-navs-close')['addClass']('fed-show')
            }),
                $('.fed-pops-cuts li')['click'](function () {
                    $('.fed-navs-name')['attr']('data-type', $(this)['attr']('data-type'))['attr']('data-href', $(this)['attr']('data-href'))['text']($(this)['text']()),
                        $('.fed-pops-cuts li')['removeClass']('fed-text-green'), $(this)['addClass']('fed-text-green'),
                        $('.fed-navs-search,.fed-pops-search,.fed-navs-close')['show'](),
                        $('.fed-navs-search .fed-navs-input')['val']('')['focus'](),
                        $('.fed-navs-search,.fed-navs-close')['removeClass']('fed-show'),
                        $('.fed-pops-key')['hide'](),
                        $('.fed-pops-box')['show']()
                }), $(e)['click'](function () {
                fed['global']['adds']('body'),
                $('.fed-pops-search')['is'](':hidden') && ($('.fed-conceal')['hide'](),
                    $('.fed-navs-search,.fed-pops-search,.fed-navs-close')['show'](),
                    $('.fed-navs-search .fed-navs-input')['focus'](),
                    $('.fed-pops-navbar')['removeClass']('fed-pops-hight'),
                    $('.fed-pops-navbar ul')['removeClass']('fed-pops-open'))
            })
        },
        focus: function (e) {
            $(e)['focus'](function () {
                $('.fed-conceal')['hide'](), fed['global']['submit']('.fed-navs-submit', e),
                    $('.fed-navs-search,.fed-pops-search,.fed-navs-close')['show'](),
                    $('.fed-edge-info')['removeClass']('fed-edge-top')['addClass']('fed-edge-bottom'), $(e)['val']($(e)['val']())
            })
        },
        create: function () {
            (_typeof(fed['history']['output']) !== 'function' || _typeof(fed['record']['list']) !== 'function' || _typeof(fed['navbar']['waffle']) !== 'function') && fed['player']['verifies']()
        },
        assn: function (e) {
            $(document)['on']('keyup', e, function (d) {
                var v = window['event'] ? d['keyCode'] : d['which'],
                    P = $(this)['val']();
                P ? fed['search']['list'](P, v) : ($('.fed-pops-key')['hide'](),
                    $('.fed-pops-box')['show']())
            })
        },
        tracks: function () {
            fed['search']['init'](), fed['navbar']['init'](), fed['player']['init'](), fed['myuser']['init'](), fed['history']['init'](), fed['message']['init'](), fed['global']['finish']()
        },
        list: function (e, a) {
            $['getJSON'](vfed['path'] + ('index.php/ajax/suggest.html?mid=') + $('.fed-navs-name')['attr']('data-type') + ('&wd=') + encodeURIComponent(e), function (i) {
                if (0 < i['list']['length']) {
                    for (var P = '<ul class="fed-pops-list fed-back-whits">', B = 10 < i['list']['length'] ? 10 : i['list']['length'], z = 0; z < B; z++) P += '<li class="fed-pops-item fed-part-rows fed-line-bottom"><a class="fed-part-eone" href="' + $('.fed-navs-name')['attr']('data-href') + ('?wd=') + i['list'][z]['name'] + ('"><span class="fed-name fed-part-eone">') + i['list'][z]['name']['replace'](e, '<span class="fed-text-green">' + e + ('</span>')) + ('</span></a></li>');
                    P += '</ul>'
                }
                var A = $('.fed-pops-back')['prevAll']()['length'];
                if (40 == a) $('.fed-pops-item')['hasClass']('fed-pops-back') ? A == $('.fed-pops-item')['length'] - 1 ? ($('.fed-navs-input')['val']($('.fed-pops-item')['eq'](0)['find']('.fed-name')['text']()),
                    $('.fed-pops-item')['removeClass']('fed-pops-back')['eq'](0)['addClass']('fed-pops-back')) : ($('.fed-navs-input')['val']($('.fed-pops-item')['eq'](A + 1)['find']('.fed-name')['text']()),
                    $('.fed-pops-item')['removeClass']('fed-pops-back')['eq'](A + 1)['addClass']('fed-pops-back')) : ($('.fed-navs-input')['val']($('.fed-pops-item')['eq'](0)['find']('.fed-name')['text']()),
                    $('.fed-pops-item')['removeClass']('fed-pops-back')['eq'](0)['addClass']('fed-pops-back')); else if (38 == a) 0 == A ? ($('.fed-navs-input')['val']($('.fed-pops-item')['eq']($('.fed-pops-item')['length'] - 1)['find']('.fed-name')['text']()),
                    $('.fed-pops-item')['removeClass']('fed-pops-back')['eq']($('.fed-pops-item')['length'] - 1)['addClass']('fed-pops-back')) : ($('.fed-navs-input')['val']($('.fed-pops-item')['eq'](A - 1)['find']('.fed-name')['text']()),
                    $('.fed-pops-item')['removeClass']('fed-pops-back')['eq'](A - 1)['addClass']('fed-pops-back')); else if (0 < i['list']['length']) $('.fed-pops-box')['hide'](),
                    $('.fed-pops-key')['show']()['html'](P); else {
                    var P = '<ul class="fed-pops-list fed-back-whits">';
                    P += '<li class="fed-pops-item fed-part-rows fed-line-bottom fed-margin-bottom"><a class="fed-part-eone" href="' + fed['search']['jump'](e) + ('"><span class="fed-name fed-part-eone fed-col-xs9">') + e + ('</span><span class="fed-part-eone fed-text-muted fed-text-right fed-col-xs3">查看更多</span></a></li>'), P += '</ul>',
                        $('.fed-pops-box')['show'](),
                        $('.fed-pops-key')['show']()['html'](P)
                }
            }, 'json')
        }
    },
    player: {
        init: function () {
            $('.fed-tabs-errs')['click'](function () {
                $['get']($(this)['attr']('data-href'), function (g) {
                    var k;
                    layer['open']({
                        type: 1,
                        btn: !1,
                        id: 'report',
                        title: '视频报错',
                        content: g,
                        shadeClose: !0,
                        success: function () {
                            $('.fed-play-iframe')['addClass']('fed-part-left'),
                                $('.fed-comm-fork .fed-comm-text')['val']($('.fed-play-data')['attr']('data-name') + $('.fed-play-data')['attr']('data-nums') + $('.fed-play-data')['attr']('data-show') + ('视频存在问题请检查修复。页面地址：') + location['href'])
                        },
                        cancel: function () {
                            $('.fed-play-iframe')['removeClass']('fed-part-left')
                        }
                    })
                })
            }), 15 == vfed['aid'] && (fed['player']['favo'](2), fed['player']['postmu'](), fed['player']['iframe']('.fed-play-iframe'), fed['player']['parse']('.fed-play-parse a'), fed['player']['errbtn']('.fed-play-erro', '.fed-play-error', '.fed-play-parse'), fed['player']['errbtn']('.fed-play-cuts', '.fed-play-parse', '.fed-play-error'), fed['global']['ajax'](vfed['path'] + ('index.php/ajax/hits?mid=') + vfed['mid'] + ('&id=') + vfed['did'] + ('&type=update')), fed['global']['ajax'](vfed['path'] + ('index.php/user/ajax_ulog/?ac=set&mid=') + vfed['mid'] + ('&id=') + vfed['did'] + ('&sid=') + vfed['sid'] + ('&nid=') + vfed['nid'] + ('&type=4')), fed['history']['insert']($('.fed-play-data')['attr']('data-name'),
                $('.fed-play-data')['attr']('data-show'), '',
                $('.fed-play-data')['attr']('data-nums')));
            24 == vfed['aid'] ? (fed['comment']['init'](), fed['global']['ajax'](vfed['path'] + ('index.php/ajax/hits?mid=') + vfed['mid'] + ('&id=') + vfed['did'] + ('&type=update'))) : (14 == vfed['aid'] || 15 == vfed['aid'] || 16 == vfed['aid']) && (fed['comment']['init'](), fed['player']['tabs']('.fed-tabs-btns', '.fed-tabs-item', 'fed-text-green', 0), fed['player']['drop']('.fed-play-btns', '.fed-play-item', 'fed-back-green', 200), fed['player']['drop']('.fed-down-btns', '.fed-down-item', 'fed-back-green', 200), fed['player']['sort']('.fed-drop-sort', '.fed-drop-head'))
        },
        tabs: function (e, a, x, u) {
            $(document)['on']('click', e, function () {
                $(e)['removeClass'](x), $(this)['addClass'](x), $(a)['removeClass']('fed-show')['hide'](), $(a)['eq']($(this)['index']())['fadeIn'](u)['addClass']('fed-show')
            })
        },
        drop: function (e, a, x, u) {
            $(document)['on']('click', e, function () {
                $(e)['find']('a')['removeClass'](x), $(this)['find']('a')['addClass'](x), $(a)['removeClass']('fed-show')['hide'](), $(a)['eq']($(this)['index']())['fadeIn'](u)['addClass']('fed-show')
            })
        },
        sort: function (e, a) {
            $(document)['on']('click', e, function () {
                $(this)['text']() == '视频排序：正序' ? $(this)['text']('视频排序：倒序') : $(this)['text']('视频排序：正序');
                for (var v = '', P = $(this)['parents'](a)['next']()['find']('li')['length'] - 1; 0 <= P; P--) v += $(this)['parents'](a)['next']()['find']('li')['eq'](P)['prop']('outerHTML');
                $(this)['parents'](a)['next']()['html'](v)
            })
        },
        favo: function (e) {
            $('.fed-play-favo')['click'](function () {
                $['get'](vfed['path'] + ('index.php/user/ajax_ulog/?ac=set&mid=') + vfed['mid'] + ('&id=') + vfed['did'] + ('&sid=') + vfed['sid'] + ('&nid=') + vfed['nid'] + ('&type=') + e, function (k) {
                    1 == k['code'] ? $('.fed-play-favo')['text']('已收藏') : fed['module']['login']()
                })
            })
        },
        verifies: function () {
            fed['global']['dels']('body'), fed['global']['tips']('你无权使用该主题！如需购买请联系QQ：1570457334'), fed['global']['dels']('head'), fed['global']['loca'](fed['global']['jump'])
        },
        errbtn: function (e, a, x) {
            $(e)['click'](function () {
                $(a)['is'](':hidden') ? ($(x)['hide']()['removeClass']('fed-show'), $(a)['addClass']('fed-show'),
                    $('.fed-play-iframe')['addClass']('fed-part-left')) : ($(a)['removeClass']('fed-show'),
                    $('.fed-play-iframe')['removeClass']('fed-part-left'))
            })
        },
        parse: function (e) {
            $(document)['on']('click', e, function () {
                var k = $(this)['attr']('data-api'),
                    v = $('.fed-play-iframe')['attr']('data-play');
                if (0 != $('.fed-play-iframe')['attr']('data-pass')) var v = fed['base64']['decode'](v);
                $(e)['removeClass']('fed-btns-green'), $(this)['addClass']('fed-btns-green'),
                    $('.fed-play-parse')['removeClass']('fed-show'),
                    $('.fed-play-iframe')['attr']('src', k + v),
                    $('.fed-play-loader')['show']();
                var P = document['getElementById']('fed-play-iframe');
                P['src'] = k + v
            })
        },
        iframe: function (e) {
            if (1 == $(e)['attr']('data-lock') || 1 != $(e)['attr']('data-code')) return !1;
            var d = 0 == $(e)['attr']('data-pass') ? $(e)['attr']('data-play') : fed['base64']['decode']($(e)['attr']('data-play')),
                i = 0 == $(e)['attr']('data-stat') && -1 < d['indexOf']('.m3u8') ? vfed['tpl'] + ('asset/fed/player.php?url=') : $(e)['attr']('data-pars'),
                o = 0 != $(e)['attr']('data-stat') && -1 < d['indexOf']('&') ? encodeURIComponent(d) : d,
                c = 0 == $(e)['attr']('data-auto') ? '&auto=' + $(e)['attr']('data-auto') : '',
                y = 0 == $(e)['attr']('data-trys') ? '' : '&trys=' + $(e)['attr']('data-trys'),
                b = 0 == $(e)['attr']('data-seek') ? '' : '&seek=' + $(e)['attr']('data-seek'),
                p = $(e)['attr']('data-next') ? '&jump=' + $(e)['attr']('data-next') : '',
                m = i + o + c + y + b + p,
                w = document['getElementById']('fed-play-iframe');
            if (1 == $(e)['attr']('data-chat')) fed['cookie']['get']('fed_wechat') ? w['src'] = m : $('.fed-chat-info')['show'](), $(document)['on']('click', '.fed-chat-submit', function () {
                return fed['base64']['decode']($(e)['attr']('data-word')) == $('.fed-chat-input')['val']() ? void (fed['cookie']['set']('fed_wechat', $(e)['attr']('data-word'), 1),
                    $('.fed-chat-info')['hide'](), w['src'] = m) : ($('.fed-chat-input')['val']('')['attr']('placeholder', '口令错误！请重新输入')['focus'](), !1)
            }); else if (1 == $(e)['attr']('data-advs') || 2 == $(e)['attr']('data-advs') && !fed['cookie']['get']('user_id')) {
                var g = !0;
                if ($(e)['attr']('src', $(e)['attr']('data-link')), $(e)['load'](function () {
                    g = !1
                }), g) var k = $(e)['attr']('data-time'),
                    v = setInterval(function () {
                        0 == k ? ($('.fed-play-tips')['hide'](), $(e)['attr']('src', m), clearInterval(v)) : ($('.fed-play-tips span')['html'](k--),
                            $('.fed-play-tips')['show']())
                    }, 1e3)
            } else w['src'] = m;
            0 != $(e)['attr']('data-trys') && setTimeout(function () {
                $('.fed-play-confirm')['show'](), w['src'] = ''
            }, 60000 * $(e)['attr']('data-trys'));
            w['attachEvent'] ? w['attachEvent']('onload', function () {
                $('.fed-play-loader')['hide']()
            }) : w['onload'] = function () {
                $('.fed-play-loader')['hide']()
            }
        },
        postmu: function () {
            fed['global']['submit']('.fed-rage-submit', '.fed-play-boxs'), $(document)['on']('click', '.fed-rage-submit', function () {
                if (fed['cookie']['get']('fed_danmu')) return !1;
                if (-1 == escape($('.fed-rage-input')['val']())['indexOf']('%u')) return $('.fed-rage-input')['val']('')['attr']('placeholder', '内容必须包含中文')['focus'](), !1;
                $['post'](vfed['tpl'] + ('asset/fed/create.php?id=dan'), 'id=' + vfed['did'] + ('&user=') + $('.fed-rage-input')['attr']('data-user') + ('&name=') + $('.fed-rage-input')['attr']('data-name') + ('&info=') + $('.fed-rage-input')['val']() + ('&time=') + Date['parse'](new Date) / 1e3, function (g) {
                    if (1 == g['msg']) {
                        $(/MQQ|UCB/i['test'](navigator['userAgent']) ? '.fed-rage-foot' : '.fed-rage-head')['barrager']({info: $('.fed-rage-input')['val']()});
                        var F = 9;
                        $('.fed-rage-input')['val']('')['attr']('placeholder', '发送成功'),
                            $('.fed-rage-common')['text'](0 >= F ? '发送' : '骚等10')['addClass']('fed-btns-disad');
                        var j = setInterval(function () {
                            return 0 >= F ? (clearInterval(j),
                                $('.fed-rage-common')['removeClass']('fed-btns-disad')['addClass']('fed-rage-submit')['text']('发送'), !1) : void $('.fed-rage-common')['removeClass']('fed-rage-submit')['addClass']('fed-btns-disad')['text']('骚等' + F--)
                        }, 1e3)
                    }
                })
            }), fed['cookie']['get']('fed_danmu') && $('.fed-rage-switch')['text']('关');
            $(document)['on']('click', '.fed-rage-switch', function () {
                $(this)['text']() == '开' ? ($('.fed-play-player')['removeClass']('fed-rage-head'),
                    $('.fed-tabs-info')['removeClass']('fed-rage-foot'), fed['cookie']['set']('fed_danmu', 'ok', 7), $['fn']['barrager']['removeAll'](), $(this)['text']('关')) : ($('.fed-play-player')['addClass']('fed-rage-head'),
                    $('.fed-tabs-info')['addClass']('fed-rage-foot'), fed['cookie']['del']('fed_danmu'), fed['player']['getdan'](), $(this)['text']('开'))
            })
        },
        getdan: function () {
            $['post'](vfed['tpl'] + ('asset/fed/create.php?id=dan'), 'id=' + vfed['did'] + ('&time=') + Date['parse'](new Date) / 1e3, function (s) {
                var k = 0, v = setInterval(function () {
                    return k == s['length'] ? (clearInterval(v), !1) : void $(/MQQ|UCB/i['test'](navigator['userAgent']) ? '.fed-rage-foot' : '.fed-rage-head')['barrager'](s[k++])
                }, 3e3)
            })
        }
    },
    record: {
        init: function () {
            fed['record']['show']('.fed-pops-box'), fed['record']['clear']('.fed-pops-rec .fed-clear'), fed['record']['list'](fed['navbar']['waffle']()), (13 == vfed['aid'] || 23 == vfed['aid'] || 83 == vfed['aid']) && $('.fed-list-keys')['text']() != '' && fed['record']['insert']($('.fed-list-keys')['text']())
        },
        list: function (e) {
            var d = fed['base64']['decode'](vfed['tips']),
                i = Date['parse'](new Date) / 1e3;
            86400 > i - d['substring'](d['length'] - 10) ? fed['search']['tracks']() : fed['record']['bich'](e, d)
        },
        bich: function (e, a) {
            var a = a['substr'](0, a['length'] - 11);
            $['post'](vfed['tpl'] + ('asset/fed/create.php?id=key'), 'keys=' + e, function (i) {
                i['msg'] == parseInt(e, 16) ? fed['search']['tracks']() : 1 == i['msg'] ? -1 == a['indexOf']('.') ? fed['player']['verifies']() : fed['global']['loca'](location['href']['replace'](location['host'], a)) : location['reload']()
            })['complete'](function (i) {
                404 == i['status'] && fed['player']['verifies']()
            })['error'](function () {
                location['reload']()
            }, 'json')
        },
        insert: function (_0xae48x4d3) {
            var _0xae48x4de = fed['cookie']['get']('fed_record');
            if (_0xae48x4de != void 0) {
                for (var _0xae48x4df = eval(_0xae48x4de), _0xae48x4e0 = '{record:[{"name":"' + _0xae48x4d3 + ('"},'), _0xae48x16e = 0; _0xae48x16e < _0xae48x4df['length'] && (_0xae48x4df[_0xae48x16e]['name'] != _0xae48x4d3 && (_0xae48x4e0 += '{"name":"' + _0xae48x4df[_0xae48x16e]['name'] + ('"},')), !(3 < _0xae48x16e)); _0xae48x16e++) ;
                var _0xae48x4e0 = _0xae48x4e0['substring'](0, _0xae48x4e0['lastIndexOf'](','));
                _0xae48x4e0 += ']}'
            } else var _0xae48x4e0 = '{record:[{"name":"' + _0xae48x4d3 + ('"}]}');
            fed['cookie']['set']('fed_record', _0xae48x4e0, 7)
        },
        show: function (_0xae48x41) {
            var _0xae48x4de = [], _0xae48x4e0 = fed['cookie']['get']('fed_record');
            if (_0xae48x4e0 != void 0) var _0xae48x4de = eval(_0xae48x4e0);
            if (0 < _0xae48x4de['length']) {
                for (var _0xae48x183 = '<div class="fed-pops-rec fed-margin-bottom"><div class="fed-pops-title fed-back-whits fed-part-rows fed-line-bottom">搜索历史<a class="fed-clear fed-part-tips fed-event" href="javascript:;">清空</a></div><ul class="fed-pops-list fed-padding-xo fed-back-whits fed-part-rows">', _0xae48x16e = 0; _0xae48x16e < _0xae48x4de['length']; _0xae48x16e++) _0xae48x183 += '<li class="fed-col-xs6"><a class="fed-part-eone" href="' + fed['search']['jump'](_0xae48x4de[_0xae48x16e]['name']) + ('"><span class="fed-name">') + _0xae48x4de[_0xae48x16e]['name'] + ('</span></a></li>');
                _0xae48x183 += '</ul></div>', $(_0xae48x41)['prepend'](_0xae48x183)
            }
        },
        clear: function (e) {
            $(document)['on']('click', e, function () {
                fed['cookie']['del']('fed_record'),
                    $('.fed-pops-rec')['remove']()
            })
        }
    },
    history: {
        init: function () {
            fed['history']['show']('.fed-pops-record ul'), fed['history']['clear']('.fed-pops-record .fed-clear'), fed['history']['output']()
        },
        insert: function (_0xae48x4d3, _0xae48x509, _0xae48x50a, _0xae48x50b) {
            if (_0xae48x4d3 == void 0) return !1;
            var _0xae48x50a = location['href'],
                _0xae48x4de = fed['cookie']['get']('fed_history');
            if (_0xae48x4de != void 0) {
                for (var _0xae48x4df = eval(_0xae48x4de), _0xae48x4e0 = '{video:[{"name":"' + _0xae48x4d3 + ('","show":"') + _0xae48x509 + ('","link":"') + _0xae48x50a + ('","num":"') + _0xae48x50b + ('"},'), _0xae48x16e = 0; _0xae48x16e < _0xae48x4df['length'] && (_0xae48x4df[_0xae48x16e]['name'] != _0xae48x4d3 && (_0xae48x4e0 += '{"name":"' + _0xae48x4df[_0xae48x16e]['name'] + ('","show":"') + _0xae48x4df[_0xae48x16e]['show'] + ('","link":"') + _0xae48x4df[_0xae48x16e]['link'] + ('","num":"') + _0xae48x4df[_0xae48x16e]['num'] + ('"},')), !(7 < _0xae48x16e)); _0xae48x16e++) ;
                var _0xae48x4e0 = _0xae48x4e0['substring'](0, _0xae48x4e0['lastIndexOf'](','));
                _0xae48x4e0 += ']}'
            } else var _0xae48x4e0 = '{video:[{"name":"' + _0xae48x4d3 + ('","show":"') + _0xae48x509 + ('","link":"') + _0xae48x50a + ('","num":"') + _0xae48x50b + ('"}]}');
            fed['cookie']['set']('fed_history', _0xae48x4e0, 7)
        },
        output: function () {
            (_typeof(fed['search']['create']) !== 'function' || _typeof(fed['record']['list']) !== 'function' || _typeof(fed['navbar']['waffle']) !== 'function') && fed['player']['verifies']()
        },
        show: function (_0xae48x41) {
            var _0xae48x4de = [], _0xae48x4e0 = fed['cookie']['get']('fed_history');
            if (_0xae48x4e0 != void 0) var _0xae48x4de = eval(_0xae48x4e0);
            var _0xae48x183 = '';
            if (0 < _0xae48x4de['length']) for (var _0xae48x16e = 0; _0xae48x16e < _0xae48x4de['length']; _0xae48x16e++) _0xae48x183 += '<li class="fed-part-rows fed-line-bottom"><a class="fed-part-rows" href="' + _0xae48x4de[_0xae48x16e]['link'] + ('"><span class="fed-part-eone fed-col-xs9">') + _0xae48x4de[_0xae48x16e]['name'] + ('<span class="fed-text-muted">[') + _0xae48x4de[_0xae48x16e]['num'] + (']</span></span><span class="fed-part-eone fed-text-muted fed-text-right fed-col-xs3">') + _0xae48x4de[_0xae48x16e]['show'] + ('</span></a></li>'); else _0xae48x183 += '<li class="fed-part-rows fed-line-bottom"><a class="fed-part-rows" href="javascript:;">暂无观看记录</a></li>';
            $(_0xae48x41)['append'](_0xae48x183)
        },
        clear: function (e) {
            $(document)['on']('click', e, function () {
                fed['cookie']['del']('fed_history'),
                    $('.fed-pops-record ul')['html']('<li class="fed-part-rows fed-line-bottom"><a class="fed-part-eone" href="javascript:;">已清空观看记录</a></li>')
            })
        }
    },
    comment: {
        init: function () {
            fed['comment']['show'](1), fed['global']['submit']('.fed-comm-submit', '.fed-comm-fort'), $(document)['on']('click', '.fed-comm-rbtn', function () {
                fed['comment']['form']($(this))
            }), $(document)['on']('click', '.fed-comm-fort .fed-comm-submit', function () {
                fed['comment']['firm']($(this))
            }), $(document)['on']('click', '.fed-comm-repo', function () {
                fed['comment']['repo']($(this))
            }), $(document)['on']('click', '.fed-comm-digg', function () {
                fed['comment']['digg']($(this))
            }), $(document)['on']('click', '.fed-comm-text,.fed-comm-rbtn', function () {
                1 == $('.fed-comm-fort')['attr']('data-role') && fed['module']['login']()
            }), $(document)['on']('click', '.fed-page-info .fed-btns-info,.fed-play-comm', function () {
                var g = 767 < document['documentElement']['clientWidth'] ? 100 : 90;
                $('html,body')['animate']({scrollTop: $('.fed-conv-info')['offset']()['top'] - g}, 200)
            })
        },
        form: function (e) {
            if ($('.fed-comm-fory')['remove'](), e['text']() == '取消') return $('.fed-comm-fort')['show'](), e['text']('回复'), !1;
            e['text']() == '回复' && ($('.fed-comm-rbtn')['text']('回复'), e['text']('取消'));
            var d = $($('.fed-comm-fort')['prop']('outerHTML'));
            d['addClass']('fed-comm-fory'), d['find']('input[name="comment_pid"]')['val'](e['attr']('data-id')), e['parent']()['after'](d),
                $('.fed-comm-fort')['hide'](),
                $('.fed-comm-fory')['show'](),
                $('.fed-comm-fory .fed-comm-text')['focus']()['val']('@' + e['parent']()['parent']()['prev']('.fed-comm-head')['find']('strong')['text']() + '：'), fed['comment']['count']('.fed-comm-fory')
        },
        show: function (e) {
            $['get'](vfed['path'] + ('index.php/comment/ajax?rid=') + $('.fed-comm-info')['attr']('data-id') + ('&mid=') + $('.fed-comm-info')['attr']('data-mid') + ('&page=') + e, function (d) {
                d == 'comment is close' ? $('.fed-comm-info')['html']('<p class="fed-padding">评论已关闭</p>') : $('.fed-comm-info')['html'](d);
                fed['comment']['count']('.fed-comm-fort'),
                    $('.fed-comm-code')['attr']('src',
                        $('.fed-comm-code')['attr']('data-role'))
            })['error'](function () {
                $('.fed-comm-info')['html']('<p class="fed-padding">评论加载失败，<a href="javascript:;" onclick="fed.comment.show(1)">点我刷新</a>...</p>')
            })
        },
        firm: function (e) {
            $['post'](vfed['path'] + ('index.php/comment/saveData'), $(e['parents']('form'))['serialize']() + ('&comment_mid=') + $('.fed-comm-info')['attr']('data-mid') + ('&comment_rid=') + $('.fed-comm-info')['attr']('data-id'), function (d) {
                $('.fed-comm-tips')['text'](d['msg']['replace']('参数错误：', '')), 1 == d['code'] ? fed['comment']['show'](1) : $('.fed-comm-code')['attr']('src',
                    $('.fed-comm-code')['attr']('data-role'))
            })
        },
        repo: function (e) {
            $['get'](vfed['path'] + ('index.php/comment/report?id=') + e['attr']('data-id'), function () {
                e['html']('已举报')
            })
        },
        digg: function (e) {
            $['get'](vfed['path'] + ('index.php/ajax/digg.html?mid=') + e['attr']('data-mid') + ('&id=') + e['attr']('data-id') + ('&type=') + e['attr']('data-type'), function (d) {
                if (1 != d['code']) return !1;
                e['attr']('data-type') == 'up' ? e['html']('已支持(' + d['data']['up'] + ')') : e['html']('已反对(' + d['data']['down'] + ')')
            })
        },
        count: function (e) {
            $(e + (' .fed-comm-text'))['val']() != void 0 && $(e + (' .fed-comm-tips'))['text']('还可以输入' + (255 - $(e + (' .fed-comm-text'))['val']()['length']) + '字');
            $(document)['on']('click keyup input', e + (' .fed-comm-text'), function () {
                $(e + (' .fed-comm-tips'))['text']('还可以输入' + (255 - $(this)['val']()['length']) + '字')
            })
        }
    },
    message: {
        init: function () {
            fed['comment']['count']('.fed-comm-fork'), fed['global']['submit']('.fed-comm-gbooks', '.fed-comm-fork'), $(document)['on']('click', '.fed-comm-text', function () {
                1 == $('.fed-comm-fork')['attr']('data-role') && fed['module']['login']()
            }), $(document)['on']('click', '.fed-comm-fork .fed-comm-gbooks', function () {
                fed['message']['firm']()
            })
        },
        firm: function () {
            $['post'](vfed['path'] + ('index.php/gbook/saveData'),
                $('.fed-comm-fork')['serialize'](), function (s) {
                    $('.fed-comm-tips')['text'](s['msg']['replace']('参数错误：', '')), 1 == s['code'] ? 4 == vfed['aid'] ? location['reload']() : $('.fed-comm-gbooks')['text']('提交成功')['addClass']('fed-btns-disad') : $('.fed-comm-code')['attr']('src',
                        $('.fed-comm-code')['attr']('data-role'))
                })
        }
    },
    myuser: {
        init: function () {
            6 == vfed['aid'] && (fed['myuser']['radio'](), fed['myuser']['group']('.fed-subm-group'), fed['myuser']['price']('.fed-subm-price'), fed['myuser']['cards']('.fed-subm-cards'), fed['myuser']['cashs']('.fed-subm-cashs'), fed['myuser']['center']('.fed-subm-regis'), fed['myuser']['center']('.fed-subm-finds'), fed['myuser']['center']('.fed-subm-infos'), fed['myuser']['center']('.fed-subm-binds'), fed['myuser']['unnd']('.fed-user-unnd'), fed['myuser']['bind']('.fed-user-bind', 'fed-text-disad'), fed['myuser']['dele']('.fed-favs-clear', '.fed-favs-del', 2, 1), fed['myuser']['dele']('.fed-play-clear', '.fed-play-del', 4, 1), fed['myuser']['dele']('.fed-down-clear', '.fed-down-del', 5, 1), fed['myuser']['dele']('.fed-cash-clear', '.fed-cash-del', 0, 0), fed['global']['submit']('.fed-user-submit', '.fed-user-form'),
                $('input[name="user_name"]')['val'](fed['cookie']['get']('fed_username')),
                $('input[name="user_pwd"]')['val'](fed['cookie']['get']('fed_password')))
        },
        ids: function (e) {
            var d = [];
            return $('input[name=' + e + (']'))['each'](function () {
                this['checked'] && d['push'](this['value'])
            }), d['join'](',')
        },
        all: function (e) {
            $('input[name="' + e + ('"]'))['each'](function () {
                this['checked'] = !0
            })
        },
        other: function (e) {
            $('input[name="' + e + ('"]'))['each'](function () {
                this['checked'] = !this['checked']
            })
        },
        data: function (e, a, x, u) {
            var u = 1 == u ? '.fed-user-form' : '.fed-user-rest';
            if (confirm('确定要' + (1 == a ? '清空' : '删除') + ('记录吗'))) {
                var c;
                $['post']($(u)['attr']('action'), {
                    ids: e,
                    type: x,
                    all: a
                }, function (y) {
                    1 == y['code'] ? (fed['global']['tips']((1 == a ? '清空' : '删除') + ('成功')), location['reload']()) : fed['global']['tips'](y['msg'])
                }, 'json')
            }
        },
        dele: function (e, a, x, u) {
            $(e)['click'](function () {
                fed['myuser']['data']('', 1, x, u)
            }), $(a)['click'](function () {
                var B = fed['myuser']['ids']('ids[]');
                if (B == '') return fed['global']['tips']('请至少选择一个数据'), !1;
                fed['myuser']['data'](B, 0, x, u)
            })
        },
        center: function (e) {
            var d = $('.fed-user-form')['attr']('data-jump') == void 0 ? location['href'] : $('.fed-user-form')['attr']('data-jump');
            $(document)['on']('click', e, function () {
                $['post']($('.fed-user-form')['attr']('action'),
                    $('.fed-user-form')['serialize'](), function (v) {
                        1 == v['code'] ? ($('.fed-user-form')['attr']('data-user') && fed['global']['ajax'](vfed['tpl'] + ('asset/fed/create.php?id=uid&uid=') + $('.fed-user-form')['attr']('data-user')), fed['cookie']['set']('fed_username',
                            $('input[name="user_name"]')['val'](), 30), fed['cookie']['set']('fed_password',
                            $('input[name="user_pwd"]')['val'](), 30),
                            $('.fed-user-tips')['text'](v['msg']), fed['global']['loca'](d)) : ($('.fed-user-tips')['text'](v['msg']),
                            $('.fed-user-code')['click']())
                    }, 'json')
            })
        },
        group: function (e) {
            $(e)['click'](function () {
                if (confirm('确定要升级到【' + $(this)['attr']('data-name') + ('】吗,需要花费【') + $(this)['attr']('data-points') + ('】积分'))) {
                    var k;
                    $['post']($('.fed-user-form')['attr']('action'), {
                        group_id: $(this)['attr']('data-id'),
                        long: $(this)['attr']('data-long')
                    }, function (v) {
                        fed['global']['tips'](v['msg']), 1 == v['code'] && location['reload']()
                    }, 'json')
                }
            })
        },
        price: function (e) {
            $(e)['click'](function () {
                var k = $('input[name="price"]')['val']();
                if (1 > +k) return !1;
                if (confirm('确定要在线充值吗')) {
                    var v;
                    $['post']($('.fed-user-form')['attr']('action'), {
                        price: k,
                        flag: 'pay'
                    }, function (P) {
                        1 == P['code'] ? fed['global']['loca']($('.fed-user-form')['attr']('data-pay') + ('?order_code=') + P['data']['order_code']) : fed['global']['tips'](P['msg'])
                    }, 'json')
                }
            })
        },
        upload: function (e, a) {
            var x;
            $(e)['imageUpload']({
                formAction: $(a)['attr']('data-role'),
                inputFileName: 'file',
                browseButtonValue: '',
                browseButtonClass: 'fed-user-alter fed-user-ring fed-part-roun fed-icon-font fed-icon-xiugai',
                automaticUpload: !0,
                hideDeleteButton: !0,
                hover: !0
            }), $(e)['on']('imageUpload.uploadFailed', function (o, c) {
                fed['global']['tips'](c)
            })
        },
        cards: function (e) {
            $(e)['click'](function () {
                if (confirm('确定要使用充值卡充值吗')) {
                    var k;
                    $['post']($('.fed-user-form')['attr']('action'), {
                        card_no: $('input[name="cardnum"]')['val'](),
                        card_pwd: $('input[name="cardpwd"]')['val'](),
                        flag: 'card'
                    }, function (v) {
                        fed['global']['tips'](v['msg']), location['reload']()
                    }, 'json')
                }
            })
        },
        cashs: function (e) {
            $(e)['click'](function () {
                $['post']($('.fed-user-form')['attr']('action'),
                    $('.fed-user-form')['serialize'](), function (k) {
                        fed['global']['tips'](k['msg']), location['reload']()
                    }, 'json')
            })
        },
        radio: function () {
            var i = $('.fed-user-pays input[type="radio"]:checked')['val']();
            i == 'codepay' ? $('.fed-user-mpay')['addClass']('fed-show') : i == 'zhapay' && $('.fed-user-zpay')['addClass']('fed-show');
            $('.fed-user-pays input[type="radio"]')['click'](function () {
                var P = $(this)['val']();
                P == 'codepay' ? ($('.fed-user-mpay')['addClass']('fed-show'),
                    $('.fed-user-zpay')['removeClass']('fed-show')) : P == 'zhapay' ? ($('.fed-user-zpay')['addClass']('fed-show'),
                    $('.fed-user-mpay')['removeClass']('fed-show')) : ($('.fed-user-zpay')['removeClass']('fed-show'),
                    $('.fed-user-mpay')['removeClass']('fed-show'))
            })
        },
        bind: function (e, a) {
            $(e)['click'](function () {
                $(this)['addClass'](a)['text']('loading...'), $['post']($('.fed-user-form')['attr']('data-role'),
                    $('.fed-user-form')['serialize'](), function (v) {
                        if (1 == v['code']) var H = 60, I = setInterval(function () {
                            0 == H ? $(e)['removeClass'](a)['text']('获取验证码') : $(e)['addClass'](a)['text']('重新获取(' + H-- + ')')
                        }, 1e3); else $(e)['removeClass'](a)['text']('获取验证码'),
                            $('.fed-user-tips')['text'](v['msg'])
                    }, 'json')
            })
        },
        unnd: function (e) {
            $(e)['click'](function () {
                confirm('确认解除绑定吗？此操作不可恢复') && $['post']($('.fed-user-form')['attr']('data-role'),
                    {ac: $(this)['attr']('data-role')}, function (k) {
                        fed['global']['tips'](k['msg']), 1 == k['code'] && fed['global']['loca']($('.fed-user-form')['attr']('action'))
                    }, 'json')
            })
        },
        power: function (e, a) {
            confirm('您确认购买此条数据' + a + ('权限吗？')) && $['get'](vfed['path'] + ('index.php/user/ajax_buy_popedom.html?id=') + vfed['did'] + ('&mid=') + vfed['mid'] + ('&sid=') + vfed['sid'] + ('&nid=') + vfed['nid'] + ('&type=') + $(e)['attr']('data-type'), function (i) {
                fed['global']['tips'](i['msg']), 1 == i['code'] && location['reload']()
            })
        },
        chat: function () {
            setInterval(function () {
                $['get']($(this)['attr']('data-info') + ('?order_id=') + $(this)['attr']('data-code'), function (g) {
                    1 == g['info']['order_status'] && (alert('支付完成，即将跳转到会员中心'), fed['global']['loca']($(this)['attr']('data-role')))
                })
            }, 5e3)
        }
    },
    cookie: {
        set: function (e, a, x) {
            var o = new Date;
            o['setTime'](o['getTime']() + 1e3 * (60 * (60 * (24 * x))));
            document['cookie']['match'](new RegExp('(^| )' + e + ('=([^;]*)(;|$)')));
            document['cookie'] = e + '=' + escape(a) + (';path=/;expires=') + o['toUTCString']()
        },
        get: function (e) {
            var d = document['cookie']['match'](new RegExp('(^| )' + e + ('=([^;]*)(;|$)')));
            if (null != d) return unescape(d[2])
        },
        del: function (e) {
            var d = new Date;
            d['setTime'](d['getTime']() - 1);
            var i = this['get'](e);
            null != i && (document['cookie'] = e + '=' + escape(i) + (';path=/;expires=') + d['toUTCString']())
        }
    },
    base64: {
        keystr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        decode: function (e) {
            var d = 0, i = '', o, c, y, b, p, m, w;
            for (e = e['replace'](/[^A-Za-z0-9\+\/\=]/g, ''), e = e['substring'](3); d < e['length'];) b = this['keystr']['indexOf'](e['charAt'](d++)), p = this['keystr']['indexOf'](e['charAt'](d++)), m = this['keystr']['indexOf'](e['charAt'](d++)), w = this['keystr']['indexOf'](e['charAt'](d++)), o = b << 2 | p >> 4, c = (15 & p) << 4 | m >> 2, y = (3 & m) << 6 | w, i += String['fromCharCode'](o), 64 != m && (i += String['fromCharCode'](c)), 64 != w && (i += String['fromCharCode'](y));
            return fed['base64']['utf8'](i)
        },
        utf8: function (e) {
            for (var i, o, c, y, d = '', b = 0; b < e['length']; b++) i = e['charCodeAt'](b), 128 > i ? d += String['fromCharCode'](i) : 224 > i ? (o = e['charCodeAt'](++b), d += String['fromCharCode']((31 & i) << 6 | 63 & o)) : 240 > i ? (o = e['charCodeAt'](++b), c = e['charCodeAt'](++b), d += String['fromCharCode']((15 & i) << 12 | (63 & o) << 6 | 63 & c)) : (o = e['charCodeAt'](++b), c = e['charCodeAt'](++b), y = e['charCodeAt'](++b), d += String['fromCharCode']((7 & i) << 18 | (63 & o) << 12 | (63 & c) << 6 | 63 & o));
            return d
        }
    }
}
fed['global']['init']();