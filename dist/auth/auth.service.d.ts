import { UsersService } from '../users/users.service';
import { UserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/user.schema';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentailsDto } from './dto/auth-credentials.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    checkAvailabelUser(email: string): Promise<any>;
    signUp(userDto: UserDto): Promise<User>;
    signIn(authCredentailsDto: AuthCredentailsDto): Promise<{
        accessToken: string;
    }>;
}
