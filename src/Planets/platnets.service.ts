import { Planets, PlanetsDocument } from './../schemas/planet.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PlanetsService {
  constructor(
    @InjectModel(Planets.name) private planetsModel: Model<PlanetsDocument>,
  ) {}

  async findPlanetNameByID(id: string): Promise<Planets[]> {
    return this.planetsModel.findById(id, { name: 1 });
  }
}
