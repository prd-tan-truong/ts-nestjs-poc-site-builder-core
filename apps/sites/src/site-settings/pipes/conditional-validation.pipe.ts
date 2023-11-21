import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { UpdateSiteSettingsDto } from '../dto/update-settings.dto';

@Injectable()
export class ConditionalValidationPipe implements PipeTransform {
  async transform(entity: any, metadata: ArgumentMetadata) {
    if (!metadata || metadata.type != 'body') {
      return entity;
    }
    // Transform to class with groups
    const entityClass = plainToInstance(UpdateSiteSettingsDto, entity);
    // Validate with groups
    const errors = await validate(entityClass, { groups: [entity.type] });
    if (errors.length > 0) {
      throw new BadRequestException({
        message: 'Bad Request',
        code: 'BAD_REQUEST',
        details: errors.map((error) => ({
          field: error.property,
          error: Object.values(error.constraints).join(', '),
        })),
      });
    }
    return entityClass;
  }
}
