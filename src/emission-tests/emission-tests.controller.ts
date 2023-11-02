import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmissionTestsService } from './emission-tests.service';
import { EmissionTestDto } from './dto/emission-test.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { UserDocument } from 'src/users/user.schema';

@Controller('emission-tests')
export class EmissionTestsController {
  constructor(private readonly emissionTestsService: EmissionTestsService) {}

  @Post()
  create(
    @Body() emissionTestDto: EmissionTestDto,
    @GetUser() user: UserDocument,
  ) {
    console.log("req", emissionTestDto)
    return this.emissionTestsService.create(emissionTestDto, user);
  }

  @Get()
  findAll() {
    return this.emissionTestsService.findAll();
  }

  @Get('my')
  findByUser(@GetUser() user: UserDocument) {
    return this.emissionTestsService.findByUser(user._id);
  }

  @Get('high-emitters')
  findLatestHighEmitters(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.emissionTestsService.findLatestHighEmittingVehicles(
      page,
      limit,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emissionTestsService.findOne(id);
  }

  @Get('vehicle/:regNo')
  findByVehilce(@Param('regNo') regNo: string) {
    return this.emissionTestsService.findByVehicle(regNo);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() emissionTestDto: EmissionTestDto) {
    return this.emissionTestsService.update(id, emissionTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emissionTestsService.remove(id);
  }
}
