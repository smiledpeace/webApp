import Vue from 'vue';
import app from './components/app.vue';
import store from './vuex/store';
require('./style/test.less');
require('./style/style.less');
new Vue({
    el: "#app",
    store,
    components: {
        app
    }
});