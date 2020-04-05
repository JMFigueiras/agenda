import {connect} from 'react-redux';
import {set, map} from 'lodash';

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
        label: 'Contacto',
        path: 'contact',
        value: null,
        type: 'select'
    },
    {
        control: 'departments',
        label: 'Departamento',
        path: 'department',
        value: null,
        type: 'select'
    }
];

const getOptions = (control, state) => {
    if (control === 'contacts') {
        return fromState.Contacts.getContacts()(state);
    }

    return fromState.Departments.getDepartments()(state);
};

// Store Redux - StaticData
const mapStateToProps = state => {
    const aFields = map(fields, field => ({
        ...field,
        options: getOptions(field.control, state),
        value: fromState.Assignments.getAssignment(field.path)(state)
    }));

    return {
        assignment: fromState.Assignments.getAssignment()(state),
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
        onChange: ({target: {value}}) => updateAssignment(set({...stateProps.assignment}, field.path, value))
    }));
    return {
        ...dispatchProps,
        ...ownProps,
        fields: mergeFields,
        assignment: stateProps.assignment
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Component);
