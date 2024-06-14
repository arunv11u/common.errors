/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	NextFunction,
	Request,
	Response
} from "express";
import { CustomError, errorHandler } from "../src";
import { ErrorObject } from "../src/utils/types";

enum ErrorCodes {
	invalidInput = "INV_INPUT",
	internalError = "INTERNAL_ERROR"
}

interface GenericErrorObject {
	code: ErrorCodes;
	error: Error;
	errorCode: number;
}

class GenericError extends CustomError<ErrorCodes> {
	statusCode;
	code: ErrorCodes;
	constructor(public error: GenericErrorObject) {
		super(error.error.message);

		this.statusCode = error.errorCode;
		this.code = error.code;

		Object.setPrototypeOf(this, GenericError.prototype);
	}

	serializeErrors(): ErrorObject[] {
		const { error } = this.error;
		return [{  code: this.code, message: error.message }];
	}
}

describe("Middleware Module", () => {
	describe("Error Handling Middleware", () => {
		let mockRequest: Partial<Request>;
		let mockResponse: Partial<Response>;
		let mockSendMethod: jest.Mock;
		const nextFunction: NextFunction = jest.fn();

		beforeEach(() => {
			mockSendMethod = jest.fn();
			mockRequest = {};
			mockResponse = {
				status: jest.fn(() => ({ send: mockSendMethod } as any))
			};
		});

		describe("Happy Path", () => {
			it("If error is known to server, should return an understandable error response to the client", () => {
				const _message = "Name is required";
				const _code = 400;
				const mockError: GenericError =
					new GenericError({
						code: ErrorCodes.invalidInput,
						error: new Error(_message),
						errorCode: _code
					});

				errorHandler(
					mockError,
					mockRequest as Request,
					mockResponse as Response,
					nextFunction
				);
				expect(mockResponse.status).toHaveBeenCalledWith(_code);
				expect(mockSendMethod)
					.toHaveBeenCalledWith(
						{ errors: [
							{ 
								code: ErrorCodes.invalidInput, 
								message: _message 
							}
						] }
					);
			});

			it("If error is unknown to server, should return the \"Something went wrong error\" to the client", () => {
				const _message = "Something went wrong, please try again";
				const _code = 500;
				const mockError: Error = new Error("Some unknown error");

				errorHandler(
					mockError, mockRequest as Request,
					mockResponse as Response,
					nextFunction
				);
				expect(mockResponse.status).toHaveBeenCalledWith(_code);
				expect(mockSendMethod)
					.toHaveBeenCalledWith(
						{ errors: [
							{
								code: ErrorCodes.internalError,
								message: _message 
							}
						] }
					);
			});
		});
	});
});