import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

enum TaskStatus {
  CREATED = 'CREATED',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: TaskStatus.CREATED })
  status: TaskStatus;

  @Column({ type: 'float', default: 0 })
  timeSpent: number;

  //   @ManyToOne(() => User, (user) => user.tasks)
  //   user: User;

  @Column()
  userId: number;
}
