<template lang="html">
    <div id="template__app--list">
        <div class="template__header">
            <span class="template__header__title">列表</span>

                <i-select v-model="xuanzebumen">

                        <i-option :value="1">1</i-option>

                        <i-option :value="2">2</i-option>

                        <i-option :value="3">3</i-option>

                        <i-option :value="4">4</i-option>

                </i-select>

                <i-select v-model="xiala">

                        <i-option :value="1">1</i-option>

                        <i-option :value="2">2</i-option>

                        <i-option :value="3">3</i-option>

                        <i-option :value="4">4</i-option>

                </i-select>





                <i-button type="primary">确认</i-button>

                <i-button type="ghost">取消</i-button>

                <i-button type="error">错误</i-button>

        </div>
        <main>

                <aside class="">
                    <i-menu :active-name.sync="activeKey" :accordion="true">

                            <Menu-item name="1" >待处理</Menu-item>

                            <Menu-item name="100" >待处理</Menu-item>

                        <!-- @click="selectEvent(2)" -->


                                <Submenu name="2" >
                                    <template slot="title">审核中</template>

                                        <Menu-item name="2-1" >待处理</Menu-item>

                                        <Menu-item name="2-2" >待处理</Menu-item>

                                </Submenu>

                                <Submenu name="3" >
                                    <template slot="title">审核中</template>

                                        <Menu-item name="3-1" >待处理</Menu-item>

                                        <Menu-item name="3-2" >待处理</Menu-item>

                                </Submenu>


                    </i-menu>
                </aside>


            <div class="template__body">
                <i-table :columns="columns1"  style="border: none;" :data="data1"></i-table>
            </div>
        </main>
    <div>

</template>

<script>
export default {
    data () {
        return  {


                    xuanzebumen: '',

                    xiala: '',

            activeKey: '1',
            columns1: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄',
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }
            ]
        }
    },
}
</script>

<style lang="css">

</style>
