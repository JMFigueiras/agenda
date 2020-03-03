import constant from 'lodash/constant';

export const FETCH_CENSUSTAKER_REQUESTED = 'FETCH_CENSUSTAKER_REQUESTED';
export const FETCH_CENSUSTAKER_SUCCEEDED = 'FETCH_CENSUSTAKER_SUCCEEDED';

export const fetchCensusTakerRequested = constant({type: FETCH_CENSUSTAKER_REQUESTED});
export const fetchCensusTakerSucceeded = censusTaker => ({type: FETCH_CENSUSTAKER_SUCCEEDED, censusTaker});
