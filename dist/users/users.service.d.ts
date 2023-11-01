import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './user.schema';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(userDto: UserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOneByEmail(email: string): Promise<User | undefined>;
    findOne(id: string): Promise<User>;
    findMe(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string, sid: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
