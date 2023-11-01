import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { User } from 'src/users/user.schema';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from '../jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    private configService;
    constructor(usersService: UsersService, configService: ConfigService);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
