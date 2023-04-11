import { Test, TestingModule } from '@nestjs/testing';
import { FormDataSubmitController } from './form-data-submit.controller';
import { FormDataSubmitService } from './form-data-submit.service';

describe('FormDataSubmitController', () => {
  let controller: FormDataSubmitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormDataSubmitController],
      providers: [FormDataSubmitService],
    }).compile();

    controller = module.get<FormDataSubmitController>(FormDataSubmitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
