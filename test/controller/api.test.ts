import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/home.test.ts', () => {

  it('should POST /api/get_user', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).get('/api/user/get_all');
    const results = await createHttpRequest(app).get('/api/hobbyQ/get_all');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(results.status).toBe(200);

    // close app
    await close(app);
  });
});
