import {
    FETCH_ASSIGNMENTS_SUCCEEDED,
    SUBMIT_ASSIGNMENT_DATA_SUCCEEDED,
    UPDATE_ASSIGNMENT_DATA
} from '@actions/assignments';

export default (state = {assignments: [], assignment: {}}, action) => {
    switch (action.type) {
        case FETCH_ASSIGNMENTS_SUCCEEDED:
            return {...state, assignments: action.assignments};
        case SUBMIT_ASSIGNMENT_DATA_SUCCEEDED:
            return {...state, success: true, assignment: {}};
        case UPDATE_ASSIGNMENT_DATA:
            return {...state, assignment: {...state.assignment, ...action.assignment}};
        default:
            return state;
    }
};
