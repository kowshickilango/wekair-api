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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmissionTestSchema = exports.EmissionTest = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../users/user.schema");
const vehicle_schema_1 = require("../vehicle/vehicle.schema");
let EmissionTest = class EmissionTest {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", Boolean)
], EmissionTest.prototype, "catalyticConverter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], EmissionTest.prototype, "CO2", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], EmissionTest.prototype, "O2", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], EmissionTest.prototype, "airFilter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], EmissionTest.prototype, "otherIssue", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: vehicle_schema_1.Vehicle.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], EmissionTest.prototype, "vehicle", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: user_schema_1.User.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], EmissionTest.prototype, "owner", void 0);
EmissionTest = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], EmissionTest);
exports.EmissionTest = EmissionTest;
exports.EmissionTestSchema = mongoose_1.SchemaFactory.createForClass(EmissionTest);
//# sourceMappingURL=emission-test.schema.js.map