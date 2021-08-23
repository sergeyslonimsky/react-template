import { Reducer } from 'redux';
import { TPayloadAction } from 'store/generic/GenericAction';

export type TReducer<TState> = Reducer<TState, TPayloadAction<TState>>;

export function generatePrimitiveReducer<TState>(
	type: string,
	initialState: TState,
): TReducer<TState> {
	return (
		state: TState = initialState,
		action: TPayloadAction<TState>,
	): TState => (action.type === type ? action.payload : state);
}

export function generateObjectReducer<TState>(
	type: string,
	initialState: TState,
): TReducer<TState> {
	return (
		state: TState = initialState,
		action: TPayloadAction<TState>,
	): TState => {
		if (action.type === type) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return action.payload ? { ...(action.payload as any) } : null;
		}
		return state;
	};
}

export function generateArrayReducer<TState>(
	type: string,
	initialState: TState[],
): TReducer<TState[]> {
	return (
		state: TState[] = initialState,
		action: TPayloadAction<TState[]>,
	): TState[] => (action.type === type ? [...action.payload] : state);
}
