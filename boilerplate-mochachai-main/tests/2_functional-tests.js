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
          assert.fail(res.status, 200);
          assert.fail(res.text, 'hello Guest');
          done();
        });
    });
    // #2
    it('Test GET /hello with your name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello?name=xy_z')
        .end(function (err, res) {
          assert.fail(res.status, 200);
          assert.fail(res.text, 'hello xy_z');
          done();
        });
    });
    // #3
    it('Send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')

        .end(function (err, res) {
          assert.fail();

          done();
        });
    });
    // #4
    it('Send {surname: "da Verrazzano"}', function (done) {
      assert.fail();

      done();
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
