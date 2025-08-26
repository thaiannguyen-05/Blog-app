import { IsOptional, IsString, IsDateString, Length } from 'class-validator';

export class EditDetailDto {
    @IsOptional()
    @IsString()
    @Length(2, 50)
    name?: string;

    @IsOptional()
    @IsDateString()
    dateOfBirth?: string;
}