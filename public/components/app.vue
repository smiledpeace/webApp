<template>
    <div class="test" contenteditable="true">
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
    .more {
        height: 100px;
    }
</style>
<script>
    import {getData} from '../js/api';
    export default {
        mounted () {
            getData();
        },
        data () {
            return {}
        },
        methods: {},
        props: [],
        components: {}
    }
</script>
