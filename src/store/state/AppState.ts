export interface IAppState {
	isLoading: boolean;
	isAuth: boolean;
}

export const initialAppState: IAppState = {
	isLoading: true,
	isAuth: false,
};
