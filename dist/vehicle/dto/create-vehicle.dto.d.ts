declare const vehicleTypes: readonly ["two-wheeler", "light-vehicle", "dual-purpose"];
type VehicleTypes = (typeof vehicleTypes)[number];
export declare class CreateVehicleDto {
    regNumber: string;
    type: VehicleTypes;
    yearOfManufacture: number;
}
export {};
