<template>
    <div class="section2">
        <div class="doc">
            <next></next>
            <p class="title1" @click="changColorHandle">众侠汇聚之际，祥瑞之兆将显，普天同庆。公测时众侠士皆可获得福利！</p>
            <div class="manbox">
                <p class="tit">
                    <span :class="{redcolor: changColor}">10W预约</span>
                    <span :class="{redcolor: changColor}">20W预约</span>
                    <span :class="{redcolor: changColor}">30W预约</span>
                    <span :class="{redcolor: changColor}">50W预约</span>
                    <span>80W预约</span>
                    <span>100W预约</span>
                </p>
                <p class="progress">
                    <span class="line">
                        <i :class="{change_line: changeLine}"></i>
                    </span>
                    <em class="dot1" :class="{change_img: changeImg}"></em>
                    <em class="dot2" :class="{change_img: changeImg}"></em>
                    <em class="dot3" :class="{change_img: changeImg}"></em>
                    <em class="dot4" :class="{change_img: changeImg}"></em>
                    <em class="dot5"></em>
                    <em class="dot6"></em>
                </p>
                <div class="giftlist" :class="{show: isShow}">
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
                        <!-- <span class="gift1">燕窝滋补羹</span>
                        <span class="gift2">桂子合欢汤</span> -->
                    </p>
                    <p class="giftBox6">
                        <em class="xiaoren"></em>
                        <!-- <span class="gift1">燕窝滋补羹</span>
                        <span class="gift2">桂子合欢汤</span> -->
                    </p>
                </div>
            </div>
            <p class="title2">公测时，所有官服少侠可在游戏内领取福利。</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Next from 'pages/banner/components/next.vue'
export default {
    data() {
        return {
            changColor: false,
            changeImg: false,
            changeLine: false,
            isShow: false,
            time: null
        };
    },
    components: {
        Next
    },
    methods: {
        changColorHandle() {
            if(this.time) {
                console.log("存在time");
                
                return 
            }
            this.time = setTimeout(() => {
                this.start()
                this.time = 0
            }, 1000);
        },
        start(){
            this.changColor = !this.changColor
            this.changeImg = !this.changeImg
            this.changeLine = !this.changeLine
            this.isShow = !this.isShow
        }
    }
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
                    &.redcolor
                        color #ce4b48;
                    &:nth-child(1)
                        left: 17px;
                    &:nth-child(2)
                        left: 207px;
                    &:nth-child(3)
                        left: 398px;
                    &:nth-child(4)
                        left: 587px;
                    &:nth-child(5)
                        left: 777px;
                    &:nth-child(6)
                        left: 962px;
            .progress
                width: 1110px;
                height: 15px;
                position: absolute;
                left: 50%;
                margin-left: -555px;
                top: 87px;
                .line
                    display: block;
                    width: 1110px;
                    height: 1px;
                    background: #fff;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    margin-top: -.5px;
                    i
                        width: 0px;
                        display: block;
                        height: 100%;
                        background: rgba(183,154,97,.8);
                        transition: all .4s;
                        &.change_line
                            width 745px
                em
                    display: block;
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    top: 50%;
                    margin-top: -7.5px;
                    background: url("./imgs/page2-icon-1_5b56d85.png") no-repeat; 
                    &.change_img
                         background: url("./imgs/page2-icon-2_247943d.png") no-repeat;
                    &.dot1
                        left: 72px;
                    &.dot2
                        left: 262px;
                    &.dot3
                        left: 452px;
                    &.dot4                       
                        left: 642px;
                    &.dot5
                        left: 832px;                       
                    &.dot6
                        left: 1022px;
            .giftlist
                width: 1110px;
                height: 521px;
                position: absolute;
                left: 50%;
                margin-left: -555px;
                top: 92px;
                &.show
                    .giftBox1
                    .giftBox2
                    .giftBox3
                    .giftBox4
                    .giftBox5
                    .giftBox6
                        opacity 1
                        transform translate(0,0)
                    .giftBox1
                    .giftBox2
                    .giftBox3
                    .giftBox4
                        background url("./imgs/page2-picBg-on_2690230.png") no-repeat
                p
                    background url("./imgs/page2-picBg_a1e2964.png") no-repeat
                    width: 160px;
                    height: 521px;
                    position: absolute;
                    top: 0
                    opacity: 0;
                    &.giftBox1
                        left -1px
                        transform: translate(-10px,0);
                        transition: all .5s ease;
                        .xiaoren
                            width: 69px;
                            height: 84px;
                            margin-left: -35px;
                            background url("./imgs/page2-pic1-peo3_0ed688e.png") no-repeat
                        .gift1
                            top: 190px;
                            background url("./imgs/page2-pic1-bp1_4488c92.png") no-repeat  center top
                        .gift2
                            top: 282px;
                            background url("./imgs/page2-pic1-bp2_70c4f8f.png") no-repeat  center top
                    &.giftBox2
                        left 189px
                        transform: translate(-10px,0);
                        transition: all .5s .3s ease;
                        .xiaoren
                            width: 69px;
                            height: 84px;
                            margin-left: -35px;
                            background url("./imgs/page2-pic1-peo3_0ed688e.png") no-repeat
                        .gift1
                            top: 190px;
                            background url("./imgs/page2-pic1-bp1_4488c92.png") no-repeat  center top
                        .gift2
                            top: 282px;
                            background url("./imgs/page2-pic1-bp2_70c4f8f.png") no-repeat  center top
                    &.giftBox3
                        left 379px
                        transform: translate(-10px,0);
                        transition: all .5s .6s ease;
                        .xiaoren
                            width: 69px;
                            height: 84px;
                            margin-left: -35px;
                            background url("./imgs/page2-pic1-peo3_0ed688e.png") no-repeat
                        .gift1
                            top: 190px;
                            background url("./imgs/page2-pic1-bp1_4488c92.png") no-repeat  center top
                        .gift2
                            top: 282px;
                            background url("./imgs/page2-pic1-bp2_70c4f8f.png") no-repeat  center top
                    &.giftBox4
                        left 569px
                        transform: translate(-10px,0);
                        transition: all .5s .9s ease;
                        .xiaoren
                            width: 69px;
                            height: 84px;
                            margin-left: -35px;
                            background url("./imgs/page2-pic1-peo3_0ed688e.png") no-repeat
                        .gift1
                            top: 190px;
                            background url("./imgs/page2-pic1-bp1_4488c92.png") no-repeat  center top
                        .gift2
                            top: 282px;
                            background url("./imgs/page2-pic1-bp2_70c4f8f.png") no-repeat  center top
                    &.giftBox5
                        left 759px;
                        transform: translate(-10px,0);
                        transition: all .5s 1.2s ease;
                        .xiaoren
                            width: 69px;
                            height: 84px;
                            margin-left: -26px
                            background url("./imgs/page2-pic5-peo_62e4d22.png") no-repeat
                            animation: z
                    &.giftBox6
                        left 949px;
                        transform: translate(-10px,0);
                        transition: all .5s 1.5s ease;
                        .xiaoren
                            width: 69px;
                            height: 84px;
                            margin-left: -26px;
                            background url("./imgs/page2-pic5-peo_62e4d22.png") no-repeat
                            animation z
                    .xiaoren
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 24px; 
                        animation: xiaoren1 .5s infinite steps(2);
                    span
                        display: block;
                        padding-top: 65px;
                        width: 100%;
                        font-size: 14px;
                        color: #ede8dc;
                        text-align: center;
                        line-height: 22px;
                        position: absolute;
                        left: 0; 
        .title2 
            top: 800px;
            width: 100%;
            text-align: center;
            font-size: 14px;
            line-height: 22px;
            color: #908269;
            position: absolute;
            left: 0;                 

@keyframes xiaoren1 
    0% 
        background-position: 0 0;
    100% 
        background-position: 0 -168px;

</style>
