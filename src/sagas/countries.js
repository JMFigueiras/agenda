/* eslint-disable import/prefer-default-export */
import {call, put} from 'redux-saga/effects';

import {fetchCountriesSucceeded} from '@actions/countries';
import CountriesService from '@services/countries';

export function* fetch() {
    const countries = yield call(CountriesService.fetch);
    yield put(
        fetchCountriesSucceeded(countries)
    );
}
