import { Provide, Scope, ScopeEnum } from "@midwayjs/core";
import { writeFileSync, readFileSync} from "fs";
import { IUser } from "../interface";

@Scope(ScopeEnum.Singleton)
@Provide('userService')
export class UserService {
  private userData: IUser[] = [];

  //
  // inser(e): 
  // 
  register(e: IUser): boolean {
    console.log('开始添加用户：' + e.username + "，密码：" + e.password);
    this.userData = JSON.parse(readFileSync("./src/service/userData.json").toString());
    console.log("读取用户数据文件成功！");

    if(!this.userData.some(user => user.username === e.username)){
      this.userData.push(e);
      writeFileSync("./src/service/userData.json", JSON.stringify(this.userData));
      console.log("用户数据添加成功！用户名" + e.username + "，密码：" + e.password);
      return true;
    }
    else{
      console.log("用户已存在！");
      return false;
    }
  }

  login(e: IUser): boolean {
    console.log('开始根据用户名查找密码！');
    this.userData = JSON.parse(readFileSync("./src/service/userData.json").toString());
    console.log("读取用户数据文件成功！");

    let user = this.userData.find(user => user.username === e.username);
    if(user && user.password === e.password){
      return true;
    } else {
      return false;
    }
  }

  get_all(): IUser[] {
    console.log('开始获取所有用户数据！');
    this.userData = JSON.parse(readFileSync("./src/service/userData.json").toString());
    console.log("读取用户数据文件成功！");
    return this.userData;
  }

}