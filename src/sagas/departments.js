import {call, put, select} from 'redux-saga/effects';
import {fetchDepartmentsSucceeded, submitDepartmentDataSucceded, updateDepartmentData} from '@actions/departments';
import DepartmentsService from '@services/departments';


// eslint-disable-next-line import/prefer-default-export
export function* fetchDepartments() {
    const departments = yield call(DepartmentsService.fetchDepartments);
    yield put(
        fetchDepartmentsSucceeded(departments)
    );
}

export function* fetchDepartment({id}) {
    const department = yield call(DepartmentsService.fetchDepartment, id);
    yield put(
        updateDepartmentData(department)
    );
}
export function* submitDepartmentData() {
    const department = yield select(state => state.departments.department);
    const result = yield call(DepartmentsService.submitDepartment, department);
    if (result.success) {
        yield put(
            submitDepartmentDataSucceded()
        );
    }
}
