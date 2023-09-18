export class CreateTaskDto {
  readonly title: string;
  readonly description: string;
  readonly status: TaskStatus;
  readonly timeSpent: number;
  readonly userId: number;
}
enum TaskStatus {
  CREATED = 'CREATED',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
