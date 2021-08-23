import { combineReducers } from 'redux';
import { setIsAuth, setIsLoading } from 'store/action/AppAction';
import { generatePrimitiveReducer } from 'store/generic/GenericReducer';
import { initialAppState } from 'store/state/AppState';

export const appReducer = combineReducers({
	isLoading: generatePrimitiveReducer<boolean>(
		setIsLoading.type,
		initialAppState.isLoading,
	),
	isAuth: generatePrimitiveReducer<boolean>(
		setIsAuth.type,
		initialAppState.isAuth,
	),
});

export default appReducer;
