import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    fetchDepartmentRequested,
    submitDepartmentDataRequested,
    updateDepartmentData
} from '@actions/departments';

import Component from './Component';

const fields = [
    {
        control: 'name',
        label: 'Nombre',
        path: 'name',
        value: null,
        type: 'text'
    },
    {
        control: 'phoneNumber',
        label: 'Número de teléfono',
        path: 'phoneNumber',
        value: null,
        type: 'text'
    },
    {
        control: 'address',
        label: 'Dirección',
        path: 'address',
        value: null,
        type: 'text'
    },
    {
        control: 'description',
        label: 'Descripción',
        path: 'description',
        value: null,
        type: 'text'
    }
];

const mapStateToProps = state => {
    const department = get(state, 'departments.department', {});
    const dFields = map(fields, field => ({
        ...field,
        value: get(department, field.path, '')
    }));
    return {
        department,
        fields: dFields
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchDepartment: id => dispatch(fetchDepartmentRequested(id)),
    submitDepartmentData: () => dispatch(submitDepartmentDataRequested()),
    updateDepartment: department => dispatch(updateDepartmentData(department))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {updateDepartment} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateDepartment(set(stateProps.department, field.path, value))
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
