import { ApiProperty } from '@nestjs/swagger';

import { TokenPayloadDto } from './TokenPayloadDto';

class UserDto {
  name: string;
}

export class LoginPayloadDto {
  @ApiProperty({ type: UserDto })
  user: UserDto;
  @ApiProperty({ type: TokenPayloadDto })
  token: TokenPayloadDto;

  constructor(user: UserDto, token: TokenPayloadDto) {
    this.user = user;
    this.token = token;
  }
}
