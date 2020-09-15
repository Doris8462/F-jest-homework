import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValueOnce({
      data: {
        name: "NANA",
      },
    });
    const result = register("mocked username", "mocked password");

    await expect(result).resolves.toEqual({ name: "NANA" });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);
    const username = "mocked username";
    const password = "mocked password";
    const result = register(username, password);
    await expect(result).rejects.toThrow("wrong username or password");
  });
});
