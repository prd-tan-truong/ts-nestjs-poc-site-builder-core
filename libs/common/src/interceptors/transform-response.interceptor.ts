import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformationInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  constructor(private reflector: Reflector) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((response) =>
        response._meta
          ? {
              message:
                context.switchToHttp().getResponse().statusCode < 400
                  ? 'success'
                  : response.message,
              statusCode: context.switchToHttp().getResponse().statusCode,
              data: response.items,
              _meta: response._meta ?? '',
            }
          : {
              message:
                context.switchToHttp().getResponse().statusCode < 400
                  ? 'success'
                  : response.message,
              statusCode: context.switchToHttp().getResponse().statusCode,
              data: response,
            },
      ),
    );
  }
}
