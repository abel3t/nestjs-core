import type {
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent
} from 'typeorm';
import { EventSubscriber } from 'typeorm';

import { UtilsService } from '../providers/utils.service';
import { UserEntity } from '../shared/entities/user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
  listenTo() {
    return UserEntity;
  }

  beforeInsert(event: InsertEvent<UserEntity>) {
    if (event.entity.password) {
      event.entity.password = UtilsService.generateHash(event.entity.password);
    }
  }

  beforeUpdate(event: UpdateEvent<UserEntity>) {
    if (event.entity.password !== event.databaseEntity.password) {
      event.entity.password = UtilsService.generateHash(event.entity.password);
    }
  }
}
