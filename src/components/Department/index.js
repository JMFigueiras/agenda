import React from 'react';
import {Switch, Route} from 'react-router-dom';

import List from './List';
import Edit from './Edit';


const Department = ({match: {path}}) => (
    <Switch>
        <Route path={`${path}/new`} component={Edit} exact/>
        <Route path={`${path}/:id`} component={Edit}/>
        <Route path={`${path}`} component={List}/>
    </Switch>
);

export default Department;
