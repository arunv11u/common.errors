# @arunvaradharajalu/common.errors

[![npm version](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.errors.svg)](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.errors)
[![GitHub issues](https://img.shields.io/github/issues/arunv11u/common.errors)](https://github.com/arunv11u/common.errors/issues)
[![GitHub license](https://img.shields.io/github/license/arunv11u/common.errors)](https://github.com/arunv11u/common.errors/blob/master/LICENSE)

This npm package provides custom error classes and middleware for handling various types of errors commonly encountered in applications. It includes error classes for database connection errors, storage connection errors, mail connection errors, and a generic error handler middleware for Express applications.

## Installation

Install the package using npm:

```bash
npm install @arunvaradharajalu/common.errors
```

## Usage

### Error Classes

The package includes several predefined error classes:

- `DatabaseConnectionError`: Represents errors related to database connections.
- `StorageConnectionError`: Represents errors related to storage connections.
- `MailConnectionError`: Represents errors related to mail service connections.
- `FirebaseCloudMessagingConnectionError`: Represents errors related to firebase cloud messaging connections.
- `SocketConnectionError`: Represents errors related to socket connections.

## Middleware

### Error Handler Middleware

Use the error handler middleware to handle instances of `CustomError` and send appropriate responses:

```typescript
import { errorHandler } from '@arunvaradharajalu/common.errors';

// Example usage with Express
app.use(errorHandler);
```

### Example

```typescript
import { DatabaseConnectionError } from '@arunvaradharajalu/common.errors';

try {
  // Attempt database connection
} catch (err) {
  throw new DatabaseConnectionError('Failed to connect to the database');
}
```

## Running Tests

To run the tests, use:

```bash
npm test
```

The test results will be generated in an HTML report with the title "Error Test Report".

## Repository

The source code is available at: [GitHub Repository](https://github.com/arunv11u/common.errors)

## Issues

If you encounter any issues, please report them at: [GitHub Issues](https://github.com/arunv11u/common.errors/issues)

## Author

Arun Varadharajalu

## License

This project is licensed under the ISC License.