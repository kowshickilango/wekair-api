import { IsNotEmpty } from 'class-validator';

const vehicleTypes = ['two-wheeler', 'light-vehicle', 'dual-purpose'] as const;

type VehicleTypes = (typeof vehicleTypes)[number];

export class CreateVehicleDto {
  @IsNotEmpty()
  regNumber: string;

  @IsNotEmpty()
  type: VehicleTypes;

  @IsNotEmpty()
  yearOfManufacture: number;
}
