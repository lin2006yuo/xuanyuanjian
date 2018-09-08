<template>
    <div class="section4">
        <div class="doc">
            <next></next>
            <div class="picList" @mouseover="picHoverProxy">
                <!-- 第一个pic -->
                <div class="pic" :class="{on: curOn[0]}">
                    <div class="pic-wrap">
                        <div class="smallPic smallPic1" data-id="0"></div>
                            <div class="bigPic bigPic1" v-show="curOn[0]">
                                <img src="./imgs/page4-pic1-on_09f7fb3.jpg" alt="">
                            </div>
                    </div>
                </div>
                <div class="pic" :class="{on: curOn[1]}">
                    <div class="pic-wrap">
                        <div class="smallPic smallPic2" data-id="1"></div>
                            <div class="bigPic bigPic2" v-show="curOn[1]">
                                <img src="./imgs/page4-pic2-on_d943803.jpg" alt="">
                            </div>
                    </div>
                </div>
                <div class="pic" :class="{on: curOn[2]}">
                    <div class="pic-wrap">
                        <div class="smallPic smallPic3" data-id="2"></div>
                        <div class="bigPic bigPic3" v-show="curOn[2]">
                            <img src="./imgs/page4-pic3-on_a2b5e12.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="pic" :class="{on: curOn[3]}">
                    <div class="pic-wrap">
                        <div class="smallPic smallPic4" data-id="3"></div>
                        <div class="bigPic bigPic4" v-show="curOn[3]">
                            <img src="./imgs/page4-pic1-on_09f7fb3.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="pic" :class="{on: curOn[4]}">
                    <div class="pic-wrap">
                        <div class="smallPic smallPic5" data-id="4"></div>
                        <div class="bigPic bigPic5" v-show="curOn[4]">
                            <img src="./imgs/page4-pic1-on_09f7fb3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="btn-order" @click.prevent="mouseoverHandle"></a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Next from 'pages/banner/components/next.vue'
export default {
    data() {
        return {
            isShow: false,
            curOn: [false,false,false,false,false]
        };
    },
    components: {
        Next
    },
    methods: {
        picHoverProxy(e){
            // console.log(e.target.getAttribute('data-id'));
            let index = e.target.getAttribute('data-id')
            if(index){
                for(let key in this.curOn){
                    this.$set(this.curOn, key, false )
                }
                this.$set( this.curOn, index, true )
            }          
        },
        mouseoverHandle(){
            this.isShow = !this.isShow
        }
    }
};
</script>

<style scoped lang="stylus">
.section4
    height: 879px;
    background: url("./imgs/bg4.jpg") no-repeat center top;
    .doc
        width: 1280px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        .picList
            width: 1200px;
            height: 452px;
            position: absolute;
            left: 50%;
            margin-left: -600px;
            top: 200px;
            .pic
                float: left;
                position: relative;
                width: 86px;
                height: 452px;
                height: 452px;
                overflow: hidden;
                transition: all .6s;
                &.on
                    width 812px
                    .pic-wrap
                        .smallPic
                            display none
                .pic-wrap
                    // transform: translate(-60px,0);
                    transition: all .8s .2s ease;
                    .smallPic
                        width: 86px;
                        height: 452px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 2;
                        cursor: pointer;
                        &.smallPic1
                            background url("./imgs/page4-pic1_baa84cb.png") no-repeat
                        &.smallPic2
                            background url("./imgs/page4-pic2_4a215eb.png") no-repeat
                        &.smallPic3
                            background url("./imgs/page4-pic3_0aa6c71.png") no-repeat
                        &.smallPic4
                            background url("./imgs/page4-pic1_baa84cb.png") no-repeat
                        &.smallPic5
                            background url("./imgs/page4-pic1_baa84cb.png") no-repeat
                    .bigPic
                        width: 792px
                        height: 452px;
                        position: relative;
                        top: 0;
                        text-align: center;
                        padding: 0 10px;
                        background url("./imgs/page4-pic-bg1_0be65d8.png") no-repeat
                        img
                            width: 780px;
                            height: 439px;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            margin: -219.5px 0 0 -390px;
                            z-index: 1;
        .btn-order
            width: 245px;
            height: 96px;
            display: block;
            position: absolute;
            left: 50%;
            top: 772px;
            margin-left: -122.5px;
            overflow: hidden;
            background url("./imgs/btn-order_587bc52.png") no-repeat
</style>
