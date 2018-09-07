<template>
    <div class="section2">
        <div class="doc">
            <p class="next"><span></span></p>
            <p class="title1">众侠汇聚之际，祥瑞之兆将显，普天同庆。公测时众侠士皆可获得福利！</p>
            <div class="manbox">
                <p class="tit">
                    <span>10W预约</span>
                    <span>20W预约</span>
                    <span>30W预约</span>
                    <span>50W预约</span>
                    <span>80W预约</span>
                    <span>100W预约</span>
                </p>
                <p class="progress"></p>
                <div class="giftlist">
                    <p class="giftBox1">
                        <em class="xiaoren"></em>
                        <span class="gift1">燕窝滋补羹</span>
                        <span class="gift2">桂子合欢汤</span>
                    </p>
                    <p class="giftBox2">
                        <em class="xiaoren"></em>
                        <span class="gift1">燕窝滋补羹</span>
                        <span class="gift2">桂子合欢汤</span>
                    </p>
                    <p class="giftBox3">
                        <em class="xiaoren"></em>
                        <span class="gift1">燕窝滋补羹</span>
                        <span class="gift2">桂子合欢汤</span>
                    </p>
                    <p class="giftBox4">
                        <em class="xiaoren"></em>
                        <span class="gift1">燕窝滋补羹</span>
                        <span class="gift2">桂子合欢汤</span>
                    </p>
                    <p class="giftBox5">
                        <em class="xiaoren"></em>
                        <span class="gift1">燕窝滋补羹</span>
                        <span class="gift2">桂子合欢汤</span>
                    </p>
                    <p class="giftBox6">
                        <em class="xiaoren"></em>
                        <span class="gift1">燕窝滋补羹</span>
                        <span class="gift2">桂子合欢汤</span>
                    </p>
                </div>
            </div>
            <p class="title2">公测时，所有官服少侠可在游戏内领取福利。</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="stylus">
@import "~pages/banner/components/css/public.styl"
.section2
    height 965px
    background url("./imgs/bg2.jpg") no-repeat center top
    .doc
        width: 1280px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        .next
            width: 99px;
            height: 99px;
            position: absolute;
            left: 50%;
            margin-left: -50px;
            top: -50px;
            z-index: 10;
            cursor: pointer;
            background-repeat: no-repeat;
            background-position: -151px 0px;
            span
                display: block;
                width: 100%;
                height: 100%;
                animation: shangxia 1.1s ease-in-out 0s infinite;
                background-repeat: no-repeat;
                background-position: -151px -109px;
        .title1
            padding-top: 140px;
            text-align: center;
            font-size: 14px;
            line-height: 22px;
            color: #3d3b33;
        .manbox
            position: relative;
            .tit
                width: 1110px;
                height: 20px;
                position: absolute;
                left: 50%;
                margin-left: -555px;
                top: 40px;
                span
                    display: block;
                    width: 120px;
                    text-align: center;
                    height: 20px;
                    line-height: 20px;
                    font-size: 18px;
                    font-weight: 700;
                    color: #a09a88;
                    position: absolute;
                    top: 0
                    &:nth-child(1)
                        left: 17px;
                        color: #ce4b48;
                    &:nth-child(2)
                        left: 207px;
                        color: #ce4b48;
                    &:nth-child(3)
                        left: 398px;
                        color: #ce4b48;
                    &:nth-child(4)
                        left: 587px;
                        color: #ce4b48;
                    &:nth-child(5)
                        left: 777px;
                    &:nth-child(6)
                        left: 962px;
@keyframes shangxia 
    0% 
        transform translate3d(0,-8px,0) 
    50%
        transform translate3d(0,8px,0) 
    100% 
        transform translate3d(0,-8px,0)
    
</style>
