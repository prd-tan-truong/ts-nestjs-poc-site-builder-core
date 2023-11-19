import { AnalyticsDto } from '../dto/analytics.dto';
import { FaviconDto } from '../dto/favicon.dto';

export class DtoFactory {
  static getDto(type: string) {
    switch (type) {
      case 'analytics':
        return AnalyticsDto;
      case 'favicon':
        return FaviconDto;
      default:
        throw new Error('Not implemented');
    }
  }
}
