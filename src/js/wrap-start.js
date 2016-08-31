(function(root, factory) {
    'use strict';

    if (typeof window !== 'object') {
        return;
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.Swiper = factory();
    }
}(this, function () {
    'use strict';
    var $;
