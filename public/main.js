import Vue from 'vue';
import app from './components/app.vue';
import test from './components/test.vue';

import dir from './components/directive.vue';
import store from './vuex/store';
import vueUtil from './js/vueUtil.js';
import iview from './js/libs/iview2.0.0.js';
require('./style/yui.less');
require('./style/style.less');
// require('./js/test');

Vue.component('anchored-heading', {
    render: function (createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function (item) {
                return createElement('li', item.name)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
    },
    props: {
        items: {
            type: null,
            required: false
        }
    }
});
Vue.component('demo', {
    render (createElement) {
        console.log(this.$slots.default);
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^\-|\-$)/g, '');
        console.log(headingId);
        return createElement(
            `h${this.level}`,
            {

                style: {
                    position: 'absolute',
                    top: '1000px',
                }
            },
            [
                createElement('a' ,{
                    attrs: {
                        name: headingId,
                        href: `#${headingId}`,
                    },

                },this.$slots.default)
            ],
        )
    },
    props: {
       level: Number
    }
});


Vue.directive('focus', function (el, binding){
    console.log(binding);
});
Vue.use(iview);
Vue.use(vueUtil);
new Vue({
    el: "#app",
    store,
    // template: '<demo :level="1"></demo>',
    data: {
        items: []
    },
    components: {
        app,
        test,
        dir
    }

});


function getChildrenTextContent(children) {
    return children.map(function (node) {
        return node.children
            ? getChildrenTextContent(node.children)
            : node.text
    }).join('');
};
