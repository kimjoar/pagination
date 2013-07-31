/*global define */

(function (root, factory) {

    /*
     * Export magic for node, AMD and the browser.
     */
    if (typeof define === 'function' && define.amd) define(factory);
    else if (typeof exports === 'object') module.exports = factory();
    else root.pagination = factory();

}(this, function () {
    'use strict';

    return function (totalHits, hitsPerPage) {
        if (totalHits < hitsPerPage) return [];

        var numberOfPages = Math.ceil(totalHits / hitsPerPage);
        var pages = [];

        for (var page = 1; page < numberOfPages + 1; page++) {
            pages.push(page);
        }
        return pages;
    };
}));

