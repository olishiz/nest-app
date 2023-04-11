import { Test, TestingModule } from '@nestjs/testing';
import { FormDataSubmitService } from './form-data-submit.service';

describe('FormDataSubmitService', () => {
  let service: FormDataSubmitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormDataSubmitService],
    }).compile();

    service = module.get<FormDataSubmitService>(FormDataSubmitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
