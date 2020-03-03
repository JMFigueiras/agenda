import {
    FETCH_COUNTRIES_SUCCEEDED
} from '@actions/countries';

export default (state = {countries: []}, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES_SUCCEEDED:
            return {...state, countries: action.countries};
        default:
            return state;
    }
};
