import {call, put} from 'redux-saga/effects';
import {fetchContactsSucceeded} from '@actions/contacts';
import ContactsService from '@services/contacts';


// eslint-disable-next-line import/prefer-default-export
export function* fetchContacts() {
    const contacts = yield call(ContactsService.fetchContacts);
    yield put(
        fetchContactsSucceeded(contacts)
    );
}
