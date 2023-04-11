import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FormDataSubmitService } from './form-data-submit.service';
import { UpdateFormDataSubmitDto } from './dto/update-form-data-submit.dto';

@Controller('submit-form')
export class FormDataSubmitController {
  constructor(private readonly formDataSubmitService: FormDataSubmitService) {}

  @Post()
  create(@Body() formData: any) {
    console.log('Received form data:', formData);
    // Handle the received form data as needed

    return this.formDataSubmitService.create(formData);
  }

  @Get()
  findAll() {
    return this.formDataSubmitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formDataSubmitService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFormDataSubmitDto: UpdateFormDataSubmitDto,
  ) {
    return this.formDataSubmitService.update(+id, updateFormDataSubmitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formDataSubmitService.remove(+id);
  }
}
