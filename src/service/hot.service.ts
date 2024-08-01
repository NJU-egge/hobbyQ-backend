import { Provide, Scope, ScopeEnum } from "@midwayjs/core";
import { readFileSync} from "fs";
import { IHot } from "../interface";

@Scope(ScopeEnum.Singleton)
@Provide('hotService')
export class HotService {
  private hotData: IHot[] = [];
  //
  // inser(e): 
  // 
  select(e): IHot[] {
    console.log('开始查询热度数据！');
    this.hotData = JSON.parse(readFileSync("./src/service/hotData.json").toString());
    console.log("读取热度数据文件成功！");
    console.log("查询条件：" + e.hobbyQName );
    const result: IHot[] = [];
    for(let i = 0; i < this.hotData.length; i++){
      console.log(this.hotData[i])
      if(this.hotData[i].hobbyQName == e.hobbyQName){
    
        result.push(this.hotData[i]);
      }
    }
    return result;
  }
}

 