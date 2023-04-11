import { PartialType } from '@nestjs/mapped-types';
import { CreateFormDataSubmitDto } from './create-form-data-submit.dto';

export class UpdateFormDataSubmitDto extends PartialType(CreateFormDataSubmitDto) {}
