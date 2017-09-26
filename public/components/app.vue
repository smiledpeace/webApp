<template>
    <div class="">

        <!--<selection :items="items" :other-back="somethingElse"></selection>-->

        <!--<accordion :items="items"></accordion>-->
        <!--<div class="y_font20 y_text" ref="div">TEXT SHADOW</div>-->
        <!--<input type="number" v-focus:foo ref="input">-->
        <!--<div class="y_test">12312</div>-->

        <hover-show :show-type="2"></hover-show>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
    .more {
        height: 100px;
    }
</style>
<script>
    import {getData, getList} from '../js/api';
    import selection from './selection.vue';
    import accordion from './accordion.vue';
    import tranTest from './tranTest.vue';
    import hoverShow from './hoverShow.vue';
    import style from '../style/yui.less';
    export default {
        created () {
            getList(res => {
                this.items = res.data.data;
            });
            console.log(this.$refs);
        },
        data () {
            return {
                items: [],
                style
            }
        },
        methods: {
            somethingElse (e) {
                console.log(e);
                alert(e.target.innerHTML)
            }
         },
        props: [],
        components: {
            selection,
            tranTest,
            hoverShow
        }
    }
</script>
