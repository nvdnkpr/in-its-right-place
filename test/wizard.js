var Wizard = require('../lib/wizard.js');
var Lab = require('lab');
var Path = require('path');
var Fs = require('fs');
var Chai = require('chai');
Chai.should();

// Test shortcuts

var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;
var describe = Lab.experiment;
var it = Lab.test;

describe('wizard', function () {

    it('should choose "new girl" ', function (done) {
    	var res = Wizard.findBestMatch("new.girl.e20s02.blablabla-ad", ["New Girl", "new", "new girl song", "dasdasd"]);
        res.should.be.eql("New Girl");
        done();
    });

    it('should choose nothing when there is no apperent match ', function (done) {
        var res = Wizard.findBestMatch("old.boy.e20s02.blablabla-ad", ["New Girl", "new", "new girl song", "dasdasd"]);
        expect(res).to.be.undefined;
        done();
    });

    it('should choose "bla bla" ', function (done) {
        var res = Wizard.findBestMatch("bla_bla.e20s02.blablabla-ad", ["bla", "bla bLa" , "New Girl", "new", "new girl song", "dasdasd"]);
        res.should.be.eql("bla bLa");
        done();
    });

});