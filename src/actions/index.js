import constant from 'lodash/constant';

export const SUBMIT_ACTION = 'SUBMIT_ACTION';
export const UPLOAD_HEN_INFO = 'UPLOAD_HEN_INFO';

export const submitAction = (email, password) => ({type: SUBMIT_ACTION, email, password});
export const uploadHenInfo = eggs => ({type: UPLOAD_HEN_INFO, eggs});