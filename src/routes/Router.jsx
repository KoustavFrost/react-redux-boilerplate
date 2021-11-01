import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fallback from '../Fallback';

const Login = React.lazy(() => import('../pages/Login'));
// const Posts = React.lazy(() => import('./pages/Posts'));

const Router = () => (
  <React.Suspense fallback={<Fallback />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default Router;
