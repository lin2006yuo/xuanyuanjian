<template>
    <div class="top_topBar">
        <div class="topBar-main">
            <a href="#" class="topBar-logo"></a>
            <div class="topBar-mid">
                <a href="#">注册帐号</a>
                <a href="#">安卓充值</a>
            </div>
            <div class="topBar-right">
                <a href="#">领取网易严选宝箱</a>
            </div>
            <div class="topBar-menu" @mouseover="mouseoverHandle" @mouseout="mouseoutHandle">
                <span :class="{hover: ishover}">网易游戏全目录
                    <em class="topBar-arrIcon">
                        <i></i>
                    </em>
                </span>
                <div class="table" :class="{hover: ishover,moreAni: isShowMoreMobi}" @mouseover="mouseoverHandle" @mouseout="mouseoutHandle">
                    <ul class="nav">
                        <li><b>客户端游戏</b></li>
                        <li class="mobi"><b>手机游戏</b></li>
                        <li class="last_th"><b>游戏辅助</b></li>
                    </ul>
                    <ul class="list">
                        <li>
                            <p>角色扮演</p>
                            <a href="#"><em class="topBar-1st">梦幻西游电脑版</em></a>
                            <a href="#"><em class="topBar-hot">大话2经典版</em></a>
                            <a href="#"><em class="topBar-hot">天下3</em></a>
                            <a href="#"><em class="topBar-new">新倩女幽魂</em></a>
                            <a href="#"><em class="topBar-new">新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                        </li>
                        <li class="li_right" :class="{showMore: isshowMore}">
                            <p>休闲/竞技</p>
                            <a href="#"><em>梦幻西游电脑版</em></a>
                            <a href="#"><em>大话2经典版</em></a>
                            <a href="#"><em>天下3</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="javascript:;" class="topBar-more" :class="{open: isshowMore}" @click="showMore">{{text}}</a>
                        </li>
                        <li style="margin-left:20px">
                            <p>&nbsp;</p>
                            <a href="#">暗黑破坏神3</a>
                            <a href="#">新飞飞</a>
                            <a href="#">精灵传说</a>
                        </li>
                        <li class="hot">
                            <p>热门推荐</p>
                            <a href="#"><em>梦幻西游电脑版</em></a>
                            <a href="#"><em>大话2经典版</em></a>
                            <a href="#"><em>天下3</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                            <a href="#"><em>新倩女幽魂</em></a>
                        </li>
                        <li class="news">
                            <p>新品推荐</p>
                            <div class="list-new">
                                <div class="long-news">
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>                          
                                    <a href="#"><em>花与剑</em></a>                          
                                </div>
                                <div class="long-news">
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>
                                    <a href="#"><em>梦幻西游</em></a>
                                    <a href="#"><em>我的世界</em></a>
                                    <a href="#"><em>花与剑</em></a>                          
                                    <a href="#"><em>花与剑</em></a>                          
                                </div>
                                <div class="short-news">
                                    <a href="#"><em>叛逆性百万亚瑟王</em></a>
                                    <a href="#"><em>狼人杀</em></a>
                                    <a href="#"><em>魔法禁书目录</em></a>
                                    <a href="#"><em>梦幻西游无双</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                    <a href="#"><em>叛逆性百万亚瑟王</em></a>
                                    <a href="#"><em>狼人杀</em></a>
                                    <a href="#"><em>魔法禁书目录</em></a>
                                    <a href="#"><em>梦幻西游无双</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                    <a href="#"><em>叛逆性百万亚瑟王</em></a>
                                    <a href="#"><em>狼人杀</em></a>
                                    <a href="#"><em>魔法禁书目录</em></a>
                                    <a href="#"><em>梦幻西游无双</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                </div>
                                <div class="short-news">
                                    <a href="#"><em>叛逆性百万亚瑟王</em></a>
                                    <a href="#"><em>狼人杀</em></a>
                                    <a href="#"><em>魔法禁书目录</em></a>
                                    <a href="#"><em>梦幻西游无双</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                    <a href="#"><em>叛逆性百万亚瑟王</em></a>
                                    <a href="#"><em>狼人杀</em></a>
                                    <a href="#"><em>魔法禁书目录</em></a>
                                    <a href="#"><em>梦幻西游无双</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                    <a href="#"><em>叛逆性百万亚瑟王</em></a>
                                    <a href="#"><em>狼人杀</em></a>
                                    <a href="#"><em>魔法禁书目录</em></a>
                                    <a href="#"><em>梦幻西游无双</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                </div>
                                <div class="short-news">
                                    <a href="#"><em>叛逆性百万亚瑟王</em></a>
                                    <a href="#"><em>狼人杀</em></a>
                                    <a href="#"><em>魔法禁书目录</em></a>
                                    <a href="#"><em>梦幻西游无双</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                    <a href="#"><em>叛逆性百万亚瑟王</em></a>
                                    <a href="#"><em>狼人杀</em></a>
                                    <a href="#"><em>魔法禁书目录</em></a>
                                    <a href="#"><em>梦幻西游无双</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                    <a href="#"><em>叛逆性百万亚瑟王</em></a>
                                    <a href="#"><em>狼人杀</em></a>
                                    <a href="#"><em>魔法禁书目录</em></a>
                                    <a href="#"><em>梦幻西游无双</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                    <a href="#"><em>魂之轨迹</em></a>
                                </div>
                                <div class="short-news">
                                    <a href="http://yhl.163.com/?from=nietop" target="_blank">倩女幽魂录</a>
                                    <a href="http://hzhy.163.com/?from=nietop" target="_blank">魂之幻影</a>  
                                    <a href="http://dtyxj.163.com/?from=nietop" target="_blank">大唐游仙记</a>
                                    <a href="http://txhd.163.com/?from=nietop" target="_blank">天下HD</a>
                                    <a href="http://jx.163.com/?from=nietop" target="_blank">无尽战区·觉醒</a>
                                    <a href="http://jjwz.163.com/?from=nietop" target="_blank">荆棘王座</a>
                                    <a href="http://sm.163.com/?from=nietop" target="_blank">西游神魔决</a>
                                    <a href="http://sq.163.com/?from=nietop" target="_blank">有杀气童话</a>
                                    <a href="http://puppy.163.com/?from=nietop" target="_blank">小汪汪</a>
                                    <a href="http://xsd.163.com/?from=nietop" target="_blank">小时代官方游戏</a>
                                    <a href="http://ywl.163.com/?from=nietop" target="_blank">妖刀少女异闻录</a>
                                    <a href="http://tnj.163.com/?from=nietop" target="_blank">猫和老鼠官方手游</a>
                                    <a href="http://gfxm.163.com/?from=nietop" target="_blank">功夫熊猫官方手游</a>
                                    <a href="http://miku.163.com/?from=nietop" target="_blank">初音速</a>
                                </div>
                                <a href="javascript:;" class="topBar-more" :class="{open: isShowMoreMobi}" @click="showMoreMobi">{{Mtext}}</a>
                            </div>
                        </li>
                        <li class="short">
                            <a href="#"><em>游品位</em></a>
                            <a href="#"><em>网易MuMu</em></a>
                            <a href="#"><em>奇遇俱乐部</em></a>
                            <a href="#"><em>游品位</em></a>
                            <a href="#"><em>网易MuMu</em></a>
                            <a href="#"><em>奇遇俱乐部</em></a>
                            <a href="#"><em>游品位</em></a>
                            <a href="#"><em>网易MuMu</em></a>
                            <a href="#"><em>奇遇俱乐部</em></a>
                            <a href="#"><em>游品位</em></a>
                            <a href="#"><em>网易MuMu</em></a>
                            <a href="#"><em>奇遇俱乐部</em></a>
                            <a href="#"><em>游品位</em></a>
                            <a href="#"><em>网易MuMu</em></a>
                            <a href="#"><em>奇遇俱乐部</em></a>
                            <a href="#" class="topBar-btn"><em>网易游戏</em></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            ishover: true,
            isshowMore: false,
            isShowMoreMobi: false
        }
    },
    computed: {
        text(){
            return this.isshowMore ? '<<' : '更多热门端游'
        },
        Mtext(){
            return this.isShowMoreMobi ? '<<' : '更多热门手游'
        }
    },
    methods: {
        mouseoverHandle(){
            this.ishover = true
        },
        mouseoutHandle(){
            this.ishover = false
        },
        showMore(){
            this.isshowMore = !this.isshowMore
        },
        showMoreMobi(){
            this.isShowMoreMobi = !this.isShowMoreMobi
        }
    },
    components: {}
};
</script>

<style scoped lang="stylus">
@import '~assets/css/public.styl'
.top_topBar
    height 55px
    width 100%
    background-color #fbfbfb
    .topBar-main
        width 1260px
        position relative
        margin 0 auto
        .topBar-logo
            width: 133px;
            height: 44px;
            float: left;
            margin-top: 6px;
            background: url("./imgs/logo.png") no-repeat;
        .topBar-mid
            position absolute
            font-size 12px
            right: 230px;
            a
                color: #333;
                line-height: 52px;
                display inline-block
                padding 0 12px
                &:hover
                    color: #bc2e2e!important;
                    border-bottom: 3px solid #bc2e2e;
                    background-color: #F3F3F3;
                    background-image: -webkit-linear-gradient(top,#F3F3F3 0,#FEFEFE 52px);
        .topBar-right
            position absolute
            right 0
            top 0
            a
                color: #333!important;
                width: 100%;
                text-align: center;
                display: inline-block;
                float: left;
                line-height: 52px;
                &:hover
                    color: #bc2e2e!important;
                    border-bottom: 3px solid #bc2e2e;
                    background-color: #F3F3F3;
                    background-image: -webkit-linear-gradient(top,#F3F3F3 0,#FEFEFE 52px);
        .topBar-menu
            width 100%
            position absolute
            left 0
            top 0
            span
                position: absolute;
                height 25px
                width 108px
                padding 15px 0 12px 15px
                color: #bc2e2e;
                right: 106px;
                line-height: 25px;
                &.hover
                    color: #bc2e2e!important;
                    border-bottom: 3px solid #bc2e2e;
                    background-color: #F3F3F3;
                    background-image: -webkit-linear-gradient(top,#F3F3F3 0,#FEFEFE 52px);
                .topBar-arrIcon
                    position relative
                    top: 4px;
                    right 0
                    width: 16px;
                    height: 16px;
                    display: inline-block;
                    background-color: #fff;
                    overflow: hidden;
                    i 
                        width: 9px;
                        height: 4px;
                        float: left;
                        margin: 6px 0 0 4px;
                        background-position: -103px -101px;
                        display: inline-block;
            .table.hover
                display block
            .table
                position absolute
                top 55px
                left 0
                background: #fdfefe;
                border-top: 1px solid #ececec;
                width 100%
                display none
                &.moreAni
                    .nav
                        .mobi
                            left 185px
                            width 942px
                            border-left: 1px solid #eee;
                            transition all .3s ease-out
                    .list
                        .hot
                            left 185px
                            transition all .3s ease-out
                            border-left: 1px solid #eee;
                        .news
                            left 334px
                            width 780px
                            transition all .3s ease-out
                .nav
                    width: 100%;
                    position: relative;
                    font-size 12px
                    float: left;
                    li
                        width 299px
                        float: left;
                        border-right: 1px solid #eee;
                        vertical-align: top;
                        &.mobi
                                position: absolute;
                                left: 300px;
                                width 828px
                                transition all .3s ease-out
                        &.last_th
                            width: 131px;
                            float: right;
                        b
                            line-height: 39px;
                            color: #bc2e2e;
                            display: block;
                            width: 100%;
                            height: 39px;
                            font-size: 14px;
                            text-indent: 20px;
                            background: #f7f7f8;
                            overflow: hidden;
                            clear: both;
                .list
                    float: left;
                    overflow: hidden;
                    width: 100%;
                    li
                        height: 415px;
                        float: left;
                        padding: 10px 0 0 14px;
                        overflow: hidden;
                        width: 121px;
                        border-right: 0;
                        &.hot
                            position: absolute;
                            background: #fdfefe;
                            left: 300px;
                            -webkit-transition: all .3s ease-out;
                            top: 39px;
                            z-index: 3;
                            width 133px
                            border-right: 1px solid #eee;
                            border-left: 1px solid #eee;
                        &.li_right
                            width: 150px;
                            position: absolute;
                            left: 135px;
                            background-color: rgb(253, 254, 254);
                            z-index: 3;
                            transition all .3s ease-out
                            // border-right: 1px solid #eee;
                            &.showMore
                                z-index: 30
                                transform translate3d(130px,0,0)
                            .topBar-more
                                width: 20px!important;
                                height: 95px;
                                display: block;
                                position: absolute;
                                right: 0;
                                top: 124px;
                                font-size: 12px;
                                color: #fff;
                                background: #bc2e2e;
                                padding-left: 10px;
                                line-height: 14px;
                                padding-top: 7px;
                                border-top-left-radius: 2px;
                                border-bottom-left-radius: 2px;
                                &.open
                                    height 23px
                                    top 150px
                        &.news
                            border-right: 1px solid #eee;
                            width 668px
                            position: absolute;
                            background: #fdfefe;
                            left: 446px;
                            -webkit-transition: all .3s ease-out;
                            top: 39px;
                            .list-new
                                position relative
                                div
                                    margin-right: 8px;
                                    width: 133px;
                                    float: left;
                                    &.short-news
                                        width 106px
                                .topBar-more
                                    width: 20px!important;
                                    height: 95px;
                                    display: block;
                                    position: absolute;
                                    right: 0;
                                    top: 124px;
                                    font-size: 12px;
                                    color: #fff;
                                    background: #bc2e2e;
                                    padding-left: 10px;
                                    line-height: 14px;
                                    padding-top: 7px;
                                    border-top-left-radius: 2px;
                                    border-bottom-left-radius: 2px;
                                    &.open
                                        top 150px
                                        height 23px
                                    &:hover
                                        color #fff
                        &.short
                            width 115px
                            float right
                            .topBar-btn
                                background-position: 0 -338px;
                                text-indent: 25px;
                                color: #bc3030!important;
                        p
                            padding: 0;
                            margin: 0;
                            margin-left: 6px;
                            line-height: 24px;
                            margin-bottom: 4px;
                            font-weight: 700;
                            color: #626262;
                        a
                            width: 115px;
                            margin-left: 6px;
                            line-height: 24px;
                            display: inline-block;
                            font-weight: 400;
                            em
                                font-weight: 400;
                                display: block;
                                line-height: 24px;
                                &.topBar-1st
                                    background-position: right -267px;
                                &.topBar-hot
                                    background-position: right -144px;
                                &.topBar-new
                                    background-position: right -206px;
                            &:hover
                                color #bc3030

</style>
