<template>
    <ul class="y_accordion">
        <li v-for="(item, index) in items">
            <a href="javascript:void(0);" @click="showNone(index)" class="y_a">{{item.name}}</a>
            <transition name="fade">
                <div v-if="showType === index">{{item.content}}</div>
            </transition>
        </li>
    </ul>
</template>
<style scoped lang="less" rel="stylesheet/less">

    .fade-enter-active,
    .fade-leave-active {
        transition: all .3s ease;
    }
    @keyframes slideInUp {
        from {
            transform: translate3d(0, 100%, 0);
            visibility: visible;
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes slideInDown {
        from {
            transform: translate3d(0, -100%, 0);
            visibility: visible;
        }
        to {
            transform: translate3d(0, 0, 0);
        }
    }

</style>
<script>
    export default{
        mounted () {

        },
        data () {
            return {
                showType: -1,
                index: 0
            }
        },
        methods: {
            showNone (index) {
                this.showType = index;
            }
        },
        props: {
            items: {
                type: Array,
                reqired: false,
                default () {
                    return [];
                }
            }
        },
        components: {}
    }
</script>
