import React from 'react';
import { Route, Switch } from "react-router-dom";
import { AuthIndex } from "js/routes/Auth/index";

export default class AppAuth extends React.Component {
    render() {
        return (
            <div className="admin-auth-wrap">
                <Switch>
                    {AuthIndex.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key} />;
                    })}
                </Switch>
            </div>
        );
    }
}
