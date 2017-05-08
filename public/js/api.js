import utils from './utils';

export const getData = function (cb) {
    utils.ajaxQuery('/query/getData','', function (res) {
        if (cb && typeof cb === 'function') {
            cb(res);
        }
    })
};
export const getList = function (cb) {
    utils.ajaxQuery('/query/getList','', function (res) {
        if (cb && typeof cb === 'function') {
            cb(res);
        }
    })
};