import { AxiosResponse } from 'axios';
import { LOCATION_CHANGE } from 'connected-react-router';
import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import {
	initApp,
	processResponseError,
	setIsAuth,
	setIsLoading,
} from 'store/action/AppAction';
import { logout } from 'store/action/AuthAction';
import { TPayloadAction } from 'store/generic/GenericAction';
import { genericErrorHandler } from 'store/generic/GenericError';
import { getToken } from 'util/TokenService';

function* onInitApp(): SagaIterator {
	if (getToken()) {
		yield put(setIsAuth(true));
	}
	yield put(setIsLoading(false));
}

function* onLocationChange(): SagaIterator {
	if (!getToken()) {
		yield put(logout());
	}
}

export function* onRequestError(
	action: TPayloadAction<AxiosResponse>,
): SagaIterator {
	try {
		const error = action.payload;
		console.log(error);

		switch (error.status) {
			case 401:
				yield put(logout());
				break;
			default:
				showError(error.data.message);
		}
	} catch (e) {
		showError('something went wrong');
	}
}

function showError(error: string): void {
	alert(error);
}

export function* appSaga(): SagaIterator {
	yield takeLatest(initApp.type, genericErrorHandler(onInitApp));
	yield takeLatest(LOCATION_CHANGE, genericErrorHandler(onLocationChange));
	yield takeLatest(processResponseError.type, onRequestError);
}
