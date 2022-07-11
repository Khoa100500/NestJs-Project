import { PlanetsService } from './platnets.service';
import { PlanetsController } from './planets.controller';
import { PlanetsSchema } from './../schemas/planet.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Planets', schema: PlanetsSchema }]),
  ],
  controllers: [PlanetsController],
  providers: [PlanetsService],
})
export class PlanetsModule {}
