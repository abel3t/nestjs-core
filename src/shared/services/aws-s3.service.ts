import { Injectable } from '@nestjs/common';
import AWS from 'aws-sdk';
import mime from 'mime-types';

import type { IFile } from '../../interfaces/IFile';
import { GeneratorService } from './generator.service';

@Injectable()
export class AwsS3Service {
  private readonly s3: AWS.S3;

  constructor(public generatorService: GeneratorService) {
    const awsS3Config: any = {};

    const options: AWS.S3.Types.ClientConfiguration = {
      apiVersion: awsS3Config.bucketApiVersion,
      region: awsS3Config.bucketRegion
    };

    if (awsS3Config.accessKeyId && awsS3Config.secretAccessKey) {
      options.credentials = awsS3Config;
    }

    this.s3 = new AWS.S3(options);
  }

  async uploadImage(file: IFile): Promise<string> {
    const fileName = this.generatorService.fileName(
      <string>mime.extension(file.mimetype)
    );
    const key = 'images/' + fileName;
    await this.s3
      .putObject({
        Bucket: '',
        Body: file.buffer,
        ACL: 'public-read',
        Key: key
      })
      .promise();

    return key;
  }
}
