import { expect, request, use } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app'
import 'dotenv/config';

use(chaiHttp)

describe("USER END-POINT-TEST", () => {
    // it("Should retrieve the articles", async () => {
    //     const res = await request(app).get("/api/v1/aritcles/")
    //     expect(res).to.have.status([200])
    //     expect(res.type).to.have.equal("application/json")
    // })
    // it("Should not retrieve the articles", async () => {
    //     const res = await request(app).get("/api/v1/aritcle/")
    //     expect(res).to.have.status([404])
    // })
})