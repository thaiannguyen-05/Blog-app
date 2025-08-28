import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
    @IsNotEmpty({ message: 'Old password is required.' })
    @IsString()
    @MinLength(6, { message: 'Old password must be at least 6 characters.' })
    @MaxLength(50, { message: 'Old password must be at most 50 characters.' })
    oldPassword: string;

    @IsNotEmpty({ message: 'New password is required.' })
    @IsString()
    @MinLength(6, { message: 'New password must be at least 6 characters.' })
    @MaxLength(50, { message: 'New password must be at most 50 characters.' })
    newPassword: string;
}