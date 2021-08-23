import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import appReducer from 'store/reducer/AppReducer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (history: History) =>
	combineReducers({
		app: appReducer,
		router: connectRouter(history),
	});

export default rootReducer;
