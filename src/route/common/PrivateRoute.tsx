import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { IRootState } from 'store/state/RootState';

interface IProps extends RouteProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component: React.ComponentType<any>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PrivateRoute = ({ component: Component, ...rest }: IProps) => {
	const isAuth = useSelector((state: IRootState) => state.app.isAuth);

	return (
		<Route
			{...rest}
			render={(props) => {
				return isAuth ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/auth',
							state: { from: props.location },
						}}
					/>
				);
			}}
		/>
	);
};

export default PrivateRoute;
