import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User, UserDocument } from 'src/users/user.schema';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(
    @Body() createVehicleDto: CreateVehicleDto,
    @GetUser() user: UserDocument,
  ) {
    return this.vehicleService.create(createVehicleDto, user);
  }

  @Post('mail/:vehicle')
  sendNotice(@Param() vehicle: string, @GetUser() user: UserDocument) {
    return this.vehicleService.sendNotice(vehicle, user.email);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get('my')
  findByUser(@GetUser() user: UserDocument) {
    return this.vehicleService.findByUser(user._id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.update(+id, updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleService.remove(+id);
  }
}
