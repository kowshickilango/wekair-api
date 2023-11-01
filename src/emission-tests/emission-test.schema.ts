import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/user.schema';
import { Vehicle } from 'src/vehicle/vehicle.schema';

export type EmissionTestDocument = EmissionTest & Document;

@Schema({ timestamps: true })
export class EmissionTest {
  @Prop({ required: true, index: true })
  catalyticConverter: boolean;

  @Prop({ required: true })
  CO2: number;

  @Prop({ required: true })
  O2: boolean;

  @Prop({ required: true })
  airFilter: boolean;

  @Prop({ required: true })
  otherIssue: boolean;

  @Prop({ type: Types.ObjectId, ref: Vehicle.name, required: true })
  vehicle: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  owner: Types.ObjectId;
}

export const EmissionTestSchema = SchemaFactory.createForClass(EmissionTest);
