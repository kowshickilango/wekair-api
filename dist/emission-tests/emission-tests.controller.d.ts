import { EmissionTestsService } from './emission-tests.service';
import { EmissionTestDto } from './dto/emission-test.dto';
import { UserDocument } from 'src/users/user.schema';
export declare class EmissionTestsController {
    private readonly emissionTestsService;
    constructor(emissionTestsService: EmissionTestsService);
    create(emissionTestDto: EmissionTestDto, user: UserDocument): Promise<import("./emission-test.schema").EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("./emission-test.schema").EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findByUser(user: UserDocument): Promise<Omit<import("./emission-test.schema").EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findLatestHighEmitters(page: number, limit: number): Promise<{
        tests: Omit<import("./emission-test.schema").EmissionTest & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        totalCount: number;
    } | {
        tests: Omit<import("./emission-test.schema").EmissionTest & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        totalCount?: undefined;
    }>;
    findOne(id: string): Promise<import("./emission-test.schema").EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findByVehilce(regNo: string): Promise<any>;
    update(id: string, emissionTestDto: EmissionTestDto): Promise<import("./emission-test.schema").EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("./emission-test.schema").EmissionTest & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
