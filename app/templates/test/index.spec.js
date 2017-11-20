'use strict';
const chai = require('chai');
const sinon = require('sinon');
chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));
const expect = chai.expect;
const sandbox = sinon.sandbox.create();


describe('index', function(){
  it('requires index.js without errors', function() {
    expect(() => require('../src/index')).not.to.throw();
  });
});
