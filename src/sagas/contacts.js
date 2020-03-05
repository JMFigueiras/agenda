import {call, put, select} from 'redux-saga/effects';
import {fetchContactsSucceeded, submitContactDataSucceded} from '@actions/contacts';
import ContactsService from '@services/contacts';


// eslint-disable-next-line import/prefer-default-export
export function* fetchContacts() {
    const contacts = yield call(ContactsService.fetchContacts);
    yield put(
        fetchContactsSucceeded(contacts)
    );
}
export function* submitContactData() {
    const contact = yield select(state => state.contacts.contact);
    const result = yield call(ContactsService.submitContact, contact);
    if (result.success) {
        yield put(
            submitContactDataSucceded()
        );
    }
}