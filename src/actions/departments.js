import constant from 'lodash/constant';

export const FETCH_DEPARTMENTS_REQUESTED = 'FETCH_DEPARTMENTS_REQUESTED';
export const FETCH_DEPARTMENTS_SUCCEEDED = 'FETCH_DEPARTMENTS_SUCCEEDED';
export const SUBMIT_DEPARTMENT_DATA_REQUESTED = 'SUBMIT_DEPARTMENT_DATA_REQUESTED';
export const SUBMIT_DEPARTMENT_DATA_SUCCEEDED = 'SUBMIT_DEPARTMENT_DATA_SUCCEEDED';

export const UPDATE_DEPARTMENT_DATA = 'UPDATE_DEPARTMENT_DATA';

export const FETCH_DEPARTMENT_REQUESTED = 'FETCH_DEPARTMENT_REQUESTED';

export const fetchDepartmentsRequested = constant({type: FETCH_DEPARTMENTS_REQUESTED});
export const fetchDepartmentsSucceeded = departments => ({type: FETCH_DEPARTMENTS_SUCCEEDED, departments});
export const submitDepartmentDataRequested = constant({type: SUBMIT_DEPARTMENT_DATA_REQUESTED});
export const submitDepartmentDataSucceded = constant({type: SUBMIT_DEPARTMENT_DATA_SUCCEEDED});
export const updateDepartmentData = department => ({type: UPDATE_DEPARTMENT_DATA, department});

export const fetchDepartmentRequested = id => ({type: FETCH_DEPARTMENT_REQUESTED, id});
