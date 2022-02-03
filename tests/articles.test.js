import { expect, request, use } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app'
import 'dotenv/config';

use(chaiHttp)

describe("ARTICLE END-POINT TESTING", () => {
    it("Should retrieve the articles", async () => {
        const res = await request(app).get("/api/v1/articles/")
        expect(res).to.have.status([200])
        expect(res.type).to.have.equal("application/json")
    })

    it("Should not retrieve the articles", async () => {
        const res = await request(app).get("/api/v1/aritcle/")
        expect(res).to.have.status([404])
    })

    it("Should retrieve the article by ID", async () => {
      const res = await request(app).get(
        "/api/v1/articles/61fae837852d90ca8358d7bf"
      );
      expect(res).to.have.status([200]);
    });

    it("Should not create an article", (done) => {
      request(app)
        .post("/api/v1/articles")
        .send({
          title: "test",
          content: "test",
          image: "test",
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(401);
          done();
        });
    });

    it("Should not retrieve the articles", async () => {
      const res = await request(app).get("/api/v1/articles/3434");
      expect(res).to.have.status([404]);
    });
})