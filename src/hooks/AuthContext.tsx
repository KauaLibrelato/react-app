/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from "react";
import { IAuthContext } from "./utils/types";

export const AuthContext = createContext<IAuthContext>(null!);
