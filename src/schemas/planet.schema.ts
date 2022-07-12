import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlanetsDocument = Planets & Document;

@Schema()
export class Planets {
  @Prop()
  name: string;

  @Prop()
  orderFromSun: number;

  @Prop()
  hasRings: boolean;

  @Prop()
  atMosphere: string[];
}

export const PlanetsSchema = SchemaFactory.createForClass(Planets);
