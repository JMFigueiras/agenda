import constant from 'lodash/constant';

export const FETCH_ASSIGNMENTS_REQUESTED = 'FETCH_ASSIGNMENTS_REQUESTED';
export const FETCH_ASSIGNMENTS_SUCCEEDED = 'FETCH_ASSIGNMENTS_SUCCEEDED';
export const SUBMIT_ASSIGNMENT_DATA_REQUESTED = 'SUBMIT_ASSIGNMENT_DATA_REQUESTED';
export const SUBMIT_ASSIGNMENT_DATA_SUCCEEDED = 'SUBMIT_ASSIGNMENT_DATA_SUCCEEDED';

export const UPDATE_ASSIGNMENT_DATA = 'UPDATE_ASSIGNMENT_DATA';

export const FETCH_ASSIGNMENT_REQUESTED = 'FETCH_ASSIGNMENT_REQUESTED';

export const DELETE_ASSIGNMENT_REQUESTED = 'DELETE_ASSIGNMENT_REQUESTED';
export const DELETE_ASSIGNMENT_SUCCEEDED = 'DELETE_ASSIGNMENT_SUCCEEDED';

export const fetchAssignmentsRequested = constant({type: FETCH_ASSIGNMENTS_REQUESTED});
export const fetchAssignmentsSucceeded = assignments => ({type: FETCH_ASSIGNMENTS_SUCCEEDED, assignments});
export const submitAssignmentDataRequested = constant({type: SUBMIT_ASSIGNMENT_DATA_REQUESTED});
export const submitAssignmentDataSucceded = constant({type: SUBMIT_ASSIGNMENT_DATA_SUCCEEDED});
export const updateAssignmentData = assignment => ({type: UPDATE_ASSIGNMENT_DATA, assignment});

export const fetchAssignmentRequested = id => ({type: FETCH_ASSIGNMENT_REQUESTED, id});

export const deleteAssignmentRequested = id => ({type: DELETE_ASSIGNMENT_REQUESTED, id});
export const deleteAssignmentSucceeded = constant({type: DELETE_ASSIGNMENT_SUCCEEDED});
