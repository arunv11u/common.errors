import { CustomError } from "./custom.error";
import { ErrorObject } from "./utils/types";

export class DatabaseConnectionError extends CustomError<string> {
	statusCode = 500;
	code = "DB_CONNECTION";
	constructor(public reason: string) {
		super(reason);

		// Only because extending from a built in class
		Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
	}

	serializeErrors(): ErrorObject[] {
		return [{ code: this.code, message: this.reason }];
	}
}