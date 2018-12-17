import { LOGGED_IN, LOGIN_REQUEST } from './constant';
import { push } from 'react-router-redux';
import { put, call, take } from 'redux-saga/effects';
import admin from './../components/admin';
import {
     loginSuccess, loginFailed
} from './action'

export default function* Redirectlogin(){
    debugger;
    while(true){
        const data = yield take(LOGIN_REQUEST);
        let response;
        try{
            response = yield call(admin, '/admin', data);
        }
        catch(err){
            yield put(loginFailed(err));
            continue;
        }
        yield put (loginSuccess(response));
        yield put (push('/admin'));
    }
}
