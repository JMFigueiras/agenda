import {
    UPLOAD_HEN_INFO
} from '@actions';

export default function farmData(
    state = {
        eggs: {
            quantity: 'Algo',
            size: 'Algo',
            colour: 'Algo',
            mapple: ''
        }
    }, action
) {
    switch (action.type) {
        case UPLOAD_HEN_INFO:
            return {
                ...state,
                eggs: action.eggs
            };
        default:
            return state;
    }
}
