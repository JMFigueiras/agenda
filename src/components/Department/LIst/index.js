import {connect} from 'react-redux';


import {fetchDepartmentsRequested} from '@actions/departments';
import fromState from '@selectors';

import Component from './Component';

const mapStateToProps = state => ({
    departments: fromState.Departments.getDeparments()(state)
});

const mapDispatchToProps = dispatch => ({
    fetchDeparments: () => dispatch(fetchDepartmentsRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
