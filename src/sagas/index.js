import {
    all, takeEvery
} from 'redux-saga/effects';

import {FETCH_CONTACTS_REQUESTED, SUBMIT_CONTACT_DATA_REQUESTED, FETCH_CONTACT_REQUESTED} from '@actions/contacts';


import {fetchContacts, submitContactData, fetchContact} from './contacts';

export default function* root() {
    yield all([
        takeEvery(FETCH_CONTACTS_REQUESTED, fetchContacts),
        takeEvery(SUBMIT_CONTACT_DATA_REQUESTED, submitContactData),
        takeEvery(FETCH_CONTACT_REQUESTED, fetchContact)
    ]);
}
