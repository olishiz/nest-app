import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/helloWorld')
  sendHelloWorld() {
    console.log('sheesh doing this ');
    console.log('hehahahaha professional my ass ka');
    return this.appService.writeHelloWorld();
  }
}
