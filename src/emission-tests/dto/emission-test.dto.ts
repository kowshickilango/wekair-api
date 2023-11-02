import { IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class EmissionTestDto {
  readonly catalyticConverter: boolean;

  readonly CO2: number;

  readonly O2: boolean;

  readonly airFilter: boolean;

  readonly vehicle: string;
}
