/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';

import {fetchCensusTakerSucceeded} from '@actions/censusTaker';
import CensusTakerService from '@services/censusTaker';

export function* fetch() {
    const censusTaker = yield call(CensusTakerService.fetch);
    yield put(
        fetchCensusTakerSucceeded(censusTaker)
    );
}
