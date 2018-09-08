<template>
    <div class="part1" :class="{show: show}">
        <a href="javascript:;" class="logo"></a>
        <div class="slogan"><img src="../../img/slogan_fe5f6e5.png" alt=""></div>
        <div class="jian-box">
            <div class="bot"></div>
            <div class="jian"></div>
            <div class="die"></div>
        </div>
        <a class="xyxy"><i></i></a>
        <a class="qm-btn"><i></i></a>
        <a class="order-btn"><i></i></a>
        <a class="slide-next"></a>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {};
    },
    props: ['show'],
    components: {},
};
</script>

<style lang="stylus">
.part1.show
    .xyxy
        transform: translate(0,0);
.swiper-slide-active
    .part1
        .slogan
            img
                transition: all 1.5s ease .4s;
                opacity: 1;
                transform translate(0,0)
        .jian-box
            .bot
                opacity 1
                transform translate(0,0)
                transition: all 1.5s ease .5s;
            .jian
                opacity 1
                transition: all 1.5s ease-in 1s;
            .die
                opacity 1
                transform: translate(0,0);
                transition: all 2s ease 1s;
        .qm-btn
            opacity 1
            transform translate(0,0)
        .order-btn
            opacity 1
            transform translate3d(0,0,0)
.part1
    .slogan
        transform: scale(0.697917);
        width: 128px;
        height: 639px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -282px 0 0 -64px;
        z-index: 2;
        img 
            opacity 0
            transform translate(0,65px)
    .jian-box
        transform: scale(0.647917);
        width: 758px;
        height: 322px;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -344px;
        transform-origin: 50% 100%;
        .bot
            opacity: 0;
            transform: translate(0,50%);
            width: 100%;
            height: 322px;
            position: absolute;
            left: 0;
            top: 0;
            background: url(../../img/jian_bot_4eb43c2.png) no-repeat;
            z-index: 2
        .jian
            opacity: 0;
            width: 151px;
            height: 450px;
            position: absolute;
            bottom: -10px;
            left: 394px;
            background: url(../../img/jian_3a8602d.png) no-repeat;
        .die
            opacity: 0;
            transform: translate(100%,-100%);   
            width: 122px;
            height: 137px;
            position: absolute;
            bottom: 365px;
            left: 495px;
            background: url(../../img/jian_die_d08e013.png) no-repeat;
            z-index: 9;
    .xyxy
        width: 50px;
        height: 178px;
        position: absolute;
        z-index: 99;
        right: 37px;
        top: 160px;
        transform: translate(450px,0);
        transition: all 1.5s ease 1.5s;
        cursor pointer
        &:hover
            i
                background: url(../../img/hyzw_on_be0e86e.png) no-repeat;
        i
            display: block;
            width: 50px;
            height: 178px;
            background: url(../../img/hyzw_d5a5ec5.png) no-repeat;
            transition: all .6s ease;
    .qm-btn
        position: absolute;
        right: 18.37%;
        top: 47.55%;
        z-index: 9;
        width: 293px;
        height: 73px;
        transform: translate(-50%,0);
        transition: all 1.5s ease .5s;
        opacity 0
        i
            display: block;
            width: 100%;
            height: 100%;
            background: url(../../img/xyxy_eeb66e4.png) no-repeat;
            background-size: 100% 100%;
            -webkit-transition: all .6s ease;
            -moz-transition: all .6s ease;
            -ms-transition: all .6s ease;
            transition: all .6s ease;
            &:hover
                background: url(../../img/xyxy_on1_56e333d.png) no-repeat;
    .order-btn
        position: absolute;
        left: 18.37%;
        top: 47.55%;
        z-index: 9;
        width: 293px;
        height: 73px;
        opacity: 0;
        transform: translate(50%,0);
        transition: all 1.5s ease .5s;
        i
            display: block;
            width: 100%;
            height: 100%;
            background: url(../../img/order_btn_78bf7a7.png) no-repeat;
            -webkit-transition: all .6s ease;
            -moz-transition: all .6s ease;
            -ms-transition: all .6s ease;
            transition: all .6s ease;
            &:hover
                background: url(../../img/order_btn_h_e5988e1.png) no-repeat;
</style>
