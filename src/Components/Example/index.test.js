const request = require('supertest')
const app = require('../../index');

describe('Post Endpoints', () => {
  it('should create a new post', async (done) => {
    const res = await request(app)
      .get('/example');
    expect(res.statusCode).toEqual(200);
    console.log(res.text);
    expect(res.text).toEqual('SUCCESS');
    done();
  })
})
