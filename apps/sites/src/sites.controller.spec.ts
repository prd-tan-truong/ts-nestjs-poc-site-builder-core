import { Test, TestingModule } from '@nestjs/testing';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';

describe('SitesController', () => {
  let sitesController: SitesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SitesController],
      providers: [SitesService],
    }).compile();

    sitesController = app.get<SitesController>(SitesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sitesController.getHello()).toBe('Hello World!');
    });
  });
});
