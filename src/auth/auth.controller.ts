import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService.test();
  }
  @Post('signup')
  signup() {
    return { user: 'khoa', status: 'signed up' };
  }

  @Post('signin')
  signin() {
    return 'I am signed in';
  }
}
