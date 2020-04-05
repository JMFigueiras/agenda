import {combineReducers} from 'redux';

import assignments from './assignments';
import contacts from './contacts';
import departments from './departments';

export default combineReducers({
    assignments,
    contacts,
    departments
});
