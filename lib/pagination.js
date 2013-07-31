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

        var start = 1;
        var stop = numberOfPages;
        var currentPage = options.page || 1;

        if (options.visible) {
            var beforeOrAfter = Math.floor(options.visible / 2);

            start = Math.max(start, currentPage - beforeOrAfter);
            stop = Math.min(stop, currentPage + beforeOrAfter);
        }

        for (var page = start; page < stop + 1; page++) {
            pages.push(page);
        }
        return pages;
    };
}));

