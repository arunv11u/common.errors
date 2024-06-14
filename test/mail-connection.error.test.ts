import { CustomError, MailConnectionError } from "../src";




describe("Error Module", () => {
	describe("\"MailConnectionError\" class", () => {
		describe("Happy Path", () => {
			it("Need a class which extended built-in CustomError class, MailConnectionError class should extend CustomError class", () => {
				expect(MailConnectionError.prototype)
					.toBeInstanceOf(CustomError);
			});

			it("Mail Connection Error Object should be an instance of a Custom Error", () => {
				const firebaseCloudMessagingConnectionError = new MailConnectionError("Error, connecting to the mail server");
				expect(firebaseCloudMessagingConnectionError)
					.toBeInstanceOf(CustomError);
			});
		});
	});

	describe("\"serializeErrors\" fn", () => {
		describe("Happy Path", () => {
			it("No arguments passed, should return structured error message", () => {
				const mailConnectionError = new MailConnectionError("Error, connecting to the mail server");
				const _errorMessage =
					mailConnectionError.serializeErrors();

				const _message = "Error, connecting to the mail server";
				expect(_errorMessage).toMatchObject([
					{
						code: "MAIL_CONNECTION",
						message: _message 
					}
				]);
				expect(mailConnectionError.message)
					.toBe(_message);
			});
		});
	});
});
