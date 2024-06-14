import { CustomError, ErrorObject } from "../src";


class CustomErrorImpl extends CustomError<string> {
	statusCode = 500;
	code = "CLIENT_ERROR";

	constructor(public reason: string) {
		super(reason);

		// Only because extending from a built in class
		Object.setPrototypeOf(this, CustomErrorImpl.prototype);
	}

	serializeErrors(): ErrorObject[] {
		return [{ code: this.code, message: this.reason }];
	}
}

describe("Error Module", () => {
	describe("\"CustomError\" class", () => {
		describe("Happy Path", () => {
			it("Need a class which extended built-in Error class, CustomError class should extend Error class", () => {
				const customError = new CustomErrorImpl("Custom Error");
                
				expect(CustomError.prototype).toBeInstanceOf(Error);
				expect(customError.message).toBe("Custom Error");
			});
		});
	});
});
