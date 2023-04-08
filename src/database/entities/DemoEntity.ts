import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DemoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;
}
