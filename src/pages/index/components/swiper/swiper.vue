<template>
    <swiper :options="swiperOption" ref="mySwiper" class="main-swiper">
        <!-- 第一屏 -->
        <swiper-slide><part1 class="part" :show="show"></part1></swiper-slide>
        <!-- 第二屏 -->

        <swiper-slide>I'm Slide 2</swiper-slide>
        <!-- 第三屏 -->

        <swiper-slide>I'm Slide 3</swiper-slide>
  </swiper>
</template>

<script type="text/ecmascript-6">
import Part1 from '../part1/part1'
export default {
    data() {
        let vm = this
        return {
            swiperOption: {
                vm: vm,
                mousewheel: true,
                direction: 'vertical',
                effect : 'fade',
                on: {
                    slideChangeTransitionStart: function(){
                        vm.$emit('currInex',this.activeIndex)                     
                    },
                }
            },   
        }
    },
    props:['show'],
    components: {
        Part1
    }
};
</script>

<style scoped lang="stylus">
.main-swiper
    width 100%
    height 100%
    .part
        width 100%
        height 100%
</style>
