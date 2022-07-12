import { User } from './../schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: ReturnModelType<typeof User>,
  ) {}

  async create(createUser: User): Promise<User> {
    const createNewUser = new this.userModel(createUser);
    return createNewUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
