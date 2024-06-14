import { CustomError } from "./custom.error";
import { ErrorObject } from "./utils/types";

export class FirebaseCloudMessagingConnectionError extends CustomError<string> {
	statusCode = 500;
	code = "FCM_CONNECTION";
	constructor(public reason: string) {
		super(reason);

		// Only because extending from a built in class
		Object.setPrototypeOf(
			this, FirebaseCloudMessagingConnectionError.prototype
		);
	}

	serializeErrors(): ErrorObject[] {
		return [{  code: this.code, message: this.reason }];
	}
}