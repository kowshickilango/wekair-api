import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UserDocument } from './user.schema';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(userDto: UserDto): Promise<import("./user.schema").User>;
    findAll(): Promise<import("./user.schema").User[]>;
    findMe(user: UserDocument): Promise<import("./user.schema").User>;
    findOne(id: string): Promise<import("./user.schema").User>;
    update(id: string, userDto: UserDto): Promise<import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string, user: UserDocument): Promise<import("./user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
