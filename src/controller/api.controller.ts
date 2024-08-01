import { Inject, Controller, Get, Post,} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { IHobbyQ, INote, IUser } from '../interface';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService;

  @Inject()
  hobbyQService;

  @Inject()
  noteService;

  @Inject()
  commentService;

  @Inject()
  hotService;

  @Post('/user/register')
  async user_register(): Promise<boolean> {
    const user = this.ctx.request.body;
    return this.userService.register(user);
  }

  @Post('/user/login')
  async user_login(): Promise<boolean> {
    const user = this.ctx.request.body;
    return this.userService.login(user);
    
  }

  @Get('/user/get_all')
  async user_get_all(): Promise<IUser[]> {
    return this.userService.get_all();
  }

  @Post('/hobbyQ/create')
  async hobbyQ_create()  {
    const hobbyQ = this.ctx.request.body;
    this.hobbyQService.create(hobbyQ);
  }

  @Get('/hobbyQ/get_all')
  async hobbyQ_get_all(): Promise<IHobbyQ> {
    return this.hobbyQService.get_all();
  }

  @Get('/hobbyQ/select')
  async hobbyQ_select() {
    const req = this.ctx.request.query;
    console.log(req);
    console.log(this.hobbyQService.select(req));
    return this.hobbyQService.select(req);
  }

  @Post('/note/post')
  async note_post()  {
    const note = this.ctx.request.body;
    console.log(note);
    this.noteService.post(note);
  }

  @Get('/note/get_all')
  async note_get_all(): Promise<INote[]> {
    return this.noteService.get_all();
  }

  @Get('/note/select')
  async note_select() {
    const req = this.ctx.request.query;
    console.log(req);
    console.log(this.noteService.select(req));
    return this.noteService.select(req);
  }

  @Get('/comment/get_all')
  async comment_get_all() {
    return this.commentService.get_all();
  }

  @Post('/comment/post')
  async comment_post() {
    const comment = this.ctx.request.body;
    this.commentService.post(comment);
  }

  @Get('/comment/select')
  async comment_select() {
    const req = this.ctx.request.query;
    console.log(req);

    console.log(this.commentService.select(req));
    return this.commentService.select(req);
  }

  @Get('/hot/select')

  async hot_select() {
    const req = this.ctx.request.query;
    console.log(req);
    console.log(this.hotService.select(req));
    return this.hotService.select(req);
  }
}