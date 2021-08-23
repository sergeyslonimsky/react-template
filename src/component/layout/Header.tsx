import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'store/action/AuthAction';

export const Header: React.FC = () => {
	const dispatch = useDispatch();

	return (
		<div className={'header'}>
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};
