import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appRoute from 'route/AppRoute';
import { initApp } from 'store/action/AppAction';
import { IRootState } from 'store/state/RootState';

const Root: React.FC = () => {
	const app = useSelector((state: IRootState) => state.app);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initApp());
	}, [dispatch]);

	return <div>{app && app.isLoading ? 'Loading' : appRoute}</div>;
};

export default Root;
