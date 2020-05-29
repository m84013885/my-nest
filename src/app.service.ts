import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getH(): string {
    return 'Hello World!';
  }
}
