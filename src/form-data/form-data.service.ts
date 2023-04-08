import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DemoEntity } from '../database/entities/DemoEntity';
import { Repository } from 'typeorm';

@Injectable()
export class FormDataService {
  constructor(
    @InjectRepository(DemoEntity)
    private readonly demoRepository: Repository<DemoEntity>,
  ) {}

  async createDemoRecord(name: string, password: string): Promise<DemoEntity> {
    const demoRecord = new DemoEntity();
    demoRecord.name = name;
    demoRecord.password = password;
    return await this.demoRepository.save(demoRecord);
  }

  async getAllDemoRecords(): Promise<DemoEntity[]> {
    return await this.demoRepository.find();
  }
}
