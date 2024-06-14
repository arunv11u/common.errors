import { CustomError, DatabaseConnectionError } from "../src";




describe("Error Module", () => {
	describe("\"DatabaseConnectionError\" class", () => {
		describe("Happy Path", () => {
			it("Need a class which extended built-in CustomError class, DatabaseConnectionError class should extend CustomError class", () => {
				expect(DatabaseConnectionError.prototype)
					.toBeInstanceOf(CustomError);
			});

			it("Database Connection Error Object should be an instance of a Custom Error", () => {
				const databaseConnectionError = new DatabaseConnectionError("Error, connecting to the database");
				expect(databaseConnectionError).toBeInstanceOf(CustomError);
			});
		});
	});

	describe("\"serializeErrors\" fn", () => {
		describe("Happy Path", () => {
			it("No arguments passed, should return structured error message", () => {
				const databaseConnectionError = new DatabaseConnectionError("Error, connecting to the database");
				const _errorMessage = databaseConnectionError.serializeErrors();

				const _message = "Error, connecting to the database";
				expect(_errorMessage).toMatchObject([
					{ 
						code: "DB_CONNECTION",
						message: _message 
					}
				]);
				expect(databaseConnectionError.message).toBe(_message);
			});
		});
	});
});
