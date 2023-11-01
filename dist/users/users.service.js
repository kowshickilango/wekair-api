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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(userDto) {
        const user = await this.userModel
            .findOne({ email: userDto.email })
            .select('+password');
        if (user) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'Email already in use',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(userDto.password, salt);
        userDto.password = hash;
        const newuser = new this.userModel(userDto);
        return await newuser.save();
    }
    async findAll() {
        return await this.userModel.find();
    }
    async findOneByEmail(email) {
        return await this.userModel.findOne({ email: email }).select('+password');
    }
    async findOne(id) {
        return await this.userModel.findById(id);
    }
    async findMe(id) {
        return await this.userModel.findById(id);
    }
    async update(id, updateUserDto) {
        return await this.userModel.findByIdAndUpdate(id, updateUserDto);
    }
    async remove(id, sid) {
        if (id === sid) {
            return await this.userModel.findByIdAndRemove(id);
        }
        throw new common_1.HttpException({
            status: common_1.HttpStatus.UNAUTHORIZED,
            error: 'Your session does not match',
        }, common_1.HttpStatus.UNAUTHORIZED);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map