import Auth from 'container/Auth';
import Home from 'container/Home';
import React from 'react';
import { Switch } from 'react-router';
import PrivateRoute from 'route/common/PrivateRoute';
import PublicRoute from 'route/common/PublicRoute';

const appRoute: React.ReactElement = (
	<Switch>
		<PublicRoute path={'/auth'} component={Auth} />
		<PrivateRoute path={'/'} component={Home} />
	</Switch>
);

export default appRoute;
