import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { history } from 'js/helpers';
import { configConstants } from 'js/constants';
import { AuthRoutes } from "js/routes/Auth/auth";



const switchRoutes = (
    <Switch>
        {AuthRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

export const AuthLayout = () => {
    
    // useEffect(() => {
    //     if(localStorage.getItem(configConstants.ADMIN_TOKEN)){
    //         history.push('/admin/dashboard');
    //     }
    // },[]);

    return (
        <React.Fragment>
            <div className="auth-wrap">
                {switchRoutes}
            </div>
        </React.Fragment>
    )
}
