import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmissionTestDto } from './dto/emission-test.dto';
import { EmissionTest, EmissionTestDocument } from './emission-test.schema';
import { UserDocument } from 'src/users/user.schema';

@Injectable()
export class EmissionTestsService {
  constructor(
    @InjectModel(EmissionTest.name)
    private readonly emissionTestModel: Model<EmissionTestDocument>,
  ) {}

  async create(emissionTestDto: EmissionTestDto, user: UserDocument) {
    const newTest = new this.emissionTestModel({
      ...emissionTestDto,
      owner: user._id,
    });
    return await newTest.save();
  }

  async findByUser(user: UserDocument) {
    return await this.emissionTestModel
      .find({ owner: user._id })
      .populate('vehicle');
  }

  async findAll() {
    return await this.emissionTestModel.find();
  }

  async findLatestHighEmittingVehicles(page = 0, limit = 10) {
    if (+page === 0) {
      const totalCount = await this.emissionTestModel.countDocuments({
        $or: [
          { CO2: { $gt: 4.5 } },
          { catalyticConverter: true },
          { O2: true },
          { otherIssue: true },
          { airFilter: true },
        ],
      });
      const tests = await this.emissionTestModel
        .find({
          $or: [
            { CO2: { $gt: 4.5 } },
            { catalyticConverter: true },
            { O2: true },
            { otherIssue: true },
            { airFilter: true },
          ],
        })
        .populate('vehicle')
        .sort({ createdAt: -1 })
        .skip(page)
        .limit(limit);

      return {
        tests,
        totalCount,
      };
    }

    const tests = await this.emissionTestModel
      .find({
        $or: [
          { CO2: { $gt: 4.5 } },
          { catalyticConverter: true },
          { O2: true },
          { otherIssue: true },
          { airFilter: true },
        ],
      })
      .populate('vehicle')
      .sort({ createdAt: -1 })
      .skip(page)
      .limit(limit);

    return {
      tests,
    };
  }

  async findByVehicle(regNo: string) {
    const tests: any = await this.emissionTestModel
      .find()
      .populate('vehicle')
      .sort({ createdAt: -1 });

    return tests.filter((test, i) => test.vehicle.regNumber === regNo);
  }

  async findOne(id: string) {
    return await this.emissionTestModel.findById(id).populate('vehicle');
  }

  async update(id: string, emissionTestDto: EmissionTestDto) {
    return await this.emissionTestModel.findByIdAndUpdate(id, emissionTestDto);
  }

  async remove(id: string) {
    return await this.emissionTestModel.findByIdAndRemove(id);
  }
}
