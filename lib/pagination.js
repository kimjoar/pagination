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

    return function (options) {
        var total = options.total;
        var rows = options.rows || 10;

        if (total < rows) return [];

        var numberOfPages = Math.ceil(total / rows);
        var pages = [];

        for (var page = 1; page < numberOfPages + 1; page++) {
            pages.push(page);
        }
        return pages;
    };
}));

