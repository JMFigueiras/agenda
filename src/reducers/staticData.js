import {
    SUBMIT_ACTION
} from '@actions';

export default function staticData(
    state = {}, action
) {
    switch (action.type) {
        case SUBMIT_ACTION:
            return {
                ...state,
                email: action.email,
                password: action.password
            };
        default:
            return state;
    }
}
