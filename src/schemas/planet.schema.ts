import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlanetsDocument = Planets & Document;

@Schema()
export class Planets {
  @Prop()
  name: string;

  @Prop()
  orderFromSun: number;
}

export const PlanetsSchema = SchemaFactory.createForClass(Planets);
