import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    submitContactDataRequested,
    updateContactData
} from '@actions/contacts';

import Component from './Component';

const fields = [
    {
        control: 'firstName',
        label: 'Nombre',
        path: 'firstName',
        value: null,
        type: 'text'
    },
    {
        control: 'lastName',
        path: 'lastName',
        value: null,
        type: 'text'
    },
    {
        control: 'email',
        path: 'email',
        value: null,
        type: 'text'
    },
    {
        control: 'gender',
        path: 'gender',
        value: null,
        type: 'text'
    },
    {
        control: 'birthDate',
        path: 'birthDate',
        value: null,
        type: 'date'
    },
    {
        control: 'phoneNumber',
        path: 'phoneNumber',
        value: null,
        type: 'phone'
    },
    {
        control: 'address',
        path: 'address',
        value: null,
        type: 'phone'
    },
    {
        control: 'role',
        path: 'role',
        value: null,
        type: 'text'
    },
    {
        control: 'notes',
        path: 'notes',
        value: null,
        type: 'text'
    }
]

// Store Redux - StaticData
const mapStateToProps = state => {
    const contact = get(state, 'contacts.contact', {})
    const cFields = map(fields, field => ({
        ...field,
        value: get(contact, field.path, '')
    }));
    return {
        contact,
        fields: cFields
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    submitContactData: () => dispatch(submitContactDataRequested()),
    updateContact: contact => dispatch(updateContactData(contact))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const updateContact = dispatchProps.updateContact;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateContact(set(stateProps.contact, field.path, value))
    }));
    console.log(mergeFields)
    return {
        ...dispatchProps,
        ...ownProps,
        fields: mergeFields
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Component);
