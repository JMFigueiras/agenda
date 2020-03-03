import {combineReducers} from 'redux';

import countries from './countries';
import farmData from './farmData';
import staticData from './staticData';

export default combineReducers({
    countries,
    farmData,
    staticData
});
