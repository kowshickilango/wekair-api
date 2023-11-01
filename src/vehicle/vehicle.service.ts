import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle, VehicleDocument } from './vehicle.schema';
import { UserDocument } from 'src/users/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class VehicleService {
  constructor(
    @InjectModel(Vehicle.name)
    private readonly vehicleModel: Model<VehicleDocument>,
    private mailService: MailService,
  ) {}
  async create(createVehicleDto: CreateVehicleDto, user: UserDocument) {
    const newVehicle = new this.vehicleModel({
      ...createVehicleDto,
      owner: user._id,
    });
    return await newVehicle.save();
  }

  findAll() {
    return this.vehicleModel.find();
  }

  async findByUser(user: UserDocument) {
    return await this.vehicleModel.find({ owner: user._id });
  }

  async sendNotice(vehicle: string, email: string) {
    await this.mailService.sendNotice(vehicle, email);
  }

  findOne(id: string) {
    return this.vehicleModel.findById(id);
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
