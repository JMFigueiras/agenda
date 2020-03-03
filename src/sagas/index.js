import {
    all, takeEvery
} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED} from '@actions/countries';

import {fetch} from './countries';

export default function* root() {
    yield all([
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetch)
    ]);
}
