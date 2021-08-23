import { AxiosResponse } from 'axios';
import {
	generateBaseActionCreator,
	generatePayloadActionCreator,
	TBaseActionCreator,
	TPayloadActionCreator,
} from 'store/generic/GenericAction';

export const initApp: TBaseActionCreator =
	generateBaseActionCreator('app.init');

export const processResponseError: TPayloadActionCreator<AxiosResponse> =
	generatePayloadActionCreator('app.processResponseError');

export const setIsLoading: TPayloadActionCreator<boolean> =
	generatePayloadActionCreator('app.isLoading');

export const setIsAuth: TPayloadActionCreator<boolean> =
	generatePayloadActionCreator('app.isAuth');
