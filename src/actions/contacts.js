import constant from 'lodash/constant';

export const FETCH_CONTACTS_REQUESTED = 'FETCH_CONTACTS_REQUESTED';
export const FETCH_CONTACTS_SUCCEEDED = 'FETCH_CONTACTS_SUCCEEDED';
export const SUBMIT_CONTACT_DATA_REQUESTED = 'SUBMIT_CONTACT_DATA_REQUESTED';
export const SUBMIT_CONTACT_DATA_SUCCEEDED = 'SUBMIT_CONTACT_DATA_SUCCEEDED';

export const UPDATE_CONTACT_DATA = 'UPDATE_CONTACT_DATA';

export const fetchContactsRequested = constant({type: FETCH_CONTACTS_REQUESTED});
export const fetchContactsSucceeded = contacts => ({type: FETCH_CONTACTS_SUCCEEDED, contacts});
export const submitContactDataRequested = constant({type: SUBMIT_CONTACT_DATA_REQUESTED});
export const submitContactDataSucceded = constant({type: SUBMIT_CONTACT_DATA_SUCCEEDED});
export const updateContactData = contact => ({type: UPDATE_CONTACT_DATA, contact});