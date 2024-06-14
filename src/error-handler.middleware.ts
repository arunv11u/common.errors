import {
	NextFunction,
	Request,
	Response
} from "express";
import { CustomError } from "./custom.error";
import { FormattedError } from "./utils/types";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorHandler = (err: any,
	request: Request,
	response: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
	// eslint-disable-next-line max-params
) => {

	const formattedErrorResponse: FormattedError = {
		errors: [
			{
				code: "INTERNAL_ERROR",	
				message: "Something went wrong, please try again",
			},
		],
	};
	const _error = {
		_code: 500,
	};

	if (err instanceof CustomError)
		return response.status(err.statusCode)
			.send({ errors: err.serializeErrors() });

	return response.status(_error._code)
		.send(formattedErrorResponse);
};