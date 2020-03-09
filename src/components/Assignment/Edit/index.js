import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    submitAssignmentDataRequested,
    updateAssignmentData
} from '@actions/assignments';

import {fetchContactsRequested} from '@actions/contacts';
import {fetchDepartmentsRequested} from '@actions/departments';
import fromState from '@selectors';

import Component from './Component';

const fields = [
    {
        control: 'contacts',
        label: 'Seleccione un contacto',
        path: 'contacts',
        value: null,
        type: 'select'
    },
    {
        control: 'departments',
        label: 'Seleccione un departamento',
        path: 'departments',
        value: null,
        type: 'select'
    }
];

// Store Redux - StaticData
const mapStateToProps = state => {
    const contacts = fromState.Contacts.getContacts()(state);
    const departments = fromState.Departments.getDepartments()(state);

    /* const contacts = get(state, 'contacts.contacts', []);
    const departments = get(state, 'departments.departments', []); */

    console.log(contacts);
    console.log(departments);

    const aFields = map(fields, field => ({
        ...field,
        value: null
    }));
    return {
        contacts,
        departments,
        fields: aFields
    };
};

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContactsRequested()),
    fetchDepartments: () => dispatch(fetchDepartmentsRequested()),
    submitAssignmentData: () => dispatch(submitAssignmentDataRequested()),
    updateAssignment: assignment => dispatch(updateAssignmentData(assignment))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {updateAssignment} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateAssignment(set(stateProps.assignment, field.path, value))
    }));
    return {
        ...dispatchProps,
        ...ownProps,
        fields: mergeFields
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Component);
