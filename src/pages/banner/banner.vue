<template>
    <div class="banner">
        <div class="wrapper">
            <section1></section1>
            <section2></section2>
            <section3></section3>
            <section4></section4>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Section1 from 'pages/banner/components/section1'
import Section2 from 'pages/banner/components/section2'
import Section3 from 'pages/banner/components/section3'
import Section4 from 'pages/banner/components/section4'
export default {
    data() {
        return {};
    },
    components: {
        Section1,
        Section2,
        Section3,
        Section4
    }
};
</script>

<style scoped lang="stylus">
</style>
