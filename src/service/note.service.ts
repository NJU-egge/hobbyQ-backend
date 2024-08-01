import { Provide, Scope, ScopeEnum } from "@midwayjs/core";
import { writeFileSync, readFileSync} from "fs";
import { INote, IHot } from "../interface";

@Scope(ScopeEnum.Singleton)
@Provide('noteService')
export class NoteService {
  private noteData: INote[] = [];
  private hotData: IHot[] = [];
  //
  // inser(e): 
  // 
  post(e: INote){
    console.log('开始添加帖子：' + e.hobbyQName + "，标题：" + e.title + "，内容：" + e.note + "，发布者：" + e.username);
    this.noteData = JSON.parse(readFileSync("./src/service/noteData.json").toString());
    this.hotData = JSON.parse(readFileSync("./src/service/hotData.json").toString());
    console.log("读取用户数据文件成功！");

    let flag = false;
    
    for(let i = 0; i < this.hotData.length; i++){
      if(this.hotData[i].hobbyQName == e.hobbyQName && this.hotData[i].username == e.username){
        this.hotData[i].hot += 2;
        flag = true;
      } 
    }
    if(!flag){
      let hot: IHot = {
        hobbyQName: e.hobbyQName,
        hot: 2,
        username: e.username,
      }
      this.hotData.push(hot);
    }

    this.noteData.push(e);
    writeFileSync("./src/service/noteData.json", JSON.stringify(this.noteData, null, 2));
    writeFileSync("./src/service/hotData.json", JSON.stringify(this.hotData, null, 2));
    console.log("数据添加成功！帖子：" + e.hobbyQName + "，标题：" + e.title + "，内容：" + e.note + "，发布者：" + e.username);
 
    
  }

  get_all(): INote[] {
    console.log('开始获取所有帖子数据！');
    this.noteData = JSON.parse(readFileSync("./src/service/noteData.json").toString());
    console.log("读取帖子数据文件成功！");
    return this.noteData;
  }

  select(e): INote[] {
    console.log('开始查询帖子数据！');
    this.noteData = JSON.parse(readFileSync("./src/service/noteData.json").toString());
    console.log("读取帖子数据文件成功！");
    console.log("查询条件：" + e.hobbyQName + "，标题：" + e.title);
    const result: INote[] = [];
    for(let i = 0; i < this.noteData.length; i++){
      console.log(this.noteData[i])
      if(this.noteData[i].hobbyQName == e.hobbyQName && this.noteData[i].title == e.title){
    
        result.push(this.noteData[i]);
      }
    }
    return result;
    
  }
}