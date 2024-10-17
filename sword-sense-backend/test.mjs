const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
const app = require('../server'); // Ensure the path is correct based on where server.js is located
chai.use(chaiHttp);

describe('API Tests', () => {

  // Test fetching all articles (optional route)
  it('should return all articles', (done) => {
    chai.request(app)
      .get('/api/articles')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(Object.keys(res.body).length).to.be.above(0);
        done();
      });
  });

  // Test fetching a single article by ID
  it('should return a single article by ID', (done) => {
    chai.request(app)
      .get('/api/articles/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('title');
        expect(res.body).to.have.property('content');
        done();
      });
  });

  // Test when an article is not found
  it('should return 404 for an article that does not exist', (done) => {
    chai.request(app)
      .get('/api/articles/999')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('message').eql('Article not found');
        done();
      });
  });
});
