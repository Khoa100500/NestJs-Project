// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
import { isEmail, IsEmail, IsNotEmpty } from 'class-validator';
import { buildSchema, prop } from '@typegoose/typegoose';
import { Prop } from '@nestjs/mongoose';
// import { SchemaFactory } from '@nestjs/mongoose';
// export type UserDocument = User & Document;

// @Schema()

class Test {
  @IsEmail()
  @Prop()
  public email?: string;
}

export class User {
  @IsNotEmpty()
  @prop()
  public name?: string;

  @IsEmail()
  @prop()
  public password?: string;

  @prop()
  public test?: Test;
}

export const UserSchema = buildSchema(User);

// export const UserSchema = SchemaFactory.createForClass(User);
