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
exports.EmissionTestsController = void 0;
const common_1 = require("@nestjs/common");
const emission_tests_service_1 = require("./emission-tests.service");
const emission_test_dto_1 = require("./dto/emission-test.dto");
const get_user_decorator_1 = require("../auth/decorators/get-user.decorator");
let EmissionTestsController = class EmissionTestsController {
    constructor(emissionTestsService) {
        this.emissionTestsService = emissionTestsService;
    }
    create(emissionTestDto, user) {
        return this.emissionTestsService.create(emissionTestDto, user);
    }
    findAll() {
        return this.emissionTestsService.findAll();
    }
    findByUser(user) {
        return this.emissionTestsService.findByUser(user._id);
    }
    findLatestHighEmitters(page, limit) {
        return this.emissionTestsService.findLatestHighEmittingVehicles(page, limit);
    }
    findOne(id) {
        return this.emissionTestsService.findOne(id);
    }
    findByVehilce(regNo) {
        return this.emissionTestsService.findByVehicle(regNo);
    }
    update(id, emissionTestDto) {
        return this.emissionTestsService.update(id, emissionTestDto);
    }
    remove(id) {
        return this.emissionTestsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [emission_test_dto_1.EmissionTestDto, Object]),
    __metadata("design:returntype", void 0)
], EmissionTestsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmissionTestsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('my'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmissionTestsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('high-emitters'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EmissionTestsController.prototype, "findLatestHighEmitters", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmissionTestsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('vehicle/:regNo'),
    __param(0, (0, common_1.Param)('regNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmissionTestsController.prototype, "findByVehilce", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, emission_test_dto_1.EmissionTestDto]),
    __metadata("design:returntype", void 0)
], EmissionTestsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmissionTestsController.prototype, "remove", null);
EmissionTestsController = __decorate([
    (0, common_1.Controller)('emission-tests'),
    __metadata("design:paramtypes", [emission_tests_service_1.EmissionTestsService])
], EmissionTestsController);
exports.EmissionTestsController = EmissionTestsController;
//# sourceMappingURL=emission-tests.controller.js.map