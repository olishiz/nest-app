import { Body, Controller, Post } from '@nestjs/common';
import { FormDataService } from './form-data.service';

@Controller('submit-form')
export class FormDataController {
  constructor(private formDataService: FormDataService) {}
  @Post()
  submitForm(@Body() formData: any) {
    console.log('Received form data:', formData);
    // Handle the received form data as needed dada

    this.formDataService.createDemoRecord(formData.name, formData.password);
  }
}
