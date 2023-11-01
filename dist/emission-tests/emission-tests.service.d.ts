import { Model } from 'mongoose';
import { EmissionTestDto } from './dto/emission-test.dto';
import { EmissionTest, EmissionTestDocument } from './emission-test.schema';
import { UserDocument } from 'src/users/user.schema';
export declare class EmissionTestsService {
    private readonly emissionTestModel;
    constructor(emissionTestModel: Model<EmissionTestDocument>);
    create(emissionTestDto: EmissionTestDto, user: UserDocument): Promise<EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findByUser(user: UserDocument): Promise<Omit<EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findAll(): Promise<(EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findLatestHighEmittingVehicles(page?: number, limit?: number): Promise<{
        tests: Omit<EmissionTest & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        totalCount: number;
    } | {
        tests: Omit<EmissionTest & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        totalCount?: undefined;
    }>;
    findByVehicle(regNo: string): Promise<any>;
    findOne(id: string): Promise<EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, emissionTestDto: EmissionTestDto): Promise<EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
