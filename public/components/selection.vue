<template>
    <ul>
        <li v-for="item in items" >
            <span @click="item.subs && item.subs.length ? showSubs() : otherBack($event)"> {{ item.name }} </span>
            <template v-if="item.subs && hasSubs">
                <accordion :items="item.subs" :other-back="otherBack"></accordion>
            </template>
        </li>

    </ul>
</template>
<style scoped lang="less" rel="stylesheet/less">
    span {
        display: block;
    }
</style>
<script>
    export default{
        name: 'accordion',
        mounted () {

        },
        data () {
            return {
                hasSubs: false
            }
        },
        methods: {
            showSubs () {
                this.hasSubs = !this.hasSubs;
            },
            doSomething (e) {

            }
        },
        props: {
            items: {
                type: Array,
                required: true,
                default () {
                    return [];
                }
            },
            otherBack: {
                type: Function,
                required: false,
                default () {
                    return {};
                }
            }
        },
        components: {}
    }
</script>
