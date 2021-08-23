import { AllEffect, ForkEffect } from '@redux-saga/core/effects';
import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { appSaga } from 'store/saga/AppSaga';
import { authSaga } from 'store/saga/AuthSaga';

export function* rootSaga(): SagaIterator {
	yield all<ForkEffect>([
		fork(appSaga),
		fork(authSaga),
	]) as AllEffect<ForkEffect>;
}
