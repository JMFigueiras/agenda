import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    fetchDeparmentRequested,
    submitDeparmentDataRequested,
    updateDeparmentData,
    fetchDeparmentsSucceeded
} from '@actions/deparments';

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
    const deparment = get(state, 'deparments.deparment', {});
    const cFields = map(fields, field => ({
        ...field,
        value: get(deparment, field.path, '')
    }));
    return {
        deparment,
        fields: cFields
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchDeparment: id => dispatch(fetchDeparmentRequested(id)),
    submitDeparmentData: () => dispatch(submitDeparmentDataRequested()),
    updateDeparment: Deparment => dispatch(updateDeparmentData(Deparment))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {updateDeparment} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateDeparment(set(stateProps.contact, field.path, value))
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
