import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AdminIndex } from 'js/routes/Admin/index';


export default class AppAdmin extends React.Component {
    render() {
        return (
            <div className="">
                <Switch>
                    {AdminIndex.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key} />;
                    })}
                </Switch>
            </div>
        );
    }
}