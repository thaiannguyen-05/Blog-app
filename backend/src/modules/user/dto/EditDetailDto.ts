import { IsOptional, IsString, IsDateString, MinLength, MaxLength } from 'class-validator';

export class EditDetailDto {
    @IsOptional()
    @IsString()
    @MinLength(2, { message: 'Name must be at least 2 characters.' })
    @MaxLength(50, { message: 'Name must be at most 50 characters.' })
    name?: string;

    @IsOptional()
    @IsDateString({}, { message: 'Date of birth must be a valid date string.' })
    dateOfBirth?: string;
}