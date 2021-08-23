/* eslint-disable */
import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { processResponseError } from 'store/action/AppAction';

export const genericErrorHandler = (
	saga: (...args: any[]) => SagaIterator,
	...args: any[]
) =>
	function* handleApp(action: any): Generator {
		try {
			yield call(saga, action, args);
		} catch (err) {
			yield put(processResponseError(err.response));
		}
	};
