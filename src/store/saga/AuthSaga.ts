import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { initApp, setIsAuth, setIsLoading } from 'store/action/AppAction';
import { loginSuccess, logout } from 'store/action/AuthAction';
import { TPayloadAction } from 'store/generic/GenericAction';
import { genericErrorHandler } from 'store/generic/GenericError';
import { removeToken, setToken } from 'util/TokenService';

function* onLoginSuccess(action: TPayloadAction<string>): SagaIterator {
	yield put(setIsLoading(true));
	setToken(action.payload);
	yield put(initApp());
}

function* onLogout(): SagaIterator {
	removeToken();
	yield put(setIsAuth(false));
	yield put(setIsLoading(false));
}

export function* authSaga(): SagaIterator {
	yield takeLatest(loginSuccess.type, genericErrorHandler(onLoginSuccess));
	yield takeLatest(logout.type, genericErrorHandler(onLogout));
}
