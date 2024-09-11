export interface IRegistrationResponse {
  _id: string;
  email: string;
  name: string;
  role: string;
}
export interface IRegistrationData {
  username: string;
  email: string;
  password: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserInfo {
  email: string;
  usename: string;
  role: string;
}

export interface IInitialAuthState {
  token: string | null;
  user: IUserInfo | null;
  isAuthenticated: boolean;
}

export interface ILoginRespone {
  user: IUserInfo;
}
