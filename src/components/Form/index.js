import {connect} from 'react-redux';
import get from 'lodash/get';

import {
    submitAction
} from '@actions';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    password: get(state, 'staticData.password', 'Sin Dato'),
    email: get(state, 'staticData.email', 'Sin Dato')
});

const mapDispatchToProps = dispatch => ({
    submitAction: (email, password) => dispatch(submitAction(email, password))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
