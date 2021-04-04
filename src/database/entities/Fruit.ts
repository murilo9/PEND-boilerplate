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
}