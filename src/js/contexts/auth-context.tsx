import React from "react";

export interface AuthProviderInterface {
  auth: Auth,
  setAuth: Function
}

export type Auth = {
  is_logged_in: boolean,
  user: any,
  token: string,
}

// set the defaults
export const AuthProvider = React.createContext<AuthProviderInterface>({
  auth: {
    is_logged_in: false,
    user: {},
    token: ''
  },
  setAuth: () => {}
});


