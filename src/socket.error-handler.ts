import { CustomError } from "./custom.error";
import { FormattedError } from "./utils/types";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const socketErrorHandler = (error: any
) => {
	let formattedErrorResponse: FormattedError = {
		errors: [
			{
				code: "INTERNAL_ERROR",
				message: "Something went wrong, please try again",
			},
		],
	};

	if (error instanceof CustomError) {
		formattedErrorResponse = {
			errors: [
				{
					code: error.code,
					message: error.message
				}
			]
		};
	}

	return formattedErrorResponse;
};