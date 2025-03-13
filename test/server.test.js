const request = require("supertest");
const app = require("../src/server");

describe("GET /", () => {
  it("should return 'Test integration'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Test integration");
  });
});
