import * as constants from './constants';

export const getLogin = payload => ({
    type: constants.GET_LOGIN,
    payload
});