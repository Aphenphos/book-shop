const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('tests if books are grabbed properly', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('returns books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(4);

    const bookTwo = res.body.find((book) => book.id === '2');
    expect(bookTwo).toHaveProperty('title', 'B');
    expect(bookTwo).toHaveProperty('released', 2001);
  });
  afterAll(() => {
    pool.end();
  });
});
