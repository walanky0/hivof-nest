import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { Public } from 'src/metadata/is-public.key';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('refresh')
  getProfile(@Body('refresh_token') token: string) {
    return this.authService.refreshToken(token);
  }
}
