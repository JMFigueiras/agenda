import {
    FETCH_ASSIGNMENTS_SUCCEEDED,
    SUBMIT_ASSIGNMENT_DATA_SUCCEEDED,
    UPDATE_ASSIGNMENT_DATA,
    DELETE_ASSIGNMENT_SUCCEEDED
} from '@actions/assignments';

export default (state = {assignments: [], assignment: {}}, action) => {
    switch (action.type) {
        case FETCH_ASSIGNMENTS_SUCCEEDED:
            return {...state, assignments: action.assignments};
        case SUBMIT_ASSIGNMENT_DATA_SUCCEEDED:
            return {...state, success: true, assignment: {}};
        case UPDATE_ASSIGNMENT_DATA:
            return {...state, assignment: action.assignment};
        case DELETE_ASSIGNMENT_SUCCEEDED:
            return {...state, success: action.success};
        default:
            return state;
    }
};
