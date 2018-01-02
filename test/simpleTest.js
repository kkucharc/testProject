'use strict';
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

describe('Simple Test', function () {
  it('should test', function () {
    let foo = 'lol';
    let beverages = {tea: ['chai', 'matcha', 'oolong']};

    foo.should.be.a('string');
    foo.should.equal('lol');
    foo.should.have.lengthOf(3);
    beverages.should.have.property('tea').with.lengthOf(3);
  });

  it('expect test', function () {
    let foo = 'lol';
    let beverages = {tea: ['chai', 'matcha', 'oolong']};

    expect(foo).to.be.a('string');
    expect(foo).to.equal('lol');
    expect(foo).to.have.lengthOf(3);
    expect(beverages).to.have.property('tea').with.lengthOf(3)
  });
});
