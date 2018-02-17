var expect = require('chai').expect;
describe('Main', function(){
  var mochaObject;
  before(function(){
    mochaObject = require('mocha');
  })
  context('Method Check Mocha and Chai',function(){
    it('shoud prove mocha and chai is installed and running', function(){
      expect(mochaObject).to.not.be.an('undefined');
    })
  })
})
