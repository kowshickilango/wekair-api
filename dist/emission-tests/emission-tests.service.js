"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmissionTestsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const emission_test_schema_1 = require("./emission-test.schema");
let EmissionTestsService = class EmissionTestsService {
    constructor(emissionTestModel) {
        this.emissionTestModel = emissionTestModel;
    }
    async create(emissionTestDto, user) {
        const newTest = new this.emissionTestModel(Object.assign(Object.assign({}, emissionTestDto), { owner: user._id }));
        return await newTest.save();
    }
    async findByUser(user) {
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
    async findByVehicle(regNo) {
        const tests = await this.emissionTestModel
            .find()
            .populate('vehicle')
            .sort({ createdAt: -1 });
        return tests.filter((test, i) => test.vehicle.regNumber === regNo);
    }
    async findOne(id) {
        return await this.emissionTestModel.findById(id).populate('vehicle');
    }
    async update(id, emissionTestDto) {
        return await this.emissionTestModel.findByIdAndUpdate(id, emissionTestDto);
    }
    async remove(id) {
        return await this.emissionTestModel.findByIdAndRemove(id);
    }
};
EmissionTestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(emission_test_schema_1.EmissionTest.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmissionTestsService);
exports.EmissionTestsService = EmissionTestsService;
//# sourceMappingURL=emission-tests.service.js.map