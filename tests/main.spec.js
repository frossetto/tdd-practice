import { expect } from 'chai';
import * as mocha from 'mocha';
describe('Main', () => {
  context('Method Check Mocha and Chai',() => {
    it('shoud prove mocha and chai is installed and running', function(){
      expect(mocha).to.not.be.an('undefined');
    })
  })
})
