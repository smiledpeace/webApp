import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

const utils = {
    ajaxQuery (url, params ,sucBack, errBack) {
        Vue.http.post(url, params).then(function (res) {
            if (res.result === 'TRUE') {
                if (sucBack && typeof sucBack === 'function') {
                    sucBack(res);
                }
            }
        }).catch(function () {
            errBack()
        })
    },
    setTitle(title){
        var $body = document.body || document.documentElement;
        document.title = title;
        // hack在微信等webview中无法修改document.title的情况
        var $iframe = document.createElement('iframe');
        $iframe.src = "";
        $iframe.style.width = 0;
        $iframe.style.height = 0;
        $iframe.addEventListener('load', function title() {
            setTimeout(function () {
                $iframe.removeEventListener('load', title);
                $body.removeChild($iframe);
            }, 0);
        });
        $body.appendChild($iframe);
    },
    getCss (o,key){
        return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
    },
    /**
     * 对象的深度复制
     * @param obj
     * @returns {{}}
     */
    objectDepthCopy: function (obj) {
        let temp = null;
        if (obj && !(obj instanceof Array)) {
            temp = {};
            for (let item in obj) {
                if (obj[item] && typeof obj[item] == 'object') {
                    //if(item == '')
                    temp[item] = this.objectDepthCopy(obj[item]);
                } else {
                    temp[item] = obj[item];
                }
            }
        } else {
            temp = [];
            if (obj) {
                for (let i = 0, _i = obj.length; i < _i; i++) {
                    if (obj[i] && typeof obj[i] == 'object') {
                        temp[i] = this.objectDepthCopy(obj[i]);
                    } else {
                        temp[i] = obj[i];
                    }
                }
            }
        }
        return temp;
    },
};

export default utils;