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
        placeholder: 'Seleccione contacto',
        value: null,
        type: 'select'
    },
    {
        control: 'departments',
        label: 'Departamento',
        path: 'department',
        placeholder: 'Seleccione un departamento',
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
    const assignment = fromState.Assignments.getAssignments()(state);

    const aFields = map(fields, field => ({
        ...field,
        options: getOptions(field.control, state)
    }));

    return {
        assignment,
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
    console.log('mergeProps', stateProps.assignment);

    const {updateAssignment} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateAssignment(set({...stateProps.assignment}, field.path, value))
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
