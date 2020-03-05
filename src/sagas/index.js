import {
    all, takeEvery
} from 'redux-saga/effects';

import {FETCH_CONTACTS_REQUESTED} from '@actions/contacts';

import {fetchContacts} from './contacts';

export default function* root() {
    yield all([
        takeEvery(FETCH_CONTACTS_REQUESTED, fetchContacts)
    ]);
}
