import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class UserPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const dto = plainToClass(metadata.metatype, value);
    const err = await validate(dto);
    console.log('value', value);
    console.log('err', err);
    return value;
  }
}
