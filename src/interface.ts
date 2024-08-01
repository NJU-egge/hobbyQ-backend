/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface IUser {
  username: string;
  password: string;
}

export interface IHobbyQ {
  hobbyQName: string;
}

export interface INote {
  hobbyQName: string;
  title: string;
  note: string;
  username: string;
}

export interface IComment {
  hobbyQName: string;
  title: string;
  comment: string;
  username: string;
}

export interface IHot {
  hobbyQName: string;
  hot: number;
  username: string;
}