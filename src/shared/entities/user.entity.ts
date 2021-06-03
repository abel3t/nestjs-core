import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({
  name: 'users'
})
export class UserEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ type: 'varchar', width: 64, nullable: true })
  name: string;

  @Column({ type: 'varchar', width: 64, nullable: true })
  password: string;

  @Column({ type: 'varchar', width: 64, nullable: true })
  role: string;
}
