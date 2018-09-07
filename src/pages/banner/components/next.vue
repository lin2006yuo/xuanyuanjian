<template>
        <p class="next"><span></span></p>
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
@keyframes shangxia 
    0% 
        transform translate3d(0,-8px,0) 
    50%
        transform translate3d(0,8px,0) 
    100% 
        transform translate3d(0,-8px,0)
</style>
