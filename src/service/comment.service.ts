import { Provide, Scope, ScopeEnum } from "@midwayjs/core";
import { writeFileSync, readFileSync} from "fs";
import { IComment, IHot } from "../interface";

@Scope(ScopeEnum.Singleton)
@Provide('commentService')
export class CommentService {
  private commentData: IComment[] = [];
  private hotData: IHot[] = [];
  //
  // inser(e): 
  // 
  post(e: IComment){
    
    this.commentData = JSON.parse(readFileSync("./src/service/commentData.json").toString());
    console.log("读取用户数据文件成功！");
    this.hotData = JSON.parse(readFileSync("./src/service/hotData.json").toString());

    let flag = false;

    for(let i = 0; i < this.hotData.length; i++){
      if(this.hotData[i].hobbyQName == e.hobbyQName && this.hotData[i].username == e.username){
        this.hotData[i].hot += 1;
        flag = true;
      } 
    }
    if(!flag){
      let hot: IHot = {
        hobbyQName: e.hobbyQName,
        hot: 1,
        username: e.username,
      }
      this.hotData.push(hot);
    }
    
    this.commentData.push(e);
    writeFileSync("./src/service/hotData.json", JSON.stringify(this.hotData, null, 2));
    writeFileSync("./src/service/commentData.json", JSON.stringify(this.commentData, null, 2));
 
 
    
  }

  get_all(): IComment[] {
    console.log('开始获取所有评论数据！');
    this.commentData = JSON.parse(readFileSync("./src/service/commentData.json").toString());
    console.log("读取帖子数据评论成功！");
    return this.commentData;
  }

  select(e): IComment[] {
  
    this.commentData = JSON.parse(readFileSync("./src/service/commentData.json").toString());
   
    const result: IComment[] = [];
    for(let i = 0; i < this.commentData.length; i++){
      console.log(this.commentData[i])
      if(this.commentData[i].hobbyQName == e.hobbyQName && this.commentData[i].title == e.title){
    
        result.push(this.commentData[i]);
      }
    }
    return result;
    
  }
}