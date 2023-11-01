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
exports.VehicleService = void 0;
const common_1 = require("@nestjs/common");
const vehicle_schema_1 = require("./vehicle.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const mail_service_1 = require("../mail/mail.service");
let VehicleService = class VehicleService {
    constructor(vehicleModel, mailService) {
        this.vehicleModel = vehicleModel;
        this.mailService = mailService;
    }
    async create(createVehicleDto, user) {
        const newVehicle = new this.vehicleModel(Object.assign(Object.assign({}, createVehicleDto), { owner: user._id }));
        return await newVehicle.save();
    }
    findAll() {
        return this.vehicleModel.find();
    }
    async findByUser(user) {
        return await this.vehicleModel.find({ owner: user._id });
    }
    async sendNotice(vehicle, email) {
        await this.mailService.sendNotice(vehicle, email);
    }
    findOne(id) {
        return this.vehicleModel.findById(id);
    }
    update(id, updateVehicleDto) {
        return `This action updates a #${id} vehicle`;
    }
    remove(id) {
        return `This action removes a #${id} vehicle`;
    }
};
VehicleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(vehicle_schema_1.Vehicle.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mail_service_1.MailService])
], VehicleService);
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle.service.js.map