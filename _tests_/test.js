const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
chai.use(chaiHttp);
const app = require("../src/app");
const server= require('../index')


describe("API Testing", () => {
  
  describe("homepage", () => {
    it("should render html file", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('GET /subscribers', () => {
    it('should get data of all subscribers', (done) => {
      chai.request(server)
        .get('/subscribers')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
      })
    })
  })

  describe('GET /subscribers/names', () => {
    it('should get data of names and subscribedChannel of all subscribers', (done) => {
      chai.request(server)
        .get('/subscribers/names')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
      })
    })
  })

  describe('GET /subscribers/:id', () => {
    it('should get data of single subcriber by id', (done) => {
      const subscriberId= "664bc64d60e1eb6d9996f8df"

      chai.request(server)
        .get(`/subscribers/${subscriberId}`)
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
      })
    })
  })
});
