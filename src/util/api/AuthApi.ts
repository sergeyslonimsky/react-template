import { AxiosResponse } from 'axios';
import { ILoginRequest } from 'model/Request';
import { ILoginResponse } from 'model/Response';
import BaseApi from 'util/api/BaseApi';

export default class AuthApi extends BaseApi {
	public static login(
		data: ILoginRequest,
	): Promise<AxiosResponse<ILoginResponse>> {
		return this.doPost('/login', data);
	}
}
