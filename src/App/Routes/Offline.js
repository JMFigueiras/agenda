import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from '@components/Home';
import Assignment from '@components/Assignment';
import Contact from '@components/Contact';
import Department from '@components/Department';
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
                    <Route path="/assignments" component={Assignment}/>
                    <Route path="/contacts" component={Contact}/>
                    <Route path="/departments" component={Department}/>
                    <Route component={Error}/>
                </Switch>
            </main>
            <Footer/>
        </>
    </HashRouter>
);
