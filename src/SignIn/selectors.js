import { createSelector } from 'reselect';
import { initialState } from './reducers';

const signinPage = state => state.get('loginReducer', initialState);

const selectorToken = () => 
createSelector(signinPage, state => state.get('token'));

const selectoruserInfo = () =>
createSelector(signinPage, state => state.get('userInfo'));

export { signinPage, selectorToken, selectoruserInfo };
