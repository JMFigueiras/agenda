import {
    all, takeEvery
} from 'redux-saga/effects';

import {FETCH_CONTACTS_REQUESTED, SUBMIT_CONTACT_DATA_REQUESTED, FETCH_CONTACT_REQUESTED} from '@actions/contacts';
import {FETCH_ASSIGNMENTS_REQUESTED, SUBMIT_ASSIGNMENT_DATA_REQUESTED, FETCH_ASSIGNMENT_REQUESTED} from '@actions/assignments';

import {fetchContacts, submitContactData, fetchContact} from './contacts';
import {fetchAssignments, submitAssignmentData, fetchAssignment} from './assignments';

export default function* root() {
    yield all([
        takeEvery(FETCH_CONTACTS_REQUESTED, fetchContacts),
        takeEvery(SUBMIT_CONTACT_DATA_REQUESTED, submitContactData),
        takeEvery(FETCH_CONTACT_REQUESTED, fetchContact),
        takeEvery(FETCH_ASSIGNMENTS_REQUESTED, fetchAssignments),
        takeEvery(SUBMIT_ASSIGNMENT_DATA_REQUESTED, submitAssignmentData),
        takeEvery(FETCH_ASSIGNMENT_REQUESTED, fetchAssignment)
    ]);
}
