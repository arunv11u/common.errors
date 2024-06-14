import { CustomError } from "./";
import { ErrorObject } from "./utils/types";

export class StorageConnectionError extends CustomError<string> {
	statusCode = 500;
	code = "STORAGE_CONNECTION";

	constructor(public reason: string) {
		super(reason);

		// Only because extending from a built in class
		Object.setPrototypeOf(this, StorageConnectionError.prototype);
	}

	serializeErrors(): ErrorObject[] {
		return [{ code: this.code, message: this.reason }];
	}
}

