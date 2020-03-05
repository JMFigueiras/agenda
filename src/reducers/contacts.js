import {
    FETCH_CONTACTS_SUCCEEDED
} from '@actions/contacts';

export default (state = {contacts: []}, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_SUCCEEDED:
            return {...state, contacts: action.contacts};
        default:
            return state;
    }
};
