const request = require("supertest");
const app = require("../../index");

describe("Test the root path", () => {
  // setting the timeout for the jest
  beforeEach(() => {
    jest.setTimeout(70000);
  });

  // testing variations of API request to the route handler
  it("It should response the GET method", async () => {
    const response = await request(app).get("/everyone");
    expect(response.statusCode).toBe(200);
  });

  it("It should response with the name Jim", async () => {
    const response = await request(app).get("/everyone?name=Jim");
    expect(response.statusCode).toBe(200);
  });

  it("It should response with the age less than 20", async () => {
    const response = await request(app).get("/everyone?age_lt=20");
    expect(response.statusCode).toBe(200);
  });

  it("It should response with the gender male", async () => {
    const response = await request(app).get("/everyone?gender=male");
    expect(response.statusCode).toBe(200);
  });

  it("It should response with the full query string", async () => {
    const response = await request(app).get(
      "/everyone?name=Jim&gender=male&age_gt=20"
    );
    expect(response.statusCode).toBe(200);
  });
});
