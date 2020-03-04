import {
    all, takeEvery
} from 'redux-saga/effects';

export default function* root() {
    yield all([
        // takeEvery(FETCH_COUNTRIES_REQUESTED, fetch)
    ]);
}
