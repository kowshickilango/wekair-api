import { UserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/user.schema';
import { AuthService } from './auth.service';
import { AuthCredentailsDto } from './dto/auth-credentials.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(userDto: UserDto): Promise<User>;
    signIn(authCredentialsDto: AuthCredentailsDto): Promise<{
        accessToken: string;
    }>;
    validte(email: string): Promise<{
        email: string;
    }>;
}
