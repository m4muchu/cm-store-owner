import React, { useState } from "react";
import { AuthProvider, AuthProviderInterface, Auth } from 'js/contexts';


export const AuthWrapper = (props: any) => {

    const [auth, setAuth] = useState<Auth>(
        {
            user:{},
            is_logged_in: false,
            token: ''
        }
    );
    const value: AuthProviderInterface = { auth, setAuth };

    return (
        <AuthProvider.Provider value={value}>
            {props.children}
        </AuthProvider.Provider>
    )
};
