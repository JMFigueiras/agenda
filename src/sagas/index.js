import {
    all, takeEvery
} from 'redux-saga/effects';

import {FETCH_CONTACTS_REQUESTED, SUBMIT_CONTACT_DATA_REQUESTED} from '@actions/contacts';


import {fetchContacts, submitContactData} from './contacts';

export default function* root() {
    yield all([
        takeEvery(FETCH_CONTACTS_REQUESTED, fetchContacts),
        takeEvery(SUBMIT_CONTACT_DATA_REQUESTED, submitContactData)
    ]);
}
