import { CustomError, SocketConnectionError } from "../src";




describe("Error Module", () => {
	describe("\"SocketConnectionError\" class", () => {
		describe("Happy Path", () => {
			it("Need a class which extended built-in CustomError class, SocketConnectionError class should extend CustomError class", () => {
				expect(SocketConnectionError.prototype)
					.toBeInstanceOf(CustomError);
			});

			it("Socket Connection Error Object should be an instance of a Custom Error", () => {
				const socketConnectionError = new SocketConnectionError("Error, connecting to the socket");
				expect(socketConnectionError)
					.toBeInstanceOf(CustomError);
			});
		});
	});

	describe("\"serializeErrors\" fn", () => {
		describe("Happy Path", () => {
			it("No arguments passed, should return structured error message", () => {
				const socketConnectionError = new SocketConnectionError("Error, connecting to the socket");
				const _errorMessage =
					socketConnectionError.serializeErrors();

				const _message = "Error, connecting to the socket";
				expect(_errorMessage).toMatchObject([
					{
						code: "SOCKET_CONNECTION",
						message: _message
					}
				]);
				expect(socketConnectionError.message)
					.toBe(_message);
			});
		});
	});
});
