import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Fruit {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  color: string;

  @Column('float')
  weight: number;

  @Column({name: 'created_at'})
  createdAt: Date;

  @Column({name: 'updated_at'})
  updatedAt: Date;
}