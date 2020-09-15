import getUsers from "../users";

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock

    await expect(getUsers()).resolves.toBe("users");
  });
});
