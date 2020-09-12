const supertest = require("supertest")
const server = require("../api/server")

const db = require("../database/dbConfig")



test("GET /", async ()=>{
    const res = await supertest(server).get("/")
    expect(res.type).toBe("application/json")
    expect(res.type).toBeTruthy()

})