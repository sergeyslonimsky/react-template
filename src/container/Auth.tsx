import { useFormik } from 'formik';
import { ILoginRequest } from 'model/Request';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { processResponseError } from 'store/action/AppAction';
import { loginSuccess } from 'store/action/AuthAction';
import AuthApi from 'util/api/AuthApi';

const Auth: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const formik = useFormik<ILoginRequest>({
		initialValues: {
			username: '',
			password: '',
		},
		onSubmit: async (data) => {
			try {
				setLoading(true);
				const response = await AuthApi.login(data);
				dispatch(loginSuccess(response.data.token));
			} catch (e) {
				setLoading(false);
				dispatch(processResponseError(e.response));
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="username">Username</label>
			<input
				id="username"
				name="username"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.username}
			/>
			<label htmlFor="password">Password</label>
			<input
				id="password"
				name="password"
				type="password"
				onChange={formik.handleChange}
				value={formik.values.password}
			/>
			<button type="submit" disabled={loading}>
				Submit
			</button>
		</form>
	);
};

export default Auth;
