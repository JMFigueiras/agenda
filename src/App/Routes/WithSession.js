import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Home from '@components/Home';

import Header from '../Header';
import Footer from '../Footer';

const RouterWithSession = ({
    loadingAction,
    savingAction,
    succeededAction,
    failedAction
}) => (
    <HashRouter>
        <>
            <Header/>
            <main className="mt-20">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={Home}/>
                </Switch>
            </main>
            <Footer/>
        </>
    </HashRouter>
);

RouterWithSession.propTypes = {
    loadingAction: PropTypes.shape({}).isRequired,
    savingAction: PropTypes.shape({}).isRequired,
    succeededAction: PropTypes.bool.isRequired,
    failedAction: PropTypes.bool.isRequired,
    canLoad: PropTypes.bool.isRequired
};

export default RouterWithSession;
