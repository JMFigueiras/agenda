import {connect} from 'react-redux';
import assign from 'lodash/assign';
import get from 'lodash/get';
import map from 'lodash/map';
import {uploadHenInfo} from '@actions';

import Component from './Component';

const fields = [
    {
        control: 'quantity',
        path: 'eggs.quantity',
        label: 'Huevos',
        type: 'number',
        placeholder: 'CANTIDAD Huevos!!!'
    },
    {
        control: 'size',
        path: 'eggs.size',
        label: 'Tamaño',
        type: 'number',
        placeholder: 'Tamaño!!!'
    },
    {
        control: 'colour',
        path: 'eggs.colour',
        label: 'Color',
        type: 'text',
        placeholder: 'Colorcito!!!'
    },
    {
        control: 'maple',
        path: 'eggs.maple',
        label: 'Maples',
        type: 'text',
        placeholder: 'MAPLES!!!'
    },
];

const mapFromStateToProps = state => {
    const farmValues = state.farmData;
    const {eggs} = farmValues;
    return {
        fields: map(fields, field => {
            const value = get(farmValues, field.path);
            return {
                ...field,
                value
            };
        }),
        eggs
    }
}

const mapDispatchToProps = dispatch => ({
    updateValue: eggs => dispatch(uploadHenInfo(eggs))
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    const mergeFields = map(stateProps.fields, field => {
        const onChange = ({target: {value}}) => dispatchProps.updateValue(
            assign(stateProps.eggs, {
                [field.control]: value
            })
        )
        return {
            ...field,
            onChange
        };
    })

    return {
        ...ownProps,
        fields: mergeFields
    }

};

export default connect(
    mapFromStateToProps,
    mapDispatchToProps,
    mergeProps
)(Component);
