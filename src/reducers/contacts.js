import {
    FETCH_CONTACTS_SUCCEEDED,
    SUBMIT_CONTACT_DATA_SUCCEEDED,
    UPDATE_CONTACT_DATA
} from '@actions/contacts';

export default (state = {contacts: [], contact: {}}, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_SUCCEEDED:
            return {...state, contacts: action.contacts};
        case SUBMIT_CONTACT_DATA_SUCCEEDED:
            return {...state, success: true, contact: {}};
        case UPDATE_CONTACT_DATA:
            return {...state, contact: action.contact};
        default:
            return state;
    }
};
