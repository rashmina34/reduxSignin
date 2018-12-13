import { createSelector } from "reselect";

const selectLogin = state => state.get('login');

const makeSelectRequesting = () => createSelector(selectLogin, state => state.get('requessting'));
const makeSelectSuccess = () => createSelector(selectLogin, state => state.get('success'));
const makeSelectResponse = () => createSelector(selectLogin, state => state.get('response'));
const makeSelectError = () => createSelector(selectLogin, state => state.get('error'));
const makeSelectIsLoggedIn = () => createSelector(selectLogin, state => state.get('isLoggedIn'));
const makeSelectUserId = () => createSelector(selectLogin, state => state.get('userId'));
const makeSelectEmail = () => createSelector(selectLogin, state => state.get('email'));
const makeSelectUserRole = () => createSelector(selectLogin, state => { 
  return state.get('userInfo').get('user_role')}
);

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectIsLoggedIn,
  makeSelectUserId,
  makeSelectEmail,
  makeSelectUserRole,
  makeSelectRequesting
};
