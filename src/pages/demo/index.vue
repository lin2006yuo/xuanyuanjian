<template>
  <div
    class="bg mask"
    :style="{
      '-webkit-mask': `url(${img}) center center / 4000% 100% no-repeat`,
    }"
    :class="{ show: show }"
  >
    <span class="debug" @click="handleClick">点击播放动画</span>
    <div class="buttons">
      <button @click="handleshuimo">水墨</button>
      <button @click="handlemasaike">马赛克</button>
    </div>
  </div>
</template>

<script>
import shuimo from "../index/img/mask_caffc4a.png"
import masaike from "../index/img/masaike.png"
export default {
  data() {
    return {
      show: false,
      img: shuimo
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show
    },
    handleshuimo() {
      this.img = shuimo
    },
    handlemasaike() {
      this.img = masaike
    }
  }
}
</script>

<style scope lang="stylus">
.buttons
  position absolute
  left 30px
  top 30px
  button
    outline none
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
.bg
    max-width: 1920px;
    min-width: 1200px;
    height: 100%;
    width 100%
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    // background: url("../index/img/bg_a1acca9.jpg") no-repeat center center;
    // background: url("shuimo.jpg") no-repeat center center;
    background #000
    opacity: 1;
    &.mask
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      // -webkit-mask: url(img/mask_caffc4a.png) center center no-repeat;
      // -webkit-mask: url('../index/img/masaike.png') center center no-repeat;
      // -webkit-mask: url('../index/img/mask_caffc4a.png') center center no-repeat;
      -webkit-mask-size: 4000% 100%;
      will-change: transform;
      &.show
        animation: masky 1.2s steps(39) forwards
        z-index: 10;
        display: block;
@keyframes masky
    0%
        -webkit-mask-position: 0 0;
    100%
        -webkit-mask-position: 100% 0;
</style>
