import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/home.test.ts', () => {

  it('should POST /api/get_user', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const user_get_all_res = await createHttpRequest(app).get('/api/user/get_all');
    const hobbyQ_get_all_res = await createHttpRequest(app).get('/api/hobbyQ/get_all');
    const note_get_all_res = await createHttpRequest(app).get('/api/note/get_all');
    const note_select_res = await createHttpRequest(app).get('/api/note/select');
    const comment_get_all_res = await createHttpRequest(app).get('/api/comment/get_all');
    const comment_select_res = await createHttpRequest(app).get('/api/comment/select');
    const hot_select_res = await createHttpRequest(app).get('/api/hot/select');
    

    // use expect by jest
    expect(user_get_all_res.status).toBe(200);
    expect(hobbyQ_get_all_res.status).toBe(200);
    expect(note_get_all_res.status).toBe(200);
    expect(note_select_res.status).toBe(200);
    expect(comment_get_all_res.status).toBe(200);
    expect(comment_select_res.status).toBe(200);
    expect(hot_select_res.status).toBe(200);

    // close app
    await close(app);
  });
});
