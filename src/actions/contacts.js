import constant from 'lodash/constant';

export const FETCH_CONTACTS_REQUESTED = 'FETCH_CONTACTS_REQUESTED';
export const FETCH_CONTACTS_SUCCEEDED = 'FETCH_CONTACTS_SUCCEEDED';

export const fetchContactsRequested = constant({type: FETCH_CONTACTS_REQUESTED});
export const fetchContactsSucceeded = contacts => ({type: FETCH_CONTACTS_SUCCEEDED, contacts});
