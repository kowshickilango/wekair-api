import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/user.schema';
// import { TollTermial } from 'src/toll-terminals/toll-terminals.schema';

export type VehicleDocument = Vehicle & Document;

@Schema({ timestamps: true })
export class Vehicle {
  @Prop({ required: true, index: true, unique: true })
  regNumber: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  yearOfManufacture: number;

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  owner: Types.ObjectId;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
