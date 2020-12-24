import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { portalRoutes } from 'js/routes/Admin/portal';
import { Sidebar } from 'js/components/admin/layouts/components/side-bar';
import { Header } from 'js/components/admin/layouts/components/header';
import { Footer } from 'js/components/admin/layouts/components/footer';
import { configConstants } from 'js/constants';
import { history } from 'js/helpers';

export const PortalLayout = () => {
  useEffect(() => {
    if (!localStorage.getItem(configConstants.ADMIN_TOKEN)) {
      history.push('/auth');
    }
  }, []);

  const switchRoutes = (
    <Switch>
      {portalRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
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
              <div className="global-datawrap__inner">{switchRoutes}</div>
            </div>
            <Footer />
          </div>
        </div>
      }
    </>
  );
};
