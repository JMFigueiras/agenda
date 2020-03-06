import {combineReducers} from 'redux';

import contacts from './contacts';
import departments from './departments';

export default combineReducers({
    contacts,
    departments
});
