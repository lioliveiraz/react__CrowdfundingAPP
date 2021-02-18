export default {
    get: jest.fn(() => Promise.resolve({})),
    post: jest.fn(() => Promise.resolve({})),
    put: jest.fn(() => Promise.resolve({})),

    get: jest.fn(() => Promise.reject({})),
    post: jest.fn(() => Promise.reject({})),
    put: jest.fn(() => Promise.reject({})),
};

