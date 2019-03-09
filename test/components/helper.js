var expect  = require('chai').expect;
var request = require('request');
var helper = require('./../../components/helper');

describe('helper', function() {
    describe ('square', function() {
        it('check for zero', function(done){
            let val = helper.square(0);
            expect(val).to.equal(0);
            done();
        });
        it('check for one', function(done){
            let val = helper.square(1);
            expect(val).to.equal(1);
            done();
        });
    });

    describe ('squareRoot', function() {
        it('check for zero', function(done){
            let val = helper.squareRoot(0);
            expect(val).to.equal(0);
            done();
        });
        it('check for one', function(done){
            let val = helper.squareRoot(1);
            expect(val).to.equal(0);
            done();
        });
    });
});