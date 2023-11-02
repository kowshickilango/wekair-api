import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/user.schema';
import { Vehicle } from 'src/vehicle/vehicle.schema';

export type EmissionTestDocument = EmissionTest & Document;

@Schema({ timestamps: true })
export class EmissionTest {
  @Prop({index: true })
  catalyticConverter: boolean;

  @Prop()
  CO2: number;

  @Prop()
  O2: boolean;

  @Prop({  })
  airFilter: boolean;

  @Prop({ type: Types.ObjectId, ref: Vehicle.name  })
  vehicle: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: User.name  })
  owner: Types.ObjectId;
}

export const EmissionTestSchema = SchemaFactory.createForClass(EmissionTest);
