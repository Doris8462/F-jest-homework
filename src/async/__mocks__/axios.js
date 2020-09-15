export default {
  get: jest.fn(() => Promise.resolve({ data: "users" })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
