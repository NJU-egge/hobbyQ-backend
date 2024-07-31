import { Provide, Scope, ScopeEnum } from "@midwayjs/core";
import { writeFileSync, readFileSync} from "fs";
import { IComment } from "../interface";

@Scope(ScopeEnum.Singleton)
@Provide('commentService')
export class CommentService {
  private commentData: IComment[] = [];

  //
  // inser(e): 
  // 
  post(e: IComment){
    
    this.commentData = JSON.parse(readFileSync("./src/service/commentData.json").toString());
    console.log("读取用户数据文件成功！");

    
    this.commentData.push(e);
    writeFileSync("./src/service/commentData.json", JSON.stringify(this.commentData));
 
 
    
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