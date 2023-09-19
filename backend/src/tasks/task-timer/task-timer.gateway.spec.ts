import { Test, TestingModule } from '@nestjs/testing';
import { TaskTimerGateway } from './task-timer.gateway';

describe('TaskTimerGateway', () => {
  let gateway: TaskTimerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskTimerGateway],
    }).compile();

    gateway = module.get<TaskTimerGateway>(TaskTimerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
