import configureStore, { history, sagaMiddleware } from 'configureStore';
import { ConnectedRouter } from 'connected-react-router';
import Root from 'container/Root';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { rootSaga } from 'store/saga/RootSaga';
import 'styles.scss';

const store = configureStore();
sagaMiddleware.run(rootSaga as never);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Root />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
);
