
export interface FormattedError {
	errors: ErrorObject[];
}


export interface ErrorObject {
	code: string;
	message: string;
	field?: string;
}