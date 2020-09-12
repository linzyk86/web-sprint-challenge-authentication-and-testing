const supertest = require("supertest")
const server = require("../api/server")

const db = require("../database/dbConfig")



test("POST /register", async ()=>{
    const res = await supertest(server)
        .post("/register")
    expect(res.type).toBe("application/json")

})

test("POST /login", async ()=>{
    const res = await supertest(server)
    .post("/login")
    expect(res.type).toBe("application/json")
    expect(res.type).toBeTruthy()

})

