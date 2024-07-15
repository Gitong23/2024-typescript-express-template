import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../error';
export function globalErrorHandler(
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
) {
  let statusCode = 500;
  let message = '';

  if (error instanceof HttpError) {
    statusCode = error.statusCode;
  }

  if (error instanceof Error) {
    console.error(`${error.name}: ${error.message}`);
    message = error.message;
  } else {
    console.log('Unknown error');
    message = `An unknow error occurred, ${String(error)}`;
  }

  response.status(statusCode).send({
    message,
    success: false,
    data: null,
    traceStack:
      process.env.NODE_ENV === 'development' && error instanceof Error
        ? error.stack
        : undefined,
  });
}
