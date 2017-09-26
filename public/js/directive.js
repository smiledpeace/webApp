import Vue from 'vue'
import IScroll from './libs/iscroll-probe.js';

const scrollParams = {
    freeScroll:true,
    mouseWheel: true,
    scrollbars: true,
    fadeScrollbars: true,
    click: false,
    disableMouse: true,
    preventDefaultException: {tagName: /.*/},
    probeType: 3,
    preventDefault: false,
    interactiveScrollbars: true
}
const scrollObj = {};

Vue.prototype.$scrollObj = scrollObj
export const iscroll = {
	bind(el) {
		scrollObj[el.getAttribute('data')] = new IScroll(el, scrollParams);
	},
    update(el, v, b, n) {
        const scroll = scrollObj[el.getAttribute('data')];
        scroll.refresh();
    }
}
