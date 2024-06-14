import { CustomError } from "./custom.error";
import { ErrorObject } from "./utils/types";

export class SocketConnectionError extends CustomError<string> {
	statusCode = 500;
	code = "SOCKET_CONNECTION";
	constructor(public reason: string) {
		super(reason);

		// Only because extending from a built in class
		Object.setPrototypeOf(this, SocketConnectionError.prototype);
	}

	serializeErrors(): ErrorObject[] {
		return [{ code: this.code, message: this.reason }];
	}
}