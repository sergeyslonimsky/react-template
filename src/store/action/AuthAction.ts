import {
	generateBaseActionCreator,
	generatePayloadActionCreator,
	TBaseActionCreator,
	TPayloadActionCreator,
} from 'store/generic/GenericAction';

export const loginSuccess: TPayloadActionCreator<string> =
	generatePayloadActionCreator('auth.loginSuccess');

export const logout: TBaseActionCreator =
	generateBaseActionCreator('auth.logout');
