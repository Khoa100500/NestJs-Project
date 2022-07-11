import { Planets } from './../schemas/planet.schema';
import { PlanetsService } from './platnets.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('Planets')
export class PlanetsController {
  constructor(private planetsService: PlanetsService) {}
  @Get('/:id')
  async getPlanetName(@Param('id') id): Promise<Planets[]> {
    return await this.planetsService.findPlanetNameByID(id);
  }
}
