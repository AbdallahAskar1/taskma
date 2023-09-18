import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  status: string;

  @Column({ type: 'float', default: 0 })
  timeSpent: number;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
