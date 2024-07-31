import { Provide, Scope, ScopeEnum } from "@midwayjs/core";
import { writeFileSync, readFileSync} from "fs";
import { IHobbyQ, INote } from "../interface";

@Scope(ScopeEnum.Singleton)
@Provide('hobbyQService')
export class HobbyQService {
  private hobbyQData: IHobbyQ[] = [];
  private noteData: INote[] = [];
  //
  // inser(e): 
  // 
  create(e: IHobbyQ): void {
    console.log('开始添加兴趣圈：' + e.hobbyQName);
    this.hobbyQData = JSON.parse(readFileSync("./src/service/hobbyQData.json").toString());
    console.log("读取兴趣圈数据文件成功！");

    if(!this.hobbyQData.some(user => user.hobbyQName === e.hobbyQName)){
      this.hobbyQData.push(e);
      writeFileSync("./src/service/hobbyQData.json", JSON.stringify(this.hobbyQData));
      console.log("兴趣圈数据添加成功！");
      
    }
    else{
      console.log("兴趣圈已存在！");
      
    }
  }

  

  get_all(): IHobbyQ[] {
    console.log('开始获取所有兴趣圈数据！');
    this.hobbyQData = JSON.parse(readFileSync("./src/service/hobbyQData.json").toString());
    console.log("读取兴趣圈数据文件成功！");
    return this.hobbyQData;
  }

  select(e): INote[] {
    console.log('开始查询帖子数据！');
    this.noteData = JSON.parse(readFileSync("./src/service/noteData.json").toString());
    console.log("读取帖子数据文件成功！");
    console.log("查询条件：" + e.hobbyQName + "，标题：" + e.title);
    const result: INote[] = [];
    for(let i = 0; i < this.noteData.length; i++){
      console.log(this.noteData[i])
      if(this.noteData[i].hobbyQName == e.hobbyQName){
    
        result.push(this.noteData[i]);
      }
    }
    return result;
  }

}