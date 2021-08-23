export type TBaseAction = {
	type: string;
};

export type TPayloadAction<TPayload> = TBaseAction & {
	payload: TPayload;
};

export type TBaseActionCreator = {
	(): TBaseAction;
	type: string;
};

export type TPayloadActionCreator<TPayload> = {
	(payload: TPayload): TPayloadAction<TPayload>;
	type: string;
};

export function generateBaseActionCreator(type: string): TBaseActionCreator {
	const actionCreator: TBaseActionCreator = () => ({ type });
	actionCreator.type = type;

	return actionCreator;
}

export function generatePayloadActionCreator<TPayload>(
	type: string,
): TPayloadActionCreator<TPayload> {
	const actionCreator: TPayloadActionCreator<TPayload> = (
		payload: TPayload,
	) => ({ payload, type });
	actionCreator.type = type;
	return actionCreator;
}
