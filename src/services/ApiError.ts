export default class ApiError extends Error {
	constructor(message: string) {
		super(`An API Error occurred: ${message}`);
	}
}
