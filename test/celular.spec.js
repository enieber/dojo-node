const Should = require('should');
const Celular = require('../src/celular');

describe('teste do celular', function () {
   
   it('testando 1-HOME-SWEET-HOME', function () {
      Celular('1-HOME-SWEET-HOME').should.equal('1-4663-79338-4663');
   });
   
   it('testando MY-MISERABLE-JOB', function() {
      Celular('MY-MISERABLE-JOB').should.equal('69-647372253-562');
   });
   
   it('testando 0-HOME-SWEET-HOME', function() {
      Celular('0-HOME-SWEET-HOME').should.equal('0-4663-79338-4663');
   });
   
});