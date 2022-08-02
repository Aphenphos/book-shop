const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('tests if books are grabbed properly', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('returns authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(3);

    const authorTwo = res.body.find((author) => author.id === '2');
    expect(authorTwo).toHaveProperty('name', 'Billiam');
    expect(authorTwo).toHaveProperty('dob', '8/8/5200');
    expect(authorTwo).toHaveProperty('pob', 'City');
  });

  it('returns specific author page', async () => {
    const res = await request(app).get('/authors/3');
    const authorThree = {
      id: '3',
      name: 'Milliam',
      dob: '4/4/400',
      pob: 'Field'
    };
    expect(res.body).toEqual(authorThree);
  });
  afterAll(() => {
    pool.end();
  });
});
