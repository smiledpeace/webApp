<template>
    <div :class="{y_hover_one : showType === 1, y_hover_two: showType == 2, y_hover_three: showType == 3}">
        <figure><img src="/images/0001.jpg" alt=""></figure>

        <div>
            <h3>Title</h3>
            <p>Wonder Girls一向以青春活力的形象展现在观众面前，先后在韩国和美国乐坛都取得了不错的成绩...</p>
        </div>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">

</style>
<script>
    export default{
        ready () {

        },
        data () {
            return {}
        },
        methods: {},
        props: {
            showType: Number
        },
        components: {}
    }
</script>
