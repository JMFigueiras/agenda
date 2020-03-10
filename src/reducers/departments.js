import {
    FETCH_DEPARTMENTS_SUCCEEDED,
    SUBMIT_DEPARTMENT_DATA_SUCCEEDED,
    UPDATE_DEPARTMENT_DATA
} from '@actions/departments';

export default (state = {departments: [], department: {}}, action) => {
    switch (action.type) {
        case FETCH_DEPARTMENTS_SUCCEEDED:
            return {...state, departments: action.departments};
        case SUBMIT_DEPARTMENT_DATA_SUCCEEDED:
            return {...state, success: true, department: {}};
        case UPDATE_DEPARTMENT_DATA:
            return {...state, department: action.department};
        default:
            return state;
    }
};
