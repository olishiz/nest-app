import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UpdateFormDataSubmitDto } from './dto/update-form-data-submit.dto';

@Injectable()
export class FormDataSubmitService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  create(formData: any): Promise<User> {
    return this.prisma.user.create({ data: formData });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} formDataSubmit`;
  }

  update(id: number, updateFormDataSubmitDto: UpdateFormDataSubmitDto) {
    return `This action updates a #${id} formDataSubmit`;
  }

  remove(id: number) {
    return `This action removes a #${id} formDataSubmit`;
  }
}
