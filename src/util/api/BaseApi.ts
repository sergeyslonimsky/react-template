import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from 'util/TokenService';

interface HttpHeaders {
	'Content-Type': string;
	Authorization?: string;
}

export default class BaseApi {
	protected static baseUrl: string =
		process.env.REACT_APP_API_URL ||
		`${window.location.protocol}//${window.location.hostname}`;

	protected static doGet = async (
		url: string,
		config?: AxiosRequestConfig,
	): Promise<AxiosResponse> => {
		return await axios.get(BaseApi.baseUrl + url, {
			...config,
			headers: BaseApi.getRequestHeaders(),
		});
	};

	protected static doPost = (url: string, body: unknown): AxiosPromise => {
		return axios.post(BaseApi.baseUrl + url, JSON.stringify(body), {
			headers: BaseApi.getRequestHeaders(),
		});
	};

	protected static doPut = (url: string, body: unknown): AxiosPromise => {
		return axios.put(BaseApi.baseUrl + url, JSON.stringify(body), {
			headers: BaseApi.getRequestHeaders(),
		});
	};

	private static getRequestHeaders = (): HttpHeaders => {
		const headers: HttpHeaders = {
			'Content-Type': 'application/json',
		};

		if (getToken()) {
			headers['Authorization'] = `Bearer ${getToken()}`;
		}

		return headers;
	};
}
