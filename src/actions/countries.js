import constant from 'lodash/constant';

export const FETCH_COUNTRIES_REQUESTED = 'FETCH_COUNTRIES_REQUESTED';
export const FETCH_COUNTRIES_SUCCEEDED = 'FETCH_COUNTRIES_SUCCEEDED';

export const fetchCountriesRequested = constant({type: FETCH_COUNTRIES_REQUESTED});
export const fetchCountriesSucceeded = countries => ({type: FETCH_COUNTRIES_SUCCEEDED, countries});
