/**
 * Created by dcg on 2017/5/10.
 */
import * as directives from './directive.js';
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (item) {
            return !!~this.indexOf(item)
        }
    });
}
const install = Vue => {
    Vue.prototype.$clone = function copy(copyObj) {
        const type = Object.prototype.toString.call(copyObj);
        if (~['[object Array]', '[object Object]'].indexOf(type)) {
            const target = type === '[object Array]' ? [] : {};
            for (let key in copyObj) {
                target[key] = copy(copyObj[key]);
            }
            return target
        }
        return copyObj
    };
    //注册指令
    Object.keys(directives).forEach(key => {
        Vue.directive(key, directives[key]);
    });
};
export default {
    install
}
