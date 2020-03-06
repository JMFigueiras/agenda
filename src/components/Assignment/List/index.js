import {connect} from 'react-redux';

import {fetchAssignmentsRequested} from '@actions/assignments';
import fromState from '@selectors';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    assignments: fromState.Assignments.getAssignments()(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAssignments: () => dispatch(fetchAssignmentsRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
