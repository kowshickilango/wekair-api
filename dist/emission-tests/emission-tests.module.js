"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmissionTestsModule = void 0;
const common_1 = require("@nestjs/common");
const emission_tests_service_1 = require("./emission-tests.service");
const emission_tests_controller_1 = require("./emission-tests.controller");
const emission_test_schema_1 = require("./emission-test.schema");
const mongoose_1 = require("@nestjs/mongoose");
let EmissionTestsModule = class EmissionTestsModule {
};
EmissionTestsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: emission_test_schema_1.EmissionTest.name, schema: emission_test_schema_1.EmissionTestSchema },
            ]),
        ],
        controllers: [emission_tests_controller_1.EmissionTestsController],
        providers: [emission_tests_service_1.EmissionTestsService],
    })
], EmissionTestsModule);
exports.EmissionTestsModule = EmissionTestsModule;
//# sourceMappingURL=emission-tests.module.js.map