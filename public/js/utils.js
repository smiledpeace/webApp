import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

const utils = {
    ajaxQuery (url, params ,sucBack, errBack) {
        Vue.http.post(url, params).then(function (res) {
            if (sucBack && typeof sucBack === 'function') {
                sucBack(res);
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
    getCss (o, key) {
        return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
    }
};

export default utils;