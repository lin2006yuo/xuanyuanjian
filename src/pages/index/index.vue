<template>
    <div class="wrap masky" :class="{show: debugIsshow}">
        <span class="debug" @click="debugShow">点击播放动画</span>
        <span class="ri"></span>
        <span class="shuleft"></span>
        <span class="shuright"></span>
        <div class="nav">
            <!-- nav-1 -->
            <a href="javascript:;" :class="{on: 0 === curIndex}">
                <span class="arrow"><i></i><em></em></span>
                <span class="name">恭迎少侠</span>
            </a>
            <span class="line"></span>
            <!-- nav-2 -->
            <a href="javascript:;" :class="{on: 1 === curIndex}">
                <span class="arrow"><i></i><em></em></span>
                <span class="name">轩辕记事</span>
            </a>
            <!-- nav-3 -->
            <span class="line"></span>
            <a href="javascript:;" :class="{on: 2 === curIndex}">
                <span class="arrow"><i></i><em></em></span>
                <span class="name">天选之人</span>
            </a>
        </div>
        <a href="javascript:;" class="logo"></a>
        <swiper :show="debugIsshow" @currInex="swiperIndex"></swiper>
    </div>
</template>

<script type="text/ecmascript-6">
import Swiper from './components/swiper/swiper'
export default {
    data() {
        return {
            debugIsshow: false,
            curIndex: 0
        };
    },
    components: {
        Swiper
    },
    methods: {
        debugShow(){
            this.debugIsshow = !this.debugIsshow
        },
        swiperIndex(data){
            this.curIndex = data
        }
    },
};
</script>

<style scoped lang="stylus">
.wrap
    max-width: 1920px;
    min-width: 1200px;
    height: 100%;
    width 100%
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    background: url("img/bg_a1acca9.jpg") no-repeat center center;
    opacity: 1;
    .debug
        position absolute
        display block
        width 100px
        height 30px
        top 40%
        right 50px
        text-align center
        line-height 30px
        background-color #706a62
        color #eee
        font-weight 700
        border-radius 15px
        cursor pointer
        z-index 9999
    &.masky
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        -webkit-mask: url(img/mask_caffc4a.png) center center no-repeat;
        // -webkit-mask: url(img/masaike.png) center center no-repeat;
        -webkit-mask-size: 4000% 100%;
        will-change: transform;
        &.show
            animation: masky 1.2s steps(39) forwards
            z-index: 10;
            display: block;
            .ri
                opacity 1
                transform translate(0,0)
            .shuleft
                opacity 1
                transform translate(0,0)
            .shuright
                opacity 1
                transform translate(0,0)
            .nav
                transform translate(0,0)
            .logo
                opacity 1
                transform translate(0,0)
    .ri
        width: 969px;
        height: 980px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -490px 0 0 -484.5px;
        background: url(img/ri_634a8e7.png) no-repeat;
        transform: translate(0,10%);
        transition: all 1.5s ease 0s;
        opacity 0
    .shuleft
        width: 317px;
        height: 699px;
        position: absolute;
        left: 0;
        top: 65px;
        background: url(img/shu_left_0f1b943.png) no-repeat;
        transform translate(-50%,0)
        transition: all 1.5s ease 0s;
        opacity 0
    .shuright
        width: 356px;
        height: 820px;
        position: absolute;
        right: 0;
        top: 0;
        background: url(img/shu_right_e205f00.png) no-repeat;
        transform translate(50%,0)
        transition: all 1.5s ease 0s;
        opacity 0
    .nav
        position: fixed;
        top: 35%;
        left: 28px;
        z-index: 999;
        transition: all 1s ease 1.5s;
        transform: translate(-150px,0);
        a
            display: block;
            overflow: hidden;
            color: #000;
            .arrow
                float: left;
                width: 26px;
                height: 26px;
                display: block;
                i
                    position: absolute;
                    width: 26px;
                    height: 26px;
                    background-position: -305px -267px;
                    background-image: url(img/index_z_40850eb.png);
                    background-repeat: no-repeat;
                    transform scale(1)
                    transition: all .6s ease;
                em
                    width: 26px;
                    height: 26px;
                    position: absolute;
                    background-image: url(img/index_z_40850eb.png);
                    background-repeat: no-repeat
                    background-position: -273px -267px;
                    transform scale(0)
                    transition: all .6s ease;
            &:hover
                .arrow
                    i
                        transform scale(0)
                    em
                        transform scale(1)
                .name
                        opacity: 1;
                        transform translate(0,0)
            &.on
                .arrow
                    i
                        transform scale(0)
                    em
                        transform scale(1)
                .name
                        opacity: 1;
                        transform translate(0,0)
            .name
                float: left;
                margin-left: 8px;
                color: #000;
                font-weight: 700;
                opacity: 0;
                font-size 14px
                line-height 24px
                transform: translate(-8px,0);
                transition: all .6s ease;
        .line
            width: 2px;
            height: 42px;
            display: block;
            margin: 8px 0 8px 13px;
            clear: both;
            background-repeat: no-repeat;
            background-position: -467px -205px;
            background-image: url(img/index_z_40850eb.png);
    .logo
        opacity: 0;
        transition: all 2s ease
        transform translateY(50px)
        width: 175px;
        height: 122px;
        position: absolute;
        top: 62px;
        left: 50%;
        margin-left: -87.5px;
        z-index: 9;
        background: center/contain url("./img/logo.png");
        text-indent: -9999em;


@keyframes masky
    0% 
        -webkit-mask-position: 0 0;
    100% 
        -webkit-mask-position: 100% 0;

</style>
