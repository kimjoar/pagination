/*global chai,describe,it,pagination */

var expect = chai.expect;

describe('pagination', function() {

    it('returns empty array if total hits is 0', function() {
        var pages = pagination({ total: 0, rows: 10 });
        expect(pages).to.be.empty;
    });

    it('returns empty array if hits per page is less than total hits', function() {
        var pages = pagination({ total: 1, rows: 10 });
        expect(pages).to.be.empty;
    });

    it('returns array with two pages', function() {
        var pages = pagination({ total: 15, rows: 10 });
        expect(pages).to.eql([1,2]);
    });

    it('returns array with two pages is total hits is the double of hits per page', function() {
        var pages = pagination({ total: 20, rows: 10 });
        expect(pages).to.eql([1,2]);
    });

    it('returns array with three pages', function() {
        var pages = pagination({ total: 21, rows: 10 });
        expect(pages).to.eql([1,2,3]);
    });

    it('returns array with 100 pages', function() {
        var pages = pagination({ total: 1000, rows: 10 });
        expect(pages.length).to.eql(100);
    });

    it('only displays the number of visible links, if specified', function() {
        var pages = pagination({ total: 1000, rows: 10, visible: 5 });
        expect(pages.length).to.eql(5);
    });

});
