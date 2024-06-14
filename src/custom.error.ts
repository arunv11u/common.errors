
export abstract class CustomError<T> extends Error {
	abstract statusCode: number;
	abstract code: T;

	constructor(message: string) {
		super(message);

		// eslint-disable-next-line max-len
		// Only because we are deriving(creating a subclass) from a built in class
		Object.setPrototypeOf(this, CustomError.prototype);
	}

	abstract serializeErrors(): { message: string; field?: string }[];
}
