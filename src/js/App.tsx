import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { IndexRoutes } from 'js/routes/index'
import { history } from 'js/helpers/history'
import { AuthWrapper } from 'js/contexts'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  position: toast.POSITION.BOTTOM_RIGHT,
})

const App = () => {
  return (
    <Router history={history}>
      <AuthWrapper>
        <Switch>
          {IndexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />
          })}
        </Switch>
      </AuthWrapper>
    </Router>
  )
}

export default App
