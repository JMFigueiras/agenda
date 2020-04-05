import {connect} from 'react-redux';

import {fetchAssignmentsRequested, deleteAssignmentRequested, updateAssignmentData} from '@actions/assignments';
import fromState from '@selectors';

import Component from './Component';


// Store Redux - StaticData
const mapStateToProps = state => ({
    assignments: fromState.Assignments.getAssignments()(state),
    assignment: fromState.Assignments.getAssignment()(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAssignments: () => dispatch(fetchAssignmentsRequested()),
    updateAssignment: assignment => dispatch(updateAssignmentData(assignment)),
    deleteAssignment: id => dispatch(deleteAssignmentRequested(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
