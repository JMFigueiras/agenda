import {call, put, select} from 'redux-saga/effects';
import {
    fetchAssignmentsSucceeded, submitAssignmentDataSucceded, updateAssignmentData, deleteAssignmentSucceeded
} from '@actions/assignments';
import AssignmentsService from '@services/assignments';


// eslint-disable-next-line import/prefer-default-export
export function* fetchAssignments() {
    const assignments = yield call(AssignmentsService.fetchAssignments);
    yield put(
        fetchAssignmentsSucceeded(assignments)
    );
}

export function* fetchAssignment({id}) {
    const assignment = yield call(AssignmentsService.fetchAssignment, id);
    yield put(
        updateAssignmentData(assignment)
    );
}

export function* submitAssignmentData() {
    const assignment = yield select(state => state.assignments.assignment);
    const result = yield call(AssignmentsService.submitAssignment, assignment);
    if (result.success) {
        yield put(
            submitAssignmentDataSucceded()
        );
    }
}

export function* deleteAssignment({id}) {
    const success = yield call(AssignmentsService.deleteAssignment, id);
    yield put(
        deleteAssignmentSucceeded(success)
    );
}
