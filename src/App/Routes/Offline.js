import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from '@components/Home';
import Form from '@components/Form/';
import DepartmentTable from '@components/DepartmentTable';
import ContactTable from '@components/ContactTable';
import Error from '@components/Error';
import Footer from '../Footer';
import Header from '../Header';

export default () => (
    <HashRouter>
        <>
            <Header/>
            <main className="mt-20">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/app" component={Home}/>
                    <Route exact path="/contacts" component={ContactTable}/>
                    <Route exact path="/departments" component={DepartmentTable}/>
                    <Route component={Error}/>
                </Switch>
            </main>
            <Footer/>
        </>
    </HashRouter>
);
