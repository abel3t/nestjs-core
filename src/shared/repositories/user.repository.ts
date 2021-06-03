import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { UserEntity } from '../entities/user.entity';
import { BaseRepository } from './base.repository';

@Injectable()
@EntityRepository(UserEntity)
export class UserRepository extends BaseRepository<UserEntity> {}
