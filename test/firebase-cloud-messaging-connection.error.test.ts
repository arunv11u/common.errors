import { CustomError, FirebaseCloudMessagingConnectionError } from "../src";




describe("Error Module", () => {
	describe("\"FirebaseCloudMessagingConnectionError\" class", () => {
		describe("Happy Path", () => {
			it("Need a class which extended built-in CustomError class, FirebaseCloudMessagingConnectionError class should extend CustomError class", () => {
				expect(FirebaseCloudMessagingConnectionError.prototype)
					.toBeInstanceOf(CustomError);
			});

			it("Firebase cloud messaging Connection Error Object should be an instance of a Custom Error", () => {
				const firebaseCloudMessagingConnectionError = new FirebaseCloudMessagingConnectionError("Error, connecting to the FCM");
				expect(firebaseCloudMessagingConnectionError)
					.toBeInstanceOf(CustomError);
			});
		});
	});

	describe("\"serializeErrors\" fn", () => {
		describe("Happy Path", () => {
			it("No arguments passed, should return structured error message", () => {
				const firebaseCloudMessagingConnectionError = new FirebaseCloudMessagingConnectionError("Error, connecting to the FCM");
				const _errorMessage =
					firebaseCloudMessagingConnectionError.serializeErrors();

				const _message = "Error, connecting to the FCM";
				expect(_errorMessage).toMatchObject([
					{ 
						code: "FCM_CONNECTION",
						message: _message 
					}
				]);
				expect(firebaseCloudMessagingConnectionError.message)
					.toBe(_message);
			});
		});
	});
});
