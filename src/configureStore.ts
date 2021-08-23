/* eslint-disable @typescript-eslint/no-explicit-any */
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'store/reducer/RootReducer';

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function configureStore(preloadedState?: any) {
	const composeEnhancer: typeof compose =
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
		rootReducer(history),
		preloadedState,
		composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
	);
}
