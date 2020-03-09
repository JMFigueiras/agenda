import {call, put, select} from 'redux-saga/effects';
import {fetchContactsSucceeded, submitContactDataSucceded, updateContactData} from '@actions/contacts';
import {fetchDepartmentsSucceeded, submitDepartmentDataSucceded, updateDepartmentData} from '@actions/departments';
import ContactsService from '@services/contacts';
import DepartmentsService from '@services/departments';


// eslint-disable-next-line import/prefer-default-export
export function* fetchContacts() {
    const contacts = yield call(ContactsService.fetchContacts);
    yield put(
        fetchContactsSucceeded(contacts)
    );
}

export function* fetchContact({id}) {
    const contact = yield call(ContactsService.fetchContact, id);
    yield put(
        updateContactData(contact)
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

export function* fetchDepartments() {
    const departments = yield call(DepartmentsService.fetchDepartments);
    yield put(fetchDepartmentsSucceeded(departments));
}

export function* submitDeparmentData() {
    const department = yield select(state => state.departments.department);
    const result = yield call(DepartmentsService.submitDepartments, department);
    if (result.success) {
        yield put(submitDepartmentDataSucceded());
    }
}
export function* fetchDeparment({id}) {
    const department = yield call(DepartmentsService.fetchDeparment, id);
    yield put(updateDepartmentData(department));
}
