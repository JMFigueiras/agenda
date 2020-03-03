/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import includes from 'lodash/includes';
import head from 'lodash/head';

import RouterWithSession from './Routes/WithSession';
import RouterOffline from './Routes/Offline';
import Loading from './Routes/Loading';

const App = ({
}) => {
    return (<RouterOffline/>);
};

export default connect()(App);
