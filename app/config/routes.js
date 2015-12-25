import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

import { Router, IndexRoute, Route } from 'react-router';

export default (
    <Route name="app" path="/" component={Main}>
        <Route name="profile" path="profile/:username" component={Profile} />
        <IndexRoute component={Home} />
        <Route path="*" component={Home}/>
    </Route>
);
