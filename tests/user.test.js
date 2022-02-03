import { expect, request, use } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app'
import 'dotenv/config';

use(chaiHttp)

describe("USER END-POINT-TEST", () => {
  it("should accept user to login", (done) => {
    request(app)
      .post("/api/v1/users/login")
      .send({
        email: "ncuti65@gmail.com",
        password: "Pass@123",
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it("Should not login", (done) => {
    request(app)
      .post("/api/v1/users/login")
      .send({
        email: "test",
        password: "test",
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(403);
        done();
      });
  });
});