import request from "supertest";

import server from "../src/server";

describe("/users endpoints", () => {
  describe("GET /", () => {
    it("returns 200 OK", async () => {
      const response = await request(server).get("/api/users");

      expect(response.status).toBe(200);
    });
    it("returns an array", async () => {
      const response = await request(server).get("/api/users");

      expect(Array.isArray(response.body.users)).toBe(true);
    });
  });

  describe("POST /users", () => {
    it("returns a json object", async () => {
      const newUser = {
        username: "ssteven",
        first_name: "Sam",
        last_name: "Steven",
        position: "staff"
      };
      const response = await request(server)
        .post("/api/users")
        .send(newUser)
        .set("Accept", "application/json");

      expect(response.type).toBe("application/json");
    });
    it("returns the new user in the last element in the users array", async () => {
      const newUser = {
        username: "ssteven",
        first_name: "Sam",
        last_name: "Steven",
        position: "staff"
      };
      const response = await request(server)
        .post("/api/users")
        .send(newUser)
        .set("Accept", "application/json");
      const users = response.body.users;
      const createdUser = users[users.length - 1];

      expect(createdUser.username).toBe(newUser.username);
    });
  });

  describe("DELETE /users/:username", () => {
    it("returns a 500 status when the username is not in the database", async () => {
      const deletingUsername = "tnguyex";

      const response = await request(server)
        .delete(`/api/users/${deletingUsername}`)
        .set("Accept", "application/json");

      expect(response.status).toBe(500);
    });

    it("returns an users array without the deleted users", async () => {
      const deletingUsername = "tnguyen";

      const response = await request(server)
        .delete(`/api/users/${deletingUsername}`)
        .set("Accept", "application/json");

      const users = response.body.users;

      const deleted =
        users.findIndex(user => user.username === deletingUsername) === -1;
      console.log(response);
      expect(deleted).toBe(true);
    });
  });
});
