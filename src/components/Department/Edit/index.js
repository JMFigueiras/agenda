import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    fetchDepartmentRequested,
    submitDepartmentDataRequested,
    updateDepartmentData,
    fetchDepartmentsSucceeded
} from '@actions/departments';

import Component from './Component';

const fields = [
    {
        control: 'name',
        label: 'Description',
        path: 'name',
        value: null,
        type: 'text'
    },
    {
        control: 'description',
        label: 'Descripcion',
        path: 'description',
        value: null,
        type: 'text'
    },
    {
        control: 'phoneNumber',
        label: 'Número de teléfono',
        path: 'phoneNumber',
        value: null,
        type: 'phone'
    }
];

// Store Redux - StaticData
const mapStateToProps = state => {
    const department = get(state, 'departments.department', {});
    const cFields = map(fields, field => ({
        ...field,
        value: get(department, field.path, '')
    }));
    return {
        department,
        fields: cFields
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchDepartment: id => dispatch(fetchDepartmentRequested(id)),
    submitDepartmentData: () => dispatch(submitDepartmentDataRequested()),
    updateDepartment: Department => dispatch(updateDepartmentData(Department))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {updateDepartment} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateDepartment(set(stateProps.contact, field.path, value))
    }));
    console.log(mergeFields);
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
