const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Functional Tests', function () {
  this.timeout(5000);
  describe('Integration tests with chai-http', function () {
    // #1
    it('Test GET /hello with no name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello Guest');
          done();
        });
    });
    // #2
    it('Test GET /hello with your name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello?name=eiramarol')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello eiramarol');
          done();
        });
    });
    // #3
    it('Send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')
        .send({'surname':"Colombo"})
        .end(function (err, res) {
            assert.equal(res.status, 200,'response should be 200');
            assert.equal(res.type,'application/json','Response should be json');
            assert.equal(res.body.name,'Cristoforo','res.body.name should be Cristoforo');
            assert.equal(res.body.surname,'Colombo','res.body.surname should be Colombo');
            
            done();
        });
    });
    // #4
    it('Send {surname: "da Verrazzano"}', function (done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')
        .send({'surname':"da Verrazzano"})
        .end(function (err, res) {
            assert.equal(res.status, 200,'response should be 200');
            assert.equal(res.type,'application/json','Response should be json');
            assert.equal(res.body.name,'Giovanni','res.body.name should be Giovanni');
            assert.equal(res.body.surname,'da Verrazzano','res.body.surname should be da Verrazzano');
            
            done();
        });
      
    });
  });
});

const Browser = require('zombie');

describe('Functional Tests with Zombie.js', function () {
  this.timeout(5000);



  describe('Headless browser', function () {
    it('should have a working "site" property', function() {
      assert.isNotNull(browser.site);
    });
  });

  describe('"Famous Italian Explorers" form', function () {
    // #5
    it('Submit the surname "Colombo" in the HTML form', function (done) {
      assert.fail();

      done();
    });
    // #6
    it('Submit the surname "Vespucci" in the HTML form', function (done) {
      assert.fail();

      done();
    });
  });
});
