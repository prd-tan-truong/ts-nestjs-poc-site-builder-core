import { Injectable } from '@nestjs/common';

@Injectable()
export class SitesService {
  getHello(): string {
    return 'Hello World!';
  }
}
