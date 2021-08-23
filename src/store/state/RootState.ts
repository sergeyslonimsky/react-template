import { RouterState } from 'connected-react-router';
import { IAppState } from 'store/state/AppState';

export interface IRootState {
	app: IAppState;
	router: RouterState;
}
