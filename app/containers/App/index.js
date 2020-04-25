/**********************
Name - App.js
Author - Nasir Ansari
Description: This component manage the routing of all application.
***********************/

import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import Home from "../Home";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
