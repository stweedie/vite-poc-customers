export type DataLoaded<T = any> = {
	isError: false;
	isLoading: false;
	error: null;
	data: T;
}

export type DataLoading<T = any, DefaultValue extends T | null = null> = {
	isError: false;
	isLoading: true;
	error: null;
	data: DefaultValue;
}

export type DataLoadFailed<TError extends Error = Error, T = any, DefaultValue extends T | null = null> = {
	isError: true;
	isLoading: false;
	error: TError;
	data: DefaultValue;
}

export type AsyncData<T = any, DefaultValue extends T | null = null, TError extends Error = Error>
	= DataLoaded<T>
	| DataLoading<T, DefaultValue>
	| DataLoadFailed<TError, T, DefaultValue>;
