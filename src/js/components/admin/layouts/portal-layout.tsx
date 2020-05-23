import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { portalRoutes } from "js/routes/Admin/portal";
import { Sidebar } from 'js/components/admin/layouts/components/side-bar';
import { Header } from 'js/components/admin/layouts/components/header';
import { Footer } from 'js/components/admin/layouts/components/footer';


export const PortalLayout = () => {

    const switchRoutes = (
        <Switch>
            {portalRoutes.map((prop, key) => {
                console.log('props+++++', prop)
                return <Route path={prop.path} component={prop.component} key={key} />
            })}
        </Switch>
    );

    return (
        <>
            {
                <div className="base-container">
                    <Sidebar />
                    <div className="global-content">
                        <Header />
                        <div className="global-datawrap">
                            <div className="global-datawrap__inner">
                                {switchRoutes}
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            }
        </>
    )
}