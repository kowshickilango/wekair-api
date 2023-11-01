import { IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class EmissionTestDto {
  @IsNotEmpty()
  readonly catalyticConverter: boolean;

  @IsNotEmpty()
  readonly CO2: number;

  @IsNotEmpty()
  readonly O2: boolean;

  @IsNotEmpty()
  readonly airFilter: boolean;

  @IsNotEmpty()
  readonly otherIssue: boolean;

  @IsNotEmpty()
  readonly vehicle: string;
}
