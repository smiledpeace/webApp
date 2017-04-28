import utils from './utils';

export const getData = function () {
    utils.ajaxQuery('/query/getList','', function (res) {
        console.log(res);
    })
};