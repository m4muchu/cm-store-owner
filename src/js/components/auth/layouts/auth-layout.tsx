import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoutes } from "js/routes/Auth/auth";



const switchRoutes = (
    <Switch>
        {AuthRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

export const AuthLayout = () => {
    return (
        <React.Fragment>
            <div className="auth-wrap">
                {switchRoutes}
            </div>
        </React.Fragment>
    )
}
