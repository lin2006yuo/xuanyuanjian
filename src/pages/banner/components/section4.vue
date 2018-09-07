<template>
    <div class="section4">
        <div class="doc">
            <next></next>
            <div class="picList">
                <div class="pic">
                    <div class="pic-wrap">
                        <div class="smallPic smallPic1"></div>
                        <div class="bigPic bigPic1">
                            <img src="./imgs/page4-pic1-on_09f7fb3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Next from 'pages/banner/components/next.vue'
export default {
    data() {
        return {};
    },
    components: {
        Next
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
</style>
