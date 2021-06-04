import request from 'supertest';
import App from '../index.js';

describe('GET /api/convert/:value', () => {
  it('successfully returns a converted value', async () => {
    const response = await request(App)
      .get('/api/convert/10')
      .set('Content-Type', 'application/json');
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('result', 'A');
  });
  it('returns a 400 if an invalid paramater input is given', async () => {
    const response = await request(App)
      .get('/api/convert/abc')
      .set('Content-Type', 'application/json');
    expect(response.status).toEqual(400);
  });
});
