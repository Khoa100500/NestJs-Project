import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test(): void {
    console.log('Using app service');
  }
}
