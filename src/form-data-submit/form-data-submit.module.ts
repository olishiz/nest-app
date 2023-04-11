import { Module } from '@nestjs/common';
import { FormDataSubmitService } from './form-data-submit.service';
import { FormDataSubmitController } from './form-data-submit.controller';

@Module({
  controllers: [FormDataSubmitController],
  providers: [FormDataSubmitService],
})
export class FormDataSubmitModule {}
