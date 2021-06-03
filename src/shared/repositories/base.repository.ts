import { MongoRepository } from 'typeorm';

export class BaseRepository<T> extends MongoRepository<T> {}
