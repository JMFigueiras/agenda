import {
    FETCH_CENSUSTAKER_SUCCEEDED
} from '@actions/censusTaker';

export default (state = {censusTaker: []}, action) => {
    switch (action.type) {
        case FETCH_CENSUSTAKER_SUCCEEDED:
            return {...state, censusTaker: action.censusTaker};
        default:
            return state;
    }
};
