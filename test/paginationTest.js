/*global chai,describe,it,pagination */

var expect = chai.expect;

describe('pagination', function() {

    it('returns empty array if total hits is 0', function() {
        var pages = pagination(0, 10);
        expect(pages).to.be.empty;
    });

    it('returns empty array if hits per page is less than total hits', function() {
        var pages = pagination(1, 10);
        expect(pages).to.be.empty;
    });

    it('returns array with two pages', function() {
        var pages = pagination(15, 10);
        expect(pages).to.eql([1,2]);
    });

    it('returns array with two pages is total hits is the double of hits per page', function() {
        var pages = pagination(20, 10);
        expect(pages).to.eql([1,2]);
    });

    it('returns array with three pages', function() {
        var pages = pagination(21, 10);
        expect(pages).to.eql([1,2,3]);
    });

    it('returns array with 100 pages', function() {
        var pages = pagination(1000, 10);
        expect(pages.length).to.eql(100);
    });

});