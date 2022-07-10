import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DbService {
  constructor(private configService: ConfigService) {}
}
