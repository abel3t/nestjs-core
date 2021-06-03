import { Global, HttpModule, Module } from '@nestjs/common';

import { DatabaseProvider, MONGO_CONNECTION } from './database.provider';
import { repositories, RepositoriesProvider } from './repositories.provider';
import { AwsS3Service } from './services/aws-s3.service';
import { GeneratorService } from './services/generator.service';
import { ValidatorService } from './services/validator.service';

const providers = [
  ...DatabaseProvider,
  ...RepositoriesProvider,
  ValidatorService,
  AwsS3Service,
  GeneratorService
];

@Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, ...repositories, HttpModule, MONGO_CONNECTION]
})
export class SharedModule {}
