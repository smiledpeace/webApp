import Vue from 'vue';
import app from './components/app.vue';
require('./style/test.less');
require('./style/style.less');
new Vue({
    el: "#app",
    components: {
        app
    }
});