import { CustomError } from "./";
import { ErrorObject } from "./utils/types";

export class MailConnectionError extends CustomError<string> {
	statusCode = 500;
	code = "MAIL_CONNECTION";

	constructor(public reason: string) {
		super(reason);

		// Only because extending from a built in class
		Object.setPrototypeOf(this, MailConnectionError.prototype);
	}

	serializeErrors(): ErrorObject[] {
		return [{  code: this.code, message: this.reason }];
	}
}

