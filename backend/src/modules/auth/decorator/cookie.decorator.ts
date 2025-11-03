import { type ExecutionContext, createParamDecorator } from '@nestjs/common';
import type { Request } from 'express';

export const Cookies = createParamDecorator((data: string, ctx: ExecutionContext) => {
  // get data from http
  const request = ctx.switchToHttp().getRequest<Request>();
  return data ? request.cookies?.[data] : request.cookies;
});
