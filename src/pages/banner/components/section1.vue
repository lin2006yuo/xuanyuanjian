<template>
    <div class="section1">
        <div class="herobox" :class="{show: isShow}">
            <span class="hero1"></span>
            <span class="hero2"></span>
            <span class="hero3"></span>
            <span class="hero4"></span>
            <span class="hero5"></span>
            <span class="hero6"></span>
        </div>
        <a href="javascript:;" class="logo"></a>
        <router-link to="index" class="gw"></router-link>
        <span class="slogan" @click="showHeroToggle"></span>
        <a href="#" class="order btnOrder"></a>
        <!-- <div class="order btnDownload"></div> -->
        <a href="#" class="order zw"></a>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            isShow: true
        };
    },
    components: {},
    methods: {
        showHeroToggle(){
            this.isShow = !this.isShow
        }
    }
};
</script>

<style scoped lang="stylus">
.section1
    position relative
    width 100%
    height 1134px
    background url("./imgs/bg1.jpg")
    .herobox
        width 100%
        position absolute
        top 190px
        &.show          //展开英雄列表
            span
                opacity 1
                &.hero1
                    transform translate(0,0)
                &.hero2
                    transform translate(0,0)
                &.hero3
                    transform translate(0,0)
                &.hero4
                    transform translate(0,0)
                &.hero5
                    transform translate(0,0)
                &.hero6
                    transform translate(0,0)
        span
            display: block;
            width: 179px;
            height: 973px;
            position: absolute;
            left: 50%;
            top: 0; 
            opacity: 0
            &.hero1
                transform: translate(-60px,0);
                background url("./imgs/hero1.png") no-repeat
                margin-left: -751px;
                transition: all 1s .4s ease;
            &.hero2
                transform: translate(-40px,0);
                background url("./imgs/hero2.png") no-repeat
                margin-left -581px;
                transition: all .8s .2s ease;
            &.hero3
                transform: translate(-20px,0);
                background url("./imgs/hero3.png") no-repeat
                margin-left: -410px;
                transition: all .6s ease;
            &.hero4
                transform: translate(20px,0);
                background url("./imgs/hero4.png") no-repeat
                transition: all .6s ease;
                margin-left: 191px;
            &.hero5
                transform: translate(40px,0);
                background url("./imgs/hero5.png") no-repeat
                margin-left: 361px;
                transition: all .8s .2s ease;
            &.hero6
                transform: translate(60px,0);
                background url("./imgs/hero6.png") no-repeat
                margin-left: 531px;
                transition: all 1s .4s ease;
    .logo
        display: block;
        width: 250px;
        height: 174px;
        background center / contain url("./imgs/logo.png")
        position: absolute;
        left: 50%;
        margin-left: -125px;
        top: 5px;
        text-indent: -1000em;
        overflow: hidden;
    .slogan
        width: 141px;
        height: 612px;
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -85.5px;
        top: 206px;
        background-repeat: no-repeat;
        background 0 0 url("./imgs/index_z_c13af9e.png") no-repeat
    .order
        width: 98px;
        height: 129px
        top: 523px;
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -118px;
        transition: all .1s;
        background url("./imgs/page1-btn-order_6611dd4.png")
        &:hover
            background url("./imgs/page1-btn-order-on_c3c04af.png")
            &:after
                background url("./imgs/page1-btn-rtArror-on_2e37bac.png")
            &:before
                background url("./imgs/page1-btn-leftArror-on_bc79d17.png") 
        &:after
            content: '';
            width: 18px;
            height: 36px;
            position: absolute;
            bottom: 31px;
            animation: rtArror 1s ease-in-out 0s infinite;
            right: -8px;
            background url("./imgs/page1-btn-rtArror_1cb9ee7.png")           
        &:before
            content: '';
            width: 18px;
            height: 36px;
            position: absolute;
            bottom: 31px;
            animation: leftArror 1s ease-in-out 0s infinite;
            left -8px
            background url("./imgs/page1-btn-leftArror_7b197bf.png")               
    .zw
        width: 98px;
        height: 98px;
        top 665px
        background url("./imgs/page1-btn-zjs_fcc5970.png")
        &:hover
            background url("./imgs/page1-btn-zjs-h_45d2188.png")
    .gw
        display: block;
        width: 41px;
        height: 162px;
        background: url("./imgs/btn-home_2962c7f.png") no-repeat;
        position: absolute;
        right: 54px;
        top: 29px;
        text-indent: -1000em;
        overflow: hidden;
        -webkit-transition: all .1s;
        -moz-transition: all .1s;
        -ms-transition: all .1s;
        transition: all .1s;
        &:hover
            background: url("./imgs/btn-home-on_b739c7d.png") no-repeat;

@-webkit-keyframes leftArror {
	0% {
		-webkit-transform: translateX(-2px);
		-moz-transform: translateX(-2px);
		-ms-transform: translateX(-2px);
		transform: translateX(-2px)
	}

	50% {
		-webkit-transform: translateX(2px);
		-moz-transform: translateX(2px);
		-ms-transform: translateX(2px);
		transform: translateX(2px)
	}

	100% {
		-webkit-transform: translateX(-2px);
		-moz-transform: translateX(-2px);
		-ms-transform: translateX(-2px);
		transform: translateX(-2px)
	}
}
@-webkit-keyframes rtArror {
	0% {
		-webkit-transform: translateX(2px);
		-moz-transform: translateX(2px);
		-ms-transform: translateX(2px);
		transform: translateX(2px)
	}

	50% {
		-webkit-transform: translateX(-2px);
		-moz-transform: translateX(-2px);
		-ms-transform: translateX(-2px);
		transform: translateX(-2px)
	}

	100% {
		-webkit-transform: translateX(2px);
		-moz-transform: translateX(2px);
		-ms-transform: translateX(2px);
		transform: translateX(2px)
	}
}
</style>
