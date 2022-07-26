import { Test, TestingModule } from '@nestjs/testing';
import { ReminderService } from './reminder.service';

describe('ReminderService', () => {
  let provider: ReminderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReminderService],
    }).compile();

    provider = module.get<ReminderService>(ReminderService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
