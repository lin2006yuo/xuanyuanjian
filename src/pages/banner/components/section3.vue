<template>
    <div class="section3">
        <div class="doc">
            <next></next>
            <p class="title1" @click="showModBox">邀三五知己预约游戏，共游水墨云山，公测时将有厚礼赠予少侠！</p>
            <div class="modBox" :class="{show: isShow}">
                <div class="bgBox">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div class="line">
                    <i></i>
                </div>
                <div class="giftBox">
                    <p class="gift1">
                        <span class="tit1">邀请1人</span>
                        <span class="img"></span>
                        <span class="tit2">私钱*66,666</span>
                    </p>
                    <p class="gift2">
                        <span class="tit1">邀请3人</span>
                        <span class="img"></span>
                        <span class="tit2">活骨灵药*20</span>
                    </p>
                    <p class="gift3">
                        <span class="tit1">邀请5人</span>
                        <span class="img"></span>
                        <span class="tit2">天仙酒*3</span>
                    </p>
                </div>
            </div>
            <a class="btn-order"></a>
            <p class="getCode">我已预约，<a href="#">查看我的邀请码</a></p>
            <p class="title2">好友预约时需填写邀请码，成功邀请好友的少侠请在公测后前往官网领取奖励。</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Next from 'pages/banner/components/next.vue'
export default {
    data() {
        return {
            isShow: true
        };
    },
    components: {
        Next
    },
    methods: {
        showModBox(){
            this.isShow = !this.isShow
        }
    }
};
</script>

<style scoped lang="stylus">
.section3
    height: 818px;
    background: url("./imgs/bg3.jpg") no-repeat center top;
    .doc
        width: 1280px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        .title1
            padding-top: 155px;
            text-align: center;
            font-size: 14px;
            line-height: 22px;
            color: #3d3b33;
        .modBox
            width: 1200px;
            height: 292px;
            position: absolute;
            left: 50%;
            margin-left: -600px;
            top: 234px;
            &.show
                .bgBox
                    p
                        opacity 1
                        transform translate(0,0)
            .bgBox
                p
                    width: 292px;
                    height: 292px;
                    background: url("./imgs/page3-giftBg_5d976e7.png") no-repeat;
                    position: absolute;
                    top: 0;
                    opacity: 0;
                    &:nth-child(1)
                        transform: translate(-10px,0);
                        left: 113px;
                        transition: all .5s ease;
                    &:nth-child(2)
                        transform: translate(-10px,0);
                        left: 454px;
                        transition: all .5s .3s ease;
                    &:nth-child(3)
                        transform: translate(-10px,0);
                        left: 795px;    
                        transition: all .5s .6s ease;
            .line
                width: 100%;
                height: 10px;
                display: block;
                border: 1px solid #b39766;
                background: #faf7f2;
                border-radius: 10px;
                position: absolute;
                left: 0;
                top: 50%;
                margin-top: -5px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                -ms-box-sizing: border-box;
                box-sizing: border-box;
                i 
                    display: block;
                    background: #cbb181;
                    width: 0;
                    height: 100%;
            &.show
                .giftBox
                    p
                        opacity: 1;
                        transform: translate(0,0);
            .giftBox
                width: 100%;
                height: 292px;
                position: absolute;
                left: 0;
                top: 0;
                p
                    width: 292px;
                    position: absolute;
                    top: 0;
                    opacity 0
                    &.gift1
                        transform: translate(-10px,0);
                        left: 113px;
                        transition: all .5s ease;
                    &.gift2
                        transform: translate(-10px,0);
                        left: 454px
                        transition: all .5s .3s ease;
                        .img
                            background url("./imgs/page3-gift2_43f2567.png") no-repeat;
                    &.gift3
                        transform: translate(-10px,0);
                        left: 795px;;
                        transition: all .5s .6s ease;
                    .tit1
                        display: block;
                        width: 100%;
                        line-height: 20px;
                        font-size: 20px;
                        font-weight: 700;
                        color: #603e2c;
                        text-align: center;
                        position: absolute;
                        left: 0;
                        top: 58px;
                    .img
                        display: block;
                        width: 159px;
                        height: 159px;
                        position: absolute;
                        left: 50%;
                        margin-left: -80px;
                        top: 64px;
                        background url("./imgs/page3-gift1_ffcdc5c.png") no-repeat;
                    .tit2
                        width: 100%;
                        display: block;
                        font-size: 14px;
                        color: #603e2c;
                        text-align: center;
                        position: absolute;
                        left: 0;
                        top: 209px;
        .btn-order
            width: 169px;
            height: 41px;
            display: block;
            position: absolute;
            left: 50%;
            top: 580px;
            margin-left: -84.5px;
            background: url("./imgs/btn-code_3c0bf97.png") no-repeat;
            -webkit-transition: all .1s;
            -moz-transition: all .1s;
            -ms-transition: all .1s;
            transition: all .1s;
            &:before
            &:after
                content: '';
                width: 21px;
                height: 7px;
                position: absolute;
                top: 50%;
                margin-top: -3.5px;
            &:before
                left: -16px;
                animation: leftArror 1s ease-in-out 0s infinite;
                background url("./imgs/btn-code-1_faa2531.png") no-repeat
            &:after
                right: -16px;
                animation: rtArror 1s ease-in-out 0s infinite;
                background url("./imgs/btn-code-2_24fb5ab.png") no-repeat
        .getCode
            width: 100%;
            text-align: center;
            position: absolute;
            left: 0;
            top: 630px;
            font-size: 12px;
            color: #000;
            a
                font-size: 12px;
                color: #df2a2a;
                text-decoration: underline;
        .title2
            width: 100%;
            text-align: center;
            font-size: 14px;
            line-height: 22px;
            color: #908269;
            position: absolute;
            left: 0;
            top: 674px          
@keyframes  leftArror
    0% 
        transform translate3d(-3px,0,0)
    50% 
        transform translate3d(3px,0,0)
    100% 
        transform translate3d(-3px,0,0)
@keyframes  rtArror
    0% 
        transform translate3d(3px,0,0)
    50% 
        transform translate3d(-3px,0,0)
    100% 
        transform translate3d(3px,0,0)

</style>
