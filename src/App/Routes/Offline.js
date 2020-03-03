import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from '@components/Home';
import Form from '@components/Form/';
import Farm from '@components/FarmForm';
import Countries from '@components/Countries/';
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
                    <Route exact path="/app" component={Form}/>
                    <Route exact path="/farm" component={Farm}/>
                    <Route exact path="/countries" component={Countries}/>
                    <Route component={Error}/>
                </Switch>
            </main>
            <Footer/>
        </>
    </HashRouter>
);
