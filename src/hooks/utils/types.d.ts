import { IUser } from "../../utils/types/types";

export interface IAuthContext {
  user: IUSer | null;
  setUser: (setUser: IUser) => void;
  signin: (ILoginRequestResponse) => void;
  signout: () => void;
  // signInWithGoogle(): Promise<void>;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginRequestResponse {
  email: string;
  password: string;
}
